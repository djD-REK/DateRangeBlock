import React from "react"
import { css, StyleSheet } from "aphrodite/no-important"
import { getStyles } from "./getStyles"
import { defaultConfig } from "./configs"
import { moment } from "moment-timezone"

const Block = (props) => {
  const {
    borderColor,
    dateRange,
    startTime,
    endTime,
    timeZone,
    text,
    utils,
  } = props
  const [startDate, endDate] = dateRange
  const currentTime = new Date()

  const classes = StyleSheet.create(getStyles(props))

  return (
    <React.Fragment>
      {(currentTime < 3 || utils.isRendering) && (
        <div style={{ color: borderColor, fontStyle: "italics" }}>
          The sales banner will be displayed from
          {startTime}
          {timeZone >= 0 && "+"}
          {timeZone}UTC on {startDate} to
          {endTime}
          {timeZone >= 0 && "+"}
          {timeZone}UTC on {endDate}
        </div>
      )}
      {utils.isRendering && (
        <div style={{ color: borderColor, fontStyle: "italics" }}>
          The sales banner will be displayed from
          {startTime}
          {timeZone >= 0 && "+"}
          {timeZone}UTC on {startDate} to
          {endTime}
          {timeZone >= 0 && "+"}
          {timeZone}UTC on {endDate}
        </div>
      )}
      <div className={css(classes.banner)}>{text}</div>
    </React.Fragment>
  )
}

Block.defaultProps = defaultConfig

export default Block
