function generate() {
    let dictionary = '';
    if (document.getElementById('lowercaseCheckBox').checked) {
      dictionary += 'qwertyuiopasdfghjklzxcvbnm';
    }
    if (document.getElementById('uppercaseCheckBox').checked) {
      dictionary += 'QWERTYUIOPASDFGHJKLZXCVBNM';
    }
    if (document.getElementById('numbersCheckBox').checked) {
      dictionary += '1234567890';
    }
    if (document.getElementById('specialsCheckBox').checked) {
      dictionary += '!@#$%^&*()_+-={}[];<>:';
    }
    const length = document.querySelector('input[type="range"]').value;
  
    if (length < 1 || dictionary.length === 0) {
      return;
    }
  
    let password = '';
    for (let i = 0; i < length; i++) {
      const pos = Math.floor(Math.random() * dictionary.length);
      password += dictionary[pos];
    }
  
    document.querySelector('input[type="text"]').value = password;
  }
  
  [...document.querySelectorAll('input[type="checkbox"], button.generate')].forEach(elem => {
    elem.addEventListener('click', generate);
  });
  
  document.querySelector('input[type="range"]').addEventListener('input', e => {
    document.querySelector('div.range span').innerHTML = e.target.value;
    generate();
  });

  document.querySelector('#rangeInput').addEventListener('input', e => {
    document.querySelector('#numberInput').value = e.target.value;
    generate();
});

document.querySelector('#numberInput').addEventListener('input', e => {
    let value = e.target.value;
    if (value > 24) {
        value = 24;
        e.target.value = value;
    }
    document.querySelector('#rangeInput').value = value;
    generate();
});
  
  document.querySelector('div.password button').addEventListener('click', () => {
    const pass = document.querySelector('input[type="text"]').value;
    navigator.clipboard.writeText(pass).then(() => {
      document.querySelector('div.password button').innerHTML = 'Copiado!';
      setTimeout(() => {
        document.getElementById('copiar-icon').innerHTML = '<a href="#"><img src="icons8-copy-32.png" id="copiar-icon" width="20" style="display: flex; align-self: self-start;"></a>';
      }, 1000);
    })
  });
  
  generate();

  