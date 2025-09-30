export interface CategoryItem {
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
  slug: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormProps {
  onSubmit: (values: ContactFormValues) => void;
}

export interface FeaturedProduct {
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
}

export interface Product {
  id: string | number;
  name: string;
  price: number;
  image: string;
}