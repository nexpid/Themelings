// app/modules/user_settings/native/UserSettingsFriendRequests.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AllFriendSourceFlags;
    var _closure1_slot5 = var7;
    var4 = var4.FriendSourceFlags;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/UserSettingsFriendRequests.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserSettingsFriendRequests() {
        var16 = _closure1_slot0;
        var17 = _closure1_slot2;
        var1 = 4;
        var1 = var17[var1];
        var4 = undefined;
        var1 = var16.bind(var4)(var1);
        var2 = var1.FriendSourceFlagsSetting;
        var1 = var2.useSetting;
        var1 = var1.bind(var2)();
        var _closure2_slot0 = var1;
        var6 = _closure1_slot3;
        var3 = var6.useMemo;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.computeFlags;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var12 = var3.bind(var6)(var1, var2);
        var3 = _closure1_slot7;
        var2 = _closure1_slot4;
        var1 = {};
        var7 = _closure1_slot8;
        var5 = 6;
        var5 = var17[var5];
        var5 = var16.bind(var4)(var5);
        var6 = var5.TableRowGroup;
        var5 = {};
        var13 = 7;
        var8 = var17[var13];
        var8 = var16.bind(var4)(var8);
        var10 = var8.intl;
        var9 = var10.string;
        var8 = var17[var13];
        var8 = var16.bind(var4)(var8);
        var8 = var8.t;
        var8 = var8.vyodkJ;
        var8 = var9.bind(var10)(var8);
        var5['title'] = var8;
        var9 = 8;
        var8 = var17[var9];
        var8 = var16.bind(var4)(var8);
        var10 = var8.TableSwitchRow;
        var8 = {};
        var14 = var17[var13];
        var14 = var16.bind(var4)(var14);
        var18 = var14.intl;
        var15 = var18.string;
        var14 = var17[var13];
        var14 = var16.bind(var4)(var14);
        var14 = var14.t;
        var14 = var14.mGr3CQ;
        var14 = var15.bind(var18)(var14);
        var8['label'] = var14;
        var14 = var12.all;
        var8['value'] = var14;
        var14 = function onValueChange(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 4;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var3 = var2.FriendSourceFlagsSetting;
                var2 = var3.updateSetting;
                var4 = _closure1_slot5;
                var5 = arg1;
                if(var5) { _fun0001_ip = 66; continue _fun0001 }
 47:
                var1 = _closure1_slot6;
                var1 = var1.NO_RELATION;
                var1 = ~var1;
                var1 = var4 & var1;
                _fun0001_ip = 69; continue _fun0001;
 66:
                var1 = var4;
 69:
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var8['onValueChange'] = var14;
        var10 = var3.bind(var4)(var10, var8);
        var8 = new Array(3);
        var8[0] = var10;
        var10 = var17[var9];
        var10 = var16.bind(var4)(var10);
        var14 = var10.TableSwitchRow;
        var10 = {};
        var15 = var17[var13];
        var15 = var16.bind(var4)(var15);
        var19 = var15.intl;
        var18 = var19.string;
        var15 = var17[var13];
        var15 = var16.bind(var4)(var15);
        var15 = var15.t;
        var15 = var15.IqlCSk;
        var15 = var18.bind(var19)(var15);
        var10['label'] = var15;
        var15 = var12.mutualFriends;
        var10['value'] = var15;
        var15 = function onValueChange(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 4;
                var1 = var3[var1];
                var6 = undefined;
                var1 = var2.bind(var6)(var1);
                var3 = var1.FriendSourceFlagsSetting;
                var2 = var3.updateSetting;
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 9;
                var1 = var7[var1];
                var7 = var5.bind(var6)(var1);
                var1 = arg1;
                if(var1) { _fun0002_ip = 101; continue _fun0002 }
 63:
                var8 = var7.removeFlags;
                var6 = _closure2_slot0;
                var1 = _closure1_slot6;
                var5 = var1.MUTUAL_FRIENDS;
                var1 = var1.NO_RELATION;
                var1 = var8.bind(var7)(var6, var5, var1);
                _fun0002_ip = 130; continue _fun0002;
 101:
                var6 = var7.addFlag;
                var5 = _closure2_slot0;
                var4 = _closure1_slot6;
                var4 = var4.MUTUAL_FRIENDS;
                var1 = var6.bind(var7)(var5, var4);
 130:
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var10['onValueChange'] = var15;
        var10 = var3.bind(var4)(var14, var10);
        var8[1] = var10;
        var9 = var17[var9];
        var9 = var16.bind(var4)(var9);
        var10 = var9.TableSwitchRow;
        var9 = {};
        var14 = var17[var13];
        var14 = var16.bind(var4)(var14);
        var15 = var14.intl;
        var14 = var15.string;
        var13 = var17[var13];
        var13 = var16.bind(var4)(var13);
        var13 = var13.t;
        var13 = var13.mozb8f;
        var13 = var14.bind(var15)(var13);
        var9['label'] = var13;
        var12 = var12.mutualGuilds;
        var9['value'] = var12;
        var11 = function onValueChange(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 4;
                var1 = var3[var1];
                var6 = undefined;
                var1 = var2.bind(var6)(var1);
                var3 = var1.FriendSourceFlagsSetting;
                var2 = var3.updateSetting;
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 9;
                var1 = var7[var1];
                var7 = var5.bind(var6)(var1);
                var1 = arg1;
                if(var1) { _fun0003_ip = 101; continue _fun0003 }
 63:
                var8 = var7.removeFlags;
                var6 = _closure2_slot0;
                var1 = _closure1_slot6;
                var5 = var1.MUTUAL_GUILDS;
                var1 = var1.NO_RELATION;
                var1 = var8.bind(var7)(var6, var5, var1);
                _fun0003_ip = 130; continue _fun0003;
 101:
                var6 = var7.addFlag;
                var5 = _closure2_slot0;
                var4 = _closure1_slot6;
                var4 = var4.MUTUAL_GUILDS;
                var1 = var6.bind(var7)(var5, var4);
 130:
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var9['onValueChange'] = var11;
        var9 = var3.bind(var4)(var10, var9);
        var8[2] = var9;
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();