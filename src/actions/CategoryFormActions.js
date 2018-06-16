import * as types from "./ActionTypes";
import * as groups from "./ActionGroups";
import * as iconRepository from "../data/IconRepository";

export function addCategory(title) {
  return {
    group: groups.CATEGORY_FORM,
    type: types.ADD_CATEGORY,
    title
  };
}

export function cancelCategoryForm() {
  return {
    group: groups.CATEGORY_FORM,
    type: types.CANCEL_CATEGORY_FORM
  };
}

export function loadIconsBegin() {
  return {
    group: groups.CATEGORY_FORM,
    type: types.LOAD_ICONS_BEGIN
  };
}

export function loadIconsEnd(icons) {
  return {
    group: groups.CATEGORY_FORM,
    type: types.LOAD_ICONS_END,
    icons: icons
  };
}

export function loadIcons() {
  return function(dispatch) {
    dispatch(loadIconsBegin());
    return iconRepository.getIcons().then(icons => {
      dispatch(loadIconsEnd(icons));
    });
  };
}
