// app/modules/analytics_sessions/SessionUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var6 = native7;
    var1 = global;
    var7 = var1.Object;
    var5 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var7)(var3, var1, var4);
    var1 = 0;
    var5 = var6[var1];
    var4 = native3;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var4 = var4.Millis;
    var5 = var4.MINUTE;
    var4 = 30;
    var5 = var4 * var5;
    var _closure1_slot0 = var5;
    var4 = 1;
    var7 = var6[var4];
    var6 = native2;
    var8 = var6.bind(var1)(var7);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/analytics_sessions/SessionUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['SESSION_IDLE_TIMEOUT_MILLIS'] = var5;
    var3['CLIENT_SESSION_STORAGE_VERSION'] = var4;
    var4 = function isSessionExpired(arg1) {
        var2 = _closure1_slot0;
        var1 = arg1;
        var1 = var1.lastUsedTimestamp;
        var2 = var2 + var1;
        var1 = global;
        var3 = var1.Date;
        var1 = var3.now;
        var1 = var1.bind(var3)();
        var2 = var2 - var1;
        var1 = 0;
        var1 = var2 <= var1;
        return var1;
    };
    var3['isSessionExpired'] = var4;
    var2 = function timestampOrZero(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var2 = var1 != var4;
            var1 = 0;
            if(!var2) { _fun0001_ip = 29; continue _fun0001 }
 14:
            var2 = global;
            var3 = var2.Number;
            var2 = undefined;
            var1 = var3.bind(var2)(var4);
 29:
            return var1;
        }
    };
    var3['timestampOrZero'] = var2;
    return var1;
})();