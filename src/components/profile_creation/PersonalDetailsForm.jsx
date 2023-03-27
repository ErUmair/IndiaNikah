import React, { useState } from 'react'
import {
  Form,
  Button,
  Checkbox,
  Input,
  DatePicker,
  Select,
  Typography,

} from 'antd'
import { Grid } from '@mui/material'

// Marital Status options -
const Martial_Status = {
  unmarried: 'Unmarried',
  divorced: 'Divorced',
  awaiting_divorced: 'Awaiting Divorced',
  khula: 'Khula',
  '2nd_marrige': '2nd Marrige',
  widow_female: 'Widow (Female)',
  widower_male: 'Widower (Male)',
}

// education option

const EDUCATION_OPTIONS = {
  alim: 'Aalim / Aalima',
  below_10th: 'Below 10th',
  doctor: 'DOCTOR',
  diploma: 'Diploma',
  engineer: 'Engineer',
  graduate: 'Graduate',
  hafiz: 'Hafiz',
  post_graduate: 'Post Graduate',
  PHD: 'Ph.D',
  pass_10th: '10th Pass',
  pass_12th: '12th Pass',

}

// height option
const HEIGHT_OPTIONS =
{
  1: `4'0"`,
  2: `4'1"`,
  3: `4'2"`,
  4: `4'3"`,
  5: `4'4"`,
  6: `4'5"`,
  7: `4'6"`,
  8: `4'7"`,
  9: `4'8"`,
  10: `4'9"`,
  11: `4'10"`,
  12: `4'11"`,
  13: `5'0"`,
  14: `5'1"`,
  15: `5'2"`,
  16: `5'3"`,
  17: `5'4"`,
  18: `5'5"`,
  19: `5'6"`,
  20: `5'7"`,
  21: `5'8"`,
  22: `5'9"`,
  23: `5'10"`,
  24: `5'11"`,
  25: `6'0"`,
  26: `6'1"`,
  27: `6'2"`,
  28: `6'3"`,
  29: `6'4"`,
  30: `6'5"`,
  31: `6'6"`,
  32: `6'7"`,
  33: `6'8"`,
  34: `6'9"`,
  35: `6'10"`,
  36: `6'11"`,
  37: `7'0"`,
  38: `7'0"+`,
}

const CHILDREN = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "10"
}


