export class TestClass {
  private _foo: string;

  constructor(inputFoo: string) {
    this._foo = inputFoo;
  }

  get foo() {
    return this._foo;
  }
}
