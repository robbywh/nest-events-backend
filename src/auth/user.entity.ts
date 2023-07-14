import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Profile } from './profile.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  username: string;

  password: string;

  email: string;

  firstName: string;

  lastName: string;

  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile;
}
