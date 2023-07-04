
const generateUniqueId = ( num ) => {
const s  = 'abcdefghijklmnopqrstuvwxyz0123456789';
const id  = s[Math.floor(Math.random() * s.length)]+num+s[Math.floor(Math.random() * s.length)];

return id ;

}
module.exports = generateUniqueId;





