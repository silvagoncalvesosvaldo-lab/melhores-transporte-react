import React, { useState } from "react";

function CadastroCliente() {
  const [tipoCarga, setTipoCarga] = useState("");

  return (
    <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Cadastro de Cliente/Embarcador/Embarcador
      </h2>
      <form className="space-y-4">

        {/* Campos básicos */}
        <input type="text" placeholder="Nome Completo" className="w-full border p-2 rounded" />
        <input type="text" placeholder="Whatsapp" className="w-full border p-2 rounded" />
        <input type="email" placeholder="E-mail" className="w-full border p-2 rounded" />
        <input type="text" placeholder="Endereço Atual" className="w-full border p-2 rounded" />
        <input type="text" placeholder="Banco" className="w-full border p-2 rounded" />
        <input type="text" placeholder="Agência" className="w-full border p-2 rounded" />
        <input type="text" placeholder="Número da Conta" className="w-full border p-2 rounded" />
        <input type="text" placeholder="Chave Pix" className="w-full border p-2 rounded" />

        {/* Tipo de Carga */}
        <label className="block">
          Selecione o tipo de carga que deseja cadastrar/anunciar e responda o Formulário abaixo:
          <select
            className="w-full border p-2 rounded mt-1"
            value={tipoCarga}
            onChange={(e) => setTipoCarga(e.target.value)}
          >
            <option value="">Selecione o tipo de carga</option>
            <option value="mudanca">Mudanças</option>
            <option value="carretos">Carretos</option>
            <option value="cargas-secas">Cargas Secas</option>
            <option value="cargas-refrigeradas">Cargas Refrigeradas</option>
            <option value="cargas-granel">Cargas a Granel</option>
            <option value="cargas-perigosas">Cargas Perigosas</option>
            <option value="cargas-grande-porte">Cargas Indivisíveis e de Grande Porte</option>
            <option value="cargas-veiculos">Cargas de Veículos</option>
            <option value="cargas-conteinerizadas">Cargas Conteinerizadas</option>
          </select>
        </label>

        {/* Formulário de Mudanças */}
        {tipoCarga === "mudanca" && (
          <div className="p-4 border rounded-lg bg-gray-50 space-y-3">
            <h3 className="text-lg font-semibold">Formulário de Mudanças</h3>

            <label>
              1- Qual a data que gostaria que fizessem o transporte? (Resposta com dia/mês/ano)
              <input type="date" className="w-full border p-2 rounded" />
            </label>

            <label>
              2- Essa data é flexível, podendo ocorrer em outros dias? Resposta "Sim" ou "Não"
              <div>
                <input type="radio" name="flexivel" value="Sim" /> Sim
                <input type="radio" name="flexivel" value="Não" className="ml-4" /> Não
              </div>
            </label>

            <label>
              3- Qual a Cidade e Estado onde será o carregamento?
              <input type="text" placeholder="Cidade e Estado" className="w-full border p-2 rounded" />
            </label>

            <label>
              4- Qual a Cidade e Estado onde será o descarregamento?
              <input type="text" placeholder="Cidade e Estado" className="w-full border p-2 rounded" />
            </label>

            <label>
              5- Existe algum tipo de Escada nos locais de carregamento e descarregamento? Resposta "Sim" ou "Não"
              <div>
                <input type="radio" name="escada" value="Sim" /> Sim
                <input type="radio" name="escada" value="Não" className="ml-4" /> Não
              </div>
            </label>

            <label>
              6- Em ambos os locais, os seus itens passam sem dificuldades por portas, corredores e todas as vias de circulação? Resposta "Sim" ou "Não"       
              <div>
                <input type="radio" name="dificuldades" value="Sim" /> Sim
                <input type="radio" name="dificuldades" value="Não" className="ml-4" /> Não
              </div>
            </label>

            <label>
              7- Em ambos os locais, teremos que circular em porões ou subsolos? Resposta "Sim" ou "Não"
              <div>
                <input type="radio" name="subsolo" value="Sim" /> Sim
                <input type="radio" name="subsolo" value="Não" className="ml-4" /> Não
              </div>
            </label>

            <label>
              8- [Aviso: Motorista não ajuda a carregar ou descarregar, somente recebe e solta os itens nas portas do Baú/carroceria do caminhão] - Precisa de ajudante(s) para carregar e ou descarregar? Resposta "Sim" ou "Não"
              <div>
                <input type="radio" name="ajudante" value="Sim" /> Sim
                <input type="radio" name="ajudante" value="Não" className="ml-4" /> Não
              </div>
            </label>

            <label>
              9- [Aviso: Caso seja necessário a Desmontagem e ou Montagem de qualquer tipo de móveis ou outros, serão combinados dentro da conversa, atravéz do Chat.] - Precisa que seja feito o serviço de embalar e encaixotar copos, louças, talheres, quadros, retratos, roupas, calçados e outros. Resposta "Sim" ou "Não"
              <div>
                <input type="radio" name="embalar" value="Sim" /> Sim
                <input type="radio" name="embalar" value="Não" className="ml-4" /> Não
              </div>
            </label>

            <div>
              10- Caso você precise que seja feito o serviço de embalar e encaixotar, assinale quais e quantos desses abaixo precisa ser embalado e encaixotado).
              <input type="text" placeholder="Copos e similares (   )" className="w-full border p-2 rounded mt-1" />
              <input type="text" placeholder="Louças e similares (   )" className="w-full border p-2 rounded mt-1" />
              <input type="text" placeholder="Talheres e similares (   )" className="w-full border p-2 rounded mt-1" />
              <input type="text" placeholder="Panelas e similares (   )" className="w-full border p-2 rounded mt-1" />
              <input type="text" placeholder="Quadros e similares (   )" className="w-full border p-2 rounded mt-1" />
              <input type="text" placeholder="Espelhos e similares (   )" className="w-full border p-2 rounded mt-1" />
              <input type="text" placeholder="Retratos e similares (   )" className="w-full border p-2 rounded mt-1" />
              <input type="text" placeholder="Roupas e similares (   )" className="w-full border p-2 rounded mt-1" />
              <input type="text" placeholder="Calçados e similares (   )" className="w-full border p-2 rounded mt-1" />
              <input type="text" placeholder="Outros (   )" className="w-full border p-2 rounded mt-1" />
            </div>

            <label>
              11- [Aviso: Caso seja necessário o transporte de animais, será combinados dentro da conversa, atravéz do Chat.] - Precisa de caixas e outros materiais para embalagem? Resposta "Sim" ou "Não"        
              <div>
                <input type="radio" name="materiais" value="Sim" /> Sim
                <input type="radio" name="materiais" value="Não" className="ml-4" /> Não
              </div>
            </label>

            <div>
              12- Caso precise de materiais para embalagem assinale os materiais e a quantidade:
              <input type="text" placeholder="Caixas (   )" className="w-full border p-2 rounded mt-1" />
              <input type="text" placeholder="Papel de embrulho (   )" className="w-full border p-2 rounded mt-1" />
              <input type="text" placeholder="Fitas adesivas (   )" className="w-full border p-2 rounded mt-1" />
              <input type="text" placeholder="Rolo Plástico bolhas (   )" className="w-full border p-2 rounded mt-1" />
            </div>

            <p className="text-blue-700 font-semibold">
              OBSERVAÇÃO: Por favor nos envie uma lista com todos os itens a serem transportados. Nessa lista nos envie NO MÍNIMO as medidas dos itens de maior altura, itens de maior largura, itens de maior comprimento. Caso seja possível nos envie um vídeo bem esclarecedor filmando todos os itens que deseja transportar.
            </p>
            <label>
              Enviar vídeo (opcional):
              <input type="file" accept="video/*" className="w-full border p-2 rounded mt-1" />
            </label>

            <p className="text-red-600 font-semibold">
              ATENÇÃO: Qualquer item ou objeto que for acrescentado depois que passarmos o nosso orçamento, não será transportado por nós, mas caso ainda caiba no baú/carroceria do caminhão será cobrado o valor de R$300,00 por unidade que exceda com o nosso combinado. Desde já agradecemos pelo seu contato e compreensão.
            </p>
          </div>
        )}

        {/* Formulário de Cargas */}
        {tipoCarga !== "" && tipoCarga !== "mudanca" && (
          <div className="p-4 border rounded-lg bg-gray-50 space-y-3">
            <h3 className="text-lg font-semibold">Formulário de Cargas</h3>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold">CARGA POR UNIDADES</h4>
                <input type="text" placeholder="1- Quantas unidades/volumes?" className="w-full border p-2 rounded" />
                <input type="text" placeholder="2- Qual a altura das unidades ou volumes?" className="w-full border p-2 rounded" />
                <input type="text" placeholder="3- Qual a largura das unidades ou volumes?" className="w-full border p-2 rounded" />
                <input type="text" placeholder="4- Qual o comprimento das unidades ou volumes?" className="w-full border p-2 rounded" />
                <input type="text" placeholder="5- Qual a cubagem?" className="w-full border p-2 rounded" />
                <input type="text" placeholder="6- Qual o peso total?" className="w-full border p-2 rounded" />
              </div>

              <div>
                <h4 className="font-semibold">CARGA PALLETIZADA</h4>
                <input type="text" placeholder="1- Quantas unidades de pallets?" className="w-full border p-2 rounded" />
                <input type="text" placeholder="2- Qual a altura de cada pallet?" className="w-full border p-2 rounded" />
                <input type="text" placeholder="3- Qual a largura de cada pallet?" className="w-full border p-2 rounded" />
                <input type="text" placeholder="4- Qual o comprimento de cada pallet?" className="w-full border p-2 rounded" />
                <input type="text" placeholder="5- Qual a cubagem?" className="w-full border p-2 rounded" />
                <input type="text" placeholder="6- Qual o peso total?" className="w-full border p-2 rounded" />
              </div>

              <div>
                <h4 className="font-semibold">CARGA BATIDA</h4>
                <input type="text" placeholder="1- Quantas unidades/volumes?" className="w-full border p-2 rounded" />
                <input type="text" placeholder="2- Qual a altura das unidades ou volumes?" className="w-full border p-2 rounded" />
                <input type="text" placeholder="3- Qual a largura das unidades ou volumes?" className="w-full border p-2 rounded" />
                <input type="text" placeholder="4- Qual o comprimento das unidades ou volumes?" className="w-full border p-2 rounded" />
                <input type="text" placeholder="5- Qual a cubagem?" className="w-full border p-2 rounded" />
                <input type="text" placeholder="6- Qual o peso total?" className="w-full border p-2 rounded" />
              </div>
            </div>

            <h4 className="font-semibold mt-4">ATENÇÃO PARA OUTROS TIPOS DE CARGA:</h4>
            <textarea
              placeholder={`Descreva aqui todos os dados dessa carga como: volumetria, cubagem, peso total etc...
Descrever aqui tudo que for necessário, para que o transportador saiba exatamente todas as caracteristicas dessa carga.`}
              className="w-full border p-3 rounded-lg"
            />
          </div>
        )}

        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default CadastroCliente;
