import { ElementPropTypes } from "@volusion/element-proptypes"

export const configSchema = {
  dateRange: {
    label: "Sale Dates (Start and End Dates)",
    type: ElementPropTypes.dateRange,
  },
  text: {
    label: "Text Content",
    type: ElementPropTypes.string,
  },
}

// Set up default configuration for the dateRange picker
const today = new Date() // start date
const nextWeek = new Date() // end date
nextWeek.setDate(nextWeek.getDate() + 7)

// Dates set using 
// "2020-05-28T19:25:56.434Z"
// "2020-06-04T04:00:00.000Z"


export const defaultConfig = {
  dateRange: [today, nextWeek],
  text: "50% Off All Sale Items",
}
