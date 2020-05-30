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

export const defaultConfig = {
  dateRange: [today, nextWeek],
  text: "50% Off All Sale Items",
}
