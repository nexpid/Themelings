// app/modules/game_community_upsell/native/MobileGameCommunitiesActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_community_upsell/native/MobileGameCommunitiesActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function fetchMobileGameCommunities(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var9 = arg1;
            var8 = arguments[1];
            var _closure2_slot0 = var9;
            var7 = undefined;
            if(!(var8 === var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = new Array(0);
case 2:
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 1;
            var2 = var10[var2];
            var2 = var3.bind(var7)(var2);
            var4 = var2.HTTP;
            var3 = var4.get;
            var2 = {};
            var6 = _closure1_slot3;
            var6 = var6.MOBILE_GAME_COMMUNITIES;
            var2['url'] = var6;
            var6 = _closure1_slot1;
            var5 = 2;
            var5 = var10[var5];
            var7 = var6.bind(var7)(var5);
            var6 = var7.stringify;
            var5 = {};
            var5['game_ids'] = var9;
            var9 = 20;
            var5['limit'] = var9;
            var5['ignored_guild_ids'] = var8;
            var5 = var6.bind(var7)(var5);
            var2['query'] = var5;
            var5 = true;
            var2['oldFormErrors'] = var5;
            var2['rejectWithError'] = var5;
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.body;
                var5 = var1.guilds;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var6 = 'MOBILE_GAME_COMMUNITIES_FETCH_SUCCESS';
                var2['type'] = var6;
                var2['guilds'] = var5;
                var5 = _closure2_slot0;
                var2['gameIds'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'MOBILE_GAME_COMMUNITIES_FETCH_FAILURE';
                var2['type'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['fetchMobileGameCommunities'] = var4;
    var2 = function dismissGuild(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'MOBILE_GAME_COMMUNITIES_DISMISS_GUILD';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['dismissGuild'] = var2;
    return var1;
})();