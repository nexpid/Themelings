// app/modules/opt_in_channels/OptInOnboardingUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var5 = function hasNotSetUpChannelOptIn(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 5;
            var1 = var4[var1];
            var7 = undefined;
            var3 = var3.bind(var7)(var1);
            var1 = var3.isOptInEnabledForGuild;
            var1 = var1.bind(var3)(var6);
            var4 = _closure1_slot7;
            var3 = var4.getSelfMember;
            var5 = var3.bind(var4)(var6);
            var4 = null;
            var8 = var4 == var5;
            var3 = undefined;
            if(var8) { _fun0001_ip = 70; continue _fun0001 }
 65:
            var3 = var5.flags;
 70:
            var5 = var4 != var3;
            var4 = 0;
            var8 = 0;
            if(!var5) { _fun0001_ip = 84; continue _fun0001 }
 81:
            var8 = var3;
 84:
            var5 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 6;
            var3 = var9[var3];
            var7 = var5.bind(var7)(var3);
            var5 = var7.hasFlag;
            var3 = _closure1_slot9;
            var3 = var3.COMPLETED_ONBOARDING;
            var3 = var5.bind(var7)(var8, var3);
            var5 = _closure1_slot8;
            var2 = var5.getOptedInChannels;
            var2 = var2.bind(var5)(var6);
            var2 = var2.size;
            var2 = var2 > var4;
            var1 = !var1;
            if(!var1) { _fun0001_ip = 159; continue _fun0001 }
 156:
            var1 = !var3;
 159:
            if(!var1) { _fun0001_ip = 165; continue _fun0001 }
 162:
            var1 = !var2;
 165:
            return var1;
        }
    };
    var _closure1_slot10 = var5;
    var4 = function optIntoAllChannelsForExistingMember(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var2 = arguments[1];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0002_ip = 16; continue _fun0002 }
 14:
            var2 = {};
 16:
            var6 = var2.include;
            if(!(var6 === var1)) { _fun0002_ip = 54; continue _fun0002 }
 26:
            var4 = global;
            var4 = var4.Set;
            var7 = var4.prototype;
            var7 = Object.create(var7, {constructor: {value: var4}});
            var13 = var7;
            var4 = new var13[var4](var12);
            var6 = var4 instanceof Object ? var4 : var7;
 54:
            var2 = var2.exclude;
            if(!(var2 === var1)) { _fun0002_ip = 92; continue _fun0002 }
 64:
            var4 = global;
            var4 = var4.Set;
            var7 = var4.prototype;
            var7 = Object.create(var7, {constructor: {value: var4}});
            var13 = var7;
            var4 = new var13[var4](var12);
            var2 = var4 instanceof Object ? var4 : var7;
 92:
            var _closure2_slot0 = var2;
            var _closure2_slot1 = var1;
            var7 = _closure1_slot6;
            var4 = var7.getChannels;
            var9 = var4.bind(var7)(var5);
            var4 = _closure1_slot4;
            var11 = var9[var4];
            var8 = new Array(0);
            var10 = 0;
            var12 = var8;
            var10 = arraySpread(var12, var11, var10);
            var4 = _closure1_slot5;
            var11 = var9[var4];
            var12 = var8;
            var4 = arraySpread(var12, var11, var10);
            var7 = var8.filter;
            var4 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.channel;
                    var1 = var2.isThread;
                    var1 = var1.bind(var2)();
                    var1 = !var1;
                    if(!var1) { _fun0003_ip = 49; continue _fun0003 }
 24:
                    var4 = _closure2_slot0;
                    var3 = var4.has;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2);
                    var1 = !var2;
 49:
                    return var1;
                }
            };
            var8 = var7.bind(var8)(var4);
            var7 = var8.map;
            var4 = function(arg1) {
                var1 = arg1;
                var1 = var1.channel;
                var1 = var1.id;
                return var1;
            };
            var7 = var7.bind(var8)(var4);
            _closure2_slot1 = var7;
            var4 = var6.forEach;
            var3 = function(arg1) {
                var3 = _closure2_slot1;
                var2 = var3.push;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var4.bind(var6)(var3);
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 8;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.onboardExistingMember;
            var2 = global;
            var2 = var2.Set;
            var6 = var2.prototype;
            var6 = Object.create(var6, {constructor: {value: var2}});
            var13 = var6;
            var12 = var7;
            var2 = new var13[var2](var12, var11);
            var2 = var2 instanceof Object ? var2 : var6;
            var2 = var3.bind(var4)(var5, var2);
            return var1;
        }
    };
    var _closure1_slot11 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var10 = var8[var6];
    var10 = var7.bind(var1)(var10);
    var11 = var10.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot4 = var11;
    var10 = var10.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot5 = var10;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot7 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot8 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.GuildMemberFlags;
    var _closure1_slot9 = var6;
    var6 = 10;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/opt_in_channels/OptInOnboardingUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['hasNotSetUpChannelOptIn'] = var5;
    var5 = function toggleShowAllChannels(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = arg1;
            var4 = _closure1_slot10;
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            if(var4) { _fun0004_ip = 80; continue _fun0004 }
 20:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 5;
            var4 = var7[var4];
            var5 = var6.bind(var1)(var4);
            var4 = var5.isOptInEnabledForGuild;
            var4 = var4.bind(var5)(var3);
            var5 = 7;
            var5 = var7[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.setGuildOptIn;
            var4 = !var4;
            var4 = var5.bind(var6)(var3, var4);
            _fun0004_ip = 89; continue _fun0004;
 80:
            var2 = _closure1_slot11;
            var2 = var2.bind(var1)(var3);
 89:
            return var1;
        }
    };
    var3['toggleShowAllChannels'] = var5;
    var3['optIntoAllChannelsForExistingMember'] = var4;
    var2 = function hasClearedGuildOnboardingNotice(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var9 = arg1;
            var6 = arguments[1];
            var7 = undefined;
            if(!(var6 === var7)) { _fun0005_ip = 19; continue _fun0005 }
 12:
            var6 = _closure1_slot3;
 19:
            var3 = null;
            var1 = var3 != var9;
            if(!var1) { _fun0005_ip = 156; continue _fun0005 }
 31:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 6;
            var4 = var8[var4];
            var5 = var5.bind(var7)(var4);
            var4 = var5.hasFlag;
            var6 = var6.settings;
            var8 = var6.guilds;
            var10 = var3 == var8;
            var6 = undefined;
            if(var10) { _fun0005_ip = 106; continue _fun0005 }
 81:
            var8 = var8.guilds;
            var8 = var8[var9];
            var9 = var3 == var8;
            var6 = undefined;
            if(var9) { _fun0005_ip = 106; continue _fun0005 }
 100:
            var6 = var8.guildOnboardingProgress;
 106:
            var8 = var3 != var6;
            var3 = 0;
            if(!var8) { _fun0005_ip = 118; continue _fun0005 }
 115:
            var3 = var6;
 118:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 9;
            var2 = var8[var2];
            var2 = var6.bind(var7)(var2);
            var2 = var2.GuildOnboardingProgress;
            var2 = var2.GUILD_NOTICE_CLEARED;
            var1 = var4.bind(var5)(var3, var2);
 156:
            return var1;
        }
    };
    var3['hasClearedGuildOnboardingNotice'] = var2;
    return var1;
})();