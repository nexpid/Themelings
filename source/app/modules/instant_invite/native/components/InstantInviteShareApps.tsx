// app/modules/instant_invite/native/components/InstantInviteShareApps.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot5 = var8;
    var4 = var4.ScrollView;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.SHARE_ITEMS;
    var _closure1_slot7 = var8;
    var4 = var4.SHARE_ITEMS_DEFAULT;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 6;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10['padding'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var10['gap'] = var11;
    var11 = 'center';
    var10['alignItems'] = var11;
    var4['contentContainer'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot10 = var4;
    var4 = var7.memo;
    var2 = function InstantInviteShareApps(arg1) {
        var1 = arg1;
        var2 = var1.onItemPressed;
        var _closure2_slot0 = var2;
        var11 = var1.contentContainerStyle;
        var2 = _closure1_slot10;
        var4 = undefined;
        var9 = var2.bind(var4)();
        var2 = _closure1_slot0;
        var7 = _closure1_slot2;
        var3 = 7;
        var3 = var7[var3];
        var5 = var2.bind(var4)(var3);
        var3 = var5.useFontScale;
        var3 = var3.bind(var5)();
        var _closure2_slot1 = var3;
        var13 = _closure1_slot4;
        var5 = var13.useState;
        var3 = _closure1_slot8;
        var6 = var5.bind(var13)(var3);
        var5 = _closure1_slot3;
        var3 = 2;
        var5 = var5.bind(var4)(var6, var3);
        var3 = 0;
        var10 = var5[var3];
        var3 = 1;
        var3 = var5[var3];
        var _closure2_slot2 = var3;
        var6 = var13.useMemo;
        var5 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var2 = var1.Gesture;
            var1 = var2.Native;
            var3 = var1.bind(var2)();
            var2 = var3.disallowInterruption;
            var1 = true;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3 = new Array(0);
        var6 = var6.bind(var13)(var5, var3);
        var12 = var13.useEffect;
        var5 = function() {
            var2 = global;
            var4 = var2.Promise;
            var3 = var4.all;
            var6 = _closure1_slot7;
            var5 = var6.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.isAvailable;
                return var1;
            };
            var2 = var5.bind(var6)(var2);
            var3 = var3.bind(var4)(var2);
            var2 = var3.then;
            var1 = function(arg1) {
                var4 = arg1;
                var3 = new Array(0);
                var _closure4_slot0 = var3;
                var2 = var4.forEach;
                var1 = function(arg1, arg2) {
                    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                        var1 = arg1;
                        if(!var1) { _fun0001_ip = 37; continue _fun0001 }
 6:
                        var3 = _closure4_slot0;
                        var2 = var3.push;
                        var4 = _closure1_slot7;
                        var1 = arg2;
                        var1 = var4[var1];
                        var1 = var2.bind(var3)(var1);
 37:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var2.bind(var4)(var1);
                var2 = _closure2_slot2;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var3 = new Array(0);
        var3 = var12.bind(var13)(var5, var3);
        var3 = _closure1_slot9;
        var5 = _closure1_slot6;
        var1 = {'contentContainerStyle': null, 'showsHorizontalScrollIndicator': false, 'horizontal': true};
        var12 = var9.contentContainer;
        var9 = new Array(2);
        var9[0] = var12;
        var9[1] = var11;
        var1['contentContainerStyle'] = var9;
        var9 = var10.map;
        var8 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arg1;
                var12 = var1.fullIcon;
                var11 = var1.getLabel;
                var14 = var1.icon;
                var13 = var1.IconComponent;
                var2 = var1.onPress;
                var _closure3_slot0 = var2;
                var5 = var1.type;
                var4 = _closure1_slot9;
                var3 = _closure1_slot5;
                var2 = {};
                var1 = {};
                var8 = _closure2_slot1;
                var7 = 76;
                var7 = var7 * var8;
                var1['maxWidth'] = var7;
                var2['style'] = var1;
                var15 = null;
                if(!(var15 == var12)) { _fun0002_ip = 197; continue _fun0002 }
 85:
                var9 = _closure1_slot9;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 10;
                var1 = var8[var1];
                var8 = undefined;
                var1 = var7.bind(var8)(var1);
                var7 = var1.IconButton;
                var1 = {};
                var16 = 'secondary';
                var1['variant'] = var16;
                if(!(var15 == var13)) { _fun0002_ip = 158; continue _fun0002 }
 131:
                if(!(var15 == var14)) { _fun0002_ip = 155; continue _fun0002 }
 135:
                var16 = _closure1_slot1;
                var17 = _closure1_slot2;
                var15 = 11;
                var15 = var17[var15];
                var14 = var16.bind(var8)(var15);
 155:
                var13 = var14;
 158:
                var1['icon'] = var13;
                var13 = var11.bind(var8)();
                var1['label'] = var13;
                var13 = function onPress() {
                    var3 = _closure2_slot0;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var1['onPress'] = var13;
                var13 = 2;
                var1['maxFontSizeMultiplier'] = var13;
                var1 = var9.bind(var8)(var7, var1);
                _fun0002_ip = 269; continue _fun0002;
 197:
                var9 = _closure1_slot9;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 9;
                var6 = var8[var6];
                var8 = undefined;
                var6 = var7.bind(var8)(var6);
                var7 = var6.ImageButton;
                var6 = {};
                var6['image'] = var12;
                var11 = var11.bind(var8)();
                var6['label'] = var11;
                var10 = function onPress() {
                    var3 = _closure2_slot0;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var6['onPress'] = var10;
                var10 = 2;
                var6['maxFontSizeMultiplier'] = var10;
                var1 = var9.bind(var8)(var7, var6);
 269:
                var2['children'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2, var5);
                return var1;
            }
        };
        var8 = var9.bind(var10)(var8);
        var1['children'] = var8;
        var5 = var3.bind(var4)(var5, var1);
        var1 = 8;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.GestureDetector;
        var1 = {};
        var1['gesture'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/instant_invite/native/components/InstantInviteShareApps.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();