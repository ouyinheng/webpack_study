import '../style/main.css'
function alerts() {
  let a = [1,2,3,4,5];
  a.forEach((item, index) => {
    console.log(item)
  })
}
window.onload = alerts();
