const num=[1,2,3,4,5,6,7,8,9,10]
 const neew=num.filter((num) =>  num>4)
 console.log(neew)
 // also can be printed like this 

 const newnum=num.filter( (num)=>{
    return num>4
 })
 console.log(newnum)



 num.forEach( ( num)=>{
    if(num>4){
        newnum.push(num)

    }
 })
 console.log (newnum)
 
 const book=[
    {
        title:"Book1", genre:'fiction', publish:1981, edition: 2004

    }, 
    {
        title:"Book2", genre:'non fiction', publish: 1992, edition: 2008

    },
    {
        title:"Book3", genre:'History', publish:1999, edition:2007
    },
    {
        title:"Book4", genre:'non fiction', publish: 1989, edition:2010

    },
    {
        title:"Book5", genre: 'Science', publish:2009, edition:2014

    },
    {
        title: "Book6", genre: 'Fiction' ,publish:1987, edition:1986
    },
    {
        title:"Book7", genre:'History', publish:1986, edition:1986

    }, 
    {
        title:"Book8", genre:'Science', publish:2011, edition:2016

    }, 
    {
        title:"Book9", genre:'non fiction', publish:1981, edition:1989

    }
 ]

 const userbooks= book.filter( (bk)=>bk.genre==='History')
 console.log (userbooks)