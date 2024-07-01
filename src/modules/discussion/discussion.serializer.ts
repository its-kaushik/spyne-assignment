import { SerializerType } from '../../middlewares/serializer.middleware';

export const createDiscussionSerializer: SerializerType = {
  payloadTransform(payload, tokenPayload) {
    payload.user = tokenPayload.userId;

    return payload;
  },
};

export const getAllDiscussionsSerializer: SerializerType = {
  queryTransform(query) {
    if (query.text) {
      const { text: searchText } = query;
      query.text = {
        $regex: searchText,
        $options: 'i',
      };
    }

    if (query.hashtags) {
      const hashTagsArray = query.hashtags.split(',');
      query.hashtags = {
        $in: hashTagsArray,
      };
    }

    return query;
  },
};

export const getDiscussionViewCountSerializer: SerializerType = {
  select: ['views'],
};
