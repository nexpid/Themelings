// app/modules/notification_center/useGetOrFetchNotificationCenterItemApplications.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var1 = native3;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var8 = var6[var1];
    var7 = native4;
    var1 = undefined;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot2 = var7;
    var8 = var4.Set;
    var7 = 1;
    var4 = var6[var7];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NotificationCenterLocalItems;
    var9 = var4.INCOMING_GAME_FRIEND_REQUESTS;
    var4 = new Array(4);
    var4[0] = var9;
    var9 = var6[var7];
    var9 = var5.bind(var1)(var9);
    var9 = var9.NotificationCenterLocalItems;
    var9 = var9.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED;
    var4[1] = var9;
    var9 = var6[var7];
    var9 = var5.bind(var1)(var9);
    var9 = var9.NotificationCenterLocalItems;
    var9 = var9.INCOMING_FRIEND_REQUESTS;
    var4[2] = var9;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.NotificationCenterLocalItems;
    var7 = var7.INCOMING_FRIEND_REQUESTS_ACCEPTED;
    var4[3] = var7;
    var7 = var8.prototype;
    var7 = Object.create(var7, {constructor: {value: var8}});
    var13 = var7;
    var12 = var4;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/notification_center/useGetOrFetchNotificationCenterItemApplications.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGetOrFetchNotificationCenterItemsApplications(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot2;
        var4 = var5.useMemo;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            var1 = global;
            var1 = var1.Set;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var6 = var3;
            var1 = new var6[var1](var5);
            var1 = var1 instanceof Object ? var1 : var3;
            var _closure3_slot0 = var1;
            var1 = new Array(0);
            var _closure3_slot1 = var1;
            var4 = _closure2_slot0;
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.applicationId;
                    var4 = var1.type;
                    var2 = _closure1_slot3;
                    var1 = var2.has;
                    var1 = var1.bind(var2)(var4);
                    if(!var1) { _fun0001_ip = 93; continue _fun0001 }
 33:
                    var1 = null;
                    var1 = var1 == var3;
                    if(var1) { _fun0001_ip = 59; continue _fun0001 }
 42:
                    var4 = _closure3_slot0;
                    var2 = var4.has;
                    var1 = var2.bind(var4)(var3);
 59:
                    if(var1) { _fun0001_ip = 93; continue _fun0001 }
 62:
                    var4 = _closure3_slot0;
                    var2 = var4.add;
                    var2 = var2.bind(var4)(var3);
                    var2 = _closure3_slot1;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
 93:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var3 = var4.bind(var5)(var2, var3);
        var4 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var3['useGetOrFetchNotificationCenterItemsApplications'] = var2;
    return var1;
})();