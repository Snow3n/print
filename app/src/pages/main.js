import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

export const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="row">
        <div className="media col-sm-2 col-md-3">
          <div className="pull-left">
            <div className="media-object">
              <img
                src="https://printelit.ru/content/images/new-elements/advantage/pay.png"
                alt="Розрахунок за карткою"
              />
            </div>
          </div>
          <div className="media-body">
            <p>Готівковий і безготівковий розрахунок за карткою</p>
          </div>
        </div>
        <div className="media col-sm-2 col-md-3">
          <div className="pull-left">
            <div className="media-object">
              <img
                src="https://printelit.ru/content/images/new-elements/advantage/post.png"
                alt="Доставка транспортною компанією"
              />
            </div>
          </div>
          <div className="media-body">
            <p>Доставка транспортною компанією по всій Україні</p>
          </div>
        </div>
        <div className="media col-sm-2 col-md-3">
          <div className="pull-left">
            <div className="media-object">
              <img
                src="https://printelit.ru/content/images/new-elements/advantage/prs.png"
                alt="Власне виробництво поліграфії"
              />
            </div>
          </div>
          <div className="media-body">
            <p>Власне виробництво</p>
          </div>
        </div>
        <div className="media col-sm-2 col-md-3">
          <div className="pull-left">
            <div className="media-object">
              <img
                src="https://printelit.ru/content/images/new-elements/advantage/online.png"
                alt="Оформлення замовлень онлайн друкарні"
              />
            </div>
          </div>
          <div className="media-body">
            <p>Терміновий друк за 1 день</p>
          </div>
        </div>
      </div>
      <div id="portfolio">
        <h1>Каталог</h1>
        <div id="portfolioContent">
          <div id="content">
            <figure
              className="figure"
              onClick={() => {
                navigate("/cups");
              }}
            >
              <img src="imgs\cup.jpg" alt="" />
              <figcaption>
                <h2>Кружки</h2>
              </figcaption>
            </figure>
          </div>
          <div id="content">
            <figure
              className="figure"
              onClick={() => {
                navigate("/t-shirts");
              }}
            >
              <img src="imgs/t-shirt.jpg" alt="" />
              <figcaption>
                <h2>Футболки</h2>
              </figcaption>
            </figure>
          </div>
          <div id="content">
            <figure
              className="figure"
              onClick={() => {
                navigate("/souvenirs");
              }}
            >
              <img src="imgs/img3.jpg" alt="" />
              <figcaption>
                <h2>Сувеніри</h2>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};
