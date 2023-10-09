/*
  Warnings:

  - You are about to alter the column `registeredAt` on the `user` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `lastLogin` on the `user` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `category` MODIFY `metaTitle` VARCHAR(100) NULL,
    MODIFY `slug` VARCHAR(100) NULL,
    MODIFY `content` TEXT NULL;

-- AlterTable
ALTER TABLE `post` MODIFY `metaTeitle` VARCHAR(100) NULL,
    MODIFY `slug` VARCHAR(100) NULL,
    MODIFY `summary` TINYTEXT NULL,
    MODIFY `published` TINYTEXT NULL,
    MODIFY `content` TEXT NULL;

-- AlterTable
ALTER TABLE `post_comment` MODIFY `published` TINYTEXT NULL,
    MODIFY `content` TEXT NULL;

-- AlterTable
ALTER TABLE `post_meta` MODIFY `key` VARCHAR(50) NULL,
    MODIFY `content` TEXT NULL;

-- AlterTable
ALTER TABLE `tag` MODIFY `metaTitle` VARCHAR(100) NULL,
    MODIFY `slug` VARCHAR(100) NULL,
    MODIFY `content` TEXT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `registeredAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `lastLogin` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
