import React from "react";
import Req_Res from "./Req_Res";

function GetUser() {
  const statement =
    "Fetch all user details seemlessly -- works only when user is logged in !";
  const req = ["NONE REQUIRED !"];
  const res = [
    "{",
    '    "statusCode": 200,',
    '    "data": {',
    '        "user": {',
    '            "_id": "665eedc0ad----403cfa",',
    '            "username": "shing2sks",',
    '            "project": "test",',
    '            "fullname": "shreyash kumar singh",',
    '            "email": "",',
    '            "score": 0,',
    '            "avatar": "http://res.cloudinary.com/----/image/upload/-----/-----jpg",',
    '            "likes": [],',
    '            "comments": [],',
    '            "posts": [],',
    '            "followers": [],',
    '            "createdAt": "2024-06-04T10:34:40.735Z",',
    '            "updatedAt": "2024-06-04T10:34:40.993Z",',
    '            "__v": 0,',
    '            "refreshtoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjVlZWRjMGFkMzJlYWUwYWY0MDNjZmEiLCJpYXQiOjE3MmV4cCI6MTcxODM2MTI4MH0.jWdj07zubK4wAuVYiUvWkv9V3eVItUnvq9LN_htbyjU"',
    "        },",
    "    },",
    '    "message": "user found",',
    '    "success": true',
    "}",
  ];
  const type = "GET";
  const userModel = [
    "User",
    "username",
    "project",
    "fullname",
    "password",
    "email",
    "refreshtoken",
    "score",
    "avatar",
    "userdata",
    "likes",
    "comments",
    "posts",
    "followers",
    "createdAt",
    "updatedAt",
  ];
  const userCode = [
    "const schema = new mongoose.Schema(",
    "  {",
    "    username: {",
    "      type: String,",
    "      required: [true, 'Please provide a username'],",
    "      unique: true,",
    "      lowercase: true,",
    "      trim: true,",
    "      index: true,",
    "    },",
    "    project: {",
    "      type: String,",
    "      required: [true, 'Please provide a project name'],",
    "      lowercase: true,",
    "      trim: true,",
    "      index: true,",
    "    },",
    "    fullname: {",
    "      type: String,",
    "      required: [true, 'Please provide a fullname'],",
    "      lowercase: true,",
    "      trim: true,",
    "      index: true,",
    "    },",
    "    password: {",
    "      type: String,",
    "      required: [true, 'Please provide a password'],",
    "    },",
    "    email: {",
    "      type: String,",
    "      lowercase: true,",
    "      trim: true,",
    "    },",
    "    refreshtoken: {",
    "      type: String,",
    "    },",
    "    score: {",
    "      type: Number,",
    "      default: 0,",
    "    },",
    "    avatar: {",
    "      type: String,",
    "    },",
    "    userdata: {",
    "      type: Object,",
    "    },",
    "    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],",
    "    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],",
    "    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],",
    "    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],",
    "  },",
    "  { timestamps: true }",
    ");",
  ];
  const endpoint = "http://localhost:8000/api/user/get-user";
  return (
    <Req_Res
      statement={statement}
      type={type}
      req={req}
      res={res}
      model={userModel}
      endpoint={endpoint}
      code={userCode}
    />
  );
}

export default GetUser;
