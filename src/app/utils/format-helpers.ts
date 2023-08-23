import { ProductDto } from "@shared/interfaces/product";

export const formatProductDto = (product: ProductDto) => {
  const {
    id,
    title,
    price,
    description,
    category,
    image,
    rating,
  } = product;

  return {
    id,
    title,
    price,
    description,
    category,
    image,
    rating,
  };
}

export const formatProductDtoList = (products: ProductDto[]) => {
  return products.map(formatProductDto);
}