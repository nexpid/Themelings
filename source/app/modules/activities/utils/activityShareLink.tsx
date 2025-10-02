// app/modules/activities/utils/activityShareLink.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/activityShareLink.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function resolveActivityShareMessageContent(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 0;
            var1 = var4[var1];
            var7 = undefined;
            var3 = var3.bind(var7)(var1);
            var1 = var3.parseQuestsEmbedCode;
            var4 = var1.bind(var3)(var6);
            var3 = null;
            var1 = var6;
            if(!(var3 == var4)) { _fun0001_ip = 159; continue _fun0001 }
 47:
            var3 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 1;
            var4 = var8[var2];
            var4 = var3.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.formatToMarkdownString;
            var2 = var8[var2];
            var2 = var3.bind(var7)(var2);
            var2 = var2.t;
            var3 = var2.dZJpdH;
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
 159:
            return var1;
        }
    };
    var3['resolveActivityShareMessageContent'] = var2;
    return var1;
})();