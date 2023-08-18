var frutas =[
    "ABACATE",
    "ABACAXI",
    "ACEROLA",
    "AÇAI",
    "ARAÇA",
    "ABACATE",
    "BACABA",
    "BACURI",
    "BANANA",
    "CAJA",
    "CAJU",
    "CARAMBOLA",
    "CAPUAÇU",
    "GRAVIOLA",
    "GOIABA",
    "JABUTICABA",
    "JENIPAPO",
    "MAÇÃ",
    "MANGABA",
    "MANGA",
    "MARACUJA",
    "MURICI",
    "PEQUI",
    "PITANGA",
    "PITAYA",
    "SAPOTI",
    "TANGERINA",
    "UMBU",
    "UVA",
    "UVAIA"
];

class AdivinhacaoIndexView {
    txtChute = document.getElementById('txtChute');
    btnAvaliar = document.getElementById('btnAvaliar');
    btnTentarNovamente = document.getElementById('btnTentarNovamente');
    numeroSecreto = 0;
    
    constructor() {
          this.registrarEventos();
          this.obterNumeroSecreto();
    }
    registrarEventos() {
        this.btnAvaliar.addEventListener('click', () => this.avaliarChute());
    
        this.btnTentarNovamente.addEventListener('click', () => this.reiniciarJogo());
      }
    
      reiniciarJogo() {
        const pnlConteudo = document.getElementById('pnlConteudo');
    
        pnlConteudo.querySelector('p')?.remove();
        
        this.btnAvaliar.disabled = false;
        this.txtChute.value = '';
    
        this.obterNumeroSecreto();
      }
}
