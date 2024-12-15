import { Info } from "@/app/interfaces"

export const Infos = ({actualUser,setShowInfos,showInfos}:Info) => {
    console.clear()
    console.log(actualUser);
    return(
        <>
            <div style={{display:'flex',gap:10,width:'100%',height:'100%',justifyContent:'space-between'}}>
            <div style={{backgroundColor:'white',width:'50%',display:'flex',flexDirection:'column',padding:15,gap:15,height:"fit-content"}}>
              <span style={{fontSize:16,fontWeight:900}}>Personal info</span>
              <span style={{fontSize:12,color:"gray"}}>born at: {actualUser.nat}</span>
              <span style={{fontSize:12,color:"gray"}}>age: {actualUser.registered.age} year old</span>

              {showInfos.personalInfo && <>
                <span style={{fontSize:12,color:"gray"}}>Use since:{actualUser.registered.date}</span>
                <span style={{fontSize:12,color:"gray"}}>title:{actualUser.name.title}</span>
              </>}

              <span style={{paddingTop:20,borderTop:'1px solid black',color:'blue',cursor:'pointer'}} 
                onClick={()=> setShowInfos((prev) => ({
                  ...prev,
                  personalInfo :!showInfos.personalInfo
                }))}
              >{showInfos.personalInfo ? "see less"  : "see more"}</span>

            </div>
              <div style={{backgroundColor:'white',width:'50%',display:'flex',flexDirection:'column',padding:15,gap:15,height:"fit-content"}}>
                <span style={{fontSize:16,fontWeight:900}}>Contact info</span>
                <span style={{fontSize:12,color:"gray"}}>Email:{actualUser.email}</span>
                <span style={{fontSize:12,color:"gray"}}>phone:{actualUser.phone}</span>

                {showInfos.contactInfo && <>
                    <span style={{fontSize:12,color:"gray"}}>Cel number:{actualUser.cell}</span>
                    <span style={{fontSize:12,color:"gray"}}>username:@{actualUser.login.username}</span>
                </>}

                <span style={{paddingTop:20,borderTop:'1px solid black',color:'blue',cursor:'pointer'}}
                  onClick={()=> setShowInfos((prev) => ({
                    ...prev,
                    contactInfo :!showInfos.contactInfo
                  }))}
                >{showInfos.contactInfo ? "see less"  : "see more"}</span>
              </div>

          </div>
        </>
    )
}