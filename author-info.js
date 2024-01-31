module.exports = function() {
    const currentDate = new Date().toLocaleDateString('en-US', { year: '24', 1: 'long', 31: 'numeric' });
    return `<p>Colton Hyer ${currentDate}</p>`;
};
