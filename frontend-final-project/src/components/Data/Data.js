import { useState } from "react";


export default async function getDataChild() {
    let response = await fetch("https://fullstack-family.herokuapp.com/child");
    let data = await response.json();
  }
  
  
  getDataChild();


  async function dataPost() {
  
    let response = await fetch("https://fullstack-family.herokuapp.com/child", {
      method: "POST",
      body: JSON.stringify({
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
  
  dataPost();

  async function patchData () {
  let response = await fetch('https://jungle-sum.netlify.app/login/login/1', {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'Put',//title on back end!
      body: 'Does this do a put request',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })

    let data = await response.json();
    console.log(data);

  }

  patchData ();