"use client";

import React, { useState } from "react";
import { Button, ConfigProvider, Form, Input, theme } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Page = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form values:", values);
  };

  const images = Array.from(
    { length: 5 },
    (_, i) => `https://picsum.photos/800/400?random=${i + 1}`
  );

  return (
    <ConfigProvider
      theme={{ algorithm: theme.defaultAlgorithm }}
      direction="rtl"
    >
      <div className="min-h-screen flex justify-center  md:pt-0 px-0 sm:px-6 lg:px-8 ">
        <div className="w-[90%] h-fit md:h-[75vh] md:w-[100%] flex flex-col md:flex-row rounded-2xl p-6 md:p-10 shadow-xl bg-neutral-light space-y-8 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2 md:px-12 h-1/2 md:h-full flex flex-col justify-center">
            <h2 className="text-center text-xl md:text-3xl font-extrabold mb-6">
              {isLogin ? "ورود به حساب کاربری" : "ثبت نام"}
            </h2>
            <Form
              form={form}
              name="auth"
              layout="vertical"
              onFinish={onFinish}
              className="space-y-4"
            >
              {!isLogin && (
                <>
                <div className="flex flex-col md:flex-row gap-5">

                  <Form.Item
                  className="w-full md:w-1/2"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "لطفا نام کاربری را وارد کنید",
                      },
                    ]}
                  >
                    <Input placeholder="نام کاربری" size="large" />
                  </Form.Item>

                  <Form.Item
                  className="w-full md:w-1/2"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "لطفا ایمیل خود را وارد کنید",
                      },
                      { type: "email", message: "ایمیل معتبر نیست" },
                    ]}
                  >
                    <Input placeholder="ایمیل" size="large" />
                  </Form.Item>
                </div>

                  <ConfigProvider direction="ltr">
                    <Form.Item
                      name="phone"
                      rules={[
                        {
                          required: true,
                          message: "لطفا شماره تماس خود را وارد کنید",
                        },
                      ]}
                    >
                      <Input
                        type="tel"
                        addonAfter={<span>98+</span>}
                        placeholder="شماره تماس"
                        size="large"
                      />
                    </Form.Item>
                  </ConfigProvider>
                </>
              )}

              {isLogin && (
                <Form.Item
                  name="loginUsername"
                  rules={[
                    { required: true, message: "لطفا نام کاربری را وارد کنید" },
                  ]}
                >
                  <Input placeholder="نام کاربری" size="large" />
                </Form.Item>
              )}

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "لطفا رمز عبور را وارد کنید" },
                ]}
              >
                <Input.Password placeholder="رمز عبور" size="large" />
              </Form.Item>

              {!isLogin && (
                <Form.Item
                  name="confirmPassword"
                  dependencies={["password"]}
                  rules={[
                    { required: true, message: "لطفا رمز عبور را تکرار کنید" },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error("رمز عبور و تکرار آن مطابقت ندارند")
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password placeholder="تکرار رمز عبور" size="large" />
                </Form.Item>
              )}

              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="w-full"
              >
                {isLogin ? "ورود" : "ثبت نام"}
              </Button>

              <div className="text-center mt-4">
                <Button type="link" onClick={() => setIsLogin(!isLogin)}>
                  {isLogin ? "ثبت نام در سایت" : "ورود به حساب کاربری"}
                </Button>
              </div>
            </Form>
          </div>
          <div className="w-full hidden md:block h-1/2 md:h-auto md:w-1/2">
            <div className="h-full rounded-xl overflow-hidden ">
              <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                loop
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                className="h-full login-slider"
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Page;
