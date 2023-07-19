let mockedAddTask: jest.Mock;

describe('TodoInput', () => {
  beforeAll(() => {
    mockedAddTask = jest.fn();
  })

  it.todo('should be able to submit the input text by "submitEditing" event');

  it.todo('should be able to submit the input text by addButton');

  it.todo('should not be able to add an empty task');
});