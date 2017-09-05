import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';

/**
  Representación de la concatenación de un String y un Numeral.
*/
export class StringNumberConcatenation implements Exp {
  lhs: Exp;
  rhs: Exp;

  constructor(lhs: Exp, rhs: Exp) {
    this.lhs = lhs;
    this.rhs = rhs;
  }

  toString(): string {
    return `StringNumberConcatenation(${this.lhs.toString()}, ${this.rhs.toString()})`;
  }

  unparse(): string {
    return `${this.lhs.unparse()} + ${this.rhs.unparse()}`;
  }

  evaluate(state: State): any {
    var lhs = this.lhs.evaluate(state);
    var rhs = this.rhs.evaluate(state);

    if (typeof lhs === 'string' && typeof rhs === 'number') {
      return lhs + rhs;
    } else if (typeof lhs === 'number' && typeof rhs === 'string') {
      return lhs + rhs;
    }

    throw new Error("Los parámetros deben ser de tipo 'string' y 'number'");
  }
}
