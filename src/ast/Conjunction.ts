import { Exp } from './ASTNode';
import { State } from '../interpreter/State';

/**
  Representación de conjunciones booleanas (AND).
*/
export class Conjunction implements Exp {

  lhs: Exp;
  rhs: Exp;

  constructor(lhs: Exp, rhs: Exp) {
    this.lhs = lhs;
    this.rhs = rhs;
  }

  toString(): string {
    return `Conjunction(${this.lhs.toString()}, ${this.rhs.toString()})`;
  }

  unparse(): string {
    return `(${this.lhs.unparse()} && ${this.rhs.unparse()})`;
  }

  evaluate(state: State): any {
    var lhsEval = this.lhs.evaluate(state);
    var rhsEval = this.rhs.evaluate(state);

    if (typeof lhsEval === 'boolean' && typeof rhsEval === 'boolean') {
      return lhsEval && rhsEval;
    }
    
    throw new Error('Operandos deben ser de tipo booleano.');
  }
}
