// app/modules/channel/ChannelMemberCountStore.tsx
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
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var2 = global;
    var9 = var2.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var7 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var9 = var2.Object;
    var8 = var9.freeze;
    var2 = null;
    var7 = {'online': null, 'total': null};
    var7 = var8.bind(var9)(var7);
    var _closure1_slot9 = var7;
    var7 = {};
    var _closure1_slot10 = var7;
    var7 = {};
    var _closure1_slot11 = var7;
    var _closure1_slot12 = var2;
    var2 = 8;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function ChannelMemberCountStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
                var1 = _closure1_slot13;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 69; continue _fun0002 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 105; continue _fun0002;
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
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = arg1;
                var6 = this;
                var5 = var6.waitFor;
                var4 = _closure1_slot7;
                var3 = _closure1_slot8;
                var3 = var5.bind(var6)(var4, var3);
                var3 = null;
                if(!(var3 == var2)) { _fun0003_ip = 39; continue _fun0003 }
 35:
                var2 = _closure1_slot10;
 39:
                _closure1_slot11 = var2;
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getMemberCount';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = _closure1_slot11;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0004_ip = 24; continue _fun0004 }
 20:
                var1 = _closure1_slot9;
 24:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'requestCount';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            var4 = arg1;
            var3 = arg2;
            var2 = {};
            var2['guildId'] = var4;
            var2['channelId'] = var3;
            _closure1_slot12 = var2;
            var2 = _closure1_slot7;
            var1 = var2.getSocket;
            var2 = var1.bind(var2)();
            var1 = var2.requestChannelMemberCount;
            var1 = var1.bind(var2)(var4, var3);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'ChannelMemberCountStore';
    var7['displayName'] = var2;
    var2 = 'channelMemberCounts';
    var7['persistKey'] = var2;
    var2 = 9;
    var2 = var5[var2];
    var12 = var6.bind(var1)(var2);
    var2 = {};
    var8 = function handleConnectionOpen() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = _closure1_slot12;
            var1 = null;
            if(!(var1 != var3)) { _fun0005_ip = 57; continue _fun0005 }
 13:
            var3 = _closure1_slot7;
            var1 = var3.getSocket;
            var5 = var1.bind(var3)();
            var4 = var5.requestChannelMemberCount;
            var1 = _closure1_slot12;
            var3 = var1.guildId;
            var1 = _closure1_slot12;
            var1 = var1.channelId;
            var1 = var4.bind(var5)(var3, var1);
 57:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 7;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.keys;
            var2 = _closure1_slot11;
            var4 = var3.bind(var4)(var2);
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = arg1;
                    var4 = _closure1_slot8;
                    var3 = var4.getChannel;
                    var4 = var3.bind(var4)(var2);
                    var3 = null;
                    if(!(var3 == var4)) { _fun0006_ip = 34; continue _fun0006 }
 26:
                    var1 = _closure1_slot11;
                    var1 = delete var1[var2];
 34:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var2['CONNECTION_OPEN'] = var8;
    var4 = function handleMemberCountUpdate(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var3 = var1.channelId;
            var5 = var1.online;
            var4 = var1.total;
            var2 = null;
            var1 = var2 == var5;
            if(!var1) { _fun0007_ip = 33; continue _fun0007 }
 29:
            var1 = var2 == var4;
 33:
            if(var1) { _fun0007_ip = 59; continue _fun0007 }
 36:
            var2 = _closure1_slot11;
            var1 = {};
            var1['online'] = var5;
            var1['total'] = var4;
            var2[var3] = var1;
 59:
            var1 = true;
            return var1;
        }
    };
    var2['CHANNEL_MEMBER_COUNT_UPDATE'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var7](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 10;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel/ChannelMemberCountStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();