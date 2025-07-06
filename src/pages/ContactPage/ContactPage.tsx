import emailjs from "@emailjs/browser";
import { Button, Col, Input, notification, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import { IoLocationSharp } from "react-icons/io5";
import { Form } from "antd";

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  message: string;
  [key: string]: unknown;
}

const ContactPage = () => {
  const [submitForm] = useForm();
  const [api, contextHolder] = notification.useNotification();

  const onFinish = (values: IForm) => {
    emailjs
      .send("service_h9py1vp", "template_yev6wql", values, "AoqdNMr_Mrg_Hzm_T")
      .then(
        (result) => {
          console.log("Email sent!", result.text);

          submitForm.resetFields();
          api.success({
            message: "Email sent successfully",
            description: "Your messsage has been sent successfully",
          });
        },
        () => {
          api.error({
            message: "Message not sent",
            description: "Server error please contact the webiste admin",
          });
        }
      );
  };
  return (
    <section className="w-100 h-100 flex justify-center">
      <div className="contactpage-cont">
        <Row gutter={16} className="pb-5 mt-5 w-100 h-100 text-white">
          <Col xs={24} md={12}>
            <div className="m-1">
              <div className="font-30 w-75 pb-5">
                Let's build amazing things thogether
              </div>
              <div>
                <div>
                  <IoLocationSharp className="text-red pr-1 font-14" />
                  Belgrade
                </div>
                <div className="pt-1">
                  <p className="pb-1">Belgrade, BG 11000</p>
                  <p className="pb-1">+381603311553</p>
                  <p className="pb-1">dusan.ilic1999@gmail.com</p>
                </div>
              </div>
            </div>
          </Col>
          <Col
            xs={24}
            md={24}
            lg={12}
            className="w-100 flex justify-center"
            style={{ height: "fit-content" }}
          >
            {contextHolder}
            <div className="bg-black box-shadow flex w-75 justify-center p-2 pt-4 pb-4 m-1">
              <Form
                name="basic"
                layout="vertical"
                form={submitForm}
                style={{ maxWidth: 400 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
              >
                <Row gutter={20}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      labelAlign="left"
                      label={
                        <span className="text-white font-12">First name</span>
                      }
                      className="text-white font-20"
                      name="firstName"
                      rules={[
                        {
                          required: true,
                          message: "Please input first name!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label={
                        <span className="text-white font-12">Last name</span>
                      }
                      name="lastName"
                      rules={[
                        {
                          required: true,
                          message: "Please input last name!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item
                  label={<span className="text-white font-12">Email</span>}
                  name="email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                      message: "Please input email adress!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label={<span className="text-white font-12">Message</span>}
                  name="message"
                  rules={[
                    {
                      required: true,
                      message: "Please input your message!",
                    },
                  ]}
                >
                  <TextArea rows={5} />
                </Form.Item>
                <Row justify={"end"}>
                  <Button htmlType="submit" type="primary" className="bg-green">
                    Send
                  </Button>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export { ContactPage };
