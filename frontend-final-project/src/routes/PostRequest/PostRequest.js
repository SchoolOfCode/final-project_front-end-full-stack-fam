export default function PostRequest(){

    async function handleClick(){

        let response = await fetch("https://fullstack-fam.herokuapp.com/child", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(  {
            name: "lilly",
            scoreone: 0,
            timecompleted: '00:00:00',
            datecompleted: '2011-05-03 '
        },),
    });
    const data = await response.json();
    const info = data.payload[0].student_id;
    console.log("sucess!")
    }


    return <button onClick = {handleClick}> Click me!</button>
};