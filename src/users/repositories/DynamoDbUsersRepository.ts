import * as AWS from 'aws-sdk';
import { Inject, Injectable } from '@nestjs/common';
import { DocumentClient } from 'aws-sdk/lib/dynamodb/document_client';
import { User } from '../model/User';
import { UsersRepository } from './UsersRepository';

@Injectable()
export class DynamoDbUsersRepository implements UsersRepository {
  private usersTable: string;
  private client: DocumentClient;

  constructor(@Inject('UsersTable') usersTable: string) {
    this.usersTable = usersTable;
    this.client = new AWS.DynamoDB.DocumentClient();
  }

  async getUsers(): Promise<User[]> {
    const result = await this.client.scan({ TableName: this.usersTable }).promise();
    return result.Items as User[];
  }
}
