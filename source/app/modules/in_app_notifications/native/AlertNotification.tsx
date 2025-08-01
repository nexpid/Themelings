// app/modules/in_app_notifications/native/AlertNotification.tsx
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
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_notifications/native/AlertNotification.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AlertNotification(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var2 = var2.notification;
            var3 = var2.key;
            var _closure2_slot0 = var3;
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var5 = 3;
            var6 = var4[var5];
            var5 = undefined;
            var9 = var2.bind(var5)(var6);
            var7 = var9.useStateFromStores;
            var10 = _closure1_slot3;
            var6 = new Array(1);
            var6[0] = var10;
            var1 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var7.bind(var9)(var6, var1);
            var1 = 4;
            var1 = var4[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.useGuildIncidentsState;
            var1 = var1.bind(var2)(var3);
            var3 = var1.incidentData;
            var1 = null;
            var4 = var1 == var3;
            var2 = undefined;
            if(var4) { _fun0001_ip = 121; continue _fun0001 }
 115:
            var2 = var3.raidDetectedAt;
 121:
            if(!(var1 == var2)) { _fun0001_ip = 184; continue _fun0001 }
 125:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 5;
            var3 = var9[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var9[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.evRhws;
            var6 = var3.bind(var4)(var2);
            _fun0001_ip = 241; continue _fun0001;
 184:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 5;
            var3 = var10[var2];
            var3 = var9.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var10[var2];
            var2 = var9.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.Mn3elp;
            var6 = var3.bind(var4)(var2);
 241:
            var2 = var1 == var7;
            var1 = null;
            if(var2) { _fun0001_ip = 398; continue _fun0001 }
 253:
            var4 = _closure1_slot4;
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 6;
            var2 = var10[var2];
            var2 = var13.bind(var5)(var2);
            var3 = var2.Notification;
            var2 = {};
            var9 = 5;
            var11 = var10[var9];
            var11 = var13.bind(var5)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var9 = var10[var9];
            var9 = var13.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.2IY4YG;
            var9 = var11.bind(var12)(var9);
            var2['alertLabel'] = var9;
            var9 = _closure1_slot1;
            var8 = 7;
            var8 = var10[var8];
            var9 = var9.bind(var5)(var8);
            var8 = {};
            var8['guild'] = var7;
            var10 = false;
            var8['selected'] = var10;
            var8 = var4.bind(var5)(var9, var8);
            var2['icon'] = var8;
            var7 = var7.name;
            var2['label'] = var7;
            var2['textChildren'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 398:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();