import { UserReward } from './../models/user-reward';
import { UserSpendingService } from './../services/user-spending.service';
import { Component, OnInit } from '@angular/core';
import { UserSpending } from '../models/user-spending';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.sass']
})
export class UploaderComponent implements OnInit {

  userSpendings: UserSpending[] = new Array<UserSpending>();
  userRewards: UserReward[] = new Array<UserReward>();

  constructor(private userSpendingService: UserSpendingService) {

  }

  ngOnInit() {
  }

  public openFile(event) {
    const input = event.target;
    const reader = new FileReader();
    reader.onload = () => {
      // this 'text' is the content of the file
      const text = reader.result;
      this.processCSV(text);
    };
    reader.readAsText(input.files[0]);
  }

  private calculateRewards() {
    this.userRewards.length = 0;
    this.userSpendings.forEach((spending) => {
      const userReward: UserReward = UserReward.getUserReward(spending);
      this.userRewards.push(userReward);
    });
  }

  private processCSV(csv) {
    console.log(csv);
    this.userSpendingService.getSpendingsFromCSV(csv).subscribe(data => {
      console.log(data);
      this.userSpendings = data;
      this.calculateRewards();
    }, error => {
      // display error
    });
  }
}
