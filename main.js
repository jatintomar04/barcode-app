let form = document.querySelector('form');
let img = document.querySelector('img');
let input = document.querySelector('input');



const fechData = async (e) => {
    e.preventDefault()
  const res = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${input.value}`)
 img.src = res.url;
form.reset();
}
form.addEventListener( "submit" , fechData)