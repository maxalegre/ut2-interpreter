import { Stmt } from './ASTNode';
import { State } from '../interpreter/State';

/**
  Representación de las secuencias de sentencias.
*/
export class Sequence implements Stmt {

  statements: [Stmt];

  constructor(statements: [Stmt]) {
    this.statements = statements;
  }

  toString(): string {
    const statements = this.statements
      .filter((stmt) => (stmt !== undefined))
      .map((stmt) => (stmt.toString()))
      .join(", ");
    return `Sequence(${statements})`
  }

  unparse(): string {
    const statements = this.statements
      .filter((stmt) => (stmt !== undefined))
      .map((stmt) => (stmt.toString()))
      .join(" ");
    return `{ ${statements} }`
  }

  evaluate(state: State): State {
    this.statements.forEach(function (s: Stmt) {
      state = s.evaluate(state);
    });

    // foreach(Stmt s in statements)
    // {
    //   state = s.evaluate(state);
    // }

    return state;
  }
}
