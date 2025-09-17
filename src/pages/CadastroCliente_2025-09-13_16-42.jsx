import React, { useState } from "react";

export default function CadastroCliente() {
  const [tipoCarga, setTipoCarga] = useState("");

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
      <h1 style={{ background: "#007BFF", color: "white", padding: "10px" }}>
        Formulário Obrigatório, Preencha Totalmente.
      </h1>

      {/* Cadastro do Cliente/Embarcador */}
      <h3>Cadastro do Cliente/Embarcador</h3>
      <div style={{ border: "1px solid #000", padding: "10px", margin: "15px 0" }}>
        <label>Nome Completo: <input type="text" style={{ width: "80%" }} required /></label><br />
        <label>Whatsapp: <input type="text" style={{ width: "40%" }} required /></label><br />
        <label>E-mail: <input type="email" style={{ width: "80%" }} required /></label><br />
        <label>Endereço Atual: <input type="text" style={{ width: "80%" }} required /></label><br />
        <label>Banco: <input type="text" style={{ width: "40%" }} /></label><br />
        <label>Agência: <input type="text" style={{ width: "40%" }} /></label><br />
        <label>Número da Conta: <input type="text" style={{ width: "40%" }} /></label><br />
        <label>Chave Pix: <input type="text" style={{ width: "80%" }} /></label>
      </div>

      {/* Seleção de Carga */}
      <h3>Escolha o tipo de Carga que deseja Cadastrar:</h3>
      <select value={tipoCarga} onChange={(e) => setTipoCarga(e.target.value)}>
        <option value="">-- Selecionar Carga --</option>
        <option value="mudanca">Mudança</option>
        <option value="carretos">Carretos</option>
        <option value="secas">Cargas Secas</option>
        <option value="refrigeradas">Cargas Refrigeradas</option>
        <option value="granel">Cargas a Granel</option>
        <option value="perigosas">Cargas Perigosas</option>
        <option value="veiculos">Cargas de Veículos</option>
        <option value="conteinerizadas">Cargas Conteinerizadas</option>
        <option value="grandeporte">Cargas Indivisíveis e de Grande Porte</option>
      </select>

      {/* Formulário Mudança */}
      {tipoCarga === "mudanca" && (
        <div style={{ border: "1px solid #000", padding: "10px", margin: "15px 0" }}>
          <h2 style={{ color: "#b30000" }}>Formulário de Mudança</h2>

          {/* Perguntas principais */}
          <label>1- Qual a data que gostaria que fizessem o transporte? Resposta com Todos esses -> dia/mês/ano</label>
          <input type="date" required /><br />

          <label>2- Essa data é flexível, podendo ocorrer em outros dias? ( )Sim ( )Não</label><br />

          <label>3- Qual a Cidade e Estado onde será o carregamento?</label><br />
          Cidade: <input type="text" required /> Estado: <input type="text" required /><br />

          <label>4- Qual a Cidade e Estado onde será o descarregamento?</label><br />
          Cidade: <input type="text" required /> Estado: <input type="text" required /><br />

          <label>5- Existe algum tipo de Escada nos locais de carregamento e descarregamento? ( )Sim ( )Não</label><br />
          <label>6- Em ambos os locais, os seus itens passam com dificuldades por portas, corredores e todas as vias de circulação? ( )Sim ( )Não</label><br />
          <label>7- Em ambos os locais, teremos que circular em porões ou subsolos? ( )Sim ( )Não</label><br />
          <label>8- Precisa de ajudante(s) para carregar e/ou descarregar? ( )Sim ( )Não</label><br />
          <label>9- Precisa que seja feito o serviço de Embalar e Encaixotar copos, louças, talheres, quadros, retratos, roupas, calçados e outros? ( )Sim ( )Não</label><br />

          <p style={{ color: "red", fontWeight: "bold" }}>
            AVISO: Caso seja necessário a Desmontagem e/ou Montagem de móveis ou outros, o acordo será realizado na conversa pelo chat da plataforma.
          </p>

          {/* Itens a embalar */}
          <h3>10- Assinale quais desses itens abaixo precisam ser Embalados e Encaixotados, também informe a quantidade em cada item assinalado:</h3>
          {["Copos", "Louças", "Talheres", "Panelas", "Quadros", "Espelhos", "Retratos", "Roupas", "Calçados", "Outros objetos"].map((item) => (
            <label key={item}>
              <input type="checkbox" /> {item} → Quantidade: <input type="number" />
            </label>
          ))}

          {/* Materiais */}
          <h3>11- Precisa de caixas e outros materiais para sua mudança? ( )Sim ( )Não</h3>
          <p style={{ color: "red", fontWeight: "bold" }}>
            [AVISO: Caso seja necessário o transporte de animais, o acordo será realizado na conversa pelo chat da plataforma]
          </p>

          <h3>12- Assinale abaixo quais os materiais que você precisa para proteção da sua mudança, também informe a quantidade em cada item assinalado:</h3>
          {["Caixas de papelão", "Papel de embrulho", "Fitas adesivas", "Rolo Plástico bolhas", "Pincel Atômico"].map((item) => (
            <label key={item}>
              <input type="checkbox" /> {item} → Quantidade: <input type="number" />
            </label>
          ))}
          <p>Escolha a(s) cores do pincel: ( )Preto ( )Azul ( )Vermelho ( )Verde ( )Amarelo</p>

          {/* Observação e envio de lista */}
          <p style={{ color: "red", fontWeight: "bold" }}>
            OBSERVAÇÃO: Por favor nos envie uma lista com todos os itens a serem transportados. Nessa lista nos envie NO MÍNIMO as medidas dos itens de maior altura, itens de maior largura, itens de maior comprimento. Caso seja possível nos envie um vídeo bem esclarecedor filmando todos os itens que deseja transportar.
          </p>

          <div style={{ border: "1px solid #000", padding: "10px", margin: "15px 0" }}>
            <h3>Envie sua lista de itens a serem transportados (arquivo ou escreva abaixo):</h3>
            <label>Upload de arquivo: <input type="file" accept=".doc,.docx,.xls,.xlsx,.pdf,.txt" /></label><br />
            <label>Ou escreva sua lista aqui:</label><br />
            <textarea placeholder="Digite aqui sua lista de itens..." style={{ width: "100%", height: "120px" }} />
          </div>

          {/* Vídeo */}
          <div style={{ border: "1px solid #000", padding: "10px", margin: "15px 0" }}>
            <label>Envie aqui um vídeo (opcional): </label>
            <input type="file" accept="video/*" />
          </div>

          <p style={{ color: "red", fontWeight: "bold" }}>
            ATENÇÃO: Qualquer item ou objeto que for acrescentado depois que passarmos o nosso orçamento, não será transportado por nós, mas caso ainda caiba no baú/carroceria do caminhão será cobrado o valor de R$300,00 por unidade que exceda com o nosso combinado. Desde já agradecemos pelo seu contato e compreensão.
          </p>

          <button style={{ background: "#007BFF", color: "white", padding: "12px 20px", marginTop: "15px", cursor: "pointer" }}>
            Finalizar Cadastro
          </button>
        </div>
      )}

      {/* Formulário Carga */}
      {tipoCarga && tipoCarga !== "mudanca" && (
        <div style={{ border: "1px solid #000", padding: "10px", margin: "15px 0" }}>
          <h2 style={{ color: "#b30000" }}>Formulário de Carga</h2>

          <h3>CARGA POR UNIDADES:</h3>
          {["Quantidade de unidades/volumes", "Qual a altura das unidades ou volumes?", "Qual a largura das unidades ou volumes?", "Qual o comprimento das unidades ou volumes?", "Qual a cubagem?", "Qual o peso total?"].map((q, i) => (
            <label key={i}>{i + 1}- {q} → <input type="number" /></label>
          ))}

          <h3>CARGA PALETIADA:</h3>
          {["Quantidade de unidades de pallets", "Qual a altura de cada pallet?", "Qual a largura de cada pallet?", "Qual o comprimento de cada pallet?", "Qual a cubagem?", "Qual o peso total?"].map((q, i) => (
            <label key={i}>{i + 1}- {q} → <input type="number" /></label>
          ))}

          <h3>CARGA BATIDA:</h3>
          {["Quantidade de unidades/volumes", "Qual a altura das unidades ou volumes?", "Qual a largura das unidades ou volumes?", "Qual o comprimento das unidades ou volumes?", "Qual a cubagem?", "Qual o peso total?"].map((q, i) => (
            <label key={i}>{i + 1}- {q} → <input type="number" /></label>
          ))}

          <h3 style={{ color: "red" }}>ATENÇÃO: PARA OUTROS TIPOS DE CARGA PREENCHA ABAIXO:</h3>
          <textarea
            placeholder="Descreva aqui nesse espaço todos os dados dessa carga como: volumetria, cubagem, peso total etc...
Descrever aqui também, tudo que for necessário para que o transportador saiba exatamente todas as características dessa carga."
            style={{ width: "100%", height: "120px" }}
          />

          <button style={{ background: "#007BFF", color: "white", padding: "12px 20px", marginTop: "15px", cursor: "pointer" }}>
            Finalizar Cadastro
          </button>
        </div>
      )}
    </div>
  );
}
