// app/modules/premium/gifting/PremiumGiftingIntentActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/gifting/PremiumGiftingIntentActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function fetchAndReconcileGiftIntentDismissals(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot3;
        var2 = var3.getId;
        var2 = var2.bind(var3)();
        var _closure2_slot1 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var4 = var2.HTTP;
        var3 = var4.get;
        var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
        var5 = _closure1_slot4;
        var5 = var5.GIFT_INTENT_DISMISSALS;
        var2['url'] = var5;
        var4 = var3.bind(var4)(var2);
        var3 = var4.then;
        var2 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure1_slot3;
                var2 = var3.getId;
                var3 = var2.bind(var3)();
                var2 = _closure2_slot1;
                if(!(var3 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 3;
                var3 = var3[var2];
                var2 = undefined;
                var5 = var5.bind(var2)(var3);
                var3 = var5.dispatch;
                var2 = {};
                var6 = 'GIFT_INTENT_DISMISSALS_FETCH_FAILURE';
                var2['type'] = var6;
                var2 = var3.bind(var5)(var2);
                _fun0001_ip = 4; continue _fun0001;
case 2:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'GIFT_INTENT_DISMISSALS_FETCH_SUCCESS';
                var1['type'] = var5;
                var5 = arg1;
                var5 = var5.body;
                var7 = var5.dismissals;
                var5 = null;
                if(!(var5 == var7)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
                var7 = new Array(0);
case 5:
                var6 = var7.map;
                var5 = function(arg1) {
                    var2 = arg1;
                    var1 = {};
                    var3 = var2.target_id;
                    var1['targetId'] = var3;
                    var3 = global;
                    var4 = var3.Number;
                    var3 = var2.dismissed_at_ms;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1['dismissedAtMs'] = var2;
                    return var1;
                };
                var5 = var6.bind(var7)(var5);
                var1['dismissals'] = var5;
                var4 = _closure2_slot0;
                var1['settingsTimestampMs'] = var4;
                var1 = var2.bind(var3)(var1);
case 4:
                var1 = undefined;
                return var1;
            }
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
            var5 = 'GIFT_INTENT_DISMISSALS_FETCH_FAILURE';
            var2['type'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['fetchAndReconcileGiftIntentDismissals'] = var4;
    var4 = function logFriendsListGiftIntentsShown() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'FRIENDS_LIST_GIFT_INTENTS_SHOWN';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['logFriendsListGiftIntentsShown'] = var4;
    var4 = function logMessageGiftIntentShown(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'MESSAGE_GIFT_INTENT_SHOWN';
        var2['type'] = var5;
        var5 = arg1;
        var2['recipientUserId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['logMessageGiftIntentShown'] = var4;
    var4 = function logGiftIntentFlowPurchasedGift(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GIFT_INTENT_FLOW_PURCHASED_GIFT';
        var2['type'] = var5;
        var5 = arg1;
        var2['recipientUserId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['logGiftIntentFlowPurchasedGift'] = var4;
    var4 = function logGiftIntentUnreadNotificationDismiss() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GIFT_UNREAD_NOTIFICATION_DISMISS';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['logGiftIntentUnreadNotificationDismiss'] = var4;
    var2 = function logProfilePopoutGiftIntentsDismiss(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'PROFILE_POPOUT_GIFT_INTENTS_DISMISS';
        var2['type'] = var5;
        var5 = arg1;
        var2['recipientUserId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['logProfilePopoutGiftIntentsDismiss'] = var2;
    return var1;
})();