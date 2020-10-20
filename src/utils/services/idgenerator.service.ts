import { v4 } from 'uuid';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IdGeneratorService {
  generateRandomId() {
    return v4();
  }
}
