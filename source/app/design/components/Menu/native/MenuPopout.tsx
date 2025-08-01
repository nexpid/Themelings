// app/design/components/Menu/native/MenuPopout.tsx
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
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.Fragment;
    var _closure1_slot6 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Menu/native/MenuPopout.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MenuPopout(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.children;
            var8 = var1.key;
            var18 = var1.menuItems;
            var4 = undefined;
            if(!(var18 === var4)) { _fun0001_ip = 31; continue _fun0001 }
 27:
            var18 = new Array(0);
 31:
            var _closure2_slot0 = var18;
            var2 = var1.onRequestOpen;
            var _closure2_slot1 = var2;
            var6 = var1.onRequestClose;
            var _closure2_slot2 = var6;
            var17 = var1.position;
            var _closure2_slot3 = var17;
            var16 = var1.align;
            var _closure2_slot4 = var16;
            var15 = var1.offset;
            var _closure2_slot5 = var15;
            var3 = var1.offsetAnimated;
            var _closure2_slot6 = var3;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 3;
            var9 = var11[var9];
            var10 = var10.bind(var4)(var9);
            var9 = var10.useUID;
            var13 = var9.bind(var10)();
            var9 = null;
            if(!(var9 != var8)) { _fun0001_ip = 164; continue _fun0001 }
 161:
            var13 = var8;
 164:
            _closure2_slot7 = var13;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 4;
            var8 = var10[var8];
            var9 = var9.bind(var4)(var8);
            var8 = var9.useAnimatedRef;
            var11 = var8.bind(var9)();
            _closure2_slot8 = var11;
            var10 = _closure1_slot4;
            var9 = var10.useState;
            var8 = false;
            var12 = var9.bind(var10)(var8);
            var9 = _closure1_slot3;
            var8 = 2;
            var12 = var9.bind(var4)(var12, var8);
            var8 = 0;
            var8 = var12[var8];
            _closure2_slot9 = var8;
            var9 = 1;
            var9 = var12[var9];
            _closure2_slot10 = var9;
            var12 = var18.map;
            var9 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var3 = var2.label;
                var1['name'] = var3;
                var2 = var2.label;
                var1['label'] = var2;
                return var1;
            };
            var9 = var12.bind(var18)(var9);
            var14 = var10.useCallback;
            var12 = new Array(2);
            var12[0] = var13;
            var12[1] = var6;
            var6 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure2_slot10;
                    var1 = undefined;
                    var3 = false;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure2_slot2;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0002_ip = 34; continue _fun0002 }
 26:
                    var3 = _closure2_slot2;
                    var3 = var3.bind(var1)();
 34:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 5;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.hideNativeMenu;
                    var2 = _closure2_slot7;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var12 = var14.bind(var10)(var6, var12);
            _closure2_slot11 = var12;
            var14 = var10.useMemo;
            var6 = new Array(7);
            var6[0] = var11;
            var6[1] = var12;
            var6[2] = var18;
            var6[3] = var17;
            var6[4] = var16;
            var6[5] = var15;
            var6[6] = var3;
            var3 = function() {
                var4 = _closure1_slot5;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.Menu;
                var1 = {};
                var6 = _closure2_slot8;
                var1['toggleButtonRef'] = var6;
                var6 = _closure2_slot11;
                var1['onClose'] = var6;
                var6 = _closure2_slot3;
                var1['position'] = var6;
                var6 = _closure2_slot4;
                var1['align'] = var6;
                var6 = _closure2_slot5;
                var1['offset'] = var6;
                var6 = _closure2_slot6;
                var1['offsetAnimated'] = var6;
                var7 = _closure2_slot0;
                var6 = var7.map;
                var5 = function(arg1, arg2) {
                    var5 = _closure1_slot5;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 7;
                    var1 = var7[var1];
                    var4 = undefined;
                    var1 = var6.bind(var4)(var1);
                    var3 = var1.MenuGroup;
                    var2 = {};
                    var1 = 8;
                    var1 = var7[var1];
                    var1 = var6.bind(var4)(var1);
                    var6 = var1.MenuItem;
                    var1 = {};
                    var7 = true;
                    var1['showIconFirst'] = var7;
                    var9 = arg1;
                    var10 = var1;
                    var7 = copyDataProperties(var10, var9);
                    var1 = var5.bind(var4)(var6, var1);
                    var2['children'] = var1;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var7 = var1.concat;
                    var6 = 'chat-context-menu-group-';
                    var1 = arg2;
                    var1 = var7.bind(var6)(var1);
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                };
                var5 = var6.bind(var7)(var5);
                var1['children'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var14 = var14.bind(var10)(var3, var6);
            _closure2_slot12 = var14;
            var6 = var10.useCallback;
            var3 = new Array(3);
            var3[0] = var14;
            var3[1] = var13;
            var3[2] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = _closure2_slot10;
                    var1 = undefined;
                    var3 = true;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0003_ip = 34; continue _fun0003 }
 26:
                    var3 = _closure2_slot1;
                    var3 = var3.bind(var1)();
 34:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 5;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.showNativeMenu;
                    var3 = _closure2_slot7;
                    var2 = _closure2_slot12;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var2 = var6.bind(var10)(var2, var3);
            _closure2_slot13 = var2;
            var6 = var10.useCallback;
            var3 = new Array(3);
            var3[0] = var8;
            var3[1] = var12;
            var3[2] = var2;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot9;
                    if(var2) { _fun0004_ip = 22; continue _fun0004 }
 10:
                    var3 = _closure2_slot13;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
                    _fun0004_ip = 32; continue _fun0004;
 22:
                    var2 = _closure2_slot11;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 32:
                    var1 = undefined;
                    return var1;
                }
            };
            var10 = var6.bind(var10)(var2, var3);
            var3 = _closure1_slot5;
            var2 = _closure1_slot6;
            var1 = {};
            var6 = {};
            var6['ref'] = var11;
            var6['onPress'] = var10;
            var10 = {};
            var10['expanded'] = var8;
            var6['accessibilityState'] = var10;
            var6['accessibilityActions'] = var9;
            var5 = function onAccessibilityAction(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = arg1;
                    var _closure3_slot0 = var2;
                    var3 = _closure2_slot0;
                    var2 = var3.find;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.label;
                        var1 = _closure3_slot0;
                        var1 = var1.nativeEvent;
                        var1 = var1.actionName;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var2 = var2.bind(var3)(var1);
                    var4 = null;
                    var1 = var4 == var2;
                    if(var1) { _fun0005_ip = 50; continue _fun0005 }
 41:
                    var3 = var2.action;
                    var1 = var4 == var3;
 50:
                    if(var1) { _fun0005_ip = 62; continue _fun0005 }
 53:
                    var1 = var2.action;
                    var1 = var1.bind(var2)();
 62:
                    var1 = undefined;
                    return var1;
                }
            };
            var6['onAccessibilityAction'] = var5;
            var5 = {};
            var5['isShown'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['MenuPopout'] = var2;
    return var1;
})();