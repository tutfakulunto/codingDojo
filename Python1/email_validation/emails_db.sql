-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema email_validation
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema email_validation
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `email_validation` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `email_validation` ;

-- -----------------------------------------------------
-- Table `email_validation`.`emails`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `email_validation`.`emails` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(100) NULL,
  `created_at` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;