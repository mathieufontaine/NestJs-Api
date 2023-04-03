import { ProductsService } from './products.service';
import {
  Controller,
  Post,
  Body,
  Param,
  Get,
  Patch,
  Delete,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDescription: string,
    @Body('price') prodPrice: number
  ) {
    return await this.productsService.insertProduct(
      prodTitle,
      prodDescription,
      prodPrice
    );
  }

  @Get()
  async getAllproducts() {
    return await this.productsService.getProducts();
  }

  @Get(':id')
  async getPoduct(@Param('id') prodId: string) {
    return await this.productsService.getSingleProduct(prodId);
  }

  @Patch(':id')
  async updateProduct(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('description') prodDescription: string,
    @Body('price') prodPrice: number
  ) {
    await this.productsService.updateProduct(
      prodId,
      prodTitle,
      prodDescription,
      prodPrice
    );
    return null;
  }

  @Delete(':id')
  async removeProduct(@Param('id') prodId: string) {
    await this.productsService.deleteProduct(prodId);
    return null;
  }
}
