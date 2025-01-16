import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products') // Base route for the controller
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get() // Handles GET requests to '/products'
  async getAllProducts() {
      console.log('Fetching all products');
    return this.productService.getAllProducts();
  }
}
