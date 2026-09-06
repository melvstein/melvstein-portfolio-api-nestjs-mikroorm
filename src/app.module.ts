import { Module } from '@nestjs/common';
import { z } from 'zod';
import { Environment } from './common/enums/environment.enum.js';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import databaseConfig from './config/database.config.js';
import applicationConfig from './config/application.config.js';
import { ConfigModule } from '@nestjs/config';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { RoleModule } from './modules/role/role.module.js';
import mikroOrmConfig from '../mikro-orm.config.js';

const validationSchema = z.object({
  APP_NAME: z.string().trim().min(1, 'APP_NAME is required'),
  NODE_ENV: z.enum(Environment),
  PORT: z.coerce.number(),
});

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema,
      envFilePath:
        '.env' + (process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : ''),
      isGlobal: true,
      load: [applicationConfig, databaseConfig],
      expandVariables: true,
      // cache: true,
    }),
    MikroOrmModule.forRoot(mikroOrmConfig),
    RoleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
