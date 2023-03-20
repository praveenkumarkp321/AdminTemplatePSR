import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-app',
  templateUrl: './web-app.component.html',
  styleUrls: ['./web-app.component.scss']
})
export class WebAppComponent implements OnInit {
  sidebarToggleStatus: boolean = true;
  sideBarHover: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onResize(event: any) {
    if (window.innerWidth < 992) {
      this.sidebarToggleStatus = false;
    } else {
      this.sidebarToggleStatus = true;
      this.sideBarHover = false;

    }
  }
  toggleSidebar() {

    this.sidebarToggleStatus = !this.sidebarToggleStatus;

    if (window.innerWidth < 992 && this.sidebarToggleStatus) {
      this.sideBarHover = true;
    } else {
      this.sideBarHover = false;
    }
    // if (this.sidebarToggleStatus)
    //  this.toggleTitle = "Expand Sidebar";
    // else
    // this.toggleTitle = "Collapse Sidebar";
  }
  darkThemeMode: boolean = false;

  switchTheme() {
    this.darkThemeMode = !this.darkThemeMode;
    var darkModeObj = { darkMode: this.darkThemeMode }
    localStorage.setItem('appTheme', JSON.stringify(darkModeObj));
    this.setTheme();
  }

  setTheme() {
    var darkModeObj = (!!localStorage && localStorage.length > 0 && localStorage.getItem("appTheme")) ? (JSON.parse(localStorage.getItem("appTheme") ?? "")) : null;
    this.darkThemeMode = darkModeObj?.darkMode;
    if (this.darkThemeMode) {
      document.getElementById('main')?.classList.add('dark-theme');
      document.getElementById('main')?.classList.remove('light-theme');
    } else {
      document.getElementById('main')?.classList.add('light-theme');
      document.getElementById('main')?.classList.remove('dark-theme');
    }
  }
  expandToggle: boolean = false;

  expandScreen() {
    this.expandToggle = !this.expandToggle;
    if (this.expandToggle) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }
  displaySetModal: boolean = false;

  openTemplateModal() {
    this.displaySetModal = true;
  }
  switchTemplate(event: any, color: any) {

    document.getElementById('main')?.classList.remove('theme-default');

    var activeElements = document.querySelectorAll('.set-item a.active');
    activeElements[0]?.classList.remove('active');

    event.target?.classList.add('active');
    document.getElementById('main')?.classList.remove('theme-defualt', 'theme-blue', 'theme-dark-green', 'theme-purple');
    document.getElementById('main')?.classList.add(color);
    this.displaySetModal = false;
  }
}
