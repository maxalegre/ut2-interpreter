import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';

/**
  Representación de las iteraciones while-do-else.
*/
export class WhileDoElse implements Stmt {
  cond: Exp;
  doBody: Stmt;
  elseBody: Stmt;

  constructor(cond: Exp, doBody: Stmt, elseBody: Stmt) {
    this.cond = cond;
    this.doBody = doBody;
    this.elseBody = elseBody;
  }

  toString(): string {
    return `WhileDoElse(${this.cond.toString()}, ${this.doBody.toString()}, ${this.elseBody.toString()})`;
  }

  unparse(): string {
    return `while ${this.cond.unparse()} do ${this.doBody.unparse()} else ${this.elseBody.unparse()}`;
  }

  evaluate(state: State): State {
    var elseCond = true;
    
    while (this.cond.evaluate(state)) {
      elseCond = false;
      state = this.doBody.evaluate(state);
    }

    if (elseCond) {
      state = this.elseBody.evaluate(state);
    }

    return state;
  }
}
