import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistHeadComponent } from './playlist-head.component';

describe('PlaylistHeadComponent', () => {
  let component: PlaylistHeadComponent;
  let fixture: ComponentFixture<PlaylistHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
