/*
  Warnings:

  - A unique constraint covering the columns `[name,address]` on the table `Barbershop` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Barbershop_name_address_key" ON "Barbershop"("name", "address");
