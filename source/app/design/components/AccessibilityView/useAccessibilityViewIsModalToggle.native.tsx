// app/design/components/AccessibilityView/useAccessibilityViewIsModalToggle.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var5 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var5;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var6 = var5[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot2 = var4;
    var4 = 2;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/AccessibilityView/useAccessibilityViewIsModalToggle.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useAccessibilityViewIsModalToggle(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var7 = var3.accessibilityViewIsModal;
            var1 = undefined;
            if(!(var7 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = false;
case 2:
            var _closure2_slot0 = var7;
            var3 = var3.nativeID;
            var _closure2_slot1 = var3;
            var _closure2_slot2 = var1;
            var _closure2_slot3 = var1;
            var5 = _closure1_slot2;
            var4 = var5.useRef;
            var4 = var4.bind(var5)(var1);
            _closure2_slot2 = var4;
            var6 = var5.useCallback;
            var4 = new Array(2);
            var4[0] = var7;
            var4[1] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = arguments[0];
                    var1 = undefined;
                    if(!(var2 === var1)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = _closure2_slot0;
case 4:
                    if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var2 = _closure2_slot2;
                    var6 = var2.current;
                    var2 = null;
                    if(!(var2 != var6)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var2 = _closure2_slot2;
                    var2['current'] = var1;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 1;
                    var2 = var5[var2];
                    var5 = var4.bind(var1)(var2);
                    var4 = var5.disableAccessibilityFocusLock;
                    var2 = new Array(1);
                    var2[0] = var6;
                    var2 = var4.bind(var5)(var2);
                    _fun0002_ip = 8; continue _fun0002;
case 6:
                    var4 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var2 = _closure2_slot2;
                    var4 = var2.current;
                    var2 = _closure2_slot1;
                    if(!(var4 !== var2)) { _fun0002_ip = 8; continue _fun0002 }
case 12:
                    var2 = _closure2_slot2;
                    var5 = _closure2_slot1;
                    var2['current'] = var5;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 1;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.enableAccessibilityFocusLock;
                    var2 = new Array(1);
                    var2[0] = var5;
                    var2 = var3.bind(var4)(var2);
case 8:
                    return var1;
case 10:
                    var1 = global;
                    var3 = var1.Error;
                    var1 = var3.prototype;
                    var2 = Object.create(var1, {constructor: {value: var3}});
                    var7 = 'Must have a unique nativeID when accessibilityViewIsModal is enabled.';
                    var8 = var2;
                    var1 = new var8[var3](var7, var6);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                }
            };
            var6 = var6.bind(var5)(var3, var4);
            _closure2_slot3 = var6;
            var4 = var5.useEffect;
            var3 = new Array(1);
            var3[0] = var6;
            var2 = function() {
                var2 = _closure2_slot3;
                var1 = undefined;
                var1 = var2.bind(var1)();
                var1 = function() {
                    var3 = _closure2_slot3;
                    var1 = undefined;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                return var1;
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();