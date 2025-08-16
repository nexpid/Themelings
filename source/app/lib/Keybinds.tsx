// app/lib/Keybinds.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = require;
        var12 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var12;
        var _closure1_slot2 = var6;
        var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = arg1;
                var _closure2_slot0 = var3;
                var5 = global;
                var2 = var5.Symbol;
                var4 = 'undefined';
                var2 = typeof var2;
                var2 = var4 !== var2;
                if(!var2) { _fun0002_ip = 46; continue _fun0002 }
 30:
                var4 = var5.Symbol;
                var4 = var4.iterator;
                var2 = var3[var4];
 46:
                if(var2) { _fun0002_ip = 55; continue _fun0002 }
 49:
                var2 = var3.@@iterator;
 55:
                if(var2) { _fun0002_ip = 345; continue _fun0002 }
 61:
                var6 = var5.Array;
                var4 = var6.isArray;
                var6 = var4.bind(var6)(var3);
                var4 = var2;
                if(var6) { _fun0002_ip = 323; continue _fun0002 }
 86:
                var8 = undefined;
                var6 = undefined;
                if(!var3) { _fun0002_ip = 283; continue _fun0002 }
 96:
                var9 = 'string';
                var7 = typeof var3;
                if(!(var9 !== var7)) { _fun0002_ip = 270; continue _fun0002 }
 110:
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
                if(!var7) { _fun0002_ip = 163; continue _fun0002 }
 158:
                var7 = var3.constructor;
 163:
                var10 = var9;
                if(!var7) { _fun0002_ip = 179; continue _fun0002 }
 169:
                var7 = var3.constructor;
                var10 = var7.name;
 179:
                var7 = 'Map';
                if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 187:
                var7 = 'Set';
                if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 195:
                var7 = 'Arguments';
                if(!(var7 !== var10)) { _fun0002_ip = 234; continue _fun0002 }
 205:
                var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var7 = var9.test;
                var9 = var7.bind(var9)(var10);
                var7 = undefined;
                if(!var9) { _fun0002_ip = 247; continue _fun0002 }
 234:
                var9 = _closure1_slot14;
                var7 = var9.bind(var8)(var3, var8);
 247:
                _fun0002_ip = 265; continue _fun0002;
 249:
                var10 = var5.Array;
                var9 = var10.from;
                var7 = var9.bind(var10)(var3);
 265:
                var6 = var7;
                _fun0002_ip = 283; continue _fun0002;
 270:
                var7 = _closure1_slot14;
                var6 = var7.bind(var8)(var3, var8);
 283:
                var4 = var6;
                if(var4) { _fun0002_ip = 323; continue _fun0002 }
 289:
                var7 = var5.TypeError;
                var5 = var7.prototype;
                var6 = Object.create(var5, {constructor: {value: var7}});
                var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var14 = var6;
                var5 = new var14[var7](var13, var12);
                var5 = var5 instanceof Object ? var5 : var6;
                throw var5;
 323:
                if(!var4) { _fun0002_ip = 330; continue _fun0002 }
 326:
                _closure2_slot0 = var4;
 330:
                var4 = 0;
                var _closure2_slot1 = var4;
                var1 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var2 = _closure2_slot1;
                        var1 = _closure2_slot0;
                        var1 = var1.length;
                        if(!(!(var2 >= var1))) { _fun0003_ip = 56; continue _fun0003 }
 20:
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
                        _fun0003_ip = 67; continue _fun0003;
 56:
                        var2 = {};
                        var3 = true;
                        var2['done'] = var3;
                        var1 = var2;
 67:
                        return var1;
                    }
                };
                return var1;
 345:
                var1 = var2.call;
                var3 = var1.bind(var2)(var3);
                var2 = var3.next;
                var1 = var2.bind;
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var _closure1_slot13 = var1;
        var1 = function _arrayLikeToArray(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = arg1;
                var1 = null;
                var3 = undefined;
                var1 = var1 == var3;
                if(var1) { _fun0004_ip = 23; continue _fun0004 }
 14:
                var2 = var4.length;
                var1 = var3 > var2;
 23:
                var2 = undefined;
                if(!var1) { _fun0004_ip = 33; continue _fun0004 }
 28:
                var2 = var4.length;
 33:
                var1 = global;
                var1 = var1.Array;
                var1 = var1.bind(var3)(var2);
                var3 = 0;
                var5 = var3 < var2;
                if(!var5) { _fun0004_ip = 70; continue _fun0004 }
 55:
                var5 = var4[var3];
                var1[var3] = var5;
                var3 = var3 + 1;
                if(var3 < var2) { _fun0004_ip = 55; continue _fun0004 }
 70:
                return var1;
            }
        };
        var _closure1_slot14 = var1;
        var1 = function getAllKeybinds(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var3 = new Array(0);
                var1 = global;
                var4 = var1.Object;
                var2 = var4.values;
                var1 = arg1;
                var6 = var2.bind(var4)(var1);
                var1 = var6.length;
                var5 = 0;
                var1 = var5 < var1;
                var4 = null;
                var2 = 0;
                if(!var1) { _fun0005_ip = 100; continue _fun0005 }
 43:
                var1 = var6[var2];
                if(!(var4 != var1)) { _fun0005_ip = 88; continue _fun0005 }
 51:
                var7 = var3.push;
                var10 = var1.binds;
                var1 = new Array(0);
                var11 = var1;
                var9 = 0;
                var8 = arraySpread(var11, var10, var9);
                var11 = var7;
                var10 = var1;
                var9 = var3;
                var1 = apply(var11, var10, var9);
 88:
                var2 = var2 + 1;
                var1 = var6.length;
                if(var2 < var1) { _fun0005_ip = 43; continue _fun0005 }
 100:
                var2 = var3.map;
                var1 = function(arg1) {
                    var4 = arg1;
                    var3 = var4.replace;
                    var2 = _closure1_slot9;
                    var1 = 'mod';
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var _closure1_slot15 = var1;
        var1 = function wrapBind(arg1, arg2) {
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var1 = function(arg1, arg2) {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 6;
                var2 = var4[var2];
                var4 = undefined;
                var6 = var3.bind(var4)(var2);
                var5 = var6.track;
                var1 = _closure1_slot4;
                var3 = var1.KEYBOARD_SHORTCUT_USED;
                var2 = {};
                var7 = _closure2_slot0;
                var2['shortcut_name'] = var7;
                var2 = var5.bind(var6)(var3, var2);
                var3 = _closure2_slot1;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            return var1;
        };
        var _closure1_slot16 = var1;
        var1 = function registerBinds(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var9 = function _loop() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var1 = _closure2_slot1;
                        var6 = null;
                        if(!(var6 != var1)) { _fun0007_ip = 482; continue _fun0007 }
 18:
                        var1 = _closure1_slot11;
                        var2 = undefined;
                        var8 = var1.bind(var2)();
                        var _closure3_slot0 = var8;
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var1 = 3;
                        var1 = var9[var1];
                        var1 = var7.bind(var2)(var1);
                        var1 = var1.isPlatformEmbedded;
                        if(var1) { _fun0007_ip = 82; continue _fun0007 }
 64:
                        var7 = var8.concat;
                        var1 = _closure1_slot10;
                        var1 = var7.bind(var8)(var1);
                        _closure3_slot0 = var1;
 82:
                        var1 = _closure2_slot1;
                        var8 = var1.binds;
                        var7 = var8.filter;
                        var1 = function(arg1) {
                            var4 = arg1;
                            var3 = var4.replace;
                            var2 = _closure1_slot9;
                            var1 = 'mod';
                            var3 = var3.bind(var4)(var1, var2);
                            var2 = _closure3_slot0;
                            var1 = var2.indexOf;
                            var2 = var1.bind(var2)(var3);
                            var1 = 0;
                            var1 = var2 < var1;
                            return var1;
                        };
                        var8 = var7.bind(var8)(var1);
                        var7 = var8.length;
                        var1 = 0;
                        if(!(var1 !== var7)) { _fun0007_ip = 480; continue _fun0007 }
 123:
                        var7 = _closure2_slot1;
                        var7 = var7.comboKeysBindGlobal;
                        var9 = _closure1_slot8;
                        if(var7) { _fun0007_ip = 147; continue _fun0007 }
 140:
                        var7 = var9.bind;
                        _fun0007_ip = 153; continue _fun0007;
 147:
                        var7 = var9.bindGlobal;
 153:
                        var9 = _closure2_slot1;
                        var9 = var9.action;
                        if(!(var6 != var9)) { _fun0007_ip = 205; continue _fun0007 }
 166:
                        var11 = var7.call;
                        var10 = _closure1_slot8;
                        var13 = _closure1_slot16;
                        var12 = _closure2_slot0;
                        var9 = _closure2_slot1;
                        var9 = var9.action;
                        var9 = var13.bind(var2)(var12, var9);
                        var9 = var11.bind(var7)(var10, var8, var9);
 205:
                        var9 = _closure2_slot1;
                        var9 = var9.keyup;
                        if(!(var6 != var9)) { _fun0007_ip = 269; continue _fun0007 }
 219:
                        var12 = var7.call;
                        var11 = _closure1_slot8;
                        var13 = _closure1_slot16;
                        var10 = _closure2_slot0;
                        var9 = _closure2_slot1;
                        var9 = var9.keyup;
                        var15 = var13.bind(var2)(var10, var9);
                        var14 = 'keyup';
                        var18 = var7;
                        var17 = var11;
                        var16 = var8;
                        var9 = var18[var12](var17, var16, var15, var14, var13);
 269:
                        var9 = _closure2_slot1;
                        var9 = var9.keydown;
                        if(!(var6 != var9)) { _fun0007_ip = 414; continue _fun0007 }
 286:
                        var10 = var8.indexOf;
                        var9 = 'any-character';
                        var10 = var10.bind(var8)(var9);
                        var9 = -1;
                        if(!(var9 !== var10)) { _fun0007_ip = 355; continue _fun0007 }
 313:
                        var9 = _closure2_slot1;
                        var11 = var9.keydown;
                        var9 = function nativeBind(arg1, arg2) {
                            var5 = 'keydown';
                            var _closure4_slot0 = var5;
                            var2 = arg2;
                            var _closure4_slot1 = var2;
                            var4 = function wrappedCallback(arg1) {
                                var4 = arg1;
                                var3 = _closure4_slot1;
                                var2 = var4.key;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var4, var2);
                                return var1;
                            };
                            var _closure4_slot2 = var4;
                            var2 = global;
                            var3 = var2.document;
                            var2 = var3.addEventListener;
                            var2 = var2.bind(var3)(var5, var4);
                            var3 = _closure1_slot12;
                            var2 = var3.push;
                            var1 = function() {
                                var1 = global;
                                var4 = var1.document;
                                var3 = var4.removeEventListener;
                                var2 = _closure4_slot0;
                                var1 = _closure4_slot2;
                                var1 = var3.bind(var4)(var2, var1);
                                return var1;
                            };
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        var5 = 'keydown';
                        var5 = var9.bind(var2)(var5, var11);
                        var9 = var8.splice;
                        var5 = 1;
                        var5 = var9.bind(var8)(var10, var5);
 355:
                        var5 = var8.length;
                        if(!(var5 > var1)) { _fun0007_ip = 414; continue _fun0007 }
 364:
                        var11 = var7.call;
                        var10 = _closure1_slot8;
                        var12 = _closure1_slot16;
                        var9 = _closure2_slot0;
                        var5 = _closure2_slot1;
                        var5 = var5.keydown;
                        var15 = var12.bind(var2)(var9, var5);
                        var14 = 'keydown';
                        var18 = var7;
                        var17 = var10;
                        var16 = var8;
                        var5 = var18[var11](var17, var16, var15, var14, var13);
 414:
                        var5 = _closure2_slot1;
                        var5 = var5.keypress;
                        if(!(var6 != var5)) { _fun0007_ip = 478; continue _fun0007 }
 428:
                        var6 = var7.call;
                        var5 = _closure1_slot8;
                        var9 = _closure1_slot16;
                        var4 = _closure2_slot0;
                        var3 = _closure2_slot1;
                        var3 = var3.keypress;
                        var15 = var9.bind(var2)(var4, var3);
                        var14 = 'keypress';
                        var18 = var7;
                        var17 = var5;
                        var16 = var8;
                        var3 = var18[var6](var17, var16, var15, var14, var13);
 478:
                        return var2;
 480:
                        return var1;
 482:
                        var1 = 0;
                        return var1;
                    }
                };
                var1 = global;
                var3 = var1.Object;
                var2 = var3.entries;
                var1 = arg1;
                var8 = var2.bind(var3)(var1);
                var1 = var8.length;
                var7 = 0;
                var2 = var7 < var1;
                var1 = undefined;
                var5 = 2;
                var4 = 1;
                var3 = 0;
                if(!var2) { _fun0006_ip = 104; continue _fun0006 }
 58:
                var11 = var8[var3];
                var2 = _closure1_slot3;
                var2 = var2.bind(var1)(var11, var5);
                var11 = var2[var7];
                var _closure2_slot0 = var11;
                var2 = var2[var4];
                var _closure2_slot1 = var2;
                var2 = var9.bind(var1)();
                var3 = var3 + 1;
                var2 = var8.length;
                if(var3 < var2) { _fun0006_ip = 58; continue _fun0006 }
 104:
                return var1;
            }
        };
        var _closure1_slot17 = var1;
        var2 = global;
        var9 = var2.Object;
        var8 = var9.defineProperty;
        var7 = {};
        var1 = true;
        var7['value'] = var1;
        var1 = '__esModule';
        var1 = var8.bind(var9)(var3, var1, var7);
        var14 = 0;
        var7 = var6[var14];
        var1 = undefined;
        var7 = var12.bind(var1)(var7);
        var _closure1_slot3 = var7;
        var16 = 1;
        var7 = var6[var16];
        var7 = var5.bind(var1)(var7);
        var7 = var7.AnalyticEvents;
        var _closure1_slot4 = var7;
        var7 = {};
        var _closure1_slot5 = var7;
        var7 = new Array(0);
        var _closure1_slot6 = var7;
        var7 = false;
        var _closure1_slot7 = var7;
        var7 = 2;
        var7 = var6[var7];
        var9 = var5.bind(var1)(var7);
        var8 = var9.createGlobalBinder;
        var7 = var2.window;
        var10 = var8.bind(var9)(var7);
        var _closure1_slot8 = var10;
        var11 = 3;
        var7 = var6[var11];
        var8 = var5.bind(var1)(var7);
        var7 = var8.isMac;
        var7 = var7.bind(var8)();
        if(var7) { _fun0001_ip = 255; continue _fun0001 }
 229:
        var7 = var6[var11];
        var8 = var5.bind(var1)(var7);
        var7 = var8.isMacWeb;
        var7 = var7.bind(var8)();
        var9 = 'ctrl';
        if(!var7) { _fun0001_ip = 259; continue _fun0001 }
 255:
        var9 = 'cmd';
 259:
        var _closure1_slot9 = var9;
        var7 = var6[var11];
        var8 = var5.bind(var1)(var7);
        var7 = var8.isMac;
        var7 = var7.bind(var8)();
        if(var7) { _fun0001_ip = 311; continue _fun0001 }
 285:
        var7 = var6[var11];
        var8 = var5.bind(var1)(var7);
        var7 = var8.isMacWeb;
        var7 = var7.bind(var8)();
        var8 = 'alt';
        if(!var7) { _fun0001_ip = 315; continue _fun0001 }
 311:
        var8 = 'opt';
 315:
        var7 = var6[var11];
        var13 = var5.bind(var1)(var7);
        var7 = var13.isMac;
        var7 = var7.bind(var13)();
        if(var7) { _fun0001_ip = 363; continue _fun0001 }
 337:
        var7 = var6[var11];
        var13 = var5.bind(var1)(var7);
        var7 = var13.isMacWeb;
        var13 = var7.bind(var13)();
        var7 = 'enter';
        if(!var13) { _fun0001_ip = 367; continue _fun0001 }
 363:
        var7 = 'return';
 367:
        var13 = 4;
        var13 = var6[var13];
        var13 = var5.bind(var1)(var13);
        var13 = var13.JUMP_TO_GUILD;
        var18 = var13.binds;
        var15 = new Array(14);
        var19 = var15;
        var17 = 0;
        var13 = arraySpread(var19, var18, var17);
        var14 = 'mod+shift+[';
        var15[var13] = var14;
        var13 = var13 + var16;
        var14 = 'mod+shift+]';
        var15[var13] = var14;
        var13 = var13 + var16;
        var14 = 'mod+[';
        var15[var13] = var14;
        var13 = var13 + var16;
        var14 = 'mod+]';
        var15[var13] = var14;
        var13 = var13 + var16;
        var14 = 'alt+[';
        var15[var13] = var14;
        var13 = var13 + var16;
        var14 = 'alt+]';
        var15[var13] = var14;
        var13 = var13 + var16;
        var14 = 'ctrl+shift+tab';
        var15[var13] = var14;
        var13 = var13 + var16;
        var14 = 'ctrl+tab';
        var15[var13] = var14;
        var13 = var13 + var16;
        var14 = 'mod+n';
        var15[var13] = var14;
        var13 = var13 + var16;
        var14 = 'mod+t';
        var15[var13] = var14;
        var13 = var13 + var16;
        var14 = 'mod+shift+t';
        var15[var13] = var14;
        var13 = var13 + var16;
        var14 = 'mod+plus';
        var15[var13] = var14;
        var13 = var13 + var16;
        var14 = 'mod+minus';
        var15[var13] = var14;
        var14 = 'mod+0';
        var13 = var13 + var16;
        var15[var13] = var14;
        var14 = var15.map;
        var13 = function(arg1) {
            var4 = arg1;
            var3 = var4.replace;
            var2 = _closure1_slot9;
            var1 = 'mod';
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var13 = var14.bind(var15)(var13);
        var _closure1_slot10 = var13;
        var13 = function getKeybindList() {
            var1 = new Array(0);
            return var1;
        };
        var _closure1_slot11 = var13;
        var13 = new Array(0);
        var _closure1_slot12 = var13;
        var11 = var6[var11];
        var13 = var5.bind(var1)(var11);
        var11 = var13.isDesktop;
        var11 = var11.bind(var13)();
        if(!var11) { _fun0001_ip = 738; continue _fun0001 }
 672:
        var11 = 5;
        var11 = var6[var11];
        var12 = var12.bind(var1)(var11);
        var2 = var2.document;
        var19 = var2.documentElement;
        var11 = var12.prototype;
        var11 = Object.create(var11, {constructor: {value: var12}});
        var20 = var11;
        var2 = new var20[var12](var19, var18);
        var13 = var2 instanceof Object ? var2 : var11;
        var12 = var13.bind;
        var11 = 'backspace';
        var2 = function(arg1) {
            var2 = arg1;
            var1 = var2.preventDefault;
            var1 = var1.bind(var2)();
            return var1;
        };
        var2 = var12.bind(var13)(var11, var2);
 738:
        var2 = {};
        var2['combokeys'] = var10;
        var2['modKey'] = var9;
        var2['altKey'] = var8;
        var2['returnKey'] = var7;
        var7 = function setGetKeybindList(arg1) {
            var1 = arg1;
            _closure1_slot11 = var1;
            var1 = undefined;
            return var1;
        };
        var2['setGetKeybindList'] = var7;
        var7 = function checkDupes(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var1 = global;
                var1 = var1.Set;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var11 = var2;
                var1 = new var11[var1](var10);
                var7 = var1 instanceof Object ? var1 : var2;
                var5 = new Array(0);
                var4 = _closure1_slot13;
                var6 = _closure1_slot15;
                var1 = undefined;
                var3 = arg1;
                var3 = var6.bind(var1)(var3);
                var6 = var4.bind(var1)(var3);
                var4 = var6.bind(var1)();
                var3 = var4.done;
                if(var3) { _fun0008_ip = 123; continue _fun0008 }
 70:
                var8 = var4.value;
                var3 = var7.has;
                var3 = var3.bind(var7)(var8);
                if(!var3) { _fun0008_ip = 98; continue _fun0008 }
 88:
                var3 = var5.push;
                var3 = var3.bind(var5)(var8);
 98:
                var3 = var7.add;
                var3 = var3.bind(var7)(var8);
                var8 = var6.bind(var1)();
                var3 = var8.done;
                var4 = var8;
                if(!var3) { _fun0008_ip = 70; continue _fun0008 }
 123:
                var4 = var5.length;
                var3 = 0;
                if(!(var4 > var3)) { _fun0008_ip = 197; continue _fun0008 }
 134:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 7;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var2 = var4.prototype;
                var3 = Object.create(var2, {constructor: {value: var4}});
                var10 = 'Keybinds';
                var11 = var3;
                var2 = new var11[var4](var10, var9);
                var4 = var2 instanceof Object ? var2 : var3;
                var3 = var4.warn;
                var2 = 'Duplicate keyboard shortcuts defined:';
                var2 = var3.bind(var4)(var2, var5);
 197:
                return var1;
            }
        };
        var2['checkDupes'] = var7;
        var7 = function setLayout(arg1) {
            var1 = arg1;
            _closure1_slot5 = var1;
            var1 = undefined;
            return var1;
        };
        var2['setLayout'] = var7;
        var7 = function enable() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var4 = this;
                var2 = _closure1_slot7;
                if(var2) { _fun0009_ip = 49; continue _fun0009 }
 13:
                var2 = true;
                _closure1_slot7 = var2;
                var3 = var4.checkDupes;
                var2 = _closure1_slot5;
                var2 = var3.bind(var4)(var2);
                var3 = _closure1_slot17;
                var2 = _closure1_slot5;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
 49:
                var1 = undefined;
                return var1;
            }
        };
        var2['enable'] = var7;
        var7 = function enableTemp(arg1) {
            var4 = arg1;
            var5 = _closure1_slot6;
            var2 = var5.push;
            var1 = _closure1_slot5;
            var1 = var2.bind(var5)(var1);
            _closure1_slot5 = var4;
            var2 = _closure1_slot17;
            var1 = undefined;
            var2 = var2.bind(var1)(var4);
            var2 = true;
            _closure1_slot7 = var2;
            return var1;
        };
        var2['enableTemp'] = var7;
        var7 = function disableTemp() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var2 = this;
                var4 = _closure1_slot6;
                var1 = var4.pop;
                var1 = var1.bind(var4)();
                var4 = null;
                if(!(var4 != var1)) { _fun0010_ip = 30; continue _fun0010 }
 26:
                _closure1_slot5 = var1;
 30:
                var1 = var2.disable;
                var1 = var1.bind(var2)();
                var1 = var2.enable;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            }
        };
        var2['disableTemp'] = var7;
        var7 = function disable() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var2 = _closure1_slot7;
                if(!var2) { _fun0011_ip = 61; continue _fun0011 }
 10:
                var2 = false;
                _closure1_slot7 = var2;
                var4 = _closure1_slot12;
                var3 = var4.forEach;
                var2 = function(arg1) {
                    var2 = arg1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                var2 = new Array(0);
                _closure1_slot12 = var2;
                var2 = _closure1_slot8;
                var1 = var2.reset;
                var1 = var1.bind(var2)();
 61:
                var1 = undefined;
                return var1;
            }
        };
        var2['disable'] = var7;
        var7 = function validateKeybind(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var3 = arg1;
                var5 = this;
                var2 = _closure1_slot7;
                if(!var2) { _fun0012_ip = 27; continue _fun0012 }
 16:
                var4 = var5.hasBind;
                var2 = var4.bind(var5)(var3);
 27:
                if(!var2) { _fun0012_ip = 45; continue _fun0012 }
 30:
                var2 = _closure1_slot8;
                var1 = var2.unbind;
                var1 = var1.bind(var2)(var3);
 45:
                var1 = undefined;
                return var1;
            }
        };
        var2['validateKeybind'] = var7;
        var4 = function hasBind(arg1) {
            var5 = arg1;
            var3 = _closure1_slot15;
            var2 = _closure1_slot5;
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var4 = var5.replace;
            var2 = 'meta';
            var1 = 'cmd';
            var5 = var4.bind(var5)(var2, var1);
            var4 = var5.replace;
            var2 = /right |left /i;
            var1 = '';
            var2 = var4.bind(var5)(var2, var1);
            var1 = var2.trim;
            var2 = var1.bind(var2)();
            var1 = var3.includes;
            var1 = var1.bind(var3)(var2);
            return var1;
        };
        var2['hasBind'] = var4;
        var4 = 8;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'lib/Keybinds.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();