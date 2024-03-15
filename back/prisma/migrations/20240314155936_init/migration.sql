-- CreateTable
CREATE TABLE "Inscription" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "section" TEXT NOT NULL,
    "option" TEXT NOT NULL,
    "classesollicite" TEXT NOT NULL,
    "ecoleprovenance" TEXT NOT NULL,
    "classeprovenance" TEXT NOT NULL,
    "pourcentage" TEXT NOT NULL,

    CONSTRAINT "Inscription_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Inscription_genre_key" ON "Inscription"("genre");
