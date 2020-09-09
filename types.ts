export const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const message: string = "Hello typescritp";

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]; //дженерик

const words: string[] = ['hellow', ' ', 'typescript'];

//tuple
const contact: [string, number] = ['Vladilen', 555555];

// Any
let variable: any = 42;
// ...
variable = 'New string';
variable = [];

function sayMyName(name: string): void {
  console.log(name);
}

sayMyName('Tom');

// Never
function throwError(message: string): never {
  throw new Error(message);
}

function infinite(message: string): never {
  while (true) {

  }
}

// Type
type Login = string

const login: Login = 'admin';

type ID = string | number;
const id1: ID = 1234;
const id2: ID = '1234';

type SomeType = string | null | undefined;
