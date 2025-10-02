// app/utils/native/ChatInputUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var5 = function getHighestActiveScreenIndex() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var10 = arguments[0];
            var5 = undefined;
            if(!(var10 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = _closure1_slot3;
case 2:
            var1 = var10.size;
            var8 = 0;
            if(!(var8 !== var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var10.has;
            var1 = 'voice-panel';
            var2 = var2.bind(var10)(var1);
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var10.has;
            var2 = 'message-request';
            var3 = var3.bind(var10)(var2);
            if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = var10.has;
            var3 = 'new-message';
            var4 = var4.bind(var10)(var3);
            if(var4) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = global;
            var9 = var4.Array;
            var7 = var9.from;
            var6 = var10.keys;
            var6 = var6.bind(var10)();
            var9 = var7.bind(var9)(var6);
            var7 = var9.filter;
            var6 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = arg1;
                    var2 = 'number';
                    var1 = typeof var4;
                    var1 = var2 === var1;
                    if(!var1) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 0;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.isScreenIndexFrozen;
                    var2 = var2.bind(var3)(var4);
                    var1 = !var2;
case 12:
                    return var1;
                }
            };
            var7 = var7.bind(var9)(var6);
            var6 = var7.length;
            if(!(var8 === var6)) { _fun0001_ip = 14; continue _fun0001 }
case 4:
            return var5;
case 14:
            var6 = var4.Math;
            var5 = var6.max;
            var4 = new Array(0);
            var13 = var4;
            var12 = var7;
            var11 = 0;
            var7 = arraySpread(var13, var12, var11);
            var13 = var5;
            var12 = var4;
            var11 = var6;
            var4 = apply(var13, var12, var11);
            return var4;
case 10:
            return var3;
case 8:
            return var2;
case 6:
            return var1;
        }
    };
    var _closure1_slot4 = var5;
    var1 = function getHighestIndexForScreenIndexMap(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot4;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            var4 = null;
            if(!(var4 == var2)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            return var1;
case 15:
            var1 = var3.get;
            var1 = var1.bind(var3)(var2);
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var4 = function getBestActiveInput() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = null;
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var2 = var4.current;
case 17:
            var3 = var3 != var2;
            var1 = undefined;
            if(!var3) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var1 = var2;
case 19:
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var9 = {};
    var8 = true;
    var9['value'] = var8;
    var8 = '__esModule';
    var8 = var10.bind(var11)(var3, var8, var9);
    var8 = var1.Map;
    var9 = var8.prototype;
    var9 = Object.create(var9, {constructor: {value: var8}});
    var15 = var9;
    var8 = new var15[var8](var14);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot2 = var8;
    var1 = var1.Map;
    var8 = var1.prototype;
    var8 = Object.create(var8, {constructor: {value: var1}});
    var15 = var8;
    var1 = new var15[var1](var14);
    var1 = var1 instanceof Object ? var1 : var8;
    var _closure1_slot3 = var1;
    var1 = 6;
    var6 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'utils/native/ChatInputUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function createInputRefTracker(arg1, arg2) {
        var1 = arg2;
        var _closure2_slot0 = var1;
        var1 = function addRef(arg1, arg2, arg3) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var5 = arg1;
                var7 = arg2;
                var3 = arg3;
                var4 = _closure1_slot2;
                var2 = var4.get;
                var6 = var2.bind(var4)(var7);
                var2 = null;
                if(!(var2 == var6)) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                var2 = global;
                var2 = var2.Map;
                var4 = var2.prototype;
                var4 = Object.create(var4, {constructor: {value: var2}});
                var10 = var4;
                var2 = new var10[var2](var9);
                var6 = var2 instanceof Object ? var2 : var4;
case 21:
                var2 = var6.set;
                var2 = var2.bind(var6)(var3, var5);
                var4 = _closure1_slot2;
                var2 = var4.set;
                var2 = var2.bind(var4)(var7, var6);
                var4 = _closure1_slot3;
                var2 = var4.set;
                var2 = var2.bind(var4)(var3, var5);
                var2 = global;
                var2 = var2.process;
                var2 = var2.env;
                var4 = var2.DEVELOPMENT;
                var2 = 'development';
                if(!(var2 === var4)) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                var2 = _closure1_slot3;
                var1 = var2.has;
                var1 = var1.bind(var2)(var3);
case 23:
                var1 = undefined;
                return var1;
            }
        };
        var _closure2_slot3 = var1;
        var1 = function removeRef(arg1, arg2, arg3) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var5 = arg2;
                var3 = arg3;
                var4 = _closure1_slot2;
                var2 = var4.get;
                var2 = var2.bind(var4)(var5);
                var4 = null;
                if(!(var4 != var2)) { _fun0006_ip = 25; continue _fun0006 }
