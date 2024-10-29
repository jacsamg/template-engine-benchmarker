import { SonnetComponent, $component } from '@sonnetjs/core';

interface User {
  id: string;
  name: string;
  email: string;
}

class UserRow extends SonnetComponent {
  private props: { user: User; } | undefined;

  constructor(props?: { user: User; }) {
    super();
    this.props = props;
  }

  get() {
    if (!this.props) return '';

    return `
      <tr>
        <td>${this.props.user.id}</td>
        <td>${this.props.user.name}</td>
        <td>${this.props.user.email}</td>
      </tr>
    `;
  }
}

const userRow = $component(UserRow);

class Test01 extends SonnetComponent {
  private props: { users: User[]; } | undefined;

  constructor(props?: { users: User[]; }) {
    super();
    this.props = props;
  }

  public get() {
    const users = this.props?.users.map((user) => userRow({ user }).get()).join('');

    return  /*html*/ `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SSR Benchmarker</title>
      </head>
      <body>
        <h2>HTML Table</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            ${users}
          </tbody>
        </table> 
      </body>
      </html>
    `;
  }
}

export const test01 = $component(Test01);