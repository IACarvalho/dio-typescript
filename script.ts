interface IUser {
  id: string;
  email: string;
}

interface IAdmin extends IUser {
  position: 'manager' | 'coordinator' |'supervisor' 
}

function login (user: IUser | IAdmin) {
  if ('position' in user) {
    // redirect to administrator area
  }

  // redirect to user area 
}