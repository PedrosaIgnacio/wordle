/*
  Warnings:

  - You are about to drop the column `description` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `firebaseId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `hashtags` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `photo` on the `User` table. All the data in the column will be lost.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_uploadedById_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "description",
DROP COLUMN "firebaseId",
DROP COLUMN "hashtags",
DROP COLUMN "photo",
ADD COLUMN     "password" VARCHAR(25) NOT NULL;
