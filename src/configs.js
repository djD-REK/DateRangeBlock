import { ElementPropTypes } from "@volusion/element-proptypes"

export const configSchema = {
  section1: {
    type: ElementPropTypes.sectionHeader,
  },
  backgroundColorCenter: {
    label: "Background Color (Center)",
    type: ElementPropTypes.color,
  },
  backgroundColorOutside: {
    label: "Background Color (Outside)",
    type: ElementPropTypes.color,
  },
  section2: {
    type: ElementPropTypes.sectionHeader,
  },
  borderColor: {
    label: "Border Color",
    type: ElementPropTypes.color,
  },
  borderRadius: {
    label: "Border Radius",
    type: ElementPropTypes.slider,
  },
  section3: {
    type: ElementPropTypes.sectionHeader,
  },
  dateRange: {
    label: "Sale Dates (Start and End Dates)",
    type: ElementPropTypes.dateRange,
  },
  startTime: {
    label: "Start Time (on Start Date)",
    type: ElementPropTypes.slider,
  },
  endTime: {
    label: "End Time (on End Date)",
    type: ElementPropTypes.slider,
  },
  timeZone: {
    label: "Time Zone (for Start and End Times)",
    type: ElementPropTypes.slider,
  },
  section4: {
    type: ElementPropTypes.sectionHeader,
  },
  text: {
    label: "Text Content",
    type: ElementPropTypes.editorFull,
  },
}

// Set up default configuration for dateRange picker (Sales Dates)
const today = new Date() // start date
const nextWeek = new Date() // end date
nextWeek.setDate(nextWeek.getDate() + 7)
export const defaultConfig = {
  section1: "Background Gradient",
  backgroundColorCenter: "rgba(238,174,202,1)",
  backgroundColorOutside: "rgba(148,187,233,1)",
  section2: "Border Styles",
  borderColor: "rgba(238,174,202,1)",
  borderRadius: {
    labelPrefix: "",
    labelStepSize: 1,
    labelSuffix: "px",
    min: 0,
    max: 20,
    stepSize: 1,
    selectedValue: 3,
    vertical: false,
  },
  section3: "Sale Dates",
  dateRange: [today, nextWeek],
  startTime: {
    labelPrefix: "",
    labelStepSize: 1,
    labelSuffix: ":00",
    min: 0,
    max: 23,
    stepSize: 8,
    selectedValue: 12,
    vertical: false,
  },
  endTime: {
    labelPrefix: "",
    labelStepSize: 1,
    labelSuffix: ":00",
    min: 0,
    max: 23,
    stepSize: 8,
    selectedValue: 12,
    vertical: false,
  },
  timeZone: {
    labelPrefix: "",
    labelStepSize: 10,
    labelSuffix: ":00UTC",
    min: -12,
    max: 12,
    stepSize: 1,
    selectedValue: -5,
    vertical: false,
  },
  section4: "Banner Text",
  text: `<h1>Limited Time Only</h1><h2 color="red">50% Sale Items</h2>`,
}
