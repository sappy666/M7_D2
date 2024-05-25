import pool from "../model/config.js";

const createStudent = async (nombre, rut, curso, nivel) => {
  try {
    const sql = {
      text: "INSERT INTO estudiantes (nombre, rut, curso, nivel) VALUES ($1, $2, $3, $4) RETURNING *",
      values: [nombre, rut, curso, nivel],
      rowMode: "array",
    };
    const result = await pool.query(sql);
    return result.rows;
  } catch (err) {
    console.error(err.message, "Codigo: ", err.code);
  }
};

const getStudent = async () => {
  try {
    const sql = {
      text: "SELECT * FROM estudiantes",
      rowMode: "array",
    };
    const result = await pool.query(sql);
    return result.rows;
  } catch (error) {
    console.log(error.message, "Codigo: ", error.code);
  }
};

const getRut = async (rut) => {
  try {
    const sql = {
      text: "SELECT * FROM estudiantes WHERE rut = $1",
      values: [rut],
      rowMode: "array",
    };
    const result = await pool.query(sql);
    return result.rows;
  } catch (error) {
    console.log(error.message, "Codigo: ", error.code);
  }
};

const updateStudent = async (nombre, rut, curso, nivel) => {
  try {
    const sql = {
      text: "UPDATE estudiantes SET nombre = $1, rut = $2, curso = $3, nivel = $4 WHERE rut = $2 RETURNING *",
      values: [nombre, rut, curso, nivel],
      rowMode: "array",
    };
    const result = await pool.query(sql);
    return result.rows;
  } catch (error) {
    console.log(error.message, "Codigo: ", error.code);
  }
};

const deleteStudent = async (rut) => {
  try {
    const sql = {
      text: "DELETE FROM estudiantes WHERE rut = $1 RETURNING *",
      values: [rut],
      rowMode: "array",
    };
    const result = await pool.query(sql);
    return result.rows;
  } catch (error) {
    console.log(error.message, "Codigo: ", error.code);
  }
};

export { createStudent, getStudent, getRut, updateStudent, deleteStudent };
