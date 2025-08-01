// app/modules/main_tabs_v2/native/modal/ModalScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = ['impressionName', 'impressionProperties'];
    var _closure1_slot3 = var1;
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
    var _closure1_slot4 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot6 = var7;
    var4 = var4.StyleSheet;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NOOP;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/modal/ModalScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function Modal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var2 = var2.route;
            var2 = var2.params;
            var5 = var2.modal;
            var _closure2_slot0 = var5;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var6 = var5.props;
            var12 = null;
            if(!(var12 == var6)) { _fun0001_ip = 46; continue _fun0001 }
 44:
            var6 = {};
 46:
            var9 = var6.impressionName;
            var8 = var6.impressionProperties;
            var3 = _closure1_slot4;
            var2 = _closure1_slot3;
            var10 = var3.bind(var4)(var6, var2);
            var6 = _closure1_slot5;
            var11 = var6.useCallback;
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.pop;
                var2 = var2.bind(var3)();
                return var1;
            };
            var2 = new Array(0);
            var11 = var11.bind(var6)(var3, var2);
            var3 = _closure1_slot1;
            var15 = _closure1_slot2;
            var2 = 6;
            var2 = var15[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var14 = _closure1_slot0;
            var13 = 7;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.ImpressionTypes;
            var13 = var13.MODAL;
            var2['type'] = var13;
            var2['name'] = var9;
            var2['properties'] = var8;
            var2 = var3.bind(var4)(var2);
            var3 = var6.useRef;
            var8 = var5.callbacks;
            var9 = var12 == var8;
            var2 = undefined;
            if(var9) { _fun0001_ip = 195; continue _fun0001 }
 189:
            var2 = var8.onExited;
 195:
            var2 = var3.bind(var6)(var2);
            _closure2_slot1 = var2;
            var6 = _closure1_slot5;
            var3 = var6.useEffect;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var4 = var1.callbacks;
                    var1 = null;
                    var5 = var1 == var4;
                    var1 = undefined;
                    var2 = undefined;
                    if(var5) { _fun0002_ip = 36; continue _fun0002 }
 30:
                    var2 = var4.onExited;
 36:
                    var3['current'] = var2;
                    return var1;
                }
            };
            var2 = var3.bind(var6)(var2);
            var8 = var6.useEffect;
            var3 = function() {
                var1 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var1 = _closure2_slot1;
                        var3 = var1.current;
                        var1 = null;
                        var3 = var1 == var3;
                        var1 = undefined;
                        if(var3) { _fun0003_ip = 36; continue _fun0003 }
 23:
                        var3 = _closure2_slot1;
                        var2 = var3.current;
                        var1 = var2.bind(var3)();
 36:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = new Array(0);
            var2 = var8.bind(var6)(var3, var2);
            var3 = var6.useLayoutEffect;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.trackAppUIViewed;
                var1 = 'ModalScreen';
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = new Array(0);
            var1 = var3.bind(var6)(var2, var1);
            var3 = _closure1_slot10;
            var2 = _closure1_slot6;
            var1 = {};
            var6 = _closure1_slot7;
            var6 = var6.absoluteFill;
            var1['style'] = var6;
            var6 = var5.closable;
            if(var6) { _fun0001_ip = 309; continue _fun0001 }
 303:
            var6 = _closure1_slot8;
            _fun0001_ip = 335; continue _fun0001;
 309:
            var9 = _closure1_slot1;
            var13 = _closure1_slot2;
            var8 = 5;
            var8 = var13[var8];
            var8 = var9.bind(var4)(var8);
            var6 = var8.pop;
 335:
            var1['onAccessibilityEscape'] = var6;
            var9 = _closure1_slot5;
            var8 = var9.createElement;
            var6 = var5.modal;
            var5 = {};
            var17 = var5;
            var16 = var10;
            var10 = copyDataProperties(var17, var16);
            var10 = 'style';
            var5[var10] = var4;
            var10 = 'transitionState';
            var5[var10] = var12;
            var10 = 'onClose';
            var5[var10] = var11;
            var6 = var8.bind(var9)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 9;
            var6 = var9[var6];
            var8 = var8.bind(var4)(var6);
            var6 = var8.isIOS;
            var6 = var6.bind(var8)();
            if(!var6) { _fun0001_ip = 487; continue _fun0001 }
 442:
            var9 = _closure1_slot9;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 10;
            var7 = var10[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.PortalKeyboardRenderer;
            var7 = {};
            var10 = false;
            var7['portal'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 487:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();