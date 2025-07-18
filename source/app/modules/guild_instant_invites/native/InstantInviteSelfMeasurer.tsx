// app/modules/guild_instant_invites/native/InstantInviteSelfMeasurer.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var1 = native3;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
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
    var4 = native4;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot2 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.StyleSheet;
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var8 = var9.create;
    var4 = {};
    var10 = {'position': 'absolute', 'opacity': 0};
    var4['container'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot5 = var4;
    var4 = var7.memo;
    var2 = function InstantInviteSelfMeasurer(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var9 = var2.containerStyle;
            var7 = var2.invite;
            var10 = var2.onMeasured;
            var _closure2_slot0 = var10;
            var8 = var2.type;
            var4 = undefined;
            if(!(var8 === var4)) { _fun0001_ip = 42; continue _fun0001 }
 38:
            var8 = 'height';
 42:
            var _closure2_slot1 = var8;
            var6 = _closure1_slot2;
            var3 = var6.useCallback;
            var2 = new Array(2);
            var2[0] = var10;
            var2[1] = var8;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var3 = _closure2_slot0;
                    var4 = _closure2_slot1;
                    var2 = 'height';
                    if(!(var2 !== var4)) { _fun0002_ip = 40; continue _fun0002 }
 33:
                    var2 = var1.width;
                    _fun0002_ip = 45; continue _fun0002;
 40:
                    var2 = var1.height;
 45:
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var6 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot4;
            var2 = _closure1_slot3;
            var1 = {'style': null, 'onLayout': null, 'pointerEvents': 'none', 'importantForAccessibility': 'no-hide-descendants', 'accessibilityElementsHidden': true, 'accessible': false};
            var8 = new Array(2);
            var8[0] = var9;
            var9 = _closure1_slot5;
            var9 = var9.container;
            var8[1] = var9;
            var1['style'] = var8;
            var1['onLayout'] = var6;
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var5 = 3;
            var5 = var8[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['invite'] = var7;
            var5 = var3.bind(var4)(var6, var5);
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