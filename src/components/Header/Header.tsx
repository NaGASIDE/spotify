import React from 'react';
import { ReactComponent as Spotify } from '../../assets/img/Spotify_logo_with_text.svg';
import './style.scss'

export const Header = () => {
  return (
    <div>
      <header className='header' >
        <div className='container' >
          <span className='logo' >
            <a>
              <Spotify />
            </a>
          </span>
          <nav className='header_nav' >
            <ul>
              <li>
                <a>
                  Premium
                </a>
              </li>
              <li>
                <a>
                  Справка
                </a>
              </li>
              <li>
                <a>
                  Скачать
                </a>
              </li>
              <li>
                <a>
                  |
                </a>
              </li>
              <li>
                <a>
                  Зарегистрироваться
                </a>
              </li>
              <li>
                <a>
                  Вход в аккаунт
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}