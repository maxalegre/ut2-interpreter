import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';

/**
  Representación de length(string).
*/
export class LengthString implements Exp {
  expString: Exp;

  constructor(expString: Exp) {
    this.expString = expString;
  }

  toString(): string {
    return `LengthString(${this.expString.toString()})`;
  }

  unparse(): string {
    return `length ( ${this.expString.unparse()} )`;
  }

  evaluate(state: State): any {
    var string = this.expString.evaluate(state);

    if (typeof string === 'string') {
      return string.length;
    }

    throw new Error("Attribute must be type 'string'");
  }

}