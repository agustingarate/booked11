import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';
import React from 'react';

export default function TabsLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="home/index">
        <Icon
          sf={{ default: 'house', selected: 'house.fill' }}
          drawable="ic_menu_myplaces"
        />
        <Label>Home</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="profile/index">
        <Icon
          sf={{ default: 'person', selected: 'person.fill' }}
          drawable="ic_menu_myplaces"
          selectedColor="#000"
        />
        <Label>Profile</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger
        name="settings/index"
        role="search">
        <Icon
          sf={{ default: 'gearshape', selected: 'gearshape.fill' }}
          drawable="ic_menu_myplaces"
        />
        <Label>Settings</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
