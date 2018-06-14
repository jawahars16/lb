import * as actionTypes from "../actions/ActionTypes";

const CategoryForm = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_CATEGORY:
      return { title: action.title };
    default:
      return null;
  }
};

export default CategoryForm;
