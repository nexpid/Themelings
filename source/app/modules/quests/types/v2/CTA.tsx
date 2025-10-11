// app/modules/quests/types/v2/CTA.tsx
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
    var2 = 'modules/quests/types/v2/CTA.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function questCtaConfigFromServer(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var5 = null;
            if(!(var5 == var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = undefined;
            return var1;
case 2:
            var1 = {};
            var3 = var2.android;
            var6 = var5 != var3;
            var4 = undefined;
            if(!var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = {};
            var7 = var2.android;
            var7 = var7.android_app_id;
            var6['androidAppId'] = var7;
            var4 = var6;
case 4:
            var1['android'] = var4;
            var4 = var2.ios;
            var4 = var5 != var4;
            var3 = undefined;
            if(!var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = {};
            var5 = var2.ios;
            var5 = var5.ios_app_id;
            var4['iosAppId'] = var5;
            var3 = var4;
case 6:
            var1['ios'] = var3;
            var3 = var2.link;
            var1['link'] = var3;
            var3 = var2.button_label;
            var1['buttonLabel'] = var3;
            var2 = var2.subtitle;
            var1['subtitle'] = var2;
            return var1;
        }
    };
    var3['questCtaConfigFromServer'] = var2;
    return var1;
})();