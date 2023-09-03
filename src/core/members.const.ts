import { Member } from "./entities/member"



export const MEMBERS: Member[] = [new Member('Father Fever'), new Member('MASQ')]



const members = {
  FATHER_FEVER: {
    specialTrait: {
      description: "Quando atinge zero pontos de vida, Father Fever pode realizar um teste de vontade para roubar metade dos pontos de vida do personagem que o matou.O jogador deve rolar um D6, se tirar 4 ou mais Father Fever pode usar essa habilidade.Essa habilidade só pode ser utilizada uma vez por batalha",
      rule: null
    }
  },
  MASQ: {
    specialTrait: {
      description: "Masq pode se trocar de lugar com qualquer outro vampiro em campo. Ao fazer isso, o jogador afetado deve rolar um D6, se tirar 3 ou menos Masq não poderá mais realizar ataques nestarodada.",
      rule: null
    }
  }
}