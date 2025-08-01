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
    var8 = var4.HangStatusTypes;
    var _closure1_slot11 = var8;
    var8 = var4.ChannelTypes;
    var _closure1_slot12 = var8;
    var4 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot13 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function HangStatusManager(arg1) {
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
                var1 = _closure1_slot5;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot4;
                var1 = _closure1_slot14;
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
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 120:
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
                    var1 = 10;
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
 0:
                        var2 = arg1;
                        var1 = var2.channelId;
                        var5 = var2.guildId;
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var2 = 11;
                        var4 = var4[var2];
                        var2 = undefined;
                        var4 = var6.bind(var2)(var4);
                        var10 = var4.HangStatusExperiment;
                        var9 = var10.getCurrentConfig;
                        var8 = {};
                        var4 = null;
                        var6 = var5;
                        if(!(var4 == var6)) { _fun0003_ip = 65; continue _fun0003 }
 61:
                        var6 = _closure1_slot13;
 65:
                        var8['guildId'] = var6;
                        var6 = 'HangStatusManager';
                        var8['location'] = var6;
                        var6 = {};
                        var7 = true;
                        var6['autoTrackExposure'] = var7;
                        var8 = var9.bind(var10)(var8, var6);
                        var6 = var8.enableHangStatus;
                        var8 = var8.setDefaultStatus;
                        if(!(var4 == var5)) { _fun0003_ip = 117; continue _fun0003 }
 110:
                        if(!(var4 != var1)) { _fun0003_ip = 517; continue _fun0003 }
 117:
                        if(!var6) { _fun0003_ip = 515; continue _fun0003 }
 123:
                        var8 = _closure3_slot0;
                        var8 = var8.previousVoiceChannelId;
                        if(!(var1 !== var8)) { _fun0003_ip = 515; continue _fun0003 }
 143:
                        var6 = _closure3_slot0;
                        var6['previousVoiceChannelId'] = var1;
                        if(!(var4 != var5)) { _fun0003_ip = 515; continue _fun0003 }
 160:
                        if(!(var4 != var1)) { _fun0003_ip = 515; continue _fun0003 }
 167:
                        var6 = _closure1_slot8;
                        var5 = var6.getChannel;
                        var8 = var5.bind(var6)(var1);
                        if(!(var4 != var8)) { _fun0003_ip = 515; continue _fun0003 }
 188:
                        var6 = var8.type;
                        var5 = _closure1_slot12;
                        var5 = var5.GUILD_VOICE;
                        if(!(var6 === var5)) { _fun0003_ip = 515; continue _fun0003 }
 210:
                        var6 = _closure1_slot0;
                        var9 = _closure1_slot1;
                        var5 = 12;
                        var5 = var9[var5];
                        var6 = var6.bind(var2)(var5);
                        var5 = var6.canSetVoiceChannelStatus;
                        var5 = var5.bind(var6)(var8, var7);
                        if(!var5) { _fun0003_ip = 515; continue _fun0003 }
 248:
                        var6 = _closure1_slot10;
                        var5 = var6.getCurrentHangStatus;
                        var5 = var5.bind(var6)();
                        if(!(var4 == var5)) { _fun0003_ip = 515; continue _fun0003 }
 269:
                        var6 = _closure1_slot10;
                        var5 = var6.getCurrentDefaultStatus;
                        var5 = var5.bind(var6)();
                        var7 = var4 == var5;
                        var6 = undefined;
                        if(var7) { _fun0003_ip = 300; continue _fun0003 }
 294:
                        var6 = var5.expiresAt;
 300:
                        if(!(var4 != var6)) { _fun0003_ip = 515; continue _fun0003 }
 307:
                        var6 = var4 == var5;
                        var7 = undefined;
                        if(var6) { _fun0003_ip = 322; continue _fun0003 }
 316:
                        var7 = var5.expiresAt;
 322:
                        var6 = global;
                        var9 = var6.Date;
                        var6 = var9.now;
                        var6 = var6.bind(var9)();
                        if(!(var7 >= var6)) { _fun0003_ip = 515; continue _fun0003 }
 346:
                        var7 = var5.status;
                        var6 = _closure1_slot11;
                        var6 = var6.CUSTOM;
                        if(!(var7 === var6)) { _fun0003_ip = 375; continue _fun0003 }
 365:
                        var6 = var5.customHangStatus;
                        if(!(var4 == var6)) { _fun0003_ip = 425; continue _fun0003 }
 375:
                        var6 = var5.status;
                        if(!(var4 != var6)) { _fun0003_ip = 515; continue _fun0003 }
 387:
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot1;
                        var6 = 10;
                        var6 = var9[var6];
                        var9 = var7.bind(var2)(var6);
                        var7 = var9.updateHangStatus;
                        var6 = var5.status;
                        var6 = var7.bind(var9)(var6);
                        _fun0003_ip = 515; continue _fun0003;
 425:
                        var5 = var5.customHangStatus;
                        var6 = var5.status;
                        var5 = var5.emoji;
                        if(!(var4 != var5)) { _fun0003_ip = 483; continue _fun0003 }
 446:
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot1;
                        var4 = 13;
                        var4 = var9[var4];
                        var7 = var7.bind(var2)(var4);
                        var4 = var7.canUseEmojiForHangStatus;
                        var4 = var4.bind(var7)(var5, var8);
                        if(var4) { _fun0003_ip = 483; continue _fun0003 }
 481:
                        return var2;
 483:
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var3 = 10;
                        var3 = var7[var3];
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.updateCustomHangStatus;
                        var3 = var3.bind(var4)(var6, var5);
 515:
                        return var2;
 517:
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
 0:
                        var2 = arg1;
                        var1 = var2.user;
                        var4 = var2.guildId;
                        var3 = var1.id;
                        var5 = _closure1_slot7;
                        var2 = var5.getId;
                        var2 = var2.bind(var5)();
                        if(!(var3 === var2)) { _fun0004_ip = 164; continue _fun0004 }
 42:
                        var3 = _closure1_slot9;
                        var2 = var3.getCurrentClientVoiceChannelId;
                        var4 = var2.bind(var3)(var4);
                        var3 = null;
                        if(!(var3 != var4)) { _fun0004_ip = 164; continue _fun0004 }
 63:
                        var5 = _closure1_slot10;
                        var2 = var5.getCurrentHangStatus;
                        var2 = var2.bind(var5)();
                        if(!(var3 != var2)) { _fun0004_ip = 164; continue _fun0004 }
 81:
                        var3 = _closure1_slot8;
                        var2 = var3.getChannel;
                        var6 = var2.bind(var3)(var4);
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var2 = 12;
                        var2 = var3[var2];
                        var3 = undefined;
                        var5 = var4.bind(var3)(var2);
                        var4 = var5.canSetVoiceChannelStatus;
                        var2 = true;
                        var2 = var4.bind(var5)(var6, var2);
                        if(var2) { _fun0004_ip = 164; continue _fun0004 }
 134:
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var1 = 10;
                        var1 = var4[var1];
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.clearHangStatus;
                        var1 = var1.bind(var2)();
 164:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleGuildMemberUpdate'] = var3;
                var3 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 10;
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
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/hang_status/HangStatusManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();