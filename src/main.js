import '../style/index.scss'
let a = [2,3,45,6,6,7,7,2345,2345,54,5,8,9,10,4,5,6,7,8,45,43543];
function sort() {
  console.time('sort')
  let len = a.length-1;
  for(let i=0;i<len;i++) {
    for(let j=0;j<len-i;j++) {
      let b = -1;
      if(a[j]>=a[j+1]) {
        b = a[j];
        a[j] = a[j+1];
        a[j+1] = b; 
      }
    }
  }
  console.log(a)
  console.timeEnd('sort')
}
window.onload = sort();
