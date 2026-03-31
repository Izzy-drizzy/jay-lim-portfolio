export interface GalleryItem {
  type: 'image' | 'video';
  url: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  role: string;
  year: number;
  genre: string;
  synopsis: string;
  imageUrl: string;
  category: 'Film' | 'TV' | 'Theatre' | 'Commercial';
  gallery?: GalleryItem[];
}

export interface BTSContent {
  id: string;
  title: string;
  type: 'image' | 'video';
  url: string;
  anecdote: string;
}

export interface ActorInfo {
  name: string;
  title: string;
  location: string;
  bio: string;
  showreelUrl: string;
  socials: {
    instagram?: string;
    twitter?: string;
    facebook?: string;
    imdb?: string;
  };
}
