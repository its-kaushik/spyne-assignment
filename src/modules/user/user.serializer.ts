import { SerializerType } from '../../middlewares/serializer.middleware';

export const createUserSerializer: SerializerType = {
  select: ['-__v'],
};
