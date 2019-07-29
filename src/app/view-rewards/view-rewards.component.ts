import { Component, OnInit, Input } from '@angular/core';
import { UserSpending } from '../models/user-spending';
import { UserReward } from '../models/user-reward';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-view-rewards',
  templateUrl: './view-rewards.component.html',
  styleUrls: ['./view-rewards.component.css']
})
export class ViewRewardsComponent implements OnInit {

  @Input() userSpendings: UserSpending[] = new Array<UserSpending>();
  @Input() userRewards: UserReward[] = new Array<UserReward>();

  constructor() {
  }

  downloadVoucher(userReward: UserReward) {
    // tslint:disable-next-line: max-line-length
    const imgData = 'data:image/png;base64,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';
    const doc = new jsPDF();

    doc.addImage(imgData, 'JPEG', 35, 25, 50, 50);
    const x = 50;
    const y = 80;
    doc.setFontSize(20);
    doc.text(35, y, 'Hello ' + userReward.firstName + ', Here\'s your voucher');
    doc.text(35, y + 15, 'Voucher Value: ' + userReward.amount);
    doc.text(35, y + 30, 'Voucher Validity: ' + userReward.validity + ' days');
    doc.save('a4.pdf');
  }

  ngOnInit() {
  }

}
