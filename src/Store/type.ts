import store from "./store";

export type RootParams = {productId: string;} ;
export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;