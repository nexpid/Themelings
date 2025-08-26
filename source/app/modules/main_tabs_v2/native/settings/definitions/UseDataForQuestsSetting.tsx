// app/modules/main_tabs_v2/native/settings/definitions/UseDataForQuestsSetting.tsx
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
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var7 = var2.MobileSetting;
    var2 = {};
    var8 = 1;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.RendererType;
    var8 = var8.TOGGLE;
    var2['type'] = var8;
    var8 = function title() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 4;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.VkS7YW;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['title'] = var8;
    var8 = function useDataForQuestsSettingTitle() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 3;
            var1 = var2[var1];
            var6 = undefined;
            var7 = var3.bind(var6)(var1);
            var5 = var7.useIsDataUsage3PToggleEnabled;
            var1 = 'UseDataForQuestsSetting';
            var1 = var5.bind(var7)(var1);
            var7 = 4;
            var2 = var2[var7];
            var2 = var3.bind(var6)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var7];
            var4 = var5.bind(var6)(var4);
            var4 = var4.t;
            if(var1) { _fun0001_ip = 97; continue _fun0001 }
 89:
            var1 = var4.VkS7YW;
            _fun0001_ip = 105; continue _fun0001;
 97:
            var1 = var4.sJYh5u;
 105:
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var2['useTitle'] = var8;
    var7 = var7.DATA_AND_PRIVACY;
    var2['parent'] = var7;
    var7 = function useDataToSupportQuestsSettingValue() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var2 = var1.DropsOptedOut;
        var1 = var2.useSetting;
        var1 = var1.bind(var2)();
        var1 = !var1;
        return var1;
    };
    var2['useValue'] = var7;
    var4 = function onDataToSupportQuestsSettingValueChange(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var4 = var2.DropsOptedOut;
        var3 = var4.updateSetting;
        var2 = arg1;
        var2 = !var2;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['onValueChange'] = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/settings/definitions/UseDataForQuestsSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();