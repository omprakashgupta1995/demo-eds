export default function decorater(teaser) {
  const containers = teaser.children[0];

  // console.log(containers)
  containers.classList.add("flex-container");

  const containerAll = Array.from(containers.children);
  containerAll.forEach((divs, divsIndex) => {
    divs.classList.add(`box-${divsIndex+1}`);
    
    console.log(divs);
  });
}
