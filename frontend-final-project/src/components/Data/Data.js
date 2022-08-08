import { useState } from "react";


export default async function getDataChild() {
    let response = await fetch("https://fullstack-family.herokuapp.com/child");
    let data = await response.json();
  }
  
  
  getDataChild();


  async function dataPost() {
  
    let response = await fetch("https://jungle-sum.netlify.app/login", {
      method: "POST",
      body: JSON.stringify({
        datecompleted: "Pinda test",
        name: "Is this posting!",
        scoreone: 1,
        student_id: 1,
        timecompleted: "00:00:00"
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