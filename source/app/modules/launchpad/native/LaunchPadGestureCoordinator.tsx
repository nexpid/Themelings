// app/modules/launchpad/native/LaunchPadGestureCoordinator.tsx
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.LaunchPadTypes;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/launchpad/native/LaunchPadGestureCoordinator.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function LaunchPadGestureCoordinator(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var6 = var2.children;
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var3 = 3;
            var3 = var11[var3];
            var5 = undefined;
            var7 = var9.bind(var5)(var3);
            var4 = var7.useConfig;
            var3 = {};
            var8 = 'LaunchPadGestureCoordinator';
            var3['location'] = var8;
            var10 = var4.bind(var7)(var3);
            var _closure2_slot0 = var10;
            var3 = 4;
            var3 = var11[var3];
            var3 = var9.bind(var5)(var3);
            var8 = var3.bind(var5)();
            var _closure2_slot1 = var8;
            var7 = _closure1_slot3;
            var4 = var7.useContext;
            var3 = 5;
            var3 = var11[var3];
            var3 = var9.bind(var5)(var3);
            var9 = var4.bind(var7)(var3);
            var _closure2_slot2 = var9;
            var4 = var7.useMemo;
            var3 = new Array(3);
            var3[0] = var10;
            var3[1] = var9;
            var3[2] = var8;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var7 = null;
                    var2 = var7 == var1;
                    var1 = null;
                    if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = _closure2_slot1;
                    var2 = _closure1_slot4;
                    var2 = var2.DISABLED;
                    var1 = null;
                    if(!(var5 !== var2)) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                    var5 = _closure2_slot1;
                    var2 = _closure1_slot4;
                    var2 = var2.PULL_TAB;
                    var1 = null;
                    if(!(var5 !== var2)) { _fun0002_ip = 2; continue _fun0002 }
case 5:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 6;
                    var2 = var6[var2];
                    var6 = undefined;
                    var5 = var5.bind(var6)(var2);
                    var2 = var5.isIOS;
                    var5 = var2.bind(var5)();
                    var2 = null;
                    if(!var5) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var5 = _closure2_slot0;
                    var5 = var5.enabled;
                    var2 = null;
                    if(!var5) { _fun0002_ip = 6; continue _fun0002 }
case 8:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 7;
                    var4 = var7[var4];
                    var4 = var5.bind(var6)(var4);
                    var5 = var4.Gesture;
                    var4 = var5.Native;
                    var5 = var4.bind(var5)();
                    var4 = var5.requireExternalGestureToFail;
                    var3 = _closure2_slot2;
                    var2 = var4.bind(var5)(var3);
case 6:
                    var1 = var2;
case 2:
                    return var1;
                }
            };
            var7 = var4.bind(var7)(var1, var3);
            var3 = null;
            var1 = var6;
            if(!(var3 != var7)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var4 = _closure1_slot5;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 7;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.GestureDetector;
            var2 = {};
            var2['gesture'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 9:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();