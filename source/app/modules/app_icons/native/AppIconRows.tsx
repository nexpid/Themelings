// app/modules/app_icons/native/AppIconRows.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function BackwardsCompatibleAppIconRows(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var2 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var18 = {};
            var5 = undefined;
            var17 = var2;
            var16 = undefined;
            var1 = copyDataProperties(var18, var17, var16);
            var _closure2_slot0 = var1;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var3 = _closure1_slot11;
            var7 = var3.bind(var5)();
            var8 = _closure1_slot4;
            var4 = var8.useState;
            var3 = false;
            var8 = var4.bind(var8)(var3);
            var4 = _closure1_slot3;
            var3 = 2;
            var4 = var4.bind(var5)(var8, var3);
            var3 = 0;
            var3 = var4[var3];
            _closure2_slot1 = var3;
            var3 = 1;
            var3 = var4[var3];
            _closure2_slot2 = var3;
            var11 = var1.icons;
            var10 = var1.title;
            var1 = function onLongPress(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 6;
                    var1 = var3[var1];
                    var4 = undefined;
                    var1 = var2.bind(var4)(var1);
                    var1 = var1.FreemiumAppIconIds;
                    var3 = var1.DEFAULT;
                    var2 = arg1;
                    var1 = null;
                    if(!(var2 === var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = _closure2_slot2;
                    var2 = true;
                    var1 = var3.bind(var4)(var2);
case 4:
                    return var1;
                }
            };
            _closure2_slot3 = var1;
            var4 = _closure1_slot8;
            var3 = _closure1_slot5;
            var1 = {};
            var7 = var7.container;
            var1['style'] = var7;
            var8 = _closure1_slot8;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = 7;
            var6 = var15[var6];
            var6 = var14.bind(var5)(var6);
            var7 = var6.TableRowGroup;
            var6 = {};
            var6['title'] = var10;
            var10 = 'radiogroup';
            var6['accessibilityRole'] = var10;
            var10 = 8;
            var12 = var15[var10];
            var12 = var14.bind(var5)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var10 = var15[var10];
            var10 = var14.bind(var5)(var10);
            var10 = var10.t;
            var10 = var10.N4YDam;
            var10 = var12.bind(var13)(var10);
            var6['accessibilityLabel'] = var10;
            var10 = true;
            var6['hasIcons'] = var10;
            var10 = var11.map;
            var9 = function(arg1) {
                var7 = arg1;
                var4 = _closure1_slot7;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 9;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var9 = _closure2_slot0;
                var10 = var1;
                var6 = copyDataProperties(var10, var9);
                var8 = var7.id;
                var6 = 'key';
                var1[var6] = var8;
                var6 = 'icon';
                var1[var6] = var7;
                var7 = _closure2_slot1;
                var6 = 'showEasterEgg';
                var1[var6] = var7;
                var6 = _closure2_slot3;
                var5 = 'onLongPress';
                var1[var5] = var6;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var9 = var10.bind(var11)(var9);
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            return var1;
case 2:
            var17 = "Cannot destructure 'undefined' or 'null'.";
            var18 = var2;
            var1 = throwTypeError(var18, var17);
            var1 = undefined;
            throw var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var9 = var6[var4];
    var7 = metroImportAll;
    var7 = var7.bind(var1)(var9);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.View;
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.createElement;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var7 = var4.Fragment;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 16;
    var9['padding'] = var10;
    var4['container'] = var9;
    var9 = {};
    var10 = 56;
    var9['paddingBottom'] = var10;
    var4['bottomUpsellPadding'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_icons/native/AppIconRows.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AppIconRows(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var12 = var2.onSelect;
            var2 = _closure1_slot11;
            var4 = undefined;
            var10 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 10;
            var2 = var6[var2];
            var5 = var3.bind(var4)(var2);
            var2 = var5.useAppIcons;
            var2 = var2.bind(var5)();
            var16 = var2.officialAppIcons;
            var9 = var2.limitedTimeAppIcons;
            var13 = var2.currentAppIcon;
            var2 = 11;
            var2 = var6[var2];
            var8 = var3.bind(var4)(var2);
            var7 = var8.useStateFromStores;
            var2 = _closure1_slot6;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var7.bind(var8)(var5, var2);
            var2 = 12;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.isPremium;
            var17 = var2.bind(var3)(var5);
            var3 = var9.length;
            var2 = 0;
            var15 = var3 > var2;
            if(!var15) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var3 = var9.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.isHidden;
                var1 = !var1;
                return var1;
            };
            var1 = var3.bind(var9)(var1);
            var1 = var1.length;
            var15 = var1 > var2;
case 6:
            var3 = _closure1_slot10;
            var2 = _closure1_slot9;
            var1 = {};
            var6 = null;
            if(!var15) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var8 = _closure1_slot8;
            var7 = _closure1_slot12;
            var5 = {};
            var5['hasNitro'] = var17;
            var5['icons'] = var9;
            var5['currentAppIcon'] = var13;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var9 = 8;
            var11 = var20[var9];
            var11 = var19.bind(var4)(var11);
            var18 = var11.intl;
            var11 = var18.string;
            var9 = var20[var9];
            var9 = var19.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.anqaFR;
            var9 = var11.bind(var18)(var9);
            var5['title'] = var9;
            var5['onSelect'] = var12;
            var6 = var8.bind(var4)(var7, var5);
case 8:
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot8;
            var7 = _closure1_slot5;
            var6 = {};
            var9 = !var17;
            if(!var9) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var9 = var10.bottomUpsellPadding;
case 10:
            var6['style'] = var9;
            var11 = _closure1_slot8;
            var10 = _closure1_slot12;
            var9 = {};
            var9['hasNitro'] = var17;
            var9['icons'] = var16;
            var9['currentAppIcon'] = var13;
            var13 = undefined;
            if(!var15) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var14 = 8;
            var15 = var18[var14];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.Ipxkoq;
            var13 = var15.bind(var16)(var14);
case 12:
            var9['title'] = var13;
            var9['onSelect'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();