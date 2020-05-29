import { ElementPropTypes } from "@volusion/element-proptypes"

export const configSchema = {
  section1: {
    type: ElementPropTypes.sectionHeader,
  },
  dateRange: {
    label: "Sale Dates (Start and End Dates)",
    type: ElementPropTypes.dateRange,
  },
  section2: {
    type: ElementPropTypes.sectionHeader,
  },
  text: {
    label: "Text Content",
    type: ElementPropTypes.text,
  },
}

// Set up default configuration for dateRange picker (Sales Dates)
const today = new Date() // start date
const nextWeek = new Date() // end date
nextWeek.setDate(nextWeek.getDate() + 7)
export const defaultConfig = {
  section1: "Sale Dates",
  dateRange: [today, nextWeek],
  section2: "Banner Text",
  text: "50% Off All Sale Items",
}
