// app/modules/guild_communication_disabled/useCommunicationDisabledNoticeStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = native3;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY;
    var _closure1_slot3 = var9;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStore;
    var4 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var1 = arg2;
            var _closure2_slot1 = var1;
            var1 = {};
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var4 = 2;
            var5 = var5[var4];
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var5 = var4.Storage;
            var4 = var5.get;
            var3 = _closure1_slot3;
            var5 = var4.bind(var5)(var3);
            var3 = null;
            if(!(var3 == var5)) { _fun0001_ip = 73; continue _fun0001 }
 69:
            var5 = new Array(0);
 73:
            var3 = global;
            var3 = var3.Set;
            var4 = var3.prototype;
            var4 = Object.create(var4, {constructor: {value: var3}});
            var8 = var4;
            var7 = var5;
            var3 = new var8[var3](var7, var6);
            var3 = var3 instanceof Object ? var3 : var4;
            var1['notificationDismissedInGuilds'] = var3;
            var3 = function dismissNotification(arg1) {
                var3 = _closure2_slot1;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var8 = var3.notificationDismissedInGuilds;
                var _closure3_slot0 = var8;
                var4 = var8.add;
                var3 = arg1;
                var3 = var4.bind(var8)(var3);
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var6 = 2;
                var6 = var5[var6];
                var6 = var4.bind(var1)(var6);
                var7 = var6.Storage;
                var6 = var7.set;
                var3 = _closure1_slot3;
                var3 = var6.bind(var7)(var3, var8);
                var3 = 4;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.batchUpdates;
                var2 = function() {
                    var3 = _closure2_slot0;
                    var2 = {};
                    var1 = _closure3_slot0;
                    var2['notificationDismissedInGuilds'] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1['dismissNotification'] = var3;
            var2 = function resetNotification(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = arg1;
                    var3 = _closure2_slot1;
                    var1 = undefined;
                    var3 = var3.bind(var1)();
                    var8 = var3.notificationDismissedInGuilds;
                    var _closure3_slot0 = var8;
                    var3 = var8.has;
                    var3 = var3.bind(var8)(var4);
                    if(!var3) { _fun0002_ip = 123; continue _fun0002 }
 41:
                    var3 = var8.delete;
                    var3 = var3.bind(var8)(var4);
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var6 = 2;
                    var6 = var5[var6];
                    var6 = var4.bind(var1)(var6);
                    var7 = var6.Storage;
                    var6 = var7.set;
                    var3 = _closure1_slot3;
                    var3 = var6.bind(var7)(var3, var8);
                    var3 = 4;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.batchUpdates;
                    var2 = function() {
                        var3 = _closure2_slot0;
                        var2 = {};
                        var1 = _closure3_slot0;
                        var2['notificationDismissedInGuilds'] = var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
 123:
                    return var1;
                }
            };
            var1['resetNotification'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.Storage;
    var7 = var8.asyncGet;
    var4 = function(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 4;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot4;
            var2 = var3.setState;
            var1 = {};
            var4 = global;
            var6 = var4.Set;
            var7 = _closure2_slot0;
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var8 = var5;
            var4 = new var8[var6](var7, var6);
            var4 = var4 instanceof Object ? var4 : var5;
            var1['notificationDismissedInGuilds'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4 = var7.bind(var8)(var9, var4);
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_communication_disabled/useCommunicationDisabledNoticeStore.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useCommunicationDisabledNoticeStore(arg1) {
        var3 = _closure1_slot0;
        var8 = _closure1_slot1;
        var2 = 5;
        var2 = var8[var2];
        var4 = undefined;
        var7 = var3.bind(var4)(var2);
        var6 = var7.useStoreWithEqualityFn;
        var5 = _closure1_slot4;
        var2 = 6;
        var2 = var8[var2];
        var2 = var3.bind(var4)(var2);
        var3 = var2.shallow;
        var2 = function(arg1) {
            var2 = arg1;
            var3 = var2.notificationDismissedInGuilds;
            var1 = new Array(2);
            var1[0] = var3;
            var2 = var2.dismissNotification;
            var1[1] = var2;
            return var1;
        };
        var3 = var6.bind(var7)(var5, var2, var3);
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2.bind(var4)(var3, var1);
        var1 = 0;
        var4 = var2[var1];
        var1 = 1;
        var2 = var2[var1];
        var3 = var4.has;
        var1 = arg1;
        var1 = var3.bind(var4)(var1);
        var3 = !var1;
        var1 = new Array(2);
        var1[0] = var3;
        var1[1] = var2;
        return var1;
    };
    var3['useCommunicationDisabledNoticeStore'] = var4;
    var2 = function clearCommunicationDisabledNotice(arg1) {
        var2 = _closure1_slot4;
        var1 = var2.getState;
        var3 = var1.bind(var2)();
        var2 = var3.resetNotification;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['clearCommunicationDisabledNotice'] = var2;
    return var1;
})();