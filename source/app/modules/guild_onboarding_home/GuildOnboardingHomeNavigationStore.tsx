// app/modules/guild_onboarding_home/GuildOnboardingHomeNavigationStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
            _closure1_slot9 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.StaticChannelRoute;
    var _closure1_slot6 = var2;
    var2 = {};
    var _closure1_slot7 = var2;
    var2 = {};
    var _closure1_slot8 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function GuildOnboardingHomeNavigationStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot9;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 8:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = arg1;
                var2 = null;
                var5 = var2 == var4;
                var1 = undefined;
                var3 = undefined;
                if(var5) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var3 = var4.selectedResourceChannelIdByGuildId;
case 9:
                if(!(var2 == var3)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var3 = {};
case 11:
                _closure1_slot7 = var3;
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
            var1 = {};
            var2 = _closure1_slot7;
            var1['selectedResourceChannelIdByGuildId'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getSelectedResourceChannelId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = arg1;
                var1 = null;
                var2 = var1 == var3;
                if(var2) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var2 = _closure1_slot7;
                var1 = var2[var3];
case 13:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getHomeNavigationChannelId';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = arg1;
                var5 = null;
                var2 = var5 == var4;
                var1 = null;
                if(var2) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                var2 = _closure1_slot7;
                var2 = var2[var4];
                if(!(var5 == var2)) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                var3 = _closure1_slot8;
                var2 = var3[var4];
case 17:
                var1 = var2;
case 15:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'GuildOnboardingHomeNavigationStore';
    var8['displayName'] = var2;
    var8['persistKey'] = var2;
    var2 = 8;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleChannelSelect(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var4 = var1.channelId;
            var2 = var1.guildId;
            var7 = null;
            if(!(var7 != var2)) { _fun0006_ip = 19; continue _fun0006 }
case 9:
            var3 = _closure1_slot6;
            var3 = var3.GUILD_HOME;
            if(!(var4 !== var3)) { _fun0006_ip = 19; continue _fun0006 }
case 20:
            var5 = _closure1_slot5;
            var3 = var5.getChannel;
            var10 = var3.bind(var5)(var4);
            var3 = _closure1_slot7;
            var5 = var3[var2];
            var3 = _closure1_slot8;
            var3 = var3[var2];
            var6 = var7 != var10;
            if(!var6) { _fun0006_ip = 21; continue _fun0006 }
case 22:
            var8 = var10.isThread;
            var6 = var8.bind(var10)();
case 21:
            if(!var6) { _fun0006_ip = 23; continue _fun0006 }
case 24:
            var9 = var7 == var10;
            var8 = undefined;
            if(var9) { _fun0006_ip = 25; continue _fun0006 }
case 26:
            var8 = var10.parent_id;
case 25:
            var6 = var7 != var8;
case 23:
            if(!var6) { _fun0006_ip = 27; continue _fun0006 }
case 28:
            var9 = new Array(2);
            var9[0] = var3;
            var9[1] = var5;
            var8 = var9.includes;
            var11 = var7 == var10;
            var7 = undefined;
            if(var11) { _fun0006_ip = 29; continue _fun0006 }
case 30:
            var7 = var10.parent_id;
case 29:
            var6 = var8.bind(var9)(var7);
case 27:
            if(var6) { _fun0006_ip = 19; continue _fun0006 }
case 31:
            if(!(var4 !== var5)) { _fun0006_ip = 32; continue _fun0006 }
case 33:
            var5 = _closure1_slot7;
            var5 = delete var5[var2];
case 32:
            if(!(var4 !== var3)) { _fun0006_ip = 19; continue _fun0006 }
case 34:
            var1 = _closure1_slot8;
            var1 = delete var1[var2];
case 19:
            var1 = undefined;
            return var1;
        }
    };
    var2['CHANNEL_SELECT'] = var9;
    var9 = function handleHomeResourceChannelSelect(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var3 = var1.channelId;
            var2 = var1.guildId;
            var1 = null;
            if(!(var1 != var3)) { _fun0007_ip = 35; continue _fun0007 }
case 36:
            var1 = _closure1_slot7;
            var1[var2] = var3;
            _fun0007_ip = 37; continue _fun0007;
case 35:
            var1 = _closure1_slot8;
            var1 = delete var1[var2];
case 37:
            var1 = _closure1_slot8;
            var1 = delete var1[var2];
            var1 = undefined;
            return var1;
        }
    };
    var2['SELECT_HOME_RESOURCE_CHANNEL'] = var9;
    var4 = function handleHomeTodoChannelSelect(arg1) {
        var1 = arg1;
        var3 = var1.channelId;
        var2 = var1.guildId;
        var4 = _closure1_slot7;
        var4 = delete var4[var2];
        var1 = _closure1_slot8;
        var1[var2] = var3;
        var1 = undefined;
        return var1;
    };
    var2['SELECT_NEW_MEMBER_ACTION_CHANNEL'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding_home/GuildOnboardingHomeNavigationStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();