// lib/http.js

// 通过 axios 处理请求
const axios = require('axios')
const { REPO_ORGS, REPOS_ORG } = require('./constants');

axios.interceptors.response.use(res => {
  return res.data;
})


/**
 * 获取模板列表
 * @returns Promise
 */
async function getRepoList() {
  return axios.get(REPO_ORGS + 'repos')
}

/**
 * 获取版本信息
 * @param {string} repo 模板名称
 * @returns Promise
 */
async function  getTagList(repo) {
  return axios.get(`${REPOS_ORG}${repo}/tags`)
}

module.exports = {
  getRepoList,
  getTagList
}
