

function luckybirthday(){
    birthdate = document.getElementById('dob').value
    dateDigits = birthdate.replaceAll('-','')
    console.log(dateDigits);
    dateDigits = [...dateDigits]
    sum = 0
    dateDigits.map(x => console.log(parseInt(x)))
    dateDigits.map(x => {sum = sum + parseInt(x)})
    console.log(sum)

    luckyNumber = document.getElementById('lnum').value
    output = document.getElementById('result')

    if(sum % luckyNumber == 0){
        output.innerText = 'Your birthday is lucky';
    }
    else{
        output.innerText = 'Not so lucky'
    }

}

tester = document.getElementById('show-btn');
tester.addEventListener('click', luckybirthday)