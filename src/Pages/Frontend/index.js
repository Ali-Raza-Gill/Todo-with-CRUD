import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function index() {
    const [collapsed, setCollapsed] = useState(false);
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate()
    // const {
    //   token: { colorBgContainer },
    // } = theme.useToken();
    return (
        <>
            <Layout >
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="demo-logo-vertical" />
                    <Menu
                        theme="light" mode="inline" style={{backgroundColor:"red",color:"black"}} defaultSelectedKeys={['1']} items={items}
                    />
                </Sider>
                <Layout>
                    <Header
                        style={{ padding: 0, background:'grey'}} className='d-flex align-items-center'>
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >
                        Content
                    </Content>
                </Layout>
            </Layout>

        </>
    )
}
