// app/modules/parent_tools/native/shareGuardianConnectLink.tsx
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
    var4 = var4.FAMILY_CENTER_REQUEST_QR_CODE_URL;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/parent_tools/native/shareGuardianConnectLink.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function shareGuardianConnectLink(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var6 = _closure1_slot3;
            var5 = var3.id;
            var1 = undefined;
            var4 = arg2;
            var9 = var6.bind(var1)(var5, var4);
            var10 = var3.globalName;
            var4 = null;
            if(!(var4 == var10)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = var3.username;
case 2:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 1;
            var3 = var11[var3];
            var5 = var7.bind(var1)(var3);
            var4 = var5.showShareActionSheet;
            var3 = {};
            var6 = 2;
            var6 = var11[var6];
            var6 = var7.bind(var1)(var6);
            var8 = var6.intl;
            var7 = var8.formatToPlainString;
            var6 = _closure1_slot1;
            var2 = 3;
            var2 = var11[var2];
            var2 = var6.bind(var1)(var2);
            var6 = var2.lVD5Nd;
            var2 = {};
            var2['username'] = var10;
            var2['url'] = var9;
            var2 = var7.bind(var8)(var6, var2);
            var3['message'] = var2;
            var2 = 'Family Center Connect Guardian';
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['shareGuardianConnectLink'] = var2;
    return var1;
})();