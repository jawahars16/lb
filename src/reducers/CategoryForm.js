import * as actionTypes from "../actions/ActionTypes";

const initialState = {
  title: "",
  icons: []
};

const CategoryForm = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_CATEGORY:
      return { title: action.title };
    case actionTypes.LOAD_ICONS_BEGIN:
      return initialState;
    case actionTypes.LOAD_ICONS_END:
      return {
        ...state,
        categories: action.categories
      };
    default:
      return null;
  }
};

export default CategoryForm;
