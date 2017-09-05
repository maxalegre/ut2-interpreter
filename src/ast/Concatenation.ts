import { Exp } from './ASTNode';
import { State } from '../interpreter/State';

/**
  Representación de concatenación de strings.
*/
export class Concatenation implements Exp {
  lhs: Exp;
  rhs: Exp;

  constructor(lhs: Exp, rhs: Exp) {
    this.lhs = lhs;
    this.rhs = rhs;
  }

  toString(): string {
    return `Concatenation(${this.lhs.toString()}, ${this.rhs.toString()})`;
  }

  unparse(): string {
    return `(${this.lhs.unparse()} + ${this.rhs.unparse()})`;
  }

  evaluate(state: State): any {
    var lhsEval = this.lhs.evaluate(state);
    var rhsEval = this.rhs.evaluate(state);

    if (typeof lhsEval === 'string' && typeof rhsEval === 'string') {
      return lhsEval + rhsEval;
    }
    
    throw new Error("Operandos deben ser de tipo string.");
  }
}
