import React, {useState}  from 'react'
import LocalStorage from 'local-storage'

export default function Login(){
    const [dataLogin, setdataLogin] = useState({
        email:"",
        password:""
    })

    function HandleClick(){
        let Kunci = LocalStorage.get("Kunci")
        
        //Kalo datanya ada maka kunci akan true
        if(Kunci){
            Kunci=JSON.parse(Kunci) 
            // Kunci.map((key,idx)=>{
            //     if(key.email === dataLogin.email && key.password === dataLogin.password) alert("dah ok")
                
            // })

            //Looping dah tuh satu" kalo datanya match baru do something apa gitu
            for(let i=0;i<Kunci.length;i++){
                if(Kunci[i].email === dataLogin.email && Kunci[i].password === dataLogin.password) alert("ok")
            }
        }

        else{
            //Kalo datanya gk ada buat aksinya disini
            //disini akan jalan kalo ternyata key yang dimaksud tidak tersedia
            //beda ya kalo keynya gk ada
        }
    }
    return(
        <>
             <form>
                <h1>Login</h1>
                <input
                    type="text"
                    placeholder="email"
                    onChange={(e)=>{
                        setdataLogin({
                            ...dataLogin, email:e.target.value
                        })
                      
                    }
                
                    }
                />
                <input
                    type="text"
                    placeholder="password"
                    onChange={(e)=>{
                        setdataLogin({
                            ...dataLogin, password:e.target.value
                        })
                       
                    }
                
                    }
                />
                <button
                    onClick={HandleClick}
                    type="button"
                >
                    Login
                </button>


            </form>
        </>
    )
}