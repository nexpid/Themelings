// app/modules/lurker_mode/LurkerPreviewAnalytics.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var1 = function getNumLurkedGuilds() {
        var2 = _closure1_slot2;
        var1 = var2.lurkingGuildIds;
        var1 = var1.bind(var2)();
        var1 = var1.length;
        return var1;
    };
    var _closure1_slot4 = var1;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/lurker_mode/LurkerPreviewAnalytics.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function trackLurkStarted(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var9 = arg2;
            var7 = arg3;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot3;
            var3 = var2.MOBILE_LURKER_PREVIEW_LURK_STARTED;
            var2 = {};
            var8 = arg1;
            var2['guild_id'] = var8;
            var6 = _closure1_slot4;
            var6 = var6.bind(var1)();
            var2['num_lurked_guilds'] = var6;
            var6 = null;
            var10 = var6 != var9;
            var8 = null;
            if(!var10) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = var9;
case 2:
            var2['join_source'] = var8;
            var8 = var6 != var7;
            var6 = null;
            if(!var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var7;
case 4:
            var2['location'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackLurkStarted'] = var4;
    var4 = function trackJoinClicked(arg1, arg2, arg3) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot3;
        var3 = var2.MOBILE_LURKER_PREVIEW_JOIN_CLICKED;
        var2 = {};
        var7 = arg1;
        var2['guild_id'] = var7;
        var6 = _closure1_slot4;
        var6 = var6.bind(var1)();
        var2['num_lurked_guilds'] = var6;
        var6 = arg2;
        var2['join_source'] = var6;
        var6 = arg3;
        var2['has_navigated_away'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackJoinClicked'] = var4;
    var4 = function trackLeavePromptLeaveClicked(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot3;
        var3 = var2.MOBILE_LURKER_PREVIEW_LEAVE_PROMPT_LEAVE_CLICKED;
        var2 = {};
        var7 = arg1;
        var2['guild_id'] = var7;
        var6 = _closure1_slot4;
        var6 = var6.bind(var1)();
        var2['num_lurked_guilds'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackLeavePromptLeaveClicked'] = var4;
    var4 = function trackGuildIconClicked(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot3;
        var3 = var2.MOBILE_LURKER_PREVIEW_GUILD_ICON_CLICKED;
        var2 = {};
        var7 = arg1;
        var2['guild_id'] = var7;
        var6 = _closure1_slot4;
        var6 = var6.bind(var1)();
        var2['num_lurked_guilds'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackGuildIconClicked'] = var4;
    var2 = function trackLongPressLeaveClicked(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot3;
        var3 = var2.MOBILE_LURKER_PREVIEW_LONG_PRESS_LEAVE_CLICKED;
        var2 = {};
        var7 = arg1;
        var2['guild_id'] = var7;
        var6 = _closure1_slot4;
        var6 = var6.bind(var1)();
        var2['num_lurked_guilds'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackLongPressLeaveClicked'] = var2;
    return var1;
})();