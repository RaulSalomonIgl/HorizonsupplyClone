export interface Review {
  author: string;
  avatarUrl: string;
  joinDate: string; // Fecha de registro del autor
  reviewDate: string; // Fecha de la reseña
  rating: number;
  title: string;
  content: string;
  helpfulCount: number; // Número de personas que marcaron la reseña como útil
  isHelpful: boolean; // Si la reseña fue marcada como útil por el usuario actual
  reportLink: string;
}
