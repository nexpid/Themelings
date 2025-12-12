// app/modules/premium/gifting/native/views/promotions/GiftingSKUCardsGrid.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var9 = var4.bind(var1)(var7);
    var _closure1_slot3 = var9;
    var12 = 1;
    var4 = var6[var12];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 3;
    var7 = var6[var4];
    var13 = var5.bind(var1)(var7);
    var8 = var13.createStyles;
    var7 = {};
    var14 = {'height': 178, 'width': 150, 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center', 'justifyContent': 'center', 'borderWidth': 1, 'borderRadius': null, 'overflow': 'hidden'};
    var10 = 4;
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var14['borderRadius'] = var15;
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BORDER_SUBTLE;
    var14['borderColor'] = var15;
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_4;
    var14['margin'] = var15;
    var7['card'] = var14;
    var14 = {'position': 'absolute', 'top': 10, 'zIndex': 2, 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'width': '100%', 'height': '75%'};
    var7['overlayContainer'] = var14;
    var14 = {};
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BRAND;
    var14['borderColor'] = var15;
    var7['selected'] = var14;
    var14 = {};
    var15 = 0.5;
    var14['opacity'] = var15;
    var7['claimed'] = var14;
    var14 = {'position': 'absolute', 'opacity': 1, 'fontWeight': 'bold'};
    var7['checkmark'] = var14;
    var14 = {'position': 'absolute', 'top': 10, 'zIndex': 3, 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'width': '100%', 'height': '75%'};
    var7['checkmarkContainer'] = var14;
    var14 = {'position': 'absolute', 'bottom': 20, 'left': 0, 'right': 0, 'paddingHorizontal': null, 'alignItems': 'flex-start'};
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var14['paddingHorizontal'] = var15;
    var7['textContainer'] = var14;
    var7 = var8.bind(var13)(var7);
    var _closure1_slot7 = var7;
    var8 = var9.memo;
    var7 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var17 = var1.reward;
            var _closure2_slot0 = var17;
            var13 = var1.claimed;
            var2 = var1.onSelect;
            var _closure2_slot1 = var2;
            var15 = var1.isSelected;
            var _closure2_slot2 = var15;
            var1 = _closure1_slot7;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 5;
            var1 = var6[var1];
            var3 = var2.bind(var4)(var1);
            var1 = var3.useCurrentUser;
            var1 = var1.bind(var3)();
            var _closure2_slot3 = var1;
            var7 = var17.type;
            var3 = 6;
            var3 = var6[var3];
            var3 = var2.bind(var4)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.NAMEPLATE;
            var8 = var7 === var3;
            var _closure2_slot4 = var8;
            var10 = _closure1_slot3;
            var11 = var10.useMemo;
            var7 = new Array(2);
            var7[0] = var17;
            var7[1] = var8;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot4;
                    if(var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 6;
                    var4 = var4[var2];
                    var2 = undefined;
                    var4 = var5.bind(var2)(var4);
                    var4 = var4.CollectiblesItemType;
                    var4 = var4.AVATAR_DECORATION;
                    var1['type'] = var4;
                    var4 = _closure2_slot0;
                    var5 = var4.assetId;
                    var1['asset'] = var5;
                    var5 = var4.skuId;
                    var1['skuId'] = var5;
                    var5 = var4.a11yLabel;
                    var4 = null;
                    var4 = var4 == var5;
                    if(var4) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = _closure2_slot0;
                    var4 = var5.a11yLabel;
                    var2 = var4.bind(var5)();
case 4:
                    var1['label'] = var2;
                    _fun0002_ip = 6; continue _fun0002;
case 2:
                    var2 = {};
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 6;
                    var5 = var6[var5];
                    var6 = undefined;
                    var5 = var7.bind(var6)(var5);
                    var5 = var5.CollectiblesItemType;
                    var5 = var5.NAMEPLATE;
                    var2['type'] = var5;
                    var5 = _closure2_slot0;
                    var7 = var5.assetId;
                    var2['asset'] = var7;
                    var7 = var5.skuId;
                    var2['skuId'] = var7;
                    var7 = var5.a11yLabel;
                    var5 = null;
                    var7 = var5 == var7;
                    var8 = undefined;
                    if(var7) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var9 = _closure2_slot0;
                    var7 = var9.a11yLabel;
                    var8 = var7.bind(var9)();
case 7:
                    var9 = var5 != var8;
                    var7 = '';
                    if(!var9) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var7 = var8;
case 9:
                    var2['label'] = var7;
                    var3 = _closure2_slot0;
                    var3 = var3.palette;
                    if(!(var5 == var3)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 7;
                    var4 = var7[var4];
                    var4 = var5.bind(var6)(var4);
                    var4 = var4.NameplatePalette;
                    var3 = var4.TEAL;
case 11:
                    var2['palette'] = var3;
                    var1 = var2;
case 6:
                    return var1;
                }
            };
            var16 = var11.bind(var10)(var3, var7);
            var7 = var10.useMemo;
            var3 = new Array(2);
            var3[0] = var15;
            var3[1] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var1 = undefined;
                    if(!var3) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var6 = _closure2_slot3;
                    var5 = var6.getAvatarSource;
                    var4 = null;
                    var3 = true;
                    var2 = 100;
                    var1 = var5.bind(var6)(var4, var3, var2);
case 13:
                    return var1;
                }
            };
            var19 = var7.bind(var10)(var1, var3);
            var3 = _closure1_slot6;
            var1 = 8;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var7 = var9.card;
            var6 = new Array(2);
            var6[0] = var7;
            var7 = var15;
            if(!var7) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var7 = var9.selected;
