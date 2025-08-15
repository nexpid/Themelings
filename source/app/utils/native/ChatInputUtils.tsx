// app/utils/native/ChatInputUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var6 = function isScreenIndexFrozen(arg1) {
        var3 = _closure1_slot4;
        var2 = var3.has;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot5 = var6;
    var5 = function getHighestActiveScreenIndex() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var10 = arguments[0];
            var5 = undefined;
            if(!(var10 === var5)) { _fun0001_ip = 16; continue _fun0001 }
 9:
            var10 = _closure1_slot3;
 16:
            var1 = var10.size;
            var8 = 0;
            if(!(var8 !== var1)) { _fun0001_ip = 140; continue _fun0001 }
 27:
            var2 = var10.has;
            var1 = 'voice-panel';
            var2 = var2.bind(var10)(var1);
            if(var2) { _fun0001_ip = 188; continue _fun0001 }
 49:
            var3 = var10.has;
            var2 = 'message-request';
            var3 = var3.bind(var10)(var2);
            if(var3) { _fun0001_ip = 186; continue _fun0001 }
 68:
            var4 = var10.has;
            var3 = 'new-message';
            var4 = var4.bind(var10)(var3);
            if(var4) { _fun0001_ip = 184; continue _fun0001 }
 87:
            var4 = global;
            var9 = var4.Array;
            var7 = var9.from;
            var6 = var10.keys;
            var6 = var6.bind(var10)();
            var9 = var7.bind(var9)(var6);
            var7 = var9.filter;
            var6 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = arg1;
                    var2 = 'number';
                    var1 = typeof var4;
                    var1 = var2 === var1;
                    if(!var1) { _fun0002_ip = 34; continue _fun0002 }
 17:
                    var3 = _closure1_slot5;
                    var2 = undefined;
                    var2 = var3.bind(var2)(var4);
                    var1 = !var2;
 34:
                    return var1;
                }
            };
            var7 = var7.bind(var9)(var6);
            var6 = var7.length;
            if(!(var8 === var6)) { _fun0001_ip = 142; continue _fun0001 }
 140:
            return var5;
 142:
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
 184:
            return var3;
 186:
            return var2;
 188:
            return var1;
        }
    };
    var _closure1_slot6 = var5;
    var1 = function getHighestIndexForScreenIndexMap(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var2 = _closure1_slot6;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            var4 = null;
            if(!(var4 == var2)) { _fun0003_ip = 25; continue _fun0003 }
 23:
            return var1;
 25:
            var1 = var3.get;
            var1 = var1.bind(var3)(var2);
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var4 = function getBestActiveInput() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = _closure1_slot7;
            var2 = _closure1_slot3;
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = null;
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0004_ip = 34; continue _fun0004 }
 29:
            var2 = var4.current;
 34:
            var3 = var3 != var2;
            var1 = undefined;
            if(!var3) { _fun0004_ip = 46; continue _fun0004 }
 43:
            var1 = var2;
 46:
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var10 = {};
    var9 = true;
    var10['value'] = var9;
    var9 = '__esModule';
    var9 = var11.bind(var12)(var3, var9, var10);
    var9 = var1.Map;
    var10 = var9.prototype;
    var10 = Object.create(var10, {constructor: {value: var9}});
    var16 = var10;
    var9 = new var16[var9](var15);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot2 = var9;
    var9 = var1.Map;
    var10 = var9.prototype;
    var10 = Object.create(var10, {constructor: {value: var9}});
    var16 = var10;
    var9 = new var16[var9](var15);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot3 = var9;
    var1 = var1.Set;
    var9 = var1.prototype;
    var9 = Object.create(var9, {constructor: {value: var1}});
    var16 = var9;
    var1 = new var16[var1](var15);
    var1 = var1 instanceof Object ? var1 : var9;
    var _closure1_slot4 = var1;
    var1 = 5;
    var7 = var7[var1];
    var1 = undefined;
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'utils/native/ChatInputUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = function freezeScreenIndex(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = arg2;
            var2 = _closure1_slot4;
            var1 = arg1;
            if(var1) { _fun0005_ip = 28; continue _fun0005 }
 16:
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
            _fun0005_ip = 38; continue _fun0005;
 28:
            var1 = var2.add;
            var1 = var1.bind(var2)(var3);
 38:
            var1 = undefined;
            return var1;
        }
    };
    var3['freezeScreenIndex'] = var7;
    var3['isScreenIndexFrozen'] = var6;
    var6 = function createInputRefTracker(arg1, arg2) {
        var1 = arg2;
        var _closure2_slot0 = var1;
        var1 = function addRef(arg1, arg2, arg3) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var5 = arg1;
                var7 = arg2;
                var3 = arg3;
                var4 = _closure1_slot2;
                var2 = var4.get;
                var6 = var2.bind(var4)(var7);
                var2 = null;
                if(!(var2 == var6)) { _fun0006_ip = 60; continue _fun0006 }
 32:
                var2 = global;
                var2 = var2.Map;
                var4 = var2.prototype;
                var4 = Object.create(var4, {constructor: {value: var2}});
                var10 = var4;
                var2 = new var10[var2](var9);
                var6 = var2 instanceof Object ? var2 : var4;
 60:
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
                if(!(var2 === var4)) { _fun0006_ip = 143; continue _fun0006 }
 129:
                var2 = _closure1_slot3;
                var1 = var2.has;
                var1 = var1.bind(var2)(var3);
 143:
                var1 = undefined;
                return var1;
            }
        };
        var _closure2_slot3 = var1;
        var1 = function removeRef(arg1, arg2, arg3) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var5 = arg2;
                var3 = arg3;
                var4 = _closure1_slot2;
                var2 = var4.get;
                var2 = var2.bind(var4)(var5);
                var4 = null;
                if(!(var4 != var2)) { _fun0007_ip = 78; continue _fun0007 }
 29:
                var4 = var2.delete;
                var4 = var4.bind(var2)(var3);
                var4 = var2.size;
                var2 = 0;
                if(!(var2 === var4)) { _fun0007_ip = 64; continue _fun0007 }
 50:
                var4 = _closure1_slot2;
                var2 = var4.delete;
                var2 = var2.bind(var4)(var5);
 64:
                var2 = _closure1_slot3;
                var1 = var2.delete;
                var1 = var1.bind(var2)(var3);
 78:
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
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var1 = arg1;
                var6 = arg2;
                var2 = _closure2_slot2;
                var2['current'] = var6;
                var2 = null;
                if(!(var2 != var1)) { _fun0008_ip = 76; continue _fun0008 }
 25:
                var4 = _closure2_slot1;
                if(!(var2 != var4)) { _fun0008_ip = 45; continue _fun0008 }
 33:
                var4 = _closure2_slot1;
                var4['current'] = var1;
                _fun0008_ip = 72; continue _fun0008;
 45:
                var7 = _closure2_slot3;
                var5 = {};
                var5['current'] = var1;
                _closure2_slot1 = var5;
                var4 = _closure2_slot0;
                var1 = undefined;
                var1 = var7.bind(var1)(var5, var6, var4);
 72:
                var1 = undefined;
                return var1;
 76:
                var1 = _closure2_slot1;
                if(!(var2 != var1)) { _fun0008_ip = 107; continue _fun0008 }
 84:
                var5 = _closure2_slot4;
                var4 = _closure2_slot0;
                var1 = undefined;
                var4 = var5.bind(var1)(var1, var6, var4);
                _closure2_slot1 = var2;
                return var1;
 107:
                var1 = undefined;
                return var1;
            }
        };
        var1['handleRef'] = var3;
        var3 = function register() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var3 = _closure2_slot1;
                var1 = null;
                if(!(var1 != var3)) { _fun0009_ip = 59; continue _fun0009 }
 13:
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
 59:
                var1 = undefined;
                return var1;
            }
        };
        var1['register'] = var3;
        var2 = function unregister() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var3 = _closure2_slot1;
                var2 = null;
                if(!(var2 != var3)) { _fun0010_ip = 39; continue _fun0010 }
 13:
                var4 = _closure2_slot4;
                var2 = _closure2_slot2;
                var3 = var2.current;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var4.bind(var1)(var1, var3, var2);
 39:
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
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var4 = arg1;
            var3 = null;
            if(!(var3 == var4)) { _fun0011_ip = 13; continue _fun0011 }
 9:
            var1 = undefined;
            return var1;
 13:
            var2 = _closure1_slot2;
            var1 = var2.get;
            var6 = var1.bind(var2)(var4);
            var4 = var3 == var6;
            var2 = undefined;
            if(var4) { _fun0011_ip = 66; continue _fun0011 }
 39:
            var5 = var6.get;
            var4 = arg2;
            var4 = var5.bind(var6)(var4);
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0011_ip = 66; continue _fun0011 }
 61:
            var2 = var4.current;
 66:
            var3 = var3 != var2;
            var1 = undefined;
            if(!var3) { _fun0011_ip = 78; continue _fun0011 }
 75:
            var1 = var2;
 78:
            return var1;
        }
    };
    var3['getChatInputRef'] = var5;
    var5 = function getBestActiveInputForChannelId(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var5 = arg1;
            var3 = null;
            if(!(var3 != var5)) { _fun0012_ip = 30; continue _fun0012 }
 9:
            var4 = _closure1_slot2;
            var2 = var4.get;
            var4 = var2.bind(var4)(var5);
            if(!(var3 == var4)) { _fun0012_ip = 34; continue _fun0012 }
 30:
            var2 = undefined;
            return var2;
 34:
            var2 = _closure1_slot7;
            var1 = undefined;
            var4 = var2.bind(var1)(var4);
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0012_ip = 59; continue _fun0012 }
 54:
            var2 = var4.current;
 59:
            var3 = var3 != var2;
            var1 = undefined;
            if(!var3) { _fun0012_ip = 71; continue _fun0012 }
 68:
            var1 = var2;
 71:
            return var1;
        }
    };
    var3['getBestActiveInputForChannelId'] = var5;
    var3['getBestActiveInput'] = var4;
    var2 = function dismissKeyboard() {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 0;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.dismissGlobalKeyboard;
            var3 = var3.bind(var4)();
            var3 = _closure1_slot8;
            var4 = var3.bind(var1)();
            var3 = null;
            if(!(var3 != var4)) { _fun0013_ip = 58; continue _fun0013 }
 48:
            var3 = var4.closeCustomKeyboard;
            var3 = var3.bind(var4)();
 58:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var4 = 1;
            var4 = var3[var4];
            var6 = var5.bind(var1)(var4);
            var4 = var6.getKeyboardType;
            var4 = var4.bind(var6)();
            var8 = 2;
            var3 = var3[var8];
            var3 = var5.bind(var1)(var3);
            var3 = var3.KeyboardTypes;
            var3 = var3.SYSTEM;
            if(!(var4 !== var3)) { _fun0013_ip = 174; continue _fun0013 }
 116:
            var7 = _closure1_slot0;
            var6 = _closure1_slot1;
            var3 = 3;
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
 174:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 4;
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