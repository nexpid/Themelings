// app/modules/user_settings/native/defs/ParentalControlsMessageRequests.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var10 = function useIsDisabled() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.useDefaultGuildsRestricted;
        var1 = var1.bind(var2)();
        return var1;
    };
    var _closure1_slot4 = var10;
    var1 = global;
    var11 = var1.Object;
    var7 = var11.defineProperty;
    var2 = {};
    var8 = true;
    var2['value'] = var8;
    var1 = '__esModule';
    var1 = var7.bind(var11)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var11 = var2.MobileSetting;
    var2 = 8;
    var2 = var6[var2];
    var7 = var5.bind(var1)(var2);
    var4 = var7.createToggle;
    var2 = {};
    var12 = function title() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1["3o2ojh"];
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['title'] = var12;
    var12 = function useDescription() {
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 9;
        var2 = var6[var2];
        var5 = undefined;
        var2 = var3.bind(var5)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var4 = _closure1_slot1;
        var1 = 10;
        var1 = var6[var1];
        var1 = var4.bind(var5)(var1);
        var1 = var1["7aYkh1"];
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['useDescription'] = var12;
    var11 = var11.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS;
    var2['parent'] = var11;
    var11 = function useValue() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = _closure1_slot4;
            var2 = undefined;
            var1 = var1.bind(var2)();
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 2;
            var3 = var6[var3];
            var5 = var4.bind(var2)(var3);
            var3 = var5.useSelectedTeenId;
            var5 = var3.bind(var5)();
            var3 = 3;
            var3 = var6[var3];
            var3 = var4.bind(var2)(var3);
            var4 = var3.ParentalControlledDefaultMessageRequestRestricted;
            var3 = var4.useControlledSetting;
            var6 = null;
            var6 = var6 != var5;
            if(!var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var5;
case 2:
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var1 = !var1;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var2['useValue'] = var11;
    var2['useIsDisabled'] = var10;
    var9 = function onAllowMessageRequestsFromServerMembersValueChange(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var4 = _closure1_slot3;
            var3 = var4.getSelectedTeenId;
            var4 = var3.bind(var4)();
            var3 = null;
            if(!(var3 != var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            if(var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 4;
            var3 = var6[var3];
            var9 = undefined;
            var5 = var5.bind(var9)(var3);
            var3 = var5.shouldAgeVerifyForDMDefaultOff;
            var3 = var3.bind(var5)();
            if(!var3) { _fun0002_ip = 8; continue _fun0002 }
case 10:
            var5 = _closure1_slot1;
            var10 = _closure1_slot2;
            var3 = 5;
            var3 = var10[var3];
            var6 = var5.bind(var9)(var3);
            var5 = var6.showAgeVerificationGetStartedModal;
            var3 = {};
            var8 = _closure1_slot0;
            var7 = 6;
            var7 = var10[var7];
            var7 = var8.bind(var9)(var7);
            var7 = var7.AgeVerificationModalEntryPoint;
            var7 = var7.MESSAGE_REQUESTS_SETTINGS;
            var3['entryPoint'] = var7;
            var3 = var5.bind(var6)(var3);
            _fun0002_ip = 6; continue _fun0002;
case 8:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 3;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var5.bind(var2)(var3);
            var3 = var2.ParentalControlledDefaultMessageRequestRestricted;
            var2 = var3.updateControlledSetting;
            var1 = !var1;
            var1 = var2.bind(var3)(var4, var1);
case 6:
            var1 = undefined;
            return var1;
        }
    };
    var2['onValueChange'] = var9;
    var2['unsearchable'] = var8;
    var2 = var4.bind(var7)(var2);
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/defs/ParentalControlsMessageRequests.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();