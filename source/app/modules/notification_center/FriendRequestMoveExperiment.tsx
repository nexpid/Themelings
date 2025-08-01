// app/modules/notification_center/FriendRequestMoveExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var7[var4];
    var8 = var6.bind(var1)(var4);
    var5 = var8.createExperiment;
    var4 = {'kind': 'user', 'id': '2024-11_mobile_friend_request_move', 'label': 'Moves friend requests from notification center to messages'};
    var9 = {'showInDMs': false, 'removeBadgeAfterAck': false, 'removeItemAfterAck': false};
    var4['defaultConfig'] = var9;
    var10 = {'id': 1, 'label': 'shows friend requests in dms with perma badge'};
    var9 = {'showInDMs': true, 'removeBadgeAfterAck': false, 'removeItemAfterAck': false};
    var10['config'] = var9;
    var9 = new Array(3);
    var9[0] = var10;
    var10 = {'id': 2, 'label': 'shows friend requests in dms and dismissible badge'};
    var11 = {'showInDMs': true, 'removeBadgeAfterAck': true, 'removeItemAfterAck': false};
    var10['config'] = var11;
    var9[1] = var10;
    var10 = {'id': 3, 'label': 'shows friend requests in dms and removes item after ack'};
    var11 = {'showInDMs': true, 'removeBadgeAfterAck': true, 'removeItemAfterAck': true};
    var10['config'] = var11;
    var9[2] = var10;
    var4['treatments'] = var9;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/notification_center/FriendRequestMoveExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function useNumFriendRequestsForBadging(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = _closure1_slot4;
            var3 = var4.useExperiment;
            var2 = {};
            var5 = arg1;
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var3 = var2.showInDMs;
            var2 = var2.removeBadgeAfterAck;
            var _closure2_slot0 = var2;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 3;
            var4 = var4[var2];
            var2 = undefined;
            var5 = var5.bind(var2)(var4);
            var4 = var5.useStateFromStores;
            var7 = _closure1_slot2;
            var2 = new Array(2);
            var2[0] = var7;
            var6 = _closure1_slot3;
            var2[1] = var6;
            var1 = function() {
                var1 = _closure1_slot2;
                var3 = var1.localItems;
                var2 = var3.filter;
                var1 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var5 = arg1;
                        var2 = var5.type;
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var8 = 4;
                        var1 = var1[var8];
                        var7 = undefined;
                        var1 = var4.bind(var7)(var1);
                        var1 = var1.NotificationCenterLocalItems;
                        var1 = var1.INCOMING_FRIEND_REQUESTS;
                        var1 = var2 !== var1;
                        if(!var1) { _fun0002_ip = 90; continue _fun0002 }
 52:
                        var4 = var5.type;
                        var6 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var2 = var2[var8];
                        var2 = var6.bind(var7)(var2);
                        var2 = var2.NotificationCenterLocalItems;
                        var2 = var2.INCOMING_GAME_FRIEND_REQUESTS;
                        var1 = var4 !== var2;
 90:
                        if(var1) { _fun0002_ip = 121; continue _fun0002 }
 93:
                        var2 = _closure2_slot0;
                        if(!var2) { _fun0002_ip = 118; continue _fun0002 }
 103:
                        var4 = _closure1_slot3;
                        var3 = var4.isLocalItemAcked;
                        var2 = var3.bind(var4)(var5);
 118:
                        var1 = var2;
 121:
                        var1 = !var1;
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var1 = var1.length;
                return var1;
            };
            var2 = var4.bind(var5)(var2, var1);
            var1 = 0;
            if(!var3) { _fun0001_ip = 113; continue _fun0001 }
 110:
            var1 = var2;
 113:
            return var1;
        }
    };
    var3['useNumFriendRequestsForBadging'] = var2;
    return var1;
})();