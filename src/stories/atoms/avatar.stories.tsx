import type {Meta, StoryObj} from "@storybook/react";
import {Avatar} from "../../atoms";

import avatarGroup from "../../assets/images/avatar-group.svg"
import avatarFamily from "../../assets/images/avatar-family.svg"
import avatarFather from "../../assets/images/avatar-father.svg"
import avatarFriends from "../../assets/images/avatar-friends.svg"

const meta = {
  title: "Atoms/Avatar",
  component: Avatar,
  tags:["autodocs"],
  parameters: {
    layout: "centered"
  }
} satisfies Meta <typeof Avatar>

export default meta

type Story = StoryObj<typeof meta>;

export const AvatarProfile: Story = {
  args:{
    alt: "name profile",
    type:"profile",
    width: 40,
    height:40,
    children:"MR"
  }
}


export const AvatarFriends: Story = {
  args:{
    alt:"avatar friends",
    src: {avatarFriends},
    width: 651,
    height:407
  }
}

export const AvatarGroup: Story = {
  args:{
    alt:"avatar group",
    src: "avatarGroup",
    width: 612,
    height:347
  }
}

export const AvatarFamily: Story = {
  args:{
    alt:"avatar family",
    src: "avatarFamily",
    width: 592,
    height:422
  }
}

export const AvatarFather: Story = {
  args:{
    alt:"avatar father",
    src: "avatarFather",
    width: 476,
    height:476
  }
}
