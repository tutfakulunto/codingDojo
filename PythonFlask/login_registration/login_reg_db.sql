-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema login_reg_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema login_reg_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `login_reg_db` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `login_reg_db` ;

-- -----------------------------------------------------
-- Table `login_reg_db`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `login_reg_db`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `pw_hash` VARCHAR(255) NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;