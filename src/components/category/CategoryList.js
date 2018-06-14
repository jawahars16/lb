import React from "react";
import CategoryListItem from "./CategoryListItem";
import { Menu, Button } from "antd";

const CategoryList = props => {
  return (
    <div>
      <Button>Add Category</Button>
      <div
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0
        }}
      >
        <Menu mode="inline" bordered="false">
          {props.data.map(i => <Menu.Item>{i.title}</Menu.Item>)}
        </Menu>
      </div>
    </div>
  );
};

export default CategoryList;
