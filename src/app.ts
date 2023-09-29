// kiểu union type
let id: number | string | boolean = true;

type Status = "success" | "error" | "loading";

// kiểu intersection type
type User = "user";
type Admin = "admin";

type Role = User & Admin;

const role: Role = "admin" as Role;

console.log(role);

//type enum
//enum number  => truy xuất được hai chiều
enum StatusOrder {
  Cancel = 0,
  Success,
  Pending,
}

console.log("status", StatusOrder.Cancel);

enum Roles {
  ADMIN,
  USER,
  EMPLOYEE,
  MANAGER,
}

//enum string

enum HTTP {
  GET = "GET",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}
console.log(HTTP.GET);
