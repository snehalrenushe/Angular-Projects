import { Component, Input, computed, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItemComponent } from "../menu-item/menu-item.component";

export type MenuItem = {
  icon: string;
  label: string;
  route?: string;
  subItems?: MenuItem[];
};

@Component({
    selector: 'app-custom-sidenav',
    standalone: true,
    templateUrl: './custom-sidenav.component.html',
    styleUrl: './custom-sidenav.component.css',
    imports: [CommonModule, MatListModule, MatIconModule, RouterModule, MenuItemComponent]
})
export class CustomSidenavComponent {
  sideNavCollapsed = signal(false);
  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  }

  menuItems = signal<MenuItem[]>([
    { icon: 'dashboard', label: 'Dashboard', route: 'dashboard' },
    {
      icon: 'video_library',
      label: 'Content',
      route: 'content',
      subItems: [
        {
          icon: 'play_circle',
          label: 'Videos',
          route: 'videos',
        },
        {
          icon: 'playlist_play',
          label: 'Playlists',
          route: 'playlists',
        },
        {
          icon: 'post_add',
          label: 'Posts',
          route: 'posts',
        },
      ],
    },
    { icon: 'analytics', label: 'Analytics', route: 'analytics' },
    { icon: 'comment', label: 'Comments', route: 'comments' },
  ]);

  profilePicSize = computed(() => (this.sideNavCollapsed() ? '32' : '100'));
}
