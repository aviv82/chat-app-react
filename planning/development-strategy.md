# development strategy

> One PR per issue/component/feature.

## planning documents

> As a user/developer I can read a readme of the project and follow the development process.

- [ ] _there is a readme file_
- [ ] _there is a constraints document_
- [ ] _there is a backlog file_
- [ ] _there is a development strategy_
- [ ] _there is a retrospective_

- this will be developed on the branch `0-planning`.

> As a user/developer I can follow the design process.

- [ ] _there is a wireframe file_

- this will be developed on the branch `0-design`.

## Must haves

0 - page title and intro

> As a user I can see what page I am on

> As a user I can understand how to use the page

- [ ] page title
- [ ] intro section

`type: react`

- [ ] use `h1` for intro section

`type css`

- [ ] use `intro` class to style intro section

- this will be developed on on branch `0-title-intro`

1 - username

> As a user I can set my user name

- [ ] create user prompt
- [ ] user display list

`type: react`

- [ ] use `ul` and `li` for list of users display
- [ ] use `input` and `button` to add new user

`type css`

- [ ] use `user-list` class to style user list
- [ ] use `button` and `input` class to style add user section

- this will be developed on on branch `1-create-user`

2 - As a user I can see and create channels

> A user can see and add channels

- [ ] create channel' button
- [ ] channel list

`type: react`

- [ ] use `ul` and `li` for list of channels display
- [ ] use `input` and `button` to add new channel

`type: css`

- [ ] use `channel-list` class to style channel list
- [ ] use `button` and `input` class to style add channel section

- this will be developed on on branch `2-create-channel`

3 - message thread

> A user can see and send messages in channel
> As a user I can send messages in the channels

- [ ] messages are shown in channels

`type: react`

- [ ] use `ul` and `li` for message display
- [ ] use `input` and `button` to add new messages

`type: css`

- [ ] use `message-list` class to style channel list
- [ ] use `button` and `input` class to style add message

- this will be developed on on branch `3-create-message`

4 - message timestamp

> As a user i can see when messages were sent

- [ ] timestamp on sent messages

`type: react`

- [ ] use `p` and to add message timestamp

`type: css`

- [ ] use `message` class to style message body

- this will be developed on on branch `4-message-timestamp`

## should haves

5 - user avatar

> As a user I can see user images
> As a user I can add a user image

- [ ] 'add image' button
- [ ] image display next to username

`type: react`

- [ ] use `img` for avatar icon display
- [ ] use `input` and `button` to add new images

`type: css`

- [ ] use `avatar` class to style user avatar

- this will be developed on on branch `5-user-avatar`

6 - post images

> As a user i can post images in the channels

- [ ] 'add image' button in message

`type: react`

- [ ] use `img` for message image display
- [ ] use `input` and `button` to add new image to message

`type: css`

- [ ] use `message-img` class to style message image

- this will be developed on on branch `6-message-image`

7 - private messaging

> As a user I can send private messages to other users

- [ ] 'send private message' button

`type: react`

- [ ] use `input` and `button` to create private message

`type: css`

- [ ] use `message` class to style message body

- this will be developed on on branch `7-private-message`

8 - edit messages

> As a user I can edit my messages

- [ ] 'edit message' button

`type: react`

- [ ] use `input` and `button` to edit messages

`type: css`

- [ ] use `message` class to style message body
- [ ] use `button` and `input` class to style edit message

- this will be developed on on branch `8-edit-message`

## could haves

9 - reply to messages

> As a user I can reply to messages in a thread

- [ ] 'reply' button

`type: react`

- [ ] use `input` and `button` to create reply

`type: css`

- [ ] use `button` class to style reply button

- this will be developed on on branch `9-message-reply`

10 - emojis

> As a user I can use emojis in messages

- [ ] Messages are formatted to support emojis

- this will be developed on on branch `10-emojis`

11 - user login

> As a user I can login using a password

- [ ] create password prompt
- [ ] login panel

`type: react`

- [ ] use `input` and `button` to create password
- [ ] use `input` and `button` for login section

`type: css`

- [ ] use `button` and `input` class to style login section

- this will be developed on on branch `11-user-login`

12 - email confirmation

> As a user I can receive email confirmation of registration

- [ ] email input section
- [ ] email confirmation feature

- this will be developed on on branch `12-email-confirmation`

13 - notifications

> As a user I can receive notifications when messages are sent

- [ ] notification feature

- this will be developed on on branch `13-notifications`

14 - message seen

> As a user I can see when messages are seen

- [ ] message seen display

- this will be developed on on branch `14-message-seen`

15 - light/dark mode

> As a user i can switch between light and dark mode

- [ ] dark/light mode switch

- this will be developed on on branch `15-light/dark-mode`
