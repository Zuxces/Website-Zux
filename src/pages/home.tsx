import React, { useEffect, useState } from 'react';
import type { MouseEvent } from 'react';
import style from '@/styles/home.module.scss';
import '@/styles/_animations.scss';
import gif from '@/assets/icons/Zuxces.webp';
import {
  JavaScript,
  TypeScript,
  NodeJS,
  ReactTSX,
  Python,
  Go,
  Html5,
  Css,
  Scss,
  Discord,
  CrossMark,
} from '@/assets/svg';

const Home = () => {
  const [isActive, setActive] = useState<string>('home');

  const handleActiveChange = async ({ currentTarget }: MouseEvent) => {
    const element = currentTarget as HTMLAnchorElement;
    setActive(element.innerHTML);
    document.getElementById('pageTitle')!.innerHTML = `${element.innerHTML} &mdash; Zuxces`;
    document.getElementById('preview')!.innerHTML = element.innerHTML;
  };

  const handleClose = async () => {
    document.getElementsByClassName(style.toast)[0].classList.add('showOut');
    setTimeout(() => {
      document.getElementsByClassName(style.toast)[0].remove();
    }, 1000);
  };

  useEffect(() => {
    for (let i = 0; i < document.getElementsByClassName(style.statElement).length; i++) {
      document.getElementsByClassName(style.statElement)[i].classList.add('listElementPopIn');
      setTimeout(() => {
        document.getElementsByClassName(style.statElement)[i].classList.remove('listElementPopIn');
      }, 400 + 40 * 10);
    }
    document.getElementsByClassName(style.info)[0].classList.add('showIn');
    document.getElementsByClassName(style.stats)[0].classList.add('listPopIn');
    document.getElementsByClassName(style.copyright)[0].classList.add('showIn');
    document.getElementsByClassName(style.innerPreview)[0].classList.add('showIn');
  });

  useEffect(() => {
    document.getElementsByClassName(style.toast)[0].classList.add('listPopIn');
    setTimeout(() => {
      document.getElementsByClassName(style.toast)[0].classList.remove('listPopIn');
    }, 3500);
  }, []);

  return (
    <React.Fragment>
      <section className={style.header}>
        <div className={style.innerHeader}>
          <a href="/" className={style.logo}>
            <img src={gif} />
            <label>Zuxces</label>
          </a>
          <nav>
            <a
              href="/"
              className={isActive.toLowerCase() === 'home' ? style.active : ''}
              onClick={handleActiveChange}
              onDragStart={(e) => e.preventDefault()}>
              Home
            </a>
            <a
              href="/projects"
              className={isActive.toLowerCase() === 'projects' ? style.active : ''}
              onClick={handleActiveChange}
              onDragStart={(e) => e.preventDefault()}>
              Projects
            </a>
            <div className={style.dropdown}>
              <a href="/invite" onDragStart={(e) => e.preventDefault()}>
                Contacts
              </a>
              <div className={style.content}>
                <a href="/invite">Discord</a>
                <a href="https://github.com/Zuxces" target="_blank" rel="noreferrer">
                  Github
                </a>
                <a href="mailto:contact.morezuxces@gmail.com" target="_blank" rel="noreferrer">
                  Email
                </a>
              </div>
            </div>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              onDragStart={(e) => e.preventDefault()}>
              Donate
            </a>
          </nav>
        </div>
      </section>
      <section className={style.preview}>
        <div className={style.innerPreview}>
          <label id="preview">Home, feel free to check this out! 💖</label>
        </div>
      </section>
      <section className={style.main}>
        <div className={style.innerMain}>
          <div className={style.info}>
            <h1>
              Hey! 👋 My name is Zuxces
              <br />
              This site is where I shall post my github projects lol! 💀
              <br />
              If you look to your right you shall see a list of things I am good at doing.
              <br />
              Feel free to click the button below this area to join my discord server if you wish to support me or just want to talk! 😁
            </h1>
          </div>
          {/* <iframe
            src="https://discord.com/widget?id=942426336348233799&theme=dark"
            width="360"
            height="420"
            allowTransparency={true}
            frameBorder={0}
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe> */}
          <div className={style.stats}>
            <div className={style.skills}>
              <div className={style.statHead}>
                <label>Skills & Others</label>
              </div>
              <div className={style.statContent}>
                <div className={style.statElement} style={{ '--order': 8 } as React.CSSProperties}>
                  <JavaScript />
                  <span>JavaScript</span>
                </div>
                <div
                  className={`${style.statElement} ${style.statAddon}`}
                  style={{ '--order': 8 } as React.CSSProperties}>
                  <TypeScript />
                  <span>TypeScript</span>
                </div>
                <div
                  className={`${style.statElement} ${style.statAddon}`}
                  style={{ '--order': 8 } as React.CSSProperties}>
                  <NodeJS />
                  <span>Node.js</span>
                </div>
                <div
                  className={`${style.statElement} ${style.statAddon}`}
                  style={{ '--order': 9 } as React.CSSProperties}>
                  <ReactTSX />
                  <span>React.ts</span>
                </div>
                <div className={style.statElement} style={{ '--order': 9 } as React.CSSProperties}>
                  <Python />
                  <span>Python</span>
                </div>
                <div className={style.statElement} style={{ '--order': 10 } as React.CSSProperties}>
                  <Html5 />
                  <span>HTML</span>
                </div>
                <div className={style.statElement} style={{ '--order': 10 } as React.CSSProperties}>
                  <Css />
                  <span>CSS</span>
                </div>
                <div
                  className={`${style.statElement} ${style.statAddon}`}
                  style={{ '--order': 10 } as React.CSSProperties}>
                  <Scss />
                  <span>SASS/SCSS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={style.toast} style={{ '--order': 50 } as React.CSSProperties}>
        <div className={style.toastIcon}>
          <Discord />
        </div>
        <div className={style.toastBody}>
          <p>While you&apos;re here, why not join the discord server?</p>
          <button
            className={style.toastButton}
            onClick={() => {
              location.href = '/invite';
            }}>
            Sure, why not
          </button>
          <button
            className={style.toastButton}
            onClick={() => {
              location.href = '/invite';
            }}>
            Click me, come on
          </button>
        </div>
        <button className={style.toastClose} onClick={handleClose}>
          <CrossMark />
        </button>
      </div>
      <div className={style.copyright}>
        {/* <img src={gif} />
         <a onClick={handleThemeChange}>
          <ThemeIcon />
        </a> */}
        <span>Copyright © {new Date().getFullYear()} Zuxces</span>
      </div>
    </React.Fragment>
  );
};
export default Home;
