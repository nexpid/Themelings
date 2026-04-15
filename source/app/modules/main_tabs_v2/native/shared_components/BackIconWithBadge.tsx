// app/modules/main_tabs_v2/native/shared_components/BackIconWithBadge.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function IconWithBadge(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var6 = var2.includeNotificationsCount;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = false;
case 2:
            var18 = var2.Icon;
            var _closure2_slot0 = var4;
            var _closure2_slot1 = var4;
            var2 = _closure1_slot8;
            var14 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 6;
            var2 = var7[var2];
            var8 = var3.bind(var4)(var2);
            var5 = var8.useStateFromStores;
            var2 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getTotalMentionCount;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var5.bind(var8)(var3, var2);
            var5 = _closure1_slot1;
            var3 = 7;
            var3 = var7[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var5 = var3.value;
            var9 = null;
            var7 = var9 != var2;
            var10 = 0;
            var3 = 0;
            if(!var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var2;
case 4:
            var2 = 0;
            if(!var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var5;
case 6:
            var16 = var3 + var2;
            _closure2_slot0 = var16;
            var6 = _closure1_slot3;
            var5 = var6.useMemo;
            var3 = new Array(1);
            var3[0] = var16;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = 10;
                    if(!(!(var2 < var1))) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var2 = 8;
                    var3 = var1[var2];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3);
                    var1 = var1.BADGE_SIZE;
                    var1 = var1 + var2;
                    _fun0002_ip = 10; continue _fun0002;
case 8:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 8;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1 = var2.BADGE_SIZE;
case 10:
                    return var1;
                }
            };
            var6 = var5.bind(var6)(var2, var3);
            _closure2_slot1 = var6;
            var5 = _closure1_slot3;
            var3 = var5.useMemo;
            var2 = new Array(2);
            var2[0] = var16;
            var2[1] = var6;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = 0;
                    if(!(var1 === var2)) { _fun0003_ip = 3; continue _fun0003 }
case 11:
                    var1 = undefined;
                    return var1;
case 3:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 8;
                    var1 = var7[var4];
                    var5 = undefined;
                    var1 = var6.bind(var5)(var1);
                    var2 = var1.BADGE_PADDING;
                    var1 = {};
                    var8 = 9;
                    var8 = var7[var8];
                    var8 = var6.bind(var5)(var8);
                    var8 = var8.CutoutShape;
                    var8 = var8.RoundedRect;
                    var1['shape'] = var8;
                    var8 = 12;
                    var8 = var8 - var2;
                    var1['x'] = var8;
                    var8 = 16;
                    var8 = var8 - var2;
                    var1['y'] = var8;
                    var9 = _closure2_slot1;
                    var3 = 2;
                    var8 = var3 * var2;
                    var8 = var9 + var8;
                    var1['width'] = var8;
                    var8 = var7[var4];
                    var8 = var6.bind(var5)(var8);
                    var9 = var8.BADGE_SIZE;
                    var8 = var3 * var2;
                    var8 = var9 + var8;
                    var1['height'] = var8;
                    var4 = var7[var4];
                    var4 = var6.bind(var5)(var4);
                    var4 = var4.BADGE_SIZE;
                    var2 = var3 * var2;
                    var2 = var4 + var2;
                    var2 = var2 / var3;
                    var1['cornerRadius'] = var2;
                    return var1;
                }
            };
            var19 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {};
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 10;
            var5 = var7[var5];
            var6 = var6.bind(var4)(var5);
            var5 = var6.isAndroid;
            var6 = var5.bind(var6)();
            var5 = undefined;
            if(!var6) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var5 = {'height': 40, 'width': 40, 'paddingTop': 8, 'marginRight': 4294967288};
