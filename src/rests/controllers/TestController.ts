import { Get, JsonController, QueryParam, QueryParams } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import { Service } from 'typedi';

import { TestService } from '@Services/TestService';

import { SumQueryParam } from '@Rests/types/TestBody';

@Service()
@JsonController('/test')
@OpenAPI({})
export class TestController {
  constructor(
    private testService: TestService,
  ){ }

  @Get('/sum')
  public sum(@QueryParams() query: SumQueryParam) {
    return `${this.testService.sum(query.a, query.b)}`;
  }
}
