// CustomTestSuiteVisitor.js
import TestSuiteVisitor from "./generated/testsuiteVisitor.js";

export default class CustomTestSuiteVisitor extends TestSuiteVisitor {
  constructor() {
    super();
    this.variables = new Map();
    this.output = [];
  }

  visitSuite(ctx) {
    return ctx.prueba().map(p => this.visit(p)).join("\n");
  }

  visitPrueba(ctx) {
    const nombre = ctx.TEXTO().getText();
    this.output.push(`// ${nombre}`);
    const pasos = ctx.paso().map(p => this.visit(p)).join("\n");
    return pasos;
  }

  visitPaso(ctx) {
    const tipo = ctx.children[0].getText(); // dado / cuando / entonces
    const objeto = this.visit(ctx.objeto());
    const estado = ctx.estado().getText();
    const valores = [this.visit(ctx.valor(0)), ...ctx.valor().slice(1).map(v => this.visit(v))];

    let js = "";

    if (tipo === "dado") {
      js = `${objeto} = ${valores[0]};`;
    } else if (tipo === "cuando") {
      js = `if (${objeto} === ${valores[0]}) {`;
    } else if (tipo === "entonces") {
      const conds = valores.map(v => `${objeto} === ${v}`).join(" && ");
      js = `${conds} ? console.log("✅ Prueba pasada") : console.error("❌ Fallo");`;
      js += "\n}";
    }

    this.output.push(js);
    return js;
  }

  visitObjeto(ctx) {
    return `${ctx.IDENTIFICADOR(0).getText()}.${ctx.IDENTIFICADOR(1).getText()}`;
  }

  visitValorTexto(ctx) {
    return ctx.TEXTO().getText();
  }

  visitValorNumero(ctx) {
    return ctx.NUMERO().getText();
  }

  visitValorBooleano(ctx) {
    return ctx.BOOLEANO().getText() === "verdadero" ? "true" : "false";
  }

  visitValorVariable(ctx) {
    return ctx.variable().getText().replace("$", "");
  }

  visitValorLista(ctx) {
    const valores = ctx.lista().valor().map(v => this.visit(v));
    return `[${valores.join(", ")}]`;
  }
}
