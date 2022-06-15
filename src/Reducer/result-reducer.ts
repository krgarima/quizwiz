import { DataObjInterface } from "../Context/data-context";

type payloadType = {
  current: DataObjInterface | any;
  selected: string;
};

export type actionType =
  | {
      type: "ADDED";
      payload: payloadType[] | any;
    }
  | {
      type: "REMOVED";
      payload: [] | any;
    };

export const resultReducer = (state: [], action: actionType) => {
  const { current, selected } = action.payload;
  switch (action.type) {
    case "ADDED": {
      return [...state, { ...current, selected }];
    }
    case "REMOVED": {
      return [];
    }
    default:
      return state;
  }
};
