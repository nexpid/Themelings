// app/modules/guild_onboarding_home/GuildOnboardingHomeNavigationStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
 0:
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
                var6 = _closure1_slot3;
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
 0:
                var4 = arg1;
                var2 = null;
                var5 = var2 == var4;
                var1 = undefined;
                var3 = undefined;
                if(var5) { _fun0003_ip = 22; continue _fun0003 }
 16:
                var3 = var4.selectedResourceChannelIdByGuildId;
 22:
                if(!(var2 == var3)) { _fun0003_ip = 28; continue _fun0003 }
 26:
                var3 = {};
 28:
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
 0:
                var3 = arg1;
                var1 = null;
                var2 = var1 == var3;
                if(var2) { _fun0004_ip = 23; continue _fun0004 }
 12:
                var2 = _closure1_slot7;
                var1 = var2[var3];
 23:
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
 0:
                var4 = arg1;
                var5 = null;
                var2 = var5 == var4;
                var1 = null;
                if(var2) { _fun0005_ip = 40; continue _fun0005 }
 14:
                var2 = _closure1_slot7;
                var2 = var2[var4];
                if(!(var5 == var2)) { _fun0005_ip = 37; continue _fun0005 }
 29:
                var3 = _closure1_slot8;
                var2 = var3[var4];
 37:
                var1 = var2;
 40:
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
 0:
            var1 = arg1;
            var4 = var1.channelId;
            var2 = var1.guildId;
            var7 = null;
            if(!(var7 != var2)) { _fun0006_ip = 178; continue _fun0006 }
 22:
            var3 = _closure1_slot6;
            var3 = var3.GUILD_HOME;
            if(!(var4 !== var3)) { _fun0006_ip = 178; continue _fun0006 }
 42:
            var5 = _closure1_slot5;
            var3 = var5.getChannel;
            var10 = var3.bind(var5)(var4);
            var3 = _closure1_slot7;
            var5 = var3[var2];
            var3 = _closure1_slot8;
            var3 = var3[var2];
            var6 = var7 != var10;
            if(!var6) { _fun0006_ip = 89; continue _fun0006 }
 79:
            var8 = var10.isThread;
            var6 = var8.bind(var10)();
 89:
            if(!var6) { _fun0006_ip = 111; continue _fun0006 }
 92:
            var9 = var7 == var10;
            var8 = undefined;
            if(var9) { _fun0006_ip = 107; continue _fun0006 }
 101:
            var8 = var10.parent_id;
 107:
            var6 = var7 != var8;
 111:
            if(!var6) { _fun0006_ip = 151; continue _fun0006 }
 114:
            var9 = new Array(2);
            var9[0] = var3;
            var9[1] = var5;
            var8 = var9.includes;
            var11 = var7 == var10;
            var7 = undefined;
            if(var11) { _fun0006_ip = 146; continue _fun0006 }
 140:
            var7 = var10.parent_id;
 146:
            var6 = var8.bind(var9)(var7);
 151:
            if(var6) { _fun0006_ip = 178; continue _fun0006 }
 154:
            if(!(var4 !== var5)) { _fun0006_ip = 166; continue _fun0006 }
 158:
            var5 = _closure1_slot7;
            var5 = delete var5[var2];
 166:
            if(!(var4 !== var3)) { _fun0006_ip = 178; continue _fun0006 }
 170:
            var1 = _closure1_slot8;
            var1 = delete var1[var2];
 178:
            var1 = undefined;
            return var1;
        }
    };
    var2['CHANNEL_SELECT'] = var9;
    var9 = function handleHomeResourceChannelSelect(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var3 = var1.channelId;
            var2 = var1.guildId;
            var1 = null;
            if(!(var1 != var3)) { _fun0007_ip = 32; continue _fun0007 }
 19:
            var1 = _closure1_slot7;
            var1[var2] = var3;
            _fun0007_ip = 43; continue _fun0007;
 32:
            var1 = _closure1_slot8;
            var1 = delete var1[var2];
 43:
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