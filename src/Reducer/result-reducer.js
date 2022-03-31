export const resultReducer = (state, action) => {
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
