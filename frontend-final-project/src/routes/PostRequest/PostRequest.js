export default function PostRequest(){

    async function handleClick(){

        let response = await fetch("https://fullstack-family.herokuapp.com/child", {
      method: "POST",
      body: JSON.stringify({
        studentid: "217",
        name: "TESTA",
        scoreone: 0,
        timecompleted: "00:00:00",
        datecompleted: "2011-05-03T00:00:00.000Z"
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    let data = await response.json();
    console.log(data);
    }


    return <button onClick = {handleClick}> Click me!</button>
}