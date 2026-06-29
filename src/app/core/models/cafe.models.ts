export interface MenuItem {
  name: string;
  description: string;
  price: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

export interface HoursEntry {
  day: string;
  time: string;
}

export interface MoodCard {
  time: string;
  title: string;
  description: string;
  accent?: boolean;
}

export interface GalleryImage {
  url: string;
  alt: string;
  tall?: boolean;
  wide?: boolean;
}

export interface ContactInfo {
  address: string;
  addressLine2: string;
  phone: string;
  phoneHref: string;
  email: string;
  mapsUrl: string;
  mapEmbed: string;
}
