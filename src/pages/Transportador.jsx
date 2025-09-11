export default function Transportador() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Cadastro de Transportador
      </h2>

      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">Nome Completo *</label>
          <input type="text" required className="w-full p-2 border rounded-md" />
        </div>

        <div>
          <label className="block text-gray-700">Whatsapp *</label>
          <input type="text" required className="w-full p-2 border rounded-md" />
        </div>

        <div>
          <label className="block text-gray-700">E-mail *</label>
          <input type="email" required className="w-full p-2 border rounded-md" />
        </div>

        <div>
          <label className="block text-gray-700">Endereço Atual *</label>
          <input type="text" required className="w-full p-2 border rounded-md" />
        </div>

        <div>
          <label className="block text-gray-700">Comprovante de Residência (Obrigatório)</label>
          <input type="file" required className="w-full p-2 border rounded-md" />
        </div>

        <div>
          <label className="block text-gray-700">Número da ANTT *</label>
          <input type="text" required className="w-full p-2 border rounded-md" />
        </div>

        <div>
          <label className="block text-gray-700">Número do Renavam *</label>
          <input type="text" required className="w-full p-2 border rounded-md" />
        </div>

        <div>
          <label className="block text-gray-700">Placa do Veículo *</label>
          <input type="text" required className="w-full p-2 border rounded-md" />
        </div>

        <div>
          <label className="block text-gray-700">Banco *</label>
          <input type="text" required className="w-full p-2 border rounded-md" />
        </div>

        <div>
          <label className="block text-gray-700">Agência *</label>
          <input type="text" required className="w-full p-2 border rounded-md" />
        </div>

        <div>
          <label className="block text-gray-700">Número da Conta *</label>
          <input type="text" required className="w-full p-2 border rounded-md" />
        </div>

        <div>
          <label className="block text-gray-700">Chave Pix *</label>
          <input type="text" required className="w-full p-2 border rounded-md" />
        </div>

        <div>
          <label className="block text-gray-700">Foto do Transportador *</label>
          <input type="file" required className="w-full p-2 border rounded-md" />
        </div>

        <div>
          <label className="block text-gray-700">Foto da Frente do Veículo (Placa visível) *</label>
          <input type="file" required className="w-full p-2 border rounded-md" />
        </div>

        <div>
          <label className="block text-gray-700">Foto da Traseira do Veículo (Placa visível) *</label>
          <input type="file" required className="w-full p-2 border rounded-md" />
        </div>

        <div>
          <label className="block text-gray-700">Documento obrigatório caso o caminhão seja arrendado, alugado ou similares legalmente aceitos</label>
          <input type="file" className="w-full p-2 border rounded-md" />
        </div>

        <div>
          <label className="block text-gray-700">CNH (Opcional)</label>
          <input type="file" className="w-full p-2 border rounded-md" />
        </div>

        <div>
          <label className="block text-gray-700">RG (Opcional)</label>
          <input type="file" className="w-full p-2 border rounded-md" />
        </div>

        <div>
          <label className="block text-gray-700">CPF (Opcional)</label>
          <input type="file" className="w-full p-2 border rounded-md" />
        </div>

        <div>
          <label className="block text-gray-700">Outros Documentos (Opcional)</label>
          <input type="file" className="w-full p-2 border rounded-md" />
        </div>

        <div className="text-center">
          <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Cadastrar Transportador
          </button>
        </div>
      </form>
    </div>
  );
}
