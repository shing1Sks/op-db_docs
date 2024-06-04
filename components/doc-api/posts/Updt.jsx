import React from "react";
import Req_Res from "../Req_Res";

function Updt() {
  const statement =
    "Edit posts crated by the logged in user by providing the index of the post you wish to edit -- index is in rference to the sequence of get request post !";
  const req = [
    "{",
    '  "index": 0,',
    '  "content": "lorem ipsum test",',
    "}",
  ]; 
  const res = [
    '{',
    '    "statusCode": 200,',
    '    "data": "post updated successfully",',
    '    "message": {',
    '        "_id": "665f3d----f403d1f",',
    '        "title": "my first test",',
    '        "content": "lorem ipsum test",',
    '        "images": [',
    '            "http://res.cloudinary.com/---/image/upload/---/mjxfo---cw6.jpg",',
    '            "http://res.cloudinary.com/---/image/upload/---/jlcsv5---yhkehi.jpg"',
    '        ],',
    '        "owner": "665e-----cfa",',
    '        "views": 1,',
    '        "comments": [],',
    '        "likes": [],',
    '        "project": "test",',
    '        "createdAt": "2024-06-04T16:13:24.292Z",',
    '        "updatedAt": "2024-06-04T16:33:11.869Z",',
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
  const endpoint = "http://localhost:8000/api/posts/update";
  return <Req_Res statement={statement} type={type} req={req} res={res} model={postModel} endpoint={endpoint} code={postCode} />;
}

export default Updt;
