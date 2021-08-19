import AppConfig  from "./AppConfig";
import {render} from '@testing-library/react';
import React  from "react";

test("Validate App Config",()=>{

    const {getByText} = render(<AppConfig />);

    const h1 = getByText(/I earn more/);

    expect(h1).
        toHaveTextContent('I earn more');
})