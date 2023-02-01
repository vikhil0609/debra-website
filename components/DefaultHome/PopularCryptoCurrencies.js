import { FaBitcoin, FaWhatsapp, FaFacebookSquare } from "react-icons/fa";
import { SiBinance, SiChainlink, SiDogecoin, SiLitecoin } from "react-icons/si";
export default function PopularCryptoCurrencies() {
  return (
    <section className="crypto-currencies-wrapper fix section-black section-padding">
      <div className="container">
        <div className="col-lg-8 col-xl-6 offset-xl-3 col-12 offset-lg-2 text-center">
          <div className="block-contents text-white">
            <div className="section-title wow fadeInUp" data-wow-duration="1s">
              <h2>The most popular cryptocurrencies</h2>
            </div>
          </div>
        </div>
        <div
          className="nice-arrow-icon d-none d-lg-block wow fadeInDown"
          data-wow-duration="1.2s"
        >
          <img src="img/icons/nice-arrow-down.svg" alt="" />
        </div>

        <div className="row">
          <div className="col-md-6 col-xl-4 col-12">
            <div
              className="single-crypto-currency-card wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".2s"
            >
              <div className="currency-header">
                <div className="icon icon1">
                  <FaFacebookSquare className="icon-bitcoin" />
                </div>
                <div className="currency-name">
                  <h6>Facebook</h6>
                  <span>Cryptocurrency</span>
                </div>
              </div>
              <div className="currency-info">
                <p>
                  Facebook is a social networking site that easy to connect with
                  family and friends and created in 2004.
                </p>
              </div>
              <div className="currency-rate-buy-btn d-flex align-items-center justify-content-between">
                <div className="currency-buy-now">
                  <a href="#">Connect on facebook</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 col-12">
            <div
              className="single-crypto-currency-card wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".4s"
            >
              <div className="currency-header">
                <div className="icon icon2">
                  <FaWhatsapp className="icon-bitcoin icon2" />
                </div>
                <div className="currency-name">
                  <h6>Facebook</h6>
                  <span>Cryptocurrency</span>
                </div>
              </div>
              <div className="currency-info">
                <p>
                  Facebook is a social networking site that easy to connect with
                  family and friends and created in 2004.
                </p>
              </div>
              <div className="currency-rate-buy-btn d-flex align-items-center justify-content-between">
                <div className="currency-buy-now">
                  <a href="#">Connect on facebook</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 col-12">
            <div
              className="single-crypto-currency-card wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".6s"
            >
              <div className="currency-header">
                <div className="icon icon1">
                  <FaFacebookSquare className="icon-bitcoin" />
                </div>
                <div className="currency-name">
                  <h6>Facebook</h6>
                  <span>Cryptocurrency</span>
                </div>
              </div>
              <div className="currency-info">
                <p>
                  Facebook is a social networking site that easy to connect with
                  family and friends and created in 2004.
                </p>
              </div>
              <div className="currency-rate-buy-btn d-flex align-items-center justify-content-between">
                <div className="currency-buy-now">
                  <a href="#">Connect on facebook</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 col-12">
            <div
              className="single-crypto-currency-card wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".1s"
            >
              <div className="currency-header">
                <div className="icon icon1">
                  <FaFacebookSquare className="icon-bitcoin" />
                </div>
                <div className="currency-name">
                  <h6>Facebook</h6>
                  <span>Cryptocurrency</span>
                </div>
              </div>
              <div className="currency-info">
                <p>
                  Facebook is a social networking site that easy to connect with
                  family and friends and created in 2004.
                </p>
              </div>
              <div className="currency-rate-buy-btn d-flex align-items-center justify-content-between">
                <div className="currency-buy-now">
                  <a href="#">Connect on facebook</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 col-12">
            <div
              className="single-crypto-currency-card wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <div className="currency-header">
                <div className="icon icon1">
                  <FaFacebookSquare className="icon-bitcoin" />
                </div>
                <div className="currency-name">
                  <h6>Facebook</h6>
                  <span>Cryptocurrency</span>
                </div>
              </div>
              <div className="currency-info">
                <p>
                  Facebook is a social networking site that easy to connect with
                  family and friends and created in 2004.
                </p>
              </div>
              <div className="currency-rate-buy-btn d-flex align-items-center justify-content-between">
                <div className="currency-buy-now">
                  <a href="#">Connect on facebook</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 col-12">
            <div
              className="single-crypto-currency-card wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".6s"
            >
              <div className="currency-header">
                <div className="icon icon1">
                  <FaFacebookSquare className="icon-bitcoin" />
                </div>
                <div className="currency-name">
                  <h6>Facebook</h6>
                  <span>Cryptocurrency</span>
                </div>
              </div>
              <div className="currency-info">
                <p>
                  Facebook is a social networking site that easy to connect with
                  family and friends and created in 2004.
                </p>
              </div>
              <div className="currency-rate-buy-btn d-flex align-items-center justify-content-between">
                <div className="currency-buy-now">
                  <a href="#">Connect on facebook</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
