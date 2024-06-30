import { SerializerType } from '../../middlewares/serializer.middleware';

export const createLikeSerializer: SerializerType = {
  payloadTransform(payload, tokenPayload) {
    payload.user = tokenPayload.userId;
    return payload;
  },
};