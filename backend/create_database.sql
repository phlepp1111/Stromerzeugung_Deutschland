DROP DATABASE IF EXISTS StromDaten; 
CREATE DATABASE IF NOT EXISTS StromDaten;

USE StromDaten;

CREATE TABLE IF NOT EXISTS BraunkohleErzeugung (
Timestamp_Unix BIGINT NOT NULL PRIMARY KEY,
Menge INT);

CREATE TABLE IF NOT EXISTS KernEnergieErzeugung (
Timestamp_Unix BIGINT NOT NULL PRIMARY KEY,
Menge INT);

CREATE TABLE IF NOT EXISTS OffshoreWindErzeugung(
Timestamp_Unix BIGINT NOT NULL PRIMARY KEY,
Menge INT);

CREATE TABLE IF NOT EXISTS WasserkraftErzeugung (
Timestamp_Unix BIGINT NOT NULL PRIMARY KEY,
Menge INT);

CREATE TABLE IF NOT EXISTS Erzeugung_Sonstige_Konventionell (
Timestamp_Unix BIGINT NOT NULL PRIMARY KEY,
Menge INT);

CREATE TABLE IF NOT EXISTS Erzeugung_Sonstige_Erneuerbar (
Timestamp_Unix BIGINT NOT NULL PRIMARY KEY,
Menge INT);

CREATE TABLE IF NOT EXISTS BiomasseErzeugung (
Timestamp_Unix BIGINT NOT NULL PRIMARY KEY,
Menge INT);

CREATE TABLE IF NOT EXISTS OnshoreWindErzeugung (
Timestamp_Unix BIGINT NOT NULL PRIMARY KEY,
Menge INT);

CREATE TABLE IF NOT EXISTS PhotovoltaikErzeugung (
Timestamp_Unix BIGINT NOT NULL PRIMARY KEY,
Menge INT);

CREATE TABLE IF NOT EXISTS SteinkohleErzeugung (
Timestamp_Unix BIGINT NOT NULL PRIMARY KEY,
Menge INT);

CREATE TABLE IF NOT EXISTS PumpspeicherErzeugung (
Timestamp_Unix BIGINT NOT NULL PRIMARY KEY,
Menge INT);

CREATE TABLE IF NOT EXISTS ErdgasErzeugung (
Timestamp_Unix BIGINT NOT NULL PRIMARY KEY,
Menge INT);

CREATE TABLE IF NOT EXISTS Verbrauch_Gesamt (
Timestamp_Unix BIGINT NOT NULL PRIMARY KEY,
Menge INT);

CREATE TABLE IF NOT EXISTS Verbrauch_Pumpspeicher (
Timestamp_Unix BIGINT NOT NULL PRIMARY KEY,
Menge INT);