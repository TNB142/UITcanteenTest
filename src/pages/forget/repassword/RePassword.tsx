import {
  Container,
  Row,
  Col,
  Stack,
  Nav,
  Form,
  FormGroup,
} from "react-bootstrap";
import React, { useEffect, useState, useCallback } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./style.css";

export function RePassword() {
  const navigate = useNavigate();

  const Move_back = useCallback(() => {
    console.log("Move back to login");
    navigate("/ForgetPassword/Verify");
  }, [navigate]);

  const [newPassword, setNewPassowrd] = useState(null);
  const [verifyNewPassowrd, setVerifyNewPassowrd] = useState(null);

  const updateNewPassword = (currentTargetvalue: any) => {
    setNewPassowrd(currentTargetvalue);
    console.log(currentTargetvalue);
  };
  const updateVerifyNewPassowrd = (currentTargetvalue: any) => {
    setVerifyNewPassowrd(currentTargetvalue);
    console.log(currentTargetvalue);
  };

  const forgetNext = useCallback(() => {
    if (newPassword === verifyNewPassowrd) {
      alert("Đổi mật khẩu thành công");
      console.log("Move back to verify email");
      navigate("/Login");
    }else{
      alert("Mật khẩu mới và xác nhận mật khẩu không khớp, yêu cầu nhập lại")
    }
  }, [navigate, newPassword, verifyNewPassowrd]);

  return (
    <>
      <Container className="bg-light pt-5" id="register">
        <Row>
          <Col className="mb-5">
            <Stack
            // className="bg-white"
            >
              <h1 className="forget_text">Trải nghiệm đặt món online tại</h1>
              <h1 className="CanteenUIT_forget_text">Canteen UIT</h1>
              <div>
                <img
                  alt=""
                  src="../imgs/UIT_CANTEEN.png"
                  style={{
                    width: "542px",
                  }}
                />
              </div>
            </Stack>
          </Col>
          <Col
            // className="bg-danger"
            className="d-flex flex-row justify-content-center align-items-start"
            // style={{
            //   paddingLeft:"10%"
            // }}
          >
            <div className="d-flex flex-column justify-content-center align-items-start">
              <h1 className="mb-3 mg-3 forget_head">Đặt lại mật khẩu</h1>
              <Form
                style={{
                  width: "373px",
                }}
              >
                <Form.Group controlId="inputPassWord">
                  <Form.Control
                    type="password"
                    placeholder="Nhập mật khẩu"
                    className="mb-3 border border-danger border-3 "
                    style={{ height: "60px" }}
                    onChange={(e: any) => updateNewPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="verifyPassWord">
                  <Form.Control
                    type="password"
                    placeholder="Xác nhận mật khẩu"
                    className="mb-3 border border-danger border-3 "
                    style={{ height: "60px" }}
                    onChange={(e: any) =>
                      updateVerifyNewPassowrd(e.target.value)
                    }
                  />
                </Form.Group>
              </Form>
              <button
                className=" text-center button_Next_page"
                onClick={forgetNext}
              >
                <div className="forget_next_page_Text">Tiếp tục</div>
              </button>
              <div className="pt-2 w-100 d-flex flex-row justify-content-center">
                <img
                  alt=""
                  src="../../svg/arrow-back-circle-sharp.svg"
                  className="previous_page_button"
                  onClick={Move_back}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
