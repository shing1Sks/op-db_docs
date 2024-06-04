import React from "react";
import Req_Res from "../Req_Res.jsx";

function AddCom() {
  const statement =
    "Give the post id and text of the comment to be added!";
  const req = [
    "{",
    '  "post": "665c7ae3---a339a725",',
    '  "text":"very good work!!"',
    "}",
  ]; 
  const res = [
    '{',
    '    "statusCode": 200,',
    '    "data": "comment added successfully",',
    '    "message": {',
    '        "user": "665eedc0ad32eae0af403cfa",',
    '        "text": "very good work!!",',
    '        "_id": "665f46e7ad32eae0af403d46",',
    '        "post": "665c7ae359c54f1aa339a725",',
    '        "createdAt": "2024-06-04T16:55:03.806Z",',
    '        "updatedAt": "2024-06-04T16:55:03.806Z",',
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
  const endpoint = "http://localhost:8000/api/posts/comments";
  return <Req_Res statement={statement} type={type} req={req} res={res} model={postModel} endpoint={endpoint} code={postCode} />;
}

export default AddCom;
