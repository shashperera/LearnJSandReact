function fetchData(url, callback) {
    // Simulate fetching data from a URL
    setTimeout(() => {
        const data = { name: 'John', age: 30 };
        callback(data);
    }, 1000);
}

fetchData('https://example.com/api/data', (result) => {
    console.log('Data received:', result);
});