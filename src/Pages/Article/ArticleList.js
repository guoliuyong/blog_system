/*
 * @Author: your name
 * @Date: 2022-02-22 16:30:24
 * @LastEditTime: 2022-02-22 19:01:44
 * @LastEditors: LAPTOP-L472H14P
 * @Description: In User Settings Edit
 * @FilePath: \blog_system\src\Pages\Article\ArticleList.js
 */

import React, { useState, useEffect } from 'react'
import request from '../../api/index'
const ArticleList = () => {
  useEffect(() => {
    request({
      url: 'v1/article/list',
      method: 'GET',
    })
  })

  return <div>文章首页</div>
}
export default ArticleList
