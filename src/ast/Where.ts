import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';

/**
  Representación de las iteraciones while-do.
*/
export class Where implements Stmt {
  stmL: Exp;
  stmR: Stmt;

  constructor(stmL: Exp, stmR: Stmt) {
    this.stmL = stmL;
    this.stmR = stmR;
  }

  toString(): string {
    return `Where(${this.stmL.toString()}, ${this.stmR.toString()})`;
  }

  unparse(): string {
    return ` ${this.stmL.unparse()} where { ${this.stmR.unparse()} }`;
  }

  evaluate(state: State): State {

    return state
  }
}
