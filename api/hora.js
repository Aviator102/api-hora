export default function handler(req, res) {
    const agora = new Date();
    const horaAtual = agora.toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    const dataAtual = agora.toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' });

    res.status(200).json({
        hora: horaAtual,
        data: dataAtual
    });
}
