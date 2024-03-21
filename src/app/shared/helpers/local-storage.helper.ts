

export class LocalStorageHelper {

  public static set signUpEmail(signUpEmail: string) {
    localStorage.setItem('signUpEmail', signUpEmail);
  }

  public static get currentUser(): string {
    const currentUser = localStorage.getItem('yogaCurrentUser');
    return currentUser !== null ? currentUser : '';
  }

  public static setCurrentUser(currentUser: string): void {
    localStorage.setItem('yogaCurrentUser', currentUser);
  }

  public static removeAll(): void {
    localStorage.clear();
  }
}
