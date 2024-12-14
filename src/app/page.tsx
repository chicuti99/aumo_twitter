"use client"

import Image from "next/image";
import { Recomendations } from "./components/recomendations";
import { FaAngleRight } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { FollowersList } from "./components/followersList";
import axios from 'axios'
import {User} from './interfaces/index'
import { LuRefreshCcw } from "react-icons/lu";

export default function Home() {
  const usuarioPadrao = {
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
    },
    nat:"BR"
  }
  const[followersList,setFollowersList] = useState(false);
  const[users,setUsers] = useState<User[]>([]);
  const[usersFollowed,setUsersFollowed] = useState<User[]>([])
  const[actualUser,setActualUser]= useState<User>(usuarioPadrao)
  const wasAlreadyRequested = useRef(false);
  const[isFollowed,setIsFollowed] = useState(false);

  useEffect(() => {
    setIsFollowed(usersFollowed.some((use) => use === actualUser))
  },[actualUser,usersFollowed]);

  function followUser(user:User) {
    const isfollowed = usersFollowed.find((actualUser:User) => actualUser === user); 
    if(!isfollowed){
        const updatedFollowedList = [...usersFollowed, user];
        setUsersFollowed(updatedFollowedList);
    }
  }

  function UnfollowUser(userToRemove: User) {
    const updatedList = usersFollowed.filter((user) => user.login.uuid !== userToRemove.login.uuid);
    setUsersFollowed(updatedList);
  }

  const searchNewUser = async() => {
    const response = await axios.get("https://randomuser.me/api/")
    setActualUser(response.data.results[0]);
  }

    const fetchData = async () => {
      try {
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
        localStorage.setItem('@Users',JSON.stringify(newUser));
        const storedListOfUsersFollowed = localStorage.getItem("@UsersFollowed");
        if(storedListOfUsersFollowed){
          setFollowersList(JSON.parse(storedListOfUsersFollowed))
        }

      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const refreshSuggestions = async () => {
      try{
        const response = await axios.get("https://randomuser.me/api/?results=5");
        setUsers(response.data.results);
        const localUsers = localStorage.getItem("@Users");
        if(localUsers){
          const parsedLocalUsers = JSON.parse(localUsers);
          response.data.results.map((result:User) => {
            parsedLocalUsers.push(result);
          })
          localStorage.setItem("@Users",JSON.stringify(parsedLocalUsers));
        }
      }
        catch(err)
        {
          console.log(err)
        }
    }

    useEffect(() => {
      fetchData();
    },[wasAlreadyRequested])

    useEffect(() => {
      localStorage.setItem("@Users",JSON.stringify(usersFollowed));
    },[usersFollowed]);

  return (
    <div className="w-full h-full z-0 relative bg-[#F6F6F6]">
      <div className="bg-purple-600 h-[30%] flex justify-between">
        <div className="flex justify-between w-full h-[20%] shadow-[0_-15px_25px_3px_rgba(0,0,0,1)]">
          <span className="px-24 py-4 text-white font-normal">users_like.me</span>
          {followersList === false ? (
            <span className="px-24 py-4 text-white font-bold cursor-pointer" onClick={()=> setFollowersList(true)}>following {usersFollowed.length} user</span>
          ) : (
            <>
            <FollowersList setFollowersList={setFollowersList} usersFollowed={usersFollowed} UnfollowUser={UnfollowUser} />
            </>
          )}

          
        </div>
      </div>

      <div className="w-full h-[70%] flex flex-col justify-center items-center -translate-y-[20%] ">
        <span className="text-white text-2xl py-5">Find new users like you</span>
        <div  style={{display:'flex',alignItems:'center',backgroundColor:'transparent',width:'50%',height:'100%',flexDirection:"column",gap:10}}>
          
        <div className="flex flex-col bg-white w-full items-center h-full">
          <div
            className="w-full h-[100px]"
            style={{
              backgroundImage: `url('${actualUser.picture.thumbnail}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'top',
              width: '100%', 
            }}
          >
            
          </div>
            <div className="flex flex-col items-center justify-center w-full h-1/2 translate-x-0 -translate-y-[40%]">
              <Image
                src={actualUser.picture.thumbnail}
                alt="photo"
                width={0}
                height={0}
                className="w-[150px] h-[150px] rounded-full py-[30px]"
              />
              
              <div style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center" }}>
                <div style={{ 
                    width: "100%", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    position: "relative", 
                    padding: "0 10px" 
                }}>
                  {/* <button 
                    className="bg-blue-500 text-white px-8 py-2 font-bold rounded" 
                    onClick={() => followUser(actualUser)}
                  >
                    Follow
                  </button> */}

                {!isFollowed ? (
                  <>
                      <button className="bg-blue-500 text-white px-8 py-2 font-bold rounded"
                  onClick={() => followUser(actualUser)}>follow</button>
                  </>
                ) : (
                  <>
                    <button className="bg-red-500 text-white px-8 py-2 font-bold rounded"
                      onClick={() => UnfollowUser(actualUser)}>unfollow</button>
                  </>
                )}
                  <div style={{ 
                      position: "absolute", 
                      right: 10, 
                      top: "50%", 
                      transform: "translateY(-50%)" 
                  }}>
                    <FaAngleRight  size={30} cursor="pointer" onClick={()=> searchNewUser()}/>
                  </div>
                </div>
                <span className="text-black text-lg text-center">{actualUser.name.first + " " + actualUser.name.last}</span>
                <span className="text-black text-sm text-center">{actualUser.location.city + "," + actualUser.location.country}</span>
              </div>
            </div>
        </div>



          <div style={{display:'flex',gap:10,width:'100%',height:'100%',justifyContent:'space-between'}}>
            <div style={{backgroundColor:'white',width:'50%',display:'flex',flexDirection:'column',padding:15,gap:15,height:190}}>
              <span style={{fontSize:16,fontWeight:900}}>Personal info</span>
              <span style={{fontSize:12,color:"gray"}}>born at: {actualUser.nat}</span>
              <span style={{fontSize:12,color:"gray"}}>age: {actualUser.registered.age} year old</span>

              <span style={{paddingTop:20,borderTop:'1px solid black',color:'blue',cursor:'pointer'}}>see more</span>

            </div>
              <div style={{backgroundColor:'white',width:'50%',display:'flex',flexDirection:'column',padding:15,gap:15,height:190}}>
                <span style={{fontSize:16,fontWeight:900}}>Contact info</span>
                <span style={{fontSize:12,color:"gray"}}>Email:{actualUser.email}</span>
                <span style={{fontSize:12,color:"gray"}}>phone:{actualUser.phone}</span>

                <span style={{paddingTop:20,borderTop:'1px solid black',color:'blue',cursor:'pointer'}} >see more</span>
              </div>

          </div>

        </div>
        <div style={{display:'flex',width:'50%'}}>
          <span style={{width:'100%',display:'flex',fontSize:'18px',fontWeight:800}}>Suggestion 4you</span>
          <span style={{display:'flex',fontSize:'18px',fontWeight:800,alignItems:"center",justifyContent:'flex-end',cursor:'pointer'}}
            onClick={()=> refreshSuggestions()}
          >refresh   <LuRefreshCcw/></span>
        </div>
        
        <div style={{width:'50%',display:'flex',gap:15}}>
        {users.map((user:User) => (
          <Recomendations user={user} usersFollowed={usersFollowed}  followUser={followUser}  key={user.login.uuid} UnfollowUser={UnfollowUser}/>
        ))}
        </div>
      </div>
    </div>
  );
}
