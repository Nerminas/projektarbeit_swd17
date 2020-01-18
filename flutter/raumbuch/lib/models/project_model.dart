class ProjectModel {
  String name;
  String customernumber;
  String adress;
  String phone;
  String email;

  ProjectModel(this.name, this.customernumber, this.adress, this.phone, this.email);

  ProjectModel.fromJson(Map<String, dynamic> parsedJson)
      : name = parsedJson['name'],
        customernumber = parsedJson['customernumber'],
        adress = parsedJson['adress'],
        phone = parsedJson['phone'],
        email = parsedJson['email'];
}
