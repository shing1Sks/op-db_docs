import React from "react";
import Req_Res from "../Req_Res";

function Like() {
  const statement =
    "Give the post id you wish to be liked by the logged in user !";
  const req = ["{", '  "post": "665c7ae359c54f1aa339a725",', "}"];
  const res = [
    '{',
    '    "statusCode": 200,',
    '    "data": "post liked successfully",',
    '    "message": {',
    '        "_id": "665c7------9a725",',
    '        "title": "my first test",',
    '        "content": "lorem ipsum",',
    '        "images": [',
    '            "http://res.cloudinary.com/----/image/upload/---/ezw---slgj.jpg",',
    '            "http://res.cloudinary.com/----/image/upload/---/z8sz---t4md6di5yn.jpg"',
    '        ],',
    '        "owner": "665b66e----06d9c52fa8a",',
    '        "views": 14,',
    '        "comments": [],',
    '        "likes": [',
    '            "665b66eac---52fa8a",',
    '            "665eed----af403cfa"',
    '        ],',
    '        "project": "test",',
    '        "createdAt": "2024-06-02T14:00:03.351Z",',
    '        "updatedAt": "2024-06-04T16:44:16.837Z",',
    '        "__v": 6',
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
  const endpoint = "http://localhost:8000/api/posts/like";
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

export default Like;
