import { UserEntity } from "../users/entity/user.entity";

export const validarUsuario = (user: UserEntity) => {
  let options = {
    result: true,
    message: "",
  };

  if (!user.nombres) {
    options = {
      result: false,
      message: `Ingrese el campo nombres.`,
    };
  }

  if (!user.apellidos) {
    options = {
      result: false,
      message: `Ingrese el campo apellidos.`,
    };
  }

  if (!user.correo) {
    options = {
      result: false,
      message: `Ingrese el campo correo.`,
    };
  }

  return options;
};
