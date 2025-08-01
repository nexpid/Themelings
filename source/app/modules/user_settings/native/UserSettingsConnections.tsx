// app/modules/user_settings/native/UserSettingsConnections.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityIndicator;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticsLocations;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var10;
    var4['flex'] = var9;
    var9 = {};
    var10 = 7;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_PRIMARY;
    var9['backgroundColor'] = var10;
    var10 = 12;
    var9['paddingTop'] = var10;
    var4['form'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/UserSettingsConnections.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = -1;
    var3['ADD_CONNECTIONS_SHEET_SENTINEL'] = var4;
    var2 = function UserSettingsConnections(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var8 = var1.selectedPlatformType;
            var _closure2_slot0 = var8;
            var3 = _closure1_slot9;
            var4 = undefined;
            var5 = var3.bind(var4)();
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 8;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var _closure2_slot1 = var3;
            var6 = _closure1_slot0;
            var3 = 9;
            var9 = var7[var3];
            var12 = var6.bind(var4)(var9);
            var11 = var12.useStateFromStores;
            var9 = _closure1_slot6;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = function() {
                var1 = _closure1_slot6;
                var1 = var1.locale;
                return var1;
            };
            var9 = var11.bind(var12)(var10, var9);
            var _closure2_slot2 = var9;
            var11 = _closure1_slot3;
            var12 = var11.useEffect;
            var10 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.fetch;
                var2 = var2.bind(var3)();
                return var1;
            };
            var9 = new Array(0);
            var9 = var12.bind(var11)(var10, var9);
            var10 = var11.useEffect;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0002_ip = 164; continue _fun0002 }
 16:
                    var2 = _closure2_slot0;
                    var1 = -1;
                    if(!(var1 !== var2)) { _fun0002_ip = 87; continue _fun0002 }
 30:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 14;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var5 = _closure2_slot0;
                    var1['platformType'] = var5;
                    var4 = _closure1_slot7;
                    var4 = var4.USER_SETTINGS;
                    var1['location'] = var4;
                    var1 = var2.bind(var3)(var1);
                    _fun0002_ip = 164; continue _fun0002;
 87:
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var3 = 11;
                    var3 = var1[var3];
                    var6 = undefined;
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.openLazy;
                    var5 = _closure1_slot0;
                    var2 = 13;
                    var2 = var1[var2];
                    var5 = var5.bind(var6)(var2);
                    var2 = 12;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var2 = var5.bind(var6)(var2, var1);
                    var1 = 'AddConnection';
                    var1 = var3.bind(var4)(var2, var1);
 164:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var10.bind(var11)(var8, var9);
            var3 = var7[var3];
            var8 = var6.bind(var4)(var3);
            var7 = var8.useStateFromStoresObject;
            var3 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var1 = {};
                var3 = _closure1_slot5;
                var2 = var3.isFetching;
                var2 = var2.bind(var3)();
                var1['fetching'] = var2;
                var2 = var3.getAccounts;
                var2 = var2.bind(var3)();
                var1['accounts'] = var2;
                return var1;
            };
            var6 = var7.bind(var8)(var6, var3);
            var3 = var6.fetching;
            var6 = var6.accounts;
            if(var3) { _fun0001_ip = 329; continue _fun0001 }
 213:
            var7 = var6.length;
            var3 = 0;
            if(!(var3 !== var7)) { _fun0001_ip = 295; continue _fun0001 }
 224:
            var3 = var6.map;
            var2 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot8;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 16;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var7 = _closure2_slot1;
                var2['theme'] = var7;
                var6 = _closure2_slot2;
                var2['locale'] = var6;
                var2['account'] = var1;
                var1 = var1.id;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var7 = var3.bind(var6)(var2);
            var6 = _closure1_slot8;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 17;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.Form;
            var2 = {};
            var8 = var5.form;
            var2['style'] = var8;
            var2['children'] = var7;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 295:
            var6 = _closure1_slot8;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 15;
            var2 = var7[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 329:
            var3 = _closure1_slot8;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var5.flex;
            var1['style'] = var5;
            var5 = 'large';
            var1['size'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['UserSettingsConnections'] = var2;
    return var1;
})();