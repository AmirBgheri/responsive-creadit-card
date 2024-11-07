const num = document.querySelectorAll('.inp input')
const inp1 = document.querySelector('.inp1')
const inp2 = document.querySelector('.inp2')
const inp3 = document.querySelector('.inp3')
const inp4 = document.querySelector('.inp4')
const holder=document.querySelector('.holderinp input')
const month=document.querySelector('.month')
const year=document.querySelector('.year')
const ccvinp = document.querySelector('.ccv input')
const num1 =document.querySelector('.num1')
const num2 =document.querySelector('.num2')
const num3 =document.querySelector('.num3')
const num4 =document.querySelector('.num4')
const nme = document.querySelector('.holder')
const expmonth=document.querySelector('.expmonth')
const expyear=document.querySelector('.expyear')
const ccv=document.querySelector('#ccv h2')


const card =document.querySelector('.card')
const front =document.querySelector('.front')
console.log(ccv);







num.forEach((item,i) => {
    // console.log(i);
    item.addEventListener('input',(e)=>{
        if(item.value.length>=4){
            if(i!=3){
                item.nextElementSibling.focus()
            }else{
                holder.focus()
            }
        }
        ///////
        if(item.value.search(/[^0-9]/)>=0){
            item.value=item.value.slice(0 , item.value.length-1)   
        }



        if(item.value.length!=3){
            inp1.addEventListener('focus',(e)=>{
                num1.innerHTML=''
            })
            num1.innerHTML=inp1.value
        }
         if(item.value.length!=7){
            num2.innerHTML=inp2.value
        }
           if(item.value.length!=12){
            num3.innerHTML=inp3.value
        }
          if(item.value.length!=15){
            num4.innerHTML=inp4.value
        }
    })
    
});
    
    holder.addEventListener('input',(e)=>{
        if(holder.value.search(/[^a-z]/)>=0){
            holder.value=holder.value.slice(0 ,holder.value.length-1)
        }
    holder.addEventListener('focus',(e)=>{
        holder.innerHTML=''
    })
    nme.innerHTML=holder.value
    })

  
    month.addEventListener('click',(e)=>{
        expmonth.innerHTML=month.value+"/"
    });
    year.addEventListener('click',(e)=>{
        expyear.innerHTML=year.value
    });
    
    ccvinp.addEventListener('input',(e)=>{
       ccv.innerHTML=ccvinp.value
        if(e.target.value.search(/[^0-9]/)>=0){
            e.target.value=e.target.value.slice(0 , e.target.value.length-1)
        }

       
    })


    ////////local storage////
    let a = 0
    let name= localStorage.getItem('card name')
    let txt = localStorage.getItem('card number')

    if(txt != null){
        num.forEach((val)=>{
            val.value = txt.slice(a , a+=4)
        })
    }
   if(name != null){
        holder.value= name
   }

    const mySave = () =>{
        let flag = 0
        txt = ''
        name=''
        num.forEach((val)=>{
            val.value.length!=4&&flag++
            txt += val.value
        })
        console.log(txt);
        name=holder.value
        if(flag == 0){
            localStorage.setItem('card number', txt)
            localStorage.setItem('card name' , name )
        }
        
    }

