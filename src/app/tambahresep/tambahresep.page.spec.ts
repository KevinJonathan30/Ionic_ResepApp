import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TambahresepPage } from './tambahresep.page';

describe('TambahresepPage', () => {
  let component: TambahresepPage;
  let fixture: ComponentFixture<TambahresepPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahresepPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TambahresepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
