// app/modules/premium/gifting/utils/PremiumGiftingIntentUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var7 = var6[var1];
    var1 = undefined;
    var7 = var5.bind(var1)(var7);
    var7 = var7.GiftIntentType;
    var _closure1_slot0 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.AnalyticsLocations;
    var _closure1_slot1 = var7;
    var8 = var4.Set;
    var9 = var7.FRIEND_ANNIVERSARIES_CHAT;
    var4 = new Array(3);
    var4[0] = var9;
    var9 = var7.FRIEND_ANNIVERSARIES_ACTION_BUTTON;
    var4[1] = var9;
    var7 = var7.FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK;
    var4[2] = var7;
    var7 = var8.prototype;
    var7 = Object.create(var7, {constructor: {value: var8}});
    var13 = var7;
    var12 = var4;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/gifting/utils/PremiumGiftingIntentUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getPremiumGiftingIntentAnalyticsLocation(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = _closure1_slot0;
            var2 = var1.FRIEND_ANNIVERSARY;
            var1 = arg1;
            if(!(var1 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = {};
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var2 = {};
            var3 = _closure1_slot1;
            var4 = var3.FRIEND_ANNIVERSARIES_CHAT;
            var2['chat'] = var4;
            var4 = var3.FRIEND_ANNIVERSARIES_ACTION_BUTTON;
            var2['actionButton'] = var4;
            var3 = var3.FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK;
            var2['actionButtonCoachmark'] = var3;
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['getPremiumGiftingIntentAnalyticsLocation'] = var4;
    var4 = function isGiftingIntentLocation(arg1) {
        var3 = _closure1_slot2;
        var2 = var3.has;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['isGiftingIntentLocation'] = var4;
    var2 = function parseGiftIntentType(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = _closure1_slot0;
            var4 = var1.FRIEND_ANNIVERSARY;
            var3 = arg1;
            var1 = null;
            if(!(var3 === var4)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var2 = _closure1_slot0;
            var1 = var2.FRIEND_ANNIVERSARY;
case 5:
            return var1;
        }
    };
    var3['parseGiftIntentType'] = var2;
    return var1;
})();