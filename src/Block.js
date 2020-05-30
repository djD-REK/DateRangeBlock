import React from "react"
import { css, StyleSheet } from "aphrodite/no-important"
import { getStyles } from "./getStyles"
import { defaultConfig } from "./configs"

const Block = (props) => {
  // Destructure the helper functions from the props
  const { data, joinClasses } = props
  // isRendering gets passed to the Block through /src/getDataProps.js
  const { isRendering } = data
  // isRendering is true in a live VOLT Store or a store's preview, and
  // it is undefined in VOLT's Site Designer or when developing locally

  // Get the CSS styles from Aphrodite
  const classes = StyleSheet.create(getStyles(props))

  // Destructure the Element props
  const { dateRange, text } = props
  // Destructure the dateRange array
  const [startDateProp, endDateProp] = dateRange
  // The dates in VOLT's Site Designer are stored as ISO strings
  // e.g. "2019-10-05T14:58:00.000Z" so make them into Date objects:
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
