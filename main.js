const client_id = 'YOUR ID HERE';
const client_secret = 'YOU SECRET HERE';



const btn = document.querySelector('button');

btn.addEventListener('click', () => {

    login();
});


    


// https://id.twitch.tv/oauth2/token?client_id=${client_id}&client_secret=${client_secret}&grant_type=client_credentials

 function login()
{
     fetch('https://id.twitch.tv/oauth2/token?client_id=YOURIDHERE&client_secret=SECRETHERE&grant_type=client_credentials',
    {

        method: 'POST',
        
           
     

}
    

    ).then((response) =>{return response.json()})
    .then((data) =>{console.log(data)})
    .catch((err) =>{console.log("Error " , err)})


};