const PersonalDetailsForm = ({ personalOnFinish }) => {

  const [check, setCheck] = useState(false)
  const [martialStatus, setMartialStatus] = useState('')

  // physical status value state
  const [physicalStatus, setPhysicalStatus] = useState('')

  const checkBoxHandle = (values) => {
    // console.log(values.target.checked)
    setCheck(values.target.checked)
  }

  //  Martial status handle function
  const martialStatusHandle = (value) => {
    setMartialStatus(value)
  }

  // handle physical status -
  const handlePhysicalStatus = (value) => setPhysicalStatus(value)

  // const onFinish = (value)=>{
  //   console.log(value);
  // }



  return (
    <Form
      autoComplete="off"
      onFinish={personalOnFinish}

    >
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
          <Form.Item
            name="first_name_&_surname"
            label="Bride/Groom's First Name & Surname"
            hasFeedback
            rules={[
              {
                required: true,
              },
              {
                whitespace: true,
              },
              {
                max: 30,
              },
            ]}
          >
            <Input placeholder="type your name" maxLength="30"/>
          </Form.Item>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Form.Item
            name="gender"
            label="Gender-मेल/फीमेल"
            hasFeedback
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="select your gender"
              allowClear
              showSearch={true}
            >
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
            </Select>
          </Form.Item>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Form.Item
            name="martial_status"
            label="Marital Status - गैर शादी शुदा /तलाक़ शुदा ?"
            hasFeedback
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="select your martial status"
              onChange={martialStatusHandle}
              allowClear
              showSearch
            >
              <Select.Option value={Martial_Status.unmarried}>
                {Martial_Status.unmarried}
              </Select.Option>
              <Select.Option value={Martial_Status.divorced}>
                {Martial_Status.divorced}
              </Select.Option>
              <Select.Option value={Martial_Status.awaiting_divorced}>
                {Martial_Status.awaiting_divorced}
              </Select.Option>
              <Select.Option value={Martial_Status.khula}>
                {Martial_Status.khula}
              </Select.Option>
              <Select.Option value={Martial_Status['2nd_marrige']}>
                {Martial_Status['2nd_marrige']}
              </Select.Option>
              <Select.Option value={Martial_Status.widow_female}>
                {Martial_Status.widow_female}
              </Select.Option>
              <Select.Option value={Martial_Status.widower_male}>
                {Martial_Status.widower_male}
              </Select.Option>
            </Select>
          </Form.Item>
        </Grid>

        {martialStatus === 'Divorced' ||
          martialStatus === 'Awaiting Divorced' ||
          martialStatus === 'Khula' ||
          martialStatus === '2nd Marrige' ||
          martialStatus === 'Widow (Female)' ||
          martialStatus === 'Widower (Male)' ? (
          <>
            <Grid item xs={12} sm={6}>
              {(martialStatus === 'Divorced' && (
                <Form.Item
                  label="Reason of Divorced"
                  name="reason"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              )) ||
                (martialStatus === 'Awaiting Divorced' && (
                  <Form.Item
                    label="Reason of Awaiting Divorced"
                    name="reason"
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                )) ||
                (martialStatus === 'Khula' && (
                  <Form.Item
                    label="Reason of Khula"
                    name="reason"
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                )) ||
                (martialStatus === '2nd Marrige' && (
                  <Form.Item
                    label="Reason of 2nd Marrige"
                    name="reason"
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                )) ||
                (martialStatus === 'Widow (Female)' && (
                  <Form.Item
                    label="Reason of Widow (Female)"
                    name="reason"
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                )) ||
                (martialStatus === 'Widower (Male)' && (
                  <Form.Item
                    label="Reason of Widower (Male)"
                    name="reason"
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                ))}
            </Grid>

            <Grid item xs={12} sm={6}>
              <Form.Item
                name="children"
                label="How Many Children? - कितने बच्चे हैं?"
                hasFeedback
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="select your children"
                  allowClear
                  showSearch
                >
                  <Select.Option value={CHILDREN[0]}>{CHILDREN[0]}</Select.Option>
                  <Select.Option value={CHILDREN[1]}>{CHILDREN[1]}</Select.Option>
                  <Select.Option value={CHILDREN[2]}>{CHILDREN[2]}</Select.Option>
                  <Select.Option value={CHILDREN[3]}>{CHILDREN[3]}</Select.Option>
                  <Select.Option value={CHILDREN[4]}>{CHILDREN[4]}</Select.Option>
                  <Select.Option value={CHILDREN[5]}>{CHILDREN[5]}</Select.Option>
                  <Select.Option value={CHILDREN[6]}>{CHILDREN[6]}</Select.Option>
                  <Select.Option value={CHILDREN[7]}>{CHILDREN[7]}</Select.Option>
                  <Select.Option value={CHILDREN[8]}>{CHILDREN[8]}</Select.Option>
                  <Select.Option value={CHILDREN[9]}>{CHILDREN[9]}</Select.Option>
                  <Select.Option value={CHILDREN[10]}>{CHILDREN[10]}</Select.Option>
                </Select>
              </Form.Item>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Form.Item
                name="marrige_duration"
                label="Marriage Duration(years/months) - शादी कितने दिन तक रही"
                hasFeedback
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input placeholder="type duration" />
              </Form.Item>
            </Grid>
          </>
        ) : (
          ''
        )}

        <Grid item xs={12} sm={6}>
          <Form.Item
            name="date_of_birth"
            label="Date of Birth - पैदाइश तारीख "
            hasFeedback
            rules={[
              {
                required: true,
              },
            ]}
          >
            <DatePicker
              style={{ width: '100%' }}
              placeholder="choos only month and year "
              picker="month"
            />
          </Form.Item>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Form.Item
            name="height"
            label="Height - हाइट"
            hasFeedback
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select placeholder="select your height">
              <Select.Option value={HEIGHT_OPTIONS[1]} >{HEIGHT_OPTIONS[1]}</Select.Option>
              <Select.Option value={HEIGHT_OPTIONS[2]} >{HEIGHT_OPTIONS[2]}</Select.Option>
              <Select.Option value={HEIGHT_OPTIONS[3]} >{HEIGHT_OPTIONS[3]}</Select.Option>
              <Select.Option value={HEIGHT_OPTIONS[4]} >{HEIGHT_OPTIONS[4]}</Select.Option>
              <Select.Option value={HEIGHT_OPTIONS[5]} >{HEIGHT_OPTIONS[5]}</Select.Option>
              <Select.Option value={HEIGHT_OPTIONS[6]} >{HEIGHT_OPTIONS[6]}</Select.Option>
              <Select.Option value={HEIGHT_OPTIONS[7]} >{HEIGHT_OPTIONS[7]}</Select.Option>
              <Select.Option value={HEIGHT_OPTIONS[8]} >{HEIGHT_OPTIONS[8]}</Select.Option>
              <Select.Option value={HEIGHT_OPTIONS[9]} >{HEIGHT_OPTIONS[9]}</Select.Option>
              <Select.Option value={HEIGHT_OPTIONS[10]} >{HEIGHT_OPTIONS[10]}</Select.Option>
              <Select.Option value={HEIGHT_OPTIONS[11]} >{HEIGHT_OPTIONS[11]}</Select.Option>
              <Select.Option value={HEIGHT_OPTIONS[12]} >{HEIGHT_OPTIONS[12]}</Select.Option>
              <Select.Option value={HEIGHT_OPTIONS[13]} >{HEIGHT_OPTIONS[13]}</Select.Option>
              <Select.Option value={HEIGHT_OPTIONS[14]} >{HEIGHT_OPTIONS[14]}</Select.Option>
              <Select.Option value={HEIGHT_OPTIONS[15]} >{HEIGHT_OPTIONS[15]}</Select.Option>
              <Select.Option value={HEIGHT_OPTIONS[16]} >{HEIGHT_OPTIONS[16]}</Select.Option>
              <Select.Option value={HEIGHT_OPTIONS[17]} >{HEIGHT_OPTIONS[17]}</Select.Option>
              <Select.Option value={HEIGHT_OPTIONS[18]} >{HEIGHT_OPTIONS[18]}</Select.Option>
              <Select.Option value={HEIGHT_OPTIONS[19]} >{HEIGHT_OPTIONS[19]}</Select.Option>
              <Select.Option value={HEIGHT_OPTIONS[20]} >{HEIGHT_OPTIONS[20]}</Select.Option>
              <Select.Option value={HEIGHT_OPTIONS[21]} >{HEIGHT_OPTIONS[21]}</Select.Option>
              <Select.Option value={HEIGHT_OPTIONS[22]} >{HEIGHT_OPTIONS[22]}</Select.Option>
              <Select.Option value={HEIGHT_OPTIONS[23]} >{HEIGHT_OPTIONS[23]}</Select.Option>
              <Select.Option value={HEIGHT_OPTIONS[24]} >{HEIGHT_OPTIONS[24]}</Select.Option>
              <Select.Option value={HEIGHT_OPTIONS[25]} >{HEIGHT_OPTIONS[25]}</Select.Option>
              <Select.Option value={HEIGHT_OPTIONS[26]} >{HEIGHT_OPTIONS[26]}</Select.Option>
              <Select.Option value={HEIGHT_OPTIONS[28]} >{HEIGHT_OPTIONS[27]}</Select.Option>
              <Select.Option value={HEIGHT_OPTIONS[29]} >{HEIGHT_OPTIONS[29]}</Select.Option>
              <Select.Option value={HEIGHT_OPTIONS[30]} >{HEIGHT_OPTIONS[30]}</Select.Option>
              <Select.Option value={HEIGHT_OPTIONS[31]} >{HEIGHT_OPTIONS[31]}</Select.Option>
              <Select.Option value={HEIGHT_OPTIONS[32]} >{HEIGHT_OPTIONS[32]}</Select.Option>
              <Select.Option value={HEIGHT_OPTIONS[33]} >{HEIGHT_OPTIONS[33]}</Select.Option>
              <Select.Option value={HEIGHT_OPTIONS[34]} >{HEIGHT_OPTIONS[34]}</Select.Option>
              <Select.Option value={HEIGHT_OPTIONS[35]} >{HEIGHT_OPTIONS[35]}</Select.Option>
              <Select.Option value={HEIGHT_OPTIONS[36]} >{HEIGHT_OPTIONS[36]}</Select.Option>
              <Select.Option value={HEIGHT_OPTIONS[37]} >{HEIGHT_OPTIONS[37]}</Select.Option>
              <Select.Option value={HEIGHT_OPTIONS[38]} >{HEIGHT_OPTIONS[38]}</Select.Option>
            </Select>
          </Form.Item>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Form.Item
            name="education"
            label="Education - पढ़ाई"
            hasFeedback
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="select your education"
              showSearch
              allowClear
            >
              <Select.Option value={EDUCATION_OPTIONS.alim}>{EDUCATION_OPTIONS.alim}</Select.Option>
              <Select.Option value={EDUCATION_OPTIONS.hafiz}>{EDUCATION_OPTIONS.hafiz}</Select.Option>
              <Select.Option value={EDUCATION_OPTIONS.below_10th}>{EDUCATION_OPTIONS.below_10th}</Select.Option>
              <Select.Option value={EDUCATION_OPTIONS.pass_10th}>{EDUCATION_OPTIONS.pass_10th}</Select.Option>
              <Select.Option value={EDUCATION_OPTIONS.pass_12th}>{EDUCATION_OPTIONS.pass_12th}</Select.Option>
              <Select.Option value={EDUCATION_OPTIONS.graduate}>{EDUCATION_OPTIONS.graduate}</Select.Option>
              <Select.Option value={EDUCATION_OPTIONS.post_graduate}>{EDUCATION_OPTIONS.post_graduate}</Select.Option>
              <Select.Option value={EDUCATION_OPTIONS.diploma}>{EDUCATION_OPTIONS.diploma}</Select.Option>
              <Select.Option value={EDUCATION_OPTIONS.engineer}>{EDUCATION_OPTIONS.engineer}</Select.Option>
              <Select.Option value={EDUCATION_OPTIONS.PHD}>{EDUCATION_OPTIONS.PHD}</Select.Option>
            </Select>
          </Form.Item>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Form.Item
            name="degree"
            label="Degree - डिग्री"
            hasFeedback
            rules={[
              {
                required: true,
              },
              {
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="type your degree"/>
          </Form.Item>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Form.Item
            name="occupation"
            label="Occupation - कारोबार"
            hasFeedback
            rules={[
              {
                required: true,
              },
              {
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="type your occupation" />
          </Form.Item>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Form.Item
            name="physical_status"
            label="Physical Status"
            hasFeedback
            rules={[
              {
                required: false,
              },
            ]}
          >
            <Select
              placeholder="select your physical status"
              allowClear
              defaultValue="Normal"
              onChange={handlePhysicalStatus}
            >
              <Select.Option value="Normal">Normal</Select.Option>
              <Select.Option value="Handicap">Handicap</Select.Option>
            </Select>
          </Form.Item>
        </Grid>
        {
          physicalStatus === 'Handicap' && (
            <Grid item xs={12} >
              <Form.Item
                label="Handicap Details"
                hasFeedback
                name='handicap_details'
              >
                <Input />
              </Form.Item>
            </Grid>
          )
        }

        <Grid item sm={6} xs={12}>
          <Form.Item
            name="hobbies"
            label="Hobbies - शौक"
            hasFeedback
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.TextArea placeholder="type your hobbies" />
          </Form.Item>
        </Grid>

        <Grid item sm={6} xs={12}>
          <Form.Item
            name="weight"
            label="Weight - वजन"
            hasFeedback
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Grid>

        <Grid item sm={12}>
          <Form.Item>
            <Typography.Text>Native - आप किस जगह से हैं?</Typography.Text>
          </Form.Item>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Form.Item
            name="state"
            label="State"
            hasFeedback
            rules={[
              {
                // required: true,
              },
            ]}
          >
            <Select
              placeholder="select your state"
              allowClear
              showSearch
            ></Select>
          </Form.Item>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Form.Item
            name="city"
            label="City"
            hasFeedback
            rules={[
              {
                // required: true,
              },
            ]}
          >
            <Select
              placeholder="select your city"
              allowClear
              showSearch
            ></Select>
          </Form.Item>
        </Grid>

        <Grid item sm={12}>
          <Form.Item>
            <Checkbox onChange={checkBoxHandle}>
              current location same as native location.
            </Checkbox>
          </Form.Item>
        </Grid>

        <Grid item sm={12}>
          <Form.Item>
            <Typography.Text>
              <b>Current location - अभी कहा रहेते या जॉब करते हैं?</b>
              <p>*Country</p>
            </Typography.Text>
          </Form.Item>
        </Grid>

        {!check && (
          <>
            <Grid item xs={12} sm={6}>
              <Form.Item name="current_state" label="State">
                <Select placeholder="select your state"></Select>
              </Form.Item>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Form.Item name="current_city" label="City">
                <Select placeholder="select your city"></Select>
              </Form.Item>
            </Grid>
          </>
        )}
      </Grid>
      <Grid item sm={12}>
        <Form.Item name="button" className='ant-btn-parent-class'>
          <Button type="primary" htmlType="submit" className='ant-btn-class' justify="center">
            Next
          </Button>
        </Form.Item>
      </Grid>

    </Form>
  )
}

export default PersonalDetailsForm
