import { setUserAge, copyAndEditUser } from "./module-4";

let mockUser;

describe("Homework #4", () => {
  beforeEach(() => {
    mockUser = { name: "John" };
  });

  describe("Set user age", () => {
    it("Function correct edit user", () => {
      jest.spyOn(window, "prompt").mockReturnValue(19);
      setUserAge(mockUser);
      expect(mockUser.age).toBe(19);
    });
  });

  describe("Clone user and assign him a admin role", () => {
    it("Function add one new property to user clone", () => {
      const editedUser = copyAndEditUser(mockUser);
      expect(Object.keys(editedUser).length).toBe(
        Object.keys(mockUser).length + 1
      );
    });

    it("Function make user clone that contain all properties of original user", () => {
      const editedUser = copyAndEditUser(mockUser);
      const userProperties = Object.keys(mockUser);
      const editedUserProperties = Object.keys(editedUser);
      userProperties.forEach((property) => {
        expect(editedUserProperties.includes(property)).toBeTruthy();
      });
    });

    it("Function make user clone that contain correct properties", () => {
      const editedUser = copyAndEditUser(mockUser);
      const { name, role } = editedUser;
      expect(name).toBe("John");
      expect(role).toBe("admin");
    });
  });
});
