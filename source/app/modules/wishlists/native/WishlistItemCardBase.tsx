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
    var8 = var4.StyleSheet;
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
    var9 = var5.bind(var1)(var4);
    var7 = var9.createStyles;
    var4 = {};
    var10 = {'aspectRatio': 1, 'borderWidth': 1, 'borderRadius': null, 'borderColor': null, 'overflow': 'hidden'};
    var12 = 4;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.lg;
    var10['borderRadius'] = var14;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var10['borderColor'] = var12;
    var4['card'] = var10;
    var12 = 'center';
    var10 = {'width': '100%', 'height': '100%', 'justifyContent': 'center', 'alignItems': 'center', 'overflow': 'hidden'};
    var4['cardContent'] = var10;
    var4 = var7.bind(var9)(var4);
    var _closure1_slot7 = var4;
    var7 = var8.create;
    var4 = {};
    var9 = {};
    var16 = var8.absoluteFillObject;
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
    var4 = 8;
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
            var15 = var1.renderPreview;
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
            var14 = _closure1_slot5;
            var6 = _closure1_slot4;
            var3 = {};
            var4 = _closure1_slot8;
            var4 = var4.ownedOverlay;
            var3['style'] = var4;
            var4 = 'none';
            var3['pointerEvents'] = var4;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var4 = 6;
            var4 = var20[var4];
            var4 = var19.bind(var5)(var4);
            var11 = var4.CheckmarkLargeBoldIcon;
            var4 = {};
            var16 = _closure1_slot1;
            var13 = 4;
            var13 = var20[var13];
            var13 = var16.bind(var5)(var13);
            var13 = var13.colors;
            var13 = var13.WHITE;
            var4['color'] = var13;
            var13 = 'custom';
            var4['size'] = var13;
            var13 = {'width': 40, 'height': 40};
            var4['style'] = var13;
            var13 = 7;
            var16 = var20[var13];
            var16 = var19.bind(var5)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var13 = var20[var13];
            var13 = var19.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.6cfuDj;
            var13 = var16.bind(var18)(var13);
            var4['accessibilityLabel'] = var13;
            var4 = var14.bind(var5)(var11, var4);
            var3['children'] = var4;
            var13 = var14.bind(var5)(var6, var3);
            var4 = _closure1_slot6;
            var3 = {};
            var16 = var7.cardContent;
            var11 = new Array(2);
            var11[0] = var16;
            var16 = {};
            var16['backgroundColor'] = var17;
            var11[1] = var16;
            var3['style'] = var11;
            var11 = {};
            var16 = var12;
            if(!var12) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var17 = _closure1_slot8;
            var16 = var17.ownedCard;
case 6:
            var11['style'] = var16;
            var15 = var15.bind(var5)();
            var11['children'] = var15;
            var14 = var14.bind(var5)(var6, var11);
            var11 = new Array(2);
            var11[0] = var14;
            if(!var12) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var12 = var13;
case 8:
            var11[1] = var12;
            var3['children'] = var11;
            var6 = var4.bind(var5)(var6, var3);
            if(!(var1 != var9)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
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
            if(!var8) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var9 = 'no-hide-descendants';
case 12:
            var1['importantForAccessibility'] = var9;
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 14; continue _fun0001;
case 10:
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
            if(!var8) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var7 = 'no-hide-descendants';
case 15:
            var2['importantForAccessibility'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 14:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();