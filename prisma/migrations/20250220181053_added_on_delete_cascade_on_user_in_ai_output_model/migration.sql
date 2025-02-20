-- DropForeignKey
ALTER TABLE "AiOutput" DROP CONSTRAINT "AiOutput_userId_fkey";

-- AddForeignKey
ALTER TABLE "AiOutput" ADD CONSTRAINT "AiOutput_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
