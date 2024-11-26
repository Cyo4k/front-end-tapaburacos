async function sendReport() {
    const token = localStorage.getItem('token');
    if (!token) return window.location.href = 'login.html';

    const address = document.getElementById('address').value;
    const image = document.getElementById('image').value;
    const description = document.getElementById('description').value;

    try {
        const response = await fetch('http://localhost:3000/reports', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ endereco: address, imagem: image, descricao: description })
        });

        if (response.ok) {
            alert('Reporte enviado com sucesso');
            window.location.href = 'admin.html';
        } else {
            alert('Erro ao enviar reporte');
        }
    } catch (error) {
        console.error('Erro ao enviar reporte:', error);
    }
}
