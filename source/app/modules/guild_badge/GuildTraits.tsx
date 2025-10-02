// app/modules/guild_badge/GuildTraits.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var4 = function isPremiumGuild(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var3 = null;
            var1 = var3 != var5;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 1;
            var6 = var6[var2];
            var2 = undefined;
            var6 = var7.bind(var2)(var6);
            var2 = var6.isGuildRecord;
            var2 = var2.bind(var6)(var5);
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var5.premiumSubscriptionCount;
            var2 = var3 != var2;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.premiumSubscriptionCount;
            var3 = 0;
            var2 = var6 > var3;
case 6:
            _fun0001_ip = 8; continue _fun0001;
case 4:
            var6 = var5.premiumSubscriberCount;
            var3 = 0;
            var3 = var6 > var3;
            if(var3) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var5 = var5.premiumTier;
            var4 = _closure1_slot3;
            var4 = var4.NONE;
            var3 = var5 > var4;
case 9:
            var2 = var3;
case 8:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var8[var1];
    var1 = undefined;
    var5 = var7.bind(var1)(var5);
    var6 = var5.GuildFeatures;
    var _closure1_slot2 = var6;
    var5 = var5.BoostedGuildTiers;
    var _closure1_slot3 = var5;
    var5 = {};
    var6 = 'PUBLIC';
    var5['PUBLIC'] = var6;
    var6 = 'INVITE_ONLY';
    var5['INVITE_ONLY'] = var6;
    var6 = 'APPLY_TO_JOIN';
    var5['APPLY_TO_JOIN'] = var6;
    var _closure1_slot4 = var5;
    var6 = 2;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/guild_badge/GuildTraits.tsx';
    var6 = var7.bind(var8)(var6);
    var3['GuildVisibility'] = var5;
    var5 = function getGuildTraits(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = global;
            var4 = var2.Set;
            var12 = var1.features;
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var13 = var3;
            var2 = new var13[var4](var12, var11);
            var8 = var2 instanceof Object ? var2 : var3;
            var2 = _closure1_slot4;
            var5 = var2.INVITE_ONLY;
            var3 = var8.has;
            var2 = _closure1_slot2;
            var2 = var2.COMMUNITY;
            var2 = var3.bind(var8)(var2);
            if(!var2) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var3 = var8.has;
            var2 = _closure1_slot2;
            var2 = var2.DISCOVERABLE;
            var2 = var3.bind(var8)(var2);
            if(var2) { _fun0002_ip = 13; continue _fun0002 }
case 11:
            var3 = var8.has;
            var2 = _closure1_slot2;
            var2 = var2.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            var2 = var3.bind(var8)(var2);
            if(!var2) { _fun0002_ip = 14; continue _fun0002 }
case 2:
            var4 = var8.has;
            var3 = _closure1_slot2;
            var3 = var3.MEMBER_VERIFICATION_GATE_ENABLED;
            var2 = var4.bind(var8)(var3);
case 14:
            if(!var2) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var2 = _closure1_slot4;
            var5 = var2.APPLY_TO_JOIN;
            _fun0002_ip = 15; continue _fun0002;
case 13:
            var2 = _closure1_slot4;
            var5 = var2.PUBLIC;
case 15:
            var2 = _closure1_slot5;
            var9 = undefined;
            var4 = var2.bind(var9)(var1);
            var3 = 0;
            if(!var4) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var7 = 1;
            var7 = var11[var7];
            var10 = var10.bind(var9)(var7);
            var7 = var10.isGuildRecord;
            var7 = var7.bind(var10)(var1);
            if(var7) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var7 = var1.premiumSubscriptionCount;
            _fun0002_ip = 21; continue _fun0002;
case 19:
            var7 = var1.premiumSubscriberCount;
case 21:
            var10 = null;
            var10 = var10 != var7;
            var2 = 0;
            if(!var10) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var2 = var7;
case 22:
            var3 = var2;
case 17:
            var7 = _closure1_slot0;
            var10 = _closure1_slot1;
            var2 = 1;
            var2 = var10[var2];
            var7 = var7.bind(var9)(var2);
            var2 = var7.isGuildRecord;
            var2 = var2.bind(var7)(var1);
            if(var2) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var2 = _closure1_slot3;
            var2 = var2.NONE;
            _fun0002_ip = 26; continue _fun0002;
case 24:
            var2 = var1.premiumTier;
case 26:
            var1 = {};
            var9 = var8.has;
            var6 = _closure1_slot2;
            var7 = var6.VERIFIED;
            var7 = var9.bind(var8)(var7);
            var1['verified'] = var7;
            var9 = var8.has;
            var7 = var6.PARTNERED;
            var7 = var9.bind(var8)(var7);
            var1['partnered'] = var7;
            var9 = var8.has;
            var7 = var6.COMMUNITY;
            var7 = var9.bind(var8)(var7);
            var1['community'] = var7;
            var7 = var8.has;
            var6 = var6.INTERNAL_EMPLOYEE_ONLY;
            var6 = var7.bind(var8)(var6);
            var1['staff'] = var6;
            var1['visibility'] = var5;
            var1['premium'] = var4;
            var1['premiumSubscriberCount'] = var3;
            var1['premiumTier'] = var2;
            return var1;
        }
    };
    var3['getGuildTraits'] = var5;
    var3['isPremiumGuild'] = var4;
    var2 = function isDiscoverableGuild(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0003_ip = 27; continue _fun0003 }
case 3:
            var3 = global;
            var4 = var3.Set;
            var5 = var2.features;
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var6 = var3;
            var2 = new var6[var4](var5, var4);
            var4 = var2 instanceof Object ? var2 : var3;
            var3 = var4.has;
            var2 = _closure1_slot2;
            var2 = var2.DISCOVERABLE;
            var1 = var3.bind(var4)(var2);
case 27:
            return var1;
        }
    };
    var3['isDiscoverableGuild'] = var2;
    return var1;
})();