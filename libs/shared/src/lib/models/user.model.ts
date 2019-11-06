export class User {
  public uid: string;
  public name?: string;
  public email?: string | null;
  public image?: {
    photoURL?: string;
    size?: string;
  };
  public displayName?: string;
  public maatschap?: string;
  public social?: string[];
  public projects?: string[];
  public roles: any;
  public fcmTokens?: { [token: string]: true };

  constructor(user?) {
    user = user || {};
    this.name = user.name || '';
    this.email = user.email || '';
    this.image = user.image || {
      photoURL: '',
      size: ''
    };
    this.displayName = user.displayName || '';
    this.maatschap = user.Maatschapnaam || '';
    this.social = user.social || [];
    this.projects = user.projects || [];
    this.roles = user.roles || {
      admin: false,
      editor: false,
      employee: false,
      maat: false,
      manager: false,
      subscriber: true
    };
    this.fcmTokens = user.fcmTokens || {};
  }
}
