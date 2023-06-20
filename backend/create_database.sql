CREATE DATABASE IF NOT EXISTS StromDaten;

USE StromDaten;

CREATE TABLE IF NOT EXISTS BraunkohleErzeugung (
ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
Timestamp_Unix BIGINT,
Menge INT);

CREATE TABLE IF NOT EXISTS KernEnergieErzeugung (
ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
Timestamp_Unix BIGINT,
Datum_Zeit VARCHAR(100),
Menge INT);

CREATE TABLE IF NOT EXISTS OffshoreWindErzeugung(
ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
Timestamp_Unix BIGINT,
Menge INT);

CREATE TABLE IF NOT EXISTS WasserkraftErzeugung (
ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
Timestamp_Unix BIGINT,
Menge INT);

CREATE TABLE IF NOT EXISTS Erzeugung_Sonstige_Konventionell (
ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
Timestamp_Unix BIGINT,
Menge INT);

CREATE TABLE IF NOT EXISTS Erzeugung_Sonstige_Erneuerbar (
ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
Timestamp_Unix BIGINT,
Menge INT);

CREATE TABLE IF NOT EXISTS BiomasseErzeugung (
ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
Timestamp_Unix BIGINT,
Menge INT);

CREATE TABLE IF NOT EXISTS OnshoreWindErzeugung (
ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
Timestamp_Unix BIGINT,
Menge INT);

CREATE TABLE IF NOT EXISTS PhotovoltaikErzeugung (
ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
Timestamp_Unix BIGINT,
Menge INT);

CREATE TABLE IF NOT EXISTS SteinkohleErzeugung (
ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
Timestamp_Unix BIGINT,
Menge INT);

CREATE TABLE IF NOT EXISTS PumpspeicherErzeugung (
ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
Timestamp_Unix BIGINT,
Menge INT);

CREATE TABLE IF NOT EXISTS ErdgasErzeugung (
ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
Timestamp_Unix BIGINT,
Menge INT);

CREATE TABLE IF NOT EXISTS Verbrauch_Gesamt (
ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
Timestamp_Unix BIGINT,
Menge INT);

CREATE TABLE IF NOT EXISTS Verbrauch_Pumpspeicher (
ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
Timestamp_Unix BIGINT,
Menge INT);