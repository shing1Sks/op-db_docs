import React from "react";
import Req_Res from "../Req_Res";

function Search() {
  const statement =
    "Give the query you wish to search all posts containing the query will be returned -- your results will have the project filter allowing you to use this same db setup for other projects!";
  const req = [
    "{",
    '  "query": "first",',
    "}",
  ]; 
  const res = [
    '{',
    '    "statusCode": 200,',
    '    "data": "posts fetched successfully",',
    '    "message": [',
    '        {',
    '            "_id": "665c7ae3---9a725",',
    '            "title": "my first test",',
    '            "content": "lorem ipsum",',
    '            "images": [',
    '                "http://res.cloudinary.com/---/image/upload/---/ez---ewk0xslgj.jpg",',
    '                "http://res.cloudinary.com/---/image/upload/---/z8sz---4md6di5yn.jpg"',
    '            ],',
    '            "owner": "665b66---52fa8a",',
    '            "views": 14,',
    '            "comments": [],',
    '            "likes": [',
    '                "665b66---9c52fa8a"',
    '            ],',
    '            "project": "test",',
    '            "createdAt": "2024-06-02T14:00:03.351Z",',
    '            "updatedAt": "2024-06-04T16:27:47.744Z",',
    '            "__v": 5',
    '        },',
    '        {',
    '            "_id": "665f3d----403d1f",',
    '            "title": "my first test",',
    '            "content": "lorem ipsum test",',
    '            "images": [',
    '                "http://res.cloudinary.com/---/image/upload/----/mjxfo2w--pcw6.jpg",',
    '                "http://res.cloudinary.com/---/image/upload/----/jlcsv---elyhkehi.jpg"',
    '            ],',
    '            "owner": "665eedc---af403cfa",',
    '            "views": 1,',
    '            "comments": [],',
    '            "likes": [],',
    '            "project": "test",',
    '            "createdAt": "2024-06-04T16:13:24.292Z",',
    '            "updatedAt": "2024-06-04T16:33:11.869Z",',
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
  const endpoint = "http://localhost:8000/api/posts/update";
  return <Req_Res statement={statement} type={type} req={req} res={res} model={postModel} endpoint={endpoint} code={postCode} />;
}

export default Search;
