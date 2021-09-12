import React from 'react';
import  SubHeaderIcon  from '../../assets/img/SubHeader.png'
import './style.scss'

export const SubHeader = () => {
  return (
    <div className='sub-header' >
      <section className='selection-premium' >
        <article>
          <header>
            <div className='text-block' >
              <p>
                SPOTIFY PREMIUM
              </p>
              <div className='text-block_title' >
                <h1>
                  Получите 3 месяца Premium бесплатно
                </h1>
              </div>
              <div className='text-block_discription' >
                <h2>
                  Слушайте музыку без рекламы, офлайн и не только.
                  <br />
                  Отменить подписку можно в любой момент.
                </h2>
              </div>
              <div className='text-block_button' >
                  <a>
                    <span>
                      Получить 3 месяца бесплатно
                    </span>
                  </a>
              </div>
            </div>
            <div className='img-block' >
              <img src={SubHeaderIcon} style={{height: `400px`, width: `400px`}} />
            </div>
          </header>
        </article>
      </section>
      <section className='selection-free' >
        <article>
          <div>
            <p>
              SPOTIFY FREE
            </p>
            <h1>
              Услышать весь мир
            </h1>
            <div className='sub-header' >
              <h2>
                Миллионы треков. Бесплатно.
              </h2>
            </div>
            <div className='button' >
              <div>
                <a>
                  <span>
                    СКАЧАТЬ БЕСПЛАТНУЮ ВЕРСИЮ
                  </span>
                </a>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}