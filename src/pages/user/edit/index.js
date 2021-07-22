import React, { useState, useEffect } from 'react';
import { List, ImagePicker, Toast, InputItem, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import { useStoreHook } from 'think-react-store';

function Edit(props) {
 
  const { user: { editUserAsync, getUserAsync, avatar, phone, sign } } = useStoreHook();
  const { getFieldProps, validateFields } = props.form;
  const [files, setFiles] = useState([{url: avatar}])
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
        editUserAsync({
          avatar: files[0].url,
          phone: val.phone,
          sign: val.sign
        })
      }
    });
  }

  useEffect(()=>{
    getUserAsync({});
  }, [])

  return (
    <div className="user-edit">
      <List>
       
          <ImagePicker
            files={files}
            selectable={files.length < 1}
            onChange={handleChange}
          />
          <InputItem
            {...getFieldProps('phone', {
              rules: [{ require: true }],
              initialValue: phone
            })}
            placeholder="电话">
            电话：
          </InputItem>
          <InputItem
            {...getFieldProps('sign', {
              rules: [{ require: true }],
              initialValue: 'sign'
            })}
            placeholder="签名"
          >
            签名：
          </InputItem>
       
      </List>
      <Button type="warning" style={{ marginTop: '20px' }} onClick={handleSubmit}>修改</Button>
    </div>
  )
}

export default createForm()(Edit);