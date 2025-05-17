grammar testsuite;

//    Gramática

suite : (NEWLINE | prueba)+ EOF ;

prueba : 'prueba' TEXTO NEWLINE? '{' paso* '}' ;

paso : (PALABRAS) objeto estado valor ('y' valor)* NEWLINE ;

objeto
    : IDENTIFICADOR '.' IDENTIFICADOR
    ;

estado
    : 'es'
    | 'no es'
    | 'contiene'
    | 'existe'
    | 'debe'
    ;

valor
    : TEXTO          #valorTexto
    | NUMERO         #valorNumero
    | BOOLEANO       #valorBooleano
    | variable       #valorVariable
    | lista          #valorLista
    ;

variable
    : DOLAR IDENTIFICADOR
    ;

lista
    : CORCHETE_ABRE (valor (COMA valor)*)? CORCHETE_CIERRA
    ;


//     Lexemas

PALABRAS        : 'dado' | 'cuando' | 'entonces';  
BOOLEANO        : 'verdadero' | 'falso' ;
DOLAR           : '$' ;
COMA            : ',' ;
CORCHETE_ABRE   : '[' ;
CORCHETE_CIERRA : ']' ;

IDENTIFICADOR   : [a-zA-Z] [a-zA-Z0-9_]* ;
NUMERO          : [0-9]+ ;
TEXTO             : '"' ( ~["\\\r\n] | '\\' . )* '"' ;

NEWLINE         : ('\r'? '\n') ;
WS              : [ \t]+ -> skip ;