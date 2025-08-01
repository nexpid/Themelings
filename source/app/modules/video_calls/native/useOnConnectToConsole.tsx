// app/modules/video_calls/native/useOnConnectToConsole.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var4 = function onConnectToConsole(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg2;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 2;
            var3 = var8[var3];
            var4 = undefined;
            var6 = var7.bind(var4)(var3);
            var5 = var6.UNSAFE_markDismissibleContentAsDismissed;
            var3 = 3;
            var3 = var8[var3];
            var3 = var7.bind(var4)(var3);
            var3 = var3.DismissibleContent;
            var3 = var3.DONUT_MOBILE_NUX;
            var3 = var5.bind(var6)(var3);
            var3 = var2.twoWayLink;
            if(!var3) { _fun0001_ip = 123; continue _fun0001 }
 72:
            var3 = var2.revoked;
            if(var3) { _fun0001_ip = 123; continue _fun0001 }
 81:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 6;
            var3 = var6[var3];
            var7 = var5.bind(var4)(var3);
            var6 = var7.beginConsoleTransfer;
            var5 = var2.type;
            var3 = arg1;
            var3 = var6.bind(var7)(var3, var5);
            return var4;
 123:
            var5 = var2.type;
            var3 = _closure1_slot5;
            var3 = var3.XBOX;
            if(!(var3 !== var5)) { _fun0001_ip = 229; continue _fun0001 }
 142:
            var3 = _closure1_slot5;
            var3 = var3.PLAYSTATION;
            if(!(var3 !== var5)) { _fun0001_ip = 172; continue _fun0001 }
 156:
            var3 = _closure1_slot5;
            var3 = var3.PLAYSTATION_STAGING;
            if(!(var3 !== var5)) { _fun0001_ip = 172; continue _fun0001 }
 170:
            return var4;
 172:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 5;
            var3 = var6[var3];
            var6 = var5.bind(var4)(var3);
            var5 = var6.showModal;
            var3 = _closure1_slot4;
            var7 = var3.CHANNEL_CALL;
            var3 = new Array(1);
            var3[0] = var7;
            var2 = var2.type;
            var2 = var5.bind(var6)(var3, var2);
            return var2;
 229:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 4;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.showModal;
            var1 = _closure1_slot4;
            var4 = var1.CHANNEL_CALL;
            var1 = new Array(1);
            var1[0] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.AnalyticsLocations;
    var _closure1_slot4 = var8;
    var5 = var5.PlatformTypes;
    var _closure1_slot5 = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/video_calls/native/useOnConnectToConsole.tsx';
    var5 = var6.bind(var7)(var5);
    var3['onConnectToConsole'] = var4;
    var2 = function useOnConnectToConsole(arg1, arg2) {
        var6 = arg1;
        var5 = arg2;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useCallback;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            var4 = _closure1_slot6;
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useOnConnectToConsole'] = var2;
    return var1;
})();