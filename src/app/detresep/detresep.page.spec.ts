import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetresepPage } from './detresep.page';

describe('DetresepPage', () => {
  let component: DetresepPage;
  let fixture: ComponentFixture<DetresepPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetresepPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetresepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
