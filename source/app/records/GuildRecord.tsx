// app/records/GuildRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var8;
    var4 = function isGuildOwner(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg2;
            var4 = 'string';
            var1 = typeof var3;
            var2 = var3;
            if(!(var4 !== var1)) { _fun0001_ip = 34; continue _fun0001 }
 17:
            var1 = null;
            var4 = var1 != var3;
            if(!var4) { _fun0001_ip = 31; continue _fun0001 }
 26:
            var1 = var3.id;
 31:
            var2 = var1;
 34:
            var1 = arg1;
            var1 = var1.ownerId;
            var1 = var1 === var2;
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var10 = global;
    var9 = var10.Object;
    var6 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var5);
    var11 = 0;
    var5 = var8[var11];
    var1 = undefined;
    var5 = var7.bind(var1)(var5);
    var6 = var5.set;
    var _closure1_slot3 = var6;
    var5 = var5.TypeTag;
    var5 = 1;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var13 = var5.BoostedGuildTiers;
    var14 = var5.GuildExplicitContentFilterTypes;
    var12 = var5.GuildNSFWContentLevel;
    var _closure1_slot4 = var12;
    var17 = var5.MFALevels;
    var _closure1_slot5 = var17;
    var16 = var5.UserNotificationSettings;
    var15 = var5.VerificationLevels;
    var9 = var10.Object;
    var6 = var9.freeze;
    var5 = {'mfaLevel': null, 'preferredLocale': 'en-US', 'afkTimeout': 0};
    var17 = var17.NONE;
    var5['mfaLevel'] = var17;
    var16 = var16.ALL_MESSAGES;
    var5['defaultMessageNotifications'] = var16;
    var15 = var15.NONE;
    var5['verificationLevel'] = var15;
    var14 = var14.DISABLED;
    var5['explicitContentFilter'] = var14;
    var14 = false;
    var5['premiumProgressBarEnabled'] = var14;
    var5['systemChannelFlags'] = var11;
    var14 = -1;
    var5['maxStageVideoChannelUsers'] = var14;
    var5['maxVideoChannelUsers'] = var14;
    var5['maxMembers'] = var14;
    var13 = var13.NONE;
    var5['premiumTier'] = var13;
    var12 = var12.DEFAULT;
    var5['nsfwLevel'] = var12;
    var5['premiumSubscriberCount'] = var11;
    var10 = var10.Set;
    var11 = var10.prototype;
    var11 = Object.create(var11, {constructor: {value: var10}});
    var21 = var11;
    var10 = new var21[var10](var20);
    var10 = var10 instanceof Object ? var10 : var11;
    var5['features'] = var10;
    var10 = null;
    var5['description'] = var10;
    var5['icon'] = var10;
    var5['ownerId'] = var10;
    var5['systemChannelId'] = var10;
    var5['joinedAt'] = var10;
    var5['discoverySplash'] = var10;
    var5['splash'] = var10;
    var5['banner'] = var10;
    var5['homeHeader'] = var10;
    var5['afkChannelId'] = var10;
    var5['application_id'] = var10;
    var5['vanityURLCode'] = var10;
    var5['rulesChannelId'] = var10;
    var5['safetyAlertsChannelId'] = var10;
    var5['publicUpdatesChannelId'] = var10;
    var5['ownerConfiguredContentLevel'] = var10;
    var5['hubType'] = var10;
    var5['latestOnboardingQuestionId'] = var10;
    var5['profile'] = var10;
    var5['premiumFeatures'] = var10;
    var5['moderatorReporting'] = var10;
    var5 = var6.bind(var9)(var5);
    var6 = 5;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'records/GuildRecord.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = 'Guild';
    var3['GuildRecordTypeTag'] = var6;
    var3['GUILD_DEFAULT_PROPERTY_VALUES'] = var5;
    var5 = function getGuildIconURL(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var6 = arg1;
            var5 = arguments[2];
            var4 = arguments[3];
            var3 = undefined;
            if(!(var5 === var3)) { _fun0002_ip = 17; continue _fun0002 }
 15:
            var5 = false;
 17:
            if(!(var4 === var3)) { _fun0002_ip = 23; continue _fun0002 }
 21:
            var4 = false;
 23:
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 2;
            var1 = var7[var1];
            var3 = var2.bind(var3)(var1);
            var2 = var3.getGuildIconURL;
            var1 = {};
            var7 = var6.id;
            var1['id'] = var7;
            var7 = arg2;
            var1['size'] = var7;
            var6 = var6.icon;
            var1['icon'] = var6;
            var1['canAnimate'] = var5;
            var1['lossless'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getGuildIconURL'] = var5;
    var5 = function getGuildIconSource(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arguments[2];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var5 = undefined;
            if(!(var4 === var5)) { _fun0003_ip = 27; continue _fun0003 }
 25:
            var4 = false;
 27:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.getAnimatableSourceWithFallback;
            var1 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getGuildIconSource;
                var1 = {};
                var4 = _closure2_slot0;
                var6 = var4.id;
                var1['id'] = var6;
                var5 = _closure2_slot1;
                var1['size'] = var5;
                var4 = var4.icon;
                var1['icon'] = var4;
                var4 = arg1;
                var1['canAnimate'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var3['getGuildIconSource'] = var5;
    var5 = function getGuildAcronym(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.getAcronym;
        var1 = arg1;
        var1 = var1.name;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getGuildAcronym'] = var5;
    var3['isGuildOwner'] = var4;
    var4 = function isGuildOwnerWithRequiredMfaLevel(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var5 = arg1;
            var4 = arg2;
            var1 = var4.mfaEnabled;
            var2 = !var1;
            if(!var2) { _fun0004_ip = 41; continue _fun0004 }
 18:
            var3 = var5.mfaLevel;
            var1 = _closure1_slot5;
            var1 = var1.ELEVATED;
            var2 = var3 === var1;
 41:
            var1 = !var2;
            if(var2) { _fun0004_ip = 62; continue _fun0004 }
 47:
            var3 = _closure1_slot6;
            var2 = undefined;
            var1 = var3.bind(var2)(var5, var4);
 62:
            return var1;
        }
    };
    var3['isGuildOwnerWithRequiredMfaLevel'] = var4;
    var4 = function isGuildLurker(arg1) {
        var1 = arg1;
        var2 = var1.joinedAt;
        var1 = null;
        var1 = var1 == var2;
        return var1;
    };
    var3['isGuildLurker'] = var4;
    var4 = function getGuildEveryoneRoleId(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.castGuildIdAsEveryoneGuildRoleId;
        var1 = arg1;
        var1 = var1.id;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getGuildEveryoneRoleId'] = var4;
    var4 = function updateJoinedAt(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = arg2;
            var5 = _closure1_slot3;
            var2 = 'string';
            var1 = typeof var3;
            var4 = var3;
            if(!(var2 === var1)) { _fun0005_ip = 55; continue _fun0005 }
 24:
            var1 = global;
            var1 = var1.Date;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var9 = var2;
            var8 = var3;
            var1 = new var9[var1](var8, var7);
            var4 = var1 instanceof Object ? var1 : var2;
 55:
            var3 = undefined;
            var2 = arg1;
            var1 = 'joinedAt';
            var1 = var5.bind(var3)(var2, var1, var4);
            return var1;
        }
    };
    var3['updateJoinedAt'] = var4;
    var2 = function isGuildNSFW(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0006_ip = 61; continue _fun0006 }
 12:
            var5 = var4.ownerConfiguredContentLevel;
            var2 = _closure1_slot4;
            var2 = var2.EXPLICIT;
            var2 = var5 === var2;
            if(var2) { _fun0006_ip = 58; continue _fun0006 }
 38:
            var4 = var4.ownerConfiguredContentLevel;
            var3 = _closure1_slot4;
            var3 = var3.AGE_RESTRICTED;
            var2 = var4 === var3;
 58:
            var1 = var2;
 61:
            return var1;
        }
    };
    var3['isGuildNSFW'] = var2;
    return var1;
})();