-- CreateTable
CREATE TABLE "Proffys" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "whatsApp" TEXT NOT NULL,
    "biografia" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Classes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "subject" TEXT NOT NULL,
    "cost" TEXT NOT NULL,
    "proffyId" INTEGER NOT NULL,
    CONSTRAINT "Classes_proffyId_fkey" FOREIGN KEY ("proffyId") REFERENCES "Proffys" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Schedule" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "weekday" TEXT NOT NULL,
    "time_from" TEXT NOT NULL,
    "time_to" TEXT NOT NULL,
    "proffyId" INTEGER NOT NULL,
    CONSTRAINT "Schedule_proffyId_fkey" FOREIGN KEY ("proffyId") REFERENCES "Proffys" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Conections" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "conection" INTEGER NOT NULL
);
