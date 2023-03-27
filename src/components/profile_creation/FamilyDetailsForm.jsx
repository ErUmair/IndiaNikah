import { Grid } from '@mui/material'
import { Button, Form, Input, Select } from 'antd'
import React from 'react'



const numberOption = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
}


const maslak_options = {
  ahele_hadis: "Ahle Hadis (Salafi)",
  Barelvi: "Barelvi (Dargah/Niyaz)",
  bohra: "Bohra",
  deobandi: "Deobandi (Tablighi)",
  jamat_islami: "Jamat Islami",
  no_maslak: "No Maslak (Sunni)",
  new_muslim: "Reverted(New) Muslim",
  shafai: "Shafai",
  shia: "Shia",
}

const FamilyDetailsForm = ({ familyOnFinish, previousBtnHandle }) => {
  const rules = [
    {
      required: true,
    },
    {
      whitespace: true,
    },
  ]

  const optionFiedRule = [
    {
      required: true,
    },
  ]
  return (
    <Form autoComplete="off" onFinish={familyOnFinish}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Form.Item
            label="Father Name, वालिद/बाप का नाम"
            name="father-name"
            hasFeedback
            rules={[...rules]}
          >
            <Input placeholder="father name" />
          </Form.Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Form.Item
            label="Father Occupation, वालिद का कारोबार "
            name="father-occupation"
            rules={[...rules]}
            hasFeedback
          >
            <Input placeholder="father occupation" />
          </Form.Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Form.Item
            label="Mother Name, वालिदा/मां का नाम"
            name="mother-name"
            rules={[...rules]}
            hasFeedback
          >
            <Input placeholder="mother name" />
          </Form.Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Form.Item
            label="Mother Occupation, वालिदा का कारोबार "
            name="mother-occupation"
            rules={[...rules]}
            hasFeedback
          >
            <Input placeholder="mother occupation" />
          </Form.Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Form.Item
            name="brothers"
            label="How many brothers - कितने भाई हैं? "
            rules={[...optionFiedRule]}
            hasFeedback
          >
            <Select placeholder="select brothers" allowClear showSearch >
              <Select.Option value={numberOption[0]} >{numberOption[0]}</Select.Option>
              <Select.Option value={numberOption[1]} >{numberOption[1]}</Select.Option>
              <Select.Option value={numberOption[2]} >{numberOption[2]}</Select.Option>
              <Select.Option value={numberOption[3]} >{numberOption[3]}</Select.Option>
              <Select.Option value={numberOption[4]} >{numberOption[4]}</Select.Option>
              <Select.Option value={numberOption[5]} >{numberOption[5]}</Select.Option>
              <Select.Option value={numberOption[6]} >{numberOption[6]}</Select.Option>
              <Select.Option value={numberOption[7]} >{numberOption[7]}</Select.Option>
              <Select.Option value={numberOption[8]} >{numberOption[8]}</Select.Option>
              <Select.Option value={numberOption[9]} >{numberOption[9]}</Select.Option>
              <Select.Option value={numberOption[10]} >{numberOption[10]}</Select.Option>
            </Select>
          </Form.Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Form.Item
            label="Married brothers/शादी शुदा भाई?"
            name="brothers-married"
            rules={[...optionFiedRule]}
            hasFeedback
          >
            <Select
              placeholder="select married brothers"
              allowClear
              showSearch
            >
              <Select.Option value={numberOption[0]} >{numberOption[0]}</Select.Option>
              <Select.Option value={numberOption[1]} >{numberOption[1]}</Select.Option>
              <Select.Option value={numberOption[2]} >{numberOption[2]}</Select.Option>
              <Select.Option value={numberOption[3]} >{numberOption[3]}</Select.Option>
              <Select.Option value={numberOption[4]} >{numberOption[4]}</Select.Option>
              <Select.Option value={numberOption[5]} >{numberOption[5]}</Select.Option>
              <Select.Option value={numberOption[6]} >{numberOption[6]}</Select.Option>
              <Select.Option value={numberOption[7]} >{numberOption[7]}</Select.Option>
              <Select.Option value={numberOption[8]} >{numberOption[8]}</Select.Option>
              <Select.Option value={numberOption[9]} >{numberOption[9]}</Select.Option>
              <Select.Option value={numberOption[10]} >{numberOption[10]}</Select.Option>
            </Select>
          </Form.Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Form.Item
            name="sisters"
            label="How many sisters - कितनी बहनें हैं?"
            rules={[...optionFiedRule]}
            hasFeedback
          >
            <Select placeholder="select sisters" allowClear showSearch >
              <Select.Option value={numberOption[0]} >{numberOption[0]}</Select.Option>
              <Select.Option value={numberOption[1]} >{numberOption[1]}</Select.Option>
              <Select.Option value={numberOption[2]} >{numberOption[2]}</Select.Option>
              <Select.Option value={numberOption[3]} >{numberOption[3]}</Select.Option>
              <Select.Option value={numberOption[4]} >{numberOption[4]}</Select.Option>
              <Select.Option value={numberOption[5]} >{numberOption[5]}</Select.Option>
              <Select.Option value={numberOption[6]} >{numberOption[6]}</Select.Option>
              <Select.Option value={numberOption[7]} >{numberOption[7]}</Select.Option>
              <Select.Option value={numberOption[8]} >{numberOption[8]}</Select.Option>
              <Select.Option value={numberOption[9]} >{numberOption[9]}</Select.Option>
              <Select.Option value={numberOption[10]} >{numberOption[10]}</Select.Option>
            </Select>
          </Form.Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Form.Item
            label="Married sisters/शादी शुदा बहनें? "
            name="sisters-married"
            rules={[...optionFiedRule]}
            hasFeedback
          >
            <Select
              placeholder="select married sisters"
              allowClear
              showSearch
            >
              <Select.Option value={numberOption[0]} >{numberOption[0]}</Select.Option>
              <Select.Option value={numberOption[1]} >{numberOption[1]}</Select.Option>
              <Select.Option value={numberOption[2]} >{numberOption[2]}</Select.Option>
              <Select.Option value={numberOption[3]} >{numberOption[3]}</Select.Option>
              <Select.Option value={numberOption[4]} >{numberOption[4]}</Select.Option>
              <Select.Option value={numberOption[5]} >{numberOption[5]}</Select.Option>
              <Select.Option value={numberOption[6]} >{numberOption[6]}</Select.Option>
              <Select.Option value={numberOption[7]} >{numberOption[7]}</Select.Option>
              <Select.Option value={numberOption[8]} >{numberOption[8]}</Select.Option>
              <Select.Option value={numberOption[9]} >{numberOption[9]}</Select.Option>
              <Select.Option value={numberOption[10]} >{numberOption[10]}</Select.Option>
            </Select>
          </Form.Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Form.Item
            label="Biradari/Cast, बिरादरी"
            name="biradari"
            rules={[...optionFiedRule]}
            hasFeedback
          >
            <Select placeholder="select biradari" allowClear showSearch >
              <Select.Option value="8">Ansari</Select.Option>
              <Select.Option value="24">Attar</Select.Option>
              <Select.Option value="9">Bade Qureshi (Qasab)</Select.Option>
              <Select.Option value="3">Bagwan</Select.Option>
              <Select.Option value="17">Baid/Lodhi</Select.Option>
              <Select.Option value="10">Chote Qureshi (Qasab)</Select.Option>
              <Select.Option value="12">Cutchi Memon</Select.Option>
              <Select.Option value="21">Khan/Pathan</Select.Option>
              <Select.Option value="16">Konkani</Select.Option>
              <Select.Option value="23">Maniyar</Select.Option>
              <Select.Option value="11">Memon</Select.Option>
              <Select.Option value="1">Momin</Select.Option>
              <Select.Option value="22">Mulani</Select.Option>
              <Select.Option value="5">Nadaf</Select.Option>
              <Select.Option value="13">No Biradari</Select.Option>
              <Select.Option value="7">Pinjari</Select.Option>
              <Select.Option value="6">Qureshi</Select.Option>
              <Select.Option value="18">Rangrez</Select.Option>
              <Select.Option value="25">Rayeen</Select.Option>
              <Select.Option value="20">Sayyed</Select.Option>
              <Select.Option value="19">Shaikh</Select.Option>
              <Select.Option value="4">Tamboli</Select.Option>
            </Select>
          </Form.Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Form.Item
            label="Maslak, मस्लक"
            name="maslak"
            rules={[...optionFiedRule]}
            hasFeedback
          >
            <Select placeholder="select maslak" allowClear showSearch >
              <Select.Option value={maslak_options.Barelvi} >{maslak_options.Barelvi}</Select.Option>
              <Select.Option value={maslak_options.ahele_hadis} >{maslak_options.ahele_hadis}</Select.Option>
              <Select.Option value={maslak_options.bohra} >{maslak_options.bohra}</Select.Option>
              <Select.Option value={maslak_options.deobandi} >{maslak_options.deobandi}</Select.Option>
              <Select.Option value={maslak_options.jamat_islami} >{maslak_options.jamat_islami}</Select.Option>
              <Select.Option value={maslak_options.new_muslim} >{maslak_options.new_muslim}</Select.Option>
              <Select.Option value={maslak_options.no_maslak} >{maslak_options.no_maslak}</Select.Option>
              <Select.Option value={maslak_options.shafai} >{maslak_options.shafai}</Select.Option>
              <Select.Option value={maslak_options.shia} >{maslak_options.shia}</Select.Option>
            </Select>
          </Form.Item>
        </Grid>

      </Grid>
      <Grid container spacing={1} className="ant-btn-parent-class">
        <Grid item sm={1}>
          <Form.Item name="button">
            <Button type="primary" htmlType="submit" className='ant-btn-class' onClick={previousBtnHandle}>
              Previous
            </Button>
          </Form.Item>
        </Grid>
        <Grid item sm={1}>
          <Form.Item name="button" >
            <Button type="primary" htmlType="submit" className='ant-btn-class'>
              Next
            </Button>
          </Form.Item>
        </Grid>
      </Grid>


    </Form>
  )
}

export default FamilyDetailsForm
