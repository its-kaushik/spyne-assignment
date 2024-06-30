import { SerializerType } from '../../middlewares/serializer.middleware';

export const createDiscussionSerializer: SerializerType = {
  payloadTransform(payload, tokenPayload) {
    payload.user = tokenPayload.userId;

    return payload;
  },
};
