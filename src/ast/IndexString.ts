import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';

/**
  Representación de index string.
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
    return `${this.expString.unparse()} [ ${this.expIndex.unparse()} ]`;
  }

  evaluate(state: State): any {
    var string = this.expString.evaluate(state);
    var index = this.expIndex.evaluate(state);

    if (string.length() > index && index >= 0) {
      return string[index];
    }
    throw new Error("Index Out of Bounds");
  }

}