// app/modules/collectibles/native/CollectiblesShopCardAssetTile.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = native4;
    var7 = var4.bind(var1)(var7);
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot5 = var8;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'overflow': 'hidden'};
    var4['assetContainer'] = var10;
    var10 = {};
    var11 = 5;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var10['borderBottomLeftRadius'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var10['borderBottomRightRadius'] = var13;
    var4['profileEffectAssetContainer'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.BLACK_460;
    var10['backgroundColor'] = var13;
    var4['assetContainerDarkBackground'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_TERTIARY;
    var10['backgroundColor'] = var11;
    var4['assetContainerLightBackground'] = var10;
    var10 = {'position': 'absolute', 'height': 100, 'width': 100};
    var4['avatarPlaceholder'] = var10;
    var10 = {'position': 'absolute', 'opacity': 1};
    var4['checkmark'] = var10;
    var10 = {'position': 'absolute', 'top': 0, 'zIndex': 2, 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'width': 150, 'height': 140};
    var4['overlayContainer'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot7 = var4;
    var4 = function PurchasedAssetOverlay(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var9 = var1.isDarkTheme;
            var1 = _closure1_slot7;
            var4 = undefined;
            var7 = var1.bind(var4)();
            var3 = _closure1_slot5;
            var2 = _closure1_slot4;
            var1 = {};
            var6 = var7.overlayContainer;
            var1['style'] = var6;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 6;
            var5 = var8[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.CheckmarkLargeIcon;
            var5 = {};
            var8 = 'lg';
            var5['size'] = var8;
            var8 = 'black';
            if(!var9) { _fun0001_ip = 89; continue _fun0001 }
 85:
            var8 = 'white';
 89:
            var5['color'] = var8;
            var7 = var7.checkmark;
            var5['style'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var4 = function Asset(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var2 = var1.product;
            var5 = var1.isDarkTheme;
            var8 = var1.isPurchased;
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var4 = 7;
            var6 = var3[var4];
            var4 = undefined;
            var7 = var10.bind(var4)(var6);
            var6 = var7.useShopProductItems;
            var7 = var6.bind(var7)(var2);
            var6 = var7.firstProfileEffect;
            var7 = var7.firstAvatarDecoration;
            var9 = var2.type;
            var12 = 8;
            var3 = var3[var12];
            var3 = var10.bind(var4)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.BUNDLE;
            if(!(var9 === var3)) { _fun0002_ip = 115; continue _fun0002 }
 102:
            var3 = null;
            if(!(var3 != var7)) { _fun0002_ip = 115; continue _fun0002 }
 108:
            if(!(var3 == var6)) { _fun0002_ip = 401; continue _fun0002 }
 115:
            var9 = _closure1_slot3;
            var3 = var2.items;
            var2 = 1;
            var3 = var9.bind(var4)(var3, var2);
            var2 = 0;
            var10 = var3[var2];
            var2 = null;
            var3 = var2 == var10;
            var9 = undefined;
            if(var3) { _fun0002_ip = 156; continue _fun0002 }
 151:
            var9 = var10.type;
 156:
            var11 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var12];
            var3 = var11.bind(var4)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.AVATAR_DECORATION;
            if(!(var3 !== var9)) { _fun0002_ip = 351; continue _fun0002 }
 192:
            var11 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var12];
            var3 = var11.bind(var4)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.PROFILE_EFFECT;
            if(!(var3 !== var9)) { _fun0002_ip = 303; continue _fun0002 }
 225:
            var11 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var12];
            var3 = var11.bind(var4)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.NAMEPLATE;
            if(!(var3 !== var9)) { _fun0002_ip = 260; continue _fun0002 }
 258:
            return var2;
 260:
            var9 = _closure1_slot5;
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 12;
            var2 = var11[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['item'] = var10;
            var2['isPurchased'] = var8;
            var2 = var9.bind(var4)(var3, var2);
            return var2;
 303:
            var9 = _closure1_slot5;
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 11;
            var2 = var11[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['item'] = var10;
            var2['isPurchased'] = var8;
            var2['isDarkTheme'] = var5;
            var2 = var9.bind(var4)(var3, var2);
            return var2;
 351:
            var9 = _closure1_slot5;
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 10;
            var2 = var11[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['isPurchased'] = var8;
            var2['item'] = var10;
            var10 = 120;
            var2['size'] = var10;
            var2 = var9.bind(var4)(var3, var2);
            return var2;
 401:
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 9;
            var1 = var9[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['isPurchased'] = var8;
            var1['deco'] = var7;
            var1['pfx'] = var6;
            var1['isDarkTheme'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var4 = function AssetTileInternal(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var1 = var2.product;
            var7 = var2.isDarkTheme;
            var5 = var2.children;
            var2 = _closure1_slot7;
            var4 = undefined;
            var12 = var2.bind(var4)();
            var3 = _closure1_slot3;
            var2 = var1.items;
            var1 = 1;
            var2 = var3.bind(var4)(var2, var1);
            var1 = 0;
            var9 = var2[var1];
            var3 = _closure1_slot5;
            var2 = _closure1_slot4;
            var1 = {};
            var10 = var12.assetContainer;
            var6 = new Array(4);
            var6[0] = var10;
            if(var7) { _fun0003_ip = 93; continue _fun0003 }
 85:
            var7 = var12.assetContainerLightBackground;
            _fun0003_ip = 99; continue _fun0003;
 93:
            var7 = var12.assetContainerDarkBackground;
 99:
            var6[1] = var7;
            var10 = null;
            var7 = var10 == var9;
            var13 = undefined;
            if(var7) { _fun0003_ip = 119; continue _fun0003 }
 114:
            var13 = var9.type;
 119:
            var14 = _closure1_slot0;
            var7 = _closure1_slot2;
            var11 = 8;
            var7 = var7[var11];
            var7 = var14.bind(var4)(var7);
            var7 = var7.CollectiblesItemType;
            var7 = var7.PROFILE_EFFECT;
            var7 = var13 === var7;
            if(!var7) { _fun0003_ip = 164; continue _fun0003 }
 158:
            var7 = var12.profileEffectAssetContainer;
 164:
            var6[2] = var7;
            var7 = {};
            var12 = var10 == var9;
            var13 = undefined;
            if(var12) { _fun0003_ip = 184; continue _fun0003 }
 179:
            var13 = var9.type;
 184:
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var11];
            var12 = var14.bind(var4)(var12);
            var12 = var12.CollectiblesItemType;
            var12 = var12.AVATAR_DECORATION;
            if(!(var13 !== var12)) { _fun0003_ip = 270; continue _fun0003 }
 217:
            var12 = var10 == var9;
            var10 = undefined;
            if(var12) { _fun0003_ip = 231; continue _fun0003 }
 226:
            var10 = var9.type;
 231:
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var11];
            var8 = var9.bind(var4)(var8);
            var8 = var8.CollectiblesItemType;
            var9 = var8.NAMEPLATE;
            var8 = '100%';
            if(!(var10 === var9)) { _fun0003_ip = 273; continue _fun0003 }
 270:
            var8 = 140;
 273:
            var7['height'] = var8;
            var8 = '100%';
            var7['width'] = var8;
            var6[3] = var7;
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var10 = var1.product;
            var9 = var1.isDarkTheme;
            var1 = var1.isPurchased;
            var4 = _closure1_slot6;
            var3 = _closure1_slot10;
            var2 = {};
            var2['product'] = var10;
            var2['isDarkTheme'] = var9;
            var7 = var1;
            if(!var7) { _fun0004_ip = 73; continue _fun0004 }
 50:
            var12 = _closure1_slot5;
            var11 = _closure1_slot8;
            var8 = {};
            var8['isDarkTheme'] = var9;
            var5 = undefined;
            var7 = var12.bind(var5)(var11, var8);
 73:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot5;
            var7 = _closure1_slot9;
            var6 = {};
            var6['product'] = var10;
            var6['isDarkTheme'] = var9;
            var6['isPurchased'] = var1;
            var1 = undefined;
            var6 = var8.bind(var1)(var7, var6);
            var5[1] = var6;
            var2['children'] = var5;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/CollectiblesShopCardAssetTile.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var2 = 200;
    var3['COLLECTIBLES_SHOP_CARD_SIZE'] = var2;
    var2 = 12;
    var3['COLLECTIBLES_SHOP_CARD_VERTICAL_MARGIN'] = var2;
    return var1;
})();