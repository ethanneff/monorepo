import { type SliceApplication } from './slices/sliceApplication';
import { type SliceAuth } from './slices/sliceAuth';
import { type SliceSession } from './slices/sliceSession';

// we need a global type to keep slice types in the same file as the slice without causing circular dependencies
declare global {
  type MegaStore = {
    application: SliceApplication;
    auth: SliceAuth;
    session: SliceSession;
  };
}

// export the global type so it can be used in downstream dependencies
export type { MegaStore };
