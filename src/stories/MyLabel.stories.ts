import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";

const meta = {
    title: 'My Label',
    component: MyLabel,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        size: { 
            control: 'select', 
        },
        fontColor: {
            control: 'color'
        }
    }
} satisfies Meta<typeof MyLabel>


export default meta;
type Story = StoryObj<typeof meta>


export const Basic: Story = {
    args: {
        allCaps: false,
        label: 'Basic Label'
    }
}

export const AllCaps: Story = {
    args: {
        allCaps: true,
        label: 'All Caps Label',
        size: 'normal'
    }
}
export const Secondary: Story = {
    args: {
        allCaps: false,
        color: "text-secondary",
        label: 'Secondary Label',
        size: 'h2'
    }
}
export const CustomColor: Story = {
    args: {
        allCaps: false,
        label: 'Custom Color Label',
        fontColor: 'blue',
        size: 'h3'
    }
}