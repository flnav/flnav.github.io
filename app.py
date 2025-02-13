from flask import Flask, render_template, request, jsonify, send_from_directory
from ruamel.yaml import YAML
import os
from werkzeug.utils import secure_filename

# 初始化 Flask 应用
app = Flask(__name__)

# 配置静态文件目录
ASSETS_FOLDER = '/home/feilong/FL-Navi/assets'
IMAGES_FOLDER = '/home/feilong/FL-Navi/images'

# 自定义静态文件路由
@app.route('/assets/<path:filename>')
def serve_assets(filename):
    """提供 assets 文件夹中的静态文件"""
    return send_from_directory(ASSETS_FOLDER, filename)

@app.route('/images/<path:filename>')
def serve_images(filename):
    """提供 images 文件夹中的静态文件"""
    return send_from_directory(IMAGES_FOLDER, filename)

# 初始化 ruamel.yaml
yaml = YAML()
# 设置 YAML 文件的缩进格式（可选）
# yaml.indent(mapping=2, sequence=4, offset=2)  # 设置缩进

# 配置文件上传的路径
UPLOAD_FOLDER = 'images/linkimage'  # 图片保存的目录

# 确保上传目录存在
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

# 允许的图片格式
ALLOWED_EXTENSIONS = {
    'png',  # 可移植网络图形格式，常用于透明背景图片
    'jpg',  # JPEG图像格式，广泛用于照片和网页图片
    'jpeg',  # JPEG格式，常见的照片压缩格式，与jpg'相同
    'gif',  # 图形交换格式，支持动画
    'svg',  # 可缩放矢量图形格式，适合图标和图形设计
    'bmp',  # 位图图像格式，常用于不压缩的图像
    'tiff',  # 标签图像文件格式，适用于高质量图像，常用于印刷行业
    'webp',  # Google开发的图像格式，提供比JPEG更高的压缩率，同时支持透明度
    'ico',  # 图标文件格式，常用于网页和操作系统的图标
    'heif'  # 高效图像文件格式，适用于现代设备（如iPhone），支持高质量图像压缩
}


# 加载 YAML 数据
def load_links():
    """
    从 `data/links.yml` 文件中加载 YAML 数据并返回。
    """
    with open('_data/links.yml', 'r', encoding='utf-8') as file:
        data = yaml.load(file)
    return data


# 保存 YAML 数据
def save_links(data):
    """
    将数据保存到 `data/links.yml` 文件中。
    """
    with open('_data/links.yml', 'w', encoding='utf-8') as file:
        yaml.dump(data, file)


def allowed_file(filename):
    """检查文件扩展名是否合法"""
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


# 首页路由
@app.route('/')
def index():
    """
    渲染首页模板，并将加载的 YAML 数据传递给模板。
    """
    links_data = load_links()
    return render_template('index.html', sections=links_data)


# 新增路由：获取单个链接数据
@app.route('/get_link', methods=['GET'])
def get_link():
    category = request.args.get('category')
    name = request.args.get('name')

    links_data = load_links()
    for section in links_data:
        for cat in section['categories']:
            if cat['name'] == category:
                for link in cat['links']:
                    if link['name'] == name:
                        return jsonify({
                            'success': True,
                            'link': {
                                'name': link.get('name', ''),
                                'icon': link.get('icon', ''),
                                'style': link.get('style', ''),
                                'url': link.get('url', ''),
                                'image': link.get('image', '')
                            }
                        })
    return jsonify({'success': False, 'message': '链接不存在'})


