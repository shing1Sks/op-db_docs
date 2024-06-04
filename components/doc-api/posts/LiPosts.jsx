import React from "react";
import Req_Res from "../Req_Res.jsx";

function LiPosts() {
  const statement = "Get all the posts liked by the logged in user !";
  const req = [" NONE REQUIRED !"];
  const res = [
    "{",
    '    "statusCode": 200,',
    '    "data": "posts fetched successfully",',
    '    "message": [',
    "        {",
    '            "_id": "665c7ae35--1aa339a725",',
    '            "title": "my first test",',
    '            "content": "lorem ipsum",',
    '            "images": [',
    '                "http://res.cloudinary.com/---/image/upload/---/ezwj---k0xslgj.jpg",',
    '                "http://res.cloudinary.com/---/image/upload/---/z8sz---4md6di5yn.jpg"',
    "            ],",
    '            "owner": "665b66eac--52fa8a",',
    '            "views": 14,',
    '            "comments": [],',
    '            "likes": [',
    '                "665b66eac--52fa8a",',
    '                "665eedc0ad32--f403cfa"',
    "            ],",
    '            "project": "test",',
    '            "createdAt": "2024-06-02T14:00:03.351Z",',
    '            "updatedAt": "2024-06-04T16:52:37.229Z",',
    '            "__v": 8',
    "        }",
    "    ],",
    '    "success": true',
    "}",
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
  const endpoint = "http://localhost:8000/api/posts/unlike";
  return (
    <Req_Res
      statement={statement}
      type={type}
      req={req}
      res={res}
      model={postModel}
      endpoint={endpoint}
      code={postCode}
    />
  );
}

export default LiPosts;
