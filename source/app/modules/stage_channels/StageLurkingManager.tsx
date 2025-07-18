// app/modules/stage_channels/StageLurkingManager.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
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
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function StageLurkingManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot3;
                var3 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot10;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 86; continue _fun0002 }
 73:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 120; continue _fun0002;
 86:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 120:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var1 = arg1;
                        var3 = var1.channelId;
                        var4 = var1.guildId;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0003_ip = 53; continue _fun0003 }
 19:
                        var5 = _closure1_slot8;
                        var1 = var5.getChannel;
                        var5 = var1.bind(var5)(var3);
                        if(!(var2 != var5)) { _fun0003_ip = 113; continue _fun0003 }
 40:
                        var1 = var5.isGuildStageVoice;
                        var1 = var1.bind(var5)();
                        if(var1) { _fun0003_ip = 113; continue _fun0003 }
 53:
                        var6 = _closure3_slot0;
                        var5 = var6.terminate;
                        var5 = var5.bind(var6)();
                        var5 = var2 == var3;
                        var3 = null;
                        if(var5) { _fun0003_ip = 94; continue _fun0003 }
 79:
                        var5 = var2 != var4;
                        var2 = null;
                        if(!var5) { _fun0003_ip = 91; continue _fun0003 }
 88:
                        var2 = var4;
 91:
                        var3 = var2;
 94:
                        var2 = _closure3_slot0;
                        var1 = var2.handleDisconnectFromStageChannel;
                        var1 = var1.bind(var2)(var3);
                        var1 = undefined;
                        return var1;
 113:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleVoiceChannelSelect'] = var3;
                var3 = function(arg1) {
                    var3 = _closure1_slot9;
                    var2 = var3.getGuildId;
                    var2 = var2.bind(var3)();
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 7;
                    var3 = var8[var1];
                    var1 = undefined;
                    var4 = var7.bind(var1)(var3);
                    var3 = var4.stopLurkingAll;
                    var6 = new Array(2);
                    var6[0] = var2;
                    var2 = arg1;
                    var6[1] = var2;
                    var5 = var6.filter;
                    var2 = 8;
                    var2 = var8[var2];
                    var2 = var7.bind(var1)(var2);
                    var2 = var2.isNotNullish;
                    var2 = var5.bind(var6)(var2);
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['handleDisconnectFromStageChannel'] = var3;
                var2 = function() {
                    var3 = _closure3_slot0;
                    var1 = var3.terminate;
                    var1 = var1.bind(var3)();
                    var2 = var3.handleDisconnectFromStageChannel;
                    var1 = null;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var1['handleLogout'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = '_initialize';
        var5['key'] = var1;
        var1 = function value() {
            var2 = this;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 9;
            var6 = var5[var3];
            var1 = undefined;
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var2.handleVoiceChannelSelect;
            var6 = 'VOICE_CHANNEL_SELECT';
            var6 = var8.bind(var9)(var6, var7);
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.subscribe;
            var3 = var2.handleLogout;
            var2 = 'LOGOUT';
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = '_terminate';
        var5['key'] = var7;
        var6 = function value() {
            var2 = this;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 9;
            var6 = var5[var3];
            var1 = undefined;
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleVoiceChannelSelect;
            var6 = 'VOICE_CHANNEL_SELECT';
            var6 = var8.bind(var9)(var6, var7);
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.unsubscribe;
            var3 = var2.handleLogout;
            var2 = 'LOGOUT';
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/StageLurkingManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();