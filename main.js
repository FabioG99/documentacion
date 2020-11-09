/** esta es una descripcion de esta funcion foo */
function foo (){}
/**
 *
 *representa un libro
 * @param {string} titulo - el titulo del libro
 * @param {string} autor - el autor del libro
 */
function libro (titulo, autor){}
/**
 *soluciona el puzz de torres de hanoi, para cualquier numero de discos.
 *
 * @param {string} discos - cuantos discos mover
 * @param {string} de - el numero pole de inicio
 * @param {string} a - el nombre de destino
 * @param {string} extra - el otro nombre del pole
 */
const hanoi = (discos, de, a, extra) => {
    if (discos === 1){
        console.log(`Mover disco 1 de post ${a} a post ${a}`);
    }else {
        hanoi (discos - 1, de, extra, a);
        console.log(`Mover disco ${discos} de post ${de} a post ${a}`);
        hanoi(discos - 1, extra, a, de);
    }
};