const SERVE = false; // 是否使用线上服务器

const HOST = "https://blog-test-psi-nine.vercel.app/"; // 线上服务器地址，如果不使用请留空

const BLOG_NAME = "MyBlog"; // 个人网站名字

const BLOG_URL = "https://blog-test-psi-nine.vercel.app/"; // 个人网站链接（请填写完整链接）

const GITHUB = "https://github.com/wangziyu01"; // 右上角 Github 图标链接，留空不显示

const BACKGROUND_IMG_URL = "https://api.dujin.org/bing/1920.php"; // 背景图片url，默认为必应每日图片（第三方接口）

const SORT_DATA = [
  { sortId: 1, title: "主页" },
//   { sortId: 2, title: "分类2" }
]; // 网站分类列表，请按照API.md中'/getSort'接口中返回的data格式填写

const RECORD_NUMBER = ""; // 网站备案号，留空不显示

const PAGES_DATA = [
  {
    pageId: 1,
    sortId: 1,
    title: "网站主页",
    subtitle: "博客主页",
    url: "https://blog-test-psi-nine.vercel.app/",
    icon: ""
  },
//   {
//     pageId: 2,
//     sortId: 2,
//     title: "主标题",
//     subtitle: "副标题",
//     url: "https://blog-test-psi-nine.vercel.app/",
//     icon: ""
//   }
]; // 网站分类列表，请按照API.md中'/getPages'接口中返回的data格式填写

const SLOGAN = [
  "欢迎拜访",
  "歡迎拜訪",
  "Welcome, my friend!",
  "嗨，别来无恙",
  "不忘初心，一生浪漫",
  "流星，落花，萤火",
  "马车越空，晃荡越响",
  "Welcome my blog!"
]; // 在Logo下方显示的标题

const FOOTER_INFO = false; // 是否显示抽屉右下角的文字信息

export default {
  SERVE,
  HOST,
  BLOG_URL,
  BLOG_NAME,
  SORT_DATA,
  PAGES_DATA,
  SLOGAN,
  GITHUB,
  FOOTER_INFO,
  BACKGROUND_IMG_URL,
  RECORD_NUMBER
};
