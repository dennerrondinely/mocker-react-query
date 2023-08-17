import React, { useEffect } from 'react';
import { useCep } from '../../services/queries/useCep';

const Home = () => {
  const { data } = useCep({ cep: '36091150', mock: true });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return <div>
    <label htmlFor="cep">
      CEP
      <input type="text" id="cep"/>
    </label>
    <button>buscar cep</button>
  </div>;
}

export default Home;