case 18:
                var4 = var2.delete;
                var4 = var4.bind(var2)(var3);
                var4 = var2.size;
                var2 = 0;
                if(!(var2 === var4)) { _fun0006_ip = 26; continue _fun0006 }
case 27:
                var4 = _closure1_slot2;
                var2 = var4.delete;
                var2 = var2.bind(var4)(var5);
case 26:
                var2 = _closure1_slot3;
                var1 = var2.delete;
                var1 = var1.bind(var2)(var3);
case 25:
                var1 = undefined;
                return var1;
            }
        };
        var _closure2_slot4 = var1;
        var1 = null;
        var _closure2_slot1 = var1;
        var1 = {};
        var3 = arg1;
        var1['current'] = var3;
        var _closure2_slot2 = var1;
        var1 = {};
        var3 = function handleRef(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = arg1;
                var6 = arg2;
                var2 = _closure2_slot2;
                var2['current'] = var6;
                var2 = null;
                if(!(var2 != var1)) { _fun0007_ip = 28; continue _fun0007 }
case 15:
                var4 = _closure2_slot1;
                if(!(var2 != var4)) { _fun0007_ip = 29; continue _fun0007 }
case 30:
                var4 = _closure2_slot1;
                var4['current'] = var1;
                _fun0007_ip = 31; continue _fun0007;
case 29:
                var7 = _closure2_slot3;
                var5 = {};
                var5['current'] = var1;
                _closure2_slot1 = var5;
                var4 = _closure2_slot0;
                var1 = undefined;
                var1 = var7.bind(var1)(var5, var6, var4);
case 31:
                var1 = undefined;
                return var1;
case 28:
                var1 = _closure2_slot1;
                if(!(var2 != var1)) { _fun0007_ip = 32; continue _fun0007 }
case 33:
                var5 = _closure2_slot4;
                var4 = _closure2_slot0;
                var1 = undefined;
                var4 = var5.bind(var1)(var1, var6, var4);
                _closure2_slot1 = var2;
                return var1;
case 32:
                var1 = undefined;
                return var1;
            }
        };
        var1['handleRef'] = var3;
        var3 = function register() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = _closure2_slot1;
                var1 = null;
                if(!(var1 != var3)) { _fun0008_ip = 34; continue _fun0008 }
case 35:
                var6 = _closure2_slot4;
                var1 = _closure2_slot2;
                var3 = var1.current;
                var5 = _closure2_slot0;
                var4 = undefined;
                var3 = var6.bind(var4)(var4, var3, var5);
                var3 = _closure2_slot3;
                var2 = _closure2_slot1;
                var1 = var1.current;
                var1 = var3.bind(var4)(var2, var1, var5);
case 34:
                var1 = undefined;
                return var1;
            }
        };
        var1['register'] = var3;
        var2 = function unregister() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var3 = _closure2_slot1;
                var2 = null;
                if(!(var2 != var3)) { _fun0009_ip = 36; continue _fun0009 }
