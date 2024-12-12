import Image from "next/image";

export default function Home() {

  const style = {
    backgroundImage: "url('/lego.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'blur(10px)'}
  return (
    <div className="w-full h-full z-0 relative bg-[#F6F6F6]">
      <div className="bg-purple-600 h-[30%] flex justify-between">
        <div className="flex justify-between w-full h-[20%] shadow-[0_-15px_25px_3px_rgba(0,0,0,1)]">
          <span className="px-24 py-4 text-white font-normal">users_like.me</span>
          <span className="px-24 py-4 text-white font-bold cursor-pointer">following 1 user</span>
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
          ></div>

          <div className="flex flex-col items-center justify-center w-full h-1/2 translate-x-0 -translate-y-[40%]">
            <Image
              src="/lego.jpg"
              alt="photo"
              width={0}
              height={0}
              className="w-[150px] h-[150px] rounded-full py-[30px]"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded">follow me</button>
            <span className="text-black text-lg">Arthur Mendes</span>
            <span className="text-black text-sm">Vila Velha</span>
          </div>

        </div>



          <div style={{display:'flex',gap:10,width:'100%',height:'100%',justifyContent:'space-between'}}>
            <div style={{backgroundColor:'white',width:'50%',display:'flex',flexDirection:'column',padding:15,gap:15,height:190}}>
              <span style={{fontSize:16,fontWeight:900}}>Personal info</span>
              <span style={{fontSize:12,color:"gray"}}>born at:US</span>
              <span style={{fontSize:12,color:"gray"}}>age:24 year old</span>

              <span style={{paddingTop:20,borderTop:'1px solid black'}}>see more</span>

            </div>
              <div style={{backgroundColor:'white',width:'50%',display:'flex',flexDirection:'column',padding:15,gap:15,height:190}}>
                <span style={{fontSize:16,fontWeight:900}}>Contact info</span>
                <span style={{fontSize:12,color:"gray"}}>Email:arthurchicuti</span>
                <span style={{fontSize:12,color:"gray"}}>phone:27999562635</span>

                <span style={{paddingTop:20,borderTop:'1px solid black'}} >see more</span>
              </div>

          </div>

        </div>
        <span style={{width:'50%',display:'flex',fontSize:'18px',fontWeight:800}}>Suggestion 4you</span>
        
        <div className="w-1/2 flex gap-15">
        
                <div
                  style={{
                    width: 200,
                    height: 200,
                    backgroundColor: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 10
                  }}
                >
          <Image
            src="/lego.jpg"
            width={0}
            height={0}
            alt="photo"
            className="w-[30px] h-[30px] rounded-full py-[10px]"
          />
          <span>arthurr</span>
          <span className="text-gray-500 text-sm">@arthurchicuti</span>
          <span className="text-center text-xs text-gray-700 break-words max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ut.
          </span>
          <button className="bg-blue-500 text-white px-[5px] py-[5px] text-xs rounded">Follow</button>
        </div>


        </div>

      </div>
    </div>
  );
}
