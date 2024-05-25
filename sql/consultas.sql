-- Crear DB
CREATE DATABASE desafio_always_music;

-- Crear Tabla
CREATE TABLE estudiantes (
  Nombre VARCHAR(50),
  Rut VARCHAR(12) UNIQUE NOT NULL,
  Curso VARCHAR(50),
  Nivel VARCHAR(50));

  