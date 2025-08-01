// app/modules/keyword_filter/KeywordFilterSettingsUtils.tsx
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
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/keyword_filter/KeywordFilterSettingsUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 0;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var3 = var2.KeywordFilterSettings;
            var2 = var3.getSetting;
            var3 = var2.bind(var3)();
            var4 = var3.profanity;
            var2 = var1 !== var4;
            if(!var2) { _fun0001_ip = 56; continue _fun0001 }
 53:
            var2 = var4;
 56:
            var5 = var3.slurs;
            var4 = var1 !== var5;
            if(!var4) { _fun0001_ip = 72; continue _fun0001 }
 69:
            var4 = var5;
 72:
            var3 = var3.sexualContent;
            if(var2) { _fun0001_ip = 84; continue _fun0001 }
 81:
            var2 = var4;
 84:
            if(var2) { _fun0001_ip = 100; continue _fun0001 }
 87:
            var1 = var1 !== var3;
            if(!var1) { _fun0001_ip = 97; continue _fun0001 }
 94:
            var1 = var3;
 97:
            var2 = var1;
 100:
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0001_ip = 112; continue _fun0001 }
 109:
            var1 = var2;
 112:
            return var1;
        }
    };
    var3['getKeywordFilterSetting'] = var2;
    return var1;
})();