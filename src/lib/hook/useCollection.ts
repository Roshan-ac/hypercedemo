import { CollectionsData } from "@/types/CollectionInterface";
import client from "@/lib/gaphqlClients";

export const UsefetchCollection = async ({ pageParam = 0 }) => {
  const query = `
    query collectionList($options: CollectionListOptions) {
      collections(options: $options) {
        items {
          featuredAsset {
            source
            height
            width
            name
          }
          name
          id
        }
      }
    }
  `;
  const variables = { options: { skip: pageParam * 4, take: 4 } };
  const data: CollectionsData = await client.request(query, variables);
  return {
    items: data.collections.items,
    nextPage: pageParam + 1,
    hasMore: data.collections.items.length === 4,
  };
};
