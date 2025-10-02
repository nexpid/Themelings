// app/utils/web/KeyboardLayoutMapUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var12 = require;
        var16 = metroImportDefault;
        var3 = exports;
        var13 = dependencyMap;
        var _closure1_slot0 = var12;
        var _closure1_slot1 = var13;
        var1 = function _isNativeReflectConstruct() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
case 2: // try_start_0
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
case 3: // try_end0
                _fun0002_ip = 4; continue _fun0002;
case 5: // catch_target0
                CatchBlockStart(arg_register=1);
case 4:
                var2 = function _isNativeReflectConstruct() {
                    var1 = _closure2_slot0;
                    var1 = !var1;
                    var1 = !var1;
                    return var1;
                };
                _closure1_slot19 = var2;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            }
        };
        var _closure1_slot19 = var1;
        var1 = function normalizeKey(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = arg1;
                var2 = null;
                var1 = var3;
                if(!(var2 != var1)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                var2 = var3.toLocaleLowerCase;
                var1 = var2.bind(var3)();
case 6:
                return var1;
            }
        };
        var _closure1_slot20 = var1;
        var1 = function syncKeyboardLayoutMap() {
            var1 = undefined;
            var4 = _closure1_slot22;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot21 = var1;
        var1 = function _syncKeyboardLayoutMap() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot6;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                        var3 = global;
                        var2 = var3.navigator;
                        var5 = var2.keyboard;
                        var4 = null;
                        var6 = var4 == var5;
                        var2 = undefined;
                        if(var6) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                        var2 = var5.getLayoutMap;
case 10:
                        if(!(var4 != var2)) { _fun0004_ip = 12; continue _fun0004 }
case 13: // try_start_0
                        var2 = var3.navigator;
                        var4 = var2.keyboard;
                        var2 = var4.getLayoutMap;
                        var2 = var2.bind(var4)();
                        SaveGenerator(address=74);
case 3:
                        return var2;
case 5:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                        var6 = _closure1_slot13;
                        var7 = var3.Object;
                        var5 = var7.fromEntries;
                        var3 = var2.entries;
                        var3 = var3.bind(var2)();
                        var8 = var5.bind(var7)(var3);
                        var5 = var6.prototype;
                        var5 = Object.create(var5, {constructor: {value: var6}});
                        var9 = var5;
                        var3 = new var9[var6](var8, var7);
                        var3 = var3 instanceof Object ? var3 : var5;
                        _closure1_slot14 = var3;
case 16: // try_end0
                        var3 = true;
                        return var3;
case 14:
                        return var2;
case 17: // catch_target0
                        CatchBlockStart(arg_register=1);
                        var2 = _closure1_slot13;
                        var4 = var2.prototype;
                        var4 = Object.create(var4, {constructor: {value: var2}});
                        var9 = var4;
                        var2 = new var9[var2](var8);
                        var2 = var2 instanceof Object ? var2 : var4;
                        _closure1_slot14 = var2;
case 12:
                        var2 = false;
                        return var2;
case 8:
                        return var1;
                    }
                };
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            _closure1_slot22 = var4;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot22 = var1;
        var1 = function getKeyboardLayoutMap() {
            var1 = _closure1_slot14;
            return var1;
        };
        var _closure1_slot23 = var1;
        var8 = function normalizeKeyMap(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var13 = global;
                var1 = var13.Set;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var19 = var2;
                var1 = new var19[var1](var18);
                var12 = var1 instanceof Object ? var1 : var2;
                var1 = {};
                var4 = var13.Object;
                var3 = var4.entries;
                var2 = arg1;
                var11 = var3.bind(var4)(var2);
                var2 = var11.length;
                var10 = 0;
                var2 = var10 < var2;
                var8 = 'Seperate keyCode mappings found for: ';
                var7 = null;
                var6 = undefined;
                var5 = 2;
                var4 = 1;
                var3 = 0;
                if(!var2) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                var14 = var11[var3];
                var2 = _closure1_slot5;
                var2 = var2.bind(var6)(var14, var5);
                var15 = var2[var10];
                var2 = var2[var4];
                var14 = _closure1_slot20;
                var16 = var14.bind(var6)(var15);
                var14 = var12.has;
                var14 = var14.bind(var12)(var16);
                if(!var14) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                var14 = var1[var16];
                if(!(var7 != var14)) { _fun0005_ip = 20; continue _fun0005 }
case 22:
                var14 = var1[var16];
                if(!(var14 === var2)) { _fun0005_ip = 23; continue _fun0005 }
case 20:
                var14 = var12.add;
                var14 = var14.bind(var12)(var16);
                var1[var16] = var2;
                _fun0005_ip = 24; continue _fun0005;
case 23:
                var15 = _closure1_slot10;
                var14 = var15.error;
                var2 = var13.HermesInternal;
                var2 = var2.concat;
                var2 = var2.bind(var8)(var16);
                var2 = var14.bind(var15)(var2);
case 24:
                var3 = var3 + 1;
                var2 = var11.length;
                if(var3 < var2) { _fun0005_ip = 19; continue _fun0005 }
case 18:
                return var1;
            }
        };
        var _closure1_slot24 = var8;
        var1 = function getNormalizedEvent(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = arg1;
                var1 = {};
                var3 = var2.keyCode;
                var1['keyCode'] = var3;
                var4 = var2.key;
                var3 = null;
                var4 = var3 != var4;
                var6 = undefined;
                var3 = undefined;
                if(!var4) { _fun0006_ip = 25; continue _fun0006 }
case 26:
                var5 = _closure1_slot20;
                var4 = var2.key;
                var3 = var5.bind(var6)(var4);
case 25:
                var1['key'] = var3;
                var2 = var2.code;
                var1['code'] = var2;
                return var1;
            }
        };
        var _closure1_slot25 = var1;
        var7 = function initializeKeyboardMapper() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = _closure1_slot18;
                var2 = null;
                if(!(var2 == var3)) { _fun0007_ip = 27; continue _fun0007 }
case 28:
                var2 = global;
                var4 = var2.Promise;
                var3 = function() {
                    var4 = _closure1_slot6;
                    var3 = undefined;
                    var2 = function* (arg1) {
                        var1 = function* anon_0_(arg1) {
                            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0008_ip = 29; continue _fun0008 }
case 30:
                                var2 = _closure1_slot21;
                                var3 = undefined;
                                var2 = var2.bind(var3)();
                                SaveGenerator(address=24);
case 6:
                                return var2;
case 31:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                if(var4) { _fun0008_ip = 32; continue _fun0008 }
case 33:
                                var7 = _closure1_slot16;
                                var9 = _closure1_slot11;
                                var6 = var7.prototype;
                                var6 = Object.create(var6, {constructor: {value: var7}});
                                var10 = var6;
                                var4 = new var10[var7](var9, var8);
                                var4 = var4 instanceof Object ? var4 : var6;
                                _closure1_slot17 = var4;
                                var4 = global;
                                var7 = var4.document;
                                var6 = var7.addEventListener;
                                var5 = 'keydown';
                                var4 = function(arg1) {
                                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                                        var6 = arg1;
                                        var1 = undefined;
                                        var2 = undefined;
case 30: // try_start_0
                                        var4 = _closure1_slot17;
                                        var2 = var4;
                                        var3 = null;
                                        if(!(var3 != var4)) { _fun0009_ip = 34; continue _fun0009 }
case 35:
                                        var4 = var2;
                                        var3 = var4.addEvent;
                                        var2 = var6;
                                        var2 = var3.bind(var4)(var2);
case 34: // try_end0
                                        _fun0009_ip = 36; continue _fun0009;
case 37: // catch_target0
                                        CatchBlockStart(arg_register=1);
                                        var5 = _closure1_slot10;
                                        var4 = var5.error;
                                        var3 = {};
                                        var3['event'] = var6;
                                        var3['error'] = var2;
                                        var2 = 'KeyboardMapper - Error adding event';
                                        var2 = var4.bind(var5)(var2, var3);
case 36:
                                        return var1;
                                    }
                                };
                                var4 = var6.bind(var7)(var5, var4);
                                var4 = arg1;
                                var4 = var4.bind(var3)();
                                return var3;
case 32:
                                return var2;
case 29:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var2 = var4.bind(var3)(var2);
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        var1 = undefined;
                        var4 = _closure3_slot0;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    return var1;
                };
                var2 = undefined;
                var5 = var3.bind(var2)();
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var6 = var3;
                var2 = new var6[var4](var5, var4);
                var2 = var2 instanceof Object ? var2 : var3;
                _closure1_slot18 = var2;
case 27:
                var1 = _closure1_slot18;
                return var1;
            }
        };
        var _closure1_slot26 = var7;
        var6 = function getKeyboardMapper() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var1 = _closure1_slot17;
                var2 = null;
                if(!(var2 != var1)) { _fun0010_ip = 38; continue _fun0010 }
case 28:
                var1 = _closure1_slot17;
                _fun0010_ip = 39; continue _fun0010;
case 38:
                var4 = _closure1_slot26;
                var3 = undefined;
                var3 = var4.bind(var3)();
                var1 = null;
