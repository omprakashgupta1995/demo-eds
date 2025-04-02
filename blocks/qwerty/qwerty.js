export default function decorate(block){
    Array.from(block.children).forEach((row, index) => {
        row.classList.add(`row`);
        row.classList.add(`row-${index+1}`);
        Array.from(row.children).forEach((col,colIn)=>{
            col.classList.add(`row-${index+1}-col-${colIn+1}`);
        })
    })
}