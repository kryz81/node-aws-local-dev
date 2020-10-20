import { ConfigService } from '@nestjs/config';
import * as AWS from 'aws-sdk';
import { Injectable } from '@nestjs/common';
import { DocumentClient } from 'aws-sdk/lib/dynamodb/document_client';
import { IdGeneratorService } from '../../utils/services/idgenerator.service';
import { User } from '../model/User';
import { UsersRepository } from './UsersRepository';

@Injectable()
export class DynamoDbUsersRepository implements UsersRepository {
  private usersTable: string;
  private client: DocumentClient;

  constructor(private readonly idGeneratorService: IdGeneratorService, private readonly configService: ConfigService) {
    this.usersTable = `${this.configService.get<string>('DATA_NAMESPACE')}_users`;
    this.client = new AWS.DynamoDB.DocumentClient({ endpoint: this.configService.get<string>('AWS_ENDPOINT_URL') });
  }

  async getUsers(): Promise<User[]> {
    const result = await this.client.scan({ TableName: this.usersTable }).promise();
    return result.Items as User[];
  }

  async addUser(user: User) {
    await this.client
      .put({ TableName: this.usersTable, Item: { id: this.idGeneratorService.generateRandomId(), ...user } })
      .promise();
  }
}