case 39:
                return var1;
            }
        };
        var _closure1_slot27 = var6;
        var1 = function _resetKeyboardMapper() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot6;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0011_ip = 27; continue _fun0011 }
case 30:
                        var2 = _closure1_slot21;
                        var3 = undefined;
                        var2 = var2.bind(var3)();
                        SaveGenerator(address=24);
case 6:
                        return var2;
case 31:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0011_ip = 40; continue _fun0011 }
case 33:
                        var4 = _closure1_slot27;
                        var5 = var4.bind(var3)();
                        var4 = null;
                        if(!(var4 != var5)) { _fun0011_ip = 41; continue _fun0011 }
case 42:
                        var4 = var5.reset;
                        var4 = var4.bind(var5)();
case 41:
                        return var3;
case 40:
                        return var2;
case 27:
                        return var1;
                    }
                };
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            _closure1_slot28 = var4;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot28 = var1;
        var5 = function reverseLookupCodeFromKey(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var4 = arg1;
                var3 = null;
                var2 = var3 != var4;
                var1 = undefined;
                var6 = undefined;
                if(!var2) { _fun0012_ip = 43; continue _fun0012 }
case 44:
                var2 = _closure1_slot20;
                var6 = var2.bind(var1)(var4);
case 43:
                if(!(var3 == var6)) { _fun0012_ip = 26; continue _fun0012 }
case 45:
                return var1;
case 26:
                var2 = _closure1_slot27;
                var5 = var2.bind(var1)();
                var4 = var3 == var5;
                var2 = undefined;
                if(var4) { _fun0012_ip = 46; continue _fun0012 }
case 41:
                var4 = var5.findCodeFromKeyboardLayoutMap;
                var2 = var4.bind(var5)(var6);
case 46:
                var3 = var3 != var2;
                var1 = undefined;
                if(!var3) { _fun0012_ip = 47; continue _fun0012 }
case 5:
                var1 = var2;
case 47:
                return var1;
            }
        };
        var _closure1_slot29 = var5;
        var4 = function getExactKeyboardEventMatchFromAny(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var3 = _closure1_slot25;
                var2 = undefined;
                var1 = arg1;
                var3 = var3.bind(var2)(var1);
                var1 = var3.key;
                var4 = null;
                var6 = var4 != var1;
                var1 = null;
                if(!var6) { _fun0013_ip = 48; continue _fun0013 }
case 49:
                var5 = _closure1_slot27;
                var8 = var5.bind(var2)();
                var5 = var4 == var8;
                var2 = undefined;
                if(var5) { _fun0013_ip = 50; continue _fun0013 }
case 51:
                var7 = var8.findExactKeyboardEventMatch;
                var6 = var3.key;
                var5 = var3.code;
                var3 = var3.keyCode;
                var2 = var7.bind(var8)(var6, var5, var3);
case 50:
                var3 = var4 != var2;
                var1 = null;
                if(!var3) { _fun0013_ip = 48; continue _fun0013 }
case 52:
                var1 = var2;
case 48:
                return var1;
            }
        };
        var _closure1_slot30 = var4;
        var9 = global;
        var14 = var9.Object;
        var11 = var14.defineProperty;
        var10 = {};
        var1 = true;
        var10['value'] = var1;
        var1 = '__esModule';
        var1 = var11.bind(var14)(var3, var1, var10);
        var1 = 0;
        var10 = var13[var1];
        var1 = undefined;
        var10 = var16.bind(var1)(var10);
        var _closure1_slot2 = var10;
        var10 = 1;
        var10 = var13[var10];
        var10 = var16.bind(var1)(var10);
        var _closure1_slot3 = var10;
        var10 = 2;
        var10 = var13[var10];
        var10 = var16.bind(var1)(var10);
        var _closure1_slot4 = var10;
        var10 = 3;
        var10 = var13[var10];
        var10 = var16.bind(var1)(var10);
        var _closure1_slot5 = var10;
        var10 = 4;
        var10 = var13[var10];
        var10 = var16.bind(var1)(var10);
        var _closure1_slot6 = var10;
        var10 = 5;
        var10 = var13[var10];
        var10 = var16.bind(var1)(var10);
        var _closure1_slot7 = var10;
        var10 = 6;
        var10 = var13[var10];
        var10 = var16.bind(var1)(var10);
        var _closure1_slot8 = var10;
        var10 = 7;
        var10 = var13[var10];
        var10 = var16.bind(var1)(var10);
        var _closure1_slot9 = var10;
        var10 = 8;
        var10 = var13[var10];
        var14 = var12.bind(var1)(var10);
        var10 = var14.LinuxKeyToCode;
        var11 = var14.MacosKeyToCode;
        var14 = var14.WindowsKeyToCode;
        var15 = 9;
        var15 = var13[var15];
        var18 = var16.bind(var1)(var15);
        var15 = var18.prototype;
        var17 = Object.create(var15, {constructor: {value: var18}});
        var21 = 'KeyboardLayoutMapUtils';
        var22 = var17;
        var15 = new var22[var18](var21, var20);
        var15 = var15 instanceof Object ? var15 : var17;
        var _closure1_slot10 = var15;
        var15 = 10;
        var17 = var13[var15];
        var18 = var12.bind(var1)(var17);
        var17 = var18.isLinux;
        var17 = var17.bind(var18)();
        if(var17) { _fun0001_ip = 53; continue _fun0001 }
case 54:
        var17 = var13[var15];
        var18 = var12.bind(var1)(var17);
        var17 = var18.isMac;
        var17 = var17.bind(var18)();
        if(var17) { _fun0001_ip = 55; continue _fun0001 }
case 56:
        var15 = var13[var15];
        var17 = var12.bind(var1)(var15);
        var15 = var17.isWindows;
        var15 = var15.bind(var17)();
        if(var15) { _fun0001_ip = 57; continue _fun0001 }
case 58:
        var15 = 11;
        var15 = var13[var15];
        var15 = var16.bind(var1)(var15);
        var14 = var15.codes;
case 57:
        var11 = var14;
case 55:
        var10 = var11;
