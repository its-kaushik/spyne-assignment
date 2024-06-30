import { SerializerType } from '../../middlewares/serializer.middleware';

export const createCommentSerializer: SerializerType = {
  payloadTransform(payload, tokenPayload) {
    payload.user = tokenPayload.userId;
    return payload;
  },
};
