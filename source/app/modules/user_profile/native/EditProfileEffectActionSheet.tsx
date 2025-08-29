// app/modules/user_profile/native/EditProfileEffectActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
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
    var2 = var13.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var11 = 1;
    var5 = var7[var11];
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
    var2 = var13.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var13.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var13.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.AnalyticEvents;
    var _closure1_slot10 = var2;
    var2 = 7;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.CollectiblesMobileShopScreen;
    var _closure1_slot11 = var2;
    var2 = 8;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.MEDIA_PICKER_SEND_BUTTON_SPRING;
    var _closure1_slot12 = var2;
    var2 = 9;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot13 = var5;
    var5 = var2.jsxs;
    var _closure1_slot14 = var5;
    var2 = var2.Fragment;
    var _closure1_slot15 = var2;
    var2 = 10;
    var2 = var7[var2];
    var8 = var6.bind(var1)(var2);
    var5 = var8.createStyles;
    var2 = {};
    var9 = {};
    var9['flex'] = var11;
    var12 = 11;
    var10 = var7[var12];
    var10 = var13.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_PRIMARY;
    var9['backgroundColor'] = var10;
    var2['container'] = var9;
    var9 = {'flexDirection': 'column', 'alignItems': 'center', 'paddingBottom': 88, 'flex': 1};
    var2['contentContainer'] = var9;
    var9 = {'position': 'absolute', 'top': 4294967046, 'height': 250, 'right': 0, 'left': 0};
    var2['bounceOffset'] = var9;
    var9 = {};
    var10 = var7[var12];
    var10 = var13.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.HEADER_PRIMARY;
    var9['color'] = var10;
    var10 = 25;
    var9['margin'] = var10;
    var2['title'] = var9;
    var9 = {'textAlign': 'center', 'marginTop': 16};
    var10 = 16;
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.TEXT_NORMAL;
    var9['color'] = var14;
    var2['description'] = var9;
    var9 = {'width': '72%', 'minHeight': 38};
    var2['descriptionContainer'] = var9;
    var9 = {'textAlign': 'center', 'marginTop': 2};
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.TEXT_NORMAL;
    var9['color'] = var14;
    var2['purchasedAt'] = var9;
    var9 = {'width': '92%', 'marginTop': 10, 'flex': 1};
    var2['profileEffectsList'] = var9;
    var9 = {};
    var12 = var7[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var9['borderRadius'] = var12;
    var9['flexGrow'] = var11;
    var2['ctaButtonStyle'] = var9;
    var9 = {};
    var9['fontSize'] = var10;
    var2['ctaTextStyle'] = var9;
    var9 = {'flexGrow': 0, 'flexDirection': 'row', 'justifyContent': 'flex-end', 'paddingHorizontal': 12, 'height': 48};
    var2['buttonRowContainer'] = var9;
    var9 = {'position': 'absolute', 'bottom': 0, 'left': 0, 'right': 0, 'marginLeft': 24, 'marginRight': 24, 'flexDirection': 'column', 'justifyContent': 'flex-end'};
    var2['applyButtonContainer'] = var9;
    var2 = var5.bind(var8)(var2);
    var _closure1_slot16 = var2;
    var2 = {};
    var5 = 'function EditProfileEffectActionSheetTsx1(){const{shouldShowCtaButton,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetTranslateY=shouldShowCtaButton.get()?0:60;const targetScale=shouldShowCtaButton.get()?1:0.9;return{transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}]};}';
    var2['code'] = var5;
    var _closure1_slot17 = var2;
    var2 = {};
    var5 = "function EditProfileEffectActionSheetTsx2(){const{shouldShowCtaButton}=this.__closure;return{pointerEvents:shouldShowCtaButton.get()?'box-none':'none'};}";
    var2['code'] = var5;
    var _closure1_slot18 = var2;
    var2 = {};
    var5 = 'function EditProfileEffectActionSheetTsx3(){const{shouldShowCtaButton,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetOpacity=shouldShowCtaButton.get()?1:0;return{opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,{...MEDIA_PICKER_SEND_BUTTON_SPRING,overshootClamping:true})};}';
    var2['code'] = var5;
    var _closure1_slot19 = var2;
    var2 = function EditProfileEffectInner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var15 = var2.user;
            var _closure2_slot0 = var15;
            var13 = var2.selectedProfileEffect;
            var _closure2_slot1 = var13;
            var1 = var2.setSelectedProfileEffect;
            var _closure2_slot2 = var1;
            var1 = var2.isFetching;
            var7 = var2.showTitle;
            var5 = undefined;
            if(!(var7 === var5)) { _fun0001_ip = 54; continue _fun0001 }
 52:
            var7 = true;
 54:
            var14 = var2.guildId;
            var _closure2_slot3 = var14;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 35;
            var2 = var8[var2];
            var4 = var3.bind(var5)(var2);
            var2 = var4.useGetOrFetchCollectiblesCategoriesAndPurchases;
            var2 = var2.bind(var4)();
            var4 = _closure1_slot1;
            var2 = 36;
            var2 = var8[var2];
            var2 = var4.bind(var5)(var2);
            var12 = var2.bind(var5)();
            var2 = _closure1_slot16;
            var11 = var2.bind(var5)();
            var4 = 12;
            var2 = var8[var4];
            var17 = var3.bind(var5)(var2);
            var16 = var17.useStateFromStores;
            var2 = _closure1_slot8;
            var9 = new Array(1);
            var9[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot8;
                    var2 = var3.getPurchase;
                    var5 = _closure2_slot1;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0002_ip = 41; continue _fun0002 }
 31:
                    var4 = _closure2_slot1;
                    var1 = var4.skuId;
 41:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var29 = var16.bind(var17)(var9, var2);
            var2 = 37;
            var2 = var8[var2];
            var8 = var3.bind(var5)(var2);
            var3 = var8.useProfileEffectPreset;
            var23 = null;
            var9 = var23 == var13;
            var2 = undefined;
            if(var9) { _fun0001_ip = 200; continue _fun0001 }
 195:
            var2 = var13.id;
 200:
            var2 = var3.bind(var8)(var2);
            var3 = var23 == var2;
            var18 = undefined;
            if(var3) { _fun0001_ip = 219; continue _fun0001 }
 214:
            var18 = var2.config;
 219:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var4];
            var8 = var3.bind(var5)(var2);
            var4 = var8.useStateFromStores;
            var2 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = _closure1_slot9;
                var1 = var1.locale;
                return var1;
            };
            var32 = var4.bind(var8)(var3, var2);
            var3 = var23 == var29;
            var2 = undefined;
            if(var3) { _fun0001_ip = 281; continue _fun0001 }
 275:
            var2 = var29.expiresAt;
 281:
            var2 = var23 != var2;
            var31 = null;
            if(!var2) { _fun0001_ip = 356; continue _fun0001 }
 290:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 38;
            var2 = var4[var2];
            var8 = var3.bind(var5)(var2);
            var4 = var8.diffAsUnits;
            var2 = global;
            var2 = var2.Date;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var38 = var3;
            var2 = new var38[var2](var37);
            var3 = var2 instanceof Object ? var2 : var3;
            var2 = var29.expiresAt;
            var31 = var4.bind(var8)(var3, var2);
 356:
            var8 = _closure1_slot4;
            var4 = var8.useEffect;
            var3 = new Array(1);
            var3[0] = var15;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot0;
                    var7 = null;
                    var2 = var7 == var2;
                    if(var2) { _fun0003_ip = 30; continue _fun0003 }
 16:
                    var4 = _closure2_slot0;
                    var3 = var4.isNonUserBot;
                    var2 = var3.bind(var4)();
 30:
                    if(var2) { _fun0003_ip = 103; continue _fun0003 }
 33:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 39;
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
 103:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var8)(var2, var3);
            if(var1) { _fun0001_ip = 1262; continue _fun0001 }
 392:
            var3 = _closure1_slot14;
            var2 = _closure1_slot5;
            var1 = {};
            var4 = var11.contentContainer;
            var1['style'] = var4;
            if(!var7) { _fun0001_ip = 528; continue _fun0001 }
 415:
            var9 = _closure1_slot13;
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var4 = 40;
            var4 = var21[var4];
            var4 = var20.bind(var5)(var4);
            var8 = var4.Text;
            var4 = {'variant': 'redesign/heading-18/bold', 'style': null, 'accessibilityRole': 'header'};
            var16 = var11.title;
            var4['style'] = var16;
            var16 = 24;
            var17 = var21[var16];
            var17 = var20.bind(var5)(var17);
            var19 = var17.intl;
            var17 = var19.string;
            var16 = var21[var16];
            var16 = var20.bind(var5)(var16);
            var16 = var16.t;
            var16 = var16./6nv6O;
            var16 = var17.bind(var19)(var16);
            var4['children'] = var16;
            var7 = var9.bind(var5)(var8, var4);
 528:
            var4 = new Array(4);
            var4[0] = var7;
            var9 = _closure1_slot13;
            var8 = _closure1_slot1;
            var16 = _closure1_slot2;
            var7 = 41;
            var7 = var16[var7];
            var8 = var8.bind(var5)(var7);
            var7 = {};
            var7['user'] = var15;
            var7['guildId'] = var14;
            var7['pendingProfileEffectRecord'] = var13;
            var7 = var9.bind(var5)(var8, var7);
            var4[1] = var7;
            var8 = var23 != var18;
            var7 = undefined;
            if(!var8) { _fun0001_ip = 1199; continue _fun0001 }
 597:
            var14 = _closure1_slot14;
            var13 = _closure1_slot5;
            var8 = {};
            var15 = var11.descriptionContainer;
            var8['style'] = var15;
            var17 = _closure1_slot13;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var22 = 40;
            var15 = var15[var22];
            var15 = var16.bind(var5)(var15);
            var16 = var15.Text;
            var15 = {'variant': 'heading-md/bold', 'color': 'text-normal'};
            var19 = var11.description;
            var15['style'] = var19;
            var18 = var18.title;
            var15['children'] = var18;
            var16 = var17.bind(var5)(var16, var15);
            var15 = new Array(2);
            var15[0] = var16;
            var16 = var23 != var29;
            if(!var16) { _fun0001_ip = 1185; continue _fun0001 }
 702:
            var19 = _closure1_slot14;
            var18 = _closure1_slot15;
            var17 = {};
            var21 = var23 != var31;
            if(!var21) { _fun0001_ip = 852; continue _fun0001 }
 722:
            var25 = _closure1_slot13;
            var27 = _closure1_slot0;
            var33 = _closure1_slot2;
            var20 = var33[var22];
            var20 = var27.bind(var5)(var20);
            var24 = var20.Text;
            var20 = {'variant': 'text-sm/medium', 'color': 'header-primary'};
            var26 = var11.purchasedAt;
            var20['style'] = var26;
            var26 = 24;
            var28 = var33[var26];
            var28 = var27.bind(var5)(var28);
            var30 = var28.intl;
            var28 = var30.format;
            var26 = var33[var26];
            var26 = var27.bind(var5)(var26);
            var26 = var26.t;
            var27 = var26.Io7ozs;
            var26 = {};
            var33 = var31.days;
            var31 = var33.toString;
            var31 = var31.bind(var33)();
            var26['days'] = var31;
            var26 = var28.bind(var30)(var27, var26);
            var20['children'] = var26;
            var21 = var25.bind(var5)(var24, var20);
 852:
            var20 = new Array(3);
            var20[0] = var21;
            var25 = _closure1_slot13;
            var27 = _closure1_slot0;
            var26 = _closure1_slot2;
            var21 = var26[var22];
            var21 = var27.bind(var5)(var21);
            var24 = var21.Text;
            var21 = {'variant': 'text-sm/medium', 'color': 'header-primary'};
            var28 = var11.purchasedAt;
            var21['style'] = var28;
            var30 = 24;
            var28 = var26[var30];
            var28 = var27.bind(var5)(var28);
            var31 = var28.intl;
            var28 = var31.format;
            var26 = var26[var30];
            var26 = var27.bind(var5)(var26);
            var26 = var26.t;
            var27 = var26.gW9R4O;
            var26 = {};
            var35 = var29.purchasedAt;
            var34 = var35.toLocaleDateString;
            var33 = {'month': 'long', 'year': 'numeric'};
            var33 = var34.bind(var35)(var32, var33);
            var26['date'] = var33;
            var26 = var28.bind(var31)(var27, var26);
            var21['children'] = var26;
            var21 = var25.bind(var5)(var24, var21);
            var20[1] = var21;
            var21 = var29.expiresAt;
            var21 = var23 != var21;
            if(!var21) { _fun0001_ip = 1171; continue _fun0001 }
 1027:
            var24 = _closure1_slot13;
            var26 = _closure1_slot0;
            var25 = _closure1_slot2;
            var22 = var25[var22];
            var22 = var26.bind(var5)(var22);
            var23 = var22.Text;
            var22 = {'variant': 'text-sm/medium', 'color': 'header-primary'};
            var27 = var11.purchasedAt;
            var22['style'] = var27;
            var27 = var25[var30];
            var27 = var26.bind(var5)(var27);
            var28 = var27.intl;
            var27 = var28.format;
            var25 = var25[var30];
            var25 = var26.bind(var5)(var25);
            var25 = var25.t;
            var26 = var25.eZSTa2;
            var25 = {};
            var31 = var29.expiresAt;
            var30 = var31.toLocaleDateString;
            var29 = {'minute': 'numeric', 'hour': 'numeric', 'day': 'numeric', 'month': 'long', 'year': 'numeric'};
            var29 = var30.bind(var31)(var32, var29);
            var25['date'] = var29;
            var25 = var27.bind(var28)(var26, var25);
            var22['children'] = var25;
            var21 = var24.bind(var5)(var23, var22);
 1171:
            var20[2] = var21;
            var17['children'] = var20;
            var16 = var19.bind(var5)(var18, var17);
 1185:
            var15[1] = var16;
            var8['children'] = var15;
            var7 = var14.bind(var5)(var13, var8);
 1199:
            var4[2] = var7;
            var8 = _closure1_slot5;
            var7 = {};
            var11 = var11.profileEffectsList;
            var7['style'] = var11;
            var11 = var12.map;
            var10 = function(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var7 = arg1;
                    var1 = var7.items;
                    var2 = var1.length;
                    var1 = 0;
                    var1 = var2 > var1;
                    if(!var1) { _fun0004_ip = 97; continue _fun0004 }
 23:
                    var6 = _closure1_slot13;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 42;
                    var2 = var4[var2];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = {};
                    var8 = _closure2_slot1;
                    var3['selectedProfileEffect'] = var8;
                    var8 = _closure2_slot2;
                    var3['setSelectedProfileEffect'] = var8;
                    var3['section'] = var7;
                    var2 = _closure2_slot3;
                    var3['guildId'] = var2;
                    var2 = arg2;
                    var1 = var6.bind(var5)(var4, var3, var2);
 97:
                    return var1;
                }
            };
            var10 = var11.bind(var12)(var10);
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var4[3] = var7;
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 1319; continue _fun0001;
 1262:
            var4 = _closure1_slot13;
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
 1319:
            return var1;
        }
    };
    var _closure1_slot20 = var2;
    var5 = 43;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_profile/native/EditProfileEffectActionSheet.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function EditProfileEffectActionSheet(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var30 = var1.user;
            var _closure2_slot0 = var30;
            var12 = var1.currentProfileEffectId;
            var26 = var1.guildId;
            var _closure2_slot1 = var26;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var1 = _closure1_slot16;
            var19 = var1.bind(var4)();
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 12;
            var3 = var10[var1];
            var7 = var5.bind(var4)(var3);
            var6 = var7.useStateFromStoresArray;
            var3 = _closure1_slot8;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var2 = _closure1_slot8;
                var3 = var2.purchases;
                var1 = new Array(2);
                var1[0] = var3;
                var2 = var2.isFetching;
                var1[1] = var2;
                return var1;
            };
            var5 = var6.bind(var7)(var5, var3);
            var3 = _closure1_slot3;
            var11 = 2;
            var7 = var3.bind(var4)(var5, var11);
            var6 = 0;
            var3 = var7[var6];
            var _closure2_slot2 = var3;
            var5 = 1;
            var27 = var7[var5];
            var13 = _closure1_slot4;
            var8 = var13.useMemo;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getProfileEffectsFromPurchases;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var8.bind(var13)(var3, var7);
            var _closure2_slot3 = var3;
            var8 = _closure1_slot1;
            var7 = 14;
            var7 = var10[var7];
            var8 = var8.bind(var4)(var7);
            var13 = var30.id;
            var10 = null;
            var14 = var10 != var13;
            var7 = '';
            if(!var14) { _fun0005_ip = 238; continue _fun0005 }
 235:
            var7 = var13;
 238:
            var8 = var8.bind(var4)(var7);
            _closure2_slot4 = var8;
            var14 = var12;
            if(!(var10 != var26)) { _fun0005_ip = 295; continue _fun0005 }
 254:
            var7 = var10 == var8;
            var13 = undefined;
            if(var7) { _fun0005_ip = 283; continue _fun0005 }
 263:
            var7 = var8.profileEffect;
            var15 = var10 == var7;
            var13 = undefined;
            if(var15) { _fun0005_ip = 283; continue _fun0005 }
 278:
            var13 = var7.id;
 283:
            var7 = null;
            if(!(var12 !== var13)) { _fun0005_ip = 292; continue _fun0005 }
 289:
            var7 = var12;
 292:
            var14 = var7;
 295:
            _closure2_slot5 = var14;
            var7 = _closure1_slot4;
            var13 = var7.useMemo;
            var12 = new Array(2);
            var12[0] = var14;
            var12[1] = var3;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure2_slot5;
                    var1 = null;
                    var3 = var1 != var3;
                    var1 = undefined;
                    if(!var3) { _fun0006_ip = 41; continue _fun0006 }
 18:
                    var4 = _closure2_slot3;
                    var3 = var4.find;
                    var2 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                            var1 = arg1;
                            var2 = null;
                            var3 = var2 == var1;
                            var2 = undefined;
                            if(var3) { _fun0007_ip = 19; continue _fun0007 }
 14:
                            var2 = var1.id;
 19:
                            var1 = _closure2_slot5;
                            var1 = var2 === var1;
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2);
 41:
                    return var1;
                }
            };
            var14 = var13.bind(var7)(var3, var12);
            _closure2_slot6 = var14;
            var3 = var7.useState;
            var7 = var3.bind(var7)(var14);
            var3 = _closure1_slot3;
            var3 = var3.bind(var4)(var7, var11);
            var29 = var3[var6];
            _closure2_slot7 = var29;
            var28 = var3[var5];
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 15;
            var3 = var6[var3];
            var5 = var5.bind(var4)(var3);
            var6 = var10 == var29;
            var3 = undefined;
            if(var6) { _fun0005_ip = 404; continue _fun0005 }
 398:
            var3 = var29.skuId;
 404:
            var3 = var5.bind(var4)(var3);
            var7 = var3.product;
            var6 = var3.purchase;
            var5 = _closure1_slot0;
            var20 = _closure1_slot2;
            var13 = 16;
            var3 = var20[var13];
            var11 = var5.bind(var4)(var3);
            var3 = var11.useSharedValue;
            var18 = false;
            var35 = var3.bind(var11)(var18);
            _closure2_slot8 = var35;
            var17 = _closure1_slot4;
            var12 = var17.useEffect;
            var11 = new Array(3);
            var11[0] = var29;
            var11[1] = var14;
            var11[2] = var35;
            var3 = function() {
                var3 = _closure2_slot8;
                var2 = var3.set;
                var4 = _closure2_slot7;
                var1 = _closure2_slot6;
                var1 = var4 !== var1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var3 = var12.bind(var17)(var3, var11);
            var3 = var17.useRef;
            var11 = var3.bind(var17)(var10);
            var3 = 17;
            var3 = var20[var3];
            var12 = var5.bind(var4)(var3);
            var3 = var12.useBottomSheetRef;
            var3 = var3.bind(var12)();
            var21 = var3.bottomSheetRef;
            var12 = var3.bottomSheetClose;
            var16 = _closure1_slot1;
            var3 = 18;
            var3 = var20[var3];
            var15 = var16.bind(var4)(var3);
            var3 = var15.canUseCollectibles;
            var3 = var3.bind(var15)(var30);
            var1 = var20[var1];
            var22 = var5.bind(var4)(var1);
            var15 = var22.useStateFromStores;
            var1 = _closure1_slot7;
            var5 = new Array(1);
            var5[0] = var1;
            var1 = function() {
                var1 = _closure1_slot7;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var34 = var15.bind(var22)(var5, var1);
            _closure2_slot9 = var34;
            var1 = 19;
            var1 = var20[var1];
            var1 = var16.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var24 = var1.bottom;
            var1 = 20;
            var5 = var20[var1];
            var15 = var16.bind(var4)(var5);
            var5 = 21;
            var5 = var20[var5];
            var5 = var16.bind(var4)(var5);
            var5 = var5.EDIT_PROFILE_EFFECT_SHEET;
            var5 = var15.bind(var4)(var5);
            var5 = var5.analyticsLocations;
            _closure2_slot10 = var5;
            var16 = var17.useMemo;
            var15 = new Array(3);
            var15[0] = var26;
            var15[1] = var8;
            var20 = var10 == var30;
            var8 = undefined;
            if(var20) { _fun0005_ip = 708; continue _fun0005 }
 702:
            var8 = var30.avatarDecoration;
 708:
            var15[2] = var8;
            var8 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = {};
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 21;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var3 = var3.EDIT_PROFILE_EFFECT_SHEET;
                    var1['type'] = var3;
                    var3 = _closure2_slot1;
                    var1['guild_id'] = var3;
                    var5 = _closure2_slot4;
                    var3 = null;
                    var5 = var3 != var5;
                    if(!var5) { _fun0008_ip = 91; continue _fun0008 }
 61:
                    var6 = _closure2_slot4;
                    var7 = var3 == var6;
                    var6 = undefined;
                    if(var7) { _fun0008_ip = 88; continue _fun0008 }
 74:
                    var8 = _closure2_slot4;
                    var7 = var8.hasPremiumCustomization;
                    var6 = var7.bind(var8)();
 88:
                    var5 = var6;
 91:
                    var1['profile_has_nitro_customization'] = var5;
                    var5 = global;
                    var6 = var5.Boolean;
                    var5 = _closure2_slot0;
                    var7 = var3 == var5;
                    var5 = undefined;
                    if(var7) { _fun0008_ip = 127; continue _fun0008 }
 117:
                    var7 = _closure2_slot0;
                    var5 = var7.avatarDecoration;
 127:
                    var5 = var6.bind(var2)(var5);
                    var1['has_avatar_decoration'] = var5;
                    var5 = _closure2_slot4;
                    var5 = var3 == var5;
                    var2 = undefined;
                    if(var5) { _fun0008_ip = 160; continue _fun0008 }
 150:
                    var4 = _closure2_slot4;
                    var2 = var4.profileEffect;
 160:
                    var2 = var3 != var2;
                    var1['has_profile_effect'] = var2;
                    return var1;
                }
            };
            var8 = var16.bind(var17)(var8, var15);
            _closure2_slot11 = var8;
            var17 = _closure1_slot4;
            var16 = var17.useCallback;
            var15 = new Array(1);
            var15[0] = var8;
            var8 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 22;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot10;
                var3 = var2.OPEN_POPOUT;
                var2 = {};
                var8 = _closure2_slot11;
                var9 = var2;
                var6 = copyDataProperties(var9, var8);
                var7 = true;
                var6 = 'is_fullscreen';
                var2[var6] = var7;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var8 = var16.bind(var17)(var8, var15);
            var32 = _closure1_slot0;
            var33 = _closure1_slot2;
            var15 = var33[var13];
            var17 = var32.bind(var4)(var15);
            var16 = var17.useAnimatedStyle;
            var15 = function z() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var2 = _closure2_slot8;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var9 = 60;
                    if(!var1) { _fun0009_ip = 24; continue _fun0009 }
 22:
                    var9 = 0;
 24:
                    var2 = _closure2_slot8;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var8 = 0.9;
                    if(!var1) { _fun0009_ip = 53; continue _fun0009 }
 50:
                    var8 = 1;
 53:
                    var1 = {};
                    var3 = {};
                    var5 = _closure2_slot9;
                    var2 = var9;
                    if(var5) { _fun0009_ip = 107; continue _fun0009 }
 67:
                    var10 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var6 = 23;
                    var7 = var7[var6];
                    var6 = undefined;
                    var7 = var10.bind(var6)(var7);
                    var6 = var7.withSpring;
                    var5 = _closure1_slot12;
                    var2 = var6.bind(var7)(var9, var5);
 107:
                    var3['translateY'] = var2;
                    var2 = new Array(2);
                    var2[0] = var3;
                    var3 = {};
                    var5 = _closure2_slot9;
                    var4 = var8;
                    if(var5) { _fun0009_ip = 172; continue _fun0009 }
 132:
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var6 = 23;
                    var7 = var7[var6];
                    var6 = undefined;
                    var7 = var9.bind(var6)(var7);
                    var6 = var7.withSpring;
                    var5 = _closure1_slot12;
                    var4 = var6.bind(var7)(var8, var5);
 172:
                    var3['scale'] = var4;
                    var2[1] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var20 = {};
            var20['shouldShowCtaButton'] = var35;
            var20['reducedMotion'] = var34;
            var31 = 23;
            var22 = var33[var31];
            var22 = var32.bind(var4)(var22);
            var22 = var22.withSpring;
            var20['withSpring'] = var22;
            var25 = _closure1_slot12;
            var20['MEDIA_PICKER_SEND_BUTTON_SPRING'] = var25;
            var15['__closure'] = var20;
            var20 = 11257934204092.0;
            var15['__workletHash'] = var20;
            var20 = _closure1_slot17;
            var15['__initData'] = var20;
            var23 = var16.bind(var17)(var15);
            var15 = var33[var13];
            var17 = var32.bind(var4)(var15);
            var16 = var17.useAnimatedProps;
            var15 = function Y() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var1 = {};
                    var3 = _closure2_slot8;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = 'none';
                    if(!var3) { _fun0010_ip = 31; continue _fun0010 }
 25:
                    var2 = 'box-none';
 31:
                    var1['pointerEvents'] = var2;
                    return var1;
                }
            };
            var20 = {};
            var20['shouldShowCtaButton'] = var35;
            var15['__closure'] = var20;
            var20 = 6337989186191.0;
            var15['__workletHash'] = var20;
            var20 = _closure1_slot18;
            var15['__initData'] = var20;
            var16 = var16.bind(var17)(var15);
            var15 = var33[var13];
            var20 = var32.bind(var4)(var15);
            var17 = var20.useAnimatedStyle;
            var15 = function V() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var3 = _closure2_slot8;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var6 = 0;
                    if(!var1) { _fun0011_ip = 24; continue _fun0011 }
 21:
                    var6 = 1;
 24:
                    var1 = {};
                    var3 = _closure2_slot9;
                    var2 = var6;
                    if(var3) { _fun0011_ip = 96; continue _fun0011 }
 36:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 23;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.withSpring;
                    var3 = {};
                    var9 = _closure1_slot12;
                    var10 = var3;
                    var7 = copyDataProperties(var10, var9);
                    var8 = true;
                    var7 = 'overshootClamping';
                    var3[var7] = var8;
                    var2 = var4.bind(var5)(var6, var3);
 96:
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var22 = {};
            var22['shouldShowCtaButton'] = var35;
            var22['reducedMotion'] = var34;
            var31 = var33[var31];
            var31 = var32.bind(var4)(var31);
            var31 = var31.withSpring;
            var22['withSpring'] = var31;
            var22['MEDIA_PICKER_SEND_BUTTON_SPRING'] = var25;
            var15['__closure'] = var22;
            var22 = 1121286290015.0;
            var15['__workletHash'] = var22;
            var22 = _closure1_slot19;
            var15['__initData'] = var22;
            var25 = var17.bind(var20)(var15);
            var17 = var10 == var7;
            _closure2_slot12 = var17;
            var22 = var10 != var6;
            _closure2_slot13 = var22;
            var15 = var3;
            if(var15) { _fun0005_ip = 1084; continue _fun0005 }
 1050:
            var6 = _closure1_slot0;
            var20 = _closure1_slot2;
            var3 = 13;
            var3 = var20[var3];
            var6 = var6.bind(var4)(var3);
            var3 = var6.isPremiumCollectiblesProduct;
            var3 = var3.bind(var6)(var7);
            var15 = !var3;
 1084:
            _closure2_slot14 = var15;
            var7 = _closure1_slot4;
            var20 = var7.useMemo;
            var6 = new Array(4);
            var6[0] = var22;
            var6[1] = var15;
            var6[2] = var17;
            var6[3] = var30;
            var3 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var2 = _closure2_slot12;
                    if(var2) { _fun0012_ip = 202; continue _fun0012 }
 13:
                    var2 = _closure2_slot13;
                    if(var2) { _fun0012_ip = 202; continue _fun0012 }
 23:
                    var3 = _closure2_slot14;
                    if(var3) { _fun0012_ip = 143; continue _fun0012 }
 33:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 18;
                    var3 = var5[var3];
                    var7 = undefined;
                    var4 = var4.bind(var7)(var3);
                    var3 = var4.isPremium;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var4)(var1);
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 24;
                    var4 = var8[var3];
                    var4 = var6.bind(var7)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var3 = var8[var3];
                    var3 = var6.bind(var7)(var3);
                    var3 = var3.t;
                    if(var1) { _fun0012_ip = 130; continue _fun0012 }
 117:
                    var1 = var3.mr4K7O;
                    var1 = var4.bind(var5)(var1);
                    _fun0012_ip = 141; continue _fun0012;
 130:
                    var3 = var3.KXLX7u;
                    var1 = var4.bind(var5)(var3);
 141:
                    _fun0012_ip = 200; continue _fun0012;
 143:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 24;
                    var3 = var7[var2];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.fYfGgI;
                    var1 = var3.bind(var4)(var2);
 200:
                    _fun0012_ip = 262; continue _fun0012;
 202:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 24;
                    var3 = var7[var2];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.Jh8fJy;
                    var1 = var3.bind(var4)(var2);
 262:
                    return var1;
                }
            };
            var20 = var20.bind(var7)(var3, var6);
            var6 = var7.useCallback;
            var3 = new Array(8);
            var3[0] = var17;
            var3[1] = var22;
            var3[2] = var15;
            var31 = var10 == var29;
            var17 = undefined;
            if(var31) { _fun0005_ip = 1165; continue _fun0005 }
 1160:
            var17 = var29.id;
 1165:
            var3[3] = var17;
            var31 = var10 == var29;
            var17 = undefined;
            if(var31) { _fun0005_ip = 1184; continue _fun0005 }
 1178:
            var17 = var29.skuId;
 1184:
            var3[4] = var17;
            var17 = var10 == var14;
            var10 = undefined;
            if(var17) { _fun0005_ip = 1202; continue _fun0005 }
 1197:
            var10 = var14.id;
 1202:
            var3[5] = var10;
            var3[6] = var26;
            var3[7] = var5;
            var2 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var2 = _closure2_slot12;
                    if(var2) { _fun0013_ip = 181; continue _fun0013 }
 13:
                    var2 = _closure2_slot13;
                    if(var2) { _fun0013_ip = 181; continue _fun0013 }
 23:
                    var2 = _closure2_slot14;
                    var3 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    if(var2) { _fun0013_ip = 70; continue _fun0013 }
 41:
                    var2 = 28;
                    var4 = var9[var2];
                    var2 = undefined;
                    var4 = var3.bind(var2)(var4);
                    var2 = var4.navigateToNitroManagement;
                    var2 = var2.bind(var4)();
                    _fun0013_ip = 325; continue _fun0013;
 70:
                    var2 = 27;
                    var2 = var9[var2];
                    var6 = undefined;
                    var4 = var3.bind(var6)(var2);
                    var3 = var4.openCollectiblesShopMobile;
                    var2 = {};
                    var7 = _closure2_slot10;
                    var2['analyticsLocations'] = var7;
                    var8 = _closure1_slot1;
                    var7 = 21;
                    var7 = var9[var7];
                    var7 = var8.bind(var6)(var7);
                    var7 = var7.EDIT_PROFILE_EFFECT_SHEET;
                    var2['analyticsSource'] = var7;
                    var8 = _closure2_slot7;
                    var7 = null;
                    var7 = var7 == var8;
                    if(var7) { _fun0013_ip = 151; continue _fun0013 }
 141:
                    var7 = _closure2_slot7;
                    var6 = var7.skuId;
 151:
                    var2['initialProductSkuId'] = var6;
                    var5 = _closure1_slot11;
                    var5 = var5.SHOP_ALL;
                    var2['screen'] = var5;
                    var2 = var3.bind(var4)(var2);
                    _fun0013_ip = 325; continue _fun0013;
 181:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 25;
                    var6 = var5[var3];
                    var2 = undefined;
                    var7 = var4.bind(var2)(var6);
                    var6 = var7.triggerHapticFeedback;
                    var3 = var5[var3];
                    var3 = var4.bind(var2)(var3);
                    var3 = var3.HapticFeedbackTypes;
                    var3 = var3.IMPACT_MEDIUM;
                    var3 = var6.bind(var7)(var3);
                    var3 = 26;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.setNewPendingProfileEffectId;
                    var3 = _closure2_slot7;
                    var7 = null;
                    var3 = var7 == var3;
                    var6 = undefined;
                    if(var3) { _fun0013_ip = 280; continue _fun0013 }
 271:
                    var3 = _closure2_slot7;
                    var6 = var3.id;
 280:
                    var8 = var7 != var6;
                    var3 = null;
                    if(!var8) { _fun0013_ip = 292; continue _fun0013 }
 289:
                    var3 = var6;
 292:
                    var6 = _closure2_slot6;
                    var6 = var7 == var6;
                    var2 = undefined;
                    if(var6) { _fun0013_ip = 314; continue _fun0013 }
 305:
                    var6 = _closure2_slot6;
                    var2 = var6.id;
 314:
                    var1 = _closure2_slot1;
                    var1 = var4.bind(var5)(var3, var2, var1);
 325:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 29;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var14 = var6.bind(var7)(var2, var3);
            var3 = _closure1_slot13;
            var10 = _closure1_slot0;
            var17 = _closure1_slot2;
            var1 = var17[var1];
            var1 = var10.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var5;
            var7 = _closure1_slot14;
            var5 = 30;
            var5 = var17[var5];
            var5 = var10.bind(var4)(var5);
            var6 = var5.BottomSheet;
            var5 = {'handleDisabled': true, 'scrollable': true, 'ref': null, 'onExpand': null, 'startExpanded': true};
            var5['ref'] = var21;
            var5['onExpand'] = var8;
            var8 = 31;
            var8 = var17[var8];
            var8 = var10.bind(var4)(var8);
            var10 = var8.BottomSheetScrollView;
            var8 = {};
            var8['scrollsToTop'] = var18;
            var21 = var19.container;
            var18 = new Array(1);
            var18[0] = var21;
            var8['style'] = var18;
            var8['ref'] = var11;
            var18 = _closure1_slot5;
            var11 = {};
            var21 = var19.bounceOffset;
            var11['style'] = var21;
            var18 = var3.bind(var4)(var18, var11);
            var11 = new Array(2);
            var11[0] = var18;
            var21 = _closure1_slot20;
            var18 = {};
            var18['user'] = var30;
            var18['selectedProfileEffect'] = var29;
            var18['setSelectedProfileEffect'] = var28;
            var18['isFetching'] = var27;
            var18['guildId'] = var26;
            var18 = var3.bind(var4)(var21, var18);
            var11[1] = var18;
            var8['children'] = var11;
            var10 = var7.bind(var4)(var10, var8);
            var8 = new Array(3);
            var8[0] = var10;
            var18 = _closure1_slot1;
            var10 = var17[var13];
            var10 = var18.bind(var4)(var10);
            var11 = var10.View;
            var10 = {};
            var26 = var19.applyButtonContainer;
            var21 = new Array(2);
            var21[0] = var26;
            var21[1] = var25;
            var10['style'] = var21;
            var10['animatedProps'] = var16;
            var13 = var17[var13];
            var13 = var18.bind(var4)(var13);
            var16 = var13.View;
            var13 = {};
            var25 = var19.buttonRowContainer;
            var21 = new Array(3);
            var21[0] = var25;
            var21[1] = var23;
            var23 = {};
            var23['marginBottom'] = var24;
            var21[2] = var23;
            var13['style'] = var21;
            var21 = 'box-none';
            var13['pointerEvents'] = var21;
            var21 = 32;
            var17 = var17[var21];
            var18 = var18.bind(var4)(var17);
            var17 = {};
            if(var22) { _fun0005_ip = 1598; continue _fun0005 }
 1564:
            if(var15) { _fun0005_ip = 1598; continue _fun0005 }
 1567:
            var22 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var21];
            var15 = var22.bind(var4)(var15);
            var15 = var15.ButtonColors;
            var15 = var15.GREEN;
            _fun0005_ip = 1627; continue _fun0005;
 1598:
            var23 = _closure1_slot0;
            var22 = _closure1_slot2;
            var22 = var22[var21];
            var22 = var23.bind(var4)(var22);
            var22 = var22.ButtonColors;
            var15 = var22.BRAND;
 1627:
            var17['color'] = var15;
            var17['onPress'] = var14;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var21 = var15[var21];
            var21 = var14.bind(var4)(var21);
            var21 = var21.ButtonSizes;
            var21 = var21.MEDIUM;
            var17['size'] = var21;
            var21 = var19.ctaButtonStyle;
            var17['style'] = var21;
            var17['text'] = var20;
            var19 = var19.ctaTextStyle;
            var17['textStyle'] = var19;
            var17 = var3.bind(var4)(var18, var17);
            var13['children'] = var17;
            var13 = var3.bind(var4)(var16, var13);
            var10['children'] = var13;
            var10 = var3.bind(var4)(var11, var10);
            var8[1] = var10;
            var11 = _closure1_slot13;
            var9 = 33;
            var9 = var15[var9];
            var9 = var14.bind(var4)(var9);
            var10 = var9.ActionSheetHeaderBar;
            var9 = {};
            var13 = 34;
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