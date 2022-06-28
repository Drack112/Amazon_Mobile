import 'package:flutter/material.dart';
import 'package:amazon_flutter/constants/global_variables.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Amazon Mobile",
      theme: ThemeData(
          scaffoldBackgroundColor: GlobalVariables.backgroundColor,
          colorScheme:
              const ColorScheme.light(primary: GlobalVariables.secondaryColor),
          appBarTheme: const AppBarTheme(
              elevation: 0,
              iconTheme: IconThemeData(
                color: Colors.black,
              ))),
      home: Scaffold(
          appBar: AppBar(
            title: const Center(
              child: Text("Hello Flutter"),
            ),
          ),
          body: Column(
            children: [
              const Center(child: Text("Flutter Demo App")),
              ElevatedButton(onPressed: () {}, child: const Text("Click"))
            ],
          )),
    );
  }
}
