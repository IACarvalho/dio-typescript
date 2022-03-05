interface IUser {
  id: string;
  email: string;
  position?: 'normal user' | 'manager' | 'coordinator' |'supervisor' 
}

function login (user: IUser ) {
  if (user.position) [
    // redirect to employees area (user.position)
  ]

  // redirect to guest area
}