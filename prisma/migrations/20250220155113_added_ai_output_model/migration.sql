-- CreateTable
CREATE TABLE "AiOutput" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "templateSlug" TEXT NOT NULL,
    "formData" TEXT NOT NULL,
    "aiResponse" TEXT,
    "category" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AiOutput_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AiOutput" ADD CONSTRAINT "AiOutput_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
