import { Card, FlexContainer } from '../containers';
import './products.scss';

export const Products = () => {
  const arr = [1, 2, 3];

  return (
    <FlexContainer id='products'>
      <b style={{ cursor: 'pointer' }} className='arrow'>
        &lt;
      </b>
      {arr.map((el, index) => (
        <Card key={index}>
          <article>
            <h4>Hello Wold</h4>
            <p>I'm a Card</p>
            <small>I'm product number {el}</small>
            <br />
            <sub>{crypto.randomUUID()}</sub>
          </article>
        </Card>
      ))}
      <b style={{ cursor: 'pointer' }} className='arrow'>
        &gt;
      </b>
    </FlexContainer>
  );
};
