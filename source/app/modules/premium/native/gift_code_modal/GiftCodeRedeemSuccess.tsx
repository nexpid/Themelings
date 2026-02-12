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
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flex': 1, 'justifyContent': 'space-between'};
    var10 = 5;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var9['backgroundColor'] = var12;
    var4['container'] = var9;
    var9 = {'flex': 1, 'alignItems': 'center', 'justifyContent': 'center', 'paddingTop': 28, 'paddingBottom': 12, 'paddingHorizontal': 32};
    var4['body'] = var9;
    var9 = {'height': 360, 'width': 216, 'borderRadius': null, 'overflow': 'hidden'};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var9['borderRadius'] = var12;
    var4['profileEffect'] = var9;
    var12 = '100%';
    var9 = {'height': '100%', 'width': '100%', 'resizeMode': 'contain'};
    var4['sampleProfile'] = var9;
    var9 = {};
    var9['width'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_24;
    var9['paddingTop'] = var12;
    var4['nameplateContainer'] = var9;
    var9 = {'width': '100%', 'alignItems': 'center'};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
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
    var _closure1_slot8 = var4;
    var4 = 34;
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
            var16 = null;
            var1 = null;
            if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var8.skuId;
case 2:
            var5 = true;
            var1 = var2.bind(var3)(var1, var5);
            var18 = var1.product;
            var1 = var16 == var18;
            var9 = undefined;
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var18.items;
            var1 = 0;
            var9 = var2[var1];
case 4:
            _closure2_slot4 = var9;
            var1 = var16 == var18;
            var6 = undefined;
            if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var18.type;
case 6:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var26 = 12;
            var1 = var3[var26];
            var1 = var2.bind(var4)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.BUNDLE;
            var14 = var6 === var1;
            _closure2_slot5 = var14;
            var1 = 13;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useShopProductItems;
            var1 = var18;
            if(!(var16 == var18)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = {};
            var7 = new Array(0);
            var6['items'] = var7;
            var1 = var6;
case 8:
            var1 = var2.bind(var3)(var1);
            var12 = var1.firstAvatarDecoration;
            var7 = var1.firstProfileEffect;
            var20 = var1.firstNameplate;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 14;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useHandleUseNow;
            var1 = {};
            var6 = var18;
            if(!(var16 == var6)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var15 = {};
            var17 = '';
            var15['skuId'] = var17;
            var19 = _closure1_slot0;
            var17 = _closure1_slot2;
            var17 = var17[var26];
            var17 = var19.bind(var4)(var17);
            var17 = var17.CollectiblesItemType;
            var17 = var17.BUNDLE;
            var15['type'] = var17;
            var17 = new Array(0);
            var15['items'] = var17;
            var6 = var15;
case 10:
            var1['product'] = var6;
            var1 = var2.bind(var3)(var1);
            var2 = var1.handleUseNow;
            _closure2_slot6 = var2;
            var17 = var1.isApplying;
            var15 = var14;
            if(!var14) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var15 = var16 != var18;
case 12:
            if(!var15) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var15 = var16 != var12;
case 14:
            if(!var15) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var15 = var16 != var7;
case 16:
            _closure2_slot7 = var15;
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 15;
            var1 = var6[var1];
            var19 = var2.bind(var4)(var1);
            var1 = {};
            var1['sku'] = var25;
            var21 = var3.bind(var4)(var19, var1);
            var1 = 16;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var19 = false;
            var1['isPurchased'] = var19;
            var1['deco'] = var12;
            var1['pfx'] = var7;
            var1['nameplate'] = var20;
            var20 = 'large';
            var1['size'] = var20;
            var20 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot7;
            var2 = _closure1_slot0;
            var1 = 17;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.SafeAreaPaddingView;
            var1 = {};
            var1['bottom'] = var5;
            var5 = var10.container;
            var1['style'] = var5;
            var6 = _closure1_slot4;
            var5 = {};
            var23 = var10.body;
            var5['contentContainerStyle'] = var23;
            var5['alwaysBounceVertical'] = var19;
            if(!(var16 == var9)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            if(!(var16 == var24)) { _fun0001_ip = 20; continue _fun0001 }
case 18:
            if(!var14) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            if(!(var16 != var18)) { _fun0001_ip = 21; continue _fun0001 }
case 23:
            if(!(var16 != var12)) { _fun0001_ip = 21; continue _fun0001 }
case 24:
            if(!(var16 == var7)) { _fun0001_ip = 25; continue _fun0001 }
case 21:
            var23 = _closure1_slot0;
            var7 = _closure1_slot2;
            var12 = 20;
            var12 = var7[var12];
            var18 = var23.bind(var4)(var12);
            var12 = var18.match;
            var27 = var12.bind(var18)(var9);
            var19 = var27.with;
            var18 = {};
            var12 = var7[var26];
            var12 = var23.bind(var4)(var12);
            var12 = var12.CollectiblesItemType;
            var12 = var12.AVATAR_DECORATION;
            var18['type'] = var12;
            var12 = function(arg1) {
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
            var27 = var19.bind(var27)(var18, var12);
            var19 = var27.with;
            var18 = {};
            var12 = var7[var26];
            var12 = var23.bind(var4)(var12);
            var12 = var12.CollectiblesItemType;
            var12 = var12.PROFILE_EFFECT;
            var18['type'] = var12;
            var12 = function(arg1) {
                var4 = _closure1_slot7;
                var3 = _closure1_slot3;
                var2 = {};
                var10 = _closure2_slot2;
                var5 = var10.profileEffect;
                var2['style'] = var5;
                var8 = _closure1_slot6;
                var7 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 23;
                var5 = var9[var1];
                var1 = undefined;
                var6 = var7.bind(var1)(var5);
                var5 = {};
                var11 = 24;
                var11 = var9[var11];
                var11 = var7.bind(var1)(var11);
                var5['source'] = var11;
                var10 = var10.sampleProfile;
                var5['style'] = var10;
                var10 = true;
                var5['disableColor'] = var10;
                var6 = var8.bind(var1)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var6 = 25;
                var6 = var9[var6];
                var7 = var7.bind(var1)(var6);
                var6 = {};
                var9 = arg1;
                var9 = var9.skuId;
                var6['skuId'] = var9;
                var9 = 0;
                var6['bannerAdjustment'] = var9;
                var6 = var8.bind(var1)(var7, var6);
                var5[1] = var6;
                var2['children'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var19 = var19.bind(var27)(var18, var12);
            var18 = var19.with;
            var12 = {};
            var7 = var7[var26];
            var7 = var23.bind(var4)(var7);
            var7 = var7.CollectiblesItemType;
            var7 = var7.NAMEPLATE;
            var12['type'] = var7;
            var7 = function(arg1) {
                var4 = _closure1_slot6;
                var3 = _closure1_slot3;
                var2 = {};
                var5 = _closure2_slot2;
                var5 = var5.nameplateContainer;
                var2['style'] = var5;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 26;
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
            var18 = var18.bind(var19)(var12, var7);
            var12 = var18.otherwise;
            var7 = function() {
                var4 = _closure1_slot6;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 27;
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
            var12 = var12.bind(var18)(var7);
            _fun0001_ip = 28; continue _fun0001;
case 25:
            var19 = _closure1_slot6;
            var18 = _closure1_slot3;
            var7 = {};
            var23 = var10.bundleContainer;
            var7['style'] = var23;
            var7['children'] = var20;
            var12 = var19.bind(var4)(var18, var7);
case 28:
            _fun0001_ip = 29; continue _fun0001;
case 20:
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var7 = 18;
            var7 = var19[var7];
            var18 = var18.bind(var4)(var7);
            var7 = var18.isGameItemSKU;
            var7 = var7.bind(var18)(var25);
            var20 = _closure1_slot6;
            if(var7) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var18 = _closure1_slot1;
            var26 = _closure1_slot2;
            var19 = 19;
            var7 = var26[var19];
            var18 = var18.bind(var4)(var7);
            var7 = {};
            var7['game'] = var24;
            var23 = _closure1_slot0;
            var19 = var26[var19];
            var19 = var23.bind(var4)(var19);
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
            var23 = var10.gameItemCard;
            var18['style'] = var23;
            var18['children'] = var21;
            var7 = var20.bind(var4)(var19, var18);
case 32:
            var12 = var7;
case 29:
            var7 = new Array(3);
            var7[0] = var12;
            if(!(var16 != var25)) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var12 = 18;
            var12 = var19[var12];
            var18 = var18.bind(var4)(var12);
            var12 = var18.isGameItemSKU;
            var12 = var12.bind(var18)(var25);
            if(var12) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var12 = var8.isSubscription;
            if(!var12) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            if(!(var16 == var22)) { _fun0001_ip = 39; continue _fun0001 }
case 37:
            var18 = var16 != var9;
            var12 = undefined;
            if(!var18) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var20 = _closure1_slot6;
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var18 = 28;
            var18 = var28[var18];
            var18 = var27.bind(var4)(var18);
            var19 = var18.Text;
            var18 = {'variant': 'heading-xl/bold', 'color': 'mobile-text-heading-primary'};
            var21 = var10.header;
            var18['style'] = var21;
            var21 = 29;
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
            var12 = var20.bind(var4)(var19, var18);
case 40:
            _fun0001_ip = 42; continue _fun0001;
case 39:
            var20 = _closure1_slot6;
            var23 = _closure1_slot0;
            var28 = _closure1_slot2;
            var18 = 28;
            var18 = var28[var18];
            var18 = var23.bind(var4)(var18);
            var19 = var18.Text;
            var18 = {};
            var21 = 'heading-xl/bold';
            var18['variant'] = var21;
            var21 = var10.header;
            var18['style'] = var21;
            var21 = 29;
            var26 = var28[var21];
            var26 = var23.bind(var4)(var26);
            var27 = var26.intl;
            var26 = var27.format;
            var21 = var28[var21];
            var21 = var23.bind(var4)(var21);
            var21 = var21.t;
            var23 = var21.1C2BG/;
            var21 = {};
            var28 = var25.name;
            var21['skuName'] = var28;
            var21 = var26.bind(var27)(var23, var21);
            var18['children'] = var21;
            var12 = var20.bind(var4)(var19, var18);
case 42:
            _fun0001_ip = 43; continue _fun0001;
case 35:
            var20 = _closure1_slot6;
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var18 = 28;
            var18 = var28[var18];
            var18 = var27.bind(var4)(var18);
            var19 = var18.Text;
            var18 = {};
            var21 = 'heading-xl/bold';
            var18['variant'] = var21;
            var21 = var10.header;
            var18['style'] = var21;
            var21 = 29;
            var23 = var28[var21];
            var23 = var27.bind(var4)(var23);
            var26 = var23.intl;
            var23 = var26.string;
            var21 = var28[var21];
            var21 = var27.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.5glWta;
            var21 = var23.bind(var26)(var21);
            var18['children'] = var21;
            var12 = var20.bind(var4)(var19, var18);
case 43:
            _fun0001_ip = 44; continue _fun0001;
case 33:
            var20 = _closure1_slot6;
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var18 = 28;
            var18 = var28[var18];
            var18 = var27.bind(var4)(var18);
            var19 = var18.Text;
            var18 = {};
            var21 = 'heading-xl/bold';
            var18['variant'] = var21;
            var21 = var10.header;
            var18['style'] = var21;
            var21 = 29;
            var23 = var28[var21];
            var23 = var27.bind(var4)(var23);
            var26 = var23.intl;
            var23 = var26.string;
            var21 = var28[var21];
            var21 = var27.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.+BNMcF;
            var21 = var23.bind(var26)(var21);
            var18['children'] = var21;
            var12 = var20.bind(var4)(var19, var18);
case 44:
            var7[1] = var12;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var12 = 18;
            var12 = var19[var12];
            var18 = var18.bind(var4)(var12);
            var12 = var18.isGameItemSKU;
            var12 = var12.bind(var18)(var25);
            if(!var12) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            if(!(var16 == var24)) { _fun0001_ip = 47; continue _fun0001 }
case 45:
            var8 = var8.isSubscription;
            if(!var8) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            if(!(var16 == var22)) { _fun0001_ip = 50; continue _fun0001 }
case 48:
            var18 = _closure1_slot6;
            var12 = _closure1_slot0;
            var19 = _closure1_slot2;
            var8 = 28;
            var8 = var19[var8];
            var8 = var12.bind(var4)(var8);
            var12 = var8.Text;
            var8 = {};
            var19 = 'text-md/medium';
            var8['variant'] = var19;
            var19 = var10.message;
            var8['style'] = var19;
            if(!(var16 != var9)) { _fun0001_ip = 51; continue _fun0001 }
case 52:
            var20 = var16 == var25;
            var19 = undefined;
            if(var20) { _fun0001_ip = 53; continue _fun0001 }
case 54:
            var19 = var25.name;
case 53:
            if(!(var16 == var19)) { _fun0001_ip = 55; continue _fun0001 }
case 51:
            var23 = _closure1_slot0;
            var26 = _closure1_slot2;
            var19 = 29;
            var20 = var26[var19];
            var20 = var23.bind(var4)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var19 = var26[var19];
            var19 = var23.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.5ayf7w;
            var19 = var20.bind(var21)(var19);
            _fun0001_ip = 56; continue _fun0001;
case 55:
            var21 = _closure1_slot0;
            var27 = _closure1_slot2;
            var20 = 29;
            var23 = var27[var20];
            var23 = var21.bind(var4)(var23);
            var26 = var23.intl;
            var23 = var26.formatToPlainString;
            var20 = var27[var20];
            var20 = var21.bind(var4)(var20);
            var20 = var20.t;
            var21 = var20.4kp0AB;
            var20 = {};
            var27 = var25.name;
            var20['itemName'] = var27;
            var19 = var23.bind(var26)(var21, var20);
case 56:
            var8['children'] = var19;
            var8 = var18.bind(var4)(var12, var8);
            _fun0001_ip = 57; continue _fun0001;
case 50:
            var19 = _closure1_slot6;
            var21 = _closure1_slot0;
            var23 = _closure1_slot2;
            var12 = 28;
            var12 = var23[var12];
            var12 = var21.bind(var4)(var12);
            var18 = var12.Text;
            var12 = {};
            var20 = 'text-md/medium';
            var12['variant'] = var20;
            var20 = var10.message;
            var12['style'] = var20;
            var20 = 30;
            var20 = var23[var20];
            var21 = var21.bind(var4)(var20);
            var20 = var21.getSubscriptionGiftSuccessText;
            var20 = var20.bind(var21)(var22);
            var12['children'] = var20;
            var8 = var19.bind(var4)(var18, var12);
case 57:
            _fun0001_ip = 58; continue _fun0001;
case 47:
            var19 = _closure1_slot6;
            var21 = _closure1_slot0;
            var26 = _closure1_slot2;
            var12 = 28;
            var12 = var26[var12];
            var12 = var21.bind(var4)(var12);
            var18 = var12.Text;
            var12 = {};
            var20 = 'text-md/medium';
            var12['variant'] = var20;
            var20 = var10.message;
            var12['style'] = var20;
            var20 = 29;
            var22 = var26[var20];
            var22 = var21.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.formatToPlainString;
            var20 = var26[var20];
            var20 = var21.bind(var4)(var20);
            var20 = var20.t;
            var21 = var20.W2znvX;
            var20 = {};
            var27 = var16 == var25;
            var26 = undefined;
            if(var27) { _fun0001_ip = 59; continue _fun0001 }
case 60:
            var26 = var25.name;
case 59:
            var27 = var16 != var26;
            var25 = '';
            if(!var27) { _fun0001_ip = 61; continue _fun0001 }
case 62:
            var25 = var26;
case 61:
            var20['skuName'] = var25;
            var24 = var24.name;
            var20['applicationName'] = var24;
            var20 = var22.bind(var23)(var21, var20);
            var12['children'] = var20;
            var8 = var19.bind(var4)(var18, var12);
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
            var18 = _closure1_slot1;
            var10 = _closure1_slot2;
            var12 = 31;
            var10 = var10[var12];
            var10 = var18.bind(var4)(var10);
            if(!(var16 != var9)) { _fun0001_ip = 63; continue _fun0001 }
case 64:
            var9 = {};
            var21 = _closure1_slot0;
            var16 = _closure1_slot2;
            var18 = 29;
            var19 = var16[var18];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var16[var18];
            var18 = var21.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.MAS7uK;
            var18 = var19.bind(var20)(var18);
            var9['text'] = var18;
            var18 = _closure1_slot1;
            var19 = var16[var12];
            var19 = var18.bind(var4)(var19);
            var19 = var19.Sizes;
            var19 = var19.MEDIUM;
            var9['size'] = var19;
            var16 = var16[var12];
            var16 = var18.bind(var4)(var16);
            var16 = var16.Colors;
            var16 = var16.BRAND;
            var9['color'] = var16;
            var16 = var14;
            if(!var14) { _fun0001_ip = 65; continue _fun0001 }
case 66:
            var16 = var17;
case 65:
            var9['loading'] = var16;
            if(!var14) { _fun0001_ip = 67; continue _fun0001 }
case 68:
            var14 = !var15;
case 67:
            var9['disabled'] = var14;
            var11 = function onPress() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot5;
                    if(!var2) { _fun0003_ip = 69; continue _fun0003 }
case 70:
                    var2 = _closure2_slot7;
                    if(var2) { _fun0003_ip = 71; continue _fun0003 }
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
                        var1 = 33;
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
                        var1 = 33;
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
                        var1 = 33;
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
                    var2 = 32;
                    var2 = var7[var2];
                    var2 = var5.bind(var6)(var2);
                    var2 = var2.pop;
                    var2 = var3.bind(var4)(var2);
                    _fun0003_ip = 2; continue _fun0003;
case 71:
                    var2 = _closure2_slot6;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var9['onPress'] = var11;
            _fun0001_ip = 72; continue _fun0001;
case 63:
            var11 = {};
            var18 = _closure1_slot0;
            var14 = _closure1_slot2;
            var15 = 29;
            var16 = var14[var15];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var14[var15];
            var15 = var18.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.NX+WJN;
            var15 = var16.bind(var17)(var15);
            var11['text'] = var15;
            var13 = _closure1_slot1;
            var15 = var14[var12];
            var15 = var13.bind(var4)(var15);
            var15 = var15.Sizes;
            var15 = var15.MEDIUM;
            var11['size'] = var15;
            var12 = var14[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.Colors;
            var12 = var12.BRAND;
            var11['color'] = var12;
            var12 = 32;
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