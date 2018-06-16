import React from "react";
import { connect } from "react-redux";
import * as categoryActions from "../actions/CategoryActions";
import * as categoryFormActions from "../actions/CategoryFormActions";
import CategoryList from "../components/category/CategoryList";
import CategoryForm from "../components/category/CategoryForm";
import { bindActionCreators } from "redux";

class CategoryContainer extends React.Component {
  componentDidMount() {
    this.props.categoryActions.loadCategories();
  }

  render() {
    return (
      <div>
        <CategoryForm
          open={this.props.isFormOpen}
          form={this.props.categoryForm}
          handleOk={this.props.categoryFormActions.addCategory}
        />
        <CategoryList
          data={this.props.categories}
          handleAdd={this.props.categoryActions.openCategoryForm}
          selectedValue={this.props.selectedCategory}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  if (state.Categories) {
    return state.Categories;
  } else {
    return {
      categories: []
    };
  }
}

function mapDispatchToProps(dispatch) {
  return {
    categoryActions: bindActionCreators(categoryActions, dispatch),
    categoryFormActions: bindActionCreators(categoryFormActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryContainer);
