import React, { Component } from "react";
import "./TheBlog.css";
import Blog_img from "../resources/Doctor_blog.jpg";
import axios from "axios";

class TheBlog extends Component {
  state = {
    blog: [],
  };
  async componentDidMount() {
    await axios
      .get(`http://localhost:5000/api/blogs/blog/${this.props.id}`)
      .then((data) => {
        this.setState({ blog: data.data[0] });
        console.log(data.data);
      });
  }
  render() {
    return (
      <div>
        <div class="site-cover site-cover-sm same-height overlay single-page">
          <div class="container">
            <div class="row same-height justify-content-center">
              <div class="col-md-12 col-lg-10">
                <div class="post-entry text-center">
                  <span class="post-category text-white bg-success mb-3">
                    Nature
                  </span>
                  <h1 class="mb-4">
                    <a href="#">{this.state.blog.title}</a>
                  </h1>
                  <div class="post-meta align-items-center text-center">
                    <figure class="author-figure mb-0 mr-3 d-inline-block">
                      <img src={Blog_img} alt="Image" class="img-fluid" />
                    </figure>
                    <span class="d-inline-block mt-1">By Carrol Atkinson</span>
                    <span>&nbsp;-&nbsp; February 10, 2019</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section class="site-section py-lg">
          <div class="container">
            <div class="row blog-entries element-animate">
              <div class="col-md-12 col-lg-8 main-content">
                <div class="post-content-body">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: this.state.blog.content,
                    }}
                  />
                </div>

                <div class="pt-5">
                  <p>
                    Categories: <a href="#">Food</a>, <a href="#">Travel</a>{" "}
                    Tags: <a href="#">#manila</a>, <a href="#">#asia</a>
                  </p>
                </div>

                <div class="pt-5">
                  <h3 class="mb-5">6 Comments</h3>
                  <ul class="comment-list">
                    <li class="comment">
                      <div class="vcard">
                        <img src={Blog_img} alt="Image placeholder" />
                      </div>
                      <div class="comment-body">
                        <h3>Jean Doe</h3>
                        <div class="meta">January 9, 2018 at 2:21pm</div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Pariatur quidem laborum necessitatibus, ipsam
                          impedit vitae autem, eum officia, fugiat saepe enim
                          sapiente iste iure! Quam voluptas earum impedit
                          necessitatibus, nihil?
                        </p>
                        <p>
                          <a href="#" class="reply rounded">
                            Reply
                          </a>
                        </p>
                      </div>
                    </li>

                    <li class="comment">
                      <div class="vcard">
                        <img src={Blog_img} alt="Image placeholder" />
                      </div>
                      <div class="comment-body">
                        <h3>Jean Doe</h3>
                        <div class="meta">January 9, 2018 at 2:21pm</div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Pariatur quidem laborum necessitatibus, ipsam
                          impedit vitae autem, eum officia, fugiat saepe enim
                          sapiente iste iure! Quam voluptas earum impedit
                          necessitatibus, nihil?
                        </p>
                        <p>
                          <a href="#" class="reply rounded">
                            Reply
                          </a>
                        </p>
                      </div>

                      <ul class="children">
                        <li class="comment">
                          <div class="vcard">
                            <img src={Blog_img} alt="Image placeholder" />
                          </div>
                          <div class="comment-body">
                            <h3>Jean Doe</h3>
                            <div class="meta">January 9, 2018 at 2:21pm</div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Pariatur quidem laborum
                              necessitatibus, ipsam impedit vitae autem, eum
                              officia, fugiat saepe enim sapiente iste iure!
                              Quam voluptas earum impedit necessitatibus, nihil?
                            </p>
                            <p>
                              <a href="#" class="reply rounded">
                                Reply
                              </a>
                            </p>
                          </div>

                          <ul class="children">
                            <li class="comment">
                              <div class="vcard">
                                <img src={Blog_img} alt="Image placeholder" />
                              </div>
                              <div class="comment-body">
                                <h3>Jean Doe</h3>
                                <div class="meta">
                                  January 9, 2018 at 2:21pm
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Pariatur quidem laborum
                                  necessitatibus, ipsam impedit vitae autem, eum
                                  officia, fugiat saepe enim sapiente iste iure!
                                  Quam voluptas earum impedit necessitatibus,
                                  nihil?
                                </p>
                                <p>
                                  <a href="#" class="reply rounded">
                                    Reply
                                  </a>
                                </p>
                              </div>

                              <ul class="children">
                                <li class="comment">
                                  <div class="vcard">
                                    <img
                                      src={Blog_img}
                                      alt="Image placeholder"
                                    />
                                  </div>
                                  <div class="comment-body">
                                    <h3>Jean Doe</h3>
                                    <div class="meta">
                                      January 9, 2018 at 2:21pm
                                    </div>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Pariatur quidem laborum
                                      necessitatibus, ipsam impedit vitae autem,
                                      eum officia, fugiat saepe enim sapiente
                                      iste iure! Quam voluptas earum impedit
                                      necessitatibus, nihil?
                                    </p>
                                    <p>
                                      <a href="#" class="reply rounded">
                                        Reply
                                      </a>
                                    </p>
                                  </div>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>

