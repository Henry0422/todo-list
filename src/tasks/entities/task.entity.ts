import { $Enums, Task } from '@prisma/client';

export class TaskEntity implements Task {
    id: number;
    title: string;
    description: string | null;
    status: $Enums.Status;
    dueDate: Date;
    createdAt: Date;
    updatedAt: Date;
    listId: number | null;
}
