import React, { useState, useEffect } from 'react'
import LocalStorage from 'local-storage'

export default function Register(){
    const [dataRegister, setdataRegister] = useState({
        email:"",
        password:""
    })

    function HandleClick(){
                //mendapatkan isi  dari local storage 
                //baik ada maupun tidak ada kuncinya
                let Kunci = LocalStorage.get("Kunci")

                //kalo kuncinya ada maka akan return true
                if(Kunci){
                    //lalu isi dari kunci diubah dari string ke json
                    Kunci = JSON.parse(Kunci)

                    //Lalu isi dari kunci ditambahkan
                    Kunci.push(dataRegister)

                    //Isi dari Local storage kunci diupdate
                    LocalStorage("Kunci",JSON.stringify(Kunci))
                }

                //Kalo ternyata keynya belum ada atau kosong masuk ke else
                else{
                    //inisialisalsi array kosong biar bisa pakai push
                    let startArray = []
                    
                    //push isi register ke array yang baru
                    startArray.push(dataRegister)

                    //jadikan array menjadi local storage
                    LocalStorage("Kunci", JSON.stringify(startArray))
                }

    }

    return(
        <>
            <form>
                <h1>Register</h1>
                <input
                    type="text"
                    placeholder="email"
                    onChange={(e)=>{
                        setdataRegister({
                            ...dataRegister, email:e.target.value
                        })
                      
                    }
                
                    }
                />
                <input
                    type="text"
                    placeholder="password"
                    onChange={(e)=>{
                        setdataRegister({
                            ...dataRegister, password:e.target.value
                        })
                       
                    }
                
                    }
                />
                <button
                    onClick={HandleClick}
                    type="button"
                >
                    Register
                </button>


            </form>
        </>
    )
}