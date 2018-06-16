import React from "react";
import { Modal, Form, Input, List } from "antd";

const FormItem = Form.Item;
const ReactComponent = React.Component;

class CategoryForm extends ReactComponent {
  constructor(props) {
    super(props);
    this.onTextChange = this.onTextChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  componentDidMount() {
    this.props.handleLoadIcons();
  }

  onTextChange(e) {
    this.props.form.title = e.target.value;
  }

  onSave() {
    this.props.handleOk(this.props.form.title);
  }

  render() {
    return (
      <div>
        <Modal
          title="New Category"
          visible={this.props.open}
          onOk={this.onSave}
          onCancel={this.props.handleCancel}
        >
          <Form layout="vertical">
            <FormItem label="Title">
              {<Input onChange={this.onTextChange} />}
            </FormItem>
            <FormItem label="Select Icon">
              {
                <List
                  grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 6,
                    xxl: 3
                  }}
                  dataSource={this.props.form.icons}
                  renderItem={item => (
                    <List.Item>
                      <div
                        style={{
                          width: "50px",
                          height: "50px",
                          background: "red"
                        }}
                      />
                    </List.Item>
                  )}
                />
              }
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default CategoryForm;
