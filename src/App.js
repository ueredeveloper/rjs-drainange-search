import { useEffect, useState } from 'react';

import logo from './logo.svg';
import './App.css';
import { ElemSearch } from './elem-search'

function App() {

  const [search, setSearch] = useState({
    us_nome: "",
    us_cpf_cnpj: "",
    doc_end: 0,
    doc_sei: "123",
    proc_sei: "",
  })

  const [users, setUsers] = useState()

  useEffect(() => {
    console.log(users)
  }, [users])

  return (
    <div className="App">
      <ElemSearch search={search} setSearch={setSearch} setUsers={setUsers} />
    </div>
  );
}

export default App;
