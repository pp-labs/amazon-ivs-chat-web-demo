// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

/* eslint-disable */

// Amazon IVS Playback URL
// Replace this with your own Amazon IVS Playback URL
export const PLAYBACK_URLS = [
    "https://3d26876b73d7.us-west-2.playback.live-video.net/api/video/v1/us-west-2.913157848533.channel.rkCBS9iD1eyd.m3u8",
    "https://33f4cdf4ab6a.eu-west-1.playback.live-video.net/api/video/v1/eu-west-1.236051089985.channel.yXwjc87r4iBk.m3u8",
    "https://33f4cdf4ab6a.eu-west-1.playback.live-video.net/api/video/v1/eu-west-1.236051089985.channel.g9DZezEHEu9p.m3u8"];

// Chat websocket address
// The AWS region that your room is created in. For example, `us-west-2`.
export const CHAT_REGION = "eu-west-1";

// Chat API URL
// The Amazon IVS Chat backend endpoint. You must deploy the serverless backend to get this value.
export const API_URL = "https://u743lxvk2i.execute-api.eu-west-1.amazonaws.com/Prod";

// Chat room id (ARN)
export const CHAT_ROOM_IDS = [
    "arn:aws:ivschat:eu-west-1:173207199951:room/neOmA1cd76Zq",
    "arn:aws:ivschat:eu-west-1:236051089985:room/6LT2errr2DaV",
    "arn:aws:ivschat:eu-west-1:236051089985:room/LzyCustC6J8T"];