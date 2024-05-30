function clearForm() {
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('confirmPassword').value = '';
    document.getElementById('name').value = '';
    document.getElementById('cpf').value = '';
    document.getElementById('birthdate').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('single').checked = true;
    document.getElementById('education').selectedIndex = 2;
    document.getElementById('email').focus();
  }
  
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function validatePassword(password) {
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[@#$%&*!\/\\|\-_+.=]).{6,}$/;
    return passwordRegex.test(password);
  }
  
  function validateCPF(cpf) {
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfRegex.test(cpf);
  }
  
  function calculateAge(birthdate) {
    const today = new Date();
    const birth = new Date(birthdate);
    let age = today.getFullYear() - birth.getFullYear();
    const month = today.getMonth() - birth.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  }

  function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const name = document.getElementById('name').value;
    const cpf = document.getElementById('cpf').value;
    const birthdate = document.getElementById('birthdate').value;
    const phone = document.getElementById('phone').value;
    const maritalStatus = document.querySelector('input[name="maritalStatus"]:checked').value;
    const education = document.getElementById('education').value;
  
    if (email === '' || !validateEmail(email)) {
      alert('Por favor, insira um e-mail válido.');
      return false;
    }
  
    if (password === '' || !validatePassword(password)) {
      alert('A senha deve ter pelo menos 6 caracteres, contendo pelo menos um caractere numérico, uma letra maiúscula e um dos seguintes caracteres especiais: @ # $ % & * ! ? / \\ | - _ + . =');
      return false;
    }
  
    if (password !== confirmPassword) {
      alert('A confirmação de senha não coincide com a senha.');
      return false;
    }
  
    if (name === '' || !/^[a-zA-Z]{2,}(?: [a-zA-Z]+){1,}$/.test(name)) {
      alert('O nome deve ter pelo menos duas palavras, e a primeira palavra deve ter pelo menos 2 caracteres.');
      return false;
    }
  
    if (cpf === '' || !validateCPF(cpf)) {
      alert('Por favor, insira um CPF válido.');
      return false;
    }
  
    const age = calculateAge(birthdate);
    if (age < 18) {
      alert('Você deve ser maior de 18 anos para se cadastrar.');
      return false;
    }
  
    alert('Validação realizada com sucesso! Cliente cadastrado.');
    window.location.href = 'login.html';
    return true;
  }
  
  function goBack() {
    window.history.back();
  }
  
  document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
  });
  