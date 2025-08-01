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
 0:
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
            if(!var1) { _fun0002_ip = 97; continue _fun0002 }
 53:
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
 97:
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
                var1 = _closure1_slot15;
                var1 = var1.bind(var4)();
                if(var1) { _fun0003_ip = 86; continue _fun0003 }
 73:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0003_ip = 120; continue _fun0003;
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
 0:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 13;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.getCurrentNavigationRouteName;
                        var4 = var3.bind(var4)();
                        var3 = 'guilds';
                        if(!(var3 === var4)) { _fun0004_ip = 475; continue _fun0004 }
 46:
                        var4 = _closure1_slot10;
                        var3 = var4.getGuildId;
                        var3 = var3.bind(var4)();
                        var5 = _closure1_slot9;
                        var4 = var5.getGuild;
                        var5 = var4.bind(var5)(var3);
                        var6 = null;
                        var3 = var6 != var3;
                        if(!var3) { _fun0004_ip = 119; continue _fun0004 }
 83:
                        var4 = var6 != var5;
                        if(!var4) { _fun0004_ip = 116; continue _fun0004 }
 90:
                        var9 = var5.features;
                        var8 = var9.has;
                        var7 = _closure1_slot12;
                        var7 = var7.HUB;
                        var4 = var8.bind(var9)(var7);
 116:
                        var3 = !var4;
 119:
                        var4 = var6 != var5;
                        var9 = null;
                        if(!var4) { _fun0004_ip = 148; continue _fun0004 }
 128:
                        var8 = _closure1_slot8;
                        var7 = var8.getSelfMember;
                        var4 = var5.id;
                        var9 = var7.bind(var8)(var4);
 148:
                        var4 = var6 != var5;
                        if(!var4) { _fun0004_ip = 181; continue _fun0004 }
 155:
                        var8 = var5.features;
                        var7 = var8.has;
                        var5 = _closure1_slot12;
                        var5 = var5.GUILD_ONBOARDING;
                        var4 = var7.bind(var8)(var5);
 181:
                        if(!var4) { _fun0004_ip = 252; continue _fun0004 }
 184:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var5 = 14;
                        var5 = var8[var5];
                        var10 = var7.bind(var1)(var5);
                        var8 = var10.hasFlag;
                        var7 = var6 == var9;
                        var5 = undefined;
                        if(var7) { _fun0004_ip = 224; continue _fun0004 }
 219:
                        var5 = var9.flags;
 224:
                        var11 = var6 != var5;
                        var7 = 0;
                        if(!var11) { _fun0004_ip = 236; continue _fun0004 }
 233:
                        var7 = var5;
 236:
                        var5 = _closure1_slot13;
                        var5 = var5.STARTED_ONBOARDING;
                        var4 = var8.bind(var10)(var7, var5);
 252:
                        if(!var4) { _fun0004_ip = 326; continue _fun0004 }
 255:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var5 = 14;
                        var5 = var8[var5];
                        var8 = var7.bind(var1)(var5);
                        var7 = var8.hasFlag;
                        var10 = var6 == var9;
                        var5 = undefined;
                        if(var10) { _fun0004_ip = 295; continue _fun0004 }
 290:
                        var5 = var9.flags;
 295:
                        var9 = var6 != var5;
                        var6 = 0;
                        if(!var9) { _fun0004_ip = 307; continue _fun0004 }
 304:
                        var6 = var5;
 307:
                        var5 = _closure1_slot13;
                        var5 = var5.COMPLETED_ONBOARDING;
                        var5 = var7.bind(var8)(var6, var5);
                        var4 = !var5;
 326:
                        if(!var3) { _fun0004_ip = 332; continue _fun0004 }
 329:
                        var3 = !var4;
 332:
                        if(!var3) { _fun0004_ip = 475; continue _fun0004 }
 338:
                        var3 = _closure1_slot14;
                        var3 = var3.bind(var1)();
                        if(!var3) { _fun0004_ip = 458; continue _fun0004 }
 349:
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
 458:
                        var3 = _closure3_slot0;
                        var2 = var3.terminate;
                        var2 = var2.bind(var3)();
 475:
                        return var1;
                    }
                };
                var1['handleNavigationStateChanged'] = var3;
                var3 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
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
                        if(!var1) { _fun0005_ip = 97; continue _fun0005 }
 53:
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
 97:
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
 0:
                var3 = _closure1_slot14;
                var1 = undefined;
                var3 = var3.bind(var1)();
                if(!var3) { _fun0006_ip = 77; continue _fun0006 }
 16:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 18;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.getRootNavigationRef;
                var5 = var2.bind(var3)();
                var2 = null;
                if(!(var2 != var5)) { _fun0006_ip = 77; continue _fun0006 }
 52:
                var4 = var5.addListener;
                var2 = this;
                var3 = var2.handleNavigationStateChanged;
                var2 = 'state';
                var2 = var4.bind(var5)(var2, var3);
 77:
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
 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 18;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getRootNavigationRef;
                var5 = var2.bind(var3)();
                var2 = null;
                if(!(var2 != var5)) { _fun0007_ip = 66; continue _fun0007 }
 41:
                var4 = var5.removeListener;
                var2 = this;
                var3 = var2.handleNavigationStateChanged;
                var2 = 'state';
                var2 = var4.bind(var5)(var2, var3);
 66:
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