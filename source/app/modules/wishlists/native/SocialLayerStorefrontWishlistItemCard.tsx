// app/modules/wishlists/native/SocialLayerStorefrontWishlistItemCard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
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
    var7 = var4.Fragment;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'position': 'absolute', 'top': null, 'left': null, 'width': 24, 'height': 24, 'borderRadius': null, 'zIndex': 1};
    var10 = 5;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_8;
    var9['top'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_8;
    var9['left'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var9['borderRadius'] = var12;
    var4['applicationIcon'] = var9;
    var9 = {'shadowColor': null, 'shadowOffset': null, 'shadowOpacity': 0, 'shadowRadius': 0, 'elevation': 0, 'overflow': 'visible'};
    var9['shadowColor'] = var1;
    var12 = {'width': 0, 'height': 0};
    var9['shadowOffset'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.none;
    var9['borderRadius'] = var10;
    var4['nestedCard'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/wishlists/native/SocialLayerStorefrontWishlistItemCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SocialLayerStorefrontWishlistItemCard(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var11 = var8.sku;
            var _closure2_slot0 = var11;
            var7 = var8.isOwned;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = false;
case 2:
            var9 = var8.source;
            var3 = var8.wishlistOwnerId;
            var _closure2_slot1 = var3;
            var6 = var8.size;
            var _closure2_slot2 = var6;
            var5 = {'sku': 0, 'isOwned': 0, 'source': 0, 'wishlistOwnerId': 0, 'size': 0};
            var19 = null;
            var20 = var5;
            var1 = silentSetPrototypeOf(var20, var19);
            var20 = {};
            var19 = var8;
            var18 = var5;
            var5 = copyDataProperties(var20, var19, var18);
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = 6;
            var8 = var12[var10];
            var16 = var13.bind(var4)(var8);
            var15 = var16.useStateFromStores;
            var8 = _closure1_slot5;
            var14 = new Array(1);
            var14[0] = var8;
            var17 = var11.id;
            var8 = new Array(2);
            var8[0] = var17;
            var8[1] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = _closure1_slot5;
                    var4 = var5.hasSentGift;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var2 = _closure2_slot1;
                    var1 = var4.bind(var5)(var3, var2);
case 4:
                    return var1;
                }
            };
            var8 = var15.bind(var16)(var14, var3, var8);
            var3 = var11.applicationId;
            _closure2_slot3 = var3;
            var10 = var12[var10];
            var15 = var13.bind(var4)(var10);
            var14 = var15.useStateFromStores;
            var10 = _closure1_slot4;
            var13 = new Array(1);
            var13[0] = var10;
            var10 = new Array(1);
            var10[0] = var3;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0003_ip = 6; continue _fun0003 }
case 5:
                    var4 = _closure1_slot4;
                    var3 = var4.getApplication;
                    var2 = _closure2_slot3;
                    var1 = var3.bind(var4)(var2);
case 6:
                    return var1;
                }
            };
            var3 = var14.bind(var15)(var13, var3, var10);
            _closure2_slot4 = var3;
            var13 = _closure1_slot3;
            var14 = var13.useMemo;
            var10 = new Array(1);
            var10[0] = var3;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var1 = null;
                    var3 = var1 == var3;
                    var1 = undefined;
                    if(var3) { _fun0004_ip = 7; continue _fun0004 }
case 8:
                    var4 = _closure2_slot4;
                    var3 = var4.getIconSource;
                    var2 = 24;
                    var1 = var3.bind(var4)(var2);
case 7:
                    return var1;
                }
            };
            var15 = var14.bind(var13)(var3, var10);
            _closure2_slot5 = var15;
            var3 = _closure1_slot9;
            var14 = var3.bind(var4)();
            _closure2_slot6 = var14;
            var10 = var13.useCallback;
            var3 = new Array(5);
            var3[0] = var11;
            var3[1] = var6;
            var3[2] = var15;
            var15 = var14.applicationIcon;
            var3[3] = var15;
            var14 = var14.nestedCard;
            var3[4] = var14;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = _closure1_slot8;
                    var3 = _closure1_slot7;
                    var2 = {};
                    var8 = _closure1_slot6;
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 7;
                    var5 = var5[var1];
                    var1 = undefined;
                    var6 = var6.bind(var1)(var5);
                    var5 = {};
                    var9 = _closure2_slot0;
                    var5['sku'] = var9;
                    var9 = _closure2_slot2;
                    var5['size'] = var9;
                    var9 = _closure2_slot6;
                    var9 = var9.nestedCard;
                    var5['containerStyle'] = var9;
                    var6 = var8.bind(var1)(var6, var5);
                    var5 = new Array(2);
                    var5[0] = var6;
                    var8 = _closure2_slot5;
                    var6 = null;
                    var6 = var6 != var8;
                    if(!var6) { _fun0005_ip = 9; continue _fun0005 }
case 10:
                    var9 = _closure1_slot6;
                    var8 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var7 = 8;
                    var7 = var11[var7];
                    var8 = var8.bind(var1)(var7);
                    var7 = {};
                    var11 = _closure2_slot5;
                    var7['source'] = var11;
                    var10 = _closure2_slot6;
                    var10 = var10.applicationIcon;
                    var7['style'] = var10;
                    var6 = var9.bind(var1)(var8, var7);
case 9:
                    var5[1] = var6;
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var10 = var10.bind(var13)(var2, var3);
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var1 = 9;
            var1 = var12[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var11 = var11.name;
            var1['accessibilityLabel'] = var11;
            var1['renderPreview'] = var10;
            var1['source'] = var9;
            if(var7) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var7 = var8;
case 11:
            var1['isOwned'] = var7;
            var1['size'] = var6;
            var20 = var1;
            var19 = var5;
            var5 = copyDataProperties(var20, var19);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();