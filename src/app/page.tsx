"use client"

import Image from "next/image";
import { Recomendations } from "./components/recomendations";

import { useEffect, useState } from "react";
import { FollowersList } from "./components/followersList";
import axios from 'axios'
import {User} from './interfaces/index'
export default function Home() {

  const[followersList,setFollowersList] = useState(false);
  const[users,setUsers] = useState<User[]>([]);
  const[actualUser,setActualUser]= useState<User>({
    name : {
      first: "arthur",
      last:"Mendes",
      title:"senhor"
    },
    cell: "27 999562636",
    email: "arthurchicuti0@gmail.com",
    location:{
      city:"Vila velha",
      country:"Brasil",
      state:"ES"
    },
    login: {
      md5:"",
      password:"",
      salt:"",
      sha1:"",
      sha256:"",
      username:"arthurchicuti",
      uuid:"01"
    },
    phone:"",
    picture : {
      large:"/lego.jpg",
      medium:"/lego.jpg",
      thumbnail:"/lego.jpg"
    },
    registered: {
      age:25,
      date: ""
    }
  })
  const style = {
    backgroundImage: "url('/lego.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    //filter: 'blur(10px)'
  }

    const fetchData = async () => {
      try {
        console.clear()
        const response = await axios.get("https://randomuser.me/api/?results=6");
        const newUser:User[] = []
        
        response.data.results.map((user:User,index:number) => {
          console.log(index)
          if(index === 0){
            setActualUser(user);
            return;
          }
          newUser.push(user)
        })
        setUsers(newUser);
        
        console.log(newUser)

      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    useEffect(() => {
      fetchData();
      localStorage.setItem('@Users',JSON.stringify(users));
    },[])

  return (
    <div className="w-full h-full z-0 relative bg-[#F6F6F6]">
      <div className="bg-purple-600 h-[30%] flex justify-between">
        <div className="flex justify-between w-full h-[20%] shadow-[0_-15px_25px_3px_rgba(0,0,0,1)]">
          <span className="px-24 py-4 text-white font-normal">users_like.me</span>
          {followersList === false ? (
            <span className="px-24 py-4 text-white font-bold cursor-pointer" onClick={()=> setFollowersList(true)}>following 1 user</span>
          ) : (
            <FollowersList setFollowersList={setFollowersList}/>
          )}
          {/* <span className="px-24 py-4 text-white font-bold cursor-pointer" onClick={()=> setFollowersList(true)}>following 1 user</span>
          {followersList && <FollowersList/>} */}
          
        </div>
      </div>

      <div className="w-full h-[70%] flex flex-col justify-center items-center -translate-y-[20%] ">
        <span className="text-white text-2xl py-5">Find new users like you</span>
        <div  style={{display:'flex',alignItems:'center',backgroundColor:'transparent',width:'50%',height:'100%',flexDirection:"column",gap:10}}>
          
        <div className="flex flex-col bg-white w-full items-center h-full">
          <div
            className="w-full h-[100px]"
            style={{
              backgroundImage: "url('/lego.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'top',
              filter: 'blur(1px)',
            }}
          >
            <Image src={"/lego.jpg"} width={50} height={50} alt="" style={style}/>
          </div>

          <div className="flex flex-col items-center justify-center w-full h-1/2 translate-x-0 -translate-y-[40%]">
            <Image
              //src="/lego.jpg"
              src={actualUser.picture.thumbnail}
              alt="photo"
              width={0}
              height={0}
              className="w-[150px] h-[150px] rounded-full py-[30px]"
            />
            <button className="bg-blue-500 text-white px-8 py-2 font-bold rounded">Follow</button>
            <span className="text-black text-lg">{actualUser.name.first + " " + actualUser.name.last}</span>
            <span className="text-black text-sm">{actualUser.location.city +"," + actualUser.location.country}</span>
          </div>

        </div>



          <div style={{display:'flex',gap:10,width:'100%',height:'100%',justifyContent:'space-between'}}>
            <div style={{backgroundColor:'white',width:'50%',display:'flex',flexDirection:'column',padding:15,gap:15,height:190}}>
              <span style={{fontSize:16,fontWeight:900}}>Personal info</span>
              <span style={{fontSize:12,color:"gray"}}>born at:BR</span>
              <span style={{fontSize:12,color:"gray"}}>age:25 year old</span>

              <span style={{paddingTop:20,borderTop:'1px solid black',color:'blue',cursor:'pointer'}}>see more</span>

            </div>
              <div style={{backgroundColor:'white',width:'50%',display:'flex',flexDirection:'column',padding:15,gap:15,height:190}}>
                <span style={{fontSize:16,fontWeight:900}}>Contact info</span>
                <span style={{fontSize:12,color:"gray"}}>Email:arthurchicuti0@gmail.com</span>
                <span style={{fontSize:12,color:"gray"}}>phone:(27) 99956-2635</span>

                <span style={{paddingTop:20,borderTop:'1px solid black',color:'blue',cursor:'pointer'}} >see more</span>
              </div>

          </div>

        </div>
        <span style={{width:'50%',display:'flex',fontSize:'18px',fontWeight:800}}>Suggestion 4you</span>
        
        <div style={{width:'50%',display:'flex',gap:15}}>
        {users.map((user:User) => (
          <Recomendations login={user.login} picture={user.picture} name={user.name}/>
        ))}
        </div>
        <button onClick={()=> fetchData()}>conectar</button>
      </div>
    </div>
  );
}
