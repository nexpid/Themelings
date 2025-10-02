// app/modules/in_app_reports/IarSettingsUpsellsConfigLanguageFilter.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var2 = {};
    var1 = function getTitle() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 0;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.DPVOLS;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['getTitle'] = var1;
    var1 = function getDisabledTitle() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 0;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.B/dag4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['getDisabledTitle'] = var1;
    var1 = function getDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 0;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.+Esd3N;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['getDescription'] = var1;
    var8 = 1;
    var7 = var6[var8];
    var1 = undefined;
    var7 = var5.bind(var1)(var7);
    var7 = var7.ReportSubType;
    var9 = var7.SUB_GENERAL_HARASSMENT;
    var7 = new Array(3);
    var7[0] = var9;
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var9 = var9.ReportSubType;
    var9 = var9.SUB_RACIST_OR_DICRIMINATORY_LANGUAGE_OR_IMAGERY;
    var7[1] = var9;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ReportSubType;
    var8 = var8.SUB_VULGAR_LANGUAGE;
    var7[2] = var8;
    var2['eligibleReportSubtypes'] = var7;
    var7 = function onApply() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.KeywordFilterSettings;
        var2 = var3.updateSetting;
        var1 = {'profanity': true, 'slurs': true, 'sexualContent': true};
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['onApply'] = var7;
    var4 = function predicate() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 3;
            var1 = var4[var1];
            var4 = undefined;
            var5 = var3.bind(var4)(var1);
            var3 = var5.isEligibleForKeywordFiltering;
            var1 = {};
            var6 = 'iar_settings_upsells';
            var1['location'] = var6;
            var1 = var3.bind(var5)(var1);
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 4;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getKeywordFilterSetting;
            var2 = var2.bind(var3)();
            var1 = !var2;
case 2:
            return var1;
        }
    };
    var2['predicate'] = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_reports/IarSettingsUpsellsConfigLanguageFilter.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();