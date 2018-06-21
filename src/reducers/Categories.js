import * as actionTypes from "../actions/ActionTypes";
import CategoryForm from "./CategoryForm";
import * as groups from "../actions/ActionGroups";

var initialState = {
  categories: [],
  selectedCategory: null,
  isFormOpen: false
};

const Categories = (
  state = initialState,
  action = actionTypes.LOAD_CATEGORIES_BEGIN
) => {
  if (action.group == groups.CATEGORY_FORM) {
    return {
      ...state
    };
  }

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
        categoryForm: {
          title: "",
          icons: []
        }
      };
    case actionTypes.ADD_CATEGORY:
      var newCategory = CategoryForm(state, action);
      console.log(action.title);
      return {
        ...state,
        isFormOpen: false,
        categories: [...state.categories, newCategory],
        newCategory: null
      };
    case actionTypes.CANCEL_CATEGORY_FORM:
      return { ...state, isFormOpen: false };
    default:
      return state;
  }
};

export default Categories;
