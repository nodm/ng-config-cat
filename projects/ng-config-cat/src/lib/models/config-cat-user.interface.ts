export interface ConfigCatUser {
  identifier: string;
  email?: string;
  country?: string;
  custom?: { [key: string]: any };
}
