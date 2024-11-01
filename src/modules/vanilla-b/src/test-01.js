export function makeView(template) {
  return new Function(`return \{render: (props) => \`${template}\`\};`)();
}

export function UserRowComponent(user) {
  return /*html*/ `
    <tr>
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
    </tr>
  `;
}