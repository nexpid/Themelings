// app/modules/home_drawer/native/useDrawerState.tsx
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
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/home_drawer/native/useDrawerState.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useDrawerOpen() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arguments[0];
            var8 = undefined;
            if(!(var6 === var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = true;
case 2:
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var8;
            var _closure2_slot2 = var8;
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var4 = 2;
            var3 = var3[var4];
            var5 = var5.bind(var8)(var3);
            var3 = var5.useNavigation;
            var7 = var3.bind(var5)();
            _closure2_slot1 = var7;
            var5 = _closure1_slot3;
            var9 = var5.useState;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot0;
                    if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = false;
                    return var2;
case 4:
                    var2 = _closure2_slot1;
                    var1 = var2.getState;
                    var6 = var1.bind(var2)();
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 3;
                    var1 = var3[var1];
                    var4 = undefined;
                    var5 = var2.bind(var4)(var1);
                    var2 = var5.coerceGuildsRoute;
                    var3 = null;
                    var7 = var3 == var6;
                    var1 = undefined;
                    if(var7) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var7 = var6.routes;
                    var8 = var3 == var7;
                    var1 = undefined;
                    if(var8) { _fun0002_ip = 6; continue _fun0002 }
case 8:
                    var9 = var3 == var6;
                    var8 = undefined;
                    if(var9) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var8 = var6.index;
case 9:
                    var9 = var3 != var8;
                    var6 = 0;
                    if(!var9) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var6 = var8;
case 11:
                    var1 = var7[var6];
case 6:
                    var1 = var2.bind(var5)(var1);
                    var5 = var3 == var1;
                    var2 = undefined;
                    if(var5) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var1 = var1.params;
                    var3 = var3 == var1;
                    var2 = undefined;
                    if(var3) { _fun0002_ip = 13; continue _fun0002 }
case 15:
                    var2 = var1.drawerOpen;
case 13:
                    var1 = true;
                    var1 = var1 === var2;
                    return var1;
                }
            };
            var3 = var9.bind(var5)(var3);
            var1 = _closure1_slot2;
            var4 = var1.bind(var8)(var3, var4);
            var1 = 0;
            var1 = var4[var1];
            var3 = 1;
            var3 = var4[var3];
            _closure2_slot2 = var3;
            var4 = var5.useEffect;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var6;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var5 = function handleStateChange(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var1 = arg1;
                            var1 = var1.data;
                            var6 = var1.state;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 3;
                            var2 = var2[var1];
                            var1 = undefined;
                            var5 = var3.bind(var1)(var2);
                            var4 = var5.coerceGuildsRoute;
                            var3 = null;
                            var7 = var3 == var6;
                            var2 = undefined;
                            if(var7) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                            var7 = var6.routes;
                            var8 = var3 == var7;
                            var2 = undefined;
                            if(var8) { _fun0004_ip = 16; continue _fun0004 }
case 7:
                            var9 = var3 == var6;
                            var8 = undefined;
                            if(var9) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                            var8 = var6.index;
case 18:
                            var9 = var3 != var8;
                            var6 = 0;
                            if(!var9) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                            var6 = var8;
case 20:
                            var2 = var7[var6];
case 16:
                            var2 = var4.bind(var5)(var2);
                            if(!(var3 != var2)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                            var2 = var2.params;
                            var3 = var3 == var2;
                            var4 = undefined;
                            if(var3) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                            var4 = var2.drawerOpen;
case 24:
                            var3 = _closure2_slot2;
                            var2 = true;
                            var2 = var2 === var4;
                            var2 = var3.bind(var1)(var2);
case 22:
                            return var1;
                        }
                    };
                    var _closure3_slot0 = var5;
                    var3 = _closure2_slot0;
                    if(var3) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                    var3 = undefined;
                    return var3;
case 26:
                    var4 = _closure2_slot1;
                    var3 = var4.addListener;
                    var2 = 'state';
                    var2 = var3.bind(var4)(var2, var5);
                    var1 = function() {
                        var4 = _closure2_slot1;
                        var3 = var4.removeListener;
                        var2 = _closure3_slot0;
                        var1 = 'state';
                        var1 = var3.bind(var4)(var1, var2);
                        var1 = undefined;
                        return var1;
                    };
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['useDrawerOpen'] = var2;
    return var1;
})();