// app/modules/settings/native/renderer/SettingRendererConstants.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var7 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var6 = var8.defineProperty;
    var5 = {};
    var2 = true;
    var5['value'] = var2;
    var2 = '__esModule';
    var2 = var6.bind(var8)(var3, var2, var5);
    var6 = {};
    var2 = 'route';
    var6['ROUTE'] = var2;
    var2 = 'pressable';
    var6['PRESSABLE'] = var2;
    var2 = 'toggle';
    var6['TOGGLE'] = var2;
    var2 = 'static';
    var6['STATIC'] = var2;
    var2 = 'radio';
    var6['RADIO'] = var2;
    var2 = 'volume_slider';
    var6['VOLUME_SLIDER'] = var2;
    var2 = 'slider';
    var6['SLIDER'] = var2;
    var2 = 'guild_selector';
    var6['GUILD_SELECTOR'] = var2;
    var2 = 'list';
    var6['LIST'] = var2;
    var2 = 'segmented_control';
    var6['SEGMENTED_CONTROL'] = var2;
    var5 = {};
    var2 = 'section_header';
    var5['SECTION_HEADER'] = var2;
    var2 = 'section_footer';
    var5['SECTION_FOOTER'] = var2;
    var2 = 'section_row';
    var5['SECTION_ROW'] = var2;
    var2 = 'section_row_placeholder';
    var5['SECTION_ROW_PLACEHOLDER'] = var2;
    var2 = 'setting_search_result';
    var5['SETTING_SEARCH_RESULT'] = var2;
    var8 = var1.Set;
    var2 = var6.ROUTE;
    var1 = new Array(3);
    var1[0] = var2;
    var2 = var6.PRESSABLE;
    var1[1] = var2;
    var2 = var6.STATIC;
    var1[2] = var2;
    var2 = var8.prototype;
    var2 = Object.create(var2, {constructor: {value: var8}});
    var13 = var2;
    var12 = var1;
    var1 = new var13[var8](var12, var11);
    var2 = var1 instanceof Object ? var1 : var2;
    var1 = 1;
    var8 = var7[var1];
    var7 = require;
    var1 = undefined;
    var9 = var7.bind(var1)(var8);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/settings/native/renderer/SettingRendererConstants.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = '0';
    var3['GUILD_SELECT_ALL_SERVERS_OPTION_ID'] = var7;
    var3['NodeType'] = var6;
    var3['ListItemType'] = var5;
    var4 = function getSettingsListItemEstimatedSize(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = new Array(0);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var4 = ['mobile-visual-refresh'];
case 4:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 0;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.modules;
            var1 = var1.mobile;
            var3 = var1.TABLE_ROW_HEIGHT;
            var2 = var3.resolve;
            var1 = {};
            var1['enabledExperiments'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getSettingsListItemEstimatedSize'] = var4;
    var3['SUPPORTED_SEARCH_RESULT_NO_PARENT_RENDERER_TYPES'] = var2;
    return var1;
})();