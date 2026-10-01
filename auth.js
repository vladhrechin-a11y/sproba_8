(function(){
  const AUTH_KEY = 'pidtrymka_auth_v1';
  const LOGIN = 'police';
  const PASSWORD = 'support2026';
  window.PIDTRYMKA_AUTH = {
    login: LOGIN,
    password: PASSWORD,
    isLoggedIn: function(){ return sessionStorage.getItem(AUTH_KEY) === '1'; },
    signIn: function(login,password){
      if(login === LOGIN && password === PASSWORD){
        sessionStorage.setItem(AUTH_KEY,'1');
        return true;
      }
      return false;
    },
    signOut: function(){ sessionStorage.removeItem(AUTH_KEY); }
  };
})();