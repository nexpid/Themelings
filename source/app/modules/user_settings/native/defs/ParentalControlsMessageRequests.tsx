// app/modules/user_settings/native/defs/ParentalControlsMessageRequests.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var6;
    var8 = function useIsDisabled() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.useDefaultGuildsRestricted;
        var1 = var1.bind(var2)();
        return var1;
    };
    var _closure1_slot4 = var8;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var2 = {};
    var4 = true;
    var2['value'] = var4;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var9.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var9 = var2.MobileSetting;
    var2 = {};
    var10 = 2;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.RendererType;
    var10 = var10.TOGGLE;
    var2['type'] = var10;
    var10 = function title() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 6;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.3o2ojo;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['title'] = var10;
    var10 = function useDescription() {
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 6;
        var2 = var6[var2];
        var5 = undefined;
        var2 = var3.bind(var5)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var4 = _closure1_slot1;
        var1 = 7;
        var1 = var6[var1];
        var1 = var4.bind(var5)(var1);
        var1 = var1.7aYkh4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['useDescription'] = var10;
    var9 = var9.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS;
    var2['parent'] = var9;
    var9 = function useValue() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = _closure1_slot4;
            var2 = undefined;
            var1 = var1.bind(var2)();
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 3;
            var3 = var6[var3];
            var5 = var4.bind(var2)(var3);
            var3 = var5.useSelectedTeenId;
            var5 = var3.bind(var5)();
            var3 = 4;
            var3 = var6[var3];
            var3 = var4.bind(var2)(var3);
            var4 = var3.ParentalControlledDefaultMessageRequestRestricted;
            var3 = var4.useControlledSetting;
            var6 = null;
            var6 = var6 != var5;
            if(!var6) { _fun0001_ip = 79; continue _fun0001 }
 76:
            var2 = var5;
 79:
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var1 = !var1;
            if(!var1) { _fun0001_ip = 96; continue _fun0001 }
 93:
            var1 = var2;
 96:
            return var1;
        }
    };
    var2['useValue'] = var9;
    var2['useIsDisabled'] = var8;
    var7 = function onAllowMessageRequestsFromServerMembersValueChange(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = _closure1_slot3;
            var2 = var3.getSelectedTeenId;
            var4 = var2.bind(var3)();
            var2 = null;
            if(!(var2 != var4)) { _fun0002_ip = 69; continue _fun0002 }
 23:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var3 = var1.ParentalControlledDefaultMessageRequestRestricted;
            var2 = var3.updateControlledSetting;
            var1 = arg1;
            var1 = !var1;
            var1 = var2.bind(var3)(var4, var1);
 69:
            var1 = undefined;
            return var1;
        }
    };
    var2['onValueChange'] = var7;
    var2['unsearchable'] = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/defs/ParentalControlsMessageRequests.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();