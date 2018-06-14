import * as actionTypes from "../actions/ActionTypes";
import CategoryForm from "./CategoryForm";

var initialState = {
  categories: [],
  selectedCategory: null,
  isFormOpen: false,
  newCategory: {
    title: ""
  }
};

const Categories = (
  state = initialState,
  action = actionTypes.LOAD_CATEGORIES_BEGIN
) => {
  switch (action.type) {
    case actionTypes.SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: state.categories.find(c => c.id === action.id)
      };
    case actionTypes.LOAD_CATEGORIES_BEGIN:
      return initialState;
    case actionTypes.LOAD_CATEGORIES_END:
      return {
        ...state,
        categories: action.categories
      };
    case actionTypes.OPEN_CATEGORY_FORM:
      return {
        ...state,
        isFormOpen: true,
        newCategory: {
          title: ""
        }
      };
    case actionTypes.ADD_CATEGORY:
      var newCategory = CategoryForm(state, action);
      console.log(newCategory);
      return {
        ...state,
        isFormOpen: false,
        categories: [...state.categories, newCategory]
      };
    case actionTypes.CANCEL_CATEGORY_FORM:
      return { ...state, isFormOpen: false };
    default:
      return state;
  }
};

export default Categories;
