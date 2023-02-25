import { Component } from 'solid-js';
import './index.scss';
import img from './assets/img.jpg';
import { css } from 'solid-styled-components';

const App: Component = () => {
  return (
    <>
      <div
        class={css`
          background: red;
        `}
      >
        hello solid-js webpack
        <div>
          <img src={img} alt="" />
        </div>
      </div>
    </>
  );
};

export default App;