case 12:
            var1['style'] = var5;
            var7 = _closure1_slot7;
            var6 = _closure1_slot4;
            var5 = {};
            var8 = var14.backIcon;
            var5['style'] = var8;
            var12 = _closure1_slot6;
            var11 = _closure1_slot1;
            var15 = _closure1_slot2;
            var8 = 9;
            var8 = var15[var8];
            var11 = var11.bind(var4)(var8);
            var8 = {};
            if(!(var9 == var19)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var15 = new Array(0);
            _fun0001_ip = 16; continue _fun0001;
case 14:
            var17 = new Array(1);
            var17[0] = var19;
            var15 = var17;
case 16:
            var8['cutouts'] = var15;
            var17 = _closure1_slot6;
            var15 = {'size': 'md', 'style': null, 'color': 'interactive-text-default'};
            var19 = var14.backIcon;
            var15['style'] = var19;
            var15 = var17.bind(var4)(var18, var15);
            var8['children'] = var15;
            var11 = var12.bind(var4)(var11, var8);
            var8 = new Array(2);
            var8[0] = var11;
            var9 = null;
            if(!(var16 > var10)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var12 = _closure1_slot6;
            var11 = _closure1_slot4;
            var10 = {};
            var14 = var14.badgeWrapper;
            var10['style'] = var14;
            var15 = _closure1_slot6;
            var14 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = 8;
            var13 = var17[var13];
            var13 = var14.bind(var4)(var13);
            var14 = var13.Badge;
            var13 = {};
            var13['value'] = var16;
            var16 = 99;
            var13['maxValue'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var10['children'] = var13;
            var9 = var12.bind(var4)(var11, var10);
case 17:
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var1;
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
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'position': 'absolute', 'top': 16, 'left': 12};
    var4['badgeWrapper'] = var9;
    var9 = {'height': 24, 'width': 24};
    var4['backIcon'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'gap': null, 'borderRadius': null, 'padding': 7};
    var10 = 5;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var9['gap'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.modules;
    var12 = var12.button;
    var12 = var12.BORDER_RADIUS;
    var9['borderRadius'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
    var9['backgroundColor'] = var12;
    var4['iconWithBadge'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
    var9['backgroundColor'] = var10;
    var4['downIconWithBadge'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/BackIconWithBadge.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = {'top': 8, 'bottom': 8, 'left': 8, 'right': 8};
    var3['BACK_ICON_WITH_BADGE_HIT_SLOP'] = var4;
    var4 = function SettingsLeftIconWithBadge(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var8 = var2.navigation;
            var _closure2_slot0 = var8;
            var7 = var2.includeNotificationsCount;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var7 = false;
case 19:
            var5 = _closure1_slot3;
            var3 = var5.useMemo;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function() {
                var2 = _closure2_slot0;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                var2 = var1.index;
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var1 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot6;
            var2 = _closure1_slot9;
            var5 = {};
            var5['includeNotificationsCount'] = var7;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            if(var1) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var1 = 12;
            var1 = var8[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.XSmallIcon;
            var5['Icon'] = var1;
            var1 = var5;
            _fun0004_ip = 23; continue _fun0004;
case 21:
            var6 = 11;
            var6 = var8[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.ArrowLargeLeftIcon;
            var5['Icon'] = var6;
            var1 = var5;
case 23:
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['SettingsLeftIconWithBadge'] = var4;
    var4 = function LeftBackIconWithBadge(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var6 = var1.includeNotificationsCount;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0005_ip = 3; continue _fun0005 }
case 24:
            var6 = false;
case 3:
            var3 = _closure1_slot6;
            var2 = _closure1_slot9;
            var1 = {};
            var1['includeNotificationsCount'] = var6;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 11;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var5.ArrowLargeLeftIcon;
            var1['Icon'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['LeftBackIconWithBadge'] = var4;
    var2 = function CloseIconWithBadgeOnSide() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = _closure1_slot8;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var5 = var2.bind(var4)(var1);
            var3 = var5.useStateFromStores;
            var1 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getTotalMentionCount;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var3.bind(var5)(var2, var1);
            var6 = null;
            var3 = var6 != var1;
            var8 = 0;
            var2 = 0;
            if(!var3) { _fun0006_ip = 25; continue _fun0006 }
case 26:
            var2 = var1;
case 25:
            var3 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 7;
            var1 = var12[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var1 = var1.value;
            var10 = var2 + var1;
            var3 = _closure1_slot7;
            var2 = _closure1_slot4;
            var1 = {};
            var11 = var9.iconWithBadge;
            var5 = new Array(2);
            var5[0] = var11;
            var9 = var9.downIconWithBadge;
            var5[1] = var9;
            var1['style'] = var5;
            var11 = _closure1_slot6;
            var9 = _closure1_slot0;
            var5 = 12;
            var5 = var12[var5];
            var5 = var9.bind(var4)(var5);
            var9 = var5.XSmallIcon;
            var5 = {'size': 'sm', 'color': 'white'};
            var9 = var11.bind(var4)(var9, var5);
            var5 = new Array(2);
            var5[0] = var9;
            var6 = null;
            if(!(var10 > var8)) { _fun0006_ip = 27; continue _fun0006 }
case 28:
            var9 = _closure1_slot6;
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 8;
            var7 = var11[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Badge;
            var7 = {};
            var7['value'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 27:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['CloseIconWithBadgeOnSide'] = var2;
    return var1;
})();