# Fearless Draft – League of Legends

Sistema de **Fearless Draft** para League of Legends, desenvolvido para uso em **overlays de transmissão**, campeonatos amadores ou scrims entre amigos.

O projeto permite cadastrar os campeões banidos por jogo, separados por **Time Azul** e **Time Vermelho**, com suporte a entrada múltipla por **vírgula**, salvando o histórico automaticamente no `localStorage` e permitindo integração com um overlay em tempo real.

---

## ✨ Funcionalidades

- ✅ Painel de controle (Control)
- ✅ Overlay em tempo real (Overlay)
- ✅ Suporte a **Fearless Draft**
- ✅ Bans separados por **time azul e time vermelho**
- ✅ Até **5 bans por time**
- ✅ Múltiplos jogos (Game 01, Game 02, etc.)
- ✅ Tags personalizadas por time (ex: `SKT`, `ECP`)
- ✅ Inserção de campeões **um por um ou separados por vírgula**
- ✅ Remoção individual de bans
- ✅ Histórico de jogos finalizados
- ✅ Botão para resetar toda a série
- ✅ Layout sem fundo (ideal para OBS)
- ✅ Sincronização via `localStorage`

---

## 🧰 Tecnologias Utilizadas

- HTML
- CSS
- JavaScript (Vanilla)
- LocalStorage (persistência local)

---

## 🗂️ Estrutura de Pastas

```txt
/
├─ assets/
│  ├─ ahri.png
│  ├─ yasuo.png
│  ├─ sejuani.png
│  └─ ...
├─ control.html
├─ control.js
├─ overlay.html
├─ overlay.js
├─ style.css
└─ README.md
```

## Como Rodar o Projeto

### Opção 1 – Abrir direto no navegador

1. Baixe ou clone o projeto
2. Abra o arquivo index.html no navegador
3. O sistema já estará funcionando

### Opção 2 – Usar servidor local (recomendado)

#### Usando Node.js

1. Tenha o Node.js instalado
2. No diretório do projeto, execute:
   npx serve .
3. Acesse o endereço exibido no terminal (ex: http://localhost:3000)

#### Usando Server Python

Se você tiver Python instalado:
python -m http.server 5500

Depois abra no navegador:
http://localhost:5500/control.html
http://localhost:5500/overlay.html

1. Abra o OBS Studio
2. Adicione uma Fonte → Navegador
3. URL: http://localhost:5500/overlay.html
4. Largura: 1920
5. Altura: 1080
6. Marque:
   ✔️ Atualizar navegador quando a fonte se tornar ativa
   ✔️ Usar aceleração de hardware
   ✅ O overlay é totalmente transparente

## Como Usar o Sistema

### 1. Definir os Times

- Digite o nome do time no campo de tag
- Caso não seja preenchido:
  - Time Azul recebe o nome BLUE
  - Time Vermelho recebe o nome RED

### 2. Adicionar Campeões

Você pode adicionar campeões de duas formas:

- Digitando um campeão por vez e clicando em Adicionar
- Digitando vários campeões separados por vírgula  
  Exemplo: sejuani, yasuo, vi, ahri, sion

O sistema irá separar automaticamente os nomes, ignorar campos vazios e limitar a 5 campeões por time.

### 3. Remover Campeões

Clique no botão ✕ ao lado do campeão para removê-lo da lista.

### 4. Finalizar o Jogo

Após ambos os times terem 5 campeões:

1. Clique em "Próximo Jogo"
2. O jogo será salvo no histórico
3. Um novo jogo será iniciado automaticamente

### 5. Resetar a Série

- Clique em "Resetar"
- Todos os jogos salvos serão apagados após confirmação

## Integração com Overlay

O sistema utiliza localStorage para compartilhar os dados:

- fearlessDraft: histórico completo de jogos
- fearlessDraftPreview: jogo atual em andamento

O overlay pode ler essas informações em tempo real para exibição na live.

## Observações

- Os nomes dos campeões devem coincidir com os nomes das imagens usadas no overlay
- Recomenda-se padronizar os nomes dos arquivos (ex: yasuo.png, ahri.png)
- O projeto não depende de APIs externas

## Licença

Projeto livre para uso pessoal, educacional ou em campeonatos amadores.  
Sinta-se livre para modificar e expandir o sistema conforme necessário.
