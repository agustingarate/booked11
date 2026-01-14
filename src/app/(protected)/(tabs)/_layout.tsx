import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

//TODO

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#6366f1', // primary color
        tabBarInactiveTintColor: '#9ca3af', // gray color
        tabBarStyle: Platform.select({
          web: {
            backgroundColor: '#1f2937', // background-dark
            borderTopColor: '#374151',
            borderTopWidth: 1,
          },
          default: {
            backgroundColor: '#1f2937',
            borderTopColor: '#374151',
            borderTopWidth: 1,
          },
        }),
      }}>
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="home"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="person"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings/index"
        options={{
          title: 'Configuración',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="settings"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

// import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';
// import React from 'react';

// export default function TabsLayout() {
//   return (
//     <NativeTabs>
//       <NativeTabs.Trigger name="home/index">
//         <Icon
//           sf={{ default: 'house', selected: 'house.fill' }}
//           drawable="ic_menu_myplaces"
//         />
//         <Label>Home</Label>
//       </NativeTabs.Trigger>
//       <NativeTabs.Trigger name="profile/index">
//         <Icon
//           sf={{ default: 'person', selected: 'person.fill' }}
//           drawable="ic_menu_myplaces"
//           selectedColor="#000"
//         />
//         <Label>Profile</Label>
//       </NativeTabs.Trigger>
//       <NativeTabs.Trigger
//         name="settings/index"
//         role="search">
//         <Icon
//           sf={{ default: 'gearshape', selected: 'gearshape.fill' }}
//           drawable="ic_menu_myplaces"
//         />
//         <Label>Settings</Label>
//       </NativeTabs.Trigger>
//     </NativeTabs>
//   );
// }
