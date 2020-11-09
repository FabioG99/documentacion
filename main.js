function foo (){}

function libro (titulo, autor){}

const hanoi = (discos, de, a, extra) => {
    if (discos === 1){
        console.log(`Mover disco 1 de post ${a} a post ${a}`);
    }else {
        hanoi (discos - 1, de, extra, a);
        console.log(`Mover disco ${discos} de post ${de} a post ${a}`);
        hanoi(discos - 1, extra, a, de);
    }
};