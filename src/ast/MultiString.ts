
import { Exp } from './ASTNode';
import { State } from '../interpreter/State';

/**
  Representación de multiplicaciones.
*/
export class MultiString implements Exp {

  lhs: Exp;
  rhs: Exp;

  constructor(lhs: Exp, rhs: Exp) {
    this.lhs = lhs;
    this.rhs = rhs;
  }

  toString(): string {
    return `MultiString(${this.lhs.toString()}, ${this.rhs.toString()})`;
  }

  unparse(): string {
    return `(${this.lhs.unparse()} * ${this.rhs.unparse()})`;
  }

  evaluate(state: State): any {
    var lhsEval = this.lhs.evaluate(state);
    var rhsEval = this.rhs.evaluate(state);

    if (typeof lhsEval === 'number' && typeof rhsEval === 'string') {
      return rhsEval.repeat(lhsEval);
    }
    else if (typeof lhsEval === 'string' && typeof rhsEval === 'number') {
      return lhsEval.repeat(rhsEval);
    }
    return "Los tipos ingresados no son compatibles "
  }
}
