// app/modules/user_profile/native/UserProfilePreview.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING;
    var _closure1_slot5 = var7;
    var4 = var4.UserProfileThemeTypes;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg2;
            var4 = arg3;
            var1 = {};
            var2 = {'maxHeight': '100%', 'position': 'relative', 'overflow': 'hidden', 'width': '100%'};
            var3 = null;
            var6 = var3 != var4;
            var3 = 263;
            if(!var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var4;
case 2:
            var2['maxWidth'] = var3;
            var3 = 350;
            var4 = arg1;
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = undefined;
case 4:
            var2['minHeight'] = var3;
            var3 = 1;
            var4 = var3;
            if(!var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = undefined;
case 6:
            var2['borderWidth'] = var4;
            var9 = _closure1_slot1;
            var6 = _closure1_slot2;
            var7 = 6;
            var8 = var6[var7];
            var6 = undefined;
            var8 = var9.bind(var6)(var8);
            var8 = var8.colors;
            if(var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = var8.BACKGROUND_SURFACE_HIGH;
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var5 = var8.BORDER_MUTED;
case 10:
            var2['borderColor'] = var5;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var8 = var4[var7];
            var8 = var5.bind(var6)(var8);
            var8 = var8.radii;
            var8 = var8.lg;
            var2['borderRadius'] = var8;
            var8 = var4[var7];
            var8 = var5.bind(var6)(var8);
            var8 = var8.shadows;
            var10 = var8.SHADOW_HIGH;
            var11 = var2;
            var8 = copyDataProperties(var11, var10);
            var1['profileContainer'] = var2;
            var2 = {};
            var2['flexGrow'] = var3;
            var1['profileContentWrapper'] = var2;
            var2 = {};
            var4 = var4[var7];
            var4 = var5.bind(var6)(var4);
            var4 = var4.spacing;
            var4 = var4.PX_12;
            var2['marginTop'] = var4;
            var1['aboutMeCard'] = var2;
            var2 = {};
            var2['zIndex'] = var3;
            var1['profileEffect'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfilePreview.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfilePreview(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var28 = var2.user;
            var7 = var2.accessibilityLabel;
            var34 = var2.displayName;
            var29 = var2.guildId;
            var _closure2_slot0 = var29;
            var15 = var2.pendingProfileEffectRecord;
            var30 = var2.pendingDisplayNameStyles;
            var9 = var2.style;
            var21 = var2.compact;
            var4 = undefined;
            if(!(var21 === var4)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var21 = false;
case 11:
            var14 = var2.maxWidth;
            var6 = var2.additionalBadges;
            if(!(var6 === var4)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var6 = new Array(0);
case 13:
            var _closure2_slot1 = var4;
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 7;
            var2 = var12[var2];
            var10 = var8.bind(var4)(var2);
            var5 = var10.useStateFromStoresObject;
            var2 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getPendingChanges;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var5.bind(var10)(var3, var2);
            var18 = var2.pendingAvatar;
            var13 = var2.pendingBanner;
            var17 = var2.pendingAccentColor;
            var16 = var2.pendingThemeColors;
            var41 = var2.pendingAvatarDecoration;
            var33 = var2.pendingGlobalName;
            var32 = var2.pendingPronouns;
            var3 = var2.pendingLegacyUsernameDisabled;
            var19 = _closure1_slot1;
            var2 = 8;
            var2 = var12[var2];
            var5 = var19.bind(var4)(var2);
            var2 = var28.id;
            var26 = var5.bind(var4)(var2, var29);
            var2 = 9;
            var2 = var12[var2];
            var5 = var19.bind(var4)(var2);
            var2 = {};
            var2['user'] = var28;
            var2['displayProfile'] = var26;
            var2['pendingThemeColors'] = var16;
            var2 = var5.bind(var4)(var2);
            var5 = var2.theme;
            var23 = var2.primaryColor;
            var20 = var2.secondaryColor;
            var10 = null;
            var35 = var10 != var23;
            var2 = _closure1_slot9;
            var14 = var2.bind(var4)(var21, var35, var14);
            var2 = 10;
            var2 = var12[var2];
            var2 = var19.bind(var4)(var2);
            var25 = var2.bind(var4)();
            var2 = 11;
            var2 = var12[var2];
            var8 = var8.bind(var4)(var2);
            var2 = var8.useCustomStatusActivity;
            var36 = var2.bind(var8)();
            var22 = var10 != var36;
            if(!var22) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var22 = !var21;
case 15:
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 12;
            var2 = var12[var2];
            var24 = var8.bind(var4)(var2);
            var19 = var24.useUserProfileColors;
            var2 = {};
            var2['theme'] = var5;
            var2['primaryColor'] = var23;
            var2['secondaryColor'] = var20;
            var2 = var19.bind(var24)(var2);
            var24 = var2.gradientFallbackBackground;
            var40 = var2.avatarBackground;
            var27 = var2.containerBackground;
            var2 = 13;
            var2 = var12[var2];
            var12 = var8.bind(var4)(var2);
            var8 = var12.getProfilePreviewValue;
            var2 = {};
            var2['pendingValue'] = var15;
            var19 = var10 == var26;
            var15 = undefined;
            if(var19) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var15 = var26.profileEffect;
case 17:
            var2['userValue'] = var15;
            var19 = var10 == var26;
            var15 = undefined;
            if(var19) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var19 = var26._guildMemberProfile;
            var31 = var10 == var19;
            var15 = undefined;
            if(var31) { _fun0002_ip = 19; continue _fun0002 }
case 21:
            var15 = var19.profileEffect;
case 19:
            var2['guildValue'] = var15;
            var2['guildId'] = var29;
            var15 = var8.bind(var12)(var2);
            var19 = _closure1_slot0;
            var37 = _closure1_slot2;
            var2 = 14;
            var2 = var37[var2];
            var12 = var19.bind(var4)(var2);
            var8 = var12.getPendingAvatarSrc;
            var2 = {};
            var31 = var28.id;
            var2['userId'] = var31;
            var2['image'] = var18;
            var42 = var8.bind(var12)(var2);
            var12 = _closure1_slot1;
            var2 = 15;
            var2 = var37[var2];
            var2 = var12.bind(var4)(var2);
            var3 = var2.bind(var4)(var26, var3);
            var2 = global;
            var18 = var2.Set;
            var8 = var3.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var46 = var8.bind(var3)(var2);
            var8 = var18.prototype;
            var8 = Object.create(var8, {constructor: {value: var18}});
            var47 = var8;
            var2 = new var47[var18](var46, var45);
            var2 = var2 instanceof Object ? var2 : var8;
            _closure2_slot1 = var2;
            var31 = new Array(0);
            var44 = 0;
            var46 = var31;
            var45 = var3;
            var44 = arraySpread(var46, var45, var44);
            var3 = var6.filter;
            var1 = function(arg1) {
                var3 = _closure2_slot1;
                var2 = var3.has;
                var1 = arg1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var45 = var3.bind(var6)(var1);
            var46 = var31;
            var1 = arraySpread(var46, var45, var44);
            var3 = _closure1_slot7;
            var1 = 16;
            var1 = var37[var1];
            var1 = var19.bind(var4)(var1);
            var2 = var1.ThemeContextProvider;
            var1 = {};
            var1['theme'] = var5;
            var1['primaryColor'] = var23;
            var1['secondaryColor'] = var20;
            var6 = _closure1_slot3;
            var5 = {'style': null, 'pointerEvents': 'none', 'accessibilityLabel': null, 'accessibilityRole': 'image', 'accessible': true};
            var18 = var14.profileContainer;
            var8 = new Array(2);
            var8[0] = var18;
            var8[1] = var9;
            var5['style'] = var8;
            var5['accessibilityLabel'] = var7;
            var39 = true;
            var8 = _closure1_slot8;
            var7 = {'importantForAccessibility': 'no-hide-descendants', 'accessibilityElementsHidden': true};
            var9 = 17;
            var9 = var37[var9];
            var12 = var12.bind(var4)(var9);
            var9 = {};
            var9['user'] = var28;
            var9['displayProfile'] = var26;
            var18 = 18;
            var18 = var37[var18];
            var18 = var19.bind(var4)(var18);
            var18 = var18.PFX_MOBILE_ACTION_SHEET_BANNER_HEIGHT;
            var9['bannerHeight'] = var18;
            var9['pendingBanner'] = var13;
            var9['pendingAvatarSrc'] = var42;
            var18 = var10 != var17;
            var13 = undefined;
            if(!var18) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var13 = var17;
case 22:
            var9['pendingAccentColor'] = var13;
            var17 = var10 != var16;
            var13 = undefined;
            if(!var17) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var13 = var16;
case 24:
            var9['pendingThemeColors'] = var13;
            var9['disableInteraction'] = var39;
            var12 = var3.bind(var4)(var12, var9);
            var9 = new Array(3);
            var9[0] = var12;
            var16 = _closure1_slot8;
            var13 = _closure1_slot3;
            var12 = {};
            var17 = var14.profileContentWrapper;
            var12['style'] = var17;
            var38 = _closure1_slot7;
            var19 = _closure1_slot1;
            var37 = _closure1_slot2;
            var17 = 19;
            var17 = var37[var17];
            var18 = var19.bind(var4)(var17);
            var17 = {};
            var17['user'] = var28;
            var17['guildId'] = var29;
            var17['pendingAvatarSrc'] = var42;
            var17['pendingAvatarDecoration'] = var41;
            var17['backgroundColor'] = var40;
            var17['disableStatus'] = var39;
            var18 = var38.bind(var4)(var18, var17);
            var17 = new Array(2);
            var17[0] = var18;
            var18 = 20;
            var18 = var37[var18];
            var19 = var19.bind(var4)(var18);
            var18 = {};
            var18['fallbackBackground'] = var24;
            var18['primaryColor'] = var23;
            var18['secondaryColor'] = var20;
            var23 = var25.profileContentWrapper;
            var20 = new Array(3);
            var20[0] = var23;
            var23 = var25.profileContent;
            var20[1] = var23;
            var23 = !var22;
            if(var22) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var24 = {};
            var37 = _closure1_slot5;
            var24['paddingTop'] = var37;
            var23 = var24;
case 26:
            var20[2] = var23;
            var18['containerStyle'] = var20;
            if(!var22) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var24 = _closure1_slot7;
            var23 = _closure1_slot1;
            var37 = _closure1_slot2;
            var20 = 21;
            var20 = var37[var20];
            var23 = var23.bind(var4)(var20);
            var20 = {};
            var20['customStatusActivity'] = var36;
            var36 = _closure1_slot6;
            var36 = var36.PREVIEW;
            var20['themeType'] = var36;
            var20['hasCustomProfileTheme'] = var35;
            var35 = var25.customStatusBubble;
            var20['style'] = var35;
            var35 = var25.emojiOnlyCustomStatusBubble;
            var20['emojiOnlyStyle'] = var35;
            var22 = var24.bind(var4)(var23, var20);
case 28:
            var20 = new Array(3);
            var20[0] = var22;
            var24 = _closure1_slot7;
            var23 = _closure1_slot1;
            var35 = _closure1_slot2;
            var22 = 22;
            var22 = var35[var22];
            var23 = var23.bind(var4)(var22);
            var22 = {};
            var22['user'] = var28;
            var35 = _closure1_slot6;
            var35 = var35.PREVIEW;
            var22['themeType'] = var35;
            if(!(var10 != var34)) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var33 = var34;
case 30:
            var22['displayName'] = var33;
            if(!(var10 == var32)) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var34 = var10 == var26;
            var33 = undefined;
            if(var34) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var33 = var26.pronouns;
case 34:
            var32 = var33;
case 32:
            var22['pronouns'] = var32;
            var22['badges'] = var31;
            var22['badgeContainerBackground'] = var27;
            var31 = false;
            var22['showBadgeToastOnPress'] = var31;
            var22['pendingDisplayNameStyles'] = var30;
            var22['guildId'] = var29;
            var22 = var24.bind(var4)(var23, var22);
            var20[1] = var22;
            var21 = !var21;
            if(!var21) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var24 = _closure1_slot7;
            var23 = _closure1_slot1;
            var29 = _closure1_slot2;
            var22 = 23;
            var22 = var29[var22];
            var23 = var23.bind(var4)(var22);
            var22 = {};
            var28 = var28.id;
            var22['userId'] = var28;
            var22['displayProfile'] = var26;
            var26 = _closure1_slot6;
            var26 = var26.PREVIEW;
            var22['themeType'] = var26;
            var26 = var25.card;
            var25 = new Array(3);
            var25[0] = var26;
            var26 = var14.aboutMeCard;
            var25[1] = var26;
            var26 = {};
            var26['backgroundColor'] = var27;
            var25[2] = var26;
            var22['style'] = var25;
            var25 = 1;
            var22['bioLineClamp'] = var25;
            var21 = var24.bind(var4)(var23, var22);
case 36:
            var20[2] = var21;
            var18['children'] = var20;
            var18 = var16.bind(var4)(var19, var18);
            var17[1] = var18;
            var12['children'] = var17;
            var12 = var16.bind(var4)(var13, var12);
            var9[1] = var12;
            var10 = var10 != var15;
            if(!var10) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var13 = _closure1_slot7;
            var12 = _closure1_slot1;
            var16 = _closure1_slot2;
            var11 = 24;
            var11 = var16[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var15 = var15.skuId;
            var11['skuId'] = var15;
            var14 = var14.profileEffect;
            var11['style'] = var14;
            var10 = var13.bind(var4)(var12, var11);
case 38:
            var9[2] = var10;
            var7['children'] = var9;
            var7 = var8.bind(var4)(var6, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();