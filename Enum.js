var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["manager"] = 1] = "manager";
    Role[Role["seller"] = 2] = "seller";
    Role[Role["user"] = 3] = "user";
})(Role || (Role = {}));
console.warn(Role);
