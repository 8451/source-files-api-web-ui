import { Injectable } from '@angular/core';

@Injectable()
export class Config {
  public readonly DELETE_ACCOUNT_URL = '';
  public readonly DELETE_API_URL = '';
  public readonly ADD_API_URL = '';
  public readonly GET_API_KEYS_URL = '';

  public readonly MAX_ALLOWED_API_KEYS = 5;
}
