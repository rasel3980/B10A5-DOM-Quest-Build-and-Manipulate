// Button Color
const colorDonation =document.getElementById('donation-btn-color');
        colorDonation.addEventListener('click', function(){
            colorDonation.style.backgroundColor = '#B4F461';
            
        })
        const colorHistory =document.getElementById('history-btn-color');
        colorHistory.addEventListener('click', function(e){
            e.preventDefault();
            this.classList.add('#B4F461');
            // colorHistory.style.backgroundColor = '#B4F461';
            window.location.href = 'history.html'
        })