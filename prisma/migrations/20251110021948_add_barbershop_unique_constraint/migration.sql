/*
  Warnings:

  - A unique constraint covering the columns `[barbershopId,name]` on the table `BarbershopService` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "BarbershopService_barbershopId_name_key" ON "BarbershopService"("barbershopId", "name");
