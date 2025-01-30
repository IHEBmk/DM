import React from "react";

class SportDiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Sport: false, // Use a boolean for a checkbox
      Sport_note: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // Update state correctly based on input type
    this.props.onChange(event);
  }

  render() {
    return (
      <div
        className="sport"
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <div  style={{ display: "flex", flexDirection: "row",alignItems: "center" }}>
        <label>Sport</label>
        <input
          type="checkbox"
          name="sport"
          checked={this.props.Sport}
          onChange={this.handleChange}
        /></div>

        {this.props.Sport && (
          <div>
            <input
              type="number"
              step="0.25"
              name="sport_mark"
              value={this.props.Sport_note}
              onChange={this.handleChange}
            />
          </div>
        )}
      </div>
    );
  }
}

export default SportDiv;
