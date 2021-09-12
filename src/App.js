import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
class App extends Component {
  constructor () {
    super()
    this.notas = []
    this.state = {}
  }
  criarNota (titulo, texto) {
    this.notas.push({
      titulo, texto
    })
    this.setState({
      notas: this.notas
    })
  }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.notas} />
      </section>
    );
  }
}

export default App;
