// app/modules/hub/HubUtils.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native3;
    var3 = native6;
    var5 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var5[var1];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var5[var2];
    var9 = var6.bind(var1)(var2);
    var8 = var9.throttle;
    var7 = {};
    var2 = false;
    var7['trailing'] = var2;
    var6 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = _closure1_slot2;
            var3 = var4.getInvite;
            var2 = arg1;
            var2 = var2.code;
            var6 = var3.bind(var4)(var2);
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.open;
            var2 = {};
            var5 = null;
            var7 = var5 != var6;
            var5 = undefined;
            if(!var7) { _fun0001_ip = 70; continue _fun0001 }
 67:
            var5 = var6;
 70:
            var2['invite'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var2 = 1000;
    var2 = var8.bind(var9)(var6, var2, var7);
    var _closure1_slot3 = var2;
    var2 = {};
    var4 = function onOpenHubInvite(arg1) {
        var3 = _closure1_slot3;
        var1 = undefined;
        var2 = arg1;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var2['onOpenHubInvite'] = var4;
    var4 = 3;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/hub/HubUtils.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();