import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatafirebasePage } from './datafirebase.page';

describe('DatafirebasePage', () => {
  let component: DatafirebasePage;
  let fixture: ComponentFixture<DatafirebasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatafirebasePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatafirebasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
