import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Rating from "@material-ui/lab/Rating"
import FavoriteIcon from "@material-ui/icons/Favorite"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

const StyledRating = withStyles({
	iconFilled: {
		color: "#E1C972",
	},
	iconHover: {
		color: "#ff3d47",
	},
})(Rating)

class CustomizedRatings extends React.Component {
	render() {
		return (
			<div className="ratingBox">
				<Box
					component="fieldset"
					mb={3}
					borderColor="transparent"
					style={{ margin: "9px 0" }}
				>
					<StyledRating
						name="customized-color"
						defaultValue={this.props.rating}
						readOnly
						getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
						precision={0.5}
						name="size-medium"
						icon={<FavoriteIcon fontSize="inherit" />}
					/>
				</Box>
			</div>
		)
	}
}

export default CustomizedRatings
