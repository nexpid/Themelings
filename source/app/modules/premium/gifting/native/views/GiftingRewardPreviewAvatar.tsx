// app/modules/premium/gifting/native/views/GiftingRewardPreviewAvatar.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/gifting/native/views/GiftingRewardPreviewAvatar.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GiftingRewardPreviewAvatar(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 4;
            var8 = var7[var3];
            var4 = undefined;
            var11 = var6.bind(var4)(var8);
            var10 = var11.useStateFromStores;
            var8 = _closure1_slot4;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var10.bind(var11)(var9, var8);
            var3 = var7[var3];
            var7 = var6.bind(var4)(var3);
            var6 = var7.useStateFromStores;
            var9 = _closure1_slot3;
            var3 = new Array(1);
            var3[0] = var9;
            var2 = function() {
                var1 = _closure1_slot3;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var6 = var6.bind(var7)(var3, var2);
            var3 = var5.asset;
            var2 = null;
            var2 = var2 != var3;
            var7 = undefined;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = {};
            var3 = var5.asset;
            var2['asset'] = var3;
            var7 = var2;
case 2:
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 5;
            var1 = var9[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['user'] = var8;
            var1['guildId'] = var4;
            var1['avatarDecoration'] = var7;
            var6 = !var6;
            var1['animate'] = var6;
            var13 = var1;
            var12 = var5;
            var5 = copyDataProperties(var13, var12);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();