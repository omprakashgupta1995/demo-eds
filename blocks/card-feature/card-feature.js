export default function decorate(block){
    Array.from(block.children).forEach((row, index) => {
        row.classList.add(`Card`);
    })
}