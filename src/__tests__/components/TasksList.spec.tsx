let tasks: {
  id: number;
  title: string;
  done: boolean;
}[] = [];

let mockedRemoveTask: jest.Mock;
let mockedToggleTaskDone: jest.Mock;

describe('MyTasksList', () => {

  beforeAll(() => {
    tasks = [
      {
        id: new Date().getTime(),
        title: 'Primeiro todo',
        done: false
      },
      {
        id: new Date().getTime() + 1,
        title: 'Segundo todo',
        done: false
      },
      {
        id: new Date().getTime() + 2,
        title: 'Terceiro todo',
        done: true
      },
    ];

    mockedRemoveTask = jest.fn();
    mockedToggleTaskDone = jest.fn();
  });

  it.todo('should be able to render all tasks');

  it.todo('should be able to handle "removeTask" event');

  it.todo('should be able to handle "toggleTaskDone" event');
})