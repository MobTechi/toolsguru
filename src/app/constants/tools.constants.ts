export interface ToolModel {
    id: string;
    title: string;
    category: string;
};

export const TOOLS_CATEGORY = {
    DATE_AND_TIME: 'Date and Time',
    CALCULATION: 'Calculation'

};

export const APP_TOOLS: Array<ToolModel> = [
    {
        id: 'analog-time',
        title: 'Analog Time',
        category: TOOLS_CATEGORY.DATE_AND_TIME
    },
    {
        id: 'digital-time',
        title: 'Digital Time',
        category: TOOLS_CATEGORY.DATE_AND_TIME
    },
    {
        id: 'stop-watch',
        title: 'Stop Watch',
        category: TOOLS_CATEGORY.DATE_AND_TIME
    },
    {
        id: 'calendar',
        title: 'Calendar',
        category: TOOLS_CATEGORY.DATE_AND_TIME
    },
    {
        id: 'calculator',
        title: 'Calculator',
        category: TOOLS_CATEGORY.CALCULATION
    },
    {
        id: 'bmi-calculator',
        title: 'BMI Calculator',
        category: TOOLS_CATEGORY.CALCULATION
    },
    {
        id: 'age-calculator',
        title: 'Age Calculator',
        category: TOOLS_CATEGORY.CALCULATION
    },
    {
        id: 'discount-calculator',
        title: 'Discount Calculator',
        category: TOOLS_CATEGORY.CALCULATION
    },
    {
        id: 'interest-calculator',
        title: 'Interest Calculator',
        category: TOOLS_CATEGORY.CALCULATION
    },
    {
        id: 'fuel-calculator',
        title: 'Fuel Calculator',
        category: TOOLS_CATEGORY.CALCULATION
    }
];