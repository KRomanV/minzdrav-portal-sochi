import React from "react";
import css from "./sport.module.css";

export default function Sport() {
  return (
    <div>
      <div className={css.main}>
        <img src={"/img/gimn.jpg"} className={css.gimn} alt="gimn.jpg" />
      </div>
      <div className={css.main}>
        <h1 className={css.text_h1}>
          О физической активности в период сохранения рисков распространения
          новой коронавирусной инфекции.
        </h1>
        <p className={css.text}>
          Эпидемиологи напоминают, что физические упражнения имеют большое
          значение для хорошего самочувствия и укрепления организма человека.
          Особенно важно поддерживать физическую активность в период
          распространения респираторных заболеваний - гриппа, ОРВИ и новой
          коронавирусной инфекции.
        </p>
        <p className={css.text}>
          Важнейший вид самостоятельных занятий – утренняя гигиеническая
          гимнастика или зарядка. Её необходимо делать всем, независимо от вида
          деятельности и возраста!
        </p>
        <p className={css.text}>
          Основные положительные стороны гимнастики: зарядка вырабатывает
          привычку заботиться о своём здоровье; укрепляет организм, улучшает
          самочувствие; активизирует все процессы в организме; укрепляет сердце;
          улучшает подвижность суставов.
        </p>
        <p className={css.text}>
          В результате регулярных упражнений и у детей, и у взрослых
          вырабатывается хорошая осанка, и дети, и взрослые становятся более
          ловкими и выносливыми, бодрыми и жизнерадостными.
        </p>
        <p className={css.text}>
          Люди, начинающие утро с зарядки, отмечают, что они чувствуют себя
          лучше, в течение всего дня остаются бодрыми. Кроме того, утренняя
          гимнастика позволяет окончательно проснуться, повышает
          работоспособность. Правильно организованная физическая нагрузка
          способствует развитию логического мышления, памяти, интеллекта.
        </p>
        <p className={css.text}>
          Занятия должны проводиться ежедневно в проветренном помещении.
          Утренняя гимнастика должна состоять из 8-10 упражнений, повторяющихся
          примерно 10 раз.
        </p>
        <p className={css.text}>
          Стремитесь к тому, чтобы занятия проходили живо и интересно, и
          помните, что движение – это жизнь!
        </p>
      </div>
      <div className={css.main}>
        <h1>Комплекс упражнений</h1>
        <img src={"/img/ex.jpg"} className={css.ex} alt="ex.jpg" />
      </div>
      <div className={css.main}>
        <iframe
          width="660"
          height="415"
          src="https://www.youtube.com/embed/SjJs4VhvMy0"
          title="vidos"
        ></iframe>
      </div>
      <div className={css.main}>
        <h1>Противопоказания</h1>
        <p className={css.text}>
          Если Вы себя хорошо чувствуете, у Вас нет никаких отклонений в
          физическом и психическом развитии, зарядку Вы можете смело делать, не
          боясь последствий. Однако, если у Вас проблемы с сердцем, суставами,
          спиной, то необходимо проконсультироваться с врачом, на предмет того,
          какие упражнения Вам показаны, а какие пока лучше не практиковать.
        </p>
        <h2>Перечень противопоказаний для выполнения утренней зарядки:</h2>
        <div className={css.text}>1.Кровотечение;</div>
        <div className={css.text}>2.Воспалительные процессы;</div>
        <div className={css.text}>3.Нарушение давления;</div>
        <div className={css.text}>4.Злокачественные опухоли;</div>
        <div className={css.text}>5.Заболевания почек;</div>
      </div>
    </div>
  );
}
