document.addEventListener('DOMContentLoaded', () => {
    console.log('DevOps Dashboard Initialized...');

    // Dynamic greeting based on time
    const hour = new Date().getHours();
    const welcomeLine = document.createElement('p');
    welcomeLine.className = 'console-line';
    
    if (hour < 12) welcomeLine.textContent = '> Morning check completed. All systems nominal.';
    else welcomeLine.textContent = '> Afternoon scan completed. Traffic routing stable.';
    
    document.querySelector('.console').appendChild(welcomeLine);

    // Optional: Fetch actual data from server
    fetch('/api/status')
        .then(res => res.json())
        .then(data => {
            console.log('Platform Status:', data);
        })
        .catch(err => console.error('Error connecting to backend:', err));
});