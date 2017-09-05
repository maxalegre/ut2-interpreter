import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';

/**
  Representación de las expresiones condicionales.
*/
export class ConditionalExpression implements Exp {
  cond: Exp;
  thenBody: Exp;
  elseBody: Exp;

  constructor(thenBody: Exp, cond: Exp, elseBody: Exp) {
    this.cond = cond;
    this.thenBody = thenBody;
    this.elseBody = elseBody;
  }

  toString(): string {
    return `ConditionalExpression(${this.thenBody.toString()},${this.cond.toString()},${this.elseBody.toString()})`;
  }

  unparse(): string {
    return `${this.thenBody.unparse()} if ${this.cond.unparse()} else ${this.elseBody.unparse()}`;
  }

  evaluate(state: State): any {
    if (this.cond.evaluate(state)) {
      return this.thenBody.evaluate(state);
    }
    else {
      return this.elseBody.evaluate(state);
    }
  }

}