case 53:
        var _closure1_slot11 = var10;
        var14 = var9.Set;
        var10 = var14.prototype;
        var11 = Object.create(var10, {constructor: {value: var14}});
        var21 = [192, 220, 222, 223, 229];
        var22 = var11;
        var10 = new var22[var14](var21, var20);
        var10 = var10 instanceof Object ? var10 : var11;
        var14 = var9.Object;
        var11 = var14.freeze;
        var9 = {'KeyA': 'a', 'KeyB': 'b', 'KeyC': 'c', 'KeyD': 'd', 'KeyE': 'e', 'KeyF': 'f', 'KeyG': 'g', 'KeyH': 'h', 'KeyI': 'i', 'KeyJ': 'j', 'KeyK': 'k', 'KeyL': 'l', 'KeyM': 'm', 'KeyN': 'n', 'KeyO': 'o', 'KeyP': 'p', 'KeyQ': 'q', 'KeyR': 'r', 'KeyS': 's', 'KeyT': 't', 'KeyU': 'u', 'KeyV': 'v', 'KeyW': 'w', 'KeyX': 'x', 'KeyY': 'y', 'KeyZ': 'z', 'Digit0': '0', 'Digit1': '1', 'Digit2': '2', 'Digit3': '3', 'Digit4': '4', 'Digit5': '5', 'Digit6': '6', 'Digit7': '7', 'Digit8': '8', 'Digit9': '9', 'Backquote': '`', 'Backslash': '\\', 'Quote': "'", 'Slash': '/', 'Comma': ',', 'Period': '.', 'Semicolon': ';', 'Equal': '=', 'Minus': '-', 'BracketLeft': '[', 'BracketRight': ']', 'IntlBackslash': '§'};
        var9 = var11.bind(var14)(var9);
        var _closure1_slot12 = var9;
        var11 = function() {
            var4 = _closure1_slot8;
            var3 = function DiscordKeyboardLayoutMap() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var6 = arguments[0];
                    var3 = this;
                    var1 = undefined;
                    if(!(var6 === var1)) { _fun0014_ip = 38; continue _fun0014 }
case 7:
                    var6 = _closure1_slot12;
case 38:
                    var4 = _closure1_slot7;
                    var2 = _closure2_slot0;
                    var2 = var4.bind(var1)(var3, var2);
                    var2 = global;
                    var5 = var2.Map;
                    var4 = var2.Object;
                    var2 = var4.entries;
                    var6 = var2.bind(var4)(var6);
                    var4 = var6.map;
                    var2 = function(arg1) {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                            var6 = arg1;
                            var1 = var6[Symbol.iterator];
                            var6 = var1().next;
                            var3 = var6().value;
                            var2 = var1;
                            var4 = undefined;
                            var5 = var2 === var4;
                            var2 = undefined;
                            if(var5) { _fun0015_ip = 59; continue _fun0015 }
case 31:
                            var2 = var3;
case 59:
                            var3 = undefined;
                            if(var5) { _fun0015_ip = 40; continue _fun0015 }
case 45:
                            var7 = var6().value;
                            var6 = var1;
                            var6 = var6 === var4;
                            var3 = undefined;
                            var5 = var6;
                            if(var6) { _fun0015_ip = 40; continue _fun0015 }
case 25:
                            var3 = var7;
                            var5 = var6;
case 40:
                            if(var5) { _fun0015_ip = 60; continue _fun0015 }
case 27:
                            var1.return();
case 60:
                            var1 = new Array(2);
                            var1[0] = var2;
                            var2 = _closure1_slot20;
                            var2 = var2.bind(var4)(var3);
                            var1[1] = var2;
                            return var1;
                        }
                    };
                    var8 = var4.bind(var6)(var2);
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {constructor: {value: var5}});
                    var9 = var4;
                    var2 = new var9[var5](var8, var7);
                    var2 = var2 instanceof Object ? var2 : var4;
                    var3['map'] = var2;
                    return var1;
                }
            };
            var _closure2_slot0 = var3;
            var1 = {};
            var2 = 'get';
            var1['key'] = var2;
            var2 = function value(arg1) {
                var1 = this;
                var3 = var1.map;
                var2 = var3.get;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1['value'] = var2;
            var2 = new Array(8);
            var2[0] = var1;
            var1 = {};
            var6 = 'has';
            var1['key'] = var6;
            var6 = function value(arg1) {
                var1 = this;
                var3 = var1.map;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1['value'] = var6;
            var2[1] = var1;
            var1 = {};
            var6 = 'keys';
            var1['key'] = var6;
            var6 = function value() {
                var1 = this;
                var2 = var1.map;
                var1 = var2.keys;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1['value'] = var6;
            var2[2] = var1;
            var1 = {};
            var6 = 'values';
            var1['key'] = var6;
            var6 = function value() {
                var1 = this;
                var2 = var1.map;
                var1 = var2.values;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1['value'] = var6;
            var2[3] = var1;
            var1 = {};
            var6 = 'entries';
            var1['key'] = var6;
            var6 = function value() {
                var1 = this;
                var2 = var1.map;
                var1 = var2.entries;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1['value'] = var6;
            var2[4] = var1;
            var1 = {};
            var6 = 'forEach';
            var1['key'] = var6;
            var6 = function value(arg1, arg2) {
                var1 = this;
                var4 = var1.map;
                var3 = var4.forEach;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1['value'] = var6;
            var2[5] = var1;
            var1 = {};
            var6 = 'size';
            var1['key'] = var6;
            var6 = function get() {
                var1 = this;
                var1 = var1.map;
                var1 = var1.size;
                return var1;
            };
            var1['get'] = var6;
            var2[6] = var1;
            var1 = {};
            var6 = '_set';
            var1['key'] = var6;
            var5 = function value(arg1, arg2) {
                var1 = this;
                var4 = var1.map;
                var3 = var4.set;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            };
            var1['value'] = var5;
            var2[7] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var11 = var11.bind(var1)();
        var _closure1_slot13 = var11;
        var14 = var11.prototype;
        var14 = Object.create(var14, {constructor: {value: var11}});
        var22 = var14;
        var11 = new var22[var11](var21);
        var11 = var11 instanceof Object ? var11 : var14;
        var _closure1_slot14 = var11;
        var11 = 'keyboard-layout-map';
        var _closure1_slot15 = var11;
        var11 = function() {
            var4 = _closure1_slot8;
            var3 = function BaseKeyboardMapper() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var6 = arguments[0];
                    var3 = this;
                    var1 = undefined;
                    if(!(var6 === var1)) { _fun0016_ip = 61; continue _fun0016 }
case 7:
                    var6 = {};
case 61:
                    var5 = _closure1_slot7;
                    var2 = _closure2_slot0;
                    var2 = var5.bind(var1)(var3, var2);
                    var5 = null;
                    var3['_internalKeyLayoutMap'] = var5;
                    var2 = new Array(0);
                    var3['_cachedKeyCodeMapEntries'] = var2;
                    var2 = new Array(0);
                    var3['_cachedKeyMapEntries'] = var2;
                    var2 = new Array(0);
                    var3['_cachedKeyLayoutMapEntries'] = var2;
                    var2 = new Array(0);
                    var3['_cachedAllEvents'] = var2;
                    var3['_defaultKeyMap'] = var6;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var2 = 12;
                    var2 = var8[var2];
                    var2 = var7.bind(var1)(var2);
                    var8 = var2.Storage;
                    var7 = var8.get;
                    var2 = _closure1_slot15;
                    var7 = var7.bind(var8)(var2);
                    var8 = var5 != var7;
                    var2 = null;
                    if(!var8) { _fun0016_ip = 62; continue _fun0016 }
case 22:
                    var2 = var7;
case 62:
                    if(!(var5 == var2)) { _fun0016_ip = 63; continue _fun0016 }
case 64:
                    var5 = _closure1_slot24;
                    var4 = {};
                    var10 = var4;
                    var9 = var6;
                    var6 = copyDataProperties(var10, var9);
                    var2 = var5.bind(var1)(var4);
case 63:
                    var3['keyMap'] = var2;
                    var2 = var3._initializeInternalLayoutMap;
                    var2 = var2.bind(var3)();
                    var2 = var3._buildKeyCodeMapFromKeyMap;
                    var2 = var2.bind(var3)();
                    var3['keyCodeMap'] = var2;
                    var2 = var3.updateCaches;
                    var2 = var2.bind(var3)();
                    var2 = var3.save;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var _closure2_slot0 = var3;
            var1 = {};
            var2 = '_setCachedKeyCodeMapEntries';
            var1['key'] = var2;
            var2 = function value() {
                var2 = this;
                var3 = global;
                var5 = var3.Object;
                var4 = var5.entries;
                var3 = var2.keyCodeMap;
                var5 = var4.bind(var5)(var3);
                var4 = var5.map;
                var3 = function(arg1) {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        var6 = arg1;
                        var1 = var6[Symbol.iterator];
                        var6 = var1().next;
                        var2 = var6().value;
                        var3 = var1;
                        var4 = undefined;
                        var5 = var3 === var4;
                        var3 = undefined;
                        if(var5) { _fun0017_ip = 59; continue _fun0017 }
case 31:
                        var3 = var2;
case 59:
                        var2 = undefined;
                        if(var5) { _fun0017_ip = 40; continue _fun0017 }
case 45:
                        var7 = var6().value;
                        var6 = var1;
                        var6 = var6 === var4;
                        var2 = undefined;
                        var5 = var6;
                        if(var6) { _fun0017_ip = 40; continue _fun0017 }
case 25:
                        var2 = var7;
                        var5 = var6;
case 40:
                        if(var5) { _fun0017_ip = 60; continue _fun0017 }
case 27:
                        var1.return();
case 60:
                        var1 = global;
                        var1 = var1.Number;
                        var3 = var1.bind(var4)(var3);
                        var1 = new Array(2);
                        var1[0] = var3;
                        var1[1] = var2;
                        return var1;
                    }
                };
                var3 = var4.bind(var5)(var3);
                var2['_cachedKeyCodeMapEntries'] = var3;
                var4 = var2._cachedKeyCodeMapEntries;
                var3 = var4.flatMap;
                var1 = function(arg1) {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                        var4 = arg1;
                        var2 = var4[Symbol.iterator];
                        var4 = var2().next;
                        var1 = var4().value;
                        var1 = var2;
                        var6 = undefined;
                        var3 = var1 === var6;
                        var1 = undefined;
                        if(var3) { _fun0018_ip = 65; continue _fun0018 }
case 31:
                        var5 = var4().value;
                        var4 = var2;
                        var4 = var4 === var6;
                        var1 = undefined;
                        var3 = var4;
                        if(var4) { _fun0018_ip = 65; continue _fun0018 }
case 66:
                        var1 = var5;
                        var3 = var4;
case 65:
                        if(var3) { _fun0018_ip = 67; continue _fun0018 }
case 68:
                        var2.return();
case 67:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1);
                var2['_cachedAllEvents'] = var1;
                var1 = undefined;
                return var1;
            };
            var1['value'] = var2;
            var2 = new Array(18);
            var2[0] = var1;
            var1 = {};
            var6 = '_setCachedKeyMapEntries';
            var1['key'] = var6;
            var6 = function value() {
                var2 = this;
                var1 = global;
                var4 = var1.Object;
                var3 = var4.entries;
                var1 = var2.keyMap;
                var1 = var3.bind(var4)(var1);
                var2['_cachedKeyMapEntries'] = var1;
                var1 = undefined;
                return var1;
            };
            var1['value'] = var6;
            var2[1] = var1;
            var1 = {};
            var6 = '_setCachedKeyLayoutMapEntries';
            var1['key'] = var6;
            var6 = function value() {
                var2 = this;
                var1 = global;
                var4 = var1.Array;
                var3 = var4.from;
                var1 = var2.getLayoutMap;
                var5 = var1.bind(var2)();
                var1 = var5.entries;
                var1 = var1.bind(var5)();
                var1 = var3.bind(var4)(var1);
                var2['_cachedKeyLayoutMapEntries'] = var1;
                var1 = undefined;
                return var1;
            };
            var1['value'] = var6;
            var2[2] = var1;
            var1 = {};
            var6 = 'cachedKeyCodeMapEntries';
            var1['key'] = var6;
            var6 = function get() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var1 = this;
                    var2 = var1._cachedKeyCodeMapEntries;
                    var3 = var2.length;
                    var2 = 0;
                    if(!(var2 === var3)) { _fun0019_ip = 33; continue _fun0019 }
case 69:
                    var2 = var1._setCachedKeyCodeMapEntries;
                    var2 = var2.bind(var1)();
case 33:
                    var1 = var1._cachedKeyCodeMapEntries;
                    return var1;
                }
            };
            var1['get'] = var6;
            var2[3] = var1;
            var1 = {};
            var6 = 'cachedKeyMapEntries';
            var1['key'] = var6;
            var6 = function get() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var1 = this;
                    var2 = var1._cachedKeyMapEntries;
                    var3 = var2.length;
                    var2 = 0;
                    if(!(var2 === var3)) { _fun0020_ip = 33; continue _fun0020 }
case 69:
                    var2 = var1._setCachedKeyMapEntries;
                    var2 = var2.bind(var1)();
case 33:
                    var1 = var1._cachedKeyMapEntries;
                    return var1;
                }
            };
            var1['get'] = var6;
            var2[4] = var1;
            var1 = {};
            var6 = 'cachedKeyLayoutMapEntries';
            var1['key'] = var6;
            var6 = function get() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var1 = this;
                    var2 = var1._cachedKeyLayoutMapEntries;
                    var3 = var2.length;
                    var2 = 0;
                    if(!(var2 === var3)) { _fun0021_ip = 33; continue _fun0021 }
case 69:
                    var2 = var1._setCachedKeyLayoutMapEntries;
                    var2 = var2.bind(var1)();
case 33:
                    var1 = var1._cachedKeyLayoutMapEntries;
                    return var1;
                }
            };
            var1['get'] = var6;
            var2[5] = var1;
            var1 = {};
            var6 = 'cachedAllEvents';
            var1['key'] = var6;
            var6 = function get() {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var1 = this;
                    var2 = var1._cachedAllEvents;
                    var3 = var2.length;
                    var2 = 0;
                    if(!(var2 === var3)) { _fun0022_ip = 33; continue _fun0022 }
case 69:
                    var2 = var1._setCachedKeyCodeMapEntries;
                    var2 = var2.bind(var1)();
case 33:
                    var1 = var1._cachedAllEvents;
                    return var1;
                }
            };
            var1['get'] = var6;
            var2[6] = var1;
            var1 = {};
            var6 = 'getKeyCodeMapItem';
            var1['key'] = var6;
            var6 = function value(arg1) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var2 = arg1;
                    var1 = this;
                    var3 = var1.keyCodeMap;
                    var4 = var3[var2];
                    var3 = null;
                    if(!(var3 == var4)) { _fun0023_ip = 70; continue _fun0023 }
