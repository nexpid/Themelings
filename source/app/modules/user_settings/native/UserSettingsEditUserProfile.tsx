// app/modules/user_settings/native/UserSettingsEditUserProfile.tsx
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/UserSettingsEditUserProfile.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserSettingsEditUserProfile(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 3;
            var3 = var8[var2];
            var5 = undefined;
            var4 = var7.bind(var5)(var3);
            var3 = 4;
            var3 = var8[var3];
            var3 = var7.bind(var5)(var3);
            var3 = var3.USER_SETTINGS_USER_PROFILE;
            var3 = var4.bind(var5)(var3);
            var7 = var3.analyticsLocations;
            var4 = _closure1_slot0;
            var3 = 5;
            var3 = var8[var3];
            var9 = var4.bind(var5)(var3);
            var8 = var9.useStateFromStores;
            var3 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var8.bind(var9)(var4, var3);
            var _closure2_slot0 = var8;
            var9 = _closure1_slot3;
            var4 = var9.useEffect;
            var3 = new Array(1);
            var3[0] = var8;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 78; continue _fun0002 }
 13:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 6;
                    var2 = var4[var2];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var6 = _closure2_slot0;
                    var3 = var6.id;
                    var2 = var6.getAvatarURL;
                    var1 = 80;
                    var2 = var2.bind(var6)(var5, var1);
                    var1 = {};
                    var6 = true;
                    var1['dispatchWait'] = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
 78:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var4.bind(var9)(var1, var3);
            var1 = null;
            var3 = var1 == var8;
            if(var3) { _fun0001_ip = 227; continue _fun0001 }
 145:
            var4 = _closure1_slot5;
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = var9[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.AnalyticsLocationProvider;
            var2 = {};
            var2['value'] = var7;
            var7 = _closure1_slot1;
            var6 = 7;
            var6 = var9[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['currentUser'] = var8;
            var11 = arg1;
            var12 = var6;
            var8 = copyDataProperties(var12, var11);
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 227:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();