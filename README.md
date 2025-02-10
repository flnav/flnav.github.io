[![Build Status](https://img.shields.io/travis/com/BYR-Navi/BYR-Navi?logo=travisci)][travis-ci]
[![Website](https://img.shields.io/website?url=http%3A%2F%2Fbyr-navi.com&logo=linode)][website]
[![License](https://img.shields.io/github/license/BYR-Navi/BYR-Navi)][license]
[![Last Commit](https://img.shields.io/github/last-commit/BYR-Navi/BYR-Navi?logo=github)][commit]
[![Donate](https://img.shields.io/badge/Donate-Coffee-A5673F?logo=buymeacoffee)][donate]

# <img height="32" src="https://byr-navi.com/images/logo-dark.svg" alt="Icon" /> BYR-Navi
A Light-Weight and Configurable Navigation [Website][website] Framework (for BYR)

## :triangular_ruler: Design Philosophy
This project is a [Jekyll][jekyll]-powered website, which is built based on [Fomantic UI][fomantic] web framework, and deployed **previously** using [GitHub Pages][github-pages] (while currently running on a [Linode][linode] VPS).

The whole project is designed and built with high flexibility of configuration and customization.
You can either configure it by modifying the `_config.yml` file or customize it by replacing the content of the `*.yml` files in the `_data` folder with your own data.

## :book: A Tiny Tutorial
There is **no easy way for beginners** without essential background knowledge.
To be efficient, the best way to understand this project is to start with the Jekyll&rsquo;s [docs][jekyll-doc] and Fomantic UI&rsquo;s [docs][fomantic-doc].

Before you start, you should have some basic understanding of the following:

- <img height="16" src="https://unpkg.com/simple-icons/icons/html5.svg" alt="Icon" /> HTML
- <img height="16" src="https://unpkg.com/simple-icons/icons/css3.svg" alt="Icon" /> CSS
- <img height="16" src="https://unpkg.com/simple-icons/icons/javascript.svg" alt="Icon" /> JavaScript
- <img height="16" src="https://unpkg.com/simple-icons/icons/jquery.svg" alt="Icon" /> jQuery
- YAML format
- [Liquid][liquid] (Template Engine by <img height="16" src="https://unpkg.com/simple-icons/icons/shopify.svg" alt="Icon" /> Shopify)
- <img height="16" src="https://unpkg.com/simple-icons/icons/ruby.svg" alt="Icon" /> Ruby
- <img height="16" src="https://unpkg.com/simple-icons/icons/linux.svg" alt="Icon" /> UNIX/Linux Shell Script

### Quick Start

1. Install a full [Ruby development environment][jekyll-installation].

2. Install Jekyll and [bundler][jekyll-ruby-101-bundler] [gems][jekyll-ruby-101-gems].

```sh
gem install jekyll bundler
```

3. Clone the project from GitHub.

```sh
git clone https://github.com/BYR-Navi/BYR-Navi.git
```

4. Change into the project directory.

```sh
cd BYR-Navi
```

5. Install required gems in the `Gemfile` using Bundler.

```sh
bundle install
```

6. Build the site and make it available on a local server.

```sh
bundle exec jekyll serve
```

7. Now browse to [http://localhost:4000][localhost-4000].

## :construction: Deployment

### GitHub Pages (Recommended)
Sites on GitHub Pages are powered by Jekyll behind the scenes, so if you&rsquo;re looking for a zero-hassle, zero-cost solution, GitHub Pages are a great way to [host your Jekyll-powered website for free][jekyll-gihub-pages].

### Manual Deployment
Jekyll generates your static site to the `_site` directory by default. You can transfer the contents of this directory to almost any hosting provider to get your site live.
[Here][jekyll-manual-deployment] are some manual ways of achieving this.

## :hearts: Share the Love
I&rsquo;ve put a lot of time and effort into making **BYR-Navi** awesome.
If you love it, you can buy me a coffee.
Every cup helps!
I promise it will be a good investment.

Donate [here][donate].

## :rocket: Powered by
- [Fomantic UI][fomantic]
- <img height="16" src="https://unpkg.com/simple-icons/icons/jquery.svg" alt="Icon" /> [jQuery][jquery]
- <img height="16" src="https://unpkg.com/simple-icons/icons/shieldsdotio.svg" alt="Icon" /> [Shields.io][shields]
- [Day.js][day]
- [CountUp.js][countup]
- [jQuery.countdown][countdown]
- [JavaScript Cookie][js-cookie]
- [url.js][js-url]
- [UNPKG][unpkg]
- [Hitokoto][hitokoto]
- <img height="16" src="https://unpkg.com/simple-icons/icons/apacheecharts.svg" alt="Icon" /> [ECharts][echarts]
- <img height="16" src="https://unpkg.com/simple-icons/icons/matomo.svg" alt="Icon" /> [Matomo][matomo]
- [GeoIP][geoip]
- <img height="16" src="https://unpkg.com/simple-icons/icons/jekyll.svg" alt="Icon" /> [Jekyll][jekyll]
- <img height="16" src="https://unpkg.com/simple-icons/icons/letsencrypt.svg" alt="Icon" /> [Let&rsquo;s Encrypt][letsencrypt]
- <img height="16" src="https://unpkg.com/simple-icons/icons/linode.svg" alt="Icon" /> [Linode][linode]

## :copyright: License
[MIT License][license]

[travis-ci]: https://app.travis-ci.com/BYR-Navi/BYR-Navi "Travis CI"
[website]: https://byr-navi.com/ "Website"
[license]: https://github.com/BYR-Navi/BYR-Navi/blob/master/LICENSE "License"
[commit]: https://github.com/BYR-Navi/BYR-Navi/commits/master "Last Commit"
[donate]: https://byr-navi.com/donate/ "Donate"

[fomantic]: https://fomantic-ui.com/ "Fomantic UI"
[fomantic-doc]: https://fomantic-ui.com/introduction/getting-started.html "Fomantic UI Docs"
[jquery]: https://jquery.com/ "jQuery"
[shields]: https://shields.io/ "Shields.io"
[day]: https://github.com/iamkun/dayjs "Day.js"
[countup]: https://inorganik.github.io/countUp.js/ "CountUp.js"
[countdown]: https://hilios.github.io/jQuery.countdown/ "The Final Countdown plugin for jQuery"
[js-cookie]: https://github.com/js-cookie/js-cookie "JavaScript Cookie"
[js-url]: https://github.com/websanova/js-url "url.js"
[unpkg]: https://unpkg.com/ "UNPKG"
[hitokoto]: https://hitokoto.cn/api "Hitokoto"
[echarts]: https://echarts.apache.org/ "ECharts"
[matomo]: https://matomo.org/ "Matomo"
[geoip]: https://www.maxmind.com/ "GeoIP"
[jekyll]: https://jekyllrb.com/ "Jekyll"
[jekyll-doc]: https://jekyllrb.com/docs/home/ "Jekyll Docs"
[jekyll-installation]: https://jekyllrb.com/docs/installation/ "Jekyll Installation"
[jekyll-gihub-pages]: https://jekyllrb.com/docs/github-pages/ "Jekyll GitHub Pages"
[jekyll-manual-deployment]: https://jekyllrb.com/docs/deployment/manual/ "Jekyll Manual Deployment"
[jekyll-ruby-101-gems]: https://jekyllrb.com/docs/ruby-101/#gems "Jekyll Ruby 101 Gems"
[jekyll-ruby-101-bundler]: https://jekyllrb.com/docs/ruby-101/#bundler "Jekyll Ruby 101 Bundler"
[liquid]: https://shopify.github.io/liquid/ "Liquid"
[localhost-4000]: http://localhost:4000 "Local Host (Port: 4000)"
[github-pages]: https://pages.github.com/ "GitHub Pages"
[letsencrypt]: https://letsencrypt.org/ "Let&rsquo;s Encrypt"
[linode]: https://www.linode.com/ "Linode"



























# 安装教程--Create by Feilong

BYR-Navi是一个基于Fomantic UI的开源网站导航程序，支持在GitHub Pages或服务器上部署。

**本教程基于Ubuntu 22.04**

**Github地址** ： https://github.com/BYR-Navi/BYR-Navi

## 1、Ruby的安装

[下载 Ruby](https://www.ruby-lang.org/zh_cn/downloads/)

## 使用 apt-get 在 Ubuntu 22.04 上安装 Ruby

如果不能自己编译 Ruby，也不想使用第三方工具，可以使用系统中的包管理器安装 Ruby。

许多 Ruby 社区的成员强烈建议，应该使用第三方工具来安装 Ruby，不要用系统的包管理器。详细的优缺点超出了本页的讨论范畴，基本原因是大多数系统包管理器里的 Ruby 版本比较老。如果想使用最新的 Ruby 版本，要确保包的名称正确，或者使用后面列出的工具。

对于我们的应用使用apt-get包管理器安装的ruby版本完全够用，因此不需要复杂的第三方工具配置，直接执行

```shell
sudo apt-get update
sudo apt-get install ruby-full
执行下面的命令。发现3.0.2版本的ruby已经安装，gem版本为3.3.5
$ ruby -v
ruby 3.0.2p107 (2021-07-07 revision 0db68f0233) [x86_64-linux-gnu]
$ gem -v
3.3.5
```
### 解决权限问题

```shell
然后打开.bashrc
$ vim ~/.bashrc
在最后加入下面的内容
# Install Ruby Gems to ~/gems
export GEM_HOME="$HOME/gems"
export PATH="$HOME/gems/bin:$PATH"
执行下面的代码或者重启终端
$ source .bashrc
执行下面的代码查看环境是否被配置
$ gem env
```

### 解决gem使用过程中安装环境问题

```shell
执行命令安装基本编译工具
sudo apt-get install build-essential
```



## 2、用 RubyGems 安装 Jekyll

[欢迎 - Jekyll • 简单静态博客网站生成器](https://jekyllcn.com/docs/home/)

Jekyll 是一个简单的博客形态的静态站点生产机器。它有一个模版目录，其中包含原始文本格式的文档，通过一个转换器（如 [Markdown](http://daringfireball.net/projects/markdown/)）和我们的 [Liquid](https://github.com/Shopify/liquid/wiki) 渲染器转化成一个完整的可发布的静态网站，你可以发布在任何你喜爱的服务器上。Jekyll 也可以运行在 [GitHub Page](http://pages.github.com/) 上，也就是说，你可以使用 GitHub 的服务来搭建你的项目页面、博客或者网站，而且是**完全免费**的。

安装 Jekyll 的最好方式就是使用 [RubyGems](http://rubygems.org/pages/download). 你只需要打开终端输入以下命令就可以安装了：

```shell
$ gem install jekyll
```

所有的 Jekyll 的 gem 依赖包都会被自动安装，所以你完全不用去担心。如果你在安装中碰到了问题，请查看 [troubleshooting](https://jekyllcn.com/docs/troubleshooting/) 或者 [report an issue](https://github.com/jekyll/jekyll/issues/new) 那么 Jekyll 社区就会帮助你解决问题了。

## 3、用 RubyGems 安装 和bundler

Bundler 能够跟踪并安装所需的特定版本的 gem，以此来为 Ruby 项目提供一致的运行环境。
Bundler 是 Ruby 依赖管理的一根救命稻草，它可以保证你所要依赖的 gem 如你所愿地出现 在开发、测试和生产环境中。 利用 Bundler 启动项目简单到只用一条命令：`bundle install`。

```shell
$ gem install bundler
```

## 4、**安装FL-Navi**

从github拉去模板内容

```sh
git clone https://github.com/shifeilong/Fl-Navi.git
cd FL-Navi
```

## 5、安装依赖

```sh
bundle install
```

## 6、启动服务

```sh
bundle exec jekyll serve
```

此时，使用ip:4000访问程序，注意要开放4000端口！！！

这里除了可以使用命令行启动， **也可以直接将生成的_site文件夹丢到网站根目录访问。**

如果要修改导航相关页面的信息显示的话，也可以在_site文件夹中修改。

## 7、安装Matomo网站统计程序

*****************************************
