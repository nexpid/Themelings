// app/modules/user_settings/native/defs/ParentalControlsExplicitMediaFiltersFriendsDMsSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var9 = function getTitle() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 6;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.+uI23N;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot3 = var9;
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var2 = {};
    var4 = true;
    var2['value'] = var4;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var2);
    var1 = 0;
    var8 = var6[var1];
    var2 = metroImportDefault;
    var1 = undefined;
    var2 = var2.bind(var1)(var8);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.MobileSetting;
    var2 = {};
    var10 = 2;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.RendererType;
    var10 = var10.PRESSABLE;
    var2['type'] = var10;
    var2['title'] = var9;
    var8 = var8.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS;
    var2['parent'] = var8;
    var8 = function useObscuredContentFriendsDmSettingValue() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 3;
            var1 = var3[var1];
            var3 = undefined;
            var4 = var4.bind(var3)(var1);
            var1 = var4.useParentalControlledExplicitContentSettings;
            var4 = var1.bind(var4)();
            var1 = null;
            var6 = var1 == var4;
            var5 = undefined;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var4.explicitContentFriendDm;
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
    var2['useTrailing'] = var8;
    var7 = function onObscuredContentFriendsDmOnPress() {
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
            var1 = var2.getExplicitContentSettingOrDefault;
            var1 = var1.bind(var2)(var3);
            var4 = var1.explicitContentFriendDm;
            var1 = 6;
            var2 = var7[var1];
            var2 = var6.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var7[var1];
            var1 = var6.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.GYpoAg;
            var10 = var2.bind(var3)(var1);
            var1 = 7;
            var1 = var7[var1];
            var3 = var6.bind(var5)(var1);
            var2 = var3.handleSensitiveMediaFilterPress;
            var1 = {};
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
                var3 = var4.updateExplicitContentSetting;
                var2 = _closure2_slot0;
                var1 = {};
                var5 = arg1;
                var1['explicitContentFriendDm'] = var5;
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
    var2['onPress'] = var7;
    var2['unsearchable'] = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/defs/ParentalControlsExplicitMediaFiltersFriendsDMsSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();