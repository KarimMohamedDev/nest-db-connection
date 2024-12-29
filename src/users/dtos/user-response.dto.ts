import { Exclude, Expose } from 'class-transformer';

export class UserResponseDto {
  id: number;

  username: string;

  email: string;

  @Expose({ name: 'Country' })
  country: string;

  @Exclude()
  password: string;

  constructor(partial: Partial<UserResponseDto>) {
    Object.assign(this, partial);
  }
}
