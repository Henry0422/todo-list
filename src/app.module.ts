import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { ListsModule } from './lists/lists.module';

@Module({
  imports: [TasksModule, ListsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
