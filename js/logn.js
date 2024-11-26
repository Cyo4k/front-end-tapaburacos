async function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('https://projeto-tapa-buracos.onrender.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, senha: password })
        });

        const data = await response.json();
        if (response.ok) {
            localStorage.setItem('token', data.token);
            alert('Login realizado com sucesso');
            window.location.href = 'admin.html';
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error);
    }
}
