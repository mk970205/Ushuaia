import axios from 'axios';
import { useState } from 'react';

export default () => {
  const [value, setValue] = useState({
    bRedundancy: false,
    userId: '',
    password: '',
  });

  function redundancyCheck() {
    setValue((prev) => ({
      ...prev,
      bRedundancy: true,
    }));
  }

  function submitRegister(userId, password) {
    axios
      .post('/api/registerAccount', {
        userId: userId,
        password: password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <form>
        <label>
          ID:
          <input type="textbox"></input>
        </label>
        <button type={'button'} onClick={() => redundancyCheck()}>
          중복 검사
        </button>
        {value.bRedundancy ? <b>vaild</b> : <b>invalid</b>}
        <br />
        <label>
          PW:
          <input type="password"></input>
        </label>
        <br />
        <input type={'button'} onClick={() => submitRegister()}></input>
      </form>
    </div>
  );
};
