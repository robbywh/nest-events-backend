import { PartialType } from '@nestjs/mapped-types';
import { CreateEventDto } from './create-event.dto';

// PartialType be marked optional
export class UpdateEventDto extends PartialType(CreateEventDto) {}
