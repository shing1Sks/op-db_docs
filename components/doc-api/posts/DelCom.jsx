import React from "react";
import Req_Res from "../Req_Res.jsx";

function DelCom() {
  const statement =
    "Give the comment id to be removed from the post!";
  const req = [
    "{",
    '  "comment": "665c7ae3---a339a725",',
    "}",
  ]; 
  const res = [
    '{',
    '    "statusCode": 200,',
    '    "data": "comment deleted successfully",',
    '    "message": "success" ',
    '    "success": true',
    '}'
  ];
  const type = "DELETE";
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

export default DelCom;
