// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

/* eslint-disable */

// Amazon IVS Playback URL
// Replace this with your own Amazon IVS Playback URL
export const PLAYBACK_URLS = [
    "https://1fae4fcf1b24.eu-central-1.playback.live-video.net/api/video/v1/eu-central-1.173207199951.channel.mgJueYhypnR0.m3u8",
    "https://1fae4fcf1b24.eu-central-1.playback.live-video.net/api/video/v1/eu-central-1.173207199951.channel.9qWktB3VPkOP.m3u8",
    "https://1fae4fcf1b24.eu-central-1.playback.live-video.net/api/video/v1/eu-central-1.173207199951.channel.mviEVrUtR6Nn.m3u8",
    "https://1fae4fcf1b24.eu-central-1.playback.live-video.net/api/video/v1/eu-central-1.173207199951.channel.U11RkJmJhg7h.m3u8",
    "https://1fae4fcf1b24.eu-central-1.playback.live-video.net/api/video/v1/eu-central-1.173207199951.channel.ncohsk92Kcmn.m3u8"];

// Chat websocket address
// The AWS region that your room is created in. For example, `us-west-2`.
export const CHAT_REGION = "eu-west-1";

// Chat API URL
// The Amazon IVS Chat backend endpoint. You must deploy the serverless backend to get this value.
// DEV (PPL Account)
// export const API_URL = "https://u743lxvk2i.execute-api.eu-west-1.amazonaws.com/Prod";
// PROD (PPL Account)
export const API_URL = "https://ucoib8jwtf.execute-api.eu-west-1.amazonaws.com/Prod";

// Chat room id (ARN)
export const CHAT_ROOM_IDS = [
    //"arn:aws:ivschat:eu-west-1:173207199951:room/neOmA1cd76Zq",
    "arn:aws:ivschat:eu-west-1:236051089985:room/6LT2errr2DaV",
    "arn:aws:ivschat:eu-west-1:236051089985:room/LzyCustC6J8T",
    "arn:aws:ivschat:eu-west-1:236051089985:room/9aCtN73vHf7L",
    "arn:aws:ivschat:eu-west-1:236051089985:room/ZtY0b75jXH4H",
    "arn:aws:ivschat:eu-west-1:236051089985:room/vPC3YwyASKJR"];