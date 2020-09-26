import React from 'react'
import {atom} from 'recoil'

export const ShowModal = atom({
  key : "ShowModal",
  default :{
    firstState:"isVisibleModal",
    toggleModal:false
  }
})