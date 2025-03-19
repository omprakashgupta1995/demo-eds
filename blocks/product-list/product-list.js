export default function decaaorate(block) {
  // console.log(block);
  // block.classList.add('my-class');
  Array.from(block.children).forEach((row, index) => {
    row.classList.add(`row-${index + 1}`);
    Array.from(row.children).forEach((col, colindex) => {
      col.classList.add(`row-${index + 1}-col-${colindex + 1}`);
    });
  });
}
