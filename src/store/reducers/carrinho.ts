// O Redux toolkit trabalha com o conceito de slices que, traduzindo, são fatias de funcionalidades. Nesse arquivo teremos as actions e também vamos ter os reducers

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Game } from '../../App'

type CarrinhoState = {
  itens: Game[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Game>) => {
      const jogo = action.payload

      if (state.itens.find((game) => game.id === jogo.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(jogo)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer

// O reducer acima reescreveu a seguinte função:

// function adicionarAoCarrinho(jogo: Game) {
//   if (carrinho.find((game) => game.id === jogo.id)) {
//     alert('Item já adicionado')
//   } else {
//     setCarrinho([...carrinho, jogo])
//   }
// }
