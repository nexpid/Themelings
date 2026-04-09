// app/modules/ads/QuestHomeHeroCta.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = dependencyMap;
    var1 = 0;
    var4 = var2[var1];
    var2 = require;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = 'modules/ads/QuestHomeHeroCta.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function questHomeHeroCtaFromServer(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var1 = {};
            var2 = var4.url;
            var1['url'] = var2;
            var2 = var4.button_label;
            var1['buttonLabel'] = var2;
            var2 = var4.android;
            var5 = null;
            var6 = var5 != var2;
            var3 = undefined;
            if(!var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = {};
            var7 = var4.android;
            var7 = var7.android_app_id;
            var6['androidAppId'] = var7;
            var3 = var6;
case 2:
            var1['android'] = var3;
            var3 = var4.ios;
            var3 = var5 != var3;
            var2 = undefined;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = {};
            var4 = var4.ios;
            var4 = var4.ios_app_id;
            var3['iosAppId'] = var4;
            var2 = var3;
case 4:
            var1['ios'] = var2;
            return var1;
        }
    };
    var3['questHomeHeroCtaFromServer'] = var2;
    return var1;
})();