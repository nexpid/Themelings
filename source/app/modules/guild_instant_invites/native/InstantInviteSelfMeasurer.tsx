// app/modules/guild_instant_invites/native/InstantInviteSelfMeasurer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.StyleSheet;
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var8 = var9.create;
    var4 = {};
    var10 = {'position': 'absolute', 'opacity': 0};
    var4['container'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot6 = var4;
    var4 = var7.memo;
    var2 = function InstantInviteSelfMeasurer(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var8 = var2.containerStyle;
            var9 = var2.item;
            var10 = var2.onMeasured;
            var _closure2_slot0 = var10;
            var7 = var2.type;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = 'height';
case 2:
            var _closure2_slot1 = var7;
            var5 = _closure1_slot3;
            var3 = var5.useCallback;
            var2 = new Array(2);
            var2[0] = var10;
            var2[1] = var7;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var3 = _closure2_slot0;
                    var4 = _closure2_slot1;
                    var2 = 'height';
                    if(!(var2 !== var4)) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                    var2 = var1.width;
                    _fun0002_ip = 5; continue _fun0002;
case 2:
                    var2 = var1.height;
case 5:
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var5 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot5;
            var2 = _closure1_slot4;
            var1 = {'style': null, 'onLayout': null, 'pointerEvents': 'none', 'importantForAccessibility': 'no-hide-descendants', 'accessibilityElementsHidden': true, 'accessible': false};
            var7 = new Array(2);
            var7[0] = var8;
            var8 = _closure1_slot6;
            var8 = var8.container;
            var7[1] = var8;
            var1['style'] = var7;
            var1['onLayout'] = var5;
            var7 = var9.type;
            var5 = 'invite';
            if(!(var5 !== var7)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = _closure1_slot5;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 3;
            var5 = var10[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.LinkedChannelInvite;
            var5 = {};
            var10 = var9.data;
            var5['channel'] = var10;
            var5 = var8.bind(var4)(var7, var5);
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var8 = _closure1_slot5;
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = 3;
            var6 = var10[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var9 = var9.data;
            var6['invite'] = var9;
            var5 = var8.bind(var4)(var7, var6);
case 8:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_instant_invites/native/InstantInviteSelfMeasurer.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();