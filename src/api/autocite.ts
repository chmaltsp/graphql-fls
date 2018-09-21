import {
  RESTDataSource,
  RequestOptions
  //   Response,
  //   Request
} from 'apollo-datasource-rest';

import camelcaseKeys from 'camelcase-keys';

const autociteToken = '3940b21b47df7ae8ac783ad92263361f';
export class AutociteApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://autocite.playground.citation-api.com/api/v3/';
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', `Bearer 123456`);
    request.headers.set('Content-Type', 'application/vnd.autocite.v3+json');
    request.headers.set('Accept', 'application/vnd.com.easybib.data+json');
    request.headers.set('origin', 'http://local.easybib.com');

    request.credentials = 'include';
  }

  //   async didReceiveResponse(res: Response, req: Request) {
  //     console.log(req);
  //     console.log(req.headers.get('origin'));

  //     console.log('\n\n\n\n', res);

  //     return this.parseBody(res);
  //   }

  async citeWebsite(url: string) {
    const data = await this.get('query', {
      url
    });

    return camelcaseKeys(JSON.parse(data), {
      deep: true
    });
  }
}
