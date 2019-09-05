class ProjectModel {
  String id;
  String name;
  String customernumber;
  String address;
  String phone;
  String email;

  ProjectModel.fromJson(Map<String, dynamic> parsedJson)
      : id = parsedJson['id'],
        name = parsedJson['name'],
        customernumber = parsedJson['customernumber'],
        address = parsedJson['address'],
        phone = parsedJson['phone'],
        email = parsedJson['email'];
}
