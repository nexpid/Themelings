// app/design/components/ContextMenu/native/ContextMenuContainer.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function getItemKey(arg1) {
        var1 = arg1;
        var1 = var1.key;
        return var1;
    };
    var _closure1_slot11 = var1;
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
    var7 = var4.Keyboard;
    var _closure1_slot4 = var7;
    var8 = var4.StyleSheet;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var7 = var8.create;
    var4 = {};
    var9 = {};
    var13 = var8.absoluteFillObject;
    var14 = var9;
    var10 = copyDataProperties(var14, var13);
    var11 = 99999;
    var10 = 'zIndex';
    var9[var10] = var11;
    var4['overlayView'] = var9;
    var9 = var8.absoluteFillObject;
    var4['wrapperView'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = new Array(0);
    var _closure1_slot8 = var4;
    var4 = function EMPTY_CALLBACK() {
        var1 = undefined;
        return var1;
    };
    var _closure1_slot9 = var4;
    var4 = function renderItem(arg1, arg2, arg3, arg4) {
        var5 = _closure1_slot6;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 3;
        var1 = var3[var1];
        var4 = undefined;
        var1 = var2.bind(var4)(var1);
        var3 = var1.ContextMenuPopout;
        var2 = {};
        var1 = arg2;
        var2['menu'] = var1;
        var1 = arg3;
        var2['transitionState'] = var1;
        var1 = arg4;
        var2['cleanUp'] = var1;
        var1 = arg1;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/ContextMenu/native/ContextMenuContainer.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ContextMenuContainer() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 4;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = var3.useActiveContextMenu;
            var7 = var2.bind(var3)();
            var3 = null;
            if(!(var3 == var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot8;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var2 = new Array(1);
            var2[0] = var7;
            var6 = var2;
case 4:
            var8 = var3 == var7;
            var2 = undefined;
            if(var8) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var2 = var7.requestClose;
case 5:
            if(!(var3 == var2)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var2 = _closure1_slot9;
case 7:
            var _closure2_slot0 = var2;
            var7 = _closure1_slot3;
            var9 = var7.useEffect;
            var8 = function() {
                var5 = _closure1_slot4;
                var4 = var5.addListener;
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 4;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var3 = var2.hideContextMenu;
                var2 = 'keyboardDidHide';
                var2 = var4.bind(var5)(var2, var3);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.remove;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                return var1;
            };
            var3 = new Array(0);
            var3 = var9.bind(var7)(var8, var3);
            var8 = var7.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure2_slot0;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var8 = var8.bind(var7)(var2, var3);
            var _closure2_slot1 = var8;
            var3 = var7.useCallback;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure1_slot6;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 5;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var5 = _closure1_slot7;
                    var5 = var5.overlayView;
                    var1['style'] = var5;
                    var6 = _closure1_slot5;
                    var5 = {};
                    var8 = arg2;
                    var10 = var8.length;
                    var8 = 'auto';
                    var9 = 0;
                    if(!(var9 === var10)) { _fun0002_ip = 9; continue _fun0002 }
case 6:
                    var8 = 'none';
case 9:
                    var5['pointerEvents'] = var8;
                    var8 = _closure1_slot7;
                    var8 = var8.wrapperView;
                    var5['style'] = var8;
                    var9 = _closure1_slot6;
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 6;
                    var7 = var10[var7];
                    var7 = var8.bind(var3)(var7);
                    var8 = var7.Dialog;
                    var7 = {};
                    var10 = _closure2_slot1;
                    var7['onDismiss'] = var10;
                    var10 = arg1;
                    var7['children'] = var10;
                    var7 = var9.bind(var3)(var8, var7);
                    var5['children'] = var7;
                    var5 = var4.bind(var3)(var6, var5);
                    var1['children'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var7 = var3.bind(var7)(var1, var2);
            var3 = _closure1_slot6;
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 7;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TransitionGroup;
            var1 = {};
            var1['wrapChildren'] = var7;
            var1['items'] = var6;
            var6 = _closure1_slot10;
            var1['renderItem'] = var6;
            var5 = _closure1_slot11;
            var1['getItemKey'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ContextMenuContainer'] = var2;
    return var1;
})();