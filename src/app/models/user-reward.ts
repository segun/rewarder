import { UserSpending } from './user-spending';

export class UserReward {
  userId: number;
  firstName: string;
  amount: number;
  validity: number;

  public static getUserReward(userSpending: UserSpending): UserReward {
    const userReward: UserReward = {
      userId: userSpending.id,
      firstName: userSpending.firstName,
      amount: 0,
      validity: 0
    };

    if (userSpending.spent >= 1000 && userSpending.spent < 5000) {
      userReward.amount = 100;
      userReward.validity = 1;
    } else if (userSpending.spent >= 5000 && userSpending.spent < 10000) {
      userReward.amount = 500;
      userReward.validity = 5;
    } else if (userSpending.spent >= 10000) {
      userReward.amount = 1000;
      userReward.validity = 10;
    }

    return userReward;
  }
}
