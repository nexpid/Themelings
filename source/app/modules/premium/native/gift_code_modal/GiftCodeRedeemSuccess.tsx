// app/modules/premium/native/gift_code_modal/GiftCodeRedeemSuccess.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = var12.bind(var1)(var4);
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
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var4 = {'flex': 1, 'justifyContent': 'space-between'};
    var11 = 5;
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOW;
    var4['backgroundColor'] = var10;
    var7['container'] = var4;
    var4 = 32;
    var10 = {'flex': 1, 'alignItems': 'center', 'justifyContent': 'center', 'paddingTop': 28, 'paddingBottom': 12, 'paddingHorizontal': 32};
    var7['body'] = var10;
    var10 = {};
    var13 = '100%';
    var10['width'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_24;
    var10['paddingTop'] = var13;
    var7['nameplateContainer'] = var10;
    var10 = {'width': '100%', 'alignItems': 'center'};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_24;
    var10['paddingTop'] = var11;
    var7['bundleContainer'] = var10;
    var10 = {'marginTop': 32, 'textAlign': 'center'};
    var7['header'] = var10;
    var10 = {'marginTop': 8, 'textAlign': 'center'};
    var7['message'] = var10;
    var10 = {};
    var11 = 24;
    var10['paddingHorizontal'] = var11;
    var7['footer'] = var10;
    var10 = {};
    var11 = 20;
    var10['marginTop'] = var11;
    var7['gameItemCard'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot8 = var7;
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
            var4 = undefined;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var1 = _closure1_slot8;
            var10 = var1.bind(var4)();
            var _closure2_slot2 = var10;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 6;
            var1 = var6[var1];
            var2 = var5.bind(var4)(var1);
            var1 = var2.useNavigation;
            var1 = var1.bind(var2)();
            var _closure2_slot3 = var1;
            var1 = 7;
            var1 = var6[var1];
            var7 = var5.bind(var4)(var1);
            var3 = var7.useStateFromStores;
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
            var25 = var3.bind(var7)(var2, var1);
            var1 = 8;
            var1 = var6[var1];
            var3 = var5.bind(var4)(var1);
            var2 = var3.useGetOrFetchSubscriptionPlan;
            var1 = var8.subscriptionPlanId;
            var22 = var2.bind(var3)(var1);
            var1 = 9;
            var1 = var6[var1];
            var3 = var5.bind(var4)(var1);
            var2 = var3.useGetOrFetchApplication;
            var1 = var8.applicationId;
            var24 = var2.bind(var3)(var1);
            var1 = 10;
            var1 = var6[var1];
            var3 = var5.bind(var4)(var1);
            var2 = var3.useFetchCollectiblesProduct;
            var1 = 11;
            var1 = var6[var1];
            var5 = var5.bind(var4)(var1);
            var1 = var5.isCollectiblesGiftCode;
            var5 = var1.bind(var5)(var8);
            var15 = null;
            var1 = null;
            if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var8.skuId;
case 2:
            var5 = true;
            var1 = var2.bind(var3)(var1, var5);
            var7 = var1.product;
            var1 = var15 == var7;
            var9 = undefined;
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var7.items;
            var1 = 0;
            var9 = var2[var1];
case 4:
            _closure2_slot4 = var9;
            var1 = var15 == var7;
            var6 = undefined;
            if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var7.type;
case 6:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var21 = 12;
            var1 = var3[var21];
            var1 = var2.bind(var4)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.BUNDLE;
            var13 = var6 === var1;
            _closure2_slot5 = var13;
            var1 = 13;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useShopProductItems;
            var1 = var7;
            if(!(var15 == var7)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = {};
            var14 = new Array(0);
            var6['items'] = var14;
            var1 = var6;
case 8:
            var1 = var2.bind(var3)(var1);
            var27 = var1.firstAvatarDecoration;
            var26 = var1.firstProfileEffect;
            var23 = var1.firstNameplate;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 14;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useHandleUseNow;
            var1 = {};
            var6 = var7;
            if(!(var15 == var6)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var14 = {};
            var16 = '';
            var14['skuId'] = var16;
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var16 = var16[var21];
            var16 = var17.bind(var4)(var16);
            var16 = var16.CollectiblesItemType;
            var16 = var16.BUNDLE;
            var14['type'] = var16;
            var16 = new Array(0);
            var14['items'] = var16;
            var6 = var14;
case 10:
            var1['product'] = var6;
            var1 = var2.bind(var3)(var1);
            var2 = var1.handleUseNow;
            _closure2_slot6 = var2;
            var16 = var1.isApplying;
            var14 = var13;
            if(!var13) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var14 = var15 != var7;
case 12:
            if(!var14) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var14 = var15 != var27;
case 14:
            if(!var14) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var14 = var15 != var26;
case 16:
            _closure2_slot7 = var14;
            var3 = _closure1_slot7;
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 15;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.SafeAreaPaddingView;
            var1 = {};
            var1['bottom'] = var5;
            var5 = var10.container;
            var1['style'] = var5;
            var6 = _closure1_slot4;
            var5 = {};
            var17 = var10.body;
            var5['contentContainerStyle'] = var17;
            var28 = false;
            var5['alwaysBounceVertical'] = var28;
            if(!(var15 == var9)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            if(!(var15 == var24)) { _fun0001_ip = 20; continue _fun0001 }
case 18:
            if(!var13) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            if(!(var15 != var7)) { _fun0001_ip = 21; continue _fun0001 }
case 23:
            if(!(var15 != var27)) { _fun0001_ip = 21; continue _fun0001 }
case 24:
            if(!(var15 == var26)) { _fun0001_ip = 25; continue _fun0001 }
case 21:
            var20 = _closure1_slot0;
            var7 = _closure1_slot2;
            var17 = 20;
            var17 = var7[var17];
            var18 = var20.bind(var4)(var17);
            var17 = var18.match;
            var29 = var17.bind(var18)(var9);
            var19 = var29.with;
            var18 = {};
            var17 = var7[var21];
            var17 = var20.bind(var4)(var17);
            var17 = var17.CollectiblesItemType;
            var17 = var17.AVATAR_DECORATION;
            var18['type'] = var17;
            var17 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure1_slot6;
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var7 = 21;
                    var1 = var1[var7];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var6 = _closure2_slot1;
                    var12 = null;
                    var9 = var12 == var6;
                    var6 = undefined;
                    if(var9) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                    var11 = _closure2_slot1;
                    var10 = var11.getAvatarSource;
                    var13 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var9 = 22;
                    var9 = var8[var9];
                    var9 = var13.bind(var3)(var9);
                    var9 = var9.AVATAR_SIZE_MAP;
                    var8 = var8[var7];
                    var8 = var13.bind(var3)(var8);
                    var8 = var8.AvatarSizes;
                    var8 = var8.GIFT_SUCCESS;
                    var9 = var9[var8];
                    var8 = true;
                    var6 = var10.bind(var11)(var12, var8, var9);
case 26:
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
            var29 = var19.bind(var29)(var18, var17);
            var19 = var29.with;
            var18 = {};
            var17 = var7[var21];
            var17 = var20.bind(var4)(var17);
            var17 = var17.CollectiblesItemType;
            var17 = var17.PROFILE_EFFECT;
            var18['type'] = var17;
            var17 = function(arg1) {
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
                var1['profileEffect'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var19 = var19.bind(var29)(var18, var17);
            var18 = var19.with;
            var17 = {};
            var7 = var7[var21];
            var7 = var20.bind(var4)(var7);
            var7 = var7.CollectiblesItemType;
            var7 = var7.NAMEPLATE;
            var17['type'] = var7;
            var7 = function(arg1) {
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
            var18 = var18.bind(var19)(var17, var7);
            var17 = var18.otherwise;
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
            var17 = var17.bind(var18)(var7);
            _fun0001_ip = 28; continue _fun0001;
case 25:
            var19 = _closure1_slot6;
            var18 = _closure1_slot3;
            var7 = {};
            var20 = var10.bundleContainer;
            var7['style'] = var20;
            var21 = _closure1_slot1;
            var29 = _closure1_slot2;
            var20 = 19;
            var20 = var29[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var20['isPurchased'] = var28;
            var20['deco'] = var27;
            var20['pfx'] = var26;
            var20['nameplate'] = var23;
            var23 = 'large';
            var20['size'] = var23;
            var20 = var19.bind(var4)(var21, var20);
            var7['children'] = var20;
            var17 = var19.bind(var4)(var18, var7);
case 28:
            _fun0001_ip = 29; continue _fun0001;
case 20:
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var7 = 16;
            var7 = var19[var7];
            var18 = var18.bind(var4)(var7);
            var7 = var18.isGameItemSKU;
            var7 = var7.bind(var18)(var25);
            var20 = _closure1_slot6;
            if(var7) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var18 = _closure1_slot1;
            var23 = _closure1_slot2;
            var19 = 18;
            var7 = var23[var19];
            var18 = var18.bind(var4)(var7);
            var7 = {};
            var7['game'] = var24;
            var21 = _closure1_slot0;
            var19 = var23[var19];
            var19 = var21.bind(var4)(var19);
            var19 = var19.GameIconSizes;
            var19 = var19.LARGE;
            var7['size'] = var19;
            var19 = var8.skuId;
            var7['skuId'] = var19;
            var7 = var20.bind(var4)(var18, var7);
            _fun0001_ip = 32; continue _fun0001;
case 30:
            var19 = _closure1_slot3;
            var18 = {};
            var21 = var10.gameItemCard;
            var18['style'] = var21;
            var23 = _closure1_slot1;
            var26 = _closure1_slot2;
            var21 = 17;
            var21 = var26[var21];
            var23 = var23.bind(var4)(var21);
            var21 = {};
            var21['sku'] = var25;
            var21 = var20.bind(var4)(var23, var21);
            var18['children'] = var21;
            var7 = var20.bind(var4)(var19, var18);
case 32:
            var17 = var7;
case 29:
            var7 = new Array(3);
            var7[0] = var17;
            if(!(var15 != var25)) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var17 = 16;
            var17 = var19[var17];
            var18 = var18.bind(var4)(var17);
            var17 = var18.isGameItemSKU;
            var17 = var17.bind(var18)(var25);
            if(var17) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var17 = var8.isSubscription;
            if(!var17) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            if(!(var15 == var22)) { _fun0001_ip = 39; continue _fun0001 }
case 37:
            var18 = var15 != var9;
            var17 = undefined;
            if(!var18) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var20 = _closure1_slot6;
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var18 = 26;
            var18 = var28[var18];
            var18 = var27.bind(var4)(var18);
            var19 = var18.Text;
            var18 = {'variant': 'heading-xl/bold', 'color': 'mobile-text-heading-primary', 'style': null, 'accessibilityRole': 'header'};
            var21 = var10.header;
            var18['style'] = var21;
            var21 = 27;
            var23 = var28[var21];
            var23 = var27.bind(var4)(var23);
            var26 = var23.intl;
            var23 = var26.string;
            var21 = var28[var21];
            var21 = var27.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.IMffmm;
            var21 = var23.bind(var26)(var21);
            var18['children'] = var21;
            var17 = var20.bind(var4)(var19, var18);
case 40:
            _fun0001_ip = 42; continue _fun0001;
case 39:
            var20 = _closure1_slot6;
            var23 = _closure1_slot0;
            var28 = _closure1_slot2;
            var18 = 26;
            var18 = var28[var18];
            var18 = var23.bind(var4)(var18);
            var19 = var18.Text;
            var18 = {'variant': 'heading-xl/bold', 'style': null, 'accessibilityRole': 'header'};
            var21 = var10.header;
            var18['style'] = var21;
            var21 = 27;
            var26 = var28[var21];
            var26 = var23.bind(var4)(var26);
            var27 = var26.intl;
            var26 = var27.format;
            var21 = var28[var21];
            var21 = var23.bind(var4)(var21);
            var21 = var21.t;
            var23 = var21["1C2BG/"];
            var21 = {};
            var28 = var25.name;
            var21['skuName'] = var28;
            var21 = var26.bind(var27)(var23, var21);
            var18['children'] = var21;
            var17 = var20.bind(var4)(var19, var18);
case 42:
            _fun0001_ip = 43; continue _fun0001;
case 35:
            var20 = _closure1_slot6;
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var18 = 26;
            var18 = var28[var18];
            var18 = var27.bind(var4)(var18);
            var19 = var18.Text;
            var18 = {'variant': 'heading-xl/bold', 'style': null, 'accessibilityRole': 'header'};
            var21 = var10.header;
            var18['style'] = var21;
            var21 = 27;
            var23 = var28[var21];
            var23 = var27.bind(var4)(var23);
            var26 = var23.intl;
            var23 = var26.string;
            var21 = var28[var21];
            var21 = var27.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21["5glWta"];
            var21 = var23.bind(var26)(var21);
            var18['children'] = var21;
            var17 = var20.bind(var4)(var19, var18);
case 43:
            _fun0001_ip = 44; continue _fun0001;
case 33:
            var20 = _closure1_slot6;
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var18 = 26;
            var18 = var28[var18];
            var18 = var27.bind(var4)(var18);
            var19 = var18.Text;
            var18 = {'variant': 'heading-xl/bold', 'style': null, 'accessibilityRole': 'header'};
            var21 = var10.header;
            var18['style'] = var21;
            var21 = 27;
            var23 = var28[var21];
            var23 = var27.bind(var4)(var23);
            var26 = var23.intl;
            var23 = var26.string;
            var21 = var28[var21];
            var21 = var27.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21["+BNMcF"];
            var21 = var23.bind(var26)(var21);
            var18['children'] = var21;
            var17 = var20.bind(var4)(var19, var18);
case 44:
            var7[1] = var17;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var17 = 16;
            var17 = var19[var17];
            var18 = var18.bind(var4)(var17);
            var17 = var18.isGameItemSKU;
            var17 = var17.bind(var18)(var25);
            if(!var17) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            if(!(var15 == var24)) { _fun0001_ip = 47; continue _fun0001 }
case 45:
            var8 = var8.isSubscription;
            if(!var8) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            if(!(var15 == var22)) { _fun0001_ip = 50; continue _fun0001 }
case 48:
            var18 = _closure1_slot6;
            var17 = _closure1_slot0;
            var19 = _closure1_slot2;
            var8 = 26;
            var8 = var19[var8];
            var8 = var17.bind(var4)(var8);
            var17 = var8.Text;
            var8 = {};
            var19 = 'text-md/medium';
            var8['variant'] = var19;
            var19 = var10.message;
            var8['style'] = var19;
            if(!(var15 != var9)) { _fun0001_ip = 51; continue _fun0001 }
case 52:
            var20 = var15 == var25;
            var19 = undefined;
            if(var20) { _fun0001_ip = 53; continue _fun0001 }
case 54:
            var19 = var25.name;
case 53:
            if(!(var15 == var19)) { _fun0001_ip = 55; continue _fun0001 }
case 51:
            var23 = _closure1_slot0;
            var26 = _closure1_slot2;
            var19 = 27;
            var20 = var26[var19];
            var20 = var23.bind(var4)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var19 = var26[var19];
            var19 = var23.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19["5ayf7w"];
            var19 = var20.bind(var21)(var19);
            _fun0001_ip = 56; continue _fun0001;
case 55:
            var21 = _closure1_slot0;
            var27 = _closure1_slot2;
            var20 = 27;
            var23 = var27[var20];
            var23 = var21.bind(var4)(var23);
            var26 = var23.intl;
            var23 = var26.formatToPlainString;
            var20 = var27[var20];
            var20 = var21.bind(var4)(var20);
            var20 = var20.t;
            var21 = var20["4kp0AB"];
            var20 = {};
            var27 = var25.name;
            var20['itemName'] = var27;
            var19 = var23.bind(var26)(var21, var20);
case 56:
            var8['children'] = var19;
            var8 = var18.bind(var4)(var17, var8);
            _fun0001_ip = 57; continue _fun0001;
case 50:
            var19 = _closure1_slot6;
            var21 = _closure1_slot0;
            var23 = _closure1_slot2;
            var17 = 26;
            var17 = var23[var17];
            var17 = var21.bind(var4)(var17);
            var18 = var17.Text;
            var17 = {};
            var20 = 'text-md/medium';
            var17['variant'] = var20;
            var20 = var10.message;
            var17['style'] = var20;
            var20 = 28;
            var20 = var23[var20];
            var21 = var21.bind(var4)(var20);
            var20 = var21.getSubscriptionGiftSuccessText;
            var20 = var20.bind(var21)(var22);
            var17['children'] = var20;
            var8 = var19.bind(var4)(var18, var17);
case 57:
            _fun0001_ip = 58; continue _fun0001;
case 47:
            var19 = _closure1_slot6;
            var21 = _closure1_slot0;
            var26 = _closure1_slot2;
            var17 = 26;
            var17 = var26[var17];
            var17 = var21.bind(var4)(var17);
            var18 = var17.Text;
            var17 = {};
            var20 = 'text-md/medium';
            var17['variant'] = var20;
            var20 = var10.message;
            var17['style'] = var20;
            var20 = 27;
            var22 = var26[var20];
            var22 = var21.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.formatToPlainString;
            var20 = var26[var20];
            var20 = var21.bind(var4)(var20);
            var20 = var20.t;
            var21 = var20.W2znvX;
            var20 = {};
            var27 = var15 == var25;
            var26 = undefined;
            if(var27) { _fun0001_ip = 59; continue _fun0001 }
case 60:
            var26 = var25.name;
case 59:
            var27 = var15 != var26;
            var25 = '';
            if(!var27) { _fun0001_ip = 61; continue _fun0001 }
case 62:
            var25 = var26;
case 61:
            var20['skuName'] = var25;
            var24 = var24.name;
            var20['applicationName'] = var24;
            var20 = var22.bind(var23)(var21, var20);
            var17['children'] = var20;
            var8 = var19.bind(var4)(var18, var17);
case 58:
            var7[2] = var8;
            var5['children'] = var7;
            var6 = var3.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot6;
            var7 = _closure1_slot3;
            var6 = {};
            var10 = var10.footer;
            var6['style'] = var10;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var10 = 29;
            var10 = var18[var10];
            var10 = var17.bind(var4)(var10);
            var10 = var10.Button;
            if(!(var15 != var9)) { _fun0001_ip = 63; continue _fun0001 }
case 64:
            var9 = {};
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var15 = 27;
            var17 = var20[var15];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var20[var15];
            var15 = var19.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.MAS7uK;
            var15 = var17.bind(var18)(var15);
            var9['text'] = var15;
            var15 = 'md';
            var9['size'] = var15;
            var15 = var13;
            if(!var13) { _fun0001_ip = 65; continue _fun0001 }
case 66:
            var15 = var16;
case 65:
            var9['loading'] = var15;
            if(!var13) { _fun0001_ip = 67; continue _fun0001 }
case 68:
            var13 = !var14;
case 67:
            var9['disabled'] = var13;
            var11 = function onPress() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot5;
                    if(!var2) { _fun0003_ip = 69; continue _fun0003 }
case 70:
                    var2 = _closure2_slot7;
                    if(var2) { _fun0003_ip = 3; continue _fun0003 }
case 69:
                    var10 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 20;
                    var4 = var7[var4];
                    var6 = undefined;
                    var8 = var10.bind(var6)(var4);
                    var5 = var8.match;
                    var4 = _closure2_slot4;
                    var11 = var5.bind(var8)(var4);
                    var8 = var11.with;
                    var5 = {};
                    var9 = 12;
                    var4 = var7[var9];
                    var4 = var10.bind(var6)(var4);
                    var4 = var4.CollectiblesItemType;
                    var4 = var4.AVATAR_DECORATION;
                    var5['type'] = var4;
                    var4 = function(arg1) {
                        var5 = _closure2_slot3;
                        var4 = var5.push;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 31;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var2 = var2.GiftCodeModalScreens;
                        var3 = var2.USE_AVATAR_DECORATION;
                        var2 = {};
                        var6 = arg1;
                        var2['avatarDecoration'] = var6;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var11 = var8.bind(var11)(var5, var4);
                    var8 = var11.with;
                    var5 = {};
                    var4 = var7[var9];
                    var4 = var10.bind(var6)(var4);
                    var4 = var4.CollectiblesItemType;
                    var4 = var4.PROFILE_EFFECT;
                    var5['type'] = var4;
                    var4 = function(arg1) {
                        var5 = _closure2_slot3;
                        var4 = var5.push;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 31;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var2 = var2.GiftCodeModalScreens;
                        var3 = var2.USE_PROFILE_EFFECT;
                        var2 = {};
                        var6 = arg1;
                        var2['profileEffect'] = var6;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var8 = var8.bind(var11)(var5, var4);
                    var5 = var8.with;
                    var4 = {};
                    var9 = var7[var9];
                    var9 = var10.bind(var6)(var9);
                    var9 = var9.CollectiblesItemType;
                    var9 = var9.NAMEPLATE;
                    var4['type'] = var9;
                    var3 = function(arg1) {
                        var5 = _closure2_slot3;
                        var4 = var5.push;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 31;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var2 = var2.GiftCodeModalScreens;
                        var3 = var2.USE_NAMEPLATE;
                        var2 = {};
                        var6 = arg1;
                        var2['nameplate'] = var6;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var4 = var5.bind(var8)(var4, var3);
                    var3 = var4.otherwise;
                    var5 = _closure1_slot1;
                    var2 = 30;
                    var2 = var7[var2];
                    var2 = var5.bind(var6)(var2);
                    var2 = var2.pop;
                    var2 = var3.bind(var4)(var2);
                    _fun0003_ip = 71; continue _fun0003;
case 3:
                    var2 = _closure2_slot6;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 71:
                    var1 = undefined;
                    return var1;
                }
            };
            var9['onPress'] = var11;
            _fun0001_ip = 72; continue _fun0001;
case 63:
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
case 72:
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