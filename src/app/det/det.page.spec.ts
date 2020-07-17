import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetPage } from './det.page';

describe('DetPage', () => {
  let component: DetPage;
  let fixture: ComponentFixture<DetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
