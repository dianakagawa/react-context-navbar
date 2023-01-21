// este componente solo debe envolver el componente de formulario como hijo. Esto es para ilustrar que se pueden usar componentes anidados con contexto sin pasar por props. No admite ninguna propiedad.

import React from "react";
import Form from "./Form";

const FormWrapper = () => <Form />;

export default FormWrapper;
