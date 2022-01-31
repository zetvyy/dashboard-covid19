import "./App.css";
import "antd/dist/antd.css";
import { Layout } from "antd";
import { DashboardOutlined } from "@ant-design/icons";
import { useState } from "react";
import Filter from "./components/Filter/Filter";
import Chart from "./components/Chart/Chart";
import Tabel from "./components/Table/Table";
import FilterCity from "./components/FilterCity/FilterCity";

const { Header, Content, Sider } = Layout;

function App() {
  const [visible, setVisible] = useState(true);

  const handleCollapse = () => {
    setVisible(!visible);
  };
  return (
    <div>
      <Layout className="wrapper" style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          onCollapse={handleCollapse}
          style={{ backgroundColor: "#a1a1a1" }}
        >
          <div className="logo">Logo</div>
          <div className="menu">
            <DashboardOutlined className="icon_dashboard" />
            {visible ? <span>Dashboard</span> : ""}
          </div>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <div className="filter">
              <Filter />
              <Filter />
              {/* <FilterCity /> */}
              <button className="btn_search">Search</button>
            </div>
            <div className="chart">
              <Chart />
              <Chart />
              <Chart />
            </div>
          </Content>
          <Tabel />
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
