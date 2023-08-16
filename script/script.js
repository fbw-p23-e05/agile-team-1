const languageSelector = document.getElementById('language-selector');
const languageContent = document.getElementById('language-content');

languageSelector.addEventListener('change', () => {
    const selectedLanguage = languageSelector.value;
    if (selectedLanguage === 'english') {
        languageContent.innerHTML = '<p>Welcome to the English learning resources.</p>';
    } else if (selectedLanguage === 'spanish') {
        languageContent.innerHTML = '<p>Bienvenido a los recursos de aprendizaje de español.</p>';
    } else if (selectedLanguage === 'french') {
        languageContent.innerHTML = '<p>Bienvenue sur les ressources d\'apprentissage du français.</p>';
    }
});