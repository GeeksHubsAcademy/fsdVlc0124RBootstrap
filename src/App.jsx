import { useEffect, useState } from "react";
import "./App.css";
{
  /* The following line can be included in your src/index.js or App.js file */
}
import "bootstrap/dist/css/bootstrap.min.css";
import { bringCharacters } from "./services/apiCalls";

// import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if (characters.length === 0) {
      bringCharacters()
        .then((fetched) => {
          setCharacters(fetched.data.results);
        })
        .catch((error) => console.log(error));
    }
  }, [characters]);

  // const truncate = (name) => {

  //   let charName = name
  //   if(name.length > 5){
  //     return charName.substring(0,5) + "..."
  //   }

  //   return charName
  // }

  return (
    <>
      {characters.length > 0 ? (
        <Container fluid>
          <Row className="center">
            {characters.map((character) => {
              return <Col sm={12} lg={6} key={character.id}>{character.name.length > 10 ? character.name.substring(0,10) + "..." : character.name}</Col>;
            })}
          </Row>
        </Container>
      ) : (
        <div>No tenemos nada</div>
      )}
    </>
  );
}

export default App;
