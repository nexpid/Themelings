// app/stores/DimensionStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
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
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
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
case 0:
            var2 = arg1;
            var3 = _closure1_slot7;
            var4 = var3[var2];
            var3 = null;
            if(!(var3 == var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = undefined;
            return var3;
case 6:
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
case 0:
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
                if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 10; continue _fun0003;
case 8:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 10:
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
case 0:
                var2 = arg1;
                var3 = _closure1_slot7;
                var4 = var3[var2];
                var3 = null;
                if(!(var3 == var4)) { _fun0004_ip = 11; continue _fun0004 }
case 7:
                var3 = 1;
                return var3;
case 11:
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
case 0:
                var4 = arg1;
                var1 = _closure1_slot8;
                var1 = var1[var4];
                var3 = null;
                if(!(var3 == var1)) { _fun0005_ip = 12; continue _fun0005 }
case 7:
                var3 = _closure1_slot11;
                var2 = undefined;
                var1 = var3.bind(var2)(var4);
case 12:
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
case 0:
            var1 = arg1;
            var2 = var1.channelId;
            var8 = var1.scrollTop;
            var7 = var1.scrollHeight;
            var5 = var1.offsetHeight;
            var3 = _closure1_slot7;
            var4 = var3[var2];
            var3 = null;
            if(!(var3 != var8)) { _fun0006_ip = 13; continue _fun0006 }
case 14:
            if(!(var3 != var7)) { _fun0006_ip = 13; continue _fun0006 }
case 15:
            if(!(var3 != var5)) { _fun0006_ip = 13; continue _fun0006 }
case 9:
            var6 = {};
            var6['channelId'] = var2;
            var6['scrollTop'] = var8;
            var6['scrollHeight'] = var7;
            var6['offsetHeight'] = var5;
            if(!(var3 != var4)) { _fun0006_ip = 16; continue _fun0006 }
case 17:
            var8 = _closure1_slot0;
            var7 = _closure1_slot1;
            var5 = 5;
            var5 = var7[var5];
            var7 = undefined;
            var5 = var8.bind(var7)(var5);
            var5 = var5.bind(var7)(var4, var6);
            if(var5) { _fun0006_ip = 18; continue _fun0006 }
case 16:
            var5 = _closure1_slot7;
            var5[var2] = var6;
            _fun0006_ip = 19; continue _fun0006;
case 18:
            var5 = false;
            return var5;
case 13:
            if(!(var3 != var4)) { _fun0006_ip = 20; continue _fun0006 }
case 21:
            var1 = _closure1_slot7;
            var1 = delete var1[var2];
case 19:
            var1 = undefined;
            return var1;
case 20:
            var1 = false;
            return var1;
        }
    };
    var2['UPDATE_CHANNEL_DIMENSIONS'] = var8;
    var8 = function handleGuildUpdate(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var6 = var1.guildId;
            var7 = var1.scrollTop;
            var3 = var1.scrollTo;
            var1 = _closure1_slot8;
            var2 = var1[var6];
            var1 = null;
            if(!(var1 == var2)) { _fun0007_ip = 22; continue _fun0007 }
case 23:
            var5 = _closure1_slot8;
            var8 = _closure1_slot11;
            var2 = undefined;
            var2 = var8.bind(var2)(var6);
            var5[var6] = var2;
case 22:
            var5 = undefined;
            if(!(var5 !== var7)) { _fun0007_ip = 17; continue _fun0007 }
case 24:
            var2 = _closure1_slot8;
            var2 = var2[var6];
            var2['scrollTop'] = var7;
case 17:
            var2 = false;
            if(!(var5 !== var3)) { _fun0007_ip = 25; continue _fun0007 }
case 26:
            var5 = _closure1_slot8;
            var4 = var5[var6];
            var4 = var4.scrollTo;
            var2 = var4 !== var3;
            var5 = var5[var6];
            var5['scrollTo'] = var3;
case 25:
            var1 = var1 != var3;
            if(var1) { _fun0007_ip = 27; continue _fun0007 }
case 18:
            var1 = var2;
case 27:
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
case 0:
            var1 = arg1;
            var3 = var1.channelId;
            var4 = _closure1_slot12;
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            if(!var4) { _fun0008_ip = 28; continue _fun0008 }
case 11:
            var2 = _closure1_slot7;
            var2 = delete var2[var3];
case 28:
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
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/DimensionStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();