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
 0:
            var5 = arg2;
            var6 = arg3;
            var1 = {};
            var2 = {'flex': 1, 'position': 'relative', 'overflow': 'hidden', 'width': '100%'};
            var3 = 1;
            var4 = null;
            var7 = var4 != var6;
            var4 = 263;
            if(!var7) { _fun0001_ip = 43; continue _fun0001 }
 40:
            var4 = var6;
 43:
            var2['maxWidth'] = var4;
            var4 = 350;
            var6 = arg1;
            if(!var6) { _fun0001_ip = 62; continue _fun0001 }
 60:
            var4 = undefined;
 62:
            var2['minHeight'] = var4;
            var4 = var3;
            if(!var5) { _fun0001_ip = 75; continue _fun0001 }
 73:
            var4 = undefined;
 75:
            var2['borderWidth'] = var4;
            var9 = _closure1_slot1;
            var6 = _closure1_slot2;
            var7 = 6;
            var8 = var6[var7];
            var6 = undefined;
            var8 = var9.bind(var6)(var8);
            var8 = var8.colors;
            if(var5) { _fun0001_ip = 121; continue _fun0001 }
 113:
            var5 = var8.BACKGROUND_FLOATING;
            _fun0001_ip = 127; continue _fun0001;
 121:
            var5 = var8.BORDER_FAINT;
 127:
            var2['borderColor'] = var5;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var8 = var4[var7];
            var8 = var5.bind(var6)(var8);
            var8 = var8.radii;
            var8 = var8.sm;
            var2['borderRadius'] = var8;
            var4 = var4[var7];
            var4 = var5.bind(var6)(var4);
            var4 = var4.shadows;
            var10 = var4.SHADOW_HIGH;
            var11 = var2;
            var4 = copyDataProperties(var11, var10);
            var1['profileContainer'] = var2;
            var2 = {};
            var4 = 12;
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
 0:
            var2 = arg1;
            var26 = var2.user;
            var42 = var2.guildId;
            var12 = var2.pendingProfileEffectRecord;
            var17 = var2.style;
            var20 = var2.compact;
            var4 = undefined;
            if(!(var20 === var4)) { _fun0002_ip = 40; continue _fun0002 }
 38:
            var20 = false;
 40:
            var25 = var2.bioLineClamp;
            var8 = var2.maxWidth;
            var35 = var2.gradientFullHeight;
            if(!(var35 === var4)) { _fun0002_ip = 64; continue _fun0002 }
 62:
            var35 = false;
 64:
            var6 = var2.additionalBadges;
            if(!(var6 === var4)) { _fun0002_ip = 78; continue _fun0002 }
 74:
            var6 = new Array(0);
 78:
            var _closure2_slot0 = var4;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 7;
            var2 = var7[var2];
            var5 = var3.bind(var4)(var2);
            var2 = var26.id;
            var24 = var5.bind(var4)(var2, var42);
            var2 = 8;
            var2 = var7[var2];
            var5 = var3.bind(var4)(var2);
            var2 = {};
            var2['user'] = var26;
            var2['displayProfile'] = var24;
            var2 = var5.bind(var4)(var2);
            var5 = var2.theme;
            var22 = var2.primaryColor;
            var19 = var2.secondaryColor;
            var9 = null;
            var33 = var9 != var22;
            var2 = _closure1_slot9;
            var13 = var2.bind(var4)(var20, var33, var8);
            var2 = 9;
            var2 = var7[var2];
            var2 = var3.bind(var4)(var2);
            var32 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var2 = 10;
            var2 = var7[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useCustomStatusActivity;
            var34 = var2.bind(var3)();
            var21 = var9 != var34;
            if(!var21) { _fun0002_ip = 231; continue _fun0002 }
 228:
            var21 = !var20;
 231:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 11;
            var2 = var7[var2];
            var11 = var3.bind(var4)(var2);
            var8 = var11.useUserProfileColors;
            var2 = {};
            var2['theme'] = var5;
            var2['primaryColor'] = var22;
            var2['secondaryColor'] = var19;
            var2 = var8.bind(var11)(var2);
            var23 = var2.gradientFallbackBackground;
            var39 = var2.avatarBackground;
            var27 = var2.containerBackground;
            var2 = 12;
            var2 = var7[var2];
            var7 = var3.bind(var4)(var2);
            var3 = var7.getPreviewProfileEffectId;
            var2 = {};
            var8 = null;
            if(!(var8 !== var12)) { _fun0002_ip = 340; continue _fun0002 }
 323:
            var14 = var9 == var12;
            var11 = undefined;
            if(var14) { _fun0002_ip = 337; continue _fun0002 }
 332:
            var11 = var12.id;
 337:
            var8 = var11;
 340:
            var2['pendingProfileEffectId'] = var8;
            var2['displayProfile'] = var24;
            var14 = var3.bind(var7)(var2);
            var18 = _closure1_slot0;
            var36 = _closure1_slot2;
            var2 = 13;
            var2 = var36[var2];
            var8 = var18.bind(var4)(var2);
            var7 = var8.useStateFromStoresObject;
            var2 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getAllPending;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var7.bind(var8)(var3, var2);
            var11 = var2.pendingAvatar;
            var12 = var2.pendingBanner;
            var16 = var2.pendingAccentColor;
            var15 = var2.pendingThemeColors;
            var40 = var2.pendingAvatarDecoration;
            var31 = var2.pendingGlobalName;
            var30 = var2.pendingPronouns;
            var3 = var2.pendingLegacyUsernameDisabled;
            var2 = 14;
            var2 = var36[var2];
            var8 = var18.bind(var4)(var2);
            var7 = var8.getPendingAvatarSrc;
            var2 = {};
            var28 = var26.id;
            var2['userId'] = var28;
            var2['image'] = var11;
            var41 = var7.bind(var8)(var2);
            var11 = _closure1_slot1;
            var2 = 15;
            var2 = var36[var2];
            var2 = var11.bind(var4)(var2);
            var3 = var2.bind(var4)(var24, var3);
            var2 = global;
            var8 = var2.Set;
            var7 = var3.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var46 = var7.bind(var3)(var2);
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var47 = var7;
            var2 = new var47[var8](var46, var45);
            var2 = var2 instanceof Object ? var2 : var7;
            _closure2_slot0 = var2;
            var29 = new Array(0);
            var44 = 0;
            var46 = var29;
            var45 = var3;
            var44 = arraySpread(var46, var45, var44);
            var3 = var6.filter;
            var1 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.has;
                var1 = arg1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var45 = var3.bind(var6)(var1);
            var46 = var29;
            var1 = arraySpread(var46, var45, var44);
            var3 = _closure1_slot7;
            var1 = 16;
            var1 = var36[var1];
            var1 = var18.bind(var4)(var1);
            var2 = var1.ThemeContextProvider;
            var1 = {};
            var1['theme'] = var5;
            var1['primaryColor'] = var22;
            var1['secondaryColor'] = var19;
            var7 = _closure1_slot8;
            var6 = _closure1_slot3;
            var5 = {'style': null, 'accessible': false, 'pointerEvents': 'none'};
            var28 = var13.profileContainer;
            var8 = new Array(2);
            var8[0] = var28;
            var8[1] = var17;
            var5['style'] = var8;
            var28 = false;
            var8 = 17;
            var8 = var36[var8];
            var11 = var11.bind(var4)(var8);
            var8 = {};
            var8['user'] = var26;
            var8['displayProfile'] = var24;
            var17 = 18;
            var17 = var36[var17];
            var17 = var18.bind(var4)(var17);
            var17 = var17.PFX_MOBILE_ACTION_SHEET_BANNER_HEIGHT;
            var8['bannerHeight'] = var17;
            var8['pendingBanner'] = var12;
            var8['pendingAvatarSrc'] = var41;
            var17 = var9 != var16;
            var12 = undefined;
            if(!var17) { _fun0002_ip = 759; continue _fun0002 }
 756:
            var12 = var16;
 759:
            var8['pendingAccentColor'] = var12;
            var16 = var9 != var15;
            var12 = undefined;
            if(!var16) { _fun0002_ip = 776; continue _fun0002 }
 773:
            var12 = var15;
 776:
            var8['pendingThemeColors'] = var12;
            var38 = true;
            var8['disableInteraction'] = var38;
            var11 = var3.bind(var4)(var11, var8);
            var8 = new Array(3);
            var8[0] = var11;
            var15 = _closure1_slot8;
            var12 = _closure1_slot3;
            var11 = {};
            var37 = _closure1_slot7;
            var18 = _closure1_slot1;
            var36 = _closure1_slot2;
            var16 = 19;
            var16 = var36[var16];
            var17 = var18.bind(var4)(var16);
            var16 = {};
            var16['user'] = var26;
            var16['guildId'] = var42;
            var16['pendingAvatarSrc'] = var41;
            var16['pendingAvatarDecoration'] = var40;
            var16['backgroundColor'] = var39;
            var16['disableStatus'] = var38;
            var17 = var37.bind(var4)(var17, var16);
            var16 = new Array(2);
            var16[0] = var17;
            var17 = 20;
            var17 = var36[var17];
            var18 = var18.bind(var4)(var17);
            var17 = {};
            var17['fallbackBackground'] = var23;
            var17['primaryColor'] = var22;
            var17['secondaryColor'] = var19;
            var22 = var32.profileContent;
            var19 = new Array(3);
            var19[0] = var22;
            var22 = !var21;
            if(var21) { _fun0002_ip = 942; continue _fun0002 }
 928:
            var23 = {};
            var36 = _closure1_slot5;
            var23['paddingTop'] = var36;
            var22 = var23;
 942:
            var19[1] = var22;
            var22 = {};
            var23 = undefined;
            if(!var35) { _fun0002_ip = 959; continue _fun0002 }
 953:
            var23 = '100%';
 959:
            var22['height'] = var23;
            var19[2] = var22;
            var17['containerStyle'] = var19;
            if(!var21) { _fun0002_ip = 1053; continue _fun0002 }
 975:
            var23 = _closure1_slot7;
            var22 = _closure1_slot1;
            var35 = _closure1_slot2;
            var19 = 21;
            var19 = var35[var19];
            var22 = var22.bind(var4)(var19);
            var19 = {};
            var19['customStatusActivity'] = var34;
            var34 = _closure1_slot6;
            var34 = var34.PREVIEW;
            var19['themeType'] = var34;
            var19['hasCustomProfileTheme'] = var33;
            var33 = var32.customStatusBubble;
            var19['style'] = var33;
            var32 = var32.emojiOnlyCustomStatusBubble;
            var19['emojiOnlyStyle'] = var32;
            var21 = var23.bind(var4)(var22, var19);
 1053:
            var19 = new Array(3);
            var19[0] = var21;
            var23 = _closure1_slot7;
            var22 = _closure1_slot1;
            var32 = _closure1_slot2;
            var21 = 22;
            var21 = var32[var21];
            var22 = var22.bind(var4)(var21);
            var21 = {};
            var21['user'] = var26;
            var32 = _closure1_slot6;
            var32 = var32.PREVIEW;
            var21['themeType'] = var32;
            var21['displayName'] = var31;
            if(!(var9 == var30)) { _fun0002_ip = 1132; continue _fun0002 }
 1114:
            var32 = var9 == var24;
            var31 = undefined;
            if(var32) { _fun0002_ip = 1129; continue _fun0002 }
 1123:
            var31 = var24.pronouns;
 1129:
            var30 = var31;
 1132:
            var21['pronouns'] = var30;
            var21['badges'] = var29;
            var21['badgeContainerBackground'] = var27;
            var21['showBadgeToastOnPress'] = var28;
            var21 = var23.bind(var4)(var22, var21);
            var19[1] = var21;
            var20 = !var20;
            if(!var20) { _fun0002_ip = 1275; continue _fun0002 }
 1168:
            var23 = _closure1_slot7;
            var22 = _closure1_slot1;
            var28 = _closure1_slot2;
            var21 = 23;
            var21 = var28[var21];
            var22 = var22.bind(var4)(var21);
            var21 = {};
            var26 = var26.id;
            var21['userId'] = var26;
            var21['displayProfile'] = var24;
            var24 = _closure1_slot6;
            var24 = var24.PREVIEW;
            var21['themeType'] = var24;
            var26 = var13.aboutMeCard;
            var24 = new Array(2);
            var24[0] = var26;
            var26 = {};
            var26['backgroundColor'] = var27;
            var24[1] = var26;
            var21['style'] = var24;
            var26 = var9 != var25;
            var24 = 3;
            if(!var26) { _fun0002_ip = 1264; continue _fun0002 }
 1261:
            var24 = var25;
 1264:
            var21['bioLineClamp'] = var24;
            var20 = var23.bind(var4)(var22, var21);
 1275:
            var19[2] = var20;
            var17['children'] = var19;
            var17 = var15.bind(var4)(var18, var17);
            var16[1] = var17;
            var11['children'] = var16;
            var11 = var15.bind(var4)(var12, var11);
            var8[1] = var11;
            var9 = var9 != var14;
            if(!var9) { _fun0002_ip = 1361; continue _fun0002 }
 1314:
            var12 = _closure1_slot7;
            var11 = _closure1_slot1;
            var15 = _closure1_slot2;
            var10 = 24;
            var10 = var15[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['profileEffectId'] = var14;
            var13 = var13.profileEffect;
            var10['style'] = var13;
            var9 = var12.bind(var4)(var11, var10);
 1361:
            var8[2] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();