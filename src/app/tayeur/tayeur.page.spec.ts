import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TayeurPage } from './tayeur.page';

describe('TayeurPage', () => {
  let component: TayeurPage;
  let fixture: ComponentFixture<TayeurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TayeurPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TayeurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
