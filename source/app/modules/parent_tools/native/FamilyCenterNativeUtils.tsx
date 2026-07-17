// app/modules/parent_tools/native/FamilyCenterNativeUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.FAMILY_CENTER_LINK_REQUEST_REGEX;
    var _closure1_slot4 = var7;
    var4 = var4.FamilyCenterAction;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot6 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/parent_tools/native/FamilyCenterNativeUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = 'family-center-request-modal';
    var3['FAMILY_CENTER_REQUEST_MODAL_KEY'] = var4;
    var4 = function handleFamilyCenterQRCodeScan(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = var3.match;
            var1 = _closure1_slot4;
            var3 = var2.bind(var3)(var1);
            var1 = null;
            if(!(var1 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = 1;
            var8 = var3[var2];
            var2 = 2;
            var3 = var3[var2];
            var7 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 3;
            var6 = var4[var2];
            var2 = undefined;
            var11 = var7.bind(var2)(var6);
            var10 = var11.track;
            var6 = _closure1_slot6;
            var9 = var6.FAMILY_CENTER_ACTION;
            var6 = {};
            var12 = _closure1_slot5;
            var12 = var12.ScanQRCode;
            var6['action'] = var12;
            var6['selected_teen_id'] = var8;
            var12 = arg2;
            var6['source'] = var12;
            var6 = var10.bind(var11)(var9, var6);
            var6 = 4;
            var6 = var4[var6];
            var9 = var7.bind(var2)(var6);
            var6 = var9.setPendingConnection;
            var6 = var6.bind(var9)(var8, var3);
            var6 = 5;
            var6 = var4[var6];
            var7 = var7.bind(var2)(var6);
            var6 = var7.pushLazy;
            var9 = _closure1_slot0;
            var5 = 7;
            var5 = var4[var5];
            var9 = var9.bind(var2)(var5);
            var5 = 6;
            var5 = var4[var5];
            var4 = var4.paths;
            var5 = var9.bind(var2)(var5, var4);
            var4 = {};
            var4['userId'] = var8;
            var4['linkCode'] = var3;
            var3 = 'family-center-request-modal';
            var3 = var6.bind(var7)(var5, var4, var3);
            return var2;
case 2:
            return var1;
        }
    };
    var3['handleFamilyCenterQRCodeScan'] = var4;
    var2 = function resumeFamilyCenterConnection() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = _closure1_slot3;
            var1 = var2.getPendingConnection;
            var7 = var1.bind(var2)();
            var1 = null;
            var1 = var1 != var7;
            if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var4 = 5;
            var6 = var2[var4];
            var9 = undefined;
            var10 = var5.bind(var9)(var6);
            var8 = var10.popWithKey;
            var6 = 'family-center-request-modal';
            var8 = var8.bind(var10)(var6);
            var4 = var2[var4];
            var5 = var5.bind(var9)(var4);
            var4 = var5.pushLazy;
            var8 = _closure1_slot0;
            var3 = 7;
            var3 = var2[var3];
            var8 = var8.bind(var9)(var3);
            var3 = 6;
            var3 = var2[var3];
            var2 = var2.paths;
            var3 = var8.bind(var9)(var3, var2);
            var2 = {};
            var8 = var7.teenId;
            var2['userId'] = var8;
            var7 = var7.linkCode;
            var2['linkCode'] = var7;
            var2 = var4.bind(var5)(var3, var2, var6);
            var1 = true;
case 4:
            return var1;
        }
    };
    var3['resumeFamilyCenterConnection'] = var2;
    return var1;
})();