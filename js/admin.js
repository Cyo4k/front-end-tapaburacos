async function fetchReports() {
    const token = localStorage.getItem('token');
    if (!token) return window.location.href = 'login.html';

    try {
        const response = await fetch('https://projeto-tapa-buracos.onrender.com/reports', {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const reports = await response.json();

        const reportsDiv = document.getElementById('reports');
        reports.forEach(report => {
            const reportElement = document.createElement('div');
            reportElement.innerHTML = `
                <h3>Endereço: ${report.endereco}</h3>
                <p>Descrição: ${report.descricao}</p>
                <img src="${report.imagem}" alt="Imagem do buraco" width="200">
            `;
            reportsDiv.appendChild(reportElement);
        });
    } catch (error) {
        console.error('Erro ao buscar reportes:', error);
    }
}

function logout() {
    localStorage.removeItem('token');
    window.location.href = 'login.html';
}

document.addEventListener('DOMContentLoaded', fetchReports);
