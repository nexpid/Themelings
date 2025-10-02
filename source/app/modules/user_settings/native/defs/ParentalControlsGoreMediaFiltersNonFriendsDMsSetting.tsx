// app/modules/user_settings/native/defs/ParentalControlsGoreMediaFiltersNonFriendsDMsSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var4 = function useGoreContentNonFriendsDmSettingValue() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 3;
            var1 = var3[var1];
            var3 = undefined;
            var4 = var4.bind(var3)(var1);
            var1 = var4.useParentalControlledGoreContentSettings;
            var4 = var1.bind(var4)();
            var1 = null;
            var6 = var1 == var4;
            var5 = undefined;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var4.goreContentNonFriendDm;
case 2:
            var4 = var1 == var5;
            var1 = null;
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 4;
            var2 = var6[var2];
            var4 = var4.bind(var3)(var2);
            var2 = var4.redactionSettingToRenderedString;
            var2 = var2.bind(var4)(var5);
            var1 = var2.bind(var3)();
case 4:
            return var1;
        }
    };
    var2 = function onGoreContentNonFriendsDmOnPress() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = _closure1_slot2;
            var1 = var2.getSelectedTeenId;
            var3 = var1.bind(var2)();
            var _closure2_slot0 = var3;
            var1 = null;
            if(!(var1 != var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 5;
            var1 = var7[var1];
            var5 = undefined;
            var2 = var6.bind(var5)(var1);
            var1 = var2.getGoreContentSettingOrDefault;
            var1 = var1.bind(var2)(var3);
            var4 = var1.goreContentNonFriendDm;
            var1 = 6;
            var1 = var7[var1];
            var3 = var6.bind(var5)(var1);
            var2 = var3.handleSensitiveMediaFilterPress;
            var1 = {};
            var10 = 7;
            var11 = var7[var10];
            var11 = var6.bind(var5)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var7[var10];
            var10 = var6.bind(var5)(var10);
            var10 = var10.t;
            var10 = var10.16/3Bg;
            var10 = var11.bind(var12)(var10);
            var1['title'] = var10;
            var9 = _closure1_slot3;
            var9 = var9.bind(var5)();
            var1['subtitle'] = var9;
            var8 = function handlePress(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.updateGoreContentSetting;
                var2 = _closure2_slot0;
                var1 = {};
                var5 = arg1;
                var1['goreContentNonFriendDm'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1['handlePress'] = var8;
            var1['currentValue'] = var4;
            var4 = 8;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.ExplicitContentRedaction;
            var5 = var4.SHOW;
            var4 = new Array(1);
            var4[0] = var5;
            var1['excluded'] = var4;
            var1 = var2.bind(var3)(var1);
case 6:
            var1 = undefined;
            return var1;
        }
    };
    var10 = function getTitle() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 7;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.Yh+HX1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot3 = var10;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var5 = {};
    var6 = true;
    var5['value'] = var6;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var5);
    var1 = 0;
    var11 = var8[var1];
    var5 = metroImportDefault;
    var1 = undefined;
    var5 = var5.bind(var1)(var11);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var9 = var5.MobileSetting;
    var5 = {};
    var11 = 2;
    var11 = var8[var11];
    var11 = var7.bind(var1)(var11);
    var11 = var11.RendererType;
    var11 = var11.PRESSABLE;
    var5['type'] = var11;
    var5['title'] = var10;
    var9 = var9.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS;
    var5['parent'] = var9;
    var5['useTrailing'] = var4;
    var5['onPress'] = var2;
    var5['unsearchable'] = var6;
    var6 = 9;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/user_settings/native/defs/ParentalControlsGoreMediaFiltersNonFriendsDMsSetting.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['useGoreContentNonFriendsDmSettingValue'] = var4;
    var3['onGoreContentNonFriendsDmOnPress'] = var2;
    return var1;
})();