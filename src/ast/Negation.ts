import { Exp } from './ASTNode';
import { State } from '../interpreter/State';

/**
  Representación de las negaciones de expresiones booleanas.
*/
export class Negation implements Exp {

  exp: Exp;

  constructor(exp: Exp) {
    this.exp = exp;
  }

  toString(): string {
    return `Negation(${this.exp.toString()})`;
  }

  unparse(): string {
    return `(!${this.exp.unparse()})`;
  }

  evaluate(state: State): any {
    var expEval = this.exp.evaluate(state);

    if (typeof expEval === 'boolean') {
      return !expEval;
    }

    return 'Operando debe ser booleano.';
  }
}
