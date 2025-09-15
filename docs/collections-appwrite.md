# í³‘ Modelagem das Collections â€“ Appwrite

## í±¤ Clientes
- nome, email, whatsapp, banco, agencia, conta, pix, senha, endereco.

## íº› Transportadores
- nome, whatsapp, email, endereco, antt, renavam, placa, doc_residencia, doc_veiculo, doc_pessoais, banco, agencia, conta, pix, verificado.

## í´ Afiliados
- nome, whatsapp, email, banco, agencia, conta, pix, cidade, estado.

## í³¦ Cargas
- codigo, cliente_id, origem, destino, tipo, peso_volume, data_coleta, prioridade, status, transportador_id.

## í²° Pagamentos
- carga_id, cliente_id, transportador_id, valor, metodo, parcelas, status.

## â­ Ranking
- transportador_id, nota_media, total_avaliacoes, destaque.

## í¾ Fidelidade
- cliente_id, pontos, nivel, beneficios.

## í´— Relacionamentos
- Cliente â†’ Cargas.
- Transportador â†’ Cargas.
- Cargas â†’ Pagamentos.
- Transportadores â†’ Ranking.
- Clientes â†’ Fidelidade.
- Afiliados â†’ Ganhos por indicaÃ§Ãµes.
