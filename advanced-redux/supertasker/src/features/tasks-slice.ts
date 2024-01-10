import {
  PayloadAction,
  createAsyncThunk,
  createSlice,
  nanoid,
} from '@reduxjs/toolkit';
import data from '../api/data.json';
import { removeUser } from './users-slice';

export type TasksState = {
  entities: Task[];
};

// type DraftTask = Partial<Task>;
// type DraftTask = Pick<Task, 'title'>;
type DraftTask = RequireOnly<Task, 'title'>;

// type FunExperimantalType = RequireOnly<Task, 'title' | 'id'>;

// const miniTask: FunExperimantalType = { title: 'lol', id: '2345' };

export const createTask = (draftTask: DraftTask): Task => {
  return { id: nanoid(), ...draftTask };
};

const initialState: TasksState = {
  entities: [],
};

export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async (): Promise<Task[]> => {
    const response = await fetch('/api/tasks').then((response) =>
      response.json(),
    );
    return response.tasks;
  },
);

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const task = createTask(action.payload);
      state.entities.unshift(task);
    },
    removeTask: (state, action: PayloadAction<Task['id']>) => {
      const index = state.entities.findIndex(
        (task) => (task.id = action.payload),
      );
      state.entities.splice(index, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(removeUser, (state, action) => {
      const userId = action.payload;
      for (const task of state.entities) {
        if (task.user === userId) {
          task.user = undefined;
        }
      }
    });
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.entities = action.payload;
    });
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { addTask, removeTask } = tasksSlice.actions;

export default tasksSlice;
