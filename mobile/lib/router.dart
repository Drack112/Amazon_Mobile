import 'package:amazon_flutter/features/screens/auth_screen.dart';
import 'package:flutter/material.dart';

Route<dynamic> generateRoute(RouteSettings routeSettings) {
  switch (routeSettings.name) {
    case AuthScreen.routeName:
      return MaterialPageRoute(
          builder: (_) => const AuthScreen(), settings: routeSettings);
    default:
      return MaterialPageRoute(
        builder: (_) => const Center(
          child: Text("This Page Does not exist!"),
        ),
      );
  }
}
