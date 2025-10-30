// app/modules/activities/utils/activityShareLink.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.parseQuestsEmbedCode;
    var4 = new Array(1);
    var4[0] = var7;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/activityShareLink.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function resolveActivityShareMessageContent(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var2 = false;
            var _closure2_slot0 = var2;
            var5 = var6.replaceAll;
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 1;
            var3 = var7[var3];
            var7 = undefined;
            var3 = var4.bind(var7)(var3);
            var4 = var3.URL_REGEX;
            var3 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = arg1;
                    var _closure3_slot0 = var4;
                    var3 = _closure1_slot3;
                    var2 = var3.some;
                    var1 = function(arg1) {
                        var3 = _closure3_slot0;
                        var2 = arg1;
                        var1 = undefined;
                        var2 = var2.bind(var1)(var3);
                        var1 = null;
                        var1 = var1 != var2;
                        return var1;
                    };
                    var2 = var2.bind(var3)(var1);
                    if(!var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = true;
                    _closure2_slot0 = var1;
case 2:
                    var1 = var4;
                    if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var3 = var2.concat;
                    var2 = '`';
                    var1 = var3.bind(var2)(var4, var2);
case 4:
                    return var1;
                }
            };
            var6 = var5.bind(var6)(var4, var3);
            var3 = _closure2_slot0;
            var1 = var6;
            if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 2;
            var4 = var8[var2];
            var4 = var3.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.formatToMarkdownString;
            var2 = var8[var2];
            var2 = var3.bind(var7)(var2);
            var2 = var2.t;
            var3 = var2.dZJpdG;
            var2 = {};
            var7 = arg2;
            var7 = var7.name;
            var2['applicationName'] = var7;
            var7 = arg3;
            var2['link'] = var7;
            var5 = var4.bind(var5)(var3, var2);
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = '\n\n';
            var1 = var4.bind(var3)(var6, var2, var5);
case 6:
            return var1;
        }
    };
    var3['resolveActivityShareMessageContent'] = var2;
    return var1;
})();