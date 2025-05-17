try {
  const codigo = fs.readFileSync(ruta, "utf8");

  console.log("🔍 Ejecutando código generado en JavaScript:\n");
  console.log("------ Código ------");
  console.log(codigo);
  console.log("--------------------\n");

  console.log("🚀 Resultado de la ejecución:");
  eval(codigo); // <-- esto ejecuta el código generado

} catch (err) {
  console.error("❌ No se pudo ejecutar el archivo:", err.message);
}