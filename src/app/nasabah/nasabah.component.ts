import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import{ FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Nasabah } from './Nasabah';
import { httpFactory } from '@angular/http/src/http_module';



@Component({
  selector: 'app-nasabah',
  templateUrl: './nasabah.component.html',
  styleUrls: ['./nasabah.component.css']
})
export class NasabahComponent implements OnInit {
  nasabah = new Nasabah;
  listnasabah: any[];
  private url ="http://localhost:8080/nasabah";
  nasabahForm:FormGroup;
  formSubmitted=false;


  constructor(private http: Http, private formBuilder:FormBuilder) { 
    http.get(this.url)
    .subscribe(response =>{
      console.log(response.json());
      
       this.listnasabah = response.json();      
    });
  }

  ngOnInit() {
    this.createNasabahForm();
  }

  createNasabahForm(){
    this.nasabahForm = this.formBuilder.group({
      nama:['',Validators.required],
      noRek:['',Validators.required],
      address:['',Validators.required]
    })
  }


  onSubmit = function (nasabah) {
    console.log(nasabah);

    var body = "Nama=" + nasabah.nama + "No Rekening=" + nasabah.noRek + "address=" + nasabah.address;
    this.http.post(this.url, body).subscribe((data) => {});

  }

  // onFormSubmit(){
  //   let data = this.nasabahForm.value;
  //   console.log('-----------------User in JSON Format-----------------');
  //   // console.log(data);
  //   // let nasabah: Nasabah = this.nasabahForm.value;           
  //   this.http.post(this.url,JSON.stringify(data)).subscribe(response =>{
  //     console.log(response);
  //   })
  // }


 
}
