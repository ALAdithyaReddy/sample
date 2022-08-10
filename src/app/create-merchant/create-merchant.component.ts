import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';

@Component({
  selector: 'app-create-merchant',
  templateUrl: './create-merchant.component.html',
  styleUrls: ['./create-merchant.component.css']
})
export class CreateMerchantComponent implements OnInit {

  sellers:any = {
    fullname: "",
    username: "",
    email: "",
    number: "",
    password: "",
    gender: "",
    nameOnCard: "",
    ccNum: "",
    expMonYear: "",
    cvv: "" 
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {
    alert("Form Submitted" + this.sellers);

    let data = {
      "fullname" : this.sellers.fullname,
      "username" : this.sellers.username,
      "email" : this.sellers.email,
      "number" : this.sellers.number,
      "password" : this.sellers.password,
      "gender" : this.sellers.gender,
      "nameOnCard" : this.sellers.nameOnCard,
      "ccNum" : this.sellers.ccNum,
      "expMonYear" : this.sellers.expMonYear,
      "cvv" : this.sellers.cvv
    };

    console.log(data);

    let url = "http://localhost:3000/details";
    axios.post(url, data).then((res:any) => {
      console.log(res);
    alert("Successfully Registered");
  });
  }
}