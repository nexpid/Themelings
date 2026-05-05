// app/modules/profile_customization/useOpenProfileSettings.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.useCallback;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserSettingsSections;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ProfileCustomizationSubsection;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/profile_customization/useOpenProfileSettings.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useOpenProfileSettings() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arguments[0];
            var4 = undefined;
            if(!(var2 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = {};
case 2:
            var8 = var2.guild;
            var _closure2_slot0 = var8;
            var7 = var2.scrollPosition;
            var _closure2_slot1 = var7;
            var6 = var2.analyticsLocations;
            var _closure2_slot2 = var6;
            var5 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 7;
            var3 = var9[var3];
            var9 = var5.bind(var4)(var3);
            var5 = var9.useIsEligibleForUserProfileWYSIWYGEditing;
            var3 = 'useOpenProfileSettings';
            var5 = var5.bind(var9)(var3);
            var3 = _closure1_slot2;
            var2 = new Array(4);
            var2[0] = var8;
            var2[1] = var7;
            var2[2] = var6;
            var2[3] = var5;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var7 = null;
                    if(!(var7 != var1)) { _fun0002_ip = 4; continue _fun0002 }
case 2:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.initGuildIdentitySettings;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
case 4:
                    var3 = _closure1_slot3;
                    var2 = var3.setState;
                    var1 = {};
                    var6 = _closure2_slot0;
                    if(!(var7 == var6)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var6 = _closure1_slot5;
                    var6 = var6.USER_PROFILE;
                    _fun0002_ip = 7; continue _fun0002;
case 5:
                    var7 = _closure1_slot5;
                    var6 = var7.GUILD;
case 7:
                    var1['subsection'] = var6;
                    var6 = _closure2_slot1;
                    var1['scrollPosition'] = var6;
                    var1 = var2.bind(var3)(var1);
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var3 = var2.openUserSettings;
                    var2 = {};
                    var5 = _closure1_slot4;
                    var5 = var5.PROFILE_CUSTOMIZATION;
                    var2['screen'] = var5;
                    var4 = _closure2_slot2;
                    var2['analyticsLocations'] = var4;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();