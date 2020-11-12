import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payments-page',
  templateUrl: './payments-page.component.html',
  styleUrls: ['./payments-page.component.css']
})
export class PaymentsPageComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

// post request
  paymentPost(paymentData: { creditCardNumber: string; cardholder: string;
     expirationDate: Date; securityCode: string; amount: number}) {
       this.http.post('https://payment-40f7e.firebaseio.com/payments.json', paymentData)
       .subscribe(responseData => {
        console.log(responseData);
       });
     }

}
