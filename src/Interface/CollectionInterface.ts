export interface FeaturedAsset {
  source: string;
  height: number;
  width: number;
  name: string;
}

export interface CollectionItem {
  featuredAsset: FeaturedAsset;
  name: string;
  slug: string;
  id: string;
}

export interface CollectionsData {
  collections: {
    items: CollectionItem[];
  };
}
