// app/modules/hang_status/HangStatusManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.HangStatusTypes;
    var _closure1_slot11 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ChannelTypes;
    var _closure1_slot12 = var8;
    var4 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot13 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function HangStatusManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
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
                var1 = _closure1_slot5;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot4;
                var1 = _closure1_slot14;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 8:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = {};
                var4 = function POST_CONNECTION_OPEN() {
                    var2 = _closure3_slot0;
                    var1 = var2.handlePostConnectionOpen;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['POST_CONNECTION_OPEN'] = var4;
                var4 = function VOICE_CHANNEL_SELECT(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleVoiceChannelSelect;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['VOICE_CHANNEL_SELECT'] = var4;
                var4 = function GUILD_MEMBER_UPDATE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleGuildMemberUpdate;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['GUILD_MEMBER_UPDATE'] = var4;
                var4 = function LOGOUT() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleLogout;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['LOGOUT'] = var4;
                var1['actions'] = var3;
                var3 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.deleteInvalidHangStatuses;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                var1['handlePostConnectionOpen'] = var3;
                var3 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var2 = arg1;
                        var1 = var2.channelId;
                        var5 = var2.guildId;
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var2 = 12;
                        var4 = var4[var2];
                        var2 = undefined;
                        var8 = var6.bind(var2)(var4);
                        var6 = var8.getHangStatusExperiment;
                        var4 = {};
                        var7 = null;
                        var9 = var5;
                        if(!(var7 == var9)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                        var9 = _closure1_slot13;
case 9:
                        var4['guildId'] = var9;
                        var9 = 'HangStatusManager';
                        var4['location'] = var9;
                        var4 = var6.bind(var8)(var4);
                        var6 = var4.enableHangStatus;
                        var4 = var4.setDefaultStatus;
                        if(!(var7 == var5)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                        if(!(var7 != var1)) { _fun0003_ip = 13; continue _fun0003 }
case 11:
                        if(!var6) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                        var8 = _closure3_slot0;
                        var8 = var8.previousVoiceChannelId;
                        if(!(var1 !== var8)) { _fun0003_ip = 14; continue _fun0003 }
case 16:
                        var6 = _closure3_slot0;
                        var6['previousVoiceChannelId'] = var1;
                        if(!(var7 != var5)) { _fun0003_ip = 14; continue _fun0003 }
case 17:
                        if(!(var7 != var1)) { _fun0003_ip = 14; continue _fun0003 }
case 18:
                        var6 = _closure1_slot8;
                        var5 = var6.getChannel;
                        var9 = var5.bind(var6)(var1);
                        if(!(var7 != var9)) { _fun0003_ip = 14; continue _fun0003 }
case 19:
                        var6 = var9.type;
                        var5 = _closure1_slot12;
                        var5 = var5.GUILD_VOICE;
                        if(!(var6 === var5)) { _fun0003_ip = 14; continue _fun0003 }
case 20:
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot1;
                        var5 = 13;
                        var5 = var8[var5];
                        var8 = var6.bind(var2)(var5);
                        var6 = var8.canSetVoiceChannelStatus;
                        var5 = true;
                        var5 = var6.bind(var8)(var9, var5);
                        if(!var5) { _fun0003_ip = 14; continue _fun0003 }
case 21:
                        var6 = _closure1_slot10;
                        var5 = var6.getCurrentHangStatus;
                        var5 = var5.bind(var6)();
                        if(!(var7 == var5)) { _fun0003_ip = 14; continue _fun0003 }
case 22:
                        var6 = _closure1_slot10;
                        var5 = var6.getCurrentDefaultStatus;
                        var5 = var5.bind(var6)();
                        if(!(var7 != var5)) { _fun0003_ip = 14; continue _fun0003 }
case 23:
                        var8 = var5.status;
                        var6 = _closure1_slot11;
                        var6 = var6.CUSTOM;
                        if(!(var8 === var6)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                        var6 = var5.customHangStatus;
                        if(!(var7 == var6)) { _fun0003_ip = 26; continue _fun0003 }
case 24:
                        var6 = var5.status;
                        if(!(var7 != var6)) { _fun0003_ip = 14; continue _fun0003 }
case 27:
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var6 = 11;
                        var6 = var10[var6];
                        var10 = var8.bind(var2)(var6);
                        var8 = var10.updateHangStatus;
                        var6 = var5.status;
                        var6 = var8.bind(var10)(var6);
                        _fun0003_ip = 14; continue _fun0003;
case 26:
                        var5 = var5.customHangStatus;
                        var6 = var5.status;
                        var5 = var5.emoji;
                        if(!(var7 != var5)) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var7 = 14;
                        var7 = var10[var7];
                        var8 = var8.bind(var2)(var7);
                        var7 = var8.canUseEmojiForHangStatus;
                        var7 = var7.bind(var8)(var5, var9);
                        if(var7) { _fun0003_ip = 28; continue _fun0003 }
case 30:
                        if(!var4) { _fun0003_ip = 31; continue _fun0003 }
case 32:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot1;
                        var7 = 11;
                        var7 = var9[var7];
                        var9 = var8.bind(var2)(var7);
                        var8 = var9.updateHangStatus;
                        var7 = _closure1_slot11;
                        var7 = var7.CHILLING;
                        var4 = var8.bind(var9)(var7);
case 31:
                        var4 = undefined;
                        return var4;
case 28:
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var3 = 11;
                        var3 = var7[var3];
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.updateCustomHangStatus;
                        var3 = var3.bind(var4)(var6, var5);
case 14:
                        return var2;
case 13:
                        var2 = _closure3_slot0;
                        var3 = var2.handleDisconnectFromVoiceChannel;
                        var3 = var3.bind(var2)();
                        var2['previousVoiceChannelId'] = var1;
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleVoiceChannelSelect'] = var3;
                var3 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var2 = arg1;
                        var1 = var2.user;
                        var4 = var2.guildId;
                        var3 = var1.id;
                        var5 = _closure1_slot7;
                        var2 = var5.getId;
                        var2 = var2.bind(var5)();
                        if(!(var3 === var2)) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                        var3 = _closure1_slot9;
                        var2 = var3.getCurrentClientVoiceChannelId;
                        var4 = var2.bind(var3)(var4);
                        var3 = null;
                        if(!(var3 != var4)) { _fun0004_ip = 33; continue _fun0004 }
case 35:
                        var5 = _closure1_slot10;
                        var2 = var5.getCurrentHangStatus;
                        var2 = var2.bind(var5)();
                        if(!(var3 != var2)) { _fun0004_ip = 33; continue _fun0004 }
case 36:
                        var3 = _closure1_slot8;
                        var2 = var3.getChannel;
                        var6 = var2.bind(var3)(var4);
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var2 = 13;
                        var2 = var3[var2];
                        var3 = undefined;
                        var5 = var4.bind(var3)(var2);
                        var4 = var5.canSetVoiceChannelStatus;
                        var2 = true;
                        var2 = var4.bind(var5)(var6, var2);
                        if(var2) { _fun0004_ip = 33; continue _fun0004 }
case 37:
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var1 = 11;
                        var1 = var4[var1];
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.clearHangStatus;
                        var1 = var1.bind(var2)();
case 33:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleGuildMemberUpdate'] = var3;
                var3 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.clearHangStatus;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                var1['handleDisconnectFromVoiceChannel'] = var3;
                var2 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleDisconnectFromVoiceChannel;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var1['handleLogout'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot2;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/hang_status/HangStatusManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();