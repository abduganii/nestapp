import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';


@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot('mongodb+srv://Abduganiy:rmFMzmMajqOVdFSC@cluster0.18iey.mongodb.net/n11?retryWrites=true&w=majority')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }


