// app/utils/native/ChatInputUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var5 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = function getHighestIndexForScreenIndexMap(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var1 = var3.size;
            var9 = 0;
            if(!(var9 === var1)) { _fun0001_ip = 18; continue _fun0001 }
 14:
            var1 = undefined;
            return var1;
 18:
            var1 = var3.has;
            var2 = 'voice-panel';
            var1 = var1.bind(var3)(var2);
            if(var1) { _fun0001_ip = 198; continue _fun0001 }
 40:
            var1 = var3.has;
            var4 = 'message-request';
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0001_ip = 186; continue _fun0001 }
 62:
            var1 = var3.has;
            var5 = 'new-message';
            var1 = var1.bind(var3)(var5);
            if(var1) { _fun0001_ip = 174; continue _fun0001 }
 81:
            var1 = global;
            var8 = var1.Array;
            var7 = var8.from;
            var6 = var3.keys;
            var6 = var6.bind(var3)();
            var8 = var7.bind(var8)(var6);
            var7 = var8.filter;
            var6 = function(arg1) {
                var3 = _closure1_slot4;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var11 = var7.bind(var8)(var6);
            var7 = var1.Math;
            var6 = var7.max;
            var1 = new Array(0);
            var12 = var1;
            var10 = 0;
            var8 = arraySpread(var12, var11, var10);
            var12 = var6;
            var11 = var1;
            var10 = var7;
            var6 = apply(var12, var11, var10);
            var1 = var3.get;
            var1 = var1.bind(var3)(var6);
            return var1;
 174:
            var1 = var3.get;
            var1 = var1.bind(var3)(var5);
            return var1;
 186:
            var1 = var3.get;
            var1 = var1.bind(var3)(var4);
            return var1;
 198:
            var1 = var3.get;
            var1 = var1.bind(var3)(var2);
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var4 = function getBestActiveInput() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = null;
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0002_ip = 34; continue _fun0002 }
 29:
            var2 = var4.current;
 34:
            var3 = var3 != var2;
            var1 = undefined;
            if(!var3) { _fun0002_ip = 46; continue _fun0002 }
 43:
            var1 = var2;
 46:
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var7 = true;
    var8['value'] = var7;
    var7 = '__esModule';
    var7 = var9.bind(var10)(var3, var7, var8);
    var7 = var1.Map;
    var8 = var7.prototype;
    var8 = Object.create(var8, {constructor: {value: var7}});
    var14 = var8;
    var7 = new var14[var7](var13);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot2 = var7;
    var7 = var1.Map;
    var8 = var7.prototype;
    var8 = Object.create(var8, {constructor: {value: var7}});
    var14 = var8;
    var7 = new var14[var7](var13);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot3 = var7;
    var1 = var1.Set;
    var7 = var1.prototype;
    var7 = Object.create(var7, {constructor: {value: var1}});
    var14 = var7;
    var1 = new var14[var1](var13);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot4 = var1;
    var1 = 5;
    var5 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'utils/native/ChatInputUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function freezeScreenIndex(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg2;
            var2 = _closure1_slot4;
            var1 = arg1;
            if(var1) { _fun0003_ip = 28; continue _fun0003 }
 16:
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
            _fun0003_ip = 38; continue _fun0003;
 28:
            var1 = var2.add;
            var1 = var1.bind(var2)(var3);
 38:
            var1 = undefined;
            return var1;
        }
    };
    var3['freezeScreenIndex'] = var5;
    var5 = function createInputRefTracker(arg1, arg2) {
        var1 = arg2;
        var _closure2_slot0 = var1;
        var1 = function addRef(arg1, arg2, arg3) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var5 = arg1;
                var7 = arg2;
                var3 = arg3;
                var4 = _closure1_slot2;
                var2 = var4.get;
                var6 = var2.bind(var4)(var7);
                var2 = null;
                if(!(var2 == var6)) { _fun0004_ip = 60; continue _fun0004 }
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
                if(!(var2 === var4)) { _fun0004_ip = 145; continue _fun0004 }
 131:
                var2 = _closure1_slot3;
                var1 = var2.has;
                var1 = var1.bind(var2)(var3);
 145:
                var1 = undefined;
                return var1;
            }
        };
        var _closure2_slot3 = var1;
        var1 = function removeRef(arg1, arg2, arg3) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var5 = arg2;
                var3 = arg3;
                var4 = _closure1_slot2;
                var2 = var4.get;
                var2 = var2.bind(var4)(var5);
                var4 = null;
                if(!(var4 != var2)) { _fun0005_ip = 78; continue _fun0005 }
 29:
                var4 = var2.delete;
                var4 = var4.bind(var2)(var3);
                var4 = var2.size;
                var2 = 0;
                if(!(var2 === var4)) { _fun0005_ip = 64; continue _fun0005 }
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
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var1 = arg1;
                var6 = arg2;
                var2 = _closure2_slot2;
                var2['current'] = var6;
                var2 = null;
                if(!(var2 != var1)) { _fun0006_ip = 76; continue _fun0006 }
 25:
                var4 = _closure2_slot1;
                if(!(var2 != var4)) { _fun0006_ip = 45; continue _fun0006 }
 33:
                var4 = _closure2_slot1;
                var4['current'] = var1;
                _fun0006_ip = 72; continue _fun0006;
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
                if(!(var2 != var1)) { _fun0006_ip = 107; continue _fun0006 }
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
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var3 = _closure2_slot1;
                var1 = null;
                if(!(var1 != var3)) { _fun0007_ip = 59; continue _fun0007 }
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
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var3 = _closure2_slot1;
                var2 = null;
                if(!(var2 != var3)) { _fun0008_ip = 39; continue _fun0008 }
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
    var3['createInputRefTracker'] = var5;
    var5 = function getChatInputRef(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var4 = arg1;
            var3 = null;
            if(!(var3 == var4)) { _fun0009_ip = 13; continue _fun0009 }
 9:
            var1 = undefined;
            return var1;
 13:
            var2 = _closure1_slot2;
            var1 = var2.get;
            var6 = var1.bind(var2)(var4);
            var4 = var3 == var6;
            var2 = undefined;
            if(var4) { _fun0009_ip = 66; continue _fun0009 }
 39:
            var5 = var6.get;
            var4 = arg2;
            var4 = var5.bind(var6)(var4);
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0009_ip = 66; continue _fun0009 }
 61:
            var2 = var4.current;
 66:
            var3 = var3 != var2;
            var1 = undefined;
            if(!var3) { _fun0009_ip = 78; continue _fun0009 }
 75:
            var1 = var2;
 78:
            return var1;
        }
    };
    var3['getChatInputRef'] = var5;
    var5 = function getBestActiveInputForChannelId(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var5 = arg1;
            var3 = null;
            if(!(var3 != var5)) { _fun0010_ip = 30; continue _fun0010 }
 9:
            var4 = _closure1_slot2;
            var2 = var4.get;
            var4 = var2.bind(var4)(var5);
            if(!(var3 == var4)) { _fun0010_ip = 34; continue _fun0010 }
 30:
            var2 = undefined;
            return var2;
 34:
            var2 = _closure1_slot5;
            var1 = undefined;
            var4 = var2.bind(var1)(var4);
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0010_ip = 59; continue _fun0010 }
 54:
            var2 = var4.current;
 59:
            var3 = var3 != var2;
            var1 = undefined;
            if(!var3) { _fun0010_ip = 71; continue _fun0010 }
 68:
            var1 = var2;
 71:
            return var1;
        }
    };
    var3['getBestActiveInputForChannelId'] = var5;
    var3['getBestActiveInput'] = var4;
    var2 = function dismissKeyboard() {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 0;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.dismissGlobalKeyboard;
            var3 = var3.bind(var4)();
            var3 = _closure1_slot6;
            var4 = var3.bind(var1)();
            var3 = null;
            if(!(var3 != var4)) { _fun0011_ip = 58; continue _fun0011 }
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
            if(!(var4 !== var3)) { _fun0011_ip = 174; continue _fun0011 }
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