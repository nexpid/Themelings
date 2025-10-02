// app/modules/messages/native/renderer/system_messages/PurchaseNotificationSystemMessage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/PurchaseNotificationSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createPurchaseNotificationSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var1 = var4.message;
            var2 = var1.purchaseNotification;
            var1 = null;
            var3 = var1 == var2;
            var5 = undefined;
            var6 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var2.type;
case 2:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 0;
            var3 = var8[var3];
            var3 = var7.bind(var5)(var3);
            var3 = var3.PurchaseNotificationType;
            var3 = var3.GUILD_PRODUCT;
            var1 = null;
            if(!(var6 === var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 1;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.createGuildProductPurchaseSystemMessage;
            var1 = var2.bind(var3)(var4);
case 4:
            return var1;
        }
    };
    var3['createPurchaseNotificationSystemMessage'] = var2;
    return var1;
})();