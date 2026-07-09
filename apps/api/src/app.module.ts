import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { BookingsModule } from './bookings/bookings.module';
import { EquipmentModule } from './equipment/equipment.module';

@Module({
  imports: [PrismaModule, BookingsModule, EquipmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}