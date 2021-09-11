import React, { useEffect, useState } from "react";
import { useMySelector } from "../../hooks/customHook";
import { useParams } from "react-router-dom";
import css from "./docInfo.module.css";
import { DoctorType } from "../../userTypes/doctorsType";

export function DocInfo() {
  interface ParamTypes {
    doctorId: string;
  }
  const { doctorId } = useParams<ParamTypes>();
  const FinddoctorsState = useMySelector((state) => state.doctors);
  // const [doctor, setDoctor] = useState({});

  // useEffect(() => {
  //   const carDoc = FinddoctorsState.filter((el) => el.id === doctorId);
  //   let test = carDoc[0];
  //   setDoctor(test);
  // }, [FinddoctorsState, doctorId]);

  const carDoc = FinddoctorsState.filter((el) => el.id === doctorId);
  let doctor = carDoc[0];
  console.log(doctor.work);
  // const a = doctor.map((el: { work: string }) => el.work);
  // console.log(a);
  return (
    <div>
      {doctor ? (
        <div key={doctor.id}>
          <div className={css.wrapper}>
            <div className={css.border}>
              <img src={`/img/${doctor.img}`} alt="doc" className={css.img} />
              <div className={css.info}>
                <div>ФИО: {doctor.name}</div>
                <div>Специализация:{doctor.specialization}</div>
                <div>Рейтинг: {doctor.raiting}</div>
                <div>Отзывы:{doctor.reviews}</div>
                <div>
                  <button>{doctor.work}</button>
                </div>
              </div>
            </div>
          </div>
          <button>Записаться</button>
        </div>
      ) : null}
    </div>
  );
}
