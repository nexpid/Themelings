// app/modules/phone/native/PhoneOrEmailInput.tsx
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
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var7 = var5.onChange;
            var _closure2_slot0 = var7;
            var3 = var5.alpha2;
            var13 = var5.countryCode;
            var _closure2_slot1 = var13;
            var11 = var5.onPressCountrySelector;
            var _closure2_slot2 = var11;
            var17 = var5.forceMode;
            var _closure2_slot3 = var17;
            var4 = {'onChange': 0, 'alpha2': 0, 'countryCode': 0, 'onPressCountrySelector': 0, 'forceMode': 0};
            var6 = null;
            var21 = var4;
            var20 = null;
            var1 = silentSetPrototypeOf(var21, var20);
            var8 = 0;
            var21 = {};
            var20 = var5;
            var19 = var4;
            var5 = copyDataProperties(var21, var20, var19);
            var4 = undefined;
            var _closure2_slot7 = var4;
            var16 = _closure1_slot4;
            var9 = var16.useState;
            var12 = '';
            var14 = var9.bind(var16)(var12);
            var10 = _closure1_slot3;
            var9 = 2;
            var9 = var10.bind(var4)(var14, var9);
            var14 = var9[var8];
            var8 = 1;
            var8 = var9[var8];
            var _closure2_slot4 = var8;
            var8 = var16.useRef;
            var9 = var8.bind(var16)(var6);
            var _closure2_slot5 = var9;
            var18 = var16.useImperativeHandle;
            var15 = arg2;
            var10 = function() {
                var1 = {};
                var3 = function blur() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var1 = _closure2_slot5;
                        var3 = var1.current;
                        var1 = null;
                        var2 = var1 == var3;
                        var1 = undefined;
                        if(var2) { _fun0002_ip = 33; continue _fun0002 }
 23:
                        var2 = var3.blur;
                        var1 = var2.bind(var3)();
 33:
                        return var1;
                    }
                };
                var1['blur'] = var3;
                var3 = function focus() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var1 = _closure2_slot5;
                        var3 = var1.current;
                        var1 = null;
                        var2 = var1 == var3;
                        var1 = undefined;
                        if(var2) { _fun0003_ip = 33; continue _fun0003 }
 23:
                        var2 = var3.focus;
                        var1 = var2.bind(var3)();
 33:
                        return var1;
                    }
                };
                var1['focus'] = var3;
                var3 = function isFocused() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var1 = _closure2_slot5;
                        var4 = var1.current;
                        var1 = null;
                        var3 = var1 == var4;
                        var2 = undefined;
                        if(var3) { _fun0004_ip = 33; continue _fun0004 }
 23:
                        var3 = var4.isFocused;
                        var2 = var3.bind(var4)();
 33:
                        var1 = var1 != var2;
                        if(!var1) { _fun0004_ip = 43; continue _fun0004 }
 40:
                        var1 = var2;
 43:
                        return var1;
                    }
                };
                var1['isFocused'] = var3;
                var3 = function setText(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var4 = arg1;
                        var3 = _closure2_slot4;
                        var1 = undefined;
                        var3 = var3.bind(var1)(var4);
                        var2 = _closure2_slot5;
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0005_ip = 43; continue _fun0005 }
 32:
                        var2 = var3.setText;
                        var2 = var2.bind(var3)(var4);
 43:
                        return var1;
                    }
                };
                var1['setText'] = var3;
                var3 = function getText() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var1 = _closure2_slot5;
                        var4 = var1.current;
                        var1 = null;
                        var3 = var1 == var4;
                        var2 = undefined;
                        if(var3) { _fun0006_ip = 33; continue _fun0006 }
 23:
                        var3 = var4.getText;
                        var2 = var3.bind(var4)();
 33:
                        var3 = var1 != var2;
                        var1 = '';
                        if(!var3) { _fun0006_ip = 47; continue _fun0006 }
 44:
                        var1 = var2;
 47:
                        return var1;
                    }
                };
                var1['getText'] = var3;
                var3 = function measure(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var1 = _closure2_slot5;
                        var4 = var1.current;
                        var1 = null;
                        var2 = var1 == var4;
                        var1 = undefined;
                        if(var2) { _fun0007_ip = 37; continue _fun0007 }
 23:
                        var3 = var4.measure;
                        var2 = arg1;
                        var1 = var3.bind(var4)(var2);
 37:
                        return var1;
                    }
                };
                var1['measure'] = var3;
                var3 = function measureInWindow(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var1 = _closure2_slot5;
                        var4 = var1.current;
                        var1 = null;
                        var2 = var1 == var4;
                        var1 = undefined;
                        if(var2) { _fun0008_ip = 37; continue _fun0008 }
 23:
                        var3 = var4.measureInWindow;
                        var2 = arg1;
                        var1 = var3.bind(var4)(var2);
 37:
                        return var1;
                    }
                };
                var1['measureInWindow'] = var3;
                var2 = function measureLayout(arg1, arg2, arg3) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                        var1 = _closure2_slot5;
                        var6 = var1.current;
                        var1 = null;
                        var2 = var1 == var6;
                        var1 = undefined;
                        if(var2) { _fun0009_ip = 45; continue _fun0009 }
 23:
                        var5 = var6.measureLayout;
                        var4 = arg1;
                        var3 = arg2;
                        var2 = arg3;
                        var1 = var5.bind(var6)(var4, var3, var2);
 45:
                        return var1;
                    }
                };
                var1['measureLayout'] = var2;
                return var1;
            };
            var8 = new Array(0);
            var8 = var18.bind(var16)(var15, var10, var8);
            var10 = _closure1_slot0;
            var15 = _closure1_slot2;
            var8 = 3;
            var8 = var15[var8];
            var10 = var10.bind(var4)(var8);
            var8 = var10.shouldShowCountryCodeSelector;
            var10 = var8.bind(var10)(var17, var14);
            var14 = var16.useCallback;
            var8 = new Array(3);
            var8[0] = var13;
            var8[1] = var17;
            var8[2] = var7;
            var7 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var4 = arg1;
                    var3 = _closure2_slot4;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var4);
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 3;
                    var3 = var6[var3];
                    var6 = var5.bind(var1)(var3);
                    var5 = var6.shouldShowCountryCodeSelector;
                    var3 = _closure2_slot3;
                    var5 = var5.bind(var6)(var3, var4);
                    var3 = '';
                    if(!var5) { _fun0010_ip = 67; continue _fun0010 }
 63:
                    var3 = _closure2_slot1;
 67:
                    var6 = _closure2_slot0;
                    var5 = null;
                    if(!(var5 != var6)) { _fun0010_ip = 87; continue _fun0010 }
 77:
                    var2 = _closure2_slot0;
                    var2 = var2.bind(var1)(var4, var3);
 87:
                    return var1;
                }
            };
            var8 = var14.bind(var16)(var7, var8);
            var14 = _closure1_slot1;
            var7 = 4;
            var7 = var15[var7];
            var7 = var14.bind(var4)(var7);
            var7 = var7.bind(var4)(var8);
            var _closure2_slot6 = var7;
            var15 = var16.useEffect;
            var14 = new Array(2);
            var14[0] = var13;
            var14[1] = var7;
            var7 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var3 = _closure2_slot6;
                    var1 = _closure2_slot5;
                    var6 = var1.current;
                    var2 = null;
                    var5 = var2 == var6;
                    var1 = undefined;
                    var4 = undefined;
                    if(var5) { _fun0011_ip = 39; continue _fun0011 }
 29:
                    var5 = var6.getText;
                    var4 = var5.bind(var6)();
 39:
                    var5 = var2 != var4;
                    var2 = '';
                    if(!var5) { _fun0011_ip = 53; continue _fun0011 }
 50:
                    var2 = var4;
 53:
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var7 = var15.bind(var16)(var7, var14);
            var7 = undefined;
            if(!var10) { _fun0001_ip = 349; continue _fun0001 }
 312:
            var6 = var6 != var3;
            var10 = var12;
            if(!var6) { _fun0001_ip = 325; continue _fun0001 }
 322:
            var10 = var3;
 325:
            var3 = global;
            var3 = var3.HermesInternal;
            var6 = var3.concat;
            var3 = ' ';
            var7 = var6.bind(var12)(var10, var3, var13);
 349:
            _closure2_slot7 = var7;
            var10 = _closure1_slot4;
            var6 = var10.useMemo;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var11;
            var2 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var1 = {};
                    var2 = _closure2_slot2;
                    var1['onPress'] = var2;
                    var2 = 'button';
                    var1['accessibilityRole'] = var2;
                    var4 = _closure2_slot7;
                    var2 = null;
                    var4 = var2 != var4;
                    var2 = '';
                    if(!var4) { _fun0012_ip = 42; continue _fun0012 }
 38:
                    var2 = _closure2_slot7;
 42:
                    var1['accessibilityLabel'] = var2;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 5;
                    var3 = var7[var2];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.GwAW3t;
                    var2 = var3.bind(var4)(var2);
                    var1['accessibilityHint'] = var2;
                    return var1;
                }
            };
            var6 = var6.bind(var10)(var2, var3);
            var3 = _closure1_slot5;
            var2 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 6;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.SplitTextInput;
            var1 = {};
            var21 = var1;
            var20 = var5;
            var5 = copyDataProperties(var21, var20);
            var5 = 'ref';
            var1[var5] = var9;
            var5 = 'onChange';
            var1[var5] = var8;
            var5 = 'leadingText';
            var1[var5] = var7;
            var5 = 'leadingPressableProps';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/phone/native/PhoneOrEmailInput.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();