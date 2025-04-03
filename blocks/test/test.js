export default function decorator(test){
    const rows = Array.from(test.children);
    
    rows.forEach((row,rowIndex) => {
        row.classList.add(`row-${rowIndex}`);

        const cols = Array.from(row.children);
        cols.forEach((col, colIndex)=>{
            col.classList.add(`row-${rowIndex}-col-${colIndex}`)
        })
    });


}