import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { Event } from './entities/event.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Event[]> {
    return this.prisma.event.findMany();
  }

  async findById(id: string): Promise<Event> {
    const record = await this.prisma.event.findUnique({
      where: { id },
    });

    if (!record) {
      throw new NotFoundException(`Event ${id} not found`);
    }

    return record;
  }

  async findOne(id: string): Promise<Event> {
    return this.findById(id);
  }

  create(dto: CreateEventDto): Promise<Event> {
    const data: Event = { ...dto };

    return this.prisma.event.create({ data }).catch(this.handleError);
  }

  async update(id: string, dto: UpdateEventDto): Promise<Event> {
    await this.findById(id);
    const data: Partial<Event> = { ...dto };

    return this.prisma.event.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    await this.findById(id);
    await this.prisma.event.delete({ where: { id } });
  }

  handleError(error: Error): undefined {
    const errorLines = error.message?.split('\n');
    const lastErrorLine = errorLines[errorLines.length - 1]?.trim();
    throw new UnprocessableEntityException(
      lastErrorLine || 'Something went wrong with the delete operation.',
    );
  }
}
