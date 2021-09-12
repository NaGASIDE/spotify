import React from 'react';
import { ReactComponent as Spotify } from '../../assets/img/Spotify_logo_with_text.svg'
import './style.scss'

export const Footer = () => {
  return (
    <div>
      <footer className='footer' >
        <nav>
          <div className='brand' >
            <a>
              <span>
                <Spotify />
              </span>
            </a>
          </div>
          <div className='top-links' >
            <dl>
              <dt>Компания</dt>
              <dd>О нас</dd>
              <dd>Вакансии</dd>
              <dd>For the record</dd>
            </dl>
            <dl>
              <dt>Сообщества</dt>
              <dd>Для исполнителей</dd>
              <dd>Для разработчикой</dd>
              <dd>Реклама</dd>
              <dd>Для инвесторов</dd>
              <dd>Для вендеров</dd>
            </dl>
            <dl>
              <dt>Полезные ссылки</dt>
              <dd>Справка</dd>
              <dd>Веб-плеер</dd>
              <dd>Бесплатное мобильное приложение</dd>
            </dl>
          </div>
          <div className='social-icons' >
            <ul>
              <li>
                <a>
                  <span>
                    INSTA
                  </span>
                </a>
              </li>
              <li>
                <a>
                  <span>
                    TWITTER
                  </span>
                </a>
              </li>
              <li>
                <a>
                  <span>
                    FACEBOOK
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className='country' >
            <a href='https://www.spotify.com/kz-ru/select-your-country-region/' >
              <svg/>
              { `Казахстан (русский)` }
            </a>
          </div>
          <div className='bottom-links' >
            <ul>
              <li>
                <a>
                  Юрийдическая информация 
                </a>
              </li>
              <li>
                <a>
                  Конфидециальность 
                </a>
              </li>
              <li>
                <a>
                  Политика конфидециальности
                </a>
              </li>
              <li>
                <a>
                  Файлы cokie
                </a>
              </li>
              <li>
                <a>
                  О рекламе
                </a>
              </li>
            </ul>
            <span>
              © 2021 Spotify AB
            </span>
          </div>
        </nav>
      </footer>
    </div>
  )
}