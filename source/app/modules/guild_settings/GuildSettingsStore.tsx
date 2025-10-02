// app/modules/guild_settings/GuildSettingsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
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
            _closure1_slot60 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot60 = var1;
    var1 = function syncGuild(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var2 = _closure1_slot29;
            var1 = null;
            if(!(var1 != var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = _closure1_slot28;
            if(!(var1 != var2)) { _fun0002_ip = 6; continue _fun0002 }
case 8:
            var2 = _closure1_slot28;
            var2 = var2.id;
            if(!(var2 === var5)) { _fun0002_ip = 6; continue _fun0002 }
case 9:
            var4 = _closure1_slot14;
            var2 = var4.getGuild;
            var2 = var2.bind(var4)(var5);
            var1 = var1 != var2;
            if(!var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var5 = _closure1_slot28;
            var4 = _closure1_slot29;
            if(!(var5 !== var4)) { _fun0002_ip = 12; continue _fun0002 }
case 3:
            var _closure1_slot28 = var2;
            var1 = true;
            _fun0002_ip = 10; continue _fun0002;
case 12:
            _closure1_slot28 = var2;
            var _closure1_slot29 = var2;
            var1 = true;
case 10:
            return var1;
case 6:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot61 = var1;
    var14 = function handleFormInit(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var8 = var1.guildId;
            var6 = var1.section;
            var2 = var1.subsection;
            var4 = var1.location;
            var3 = _closure1_slot14;
            var2 = var3.getGuild;
            var5 = var2.bind(var3)(var8);
            var3 = null;
            if(!(var3 != var5)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var7 = _closure1_slot9;
            var2 = var7.getProfile;
            var2 = var2.bind(var7)(var8);
            _closure1_slot29 = var5;
            _closure1_slot28 = var5;
            var _closure1_slot31 = var2;
            var _closure1_slot30 = var2;
            var2 = _closure1_slot43;
            _closure1_slot44 = var2;
            var2 = _closure1_slot45;
            _closure1_slot46 = var2;
            var2 = _closure1_slot16;
            var2 = var2.OPEN;
            _closure1_slot39 = var2;
            var2 = {};
            _closure1_slot40 = var2;
            _closure1_slot41 = var3;
            var7 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 16;
            var5 = var5[var2];
            var2 = undefined;
            var7 = var7.bind(var2)(var5);
            var5 = var7.castGuildIdAsEveryoneGuildRoleId;
            var5 = var5.bind(var7)(var8);
            var _closure1_slot32 = var5;
            var5 = _closure1_slot29;
            var5 = var5.mfaLevel;
            _closure1_slot49 = var5;
            var5 = _closure1_slot53;
            _closure1_slot54 = var5;
            var _closure1_slot34 = var3;
            _closure1_slot50 = var4;
            if(!(var3 != var6)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var3 = {};
            var4 = 'stack';
            var3['type'] = var4;
            var5 = {};
            var4 = 'landing';
            var5['key'] = var4;
            var4 = _closure1_slot18;
            var4 = var4.LANDING;
            var5['name'] = var4;
            var4 = new Array(2);
            var4[0] = var5;
            var5 = {};
            var5['key'] = var6;
            var5['name'] = var6;
            var4[1] = var5;
            var3['routes'] = var4;
            var _closure1_slot33 = var3;
case 15:
            return var2;
case 13:
            var2 = _closure1_slot63;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot62 = var14;
    var13 = function handleFormClose() {
        var3 = false;
        _closure1_slot38 = var3;
        var1 = _closure1_slot16;
        var1 = var1.CLOSED;
        _closure1_slot39 = var1;
        var1 = null;
        _closure1_slot29 = var1;
        _closure1_slot28 = var1;
        _closure1_slot42 = var3;
        _closure1_slot44 = var3;
        _closure1_slot46 = var1;
        _closure1_slot47 = var1;
        var3 = 0;
        _closure1_slot48 = var3;
        _closure1_slot55 = var1;
        _closure1_slot58 = var1;
        _closure1_slot59 = var1;
        var _closure1_slot25 = var1;
        var _closure1_slot26 = var1;
        var _closure1_slot27 = var1;
        var1 = _closure1_slot17;
        var1 = var1.NONE;
        _closure1_slot49 = var1;
        var1 = undefined;
        _closure1_slot33 = var1;
        return var1;
    };
    var _closure1_slot63 = var13;
    var1 = function _createInvite(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot12;
            var1 = {};
            var4 = var2.code;
            var1['code'] = var4;
            var4 = var2.temporary;
            var1['temporary'] = var4;
            var4 = var2.revoked;
            var1['revoked'] = var4;
            var6 = var2.inviter;
            var4 = null;
            var7 = var4 != var6;
            var6 = null;
            if(!var7) { _fun0004_ip = 6; continue _fun0004 }
case 17:
            var9 = _closure1_slot13;
            var11 = var2.inviter;
            var8 = var9.prototype;
            var8 = Object.create(var8, {constructor: {value: var9}});
            var12 = var8;
            var7 = new var12[var9](var11, var10);
            var6 = var7 instanceof Object ? var7 : var8;
case 6:
            var1['inviter'] = var6;
            var8 = _closure1_slot10;
            var7 = var2.channel;
            var6 = undefined;
            var7 = var8.bind(var6)(var7);
            var1['channel'] = var7;
            var7 = var2.guild;
            var8 = var4 != var7;
            var7 = null;
            if(!var8) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 21;
            var8 = var10[var8];
            var10 = var9.bind(var6)(var8);
            var9 = var10.fromInviteGuild;
            var8 = var2.guild;
            var7 = var9.bind(var10)(var8);
case 18:
            var1['guild'] = var7;
            var7 = var2.uses;
            var1['uses'] = var7;
            var7 = var2.max_uses;
            var1['maxUses'] = var7;
            var7 = var2.max_age;
            var1['maxAge'] = var7;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 22;
            var5 = var8[var5];
            var5 = var7.bind(var6)(var5);
            var7 = var2.created_at;
            var8 = var4 != var7;
            var4 = undefined;
            if(!var8) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            var4 = var7;
case 20:
            var4 = var5.bind(var6)(var4);
            var1['createdAt'] = var4;
            var2 = var2.flags;
            var1['flags'] = var2;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var12 = var2;
            var11 = var1;
            var1 = new var12[var3](var11, var10);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        }
    };
    var _closure1_slot64 = var1;
    var10 = function handleIntegrationsUpdate(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var2 = _closure1_slot29;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0005_ip = 9; continue _fun0005 }
case 22:
            var5 = _closure1_slot39;
            var2 = _closure1_slot16;
            var2 = var2.OPEN;
            var1 = var5 === var2;
case 9:
            if(!var1) { _fun0005_ip = 23; continue _fun0005 }
case 24:
            var5 = var4.type;
            var2 = 'GUILD_INTEGRATIONS_UPDATE';
            var2 = var2 !== var5;
            if(var2) { _fun0005_ip = 25; continue _fun0005 }
case 11:
            var5 = var4.guildId;
            var4 = _closure1_slot29;
            var4 = var4.id;
            var2 = var5 === var4;
case 25:
            if(!var2) { _fun0005_ip = 26; continue _fun0005 }
case 27:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 23;
            var5 = var5[var4];
            var4 = undefined;
            var5 = var6.bind(var4)(var5);
            var4 = var5.fetchGuildIntegrationsApplications;
            var3 = _closure1_slot29;
            var3 = var3.id;
            var3 = var4.bind(var5)(var3);
            var2 = undefined;
case 26:
            var1 = var2;
case 23:
            return var1;
        }
    };
    var _closure1_slot65 = var10;
    var12 = function handleProfileUpdateStart(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guildId;
            var3 = _closure1_slot29;
            var1 = null;
            if(!(var1 != var3)) { _fun0006_ip = 28; continue _fun0006 }
case 29:
            var3 = _closure1_slot29;
            var3 = var3.id;
            if(!(var3 === var4)) { _fun0006_ip = 28; continue _fun0006 }
case 30:
            _closure1_slot41 = var1;
            var1 = undefined;
            return var1;
case 28:
            var1 = false;
            return var1;
        }
    };
    var11 = function handleProfileApiUpdateFailure(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guildId;
            var2 = var1.error;
            var5 = _closure1_slot29;
            var3 = null;
            if(!(var3 != var5)) { _fun0007_ip = 31; continue _fun0007 }
case 32:
            var3 = _closure1_slot29;
            var3 = var3.id;
            if(!(var3 === var4)) { _fun0007_ip = 31; continue _fun0007 }
case 33:
            _closure1_slot41 = var2;
            var1 = undefined;
            return var1;
case 31:
            var1 = false;
            return var1;
        }
    };
    var15 = global;
    var9 = var15.Object;
    var4 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var9)(var3, var1, var2);
    var9 = 0;
    var2 = var7[var9];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.set;
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.createChannelRecordFromInvite;
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.getGuildEveryoneRoleId;
    var _closure1_slot11 = var2;
    var2 = 9;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 10;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot13 = var2;
    var2 = 11;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot14 = var2;
    var2 = 12;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot15 = var2;
    var2 = 13;
    var2 = var7[var2];
    var16 = var6.bind(var1)(var2);
    var4 = var16.FormStates;
    var _closure1_slot16 = var4;
    var2 = var16.MFALevels;
    var _closure1_slot17 = var2;
    var17 = var16.GuildSettingsSections;
    var _closure1_slot18 = var17;
    var17 = var16.GuildSettingsSubsections;
    var _closure1_slot19 = var17;
    var17 = var16.Endpoints;
    var _closure1_slot20 = var17;
    var16 = var16.GuildFeatures;
    var _closure1_slot21 = var16;
    var16 = 14;
    var16 = var7[var16];
    var16 = var6.bind(var1)(var16);
    var16 = var16.DEFAULT_DISCOVERY_CATEGORY_ID;
    var _closure1_slot22 = var16;
    var17 = 15;
    var17 = var7[var17];
    var17 = var6.bind(var1)(var17);
    var18 = var17.PUBLIC_SUCCESS_MODAL_SEEN_KEY;
    var _closure1_slot23 = var18;
    var17 = var17.CREATE_NEW_CHANNEL_VALUE;
    var _closure1_slot24 = var17;
    var17 = ['name', 'description', 'icon', 'splash', 'banner', 'homeHeader', 'afkChannelId', 'afkTimeout', 'systemChannelId', 'verificationLevel', 'defaultMessageNotifications', 'explicitContentFilter', 'features', 'systemChannelFlags', 'preferredLocale', 'rulesChannelId', 'safetyAlertsChannelId', 'ownerConfiguredContentLevel', 'discoverySplash', 'publicUpdatesChannelId', 'premiumProgressBarEnabled'];
    var _closure1_slot35 = var17;
    var17 = ['brandColorPrimary', 'description', 'icon', 'name', 'traits', 'visibility', 'gameApplicationIds', 'customBanner', 'tag', 'badge', 'badgeColorPrimary', 'badgeColorSecondary'];
    var _closure1_slot36 = var17;
    var18 = var15.Set;
    var15 = var18.prototype;
    var17 = Object.create(var15, {constructor: {value: var18}});
    var21 = ['icon', 'splash', 'banner', 'discoverySplash', 'homeHeader'];
    var22 = var17;
    var15 = new var22[var18](var21, var20);
    var15 = var15 instanceof Object ? var15 : var17;
    var _closure1_slot37 = var15;
    var15 = false;
    var _closure1_slot38 = var15;
    var4 = var4.CLOSED;
    var _closure1_slot39 = var4;
    var4 = {};
    var _closure1_slot40 = var4;
    var4 = null;
    var _closure1_slot41 = var4;
    var _closure1_slot42 = var15;
    var _closure1_slot43 = var15;
    var _closure1_slot44 = var15;
    var _closure1_slot45 = var4;
    var _closure1_slot46 = var4;
    var _closure1_slot47 = var4;
    var _closure1_slot48 = var9;
    var2 = var2.NONE;
    var _closure1_slot49 = var2;
    var _closure1_slot50 = var4;
    var2 = {'primaryCategoryId': null, 'secondaryCategoryIds': null, 'keywords': null, 'emojiDiscoverabilityEnabled': true, 'partnerActionedTimestamp': null, 'partnerApplicationTimestamp': null, 'isPublished': false};
    var2['primaryCategoryId'] = var16;
    var16 = new Array(0);
    var2['secondaryCategoryIds'] = var16;
    var16 = new Array(0);
    var2['keywords'] = var16;
    var16 = new Array(0);
    var2['reasonsToJoin'] = var16;
    var16 = new Array(0);
    var2['socialLinks'] = var16;
    var16 = '';
    var2['about'] = var16;
    var _closure1_slot51 = var2;
    var _closure1_slot52 = var15;
    var _closure1_slot53 = var2;
    var _closure1_slot54 = var2;
    var _closure1_slot55 = var4;
    var _closure1_slot56 = var9;
    var _closure1_slot57 = var4;
    var _closure1_slot58 = var4;
    var _closure1_slot59 = var4;
    var4 = 26;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.Store;
    var4 = function(arg1) {
        var4 = function GuildSettingsStore() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot60;
                var1 = var1.bind(var3)();
                if(var1) { _fun0008_ip = 34; continue _fun0008 }
case 35:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0008_ip = 36; continue _fun0008;
case 34:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 36:
                var1 = var2.bind(var3)(var4, var1);
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
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var5 = this;
            var4 = var5.waitFor;
            var3 = _closure1_slot14;
            var2 = _closure1_slot9;
            var1 = _closure1_slot15;
            var1 = var4.bind(var5)(var3, var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(22);
        var1[0] = var5;
        var5 = {};
        var7 = 'getMetadata';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot54;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'widgetHasChanges';
        var5['key'] = var7;
        var7 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = _closure1_slot42;
                var1 = false;
                var1 = var1 !== var2;
                if(!var1) { _fun0009_ip = 37; continue _fun0009 }
case 7:
                var4 = _closure1_slot44;
                var2 = _closure1_slot43;
                var2 = var4 !== var2;
                if(var2) { _fun0009_ip = 38; continue _fun0009 }
case 39:
                var4 = _closure1_slot46;
                var3 = _closure1_slot45;
                var2 = var4 !== var3;
case 38:
                var1 = var2;
case 37:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'hasChanges';
        var5['key'] = var7;
        var7 = function value() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var3 = this;
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var7 = 24;
                var1 = var1[var7];
                var6 = undefined;
                var8 = var4.bind(var6)(var1);
                var5 = var8.isEqual;
                var4 = _closure1_slot29;
                var1 = _closure1_slot28;
                var1 = var5.bind(var8)(var4, var1);
                var1 = !var1;
                if(var1) { _fun0010_ip = 40; continue _fun0010 }
case 41:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var9 = var5.bind(var6)(var4);
                var8 = var9.isEqual;
                var5 = _closure1_slot54;
                var4 = _closure1_slot53;
                var4 = var8.bind(var9)(var5, var4);
                var1 = !var4;
case 40:
                if(var1) { _fun0010_ip = 42; continue _fun0010 }
case 43:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var6 = var5.bind(var6)(var4);
                var5 = var6.isEqual;
                var4 = _closure1_slot31;
                var2 = _closure1_slot30;
                var2 = var5.bind(var6)(var4, var2);
                var1 = !var2;
case 42:
                if(var1) { _fun0010_ip = 44; continue _fun0010 }
case 45:
                var2 = var3.widgetHasChanges;
                var1 = var2.bind(var3)();
case 44:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'isOpen';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot38;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getSavedRouteState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot33;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getSection';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot25;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'showNotice';
        var5['key'] = var7;
        var7 = function value() {
            var2 = this;
            var1 = var2.hasChanges;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getGuildId';
        var5['key'] = var7;
        var7 = function value() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var3 = _closure1_slot29;
                var1 = null;
                var3 = var1 != var3;
                if(!var3) { _fun0011_ip = 46; continue _fun0011 }
case 7:
                var2 = _closure1_slot29;
                var1 = var2.id;
case 46:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'showPublicSuccessModal';
        var5['key'] = var7;
        var7 = function value() {
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 25;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var3 = var2.Storage;
            var2 = var3.get;
            var1 = _closure1_slot23;
            var1 = var2.bind(var3)(var1);
            var1 = !var1;
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getGuild';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot29;
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getGuildProfile';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot31;
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getWidget';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {};
            var3 = _closure1_slot44;
            var1['enabled'] = var3;
            var2 = _closure1_slot46;
            var1['channelId'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'isSubmitting';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot39;
            var1 = _closure1_slot16;
            var1 = var1.SUBMITTING;
            var1 = var2 === var1;
            return var1;
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'isGuildMetadataLoaded';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot52;
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getErrors';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot40;
            return var1;
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'getError';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var2 = _closure1_slot40;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0012_ip = 32; continue _fun0012 }
case 47:
                var1 = var2;
case 32:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'getProfileError';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot41;
            return var1;
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'getSelectedRoleId';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot32;
            return var1;
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'getSlug';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot34;
            return var1;
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'getBans';
        var5['key'] = var7;
        var7 = function value() {
            var3 = _closure1_slot55;
            var1 = new Array(2);
            var1[0] = var3;
            var2 = _closure1_slot56;
            var1[1] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[20] = var5;
        var5 = {};
        var7 = 'getProps';
        var5['key'] = var7;
        var6 = function value() {
            var4 = this;
            var1 = {};
            var2 = var4.isSubmitting;
            var2 = var2.bind(var4)();
            var1['submitting'] = var2;
            var3 = _closure1_slot59;
            var1['integrations'] = var3;
            var3 = _closure1_slot25;
            var1['section'] = var3;
            var3 = _closure1_slot26;
            var1['subsection'] = var3;
            var3 = _closure1_slot40;
            var1['errors'] = var3;
            var3 = _closure1_slot29;
            var1['guild'] = var3;
            var3 = _closure1_slot55;
            var1['bans'] = var3;
            var3 = _closure1_slot56;
            var1['bansVersion'] = var3;
            var3 = _closure1_slot58;
            var1['invites'] = var3;
            var3 = _closure1_slot32;
            var1['selectedRoleId'] = var3;
            var3 = _closure1_slot42;
            var1['fetchedEmbed'] = var3;
            var3 = _closure1_slot44;
            var1['embedEnabled'] = var3;
            var3 = _closure1_slot46;
            var1['embedChannelId'] = var3;
            var3 = _closure1_slot49;
            var1['mfaLevel'] = var3;
            var3 = _closure1_slot27;
            var1['searchQuery'] = var3;
            var3 = _closure1_slot47;
            var1['vanityURLCode'] = var3;
            var3 = _closure1_slot48;
            var1['vanityURLUses'] = var3;
            var3 = _closure1_slot28;
            var1['originalGuild'] = var3;
            var3 = var4.hasChanges;
            var3 = var3.bind(var4)();
            var1['hasChanges'] = var3;
            var3 = _closure1_slot54;
            var1['guildMetadata'] = var3;
            var3 = _closure1_slot50;
            var1['analyticsLocation'] = var3;
            var3 = _closure1_slot52;
            var1['isGuildMetadataLoaded'] = var3;
            var3 = _closure1_slot30;
            var1['originalProfile'] = var3;
            var2 = _closure1_slot31;
            var1['profile'] = var2;
            return var1;
        };
        var5['value'] = var6;
        var1[21] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var9);
    var4 = 'GuildSettingsStore';
    var9['displayName'] = var4;
    var4 = 18;
    var4 = var7[var4];
    var21 = var8.bind(var1)(var4);
    var4 = {};
    var4['GUILD_SETTINGS_INIT'] = var14;
    var14 = function handleFormOpen(arg1) {
        var2 = true;
        _closure1_slot38 = var2;
        var3 = _closure1_slot62;
        var1 = undefined;
        var2 = arg1;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4['GUILD_SETTINGS_OPEN'] = var14;
    var4['GUILD_SETTINGS_CLOSE'] = var13;
    var13 = function handleUpdate(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var4 = _closure1_slot29;
            var3 = null;
            if(!(var3 != var4)) { _fun0013_ip = 41; continue _fun0013 }
case 48:
            var4 = _closure1_slot35;
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var6 = arg1;
                    var1 = _closure1_slot29;
                    var5 = null;
                    var1 = var5 != var1;
                    if(!var1) { _fun0014_ip = 9; continue _fun0014 }
case 22:
                    var4 = _closure2_slot0;
                    var3 = var4.hasOwnProperty;
                    var1 = var3.bind(var4)(var6);
case 9:
                    if(!var1) { _fun0014_ip = 49; continue _fun0014 }
case 24:
                    var4 = _closure1_slot8;
                    var3 = _closure1_slot29;
                    var1 = _closure2_slot0;
                    var1 = var1[var6];
                    var7 = var5 != var1;
                    var5 = null;
                    if(!var7) { _fun0014_ip = 50; continue _fun0014 }
case 51:
                    var5 = var1;
case 50:
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var6, var5);
                    _closure1_slot29 = var1;
case 49:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            var2 = function validateUpdate() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var4 = _closure1_slot29;
                    var _closure3_slot0 = var4;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0015_ip = 41; continue _fun0015 }
case 22:
                    var4 = _closure1_slot35;
                    var3 = var4.some;
                    var1 = function(arg1) {
                        var3 = arg1;
                        var1 = _closure3_slot0;
                        var2 = var1[var3];
                        var1 = _closure1_slot28;
                        var1 = var1[var3];
                        var1 = var2 !== var1;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var1);
                    if(var1) { _fun0015_ip = 14; continue _fun0015 }
case 28:
                    var1 = _closure1_slot28;
                    _closure1_slot29 = var1;
case 14:
                    var1 = undefined;
                    return var1;
case 41:
                    var1 = false;
                    return var1;
                }
            };
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
case 41:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_SETTINGS_UPDATE'] = var13;
    var13 = function handleSettingsProfileUpdate(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var4 = var2.guildId;
            var3 = _closure1_slot31;
            var5 = null;
            if(!(var5 != var3)) { _fun0016_ip = 50; continue _fun0016 }
case 52:
            var3 = _closure1_slot29;
            if(!(var5 != var3)) { _fun0016_ip = 50; continue _fun0016 }
case 53:
            var3 = _closure1_slot29;
            var3 = var3.id;
            if(!(var3 === var4)) { _fun0016_ip = 50; continue _fun0016 }
case 54:
            var3 = _closure1_slot36;
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var4 = arg1;
                    var3 = _closure1_slot31;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0017_ip = 55; continue _fun0017 }
case 7:
                    var5 = _closure2_slot0;
                    var3 = var5.hasOwnProperty;
                    var3 = var3.bind(var5)(var4);
                    if(!var3) { _fun0017_ip = 55; continue _fun0017 }
case 9:
                    var1 = _closure2_slot0;
                    var3 = var1[var4];
                    var1 = undefined;
                    if(!(var1 !== var3)) { _fun0017_ip = 55; continue _fun0017 }
case 35:
                    var1 = {};
                    var6 = _closure1_slot31;
                    var7 = var1;
                    var5 = copyDataProperties(var7, var6);
                    var1[var4] = var3;
                    _closure1_slot31 = var1;
case 55:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
case 50:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_SETTINGS_PROFILE_UPDATE'] = var13;
    var13 = function handleCancelChanges(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guildId;
            var1 = {};
            _closure1_slot40 = var1;
            var3 = _closure1_slot14;
            var1 = var3.getGuild;
            var1 = var1.bind(var3)(var4);
            var3 = null;
            if(!(var3 != var1)) { _fun0018_ip = 56; continue _fun0018 }
case 9:
            _closure1_slot29 = var1;
            _closure1_slot28 = var1;
case 56:
            var1 = undefined;
            return var1;
        }
    };
    var4['GUILD_SETTINGS_CANCEL_CHANGES'] = var13;
    var13 = function handleSaveRouteStack(arg1) {
        var1 = arg1;
        var2 = var1.state;
        _closure1_slot33 = var2;
        var1 = false;
        return var1;
    };
    var4['GUILD_SETTINGS_SAVE_ROUTE_STACK'] = var13;
    var13 = function handleFormSubmit() {
        var1 = _closure1_slot16;
        var1 = var1.SUBMITTING;
        _closure1_slot39 = var1;
        var1 = {};
        _closure1_slot40 = var1;
        var1 = undefined;
        return var1;
    };
    var4['GUILD_SETTINGS_SUBMIT'] = var13;
    var13 = function handleSubmitSuccess() {
        var1 = _closure1_slot16;
        var1 = var1.OPEN;
        _closure1_slot39 = var1;
        var1 = undefined;
        return var1;
    };
    var4['GUILD_SETTINGS_SUBMIT_SUCCESS'] = var13;
    var13 = function handleFormSubmitFailure(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var1 = _closure1_slot16;
            var1 = var1.OPEN;
            _closure1_slot39 = var1;
            var1 = _closure1_slot25;
            var3 = null;
            if(!(var3 == var1)) { _fun0019_ip = 57; continue _fun0019 }
case 52:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 20;
            var4 = var4[var1];
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            var1 = var4.getDefaultGuildSettingsSection;
            var1 = var1.bind(var4)();
            _fun0019_ip = 58; continue _fun0019;
case 57:
            var1 = _closure1_slot25;
case 58:
            _closure1_slot25 = var1;
            _closure1_slot26 = var3;
            var1 = arg1;
            var1 = var1.errors;
            if(!(var3 == var1)) { _fun0019_ip = 10; continue _fun0019 }
case 59:
            var1 = {};
case 10:
            _closure1_slot40 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var4['GUILD_SETTINGS_SUBMIT_FAILURE'] = var13;
    var13 = function handleSetSection(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot29;
            var1 = null;
            if(!(var1 != var2)) { _fun0020_ip = 60; continue _fun0020 }
case 22:
            var2 = _closure1_slot25;
            var5 = var3.section;
            _closure1_slot25 = var5;
            var5 = var3.subsection;
            _closure1_slot26 = var5;
            var6 = _closure1_slot25;
            var5 = _closure1_slot18;
            var5 = var5.INSTANT_INVITES;
            if(!(var6 !== var5)) { _fun0020_ip = 61; continue _fun0020 }
case 62:
            var6 = _closure1_slot25;
            var5 = _closure1_slot18;
            var5 = var5.INVITES;
            if(!(var6 !== var5)) { _fun0020_ip = 61; continue _fun0020 }
case 49:
            var6 = _closure1_slot25;
            var5 = _closure1_slot18;
            var5 = var5.INTEGRATIONS;
            if(!(var6 !== var5)) { _fun0020_ip = 63; continue _fun0020 }
case 36:
            var6 = _closure1_slot25;
            var5 = _closure1_slot18;
            var5 = var5.ROLES;
            if(!(var6 !== var5)) { _fun0020_ip = 63; continue _fun0020 }
case 23:
            var6 = _closure1_slot25;
            var5 = _closure1_slot18;
            var5 = var5.MEMBERS;
            if(!(var6 !== var5)) { _fun0020_ip = 64; continue _fun0020 }
case 65:
            var6 = _closure1_slot25;
            var5 = _closure1_slot18;
            var5 = var5.VANITY_URL;
            if(!(var6 !== var5)) { _fun0020_ip = 66; continue _fun0020 }
case 18:
            var6 = _closure1_slot25;
            var5 = _closure1_slot18;
            var5 = var5.SAFETY;
            if(!(var6 === var5)) { _fun0020_ip = 67; continue _fun0020 }
case 68:
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var5 = 18;
            var6 = var6[var5];
            var5 = undefined;
            var7 = var7.bind(var5)(var6);
            var6 = var7.dispatch;
            var5 = {};
            var8 = 'GUILD_SETTINGS_SAFETY_SET_SUBSECTION';
            var5['type'] = var8;
            var8 = _closure1_slot26;
            if(!(var1 != var8)) { _fun0020_ip = 69; continue _fun0020 }
case 70:
            var8 = _closure1_slot26;
            _fun0020_ip = 71; continue _fun0020;
case 69:
            var9 = _closure1_slot19;
            var8 = var9.SAFETY_OVERVIEW;
case 71:
            var5['subsection'] = var8;
            var5 = var6.bind(var7)(var5);
            _fun0020_ip = 67; continue _fun0020;
case 66:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var5 = 19;
            var6 = var6[var5];
            var5 = undefined;
            var7 = var7.bind(var5)(var6);
            var6 = var7.fetchVanityUrl;
            var5 = _closure1_slot29;
            var5 = var5.id;
            var5 = var6.bind(var7)(var5);
            _fun0020_ip = 67; continue _fun0020;
case 64:
            var7 = _closure1_slot11;
            var6 = _closure1_slot29;
            var5 = undefined;
            var5 = var7.bind(var5)(var6);
            _closure1_slot32 = var5;
            _fun0020_ip = 67; continue _fun0020;
case 63:
            _closure1_slot32 = var1;
            var1 = var3.section;
            if(!(var2 !== var1)) { _fun0020_ip = 67; continue _fun0020 }
case 72:
            var2 = _closure1_slot65;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
            return var1;
case 61:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 17;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var3 = var1.HTTP;
            var2 = var3.get;
            var1 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
            var6 = _closure1_slot20;
            var5 = var6.GUILD_INSTANT_INVITES;
            var4 = _closure1_slot29;
            var4 = var4.id;
            var4 = var5.bind(var6)(var4);
            var1['url'] = var4;
            var3 = var2.bind(var3)(var1);
            var2 = var3.then;
            var1 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 18;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'GUILD_SETTINGS_LOADED_INVITES';
                var2['type'] = var5;
                var5 = arg1;
                var5 = var5.body;
                var2['invites'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
case 67:
            var1 = undefined;
            return var1;
case 60:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_SETTINGS_SET_SECTION'] = var13;
    var13 = function handleSetSearchQuery(arg1) {
        var1 = arg1;
        var2 = var1.searchQuery;
        _closure1_slot27 = var2;
        var1 = undefined;
        return var1;
    };
    var4['GUILD_SETTINGS_SET_SEARCH_QUERY'] = var13;
    var13 = function handleLoadedBans(arg1) {
        var1 = arg1;
        var4 = var1.bans;
        var3 = var4.reduce;
        var1 = global;
        var1 = var1.Map;
        var2 = var1.prototype;
        var2 = Object.create(var2, {constructor: {value: var1}});
        var7 = var2;
        var1 = new var7[var1](var6);
        var2 = var1 instanceof Object ? var1 : var2;
        var1 = function(arg1, arg2) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var1 = arg1;
                var4 = arg2;
                var2 = var4.user;
                var5 = null;
                var2 = var5 != var2;
                if(!var2) { _fun0021_ip = 30; continue _fun0021 }
case 73:
                var3 = var4.user;
                var3 = var3.id;
                var2 = var5 != var3;
case 30:
                if(!var2) { _fun0021_ip = 11; continue _fun0021 }
case 9:
                var3 = var1.set;
                var2 = var4.user;
                var2 = var2.id;
                var2 = var3.bind(var1)(var2, var4);
case 11:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        _closure1_slot55 = var1;
        var1 = _closure1_slot56;
        var1 = var1 + 1;
        _closure1_slot56 = var1;
        var1 = undefined;
        return var1;
    };
    var4['GUILD_SETTINGS_LOADED_BANS'] = var13;
    var13 = function handleLoadedBansBatch(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var1 = arg1;
            var5 = var1.bans;
            var1 = var1.guildId;
            var3 = _closure1_slot57;
            var3 = var3 === var1;
            if(!var3) { _fun0022_ip = 74; continue _fun0022 }
case 75:
            var6 = _closure1_slot55;
            var4 = null;
            var3 = var4 != var6;
case 74:
            if(var3) { _fun0022_ip = 76; continue _fun0022 }
case 77:
            _closure1_slot57 = var1;
            var1 = global;
            var1 = var1.Map;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var9 = var3;
            var1 = new var9[var1](var8);
            var1 = var1 instanceof Object ? var1 : var3;
            _closure1_slot55 = var1;
case 76:
            var4 = var5.reduce;
            var3 = _closure1_slot55;
            var1 = function(arg1, arg2) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var1 = arg1;
                    var4 = arg2;
                    var2 = var4.user;
                    var5 = null;
                    var2 = var5 != var2;
                    if(!var2) { _fun0023_ip = 30; continue _fun0023 }
case 73:
                    var3 = var4.user;
                    var3 = var3.id;
                    var2 = var5 != var3;
case 30:
                    if(!var2) { _fun0023_ip = 11; continue _fun0023 }
case 9:
                    var3 = var1.set;
                    var2 = var4.user;
                    var2 = var2.id;
                    var2 = var3.bind(var1)(var2, var4);
case 11:
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var1, var3);
            _closure1_slot55 = var1;
            var1 = _closure1_slot56;
            var1 = var1 + 1;
            _closure1_slot56 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var4['GUILD_SETTINGS_LOADED_BANS_BATCH'] = var13;
    var13 = function handleLoadedInvites(arg1) {
        var1 = arg1;
        var4 = var1.invites;
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            var1 = arg1;
            var5 = arg2;
            var3 = var5.code;
            var4 = _closure1_slot64;
            var2 = undefined;
            var2 = var4.bind(var2)(var5);
            var1[var3] = var2;
            return var1;
        };
        var1 = {};
        var2 = var3.bind(var4)(var2, var1);
        _closure1_slot58 = var2;
        var1 = undefined;
        return var1;
    };
    var4['GUILD_SETTINGS_LOADED_INVITES'] = var13;
    var13 = function handleSetEmbed(arg1) {
        var1 = arg1;
        var3 = true;
        _closure1_slot42 = var3;
        var3 = var1.enabled;
        _closure1_slot44 = var3;
        _closure1_slot43 = var3;
        var1 = var1.channelId;
        _closure1_slot46 = var1;
        _closure1_slot45 = var1;
        var1 = undefined;
        return var1;
    };
    var4['GUILD_SETTINGS_SET_WIDGET'] = var13;
    var13 = function handleSetVanityURL(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var1 = arg1;
            var2 = var1.code;
            var3 = null;
            var4 = var3 != var2;
            if(!var4) { _fun0024_ip = 73; continue _fun0024 }
case 78:
            var3 = var2;
case 73:
            _closure1_slot47 = var3;
            var1 = var1.uses;
            _closure1_slot48 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var4['GUILD_SETTINGS_SET_VANITY_URL'] = var13;
    var13 = function handleSetMFALevelSuccess(arg1) {
        var1 = arg1;
        var2 = var1.level;
        _closure1_slot49 = var2;
        var1 = undefined;
        return var1;
    };
    var4['GUILD_SETTINGS_SET_MFA_SUCCESS'] = var13;
    var13 = function handleRoleSelect(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var1 = arg1;
            var1 = var1.roleId;
            var2 = null;
            var3 = var2 != var1;
            if(!var3) { _fun0025_ip = 29; continue _fun0025 }
case 79:
            var2 = var1;
case 29:
            _closure1_slot32 = var2;
            var1 = undefined;
            return var1;
        }
    };
    var4['GUILD_SETTINGS_ROLE_SELECT'] = var13;
    var13 = function handleLoadedIntegrations(arg1) {
        var1 = arg1;
        var2 = var1.integrations;
        _closure1_slot59 = var2;
        var1 = undefined;
        return var1;
    };
    var4['GUILD_SETTINGS_LOADED_INTEGRATIONS'] = var13;
    var13 = function handlePinPermissionMigrated(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guildId;
            var3 = _closure1_slot29;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0026_ip = 9; continue _fun0026 }
case 8:
            var3 = _closure1_slot29;
            var3 = var3.id;
            var1 = var4 === var3;
case 9:
            if(!var1) { _fun0026_ip = 80; continue _fun0026 }
case 24:
            var6 = _closure1_slot8;
            var5 = _closure1_slot29;
            var4 = var5.features;
            var3 = var4.union;
            var1 = global;
            var8 = var1.Set;
            var1 = _closure1_slot21;
            var7 = var1.PIN_PERMISSION_MIGRATION_COMPLETE;
            var1 = new Array(1);
            var1[0] = var7;
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var12 = var7;
            var11 = var1;
            var1 = new var12[var8](var11, var10);
            var1 = var1 instanceof Object ? var1 : var7;
            var4 = var3.bind(var4)(var1);
            var3 = undefined;
            var1 = 'features';
            var1 = var6.bind(var3)(var5, var1, var4);
            _closure1_slot29 = var1;
case 80:
            var1 = undefined;
            return var1;
        }
    };
    var4['GUILD_SETTINGS_PIN_PERMISSION_MIGRATED'] = var13;
    var13 = function handleAddBan(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var1 = arg1;
            var9 = var1.user;
            var4 = var1.guildId;
            var1 = _closure1_slot55;
            var8 = null;
            var1 = var8 != var1;
            if(!var1) { _fun0027_ip = 81; continue _fun0027 }
case 82:
            var2 = _closure1_slot29;
            var2 = var8 != var2;
            if(!var2) { _fun0027_ip = 83; continue _fun0027 }
case 24:
            var3 = _closure1_slot29;
            var3 = var3.id;
            var2 = var3 === var4;
case 83:
            if(!var2) { _fun0027_ip = 84; continue _fun0027 }
case 85:
            var7 = _closure1_slot55;
            var6 = var7.set;
            var4 = var9.id;
            var3 = {};
            var3['user'] = var9;
            var3['reason'] = var8;
            var3 = var6.bind(var7)(var4, var3);
            var3 = _closure1_slot56;
            var3 = parseFloat(var3);
            var4 = var3 + 1;
            _closure1_slot56 = var4;
            var2 = undefined;
case 84:
            var1 = var2;
case 81:
            return var1;
        }
    };
    var4['GUILD_BAN_ADD'] = var13;
    var13 = function handleRemoveBan(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
            var1 = arg1;
            var3 = var1.user;
            var6 = var1.guildId;
            var1 = _closure1_slot55;
            var4 = null;
            var1 = var4 != var1;
            if(!var1) { _fun0028_ip = 40; continue _fun0028 }
case 82:
            var2 = _closure1_slot29;
            var2 = var4 != var2;
            if(!var2) { _fun0028_ip = 83; continue _fun0028 }
case 24:
            var4 = _closure1_slot29;
            var4 = var4.id;
            var2 = var4 === var6;
case 83:
            if(!var2) { _fun0028_ip = 86; continue _fun0028 }
case 85:
            var6 = _closure1_slot55;
            var4 = var6.delete;
            var3 = var3.id;
            var3 = var4.bind(var6)(var3);
            var3 = _closure1_slot56;
            var3 = parseFloat(var3);
            var4 = var3 + 1;
            _closure1_slot56 = var4;
            var2 = undefined;
case 86:
            var1 = var2;
case 40:
            return var1;
        }
    };
    var4['GUILD_BAN_REMOVE'] = var13;
    var13 = function handleRoleCreate(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guildId;
            var2 = _closure1_slot61;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            if(var2) { _fun0029_ip = 82; continue _fun0029 }
case 46:
            var2 = false;
            return var2;
case 82:
            return var1;
        }
    };
    var4['GUILD_ROLE_CREATE'] = var13;
    var13 = function handleRoleUpdate(arg1) {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guildId;
            var2 = _closure1_slot61;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            if(var2) { _fun0030_ip = 82; continue _fun0030 }
case 46:
            var2 = false;
            return var2;
case 82:
            return var1;
        }
    };
    var4['GUILD_ROLE_UPDATE'] = var13;
    var13 = function handleRoleDelete(arg1) {
        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
            var1 = arg1;
            var5 = var1.guildId;
            var4 = var1.roleId;
            var2 = _closure1_slot61;
            var1 = undefined;
            var2 = var2.bind(var1)(var5);
            if(var2) { _fun0031_ip = 53; continue _fun0031 }
case 39:
            var2 = false;
            return var2;
case 53:
            var2 = _closure1_slot32;
            if(!(var2 === var4)) { _fun0031_ip = 87; continue _fun0031 }
case 38:
            var2 = null;
            _closure1_slot32 = var2;
case 87:
            return var1;
        }
    };
    var4['GUILD_ROLE_DELETE'] = var13;
    var13 = function handleGuildUpdate(arg1) {
        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
            var1 = _closure1_slot29;
            var4 = null;
            if(!(var4 != var1)) { _fun0032_ip = 71; continue _fun0032 }
case 79:
            var1 = _closure1_slot29;
            var5 = var1.id;
            var1 = arg1;
            var1 = var1.guild;
            var1 = var1.id;
            if(!(var5 === var1)) { _fun0032_ip = 71; continue _fun0032 }
case 31:
            var6 = _closure1_slot14;
            var5 = var6.getGuild;
            var1 = _closure1_slot29;
            var1 = var1.id;
            var1 = var5.bind(var6)(var1);
            var _closure2_slot0 = var1;
            if(!(var4 != var1)) { _fun0032_ip = 88; continue _fun0032 }
case 89:
            var6 = _closure1_slot9;
            var5 = var6.getProfile;
            var4 = _closure1_slot29;
            var4 = var4.id;
            var4 = var5.bind(var6)(var4);
            _closure1_slot30 = var4;
            var5 = _closure1_slot25;
            var4 = _closure1_slot18;
            var4 = var4.PROFILE;
            var4 = var5 !== var4;
            if(!var4) { _fun0032_ip = 90; continue _fun0032 }
case 91:
            var6 = _closure1_slot25;
            var5 = _closure1_slot18;
            var5 = var5.TAG;
            var4 = var6 !== var5;
case 90:
            if(!var4) { _fun0032_ip = 92; continue _fun0032 }
case 93:
            var4 = _closure1_slot30;
            _closure1_slot31 = var4;
case 92:
            var5 = _closure1_slot25;
            var4 = _closure1_slot18;
            var4 = var4.PROFILE;
            if(!(var5 !== var4)) { _fun0032_ip = 70; continue _fun0032 }
case 94:
            _closure1_slot28 = var1;
            var _closure2_slot1 = var1;
            var4 = {};
            var7 = _closure1_slot29;
            var8 = var4;
            var5 = copyDataProperties(var8, var7);
            var _closure2_slot2 = var4;
            var6 = _closure1_slot35;
            var5 = var6.forEach;
            var4 = function(arg1) {
                _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                    var6 = arg1;
                    var3 = _closure1_slot37;
                    var2 = var3.has;
                    var2 = var2.bind(var3)(var6);
                    if(var2) { _fun0033_ip = 95; continue _fun0033 }
case 47:
                    var2 = 'rulesChannelId';
                    var2 = var2 !== var6;
                    if(!var2) { _fun0033_ip = 28; continue _fun0033 }
case 30:
                    var3 = 'publicUpdatesChannelId';
                    var2 = var3 !== var6;
case 28:
                    if(var2) { _fun0033_ip = 96; continue _fun0033 }
case 56:
                    var3 = _closure2_slot2;
                    var4 = var3[var6];
                    var3 = _closure1_slot24;
                    var2 = var4 !== var3;
case 96:
                    if(!var2) { _fun0033_ip = 97; continue _fun0033 }
case 98:
                    var3 = 'features';
                    var2 = var3 !== var6;
case 97:
                    if(!var2) { _fun0033_ip = 95; continue _fun0033 }
case 12:
                    var5 = _closure1_slot8;
                    var4 = _closure2_slot1;
                    var1 = 'ownerConfiguredContentLevel';
                    if(!(var1 === var6)) { _fun0033_ip = 99; continue _fun0033 }
case 43:
                    var1 = _closure2_slot0;
                    var3 = var1[var6];
                    _fun0033_ip = 100; continue _fun0033;
case 99:
                    var1 = _closure2_slot2;
                    var3 = var1[var6];
case 100:
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4, var6, var3);
                    _closure2_slot1 = var1;
case 95:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var5.bind(var6)(var4);
            var3 = _closure2_slot1;
            _closure1_slot29 = var3;
            var3 = undefined;
            return var3;
case 70:
            _closure1_slot28 = var1;
            _closure1_slot29 = var1;
            var1 = undefined;
            return var1;
case 88:
            var1 = false;
            return var1;
case 71:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_UPDATE'] = var13;
    var13 = function handleGuildDelete(arg1) {
        _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
            var3 = _closure1_slot29;
            var2 = null;
            if(!(var2 != var3)) { _fun0034_ip = 35; continue _fun0034 }
case 101:
            var2 = _closure1_slot29;
            var3 = var2.id;
            var2 = arg1;
            var2 = var2.guild;
            var2 = var2.id;
            if(!(var3 === var2)) { _fun0034_ip = 35; continue _fun0034 }
case 33:
            var2 = _closure1_slot63;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
case 35:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_DELETE'] = var13;
    var13 = function handleProfileFetch(arg1) {
        _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
            var1 = arg1;
            var3 = var1.profile;
            var5 = var3.id;
            var6 = _closure1_slot29;
            var1 = null;
            var7 = var1 == var6;
            var1 = undefined;
            var4 = undefined;
            if(var7) { _fun0035_ip = 33; continue _fun0035 }
case 30:
            var4 = var6.id;
case 33:
            if(!(var5 === var4)) { _fun0035_ip = 35; continue _fun0035 }
case 38:
            _closure1_slot31 = var3;
            _closure1_slot30 = var3;
case 35:
            return var1;
        }
    };
    var4['GUILD_PROFILE_FETCH_SUCCESS'] = var13;
    var4['GUILD_PROFILE_UPDATE'] = var12;
    var13 = function handleProfileApiUpdate(arg1) {
        _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
            var1 = arg1;
            var6 = var1.profile;
            var2 = _closure1_slot31;
            var4 = null;
            var7 = var4 == var2;
            var3 = undefined;
            var1 = undefined;
            if(var7) { _fun0036_ip = 30; continue _fun0036 }
case 82:
            var1 = var2.id;
case 30:
            var1 = var4 != var1;
            if(!var1) { _fun0036_ip = 102; continue _fun0036 }
case 77:
            var7 = _closure1_slot61;
            var2 = _closure1_slot31;
            var2 = var2.id;
            var7 = var7.bind(var3)(var2);
            var2 = !var7;
            var2 = !var2;
            if(!var7) { _fun0036_ip = 103; continue _fun0036 }
case 51:
            var7 = var6.id;
            var8 = _closure1_slot29;
            var9 = var4 == var8;
            var3 = undefined;
            if(var9) { _fun0036_ip = 86; continue _fun0036 }
case 59:
            var3 = var8.id;
case 86:
            var3 = var7 === var3;
            if(!var3) { _fun0036_ip = 104; continue _fun0036 }
case 105:
            _closure1_slot31 = var6;
            _closure1_slot30 = var6;
            _closure1_slot41 = var4;
            var3 = null;
case 104:
            var2 = undefined;
case 103:
            var1 = var2;
case 102:
            return var1;
        }
    };
    var4['GUILD_PROFILE_UPDATE_SUCCESS'] = var13;
    var4['GUILD_PROFILE_UPDATE_FAILURE'] = var11;
    var4['GUILD_PROFILE_UPDATE_VISIBILITY'] = var12;
    var12 = function handleProfileApiUpdateVisibility(arg1) {
        _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
            var1 = arg1;
            var8 = var1.guildId;
            var2 = _closure1_slot31;
            var4 = null;
            var6 = var4 == var2;
            var3 = undefined;
            var1 = undefined;
            if(var6) { _fun0037_ip = 106; continue _fun0037 }
case 75:
            var1 = var2.id;
case 106:
            var1 = var4 != var1;
            if(!var1) { _fun0037_ip = 23; continue _fun0037 }
case 24:
            var6 = _closure1_slot61;
            var2 = _closure1_slot31;
            var2 = var2.id;
            var6 = var6.bind(var3)(var2);
            var2 = !var6;
            var2 = !var2;
            if(!var6) { _fun0037_ip = 26; continue _fun0037 }
case 98:
            var6 = _closure1_slot29;
            var7 = var4 == var6;
            var3 = undefined;
            if(var7) { _fun0037_ip = 107; continue _fun0037 }
case 108:
            var3 = var6.id;
case 107:
            var3 = var8 === var3;
            if(!var3) { _fun0037_ip = 109; continue _fun0037 }
case 110:
            var7 = _closure1_slot9;
            var6 = var7.getProfile;
            var6 = var6.bind(var7)(var8);
            _closure1_slot31 = var6;
            _closure1_slot30 = var6;
            _closure1_slot41 = var4;
            var3 = null;
case 109:
            var2 = undefined;
case 26:
            var1 = var2;
case 23:
            return var1;
        }
    };
    var4['GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS'] = var12;
    var4['GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE'] = var11;
    var4['USER_CONNECTIONS_UPDATE'] = var10;
    var4['GUILD_INTEGRATIONS_UPDATE'] = var10;
    var10 = function handleInviteRevoke(arg1) {
        var2 = {};
        var4 = _closure1_slot58;
        var5 = var2;
        var3 = copyDataProperties(var5, var4);
        _closure1_slot58 = var2;
        var1 = arg1;
        var1 = var1.code;
        var1 = delete var2[var1];
        var1 = undefined;
        return var1;
    };
    var4['INSTANT_INVITE_REVOKE_SUCCESS'] = var10;
    var10 = function handleInviteCreateSuccess(arg1) {
        var1 = arg1;
        var3 = {};
        var7 = _closure1_slot58;
        var8 = var3;
        var4 = copyDataProperties(var8, var7);
        var4 = var1.invite;
        var5 = var4.code;
        var6 = _closure1_slot64;
        var4 = var1.invite;
        var1 = undefined;
        var4 = var6.bind(var1)(var4);
        var3[var5] = var4;
        _closure1_slot58 = var3;
        return var1;
    };
    var4['INSTANT_INVITE_CREATE_SUCCESS'] = var10;
    var10 = function handleGuildMetadataServerUpdate(arg1) {
        _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
            var1 = arg1;
            var6 = var1.guildId;
            var4 = var1.metadata;
            var1 = _closure1_slot29;
            var3 = null;
            var1 = var3 != var1;
            if(!var1) { _fun0038_ip = 38; continue _fun0038 }
case 111:
            var5 = _closure1_slot29;
            var5 = var5.id;
            var1 = var6 === var5;
case 38:
            if(!var1) { _fun0038_ip = 112; continue _fun0038 }
case 87:
            var5 = _closure1_slot52;
            var1 = false;
            if(!(var1 === var5)) { _fun0038_ip = 58; continue _fun0038 }
case 113:
            var1 = true;
            _closure1_slot52 = var1;
case 58:
            var1 = {};
            var5 = var4.primaryCategoryId;
            if(!(var3 == var5)) { _fun0038_ip = 89; continue _fun0038 }
case 76:
            var5 = _closure1_slot22;
case 89:
            var1['primaryCategoryId'] = var5;
            var5 = var4.secondaryCategoryIds;
            if(!(var3 == var5)) { _fun0038_ip = 114; continue _fun0038 }
case 115:
            var5 = new Array(0);
case 114:
            var1['secondaryCategoryIds'] = var5;
            var5 = var4.keywords;
            if(!(var3 == var5)) { _fun0038_ip = 116; continue _fun0038 }
case 100:
            var5 = new Array(0);
case 116:
            var1['keywords'] = var5;
            var6 = var4.emojiDiscoverabilityEnabled;
            var7 = var3 != var6;
            var5 = true;
            if(!var7) { _fun0038_ip = 117; continue _fun0038 }
case 118:
            var5 = var6;
case 117:
            var1['emojiDiscoverabilityEnabled'] = var5;
            var6 = var4.partnerActionedTimestamp;
            var7 = var3 != var6;
            var5 = null;
            if(!var7) { _fun0038_ip = 18; continue _fun0038 }
case 119:
            var5 = var6;
case 18:
            var1['partnerActionedTimestamp'] = var5;
            var6 = var4.partnerApplicationTimestamp;
            var7 = var3 != var6;
            var5 = null;
            if(!var7) { _fun0038_ip = 120; continue _fun0038 }
case 121:
            var5 = var6;
case 120:
            var1['partnerApplicationTimestamp'] = var5;
            var6 = var4.isPublished;
            var5 = var3 != var6;
            if(!var5) { _fun0038_ip = 122; continue _fun0038 }
case 123:
            var5 = var6;
case 122:
            var1['isPublished'] = var5;
            var5 = var4.reasonsToJoin;
            if(!(var3 == var5)) { _fun0038_ip = 124; continue _fun0038 }
case 125:
            var5 = new Array(0);
case 124:
            var1['reasonsToJoin'] = var5;
            var5 = var4.socialLinks;
            if(!(var3 == var5)) { _fun0038_ip = 126; continue _fun0038 }
case 127:
            var5 = new Array(0);
case 126:
            var1['socialLinks'] = var5;
            var4 = var4.about;
            var5 = var3 != var4;
            var3 = '';
            if(!var5) { _fun0038_ip = 128; continue _fun0038 }
case 129:
            var3 = var4;
case 128:
            var1['about'] = var3;
            _closure1_slot53 = var1;
            _closure1_slot54 = var1;
            var1 = {};
            _closure1_slot40 = var1;
case 112:
            var1 = undefined;
            return var1;
        }
    };
    var4['GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER'] = var10;
    var10 = function handleGuildMetadataFetchFail() {
        var1 = _closure1_slot51;
        _closure1_slot54 = var1;
        _closure1_slot53 = var1;
        var1 = undefined;
        return var1;
    };
    var4['GUILD_DISCOVERY_METADATA_FETCH_FAIL'] = var10;
    var10 = function handleGuildCategoryAdd(arg1) {
        _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guildId;
            var7 = var1.categoryId;
            var3 = _closure1_slot29;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0039_ip = 38; continue _fun0039 }
