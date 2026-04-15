// app/components_native/common/Notifications.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.useInAppNotificationCacheStore;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/common/Notifications.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function Notifications(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var9 = var2.location;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 5;
            var5 = var7[var2];
            var6 = undefined;
            var11 = var4.bind(var6)(var5);
            var10 = var11.useStateFromStores;
            var5 = _closure1_slot3;
            var8 = new Array(1);
            var8[0] = var5;
            var5 = function() {
                var2 = _closure1_slot3;
                var1 = var2.isOpen;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var10.bind(var11)(var8, var5);
            var2 = var7[var2];
            var7 = var4.bind(var6)(var2);
            var4 = var7.useStateFromStores;
            var8 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getCurrentNotification;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var4.bind(var7)(var2, var1);
            var7 = _closure1_slot4;
            var1 = null;
            var8 = var1 == var2;
            var4 = undefined;
            if(var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var2.key;
case 2:
            var8 = var7.bind(var6)(var4);
            var4 = var8.forceRenderInMainNavigator;
            var7 = var8.percentRemainingDuration;
            var8 = var8.expanded;
            if(!(var1 != var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = 6;
            var10 = var12[var10];
            var11 = var11.bind(var6)(var10);
            var10 = var11.isAndroid;
            var10 = var10.bind(var11)();
            if(!var10) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var10 = 'navigator';
            if(!(var10 === var9)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            if(!var5) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 11:
            return var1;
case 8:
            var10 = 'actionsheet';
            if(!(var10 === var9)) { _fun0001_ip = 6; continue _fun0001 }
case 12:
            if(!var5) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            if(var4) { _fun0001_ip = 13; continue _fun0001 }
case 6:
            var5 = _closure1_slot6;
            var4 = _closure1_slot1;
            var10 = _closure1_slot2;
            var3 = 7;
            var3 = var10[var3];
            var4 = var4.bind(var6)(var3);
            var3 = {};
            var3['notification'] = var2;
            var3['location'] = var9;
            var3['initialExpanded'] = var8;
            var3['initialPercentRemainingDuration'] = var7;
            var2 = var2.key;
            var2 = var5.bind(var6)(var4, var3, var2);
            return var2;
case 13:
            return var1;
case 4:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();