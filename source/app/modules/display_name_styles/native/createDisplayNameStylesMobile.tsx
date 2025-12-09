// app/modules/display_name_styles/native/createDisplayNameStylesMobile.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/display_name_styles/native/createDisplayNameStylesMobile.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createDisplayNameStylesMobile(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var6 = var4.bind(var1)(var3);
            var4 = var6.isDisplayNameStylesMobileChatEnabled;
            var3 = {};
            var7 = 'createDisplayNameStylesMobile';
            var3['location'] = var7;
            var3 = var4.bind(var6)(var3);
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot2;
            var3 = var2.displayNameStylesEnabled;
case 2:
            var4 = null;
            var6 = var4 == var5;
            var2 = undefined;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var5.displayNameStyles;
            var6 = var4 == var5;
            var2 = undefined;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var2 = var5.fontId;
case 4:
            if(!(var4 == var2)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var5 = arg1;
            var6 = var5.displayNameStyles;
            var7 = var4 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var5 = var6.fontId;
case 9:
            var2 = var5;
case 7:
            if(!(var4 != var2)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            if(var3) { _fun0001_ip = 13; continue _fun0001 }
case 11:
            return var1;
case 13:
            var1 = {};
            var1['fontId'] = var2;
            return var1;
        }
    };
    var3['createDisplayNameStylesMobile'] = var2;
    return var1;
})();