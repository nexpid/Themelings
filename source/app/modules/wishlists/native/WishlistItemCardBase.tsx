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
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'aspectRatio': 1, 'borderWidth': 1, 'borderRadius': null, 'borderColor': null, 'overflow': 'hidden'};
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
    var4['card'] = var9;
    var12 = 'center';
    var9 = {'width': '100%', 'height': '100%', 'justifyContent': 'center', 'alignItems': 'center', 'overflow': 'hidden'};
    var4['cardContent'] = var9;
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
    var _closure1_slot7 = var4;
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
            var11 = var1.accessibilityLabel;
            var16 = var1.renderPreview;
            var10 = var1.size;
            var5 = undefined;
            if(!(var10 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = 170;
case 2:
            var13 = var1.isOwned;
            if(!(var13 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var13 = false;
case 4:
            var8 = var1.accessibilityHidden;
            var1 = _closure1_slot7;
            var7 = var1.bind(var5)();
            var12 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 5;
            var3 = var1[var3];
            var4 = var12.bind(var5)(var3);
            var3 = var4.useThemeContext;
            var3 = var3.bind(var4)();
            var17 = var3.theme;
            var4 = var3.primaryColor;
            var15 = var3.secondaryColor;
            var3 = 6;
            var3 = var1[var3];
            var14 = var12.bind(var5)(var3);
            var6 = var14.useUserProfileColors;
            var3 = {};
            var3['theme'] = var17;
            var3['primaryColor'] = var4;
            var3['secondaryColor'] = var15;
            var3 = var6.bind(var14)(var3);
            var3 = var3.containerBackground;
            var6 = 7;
            var6 = var1[var6];
            var12 = var12.bind(var5)(var6);
            var6 = var12.useToken;
            var15 = _closure1_slot1;
            var14 = 4;
            var1 = var1[var14];
            var1 = var15.bind(var5)(var1);
            var1 = var1.colors;
            var1 = var1.BG_SURFACE_RAISED;
            var18 = var6.bind(var12)(var1);
            var1 = null;
            if(!(var1 != var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var18 = var3;
case 6:
            var15 = _closure1_slot5;
            var6 = _closure1_slot4;
            var3 = {};
            var4 = var7.ownedOverlay;
            var3['style'] = var4;
            var4 = 'none';
            var3['pointerEvents'] = var4;
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var4 = 8;
            var4 = var21[var4];
            var4 = var20.bind(var5)(var4);
            var12 = var4.CheckmarkLargeBoldIcon;
            var4 = {};
            var17 = _closure1_slot1;
            var14 = var21[var14];
            var14 = var17.bind(var5)(var14);
            var14 = var14.colors;
            var14 = var14.WHITE;
            var4['color'] = var14;
            var14 = 'custom';
            var4['size'] = var14;
            var14 = {'width': 40, 'height': 40};
            var4['style'] = var14;
            var14 = 9;
            var17 = var21[var14];
            var17 = var20.bind(var5)(var17);
            var19 = var17.intl;
            var17 = var19.string;
            var14 = var21[var14];
            var14 = var20.bind(var5)(var14);
            var14 = var14.t;
            var14 = var14.6cfuDj;
            var14 = var17.bind(var19)(var14);
            var4['accessibilityLabel'] = var14;
            var4 = var15.bind(var5)(var12, var4);
            var3['children'] = var4;
            var14 = var15.bind(var5)(var6, var3);
            var4 = _closure1_slot6;
            var3 = {};
            var17 = var7.cardContent;
            var12 = new Array(2);
            var12[0] = var17;
            var17 = {};
            var17['backgroundColor'] = var18;
            var12[1] = var17;
            var3['style'] = var12;
            var12 = {};
            var17 = var13;
            if(!var13) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var17 = var7.ownedCard;
case 8:
            var12['style'] = var17;
            var16 = var16.bind(var5)();
            var12['children'] = var16;
            var15 = var15.bind(var5)(var6, var12);
            var12 = new Array(2);
            var12[0] = var15;
            if(!var13) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var13 = var14;
case 10:
            var12[1] = var13;
            var3['children'] = var12;
            var6 = var4.bind(var5)(var6, var3);
            if(!(var1 != var9)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var1 = {};
            var12 = 'button';
            var1['accessibilityRole'] = var12;
            var1['accessibilityLabel'] = var11;
            var12 = var7.card;
            var11 = new Array(2);
            var11[0] = var12;
            var12 = {};
            var12['width'] = var10;
            var11[1] = var12;
            var1['style'] = var11;
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
            var9 = var7.card;
            var7 = new Array(2);
            var7[0] = var9;
            var9 = {};
            var9['width'] = var10;
            var7[1] = var9;
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