# 修改后的编辑路由
@app.route('/edit_link', methods=['POST'])
def edit_link():
    # 获取表单数据
    original_category = request.form['original_category']
    original_name = request.form['original_name']
    new_category = request.form.get('category', original_category)
    new_name = request.form['name']
    new_icon = request.form['icon']
    new_style = request.form['style']
    new_url = request.form['url']
    # 获取 new_image，若未传值，默认为空字符串
    new_image = request.form.get('image_url', '')
    
    # 处理本地上传图片
    file = request.files['image']
    if file and file.filename and allowed_file(file.filename):  # 检查文件名是否为空
        filename = secure_filename(file.filename)  # 确保文件名安全
        file_path = os.path.join(UPLOAD_FOLDER, filename)
        file.save(file_path)  # 保存文件
        new_image = file_path  # 将图片路径保存到链接数据中
    # 处理图片 URL（直接使用）
    elif 'image_url' in request.form and request.form['image_url']:
        new_image = request.form['image_url']  # 直接使用图片 URL

    # 创建新的链接
    new_link = {
        'name': new_name,
        'icon': new_icon,
        'style': new_style,
        'url': new_url,
        'image': new_image if new_image else ''  # 如果没有新的图片，使用空字符串
    }

    # 移除空值的元素
    new_link = {key: value for key, value in new_link.items() if value}

    print(new_link)

    # 加载数据
    links_data = load_links()

    if new_category == original_category:
        # 查找原始链接
        for section in links_data:
            for category in section['categories']:
                if category['name'] == original_category:
                    for link in category['links']:
                        if link['name'] == original_name:
                            link.update(new_link)  # 使用 new_link 来更新链接信息
                            # 去掉 link 中比 new_link 多的元素
                            for key in list(link.keys()):
                                if key not in new_link:
                                    del link[key]
                            save_links(links_data)
                            return jsonify({'success': True})

    if new_category != original_category:
        if original_category == '' and original_name == '':  # 如果 original_category 为空
            # 找到对应的 section 和 category
            for section in links_data:
                for category in section['categories']:
                    if category['name'] == new_category:
                        # 添加新链接
                        category['links'].append(new_link)
                        break
            # 保存更新后的数据
            save_links(links_data)
            return jsonify({'success': True})

        else:  # 如果 original_category 不为空
            target_link = None
            # 查找并移除原分类中的链接
            for section in links_data:
                for category in section['categories']:
                    if category['name'] == original_category:
                        for link in category['links']:
                            if link['name'] == original_name:
                                # 去掉 link 中比 new_link 多的元素
                                for key in list(link.keys()):
                                    if key not in new_link:
                                        del link[key]
                                target_link = link
                                category['links'].remove(link)
                                break
            # 更新链接属性
            if target_link:
                target_link.update(new_link)
                # 移动到新分类
                for section in links_data:
                    for category in section['categories']:
                        if category['name'] == new_category:
                            category['links'].append(target_link)
                            break
                # 保存更新后的数据
                save_links(links_data)
                return jsonify({'success': True})

    # 链接不存在的情况
    return jsonify({'success': False, 'message': '链接不存在'})


@app.route('/move_link', methods=['POST'])
def move_link():
    """
    处理跨分类拖移链接的请求。
    1. 从表单中获取拖移的链接信息。
    2. 找到源分类和目标分类，并将链接从源分类移动到目标分类。
    3. 更新目标分类的链接顺序。
    4. 保存更新后的数据。
    """
    # 获取表单数据
    from_category = request.form['fromCategory']
    to_category = request.form['toCategory']
    link_name = request.form['linkName']
    new_order = request.form.getlist('order[]')  # 获取新的顺序

    # 加载现有数据
    links_data = load_links()

    # 找到源分类和目标分类
    link_to_move = None
    for section in links_data:
        for category in section['categories']:
            if category['name'] == from_category:
                # 找到并移除链接
                link_to_move = next((link for link in category['links'] if link['name'] == link_name), None)
                if link_to_move:
                    category['links'].remove(link_to_move)
    for section in links_data:
        for category in section['categories']:
            if category['name'] == to_category:
                # 添加链接到目标分类
                category['links'].append(link_to_move)
                # 更新目标分类的链接顺序
                if new_order:
                    category['links'] = [link for link_name in new_order for link in category['links'] if link['name'] == link_name]

    # 保存更新后的数据
    save_links(links_data)

    return jsonify({'success': True})


# 删除链接路由
@app.route('/delete_link', methods=['POST'])
def delete_link():
    """
    处理删除链接的请求。
    1. 从表单中获取要删除的链接信息。
    2. 找到对应的分类并删除该链接。
    3. 保存更新后的数据。
    """
    # 获取要删除的链接信息
    category_name = request.form['category']
    link_name = request.form['name']

    # 加载现有数据
    links_data = load_links()

    # 找到对应的 section 和 category
    for section in links_data:
        for category in section['categories']:
            if category['name'] == category_name:
                # 删除链接
                category['links'] = [link for link in category['links'] if link['name'] != link_name]
                break

    # 保存更新后的数据
    save_links(links_data)

    return jsonify({'success': True})


# 启动 Flask 应用
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=4500)
