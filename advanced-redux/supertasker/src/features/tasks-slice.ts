import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit';

export type TasksState = {
  entities: Task[];
};

// type DraftTask = Partial<Task>;
// type DraftTask = Pick<Task, 'title'>;
type DraftTask = RequireOnly<Task, 'title'>;

// type FunExperimantalType = RequireOnly<Task, 'title' | 'id'>;

// const miniTask: FunExperimantalType = { title: 'lol', id: '2345' };

const createTask = (draftTask: DraftTask): Task => {
  return { id: nanoid(), ...draftTask };
};

const initialState: TasksState = {
  entities: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const task = createTask(action.payload);
      state.entities.unshift(task);
    },
    removeTask: (state) => state,
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { addTask, removeTask } = tasksSlice.actions;

export default tasksSlice;
