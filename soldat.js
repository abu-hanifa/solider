const solider = {
    nameSolider: 'alik',
    hp: 10,
    gun: {
        nameGun: 'm416',
        cartridges: 30
    },
    ammunition: 0,
    fire: function () {
        if (this.gun.cartridges === 0) {
            console.log('Обойма пуста.Перезаредитесь.')
        } else {
        this.gun.cartridges -= 1
        console.log('бах-бах');
        }
    },

    recharge: function () {
        if (this.ammunition === 0) {
            console.log('Не осталось припасов.');
        } else {
        this.gun.cartridges = 30 && this.ammunition--;
        console.log('Перезарядка...');
        }
    },
    hurt: function () { 
        if (this.hp === 0) {
            console.log('Ты проиграл.');
        } else {
        this.hp -= 1;
        }
    },

}

