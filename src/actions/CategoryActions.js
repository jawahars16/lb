import * as repository from "../data/CategoryRepository";
import * as types from "./ActionTypes";

export function loadCategories() {
  return function(dispatch) {
    dispatch(loadCategoriesBegin());
    return repository.getCategories().then(data => {
      dispatch(loadCategoriesEnd(data));
    });
  };
}
export function selectCategory(id) {
  return {
    type: types.SELECT_CATEGORY,
    id
  };
}

export function loadCategoriesBegin() {
  return {
    type: types.LOAD_CATEGORIES_BEGIN
  };
}

export function loadCategoriesEnd(categories) {
  return {
    type: types.LOAD_CATEGORIES_END,
    categories: categories
  };
}

export function openCategoryForm() {
  return {
    type: types.OPEN_CATEGORY_FORM
  };
}

export function addCategory(title) {
  return {
    type: types.ADD_CATEGORY,
    title
  };
}

export function cancelCategoryForm() {
  return {
    type: types.CANCEL_CATEGORY_FORM
  };
}