                    <li class="comment">
                      <div class="vcard">
                        <img src={Blog_img} alt="Image placeholder" />
                      </div>
                      <div class="comment-body">
                        <h3>Jean Doe</h3>
                        <div class="meta">January 9, 2018 at 2:21pm</div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Pariatur quidem laborum necessitatibus, ipsam
                          impedit vitae autem, eum officia, fugiat saepe enim
                          sapiente iste iure! Quam voluptas earum impedit
                          necessitatibus, nihil?
                        </p>
                        <p>
                          <a href="#" class="reply rounded">
                            Reply
                          </a>
                        </p>
                      </div>
                    </li>
                  </ul>
                  {/* <!-- END comment-list --> */}

                  <div class="comment-form-wrap pt-5">
                    <h3 class="mb-5">Leave a comment</h3>
                    <form action="#" class="p-5 bg-light">
                      <div class="form-group">
                        <label for="message">Message</label>
                        <textarea
                          name=""
                          id="message"
                          cols="30"
                          rows="10"
                          class="form-control"
                        ></textarea>
                      </div>
                      <div class="form-group">
                        <input
                          type="submit"
                          value="Post Comment"
                          class="btn btn-primary"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/* <!-- END main-content --> */}

              <div class="col-md-12 col-lg-4 sidebar">
                <div class="sidebar-box search-form-wrap">
                  <form action="#" class="search-form">
                    <div class="form-group">
                      <span class="icon fa fa-search"></span>
                      <input
                        type="text"
                        class="form-control"
                        id="s"
                        placeholder="Type a keyword and hit enter"
                      />
                    </div>
                  </form>
                </div>
                {/* <!-- END sidebar-box --> */}
                <div class="sidebar-box">
                  <div class="bio text-center">
                    <img
                      src={Blog_img}
                      alt="Image Placeholder"
                      class="img-fluid mb-5"
                    />
                    <div class="bio-body">
                      <h2>Craig David</h2>
                      <p class="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Exercitationem facilis sunt repellendus excepturi
                        beatae porro debitis voluptate nulla quo veniam fuga sit
                        molestias minus.
                      </p>
                      <p>
                        <a
                          href="#"
                          class="btn btn-primary btn-sm rounded px-4 py-2"
                        >
                          Read my bio
                        </a>
                      </p>
                      <p class="social">
                        <a href="#" class="p-2">
                          <span class="fa fa-facebook"></span>
                        </a>
                        <a href="#" class="p-2">
                          <span class="fa fa-twitter"></span>
                        </a>
                        <a href="#" class="p-2">
                          <span class="fa fa-instagram"></span>
                        </a>
                        <a href="#" class="p-2">
                          <span class="fa fa-youtube-play"></span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- END sidebar-box -->   */}
                <div class="sidebar-box">
                  <h3 class="heading">Popular Posts</h3>
                  <div class="post-entry-sidebar">
                    <ul>
                      <li>
                        <a href="">
                          <img
                            src={Blog_img}
                            alt="Image placeholder"
                            class="mr-4"
                          />
                          <div class="text">
                            <h4>
                              There’s a Cool New Way for Men to Wear Socks and
                              Sandals
                            </h4>
                            <div class="post-meta">
                              <span class="mr-2">March 15, 2018 </span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <img
                            src={Blog_img}
                            alt="Image placeholder"
                            class="mr-4"
                          />
                          <div class="text">
                            <h4>
                              There’s a Cool New Way for Men to Wear Socks and
                              Sandals
                            </h4>
                            <div class="post-meta">
                              <span class="mr-2">March 15, 2018 </span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <img
                            src={Blog_img}
                            alt="Image placeholder"
                            class="mr-4"
                          />
                          <div class="text">
                            <h4>
                              There’s a Cool New Way for Men to Wear Socks and
                              Sandals
                            </h4>
                            <div class="post-meta">
                              <span class="mr-2">March 15, 2018 </span>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- END sidebar-box --> */}

                <div class="sidebar-box">
                  <h3 class="heading">Categories</h3>
                  <ul class="categories">
                    <li>
                      <a href="#">
                        Food <span>(12)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Travel <span>(22)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Lifestyle <span>(37)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Business <span>(42)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Adventure <span>(14)</span>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- END sidebar-box --> */}

                <div class="sidebar-box">
                  <h3 class="heading">Tags</h3>
                  <ul class="tags">
                    <li>
                      <a href="#">Travel</a>
                    </li>
                    <li>
                      <a href="#">Adventure</a>
                    </li>
                    <li>
                      <a href="#">Food</a>
                    </li>
                    <li>
                      <a href="#">Lifestyle</a>
                    </li>
                    <li>
                      <a href="#">Business</a>
                    </li>
                    <li>
                      <a href="#">Freelancing</a>
                    </li>
                    <li>
                      <a href="#">Travel</a>
                    </li>
                    <li>
                      <a href="#">Adventure</a>
                    </li>
                    <li>
                      <a href="#">Food</a>
                    </li>
                    <li>
                      <a href="#">Lifestyle</a>
                    </li>
                    <li>
                      <a href="#">Business</a>
                    </li>
                    <li>
                      <a href="#">Freelancing</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- END sidebar --> */}
            </div>
          </div>
        </section>

        <div class="site-section bg-light">
          <div class="container">
            <div class="row mb-5">
              <div class="col-12">
                <h2>More Related Posts</h2>
              </div>
            </div>

            <div class="row align-items-stretch retro-layout">
              <div class="col-md-5 order-md-2">
                <a
                  href="single.html"
                  class="hentry img-1 h-100 gradient"
                  style={{ backgroundImage: `url(${Blog_img})` }}
                >
                  <span class="post-category text-white bg-danger">Travel</span>
                  <div class="text">
                    <h2>The 20 Biggest Fintech Companies In America 2019</h2>
                    <span>February 12, 2019</span>
                  </div>
                </a>
              </div>

              <div class="col-md-7">
                <a
                  href="single.html"
                  class="hentry img-2 v-height mb30 gradient"
                  style={{ backgroundImage: `url(${Blog_img})` }}
                >
                  <span class="post-category text-white bg-success">
                    Nature
                  </span>
                  <div class="text text-sm">
                    <h2>The 20 Biggest Fintech Companies In America 2019</h2>
                    <span>February 12, 2019</span>
                  </div>
                </a>

                <div class="two-col d-block d-md-flex">
                  <a
                    href="single.html"
                    class="hentry v-height img-2 gradient"
                    style={{ backgroundImage: `url(${Blog_img})` }}
                  >
                    <span class="post-category text-white bg-primary">
                      Sports
                    </span>
                    <div class="text text-sm">
                      <h2>The 20 Biggest Fintech Companies In America 2019</h2>
                      <span>February 12, 2019</span>
                    </div>
                  </a>
                  <a
                    href="single.html"
                    class="hentry v-height img-2 ml-auto gradient"
                    style={{ backgroundImage: `url(${Blog_img})` }}
                  >
                    <span class="post-category text-white bg-warning">
                      Lifestyle
                    </span>
                    <div class="text text-sm">
                      <h2>The 20 Biggest Fintech Companies In America 2019</h2>
                      <span>February 12, 2019</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="site-section bg-lightx">
          <div class="container">
            <div class="row justify-content-center text-center">
              <div class="col-md-5">
                <div class="subscribe-1 ">
                  <h2>Subscribe to our newsletter</h2>
                  <p class="mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit nesciunt error illum a explicabo, ipsam nostrum.
                  </p>
                  <form action="#" class="d-flex">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your email address"
                    />
                    <input
                      type="submit"
                      class="btn btn-primary"
                      value="Subscribe"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="site-footer">
          <div class="container">
            <div class="row mb-5">
              <div class="col-md-4">
                <h3 class="footer-heading mb-4">About Us</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Placeat reprehenderit magnam deleniti quasi saepe, consequatur
                  atque sequi delectus dolore veritatis obcaecati quae, repellat
                  eveniet omnis, voluptatem in. Soluta, eligendi, architecto.
                </p>
              </div>
              <div class="col-md-3 ml-auto">
                {/* <!-- <h3 class="footer-heading mb-4">Navigation</h3> --> */}
                <ul class="list-unstyled float-left mr-5">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Advertise</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Subscribes</a>
                  </li>
                </ul>
                <ul class="list-unstyled float-left">
                  <li>
                    <a href="#">Travel</a>
                  </li>
                  <li>
                    <a href="#">Lifestyle</a>
                  </li>
                  <li>
                    <a href="#">Sports</a>
                  </li>
                  <li>
                    <a href="#">Nature</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-4">
                <div>
                  <h3 class="footer-heading mb-4">Connect With Us</h3>
                  <p>
                    <a href="#">
                      <span class="icon-facebook pt-2 pr-2 pb-2 pl-0"></span>
                    </a>
                    <a href="#">
                      <span class="icon-twitter p-2"></span>
                    </a>
                    <a href="#">
                      <span class="icon-instagram p-2"></span>
                    </a>
                    <a href="#">
                      <span class="icon-rss p-2"></span>
                    </a>
                    <a href="#">
                      <span class="icon-envelope p-2"></span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 text-center">
                <p>
                  Copyright &copy;{" "}
                  <script>document.write(new Date().getFullYear());</script> All
                  rights reserved | This template is made with{" "}
                  <i class="icon-heart text-danger" aria-hidden="true"></i> by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TheBlog;
