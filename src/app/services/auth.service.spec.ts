import { TestBed, inject } from '@angular/core/testing';
import { Http, Request, Response, ResponseOptions, RequestOptionsArgs,
  ConnectionBackend, BaseRequestOptions, RequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { SourceWebService } from './source-web.service';

describe('SourceWebService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Http, useFactory: (
            backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }, deps: [MockBackend, BaseRequestOptions]
        },
        MockBackend,
        BaseRequestOptions,
        SourceWebService
      ]
    });
  });

  it('should construct', inject([SourceWebService], (service: SourceWebService) => {
    expect(service).toBeTruthy();
  }));

});
