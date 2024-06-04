import React from "react";
import Req_Res from "./Req_Res.jsx";

function GetD() {
  const statement =
    "Get the stored data of the user !";
  const req = [
    "NONE REQUIRED !"
  ];
  const res = [
    "{",
    '    "statusCode": 200,',
    '    "data": {',
    '        "age": "5",',
    '        "isChild": "yes",',
    "    },",
    '    "message": "data fetched",',
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
  const endpoint = "http://localhost:8000/api/user/get-stored-data";
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

export default GetD;
