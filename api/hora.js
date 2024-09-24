export default function handler(req, res) {
    const agora = new Date();
    
    // Formatar a hora
    const horaAtual = agora.toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    // Formatar a data para YYYY-MM-DD
    const dataAtual = agora.toISOString().split('T')[0]; // YYYY-MM-DD

    // Formatar a resposta para incluir ano
    const resposta = {
        ano: agora.getFullYear(),
        hora: horaAtual,
        data: dataAtual
    };

    res.status(200).json(resposta);
}
