// app/modules/a11y/native/AccessibilityFocusLockManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot11;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot11;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
case 36: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 35: // try_end0
            _fun0004_ip = 37; continue _fun0004;
case 38: // catch_target0
            CatchBlockStart(arg_register=1);
case 37:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NativeModules;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var9 = var7.bind(var1)(var4);
    var4 = var9.prototype;
    var8 = Object.create(var4, {constructor: {value: var9}});
    var12 = 'AccessibilityFocusLockManager';
    var13 = var8;
    var4 = new var13[var9](var12, var11);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot9 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function AccessibilityFocusLockManager(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = this;
                var12 = 0;
                var1 = copyRestArgs(var12);
                var7 = _closure1_slot3;
                var2 = _closure2_slot0;
                var3 = undefined;
                var7 = var7.bind(var3)(var4, var2);
                var9 = new Array(0);
                var12 = var9;
                var11 = var1;
                var10 = 0;
                var1 = arraySpread(var12, var11, var10);
                var1 = _closure1_slot6;
                var8 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot12;
                var1 = var1.bind(var3)();
                if(var1) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                var1 = var8.apply;
                var1 = var1.bind(var8)(var4, var9);
                _fun0005_ip = 41; continue _fun0005;
case 39:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                var5 = _closure1_slot6;
                var5 = var5.bind(var3)(var4);
                var5 = var5.constructor;
                var1 = var6.bind(var7)(var8, var9, var5);
case 41:
                var1 = var2.bind(var3)(var4, var1);
                var2 = false;
                var1['_screenReaderEnabled'] = var2;
                var3 = global;
                var3 = var3.Map;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var13 = var4;
                var3 = new var13[var3](var12);
                var3 = var3 instanceof Object ? var3 : var4;
                var1['_focusLockedNativeIDGroups'] = var3;
                var1['_focusLockEnabled'] = var2;
                var2 = -1;
                var1['_focusLockEnabledDelayTimeoutId'] = var2;
                var2 = 250;
                var1['_focusLockEnabledDelayTimeout'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = '_updateAccessibilityFocusLock';
        var5['key'] = var1;
        var1 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = arguments[0];
                var3 = this;
                var1 = undefined;
                if(!(var4 === var1)) { _fun0006_ip = 42; continue _fun0006 }
case 32:
                var4 = false;
case 42:
                var _closure3_slot0 = var4;
                var _closure3_slot1 = var1;
                var4 = global;
                var6 = var4.clearTimeout;
                var5 = var3._focusLockEnabledDelayTimeoutId;
                var5 = var6.bind(var1)(var5);
                _closure3_slot1 = var1;
                var7 = _closure1_slot10;
                var8 = var3._focusLockedNativeIDGroups;
                var6 = var8.values;
                var6 = var6.bind(var8)();
                var9 = var7.bind(var1)(var6);
                var7 = var9.bind(var1)();
                var6 = var7.done;
                var8 = var7;
                var7 = undefined;
                if(var6) { _fun0006_ip = 41; continue _fun0006 }
case 43:
                var10 = var8.value;
                _closure3_slot1 = var10;
                var11 = var9.bind(var1)();
                var6 = var11.done;
                var8 = var11;
                var7 = var10;
                if(!var6) { _fun0006_ip = 43; continue _fun0006 }
case 41:
                var6 = null;
                if(!(var6 != var7)) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                var6 = var3._screenReaderEnabled;
                if(var6) { _fun0006_ip = 46; continue _fun0006 }
case 44:
                var6 = var3._focusLockEnabled;
                if(!var6) { _fun0006_ip = 47; continue _fun0006 }
case 48:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 7;
                var6 = var8[var6];
                var7 = var7.bind(var1)(var6);
                var6 = var7.isAndroid;
                var6 = var6.bind(var7)();
                if(var6) { _fun0006_ip = 49; continue _fun0006 }
case 50:
                var6 = _closure1_slot8;
                var7 = var6.DCDAccessibilityManager;
                var6 = var7.disableFocusLock;
                var6 = var6.bind(var7)();
                _fun0006_ip = 51; continue _fun0006;
case 49:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 8;
                var5 = var7[var5];
                var6 = var6.bind(var1)(var5);
                var5 = var6.disableFocusLock;
                var5 = var5.bind(var6)();
case 51:
                var5 = false;
                var3['_focusLockEnabled'] = var5;
                _fun0006_ip = 47; continue _fun0006;
case 46:
                var5 = var4.setTimeout;
                var4 = var3._focusLockEnabledDelayTimeout;
                var2 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 7;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.isAndroid;
                        var3 = var3.bind(var4)();
                        if(var3) { _fun0007_ip = 38; continue _fun0007 }
case 52:
                        var3 = _closure1_slot8;
                        var6 = var3.DCDAccessibilityManager;
                        var5 = var6.enableFocusLock;
                        var4 = _closure3_slot1;
                        var3 = _closure3_slot0;
                        var3 = var5.bind(var6)(var4, var3);
                        _fun0007_ip = 53; continue _fun0007;
case 38:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 8;
                        var2 = var4[var2];
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.enableFocusLock;
                        var3 = _closure3_slot1;
                        var2 = _closure3_slot0;
                        var2 = var4.bind(var5)(var3, var2);
case 53:
                        return var1;
                    }
                };
                var2 = var5.bind(var1)(var2, var4);
                var3['_focusLockEnabledDelayTimeoutId'] = var2;
                var2 = true;
                var3['_focusLockEnabled'] = var2;
