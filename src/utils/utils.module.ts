import { Global, Module } from '@nestjs/common';
import { IdGeneratorService } from './services/idgenerator.service';

@Global()
@Module({
  providers: [IdGeneratorService],
  exports: [IdGeneratorService],
})
export class UtilsModule {}
