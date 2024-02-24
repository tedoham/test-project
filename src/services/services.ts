// services.ts
import axios from 'axios';

export type BannerImage = {
    mainBannerId: number;
    title: string;
    sort: number;
    pcImageUrl: string;
    mobileImageUrl: string;
    linkUrl: string;
    startDate: string;
    endDate: string;
    creator: string;
    updater: string;
    deleter: string | null;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
};

export type ShortcutImage = {
    mainShortcutId: number;
    title: string;
    sort: number;
    imageUrl: string;
    linkUrl: string;
    creator: string;
    updater: string;
    deleter: string | null;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
};

export type Media = {
    seq: number;
    type: string;
    uri: string;
    mimeType: string;
    deviceType: string | null;
  };
  
export type Publication = {
    id: number;
    title: string;
    media: Media[];
    // ... include other properties as needed
  };
  
export type CollectionItem = {
    id: number;
    type: string; // e.g., "SINGLE"
    viewType: string; // e.g., "TILE"
    title: string;
    subtitle: string;
    items: {
      publication: Publication;
    }[];
    // ... include other properties as needed
  };

const getMainBannerImages = async (): Promise<BannerImage[]> => {
  const response = await axios.get<BannerImage[]>('https://api.testvalley.kr/main-banner/all');
  return response.data;
};

const getMainShortcutImages = async (): Promise<ShortcutImage[]> => {
  const response = await axios.get<ShortcutImage[]>('https://api.testvalley.kr/main-shortcut/all');
  return response.data;
};

const getFilteredCollections = async (): Promise<CollectionItem[]> => {
    const response = await axios.get<{ items: CollectionItem[] }>('https://api.testvalley.kr/collections?prearrangedDiscount');
  
    // Assuming the response.data itself is the array of collections; adjust according to your actual API response
    const filteredItems = response.data.items.filter((item: CollectionItem) => item.type === 'SINGLE' && item.viewType === 'TILE');
    return filteredItems;
};

export { getMainBannerImages, getMainShortcutImages, getFilteredCollections };
