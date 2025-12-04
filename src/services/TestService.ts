import { Service } from 'typedi';

@Service()
export class TestService {
  public sum (a: number, b: number) {
    return a + b;
  }
}
