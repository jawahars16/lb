import React from "react";
import CategoryListItem from "./CategoryListItem";
import { Menu, Button } from "antd";

const CategoryList = props => {
  return (
    <div>
      <Button onClick={props.handleAdd}>Add Category</Button>
      <div
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          width: "200px",
          left: 0
        }}
      >
        <Menu mode="inline">
          {props.data.map(i => <Menu.Item key={i.key}>{i.title}</Menu.Item>)}
        </Menu>
      </div>
    </div>
  );
};

export default CategoryList;
