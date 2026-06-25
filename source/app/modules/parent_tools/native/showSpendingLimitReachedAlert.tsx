// app/modules/parent_tools/native/showSpendingLimitReachedAlert.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 7;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/parent_tools/native/showSpendingLimitReachedAlert.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function isSpendingLimitError(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 0;
            var1 = var5[var1];
            var6 = undefined;
            var1 = var2.bind(var6)(var1);
            var1 = var1.BillingError;
            var1 = var4 instanceof var1;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var4.code;
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var7 = 1;
            var2 = var2[var7];
            var2 = var8.bind(var6)(var2);
            var2 = var2.ErrorCodes;
            var2 = var2.BILLING_SPENDING_LIMIT_REACHED;
            var2 = var5 === var2;
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var4.code;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ErrorCodes;
            var3 = var3.BILLING_SPENDING_LIMIT_WILL_EXCEED;
            var2 = var4 === var3;
case 4:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['isSpendingLimitError'] = var4;
    var2 = function showSpendingLimitReachedAlert() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var12 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 2;
            var2 = var6[var1];
            var1 = undefined;
            var3 = var12.bind(var1)(var2);
            var2 = var3.getActiveLinkUserIds;
            var5 = var2.bind(var3)();
            var _closure2_slot0 = var5;
            var3 = _closure1_slot1;
            var2 = 3;
            var2 = var6[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.show;
            var2 = {};
            var11 = 4;
            var9 = var6[var11];
            var9 = var12.bind(var1)(var9);
            var13 = var9.intl;
            var10 = var13.string;
            var9 = var6[var11];
            var9 = var12.bind(var1)(var9);
            var9 = var9.t;
            var9 = var9.QJKKrT;
            var9 = var10.bind(var13)(var9);
            var2['title'] = var9;
            var9 = var6[var11];
            var9 = var12.bind(var1)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var6 = var6[var11];
            var6 = var12.bind(var1)(var6);
            var6 = var6.t;
            var6 = var6["73Islf"];
            var6 = var9.bind(var10)(var6);
            var2['body'] = var6;
            var6 = true;
            var2['isDismissable'] = var6;
            var6 = var5.length;
            var5 = 0;
            if(!(!(var6 > var5))) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var5 = {};
            _fun0002_ip = 8; continue _fun0002;
case 6:
            var6 = {};
            var10 = _closure1_slot0;
            var7 = _closure1_slot2;
            var9 = var7[var11];
            var9 = var10.bind(var1)(var9);
            var13 = var9.intl;
            var12 = var13.string;
            var9 = var7[var11];
            var9 = var10.bind(var1)(var9);
            var9 = var9.t;
            var9 = var9.GF9RCX;
            var9 = var12.bind(var13)(var9);
            var6['confirmText'] = var9;
            var8 = function onConfirm() {
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 5;
                var3 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var3);
                var3 = var5.popLayer;
                var3 = var3.bind(var5)();
                var3 = _closure1_slot1;
                var2 = 6;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.openPrivateChannel;
                var2 = {};
                var5 = _closure2_slot0;
                var2['recipientIds'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var6['onConfirm'] = var8;
            var8 = var7[var11];
            var8 = var10.bind(var1)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var7[var11];
            var7 = var10.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.L5eIZ2;
            var7 = var8.bind(var9)(var7);
            var6['cancelText'] = var7;
            var5 = var6;
case 8:
            var15 = var2;
            var14 = var5;
            var5 = copyDataProperties(var15, var14);
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['showSpendingLimitReachedAlert'] = var2;
    return var1;
})();