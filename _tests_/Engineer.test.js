const { expect, test } = require('@jest/globals');
const Engineer= require ('../library/Engineer')

//https://jestjs.io/docs/api#testname-fn-timeout
test('generate engineer', () => {
    const engineer = new Engineer('name', 'role', 'id', 'email', 'github');
    expect(engineer.getroles()).toBe('Engineer');
});

test('github user', () => {
    const github = 'jared-N2';
    const engineer = new Engineer('name', 'role', 'id', 'email', github);
    expect(engineer.getgithub()).toBe(github);
});