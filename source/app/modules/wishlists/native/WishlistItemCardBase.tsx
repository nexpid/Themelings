// app/modules/wishlists/native/WishlistItemCardBase.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function SourceIcon(arg1) {
        var1 = arg1;
        var1 = var1.toastText;
        var _closure2_slot0 = var1;
        var1 = _closure1_slot8;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var3 = _closure1_slot5;
        var2 = _closure1_slot3;
        var1 = {'style': null, 'onPress': null, 'accessible': false, 'accessibilityElementsHidden': true, 'importantForAccessibility': 'no-hide-descendants'};
        var6 = var6.sourceIcon;
        var1['style'] = var6;
        var5 = function onPress() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.open;
            var2 = {};
            var5 = 'WISHLIST_SOURCE_ICON';
            var2['key'] = var5;
            var5 = _closure2_slot0;
            var2['content'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['onPress'] = var5;
        var7 = _closure1_slot5;
        var6 = _closure1_slot0;
        var10 = _closure1_slot2;
        var5 = 6;
        var5 = var10[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.HeartIcon;
        var5 = {};
        var9 = _closure1_slot1;
        var8 = 4;
        var8 = var10[var8];
        var8 = var9.bind(var4)(var8);
        var8 = var8.colors;
        var8 = var8.INTERACTIVE_ICON_DEFAULT;
        var5['color'] = var8;
        var8 = 'md';
        var5['size'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
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
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Pressable;
    var _closure1_slot3 = var7;
    var13 = var4.StyleSheet;
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var14 = 2;
    var4 = var6[var14];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var7 = var4.Fragment;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'borderWidth': 1, 'borderRadius': null, 'borderColor': null, 'justifyContent': 'center', 'alignItems': 'center', 'overflow': 'hidden'};
    var11 = 4;
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.lg;
    var9['borderRadius'] = var15;
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BORDER_MUTED;
    var9['borderColor'] = var15;
    var15 = 'center';
    var4['card'] = var9;
    var9 = {};
    var17 = var13.absoluteFillObject;
    var18 = var9;
    var13 = copyDataProperties(var18, var17);
    var13 = 'justifyContent';
    var9[12] = var15;
    var13 = 'alignItems';
    var9[12] = var15;
    var13 = 'zIndex';
    var9[12] = var14;
    var13 = 0.5;
    var14 = 'shadowOpacity';
    var9[13] = var13;
    var15 = 6;
    var14 = 'shadowRadius';
    var9[13] = var15;
    var14 = 'elevation';
    var9[13] = var15;
    var4['ownedOverlay'] = var9;
    var9 = {'width': '100%', 'height': '100%', 'justifyContent': 'center', 'alignItems': 'center'};
    var4['previewWrap'] = var9;
    var9 = {};
    var9['opacity'] = var13;
    var4['ownedCard'] = var9;
    var9 = {};
    var13 = 'absolute';
    var9['position'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_8;
    var9['top'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.space;
    var11 = var11.PX_8;
    var9['right'] = var11;
    var9['zIndex'] = var10;
    var4['sourceIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/wishlists/native/WishlistItemCardBase.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function WishlistItemCardBase(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var10 = var1.onPress;
            var3 = var1.accessibilityLabel;
            var19 = var1.renderPreview;
            var11 = var1.source;
            var8 = var1.size;
            var5 = undefined;
            if(!(var8 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = 170;
case 2:
            var14 = var1.isOwned;
            if(!(var14 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var14 = false;
case 4:
            var9 = var1.accessibilityHidden;
            var12 = var1.recipientName;
            var1 = _closure1_slot8;
            var23 = var1.bind(var5)();
            var13 = _closure1_slot0;
            var1 = _closure1_slot2;
            var4 = 7;
            var4 = var1[var4];
            var6 = var13.bind(var5)(var4);
            var4 = var6.useThemeContext;
            var4 = var4.bind(var6)();
            var17 = var4.theme;
            var7 = var4.primaryColor;
            var16 = var4.secondaryColor;
            var4 = 8;
            var4 = var1[var4];
            var15 = var13.bind(var5)(var4);
            var6 = var15.useUserProfileColors;
            var4 = {};
            var4['theme'] = var17;
            var4['primaryColor'] = var7;
            var4['secondaryColor'] = var16;
            var4 = var6.bind(var15)(var4);
            var4 = var4.containerBackground;
            var6 = 9;
            var6 = var1[var6];
            var13 = var13.bind(var5)(var6);
            var6 = var13.useToken;
            var15 = _closure1_slot1;
            var22 = 4;
            var1 = var1[var22];
            var1 = var15.bind(var5)(var1);
            var1 = var1.colors;
            var1 = var1.BG_SURFACE_RAISED;
            var6 = var6.bind(var13)(var1);
            var1 = null;
            if(!(var1 != var7)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var4;
case 6:
            var4 = var23.card;
            var7 = new Array(3);
            var7[0] = var4;
            var4 = {};
            var4['backgroundColor'] = var6;
            var7[1] = var4;
            var6 = 'object';
            var4 = typeof var8;
            if(!(var6 !== var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = {};
            var4['width'] = var8;
            var6 = 1;
            var4['aspectRatio'] = var6;
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var6 = {};
            var13 = var8.width;
            var6['width'] = var13;
            var8 = var8.height;
            var6['height'] = var8;
            var4 = var6;
case 10:
            var7[2] = var4;
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var8 = 10;
            var8 = var4[var8];
            var8 = var6.bind(var5)(var8);
            var8 = var8.WishlistItemSource;
            var8 = var8.WISHLIST;
            var13 = var11 === var8;
            var15 = 11;
            var8 = var4[var15];
            var8 = var6.bind(var5)(var8);
            var11 = var8.intl;
            var8 = var11.formatToPlainString;
            var4 = var4[var15];
            var4 = var6.bind(var5)(var4);
            var4 = var4.t;
            var6 = var4.p3RmJF;
            var4 = {};
            var4['username'] = var12;
            var17 = var8.bind(var11)(var6, var4);
            var6 = new Array(3);
            var6[0] = var3;
            var3 = null;
            if(!var14) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var12 = _closure1_slot0;
            var4 = _closure1_slot2;
            var8 = var4[var15];
            var8 = var12.bind(var5)(var8);
            var11 = var8.intl;
            var8 = var11.string;
            var4 = var4[var15];
            var4 = var12.bind(var5)(var4);
            var4 = var4.t;
            var4 = var4["6cfuDj"];
            var3 = var8.bind(var11)(var4);
case 11:
            var6[1] = var3;
            var3 = null;
            if(!var13) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var3 = var17;
case 13:
            var6[2] = var3;
            var4 = var6.filter;
            var12 = _closure1_slot0;
            var16 = _closure1_slot2;
            var3 = 12;
            var3 = var16[var3];
            var3 = var12.bind(var5)(var3);
            var3 = var3.isNotNullish;
            var6 = var4.bind(var6)(var3);
            var4 = var6.join;
            var3 = ', ';
            var11 = var4.bind(var6)(var3);
            var4 = _closure1_slot5;
            var18 = _closure1_slot4;
            var3 = {'style': null, 'pointerEvents': 'none', 'accessibilityElementsHidden': true, 'importantForAccessibility': 'no-hide-descendants'};
            var6 = var23.ownedOverlay;
            var3['style'] = var6;
            var20 = true;
            var8 = 'no-hide-descendants';
            var15 = _closure1_slot5;
            var6 = 13;
            var6 = var16[var6];
            var6 = var12.bind(var5)(var6);
            var12 = var6.CheckmarkLargeBoldIcon;
            var6 = {};
            var21 = _closure1_slot1;
            var16 = var16[var22];
            var16 = var21.bind(var5)(var16);
            var16 = var16.colors;
            var16 = var16.WHITE;
            var6['color'] = var16;
            var16 = 'custom';
            var6['size'] = var16;
            var16 = {'width': 40, 'height': 40};
            var6['style'] = var16;
            var6 = var15.bind(var5)(var12, var6);
            var3['children'] = var6;
            var15 = var4.bind(var5)(var18, var3);
            var6 = _closure1_slot7;
            var4 = _closure1_slot6;
            var3 = {};
            var16 = _closure1_slot5;
            var12 = {};
            var22 = var23.previewWrap;
            var21 = new Array(2);
            var21[0] = var22;
            var22 = var14;
            if(!var14) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var22 = var23.ownedCard;
case 15:
            var21[1] = var22;
            var12['style'] = var21;
            var12['aria-hidden'] = var20;
            var19 = var19.bind(var5)();
            var12['children'] = var19;
            var16 = var16.bind(var5)(var18, var12);
            var12 = new Array(3);
            var12[0] = var16;
            if(!var14) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var14 = var15;
case 17:
            var12[1] = var14;
            if(!var13) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var16 = _closure1_slot5;
            var15 = _closure1_slot9;
            var14 = {};
            var14['toastText'] = var17;
            var13 = var16.bind(var5)(var15, var14);
case 19:
            var12[2] = var13;
            var3['children'] = var12;
            var6 = var6.bind(var5)(var4, var3);
            if(!(var1 != var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var1 = {};
            var12 = 'button';
            var1['accessibilityRole'] = var12;
            var1['accessibilityLabel'] = var11;
            var1['style'] = var7;
            var1['onPress'] = var10;
            var1['accessibilityElementsHidden'] = var9;
            var10 = 'auto';
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var10 = var8;
case 23:
            var1['importantForAccessibility'] = var10;
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 25; continue _fun0001;
case 21:
            var4 = _closure1_slot5;
            var3 = _closure1_slot4;
            var2 = {};
            var2['style'] = var7;
            var2['accessibilityElementsHidden'] = var9;
            var7 = 'auto';
            if(!var9) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var7 = var8;
case 26:
            var2['importantForAccessibility'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 25:
            return var1;
        }
    };
    var3['default'] = var2;
    var2 = 170;
    var3['DEFAULT_ITEM_SIZE'] = var2;
    return var1;
})();