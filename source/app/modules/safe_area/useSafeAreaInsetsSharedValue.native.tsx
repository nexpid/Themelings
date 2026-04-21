// app/modules/safe_area/useSafeAreaInsetsSharedValue.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var6 = require;
        var3 = exports;
        var7 = dependencyMap;
        var _closure1_slot0 = var6;
        var1 = metroImportDefault;
        var _closure1_slot1 = var1;
        var _closure1_slot2 = var7;
        var1 = function _arrayLikeToArray(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var3 = undefined;
                var1 = var1 == var3;
                if(var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var2 = var4.length;
                var1 = var3 > var2;
case 2:
                var2 = undefined;
                if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var2 = var4.length;
case 4:
                var1 = global;
                var1 = var1.Array;
                var1 = var1.bind(var3)(var2);
                var3 = 0;
                var5 = var3 < var2;
                if(!var5) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var5 = var4[var3];
                var1[var3] = var5;
                var3 = var3 + 1;
                if(var3 < var2) { _fun0002_ip = 7; continue _fun0002 }
case 6:
                return var1;
            }
        };
        var _closure1_slot5 = var1;
        var1 = global;
        var8 = var1.Object;
        var5 = var8.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var5.bind(var8)(var3, var1, var2);
        var2 = {};
        var5 = 0;
        var8 = var7[var5];
        var1 = undefined;
        var11 = var6.bind(var1)(var8);
        var9 = var11.makeMutable;
        var8 = {};
        var10 = 1;
        var12 = var7[var10];
        var14 = var6.bind(var1)(var12);
        var13 = var14.getSafeAreaInsets;
        var12 = 'main';
        var16 = var13.bind(var14)(var12);
        var17 = var8;
        var12 = copyDataProperties(var17, var16);
        var8 = var9.bind(var11)(var8);
        var2['main'] = var8;
        var5 = var7[var5];
        var9 = var6.bind(var1)(var5);
        var8 = var9.makeMutable;
        var5 = {};
        var10 = var7[var10];
        var12 = var6.bind(var1)(var10);
        var11 = var12.getSafeAreaInsets;
        var10 = 'share';
        var16 = var11.bind(var12)(var10);
        var17 = var5;
        var10 = copyDataProperties(var17, var16);
        var5 = var8.bind(var9)(var5);
        var2['share'] = var5;
        var _closure1_slot3 = var2;
        var9 = function _loop(arg1) {
            var4 = arg1;
            var _closure2_slot0 = var4;
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 2;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var5.bind(var1)(var3);
            var2 = function(arg1) {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 3;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = _closure1_slot3;
                var2 = _closure2_slot0;
                var3 = var3[var2];
                var2 = arg1;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var2 = var3.bind(var1)(var2, var4);
            return var1;
        };
        var2 = 4;
        var2 = var7[var2];
        var2 = var6.bind(var1)(var2);
        var5 = var2.APP_ENTRY_KEYS;
        var2 = function _createForOfIteratorHelperLoose(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = arg1;
                var _closure2_slot0 = var3;
                var5 = global;
                var2 = var5.Symbol;
                var4 = 'undefined';
                var2 = typeof var2;
                var2 = var4 !== var2;
                if(!var2) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var4 = var5.Symbol;
                var4 = var4.iterator;
                var2 = var3[var4];
case 8:
                if(var2) { _fun0003_ip = 7; continue _fun0003 }
case 10:
                var2 = var3["@@iterator"];
case 7:
                if(var2) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var6 = var5.Array;
                var4 = var6.isArray;
                var6 = var4.bind(var6)(var3);
                var4 = var2;
                if(var6) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                var8 = undefined;
                var6 = undefined;
                if(!var3) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                var9 = 'string';
                var7 = typeof var3;
                if(!(var9 !== var7)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
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
                if(!var7) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                var7 = var3.constructor;
case 19:
                var10 = var9;
                if(!var7) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                var7 = var3.constructor;
                var10 = var7.name;
case 21:
                var7 = 'Map';
                if(!(var7 !== var10)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                var7 = 'Set';
                if(!(var7 !== var10)) { _fun0003_ip = 23; continue _fun0003 }
case 25:
                var7 = 'Arguments';
                if(!(var7 !== var10)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var7 = var9.test;
                var9 = var7.bind(var9)(var10);
                var7 = undefined;
                if(!var9) { _fun0003_ip = 28; continue _fun0003 }
case 26:
                var9 = _closure1_slot5;
                var7 = var9.bind(var8)(var3, var8);
case 28:
                _fun0003_ip = 29; continue _fun0003;
case 23:
                var10 = var5.Array;
                var9 = var10.from;
                var7 = var9.bind(var10)(var3);
case 29:
                var6 = var7;
                _fun0003_ip = 15; continue _fun0003;
case 17:
                var7 = _closure1_slot5;
                var6 = var7.bind(var8)(var3, var8);
case 15:
                var4 = var6;
                if(var4) { _fun0003_ip = 13; continue _fun0003 }
case 30:
                var7 = var5.TypeError;
                var5 = var7.prototype;
                var6 = Object.create(var5, {constructor: {value: var7}});
                var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var14 = var6;
                var5 = new var14[var7](var13, var12);
                var5 = var5 instanceof Object ? var5 : var6;
                throw var5;
case 13:
                if(!var4) { _fun0003_ip = 31; continue _fun0003 }
case 32:
                _closure2_slot0 = var4;
case 31:
                var4 = 0;
                var _closure2_slot1 = var4;
                var1 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var2 = _closure2_slot1;
                        var1 = _closure2_slot0;
                        var1 = var1.length;
                        if(!(!(var2 >= var1))) { _fun0004_ip = 33; continue _fun0004 }
case 34:
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
                        _fun0004_ip = 35; continue _fun0004;
case 33:
                        var2 = {};
                        var3 = true;
                        var2['done'] = var3;
                        var1 = var2;
case 35:
                        return var1;
                    }
                };
                return var1;
case 11:
                var1 = var2.call;
                var3 = var1.bind(var2)(var3);
                var2 = var3.next;
                var1 = var2.bind;
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var8 = var2.bind(var1)(var5);
        var5 = var8.bind(var1)();
        var2 = var5.done;
        if(var2) { _fun0001_ip = 36; continue _fun0001 }
case 28:
        var2 = var5.value;
        var2 = var9.bind(var1)(var2);
        var10 = var8.bind(var1)();
        var2 = var10.done;
        var5 = var10;
        if(!var2) { _fun0001_ip = 28; continue _fun0001 }
case 36:
        var2 = {};
        var5 = "function getSafeAreaInsetsWorklet_useSafeAreaInsetsSharedValueNativeTsx1(appEntryKey='main'){const{safeAreaInsetsSharedValues}=this.__closure;return safeAreaInsetsSharedValues[appEntryKey].get();}";
        var2['code'] = var5;
        var _closure1_slot4 = var2;
        var2 = function() {
            var1 = function getSafeAreaInsetsWorklet() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = arguments[0];
                    var1 = undefined;
                    if(!(var2 === var1)) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                    var2 = 'main';
case 37:
                    var1 = _closure1_slot3;
                    var2 = var1[var2];
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    return var1;
                }
            };
            var3 = {};
            var4 = _closure1_slot3;
            var3['safeAreaInsetsSharedValues'] = var4;
            var1['__closure'] = var3;
            var3 = 5220247127549.0;
            var1['__workletHash'] = var3;
            var2 = _closure1_slot4;
            var1['__initData'] = var2;
            return var1;
        };
        var2 = var2.bind(var1)();
        var5 = 6;
        var5 = var7[var5];
        var7 = var6.bind(var1)(var5);
        var6 = var7.fileFinishedImporting;
        var5 = 'modules/safe_area/useSafeAreaInsetsSharedValue.native.tsx';
        var5 = var6.bind(var7)(var5);
        var4 = function useSafeAreaInsetsSharedValue() {
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 5;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.useAppEntryKey;
            var2 = var2.bind(var3)();
            var1 = _closure1_slot3;
            var1 = var1[var2];
            return var1;
        };
        var3['default'] = var4;
        var3['getSafeAreaInsetsWorklet'] = var2;
        return var1;
    }
})();