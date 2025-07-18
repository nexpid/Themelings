// app/modules/game_detection/GameActivityNotificationExperiment.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var9 = native3;
    var3 = native6;
    var7 = native7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var8 = 0;
    var4 = var7[var8];
    var1 = undefined;
    var4 = var9.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var5 = 1;
    var4 = var7[var5];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var12 = {};
    var12['FRIENDS_ONLY'] = var8;
    var4 = 'FRIENDS_ONLY';
    var12[var8] = var4;
    var12['FRIENDS_AND_AFFINITY_USERS'] = var5;
    var4 = 'FRIENDS_AND_AFFINITY_USERS';
    var12[var5] = var4;
    var4 = 2;
    var12['NONE'] = var4;
    var5 = 'NONE';
    var12[var4] = var5;
    var _closure1_slot2 = var12;
    var4 = var7[var4];
    var8 = var6.bind(var1)(var4);
    var5 = var8.createExperiment;
    var4 = {'kind': 'user', 'id': '2025-04_game_activity_notification', 'label': 'Game Activity Notifications'};
    var9 = {};
    var10 = var12.NONE;
    var9['fromUserType'] = var10;
    var4['defaultConfig'] = var9;
    var10 = {'id': 1, 'label': 'Show Notifications from Friends Only'};
    var9 = {};
    var11 = var12.FRIENDS_ONLY;
    var9['fromUserType'] = var11;
    var10['config'] = var9;
    var9 = new Array(2);
    var9[0] = var10;
    var10 = {'id': 2, 'label': 'Show Notifications from Friends and High Affinity Users'};
    var11 = {};
    var12 = var12.FRIENDS_AND_AFFINITY_USERS;
    var11['fromUserType'] = var12;
    var10['config'] = var11;
    var9[1] = var10;
    var4['treatments'] = var9;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot3 = var4;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/game_detection/GameActivityNotificationExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var4 = function filterPresencesByGameActivityPreferences(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var6 = _closure1_slot3;
            var5 = var6.getCurrentConfig;
            var4 = {};
            var7 = 'filterPresences';
            var4['location'] = var7;
            var4 = var5.bind(var6)(var4);
            var4 = var4.fromUserType;
            var5 = _closure1_slot2;
            var5 = var5.NONE;
            if(!(var5 !== var4)) { _fun0001_ip = 123; continue _fun0001 }
 55:
            var5 = _closure1_slot2;
            var5 = var5.FRIENDS_ONLY;
            if(!(var5 !== var4)) { _fun0001_ip = 104; continue _fun0001 }
 69:
            var2 = _closure1_slot2;
            var2 = var2.FRIENDS_AND_AFFINITY_USERS;
            if(!(var2 !== var4)) { _fun0001_ip = 85; continue _fun0001 }
 83:
            return var3;
 85:
            var4 = var3.filter;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.user;
                    var5 = _closure1_slot1;
                    var4 = var5.isFriend;
                    var1 = var2.id;
                    var1 = var4.bind(var5)(var1);
                    if(var1) { _fun0002_ip = 56; continue _fun0002 }
 34:
                    var4 = _closure1_slot0;
                    var3 = var4.isHighlyAffinedVCUser;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
 56:
                    return var1;
                }
            };
            var2 = var4.bind(var3)(var2);
            return var2;
 104:
            var2 = var3.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.user;
                var3 = _closure1_slot1;
                var2 = var3.isFriend;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
 123:
            var1 = new Array(0);
            return var1;
        }
    };
    var3['filterPresencesByGameActivityPreferences'] = var4;
    var4 = function isEligibleForGameActivityNotificationExperiment(arg1) {
        var4 = _closure1_slot3;
        var3 = var4.getCurrentConfig;
        var2 = {};
        var5 = arg1;
        var2['location'] = var5;
        var2 = var3.bind(var4)(var2);
        var2 = var2.fromUserType;
        var1 = _closure1_slot2;
        var1 = var1.NONE;
        var1 = var2 !== var1;
        return var1;
    };
    var3['isEligibleForGameActivityNotificationExperiment'] = var4;
    var2 = function useIsEligibleForGameActivityNotificationExperiment(arg1) {
        var4 = _closure1_slot3;
        var3 = var4.useExperiment;
        var2 = {};
        var5 = arg1;
        var2['location'] = var5;
        var2 = var3.bind(var4)(var2);
        var2 = var2.fromUserType;
        var1 = _closure1_slot2;
        var1 = var1.NONE;
        var1 = var2 !== var1;
        return var1;
    };
    var3['useIsEligibleForGameActivityNotificationExperiment'] = var2;
    return var1;
})();