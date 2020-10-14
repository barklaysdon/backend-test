import * as React from "react";
import { Form, Input, Button } from "antd";
import firebase from "../../auth/firebase";
import { useState } from "react";

interface ILogin {
  email: string;
  password: string;
}

const Login = () => {
  const [form] = Form.useForm();
  const [loginsuccess, setLoginsuccess] = useState(false);

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const onLoginSubmit = async ({ password, ...values }: ILogin) => {
    //   const onFormSubmit = async (values: ILogin) => {
    //     const { username, password } = values;

    const email = values.email.trim().toLowerCase();
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          setLoginsuccess(true);
        });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      {loginsuccess && (
        <h3 style={{ color: "green", wordSpacing: 10 }}>LOGIN SUCCESS</h3>
      )}
      {!loginsuccess && (
        <Form
          form={form}
          {...layout}
          className="Form"
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onLoginSubmit}
        >
          <Form.Item
            name="email"
            label="email"
            required
            rules={[
              {
                whitespace: true,
                required: true,
              },
              { type: "email" },
            ]}
          >
            <Input size="large" placeholder="email@email.com" />
          </Form.Item>
          <Form.Item
            label="password"
            name="password"
            required
            rules={[
              {
                whitespace: true,
                required: true,
                message: "enter your password",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">valider</Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default Login;
