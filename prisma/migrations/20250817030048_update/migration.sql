-- AlterTable
ALTER TABLE "public"."Task" ADD COLUMN     "listId" INTEGER;

-- AddForeignKey
ALTER TABLE "public"."Task" ADD CONSTRAINT "Task_listId_fkey" FOREIGN KEY ("listId") REFERENCES "public"."List"("id") ON DELETE SET NULL ON UPDATE CASCADE;
