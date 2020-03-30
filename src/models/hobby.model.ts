import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from './user.model';

@ObjectType()
export class Hobby {
  @Field((type) => Int)
  id: number;

  @Field((type) => String)
  name: string;

  @Field((type) => User, { nullable: true })
  user: User;
}
