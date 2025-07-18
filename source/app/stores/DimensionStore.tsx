// app/stores/DimensionStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native3;
    var3 = native6;
    var5 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function guildDimensionFactory(arg1) {
        var1 = {'guildId': null, 'scrollTop': null, 'scrollTo': null};
        var2 = arg1;
        var1['guildId'] = var2;
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = function _isAtBottom(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var3 = _closure1_slot7;
            var4 = var3[var2];
            var3 = null;
            if(!(var3 == var4)) { _fun0002_ip = 24; continue _fun0002 }
 20:
            var3 = undefined;
            return var3;
 24:
            var1 = _closure1_slot7;
            var1 = var1[var2];
            var2 = var1.scrollTop;
            var3 = var1.scrollHeight;
            var1 = var1.offsetHeight;
            var1 = var3 - var1;
            var1 = var2 === var1;
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var7 = 0;
    var2 = var5[var7];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = {};
    var _closure1_slot7 = var2;
    var2 = {};
    var _closure1_slot8 = var2;
    var2 = {};
    var2['scrollTop'] = var7;
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.Store;
    var2 = function(arg1) {
        var4 = function DimensionStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot10;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 69; continue _fun0003 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 105; continue _fun0003;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'percentageScrolled';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = arg1;
                var3 = _closure1_slot7;
                var4 = var3[var2];
                var3 = null;
                if(!(var3 == var4)) { _fun0004_ip = 25; continue _fun0004 }
 20:
                var3 = 1;
                return var3;
 25:
                var1 = _closure1_slot7;
                var1 = var1[var2];
                var2 = var1.scrollTop;
                var1 = var1.scrollHeight;
                var1 = var2 / var1;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'getChannelDimensions';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot7;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getGuildDimensions';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = arg1;
                var1 = _closure1_slot8;
                var1 = var1[var4];
                var3 = null;
                if(!(var3 == var1)) { _fun0005_ip = 31; continue _fun0005 }
 20:
                var3 = _closure1_slot11;
                var2 = undefined;
                var1 = var3.bind(var2)(var4);
 31:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getGuildListDimensions';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'isAtBottom';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var3 = _closure1_slot12;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'DimensionStore';
    var7['displayName'] = var2;
    var2 = 7;
    var2 = var5[var2];
    var11 = var6.bind(var1)(var2);
    var2 = {};
    var8 = function handleChannelScroll(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var2 = var1.channelId;
            var8 = var1.scrollTop;
            var7 = var1.scrollHeight;
            var5 = var1.offsetHeight;
            var3 = _closure1_slot7;
            var4 = var3[var2];
            var3 = null;
            if(!(var3 != var8)) { _fun0006_ip = 121; continue _fun0006 }
 43:
            if(!(var3 != var7)) { _fun0006_ip = 121; continue _fun0006 }
 47:
            if(!(var3 != var5)) { _fun0006_ip = 121; continue _fun0006 }
 51:
            var6 = {};
            var6['channelId'] = var2;
            var6['scrollTop'] = var8;
            var6['scrollHeight'] = var7;
            var6['offsetHeight'] = var5;
            if(!(var3 != var4)) { _fun0006_ip = 107; continue _fun0006 }
 76:
            var8 = _closure1_slot0;
            var7 = _closure1_slot1;
            var5 = 5;
            var5 = var7[var5];
            var7 = undefined;
            var5 = var8.bind(var7)(var5);
            var5 = var5.bind(var7)(var4, var6);
            if(var5) { _fun0006_ip = 117; continue _fun0006 }
 107:
            var5 = _closure1_slot7;
            var5[var2] = var6;
            _fun0006_ip = 133; continue _fun0006;
 117:
            var5 = false;
            return var5;
 121:
            if(!(var3 != var4)) { _fun0006_ip = 137; continue _fun0006 }
 125:
            var1 = _closure1_slot7;
            var1 = delete var1[var2];
 133:
            var1 = undefined;
            return var1;
 137:
            var1 = false;
            return var1;
        }
    };
    var2['UPDATE_CHANNEL_DIMENSIONS'] = var8;
    var8 = function handleGuildUpdate(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var6 = var1.guildId;
            var7 = var1.scrollTop;
            var3 = var1.scrollTo;
            var1 = _closure1_slot8;
            var2 = var1[var6];
            var1 = null;
            if(!(var1 == var2)) { _fun0007_ip = 56; continue _fun0007 }
 37:
            var5 = _closure1_slot8;
            var8 = _closure1_slot11;
            var2 = undefined;
            var2 = var8.bind(var2)(var6);
            var5[var6] = var2;
 56:
            var5 = undefined;
            if(!(var5 !== var7)) { _fun0007_ip = 76; continue _fun0007 }
 62:
            var2 = _closure1_slot8;
            var2 = var2[var6];
            var2['scrollTop'] = var7;
 76:
            var2 = false;
            if(!(var5 !== var3)) { _fun0007_ip = 110; continue _fun0007 }
 82:
            var5 = _closure1_slot8;
            var4 = var5[var6];
            var4 = var4.scrollTo;
            var2 = var4 !== var3;
            var5 = var5[var6];
            var5['scrollTo'] = var3;
 110:
            var1 = var1 != var3;
            if(var1) { _fun0007_ip = 120; continue _fun0007 }
 117:
            var1 = var2;
 120:
            return var1;
        }
    };
    var2['UPDATE_CHANNEL_LIST_DIMENSIONS'] = var8;
    var8 = function handleGuildListUpdate(arg1) {
        var1 = arg1;
        var2 = var1.scrollTop;
        var1 = _closure1_slot9;
        var1['scrollTop'] = var2;
        var1 = undefined;
        return var1;
    };
    var2['UPDATE_GUILD_LIST_DIMENSIONS'] = var8;
    var4 = function handleCallCreate(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var3 = var1.channelId;
            var4 = _closure1_slot12;
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            if(!var4) { _fun0008_ip = 33; continue _fun0008 }
 25:
            var2 = _closure1_slot7;
            var2 = delete var2[var3];
 33:
            return var1;
        }
    };
    var2['CALL_CREATE'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var12 = var4;
    var10 = var2;
    var2 = new var12[var7](var11, var10, var9);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 8;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/DimensionStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();