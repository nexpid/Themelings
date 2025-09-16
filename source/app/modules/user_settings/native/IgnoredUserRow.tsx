// app/modules/user_settings/native/IgnoredUserRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = function handleUnignoreUser(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.unignoreUser;
        var3 = arg1;
        var2 = 'ignored-users-list-mobile';
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot5 = var4;
    var4 = function IgnoredUserRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var9 = var1.userRecord;
            var _closure2_slot0 = var9;
            var7 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 4;
            var1 = var12[var1];
            var4 = undefined;
            var1 = var7.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var1 = var1.analyticsLocations;
            var _closure2_slot1 = var1;
            var3 = _closure1_slot4;
            var11 = _closure1_slot0;
            var1 = 5;
            var1 = var12[var1];
            var1 = var11.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {'icon': null, 'label': null, 'subLabel': null, 'labelLineClamp': 1, 'subLabelLineClamp': 1, 'accessibilityRole': 'button'};
            var10 = 6;
            var6 = var12[var10];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var13 = var9.getAvatarSource;
            var13 = var13.bind(var9)(var4);
            var6['source'] = var13;
            var10 = var12[var10];
            var10 = var11.bind(var4)(var10);
            var10 = var10.AvatarSizes;
            var10 = var10.REFRESH_MEDIUM_32;
            var6['size'] = var10;
            var6 = var3.bind(var4)(var7, var6);
            var1['icon'] = var6;
            var7 = null;
            var6 = var7 != var9;
            if(!var6) { _fun0001_ip = 183; continue _fun0001 }
 165:
            var10 = var9.globalName;
            if(!(var7 == var10)) { _fun0001_ip = 180; continue _fun0001 }
 175:
            var10 = var9.username;
 180:
            var6 = var10;
 183:
            var1['label'] = var6;
            var10 = var7 == var9;
            var6 = undefined;
            if(var10) { _fun0001_ip = 204; continue _fun0001 }
 198:
            var6 = var9.globalName;
 204:
            var10 = var7 != var6;
            var6 = undefined;
            if(!var10) { _fun0001_ip = 230; continue _fun0001 }
 213:
            var10 = var7 == var9;
            var7 = undefined;
            if(var10) { _fun0001_ip = 227; continue _fun0001 }
 222:
            var7 = var9.username;
 227:
            var6 = var7;
 230:
            var1['subLabel'] = var6;
            var7 = {};
            var6 = 'unignore';
            var7['name'] = var6;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 7;
            var6 = var13[var9];
            var6 = var12.bind(var4)(var6);
            var11 = var6.intl;
            var10 = var11.string;
            var6 = var13[var9];
            var6 = var12.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.8wXU9P;
            var6 = var10.bind(var11)(var6);
            var7['label'] = var6;
            var6 = new Array(1);
            var6[0] = var7;
            var1['accessibilityActions'] = var6;
            var6 = function onAccessibilityAction(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var2 = var1.actionName;
                    var1 = 'unignore';
                    if(!(var1 !== var2)) { _fun0002_ip = 28; continue _fun0002 }
 24:
                    var1 = undefined;
                    return var1;
 28:
                    var3 = _closure1_slot5;
                    var1 = _closure2_slot0;
                    var2 = var1.id;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var1['onAccessibilityAction'] = var6;
            var6 = function onPress() {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 8;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = _closure2_slot0;
                var5 = var5.id;
                var1['userId'] = var5;
                var4 = _closure2_slot1;
                var1['sourceAnalyticsLocations'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1['onPress'] = var6;
            var7 = _closure1_slot4;
            var5 = 9;
            var5 = var13[var5];
            var5 = var12.bind(var4)(var5);
            var6 = var5.Button;
            var5 = {'size': 'sm', 'variant': 'secondary'};
            var10 = var13[var9];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.3GZE6e;
            var9 = var10.bind(var11)(var9);
            var5['text'] = var9;
            var8 = function onPress() {
                var3 = _closure1_slot5;
                var1 = _closure2_slot0;
                var2 = var1.id;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var5['onPress'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['trailing'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/IgnoredUserRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConnectedIgnoredUserRow(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var2 = var2.userId;
            var _closure2_slot0 = var2;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 10;
            var3 = var5[var3];
            var5 = undefined;
            var6 = var4.bind(var5)(var3);
            var4 = var6.useStateFromStores;
            var7 = _closure1_slot3;
            var3 = new Array(1);
            var3[0] = var7;
            var1 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getUser;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var4.bind(var6)(var3, var1);
            var1 = null;
            var3 = var1 == var6;
            if(var3) { _fun0003_ip = 99; continue _fun0003 }
 78:
            var4 = _closure1_slot4;
            var3 = _closure1_slot6;
            var2 = {};
            var2['userRecord'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 99:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();