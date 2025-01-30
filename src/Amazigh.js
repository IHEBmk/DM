import React from "react";

class AmazighDiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Amazigh: false, // Use a boolean for a checkbox
      Amazigh_note: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
this.props.onChange(event);
  }

  render() {
    return (
      <div
        className="Amazigh"
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <label>Amazigh</label>
          <input
            type="checkbox"
            name="amazigh"
            checked={this.props.Amazigh}
            onChange={this.handleChange}
          />
        </div>

        {this.props.Amazigh && (
          <div>
            <input
              type="number"
              step="0.25"
              name="amazigh_mark"
              value={this.props.Amazigh_note}
              onChange={this.handleChange}
            />
          </div>
        )}
      </div>
    );
  }
}

export default AmazighDiv;
