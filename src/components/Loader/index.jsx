import style from  './Loader.module.css';

const Loader = () => (
    <div className={style.posCenter}>
      <div data-test-id="loader" className={style.loader}></div>
    </div>
  );
  export default Loader;