case 6:
                    var4 = var1.keyCodeMap;
                    var3 = new Array(0);
                    var4[var2] = var3;
case 70:
                    var1 = var1.keyCodeMap;
                    var1 = var1[var2];
                    return var1;
                }
            };
            var1['value'] = var6;
            var2[7] = var1;
            var1 = {};
            var6 = '_buildKeyCodeMapFromKeyMap';
            var1['key'] = var6;
            var6 = function value() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var12 = this;
                    var1 = {};
                    var2 = global;
                    var4 = var2.Object;
                    var3 = var4.entries;
                    var2 = var12.keyMap;
                    var11 = var3.bind(var4)(var2);
                    var2 = var11.length;
                    var10 = 0;
                    var2 = var10 < var2;
                    var9 = true;
                    var7 = undefined;
                    var6 = 2;
                    var5 = 1;
                    var4 = null;
                    var3 = 0;
                    if(!var2) { _fun0024_ip = 71; continue _fun0024 }
case 72:
                    var13 = var11[var3];
                    var2 = _closure1_slot5;
                    var2 = var2.bind(var7)(var13, var6);
                    var16 = var2[var10];
                    var15 = var2[var5];
                    var2 = var1[var15];
                    if(!(var4 == var2)) { _fun0024_ip = 73; continue _fun0024 }
case 74:
                    var2 = new Array(0);
case 73:
                    var1[var15] = var2;
                    var14 = var1[var15];
                    var13 = var14.push;
                    var2 = {};
                    var2['keyCode'] = var15;
                    var2['key'] = var16;
                    var15 = var12.findCodeFromKeyboardLayoutMap;
                    var15 = var15.bind(var12)(var16, var9);
                    var2['code'] = var15;
                    var2 = var13.bind(var14)(var2);
                    var3 = var3 + 1;
                    var2 = var11.length;
                    if(var3 < var2) { _fun0024_ip = 72; continue _fun0024 }
