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
    var9 = var7.GiftIntentType;
    var _closure1_slot0 = var9;
    var7 = 1;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.AnalyticsLocations;
    var _closure1_slot1 = var7;
    var8 = var4.Map;
    var4 = var7.FRIEND_ANNIVERSARIES_CHAT;
    var10 = new Array(2);
    var10[0] = var4;
    var4 = var9.FRIEND_ANNIVERSARY;
    var10[1] = var4;
    var4 = new Array(3);
    var4[0] = var10;
    var11 = var7.FRIEND_ANNIVERSARIES_ACTION_BUTTON;
    var10 = new Array(2);
    var10[0] = var11;
    var11 = var9.FRIEND_ANNIVERSARY;
    var10[1] = var11;
    var4[1] = var10;
    var10 = var7.FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK;
    var7 = new Array(2);
    var7[0] = var10;
    var9 = var9.FRIEND_ANNIVERSARY;
    var7[1] = var9;
    var4[2] = var7;
    var7 = var8.prototype;
    var7 = Object.create(var7, {constructor: {value: var8}});
    var15 = var7;
    var14 = var4;
    var4 = new var15[var8](var14, var13);
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
    var4 = function getGiftIntentTypeForLocation(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot2;
            var2 = var3.get;
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var3 = var1 != var2;
            if(!var3) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var1 = var2;
case 5:
            return var1;
        }
    };
    var3['getGiftIntentTypeForLocation'] = var4;
    var2 = function parseGiftIntentType(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var5 = 'number';
            var3 = typeof var2;
            var1 = null;
            if(!(var5 === var3)) { _fun0003_ip = 7; continue _fun0003 }
case 8:
            var5 = _closure1_slot0;
            var5 = var2 in var5;
            var1 = null;
            if(!var5) { _fun0003_ip = 7; continue _fun0003 }
case 5:
            var3 = _closure1_slot0;
            var3 = var3.UNSPECIFIED;
            var1 = null;
            if(!(var2 !== var3)) { _fun0003_ip = 7; continue _fun0003 }
case 9:
            var1 = var2;
case 7:
            return var1;
        }
    };
    var3['parseGiftIntentType'] = var2;
    return var1;
})();