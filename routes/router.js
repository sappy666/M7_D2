import { Router } from "express";
import {
  createStudent,
  getStudent,
  getRut,
  updateStudent,
  deleteStudent,
} from "../controller/functions.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/add", async (req, res) => {
  try {
    const { nombre, rut, curso, nivel } = req.body;
    const result = await createStudent(nombre, rut, curso, nivel);
    console.log("Se agrego el estudiante");
    console.log(result);
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/consulta", async (req, res) => {
  try {
    const result = await getStudent();
    console.log("Estudiantes registrados: ", result.length);
    console.log(result);
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/rut", async (req, res) => {
  try {
    const { rut } = req.body;
    const result = await getRut(rut);
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});

router.put("/actualizar", async (req, res) => {
  try {
    const { nombre, rut, curso, nivel } = req.body;
    const result = await updateStudent(nombre, rut, curso, nivel);
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});

router.delete("/borrar", async (req, res) => {
  try {
    const { rut } = req.body;
    const result = await deleteStudent(rut);
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});
export default router;
