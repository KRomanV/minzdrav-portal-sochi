import React from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "antd";
import { useMySelector } from "../../hooks/customHook";
import { useDispatch } from "react-redux";
import { LogOutAC } from "../../redux/ActionCreators/UserAC/logOutAC";
import TelefonHeader from "../TelefonHeader/TelefonHeader";
import css from "./Header.module.css";

const Header = () => {
  const isLogin = useMySelector((state) => state.user);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(LogOutAC());
  };

  return (
    <div>
      <header className={css.header}>
          <div   activeClassName={css.selected} >
            <NavLink 
            activeClassName={css.selected} 
            className={css.fontstyles}
            exact to="/">
            ГОРЗДРАВ СОЧИ
            </NavLink>
          </div>
          <div>
          <NavLink activeClassName={css.selected}
           className={css.fontstyles}
          exact to="/appointments">
              Записаться
          </NavLink>
          </div>

          {isLogin?.name ? (
            <>
              <div>
                <NavLink activeClassName={css.selected}
                 className={css.fontstyles}
                exact to="/account">
                    Личный кабинет
                </NavLink>
              </div>
              <div>
                <NavLink
                  activeClassName={css.selected}
                  className={css.fontstyles}
                  exact
                  to="/"
                  onClick={logOut}
                >                 
                    Выход
                </NavLink>
              </div>
              <div>
              <TelefonHeader />
              </div>
            </>
          ) : (
            <>
              <div>
                <NavLink 
                 className={css.fontstyles}
                activeClassName={css.selected} exact to="/login">
                    Логин
                </NavLink>
              </div>
              <div>
                <NavLink
                  activeClassName={css.selected}
                  className={css.fontstyles}
                  exact
                  to="/registration"
                >
                    Регистрация
                </NavLink>
              </div>
              <div>
              <TelefonHeader />
              </div>
            </>
          )}
      </header>
    </div>
  );
};

export default Header;
