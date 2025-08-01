// app/modules/modals/native/SimpleLoadingModalUI.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var10 = 0;
    var7 = var6[var10];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var9 = 1;
    var4 = var6[var9];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityIndicator;
    var _closure1_slot3 = var7;
    var7 = var4.Modal;
    var _closure1_slot4 = var7;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var8 = 2;
    var4 = var6[var8];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var11 = var5.bind(var1)(var4);
    var7 = var11.createStyles;
    var4 = {};
    var12 = {'flex': 1, 'alignItems': 'center', 'flexDirection': 'column', 'justifyContent': 'center'};
    var4['modalBackground'] = var12;
    var4 = var7.bind(var11)(var4);
    var _closure1_slot7 = var4;
    var4 = {};
    var4['OPENING'] = var10;
    var7 = 'OPENING';
    var4[var10] = var7;
    var4['SHOWN'] = var9;
    var7 = 'SHOWN';
    var4[var9] = var7;
    var4['DISMISSED'] = var8;
    var7 = 'DISMISSED';
    var4[var8] = var7;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/modals/native/SimpleLoadingModalUI.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SimpleLoadingModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var10 = var3.operation;
            var _closure2_slot0 = var10;
            var2 = var3.onResolved;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0001_ip = 32; continue _fun0001 }
 27:
            var2 = function I() {
                var1 = undefined;
                return var1;
            };
 32:
            var _closure2_slot1 = var2;
            var1 = var3.onRejected;
            if(!(var1 === var4)) { _fun0001_ip = 51; continue _fun0001 }
 46:
            var1 = function f() {
                var1 = undefined;
                return var1;
            };
 51:
            var _closure2_slot2 = var1;
            var6 = var3.cancelable;
            if(!(var6 === var4)) { _fun0001_ip = 67; continue _fun0001 }
 65:
            var6 = false;
 67:
            var _closure2_slot3 = var6;
            var3 = var3.onDismissed;
            if(!(var3 === var4)) { _fun0001_ip = 86; continue _fun0001 }
 81:
            var3 = function N() {
                var1 = undefined;
                return var1;
            };
 86:
            var _closure2_slot4 = var3;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var6 = _closure1_slot7;
            var7 = var6.bind(var4)();
            var6 = _closure1_slot2;
            var11 = var6.useRef;
            var8 = _closure1_slot8;
            var8 = var8.OPENING;
            var8 = var11.bind(var6)(var8);
            _closure2_slot5 = var8;
            var11 = var6.useCallback;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot5;
                    var4 = var1.current;
                    var3 = _closure1_slot8;
                    var3 = var3.SHOWN;
                    if(!(var4 === var3)) { _fun0002_ip = 39; continue _fun0002 }
 29:
                    var4 = _closure2_slot4;
                    var3 = undefined;
                    var3 = var4.bind(var3)();
 39:
                    var2 = _closure2_slot5;
                    var1 = _closure1_slot8;
                    var1 = var1.DISMISSED;
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = var11.bind(var6)(var3, var8);
            _closure2_slot6 = var11;
            var8 = var6.useCallback;
            var3 = new Array(2);
            var3[0] = var11;
            var3[1] = var2;
            var2 = function(arg1) {
                var4 = _closure2_slot1;
                var1 = undefined;
                var3 = arg1;
                var3 = var4.bind(var1)(var3);
                var2 = _closure2_slot6;
                var2 = var2.bind(var1)();
                return var1;
            };
            var8 = var8.bind(var6)(var2, var3);
            _closure2_slot7 = var8;
            var3 = var6.useCallback;
            var2 = new Array(2);
            var2[0] = var11;
            var2[1] = var1;
            var1 = function(arg1) {
                var4 = _closure2_slot2;
                var1 = undefined;
                var3 = arg1;
                var3 = var4.bind(var1)(var3);
                var2 = _closure2_slot6;
                var2 = var2.bind(var1)();
                return var1;
            };
            var1 = var3.bind(var6)(var1, var2);
            _closure2_slot8 = var1;
            var3 = var6.useEffect;
            var2 = new Array(3);
            var2[0] = var10;
            var2[1] = var8;
            var2[2] = var1;
            var1 = function() {
                var3 = _closure2_slot0;
                var1 = undefined;
                var5 = var3.bind(var1)();
                var4 = var5.then;
                var3 = function(arg1) {
                    var3 = _closure2_slot7;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var4 = var4.bind(var5)(var3);
                var3 = var4.catch;
                var2 = function(arg1) {
                    var3 = _closure2_slot8;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {'transparent': true, 'animationType': 'none'};
            var6 = function onShow() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot5;
                    var4 = var2.current;
                    var3 = _closure1_slot8;
                    var3 = var3.DISMISSED;
                    if(!(var4 !== var3)) { _fun0003_ip = 51; continue _fun0003 }
 29:
                    var3 = _closure2_slot5;
                    var2 = _closure1_slot8;
                    var2 = var2.SHOWN;
                    var3['current'] = var2;
                    _fun0003_ip = 61; continue _fun0003;
 51:
                    var2 = _closure2_slot4;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 61:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onShow'] = var6;
            var5 = function onRequestClose() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0004_ip = 20; continue _fun0004 }
 10:
                    var2 = _closure2_slot6;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 20:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onRequestClose'] = var5;
            var6 = _closure1_slot5;
            var5 = {};
            var7 = var7.modalBackground;
            var5['style'] = var7;
            var8 = _closure1_slot3;
            var7 = {'animating': true, 'color': null, 'size': 'large'};
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var9 = 4;
            var9 = var11[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.unsafe_rawColors;
            var9 = var9.BRAND_500;
            var7['color'] = var9;
            var7 = var3.bind(var4)(var8, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();