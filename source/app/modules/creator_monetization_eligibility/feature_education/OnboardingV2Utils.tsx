// app/modules/creator_monetization_eligibility/feature_education/OnboardingV2Utils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.isGuildOwner;
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.GuildFeatures;
    var8 = var7.CREATOR_MONETIZABLE_PROVISIONAL;
    var4 = new Array(5);
    var4[0] = var8;
    var8 = var7.CREATOR_MONETIZABLE;
    var4[1] = var8;
    var8 = var7.CREATOR_MONETIZABLE_WHITEGLOVE;
    var4[2] = var8;
    var8 = var7.CREATOR_MONETIZABLE_DISABLED;
    var4[3] = var8;
    var7 = var7.CREATOR_MONETIZABLE_RESTRICTED;
    var4[4] = var7;
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/creator_monetization_eligibility/feature_education/OnboardingV2Utils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useCanSeeCreatorMonetizationOnboardingV2Upsell(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var1 = 4;
            var3 = var9[var1];
            var7 = undefined;
            var10 = var8.bind(var7)(var3);
            var6 = var10.useStateFromStores;
            var3 = _closure1_slot3;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var6.bind(var10)(var5, var3);
            var _closure2_slot1 = var6;
            var1 = var9[var1];
            var10 = var8.bind(var7)(var1);
            var5 = var10.useStateFromStores;
            var1 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var5.bind(var10)(var3, var1);
            var1 = 5;
            var3 = var9[var1];
            var10 = var8.bind(var7)(var3);
            var3 = var10.useGuildRoleSubscriptionSettingsVisibility;
            var3 = var3.bind(var10)(var6);
            var1 = var9[var1];
            var1 = var8.bind(var7)(var1);
            var1 = var1.GuildRoleSubscriptionSettingsVisibility;
            var1 = var1.VISIBLE;
            var1 = var3 === var1;
            var3 = null;
            if(!(var3 != var6)) { _fun0001_ip = 207; continue _fun0001 }
 161:
            var3 = _closure1_slot2;
            var3 = var3.bind(var7)(var6, var5);
            var5 = _closure1_slot5;
            var4 = var5.every;
            var2 = function(arg1) {
                var1 = _closure2_slot1;
                var3 = var1.features;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var2 = var4.bind(var5)(var2);
            if(!var1) { _fun0001_ip = 199; continue _fun0001 }
 196:
            var1 = var3;
 199:
            if(!var1) { _fun0001_ip = 205; continue _fun0001 }
 202:
            var1 = var2;
 205:
            return var1;
 207:
            var1 = false;
            return var1;
        }
    };
    var3['useCanSeeCreatorMonetizationOnboardingV2Upsell'] = var4;
    var2 = function canSeeCreatorMonetizationOnboardingV2Upsell(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = _closure1_slot3;
            var3 = var5.getGuild;
            var1 = arg1;
            var7 = var3.bind(var5)(var1);
            var _closure2_slot0 = var7;
            var1 = null;
            if(!(var1 != var7)) { _fun0002_ip = 160; continue _fun0002 }
 35:
            var5 = _closure1_slot4;
            var3 = var5.getCurrentUser;
            var6 = var3.bind(var5)();
            if(!(var1 != var6)) { _fun0002_ip = 156; continue _fun0002 }
 52:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var1 = 5;
            var3 = var9[var1];
            var5 = undefined;
            var10 = var8.bind(var5)(var3);
            var3 = var10.getGuildRoleSubscriptionSettingsVisibility;
            var3 = var3.bind(var10)(var7);
            var1 = var9[var1];
            var1 = var8.bind(var5)(var1);
            var1 = var1.GuildRoleSubscriptionSettingsVisibility;
            var1 = var1.VISIBLE;
            var1 = var3 === var1;
            var3 = _closure1_slot2;
            var3 = var3.bind(var5)(var7, var6);
            var5 = _closure1_slot5;
            var4 = var5.every;
            var2 = function(arg1) {
                var1 = _closure2_slot0;
                var3 = var1.features;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var2 = var4.bind(var5)(var2);
            if(!var1) { _fun0002_ip = 148; continue _fun0002 }
 145:
            var1 = var3;
 148:
            if(!var1) { _fun0002_ip = 154; continue _fun0002 }
 151:
            var1 = var2;
 154:
            return var1;
 156:
            var1 = false;
            return var1;
 160:
            var1 = false;
            return var1;
        }
    };
    var3['canSeeCreatorMonetizationOnboardingV2Upsell'] = var2;
    return var1;
})();