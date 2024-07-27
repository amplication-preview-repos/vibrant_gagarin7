import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AboutUsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Title" source="title" />
        <TextInput label="Content" multiline source="content" />
      </SimpleForm>
    </Create>
  );
};
