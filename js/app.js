
(function(){
    let imageContainer = document.getElementById('container');
    let buttons = document.getElementById('buttons');
    let images = [
        "1",
        "2",
        "3",
        "4"
    ]
    let initialValue = Math.floor(Math.random()*images.length);
    let currentValue = initialValue;

    imageContainer.style.backgroundImage = `url("./img/${initialValue}.jpg")`;

    buttons.addEventListener('click', (e)=>{
        e.preventDefault();
        changePicture(e.target);
    })

    function changePicture(target){
        if(target === document.getElementById('nextPic')){
            currentValue !== images.length ? currentValue++ : currentValue=1;
            console.log(currentValue)
            imageContainer.style.backgroundImage = `url("./img/${currentValue}.jpg")`;
        }
        else if(target === document.getElementById('previousPic')){
            currentValue !== 1 ? currentValue-- : currentValue=images.length;
            console.log(currentValue);
            imageContainer.style.backgroundImage = `url("./img/${currentValue}.jpg")`;
        }
    }

})();