import React from 'react';
import { ReactComponent as Spotify } from '../../assets/img/Spotify_logo_with_text.svg';
import './style.scss'
import axios from "axios";
import {clientId, clientSecret} from "../../shared/consts";

export const Header = () => {

  const getAauthorize = () => {
    axios.get(`https://accounts.spotify.com/authorize?`,{params:authParams})
      .then(item => console.log(item))
      .catch(item1 => console.log(item1))
  }

  const authParams = {
    client_id: clientId,
    response_type: `code`,
    redirect_uri: `http://localhost:3000`,
    scope: `streaming`
  }

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
              <li onClick={getAauthorize} >
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