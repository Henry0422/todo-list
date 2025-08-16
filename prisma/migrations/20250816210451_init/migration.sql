-- CreateEnum
CREATE TYPE "public"."Status" AS ENUM ('PENDING', 'IN_PROGRESS', 'COMPLETED');

-- CreateTable
CREATE TABLE "public"."List" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "List_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Task" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "status" "public"."Status" NOT NULL DEFAULT 'PENDING',
    "dueDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
