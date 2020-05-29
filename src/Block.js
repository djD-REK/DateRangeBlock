import React from "react"
import { css, StyleSheet } from "aphrodite/no-important"
import { getStyles } from "./getStyles"
import { defaultConfig } from "./configs"

const Block = (props) => {
  // Destructure the helper functions from the props
  const { utils, joinClasses } = props
  // isRendering is true in a live VOLT Store or a store's preview, and
  // it is undefined in VOLT's Site Designer or when developing locally
  const { isRendering } = utils

  // Get the CSS styles from Aphrodite
  const classes = StyleSheet.create(getStyles(props))

  // Destructure our Element props
  const { dateRange, text } = props
  // Destructure the dateRange array
  const [startDateProp, endDateProp] = dateRange
  // Dates set in VOLT's Site Designer are saved as ISO strings
  // (e.g. 2020-06-05T04:00:00.000Z). Convert them to Date objects:
  const startDate = new Date(startDateProp)
  const endDate = new Date(endDateProp)
  // Fetch the current date and time
  const currentDate = new Date()

  // Set a boolean to display the banner only during the selected dates
  const bannerIsLive = currentDate > startDate && currentDate < endDate

  return (
    <React.Fragment>
      {(bannerIsLive || !isRendering) && (
        <div className={joinClasses("pa3", css(classes.bannerWrapper))}>
          {!isRendering && (
            <div className={joinClasses("pb1", css(classes.bannerIsLiveText))}>
              The sale banner is {bannerIsLive && "live"}
              {!bannerIsLive && "not live"}
              {". "}
              <span className={css(classes.bannerIsLiveDateRange)}>
                It will be displayed from {startDate.toDateString()} to{" "}
                {endDate.toDateString()}.
              </span>
            </div>
          )}
          <div className={css(classes.bannerText)}>{text}</div>
        </div>
      )}
    </React.Fragment>
  )
}

Block.defaultProps = defaultConfig

export default Block
