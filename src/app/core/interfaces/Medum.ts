import { PreviewImage } from './PreviewImage';

export interface Medum {
  alt: any;
  id: number;
  position: number;
  preview_image: PreviewImage;
  aspect_ratio: number;
  height: number;
  media_type: string;
  src: string;
  width: number;
}
