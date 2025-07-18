// app/design/components/TextField/native/useTextField.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var6 = native7;
    var4 = function useTextFieldState(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var2 = var3.value;
            var10 = var3.defaultValue;
            var4 = var3.onChange;
            var _closure2_slot0 = var4;
            var8 = var3.onClear;
            var _closure2_slot1 = var8;
            var9 = _closure1_slot1;
            var6 = var9.useState;
            var7 = null;
            if(!(var7 != var2)) { _fun0001_ip = 57; continue _fun0001 }
 54:
            var10 = var2;
 57:
            var11 = var7 != var10;
            var5 = '';
            if(!var11) { _fun0001_ip = 71; continue _fun0001 }
 68:
            var5 = var10;
 71:
            var10 = var6.bind(var9)(var5);
            var9 = _closure1_slot0;
            var6 = undefined;
            var5 = 2;
            var10 = var9.bind(var6)(var10, var5);
            var6 = 0;
            var5 = var10[var6];
            var9 = 1;
            var9 = var10[var9];
            var _closure2_slot2 = var9;
            if(!(var7 != var2)) { _fun0001_ip = 115; continue _fun0001 }
 112:
            var5 = var2;
 115:
            var2 = var5.length;
            var2 = var2 > var6;
            var9 = _closure1_slot1;
            var7 = var9.useCallback;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = arg1;
                    var4 = _closure2_slot2;
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var5 = _closure2_slot0;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0002_ip = 36; continue _fun0002 }
 27:
                    var2 = _closure2_slot0;
                    var2 = var2.bind(var1)(var3);
 36:
                    return var1;
                }
            };
            var4 = var7.bind(var9)(var4, var6);
            var _closure2_slot3 = var4;
            var7 = _closure1_slot1;
            var6 = var7.useCallback;
            var3 = new Array(2);
            var3[0] = var4;
            var3[1] = var8;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = _closure2_slot3;
                    var1 = undefined;
                    var3 = '';
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0003_ip = 36; continue _fun0003 }
 28:
                    var2 = _closure2_slot1;
                    var2 = var2.bind(var1)();
 36:
                    return var1;
                }
            };
            var3 = var6.bind(var7)(var1, var3);
            var1 = {};
            var1['value'] = var5;
            var1['setTextValue'] = var4;
            var1['clear'] = var3;
            var1['hasValue'] = var2;
            return var1;
        }
    };
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var5);
    var1 = 0;
    var7 = var6[var1];
    var5 = native3;
    var1 = undefined;
    var5 = var5.bind(var1)(var7);
    var _closure1_slot0 = var5;
    var5 = 1;
    var7 = var6[var5];
    var5 = native4;
    var5 = var5.bind(var1)(var7);
    var _closure1_slot1 = var5;
    var5 = 2;
    var6 = var6[var5];
    var5 = native2;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'design/components/TextField/native/useTextField.native.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useTextFieldState'] = var4;
    var2 = function useTextField(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var6 = _closure1_slot1;
            var4 = var6.useRef;
            var2 = null;
            var2 = var4.bind(var6)(var2);
            var _closure2_slot1 = var2;
            var8 = _closure1_slot1;
            var7 = var8.useCallback;
            var6 = new Array(2);
            var6[0] = var2;
            var4 = var3.onClear;
            var6[1] = var4;
            var4 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = _closure2_slot1;
                    var4 = var1.current;
                    var1 = null;
                    if(!(var1 != var4)) { _fun0005_ip = 28; continue _fun0005 }
 18:
                    var3 = var4.clear;
                    var3 = var3.bind(var4)();
 28:
                    var2 = _closure2_slot0;
                    var2 = var2.onClear;
                    if(!(var1 != var2)) { _fun0005_ip = 48; continue _fun0005 }
 42:
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 48:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var7.bind(var8)(var4, var6);
            var7 = _closure1_slot2;
            var4 = {};
            var12 = var4;
            var11 = var3;
            var6 = copyDataProperties(var12, var11);
            var6 = 'onClear';
            var4[var6] = var8;
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var _closure2_slot2 = var4;
            var9 = _closure1_slot1;
            var8 = var9.useImperativeHandle;
            var7 = new Array(2);
            var7[0] = var2;
            var7[1] = var4;
            var5 = arg2;
            var1 = function() {
                var1 = {};
                var3 = function blur() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var1 = _closure2_slot1;
                        var2 = var1.current;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0006_ip = 28; continue _fun0006 }
 18:
                        var1 = var2.blur;
                        var1 = var1.bind(var2)();
 28:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['blur'] = var3;
                var3 = function focus() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var1 = _closure2_slot1;
                        var2 = var1.current;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0007_ip = 28; continue _fun0007 }
 18:
                        var1 = var2.focus;
                        var1 = var1.bind(var2)();
 28:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['focus'] = var3;
                var3 = function isFocused() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var1 = _closure2_slot1;
                        var3 = var1.current;
                        var1 = null;
                        var1 = var1 == var3;
                        var2 = undefined;
                        if(var1) { _fun0008_ip = 33; continue _fun0008 }
 23:
                        var1 = var3.isFocused;
                        var2 = var1.bind(var3)();
 33:
                        var1 = true;
                        var1 = var1 === var2;
                        return var1;
                    }
                };
                var1['isFocused'] = var3;
                var3 = function getText() {
                    var1 = _closure2_slot2;
                    var1 = var1.value;
                    return var1;
                };
                var1['getText'] = var3;
                var3 = function setText(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                        var3 = arg1;
                        var1 = '';
                        if(!(var1 !== var3)) { _fun0009_ip = 63; continue _fun0009 }
 11:
                        var2 = _closure2_slot1;
                        var5 = var2.current;
                        var2 = null;
                        if(!(var2 != var5)) { _fun0009_ip = 46; continue _fun0009 }
 29:
                        var4 = var5.setNativeProps;
                        var2 = {};
                        var2['text'] = var3;
                        var2 = var4.bind(var5)(var2);
 46:
                        var2 = _closure2_slot2;
                        var1 = var2.setTextValue;
                        var1 = var1.bind(var2)(var3);
                        _fun0009_ip = 80; continue _fun0009;
 63:
                        var2 = _closure2_slot2;
                        var1 = var2.clear;
                        var1 = var1.bind(var2)();
 80:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['setText'] = var3;
                var3 = function measure(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                        var1 = _closure2_slot1;
                        var3 = var1.current;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0010_ip = 32; continue _fun0010 }
 18:
                        var2 = var3.measure;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
 32:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['measure'] = var3;
                var3 = function measureInWindow(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                        var1 = _closure2_slot1;
                        var3 = var1.current;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0011_ip = 32; continue _fun0011 }
 18:
                        var2 = var3.measureInWindow;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
 32:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['measureInWindow'] = var3;
                var2 = function measureLayout(arg1, arg2, arg3) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                        var1 = _closure2_slot1;
                        var5 = var1.current;
                        var1 = null;
                        if(!(var1 != var5)) { _fun0012_ip = 40; continue _fun0012 }
 18:
                        var4 = var5.measureLayout;
                        var3 = arg1;
                        var2 = arg2;
                        var1 = arg3;
                        var1 = var4.bind(var5)(var3, var2, var1);
 40:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['measureLayout'] = var2;
                return var1;
            };
            var1 = var8.bind(var9)(var5, var1, var7);
            var1 = {};
            var1['innerRef'] = var2;
            var1['state'] = var4;
            var2 = {};
            var12 = var2;
            var11 = var3;
            var5 = copyDataProperties(var12, var11);
            var5 = 'onChange';
            var2[var5] = var6;
            var5 = var4.setTextValue;
            var4 = 'onChangeText';
            var2[var4] = var5;
            var4 = var3.isDisabled;
            var5 = !var4;
            var4 = 'editable';
            var2[var4] = var5;
            var4 = var3.isDisabled;
            var5 = !var4;
            if(!var5) { _fun0004_ip = 226; continue _fun0004 }
 220:
            var5 = var3.focusable;
 226:
            var4 = 'focusable';
            var2[var4] = var5;
            var4 = var3.isDisabled;
            var3 = 'aria-disabled';
            var2[var3] = var4;
            var1['inputProps'] = var2;
            return var1;
        }
    };
    var3['useTextField'] = var2;
    return var1;
})();