import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';

/**
  Representación de las sentencias condicionales.
*/
export class IndexString implements Exp {
  expString: Exp;
  expIndex: Exp;

  constructor(expString: Exp, expIndex: Exp) {
    this.expString = expString;
    this.expIndex = expIndex;
  }

  toString(): string {
    return `IndexString(${this.expString.toString()},${this.expIndex.toString()})`;
  }

  unparse(): string {
    //return `if ${this.cond.unparse()} then { ${this.thenBody.unparse()} } else { ${this.elseBody.unparse()} }`;
    //return `${this.thenBody.unparse()} if ${this.cond.unparse()} else ${this.elseBody.unparse()}`;
    return `${this.expString.unparse()} [ ${this.expIndex.unparse()} ]`;
  }

  evaluate(state: State): any {
    var string = this.expString.evaluate(state);
    var index = this.expIndex.evaluate(state);
    if (string.length() > index && index >= 0) {
      return string[index];
    }
    else {
      throw new Error("Index Out of Bounds");
    }
  }

}