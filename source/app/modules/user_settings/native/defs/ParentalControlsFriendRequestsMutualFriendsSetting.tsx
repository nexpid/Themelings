// app/modules/user_settings/native/defs/ParentalControlsFriendRequestsMutualFriendsSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var2 = {};
    var4 = true;
    var2['value'] = var4;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var8 = var6[var2];
    var2 = metroImportDefault;
    var2 = var2.bind(var1)(var8);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.MobileSetting;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.FriendSourceFlags;
    var _closure1_slot5 = var2;
    var2 = {};
    var9 = 4;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var9 = var9.RendererType;
    var9 = var9.TOGGLE;
    var2['type'] = var9;
    var9 = function title() {
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
        var1 = var1.IqlCSk;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['title'] = var9;
    var8 = var8.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS;
    var2['parent'] = var8;
    var8 = function useFriendRequestsMutualFriendsSettingValue() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 5;
            var3 = var5[var3];
            var6 = undefined;
            var4 = var4.bind(var6)(var3);
            var3 = var4.useSelectedTeenId;
            var3 = var3.bind(var4)();
            var4 = null;
            var4 = var4 != var3;
            var5 = undefined;
            if(!var4) { _fun0001_ip = 51; continue _fun0001 }
 48:
            var5 = var3;
 51:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 6;
            var3 = var7[var3];
            var3 = var4.bind(var6)(var3);
            var4 = var3.ParentalControlledFriendSourceFlags;
            var3 = var4.useControlledSetting;
            var5 = var3.bind(var4)(var5);
            var _closure2_slot0 = var5;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.computeFlags;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            var1 = var1.mutualFriends;
            return var1;
        }
    };
    var2['useValue'] = var8;
    var7 = function onFriendRequestsMutualFriendsSettingValueChange(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = _closure1_slot4;
            var1 = var2.getSelectedTeenId;
            var4 = var1.bind(var2)();
            var1 = null;
            if(!(var1 != var4)) { _fun0002_ip = 171; continue _fun0002 }
 26:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 6;
            var6 = var3[var1];
            var7 = undefined;
            var6 = var2.bind(var7)(var6);
            var8 = var6.ParentalControlledFriendSourceFlags;
            var6 = var8.getControlledSetting;
            var8 = var6.bind(var8)(var4);
            var1 = var3[var1];
            var1 = var2.bind(var7)(var1);
            var3 = var1.ParentalControlledFriendSourceFlags;
            var2 = var3.updateControlledSetting;
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 8;
            var1 = var9[var1];
            var7 = var6.bind(var7)(var1);
            var1 = arg1;
            if(var1) { _fun0002_ip = 143; continue _fun0002 }
 112:
            var9 = var7.removeFlags;
            var1 = _closure1_slot5;
            var6 = var1.MUTUAL_FRIENDS;
            var1 = var1.NO_RELATION;
            var1 = var9.bind(var7)(var8, var6, var1);
            _fun0002_ip = 165; continue _fun0002;
 143:
            var6 = var7.addFlag;
            var5 = _closure1_slot5;
            var5 = var5.MUTUAL_FRIENDS;
            var1 = var6.bind(var7)(var8, var5);
 165:
            var1 = var2.bind(var3)(var4, var1);
 171:
            var1 = undefined;
            return var1;
        }
    };
    var2['onValueChange'] = var7;
    var2['unsearchable'] = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/defs/ParentalControlsFriendRequestsMutualFriendsSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();