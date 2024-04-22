import styles from "./styles.module.css";
import Slider from "../../Components/Swiper";
import SlidePartner from "@/app/Components/SlidePartner";
import MenuItem from "@/app/Components/Menu";
import Partners from "@/app/Components/partners";
import Translation from "@/app/Components/Translation";
import DemoLB from "@/app/Components/LightBox";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { AirplaneOutlined } from '@ant-design/icons';

export const metadata = {
  title: "Home Page VJC",
  description: "Training NextJs",
  openGraph: {
    images: [
      "https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogobanner.dcf00dbd.png&w=3840&q=75",
    ],
    title: "Home",
    description: "Training NextJs",
  },
};

const images = [
  { src: "https://www.vjp-connect.com/images/logo-company-1.png" },
  { src: "https://www.vjp-connect.com/images/logo-company-2.png" },
  { src: "https://www.vjp-connect.com/images/logo-company-3.png" },
  { src: "https://www.vjp-connect.com/images/logo-company-4.png" },
  { src: "https://www.vjp-connect.com/images/logo-company-5.png" },
  { src: "https://www.vjp-connect.com/images/logo-company-6.png" },
];

export default function HomePageLayout({ children }) {
  return (
    <>
      <div className={styles.body}>
        <nav>
          <div className={styles.spin__container}>
            <div className={styles.translate_container}>
              <div className={styles.translate_left}></div>
              <div className={styles.translate_right}>
                <Translation />
              </div>
            </div>
            <div className={styles.Navbar_navbar__container}>
              <div className={styles.Navbar_logo}>
                <a href="/Screen/Home">
                  <img
                    src="https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogovjpc.8300dbca.png&w=384&q=75"
                    width={"50%"}
                    height={"100%"}
                  />
                </a>
              </div>
              <div className={styles.Navbar_navbar__menu}>
                <div className={styles.Navbar_navbar__left_menu}>
                  <a href="/">
                    <button>
                      Account Register
                      <br /> <span>(FREE)</span>
                    </button>
                  </a>
                  <MenuItem />
                </div>
              </div>
            </div>
          </div>
          <div>
            <DemoLB />
            <form data-gtm-form-interact-id="0">
              <div className={styles.container_content_search}>
                <input
                  type="text"
                  placeholder="Search company..."
                  className={styles.search}
                />
                <div className={styles.radio_buttons}>
                  <label className={styles.label}>
                    <input type="radio" name="options" value="option1" />
                    <img
                      src="https://www.vjp-connect.com/_next/image?url=%2Fimages%2Flogo2.png&w=64&q=75"
                      width={80}
                      height={80}
                    />
                  </label>
                  <label className={styles.label}>
                    <input type="radio" name="options" value="option2" />
                    <img
                      src="https://www.vjp-connect.com/_next/image?url=%2Fimages%2Flogo4.png&w=64&q=75"
                      width={80}
                      height={80}
                    />
                  </label>
                  <button type="submit" className={styles.btn_search}>
                    Search
                  </button>
                </div>
              </div>
            </form>
            <h3 className={styles.matching_title}>Prominent Partners</h3>
            <div className={styles.title}>
              <div className={styles.oth_sub_header_home}>
                <span className={styles.oth_sub_header_home_span}></span>
                Representative Company In
                <span className={styles.title_red}>JAPAN</span>
                <span className={styles.oth_sub_header_home_span}></span>
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.company__presentative}>
                <div className={styles.company__presentative__content}>
                  <Partners data={"data"} />
                  {/* <div className={styles.company__wrapper}>
                    <div className={styles.company__container}>
                      <div className={styles.company__left}>
                        <div>
                          <div className={styles.company__left__image}>
                            <img
                              src="https://vjp-connect-upload.s3.ap-southeast-1.amazonaws.com/50d945a1c2196cca66dd7706e599f1af"
                              width={"100%"}
                              height={"100%"}
                            />
                          </div>
                          <div className={styles.company__left__country}>
                            <img
                              src="https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo1.3907871c.png&w=64&q=75"
                              width={64}
                              height={64}
                            />
                            <img
                              src="https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fctynhat.f204ff5d.png&w=256&q=75"
                              width={64}
                              height={64}
                            />
                          </div>
                          <div className={styles.company__left__button}>
                            <button>Detail</button>
                          </div>
                        </div>
                      </div>
                      <div className={styles.company__right}>
                        <div className={styles.company__right__content}>
                          <h3 className={styles.text_truncate}>
                            NAKAYAMA CO., LTD
                          </h3>
                          <p className={styles.text_truncate}>
                            Establishment: 1948
                          </p>
                          <p className={styles.text_truncate}>Employers: 57</p>
                          <p className={styles.text_truncate}>
                            Capital: 2000万円
                          </p>
                          <p className={styles.text_truncate}>
                            Address: 627-0012 657-1 Sugitani, Mineyama-cho,
                            Kyotango City, Kyoto Prefecture, Japan.
                          </p>
                          <p className={styles.text_truncate}>
                            Category: Other
                          </p>
                          <p className={styles.text_truncate}>
                            Needs: Looking for business partner in Viet Nam
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.company__container}>
                      <div className={styles.company__left}>
                        <div>
                          <div className={styles.company__left__image}>
                            <img
                              src="https://vjp-connect-upload.s3.ap-southeast-1.amazonaws.com/50d945a1c2196cca66dd7706e599f1af"
                              width={"100%"}
                              height={"100%"}
                            />
                          </div>
                          <div className={styles.company__left__country}>
                            <img
                              src="https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo1.3907871c.png&w=64&q=75"
                              width={64}
                              height={64}
                            />
                            <img
                              src="https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fctynhat.f204ff5d.png&w=256&q=75"
                              width={64}
                              height={64}
                            />
                          </div>
                          <div className={styles.company__left__button}>
                            <button>Detail</button>
                          </div>
                        </div>
                      </div>
                      <div className={styles.company__right}>
                        <div className={styles.company__right__content}>
                          <h3 className={styles.text_truncate}>
                            NAKAYAMA CO., LTD
                          </h3>
                          <p className={styles.text_truncate}>
                            Establishment: 1948
                          </p>
                          <p className={styles.text_truncate}>Employers: 57</p>
                          <p className={styles.text_truncate}>
                            Capital: 2000万円
                          </p>
                          <p className={styles.text_truncate}>
                            Address: 627-0012 657-1 Sugitani, Mineyama-cho,
                            Kyotango City, Kyoto Prefecture, Japan.
                          </p>
                          <p className={styles.text_truncate}>
                            Category: Other
                          </p>
                          <p className={styles.text_truncate}>
                            Needs: Looking for business partner in Viet Nam
                          </p>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            <div className={styles.title}>
              <div className={styles.oth_sub_header_home}>
                <span className={styles.oth_sub_header_home_span}></span>
                Representative Company In
                <span className={styles.title_red}>VIET NAM</span>
                <span className={styles.oth_sub_header_home_span}></span>
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.company__presentative}>
                <div className={styles.company__presentative__content}>
                  <Partners data={"data2"} />
                  {/* <div className={styles.company__wrapper}>
                    <div className={styles.company__container}>
                      <div className={styles.company__left}>
                        <div>
                          <div className={styles.company__left__image}>
                            <img
                              src="https://vjp-connect-upload.s3.ap-southeast-1.amazonaws.com/50d945a1c2196cca66dd7706e599f1af"
                              width={"100%"}
                              height={"100%"}
                            />
                          </div>
                          <div className={styles.company__left__country}>
                            <img
                              src="https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo1.3907871c.png&w=64&q=75"
                              width={64}
                              height={64}
                            />
                            <img
                              src="https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fctynhat.f204ff5d.png&w=256&q=75"
                              width={64}
                              height={64}
                            />
                          </div>
                          <div className={styles.company__left__button}>
                            <button>Detail</button>
                          </div>
                        </div>
                      </div>
                      <div className={styles.company__right}>
                        <div className={styles.company__right__content}>
                          <h3 className={styles.text_truncate}>
                            NAKAYAMA CO., LTD
                          </h3>
                          <p className={styles.text_truncate}>
                            Establishment: 1948
                          </p>
                          <p className={styles.text_truncate}>Employers: 57</p>
                          <p className={styles.text_truncate}>
                            Capital: 2000万円
                          </p>
                          <p className={styles.text_truncate}>
                            Address: 627-0012 657-1 Sugitani, Mineyama-cho,
                            Kyotango City, Kyoto Prefecture, Japan.
                          </p>
                          <p className={styles.text_truncate}>
                            Category: Other
                          </p>
                          <p className={styles.text_truncate}>
                            Needs: Looking for business partner in Viet Nam
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.company__container}>
                      <div className={styles.company__left}>
                        <div>
                          <div className={styles.company__left__image}>
                            <img
                              src="https://vjp-connect-upload.s3.ap-southeast-1.amazonaws.com/50d945a1c2196cca66dd7706e599f1af"
                              width={"100%"}
                              height={"100%"}
                            />
                          </div>
                          <div className={styles.company__left__country}>
                            <img
                              src="https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo1.3907871c.png&w=64&q=75"
                              width={64}
                              height={64}
                            />
                            <img
                              src="https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fctynhat.f204ff5d.png&w=256&q=75"
                              width={64}
                              height={64}
                            />
                          </div>
                          <div className={styles.company__left__button}>
                            <button>Detail</button>
                          </div>
                        </div>
                      </div>
                      <div className={styles.company__right}>
                        <div className={styles.company__right__content}>
                          <h3 className={styles.text_truncate}>
                            NAKAYAMA CO., LTD
                          </h3>
                          <p className={styles.text_truncate}>
                            Establishment: 1948
                          </p>
                          <p className={styles.text_truncate}>Employers: 57</p>
                          <p className={styles.text_truncate}>
                            Capital: 2000万円
                          </p>
                          <p className={styles.text_truncate}>
                            Address: 627-0012 657-1 Sugitani, Mineyama-cho,
                            Kyotango City, Kyoto Prefecture, Japan.
                          </p>
                          <p className={styles.text_truncate}>
                            Category: Other
                          </p>
                          <p className={styles.text_truncate}>
                            Needs: Looking for business partner in Viet Nam
                          </p>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            <h3 className={styles.matching_title}>SUPPORTING EXPERTS</h3>
            <div className={styles.title}>
              <div className={styles.oth_sub_header_home}>
                <span className={styles.oth_sub_header_home_span}></span>
                REPRESENTATIVE EXPERTS
                <span className={styles.oth_sub_header_home_span}></span>
              </div>
            </div>

            <Slider />

            <div className={styles.btn_content_expert}>
              <a href="/">View All Experts</a>
            </div>
            <h3 className={styles.matching_title}>CONTACT US</h3>
            <div className="contact_container">
              <img
                src="https://i0.wp.com/essentialconnections.net/wp-content/uploads/2019/07/pexels-photo-1261728.jpeg?resize=1024%2C684&ssl=1"
                alt="Background Image"
                className={styles.background_image}
              />
              <div className={styles.card_content}>
                <div className={styles.card}>
                  <div className={styles.ant_card_body}>
                    <div className={styles.content}>
                      <p>
                        Would you like to post your company's information for
                        free?
                        <br />
                        Start with Member Register.
                      </p>
                      <div className={styles.btn_content_expert}>
                        <a href="/">Account Register</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.card}>
                  <div className={styles.ant_card_body}>
                    <div className={styles.content}>
                      <p>
                        Would you like to consult with us?
                        <br />
                        Please send an email to vjpconnect@vj-partner.com or
                        click the "Register Consultation" button and enter your
                        contact information.
                      </p>
                      <div className={styles.btn_content_expert}>
                        <a href="/">Register Consultation</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className={styles.matching_title}>INDUSTRY</h3>
            <div className={styles.Container_container}>
              <div className={styles.service__wrapper}>
                <div className={styles.service__element}>
                  <a href="/">
                    <div className={styles.service__box}>
                      <span>&#x2708;</span>
                      {/* <span>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwMeY8ypsiWfjaV28oijXoeSK0Jg7KXcrWuEkJAEe7eg&s"
                          width={64}
                          height={64}
                        />
                      </span> */}
                      <div className={styles.service__content}>
                        <h3>Travel, Entertainment, and Design</h3>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.service__element}>
                  <a href="/">
                    <div className={styles.service__box}>
                      <span>&#x2708;</span>
                      <div className={styles.service__content}>
                        <h3>Travel, Entertainment, and Design</h3>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.service__element}>
                  <a href="/">
                    <div className={styles.service__box}>
                      <span>&#x2708;</span>
                      <div className={styles.service__content}>
                        <h3>Travel, Entertainment, and Design</h3>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.service__element}>
                  <a href="/">
                    <div className={styles.service__box}>
                      <span>&#x2708;</span>
                      <div className={styles.service__content}>
                        <h3>Travel, Entertainment, and Design</h3>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.service__element}>
                  <a href="/">
                    <div className={styles.service__box}>
                      <span>&#x2708;</span>
                      <div className={styles.service__content}>
                        <h3>Travel, Entertainment, and Design</h3>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.service__element}>
                  <a href="/">
                    <div className={styles.service__box}>
                      <span>&#x2708;</span>
                      <div className={styles.service__content}>
                        <h3>Travel, Entertainment, and Design</h3>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.service__element}>
                  <a href="/">
                    <div className={styles.service__box}>
                      <span>&#x2708;</span>
                      <div className={styles.service__content}>
                        <h3>Travel, Entertainment, and Design</h3>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.service__element}>
                  <a href="/">
                    <div className={styles.service__box}>
                      <span>&#x2708;</span>
                      <div className={styles.service__content}>
                        <h3>Travel, Entertainment, and Design</h3>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <h3 className={styles.matching_title}>PARTNERS AND CUSTOMERS</h3>
            <SlidePartner images={images} />

            <div className={styles.Footer_container}>
              <div className={styles.Footer_wrapper}>
                <div className={styles.ant_row}>
                  <div
                    style={{ "padding-left": "12px", "padding-right": "12px" }}
                    className={styles.Footer_widget}
                  >
                    <img src="https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogovjpcfooter.fcfeb984.png&w=384&q=75" />
                    <p>
                      VJP Connect Platform (VJP-CONNECT.COM) is a platform
                      specializing in supporting business promotion, finding
                      partners, experts , and connecting Vietnamese and Japanese
                      company in many fields. This platform is operated by Viet
                      Japan Partner Cooperation company - a member of the
                      Japanese business support ecosystem of Viet Japan Partner
                      Group including companies operating in many fields: Trade
                      Promotion, Technology, Development Technology resource
                      development, Recruitment, Design, Marketing, Printing.
                    </p>
                    <img src="https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogovjpgroup.20565107.png&w=640&q=75" />
                    <ul className={styles.Footer_social__list}>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.facebook.com/vietjapanpartner"
                        >
                          <img src="https://i0.wp.com/ladolcevitasarasota.com/wp-content/uploads/2023/03/facebook-logo-icon-facebook-icon-png-images-icons-and-png-backgrounds-1.png?fit=1000%2C1000&ssl=1" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.google.com/maps/place/VIET+JAPAN+PARTNER+CO.,+LTD/@10.8550548,106.629378,15z/data=!4m6!3m5!1s0x3175293582e05b3f:0xf36e2a20d6e9aa63!8m2!3d10.8550548!4d106.629378!16s%2Fg%2F11ryskv9d4?entry=ttu"
                        >
                          <img src="https://icon-library.com/images/icon-google-plus/icon-google-plus-9.jpg" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    style={{ "padding-left": "12px", "padding-right": "12px" }}
                    className={styles.Footer_footer__list}
                  >
                    <h5>Menu</h5>
                    <ul>
                      <br />
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/">About Us</a>
                      </li>
                      <li>
                        <a href="/">Search</a>
                      </li>
                      <li>
                        <a href="/">Pricing</a>
                      </li>
                      <li>
                        <a href="/">Contact</a>
                      </li>
                      <li>
                        <a href="/">Find an Expert</a>
                      </li>
                    </ul>
                  </div>
                  <div
                    style={{ "padding-left": "12px", "padding-right": "12px" }}
                    className={styles.Footer_footer__list}
                  >
                    <h5>Contact Information</h5>
                    <div>
                      <span></span>
                      <div>
                        <br />
                        <i>
                          <span>VIET JAPAN PARTNER COOPERATION CO.,LTD</span>
                          <br />
                          <span>
                            P1.3-40, The Prince Residence-Novaland, 17-19-21
                            Nguyen Van Troi Street, Ward 14, Phu Nhuan District,
                            Ho Chi Minh City, Vietnam
                          </span>
                        </i>
                      </div>
                    </div>
                    <div>
                      <i className={styles.phone}></i>
                      (+84) 028 7303 8939
                    </div>
                    <div>
                      <i className={styles.mail}></i>
                      vjpconnect@vj-partner.com
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.Footer_footerTitle}>
                <span>
                  Copyright @2023 VIET JAPAN DIGITAL CO.,LTD. All rights
                  reserved.
                </span>
              </div>
            </div>
          </div>
        </nav>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
}
