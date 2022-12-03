import { Container, Button } from '../containers/index';
import './hero.scss';

export const Hero = () => {
  return (
    <Container id='home' className='animated fadeIn'>
      <h1>Landing Page</h1>

      <Button>Button</Button>
    </Container>
  );
};
