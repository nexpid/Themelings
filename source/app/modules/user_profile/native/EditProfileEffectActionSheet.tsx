// app/modules/user_profile/native/EditProfileEffectActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var11.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var10 = 1;
    var5 = var7[var10];
    var2 = metroImportAll;
    var2 = var2.bind(var1)(var5);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.View;
    var _closure1_slot5 = var5;
    var2 = var2.ActivityIndicator;
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var11.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.isProfileEffectRecord;
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.AnalyticEvents;
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot10 = var5;
    var2 = var2.jsxs;
    var _closure1_slot11 = var2;
    var2 = 7;
    var2 = var7[var2];
    var8 = var6.bind(var1)(var2);
    var5 = var8.createStyles;
    var2 = {};
    var9 = {};
    var9['flex'] = var10;
    var10 = 8;
    var12 = var7[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var9['backgroundColor'] = var12;
    var2['container'] = var9;
    var9 = {'flexDirection': 'column', 'alignItems': 'center', 'paddingBottom': 88, 'flex': 1};
    var2['contentContainer'] = var9;
    var9 = {'position': 'absolute', 'top': 4294967046, 'height': 250, 'right': 0, 'left': 0};
    var2['bounceOffset'] = var9;
    var9 = {};
    var10 = var7[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.MOBILE_TEXT_HEADING_PRIMARY;
    var9['color'] = var10;
    var10 = 25;
    var9['margin'] = var10;
    var2['title'] = var9;
    var9 = {'width': '92%', 'marginTop': 24, 'flex': 1};
    var2['profileEffectsList'] = var9;
    var2 = var5.bind(var8)(var2);
    var _closure1_slot12 = var2;
    var2 = function EditProfileEffectInner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var15 = var2.user;
            var _closure2_slot0 = var15;
            var8 = var2.selectedProfileEffect;
            var _closure2_slot1 = var8;
            var1 = var2.setSelectedProfileEffect;
            var _closure2_slot2 = var1;
            var1 = var2.isFetching;
            var16 = var2.guildId;
            var _closure2_slot3 = var16;
            var7 = var2.showTitle;
            var5 = undefined;
            if(!(var7 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = true;
case 2:
            var2 = var2.isTryItOut;
            if(!(var2 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = false;
case 4:
            var _closure2_slot4 = var2;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 22;
            var2 = var4[var2];
            var9 = var3.bind(var5)(var2);
            var2 = var9.useGetOrFetchCollectiblesCategoriesAndPurchases;
            var2 = var2.bind(var9)();
            var9 = _closure1_slot1;
            var2 = 23;
            var2 = var4[var2];
            var2 = var9.bind(var5)(var2);
            var12 = var2.bind(var5)();
            var2 = _closure1_slot12;
            var11 = var2.bind(var5)();
            var2 = 10;
            var2 = var4[var2];
            var9 = var9.bind(var5)(var2);
            var2 = var15.id;
            var9 = var9.bind(var5)(var2, var16);
            var2 = 16;
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.getProfilePreviewValue;
            var2 = {};
            var2['pendingValue'] = var8;
            var13 = null;
            var14 = var13 == var9;
            var8 = undefined;
            if(var14) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = var9.profileEffect;
case 6:
            var2['userValue'] = var8;
            var14 = var13 == var9;
            var8 = undefined;
            if(var14) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var9 = var9._guildMemberProfile;
            var14 = var13 == var9;
            var8 = undefined;
            if(var14) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            var8 = var9.profileEffect;
case 8:
            var2['guildValue'] = var8;
            var2['guildId'] = var16;
            var14 = var3.bind(var4)(var2);
            var8 = _closure1_slot4;
            var4 = var8.useEffect;
            var3 = new Array(1);
            var3[0] = var15;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var7 = null;
                    var2 = var7 == var2;
                    if(var2) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var4 = _closure2_slot0;
                    var3 = var4.isNonUserBot;
                    var2 = var3.bind(var4)();
case 11:
                    if(var2) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 24;
                    var2 = var4[var2];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var6 = _closure2_slot0;
                    var3 = var6.id;
                    var2 = var6.getAvatarURL;
                    var1 = 80;
                    var2 = var2.bind(var6)(var7, var1);
                    var1 = {'withMutualGuilds': true, 'dispatchWait': true};
                    var1 = var4.bind(var5)(var3, var2, var1);
case 13:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var8)(var2, var3);
            if(var1) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var3 = _closure1_slot11;
            var2 = _closure1_slot5;
            var1 = {};
            var4 = var11.contentContainer;
            var1['style'] = var4;
            if(!var7) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var9 = _closure1_slot10;
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var4 = 25;
            var4 = var21[var4];
            var4 = var20.bind(var5)(var4);
            var8 = var4.Text;
            var4 = {'variant': 'redesign/heading-18/bold', 'style': null, 'accessibilityRole': 'header'};
            var17 = var11.title;
            var4['style'] = var17;
            var17 = 26;
            var18 = var21[var17];
            var18 = var20.bind(var5)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var21[var17];
            var17 = var20.bind(var5)(var17);
            var17 = var17.t;
            var17 = var17./6nv6N;
            var17 = var18.bind(var19)(var17);
            var4['children'] = var17;
            var7 = var9.bind(var5)(var8, var4);
case 17:
            var4 = new Array(4);
            var4[0] = var7;
            var9 = _closure1_slot10;
            var8 = _closure1_slot14;
            var7 = {};
            var18 = var13 == var14;
            var17 = undefined;
            if(var18) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var17 = var14.skuId;
case 19:
            var7['previewSkuId'] = var17;
            var7['user'] = var15;
            var7['guildId'] = var16;
            var7 = var9.bind(var5)(var8, var7);
            var4[1] = var7;
            var9 = _closure1_slot10;
            var8 = _closure1_slot1;
            var16 = _closure1_slot2;
            var7 = 27;
            var7 = var16[var7];
            var8 = var8.bind(var5)(var7);
            var7 = {};
            var7['user'] = var15;
            var15 = var13 == var14;
            var13 = undefined;
            if(var15) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var13 = var14.skuId;
case 21:
            var7['previewSkuId'] = var13;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = 26;
            var14 = var17[var13];
            var14 = var16.bind(var5)(var14);
            var18 = var14.intl;
            var15 = var18.string;
            var14 = var17[var13];
            var14 = var16.bind(var5)(var14);
            var14 = var14.t;
            var14 = var14.pertpd;
            var14 = var15.bind(var18)(var14);
            var7['nitroJoinCTA'] = var14;
            var14 = var17[var13];
            var14 = var16.bind(var5)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.5eotIZ;
            var13 = var14.bind(var15)(var13);
            var7['nitroUpgradeCTA'] = var13;
            var7 = var9.bind(var5)(var8, var7);
            var4[2] = var7;
            var9 = _closure1_slot10;
            var8 = _closure1_slot5;
            var7 = {};
            var11 = var11.profileEffectsList;
            var7['style'] = var11;
            var11 = var12.map;
            var10 = function(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var7 = arg1;
                    var1 = var7.items;
                    var2 = var1.length;
                    var1 = 0;
                    var1 = var2 > var1;
                    if(!var1) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                    var6 = _closure1_slot10;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 28;
                    var2 = var4[var2];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = {};
                    var8 = _closure2_slot1;
                    var3['selectedProfileEffect'] = var8;
                    var8 = _closure2_slot2;
                    var3['setSelectedProfileEffect'] = var8;
                    var3['section'] = var7;
                    var7 = _closure2_slot3;
                    var3['guildId'] = var7;
                    var2 = _closure2_slot4;
                    var3['isTryItOut'] = var2;
                    var2 = arg2;
                    var1 = var6.bind(var5)(var4, var3, var2);
case 23:
                    return var1;
                }
            };
            var10 = var11.bind(var12)(var10);
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var4[3] = var7;
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 25; continue _fun0001;
case 15:
            var4 = _closure1_slot10;
            var3 = _closure1_slot5;
            var2 = {};
            var7 = {};
            var8 = 250;
            var7['top'] = var8;
            var2['style'] = var7;
            var7 = _closure1_slot6;
            var6 = {'animating': true, 'size': 'large'};
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 25:
            return var1;
        }
    };
    var _closure1_slot13 = var2;
    var5 = function ProfileEffectSectionPreview(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var3 = var2.previewSkuId;
            var11 = var2.user;
            var10 = var2.guildId;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 29;
            var2 = var4[var2];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var2 = var2.bind(var4)(var3);
            var7 = var2.product;
            var _closure2_slot0 = var7;
            var8 = var2.purchase;
            var _closure2_slot1 = var8;
            var5 = _closure1_slot4;
            var3 = var5.useMemo;
            var2 = new Array(2);
            var2[0] = var8;
            var2[1] = var7;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 == var2;
                    var4 = undefined;
                    var2 = undefined;
                    if(var3) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                    var3 = _closure2_slot0;
                    var6 = var3.items;
                    var3 = 0;
                    var2 = var6[var3];
case 26:
                    if(!(var1 == var2)) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                    var3 = _closure2_slot1;
                    var6 = var1 == var3;
                    var3 = undefined;
                    if(var6) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                    var5 = _closure2_slot1;
                    var6 = var5.items;
                    var5 = 0;
                    var3 = var6[var5];
case 30:
                    var2 = var3;
case 28:
                    var3 = _closure1_slot8;
                    var3 = var3.bind(var4)(var2);
                    var1 = null;
                    if(!var3) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                    var1 = var2;
case 32:
                    return var1;
                }
            };
            var9 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot10;
            var2 = _closure1_slot5;
            var1 = {'accessibilityLabel': null, 'accessibilityRole': 'image', 'accessible': true};
            var5 = null;
            if(!(var5 == var9)) { _fun0004_ip = 34; continue _fun0004 }
case 35:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var7 = 26;
            var8 = var14[var7];
            var8 = var13.bind(var4)(var8);
            var12 = var8.intl;
            var8 = var12.string;
            var7 = var14[var7];
            var7 = var13.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.XYdHeC;
            var7 = var8.bind(var12)(var7);
            _fun0004_ip = 36; continue _fun0004;
case 34:
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var8 = 26;
            var13 = var15[var8];
            var13 = var12.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.formatToPlainString;
            var8 = var15[var8];
            var8 = var12.bind(var4)(var8);
            var8 = var8.t;
            var12 = var8.mbHmX2;
            var8 = {};
            var15 = var9.accessibilityLabel;
            var8['a11y_text'] = var15;
            var7 = var13.bind(var14)(var12, var8);
case 36:
            var1['accessibilityLabel'] = var7;
            var8 = _closure1_slot10;
            var7 = _closure1_slot1;
            var12 = _closure1_slot2;
            var6 = 30;
            var6 = var12[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['user'] = var11;
            var6['guildId'] = var10;
            var6['pendingProfileEffectRecord'] = var9;
            var10 = var5 == var9;
            var5 = undefined;
            if(var10) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var5 = var9.skuId;
case 37:
            var5 = var8.bind(var4)(var7, var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot14 = var5;
    var5 = 31;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_profile/native/EditProfileEffectActionSheet.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function EditProfileEffectActionSheet(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var19 = var1.user;
            var _closure2_slot0 = var19;
            var20 = var1.currentProfileEffect;
            var24 = var1.guildId;
            var _closure2_slot1 = var24;
            var16 = var1.isTryItOut;
            var _closure2_slot2 = var16;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var1 = _closure1_slot12;
            var23 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 9;
            var1 = var7[var1];
            var6 = var3.bind(var4)(var1);
            var5 = var6.useStateFromStoresArray;
            var1 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var1 = _closure1_slot7;
                var2 = var1.isFetching;
                var1 = new Array(1);
                var1[0] = var2;
                return var1;
            };
            var3 = var5.bind(var6)(var3, var1);
            var1 = _closure1_slot3;
            var5 = 1;
            var1 = var1.bind(var4)(var3, var5);
            var6 = 0;
            var25 = var1[var6];
            var3 = _closure1_slot1;
            var1 = 10;
            var1 = var7[var1];
            var3 = var3.bind(var4)(var1);
            var7 = var19.id;
            var17 = null;
            var8 = var17 != var7;
            var1 = '';
            if(!var8) { _fun0006_ip = 39; continue _fun0006 }
case 40:
            var1 = var7;
case 39:
            var3 = var3.bind(var4)(var1);
            _closure2_slot3 = var3;
            var8 = _closure1_slot4;
            var7 = var8.useState;
            var1 = var20;
            if(!(var17 != var24)) { _fun0006_ip = 41; continue _fun0006 }
case 42:
            var10 = var17 == var20;
            var12 = undefined;
            if(var10) { _fun0006_ip = 43; continue _fun0006 }
case 6:
            var12 = var20.skuId;
case 43:
            var10 = var17 == var3;
            var11 = undefined;
            if(var10) { _fun0006_ip = 44; continue _fun0006 }
case 45:
            var10 = var3.profileEffect;
            var13 = var17 == var10;
            var11 = undefined;
            if(var13) { _fun0006_ip = 44; continue _fun0006 }
case 46:
            var11 = var10.skuId;
case 44:
            var10 = null;
            if(!(var12 !== var11)) { _fun0006_ip = 47; continue _fun0006 }
case 48:
            var10 = var20;
case 47:
            var1 = var10;
case 41:
            var8 = var7.bind(var8)(var1);
            var7 = _closure1_slot3;
            var1 = 2;
            var1 = var7.bind(var4)(var8, var1);
            var18 = var1[var6];
            _closure2_slot4 = var18;
            var26 = var1[var5];
            var7 = _closure1_slot4;
            var1 = var7.useRef;
            var11 = var1.bind(var7)(var17);
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 11;
            var1 = var5[var1];
            var6 = var6.bind(var4)(var1);
            var1 = var6.useBottomSheetRef;
            var1 = var1.bind(var6)();
            var22 = var1.bottomSheetRef;
            var12 = var1.bottomSheetClose;
            var8 = _closure1_slot1;
            var1 = 12;
            var6 = var5[var1];
            var6 = var8.bind(var4)(var6);
            var13 = 13;
            var5 = var5[var13];
            var5 = var8.bind(var4)(var5);
            var5 = var5.EDIT_PROFILE_EFFECT_SHEET;
            var5 = var6.bind(var4)(var5);
            var14 = var5.analyticsLocations;
            var6 = var7.useMemo;
            var5 = new Array(3);
            var5[0] = var24;
            var5[1] = var3;
            var8 = var17 == var19;
            var3 = undefined;
            if(var8) { _fun0006_ip = 49; continue _fun0006 }
case 50:
            var3 = var19.avatarDecoration;
case 49:
            var5[2] = var3;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = {};
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 13;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var3 = var3.EDIT_PROFILE_EFFECT_SHEET;
                    var1['type'] = var3;
                    var3 = _closure2_slot1;
                    var1['guild_id'] = var3;
                    var5 = _closure2_slot3;
                    var3 = null;
                    var5 = var3 != var5;
                    if(!var5) { _fun0007_ip = 51; continue _fun0007 }
case 3:
                    var6 = _closure2_slot3;
                    var7 = var3 == var6;
                    var6 = undefined;
                    if(var7) { _fun0007_ip = 52; continue _fun0007 }
case 53:
                    var8 = _closure2_slot3;
                    var7 = var8.hasPremiumCustomization;
                    var6 = var7.bind(var8)();
case 52:
                    var5 = var6;
case 51:
                    var1['profile_has_nitro_customization'] = var5;
                    var5 = global;
                    var6 = var5.Boolean;
                    var5 = _closure2_slot0;
                    var7 = var3 == var5;
                    var5 = undefined;
                    if(var7) { _fun0007_ip = 54; continue _fun0007 }
case 55:
                    var7 = _closure2_slot0;
                    var5 = var7.avatarDecoration;
case 54:
                    var5 = var6.bind(var2)(var5);
                    var1['has_avatar_decoration'] = var5;
                    var5 = _closure2_slot3;
                    var5 = var3 == var5;
                    var2 = undefined;
                    if(var5) { _fun0007_ip = 56; continue _fun0007 }
case 57:
                    var4 = _closure2_slot3;
                    var2 = var4.profileEffect;
case 56:
                    var2 = var3 != var2;
                    var1['has_profile_effect'] = var2;
                    return var1;
                }
            };
            var3 = var6.bind(var7)(var3, var5);
            _closure2_slot5 = var3;
            var6 = _closure1_slot4;
            var7 = var6.useCallback;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 14;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot9;
                var3 = var2.OPEN_POPOUT;
                var2 = {};
                var8 = _closure2_slot5;
                var9 = var2;
                var6 = copyDataProperties(var9, var8);
                var7 = true;
                var6 = 'is_fullscreen';
                var2[var6] = var7;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var8 = var7.bind(var6)(var3, var5);
            var5 = var6.useCallback;
            var3 = new Array(3);
            var3[0] = var18;
            var3[1] = var24;
            var3[2] = var16;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    if(var1) { _fun0008_ip = 58; continue _fun0008 }
case 59:
                    var1 = 16;
                    var5 = var2[var1];
                    var1 = undefined;
                    var7 = var3.bind(var1)(var5);
                    var6 = var7.setNewPendingProfileEffect;
                    var1 = _closure2_slot4;
                    var5 = null;
                    var1 = var5 != var1;
                    if(!var1) { _fun0008_ip = 60; continue _fun0008 }
case 61:
                    var5 = _closure2_slot4;
case 60:
                    var1 = _closure2_slot1;
                    var1 = var6.bind(var7)(var5, var1);
                    _fun0008_ip = 62; continue _fun0008;
case 58:
                    var1 = 15;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.setTryItOutProfileEffect;
                    var5 = _closure2_slot4;
                    var1 = null;
                    var5 = var1 != var5;
                    if(!var5) { _fun0008_ip = 63; continue _fun0008 }
case 13:
                    var1 = _closure2_slot4;
case 63:
                    var1 = var2.bind(var3)(var1);
case 62:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = var5.bind(var6)(var2, var3);
            var3 = _closure1_slot10;
            var10 = _closure1_slot0;
            var21 = _closure1_slot2;
            var1 = var21[var1];
            var1 = var10.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var14;
            var7 = _closure1_slot11;
            var5 = 17;
            var5 = var21[var5];
            var5 = var10.bind(var4)(var5);
            var6 = var5.BottomSheet;
            var5 = {'handleDisabled': true, 'scrollable': true, 'ref': null, 'onExpand': null, 'startExpanded': true};
            var5['ref'] = var22;
            var5['onExpand'] = var8;
            var8 = 18;
            var8 = var21[var8];
            var8 = var10.bind(var4)(var8);
            var10 = var8.BottomSheetScrollView;
            var8 = {};
            var22 = false;
            var8['scrollsToTop'] = var22;
            var27 = var23.container;
            var22 = new Array(1);
            var22[0] = var27;
            var8['style'] = var22;
            var8['ref'] = var11;
            var22 = _closure1_slot5;
            var11 = {};
            var23 = var23.bounceOffset;
            var11['style'] = var23;
            var22 = var3.bind(var4)(var22, var11);
            var11 = new Array(2);
            var11[0] = var22;
            var23 = _closure1_slot13;
            var22 = {};
            var22['user'] = var19;
            var22['selectedProfileEffect'] = var18;
            var22['setSelectedProfileEffect'] = var26;
            var22['isFetching'] = var25;
            var22['guildId'] = var24;
            var22['isTryItOut'] = var16;
            var22 = var3.bind(var4)(var23, var22);
            var11[1] = var22;
            var8['children'] = var11;
            var10 = var7.bind(var4)(var10, var8);
            var8 = new Array(3);
            var8[0] = var10;
            var11 = _closure1_slot1;
            var10 = 19;
            var10 = var21[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['user'] = var19;
            var21 = var17 == var20;
            var19 = undefined;
            if(var21) { _fun0006_ip = 64; continue _fun0006 }
case 65:
            var19 = var20.skuId;
case 64:
            var10['currentSkuId'] = var19;
            var19 = var17 == var18;
            var17 = undefined;
            if(var19) { _fun0006_ip = 66; continue _fun0006 }
case 67:
            var17 = var18.skuId;
case 66:
            var10['selectedSkuId'] = var17;
            var10['isTryItOut'] = var16;
            var10['onApply'] = var15;
            var10['analyticsLocations'] = var14;
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.EDIT_PROFILE_EFFECT_SHEET;
            var10['analyticsSource'] = var13;
            var10 = var3.bind(var4)(var11, var10);
            var8[1] = var10;
            var11 = _closure1_slot10;
            var14 = _closure1_slot0;
            var9 = 20;
            var9 = var15[var9];
            var9 = var14.bind(var4)(var9);
            var10 = var9.ActionSheetHeaderBar;
            var9 = {};
            var13 = 21;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.ActionSheetHeaderBarVariants;
            var13 = var13.FLOATING;
            var9['variant'] = var13;
            var9['onPress'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[2] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['EditProfileEffectInner'] = var2;
    return var1;
})();