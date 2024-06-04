import React from "react";
import Req_Res from "../Req_Res.jsx";

function Create() {
  const statement =
    "Create a post from the logged in User !";
  const req = [
    "{",
    '  "title": "my first test",',
    '  "content": "lorem ipsum",',
    '  "images": CAN BE MULTIPLE IMAGES !,',
    "}",
  ];
  const res = [
    '{',
    '    "statusCode": 201,',
    '    "data": "post created successfully",',
    '    "message": {',
    '        "title": "my first test",',
    '        "content": "lorem ipsum",',
    '        "images": [',
    '            "http://res.cloudinary.com/----/image/upload/----/IMG1.jpg",',
    '            "http://res.cloudinary.com/----/image/upload/----/IMG2.jpg"',
    '        ],',
    '        "owner": "-------",',
    '        "views": 0,',
    '        "comments": [],',
    '        "likes": [],',
    '        "project": "test",',
    '        "_id": "665f3d24add1f",',
    '        "createdAt": "2024-06-04T16:13:24.292Z",',
    '        "updatedAt": "2024-06-04T16:13:24.292Z",',
    '        "__v": 0',
    '    },',
    '    "success": true',
    '}'
  ];  
  const type = "POST";
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
  const endpoint = "http://localhost:8000/api/posts/create";
  return <Req_Res statement={statement} type={type} req={req} res={res} model={postModel} endpoint={endpoint} code={postCode} />;
}

export default Create;
