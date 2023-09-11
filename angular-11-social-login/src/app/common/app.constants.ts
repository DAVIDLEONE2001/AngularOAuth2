export class AppConstants {

  private static OAUTH2_REDIRECT_URI = 'http://localhost:4200/oauth2/redirect'
  public static API_BASE_URL = "http://localhost:8080/";
  private static OAUTH2_URL = AppConstants.API_BASE_URL + "oauth2/authorize/";
  private static REDIRECT_URL = "?redirect_uri=http:localhost:4200/oauth2/redirect";
  public static API_URL = AppConstants.API_BASE_URL + "api/";
  public static AUTH_API = AppConstants.API_BASE_URL + "auth/";
  // public static GOOGLE_AUTH_URL = AppConstants.OAUTH2_URL + "google" + AppConstants.REDIRECT_URL;
  public static GOOGLE_AUTH_URL = AppConstants.API_BASE_URL + 'oauth2/authorize/google?redirect_uri=' + AppConstants.OAUTH2_REDIRECT_URI;
  public static FACEBOOK_AUTH_URL = AppConstants.OAUTH2_URL + "facebook" + AppConstants.REDIRECT_URL;
  public static GITHUB_AUTH_URL = AppConstants.OAUTH2_URL + "github" + AppConstants.REDIRECT_URL;
  public static LINKEDIN_AUTH_URL = AppConstants.OAUTH2_URL + "linkedin" + AppConstants.REDIRECT_URL;
}
