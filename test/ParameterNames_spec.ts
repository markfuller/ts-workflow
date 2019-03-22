
import {Service} from "../lib/servicesdk/Service";

describe('parameterNames', () => {
  it('returns an empty array for no arguments', () => {
    const names = Service.parameterNames(getName);
    expect(names).toEqual([]);
  });
  it('returns a one argument array for one argument', () => {
    const names = Service.parameterNames(sayHello);
    expect(names).toEqual(["yourName"]);
  });
  it('returns an array for two arguments', () => {
    const names = Service.parameterNames(addTwoNumbers);
    expect(names).toEqual(["firstNumber", "secondNumber"]);
  });
});

function getName() {
    return "foo";
}

function sayHello(yourName: string) {
    return "hello " + yourName
}

function addTwoNumbers(firstNumber: BigInteger, secondNumber: string) {
    return firstNumber + secondNumber
}