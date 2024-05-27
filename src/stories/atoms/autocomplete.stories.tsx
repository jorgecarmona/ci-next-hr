import { Meta, StoryObj } from "@storybook/react";

import { Autocomplete } from "../../atoms";

// Define el tipo para las historias del componente Autocomplete
type Story = StoryObj<typeof Autocomplete>;

export default {
    title: 'Atoms/Autocomplete',
    component: Autocomplete,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    }
} as Meta<typeof Autocomplete>;

// Usa el tipo Story para definir las historias
export const Default: Story = {
    args: {
        id: 'my-id',
        value: 'English',
        options: [
            { label: 'English', value: 'english' }
        ],
    }
}

export const HintText: Story = {
    args: {
        id: 'my-id',
        value: 'Option 2',
        options: [
            { label: 'City of Residence', value: 'cityOfResidence' }
        ],
        helperText: 'This is a hint to help user.',
        label: 'Rule',
        required: true,
    }
}

export const RequiredWithErrors: Story = {
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
