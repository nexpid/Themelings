// app/modules/guild_onboarding/native/GuildOnboardingManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            _closure1_slot15 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot15 = var1;
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
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildMemberFlags;
    var _closure1_slot12 = var4;
    var4 = null;
    var _closure1_slot13 = var4;
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function GuildOnboardingManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot4;
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
                var1 = _closure1_slot15;
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
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 8:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = {};
                var4 = function CHANNEL_SELECT(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleChannelSelect;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['CHANNEL_SELECT'] = var4;
                var4 = function GUILD_DELETE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleGuildDelete;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['GUILD_DELETE'] = var4;
                var4 = function POST_CONNECTION_OPEN() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleConnectionOpen;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['POST_CONNECTION_OPEN'] = var4;
                var1['actions'] = var3;
                var3 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var2 = _closure1_slot13;
                        var3 = null;
                        if(!(var3 == var2)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                        var4 = _closure1_slot10;
                        var2 = var4.getGuildId;
                        var4 = var2.bind(var4)();
                        _fun0003_ip = 11; continue _fun0003;
case 9:
                        var4 = _closure1_slot13;
case 11:
                        var5 = var3 != var4;
                        var2 = null;
                        if(!var5) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                        var2 = var4;
case 12:
                        _closure1_slot13 = var2;
                        if(!(var3 != var2)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                        var3 = _closure3_slot0;
                        var2 = var3._openOnboardingIfIncomplete;
                        var1 = _closure1_slot13;
                        var1 = var2.bind(var3)(var1);
case 14:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleConnectionOpen'] = var3;
                var3 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var1 = arg1;
                        var4 = var1.guildId;
                        var5 = var1.channelId;
                        var2 = _closure1_slot13;
                        var2 = var2 === var4;
                        if(!var2) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                        var3 = _closure1_slot14;
                        var2 = var3 === var5;
case 16:
                        if(var2) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                        var3 = null;
                        var6 = var3 != var5;
                        var2 = null;
                        if(!var6) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                        var2 = var5;
case 20:
                        _closure1_slot14 = var2;
                        var5 = var3 != var4;
                        var2 = null;
                        if(!var5) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                        var2 = var4;
case 22:
                        _closure1_slot13 = var2;
                        if(!(var3 != var2)) { _fun0004_ip = 18; continue _fun0004 }
case 4:
                        var3 = _closure3_slot0;
                        var2 = var3._openOnboardingIfIncomplete;
                        var1 = _closure1_slot13;
                        var1 = var2.bind(var3)(var1);
case 18:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleChannelSelect'] = var3;
                var3 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.guild;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 10;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.discardOnboardingPromise;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['handleGuildDelete'] = var3;
                var2 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var4 = arg1;
                        var3 = _closure1_slot9;
                        var2 = var3.getGuild;
                        var2 = var2.bind(var3)(var4);
                        var5 = null;
                        if(!(var5 != var2)) { _fun0005_ip = 24; continue _fun0005 }
case 9:
                        var6 = var2.features;
                        var3 = var6.has;
                        var2 = _closure1_slot11;
                        var2 = var2.GUILD_ONBOARDING;
                        var2 = var3.bind(var6)(var2);
                        if(!var2) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                        var3 = _closure1_slot8;
                        var2 = var3.getSelfMember;
                        var3 = var2.bind(var3)(var4);
                        var2 = var5 != var3;
                        if(!var2) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var6 = 11;
                        var7 = var7[var6];
                        var6 = undefined;
                        var9 = var8.bind(var6)(var7);
                        var8 = var9.hasFlag;
                        var6 = var3.flags;
                        var10 = var5 != var6;
                        var7 = 0;
                        if(!var10) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                        var7 = var6;
case 28:
                        var6 = _closure1_slot12;
                        var6 = var6.COMPLETED_ONBOARDING;
                        var6 = var8.bind(var9)(var7, var6);
                        var2 = !var6;
case 26:
                        if(!var2) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var6 = 11;
                        var7 = var7[var6];
                        var6 = undefined;
                        var7 = var8.bind(var6)(var7);
                        var6 = var7.hasFlag;
                        var3 = var3.flags;
                        var8 = var5 != var3;
                        var5 = 0;
                        if(!var8) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                        var5 = var3;
case 32:
                        var3 = _closure1_slot12;
                        var3 = var3.STARTED_ONBOARDING;
                        var2 = var6.bind(var7)(var5, var3);
case 30:
                        if(!var2) { _fun0005_ip = 24; continue _fun0005 }
case 34:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 10;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var1['guildId'] = var4;
                        var1 = var2.bind(var3)(var1);
case 24:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['_openOnboardingIfIncomplete'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot3;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding/native/GuildOnboardingManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();