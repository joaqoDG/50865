// index.js
import fs from "fs";
import antlr4 from "antlr4";
import TestSuiteLexer from "./generated/testsuiteLexer.js";
import TestSuiteParser from "./generated/testsuiteParser.js";
import CustomTestSuiteVisitor from "./CustomtestsuiteVisitor.js";
import printTokens from "./tablatokens.js";

async function main() {
  let input;
  try {
    input = fs.readFileSync("input.txt", "utf8");
  } catch (err) {
    console.error("No se pudo leer el archivo input.txt");
    return;
  }

  const chars = new antlr4.InputStream(input);
  const lexer = new TestSuiteLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);

  //tabla de tokens
   printTokens(tokens, lexer);



  //errores de sintaxsis
  const parser = new TestSuiteParser(tokens);
  parser.buildParseTrees = true;

  const tree = parser.suite();

  if (parser._syntaxErrors > 0) {
    console.error("❌ Se encontraron errores de sintaxis.");
    return;
  }

  // === Árbol Sintáctico ===
  const ruleNames = parser.ruleNames;
  const treeString = tree.toStringTree(ruleNames);
  console.log("=== Árbol de análisis sintáctico ===");
  console.log(treeString);
  console.log("===================================\n");

  const visitor = new CustomTestSuiteVisitor();
  visitor.visit(tree);

  console.log("\n✅ Entrada válida.\n");
  console.log("// Código generado:");
  console.log(visitor.output.join("\n"));
}

main();