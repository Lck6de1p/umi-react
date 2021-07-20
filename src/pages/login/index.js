import React, { useState, useEffect } from 'react';
import { List, InputItem, Button, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import { router } from 'umi';
import { useStoreHook } from 'think-react-store';

import './index.less';

function Login(props) {
    const { user: { loginAsync } } = useStoreHook();
    const { getFieldProps, validateFields } = props.form;
    const handleSubmit = () => {
        validateFields((err, val) => {
            if (err) {
                return Toast.fail('请填写完整信息')
            } else {
                loginAsync(val)
            }
        });
    }
    const handleClick = () => {
        router.push('/register');
    }
    useEffect(() => {

    }, [])

    return (
        <div className="login-page">
            <List renderHeader={() => '用户登录'}>
                <InputItem
                    {...getFieldProps('username', {
                        rules: [{ required: true }]
                    })}
                    placeholder="用户名">用户名:</InputItem>
                <InputItem
                    {...getFieldProps('password', {
                        rules: [{ required: true }]
                    })}
                    placeholder="密码">密码:</InputItem>
            </List>
            <Button type="warning" onClick={handleSubmit}>登录</Button>
            <div className="register" onClick={handleClick}>没有账户，前往注册</div>
        </div>
    )
}

export default createForm()(Login)