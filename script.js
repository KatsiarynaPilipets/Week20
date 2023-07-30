function fetchData() {
    const baseUrl = 'https://swapi.dev/api';
    const entityType = 'people';
    const entityId = Math.floor(Math.random() * 10) + 1;
    const url = `${baseUrl}/${entityType}/${entityId}`;

    const loadingMessage = document.getElementById('loading');
    const resultContainer = document.getElementById('result');
    const errorContainer = document.getElementById('error');

    loadingMessage.style.display = 'block';
    resultContainer.textContent = '';
    errorContainer.textContent = '';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(`Ошибка: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            loadingMessage.style.display = 'none';
            resultContainer.textContent = `Имя: ${data.name}, Рост: ${data.height}, Вес: ${data.mass}`;
        })
        .catch(error => {
            loadingMessage.style.display = 'none';
            errorContainer.textContent = `Ошибка: ${error}. Сервер не доступен.`;
        });
}