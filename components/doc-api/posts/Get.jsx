import React from "react";
import Req_Res from "../Req_Res.jsx";

function Get() {
  const statement =
    "Get all posts -- pagination coming soon  !";
  const req = [
   "NONE REQUIRED !"
  ];
  const res = [
    '{',
    '    "statusCode": 200,',
    '    "data": "posts fetched successfully",',
    '    "message": [',
    '        {',
    '            "_id": "665c----aa339a725",',
    '            "title": "my first test",',
    '            "content": "lorem ipsum",',
    '            "images": [',
    '                "http://res.cloudinary.com/---/image/upload/---/ezwj3ps----0xslgj.jpg",',
    '                "http://res.cloudinary.com/---/image/upload/---/z8sznpa----d6di5yn.jpg"',
    '            ],',
    '            "owner": {',
    '                "_id": "665b66e----52fa8a",',
    '                "username": "shing1sks"',
    '            },',
    '            "views": 14,',
    '            "comments": [],',
    '            "likes": [',
    '                {',
    '                    "_id": "665b66eac866306d9c52fa8a",',
    '                    "username": "shing1sks"',
    '                }',
    '            ],',
    '            "project": "test",',
    '            "createdAt": "2024-06-02T14:00:03.351Z",',
    '            "updatedAt": "2024-06-02T14:43:14.375Z",',
    '            "__v": 5',
    '        },',
    '        {',
    '            "_id": "665f3d24a----403d1f",',
    '            "title": "my first test",',
    '            "content": "lorem ipsum",',
    '            "images": [',
    '                "http://res.cloudinary.com/---/image/upload/---/mjxfo---hpcw6.jpg",',
    '                "http://res.cloudinary.com/---/image/upload/---/jlcsv--zel-kehi.jpg"',
    '            ],',
    '            "owner": {',
    '                "_id": "665eedc0-----f403cfa",',
    '                "username": "shing2sks"',
    '            },',
    '            "views": 1,',
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
  const endpoint = "http://localhost:8000/api/posts/get-posts";
  return <Req_Res statement={statement} type={type} req={req} res={res} model={postModel} endpoint={endpoint} code={postCode} />;
}

export default Get;
