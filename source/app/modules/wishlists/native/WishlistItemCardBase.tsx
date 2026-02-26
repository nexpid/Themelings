// app/modules/wishlists/native/WishlistItemCardBase.tsx
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
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Pressable;
    var _closure1_slot3 = var7;
    var10 = var4.StyleSheet;
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var11 = 2;
    var4 = var6[var11];
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
    var9 = {'aspectRatio': 1, 'borderWidth': 1, 'borderRadius': null, 'borderColor': null, 'justifyContent': 'center', 'alignItems': 'center', 'overflow': 'hidden'};
    var12 = 4;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.lg;
    var9['borderRadius'] = var14;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_MUTED;
    var9['borderColor'] = var12;
    var12 = 'center';
    var4['card'] = var9;
    var9 = {};
    var16 = var10.absoluteFillObject;
    var17 = var9;
    var10 = copyDataProperties(var17, var16);
    var10 = 'justifyContent';
    var9[var10] = var12;
    var10 = 'alignItems';
    var9[var10] = var12;
    var10 = 'zIndex';
    var9[var10] = var11;
    var10 = 0.5;
    var11 = 'shadowOpacity';
    var9[var11] = var10;
    var12 = 6;
    var11 = 'shadowRadius';
    var9[var11] = var12;
    var11 = 'elevation';
    var9[var11] = var12;
    var4['ownedOverlay'] = var9;
    var9 = {};
    var9['opacity'] = var10;
    var4['ownedCard'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/wishlists/native/WishlistItemCardBase.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function WishlistItemCardBase(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.onPress;
            var10 = var1.accessibilityLabel;
            var16 = var1.renderPreview;
            var4 = var1.size;
            var5 = undefined;
            if(!(var4 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = 170;
case 2:
            var12 = var1.isOwned;
            if(!(var12 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var12 = false;
case 4:
            var8 = var1.accessibilityHidden;
            var1 = _closure1_slot8;
            var18 = var1.bind(var5)();
            var11 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 5;
            var3 = var1[var3];
            var6 = var11.bind(var5)(var3);
            var3 = var6.useThemeContext;
            var3 = var3.bind(var6)();
            var15 = var3.theme;
            var7 = var3.primaryColor;
            var14 = var3.secondaryColor;
            var3 = 6;
            var3 = var1[var3];
            var13 = var11.bind(var5)(var3);
            var6 = var13.useUserProfileColors;
            var3 = {};
            var3['theme'] = var15;
            var3['primaryColor'] = var7;
            var3['secondaryColor'] = var14;
            var3 = var6.bind(var13)(var3);
            var3 = var3.containerBackground;
            var6 = 7;
            var6 = var1[var6];
            var13 = var11.bind(var5)(var6);
            var6 = var13.useToken;
            var14 = _closure1_slot1;
            var11 = 4;
            var1 = var1[var11];
            var1 = var14.bind(var5)(var1);
            var1 = var1.colors;
            var1 = var1.BG_SURFACE_RAISED;
            var6 = var6.bind(var13)(var1);
            var1 = null;
            if(!(var1 != var7)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var3;
case 6:
            var3 = var18.card;
            var7 = new Array(3);
            var7[0] = var3;
            var3 = {};
            var3['backgroundColor'] = var6;
            var7[1] = var3;
            var3 = {};
            var3['width'] = var4;
            var7[2] = var3;
            var15 = _closure1_slot5;
            var14 = _closure1_slot4;
            var3 = {};
            var4 = var18.ownedOverlay;
            var3['style'] = var4;
            var4 = 'none';
            var3['pointerEvents'] = var4;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var4 = 8;
            var4 = var20[var4];
            var4 = var19.bind(var5)(var4);
            var6 = var4.CheckmarkLargeBoldIcon;
            var4 = {};
            var13 = _closure1_slot1;
            var11 = var20[var11];
            var11 = var13.bind(var5)(var11);
            var11 = var11.colors;
            var11 = var11.WHITE;
            var4['color'] = var11;
            var11 = 'custom';
            var4['size'] = var11;
            var11 = {'width': 40, 'height': 40};
            var4['style'] = var11;
            var11 = 9;
            var13 = var20[var11];
            var13 = var19.bind(var5)(var13);
            var17 = var13.intl;
            var13 = var17.string;
            var11 = var20[var11];
            var11 = var19.bind(var5)(var11);
            var11 = var11.t;
            var11 = var11.6cfuDj;
            var11 = var13.bind(var17)(var11);
            var4['accessibilityLabel'] = var11;
            var4 = var15.bind(var5)(var6, var4);
            var3['children'] = var4;
            var13 = var15.bind(var5)(var14, var3);
            var6 = _closure1_slot7;
            var4 = _closure1_slot6;
            var3 = {};
            var11 = {};
            var17 = var12;
            if(!var12) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var17 = var18.ownedCard;
case 8:
            var11['style'] = var17;
            var16 = var16.bind(var5)();
            var11['children'] = var16;
            var14 = var15.bind(var5)(var14, var11);
            var11 = new Array(2);
            var11[0] = var14;
            if(!var12) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var12 = var13;
case 10:
            var11[1] = var12;
            var3['children'] = var11;
            var6 = var6.bind(var5)(var4, var3);
            if(!(var1 != var9)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
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
            if(!var8) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var9 = 'no-hide-descendants';
case 14:
            var1['importantForAccessibility'] = var9;
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 16; continue _fun0001;
case 12:
            var4 = _closure1_slot5;
            var3 = _closure1_slot4;
            var2 = {};
            var2['style'] = var7;
            var2['accessibilityElementsHidden'] = var8;
            var7 = 'auto';
            if(!var8) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var7 = 'no-hide-descendants';
case 17:
            var2['importantForAccessibility'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 16:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();