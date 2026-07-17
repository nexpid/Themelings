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
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 6;
                    var2 = var9[var7];
                    var5 = undefined;
                    var2 = var8.bind(var5)(var2);
                    var6 = var2.HTTP;
                    var4 = var6.get;
                    var2 = {};
                    var12 = _closure1_slot9;
                    var11 = var12.GUILD_TOP_GAMES;
                    var10 = arg1;
                    var10 = var11.bind(var12)(var10);
                    var2['url'] = var10;
                    var7 = var9[var7];
                    var8 = var8.bind(var5)(var7);
                    var7 = var8.rejectWithMigratedError;
                    var7 = var7.bind(var8)();
                    var2['rejectWithError'] = var7;
                    var2 = var4.bind(var6)(var2);
                    SaveGenerator(address=101);
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
            var16 = arg1;
            var4 = arg2;
            var1 = arguments[2];
            var _closure2_slot0 = var16;
            var12 = undefined;
            if(!(var1 === var12)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = {};
case 8:
            var9 = var1.respectBackoff;
            if(!(var9 === var12)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var9 = false;
case 10:
            var3 = null;
            if(!(var3 != var16)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var11 = _closure1_slot6;
            var1 = var11.getFetchStatus;
            var7 = var1.bind(var11)(var16);
            var1 = _closure1_slot7;
            var1 = var1.FETCHING;
            var2 = var11.getLastSyncTimestamp;
            var13 = var2.bind(var11)(var16);
            var2 = var11.getProfile;
            var5 = var2.bind(var11)(var16);
            var2 = global;
            var10 = var2.Date;
            var8 = var10.now;
            var10 = var8.bind(var10)();
            var15 = var3 != var13;
            var8 = 0;
            if(!var15) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var8 = var13;
case 14:
            var8 = var10 - var8;
            var10 = var11.getNextFetchAllowedAt;
            var10 = var10.bind(var11)(var16);
            if(!var9) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            if(!(var3 != var10)) { _fun0002_ip = 16; continue _fun0002 }
case 18:
            var11 = var2.Date;
            var9 = var11.now;
            var9 = var9.bind(var11)();
            if(!(!(var9 < var10))) { _fun0002_ip = 19; continue _fun0002 }
case 16:
            if(!(var7 === var1)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            if(var4) { _fun0002_ip = 20; continue _fun0002 }
case 22:
            var7 = var2.Promise;
            var1 = var7.resolve;
            var1 = var1.bind(var7)(var3);
            _fun0002_ip = 23; continue _fun0002;
case 20:
            if(!(var3 != var5)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var7 = 60000;
            if(!(!(var8 > var7))) { _fun0002_ip = 24; continue _fun0002 }
case 26:
            if(var4) { _fun0002_ip = 24; continue _fun0002 }
case 27:
            var7 = var2.Promise;
            var4 = var7.resolve;
            var4 = var4.bind(var7)(var5);
            _fun0002_ip = 28; continue _fun0002;
case 24:
            var8 = _closure1_slot1;
            var13 = _closure1_slot2;
            var7 = 5;
            var7 = var13[var7];
            var9 = var8.bind(var12)(var7);
            var8 = var9.dispatch;
            var7 = {};
            var10 = 'GUILD_PROFILE_FETCH';
            var7['type'] = var10;
            var7['guildId'] = var16;
            var7 = var8.bind(var9)(var7);
            var11 = _closure1_slot0;
            var10 = 6;
            var7 = var13[var10];
            var7 = var11.bind(var12)(var7);
            var9 = var7.HTTP;
            var8 = var9.get;
            var7 = {};
            var15 = _closure1_slot9;
            var14 = var15.GUILD_PROFILE;
            var14 = var14.bind(var15)(var16);
            var7['url'] = var14;
            var10 = var13[var10];
            var11 = var11.bind(var12)(var10);
            var10 = var11.rejectWithMigratedError;
            var10 = var10.bind(var11)();
            var7['rejectWithError'] = var10;
            var9 = var8.bind(var9)(var7);
            var8 = var9.then;
            var7 = function(arg1) {
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
            var8 = var8.bind(var9)(var7);
            var7 = var8.catch;
            var6 = function(arg1) {
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
            var4 = var7.bind(var8)(var6);
case 28:
            var1 = var4;
case 23:
            _fun0002_ip = 29; continue _fun0002;
case 19:
            var4 = var2.Promise;
            var2 = var4.resolve;
            var1 = var2.bind(var4)(var5);
case 29:
            return var1;
case 12:
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
            var12 = arg1;
            var11 = arg2;
            var _closure2_slot0 = var12;
            var3 = _closure1_slot6;
            var2 = var3.getIsUpdating;
            var2 = var2.bind(var3)(var12);
            if(var2) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 5;
            var2 = var8[var2];
            var7 = undefined;
            var4 = var3.bind(var7)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'GUILD_PROFILE_UPDATE';
            var2['type'] = var5;
            var2['guildId'] = var12;
            var2['updates'] = var11;
            var2 = var3.bind(var4)(var2);
            var6 = _closure1_slot0;
            var5 = 6;
            var2 = var8[var5];
            var2 = var6.bind(var7)(var2);
            var4 = var2.HTTP;
            var3 = var4.patch;
            var2 = {};
            var10 = _closure1_slot9;
            var9 = var10.GUILD_PROFILE;
            var9 = var9.bind(var10)(var12);
            var2['url'] = var9;
            var9 = 7;
            var9 = var8[var9];
            var10 = var6.bind(var7)(var9);
            var9 = var10.buildGuildProfileUpdateForServer;
            var9 = var9.bind(var10)(var11);
            var2['body'] = var9;
            var5 = var8[var5];
            var6 = var6.bind(var7)(var5);
            var5 = var6.rejectWithMigratedError;
            var5 = var5.bind(var6)();
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
            _fun0003_ip = 32; continue _fun0003;
case 30:
            var2 = global;
            var4 = var2.Promise;
            var3 = var4.resolve;
            var2 = null;
            var1 = var3.bind(var4)(var2);
case 32:
            return var1;
        }
    };
    var3['saveGuildProfile'] = var4;
    var4 = function setGuildProfileVisibility(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var12 = arg1;
            var10 = arg2;
            var _closure2_slot0 = var12;
            var3 = _closure1_slot6;
            var2 = var3.getIsUpdating;
            var2 = var2.bind(var3)(var12);
            if(var2) { _fun0004_ip = 33; continue _fun0004 }
case 31:
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 5;
            var2 = var8[var2];
            var7 = undefined;
            var4 = var3.bind(var7)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'GUILD_PROFILE_UPDATE_VISIBILITY';
            var2['type'] = var5;
            var2['guildId'] = var12;
            var2['visibility'] = var10;
            var2 = var3.bind(var4)(var2);
            var6 = _closure1_slot0;
            var5 = 6;
            var2 = var8[var5];
            var2 = var6.bind(var7)(var2);
            var4 = var2.HTTP;
            var3 = var4.put;
            var2 = {};
            var11 = _closure1_slot9;
            var9 = var11.GUILD_PROFILE_VISIBILITY;
            var9 = var9.bind(var11)(var12);
            var2['url'] = var9;
            var9 = {};
            var9['visibility'] = var10;
            var2['body'] = var9;
            var5 = var8[var5];
            var6 = var6.bind(var7)(var5);
            var5 = var6.rejectWithMigratedError;
            var5 = var5.bind(var6)();
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
            _fun0004_ip = 34; continue _fun0004;
case 33:
            var2 = global;
            var4 = var2.Promise;
            var3 = var4.resolve;
            var2 = null;
            var1 = var3.bind(var4)(var2);
case 34:
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