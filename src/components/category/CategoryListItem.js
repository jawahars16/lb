import React from "react";
import { Menu } from "antd";

const CategoryListItem = props => {
  return (
    <Menu.Item key={props.title}>
      <span>{props.title}</span>
    </Menu.Item>
  );
};

export default CategoryListItem;