case 47:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = '_initialize';
        var5['key'] = var7;
        var7 = function value() {
            var3 = this;
            var _closure3_slot0 = var3;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 9;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.addScreenReaderEnabledListener;
            var2 = function(arg1) {
                var2 = _closure3_slot0;
                var1 = arg1;
                var2['_screenReaderEnabled'] = var1;
                var1 = var2._updateAccessibilityFocusLock;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            var2 = var4.bind(var5)(var2);
            var3['_screenReaderEnabledListener'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = '_terminate';
        var5['key'] = var7;
        var7 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = this;
                var3 = var2._screenReaderEnabledListener;
                var1 = null;
                if(!(var1 != var3)) { _fun0008_ip = 54; continue _fun0008 }
case 55:
                var1 = var3.call;
                var1 = var1.bind(var3)(var2);
case 54:
                var3 = var2._focusLockedNativeIDGroups;
                var1 = var3.clear;
                var1 = var1.bind(var3)();
                var1 = var2._updateAccessibilityFocusLock;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'enableAccessibilityFocusLock';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var6 = arg1;
                var4 = this;
                var1 = var6.length;
                var2 = 0;
                if(!(var2 === var1)) { _fun0009_ip = 56; continue _fun0009 }
case 57:
                var5 = _closure1_slot9;
                var3 = var5.error;
                var1 = 'No target view nativeIDs to add.';
                var1 = var3.bind(var5)(var1);
case 56:
                var5 = _closure1_slot10;
                var3 = var4._focusLockedNativeIDGroups;
                var1 = var3.values;
                var3 = var1.bind(var3)();
                var1 = undefined;
                var11 = var5.bind(var1)(var3);
                var5 = var11.bind(var1)();
                var3 = var5.done;
                var10 = global;
                var9 = 'Duplicate target view nativeID ';
                var8 = ' already accessibility focus locked.';
                var7 = var5;
                var5 = undefined;
                if(var3) { _fun0009_ip = 58; continue _fun0009 }
case 59:
                var13 = _closure1_slot10;
                var3 = var7.value;
                var14 = var13.bind(var1)(var3);
                var13 = var14.bind(var1)();
                var3 = var13.done;
                if(var3) { _fun0009_ip = 60; continue _fun0009 }
case 61:
                var15 = var13.value;
                var3 = var6.includes;
                var3 = var3.bind(var6)(var15);
                if(!var3) { _fun0009_ip = 62; continue _fun0009 }
case 63:
                var17 = _closure1_slot9;
                var16 = var17.error;
                var3 = var10.HermesInternal;
                var3 = var3.concat;
                var3 = var3.bind(var9)(var15, var8);
                var3 = var16.bind(var17)(var3);
case 62:
                var16 = var14.bind(var1)();
                var3 = var16.done;
                var13 = var16;
                var5 = var15;
                if(!var3) { _fun0009_ip = 61; continue _fun0009 }
case 60:
                var13 = var11.bind(var1)();
                var3 = var13.done;
                var7 = var13;
                if(!var3) { _fun0009_ip = 59; continue _fun0009 }
case 58:
                var5 = var4._focusLockedNativeIDGroups;
                var3 = var5.set;
                var2 = var6[var2];
                var2 = var3.bind(var5)(var2, var6);
                var3 = var4._updateAccessibilityFocusLock;
                var2 = true;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'disableAccessibilityFocusLock';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var5 = arg1;
                var2 = this;
                var3 = var5.length;
                var1 = 0;
                if(!(var1 === var3)) { _fun0010_ip = 56; continue _fun0010 }
case 57:
                var6 = _closure1_slot9;
                var4 = var6.error;
                var3 = 'No target view nativeIDs to remove.';
                var3 = var4.bind(var6)(var3);
case 56:
                var6 = var2._focusLockedNativeIDGroups;
                var4 = var6.has;
                var3 = var5[var1];
                var3 = var4.bind(var6)(var3);
                if(var3) { _fun0010_ip = 53; continue _fun0010 }
case 64:
                var6 = _closure1_slot9;
                var4 = var6.error;
                var9 = var5[var1];
                var3 = global;
                var3 = var3.HermesInternal;
                var8 = var3.concat;
                var7 = 'No target view nativeID ';
                var3 = ' accessibility focus locked.';
                var3 = var8.bind(var7)(var9, var3);
                var3 = var4.bind(var6)(var3);
case 53:
                var4 = var2._focusLockedNativeIDGroups;
                var3 = var4.delete;
                var1 = var5[var1];
                var1 = var3.bind(var4)(var1);
                var1 = var2._updateAccessibilityFocusLock;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/a11y/native/AccessibilityFocusLockManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();