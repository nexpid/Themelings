// app/modules/user_settings/hooks/useDerivedDMSpamFilterSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ExplicitContentFilterToDmSpamFilterV2;
    var _closure1_slot3 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/hooks/useDerivedDMSpamFilterSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useDerivedDmSpamFilterSettingValue() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var9 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 2;
            var1 = var4[var2];
            var5 = undefined;
            var1 = var9.bind(var5)(var1);
            var6 = var1.DmSpamFilterV2;
            var1 = var6.useSetting;
            var1 = var1.bind(var6)();
            var2 = var4[var2];
            var2 = var9.bind(var5)(var2);
            var6 = var2.ExplicitContentFilter;
            var2 = var6.useSetting;
            var8 = var2.bind(var6)();
            var2 = 3;
            var2 = var4[var2];
            var10 = var9.bind(var5)(var2);
            var7 = var10.useStateFromStores;
            var2 = _closure1_slot2;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var2 = _closure1_slot2;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var7.bind(var10)(var6, var2);
            var2 = 4;
            var2 = var4[var2];
            var10 = var9.bind(var5)(var2);
            var6 = var10.useIsGidgetPawtectEnabled;
            var2 = 'use_derived_dm_spam_filter_setting';
            var2 = var6.bind(var10)(var2);
            var6 = 5;
            var4 = var4[var6];
            var4 = var9.bind(var5)(var4);
            var4 = var4.DmSpamFilterV2;
            var4 = var4.DEFAULT_UNSET;
            if(!(var1 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = null;
            var10 = var4 == var7;
            var9 = undefined;
            if(var10) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = var7.nsfwAllowed;
case 4:
            var7 = false;
            if(!(var7 === var9)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 6:
            var7 = _closure1_slot3;
            var2 = var7.get;
            var2 = var2.bind(var7)(var8);
            if(!(var4 == var2)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var7 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var6];
            var4 = var7.bind(var5)(var4);
            var4 = var4.DmSpamFilterV2;
            var2 = var4.NON_FRIENDS;
case 9:
            _fun0001_ip = 11; continue _fun0001;
case 8:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.DmSpamFilterV2;
            var2 = var3.FRIENDS_AND_NON_FRIENDS;
case 11:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['useDerivedDmSpamFilterSettingValue'] = var2;
    return var1;
})();