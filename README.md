[![Website](https://img.shields.io/website?url=http%3A%2F%2Fbyr-navi.com&logo=linode)][website]
[![License](https://img.shields.io/github/license/shifeilong/FL-Navi)][license]
[![Last Commit](https://img.shields.io/github/last-commit/shifeilong/FL-Navi?logo=github)][commit]
[![Donate](https://img.shields.io/badge/Donate-Coffee-A5673F?logo=buymeacoffee)][donate]

# <img height="32" src="https://flpro.cn/images/logo-dark.svg" alt="Icon" /> FL-Navi
一个轻量级且可配置的导航框架（用于FL）

## :triangular_ruler: 设计理念
这个项目是一个基于[Jekyll][jekyll]的静态网站，使用[Fomantic UI][fomantic] Web框架构建，**之前**通过[GitHub Pages][github-pages]部署（目前在[HuaweiYun][HuaweiYun] flexus服务器上运行）。

整个项目的设计和构建具有很高的配置和自定义灵活性。
你可以通过修改`_config.yml`文件进行配置，或者通过替换`_data`文件夹中的`*.yml`文件内容来自定义数据。

## :book: 小教程
对于初学者来说，没有一个简单的方法。
为了高效理解这个项目，最好的方式是从Jekyll的[文档][jekyll-doc]和Fomantic UI的[文档][fomantic-doc]开始。

在开始之前，你应该具备以下基本知识：

- <img height="16" src="https://unpkg.com/simple-icons/icons/html5.svg" alt="Icon" /> HTML
- <img height="16" src="https://unpkg.com/simple-icons/icons/css3.svg" alt="Icon" /> CSS
- <img height="16" src="https://unpkg.com/simple-icons/icons/javascript.svg" alt="Icon" /> JavaScript
- <img height="16" src="https://unpkg.com/simple-icons/icons/jquery.svg" alt="Icon" /> jQuery
- YAML格式
- [Liquid][liquid]（由 <img height="16" src="https://unpkg.com/simple-icons/icons/shopify.svg" alt="Icon" /> Shopify 提供的模板引擎）
- <img height="16" src="https://unpkg.com/simple-icons/icons/ruby.svg" alt="Icon" /> Ruby
- <img height="16" src="https://unpkg.com/simple-icons/icons/linux.svg" alt="Icon" /> UNIX/Linux Shell 脚本

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

---

# **npm安装了一些本地内容**

以下是该项目所需安装的所有包及其指定版本：

## 包列表

1. **fomantic-ui**  
   版本: `^2.9.2`  
   用于现代网页设计的CSS框架。

2. **jquery**  
   版本: `^3.7.0`  
   一个快速、小巧且功能丰富的JavaScript库。

3. **dayjs**  
   版本: `^1.11.8`  
   轻量级的日期处理库。

4. **js-cookie**  
   版本: `^3.0.5`  
   用于处理Cookies的简单JavaScript API。

5. **jquery-countdown**  
   版本: `^2.2.0`  
   一个jQuery倒计时插件。

6. **echarts**  
   版本: `^4.9.0`  
   强大的交互式图表库。

7. **js-url**  
   版本: `^2.3.0`  
   用于操作URL的JavaScript库。

8. **countup.js**  
   版本: `^1.9.3`  
   一个轻量级的JavaScript库，用于数字计数动画。

## 安装

你可以使用以下命令在packages目录下逐个安装这些包，或者使用 `/assets/install-packages.sh` 脚本一次性安装所有包：

如果你想手动在指定的文件夹下分别安装每个包，可以按如下步骤操作：

### 1. **进入目标文件夹并初始化项目**

对于每个文件夹（例如 `package-fomantic-ui`），你需要首先进入该文件夹并初始化一个新的 Node.js 项目：

```bash
cd package-fomantic-ui
npm init -y
```

这个命令会在该文件夹下创建一个新的 `package.json` 文件。然后，你可以开始安装所需的包。

### 2. **安装所需的包**

进入每个文件夹后，使用 `npm install` 命令安装对应的包。以下是每个文件夹的安装步骤：

#### 在 `package-fomantic-ui` 文件夹下安装 `fomantic-ui`：

```bash
npm install fomantic-ui@^2.9.2
```

#### 在 `package-jquery` 文件夹下安装 `jquery`：

```bash
cd ../package-jquery
npm init -y
npm install jquery@^3.7.0
```

#### 在 `package-dayjs` 文件夹下安装 `dayjs`：

```bash
cd ../package-dayjs
npm init -y
npm install dayjs@^1.11.8
```

#### 在 `package-js-cookie` 文件夹下安装 `js-cookie`：

```bash
cd ../package-js-cookie
npm init -y
npm install js-cookie@^3.0.5
```

#### 在 `package-jquery-countdown` 文件夹下安装 `jquery-countdown`：

```bash
cd ../package-jquery-countdown
npm init -y
npm install jquery-countdown@^2.2.0
```

#### 在 `package-echarts` 文件夹下安装 `echarts`：

```bash
cd ../package-echarts
npm init -y
npm install echarts@^4.9.0
```

#### 在 `package-js-url` 文件夹下安装 `js-url`：

```bash
cd ../package-js-url
npm init -y
npm install js-url@^2.3.0
```

#### 在 `package-countup` 文件夹下安装 `countup.js`：

```bash
cd ../package-countup
npm init -y
npm install countup.js@^1.9.3
```

### 3. **检查安装情况**

在每个文件夹中，你可以使用 `npm list` 来检查包是否成功安装：

```bash
npm list
```

---


# **`.travis.yml` 简述**

这是一个Travis CI配置文件，用于自动化构建和测试Ruby项目。

## 主要内容：

- **Ruby版本与语言**：
  
  ```yaml
  language: ruby
  rvm:
  - 2.6.3
  ```
  指定使用Ruby 2.6.3版本。
  
- **构建前脚本**：
  ```yaml
  before_script:
  - chmod +x ./script/cibuild
  ```
  给`./script/cibuild`脚本赋予执行权限。

- **执行构建脚本**：
  ```yaml
  script: ./script/cibuild
  ```
  执行`./script/cibuild`进行构建。

- **触发分支**：
  ```yaml
  branches:
  only:
  - master
  ```
  仅在`master`分支上触发构建。

- **环境变量**：
  ```yaml
  env:
  global:
  - NOKOGIRI_USE_SYSTEM_LIBRARIES=true
  ```
  设置环境变量，告知Nokogiri使用系统库。

- **安装依赖**：
  ```yaml
  addons:
  apt:
  packages:
  - libcurl4-openssl-dev
  ```
  安装`libcurl4-openssl-dev`依赖。

- **构建配置**：
  ```yaml
  sudo: false
  ```
  使用无`sudo`权限的构建环境。

- **缓存**：
  ```yaml
  cache: bundler
  ```
  缓存`bundler`依赖，加速构建。

---

这个文件配置了基本的CI流程，确保每次提交时自动构建和测试。

---

# **`.gitignore` 文件说明**

该 `.gitignore` 文件用于指定Git在版本控制中忽略哪些文件和目录。以下是该文件的内容及其作用：

## 1. **Jekyll相关**

```gitignore
# Jekyll
_site/
.sass-cache/
.jekyll-cache/
.jekyll-metadata
```
- 忽略Jekyll生成的临时文件和缓存目录。
  - `_site/`：Jekyll构建的网站输出目录。
  - `.sass-cache/`：Sass编译缓存。
  - `.jekyll-cache/`：Jekyll生成的缓存文件。
  - `.jekyll-metadata`：Jekyll的元数据文件。

## 2. **Ruby相关**

```gitignore
# Ruby
Gemfile.lock
```
- 忽略`Gemfile.lock`，通常用于避免将锁定的依赖版本推送到版本控制中（视情况而定，有些项目可能希望保留它）。

## 3. **macOS系统文件**

```gitignore
# macOS
.DS_Store
```
- 忽略`.DS_Store`文件，这是macOS系统在每个目录中自动创建的隐藏文件，用于存储文件夹的自定义属性。

## 4. **Windows系统文件**

```gitignore
# Windows
Thumbs.db
```
- 忽略`Thumbs.db`，这是Windows操作系统生成的缩略图缓存文件。

---

这个 `.gitignore` 文件帮助确保Git忽略不必要的临时文件和系统文件，保持版本控制的干净和高效。

---

# **`Gemfile` 文件说明**

该 `Gemfile` 文件用于指定Ruby项目的依赖库，并确保它们在不同的环境中被一致地安装。以下是该文件的内容及其作用：

## 1. **源**

```ruby
source "https://rubygems.org"
```
- `source`指定了依赖项的源，这里使用的是`https://rubygems.org`，这是Ruby的默认宝石库。

## 2. **Jekyll及相关插件**

```ruby
gem "jekyll"
gem "jekyll-seo-tag"
gem "jekyll-sitemap"
gem "html-proofer"
```
- `gem "jekyll"`：添加Jekyll作为静态网站生成器。
- `gem "jekyll-seo-tag"`：Jekyll SEO插件，用于优化网站的SEO标签。
- `gem "jekyll-sitemap"`：Jekyll Sitemap插件，自动生成网站的XML站点地图。
- `gem "html-proofer"`：用于检查Jekyll站点中链接、图像等的有效性。

## 3. **Webrick**

```ruby
gem "webrick", "~> 1.8"
```
- `gem "webrick", "~> 1.8"`：Webrick是一个简单的HTTP服务器，Jekyll使用它来本地测试网站。这里指定了Webrick的版本为`1.8`，并允许使用任何小版本更新。

---

通过该 `Gemfile`，你可以确保项目的依赖库在开发和生产环境中一致，方便管理和自动化安装。使用`bundle install`命令可以安装这些依赖。

---
# **`Gemfile.lock` 文件说明**

`Gemfile.lock` 是一个由 `Bundler`（Ruby的包管理工具）自动生成的文件，它记录了当前项目的确切依赖版本。当你运行 `bundle install` 时，`Gemfile.lock` 会生成并锁定 `Gemfile` 中列出的所有宝石（gem）及其子依赖的确切版本。

#### 主要作用：

1. **确保一致性**：
   - `Gemfile.lock` 保证了在不同开发环境和生产环境中，所有依赖的版本一致。无论谁在项目中运行 `bundle install`，都会安装相同版本的库。

2. **锁定依赖版本**：
   - `Gemfile.lock` 文件列出了每个宝石的版本号以及它们的依赖关系，这避免了不同环境中使用不同版本的依赖，避免了潜在的兼容性问题。

3. **提高安装速度**：
   - 由于 `Gemfile.lock` 已经锁定了依赖的版本，`bundle install` 不需要每次都解析依赖树，安装过程会更加快速。

#### 文件内容：
`Gemfile.lock` 会包含类似以下的信息：

```text
GEM
  remote: https://rubygems.org/
  specs:
    addressable (2.8.7)
      public_suffix (>= 2.0.2, < 7.0)
    base64 (0.2.0)
    colorator (1.1.0)
    concurrent-ruby (1.3.5)
    csv (3.3.2)
    em-websocket (0.5.3)
      eventmachine (>= 0.12.9)
      http_parser.rb (~> 0)
    ethon (0.16.0)
      ffi (>= 1.15.0)
    eventmachine (1.2.7)
    ffi (1.17.1)
    ffi (1.17.1-arm64-darwin)
    ffi (1.17.1-x86_64-darwin)
    forwardable-extended (2.6.0)
    google-protobuf (3.25.6-arm64-darwin)
    google-protobuf (3.25.6-x86_64-darwin)
    google-protobuf (3.25.6-x86_64-linux)
    html-proofer (4.4.3)
      addressable (~> 2.3)
      mercenary (~> 0.3)
      nokogiri (~> 1.13)
      parallel (~> 1.10)
      rainbow (~> 3.0)
      typhoeus (~> 1.3)
      yell (~> 2.0)
      zeitwerk (~> 2.5)
    http_parser.rb (0.8.0)
    i18n (1.14.7)
      concurrent-ruby (~> 1.0)
    jekyll (4.4.1)
      addressable (~> 2.4)
      base64 (~> 0.2)
      colorator (~> 1.0)
      csv (~> 3.0)
      em-websocket (~> 0.5)
      i18n (~> 1.0)
      jekyll-sass-converter (>= 2.0, < 4.0)
      jekyll-watch (~> 2.0)
      json (~> 2.6)
      kramdown (~> 2.3, >= 2.3.1)
      kramdown-parser-gfm (~> 1.0)
      liquid (~> 4.0)
      mercenary (~> 0.3, >= 0.3.6)
      pathutil (~> 0.9)
      rouge (>= 3.0, < 5.0)
      safe_yaml (~> 1.0)
      terminal-table (>= 1.8, < 4.0)
      webrick (~> 1.7)
    jekyll-sass-converter (3.0.0)
      sass-embedded (~> 1.54)
    jekyll-seo-tag (2.8.0)
      jekyll (>= 3.8, < 5.0)
    jekyll-sitemap (1.4.0)
      jekyll (>= 3.7, < 5.0)
    jekyll-watch (2.2.1)
      listen (~> 3.0)
    json (2.9.1)
    kramdown (2.5.1)
      rexml (>= 3.3.9)
    kramdown-parser-gfm (1.1.0)
      kramdown (~> 2.0)
    liquid (4.0.4)
    listen (3.9.0)
      rb-fsevent (~> 0.10, >= 0.10.3)
      rb-inotify (~> 0.9, >= 0.9.10)
    mercenary (0.4.0)
    nokogiri (1.17.2-arm64-darwin)
      racc (~> 1.4)
    nokogiri (1.17.2-x86_64-darwin)
      racc (~> 1.4)
    nokogiri (1.17.2-x86_64-linux)
      racc (~> 1.4)
    parallel (1.26.3)
    pathutil (0.16.2)
      forwardable-extended (~> 2.6)
    public_suffix (6.0.1)
    racc (1.8.1)
    rainbow (3.1.1)
    rake (13.2.1)
    rb-fsevent (0.11.2)
    rb-inotify (0.11.1)
      ffi (~> 1.0)
    rexml (3.4.0)
    rouge (4.5.1)
    safe_yaml (1.0.5)
    sass-embedded (1.69.5)
      google-protobuf (~> 3.23)
      rake (>= 13.0.0)
    sass-embedded (1.69.5-arm64-darwin)
      google-protobuf (~> 3.23)
    sass-embedded (1.69.5-x86_64-darwin)
      google-protobuf (~> 3.23)
    terminal-table (3.0.2)
      unicode-display_width (>= 1.1.1, < 3)
    typhoeus (1.4.1)
      ethon (>= 0.9.0)
    unicode-display_width (2.6.0)
    webrick (1.9.1)
    yell (2.2.2)
    zeitwerk (2.6.18)

PLATFORMS
  arm64-darwin
  x86_64-darwin
  x86_64-linux

DEPENDENCIES
  html-proofer
  jekyll
  jekyll-seo-tag
  jekyll-sitemap
  webrick (~> 1.8)

BUNDLED WITH
   2.5.23
```

- **GEM** 部分列出了所有的依赖及其版本。
- **PLATFORMS** 部分表明依赖适用的Ruby平台。
- **DEPENDENCIES** 列出了项目中需要的主要gem。
- **BUNDLED WITH** 记录了使用的Bundler版本。

#### 总结：
- `Gemfile.lock` 是确保Ruby项目依赖版本一致的关键文件，避免了因不同开发者安装不同版本的库而导致的问题。
- **不应手动修改 `Gemfile.lock`**，它是由 `Bundler` 管理的文件。
- 在团队协作中，应该将 `Gemfile.lock` 文件提交到版本控制中，以保证团队成员间使用相同版本的依赖。


## :construction: 部署

### GitHub Pages（推荐）
GitHub Pages 由 Jekyll 提供支持，因此如果您正在寻找一种零麻烦、零成本的解决方案，GitHub Pages 是托管 Jekyll 驱动网站的绝佳方式。[这里][jekyll-gihub-pages]是有关如何托管 Jekyll 网站的详细信息。

### 手动部署
Jekyll 会将您的静态站点生成到 `_site` 目录中。您可以将此目录中的内容转移到几乎任何托管服务提供商来使您的网站上线。[这里][jekyll-manual-deployment]是一些手动实现这一目标的方法。

## :hearts: 分享爱心
我花了很多时间和精力来让 **FL-Navi** 变得更棒。如果您喜欢它，您可以请我喝一杯咖啡。每一杯都会帮助我！我保证这是一个值得的投资。

[在这里捐赠][donate]。

## :rocket: 由以下技术驱动
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
- <img height="16" src="https://unpkg.com/simple-icons/icons/letsencrypt.svg" alt="Icon" /> [Let’s Encrypt][letsencrypt]
- <img height="16" src="https://www.svgrepo.com/show/306343/linode.svg" alt="Icon" /> [Linode][linode]

---

该项目是基于 GitHub 上的 [BYR-Navi 项目](https://github.com/BYR-Navi/BYR-Navi) 进行修改和定制的。BYR-Navi 是一个开源项目，旨在为用户提供导航和其他实用功能。我们对其进行了相应的调整和更新，以满足特定需求或改进用户体验。感谢原作者的贡献，我们在此基础上进行了二次开发，并对部分功能进行了优化和新增。更多详细信息可以访问原项目的 [GitHub 页面](https://github.com/BYR-Navi/BYR-Navi)。

---

## :copyright: 许可
[MIT 许可][license]

[website]: https://www.flpro.cn/ "网站"
[license]: https://github.com/BYR-Navi/BYR-Navi/blob/master/LICENSE "许可"
[commit]: https://github.com/shifeilong/FL-Navi/commits/main "最后一次提交"
[donate]: https://www.flpro.cn/donate/ "捐赠"

[fomantic]: https://fomantic-ui.com/ "Fomantic UI"
[fomantic-doc]: https://fomantic-ui.com/introduction/getting-started.html "Fomantic UI 文档"
[jquery]: https://jquery.com/ "jQuery"
[shields]: https://shields.io/ "Shields.io"
[day]: https://github.com/iamkun/dayjs "Day.js"
[countup]: https://inorganik.github.io/countUp.js/ "CountUp.js"
[countdown]: https://hilios.github.io/jQuery.countdown/ "The Final Countdown 插件"
[js-cookie]: https://github.com/js-cookie/js-cookie "JavaScript Cookie"
[js-url]: https://github.com/websanova/js-url "url.js"
[unpkg]: https://unpkg.com/ "UNPKG"
[hitokoto]: https://hitokoto.cn/api "Hitokoto"
[echarts]: https://echarts.apache.org/ "ECharts"
[matomo]: https://matomo.org/ "Matomo"
[geoip]: https://www.maxmind.com/ "GeoIP"
[jekyll]: https://jekyllrb.com/ "Jekyll"
[jekyll-doc]: https://jekyllrb.com/docs/home/ "Jekyll 文档"
[jekyll-installation]: https://jekyllrb.com/docs/installation/ "Jekyll 安装"
[jekyll-gihub-pages]: https://jekyllrb.com/docs/github-pages/ "Jekyll GitHub Pages"
[jekyll-manual-deployment]: https://jekyllrb.com/docs/deployment/manual/ "Jekyll 手动部署"
[jekyll-ruby-101-gems]: https://jekyllrb.com/docs/ruby-101/#gems "Jekyll Ruby 101 Gems"
[jekyll-ruby-101-bundler]: https://jekyllrb.com/docs/ruby-101/#bundler "Jekyll Ruby 101 Bundler"
[liquid]: https://shopify.github.io/liquid/ "Liquid"
[localhost-4000]: http://localhost:4000 "本地服务器（端口：4000）"
[github-pages]: https://pages.github.com/ "GitHub Pages"
[letsencrypt]: https://letsencrypt.org/ "Let’s Encrypt"
[HuaweiYun]: https://www.huaweicloud.com/product/flexus.html "HuaweiYun"