// app/modules/user_settings/native/privacy_and_safety/SettingsScreenNotices.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var5 = var7[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var5);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.View;
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var7[var2];
    var8 = var6.bind(var1)(var2);
    var5 = var8.createStyles;
    var2 = {};
    var9 = {};
    var11 = 5;
    var12 = var7[var11];
    var12 = var10.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['marginHorizontal'] = var12;
    var11 = var7[var11];
    var11 = var10.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var9['marginTop'] = var11;
    var2['noticeContainer'] = var9;
    var2 = var5.bind(var8)(var2);
    var _closure1_slot6 = var2;
    var2 = {};
    var5 = 'SENSITIVE_CONTENT_FILTERS';
    var2['SENSITIVE_CONTENT_FILTERS'] = var5;
    var5 = 'CONTENT_AND_SOCIAL';
    var2['CONTENT_AND_SOCIAL'] = var5;
    var5 = 'DATA_AND_PRIVACY';
    var2['DATA_AND_PRIVACY'] = var5;
    var5 = {};
    var13 = {};
    var12 = 100;
    var13['order'] = var12;
    var11 = 6;
    var8 = var7[var11];
    var8 = var6.bind(var1)(var8);
    var8 = var8.isParentallyControlled;
    var13['predicate'] = var8;
    var8 = 7;
    var9 = var7[var8];
    var9 = var10.bind(var1)(var9);
    var13['Component'] = var9;
    var9 = new Array(3);
    var9[0] = var13;
    var13 = {};
    var14 = 200;
    var13['order'] = var14;
    var14 = function predicate() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot4;
            var1 = var2.getCurrentUser;
            var1 = var1.bind(var2)();
            var2 = null;
            var3 = var2 == var1;
            var2 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var1.nsfwAllowed;
case 2:
            var1 = false;
            var1 = var1 === var2;
            return var1;
        }
    };
    var13['predicate'] = var14;
    var14 = 8;
    var15 = var7[var14];
    var15 = var6.bind(var1)(var15);
    var15 = var15.SensitiveContentFiltersTeenNotice;
    var13['Component'] = var15;
    var9[1] = var13;
    var13 = {};
    var15 = 300;
    var13['order'] = var15;
    var15 = function predicate() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 9;
            var1 = var4[var1];
            var4 = undefined;
            var5 = var3.bind(var4)(var1);
            var3 = var5.isEligibleForSettingsDefaultsAggregate;
            var1 = 'SensitiveContentFiltersNotice';
            var1 = var3.bind(var5)(var1);
            if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 10;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.isAgeVerified;
            var2 = var2.bind(var3)();
            var1 = !var2;
case 4:
            return var1;
        }
    };
    var13['predicate'] = var15;
    var14 = var7[var14];
    var14 = var6.bind(var1)(var14);
    var14 = var14.SensitiveContentFiltersAgeVerificationNotice;
    var13['Component'] = var14;
    var9[2] = var13;
    var5['SENSITIVE_CONTENT_FILTERS'] = var9;
    var13 = {};
    var13['order'] = var12;
    var9 = var7[var11];
    var9 = var6.bind(var1)(var9);
    var9 = var9.isParentallyControlled;
    var13['predicate'] = var9;
    var9 = var7[var8];
    var9 = var10.bind(var1)(var9);
    var13['Component'] = var9;
    var9 = new Array(1);
    var9[0] = var13;
    var5['CONTENT_AND_SOCIAL'] = var9;
    var9 = {};
    var9['order'] = var12;
    var11 = var7[var11];
    var11 = var6.bind(var1)(var11);
    var11 = var11.isParentallyControlled;
    var9['predicate'] = var11;
    var8 = var7[var8];
    var8 = var10.bind(var1)(var8);
    var9['Component'] = var8;
    var8 = new Array(1);
    var8[0] = var9;
    var5['DATA_AND_PRIVACY'] = var8;
    var _closure1_slot7 = var5;
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_settings/native/privacy_and_safety/SettingsScreenNotices.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function SettingsScreenNotices(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var8 = var2.screen;
            var _closure2_slot0 = var8;
            var3 = _closure1_slot6;
            var5 = undefined;
            var6 = var3.bind(var5)();
            var7 = _closure1_slot2;
            var4 = var7.useMemo;
            var3 = new Array(1);
            var3[0] = var8;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure1_slot7;
                    var2 = _closure2_slot0;
                    var4 = var3[var2];
                    var3 = var4.filter;
                    var2 = function(arg1) {
                        var2 = arg1;
                        var1 = var2.predicate;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.sort;
                    var2 = function(arg1, arg2) {
                        var1 = arg1;
                        var2 = var1.order;
                        var1 = arg2;
                        var1 = var1.order;
                        var1 = var2 - var1;
                        return var1;
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.map;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.Component;
                        return var1;
                    };
                    var3 = var2.bind(var3)(var1);
                    var4 = var3.length;
                    var2 = 0;
                    var1 = null;
                    if(!(var2 !== var4)) { _fun0004_ip = 6; continue _fun0004 }
case 7:
                    var1 = var3[var2];
case 6:
                    return var1;
                }
            };
            var7 = var4.bind(var7)(var1, var3);
            var1 = null;
            var3 = var1 == var7;
            if(var3) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var2 = {};
            var6 = var6.noticeContainer;
            var2['style'] = var6;
            var6 = {};
            var6 = var4.bind(var5)(var7, var6, var8);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 8:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['SettingsScreen'] = var2;
    return var1;
})();