case 111:
            var3 = _closure1_slot29;
            var3 = var3.id;
            var1 = var4 === var3;
case 38:
            if(!var1) { _fun0039_ip = 92; continue _fun0039 }
case 37:
            var1 = {};
            var10 = _closure1_slot54;
            var11 = var1;
            var3 = copyDataProperties(var11, var10);
            var3 = _closure1_slot54;
            var10 = var3.secondaryCategoryIds;
            var3 = new Array(1);
            var11 = var3;
            var9 = 0;
            var4 = arraySpread(var11, var10, var9);
            var3[var4] = var7;
            var6 = 1;
            var4 = var4 + var6;
            var4 = 'secondaryCategoryIds';
            var1[var4] = var3;
            _closure1_slot54 = var1;
            var1 = {};
            var10 = _closure1_slot53;
            var11 = var1;
            var3 = copyDataProperties(var11, var10);
            var3 = _closure1_slot53;
            var10 = var3.secondaryCategoryIds;
            var3 = new Array(1);
            var11 = var3;
            var5 = arraySpread(var11, var10, var9);
            var3[var5] = var7;
            var5 = var5 + var6;
            var1[var4] = var3;
            _closure1_slot53 = var1;
case 92:
            var1 = undefined;
            return var1;
        }
    };
    var4['GUILD_DISCOVERY_CATEGORY_ADD'] = var10;
    var10 = function handleGuildCategoryDelete(arg1) {
        _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guildId;
            var5 = var1.categoryId;
            var4 = _closure1_slot29;
            var1 = null;
            if(!(var1 != var4)) { _fun0040_ip = 130; continue _fun0040 }
case 111:
            var1 = _closure1_slot29;
            var1 = var1.id;
            if(!(var3 === var1)) { _fun0040_ip = 130; continue _fun0040 }
case 37:
            var1 = _closure1_slot54;
            var3 = var1.secondaryCategoryIds;
            var1 = var3.indexOf;
            var7 = var1.bind(var3)(var5);
            var1 = -1;
            if(!(var1 !== var7)) { _fun0040_ip = 131; continue _fun0040 }
case 76:
            var3 = _closure1_slot54;
            var9 = var3.secondaryCategoryIds;
            var6 = new Array(0);
            var8 = 0;
            var10 = var6;
            var3 = arraySpread(var10, var9, var8);
            var4 = var6.splice;
            var3 = 1;
            var3 = var4.bind(var6)(var7, var3);
            var3 = {};
            var9 = _closure1_slot54;
            var10 = var3;
            var4 = copyDataProperties(var10, var9);
            var4 = 'secondaryCategoryIds';
            var3[var4] = var6;
            _closure1_slot54 = var3;
case 131:
            var3 = _closure1_slot53;
            var4 = var3.secondaryCategoryIds;
            var3 = var4.indexOf;
            var5 = var3.bind(var4)(var5);
            if(!(var1 !== var5)) { _fun0040_ip = 130; continue _fun0040 }
case 132:
            var1 = _closure1_slot53;
            var9 = var1.secondaryCategoryIds;
            var4 = new Array(0);
            var8 = 0;
            var10 = var4;
            var1 = arraySpread(var10, var9, var8);
            var3 = var4.splice;
            var1 = 1;
            var1 = var3.bind(var4)(var5, var1);
            var1 = {};
            var9 = _closure1_slot53;
            var10 = var1;
            var3 = copyDataProperties(var10, var9);
            var3 = 'secondaryCategoryIds';
            var1[var3] = var4;
            _closure1_slot53 = var1;
case 130:
            var1 = undefined;
            return var1;
        }
    };
    var4['GUILD_DISCOVERY_CATEGORY_DELETE'] = var10;
    var10 = function handleGuildCategoryUpdateFail(arg1) {
        _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
            var1 = arg1;
            var6 = var1.guildId;
            var2 = var1.errors;
            var4 = _closure1_slot29;
            var3 = null;
            var4 = var3 != var4;
            if(!var4) { _fun0041_ip = 38; continue _fun0041 }
case 111:
            var5 = _closure1_slot29;
            var5 = var5.id;
            var4 = var6 === var5;
case 38:
            if(!var4) { _fun0041_ip = 85; continue _fun0041 }
case 37:
            if(!(var3 == var2)) { _fun0041_ip = 133; continue _fun0041 }
case 14:
            var2 = {};
case 133:
            _closure1_slot40 = var2;
case 85:
            var1 = undefined;
            return var1;
        }
    };
    var4['GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL'] = var10;
    var10 = function handleGuildUpdateMetadata(arg1) {
        _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
            var1 = arg1;
            var12 = var1.guildId;
            var11 = var1.primaryCategoryId;
            var10 = var1.keywords;
            var9 = var1.emojiDiscoverabilityEnabled;
            var8 = var1.isPublished;
            var7 = var1.reasonsToJoin;
            var6 = var1.socialLinks;
            var4 = var1.about;
            var1 = _closure1_slot29;
            var3 = null;
            var1 = var3 != var1;
            if(!var1) { _fun0042_ip = 27; continue _fun0042 }
case 134:
            var5 = _closure1_slot29;
            var5 = var5.id;
            var1 = var12 === var5;
case 27:
            if(!var1) { _fun0042_ip = 135; continue _fun0042 }
case 107:
            var1 = {};
            var13 = _closure1_slot54;
            var14 = var1;
            var5 = copyDataProperties(var14, var13);
            if(!(var3 == var11)) { _fun0042_ip = 104; continue _fun0042 }
case 136:
            var5 = _closure1_slot54;
            var11 = var5.primaryCategoryId;
case 104:
            var5 = 'primaryCategoryId';
            var1[var5] = var11;
            if(!(var3 == var10)) { _fun0042_ip = 137; continue _fun0042 }
case 138:
            var5 = _closure1_slot54;
            var10 = var5.keywords;
case 137:
            var5 = 'keywords';
            var1[var5] = var10;
            if(!(var3 == var9)) { _fun0042_ip = 139; continue _fun0042 }
case 90:
            var5 = _closure1_slot54;
            var9 = var5.emojiDiscoverabilityEnabled;
case 139:
            var5 = 'emojiDiscoverabilityEnabled';
            var1[var5] = var9;
            if(!(var3 == var8)) { _fun0042_ip = 140; continue _fun0042 }
case 141:
            var5 = _closure1_slot54;
            var8 = var5.isPublished;
case 140:
            var5 = 'isPublished';
            var1[var5] = var8;
            if(!(var3 == var7)) { _fun0042_ip = 142; continue _fun0042 }
case 143:
            var5 = _closure1_slot54;
            var7 = var5.reasonsToJoin;
case 142:
            var5 = 'reasonsToJoin';
            var1[var5] = var7;
            if(!(var3 == var6)) { _fun0042_ip = 144; continue _fun0042 }
case 145:
            var5 = _closure1_slot54;
            var6 = var5.socialLinks;
case 144:
            var5 = 'socialLinks';
            var1[var5] = var6;
            if(!(var3 == var4)) { _fun0042_ip = 146; continue _fun0042 }
case 20:
            var3 = _closure1_slot54;
            var4 = var3.about;
case 146:
            var3 = 'about';
            var1[var3] = var4;
            _closure1_slot54 = var1;
case 135:
            var1 = undefined;
            return var1;
        }
    };
    var4['GUILD_UPDATE_DISCOVERY_METADATA'] = var10;
    var10 = function handleGuildUpdateMetadataFail(arg1) {
        _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
            var1 = arg1;
            var6 = var1.guildId;
            var2 = var1.errors;
            var4 = _closure1_slot29;
            var3 = null;
            var4 = var3 != var4;
            if(!var4) { _fun0043_ip = 38; continue _fun0043 }
case 111:
            var5 = _closure1_slot29;
            var5 = var5.id;
            var4 = var6 === var5;
case 38:
            if(!var4) { _fun0043_ip = 85; continue _fun0043 }
case 37:
            if(!(var3 == var2)) { _fun0043_ip = 133; continue _fun0043 }
case 14:
            var2 = {};
case 133:
            _closure1_slot40 = var2;
case 85:
            var1 = undefined;
            return var1;
        }
    };
    var4['GUILD_UPDATE_DISCOVERY_METADATA_FAIL'] = var10;
    var10 = function handleGuildDiscoverySlugFetchSuccess(arg1) {
        var1 = arg1;
        var2 = var1.slug;
        _closure1_slot34 = var2;
        var1 = undefined;
        return var1;
    };
    var4['GUILD_DISCOVERY_SLUG_FETCH_SUCCESS'] = var10;
    var10 = function handleGuildDiscoverySlugFetchFail(arg1) {
        _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
            var2 = arg1;
            var3 = null;
            if(!(var2 != var3)) { _fun0044_ip = 73; continue _fun0044 }
case 147:
            _closure1_slot34 = var3;
            var1 = undefined;
            return var1;
case 73:
            var4 = "Cannot destructure 'undefined' or 'null'.";
            var5 = var2;
            var1 = throwTypeError(var5, var4);
            var1 = undefined;
            throw var1;
        }
    };
    var4['GUILD_DISCOVERY_SLUG_FETCH_FAIL'] = var10;
    var5 = function handleWidgetUpdate(arg1) {
        _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
            var1 = arg1;
            var5 = var1.guildId;
            var3 = var1.enabled;
            var2 = var1.channelId;
            var6 = _closure1_slot29;
            var4 = null;
            if(!(var4 != var6)) { _fun0045_ip = 85; continue _fun0045 }
case 39:
            var4 = _closure1_slot29;
            var4 = var4.id;
            if(!(var4 === var5)) { _fun0045_ip = 85; continue _fun0045 }
case 148:
            _closure1_slot44 = var3;
            _closure1_slot46 = var2;
            var1 = undefined;
            return var1;
case 85:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_SETTINGS_WIDGET_UPDATE'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var22 = var5;
    var20 = var4;
    var4 = new var22[var9](var21, var20, var19);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 27;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_settings/GuildSettingsStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['EMPTY_METADATA'] = var2;
    return var1;
})();