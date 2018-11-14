function login (req, res) {
    res.write('this is login...');
};
function register (req, res) {
    res.write('this is register...');
}

module.exports = {
    login,
    register
};
  
