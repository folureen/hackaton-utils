import type { Meta } from "@storybook/react";
import React from "react";

import AddressWithDadata from "./AddressWithDadata";

const meta: Meta<typeof AddressWithDadata> = {
  component: AddressWithDadata,
};

export const Primary = {
  render: () => <AddressWithDadata />,
};

export default meta;
