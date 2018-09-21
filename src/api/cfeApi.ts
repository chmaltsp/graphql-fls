import {
  RESTDataSource,
  RequestOptions
  //   Response,
  //   Request
} from 'apollo-datasource-rest';

export class CfeApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://playground.easybib.com/api/';
  }

  willSendRequest(request: RequestOptions) {
    request.credentials = 'include';
  }

  //   async didReceiveResponse(res: Response, req: Request) {
  //     console.log(req);
  //     console.log(req.headers.get('origin'));

  //     console.log('\n\n\n\n', res);

  //     return this.parseBody(res);
  //   }

  async getToken() {
    const data = await this.post('token?client=wbe');

    console.log(data);
    return data;
  }
}
