// app/modules/guild_onboarding_home/OnboardingHomeUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function canSeeOnboardingHomeInPreview(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var6 = var4.id;
            var3 = _closure1_slot6;
            var1 = var3.getNewMemberActions;
            var1 = var1.bind(var3)(var6);
            var3 = null;
            if(!(var3 == var1)) { _fun0001_ip = 36; continue _fun0001 }
 32:
            var1 = new Array(0);
 36:
            var3 = var1.length;
            var1 = 0;
            var1 = var3 > var1;
            var5 = _closure1_slot6;
            var3 = var5.getEnabled;
            var3 = var3.bind(var5)(var6);
            if(!var1) { _fun0001_ip = 91; continue _fun0001 }
 65:
            var7 = var4.features;
            var6 = var7.has;
            var5 = _closure1_slot8;
            var5 = var5.COMMUNITY;
            var1 = var6.bind(var7)(var5);
 91:
            if(!var1) { _fun0001_ip = 129; continue _fun0001 }
 94:
            var5 = var4.features;
            var4 = var5.has;
            var2 = _closure1_slot8;
            var2 = var2.GUILD_ONBOARDING;
            var2 = var4.bind(var5)(var2);
            if(!var2) { _fun0001_ip = 126; continue _fun0001 }
 123:
            var2 = !var3;
 126:
            var1 = !var2;
 129:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function hasResourceChannels(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg2;
            var2 = var3.getMutableGuildChannelsForGuild;
            var1 = arg1;
            var8 = var2.bind(var3)(var1);
            var6 = var8;
            for(var3 in var6)
 31:
            {
 40:
                var1 = var3;
                var10 = var8[var1];
                var9 = var10.hasFlag;
                var1 = _closure1_slot10;
                var1 = var1.IS_GUILD_RESOURCE_CHANNEL;
                var1 = var9.bind(var10)(var1);
                if(!var1) { _fun0002_ip = 31; continue _fun0002 }
 71:
                var1 = true;
                return var1;
            }
 75:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot12 = var1;
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.FAVORITES;
    var _closure1_slot7 = var7;
    var7 = var4.GuildFeatures;
    var _closure1_slot8 = var7;
    var4 = var4.ME;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelFlags;
    var _closure1_slot10 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding_home/OnboardingHomeUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useCanSeeOnboardingHome(arg1) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var4 = _closure1_slot1;
        var8 = _closure1_slot2;
        var3 = 6;
        var3 = var8[var3];
        var5 = undefined;
        var3 = var4.bind(var5)(var3);
        var6 = var3.bind(var5)(var7);
        var _closure2_slot1 = var6;
        var4 = _closure1_slot0;
        var3 = 7;
        var3 = var8[var3];
        var5 = var4.bind(var5)(var3);
        var4 = var5.useStateFromStores;
        var8 = _closure1_slot4;
        var3 = new Array(3);
        var3[0] = var8;
        var8 = _closure1_slot5;
        var3[1] = var8;
        var2 = _closure1_slot3;
        var3[2] = var2;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = _closure2_slot0;
                var1 = _closure1_slot9;
                if(!(var2 !== var1)) { _fun0003_ip = 243; continue _fun0003 }
 21:
                var2 = _closure2_slot0;
                var1 = _closure1_slot7;
                if(!(var2 !== var1)) { _fun0003_ip = 243; continue _fun0003 }
 36:
                var4 = _closure1_slot5;
                var2 = var4.getGuild;
                var1 = _closure2_slot0;
                var5 = var2.bind(var4)(var1);
                var1 = null;
                var2 = var1 == var5;
                if(var2) { _fun0003_ip = 92; continue _fun0003 }
 63:
                var7 = var5.features;
                var4 = var7.has;
                var1 = _closure1_slot8;
                var1 = var1.COMMUNITY;
                var1 = var4.bind(var7)(var1);
                var2 = !var1;
 92:
                var1 = !var2;
                if(var2) { _fun0003_ip = 241; continue _fun0003 }
 101:
                var7 = _closure1_slot3;
                var4 = var7.isFullServerPreview;
                var2 = _closure2_slot0;
                var2 = var4.bind(var7)(var2);
                if(var2) { _fun0003_ip = 227; continue _fun0003 }
 123:
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 8;
                var2 = var7[var2];
                var9 = undefined;
                var7 = var4.bind(var9)(var2);
                var4 = var7.isGuildOnboardingSettingsAvailable;
                var2 = _closure2_slot0;
                var2 = var4.bind(var7)(var2);
                if(var2) { _fun0003_ip = 194; continue _fun0003 }
 163:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 9;
                var4 = var8[var4];
                var4 = var7.bind(var9)(var4);
                var4 = var4.bind(var9)(var5);
                var4 = !var4;
                var2 = !var4;
 194:
                if(!var2) { _fun0003_ip = 225; continue _fun0003 }
 197:
                var4 = _closure2_slot1;
                if(var4) { _fun0003_ip = 222; continue _fun0003 }
 204:
                var8 = _closure1_slot12;
                var7 = _closure2_slot0;
                var6 = _closure1_slot4;
                var4 = var8.bind(var9)(var7, var6);
 222:
                var2 = var4;
 225:
                _fun0003_ip = 238; continue _fun0003;
 227:
                var4 = _closure1_slot11;
                var3 = undefined;
                var2 = var4.bind(var3)(var5);
 238:
                var1 = var2;
 241:
                return var1;
 243:
                var1 = false;
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useCanSeeOnboardingHome'] = var4;
    var2 = function canSeeOnboardingHome(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var5 = arg1;
            var3 = _closure1_slot5;
            var2 = var3.getGuild;
            var3 = var2.bind(var3)(var5);
            var4 = _closure1_slot3;
            var2 = var4.isFullServerPreview;
            var2 = var2.bind(var4)(var5);
            var4 = null;
            if(!(var4 != var3)) { _fun0004_ip = 272; continue _fun0004 }
 44:
            var4 = _closure1_slot9;
            if(!(var5 !== var4)) { _fun0004_ip = 268; continue _fun0004 }
 55:
            var4 = _closure1_slot7;
            if(!(var5 !== var4)) { _fun0004_ip = 268; continue _fun0004 }
 66:
            if(var2) { _fun0004_ip = 255; continue _fun0004 }
 72:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 8;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var6.bind(var2)(var4);
            var2 = var4.isGuildOnboardingSettingsAvailable;
            var4 = var2.bind(var4)(var5);
            if(!var4) { _fun0004_ip = 134; continue _fun0004 }
 108:
            var6 = var3.features;
            var5 = var6.has;
            var2 = _closure1_slot8;
            var2 = var2.GUILD_ONBOARDING;
            var4 = var5.bind(var6)(var2);
 134:
            if(!var4) { _fun0004_ip = 163; continue _fun0004 }
 137:
            var6 = var3.features;
            var5 = var6.has;
            var2 = _closure1_slot8;
            var2 = var2.GUILD_SERVER_GUIDE;
            var4 = var5.bind(var6)(var2);
 163:
            var6 = var3.features;
            var5 = var6.has;
            var2 = _closure1_slot8;
            var2 = var2.GUILD_ONBOARDING;
            var2 = var5.bind(var6)(var2);
            if(!var2) { _fun0004_ip = 218; continue _fun0004 }
 192:
            var7 = var3.features;
            var6 = var7.has;
            var5 = _closure1_slot8;
            var5 = var5.GUILD_SERVER_GUIDE;
            var2 = var6.bind(var7)(var5);
 218:
            if(var2) { _fun0004_ip = 224; continue _fun0004 }
 221:
            var2 = var4;
 224:
            if(!var2) { _fun0004_ip = 253; continue _fun0004 }
 227:
            var6 = var3.features;
            var5 = var6.has;
            var4 = _closure1_slot8;
            var4 = var4.COMMUNITY;
            var2 = var5.bind(var6)(var4);
 253:
            return var2;
 255:
            var2 = _closure1_slot11;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
            return var1;
 268:
            var1 = false;
            return var1;
 272:
            var1 = false;
            return var1;
        }
    };
    var3['canSeeOnboardingHome'] = var2;
    return var1;
})();