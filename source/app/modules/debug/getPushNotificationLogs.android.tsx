// app/modules/debug/getPushNotificationLogs.android.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native3;
    var3 = native6;
    var5 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 2;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/debug/getPushNotificationLogs.android.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getPushNotificationLogs() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 1;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.getPushNotificationLogs;
        var4 = _closure1_slot2;
        var1 = var4.getId;
        var1 = var1.bind(var4)();
        var3 = var2.bind(var3)(var1);
        var2 = var3.then;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = global;
                var3 = var1.JSON;
                var2 = var3.parse;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = var1.pushNotifications;
                var2 = null;
                if(!(var2 == var1)) { _fun0001_ip = 40; continue _fun0001 }
 36:
                var1 = new Array(0);
 40:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();