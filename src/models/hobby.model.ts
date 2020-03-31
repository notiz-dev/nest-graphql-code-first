import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from './user.model';

@ObjectType()
export class Hobby {
  @Field((type) => Int)
  id: number;

  name: string;

  user: User;
}
