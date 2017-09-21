import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';

/**
  Representación de las iteraciones while-do.
*/
export class Where implements Exp {
  stmL: Exp;
  stmR: Stmt;

  constructor(stmL: Exp, stmR: Stmt) {
    this.stmL = stmL[0] ? stmL[0] : stmL;
    this.stmR = stmR;
  }

  toString(): string {
    return `Where(${this.stmL.toString()}, ${this.stmR.toString()})`;
  }

  unparse(): string {
    return `${this.stmL.unparse()} where { ${this.stmR.unparse()} }`;
  }

  evaluate(state: State): any {
    console.log("averh")
    console.log(this.stmL)
    
    var aux: State = Object.assign({},state);
    this.stmR.evaluate(aux);
    var a:Exp = this.stmL.evaluate(aux);
    console.log(a);
    
    return a;
    }
}
