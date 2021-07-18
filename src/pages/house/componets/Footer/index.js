
import React, { useState } from 'react';
import { Modal } from '@/components';
import { TextareaItem, Button } from 'antd-mobile'

export default function Footer() {
  const [show, setShow] = useState(false);


  const handleClick = () => {
    setShow(true)
  }
  const handleChange = (value) => {
    console.log(value)
  }
  const handleClose = () => {
    setShow(false)
  }
  return (
    <>
      <div className="footer" onClick={handleClick}>
        评论~
      </div>
      <Modal
        show={show}
        styleBody={{
          height: '220px',
          bottom: "0px",
          top: "unset"
        }}
        onClose={handleClose}
        >
        <div className="modal-comment">
          <TextareaItem
            rows={2}
            count={200}
            onChange={handleChange} />
          <Button className="comment-btn" type="warning">评论</Button>
        </div>
      </Modal>
    </>
  )
}
