// app/modules/keyboard/native/KeyCommandsView.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = native2;
        var9 = native3;
        var3 = native6;
        var6 = native7;
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
                if(!var2) { _fun0002_ip = 45; continue _fun0002 }
 30:
                var4 = var5.Symbol;
                var4 = var4.iterator;
                var2 = var3[var4];
 45:
                if(var2) { _fun0002_ip = 54; continue _fun0002 }
 48:
                var2 = var3.@@iterator;
 54:
                if(var2) { _fun0002_ip = 344; continue _fun0002 }
 60:
                var6 = var5.Array;
                var4 = var6.isArray;
                var6 = var4.bind(var6)(var3);
                var4 = var2;
                if(var6) { _fun0002_ip = 322; continue _fun0002 }
 85:
                var8 = undefined;
                var6 = undefined;
                if(!var3) { _fun0002_ip = 282; continue _fun0002 }
 95:
                var9 = 'string';
                var7 = typeof var3;
                if(!(var9 !== var7)) { _fun0002_ip = 269; continue _fun0002 }
 109:
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
                if(!var7) { _fun0002_ip = 162; continue _fun0002 }
 157:
                var7 = var3.constructor;
 162:
                var10 = var9;
                if(!var7) { _fun0002_ip = 178; continue _fun0002 }
 168:
                var7 = var3.constructor;
                var10 = var7.name;
 178:
                var7 = 'Map';
                if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 186:
                var7 = 'Set';
                if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 194:
                var7 = 'Arguments';
                if(!(var7 !== var10)) { _fun0002_ip = 233; continue _fun0002 }
 204:
                var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var7 = var9.test;
                var9 = var7.bind(var9)(var10);
                var7 = undefined;
                if(!var9) { _fun0002_ip = 246; continue _fun0002 }
 233:
                var9 = _closure1_slot7;
                var7 = var9.bind(var8)(var3, var8);
 246:
                _fun0002_ip = 264; continue _fun0002;
 248:
                var10 = var5.Array;
                var9 = var10.from;
                var7 = var9.bind(var10)(var3);
 264:
                var6 = var7;
                _fun0002_ip = 282; continue _fun0002;
 269:
                var7 = _closure1_slot7;
                var6 = var7.bind(var8)(var3, var8);
 282:
                var4 = var6;
                if(var4) { _fun0002_ip = 322; continue _fun0002 }
 288:
                var7 = var5.TypeError;
                var5 = var7.prototype;
                var6 = Object.create(var5, {constructor: {value: var7}});
                var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var14 = var6;
                var5 = new var14[var7](var13, var12);
                var5 = var5 instanceof Object ? var5 : var6;
                throw var5;
 322:
                if(!var4) { _fun0002_ip = 329; continue _fun0002 }
 325:
                _closure2_slot0 = var4;
 329:
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
 344:
                var1 = var2.call;
                var3 = var1.bind(var2)(var3);
                var2 = var3.next;
                var1 = var2.bind;
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var _closure1_slot6 = var1;
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
        var _closure1_slot7 = var1;
        var1 = global;
        var8 = var1.Object;
        var7 = var8.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var7.bind(var8)(var3, var1, var4);
        var1 = 0;
        var4 = var6[var1];
        var1 = undefined;
        var4 = var9.bind(var1)(var4);
        var _closure1_slot0 = var4;
        var13 = 1;
        var7 = var6[var13];
        var4 = native4;
        var8 = var4.bind(var1)(var7);
        var _closure1_slot1 = var8;
        var4 = 2;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.requireNativeComponent;
        var11 = var4.StyleSheet;
        var4 = 3;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.jsx;
        var _closure1_slot2 = var4;
        var10 = var11.create;
        var4 = {};
        var12 = {};
        var12['flex'] = var13;
        var4['viewDefaults'] = var12;
        var4 = var10.bind(var11)(var4);
        var _closure1_slot3 = var4;
        var4 = 4;
        var4 = var6[var4];
        var10 = var5.bind(var1)(var4);
        var4 = var10.isAndroid;
        var4 = var4.bind(var10)();
        if(var4) { _fun0001_ip = 211; continue _fun0001 }
 200:
        var4 = 'KeyCommandsView';
        var4 = var7.bind(var1)(var4);
        _fun0001_ip = 223; continue _fun0001;
 211:
        var7 = 5;
        var7 = var6[var7];
        var4 = var9.bind(var1)(var7);
 223:
        var _closure1_slot4 = var4;
        var7 = var8.createContext;
        var4 = {};
        var9 = new Array(0);
        var4['keyCommands'] = var9;
        var9 = function addKeyCommand() {
            var1 = undefined;
            return var1;
        };
        var4['addKeyCommand'] = var9;
        var9 = function removeKeyCommand() {
            var1 = undefined;
            return var1;
        };
        var4['removeKeyCommand'] = var9;
        var4 = var7.bind(var8)(var4);
        var _closure1_slot5 = var4;
        var4 = 6;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/keyboard/native/KeyCommandsView.tsx';
        var4 = var5.bind(var6)(var4);
        var4 = function KeyCommandsView(arg1) {
            var4 = arg1;
            var8 = var4.style;
            var1 = null;
            var3 = Object.create(var1);
            var1 = 0;
            var3['style'] = var1;
            var15 = {};
            var14 = var4;
            var13 = var3;
            var11 = copyDataProperties(var15, var14, var13);
            var5 = _closure1_slot1;
            var3 = var5.useState;
            var2 = new Array(0);
            var6 = var3.bind(var5)(var2);
            var3 = _closure1_slot0;
            var4 = undefined;
            var2 = 2;
            var2 = var3.bind(var4)(var6, var2);
            var9 = var2[var1];
            var _closure2_slot0 = var9;
            var1 = 1;
            var1 = var2[var1];
            var _closure2_slot1 = var1;
            var3 = var5.useCallback;
            var2 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var3 = _closure2_slot1;
                var1 = undefined;
                var2 = function(arg1) {
                    var1 = new Array(1);
                    var5 = arg1;
                    var4 = 0;
                    var6 = var1;
                    var3 = arraySpread(var6, var5, var4);
                    var2 = _closure3_slot0;
                    var1[var3] = var2;
                    var2 = 1;
                    var2 = var3 + var2;
                    return var1;
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = new Array(0);
            var6 = var3.bind(var5)(var2, var1);
            var _closure2_slot2 = var6;
            var3 = var5.useCallback;
            var2 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var3 = _closure2_slot1;
                var1 = undefined;
                var2 = function(arg1) {
                    var3 = arg1;
                    var2 = var3.filter;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.eventName;
                        var1 = _closure3_slot0;
                        var1 = var2 !== var1;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = new Array(0);
            var1 = var3.bind(var5)(var2, var1);
            var _closure2_slot3 = var1;
            var3 = var5.useMemo;
            var2 = new Array(3);
            var2[0] = var9;
            var2[1] = var6;
            var2[2] = var1;
            var1 = function() {
                var1 = {};
                var3 = _closure2_slot0;
                var1['keyCommands'] = var3;
                var3 = _closure2_slot2;
                var1['addKeyCommand'] = var3;
                var2 = _closure2_slot3;
                var1['removeKeyCommand'] = var2;
                return var1;
            };
            var5 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot2;
            var1 = _closure1_slot5;
            var2 = var1.Provider;
            var1 = {};
            var1['value'] = var5;
            var6 = _closure1_slot4;
            var5 = {};
            var15 = var5;
            var14 = var11;
            var11 = copyDataProperties(var15, var14);
            var10 = _closure1_slot3;
            var11 = var10.viewDefaults;
            var10 = new Array(2);
            var10[0] = var11;
            var10[1] = var8;
            var8 = 'style';
            var5[var8] = var10;
            var8 = 'keyCommands';
            var5[var8] = var9;
            var8 = function onKeyCommand(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = arg1;
                    var3 = var2.nativeEvent;
                    var _closure3_slot0 = var3;
                    var4 = _closure2_slot0;
                    var2 = var4.find;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.eventName;
                        var1 = _closure3_slot0;
                        var1 = var1.eventName;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var2 = var2.bind(var4)(var1);
                    var1 = null;
                    if(!(var1 != var2)) { _fun0005_ip = 55; continue _fun0005 }
 44:
                    var1 = var2.onKeyCommand;
                    var1 = var1.bind(var2)(var3);
 55:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = 'onKeyCommand';
            var5[var7] = var8;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var3['default'] = var4;
        var2 = function useKeyCommands(arg1) {
            var5 = arg1;
            var _closure2_slot0 = var5;
            var4 = _closure1_slot1;
            var3 = var4.useContext;
            var2 = _closure1_slot5;
            var2 = var3.bind(var4)(var2);
            var7 = var2.addKeyCommand;
            var _closure2_slot1 = var7;
            var6 = var2.removeKeyCommand;
            var _closure2_slot2 = var6;
            var3 = var4.useEffect;
            var2 = new Array(3);
            var2[0] = var7;
            var2[1] = var6;
            var2[2] = var5;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure1_slot6;
                    var1 = _closure2_slot0;
                    var4 = undefined;
                    var3 = var2.bind(var4)(var1);
                    var2 = var3.bind(var4)();
                    var1 = var2.done;
                    if(var1) { _fun0006_ip = 62; continue _fun0006 }
 33:
                    var6 = var2.value;
                    var1 = _closure2_slot1;
                    var1 = var1.bind(var4)(var6);
                    var6 = var3.bind(var4)();
                    var1 = var6.done;
                    var2 = var6;
                    if(!var1) { _fun0006_ip = 33; continue _fun0006 }
 62:
                    var1 = function() {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                            var3 = _closure1_slot6;
                            var2 = _closure2_slot0;
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.bind(var1)();
                            var2 = var3.done;
                            if(var2) { _fun0007_ip = 68; continue _fun0007 }
 33:
                            var2 = var3.value;
                            var6 = _closure2_slot2;
                            var2 = var2.eventName;
                            var2 = var6.bind(var1)(var2);
                            var6 = var4.bind(var1)();
                            var2 = var6.done;
                            var3 = var6;
                            if(!var2) { _fun0007_ip = 33; continue _fun0007 }
 68:
                            return var1;
                        }
                    };
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            var1 = undefined;
            return var1;
        };
        var3['useKeyCommands'] = var2;
        return var1;
    }
})();