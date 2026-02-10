// app/modules/premium/gifting/native/views/promotions/GiftingSKUCardsGrid.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isAvatarDecorationRecord;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isNameplateRecord;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 5;
    var7 = var6[var4];
    var10 = var5.bind(var1)(var7);
    var8 = var10.createStyles;
    var7 = {};
    var11 = {'height': 178, 'width': 150, 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center', 'justifyContent': 'center', 'borderWidth': 1, 'borderRadius': null, 'overflow': 'hidden'};
    var12 = 6;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var11['borderRadius'] = var14;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_SUBTLE;
    var11['borderColor'] = var14;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_4;
    var11['margin'] = var14;
    var7['card'] = var11;
    var11 = {'position': 'absolute', 'top': 10, 'zIndex': 2, 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'width': '100%', 'height': '75%'};
    var7['overlayContainer'] = var11;
    var11 = {};
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BRAND;
    var11['borderColor'] = var14;
    var7['selected'] = var11;
    var11 = {'position': 'absolute', 'opacity': 1, 'fontWeight': 'bold'};
    var7['checkmark'] = var11;
    var11 = {'position': 'absolute', 'top': 10, 'zIndex': 3, 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'width': '100%', 'height': '75%'};
    var7['checkmarkContainer'] = var11;
    var11 = {'position': 'absolute', 'bottom': 20, 'left': 0, 'right': 0, 'paddingHorizontal': null, 'alignItems': 'flex-start'};
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var11['paddingHorizontal'] = var12;
    var7['textContainer'] = var11;
    var7 = var8.bind(var10)(var7);
    var _closure1_slot9 = var7;
    var8 = var9.memo;
    var7 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var4 = var1.rewardSkuId;
            var _closure2_slot0 = var4;
            var14 = var1.claimed;
            var2 = var1.onSelect;
            var _closure2_slot1 = var2;
            var16 = var1.isSelected;
            var _closure2_slot2 = var16;
            var1 = _closure1_slot9;
            var5 = undefined;
            var10 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 7;
            var1 = var7[var1];
            var2 = var3.bind(var5)(var1);
            var1 = var2.useCurrentUser;
            var1 = var1.bind(var2)();
            var _closure2_slot3 = var1;
            var2 = 8;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.useFetchCollectiblesProduct;
            var2 = var2.bind(var3)(var4);
            var18 = var2.product;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(2);
            var2[0] = var16;
            var2[1] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var1 = undefined;
                    if(!var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var6 = _closure2_slot3;
                    var5 = var6.getAvatarSource;
                    var4 = null;
                    var3 = true;
                    var2 = 100;
                    var1 = var5.bind(var6)(var4, var3, var2);
case 2:
                    return var1;
                }
            };
            var19 = var3.bind(var4)(var1, var2);
            var1 = null;
            if(!(var1 != var18)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var18.items;
            var2 = 0;
            var17 = var3[var2];
            var4 = _closure1_slot8;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 9;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.PressableOpacity;
            var2 = {};
            var8 = var10.card;
            var7 = new Array(2);
            var7[0] = var8;
            var8 = var16;
            if(!var8) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = var10.selected;
case 6:
            var7[1] = var8;
            var2['style'] = var7;
            var6 = function onPress() {
                var3 = _closure2_slot1;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var2['onPress'] = var6;
            var6 = 0.8;
            var2['activeOpacity'] = var6;
            var2['disabled'] = var14;
            var6 = 'button';
            var2['accessibilityRole'] = var6;
            var8 = _closure1_slot7;
            var7 = _closure1_slot4;
            var6 = {};
            var9 = var10.overlayContainer;
            var6['style'] = var9;
            var9 = _closure1_slot6;
            var9 = var9.bind(var5)(var17);
            if(var9) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var9 = _closure1_slot5;
            var11 = var9.bind(var5)(var17);
            var9 = undefined;
            if(!var11) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var13 = _closure1_slot7;
            var12 = _closure1_slot1;
            var20 = _closure1_slot2;
            var11 = 11;
            var11 = var20[var11];
            var12 = var12.bind(var5)(var11);
            var11 = {};
            var11['item'] = var17;
            var20 = 100;
            var11['size'] = var20;
            var11['animate'] = var16;
            var11['avatarSource'] = var19;
            var9 = var13.bind(var5)(var12, var11);
case 10:
            _fun0001_ip = 12; continue _fun0001;
case 8:
            var13 = _closure1_slot7;
            var12 = _closure1_slot1;
            var19 = _closure1_slot2;
            var11 = 10;
            var11 = var19[var11];
            var12 = var12.bind(var5)(var11);
            var11 = {};
            var11['item'] = var17;
            var11['isPurchased'] = var14;
            var11['animate'] = var16;
            var9 = var13.bind(var5)(var12, var11);
case 12:
            var6['children'] = var9;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(3);
            var6[0] = var7;
            var7 = var14;
            if(!var7) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var11 = _closure1_slot7;
            var9 = _closure1_slot4;
            var8 = {};
            var12 = var10.checkmarkContainer;
            var8['style'] = var12;
            var13 = _closure1_slot0;
            var16 = _closure1_slot2;
            var12 = 12;
            var12 = var16[var12];
            var12 = var13.bind(var5)(var12);
            var13 = var12.CheckmarkLargeBoldIcon;
            var12 = {};
            var16 = 'lg';
            var12['size'] = var16;
            var16 = var10.checkmark;
            var12['style'] = var16;
            var12 = var11.bind(var5)(var13, var12);
            var8['children'] = var12;
            var7 = var11.bind(var5)(var9, var8);
case 13:
            var6[1] = var7;
            var9 = _closure1_slot8;
            var8 = _closure1_slot4;
            var7 = {};
            var10 = var10.textContainer;
            var7['style'] = var10;
            var13 = _closure1_slot7;
            var12 = _closure1_slot0;
            var16 = _closure1_slot2;
            var11 = 13;
            var10 = var16[var11];
            var10 = var12.bind(var5)(var10);
            var17 = var10.Text;
            var10 = {'variant': 'heading-sm/bold', 'color': 'mobile-text-heading-primary', 'lineClamp': 1, 'accessibilityRole': 'header'};
            var18 = var18.name;
            var10['children'] = var18;
            var17 = var13.bind(var5)(var17, var10);
            var10 = new Array(2);
            var10[0] = var17;
            var11 = var16[var11];
            var11 = var12.bind(var5)(var11);
            var12 = var11.Text;
            var11 = {'variant': 'text-xs/semibold', 'color': 'mobile-text-heading-primary', 'lineClamp': 1};
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var15 = 14;
            var16 = var19[var15];
            var16 = var18.bind(var5)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var19[var15];
            var15 = var18.bind(var5)(var15);
            var15 = var15.t;
            if(var14) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var14 = var15.QQsaCc;
            var14 = var16.bind(var17)(var14);
            _fun0001_ip = 17; continue _fun0001;
case 15:
            var15 = var15.6cfuDj;
            var14 = var16.bind(var17)(var15);
case 17:
            var11['children'] = var14;
            var11 = var13.bind(var5)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[2] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 4:
            return var1;
        }
    };
    var7 = var8.bind(var9)(var7);
    var _closure1_slot10 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'flexWrap': 'wrap', 'justifyContent': 'center'};
    var4['grid'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 15;
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
        var2 = _closure1_slot11;
        var4 = undefined;
        var6 = var2.bind(var4)();
        var3 = _closure1_slot7;
        var2 = _closure1_slot4;
        var1 = {};
        var6 = var6.grid;
        var1['style'] = var6;
        var6 = var7.map;
        var5 = function(arg1) {
            var5 = arg1;
            var _closure3_slot0 = var5;
            var4 = _closure1_slot7;
            var3 = _closure1_slot10;
            var2 = {};
            var2['rewardSkuId'] = var5;
            var8 = _closure2_slot0;
            var7 = var8.some;
            var6 = function(arg1) {
                var2 = _closure3_slot0;
                var1 = arg1;
                var1 = var1 === var2;
                return var1;
            };
            var6 = var7.bind(var8)(var6);
            var6 = !var6;
            var2['claimed'] = var6;
            var6 = _closure2_slot2;
            var6 = var6 === var5;
            var2['isSelected'] = var6;
            var1 = _closure2_slot1;
            var2['onSelect'] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2, var5);
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