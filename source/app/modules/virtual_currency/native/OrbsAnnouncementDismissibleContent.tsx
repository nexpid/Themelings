// app/modules/virtual_currency/native/OrbsAnnouncementDismissibleContent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DismissibleContentGroupName;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = function OrbsAnnouncementActionSheetImporter() {
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var2 = 4;
        var2 = var1[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = 3;
        var2 = var1[var2];
        var1 = var1.paths;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot5 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/virtual_currency/native/OrbsAnnouncementDismissibleContent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var5 = undefined;
            var3 = var2.bind(var5)(var1);
            var2 = var3.useVirtualCurrencyOnboardingEnabled;
            var1 = {};
            var4 = 'OrbsAnnouncementDismissibleContent';
            var1['location'] = var4;
            var1 = var2.bind(var3)(var1);
            var2 = var1.enabled;
            var1 = null;
            if(!var2) { _fun0001_ip = 157; continue _fun0001 }
 56:
            var4 = _closure1_slot4;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 6;
            var2 = var9[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var8 = _closure1_slot0;
            var7 = 7;
            var7 = var9[var7];
            var7 = var8.bind(var5)(var7);
            var7 = var7.DismissibleContent;
            var8 = var7.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_ANNOUNCEMENT_MODAL;
            var7 = new Array(1);
            var7[0] = var8;
            var2['contentTypes'] = var7;
            var6 = _closure1_slot3;
            var6 = var6.VIRTUAL_CURRENCY_MOBILE_ONBOARDING;
            var2['groupName'] = var6;
            var6 = function children(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.visibleContent;
                    var6 = var1.markAsDismissed;
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 7;
                    var1 = var4[var1];
                    var5 = undefined;
                    var1 = var2.bind(var5)(var1);
                    var1 = var1.DismissibleContent;
                    var2 = var1.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_ANNOUNCEMENT_MODAL;
                    var1 = null;
                    if(!(var3 === var2)) { _fun0002_ip = 121; continue _fun0002 }
 58:
                    var4 = _closure1_slot4;
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 8;
                    var2 = var8[var2];
                    var2 = var3.bind(var5)(var2);
                    var3 = var2.DismissibleActionSheet;
                    var2 = {};
                    var8 = 'ORBS_ANNOUNCEMENT_ACTION_SHEET';
                    var2['actionSheetKey'] = var8;
                    var7 = _closure1_slot5;
                    var2['importer'] = var7;
                    var2['markAsDismissed'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
 121:
                    return var1;
                }
            };
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 157:
            return var1;
        }
    };
    var3['OrbsAnnouncementDismissibleContent'] = var2;
    return var1;
})();