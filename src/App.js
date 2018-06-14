import React, { Component } from "react";
import "./App.css";
import { Layout } from "antd";
import SiderContainer from "./containers/SiderContainer";

const { Header, Content, Sider, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout className="App" style={{ height: "100vh" }}>
        <Layout>
          <Sider
            style={{
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              left: 0
            }}
          >
            <SiderContainer />
          </Sider>
          <Content>main content</Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
