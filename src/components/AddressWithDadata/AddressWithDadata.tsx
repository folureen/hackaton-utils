import React, {ElementType} from "react";
import { AddressSuggestions, type DaDataAddress } from "react-dadata";
import "react-dadata/dist/react-dadata.css";
import { type CommonProps } from "react-dadata/dist/types";



interface Props extends Partial<CommonProps<DaDataAddress>> {}
const AddressWithDadata: React.FC<Props> = (props) => {
  return (
    <AddressSuggestions
      {...props}
      token={props.token ?? "40095fa2ecc9a5f79d51d27c6a4145a5eadc113e"}
      delay={props.delay ?? 600}
      count={props.count ?? 10}
      httpCache={props.httpCache ?? true}
    />
  );
};
export default AddressWithDadata;
