import { Grid } from '@mui/material'
import { Form, Divider, Button,Modal } from 'antd'
import { useState } from 'react'
import FileUpload from '../ant/FileUpload'

const PhotoDetailsFrom = ({ previousBtnHandle }) => {
  const [form] = Form.useForm()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const openModal = () => setIsModalVisible(true)
  const handleCancel = () => {
    setIsModalVisible(false)
    form.resetFields()
}

const handleOk = () => {
    form.submit()
}

const onFinish = () => {
    console.log('Form submited!')
    setIsModalVisible(false)
}
  return (
    <Form autoComplete='off'>
      <Grid container spacing={2} >
        <Grid item xs={12} sm={12}>
          <div style={{ textAlign: "center", color: "#c96e6e", textDecoration: "underline" }} >
            <p>Photos are optional however profile with pics increases people's interest. People will see the pic and contact you if they are interested.</p>
            <br />
            <p>
              फोटो अपलोड करना ज़रुरी नहीं है । लेकिन प्रोफाइल फोटो डालने से आपका परोफाइल ज़यादा ध्यान ले देखा जाएगा और लोग फोटो देख कर पसंद आने पर ही आपको कॉनटेकट करेंगे।
            </p>
          </div>

          <Divider />
          <Form.Item>
            <FileUpload />
          </Form.Item>
        </Grid>
      </Grid>
      <Grid container spacing={1} className="ant-btn-parent-class">
        <Grid item sm={1}>
          <Button type="primary" htmlType="submit" className='ant-btn-class' onClick={previousBtnHandle}>
            Previous
          </Button>
        </Grid>
        <Grid item xs={1}>

          <Button type="primary" htmlType="submit" className='ant-btn-class' onClick={openModal}>
            Submit
          </Button>
          <Modal
            title="You can NOW send/receive marriage proposals. Click on 'Search Profile', 'New Profile' and 'Category' from menu (3 lines on top left) to look for the suitable match and their contact information."
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              // <Button key="back" onClick={handleCancel}>
              //   Cancel
              // </Button>,
              <Button key="submit" type="primary" onClick={handleOk} className='ant-btn-class'>
                Ok
              </Button>,
            ]}
          >
          </Modal>
        </Grid>
      </Grid>

    </Form>
  )
}

export default PhotoDetailsFrom