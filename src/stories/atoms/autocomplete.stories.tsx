import { Meta, StoryObj } from "@storybook/react";

import { Autocomplete } from "../../atoms";

export default {
    title: 'Atoms/Autocomplete',
    component: Autocomplete,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    }
} as Meta<typeof Autocomplete>;



export const Default: StoryObj<typeof Autocomplete> = {
    args: {
        id: 'my-id',
        value: 'English',
        options: [
            {label: 'English', value: 'english'}
        ],
    }
}


export const HintText: StoryObj<typeof Autocomplete> = {
    args: {
        id: 'my-id',
        value: 'Option 2',
        options: [
            {label: 'City of Residence', value: 'cityOfResidence'}
        ],
        helperText: 'This is a hint to help user.',
        label: 'Rule',
        required: true,
    }

}

export const RequiredWithErrors: StoryObj<typeof Autocomplete> = {
    args: {
        id: 'my-id',
        value: '',
        options: [
            { label: 'City of Residence', value: 'cityOfResidence' }
        ],
        helperText: 'This is a hint to help user.',
        error: true,
        errorHelperText: 'This field is required',
        label: 'Rule',
        required: true,
    }
};