import React, { useState, useEffect } from 'react';
import { List, InputItem, Button, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import { router } from 'umi';
import { useStoreHook } from 'think-react-store';

import './index.less';

function Login(props) {
    const { user: { registerAsync } } = useStoreHook();
    const { getFieldProps, validateFields } = props.form;
    const handleSubmit = () => {
        validateFields((err, val) => {
            if (err) {
                return Toast.fail('请填写完整信息')
            } else {
                if (val.password !== val.password2) {
                    return Toast.fail('密码和确认密码必须一致')
                }
                registerAsync(val)
            }
        });
    }
    const handleClick = () => {
        router.push('/login');
    }
    useEffect(() => {

    }, [])

    return (
        <div className="register-page">
            <List renderHeader={() => '用户注册'}>
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
                <InputItem
                    {...getFieldProps('password2', {
                        rules: [{ required: true }]
                    })}
                    placeholder="确认密码">确认密码:</InputItem>
            </List>
            <Button type="warning" onClick={handleSubmit}>注册</Button>
            <div className="login" onClick={handleClick}>已有账户，前往登录</div>
        </div>
    )
}

export default createForm()(Login)