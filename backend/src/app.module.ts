import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './infrastructure/config/data.source.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'config.env',
      isGlobal: true,
    }),
    UserModule,
    TypeOrmModule.forRoot(dataSourceOptions),
  ],
})
export class AppModule {}
