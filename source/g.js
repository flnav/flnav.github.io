(function () {
    if (typeof Fingerprint2 === "undefined") {
        console.error("Fingerprint2 不存在，当前页面可能还没加载到对应脚本。");
        return;
    }

    if (typeof Fingerprint2.get !== "function") {
        console.error("Fingerprint2.get 不存在。");
        return;
    }

    if (typeof Fingerprint2.x64hash128 !== "function") {
        console.error("Fingerprint2.x64hash128 不存在。");
        return;
    }

    Fingerprint2.get(function (components) {
        try {
            // ===== 原网页中的 details =====
            var details = "";
            for (var index in components) {
                var obj = components[index];
                var line = obj.key + " = " + String(obj.value).substr(0, 100);
                details += line + "\n";
            }

            // ===== 原网页中的 murmur =====
            var murmur = Fingerprint2.x64hash128(
                components.map(function (pair) {
                    return pair.value;
                }).join(),
                31
            );

            // ===== 原网页中的 details_s =====
            var details_s = "";
            for (var index2 in components) {
                var obj2 = components[index2];
                if (
                    obj2.key == "deviceMemory" ||
                    obj2.key == "screenResolution" ||
                    obj2.key == "availableScreenResolution"
                ) {
                    continue;
                }
                var line2 = obj2.key + " = " + String(obj2.value).substr(0, 100);
                details_s += line2 + "\n";
            }

            // ===== 原网页中的 murmur_s =====
            var murmur_s = Fingerprint2.x64hash128(details_s, 31);

            // ===== 原网页中的 murmur_md5 =====
            var murmur_md5;
            if (typeof hex_md5 === "function") {
                murmur_md5 = hex_md5(details_s);
            } else {
                murmur_md5 = "[当前页面没有 hex_md5 函数]";
            }

            // ===== 输出结果 =====
            console.log("===== Fingerprint Result =====");
            console.log("murmur =", murmur);
            console.log("murmur_s =", murmur_s);
            console.log("murmur_md5 =", murmur_md5);
            console.log("details =\n" + details);
            console.log("details_s =\n" + details_s);

            // 方便你后面直接取
            window.__fp_result__ = {
                components: components,
                details: details,
                details_s: details_s,
                murmur: murmur,
                murmur_s: murmur_s,
                murmur_md5: murmur_md5
            };

            console.log("结果已保存到 window.__fp_result__");
        } catch (e) {
            console.error("计算失败：", e);
        }
    });
})();