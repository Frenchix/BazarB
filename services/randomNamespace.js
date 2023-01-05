module.exports = {
    randomNamespace: function (){
        let charBank = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012346789";
        let random= '';
        let howmanycharacters = 8;
        for (let i = 0; i < howmanycharacters ; i++) {
            random+= charBank[parseInt(Math.random() * charBank.length)];
        }
        return random;
    }
}