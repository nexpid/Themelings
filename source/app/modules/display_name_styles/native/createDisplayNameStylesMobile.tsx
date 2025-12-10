// app/modules/display_name_styles/native/createDisplayNameStylesMobile.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/display_name_styles/native/createDisplayNameStylesMobile.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createDisplayNameStylesMobile(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var5 = arg2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 2;
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
            var4 = _closure1_slot2;
            var3 = var4.displayNameStylesEnabled;
case 2:
            var4 = _closure1_slot3;
            var2 = var4.getCurrentUser;
            var2 = var2.bind(var4)();
            var6 = var8.displayNameStyles;
            var4 = null;
            var7 = var4 != var2;
            if(!var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = var2.id;
            var8 = var8.id;
            var7 = var9 === var8;
case 4:
            if(!var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var2.displayNameStyles;
case 6:
            var7 = var4 == var5;
            var2 = undefined;
            if(var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = var5.displayNameStyles;
            var7 = var4 == var5;
            var2 = undefined;
            if(var7) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            var2 = var5.fontId;
case 8:
            if(!(var4 == var2)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var7 = var4 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var5 = var6.fontId;
case 13:
            var2 = var5;
case 11:
            if(!(var4 != var2)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            if(var3) { _fun0001_ip = 17; continue _fun0001 }
case 15:
            return var1;
case 17:
            var1 = {};
            var1['fontId'] = var2;
            return var1;
        }
    };
    var3['createDisplayNameStylesMobile'] = var2;
    return var1;
})();