case 71:
                    return var1;
                }
            };
            var1['value'] = var6;
            var2[8] = var1;
            var1 = {};
            var6 = '_initializeInternalLayoutMap';
            var1['key'] = var6;
            var6 = function value() {
                var3 = this;
                var2 = _closure1_slot23;
                var1 = undefined;
                var7 = var2.bind(var1)();
                var2 = global;
                var5 = var2.Map;
                var6 = var2.Array;
                var4 = var6.from;
                var2 = var7.entries;
                var2 = var2.bind(var7)();
                var8 = var4.bind(var6)(var2);
                var4 = var5.prototype;
                var4 = Object.create(var4, {constructor: {value: var5}});
                var9 = var4;
                var2 = new var9[var5](var8, var7);
                var2 = var2 instanceof Object ? var2 : var4;
                var3['_internalKeyLayoutMap'] = var2;
                var2 = var3._setCachedKeyLayoutMapEntries;
                var2 = var2.bind(var3)();
                return var1;
            };
            var1['value'] = var6;
            var2[9] = var1;
            var1 = {};
            var6 = '_hasExactMatch';
            var1['key'] = var6;
            var6 = function value(arg1) {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var3 = arg1;
                    var _closure3_slot0 = var3;
                    var4 = var3.keyCode;
                    var1 = null;
                    if(!(var1 != var4)) { _fun0025_ip = 75; continue _fun0025 }
case 76:
                    var4 = this;
                    var4 = var4.keyCodeMap;
                    var3 = var3.keyCode;
                    var4 = var4[var3];
                    var1 = var1 != var4;
                    if(!var1) { _fun0025_ip = 46; continue _fun0025 }
case 77:
                    var3 = var4.some;
                    var2 = function(arg1) {
                        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                            var3 = arg1;
                            var4 = var3.key;
                            var1 = _closure3_slot0;
                            var1 = var1.key;
                            var1 = var4 === var1;
                            if(!var1) { _fun0026_ip = 78; continue _fun0026 }
case 59:
                            var5 = var3.code;
                            var4 = _closure3_slot0;
                            var4 = var4.code;
                            var1 = var5 === var4;
case 78:
                            if(!var1) { _fun0026_ip = 79; continue _fun0026 }
case 13:
                            var3 = var3.keyCode;
                            var2 = _closure3_slot0;
                            var2 = var2.keyCode;
                            var1 = var3 === var2;
case 79:
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2);
case 46:
                    return var1;
case 75:
                    var1 = false;
                    return var1;
                }
            };
            var1['value'] = var6;
            var2[10] = var1;
            var1 = {};
            var6 = 'addEvent';
            var1['key'] = var6;
            var6 = function value(arg1) {
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                    var3 = this;
                    var4 = _closure1_slot25;
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var4.bind(var1)(var2);
                    var6 = var3._internalKeyLayoutMap;
                    var4 = null;
                    if(!(var4 == var6)) { _fun0027_ip = 37; continue _fun0027 }
case 45:
                    var6 = var3._initializeInternalLayoutMap;
                    var6 = var6.bind(var3)();
case 37:
                    var6 = var3._hasExactMatch;
                    var6 = var6.bind(var3)(var2);
                    if(var6) { _fun0027_ip = 80; continue _fun0027 }
case 72:
                    var6 = var2.key;
                    var6 = var4 != var6;
                    if(!var6) { _fun0027_ip = 81; continue _fun0027 }
case 82:
                    var8 = var2.key;
                    var7 = 'dead';
                    var6 = var7 !== var8;
case 81:
                    if(!var6) { _fun0027_ip = 80; continue _fun0027 }
case 83:
                    var7 = var3.keyMap;
                    var6 = var2.key;
                    var6 = var7[var6];
                    if(!(var4 != var6)) { _fun0027_ip = 84; continue _fun0027 }
case 85:
                    var7 = var3.keyMap;
                    var6 = var2.key;
                    var7 = var7[var6];
                    var6 = var2.keyCode;
                    var6 = var7 !== var6;
                    if(!var6) { _fun0027_ip = 86; continue _fun0027 }
case 87:
                    var7 = _closure1_slot9;
                    var6 = var7.logKeyboardMismatches;
case 86:
                    if(!var6) { _fun0027_ip = 88; continue _fun0027 }
case 89:
                    var7 = _closure1_slot10;
                    var6 = var7.error;
                    var18 = var2.key;
                    var8 = var3.keyMap;
                    var5 = var2.key;
                    var16 = var8[var5];
                    var14 = var2.keyCode;
                    var5 = global;
                    var5 = var5.HermesInternal;
                    var10 = var5.concat;
                    var19 = 'KeyboardMapper - Key code mismatch for key ';
                    var17 = ': ';
                    var15 = ' !== ';
                    var5 = var19[var10](var18, var17, var16, var15, var14, var13);
                    var5 = var6.bind(var7)(var5);
                    _fun0027_ip = 88; continue _fun0027;
case 84:
                    var7 = var3.keyMap;
                    var6 = var2.key;
                    var5 = var2.keyCode;
                    var7[var6] = var5;
case 88:
                    var7 = var3.keyCodeMap;
                    var6 = var2.keyCode;
                    var8 = var3.keyCodeMap;
                    var5 = var2.keyCode;
                    var5 = var8[var5];
                    if(!(var4 == var5)) { _fun0027_ip = 90; continue _fun0027 }
case 91:
                    var5 = new Array(0);
case 90:
                    var7[var6] = var5;
                    var6 = var3.keyCodeMap;
                    var5 = var2.keyCode;
                    var6 = var6[var5];
                    var5 = var6.push;
                    var5 = var5.bind(var6)(var2);
                    var6 = var3._internalKeyLayoutMap;
                    if(!(var4 != var6)) { _fun0027_ip = 92; continue _fun0027 }
case 93:
                    var5 = var6.set;
                    var4 = var2.code;
                    var2 = var2.key;
                    var2 = var5.bind(var6)(var4, var2);
case 92:
                    var2 = var3.updateCaches;
                    var2 = var2.bind(var3)();
case 80:
                    return var1;
                }
            };
            var1['value'] = var6;
            var2[11] = var1;
            var1 = {};
            var6 = 'updateCaches';
            var1['key'] = var6;
            var6 = function value() {
                var2 = this;
                var1 = var2._setCachedKeyCodeMapEntries;
                var1 = var1.bind(var2)();
                var1 = var2._setCachedKeyMapEntries;
                var1 = var1.bind(var2)();
                var1 = var2._setCachedKeyLayoutMapEntries;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            var1['value'] = var6;
            var2[12] = var1;
            var1 = {};
            var6 = 'reset';
            var1['key'] = var6;
            var6 = function value() {
                var3 = this;
                var1 = null;
                var3['_internalKeyLayoutMap'] = var1;
                var4 = _closure1_slot24;
                var2 = {};
                var5 = var3._defaultKeyMap;
                var6 = var2;
                var1 = copyDataProperties(var6, var5);
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var3['keyMap'] = var2;
                var2 = var3._initializeInternalLayoutMap;
                var2 = var2.bind(var3)();
                var2 = var3._buildKeyCodeMapFromKeyMap;
                var2 = var2.bind(var3)();
                var3['keyCodeMap'] = var2;
                var2 = var3.updateCaches;
                var2 = var2.bind(var3)();
                var2 = var3.save;
                var2 = var2.bind(var3)();
                return var1;
            };
            var1['value'] = var6;
            var2[13] = var1;
            var1 = {};
            var6 = 'save';
            var1['key'] = var6;
            var6 = function value() {
                var1 = this;
                var5 = var1.keyMap;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 12;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var4 = var3.Storage;
                var3 = var4.set;
                var2 = _closure1_slot15;
                var2 = var3.bind(var4)(var2, var5);
                return var1;
            };
            var1['value'] = var6;
            var2[14] = var1;
            var1 = {};
            var6 = 'getLayoutMap';
            var1['key'] = var6;
            var6 = function value() {
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                    var1 = this;
                    var3 = var1._internalKeyLayoutMap;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0028_ip = 35; continue _fun0028 }
case 94:
                    var1 = var1._internalKeyLayoutMap;
                    _fun0028_ip = 70; continue _fun0028;
case 35:
                    var3 = _closure1_slot23;
                    var2 = undefined;
                    var1 = var3.bind(var2)();
case 70:
                    return var1;
                }
            };
            var1['value'] = var6;
            var2[15] = var1;
            var1 = {};
            var6 = 'getKeyCode';
            var1['key'] = var6;
            var6 = function value(arg1) {
                var1 = this;
                var2 = var1.keyMap;
                var1 = arg1;
                var1 = var2[var1];
                return var1;
            };
            var1['value'] = var6;
            var2[16] = var1;
            var1 = {};
            var6 = 'findCodeFromKeyboardLayoutMap';
            var1['key'] = var6;
            var5 = function value(arg1) {
                _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                    var1 = arg1;
                    var4 = arguments[1];
                    var2 = undefined;
                    if(!(var4 === var2)) { _fun0029_ip = 44; continue _fun0029 }
case 61:
                    var4 = false;
case 44:
                    var _closure3_slot0 = var2;
                    var5 = this;
                    var5 = var5.cachedKeyLayoutMapEntries;
                    if(!var4) { _fun0029_ip = 82; continue _fun0029 }
case 26:
                    var4 = global;
                    var7 = var4.Array;
                    var6 = var7.from;
                    var4 = _closure1_slot23;
                    var8 = var4.bind(var2)();
                    var4 = var8.entries;
                    var4 = var4.bind(var8)();
                    var5 = var6.bind(var7)(var4);
case 82:
                    var4 = _closure1_slot20;
                    var4 = var4.bind(var2)(var1);
                    _closure3_slot0 = var4;
                    var4 = var5.find;
                    var3 = function(arg1) {
                        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                            var4 = arg1;
                            var1 = var4[Symbol.iterator];
                            var4 = var1().next;
                            var2 = var4().value;
                            var2 = var1;
                            var6 = undefined;
                            var3 = var2 === var6;
                            var2 = undefined;
                            if(var3) { _fun0030_ip = 65; continue _fun0030 }
case 31:
                            var5 = var4().value;
                            var4 = var1;
                            var4 = var4 === var6;
                            var2 = undefined;
                            var3 = var4;
                            if(var4) { _fun0030_ip = 65; continue _fun0030 }
case 66:
                            var2 = var5;
                            var3 = var4;
case 65:
                            if(var3) { _fun0030_ip = 67; continue _fun0030 }
case 68:
                            var1.return();
case 67:
                            var1 = _closure3_slot0;
                            var1 = var2 === var1;
                            return var1;
                        }
                    };
                    var5 = var4.bind(var5)(var3);
                    var3 = null;
                    var4 = var3 == var5;
                    var2 = undefined;
                    if(var4) { _fun0029_ip = 95; continue _fun0029 }
case 96:
                    var4 = 0;
                    var2 = var5[var4];
case 95:
                    if(!(var3 != var2)) { _fun0029_ip = 97; continue _fun0029 }
case 98:
                    var1 = var2;
case 97:
                    return var1;
                }
            };
            var1['value'] = var5;
            var2[17] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var14 = var11.bind(var1)();
        var11 = function(arg1) {
            var4 = function KeyboardMapper() {
                _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                    var4 = this;
                    var3 = undefined;
                    var5 = undefined;
                    var1 = _closure1_slot7;
                    var2 = _closure2_slot0;
                    var1 = var1.bind(var3)(var4, var2);
                    var1 = _closure1_slot3;
                    var9 = var1.bind(var3)(var2);
                    var2 = _closure1_slot2;
                    var1 = _closure1_slot19;
                    var1 = var1.bind(var3)();
                    if(var1) { _fun0031_ip = 99; continue _fun0031 }
case 25:
                    var7 = var9.apply;
                    var5 = arguments;
                    var1 = var5;
                    var1 = var7.bind(var9)(var4, var1);
                    _fun0031_ip = 32; continue _fun0031;
case 99:
                    var7 = global;
                    var8 = var7.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot3;
                    var6 = var6.bind(var3)(var4);
                    var6 = var6.constructor;
                    var5 = arguments;
                    var1 = var7.bind(var8)(var9, var5, var6);
case 32:
                    var1 = var2.bind(var3)(var4, var1);
                    return var1;
                }
            };
            var _closure2_slot0 = var4;
            var5 = _closure1_slot4;
            var3 = undefined;
            var2 = arg1;
            var2 = var5.bind(var3)(var4, var2);
            var2 = _closure1_slot8;
            var5 = {};
            var1 = 'getKeyString';
            var5['key'] = var1;
            var1 = function value(arg1, arg2) {
                _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                    var4 = arg1;
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var _closure3_slot1 = var4;
                    var3 = arg2;
                    var _closure3_slot2 = var3;
                    var3 = var2.getKeyCodeMapItem;
                    var3 = var3.bind(var2)(var4);
                    var5 = var3.length;
                    var4 = 0;
                    if(!(var4 === var5)) { _fun0032_ip = 19; continue _fun0032 }
case 78:
                    var5 = var2.cachedKeyMapEntries;
                    var4 = var5.filter;
                    var2 = function(arg1) {
                        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                            var4 = arg1;
                            var2 = var4[Symbol.iterator];
                            var4 = var2().next;
                            var1 = var4().value;
                            var1 = var2;
                            var6 = undefined;
                            var3 = var1 === var6;
                            var1 = undefined;
                            if(var3) { _fun0033_ip = 65; continue _fun0033 }
case 31:
                            var5 = var4().value;
                            var4 = var2;
                            var4 = var4 === var6;
                            var1 = undefined;
                            var3 = var4;
                            if(var4) { _fun0033_ip = 65; continue _fun0033 }
case 66:
                            var1 = var5;
                            var3 = var4;
case 65:
                            if(var3) { _fun0033_ip = 67; continue _fun0033 }
case 68:
                            var2.return();
case 67:
                            var1 = var1 == var1;
                            return var1;
                        }
                    };
                    var5 = var4.bind(var5)(var2);
                    var4 = var5.map;
                    var2 = function(arg1) {
                        _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                            var4 = arg1;
                            var1 = var4[Symbol.iterator];
                            var4 = var1().next;
                            var2 = var4().value;
                            var3 = var1;
                            var7 = undefined;
                            var3 = var3 === var7;
                            var5 = undefined;
                            if(var3) { _fun0034_ip = 59; continue _fun0034 }
case 31:
                            var5 = var2;
case 59:
                            var2 = undefined;
                            if(var3) { _fun0034_ip = 40; continue _fun0034 }
case 45:
                            var6 = var4().value;
                            var4 = var1;
                            var4 = var4 === var7;
                            var2 = undefined;
                            var3 = var4;
                            if(var4) { _fun0034_ip = 40; continue _fun0034 }
case 25:
                            var2 = var6;
                            var3 = var4;
case 40:
                            if(var3) { _fun0034_ip = 60; continue _fun0034 }
case 27:
                            var1.return();
case 60:
                            var1 = {};
                            var1['key'] = var5;
                            var1['keyCode'] = var2;
                            var4 = _closure3_slot2;
                            var2 = null;
                            if(!(var2 == var4)) { _fun0034_ip = 100; continue _fun0034 }
case 101:
                            var4 = _closure3_slot0;
                            var2 = var4.findCodeFromKeyboardLayoutMap;
                            var2 = var2.bind(var4)(var5);
                            _fun0034_ip = 29; continue _fun0034;
case 100:
                            var2 = _closure3_slot2;
case 29:
                            var1['code'] = var2;
                            return var1;
                        }
                    };
                    var3 = var4.bind(var5)(var2);
