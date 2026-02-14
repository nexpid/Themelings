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
    var4 = 9;
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
            var16 = var1.renderPreview;
            var17 = var1.backgroundColor;
            var8 = var1.accessibilityHidden;
            var12 = var1.isOwned;
            var5 = undefined;
            if(!(var12 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var12 = false;
case 2:
            var1 = _closure1_slot7;
            var7 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 5;
            var1 = var4[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useCardLayout;
            var1 = var1.bind(var3)();
            var3 = var1.cardWidth;
            var1 = null;
            var4 = var1 != var3;
            var10 = 170;
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var10 = var3;
case 4:
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var3 = 6;
            var3 = var21[var3];
            var6 = var20.bind(var5)(var3);
            var4 = var6.useToken;
            var18 = _closure1_slot1;
            var14 = 4;
            var3 = var21[var14];
            var3 = var18.bind(var5)(var3);
            var3 = var3.colors;
            var3 = var3.BG_SURFACE_RAISED;
            var15 = var4.bind(var6)(var3);
            var4 = _closure1_slot5;
            var6 = _closure1_slot4;
            var3 = {};
            var11 = var7.ownedOverlay;
            var3['style'] = var11;
            var11 = 'none';
            var3['pointerEvents'] = var11;
            var11 = 7;
            var11 = var21[var11];
            var11 = var20.bind(var5)(var11);
            var13 = var11.CheckmarkLargeBoldIcon;
            var11 = {};
            var14 = var21[var14];
            var14 = var18.bind(var5)(var14);
            var14 = var14.colors;
            var14 = var14.WHITE;
            var11['color'] = var14;
            var14 = 'custom';
            var11['size'] = var14;
            var14 = {'width': 40, 'height': 40};
            var11['style'] = var14;
            var14 = 8;
            var18 = var21[var14];
            var18 = var20.bind(var5)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var14 = var21[var14];
            var14 = var20.bind(var5)(var14);
            var14 = var14.t;
            var14 = var14.6cfuDj;
            var14 = var18.bind(var19)(var14);
            var11['accessibilityLabel'] = var14;
            var11 = var4.bind(var5)(var13, var11);
            var3['children'] = var11;
            var13 = var4.bind(var5)(var6, var3);
            var4 = _closure1_slot6;
            var3 = {};
            var14 = var7.cardContent;
            var11 = new Array(2);
            var11[0] = var14;
            var14 = {};
            if(!(var1 != var17)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var15 = var17;
case 6:
            var14['backgroundColor'] = var15;
            var11[1] = var14;
            var3['style'] = var11;
            var15 = _closure1_slot5;
            var14 = _closure1_slot4;
            var11 = {};
            var17 = var12;
            if(!var12) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var17 = var7.ownedCard;
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
            var6 = var4.bind(var5)(var6, var3);
            if(!(var1 != var9)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var1 = {};
            var11 = 'button';
            var1['accessibilityRole'] = var11;
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