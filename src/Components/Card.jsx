import Card from 'react-bootstrap/Card';

function CardComponent(props) {
  return (
    <Card style={{ width: '50rem', margin:'1rem'}} >
      <Card.Body style={{display:'flex'}}>

        {/* <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="" alt="teste" style={{ width: '100px', height: '10px', objectFit: 'cover' }} />
        </div> */}

        <div className="contentCard">
          <Card.Title>{props.nome}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted "><b>R$:{props.preco}</b></Card.Subtitle>
          <Card.Text>
            {props.descricao}
          </Card.Text>
        </div>
      </Card.Body>

    </Card >
  );
}

export default CardComponent;