case 19:
                    var2 = var3.find;
                    var1 = function(arg1) {
                        _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                            var4 = arg1;
                            var2 = var4.keyCode;
                            var1 = _closure3_slot1;
                            var5 = var2 === var1;
                            var6 = _closure3_slot2;
                            var2 = null;
                            var1 = var5;
                            if(!(var2 != var6)) { _fun0035_ip = 67; continue _fun0035 }
case 49:
                            var2 = var5;
                            if(!var5) { _fun0035_ip = 68; continue _fun0035 }
case 102:
                            var4 = var4.code;
                            var3 = _closure3_slot2;
                            var2 = var4 === var3;
case 68:
                            var1 = var2;
case 67:
                            return var1;
                        }
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0032_ip = 103; continue _fun0032 }
case 104:
                    var1 = var2.key;
case 103:
                    return var1;
                }
            };
            var5['value'] = var1;
            var1 = new Array(6);
            var1[0] = var5;
            var5 = {};
            var7 = 'findExactKeyboardEventMatch';
            var5['key'] = var7;
            var7 = function value(arg1, arg2, arg3) {
                _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                    var6 = arg2;
                    var7 = arg3;
                    var3 = this;
                    var _closure3_slot0 = var6;
                    var _closure3_slot1 = var7;
                    var5 = _closure1_slot20;
                    var4 = undefined;
                    var1 = arg1;
                    var8 = var5.bind(var4)(var1);
                    var _closure3_slot2 = var8;
                    var5 = null;
                    if(!(var5 == var6)) { _fun0036_ip = 105; continue _fun0036 }
case 106:
                    var1 = var3.findCodeFromKeyboardLayoutMap;
                    var1 = var1.bind(var3)(var8);
                    _closure3_slot0 = var1;
                    var6 = var1;
case 105:
                    if(!(var5 != var7)) { _fun0036_ip = 100; continue _fun0036 }
case 79:
                    var1 = var3.keyCodeMap;
                    var9 = var1[var7];
                    if(!(var5 != var9)) { _fun0036_ip = 100; continue _fun0036 }
case 107:
                    var8 = var9.find;
                    var1 = function(arg1) {
                        _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                            var3 = arg1;
                            var4 = _closure1_slot20;
                            var2 = var3.key;
                            var1 = undefined;
                            var4 = var4.bind(var1)(var2);
                            var1 = _closure3_slot2;
                            var1 = var4 === var1;
                            if(!var1) { _fun0037_ip = 65; continue _fun0037 }
case 70:
                            var3 = var3.code;
                            var2 = _closure3_slot0;
                            var1 = var3 === var2;
case 65:
                            return var1;
                        }
                    };
                    var1 = var8.bind(var9)(var1);
                    if(!(var5 == var1)) { _fun0036_ip = 62; continue _fun0036 }
case 100:
                    if(!(var5 != var7)) { _fun0036_ip = 108; continue _fun0036 }
case 29:
                    if(!(var5 == var6)) { _fun0036_ip = 104; continue _fun0036 }
case 108:
                    return var4;
case 104:
                    var4 = var3.cachedAllEvents;
                    var3 = var4.find;
                    var2 = function(arg1) {
                        _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                            var4 = arg1;
                            var3 = _closure1_slot20;
                            var2 = var4.key;
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var1 = _closure3_slot2;
                            var3 = var3 === var1;
                            var5 = var4.keyCode;
                            var1 = _closure3_slot1;
                            var1 = var5 === var1;
                            var4 = var4.code;
                            var2 = _closure3_slot0;
                            var2 = var4 === var2;
                            if(!var1) { _fun0038_ip = 109; continue _fun0038 }
case 60:
                            var1 = var3;
case 109:
                            if(!var1) { _fun0038_ip = 3; continue _fun0038 }
case 99:
                            var1 = var2;
case 3:
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    return var2;
case 62:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[1] = var5;
            var5 = {};
            var7 = 'getWeightedPossibleKeyStringMatches';
            var5['key'] = var7;
            var7 = function value(arg1, arg2, arg3) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var2 = arg2;
                var _closure3_slot1 = var2;
                var2 = arg3;
                var _closure3_slot2 = var2;
                var2 = this;
                var4 = var2.cachedAllEvents;
                var3 = var4.filter;
                var2 = function(arg1) {
                    _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                        var5 = arg1;
                        var6 = _closure1_slot20;
                        var1 = var5.key;
                        var3 = undefined;
                        var2 = var6.bind(var3)(var1);
                        var1 = _closure3_slot0;
                        var1 = var6.bind(var3)(var1);
                        var3 = var2 === var1;
                        var1 = _closure3_slot2;
                        var6 = null;
                        var1 = var6 == var1;
                        if(var1) { _fun0039_ip = 46; continue _fun0039 }
case 25:
                        var7 = var5.keyCode;
                        var2 = _closure3_slot2;
                        var1 = var7 === var2;
case 46:
                        var2 = _closure3_slot1;
                        var2 = var6 == var2;
                        if(var2) { _fun0039_ip = 110; continue _fun0039 }
case 4:
                        var5 = var5.code;
                        var4 = _closure3_slot1;
                        var2 = var5 === var4;
case 110:
                        if(!var1) { _fun0039_ip = 73; continue _fun0039 }
case 111:
                        var1 = var3;
case 73:
                        if(!var1) { _fun0039_ip = 112; continue _fun0039 }
case 113:
                        var1 = var2;
case 112:
                        return var1;
                    }
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.sort;
                var1 = function(arg1, arg2) {
                    var4 = function calculateScore(arg1) {
                        _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                            var4 = arg1;
                            var6 = _closure1_slot20;
                            var1 = var4.key;
                            var5 = undefined;
                            var3 = var6.bind(var5)(var1);
                            var2 = _closure3_slot0;
                            var2 = var6.bind(var5)(var2);
                            var6 = 0;
                            if(!(var3 === var2)) { _fun0040_ip = 51; continue _fun0040 }
case 34:
                            var6 = 0.5;
case 51:
                            var2 = _closure3_slot1;
                            var5 = null;
                            var2 = var5 != var2;
                            if(!var2) { _fun0040_ip = 4; continue _fun0040 }
case 60:
                            var7 = var4.code;
                            var3 = _closure3_slot1;
                            var2 = var7 === var3;
case 4:
                            var3 = var6;
                            if(!var2) { _fun0040_ip = 114; continue _fun0040 }
case 107:
                            var2 = 0.3;
                            var3 = var6 + var2;
case 114:
                            var2 = _closure3_slot2;
                            var2 = var5 != var2;
                            if(!var2) { _fun0040_ip = 115; continue _fun0040 }
case 116:
                            var4 = var4.keyCode;
                            var1 = _closure3_slot2;
                            var2 = var4 === var1;
case 115:
                            var1 = var3;
                            if(!var2) { _fun0040_ip = 87; continue _fun0040 }
case 117:
                            var2 = 0.2;
                            var1 = var3 + var2;
case 87:
                            return var1;
                        }
                    };
                    var3 = undefined;
                    var1 = arg1;
                    var2 = var4.bind(var3)(var1);
                    var1 = arg2;
                    var1 = var4.bind(var3)(var1);
                    var1 = var1 - var2;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5['value'] = var7;
            var1[2] = var5;
            var5 = {};
            var7 = 'findKeyboardEventByKey';
            var5['key'] = var7;
            var7 = function value(arg1, arg2, arg3) {
                _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
                    var8 = arg1;
                    var7 = arg2;
                    var6 = arg3;
                    var4 = this;
                    var _closure3_slot0 = var7;
                    var3 = _closure1_slot20;
                    var5 = undefined;
                    var10 = var3.bind(var5)(var8);
                    var _closure3_slot1 = var10;
                    var3 = null;
                    if(!(var3 == var7)) { _fun0041_ip = 27; continue _fun0041 }
case 37:
                    var9 = var4.findCodeFromKeyboardLayoutMap;
                    var9 = var9.bind(var4)(var10);
                    _closure3_slot0 = var9;
                    var7 = var9;
case 27:
                    if(!(var3 != var6)) { _fun0041_ip = 118; continue _fun0041 }
case 105:
                    var9 = var4.keyCodeMap;
                    var10 = var9[var6];
                    if(!(var3 != var10)) { _fun0041_ip = 118; continue _fun0041 }
case 119:
                    var9 = var10.find;
                    var1 = function(arg1) {
                        _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
                            var3 = arg1;
                            var4 = _closure1_slot20;
                            var2 = var3.key;
                            var1 = undefined;
                            var4 = var4.bind(var1)(var2);
                            var1 = _closure3_slot1;
                            var1 = var4 === var1;
                            if(!var1) { _fun0042_ip = 65; continue _fun0042 }
case 70:
                            var3 = var3.code;
                            var2 = _closure3_slot0;
                            var1 = var3 === var2;
case 65:
                            return var1;
                        }
                    };
                    var1 = var9.bind(var10)(var1);
                    if(!(var3 == var1)) { _fun0041_ip = 120; continue _fun0041 }
case 118:
                    var3 = var4.getWeightedPossibleKeyStringMatches;
                    var4 = var3.bind(var4)(var8, var7, var6);
                    var3 = _closure1_slot5;
                    var2 = 1;
                    var3 = var3.bind(var5)(var4, var2);
                    var2 = 0;
                    var2 = var3[var2];
                    return var2;
case 120:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[3] = var5;
            var5 = {};
            var7 = 'findKeyboardEventByKeyCode';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
                    var6 = arg1;
                    var5 = arg2;
                    var4 = this;
                    var _closure3_slot0 = var6;
                    var _closure3_slot1 = var5;
                    var1 = var4.getKeyString;
                    var2 = var1.bind(var4)(var6, var5);
                    var1 = null;
                    var7 = var1 == var2;
                    if(!var7) { _fun0043_ip = 106; continue _fun0043 }
case 37:
                    var7 = var1 != var5;
case 106:
                    if(!var7) { _fun0043_ip = 99; continue _fun0043 }
case 65:
                    var7 = var4.getLayoutMap;
                    var8 = var7.bind(var4)();
                    var7 = var8.get;
                    var2 = var7.bind(var8)(var5);
case 99:
                    if(!(var1 == var2)) { _fun0043_ip = 103; continue _fun0043 }
case 82:
                    var7 = var4.getKeyCodeMapItem;
                    var8 = var7.bind(var4)(var6);
                    var7 = var8.find;
                    var3 = function(arg1) {
                        _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
                            var4 = arg1;
                            var2 = var4.keyCode;
                            var1 = _closure3_slot0;
                            var5 = var2 === var1;
                            var6 = _closure3_slot1;
                            var2 = null;
                            var1 = var5;
                            if(!(var2 != var6)) { _fun0044_ip = 67; continue _fun0044 }
case 49:
                            var2 = var5;
                            if(!var5) { _fun0044_ip = 68; continue _fun0044 }
case 102:
                            var4 = var4.code;
                            var3 = _closure3_slot1;
                            var2 = var4 === var3;
case 68:
                            var1 = var2;
case 67:
                            return var1;
                        }
                    };
                    var7 = var7.bind(var8)(var3);
                    var8 = var1 == var7;
                    var3 = undefined;
                    if(var8) { _fun0043_ip = 121; continue _fun0043 }
