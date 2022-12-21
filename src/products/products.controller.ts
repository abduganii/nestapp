import { Body, Controller, Delete, Get, Param, Post, Put, Redirect, Req, Res } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';
import { Product } from './schemas/products.schema';

@Controller('products')
export class ProductsController {

    constructor(readonly productsService: ProductsService) { }

    // @Get()
    // @Redirect('url',301)
    // getAll(@Req() req: Request, @Res() res: Response): string {
    //     return "getAll"
    // }

    @Get()
    getAll(): Promise<Product[]> {
        return this.productsService.getAll()
    }
    @Get(':id')
    getOne(@Param('id') id: string) {
        return this.productsService.getById(id)
    }

    @Post()
    create(@Body() createProductDto: CreateProductDto): Promise<Product> {
        return this.productsService.create(createProductDto)
    }

    @Put(':id')
    update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string): Promise<Product> {
        return this.productsService.update(id, updateProductDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<Product> {
        return this.productsService.remove(id)
    }
}
