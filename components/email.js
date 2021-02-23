import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {

    const [success,setsuccess]=React.useState("")
const [error,setError]=React.useState("")
const [name,setname]=React.useState("")
const [email,setmail]=React.useState("")
const [message,setmessage]=React.useState("")


    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }


    function sendEmail(e) {
        e.preventDefault()

if(email!==""&&name!==""&&message!==""){
console.log(email)
let obj={
    email:email,name:name,message:message
}
let template_params= {
    'username': name,
   'email':email,
   'message':message,
   'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
}
    emailjs.send('gmail', 'template_RzYMPo6x', template_params, 'user_UE3ufa59I2hyVJTagm230')
    .then((result) => {
        console.log(result);
        setsuccess(true)
        setError("")
    }, (error) => {
        setError(error.text)
        console.log(error.text);
    });


}else{

setError("Tüm alanları doğru bir şekilde doldurunuz")

}



       
    }

    return (
        <div class="w-full max-w-md mt-4 md:mt-32">
            <h2 className="text-3xl text-center mb-8">İletişim</h2>
            <form onSubmit={sendEmail} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="İsim">
                        İsim
        </label>
                    <input value={name} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="your name"  onChange={(e)=>setname(e.target.value)}/>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                        Email
        </label>
                    <input value={email} class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email"  onChange={(e)=>setmail(e.target.value)} />
                   
                </div>
                <div class="mb-6">
                    <label  class="block text-gray-700 text-sm font-bold mb-2" for="message">
                    Mesajınız
        </label>
                    <textarea value={message} rows={3}  class="shadow appearance-none border multiline  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="message" type="message" placeholder="Bizimle neden iletişime geçtiğinizi ayrıntılı bir şekilde yazınız"  onChange={(e)=>setmessage(e.target.value)} />
                
                </div>
                <div class="flex items-center justify-between">
                    <button disabled={success} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Gönder
        </button>
                 
{error&&    <p class="text-red-500 text-xs italic">{error}</p>}
{success&&    <p class="text-green-500 text-1xl italic">Email yollandı</p>}

                </div>
            </form>
         
        </div>
    );
}
