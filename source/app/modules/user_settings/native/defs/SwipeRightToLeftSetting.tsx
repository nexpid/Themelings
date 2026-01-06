// app/modules/user_settings/native/defs/SwipeRightToLeftSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var7 = var1.Object;
    var4 = var7.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var7)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var8 = var2.MobileSetting;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var10 = var2.UserSettingsSections;
    var2 = 5;
    var2 = var6[var2];
    var7 = var5.bind(var1)(var2);
    var4 = var7.createRoute;
    var2 = {};
    var11 = function title() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 4;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.D/Dkcd;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['title'] = var11;
    var8 = var8.CHAT;
    var2['parent'] = var8;
    var8 = function useSwipeRightToLeftSettingTrailing() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var4 = 2;
            var4 = var1[var4];
            var6 = undefined;
            var4 = var3.bind(var6)(var4);
            var5 = var4.SwipeRightToLeftModeSetting;
            var4 = var5.useSetting;
            var4 = var4.bind(var5)();
            var5 = 3;
            var1 = var1[var5];
            var1 = var3.bind(var6)(var1);
            var1 = var1.SwipeRightToLeftMode;
            var1 = var1.SWIPE_RIGHT_TO_LEFT_REPLY;
            if(!(var4 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var5];
            var1 = var3.bind(var6)(var1);
            var1 = var1.SwipeRightToLeftMode;
            var3 = var1.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS;
            var1 = null;
            if(!(var4 === var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 4;
            var4 = var8[var3];
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.6eXLcJ;
            var1 = var4.bind(var5)(var3);
case 4:
            _fun0001_ip = 6; continue _fun0001;
case 2:
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 4;
            var3 = var7[var2];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.3tYNDS;
            var1 = var3.bind(var4)(var2);
case 6:
            return var1;
        }
    };
    var2['useTrailing'] = var8;
    var8 = {};
    var10 = var10.SWIPE_RIGHT_TO_LEFT;
    var8['route'] = var10;
    var9 = function getComponent() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var1 = var1.default;
        return var1;
    };
    var8['getComponent'] = var9;
    var2['screen'] = var8;
    var2 = var4.bind(var7)(var2);
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/defs/SwipeRightToLeftSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();