var sum = 0;

fetch('data.json')
    .then(response => {
        if(!response.ok){
            throw new Error("Błąd pobierania danych");
        }

        return response.json();
    })

    .then(data => {
        for(let i=0; i<4; i++){
            document.getElementById(data[i]['category']+'Number').innerHTML = data[i]['score'];
            document.getElementById(data[i]['category']+'IMG').src = data[i]['icon'];
            sum=sum+data[i]['score']; 
        }

        document.getElementById("PercentCircle").innerHTML = Math.round(sum/4);
    })  

    .catch(error => {
        console.error('Wystąpił błąd:', error);
    });


