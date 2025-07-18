// app/modules/collectibles/native/CollectiblesShopFeaturedPage.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityIndicator;
    var _closure1_slot3 = var7;
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
    var9 = {};
    var10 = 5;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_32;
    var9['marginBottom'] = var12;
    var4['heroContainer'] = var9;
    var9 = {};
    var12 = '100%';
    var9['height'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9['paddingHorizontal'] = var10;
    var4['featuredContainer'] = var9;
    var9 = {};
    var10 = 200;
    var9['height'] = var10;
    var4['container'] = var9;
    var9 = {'position': 'absolute', 'top': '50%', 'left': '50%', 'marginTop': 4294967288, 'marginLeft': 4294967288};
    var4['spinner'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = function ShopBlockItem(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.block;
            var1 = _closure1_slot8;
            var4 = undefined;
            var6 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useMobileShopCardV2Enabled;
            var1 = 'CollectiblesShopHome';
            var3 = var2.bind(var3)(var1);
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            if(var3) { _fun0001_ip = 90; continue _fun0001 }
 70:
            var1 = 8;
            var1 = var9[var1];
            var1 = var8.bind(var4)(var1);
            var2 = var1.COLLECTIBLES_SHOP_CARD_HEIGHT;
            _fun0001_ip = 108; continue _fun0001;
 90:
            var1 = 7;
            var1 = var9[var1];
            var1 = var8.bind(var4)(var1);
            var2 = var1.COLLECTIBLES_SHOP_CARD_HEIGHT;
 108:
            var1 = 275;
            var10 = var1 + var2;
            var1 = 0.28;
            if(!var3) { _fun0001_ip = 141; continue _fun0001 }
 131:
            var1 = 0.5;
 141:
            var9 = var2 * var1;
            var2 = var7.type;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var8 = 9;
            var1 = var1[var8];
            var1 = var3.bind(var4)(var1);
            var1 = var1.ShopBlockType;
            var1 = var1.HERO;
            if(!(var1 !== var2)) { _fun0001_ip = 499; continue _fun0001 }
 189:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var3.bind(var4)(var1);
            var1 = var1.ShopBlockType;
            var1 = var1.FEATURED;
            if(!(var1 !== var2)) { _fun0001_ip = 442; continue _fun0001 }
 225:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var3.bind(var4)(var1);
            var1 = var1.ShopBlockType;
            var1 = var1.FEED;
            if(!(var1 !== var2)) { _fun0001_ip = 403; continue _fun0001 }
 261:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var3.bind(var4)(var1);
            var1 = var1.ShopBlockType;
            var1 = var1.SHELF;
            if(!(var1 !== var2)) { _fun0001_ip = 399; continue _fun0001 }
 294:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var3.bind(var4)(var1);
            var1 = var1.ShopBlockType;
            var1 = var1.WIDE_BANNER;
            if(!(var1 !== var2)) { _fun0001_ip = 399; continue _fun0001 }
 327:
            var3 = _closure1_slot7;
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 13;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {};
            var8 = 'text-md/normal';
            var1['variant'] = var8;
            var11 = var7.type;
            var8 = ['Unknown Block Type: '];
            var8[1] = var11;
            var1['children'] = var8;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 399:
            var1 = null;
            return var1;
 403:
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 12;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['feedBlock'] = var7;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 442:
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {};
            var8 = var6.featuredContainer;
            var1['style'] = var8;
            var12 = var7.subblocks;
            var11 = var12.map;
            var8 = function(arg1, arg2) {
                var6 = arg1;
                var4 = _closure1_slot5;
                var3 = var4.getCategoryByStoreListingId;
                var1 = var6.categoryStoreListingId;
                var1 = var3.bind(var4)(var1);
                var5 = _closure1_slot6;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 11;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2['featuredCategory'] = var6;
                var2['category'] = var1;
                var1 = arg2;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var8 = var11.bind(var12)(var8);
            var1['children'] = var8;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 499:
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {};
            var8 = var6.heroContainer;
            var6 = new Array(2);
            var6[0] = var8;
            var8 = {};
            var9 = var10 - var9;
            var8['height'] = var9;
            var6[1] = var8;
            var1['style'] = var6;
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 10;
            var5 = var8[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['heroBlock'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/CollectiblesShopFeaturedPage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var4 = var2.shopBlock;
            var1 = var2.isFetchingShopHome;
            var2 = var2.fetchShopHomeError;
            var3 = _closure1_slot8;
            var5 = undefined;
            var8 = var3.bind(var5)();
            if(var1) { _fun0002_ip = 226; continue _fun0002 }
 40:
            var1 = null;
            if(!(var1 === var2)) { _fun0002_ip = 76; continue _fun0002 }
 46:
            if(!(var5 !== var4)) { _fun0002_ip = 76; continue _fun0002 }
 50:
            var3 = _closure1_slot6;
            var2 = _closure1_slot9;
            var1 = {};
            var1['block'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0002_ip = 224; continue _fun0002;
 76:
            var4 = _closure1_slot6;
            var3 = _closure1_slot4;
            var2 = {};
            var7 = var8.container;
            var2['style'] = var7;
            var9 = _closure1_slot1;
            var14 = _closure1_slot2;
            var7 = 14;
            var7 = var14[var7];
            var9 = var9.bind(var5)(var7);
            var7 = {};
            var10 = {};
            var11 = 42;
            var10['marginTop'] = var11;
            var7['style'] = var10;
            var13 = _closure1_slot0;
            var10 = 15;
            var10 = var14[var10];
            var10 = var13.bind(var5)(var10);
            var10 = var10.NoResults;
            var7['Illustration'] = var10;
            var10 = 16;
            var11 = var14[var10];
            var11 = var13.bind(var5)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var5)(var10);
            var10 = var10.t;
            var10 = var10.eAn6z8;
            var10 = var11.bind(var12)(var10);
            var7['body'] = var10;
            var7 = var4.bind(var5)(var9, var7);
            var2['children'] = var7;
            var1 = var4.bind(var5)(var3, var2);
 224:
            _fun0002_ip = 285; continue _fun0002;
 226:
            var4 = _closure1_slot6;
            var3 = _closure1_slot4;
            var2 = {};
            var7 = var8.container;
            var2['style'] = var7;
            var7 = _closure1_slot3;
            var6 = {};
            var8 = var8.spinner;
            var6['style'] = var8;
            var8 = 'large';
            var6['size'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 285:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();