import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmployesPage } from './employes.page';

describe('EmployesPage', () => {
  let component: EmployesPage;
  let fixture: ComponentFixture<EmployesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmployesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
