import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToolsListPage } from './tools-list.page';

describe('ToolsListPage', () => {
  let component: ToolsListPage;
  let fixture: ComponentFixture<ToolsListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ToolsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
