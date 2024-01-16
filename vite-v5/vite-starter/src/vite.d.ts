/// <reference types="vite/client" />

type Vitest = import('vitest');

interface ImportMetaEnv {
  readonly VITE_YOU_WILL_SEE_ME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
  readonly vitest: Vitest;
}
