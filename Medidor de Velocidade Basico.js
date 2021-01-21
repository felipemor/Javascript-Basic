//Mini projeto medidor de velocidade

verificavelocidade(130);

function verificavelocidade(velocidade) {
    const velocidademax = 70
    const KmPorPonto = 5
    if (velocidade <= velocidademax) {
        console.log("Parabens")
    } else {
        const pontos = Math.floor(((velocidade - velocidademax) / KmPorPonto));
        if (pontos >= 12)
            console.log('Carteira Suspensa');
        else {
            console.log('Pontos', pontos);
        }
    }

}
