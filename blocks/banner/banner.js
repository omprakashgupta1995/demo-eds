export default function decorate(banner){
    const rows = banner.children[2];
    const rowChild = Array.from(rows.children)
    rowChild.forEach((btns,btnsindex)=>{
        btns.classList.add(`btn-${btnsindex+1}`)
        console.log(btns)
    })
    console.log(rows);
    // rows.forEach((row,rowindex)=>{
    //     row.classList.add(`row-${rowindex}`);
    //     const cols = Array.from(row.children);

    //     cols.forEach((col,colIndex)=>{
    //         col.classList.add(`row-${rowindex}-cols-${colIndex}`);
    //     })
        
    // })
}