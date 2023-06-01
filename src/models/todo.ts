export interface ITodo {
  title: string;
  tasks: ITask[];
}

export interface ITask {
  text: string;
  completed: boolean;
}

export default ITodo;