// app/modules/parent_tools/hooks/useConnectGuardianGate.tsx
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
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/parent_tools/hooks/useConnectGuardianGate.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useConnectGuardianGate() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 3;
            var1 = var9[var1];
            var7 = undefined;
            var6 = var2.bind(var7)(var1);
            var5 = var6.useStateFromStoresObject;
            var1 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = {};
                var3 = _closure1_slot5;
                var2 = var3.getLinkCode;
                var2 = var2.bind(var3)();
                var1['linkCode'] = var2;
                var2 = var3.getLinkCodeExpiresAt;
                var2 = var2.bind(var3)();
                var1['expiresAt'] = var2;
                return var1;
            };
            var1 = var5.bind(var6)(var2, var1);
            var6 = var1.linkCode;
            var5 = var1.expiresAt;
            var11 = _closure1_slot4;
            var1 = var11.useState;
            var14 = false;
            var1 = var1.bind(var11)(var14);
            var13 = _closure1_slot3;
            var8 = 2;
            var1 = var13.bind(var7)(var1, var8);
            var10 = 0;
            var2 = var1[var10];
            var12 = 1;
            var1 = var1[var12];
            var _closure2_slot0 = var1;
            var1 = var11.useState;
            var1 = var1.bind(var11)(var14);
            var8 = var13.bind(var7)(var1, var8);
            var1 = var8[var10];
            var8 = var8[var12];
            var _closure2_slot1 = var8;
            var8 = var11.useRef;
            var8 = var8.bind(var11)(var10);
            var _closure2_slot2 = var8;
            var10 = var11.useCallback;
            var8 = function() {
                var4 = _closure2_slot2;
                var3 = var4.current;
                var3 = var3 + 1;
                var4['current'] = var3;
                var _closure3_slot0 = var3;
                var4 = _closure2_slot0;
                var1 = undefined;
                var3 = false;
                var3 = var4.bind(var1)(var3);
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 4;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.getLinkCodeForCurrentUser;
                var5 = var3.bind(var4)();
                var4 = var5.then;
                var3 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var3 = _closure3_slot0;
                        var2 = _closure2_slot2;
                        var2 = var2.current;
                        if(!(var3 === var2)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                        var4 = _closure2_slot0;
                        var3 = undefined;
                        var2 = false;
                        var2 = var4.bind(var3)(var2);
                        var2 = _closure2_slot1;
                        var1 = true;
                        var1 = var2.bind(var3)(var1);
case 2:
                        var1 = undefined;
                        return var1;
                    }
                };
                var4 = var4.bind(var5)(var3);
                var3 = var4.catch;
                var2 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var3 = _closure3_slot0;
                        var2 = _closure2_slot2;
                        var2 = var2.current;
                        if(!(var3 === var2)) { _fun0003_ip = 4; continue _fun0003 }
case 3:
                        var3 = _closure2_slot0;
                        var2 = undefined;
                        var1 = true;
                        var1 = var3.bind(var2)(var1);
case 4:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var4 = new Array(0);
            var4 = var10.bind(var11)(var8, var4);
            var8 = _closure1_slot1;
            var3 = 5;
            var3 = var9[var3];
            var3 = var8.bind(var7)(var3);
            var3 = var3.bind(var7)(var4);
            if(var2) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            if(var1) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var1 = {};
            var2 = 'loading';
            var1['state'] = var2;
            _fun0001_ip = 9; continue _fun0001;
case 7:
            var2 = null;
            if(!(var2 != var6)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            if(!(var2 == var5)) { _fun0001_ip = 12; continue _fun0001 }
case 10:
            var2 = {};
            var3 = 'error';
            var2['state'] = var3;
            _fun0001_ip = 13; continue _fun0001;
case 12:
            var3 = {};
            var7 = 'gate';
            var3['state'] = var7;
            var3['linkCode'] = var6;
            var3['expiresAt'] = var5;
            var3['refresh'] = var4;
            var2 = var3;
case 13:
            var1 = var2;
case 9:
            _fun0001_ip = 14; continue _fun0001;
case 5:
            var2 = {};
            var3 = 'error';
            var2['state'] = var3;
            var1 = var2;
case 14:
            return var1;
        }
    };
    var3['useConnectGuardianGate'] = var2;
    return var1;
})();