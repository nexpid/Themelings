// app/modules/guild_profile/GuildProfileActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function _fetchGuildTopGames() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 6;
                    var2 = var5[var2];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var6 = var2.HTTP;
                    var4 = var6.get;
                    var2 = {};
                    var9 = _closure1_slot9;
                    var8 = var9.GUILD_TOP_GAMES;
                    var7 = arg1;
                    var7 = var8.bind(var9)(var7);
                    var2['url'] = var7;
                    var7 = false;
                    var2['rejectWithError'] = var7;
                    var2 = var4.bind(var6)(var2);
                    SaveGenerator(address=84);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 7;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.buildTopGamesFromServer;
                    var3 = var2.body;
                    var3 = var3.top_games;
                    var3 = var4.bind(var5)(var3);
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot10 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var7 = var6[var4];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildProfileFetchStatus;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot8 = var7;
    var4 = var4.Endpoints;
    var _closure1_slot9 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_profile/GuildProfileActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getGuildProfile(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var10 = arg1;
            var5 = arg2;
            var _closure2_slot0 = var10;
            var3 = null;
            if(!(var3 != var10)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var6 = _closure1_slot6;
            var1 = var6.getFetchStatus;
            var7 = var1.bind(var6)(var10);
            var1 = _closure1_slot7;
            var1 = var1.FETCHING;
            var2 = var6.getLastSyncTimestamp;
            var12 = var2.bind(var6)(var10);
            var2 = var6.getProfile;
            var6 = var2.bind(var6)(var10);
            var2 = global;
            var11 = var2.Date;
            var9 = var11.now;
            var11 = var9.bind(var11)();
            var13 = var3 != var12;
            var9 = 0;
            if(!var13) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var9 = var12;
case 10:
            var9 = var11 - var9;
            if(!(var7 === var1)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            if(var5) { _fun0002_ip = 12; continue _fun0002 }
case 14:
            var7 = var2.Promise;
            var1 = var7.resolve;
            var1 = var1.bind(var7)(var3);
            _fun0002_ip = 15; continue _fun0002;
case 12:
            if(!(var3 != var6)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var7 = 60000;
            if(!(!(var9 > var7))) { _fun0002_ip = 16; continue _fun0002 }
case 18:
            if(var5) { _fun0002_ip = 16; continue _fun0002 }
case 19:
            var5 = var2.Promise;
            var2 = var5.resolve;
            var2 = var2.bind(var5)(var6);
            _fun0002_ip = 20; continue _fun0002;
case 16:
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var5 = 5;
            var5 = var9[var5];
            var7 = undefined;
            var11 = var6.bind(var7)(var5);
            var6 = var11.dispatch;
            var5 = {};
            var12 = 'GUILD_PROFILE_FETCH';
            var5['type'] = var12;
            var5['guildId'] = var10;
            var5 = var6.bind(var11)(var5);
            var6 = _closure1_slot0;
            var5 = 6;
            var5 = var9[var5];
            var5 = var6.bind(var7)(var5);
            var7 = var5.HTTP;
            var6 = var7.get;
            var5 = {};
            var9 = _closure1_slot9;
            var8 = var9.GUILD_PROFILE;
            var8 = var8.bind(var9)(var10);
            var5['url'] = var8;
            var8 = false;
            var5['rejectWithError'] = var8;
            var7 = var6.bind(var7)(var5);
            var6 = var7.then;
            var5 = function(arg1) {
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 7;
                var1 = var5[var1];
                var4 = undefined;
                var6 = var3.bind(var4)(var1);
                var3 = var6.buildGuildProfileFromServer;
                var1 = arg1;
                var1 = var1.body;
                var1 = var3.bind(var6)(var1);
                var3 = _closure1_slot1;
                var2 = 5;
                var2 = var5[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'GUILD_PROFILE_FETCH_SUCCESS';
                var2['type'] = var5;
                var5 = _closure2_slot0;
                var2['guildId'] = var5;
                var2['profile'] = var1;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var6 = var6.bind(var7)(var5);
            var5 = var6.catch;
            var4 = function(arg1) {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 8;
                var2 = var5[var2];
                var3 = undefined;
                var2 = var4.bind(var3)(var2);
                var6 = var2.APIError;
                var2 = var6.prototype;
                var4 = Object.create(var2, {constructor: {value: var6}});
                var7 = arg1;
                var8 = var4;
                var2 = new var8[var6](var7, var6);
                var4 = var2 instanceof Object ? var2 : var4;
                var2 = _closure1_slot1;
                var1 = 5;
                var1 = var5[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'GUILD_PROFILE_FETCH_FAILURE';
                var1['type'] = var5;
                var5 = _closure2_slot0;
                var1['guildId'] = var5;
                var1['error'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = null;
                return var1;
            };
            var2 = var5.bind(var6)(var4);
case 20:
            var1 = var2;
case 15:
            return var1;
case 8:
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.resolve;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var3['getGuildProfile'] = var4;
    var4 = function saveGuildProfile(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var11 = arg1;
            var7 = arg2;
            var _closure2_slot0 = var11;
            var3 = _closure1_slot6;
            var2 = var3.getIsUpdating;
            var2 = var2.bind(var3)(var11);
            if(var2) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 5;
            var2 = var9[var2];
            var8 = undefined;
            var4 = var3.bind(var8)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'GUILD_PROFILE_UPDATE';
            var2['type'] = var6;
            var2['guildId'] = var11;
            var2['updates'] = var7;
            var2 = var3.bind(var4)(var2);
            var6 = _closure1_slot0;
            var2 = 6;
            var2 = var9[var2];
            var2 = var6.bind(var8)(var2);
            var4 = var2.HTTP;
            var3 = var4.patch;
            var2 = {};
            var10 = _closure1_slot9;
            var5 = var10.GUILD_PROFILE;
            var5 = var5.bind(var10)(var11);
            var2['url'] = var5;
            var5 = 7;
            var5 = var9[var5];
            var6 = var6.bind(var8)(var5);
            var5 = var6.buildGuildProfileUpdateForServer;
            var5 = var5.bind(var6)(var7);
            var2['body'] = var5;
            var5 = false;
            var2['rejectWithError'] = var5;
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function(arg1) {
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 7;
                var1 = var5[var1];
                var4 = undefined;
                var6 = var3.bind(var4)(var1);
                var3 = var6.buildGuildProfileFromServer;
                var1 = arg1;
                var1 = var1.body;
                var1 = var3.bind(var6)(var1);
                var3 = _closure1_slot1;
                var2 = 5;
                var2 = var5[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'GUILD_PROFILE_UPDATE_SUCCESS';
                var2['type'] = var5;
                var5 = _closure2_slot0;
                var2['guildId'] = var5;
                var2['profile'] = var1;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.catch;
            var1 = function(arg1) {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 8;
                var2 = var5[var2];
                var3 = undefined;
                var2 = var4.bind(var3)(var2);
                var6 = var2.APIError;
                var2 = var6.prototype;
                var4 = Object.create(var2, {constructor: {value: var6}});
                var7 = arg1;
                var8 = var4;
                var2 = new var8[var6](var7, var6);
                var4 = var2 instanceof Object ? var2 : var4;
                var2 = _closure1_slot1;
                var1 = 5;
                var1 = var5[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'GUILD_PROFILE_UPDATE_FAILURE';
                var1['type'] = var5;
                var5 = _closure2_slot0;
                var1['guildId'] = var5;
                var1['error'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = null;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            _fun0003_ip = 23; continue _fun0003;
case 21:
            var2 = global;
            var4 = var2.Promise;
            var3 = var4.resolve;
            var2 = null;
            var1 = var3.bind(var4)(var2);
case 23:
            return var1;
        }
    };
    var3['saveGuildProfile'] = var4;
    var4 = function setGuildProfileVisibility(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var8 = arg1;
            var6 = arg2;
            var _closure2_slot0 = var8;
            var3 = _closure1_slot6;
            var2 = var3.getIsUpdating;
            var2 = var2.bind(var3)(var8);
            if(var2) { _fun0004_ip = 24; continue _fun0004 }
case 22:
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 5;
            var2 = var7[var2];
            var4 = undefined;
            var9 = var3.bind(var4)(var2);
            var3 = var9.dispatch;
            var2 = {};
            var10 = 'GUILD_PROFILE_UPDATE_VISIBILITY';
            var2['type'] = var10;
            var2['guildId'] = var8;
            var2['visibility'] = var6;
            var2 = var3.bind(var9)(var2);
            var3 = _closure1_slot0;
            var2 = 6;
            var2 = var7[var2];
            var2 = var3.bind(var4)(var2);
            var4 = var2.HTTP;
            var3 = var4.put;
            var2 = {};
            var7 = _closure1_slot9;
            var5 = var7.GUILD_PROFILE_VISIBILITY;
            var5 = var5.bind(var7)(var8);
            var2['url'] = var5;
            var5 = {};
            var5['visibility'] = var6;
            var2['body'] = var5;
            var5 = false;
            var2['rejectWithError'] = var5;
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.body;
                var1 = var1.visibility;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 5;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS';
                var2['type'] = var5;
                var5 = _closure2_slot0;
                var2['guildId'] = var5;
                var2['visibility'] = var1;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.catch;
            var1 = function(arg1) {
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 8;
                var1 = var5[var1];
                var4 = undefined;
                var1 = var3.bind(var4)(var1);
                var6 = var1.APIError;
                var1 = var6.prototype;
                var3 = Object.create(var1, {constructor: {value: var6}});
                var7 = arg1;
                var8 = var3;
                var1 = new var8[var6](var7, var6);
                var1 = var1 instanceof Object ? var1 : var3;
                var3 = _closure1_slot1;
                var2 = 5;
                var2 = var5[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE';
                var2['type'] = var5;
                var5 = _closure2_slot0;
                var2['guildId'] = var5;
                var2['error'] = var1;
                var2 = var3.bind(var4)(var2);
                throw var1;
            };
            var1 = var2.bind(var3)(var1);
            _fun0004_ip = 25; continue _fun0004;
case 24:
            var2 = global;
            var4 = var2.Promise;
            var3 = var4.resolve;
            var2 = null;
            var1 = var3.bind(var4)(var2);
case 25:
            return var1;
        }
    };
    var3['setGuildProfileVisibility'] = var4;
    var4 = function fetchGuildTopGames() {
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchGuildTopGames'] = var4;
    var2 = function trackGuildProfileViewed(arg1, arg2) {
        var8 = arg1;
        var3 = _closure1_slot5;
        var1 = var3.getSelfMember;
        var1 = var1.bind(var3)(var8);
        var3 = null;
        var7 = var3 != var1;
        var4 = _closure1_slot4;
        var1 = var4.getRequest;
        var1 = var1.bind(var4)(var8);
        var6 = var3 != var1;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 9;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.track;
        var2 = _closure1_slot8;
        var3 = var2.GUILD_PROFILE_VIEWED;
        var2 = {};
        var2['guild_id'] = var8;
        var8 = arg2;
        var2['location_stack'] = var8;
        var2['is_member'] = var7;
        var2['has_join_request'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackGuildProfileViewed'] = var2;
    return var1;
})();