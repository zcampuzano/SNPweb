export class AccountsService {
  accounts = [
    {
      username: 'zcamp',
      password: 'zcamp',
      firstName: 'Zak',
      lastName: 'Campuzano',
      email: 'zcamp22@gmail.com'
    },
  ];

  addAcount(username: string, password: string, firstName: string, lastName: string, email: string) {
    this.accounts.push({
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      email: email
    });
  }

  updateAccount(username: string, password: string, firstName: string, lastName: string, email: string) {
    //this.accounts.[update.id].(id, username, etc...) = update.(id, username, etc...)
  }

}
