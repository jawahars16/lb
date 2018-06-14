import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/CategoryActions";
import CategoryList from "../components/category/CategoryList";
import CategoryForm from "../components/category/CategoryForm";
import { bindActionCreators } from "redux";

class CategoryContainer extends React.Component {
  componentDidMount() {
    this.props.actions.loadCategories();
  }

  render() {
    return (
      <div>
        <CategoryForm />
        <CategoryList
          data={this.props.categories}
          handleAdd={this.props.actions.openCategoryForm}
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
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryContainer);
