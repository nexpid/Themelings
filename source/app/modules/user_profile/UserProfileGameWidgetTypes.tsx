// app/modules/user_profile/UserProfileGameWidgetTypes.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var8[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var8[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var5 = var8[var2];
    var5 = var7.bind(var1)(var5);
    var5 = var5.WidgetType;
    var6 = var5.CURRENT_GAMES;
    var5 = new Array(4);
    var5[0] = var6;
    var6 = var8[var2];
    var6 = var7.bind(var1)(var6);
    var6 = var6.WidgetType;
    var6 = var6.FAVORITE_GAMES;
    var5[1] = var6;
    var6 = var8[var2];
    var6 = var7.bind(var1)(var6);
    var6 = var6.WidgetType;
    var6 = var6.WANT_TO_PLAY_GAMES;
    var5[2] = var6;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.WidgetType;
    var2 = var2.PLAYED_GAMES;
    var5[3] = var2;
    var _closure1_slot4 = var5;
    var2 = function() {
        var4 = function BaseGameWidget(arg1) {
            var1 = arg1;
            var3 = this;
            var5 = var1.id;
            var4 = var1.type;
            var2 = var1.games;
            var7 = _closure1_slot2;
            var6 = _closure2_slot0;
            var1 = undefined;
            var6 = var7.bind(var1)(var3, var6);
            var3['id'] = var5;
            var3['type'] = var4;
            var3['games'] = var2;
            return var1;
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot3;
        var1 = {};
        var2 = 'toSubmission';
        var1['key'] = var2;
        var2 = function value() {
            var3 = this;
            var1 = {};
            var2 = var3.id;
            var1['id'] = var2;
            var2 = {};
            var4 = var3.type;
            var2['type'] = var4;
            var5 = var3.games;
            var4 = var5.map;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var3 = var2.applicationId;
                var1['game_id'] = var3;
                var3 = var2.comment;
                var1['comment'] = var3;
                var2 = var2.tags;
                var1['tags'] = var2;
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            var2['games'] = var3;
            var1['data'] = var2;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(3);
        var2[0] = var1;
        var1 = {};
        var6 = 'isSaveable';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.games;
            var2 = var1.length;
            var1 = 0;
            var1 = var2 > var1;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'isEqual';
        var1['key'] = var6;
        var5 = function value(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var4 = arg1;
                var3 = this;
                var1 = _closure2_slot0;
                var1 = var4 instanceof var1;
                if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = var4.type;
                var2 = var3.type;
                var2 = var5 === var2;
                if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var5 = 3;
                var6 = var6[var5];
                var5 = undefined;
                var7 = var7.bind(var5)(var6);
                var6 = var7.areWidgetGamesEqual;
                var5 = var3.games;
                var4 = var4.games;
                var3 = var3.type;
                var2 = var6.bind(var7)(var5, var4, var3);
case 4:
                var1 = var2;
case 2:
                return var1;
            }
        };
        var1['value'] = var5;
        var2[2] = var1;
        var1 = undefined;
        var1 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var6 = 4;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/user_profile/UserProfileGameWidgetTypes.tsx';
    var6 = var7.bind(var8)(var6);
    var3['GAME_WIDGET_TYPES'] = var5;
    var4 = function isGameWidget(arg1) {
        var3 = _closure1_slot4;
        var2 = var3.includes;
        var1 = arg1;
        var1 = var1.type;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['isGameWidget'] = var4;
    var3['BaseGameWidget'] = var2;
    return var1;
})();