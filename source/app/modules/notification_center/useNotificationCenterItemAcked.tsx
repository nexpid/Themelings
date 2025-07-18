// app/modules/notification_center/useNotificationCenterItemAcked.tsx
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
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/notification_center/useNotificationCenterItemAcked.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var _closure2_slot0 = var6;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 1;
            var2 = var5[var2];
            var5 = undefined;
            var7 = var4.bind(var5)(var2);
            var4 = var7.useStateFromStores;
            var8 = _closure1_slot2;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function() {
                var3 = _closure1_slot2;
                var2 = var3.isLocalItemAcked;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var4.bind(var7)(var2, var1);
            var1 = var6.forceUnacked;
            var1 = !var1;
            if(!var1) { _fun0001_ip = 117; continue _fun0001 }
 76:
            if(var2) { _fun0001_ip = 114; continue _fun0001 }
 79:
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 2;
            var3 = var7[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.isRemoteAcked;
            var3 = arg2;
            var2 = var4.bind(var5)(var6, var3);
 114:
            var1 = var2;
 117:
            return var1;
        }
    };
    var3['useNotificationCenterItemAcked'] = var2;
    return var1;
})();