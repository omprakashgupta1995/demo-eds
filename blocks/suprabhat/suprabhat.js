export default function decorate(block) {
  const blockElement = block;
  console.log(blockElement.childNodes);
  // blockElement.childNodes.forEach((child,parentInd) => {
  //     if (child.nodeName === 'DIV') {
  //         child.classList.add('row'+parentInd);
  //         child.querySelectorAll('div').forEach((innerDiv,childInd) => {
  //             innerDiv.classList.add(`row-${parentInd}-col-${childInd}`);
  //         });
  //     };

  // });
}