case 35:
                var4 = _closure2_slot4;
                var2 = _closure2_slot2;
                var3 = var2.current;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var4.bind(var1)(var1, var3, var2);
case 36:
                var1 = undefined;
                return var1;
            }
        };
        var1['unregister'] = var2;
        return var1;
    };
    var3['createInputRefTracker'] = var6;
    var3['getHighestActiveScreenIndex'] = var5;
    var5 = function getChatInputRef(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var4 = arg1;
            var3 = null;
            if(!(var3 == var4)) { _fun0010_ip = 35; continue _fun0010 }
case 3:
            var1 = undefined;
            return var1;
case 35:
            var2 = _closure1_slot2;
            var1 = var2.get;
            var6 = var1.bind(var2)(var4);
            var4 = var3 == var6;
            var2 = undefined;
            if(var4) { _fun0010_ip = 37; continue _fun0010 }
case 36:
            var5 = var6.get;
            var4 = arg2;
            var4 = var5.bind(var6)(var4);
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0010_ip = 37; continue _fun0010 }
case 38:
            var2 = var4.current;
case 37:
            var3 = var3 != var2;
            var1 = undefined;
            if(!var3) { _fun0010_ip = 25; continue _fun0010 }
case 39:
            var1 = var2;
case 25:
            return var1;
        }
    };
    var3['getChatInputRef'] = var5;
    var5 = function getBestActiveInputForChannelId(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var5 = arg1;
            var3 = null;
            if(!(var3 != var5)) { _fun0011_ip = 40; continue _fun0011 }
case 3:
            var4 = _closure1_slot2;
            var2 = var4.get;
            var4 = var2.bind(var4)(var5);
            if(!(var3 == var4)) { _fun0011_ip = 17; continue _fun0011 }
case 40:
            var2 = undefined;
            return var2;
case 17:
            var2 = _closure1_slot5;
            var1 = undefined;
            var4 = var2.bind(var1)(var4);
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0011_ip = 34; continue _fun0011 }
case 41:
            var2 = var4.current;
case 34:
            var3 = var3 != var2;
            var1 = undefined;
            if(!var3) { _fun0011_ip = 42; continue _fun0011 }
case 9:
            var1 = var2;
case 42:
            return var1;
        }
    };
    var3['getBestActiveInputForChannelId'] = var5;
    var3['getBestActiveInput'] = var4;
    var2 = function dismissKeyboard() {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.dismissGlobalKeyboard;
            var3 = var3.bind(var4)();
            var3 = _closure1_slot6;
            var4 = var3.bind(var1)();
            var3 = null;
            if(!(var3 != var4)) { _fun0012_ip = 34; continue _fun0012 }
case 7:
            var3 = var4.closeCustomKeyboard;
            var3 = var3.bind(var4)();
case 34:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var4 = 2;
            var4 = var3[var4];
            var6 = var5.bind(var1)(var4);
            var4 = var6.getKeyboardType;
            var4 = var4.bind(var6)();
            var8 = 3;
            var3 = var3[var8];
            var3 = var5.bind(var1)(var3);
            var3 = var3.KeyboardTypes;
            var3 = var3.SYSTEM;
            if(!(var4 !== var3)) { _fun0012_ip = 43; continue _fun0012 }
case 44:
            var7 = _closure1_slot0;
            var6 = _closure1_slot1;
            var3 = 4;
            var3 = var6[var3];
            var5 = var7.bind(var1)(var3);
            var4 = var5.setKeyboardType;
            var3 = {};
            var6 = var6[var8];
            var6 = var7.bind(var1)(var6);
            var6 = var6.KeyboardTypes;
            var6 = var6.SYSTEM;
            var3['type'] = var6;
            var3 = var4.bind(var5)(var3);
case 43:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 5;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.closePortalKeyboardRequest;
            var2 = var2.bind(var3)();
            return var1;
        }
    };
    var3['dismissKeyboard'] = var2;
    return var1;
})();