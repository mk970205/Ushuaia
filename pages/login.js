import axios from 'axios';

export default () => {
  return (
    <div>
      <form>
        <label>
          ID:
          <input type="textbox"></input>
        </label>
        <br />
        <label>
          PW:
          <input type="textbox"></input>
        </label>
        <br />
      </form>
    </div>
  );
};
