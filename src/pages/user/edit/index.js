import React, { useState, useEffect } from 'react';
import { List, ImagePicker, Toast, InputItem, Button } from 'antd-mobile';
import { createForm } from 'rc-form';

function Edit(props) {
  const [files, setFiles] = useState([])
  const { getFieldProps, validateFields } = props.form;
  const handleChange = file => {
    if (file[0]?.file?.size / 1024 / 1024 > 0.1) {
      return Toast.fail('图片大小不能大于0.1M');
    }
    setFiles(file);
  }

  const handleSubmit = () => {
    if (!files.length) {
      return Toast.fail('请上传图片')
    }
    validateFields((err, val) => {
      if (err) {
        return Toast.fail('请将信息补充完整')
      } else {

      }
    });
  }


  return (
    <div className="user-edit">
      <List>
        <List.Item>
          <ImagePicker
            files={files}
            selectable={files.length < 1}
            onChange={handleChange}
          />
        </List.Item>
        <List.Item>
          <InputItem
          {...getFieldProps('tel', {
            rules: [{require: true}],
            initialValue: '123456'
          })}
            placeholder="电话">
            电话：
          </InputItem>
          <InputItem
           {...getFieldProps('sign', {
            rules: [{require: true}],
            initialValue: '签名'
          })}
            placeholder="签名"
            >
            签名：
          </InputItem>
        </List.Item>
      </List>
      <Button type="warning" style={{ marginTop: '20px' }} onClick={handleSubmit}>修改</Button>
    </div>
  )
}

export default createForm()(Edit);