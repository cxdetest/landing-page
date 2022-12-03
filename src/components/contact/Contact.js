import { useRef, useState } from 'react';
import { Container } from '../containers';
import './contact.scss';

let initialState = {
  fullname: undefined,
  email: undefined,
  message: undefined,
};

export const Contact = () => {
  const [data, setData] = useState(initialState);
  const form = useRef();

  function handleForm(e) {
    e.preventDefault();
    if (!data.fullname && !data.email && !data.message) {
      alert('the form is empty!');
    } else {
      alert(`message sent succesfully. have a good day ${data.fullname}`);
      form.current.reset();
      setData(initialState);
    }
  }

  function handleInput(e) {
    switch (e.target.name) {
      case 'fullname':
        setData({ ...data, ...{ fullname: e.target.value } });
        break;
      case 'email':
        setData({ ...data, ...{ email: e.target.value } });
        break;
      case 'message':
        setData({ ...data, ...{ message: e.target.value } });
        break;

      default:
        break;
    }
  }

  return (
    <Container id='contact'>
      <form onSubmit={handleForm} ref={form}>
        <label htmlFor='fullname'>fullname</label>
        <input
          type='text'
          name='fullname'
          onChange={handleInput}
          maxLength={50}
          autoComplete='off'
        />

        <label htmlFor='email'>email</label>
        <input
          type='email'
          name='email'
          onChange={handleInput}
          maxLength={50}
          autoComplete='off'
        />

        <label htmlFor='message'>how are you?</label>
        <input
          type='text'
          name='message'
          onChange={handleInput}
          maxLength={50}
          autoComplete='off'
        />

        <button>Send</button>
      </form>
    </Container>
  );
};
