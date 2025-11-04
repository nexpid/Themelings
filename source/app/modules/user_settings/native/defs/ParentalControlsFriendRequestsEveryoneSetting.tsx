// app/modules/user_settings/native/defs/ParentalControlsFriendRequestsEveryoneSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var7 = var1.Object;
    var4 = var7.defineProperty;
    var2 = {};
    var8 = true;
    var2['value'] = var8;
    var1 = '__esModule';
    var1 = var4.bind(var7)(var3, var1, var2);
    var1 = 0;
    var4 = var6[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var4);
    var _closure1_slot2 = var2;
    var2 = 1;
    var4 = var6[var2];
    var2 = metroImportDefault;
    var2 = var2.bind(var1)(var4);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var10 = var2.MobileSetting;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.AllFriendSourceFlags;
    var _closure1_slot4 = var4;
    var2 = var2.FriendSourceFlags;
    var _closure1_slot5 = var2;
    var2 = 7;
    var2 = var6[var2];
    var7 = var5.bind(var1)(var2);
    var4 = var7.createToggle;
    var2 = {};
    var11 = function title() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 8;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.mGr3CX;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['title'] = var11;
    var10 = var10.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS;
    var2['parent'] = var10;
    var10 = function useFriendRequestsEveryoneSettingValue() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 4;
            var3 = var5[var3];
            var6 = undefined;
            var4 = var4.bind(var6)(var3);
            var3 = var4.useSelectedTeenId;
            var3 = var3.bind(var4)();
            var4 = null;
            var4 = var4 != var3;
            var5 = undefined;
            if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var3;
case 2:
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 5;
            var3 = var7[var3];
            var3 = var4.bind(var6)(var3);
            var4 = var3.ParentalControlledFriendSourceFlags;
            var3 = var4.useControlledSetting;
            var5 = var3.bind(var4)(var5);
            var _closure2_slot0 = var5;
            var4 = _closure1_slot2;
            var3 = var4.useMemo;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.computeFlags;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            var1 = var1.all;
            return var1;
        }
    };
    var2['useValue'] = var10;
    var9 = function onFriendRequestsEveryoneSettingValueChange(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot3;
            var2 = var3.getSelectedTeenId;
            var4 = var2.bind(var3)();
            var2 = null;
            if(!(var2 != var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 5;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var5.bind(var2)(var3);
            var3 = var2.ParentalControlledFriendSourceFlags;
            var2 = var3.updateControlledSetting;
            var5 = _closure1_slot4;
            var6 = arg1;
            if(var6) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = _closure1_slot5;
            var1 = var1.NO_RELATION;
            var1 = ~var1;
            var1 = var5 & var1;
            _fun0002_ip = 8; continue _fun0002;
case 6:
            var1 = var5;
case 8:
            var1 = var2.bind(var3)(var4, var1);
case 4:
            var1 = undefined;
            return var1;
        }
    };
    var2['onValueChange'] = var9;
    var2['unsearchable'] = var8;
    var2 = var4.bind(var7)(var2);
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/defs/ParentalControlsFriendRequestsEveryoneSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();