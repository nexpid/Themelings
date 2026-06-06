// app/modules/user_settings/connections/native/UserSettingsConnections.tsx
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
    var7 = var6[var4];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FetchState;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticsLocations;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot11 = var7;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var10;
    var4['flex'] = var9;
    var9 = {};
    var10 = 9;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var9['backgroundColor'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_16;
    var9['padding'] = var10;
    var4['form'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/connections/native/UserSettingsConnections.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = -1;
    var3['ADD_CONNECTIONS_SHEET_SENTINEL'] = var4;
    var2 = function UserSettingsConnections(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var4 = var1.selectedPlatformType;
            var _closure2_slot0 = var4;
            var1 = _closure1_slot13;
            var5 = undefined;
            var6 = var1.bind(var5)();
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 10;
            var1 = var9[var1];
            var1 = var8.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var _closure2_slot1 = var1;
            var7 = _closure1_slot0;
            var1 = 11;
            var3 = var9[var1];
            var13 = var7.bind(var5)(var3);
            var12 = var13.useStateFromStores;
            var3 = _closure1_slot9;
            var10 = new Array(1);
            var10[0] = var3;
            var3 = function() {
                var1 = _closure1_slot9;
                var1 = var1.locale;
                return var1;
            };
            var3 = var12.bind(var13)(var10, var3);
            var _closure2_slot2 = var3;
            var3 = var9[var1];
            var13 = var7.bind(var5)(var3);
            var12 = var13.useStateFromStoresObject;
            var3 = _closure1_slot8;
            var10 = new Array(1);
            var10[0] = var3;
            var3 = function() {
                var1 = {};
                var3 = _closure1_slot8;
                var2 = var3.isFetching;
                var2 = var2.bind(var3)();
                var1['fetching'] = var2;
                var2 = var3.getAccounts;
                var2 = var2.bind(var3)();
                var1['accounts'] = var2;
                return var1;
            };
            var10 = var12.bind(var13)(var10, var3);
            var3 = var10.fetching;
            var13 = var10.accounts;
            var1 = var9[var1];
            var12 = var7.bind(var5)(var1);
            var10 = var12.useStateFromStoresObject;
            var1 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                var1 = {};
                var3 = _closure1_slot6;
                var2 = var3.getFetchState;
                var2 = var2.bind(var3)();
                var1['authorizedAppsFetchState'] = var2;
                var2 = var3.getNewestTokensForNonChildrenApplications;
                var2 = var2.bind(var3)();
                var1['authorizedApps'] = var2;
                return var1;
            };
            var1 = var10.bind(var12)(var7, var1);
            var7 = var1.authorizedAppsFetchState;
            var _closure2_slot3 = var7;
            var1 = var1.authorizedApps;
            var _closure2_slot4 = var1;
            var1 = 12;
            var1 = var9[var1];
            var9 = var8.bind(var5)(var1);
            var8 = _closure1_slot5;
            var1 = var8.getId;
            var8 = var1.bind(var8)();
            var1 = {};
            var10 = true;
            var1['includeHidden'] = var10;
            var8 = var9.bind(var5)(var8, var1);
            var1 = var8.isLoading;
            var10 = var8.filteredAppIdentities;
            var9 = _closure1_slot3;
            var12 = var9.useEffect;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var2 = _closure1_slot7;
                    var2 = var2.NOT_FETCHED;
                    if(!(var3 === var2)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.fetch;
                    var1 = var1.bind(var2)();
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var12.bind(var9)(var7, var8);
            var12 = var9.useEffect;
            var8 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.fetch;
                var2 = var2.bind(var3)();
                return var1;
            };
            var7 = new Array(0);
            var7 = var12.bind(var9)(var8, var7);
            var8 = var9.useEffect;
            var7 = new Array(1);
            var7[0] = var4;
            var4 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var2 = _closure2_slot0;
                    var1 = -1;
                    if(!(var1 !== var2)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 18;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var5 = _closure2_slot0;
                    var1['platformType'] = var5;
                    var4 = _closure1_slot10;
                    var4 = var4.USER_SETTINGS;
                    var1['location'] = var4;
                    var1 = var2.bind(var3)(var1);
                    _fun0003_ip = 4; continue _fun0003;
case 6:
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var3 = 15;
                    var3 = var1[var3];
                    var6 = undefined;
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.openLazy;
                    var5 = _closure1_slot0;
                    var2 = 17;
                    var2 = var1[var2];
                    var5 = var5.bind(var6)(var2);
                    var2 = 16;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var2 = var5.bind(var6)(var2, var1);
                    var1 = 'AddConnection';
                    var1 = var3.bind(var4)(var2, var1);
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var8.bind(var9)(var4, var7);
            if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            if(var1) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            var1 = var13.length;
            var3 = 0;
            if(!(var3 === var1)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var1 = var10.length;
            if(!(var3 !== var1)) { _fun0001_ip = 13; continue _fun0001 }
case 11:
            var4 = _closure1_slot12;
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 20;
            var1 = var12[var1];
            var1 = var9.bind(var5)(var1);
            var3 = var1.Form;
            var1 = {};
            var7 = var6.form;
            var1['style'] = var7;
            var8 = var10.map;
            var7 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var5 = _closure1_slot11;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 21;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2['identity'] = var1;
                var8 = _closure2_slot4;
                var7 = var8.find;
                var6 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.application;
                    var2 = var1.id;
                    var1 = _closure3_slot0;
                    var1 = var1.application_id;
                    var1 = var2 === var1;
                    return var1;
                };
                var6 = var7.bind(var8)(var6);
                var2['token'] = var6;
                var9 = var1.application_id;
                var8 = var1.provider_issued_user_id;
                var1 = global;
                var1 = var1.HermesInternal;
                var7 = var1.concat;
                var6 = '';
                var1 = '-';
                var1 = var7.bind(var6)(var9, var1, var8);
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var8 = var8.bind(var10)(var7);
            var7 = new Array(2);
            var7[0] = var8;
            var10 = _closure1_slot11;
            var8 = 22;
            var8 = var12[var8];
            var8 = var9.bind(var5)(var8);
            var9 = var8.Stack;
            var8 = {};
            var12 = 16;
            var8['spacing'] = var12;
            var12 = var13.map;
            var11 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot11;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 23;
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
            var11 = var12.bind(var13)(var11);
            var8['children'] = var11;
            var8 = var10.bind(var5)(var9, var8);
            var7[1] = var8;
            var1['children'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 14; continue _fun0001;
case 13:
            var7 = _closure1_slot11;
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 19;
            var3 = var8[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var1 = var7.bind(var5)(var4, var3);
case 14:
            _fun0001_ip = 15; continue _fun0001;
case 8:
            var4 = _closure1_slot11;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var6.flex;
            var2['style'] = var6;
            var6 = 'large';
            var2['size'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 15:
            return var1;
        }
    };
    var3['UserSettingsConnections'] = var2;
    return var1;
})();