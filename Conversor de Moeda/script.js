const button = document.querySelector('.convert-button')

function clicked() {
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert')
    const currencyName = document.getElementById('currency-name')
    const imagem = document.getElementById('currency-img')
    const valorInput = document.querySelector('.input-currency').value
    const currencySelect = document.querySelector('.currency-select')
    const currencyValue = document.querySelector('.currency-value')
    const valorDolar = valorInput / 5.04
    const valorEuro = valorInput / 5.40
    const valorLibra = valorInput / 6.21
    const valorBitcoin = valorInput / 133324.10

    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valorInput)

    if (currencySelect.value == 'dolar') {
        currencyValue.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(valorDolar)
        currencyName.innerHTML = 'Dólar Americano'
        imagem.src = './img/eua.png'
    }

    if (currencySelect.value == 'euro') {
        currencyValue.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(valorEuro)
        currencyName.innerHTML = 'Euro'
        imagem.src = './img/euro.png'
    }

    if (currencySelect.value == 'libra') {
        currencyValue.innerHTML = new Intl.NumberFormat('en-UK', {
            style: 'currency',
            currency: 'GBP'
        }).format(valorLibra)
        currencyName.innerHTML = 'Libra'
        imagem.src = './img/libra.png'
    }

    if (currencySelect.value == 'bitcoin') {
        currencyValue.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BTC'
        }).format(valorBitcoin)
        currencyName.innerHTML = 'Bitcoin'
        imagem.src = './img/bitcoin.png'
    }
}