case 122:
                    var3 = var7.key;
case 121:
                    var2 = var3;
case 103:
                    if(!(var1 != var2)) { _fun0043_ip = 16; continue _fun0043 }
case 123:
                    var1 = var4.findKeyboardEventByKey;
                    var1 = var1.bind(var4)(var2, var5, var6);
                    _fun0043_ip = 124; continue _fun0043;
case 16:
                    var3 = var4.getDefaultKeyboardEventShape;
                    var2 = undefined;
                    var1 = var3.bind(var4)(var2, var6, var5);
case 124:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[4] = var5;
            var5 = {};
            var7 = 'getDefaultKeyboardEventShape';
            var5['key'] = var7;
            var6 = function value(arg1, arg2, arg3) {
                _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
                    var3 = arg1;
                    var8 = arg2;
                    var4 = arg3;
                    var7 = this;
                    var5 = null;
                    var2 = var5 != var3;
                    var1 = undefined;
                    var6 = undefined;
                    if(!var2) { _fun0045_ip = 125; continue _fun0045 }
case 126:
                    var2 = _closure1_slot20;
                    var6 = var2.bind(var1)(var3);
case 125:
                    if(!(var5 == var6)) { _fun0045_ip = 87; continue _fun0045 }
case 10:
                    if(!(var5 == var8)) { _fun0045_ip = 77; continue _fun0045 }
case 78:
                    return var1;
case 77:
                    var9 = var7.cachedKeyMapEntries;
                    var3 = var9.find;
                    var2 = function(arg1) {
                        _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
                            var4 = arg1;
                            var2 = var4[Symbol.iterator];
                            var4 = var2().next;
                            var1 = var4().value;
                            var1 = var2;
                            var6 = undefined;
                            var3 = var1 === var6;
                            var1 = undefined;
                            if(var3) { _fun0046_ip = 65; continue _fun0046 }
case 31:
                            var5 = var4().value;
                            var4 = var2;
                            var4 = var4 === var6;
                            var1 = undefined;
                            var3 = var4;
                            if(var4) { _fun0046_ip = 65; continue _fun0046 }
case 66:
                            var1 = var5;
                            var3 = var4;
case 65:
                            if(var3) { _fun0046_ip = 67; continue _fun0046 }
case 68:
                            var2.return();
case 67:
                            var1 = var1 == var1;
                            return var1;
                        }
                    };
                    var3 = var3.bind(var9)(var2);
                    var2 = var5 == var3;
                    var10 = undefined;
                    if(var2) { _fun0045_ip = 81; continue _fun0045 }
case 107:
                    var2 = 0;
                    var10 = var3[var2];
case 81:
                    if(!(var5 != var10)) { _fun0045_ip = 127; continue _fun0045 }
case 111:
                    var3 = _closure1_slot25;
                    var2 = {};
                    var2['keyCode'] = var8;
                    var2['key'] = var10;
                    var8 = var4;
                    if(!(var5 == var4)) { _fun0045_ip = 98; continue _fun0045 }
case 128:
                    var9 = var7.findCodeFromKeyboardLayoutMap;
                    var8 = var9.bind(var7)(var10);
case 98:
                    var2['code'] = var8;
                    var2 = var3.bind(var1)(var2);
                    return var2;
case 127:
                    return var1;
case 87:
                    var2 = var7.keyMap;
                    var8 = var2[var6];
                    if(!(var5 != var8)) { _fun0045_ip = 129; continue _fun0045 }
case 130:
                    var3 = _closure1_slot25;
                    var2 = {};
                    var2['keyCode'] = var8;
                    var2['key'] = var6;
                    if(!(var5 == var4)) { _fun0045_ip = 131; continue _fun0045 }
case 132:
                    var5 = var7.findCodeFromKeyboardLayoutMap;
                    var4 = var5.bind(var7)(var6);
case 131:
                    var2['code'] = var4;
                    var2 = var3.bind(var1)(var2);
                    return var2;
