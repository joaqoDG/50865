// Generated from c://Users//meuge//ssl-antlr-calculator//testsuite.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import testsuiteListener from './testsuiteListener.js';
import testsuiteVisitor from './testsuiteVisitor.js';

const serializedATN = [4,1,21,81,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,4,0,19,8,0,11,0,12,0,20,1,0,1,0,1,1,1,1,
1,1,3,1,28,8,1,1,1,1,1,5,1,32,8,1,10,1,12,1,35,9,1,1,1,1,1,1,2,1,2,1,2,1,
2,1,2,1,2,5,2,45,8,2,10,2,12,2,48,9,2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,
5,1,5,1,5,1,5,1,5,3,5,63,8,5,1,6,1,6,1,6,1,7,1,7,1,7,1,7,5,7,72,8,7,10,7,
12,7,75,9,7,3,7,77,8,7,1,7,1,7,1,7,0,0,8,0,2,4,6,8,10,12,14,0,1,1,0,6,10,
83,0,18,1,0,0,0,2,24,1,0,0,0,4,38,1,0,0,0,6,51,1,0,0,0,8,55,1,0,0,0,10,62,
1,0,0,0,12,64,1,0,0,0,14,67,1,0,0,0,16,19,5,20,0,0,17,19,3,2,1,0,18,16,1,
0,0,0,18,17,1,0,0,0,19,20,1,0,0,0,20,18,1,0,0,0,20,21,1,0,0,0,21,22,1,0,
0,0,22,23,5,0,0,1,23,1,1,0,0,0,24,25,5,1,0,0,25,27,5,19,0,0,26,28,5,20,0,
0,27,26,1,0,0,0,27,28,1,0,0,0,28,29,1,0,0,0,29,33,5,2,0,0,30,32,3,4,2,0,
31,30,1,0,0,0,32,35,1,0,0,0,33,31,1,0,0,0,33,34,1,0,0,0,34,36,1,0,0,0,35,
33,1,0,0,0,36,37,5,3,0,0,37,3,1,0,0,0,38,39,5,11,0,0,39,40,3,6,3,0,40,41,
3,8,4,0,41,46,3,10,5,0,42,43,5,4,0,0,43,45,3,10,5,0,44,42,1,0,0,0,45,48,
1,0,0,0,46,44,1,0,0,0,46,47,1,0,0,0,47,49,1,0,0,0,48,46,1,0,0,0,49,50,5,
20,0,0,50,5,1,0,0,0,51,52,5,17,0,0,52,53,5,5,0,0,53,54,5,17,0,0,54,7,1,0,
0,0,55,56,7,0,0,0,56,9,1,0,0,0,57,63,5,19,0,0,58,63,5,18,0,0,59,63,5,12,
0,0,60,63,3,12,6,0,61,63,3,14,7,0,62,57,1,0,0,0,62,58,1,0,0,0,62,59,1,0,
0,0,62,60,1,0,0,0,62,61,1,0,0,0,63,11,1,0,0,0,64,65,5,13,0,0,65,66,5,17,
0,0,66,13,1,0,0,0,67,76,5,15,0,0,68,73,3,10,5,0,69,70,5,14,0,0,70,72,3,10,
5,0,71,69,1,0,0,0,72,75,1,0,0,0,73,71,1,0,0,0,73,74,1,0,0,0,74,77,1,0,0,
0,75,73,1,0,0,0,76,68,1,0,0,0,76,77,1,0,0,0,77,78,1,0,0,0,78,79,5,16,0,0,
79,15,1,0,0,0,8,18,20,27,33,46,62,73,76];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class testsuiteParser extends antlr4.Parser {

    static grammarFileName = "testsuite.g4";
    static literalNames = [ null, "'prueba'", "'{'", "'}'", "'y'", "'.'", 
                            "'es'", "'no es'", "'contiene'", "'existe'", 
                            "'debe'", null, null, "'$'", "','", "'['", "']'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, "PALABRAS", "BOOLEANO", "DOLAR", 
                             "COMA", "CORCHETE_ABRE", "CORCHETE_CIERRA", 
                             "IDENTIFICADOR", "NUMERO", "TEXTO", "NEWLINE", 
                             "WS" ];
    static ruleNames = [ "suite", "prueba", "paso", "objeto", "estado", 
                         "valor", "variable", "lista" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = testsuiteParser.ruleNames;
        this.literalNames = testsuiteParser.literalNames;
        this.symbolicNames = testsuiteParser.symbolicNames;
    }



	suite() {
	    let localctx = new SuiteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, testsuiteParser.RULE_suite);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 18;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 20:
	                this.state = 16;
	                this.match(testsuiteParser.NEWLINE);
	                break;
	            case 1:
	                this.state = 17;
	                this.prueba();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 20; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1 || _la===20);
	        this.state = 22;
	        this.match(testsuiteParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	prueba() {
	    let localctx = new PruebaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, testsuiteParser.RULE_prueba);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.match(testsuiteParser.T__0);
	        this.state = 25;
	        this.match(testsuiteParser.TEXTO);
	        this.state = 27;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 26;
	            this.match(testsuiteParser.NEWLINE);
	        }

	        this.state = 29;
	        this.match(testsuiteParser.T__1);
	        this.state = 33;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===11) {
	            this.state = 30;
	            this.paso();
	            this.state = 35;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 36;
	        this.match(testsuiteParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	paso() {
	    let localctx = new PasoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, testsuiteParser.RULE_paso);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.match(testsuiteParser.PALABRAS);
	        this.state = 39;
	        this.objeto();
	        this.state = 40;
	        this.estado();
	        this.state = 41;
	        this.valor();
	        this.state = 46;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 42;
	            this.match(testsuiteParser.T__3);
	            this.state = 43;
	            this.valor();
	            this.state = 48;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 49;
	        this.match(testsuiteParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	objeto() {
	    let localctx = new ObjetoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, testsuiteParser.RULE_objeto);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(testsuiteParser.IDENTIFICADOR);
	        this.state = 52;
	        this.match(testsuiteParser.T__4);
	        this.state = 53;
	        this.match(testsuiteParser.IDENTIFICADOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	estado() {
	    let localctx = new EstadoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, testsuiteParser.RULE_estado);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1984) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, testsuiteParser.RULE_valor);
	    try {
	        this.state = 62;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            localctx = new ValorTextoContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 57;
	            this.match(testsuiteParser.TEXTO);
	            break;
	        case 18:
	            localctx = new ValorNumeroContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 58;
	            this.match(testsuiteParser.NUMERO);
	            break;
	        case 12:
	            localctx = new ValorBooleanoContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 59;
	            this.match(testsuiteParser.BOOLEANO);
	            break;
	        case 13:
	            localctx = new ValorVariableContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 60;
	            this.variable();
	            break;
	        case 15:
	            localctx = new ValorListaContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 61;
	            this.lista();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, testsuiteParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.match(testsuiteParser.DOLAR);
	        this.state = 65;
	        this.match(testsuiteParser.IDENTIFICADOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lista() {
	    let localctx = new ListaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, testsuiteParser.RULE_lista);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.match(testsuiteParser.CORCHETE_ABRE);
	        this.state = 76;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 831488) !== 0)) {
	            this.state = 68;
	            this.valor();
	            this.state = 73;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===14) {
	                this.state = 69;
	                this.match(testsuiteParser.COMA);
	                this.state = 70;
	                this.valor();
	                this.state = 75;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 78;
	        this.match(testsuiteParser.CORCHETE_CIERRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

testsuiteParser.EOF = antlr4.Token.EOF;
testsuiteParser.T__0 = 1;
testsuiteParser.T__1 = 2;
testsuiteParser.T__2 = 3;
testsuiteParser.T__3 = 4;
testsuiteParser.T__4 = 5;
testsuiteParser.T__5 = 6;
testsuiteParser.T__6 = 7;
testsuiteParser.T__7 = 8;
testsuiteParser.T__8 = 9;
testsuiteParser.T__9 = 10;
testsuiteParser.PALABRAS = 11;
testsuiteParser.BOOLEANO = 12;
testsuiteParser.DOLAR = 13;
testsuiteParser.COMA = 14;
testsuiteParser.CORCHETE_ABRE = 15;
testsuiteParser.CORCHETE_CIERRA = 16;
testsuiteParser.IDENTIFICADOR = 17;
testsuiteParser.NUMERO = 18;
testsuiteParser.TEXTO = 19;
testsuiteParser.NEWLINE = 20;
testsuiteParser.WS = 21;

testsuiteParser.RULE_suite = 0;
testsuiteParser.RULE_prueba = 1;
testsuiteParser.RULE_paso = 2;
testsuiteParser.RULE_objeto = 3;
testsuiteParser.RULE_estado = 4;
testsuiteParser.RULE_valor = 5;
testsuiteParser.RULE_variable = 6;
testsuiteParser.RULE_lista = 7;

class SuiteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = testsuiteParser.RULE_suite;
    }

	EOF() {
	    return this.getToken(testsuiteParser.EOF, 0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(testsuiteParser.NEWLINE);
	    } else {
	        return this.getToken(testsuiteParser.NEWLINE, i);
	    }
	};


	prueba = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PruebaContext);
	    } else {
	        return this.getTypedRuleContext(PruebaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof testsuiteListener ) {
	        listener.enterSuite(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof testsuiteListener ) {
	        listener.exitSuite(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof testsuiteVisitor ) {
	        return visitor.visitSuite(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PruebaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = testsuiteParser.RULE_prueba;
    }

	TEXTO() {
	    return this.getToken(testsuiteParser.TEXTO, 0);
	};

	NEWLINE() {
	    return this.getToken(testsuiteParser.NEWLINE, 0);
	};

	paso = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PasoContext);
	    } else {
	        return this.getTypedRuleContext(PasoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof testsuiteListener ) {
	        listener.enterPrueba(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof testsuiteListener ) {
	        listener.exitPrueba(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof testsuiteVisitor ) {
	        return visitor.visitPrueba(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PasoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = testsuiteParser.RULE_paso;
    }

	objeto() {
	    return this.getTypedRuleContext(ObjetoContext,0);
	};

	estado() {
	    return this.getTypedRuleContext(EstadoContext,0);
	};

	valor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValorContext);
	    } else {
	        return this.getTypedRuleContext(ValorContext,i);
	    }
	};

	NEWLINE() {
	    return this.getToken(testsuiteParser.NEWLINE, 0);
	};

	PALABRAS() {
	    return this.getToken(testsuiteParser.PALABRAS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof testsuiteListener ) {
	        listener.enterPaso(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof testsuiteListener ) {
	        listener.exitPaso(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof testsuiteVisitor ) {
	        return visitor.visitPaso(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ObjetoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = testsuiteParser.RULE_objeto;
    }

	IDENTIFICADOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(testsuiteParser.IDENTIFICADOR);
	    } else {
	        return this.getToken(testsuiteParser.IDENTIFICADOR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof testsuiteListener ) {
	        listener.enterObjeto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof testsuiteListener ) {
	        listener.exitObjeto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof testsuiteVisitor ) {
	        return visitor.visitObjeto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EstadoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = testsuiteParser.RULE_estado;
    }


	enterRule(listener) {
	    if(listener instanceof testsuiteListener ) {
	        listener.enterEstado(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof testsuiteListener ) {
	        listener.exitEstado(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof testsuiteVisitor ) {
	        return visitor.visitEstado(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = testsuiteParser.RULE_valor;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ValorVariableContext extends ValorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof testsuiteListener ) {
	        listener.enterValorVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof testsuiteListener ) {
	        listener.exitValorVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof testsuiteVisitor ) {
	        return visitor.visitValorVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

testsuiteParser.ValorVariableContext = ValorVariableContext;

class ValorNumeroContext extends ValorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMERO() {
	    return this.getToken(testsuiteParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof testsuiteListener ) {
	        listener.enterValorNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof testsuiteListener ) {
	        listener.exitValorNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof testsuiteVisitor ) {
	        return visitor.visitValorNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

testsuiteParser.ValorNumeroContext = ValorNumeroContext;

class ValorBooleanoContext extends ValorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	BOOLEANO() {
	    return this.getToken(testsuiteParser.BOOLEANO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof testsuiteListener ) {
	        listener.enterValorBooleano(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof testsuiteListener ) {
	        listener.exitValorBooleano(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof testsuiteVisitor ) {
	        return visitor.visitValorBooleano(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

testsuiteParser.ValorBooleanoContext = ValorBooleanoContext;

class ValorTextoContext extends ValorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	TEXTO() {
	    return this.getToken(testsuiteParser.TEXTO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof testsuiteListener ) {
	        listener.enterValorTexto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof testsuiteListener ) {
	        listener.exitValorTexto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof testsuiteVisitor ) {
	        return visitor.visitValorTexto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

testsuiteParser.ValorTextoContext = ValorTextoContext;

class ValorListaContext extends ValorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	lista() {
	    return this.getTypedRuleContext(ListaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof testsuiteListener ) {
	        listener.enterValorLista(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof testsuiteListener ) {
	        listener.exitValorLista(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof testsuiteVisitor ) {
	        return visitor.visitValorLista(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

testsuiteParser.ValorListaContext = ValorListaContext;

class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = testsuiteParser.RULE_variable;
    }

	DOLAR() {
	    return this.getToken(testsuiteParser.DOLAR, 0);
	};

	IDENTIFICADOR() {
	    return this.getToken(testsuiteParser.IDENTIFICADOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof testsuiteListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof testsuiteListener ) {
	        listener.exitVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof testsuiteVisitor ) {
	        return visitor.visitVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = testsuiteParser.RULE_lista;
    }

	CORCHETE_ABRE() {
	    return this.getToken(testsuiteParser.CORCHETE_ABRE, 0);
	};

	CORCHETE_CIERRA() {
	    return this.getToken(testsuiteParser.CORCHETE_CIERRA, 0);
	};

	valor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValorContext);
	    } else {
	        return this.getTypedRuleContext(ValorContext,i);
	    }
	};

	COMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(testsuiteParser.COMA);
	    } else {
	        return this.getToken(testsuiteParser.COMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof testsuiteListener ) {
	        listener.enterLista(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof testsuiteListener ) {
	        listener.exitLista(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof testsuiteVisitor ) {
	        return visitor.visitLista(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




testsuiteParser.SuiteContext = SuiteContext; 
testsuiteParser.PruebaContext = PruebaContext; 
testsuiteParser.PasoContext = PasoContext; 
testsuiteParser.ObjetoContext = ObjetoContext; 
testsuiteParser.EstadoContext = EstadoContext; 
testsuiteParser.ValorContext = ValorContext; 
testsuiteParser.VariableContext = VariableContext; 
testsuiteParser.ListaContext = ListaContext; 
