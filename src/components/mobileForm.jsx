import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getBrands } from "../services/brandsService";
import mobile from "../services/mobilesService";
import { toast } from "react-toastify";

class MobileForm extends Form {
  state = {
    data: {
      name: "",
      brandId: "",
      img: "",
      price: "",
    },
    brands: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    name: Joi.string().required().label("Name"),
    brandId: Joi.string().required().label("Brand"),
    img: Joi.string().min(0).required().label("Image Url"),
    price: Joi.string().min(0).required().label("Price"),
  };

  async populateBrands() {
    const { data: brands } = await getBrands();
    this.setState({ brands });
  }

  async populateMobile() {
    try {
      const mobileId = this.props.match.params.id;
      if (mobileId === "new") return;

      const { data: item } = await mobile.getMobile(mobileId);
      this.setState({ data: this.mapToViewModel(item) });
    } catch (ex) {
      if (ex.response && ex.response.status >= 400) {
        this.props.history.replace("/not-found");
      }
    }
  }

  async componentDidMount() {
    await this.populateBrands();
    await this.populateMobile();
  }

  mapToViewModel(mobile) {
    return {
      _id: mobile._id,
      name: mobile.name,
      brandId: mobile.brandId,
      img: mobile.img,
      price: mobile.price,
    };
  }
  doSubmit = async () => {
    try {
      await mobile.saveMobile(this.state.data);
      this.props.history.push("/admin-panel");
    } catch (error) {
      if (error.response && error.response.status === 400)
        toast.warn(error.response.data);
    }
  };

  render() {
    console.log(this.state.data);
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form">
          <h2>Mobile Form</h2>
          {this.renderInput("name", "Name", "text")}
          {this.renderSelect("brandId", "Brand", this.state.brands)}{" "}
          {this.renderInput("img", "Image Url", "text")}
          {this.renderInput("price", "Price", "text")}
          {this.renderButton("Submit")}
        </form>
      </div>
    );
  }
}

export default MobileForm;
