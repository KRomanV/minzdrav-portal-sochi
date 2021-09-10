import React, { useEffect } from "react";
import css from "./CovidInfo.module.css";
import { InfoCovidModel } from "../InfoCovidModel/InfoCovidModel";
import { useDispatch } from "react-redux";
import { useMySelector } from "../../hooks/customHook";
import { getCovidAC } from "../../redux/ActionCreators/ApiAC/getCovidAC";

export function CovidInfo() {
  const covidState = useMySelector((state) => state.covid[0]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCovidAC());
  }, [dispatch]);

  return (
    <div>
      <div className={css.board}>
        <img src={"/img/covid19.png"} className={css.covid19} alt="covid" />
        <div className={css.text}>
          <div>
            <h1 className={css.covid}>Коронавирус COVID-19:</h1>
            <h3 className={css.covid}>Информация для граждан</h3>
          </div>
          <div className={css.date}>
            <div>Данные на {new Date().toLocaleDateString()}</div>
            <div>
              {covidState ? (
                <div>Общее количество зараженных : {covidState.confirmed} </div>
              ) : (
                <div>Загрузка...</div>
              )}
            </div>

            <div>
              {covidState ? (
                <div>Общее количество смертей : {covidState.deaths} </div>
              ) : (
                <div>Загрузка...</div>
              )}
            </div>
            <div>
              {covidState ? (
                <div>
                  Количество смертей за последние сутки: {covidState.deathsInc}{" "}
                </div>
              ) : (
                <div>Загрузка...</div>
              )}
            </div>
            <div>
              {covidState ? (
                <div>
                  Количество зараженных за последние сутки :{" "}
                  {covidState.confirmedInc}{" "}
                </div>
              ) : (
                <div>Загрузка...</div>
              )}
            </div>
          </div>
        </div>
        <div className={css.telSk}>
          <h3>Телефон для вызова скорой помощи: 103 (круглосуточно)</h3>
        </div>
        <div className={css.telSk}>
          <h3>Единая горячая линия: 8-800-2000-112</h3>
        </div>
        <div className={css.info}>
          Общие вопросы по коронавирусной инфекции, в том числе информация о
          предоставлении мер социальной поддержки, доставке продуктов и решении
          других бытовых проблем пожилых и хронически больных, доставка
          бесплатных и льготных лекарств и медицинских изделий на дом, получение
          больничного листа в городе Сочи
        </div>
        <div className={css.telSk}>
          <h3>
            Информационная линия Департамента здравоохранения города Сочи:
            8-988-285-99-95 (круглосуточно)
          </h3>
        </div>
        <div className={css.info}>
          Оказание всех видов медицинской помощи в городских больницах и
          поликлиниках, в том числе онкологическим больным и больным на
          гемодиализе в период повышенной готовности
        </div>
      </div>
      <div className={css.textSimptomy}>
        <h1>Основные симптомы короновируса :</h1>
      </div>
      <div className={css.Simptomy}>
        <img
          src={"/img/Simptomy.png"}
          className={css.Simptomy}
          alt="Simptomy"
        />
      </div>

      <div className={css.Textsign}>
        <h3>При наличии признаков:</h3>
      </div>
      <div className={css.sign}>
        <div>Оставайтесь дома</div>
        <div>Вызовите врача</div>
        <div>Следуйте назначенному лечению</div>
      </div>
      <div className={css.sign}>
        <h3>
          В подавляющем большинстве случаев данные симптомы связаны не с
          коронавирусом, а с обычной ОРВИ.
        </h3>
      </div>
      <div>
        <InfoCovidModel />
      </div>
    </div>
  );
}