case 15:
            var6[1] = var7;
            var1['style'] = var6;
            var5 = function onPress() {
                var3 = _closure2_slot1;
                var1 = _closure2_slot0;
                var2 = var1.skuId;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var1['onPress'] = var5;
            var5 = 0.8;
            var1['activeOpacity'] = var5;
            var1['disabled'] = var13;
            var5 = 'button';
            var1['accessibilityRole'] = var5;
            var7 = _closure1_slot5;
            var6 = _closure1_slot4;
            var5 = {};
            var10 = var9.overlayContainer;
            var5['style'] = var10;
            var12 = _closure1_slot5;
            var11 = _closure1_slot1;
            var18 = _closure1_slot2;
            if(var8) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var8 = 10;
            var8 = var18[var8];
            var10 = var11.bind(var4)(var8);
            var8 = {};
            var8['item'] = var16;
            var20 = 100;
            var8['size'] = var20;
            var8['animate'] = var15;
            var8['avatarSource'] = var19;
            var8 = var12.bind(var4)(var10, var8);
            _fun0001_ip = 19; continue _fun0001;
case 17:
            var10 = 9;
            var10 = var18[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['item'] = var16;
            var10['isPurchased'] = var13;
            var10['animate'] = var15;
            var8 = var12.bind(var4)(var11, var10);
case 19:
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var6 = var13;
            if(!var6) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var10 = _closure1_slot5;
            var8 = _closure1_slot4;
            var7 = {};
            var11 = var9.checkmarkContainer;
            var7['style'] = var11;
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 11;
            var11 = var15[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.CheckmarkLargeBoldIcon;
            var11 = {};
            var15 = 'lg';
            var11['size'] = var15;
            var15 = var9.checkmark;
            var11['style'] = var15;
            var11 = var10.bind(var4)(var12, var11);
            var7['children'] = var11;
            var6 = var10.bind(var4)(var8, var7);
case 20:
            var5[1] = var6;
            var8 = _closure1_slot6;
            var7 = _closure1_slot4;
            var6 = {};
            var9 = var9.textContainer;
            var6['style'] = var9;
            var11 = _closure1_slot5;
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var15 = 12;
            var9 = var9[var15];
            var9 = var10.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {'variant': 'heading-sm/bold', 'color': 'mobile-text-heading-primary', 'lineClamp': 1, 'accessibilityRole': 'header'};
            var16 = var17.name;
            var12 = null;
            var16 = var12 == var16;
            var12 = undefined;
            if(var16) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var16 = var17.name;
            var12 = var16.bind(var17)();
case 22:
            var9['children'] = var12;
            var10 = var11.bind(var4)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var12 = _closure1_slot5;
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var15];
            var10 = var11.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'text-xs/semibold', 'color': 'mobile-text-heading-primary', 'lineClamp': 1};
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var14 = 13;
            var15 = var18[var14];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            if(var13) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var13 = var14.QQsaCc;
            var13 = var15.bind(var16)(var13);
            _fun0001_ip = 26; continue _fun0001;
case 24:
            var14 = var14.6cfuDj;
            var13 = var15.bind(var16)(var14);
case 26:
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var7 = var8.bind(var9)(var7);
    var _closure1_slot8 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var12;
    var4['container'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9['padding'] = var10;
    var4['contentContainer'] = var9;
    var9 = {'flexDirection': 'row', 'flexWrap': 'wrap', 'justifyContent': 'center'};
    var4['grid'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/gifting/native/views/promotions/GiftingSKUCardsGrid.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GiftingSKUCardsGrid(arg1) {
        var1 = arg1;
        var7 = var1.rewardsToDisplay;
        var2 = var1.claimableRewards;
        var _closure2_slot0 = var2;
        var2 = var1.onSelect;
        var _closure2_slot1 = var2;
        var1 = var1.highlightedSkuId;
        var _closure2_slot2 = var1;
        var2 = _closure1_slot9;
        var4 = undefined;
        var6 = var2.bind(var4)();
        var3 = _closure1_slot5;
        var2 = _closure1_slot4;
        var1 = {};
        var6 = var6.grid;
        var1['style'] = var6;
        var6 = var7.map;
        var5 = function(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var5 = _closure1_slot5;
            var4 = _closure1_slot8;
            var3 = {};
            var3['reward'] = var1;
            var8 = _closure2_slot0;
            var7 = var8.some;
            var6 = function(arg1) {
                var1 = arg1;
                var2 = var1.skuId;
                var1 = _closure3_slot0;
                var1 = var1.skuId;
                var1 = var2 === var1;
                return var1;
            };
            var6 = var7.bind(var8)(var6);
            var6 = !var6;
            var3['claimed'] = var6;
            var7 = _closure2_slot2;
            var6 = var1.skuId;
            var6 = var7 === var6;
            var3['isSelected'] = var6;
            var2 = _closure2_slot1;
            var3['onSelect'] = var2;
            var2 = var1.skuId;
            var1 = undefined;
            var1 = var5.bind(var1)(var4, var3, var2);
            return var1;
        };
        var5 = var6.bind(var7)(var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();