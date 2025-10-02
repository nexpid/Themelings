// app/utils/UserSettingsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var8;
    var1 = global;
    var10 = var1.Object;
    var6 = var10.defineProperty;
    var4 = {};
    var9 = true;
    var4['value'] = var9;
    var1 = '__esModule';
    var1 = var6.bind(var10)(var3, var1, var4);
    var11 = 0;
    var4 = var8[var11];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var10 = 1;
    var4 = var8[var10];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var6 = 2;
    var4 = var8[var6];
    var4 = var7.bind(var1)(var4);
    var5 = var4.REQUEST_DATA_LIMIT_DAYS;
    var12 = var4.AnalyticEvents;
    var _closure1_slot5 = var12;
    var12 = var4.FriendSourceFlags;
    var _closure1_slot6 = var12;
    var4 = var4.AllFriendSourceFlags;
    var _closure1_slot7 = var4;
    var4 = 86400000;
    var4 = var4 * var5;
    var _closure1_slot8 = var4;
    var5 = {};
    var5['UNDECIDED'] = var11;
    var4 = 'UNDECIDED';
    var5[var11] = var4;
    var5['OPTIN'] = var10;
    var4 = 'OPTIN';
    var5[var10] = var4;
    var5['OPTOUT'] = var6;
    var4 = 'OPTOUT';
    var5[var6] = var4;
    var _closure1_slot9 = var5;
    var4 = {};
    var6 = var5.UNDECIDED;
    var4[var6] = var1;
    var6 = var5.OPTIN;
    var4[var6] = var9;
    var9 = var5.OPTOUT;
    var6 = false;
    var4[var9] = var6;
    var6 = 6;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'utils/UserSettingsUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function getSanitizedRestrictedGuilds() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 3;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var3 = var2.RestrictedGuildIds;
            var2 = var3.getSetting;
            var4 = var2.bind(var3)();
            var1 = _closure1_slot3;
            var2 = var1.totalUnavailableGuilds;
            var1 = 0;
            var3 = var4;
            if(!(var1 === var2)) { _fun0001_ip = 77; continue _fun0001 }
 60:
            var2 = var4.filter;
            var1 = function(arg1) {
                var3 = _closure1_slot4;
                var2 = var3.getGuild;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var3 = var2.bind(var4)(var1);
 77:
            var1 = global;
            var1 = var1.Set;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var6 = var2;
            var5 = var3;
            var1 = new var6[var1](var5, var4);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        }
    };
    var3['getSanitizedRestrictedGuilds'] = var6;
    var6 = function getSanitizedMessageRequestRestrictedGuilds() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 3;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var3 = var2.MessageRequestRestrictedGuildIds;
            var2 = var3.getSetting;
            var4 = var2.bind(var3)();
            var1 = _closure1_slot3;
            var2 = var1.totalUnavailableGuilds;
            var1 = 0;
            var3 = var4;
            if(!(var1 === var2)) { _fun0002_ip = 77; continue _fun0002 }
 60:
            var2 = var4.filter;
            var1 = function(arg1) {
                var3 = _closure1_slot4;
                var2 = var3.getGuild;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var3 = var2.bind(var4)(var1);
 77:
            var1 = global;
            var1 = var1.Set;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var6 = var2;
            var5 = var3;
            var1 = new var6[var1](var5, var4);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        }
    };
    var3['getSanitizedMessageRequestRestrictedGuilds'] = var6;
    var6 = function getSanitizedActivityRestrictedGuilds() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 3;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var3 = var2.ActivityRestrictedGuilds;
            var2 = var3.getSetting;
            var4 = var2.bind(var3)();
            var1 = _closure1_slot3;
            var2 = var1.totalUnavailableGuilds;
            var1 = 0;
            var3 = var4;
            if(!(var1 === var2)) { _fun0003_ip = 77; continue _fun0003 }
 60:
            var2 = var4.filter;
            var1 = function(arg1) {
                var3 = _closure1_slot4;
                var2 = var3.getGuild;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var3 = var2.bind(var4)(var1);
 77:
            var1 = global;
            var1 = var1.Set;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var6 = var2;
            var5 = var3;
            var1 = new var6[var1](var5, var4);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        }
    };
    var3['getSanitizedActivityRestrictedGuilds'] = var6;
    var6 = function getSanitizedActivityJoiningRestrictedGuilds() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 3;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var3 = var2.ActivityJoiningRestrictedGuilds;
            var2 = var3.getSetting;
            var4 = var2.bind(var3)();
            var1 = _closure1_slot3;
            var2 = var1.totalUnavailableGuilds;
            var1 = 0;
            var3 = var4;
            if(!(var1 === var2)) { _fun0004_ip = 77; continue _fun0004 }
 60:
            var2 = var4.filter;
            var1 = function(arg1) {
                var3 = _closure1_slot4;
                var2 = var3.getGuild;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var3 = var2.bind(var4)(var1);
 77:
            var1 = global;
            var1 = var1.Set;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var6 = var2;
            var5 = var3;
            var1 = new var6[var1](var5, var4);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        }
    };
    var3['getSanitizedActivityJoiningRestrictedGuilds'] = var6;
    var6 = function computeFlags(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var4 = arg1;
            var3 = _closure1_slot7;
            var1 = var4 & var3;
            if(!(var1 !== var3)) { _fun0005_ip = 83; continue _fun0005 }
 18:
            var1 = {};
            var3 = false;
            var1['all'] = var3;
            var2 = _closure1_slot6;
            var3 = var2.MUTUAL_FRIENDS;
            var5 = var4 & var3;
            var3 = var2.MUTUAL_FRIENDS;
            var3 = var5 === var3;
            var1['mutualFriends'] = var3;
            var3 = var2.MUTUAL_GUILDS;
            var3 = var4 & var3;
            var2 = var2.MUTUAL_GUILDS;
            var2 = var3 === var2;
            var1['mutualGuilds'] = var2;
            _fun0005_ip = 97; continue _fun0005;
 83:
            var1 = {'all': true, 'mutualFriends': true, 'mutualGuilds': true};
 97:
            return var1;
        }
    };
    var3['computeFlags'] = var6;
    var6 = function harvestDisabled(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = arg1;
            var3 = arg2;
            var1 = var3.verified;
            var1 = !var1;
            if(var1) { _fun0006_ip = 126; continue _fun0006 }
 18:
            var2 = var3.isStaff;
            var2 = var2.bind(var3)();
            var3 = !var2;
            var2 = !var3;
            if(!var3) { _fun0006_ip = 123; continue _fun0006 }
 37:
            var3 = null;
            var3 = var3 != var4;
            if(!var3) { _fun0006_ip = 120; continue _fun0006 }
 46:
            var5 = _closure1_slot8;
            var7 = global;
            var8 = var7.Date;
            var6 = var8.now;
            var6 = var6.bind(var8)();
            var8 = var7.Date;
            var9 = var4.created_at;
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var10 = var7;
            var4 = new var10[var8](var9, var8);
            var7 = var4 instanceof Object ? var4 : var7;
            var4 = var7.getTime;
            var4 = var4.bind(var7)();
            var4 = var6 - var4;
            var3 = var5 > var4;
 120:
            var2 = var3;
 123:
            var1 = var2;
 126:
            return var1;
        }
    };
    var3['harvestDisabled'] = var6;
    var6 = function trackUserSettingsPaneViewed(arg1) {
        var1 = arg1;
        var10 = var1.destinationPane;
        var11 = var1.originPane;
        var8 = var1.source;
        var7 = var1.subsection;
        var9 = var1.locationStack;
        var6 = var1.applicationId;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 4;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.trackWithMetadata;
        var2 = _closure1_slot5;
        var3 = var2.SETTINGS_PANE_VIEWED;
        var2 = {};
        var12 = 'user';
        var2['settings_type'] = var12;
        var2['origin_pane'] = var11;
        var2['destination_pane'] = var10;
        var2['location_stack'] = var9;
        var2['source'] = var8;
        var2['subsection'] = var7;
        var2['application_id'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackUserSettingsPaneViewed'] = var6;
    var3['NonSpamRetrainingOptInOptions'] = var5;
    var3['NonSpamRetrainingOptInOptionsToValue'] = var4;
    var2 = function generateNonSpamRetrainingOptInSettingOptions() {
        var2 = {};
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var4 = 5;
        var3 = var9[var4];
        var7 = undefined;
        var3 = var8.bind(var7)(var3);
        var6 = var3.intl;
        var5 = var6.string;
        var3 = var9[var4];
        var3 = var8.bind(var7)(var3);
        var3 = var3.t;
        var3 = var3./yLMRU;
        var3 = var5.bind(var6)(var3);
        var2['name'] = var3;
        var3 = var9[var4];
        var3 = var8.bind(var7)(var3);
        var6 = var3.intl;
        var5 = var6.string;
        var3 = var9[var4];
        var3 = var8.bind(var7)(var3);
        var3 = var3.t;
        var3 = var3.3fzkPj;
        var3 = var5.bind(var6)(var3);
        var2['desc'] = var3;
        var3 = _closure1_slot9;
        var1 = var3.OPTIN;
        var2['value'] = var1;
        var1 = new Array(3);
        var1[0] = var2;
        var2 = {};
        var5 = var9[var4];
        var5 = var8.bind(var7)(var5);
        var10 = var5.intl;
        var6 = var10.string;
        var5 = var9[var4];
        var5 = var8.bind(var7)(var5);
        var5 = var5.t;
        var5 = var5.21fP2d;
        var5 = var6.bind(var10)(var5);
        var2['name'] = var5;
        var5 = var9[var4];
        var5 = var8.bind(var7)(var5);
        var10 = var5.intl;
        var6 = var10.string;
        var5 = var9[var4];
        var5 = var8.bind(var7)(var5);
        var5 = var5.t;
        var5 = var5.ggJ9jY;
        var5 = var6.bind(var10)(var5);
        var2['desc'] = var5;
        var5 = var3.OPTOUT;
        var2['value'] = var5;
        var1[1] = var2;
        var2 = {};
        var5 = var9[var4];
        var5 = var8.bind(var7)(var5);
        var10 = var5.intl;
        var6 = var10.string;
        var5 = var9[var4];
        var5 = var8.bind(var7)(var5);
        var5 = var5.t;
        var5 = var5.OWIo8/;
        var5 = var6.bind(var10)(var5);
        var2['name'] = var5;
        var5 = var9[var4];
        var5 = var8.bind(var7)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var9[var4];
        var4 = var8.bind(var7)(var4);
        var4 = var4.t;
        var4 = var4.HqYXp6;
        var4 = var5.bind(var6)(var4);
        var2['desc'] = var4;
        var3 = var3.UNDECIDED;
        var2['value'] = var3;
        var1[2] = var2;
        return var1;
    };
    var3['generateNonSpamRetrainingOptInSettingOptions'] = var2;
    return var1;
})();