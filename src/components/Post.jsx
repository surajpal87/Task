import React from "react";
import { Carousel } from "react-bootstrap";

function Post() {
  return (
    <>
      <div className="top-header d-flex align-items-center justify-content-between">
        <img src="images/ARROW.svg" alt="" className="cursor-pointer" />
        <span className="fw-700 fs-18 color-black">Free Talk</span>
        <img src="images/bell.svg" alt="" className="cursor-pointer" />
      </div>
      <div className="row my-2">
        <div className="col-12">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center justify-content-left">
              <img
                src="images/profile.png"
                alt=""
                width={34}
                height={34}
                className="mx-2"
              />
              <div className="">
                <div className="d-flex align-items-center">
                  <h6 className="fs-14 m-0 color-black fw-700">Hello I am</h6>
                  <img
                    src="images/green-check-icon.svg"
                    className="mx-1"
                    alt=""
                    width={14}
                  />
                  <span className="gray-color fs-10 fw-500">1 Day Ago</span>
                </div>
                <div className="fs-12 fw-400 gray-color d-flex">
                  <span className="me-1">165cm</span>
                  <li className="ms-1 under-line-li">53kg</li>
                </div>
              </div>
            </div>
            <div className="">
              <button className="follow-btn">Follow</button>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="mx-2 my-2">
            <h6 className="fw-700 fs-14">
              What's the best product from last Monday's event?
            </h6>
            <p className="fs-12 fw-400 label-color-2 mb-1">
              Pops who attended the 2023 S/S trend event last Monday~ Which
              product did you like best?
            </p>
            <p className="fs-12 fw-400 label-color-2 mb-1">
              Pops who attended the 2023 S/S trend event last Monday~ Which
              product did you like best?
            </p>
            <p className="fs-12 fw-400 label-color-2 mb-1">
              I heard that low-rise is the trend this year, so I want to try it,
              but I'm skinny.
            </p>
            <p className="fs-12 fw-400 label-color-2 mb-1">
              I'm really curious if it would look good on people who don't. At
              the low-rise table
            </p>
            <p className="fs-12 fw-400 label-color-2 mb-1">
              If there are pops that have been there, please share a review of
              how it was~~!
            </p>
          </div>
        </div>
        <div className="col-12">
          <div className="py-2 d-flex flex-wrap">
            <span className="has-tag me-1 mb-2">#2023</span>
            <span className="has-tag me-1 mb-2">#TODAYISMONDAY</span>
            <span className="has-tag me-1 mb-2">#TOP</span>
            <span className="has-tag me-1 mb-2">#POPS!</span>
            <span className="has-tag me-1 mb-2">#WOW</span>
            <span className="has-tag me-1 mb-2">#ROW</span>
          </div>
        </div>
        <div className="col-12 my-2">
          <div className="product-slider">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="images/product.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="images/product.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="images/product.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div className="col-12 py-1 border-bottom">
          <div className="d-flex align-items-center justify-content-start">
            <div className="mx-2 gray-color fs-12 fw-400">
              <img src="images/01.svg" alt="" className="cursor-pointer" />
              <span>5</span>
            </div>
            <div className="mx-2 gray-color fs-12 fw-400">
              <img src="images/02.svg" alt="" className="cursor-pointer" />
              <span>5</span>
            </div>
            <div className="mx-2 gray-color fs-12 fw-400">
              <img src="images/03.svg" alt="" className="cursor-pointer" />
            </div>
            <div className="mx-2 gray-color fs-12 fw-400">
              <img src="images/04.svg" alt="" className="cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="col-12 mt-3 px-0 position-relative">
          <div className="post-commat-box">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center justify-content-left">
                <img
                  src="images/profile.png"
                  alt=""
                  width={34}
                  height={34}
                  className="mx-2"
                />
                <div className="">
                  <div className="d-flex align-items-center">
                    <h6 className="fs-14 m-0 color-black fw-700">Hello I am</h6>
                    <img
                      src="images/green-check-icon.svg"
                      className="mx-1"
                      alt=""
                      width={14}
                    />
                    <span className="gray-color fs-10 fw-500">1 Day Ago</span>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="mx-2 gray-color fs-12 fw-400">
                  <img src="images/04.svg" alt="" className="cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="ms-5 pe-2 mt-2">
              <p className="mb-1 color-black fs-12">
                Oh my, the table I was at must have had the best reaction🤭
                Woojjallami-nim knows, but I also have a normal body, no less
                than that.
              </p>
              <p className="mb-1 color-black fs-12">
                Isn't it?! I was willing to take on the challenge, but it was
                harder than I thought.
              </p>
              <p className="mb-1 color-black fs-12">
                It was fine! A live review is coming up today. Please take a
                look!
              </p>
              <div className="d-flex align-items-center my-2 justify-content-start">
                <div className="me-2 gray-color fs-12 fw-400">
                  <img
                    src="images/01.svg"
                    alt=""
                    className="cursor-pointer"
                    width={25}
                  />
                  <span>5</span>
                </div>
                <div className="mx-2 gray-color fs-12 fw-400">
                  <img
                    src="images/02.svg"
                    alt=""
                    className="cursor-pointer"
                    width={25}
                  />
                  <span>5</span>
                </div>
              </div>
              <div className="">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center justify-content-left">
                    <img
                      src="images/profile.png"
                      alt=""
                      width={34}
                      height={34}
                      className="mx-2"
                    />
                    <div className="">
                      <div className="d-flex align-items-center">
                        <h6 className="fs-14 m-0 color-black fw-700">
                          Hello I am
                        </h6>
                        <img
                          src="images/green-check-icon.svg"
                          className="mx-1"
                          alt=""
                          width={14}
                        />
                        <span className="gray-color fs-10 fw-500">
                          1 Day Ago
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="mx-2 gray-color fs-12 fw-400">
                      <img
                        src="images/04.svg"
                        alt=""
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
                <div className="ms-5 mt-3">
                  <p className="mb-1 color-black fs-12">
                    oh awesome! Did you say the live review was uploaded today?
                    I need to take care of it
                  </p>
                  <div className="d-flex align-items-center my-2 justify-content-start">
                    <div className="me-2 gray-color fs-12 fw-400">
                      <img
                        src="images/02.svg"
                        alt=""
                        className="cursor-pointer"
                        width={25}
                      />
                      <span>5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-top position-absolute bg-white comment-box start-0 bottom-0  w-100 d-flex align-items-center justify-content-between">
            <div className="mx-3 my-2">
              <label
                htmlFor="chat-image"
                className="chat-image-select cursor-pointer"
              >
                <img
                  src="images/gallery-icon.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                <input
                  type="file"
                  name="file_image"
                  className="upload-box m-auto position-absolute start-0 w-100 cursor-pointer"
                  multiple
                  accept=".pdf, .zip"
                  placeholder="Upload Image"
                />
              </label>
            </div>
            <div className="enter-comment">
              <input
                type="text"
                placeholder="Please leave a comment."
                className=""
              />
            </div>
            <div className="mx-2">
              <span className="fs-12 fw-500 gray-color">Registration</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
