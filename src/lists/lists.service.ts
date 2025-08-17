import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from 'generated/prisma';

@Injectable()
export class ListsService {
  constructor(private prisma: PrismaService) {}

  create(createListDto: Prisma.ListCreateInput) {
    return this.prisma.list.create({
      data: createListDto,
    });
  }

  findAll() {
    return this.prisma.list.findMany();
  }

  findOne(id: Prisma.ListWhereUniqueInput) {
    return this.prisma.list.findUnique({
      where: id
    });
  }

  update(id: Prisma.ListWhereUniqueInput, updateListDto: Prisma.ListUpdateInput) {
    return this.prisma.list.update({
      data: updateListDto,
      where: id
    });
  }

  remove(id: Prisma.ListWhereUniqueInput) {
    return this.prisma.list.delete({
      where: id
    });
  }
}
