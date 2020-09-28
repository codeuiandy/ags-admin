import React from 'react'
import {atom} from 'recoil'

export const ShowModal = atom({
  key : "ShowModal",
  default :{
    firstState:"isVisibleModal",
    toggleModal:false
  }
})


export const delet_edit_Handle = atom({
  key : "delet_edit_Handle",
  default :{
    delete_id:"null",
    delete_url:"null",
    reload_state:false,
   edit_Data:null,
   edit_content:false,
   edit_id:""
  }
})