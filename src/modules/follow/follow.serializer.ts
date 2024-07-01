import { SerializerType } from '../../middlewares/serializer.middleware';

export const createFollowSerializer: SerializerType = {
  payloadTransform(payload, tokenPayload) {
    payload.follower = tokenPayload.userId;
    return payload;
  },
};
