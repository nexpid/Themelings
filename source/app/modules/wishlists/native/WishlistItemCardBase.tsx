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
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.source;
            var11 = var1.recipientName;
            var4 = undefined;
            var _closure2_slot0 = var4;
            var1 = _closure1_slot8;
            var9 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 5;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.WishlistItemSource;
            var1 = var1.WISHLIST;
            if(!(var2 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 6;
            var2 = var10[var1];
            var2 = var6.bind(var4)(var2);
            var5 = var2.intl;
            var3 = var5.formatToPlainString;
            var1 = var10[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.t;
            var2 = var1.p3RmJF;
            var1 = {};
            var1['username'] = var11;
            var5 = var3.bind(var5)(var2, var1);
            _closure2_slot0 = var5;
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var9 = var9.sourceIcon;
            var1['style'] = var9;
            var7 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 7;
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
            var1['onPress'] = var7;
            var7 = 'button';
            var1['accessibilityRole'] = var7;
            var1['accessibilityLabel'] = var5;
            var7 = _closure1_slot5;
            var5 = 8;
            var5 = var10[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.HeartIcon;
            var5 = {};
            var9 = _closure1_slot1;
            var8 = 4;
            var8 = var10[var8];
            var8 = var9.bind(var4)(var8);
            var8 = var8.colors;
            var8 = var8.WHITE;
            var5['color'] = var8;
            var8 = 'md';
            var5['size'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 2:
            var1 = null;
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
    var9[var13] = var15;
    var13 = 'alignItems';
    var9[var13] = var15;
    var13 = 'zIndex';
    var9[var13] = var14;
    var13 = 0.5;
    var14 = 'shadowOpacity';
    var9[var14] = var13;
    var15 = 6;
    var14 = 'shadowRadius';
    var9[var14] = var15;
    var14 = 'elevation';
    var9[var14] = var15;
    var4['ownedOverlay'] = var9;
    var9 = {};
    var9['opacity'] = var13;
    var4['ownedCard'] = var9;
    var9 = {};
    var13 = 'absolute';
    var9['position'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9['top'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var9['right'] = var11;
    var9['zIndex'] = var10;
    var4['sourceIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/wishlists/native/WishlistItemCardBase.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function WishlistItemCardBase(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var9 = var1.onPress;
            var10 = var1.accessibilityLabel;
            var18 = var1.renderPreview;
            var16 = var1.source;
            var6 = var1.size;
            var5 = undefined;
            if(!(var6 === var5)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var6 = 170;
case 4:
            var12 = var1.isOwned;
            if(!(var12 === var5)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var12 = false;
case 6:
            var8 = var1.accessibilityHidden;
            var15 = var1.recipientName;
            var1 = _closure1_slot8;
            var20 = var1.bind(var5)();
            var11 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 9;
            var3 = var1[var3];
            var4 = var11.bind(var5)(var3);
            var3 = var4.useThemeContext;
            var3 = var3.bind(var4)();
            var17 = var3.theme;
            var7 = var3.primaryColor;
            var14 = var3.secondaryColor;
            var3 = 10;
            var3 = var1[var3];
            var13 = var11.bind(var5)(var3);
            var4 = var13.useUserProfileColors;
            var3 = {};
            var3['theme'] = var17;
            var3['primaryColor'] = var7;
            var3['secondaryColor'] = var14;
            var3 = var4.bind(var13)(var3);
            var3 = var3.containerBackground;
            var4 = 11;
            var4 = var1[var4];
            var11 = var11.bind(var5)(var4);
            var4 = var11.useToken;
            var13 = _closure1_slot1;
            var14 = 4;
            var1 = var1[var14];
            var1 = var13.bind(var5)(var1);
            var1 = var1.colors;
            var1 = var1.BG_SURFACE_RAISED;
            var4 = var4.bind(var11)(var1);
            var1 = null;
            if(!(var1 != var7)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = var3;
case 8:
            var3 = var20.card;
            var7 = new Array(3);
            var7[0] = var3;
            var3 = {};
            var3['backgroundColor'] = var4;
            var7[1] = var3;
            var4 = 'object';
            var3 = typeof var6;
            if(!(var4 !== var3)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var3 = {};
            var3['width'] = var6;
            var4 = 1;
            var3['aspectRatio'] = var4;
            _fun0002_ip = 12; continue _fun0002;
case 10:
            var4 = {};
            var11 = var6.width;
            var4['width'] = var11;
            var6 = var6.height;
            var4['height'] = var6;
            var3 = var4;
case 12:
            var7[2] = var3;
            var4 = _closure1_slot5;
            var17 = _closure1_slot4;
            var3 = {};
            var6 = var20.ownedOverlay;
            var3['style'] = var6;
            var6 = 'none';
            var3['pointerEvents'] = var6;
            var13 = _closure1_slot5;
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var6 = 12;
            var6 = var23[var6];
            var6 = var22.bind(var5)(var6);
            var11 = var6.CheckmarkLargeBoldIcon;
            var6 = {};
            var19 = _closure1_slot1;
            var14 = var23[var14];
            var14 = var19.bind(var5)(var14);
            var14 = var14.colors;
            var14 = var14.WHITE;
            var6['color'] = var14;
            var14 = 'custom';
            var6['size'] = var14;
            var14 = {'width': 40, 'height': 40};
            var6['style'] = var14;
            var14 = 6;
            var19 = var23[var14];
            var19 = var22.bind(var5)(var19);
            var21 = var19.intl;
            var19 = var21.string;
            var14 = var23[var14];
            var14 = var22.bind(var5)(var14);
            var14 = var14.t;
            var14 = var14.6cfuDj;
            var14 = var19.bind(var21)(var14);
            var6['accessibilityLabel'] = var14;
            var6 = var13.bind(var5)(var11, var6);
            var3['children'] = var6;
            var13 = var4.bind(var5)(var17, var3);
            var6 = _closure1_slot7;
            var4 = _closure1_slot6;
            var3 = {};
            var14 = _closure1_slot5;
            var11 = {};
            var19 = var12;
            if(!var12) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var19 = var20.ownedCard;
case 13:
            var11['style'] = var19;
            var18 = var18.bind(var5)();
            var11['children'] = var18;
            var14 = var14.bind(var5)(var17, var11);
            var11 = new Array(3);
            var11[0] = var14;
            if(!var12) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var12 = var13;
case 15:
            var11[1] = var12;
            var14 = _closure1_slot5;
            var13 = _closure1_slot9;
            var12 = {};
            var12['source'] = var16;
            var12['recipientName'] = var15;
            var12 = var14.bind(var5)(var13, var12);
            var11[2] = var12;
            var3['children'] = var11;
            var6 = var6.bind(var5)(var4, var3);
            if(!(var1 != var9)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var1 = {};
            var11 = 'button';
            var1['accessibilityRole'] = var11;
            var1['accessibilityLabel'] = var10;
            var1['style'] = var7;
            var1['onPress'] = var9;
            var1['accessibilityElementsHidden'] = var8;
            var9 = 'auto';
            if(!var8) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var9 = 'no-hide-descendants';
case 19:
            var1['importantForAccessibility'] = var9;
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0002_ip = 21; continue _fun0002;
case 17:
            var4 = _closure1_slot5;
            var3 = _closure1_slot4;
            var2 = {};
            var2['style'] = var7;
            var2['accessibilityElementsHidden'] = var8;
            var7 = 'auto';
            if(!var8) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = 'no-hide-descendants';
case 22:
            var2['importantForAccessibility'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 21:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();