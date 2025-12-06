// app/modules/nuf_channels/native/NUFChannelsManager.tsx
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildMemberFlags;
    var _closure1_slot13 = var4;
    var4 = function requiresChannelOnboard() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 11;
            var1 = var4[var1];
            var5 = undefined;
            var1 = var3.bind(var5)(var1);
            var4 = var1.Storage;
            var3 = var4.get;
            var1 = '2020_02_nuf_channels';
            var1 = var3.bind(var4)(var1);
            var1 = !var1;
            if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 12;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.isNewUser;
            var5 = _closure1_slot11;
            var2 = var5.getCurrentUser;
            var2 = var2.bind(var5)();
            var1 = var3.bind(var4)(var2);
case 6:
            return var1;
        }
    };
    var _closure1_slot14 = var4;
    var4 = 19;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function NUFChannelsManager(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
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
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot15;
                var1 = var1.bind(var4)();
                if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0003_ip = 10; continue _fun0003;
case 8:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 10:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = {};
                var4 = function LOGOUT() {
                    var2 = _closure3_slot0;
                    var1 = var2.clear;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['LOGOUT'] = var4;
                var1['actions'] = var3;
                var3 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 13;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.getCurrentNavigationRouteName;
                        var4 = var3.bind(var4)();
                        var3 = 'guilds';
                        if(!(var3 === var4)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                        var4 = _closure1_slot10;
                        var3 = var4.getGuildId;
                        var3 = var3.bind(var4)();
                        var5 = _closure1_slot9;
                        var4 = var5.getGuild;
                        var5 = var4.bind(var5)(var3);
                        var6 = null;
                        var3 = var6 != var3;
                        if(!var3) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                        var4 = var6 != var5;
                        if(!var4) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                        var9 = var5.features;
                        var8 = var9.has;
                        var7 = _closure1_slot12;
                        var7 = var7.HUB;
                        var4 = var8.bind(var9)(var7);
case 15:
                        var3 = !var4;
case 13:
                        var4 = var6 != var5;
                        var9 = null;
                        if(!var4) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                        var8 = _closure1_slot8;
                        var7 = var8.getSelfMember;
                        var4 = var5.id;
                        var9 = var7.bind(var8)(var4);
case 17:
                        var4 = var6 != var5;
                        if(!var4) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                        var8 = var5.features;
                        var7 = var8.has;
                        var5 = _closure1_slot12;
                        var5 = var5.GUILD_ONBOARDING;
                        var4 = var7.bind(var8)(var5);
case 19:
                        if(!var4) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var5 = 14;
                        var5 = var8[var5];
                        var10 = var7.bind(var1)(var5);
                        var8 = var10.hasFlag;
                        var7 = var6 == var9;
                        var5 = undefined;
                        if(var7) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                        var5 = var9.flags;
case 23:
                        var11 = var6 != var5;
                        var7 = 0;
                        if(!var11) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                        var7 = var5;
case 25:
                        var5 = _closure1_slot13;
                        var5 = var5.STARTED_ONBOARDING;
                        var4 = var8.bind(var10)(var7, var5);
case 21:
                        if(!var4) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var5 = 14;
                        var5 = var8[var5];
                        var8 = var7.bind(var1)(var5);
                        var7 = var8.hasFlag;
                        var10 = var6 == var9;
                        var5 = undefined;
                        if(var10) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                        var5 = var9.flags;
case 29:
                        var9 = var6 != var5;
                        var6 = 0;
                        if(!var9) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                        var6 = var5;
case 31:
                        var5 = _closure1_slot13;
                        var5 = var5.COMPLETED_ONBOARDING;
                        var5 = var7.bind(var8)(var6, var5);
                        var4 = !var5;
case 27:
                        if(!var3) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                        var3 = !var4;
case 33:
                        if(!var3) { _fun0004_ip = 11; continue _fun0004 }
case 35:
                        var3 = _closure1_slot14;
                        var3 = var3.bind(var1)();
                        if(!var3) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var3 = 15;
                        var3 = var4[var3];
                        var7 = var5.bind(var1)(var3);
                        var6 = var7.openLazy;
                        var3 = _closure1_slot0;
                        var2 = 17;
                        var2 = var4[var2];
                        var8 = var3.bind(var1)(var2);
                        var2 = 16;
                        var5 = var4[var2];
                        var2 = var4.paths;
                        var5 = var8.bind(var1)(var5, var2);
                        var2 = 'NUFChannelsActionSheet';
                        var2 = var6.bind(var7)(var5, var2);
                        var2 = 11;
                        var2 = var4[var2];
                        var2 = var3.bind(var1)(var2);
                        var5 = var2.Storage;
                        var4 = var5.set;
                        var3 = '2020_02_nuf_channels';
                        var2 = true;
                        var2 = var4.bind(var5)(var3, var2);
case 36:
                        var3 = _closure3_slot0;
                        var2 = var3.terminate;
                        var2 = var2.bind(var3)();
case 11:
                        return var1;
                    }
                };
                var1['handleNavigationStateChanged'] = var3;
                var3 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 11;
                        var1 = var4[var1];
                        var5 = undefined;
                        var1 = var3.bind(var5)(var1);
                        var4 = var1.Storage;
                        var3 = var4.get;
                        var1 = '2020_02_nuf_voice_channels';
                        var1 = var3.bind(var4)(var1);
                        var1 = !var1;
                        if(!var1) { _fun0005_ip = 6; continue _fun0005 }
case 7:
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 12;
                        var3 = var6[var3];
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.isNewUser;
                        var5 = _closure1_slot11;
                        var2 = var5.getCurrentUser;
                        var2 = var2.bind(var5)();
                        var1 = var3.bind(var4)(var2);
case 6:
                        return var1;
                    }
                };
                var1['requiresVoiceChannelsOnboard'] = var3;
                var3 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var5 = var2.Storage;
                    var4 = var5.set;
                    var3 = '2020_02_nuf_voice_channels';
                    var2 = true;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var1['handleVoiceChannelsOnboard'] = var3;
                var2 = function() {
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 11;
                    var5 = var4[var2];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var5);
                    var7 = var5.Storage;
                    var6 = var7.remove;
                    var5 = '2020_02_nuf_channels';
                    var5 = var6.bind(var7)(var5);
                    var2 = var4[var2];
                    var2 = var3.bind(var1)(var2);
                    var4 = var2.Storage;
                    var3 = var4.remove;
                    var2 = '2020_02_nuf_voice_channels';
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['clear'] = var2;
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
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = _closure1_slot14;
                var1 = undefined;
                var3 = var3.bind(var1)();
                if(!var3) { _fun0006_ip = 38; continue _fun0006 }
case 39:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 18;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.getRootNavigationRef;
                var5 = var2.bind(var3)();
                var2 = null;
                if(!(var2 != var5)) { _fun0006_ip = 38; continue _fun0006 }
case 40:
                var4 = var5.addListener;
                var2 = this;
                var3 = var2.handleNavigationStateChanged;
                var2 = 'state';
                var2 = var4.bind(var5)(var2, var3);
case 38:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = '_terminate';
        var5['key'] = var7;
        var6 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 18;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getRootNavigationRef;
                var5 = var2.bind(var3)();
                var2 = null;
                if(!(var2 != var5)) { _fun0007_ip = 41; continue _fun0007 }
case 42:
                var4 = var5.removeListener;
                var2 = this;
                var3 = var2.handleNavigationStateChanged;
                var2 = 'state';
                var2 = var4.bind(var5)(var2, var3);
case 41:
                return var1;
            }
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
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/nuf_channels/native/NUFChannelsManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();