import { TestBed } from '@angular/core/testing';
import { PokeData } from './poke-data';

describe('PokeData', () => {
  let service: PokeData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
