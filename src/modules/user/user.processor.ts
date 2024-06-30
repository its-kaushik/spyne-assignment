import { BaseProcessor } from '../../common/base.processor';
import { NOT_FOUND, INVALID_OTP } from '../../constants/error';
import { customError, getJWT, setOtp, validateOtp } from '../../utils';
import { User } from './user.entity';
import { UserDocument } from './user.interface';

export default class UserProcessor extends BaseProcessor {
  protected getEntity() {
    return User;
  }

  requestOtp = async (email: string) => {
    const user: UserDocument = await this.repo.findOne({
      email,
    });

    if (!user) {
      throw customError(NOT_FOUND);
    }

    return setOtp(email);
  };

  login = async (email: string, otp: string) => {
    const user: UserDocument = await this.repo.findOne({
      email,
    });
    if (!user) {
      throw customError(NOT_FOUND);
    }

    const isValid = await validateOtp(email, otp);
    if (!isValid) {
      throw customError(INVALID_OTP);
    }

    const token = await getJWT({
      email: user.email,
      _id: user._id,
    });

    return token;
  };
}
