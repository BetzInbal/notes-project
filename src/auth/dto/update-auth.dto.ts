import { PartialType } from '@nestjs/mapped-types';
import { login } from './login.dto';

export class UpdateAuthDto extends PartialType(login) { }
