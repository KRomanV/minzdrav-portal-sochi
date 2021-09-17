import React, { useEffect } from "react";
import { useMySelector } from "../../hooks/customHook";
import { useParams } from "react-router-dom";
import css from "./docInfo.module.css";
import Spinner from "../Spinner/Spinner";
import { Typography } from 'antd';
import { RaitingUpdatedAC } from "../../redux/ActionCreators/RaitingUpdateAC";
import { useDispatch } from "react-redux";
import { currentDoctorAC } from "../../redux/ActionCreators/DoctorsAC/CurrentDoctorAC";

export function DocInfo() {
  const { Title } = Typography;

  const dispatch = useDispatch();

  interface ParamTypes {
    doctorId: string;
  }
  const { doctorId } = useParams<ParamTypes>();

  const FinddoctorsState = useMySelector((state) => state.currentDoctor);
  const isLogin = useMySelector((state) => state.user?.name);

  useEffect(() => {
    dispatch(currentDoctorAC(doctorId));
  }, [dispatch, doctorId]);

  const handleRait = (rait: number) => {
    console.log(FinddoctorsState);
    dispatch(RaitingUpdatedAC(doctorId, rait));
  };

  useEffect(() => { }, [dispatch]);

  return (
    <div className={css.wrap}>
      {isLogin ? (
        <div>
          {FinddoctorsState ? (
            <div key={FinddoctorsState.id}>
              <div className={css.wrapper}>
                <div className={css.border}>
                  <img
                    src={`/img/${FinddoctorsState.img}`}
                    alt="doc"
                    className={css.img}
                  />
                  <div className={css.info}>
                    <div className={css.content}>
                      <Title level={4}>{FinddoctorsState.name}</Title>
                    </div>
                    <div className={css.content}>
                      <div>
                        <Title className={css.fortitle} level={5}>Специализация</Title>
                      </div>{" "}
                      <div className={css.afterheader}>
                        {FinddoctorsState.specialization}
                      </div>{" "}
                    </div>
                    <div className={css.content}>
                      <div>
                        <Title  className={css.fortitle} level={5}>Стаж</Title>
                      </div>{" "}
                      <div className={css.afterheader}>
                        {FinddoctorsState.experience}
                      </div>{" "}
                    </div>
                    <br />
                    <div className={css.content}>
                      <div>
                        <Title  className={css.fortitle} level={5}>Образование</Title>
                      </div>{" "}
                      <div className={css.afterheader}>
                        {FinddoctorsState.education}
                      </div>{" "}
                    </div>
                    <br />
                    <div className={css.content}>
                      <div>
                        <Title  className={css.fortitle} level={5}>Функционал работ</Title>
                      </div>{" "}
                      <div className={css.afterheader}>
                        {FinddoctorsState.function}
                      </div>{" "}
                    </div>
                    <br />


                    <div className={css.rate}>
                      <div className={css.content}>
                        {" "}
                        <Title  className={css.fortitle} level={5}>Рейтинг</Title>
                        <div className={css.allstar}>
                          <div
                            className={css.star}
                            onClick={() => handleRait(1)}
                          >
                            <h2>⭐</h2>
                          </div>
                          <div
                            className={css.star}
                            onClick={() => handleRait(2)}
                          >
                            <h2>⭐</h2>
                          </div>
                          <div
                            className={css.star}
                            onClick={() => handleRait(3)}
                          >
                            <h2>⭐</h2>
                          </div>
                          <div
                            className={css.star}
                            onClick={() => handleRait(4)}
                          >
                            <h2>⭐</h2>
                          </div>
                          <div
                            className={css.star}
                            onClick={() => handleRait(5)}
                          >
                            <h2>⭐</h2>
                          </div>
                          <div className={css.star}><h2>{FinddoctorsState.sumRaiting}</h2> </div>
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className={css.spin}>
              <Spinner />
            </div>
          )}
        </div>
      ) : (
        <div>
          {" "}
          <h1 className={css.wrap_h1}>
            Чтобы видеть подробную информацию о враче нужно войти в аккаунт!{" "}
          </h1>
          <div className={css.err403_main}>
            <img src={"/img/err403.png"} className={css.err403} alt="err403" />
          </div>
        </div>
      )}
    </div>
  );
}
