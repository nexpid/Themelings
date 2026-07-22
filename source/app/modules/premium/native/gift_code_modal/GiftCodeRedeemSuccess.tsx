// app/modules/premium/native/gift_code_modal/GiftCodeRedeemSuccess.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot3 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.BUNDLE_PREVIEW_CONFIG;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot6 = var8;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = {};
    var8 = var7.large;
    var8 = var8.bundleWidth;
    var4['width'] = var8;
    var7 = var7.large;
    var7 = var7.bundleHeight;
    var4['height'] = var7;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flex': 1, 'justifyContent': 'space-between'};
    var10 = 6;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var9['backgroundColor'] = var12;
    var4['container'] = var9;
    var9 = {'flex': 1, 'alignItems': 'center', 'justifyContent': 'center', 'paddingTop': 28, 'paddingBottom': 12, 'paddingHorizontal': 32};
    var4['body'] = var9;
    var9 = {};
    var12 = '100%';
    var9['width'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_24;
    var9['paddingTop'] = var12;
    var4['nameplateContainer'] = var9;
    var9 = {'width': '100%', 'alignItems': 'center'};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_24;
    var9['paddingTop'] = var10;
    var4['bundleContainer'] = var9;
    var9 = {'marginTop': 32, 'textAlign': 'center'};
    var4['header'] = var9;
    var9 = {'marginTop': 8, 'textAlign': 'center'};
    var4['message'] = var9;
    var9 = {};
    var10 = 24;
    var9['paddingHorizontal'] = var10;
    var4['footer'] = var9;
    var9 = {};
    var10 = 20;
    var9['marginTop'] = var10;
    var4['gameItemCard'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 31;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/gift_code_modal/GiftCodeRedeemSuccess.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GiftCodeRedeemSuccess(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = var1.giftCode;
            var _closure2_slot0 = var8;
            var1 = var1.user;
            var _closure2_slot1 = var1;
            var1 = _closure1_slot9;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var _closure2_slot2 = var9;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 7;
            var1 = var6[var1];
            var10 = var5.bind(var4)(var1);
            var3 = var10.useStateFromStores;
            var1 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot5;
                var2 = var3.get;
                var1 = _closure2_slot0;
                var1 = var1.skuId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var27 = var3.bind(var10)(var2, var1);
            var1 = 8;
            var1 = var6[var1];
            var3 = var5.bind(var4)(var1);
            var2 = var3.useGetOrFetchSubscriptionPlan;
            var1 = var8.subscriptionPlanId;
            var24 = var2.bind(var3)(var1);
            var1 = 9;
            var1 = var6[var1];
            var3 = var5.bind(var4)(var1);
            var2 = var3.useGetOrFetchApplication;
            var1 = var8.applicationId;
            var26 = var2.bind(var3)(var1);
            var1 = 10;
            var1 = var6[var1];
            var3 = var5.bind(var4)(var1);
            var2 = var3.useFetchCollectiblesProduct;
            var1 = 11;
            var1 = var6[var1];
            var5 = var5.bind(var4)(var1);
            var1 = var5.isCollectiblesGiftCode;
            var5 = var1.bind(var5)(var8);
            var17 = null;
            var1 = null;
            if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var8.skuId;
case 2:
            var5 = true;
            var1 = var2.bind(var3)(var1, var5);
            var19 = var1.product;
            var1 = var17 == var19;
            var13 = undefined;
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var19.items;
            var1 = 0;
            var13 = var2[var1];
case 4:
            var1 = var17 == var19;
            var6 = undefined;
            if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var19.type;
case 6:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var28 = 12;
            var1 = var3[var28];
            var1 = var2.bind(var4)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.BUNDLE;
            var15 = var6 === var1;
            var1 = 13;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useShopProductItems;
            var1 = var19;
            if(!(var17 == var19)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = {};
            var10 = new Array(0);
            var6['items'] = var10;
            var1 = var6;
case 8:
            var1 = var2.bind(var3)(var1);
            var18 = var1.firstAvatarDecoration;
            var16 = var1.firstProfileEffect;
            var25 = var1.firstNameplate;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 14;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useHandleUseNow;
            var1 = {};
            var6 = var19;
            if(!(var17 == var6)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var10 = {};
            var11 = '';
            var10['skuId'] = var11;
            var14 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var28];
            var11 = var14.bind(var4)(var11);
            var11 = var11.CollectiblesItemType;
            var11 = var11.BUNDLE;
            var10['type'] = var11;
            var11 = new Array(0);
            var10['items'] = var11;
            var6 = var10;
case 10:
            var1['product'] = var6;
            var1 = var2.bind(var3)(var1);
            var11 = var1.handleUseNow;
            var14 = var1.isApplying;
            var3 = _closure1_slot7;
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 15;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.SafeAreaPaddingView;
            var1 = {};
            var1['bottom'] = var5;
            var5 = var9.container;
            var1['style'] = var5;
            var6 = _closure1_slot4;
            var5 = {};
            var10 = var9.body;
            var5['contentContainerStyle'] = var10;
            var10 = false;
            var5['alwaysBounceVertical'] = var10;
            if(!(var17 == var13)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            if(!(var17 == var26)) { _fun0001_ip = 14; continue _fun0001 }
case 12:
            if(!var15) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            if(!(var17 != var19)) { _fun0001_ip = 15; continue _fun0001 }
case 17:
            if(!(var17 != var18)) { _fun0001_ip = 15; continue _fun0001 }
case 18:
            if(!(var17 == var16)) { _fun0001_ip = 19; continue _fun0001 }
case 15:
            var23 = _closure1_slot0;
            var10 = _closure1_slot2;
            var20 = 20;
            var20 = var10[var20];
            var21 = var23.bind(var4)(var20);
            var20 = var21.match;
            var29 = var20.bind(var21)(var13);
            var22 = var29.with;
            var21 = {};
            var20 = var10[var28];
            var20 = var23.bind(var4)(var20);
            var20 = var20.CollectiblesItemType;
            var20 = var20.AVATAR_DECORATION;
            var21['type'] = var20;
            var20 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure1_slot6;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var7 = 21;
                    var1 = var1[var7];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.Avatar;
                    var1 = {};
                    var6 = _closure2_slot1;
                    var12 = null;
                    var9 = var12 == var6;
                    var6 = undefined;
                    if(var9) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var11 = _closure2_slot1;
                    var10 = var11.getAvatarSource;
                    var13 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var9 = var8[var7];
                    var9 = var13.bind(var3)(var9);
                    var9 = var9.AVATAR_SIZE_MAP;
                    var8 = var8[var7];
                    var8 = var13.bind(var3)(var8);
                    var8 = var8.AvatarSizes;
                    var8 = var8.GIFT_SUCCESS;
                    var9 = var9[var8];
                    var8 = true;
                    var6 = var10.bind(var11)(var12, var8, var9);
case 20:
                    var1['source'] = var6;
                    var6 = arg1;
                    var1['avatarDecoration'] = var6;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var7];
                    var5 = var6.bind(var3)(var5);
                    var5 = var5.AvatarSizes;
                    var5 = var5.GIFT_SUCCESS;
                    var1['size'] = var5;
                    var5 = true;
                    var1['animate'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var29 = var22.bind(var29)(var21, var20);
            var22 = var29.with;
            var21 = {};
            var20 = var10[var28];
            var20 = var23.bind(var4)(var20);
            var20 = var20.CollectiblesItemType;
            var20 = var20.PROFILE_EFFECT;
            var21['type'] = var20;
            var20 = function(arg1) {
                var4 = _closure1_slot6;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 22;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = _closure2_slot1;
                var1['user'] = var5;
                var5 = arg1;
                var1['profileEffect'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var29 = var22.bind(var29)(var21, var20);
            var22 = var29.with;
            var21 = {};
            var20 = var10[var28];
            var20 = var23.bind(var4)(var20);
            var20 = var20.CollectiblesItemType;
            var20 = var20.PROFILE_FRAME;
            var21['type'] = var20;
            var20 = function(arg1) {
                var4 = _closure1_slot6;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 23;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = _closure2_slot1;
                var1['user'] = var5;
                var5 = arg1;
                var1['profileFrame'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var22 = var22.bind(var29)(var21, var20);
            var21 = var22.with;
            var20 = {};
            var10 = var10[var28];
            var10 = var23.bind(var4)(var10);
            var10 = var10.CollectiblesItemType;
            var10 = var10.NAMEPLATE;
            var20['type'] = var10;
            var10 = function(arg1) {
                var4 = _closure1_slot6;
                var3 = _closure1_slot3;
                var2 = {};
                var5 = _closure2_slot2;
                var5 = var5.nameplateContainer;
                var2['style'] = var5;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 24;
                var5 = var5[var1];
                var1 = undefined;
                var5 = var6.bind(var1)(var5);
                var6 = var5.NameplatePreview;
                var5 = {};
                var7 = _closure2_slot1;
                var5['user'] = var7;
                var7 = arg1;
                var5['nameplate'] = var7;
                var5 = var4.bind(var1)(var6, var5);
                var2['children'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var20 = var21.bind(var22)(var20, var10);
            var10 = var20.otherwise;
            var7 = function() {
                var4 = _closure1_slot6;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 25;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = _closure2_slot0;
                var5 = var5.giftStyle;
                var1['giftStyle'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var10 = var10.bind(var20)(var7);
            _fun0001_ip = 22; continue _fun0001;
case 19:
            var21 = _closure1_slot6;
            var20 = _closure1_slot3;
            var7 = {};
            var22 = var9.bundleContainer;
            var7['style'] = var22;
            var23 = _closure1_slot1;
            var28 = _closure1_slot2;
            var22 = 19;
            var22 = var28[var22];
            var23 = var23.bind(var4)(var22);
            var22 = {};
            var22['deco'] = var18;
            var22['pfx'] = var16;
            var22['nameplate'] = var25;
            var25 = 'large';
            var22['size'] = var25;
            var25 = _closure1_slot8;
            var22['targetSize'] = var25;
            var22 = var21.bind(var4)(var23, var22);
            var7['children'] = var22;
            var10 = var21.bind(var4)(var20, var7);
case 22:
            _fun0001_ip = 23; continue _fun0001;
case 14:
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var7 = 16;
            var7 = var21[var7];
            var20 = var20.bind(var4)(var7);
            var7 = var20.isGameItemSKU;
            var7 = var7.bind(var20)(var27);
            var22 = _closure1_slot6;
            if(var7) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var20 = _closure1_slot1;
            var25 = _closure1_slot2;
            var21 = 18;
            var7 = var25[var21];
            var20 = var20.bind(var4)(var7);
            var7 = {};
            var7['game'] = var26;
            var23 = _closure1_slot0;
            var21 = var25[var21];
            var21 = var23.bind(var4)(var21);
            var21 = var21.GameIconSizes;
            var21 = var21.LARGE;
            var7['size'] = var21;
            var21 = var8.skuId;
            var7['skuId'] = var21;
            var7 = var22.bind(var4)(var20, var7);
            _fun0001_ip = 26; continue _fun0001;
case 24:
            var21 = _closure1_slot3;
            var20 = {};
            var23 = var9.gameItemCard;
            var20['style'] = var23;
            var25 = _closure1_slot1;
            var28 = _closure1_slot2;
            var23 = 17;
            var23 = var28[var23];
            var25 = var25.bind(var4)(var23);
            var23 = {};
            var23['sku'] = var27;
            var23 = var22.bind(var4)(var25, var23);
            var20['children'] = var23;
            var7 = var22.bind(var4)(var21, var20);
case 26:
            var10 = var7;
case 23:
            var7 = new Array(3);
            var7[0] = var10;
            if(!(var17 != var27)) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var10 = 16;
            var10 = var21[var10];
            var20 = var20.bind(var4)(var10);
            var10 = var20.isGameItemSKU;
            var10 = var10.bind(var20)(var27);
            if(var10) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var10 = var8.isSubscription;
            if(!var10) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            if(!(var17 == var24)) { _fun0001_ip = 33; continue _fun0001 }
case 31:
            var20 = var17 != var13;
            var10 = undefined;
            if(!var20) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var22 = _closure1_slot6;
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var20 = 26;
            var20 = var30[var20];
            var20 = var29.bind(var4)(var20);
            var21 = var20.Text;
            var20 = {'variant': 'heading-xl/bold', 'color': 'mobile-text-heading-primary', 'style': null, 'accessibilityRole': 'header'};
            var23 = var9.header;
            var20['style'] = var23;
            var23 = 27;
            var25 = var30[var23];
            var25 = var29.bind(var4)(var25);
            var28 = var25.intl;
            var25 = var28.string;
            var23 = var30[var23];
            var23 = var29.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.IMffmm;
            var23 = var25.bind(var28)(var23);
            var20['children'] = var23;
            var10 = var22.bind(var4)(var21, var20);
case 34:
            _fun0001_ip = 36; continue _fun0001;
case 33:
            var22 = _closure1_slot6;
            var25 = _closure1_slot0;
            var30 = _closure1_slot2;
            var20 = 26;
            var20 = var30[var20];
            var20 = var25.bind(var4)(var20);
            var21 = var20.Text;
            var20 = {'variant': 'heading-xl/bold', 'style': null, 'accessibilityRole': 'header'};
            var23 = var9.header;
            var20['style'] = var23;
            var23 = 27;
            var28 = var30[var23];
            var28 = var25.bind(var4)(var28);
            var29 = var28.intl;
            var28 = var29.format;
            var23 = var30[var23];
            var23 = var25.bind(var4)(var23);
            var23 = var23.t;
            var25 = var23["1C2BG/"];
            var23 = {};
            var30 = var27.name;
            var23['skuName'] = var30;
            var23 = var28.bind(var29)(var25, var23);
            var20['children'] = var23;
            var10 = var22.bind(var4)(var21, var20);
case 36:
            _fun0001_ip = 37; continue _fun0001;
case 29:
            var22 = _closure1_slot6;
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var20 = 26;
            var20 = var30[var20];
            var20 = var29.bind(var4)(var20);
            var21 = var20.Text;
            var20 = {'variant': 'heading-xl/bold', 'style': null, 'accessibilityRole': 'header'};
            var23 = var9.header;
            var20['style'] = var23;
            var23 = 27;
            var25 = var30[var23];
            var25 = var29.bind(var4)(var25);
            var28 = var25.intl;
            var25 = var28.string;
            var23 = var30[var23];
            var23 = var29.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23["5glWta"];
            var23 = var25.bind(var28)(var23);
            var20['children'] = var23;
            var10 = var22.bind(var4)(var21, var20);
case 37:
            _fun0001_ip = 38; continue _fun0001;
case 27:
            var22 = _closure1_slot6;
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var20 = 26;
            var20 = var30[var20];
            var20 = var29.bind(var4)(var20);
            var21 = var20.Text;
            var20 = {'variant': 'heading-xl/bold', 'style': null, 'accessibilityRole': 'header'};
            var23 = var9.header;
            var20['style'] = var23;
            var23 = 27;
            var25 = var30[var23];
            var25 = var29.bind(var4)(var25);
            var28 = var25.intl;
            var25 = var28.string;
            var23 = var30[var23];
            var23 = var29.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23["+BNMcF"];
            var23 = var25.bind(var28)(var23);
            var20['children'] = var23;
            var10 = var22.bind(var4)(var21, var20);
case 38:
            var7[1] = var10;
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var10 = 16;
            var10 = var21[var10];
            var20 = var20.bind(var4)(var10);
            var10 = var20.isGameItemSKU;
            var10 = var10.bind(var20)(var27);
            if(!var10) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            if(!(var17 == var26)) { _fun0001_ip = 41; continue _fun0001 }
case 39:
            var8 = var8.isSubscription;
            if(!var8) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            if(!(var17 == var24)) { _fun0001_ip = 44; continue _fun0001 }
case 42:
            var20 = _closure1_slot6;
            var10 = _closure1_slot0;
            var21 = _closure1_slot2;
            var8 = 26;
            var8 = var21[var8];
            var8 = var10.bind(var4)(var8);
            var10 = var8.Text;
            var8 = {};
            var21 = 'text-md/medium';
            var8['variant'] = var21;
            var21 = var9.message;
            var8['style'] = var21;
            if(!(var17 != var13)) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var22 = var17 == var27;
            var21 = undefined;
            if(var22) { _fun0001_ip = 47; continue _fun0001 }
case 48:
            var21 = var27.name;
case 47:
            if(!(var17 == var21)) { _fun0001_ip = 49; continue _fun0001 }
case 45:
            var25 = _closure1_slot0;
            var28 = _closure1_slot2;
            var21 = 27;
            var22 = var28[var21];
            var22 = var25.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var21 = var28[var21];
            var21 = var25.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21["5ayf7w"];
            var21 = var22.bind(var23)(var21);
            _fun0001_ip = 50; continue _fun0001;
case 49:
            var23 = _closure1_slot0;
            var29 = _closure1_slot2;
            var22 = 27;
            var25 = var29[var22];
            var25 = var23.bind(var4)(var25);
            var28 = var25.intl;
            var25 = var28.formatToPlainString;
            var22 = var29[var22];
            var22 = var23.bind(var4)(var22);
            var22 = var22.t;
            var23 = var22["4kp0AB"];
            var22 = {};
            var29 = var27.name;
            var22['itemName'] = var29;
            var21 = var25.bind(var28)(var23, var22);
case 50:
            var8['children'] = var21;
            var8 = var20.bind(var4)(var10, var8);
            _fun0001_ip = 51; continue _fun0001;
case 44:
            var21 = _closure1_slot6;
            var23 = _closure1_slot0;
            var25 = _closure1_slot2;
            var10 = 26;
            var10 = var25[var10];
            var10 = var23.bind(var4)(var10);
            var20 = var10.Text;
            var10 = {};
            var22 = 'text-md/medium';
            var10['variant'] = var22;
            var22 = var9.message;
            var10['style'] = var22;
            var22 = 28;
            var22 = var25[var22];
            var23 = var23.bind(var4)(var22);
            var22 = var23.getSubscriptionGiftSuccessText;
            var22 = var22.bind(var23)(var24);
            var10['children'] = var22;
            var8 = var21.bind(var4)(var20, var10);
case 51:
            _fun0001_ip = 52; continue _fun0001;
case 41:
            var21 = _closure1_slot6;
            var23 = _closure1_slot0;
            var28 = _closure1_slot2;
            var10 = 26;
            var10 = var28[var10];
            var10 = var23.bind(var4)(var10);
            var20 = var10.Text;
            var10 = {};
            var22 = 'text-md/medium';
            var10['variant'] = var22;
            var22 = var9.message;
            var10['style'] = var22;
            var22 = 27;
            var24 = var28[var22];
            var24 = var23.bind(var4)(var24);
            var25 = var24.intl;
            var24 = var25.formatToPlainString;
            var22 = var28[var22];
            var22 = var23.bind(var4)(var22);
            var22 = var22.t;
            var23 = var22.W2znvX;
            var22 = {};
            var29 = var17 == var27;
            var28 = undefined;
            if(var29) { _fun0001_ip = 53; continue _fun0001 }
case 54:
            var28 = var27.name;
case 53:
            var29 = var17 != var28;
            var27 = '';
            if(!var29) { _fun0001_ip = 55; continue _fun0001 }
case 56:
            var27 = var28;
case 55:
            var22['skuName'] = var27;
            var26 = var26.name;
            var22['applicationName'] = var26;
            var22 = var24.bind(var25)(var23, var22);
            var10['children'] = var22;
            var8 = var21.bind(var4)(var20, var10);
case 52:
            var7[2] = var8;
            var5['children'] = var7;
            var6 = var3.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot6;
            var7 = _closure1_slot3;
            var6 = {};
            var9 = var9.footer;
            var6['style'] = var9;
            var10 = _closure1_slot0;
            var20 = _closure1_slot2;
            var9 = 29;
            var9 = var20[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.Button;
            if(!(var17 != var13)) { _fun0001_ip = 57; continue _fun0001 }
case 58:
            var9 = {};
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var20 = 27;
            var21 = var24[var20];
            var21 = var23.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var24[var20];
            var20 = var23.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.MAS7uK;
            var20 = var21.bind(var22)(var20);
            var9['text'] = var20;
            var20 = 'md';
            var9['size'] = var20;
            var9['loading'] = var14;
            var13 = var17 != var13;
            if(!var13) { _fun0001_ip = 59; continue _fun0001 }
case 60:
            var14 = !var15;
            if(!var15) { _fun0001_ip = 61; continue _fun0001 }
case 62:
            if(!var15) { _fun0001_ip = 63; continue _fun0001 }
case 64:
            var15 = var17 != var19;
case 63:
            if(!var15) { _fun0001_ip = 65; continue _fun0001 }
case 66:
            var15 = var17 != var18;
case 65:
            if(!var15) { _fun0001_ip = 67; continue _fun0001 }
case 68:
            var15 = var17 != var16;
case 67:
            var14 = var15;
case 61:
            var13 = var14;
case 59:
            var13 = !var13;
            var9['disabled'] = var13;
            var9['onPress'] = var11;
            _fun0001_ip = 69; continue _fun0001;
case 57:
            var11 = {};
            var17 = _closure1_slot0;
            var14 = _closure1_slot2;
            var13 = 27;
            var15 = var14[var13];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var13 = var14[var13];
            var13 = var17.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.NX+WJN;
            var13 = var15.bind(var16)(var13);
            var11['text'] = var13;
            var13 = 'md';
            var11['size'] = var13;
            var13 = _closure1_slot1;
            var12 = 30;
            var12 = var14[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.pop;
            var11['onPress'] = var12;
            var9 = var11;
case 69:
            var9 = var8.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();