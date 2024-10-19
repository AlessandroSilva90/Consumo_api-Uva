import './App.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { listar_produtos } from './api';
import axios from 'axios';
import CardComponent from './Components/Card';
import NavbarComponent from './Components/Navbar'

function App() {
  const { token } = useParams();

  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    const get_produtos = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/listar_produtos/${token}`, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        });
        setProdutos(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    get_produtos();
  }, [token]);


  // useEffect(() => {
  //   console.log('Estado de produtos atualizado:', produtos[0]);
  // }, [produtos]);

  return (
    <div>
      <NavbarComponent></NavbarComponent>

      <h1 style={{padding:"1rem"}}>Caro cliente, aqui se encontra sua lista de Produtos</h1>
      <ul style={{ listStyleType: 'none', maxWidth:"80rem", margin:'2rem', padding:'2rem', background:"#EAEDED"}}>
      {produtos.map((produto, index) => (
          <li key={index}>
            <CardComponent nome={produto.produto.nome}
              descricao={produto.produto.descricao}
              preco={produto.produto.preco_venda}
            ></CardComponent>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App
