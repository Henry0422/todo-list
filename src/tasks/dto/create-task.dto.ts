import { Type } from "class-transformer";
import { IsDateString, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, MinDate, MinLength } from "class-validator";
import { Status } from "generated/prisma";

export class CreateTaskDto {
    @IsString()
    @MinLength(2)
    title: string;

    @IsString()
    @IsOptional()
    @MaxLength(300)
    description?: string;

    @IsEnum(Status)
    status: Status;

    @IsDateString()
    @Type(() => Date)
    @MinDate(new Date())
    dueDate: Date;

    createdAt: Date;
    updatedAt: Date;

    @IsInt()
    @IsNotEmpty()
    listId: number;
}
