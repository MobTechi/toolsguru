import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToolsPreviewPage } from './tools-preview.page';

describe('ToolsPreviewPage', () => {
  let component: ToolsPreviewPage;
  let fixture: ComponentFixture<ToolsPreviewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ToolsPreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
