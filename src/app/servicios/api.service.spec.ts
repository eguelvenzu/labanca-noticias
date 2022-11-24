import {TestBed , waitForAsync} from '@angular/core/testing';
import { HttpClientTestingModule  } from '@angular/common/http/testing';
import {Observable} from 'rxjs';

import { ApiService } from './api.service';

describe('ApiService', () => {
  
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [ApiService],
        imports: [HttpClientTestingModule]
      
      });

    service = TestBed.inject(ApiService);
  });

    
   it('should be created', () => {
    expect(service).toBeTruthy();
  });


  /*
  it('should retrieve data', waitForAsync(() => {
    
    service.whenStable().then( () => {

      service.getNoticias().subscribe(data => { 

        expect(data).toBeTruthy();
    });
    
    });

  
  }));
  */
  
/*
  it('should retrieve at least 1 noticia', (done) => {
    
    service.getNoticias().subscribe(data => { 
      
      expect(data.noticias.length).toBeGreaterThan(0);

    });

    done();
  });
  */
});
