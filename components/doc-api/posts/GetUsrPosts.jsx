import React from "react";
import Req_Res from "../Req_Res";

function GetUsrPosts() {
  const statement =
    "get posts created by the logged in user !";
  const req = [
   "NONE REQUIRED !"
  ];
  const res = [
    '{',
    '    "statusCode": 200,',
    '    "data": "posts fetched successfully",',
    '    "message": [',
    '        {',
    '            "_id": "665f33-----d1f",',
    '            "title": "my first test",',
    '            "content": "lorem ipsum",',
    '            "images": [',
    '                "http://res.cloudinary.com/-----/image/upload/----/mjxfo---6.jpg",',
    '                "http://res.cloudinary.com/----/image/upload/-----/jlcsv5----hkehi.jpg"',
    '            ],',
    '            "owner": "665eed----c0ad33cfa",',
    '            "views": 0,',
    '            "comments": [],',
    '            "likes": [],',
    '            "project": "test",',
    '            "createdAt": "2024-06-04T16:13:24.292Z",',
    '            "updatedAt": "2024-06-04T16:13:24.292Z",',
    '            "__v": 0',
    '        }',
    '    ],',
    '    "success": true',
    '}'
  ];
  const type = "GET";
  const postModel = [
    "Post",
    "title",
    "content",
    "images",
    "owner",
    "views",
    "comments",
    "likes",
    "project",
    "createdAt",
    "updatedAt",
  ];
  const postCode = [
    "const schema = new mongoose.Schema(",
    "  {",
    "    title: { type: String, required: true },",
    "    content: { type: String, required: true },",
    "    images: [{ type: String }],",
    "    owner: {",
    "      type: mongoose.Schema.Types.ObjectId,",
    "      ref: 'User',",
    "      required: true,",
    "    },",
    "    views: { type: Number, default: 0 },",
    "    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],",
    "    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],",
    "    project: { type: String, required: true },",
    "  },",
    "  { timestamps: true }",
    ");",
  ];
  const endpoint = "http://localhost:8000/api/posts/get-user-posts";
  return <Req_Res statement={statement} type={type} req={req} res={res} model={postModel} endpoint={endpoint} code={postCode} />;
}

export default GetUsrPosts;
