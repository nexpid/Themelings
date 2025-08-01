// app/modules/parent_tools/native/FamilyCenterNativeUtils.tsx
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
    var7 = var4.FAMILY_CENTER_LINK_REQUEST_REGEX;
    var _closure1_slot3 = var7;
    var4 = var4.FamilyCenterAction;
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/parent_tools/native/FamilyCenterNativeUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var2 = var3.match;
            var1 = _closure1_slot3;
            var3 = var2.bind(var3)(var1);
            var1 = null;
            if(!(var1 !== var3)) { _fun0001_ip = 183; continue _fun0001 }
 30:
            var2 = 1;
            var8 = var3[var2];
            var2 = 2;
            var7 = var3[var2];
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var5 = var3[var2];
            var2 = undefined;
            var11 = var6.bind(var2)(var5);
            var10 = var11.track;
            var5 = _closure1_slot5;
            var9 = var5.FAMILY_CENTER_ACTION;
            var5 = {};
            var12 = _closure1_slot4;
            var12 = var12.ScanQRCode;
            var5['action'] = var12;
            var5['selected_teen_id'] = var8;
            var12 = arg2;
            var5['source'] = var12;
            var5 = var10.bind(var11)(var9, var5);
            var5 = 3;
            var5 = var3[var5];
            var6 = var6.bind(var2)(var5);
            var5 = var6.pushLazy;
            var9 = _closure1_slot0;
            var4 = 5;
            var4 = var3[var4];
            var9 = var9.bind(var2)(var4);
            var4 = 4;
            var4 = var3[var4];
            var3 = var3.paths;
            var4 = var9.bind(var2)(var4, var3);
            var3 = {};
            var3['userId'] = var8;
            var3['linkCode'] = var7;
            var3 = var5.bind(var6)(var4, var3);
            return var2;
 183:
            return var1;
        }
    };
    var3['handleFamilyCenterQRCodeScan'] = var2;
    return var1;
})();