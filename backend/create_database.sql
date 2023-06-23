-- DROP DATABASE IF EXISTS StromDaten; 
-- CREATE DATABASE IF NOT EXISTS StromDaten;

-- USE StromDaten;

-- CREATE TABLE IF NOT EXISTS BraunkohleErzeugung (
-- Timestamp_Unix BIGINT NOT NULL PRIMARY KEY,
-- Menge INT);

-- CREATE TABLE IF NOT EXISTS KernEnergieErzeugung (
-- Timestamp_Unix BIGINT NOT NULL PRIMARY KEY,
-- Menge INT);

-- CREATE TABLE IF NOT EXISTS OffshoreWindErzeugung(
-- Timestamp_Unix BIGINT NOT NULL PRIMARY KEY,
-- Menge INT);

-- CREATE TABLE IF NOT EXISTS WasserkraftErzeugung (
-- Timestamp_Unix BIGINT NOT NULL PRIMARY KEY,
-- Menge INT);

-- CREATE TABLE IF NOT EXISTS Erzeugung_Sonstige_Konventionell (
-- Timestamp_Unix BIGINT NOT NULL PRIMARY KEY,
-- Menge INT);

-- CREATE TABLE IF NOT EXISTS Erzeugung_Sonstige_Erneuerbar (
-- Timestamp_Unix BIGINT NOT NULL PRIMARY KEY,
-- Menge INT);

-- CREATE TABLE IF NOT EXISTS BiomasseErzeugung (
-- Timestamp_Unix BIGINT NOT NULL PRIMARY KEY,
-- Menge INT);

-- CREATE TABLE IF NOT EXISTS OnshoreWindErzeugung (
-- Timestamp_Unix BIGINT NOT NULL PRIMARY KEY,
-- Menge INT);

-- CREATE TABLE IF NOT EXISTS PhotovoltaikErzeugung (
-- Timestamp_Unix BIGINT NOT NULL PRIMARY KEY,
-- Menge INT);

-- CREATE TABLE IF NOT EXISTS SteinkohleErzeugung (
-- Timestamp_Unix BIGINT NOT NULL PRIMARY KEY,
-- Menge INT);

-- CREATE TABLE IF NOT EXISTS PumpspeicherErzeugung (
-- Timestamp_Unix BIGINT NOT NULL PRIMARY KEY,
-- Menge INT);

-- CREATE TABLE IF NOT EXISTS ErdgasErzeugung (
-- Timestamp_Unix BIGINT NOT NULL PRIMARY KEY,
-- Menge INT);

-- CREATE TABLE IF NOT EXISTS Verbrauch_Gesamt (
-- Timestamp_Unix BIGINT NOT NULL PRIMARY KEY,
-- Menge INT);

-- CREATE TABLE IF NOT EXISTS Verbrauch_Pumpspeicher (
-- Timestamp_Unix BIGINT NOT NULL PRIMARY KEY,
-- Menge INT);
DROP TABLE IF EXISTS StromDaten;
CREATE TABLE IF NOT EXISTS StromDaten (
    ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    Timestamp_Unix BIGINT,
    BraunkohleErzeugung INT,
    KernenergieErzeugung INT,
    OffshoreWindErzeugung INT,
    WasserkraftErzeugung INT,
    Erzeugung_Sonstige_Konventionell INT,
    Erzeugung_Sonstige_Erneuerbar INT,
    BiomasseErzeugung INT,
    OnshoreWindErzeugung INT,
    PhotovoltaikErzeugung INT,
    SteinkohleErzeugung INT,
    PumpspeicherErzeugung INT,
    ErdgasErzeugung INT,
    Verbrauch_Gesamt INT,
    Verbrauch_Pumpspeicher INT
);