import 'package:flutter_amazon_clone/constants/error_handling.dart';
import 'package:flutter_amazon_clone/constants/global_variables.dart';
import 'package:flutter_amazon_clone/constants/utils.dart';
import 'package:flutter_amazon_clone/models/user.dart';
import 'package:http/http.dart' as http;

class AuthService {
  // sing up user (function)
  void signUp(
      {required context,
      required String email,
      required String password,
      required String name}) async {
    try {
      User user = User(
          id: '',
          name: name,
          email: email,
          password: password,
          address: '',
          type: '',
          token: '');

      http.Response res = await http.post(Uri.parse('$uri/api/signup'),
          body: user.toJson(),
          headers: <String, String>{
            'Content-Type': 'application/json; charset=UTF-8'
          });
      httpErrorHandle(
          response: res,
          context: context,
          onSuccess: () {
            showSnackBar(
                context, 'Account created! Login with the same credentials!');
          });
    } catch (err) {
      showSnackBar(context, err.toString());
    }
  }
}