case 129:
                    return var1;
                }
            };
            var5['value'] = var6;
            var1[5] = var5;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        };
        var11 = var11.bind(var1)(var14);
        var _closure1_slot16 = var11;
        var11 = null;
        var _closure1_slot17 = var11;
        var _closure1_slot18 = var11;
        var11 = 13;
        var11 = var13[var11];
        var13 = var12.bind(var1)(var11);
        var12 = var13.fileFinishedImporting;
        var11 = 'utils/web/KeyboardLayoutMapUtils.tsx';
        var11 = var12.bind(var13)(var11);
        var3['BACKTICK_CODES'] = var10;
        var3['DefaultKeyboardLayout'] = var9;
        var3['normalizeKeyMap'] = var8;
        var3['initializeKeyboardMapper'] = var7;
        var7 = function __DEV_overrideLayoutMapKey(arg1, arg2) {
            _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
case 0:
                var5 = _closure1_slot14;
                var4 = var5._set;
                var3 = arg1;
                var1 = arg2;
                var1 = var4.bind(var5)(var3, var1);
                var4 = _closure1_slot17;
                var1 = null;
                if(!(var1 != var4)) { _fun0047_ip = 78; continue _fun0047 }
case 11:
                var3 = var4._initializeInternalLayoutMap;
                var3 = var3.bind(var4)();
case 78:
                var2 = _closure1_slot17;
                if(!(var1 != var2)) { _fun0047_ip = 60; continue _fun0047 }
case 133:
                var1 = var2.updateCaches;
                var1 = var1.bind(var2)();
case 60:
                var1 = undefined;
                return var1;
            }
        };
        var3['__DEV_overrideLayoutMapKey'] = var7;
        var3['getKeyboardMapper'] = var6;
        var6 = function resetKeyboardMapper() {
            var1 = undefined;
            var4 = _closure1_slot28;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var3['resetKeyboardMapper'] = var6;
        var6 = function getLayoutMap() {
            _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
case 0:
                var1 = arguments[0];
                var3 = undefined;
                if(!(var1 === var3)) { _fun0048_ip = 134; continue _fun0048 }
case 135:
                var1 = false;
case 134:
                if(var1) { _fun0048_ip = 27; continue _fun0048 }
case 136:
                var1 = _closure1_slot27;
                var6 = var1.bind(var3)();
                var4 = null;
                var5 = var4 == var6;
                var1 = undefined;
                if(var5) { _fun0048_ip = 106; continue _fun0048 }
case 70:
                var5 = var6.getLayoutMap;
                var1 = var5.bind(var6)();
case 106:
                if(!(var4 == var1)) { _fun0048_ip = 137; continue _fun0048 }
case 51:
                var4 = _closure1_slot23;
                var1 = var4.bind(var3)();
case 137:
                _fun0048_ip = 79; continue _fun0048;
case 27:
                var2 = _closure1_slot23;
                var1 = var2.bind(var3)();
case 79:
                return var1;
            }
        };
        var3['getLayoutMap'] = var6;
        var3['reverseLookupCodeFromKey'] = var5;
        var3['getExactKeyboardEventMatchFromAny'] = var4;
        var4 = function getKeyboardEventShapeFromAny(arg1) {
            _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
case 0:
                var5 = arg1;
                var1 = _closure1_slot30;
                var4 = undefined;
                var1 = var1.bind(var4)(var5);
                var2 = null;
                if(!(var2 == var1)) { _fun0049_ip = 97; continue _fun0049 }
case 35:
                var6 = _closure1_slot27;
                var7 = var6.bind(var4)();
                if(!(var2 != var7)) { _fun0049_ip = 21; continue _fun0049 }
case 11:
                var3 = _closure1_slot25;
                var4 = var3.bind(var4)(var5);
                var3 = var4.key;
                if(!(var2 != var3)) { _fun0049_ip = 138; continue _fun0049 }
case 133:
                var8 = var7.findKeyboardEventByKey;
                var6 = var4.key;
                var5 = var4.code;
                var3 = var4.keyCode;
                var3 = var8.bind(var7)(var6, var5, var3);
                if(!(var2 == var3)) { _fun0049_ip = 117; continue _fun0049 }
case 138:
                var5 = var4.keyCode;
                if(!(var2 != var5)) { _fun0049_ip = 123; continue _fun0049 }
case 114:
                var6 = var7.findKeyboardEventByKeyCode;
                var5 = var4.keyCode;
                var4 = var4.code;
                var4 = var6.bind(var7)(var5, var4);
                if(!(var2 == var4)) { _fun0049_ip = 139; continue _fun0049 }
case 123:
                return var2;
case 139:
                return var4;
case 117:
                return var3;
case 21:
                return var2;
case 97:
                return var1;
            }
        };
        var3['getKeyboardEventShapeFromAny'] = var4;
        var4 = function getKeyboardEventShapeFromKey(arg1) {
            _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
case 0:
                var6 = arg1;
                var5 = undefined;
                var9 = undefined;
                var8 = undefined;
                var7 = undefined;
                var10 = undefined;
                var4 = undefined;
                var1 = null;
                var3 = var1 != var6;
                var2 = undefined;
                if(!var3) { _fun0050_ip = 140; continue _fun0050 }
case 141:
                var3 = _closure1_slot20;
                var2 = var3.bind(var5)(var6);
case 140:
                var9 = var2;
                if(!(var1 != var2)) { _fun0050_ip = 142; continue _fun0050 }
case 13:
                var6 = _closure1_slot29;
                var2 = var9;
                var8 = var6.bind(var5)(var2);
                var2 = _closure1_slot27;
                var13 = var2.bind(var5)();
                var2 = var1 == var13;
                var6 = undefined;
                if(var2) { _fun0050_ip = 113; continue _fun0050 }
case 15:
                var12 = var13.findKeyboardEventByKey;
                var11 = var9;
                var2 = var8;
                var6 = var12.bind(var13)(var11, var2);
case 113:
                var11 = var1 != var6;
                var2 = null;
                if(!var11) { _fun0050_ip = 143; continue _fun0050 }
case 116:
                var2 = var6;
case 143:
                if(!(var1 == var2)) { _fun0050_ip = 144; continue _fun0050 }
case 128: // try_start_0
                var6 = _closure1_slot27;
                var6 = var6.bind(var5)();
                var10 = var6;
                var11 = var1 == var6;
                var6 = undefined;
                if(var11) { _fun0050_ip = 124; continue _fun0050 }
case 22:
                var11 = var10;
                var10 = var11.getDefaultKeyboardEventShape;
                var6 = var10.bind(var11)(var9, var5, var8);
case 124:
                var7 = var6;
                var8 = var1 != var6;
                var6 = null;
                if(!var8) { _fun0050_ip = 145; continue _fun0050 }
case 63:
                var6 = var7;
case 145:
                var4 = var6;
                if(!(var1 != var6)) { _fun0050_ip = 88; continue _fun0050 }
case 146:
                var6 = global;
                var8 = var6.KeyboardEvent;
                var15 = var4;
                var4 = var8.prototype;
                var6 = Object.create(var4, {constructor: {value: var8}});
                var16 = 'keydown';
                var17 = var6;
                var4 = new var17[var8](var16, var15, var14);
                var6 = var4 instanceof Object ? var4 : var6;
                var4 = _closure1_slot25;
                var3 = {};
                var7 = var6.keyCode;
                var3['keyCode'] = var7;
                var7 = var6.key;
                var3['key'] = var7;
                var6 = var6.code;
                var3['code'] = var6;
                var3 = var4.bind(var5)(var3);
case 147: // try_end0
                return var3;
case 88:
                return var1;
case 148: // catch_target0
                CatchBlockStart(arg_register=2);
                return var1;
case 144:
                return var2;
case 142:
                return var1;
            }
        };
        var3['getKeyboardEventShapeFromKey'] = var4;
        var2 = function getKeyboardEventShapeFromKeycode(arg1) {
            _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
case 0:
                var8 = arg1;
                var5 = undefined;
                var7 = undefined;
                var9 = undefined;
                var4 = undefined;
                var1 = _closure1_slot27;
                var11 = var1.bind(var5)();
                var2 = null;
                var1 = var2 == var11;
                var6 = undefined;
                if(var1) { _fun0051_ip = 77; continue _fun0051 }
case 49:
                var10 = var11.findKeyboardEventByKeyCode;
                var1 = var8;
                var6 = var10.bind(var11)(var1);
case 77:
                var10 = var2 != var6;
                var1 = null;
                if(!var10) { _fun0051_ip = 149; continue _fun0051 }
case 150:
                var1 = var6;
case 149:
                if(!(var2 == var1)) { _fun0051_ip = 151; continue _fun0051 }
case 109: // try_start_0
                var6 = _closure1_slot27;
                var6 = var6.bind(var5)();
                var9 = var6;
                var10 = var2 == var6;
                var6 = undefined;
                if(var10) { _fun0051_ip = 112; continue _fun0051 }
case 138:
                var10 = var9;
                var9 = var10.getDefaultKeyboardEventShape;
                var6 = var9.bind(var10)(var5, var8);
case 112:
                var7 = var6;
                var8 = var2 != var6;
                var6 = null;
                if(!var8) { _fun0051_ip = 121; continue _fun0051 }
case 85:
                var6 = var7;
case 121:
                var4 = var6;
                if(!(var2 != var6)) { _fun0051_ip = 152; continue _fun0051 }
case 123:
                var6 = global;
                var8 = var6.KeyboardEvent;
                var12 = var4;
                var4 = var8.prototype;
                var6 = Object.create(var4, {constructor: {value: var8}});
                var13 = 'keydown';
                var14 = var6;
                var4 = new var14[var8](var13, var12, var11);
                var6 = var4 instanceof Object ? var4 : var6;
                var4 = _closure1_slot25;
                var3 = {};
                var7 = var6.keyCode;
                var3['keyCode'] = var7;
                var7 = var6.key;
                var3['key'] = var7;
                var6 = var6.code;
                var3['code'] = var6;
                var3 = var4.bind(var5)(var3);
case 153: // try_end0
                return var3;
case 152:
                return var2;
case 154: // catch_target0
                CatchBlockStart(arg_register=2);
                return var2;
case 151:
                return var1;
            }
        };
        var3['getKeyboardEventShapeFromKeycode'] = var2;
        return var1;
    }
})();