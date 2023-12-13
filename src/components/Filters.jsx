import { Form, Link, useLoaderData } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormChexkbox";

const Filters = () => {
  const { meta, params } = useLoaderData();
  // console.log(meta);
  // console.log(params);
  const { search, category, company, order, price, shipping } = params;

  return (
    <Form className=" bg-base-200 rounded-md grid sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 gap-x-4 gap-y-8 items-center p-4">
      {/*SEARCH*/}
      <FormInput
        label="search product"
        type="search"
        name="search"
        size="input-sm"
        defaultValue={search}
      />
      {/*CATEGOTY*/}
      <FormSelect
        label="select category"
        name="category"
        size="select-sm"
        list={meta.categories}
        defaultValue={category}
      />
      {/*COMPANY*/}
      <FormSelect
        label="select company"
        name="company"
        size="select-sm"
        list={meta.companies}
        defaultValue={company}
      />
      {/*ORDER*/}
      <FormSelect
        label="sort by"
        name="order"
        size="select-sm"
        list={["a-z", "z-a", "high", "low"]}
        defaultValue={order}
      />
      {/*PRICE*/}
      <FormRange
        label="select price"
        name="price"
        size="range-sm"
        price={price}
      />
      {/*SHIPPING*/}
      <FormCheckbox
        label="free shipping"
        name="shipping"
        size="checkbox-sm"
        defaultalue={shipping}
      />
      {/*BUTTONS*/}
      <button type="submit" className="btn btn-primary btn-sm uppercase">
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm uppercase">
        reset
      </Link>
    </Form>
  );
};

export default Filters;
