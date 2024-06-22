import { Product } from '@/entities/product.entity'
import { IProductRepository } from '@/repositories/product.repository.interface'

export class UpdateProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async handler(product: Product) {
    return this.productRepository.update(product)
  }
}
