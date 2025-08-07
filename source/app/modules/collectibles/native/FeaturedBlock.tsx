// app/modules/collectibles/native/FeaturedBlock.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
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
    var4 = var4.Image;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot4 = var7;
    var4 = var4.UserSettingsSections;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'width': '100%', 'aspectRatio': 2, 'resizeMode': 'contain'};
    var4['bannerImage'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/FeaturedBlock.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        var1 = arg1;
        var5 = var1.featuredCategory;
        var _closure2_slot0 = var5;
        var1 = var1.category;
        var _closure2_slot1 = var1;
        var1 = _closure1_slot7;
        var4 = undefined;
        var10 = var1.bind(var4)();
        var12 = _closure1_slot0;
        var14 = _closure1_slot2;
        var1 = 5;
        var1 = var14[var1];
        var2 = var12.bind(var4)(var1);
        var1 = var2.useNavigation;
        var1 = var1.bind(var2)();
        var _closure2_slot2 = var1;
        var1 = 6;
        var1 = var14[var1];
        var2 = var12.bind(var4)(var1);
        var1 = var2.useCollectiblesAnalyticsContext;
        var1 = var1.bind(var2)();
        var _closure2_slot3 = var1;
        var1 = 7;
        var1 = var14[var1];
        var7 = var12.bind(var4)(var1);
        var6 = var7.useTrackProductCardImpression;
        var3 = var5.categoryStoreListingId;
        var2 = 'mobile_home';
        var1 = 'featured_block';
        var1 = var6.bind(var7)(var3, var2, var1);
        var6 = var1.handleCardVisibilityChange;
        var3 = _closure1_slot6;
        var13 = _closure1_slot1;
        var1 = 9;
        var1 = var14[var1];
        var2 = var13.bind(var4)(var1);
        var1 = {};
        var1['onChange'] = var6;
        var6 = 10;
        var6 = var14[var6];
        var6 = var12.bind(var4)(var6);
        var7 = var6.PressableOpacity;
        var6 = {'accessibilityRole': 'button', 'accessibilityLabel': null, 'activeOpacity': 0.8, 'androidRippleConfig': null, 'hitSlop': 8};
        var11 = 11;
        var15 = var14[var11];
        var15 = var12.bind(var4)(var15);
        var16 = var15.intl;
        var15 = var16.formatToPlainString;
        var11 = var14[var11];
        var11 = var12.bind(var4)(var11);
        var11 = var11.t;
        var12 = var11.hEsdAw;
        var11 = {};
        var17 = var5.name;
        var11['category'] = var17;
        var11 = var15.bind(var16)(var12, var11);
        var6['accessibilityLabel'] = var11;
        var11 = {};
        var12 = 12;
        var12 = var14[var12];
        var12 = var13.bind(var4)(var12);
        var12 = var12.radii;
        var12 = var12.lg;
        var11['radius'] = var12;
        var6['androidRippleConfig'] = var11;
        var9 = function onPress() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 8;
                var1 = var4[var1];
                var10 = undefined;
                var7 = var3.bind(var10)(var1);
                var5 = var7.track;
                var1 = _closure1_slot4;
                var4 = var1.COLLECTIBLES_SHOP_ELEMENT_CLICKED;
                var1 = {};
                var8 = _closure2_slot3;
                var3 = null;
                var9 = var3 == var8;
                var8 = undefined;
                if(var9) { _fun0001_ip = 70; continue _fun0001 }
 60:
                var9 = _closure2_slot3;
                var8 = var9.sessionId;
 70:
                var1['collectibles_shop_session_id'] = var8;
                var8 = _closure2_slot0;
                var8 = var8.categoryStoreListingId;
                var1['sku_id'] = var8;
                var8 = 'mobile_home';
                var1['page_type'] = var8;
                var8 = _closure2_slot3;
                var9 = var3 == var8;
                var8 = undefined;
                if(var9) { _fun0001_ip = 124; continue _fun0001 }
 114:
                var9 = _closure2_slot3;
                var8 = var9.pageSection;
 124:
                var1['page_section'] = var8;
                var8 = _closure2_slot3;
                var9 = var3 == var8;
                var8 = undefined;
                if(var9) { _fun0001_ip = 152; continue _fun0001 }
 142:
                var9 = _closure2_slot3;
                var8 = var9.pageCategory;
 152:
                var1['page_category'] = var8;
                var8 = 'FEATURED_BLOCK';
                var1['tile_type'] = var8;
                var8 = global;
                var9 = var8.String;
                var8 = _closure2_slot3;
                var11 = var3 == var8;
                var8 = undefined;
                if(var11) { _fun0001_ip = 199; continue _fun0001 }
 189:
                var11 = _closure2_slot3;
                var8 = var11.tilePosition;
 199:
                var8 = var9.bind(var10)(var8);
                var1['tile_position'] = var8;
                var1['cta_name'] = var3;
                var1 = var5.bind(var7)(var4, var1);
                var1 = _closure2_slot1;
                var1 = var3 != var1;
                if(!var1) { _fun0001_ip = 276; continue _fun0001 }
 231:
                var5 = _closure2_slot2;
                var4 = var5.push;
                var2 = _closure1_slot5;
                var3 = var2.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS;
                var2 = {};
                var7 = _closure2_slot1;
                var2['category'] = var7;
                var6 = _closure2_slot3;
                var2['analyticsContext'] = var6;
                var1 = var4.bind(var5)(var3, var2);
 276:
                var1 = undefined;
                return var1;
            }
        };
        var6['onPress'] = var9;
        var9 = _closure1_slot3;
        var8 = {};
        var11 = {};
        var12 = var5.bannerUrl;
        var11['uri'] = var12;
        var8['source'] = var11;
        var10 = var10.bannerImage;
        var8['style'] = var10;
        var8 = var3.bind(var4)(var9, var8);
        var6['children'] = var8;
        var5 = var5.categoryStoreListingId;
        var5 = var3.bind(var4)(var7, var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();