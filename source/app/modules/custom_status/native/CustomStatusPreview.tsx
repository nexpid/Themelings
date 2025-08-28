// app/modules/custom_status/native/CustomStatusPreview.tsx
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING;
    var _closure1_slot5 = var7;
    var4 = var4.UserProfileThemeTypes;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var1 = {};
            var2 = {'flex': 1, 'position': 'relative', 'overflow': 'hidden', 'width': 323};
            var3 = 1;
            var4 = arg2;
            var6 = 0;
            if(!var4) { _fun0001_ip = 33; continue _fun0001 }
 30:
            var6 = 16;
 33:
            var4 = 301;
            var4 = var4 + var6;
            var2['maxHeight'] = var4;
            var4 = var3;
            if(!var5) { _fun0001_ip = 56; continue _fun0001 }
 54:
            var4 = undefined;
 56:
            var2['borderWidth'] = var4;
            var9 = _closure1_slot1;
            var6 = _closure1_slot2;
            var7 = 5;
            var8 = var6[var7];
            var6 = undefined;
            var8 = var9.bind(var6)(var8);
            var8 = var8.colors;
            if(var5) { _fun0001_ip = 102; continue _fun0001 }
 94:
            var5 = var8.BACKGROUND_FLOATING;
            _fun0001_ip = 108; continue _fun0001;
 102:
            var5 = var8.BORDER_FAINT;
 108:
            var2['borderColor'] = var5;
            var5 = 16;
            var2['borderRadius'] = var5;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var5.bind(var6)(var4);
            var4 = var4.shadows;
            var10 = var4.SHADOW_HIGH;
            var11 = var2;
            var4 = copyDataProperties(var11, var10);
            var1['profileContainer'] = var2;
            var2 = {'flex': 1, 'marginTop': 12};
            var1['aboutMeCard'] = var2;
            var2 = {};
            var2['zIndex'] = var3;
            var1['profileEffect'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/custom_status/native/CustomStatusPreview.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function CustomStatusPreview(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var24 = var2.user;
            var _closure2_slot0 = var24;
            var27 = var2.pendingStatusText;
            var _closure2_slot1 = var27;
            var28 = var2.pendingStatusEmoji;
            var _closure2_slot2 = var28;
            var26 = var2.placeholderText;
            var16 = _closure1_slot1;
            var19 = _closure1_slot2;
            var2 = 6;
            var2 = var19[var2];
            var4 = undefined;
            var3 = var16.bind(var4)(var2);
            var2 = var24.id;
            var15 = var3.bind(var4)(var2);
            var2 = 7;
            var2 = var19[var2];
            var2 = var16.bind(var4)(var2);
            var23 = var2.bind(var4)(var15);
            var2 = 8;
            var2 = var19[var2];
            var3 = var16.bind(var4)(var2);
            var2 = {};
            var2['user'] = var24;
            var2['displayProfile'] = var15;
            var2 = var3.bind(var4)(var2);
            var6 = var2.theme;
            var17 = var2.primaryColor;
            var5 = var2.secondaryColor;
            var14 = null;
            var31 = var14 != var17;
            var2 = _closure1_slot9;
            var21 = false;
            var13 = var2.bind(var4)(var31, var21);
            var2 = 9;
            var2 = var19[var2];
            var2 = var16.bind(var4)(var2);
            var30 = var2.bind(var4)();
            var2 = _closure1_slot0;
            var3 = 10;
            var3 = var19[var3];
            var8 = var2.bind(var4)(var3);
            var7 = var8.useUserProfileColors;
            var3 = {};
            var3['theme'] = var6;
            var3['primaryColor'] = var17;
            var3['secondaryColor'] = var5;
            var3 = var7.bind(var8)(var3);
            var18 = var3.gradientFallbackBackground;
            var25 = var3.avatarBackground;
            var22 = var3.containerBackground;
            var8 = _closure1_slot3;
            var7 = var8.useCallback;
            var3 = new Array(3);
            var3[0] = var24;
            var3[1] = var27;
            var3[2] = var28;
            var1 = function() {
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 11;
                var5 = var2[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var5);
                var5 = var6.dismissKeyboard;
                var5 = var5.bind(var6)();
                var5 = _closure1_slot1;
                var3 = 12;
                var3 = var2[var3];
                var7 = var5.bind(var1)(var3);
                var6 = var7.openLazy;
                var3 = 14;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 13;
                var3 = var2[var3];
                var2 = var2.paths;
                var11 = var4.bind(var1)(var3, var2);
                var4 = {};
                var3 = _closure2_slot0;
                var4['user'] = var3;
                var3 = _closure2_slot1;
                var4['previewText'] = var3;
                var2 = _closure2_slot2;
                var4['previewEmoji'] = var2;
                var10 = 'UserProfileCustomStatusActionSheet';
                var8 = 'stack';
                var12 = var7;
                var9 = var4;
                var2 = var12[var6](var11, var10, var9, var8, var7);
                return var1;
            };
            var29 = var7.bind(var8)(var1, var3);
            var3 = _closure1_slot7;
            var1 = 15;
            var1 = var19[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.ThemeContextProvider;
            var1 = {};
            var1['theme'] = var6;
            var1['primaryColor'] = var17;
            var1['secondaryColor'] = var5;
            var7 = _closure1_slot8;
            var6 = _closure1_slot4;
            var5 = {};
            var9 = var13.profileContainer;
            var8 = new Array(1);
            var8[0] = var9;
            var5['style'] = var8;
            var8 = 16;
            var8 = var19[var8];
            var9 = var16.bind(var4)(var8);
            var8 = {};
            var8['user'] = var24;
            var8['displayProfile'] = var15;
            var11 = 132;
            var8['bannerHeight'] = var11;
            var20 = true;
            var8['disableInteraction'] = var20;
            var9 = var3.bind(var4)(var9, var8);
            var8 = new Array(3);
            var8[0] = var9;
            var9 = {};
            var11 = 17;
            var11 = var19[var11];
            var12 = var16.bind(var4)(var11);
            var11 = {};
            var11['user'] = var24;
            var11['backgroundColor'] = var25;
            var11['disableStatus'] = var20;
            var12 = var3.bind(var4)(var12, var11);
            var11 = new Array(2);
            var11[0] = var12;
            var12 = 18;
            var12 = var19[var12];
            var16 = var16.bind(var4)(var12);
            var12 = {};
            var12['fallbackBackground'] = var18;
            var12['primaryColor'] = var17;
            var12['secondaryColor'] = var17;
            var18 = var30.profileContent;
            var17 = new Array(2);
            var17[0] = var18;
            var18 = '';
            var19 = var18 !== var27;
            if(var19) { _fun0002_ip = 492; continue _fun0002 }
 488:
            var19 = var14 !== var28;
 492:
            if(var19) { _fun0002_ip = 499; continue _fun0002 }
 495:
            var19 = var18 !== var26;
 499:
            var18 = !var19;
            if(var19) { _fun0002_ip = 519; continue _fun0002 }
 505:
            var19 = {};
            var20 = _closure1_slot5;
            var19['paddingTop'] = var20;
            var18 = var19;
 519:
            var17[1] = var18;
            var12['containerStyle'] = var17;
            var20 = _closure1_slot7;
            var19 = _closure1_slot1;
            var25 = _closure1_slot2;
            var17 = 19;
            var17 = var25[var17];
            var18 = var19.bind(var4)(var17);
            var17 = {};
            var17['hasCustomProfileTheme'] = var31;
            var31 = var30.customStatusBubble;
            var17['style'] = var31;
            var30 = var30.emojiOnlyCustomStatusBubble;
            var17['emojiOnlyStyle'] = var30;
            var17['onPressTruncatedStatus'] = var29;
            var17['previewEmoji'] = var28;
            var17['previewText'] = var27;
            var17['placeholderText'] = var26;
            var18 = var20.bind(var4)(var18, var17);
            var17 = new Array(2);
            var17[0] = var18;
            var18 = 20;
            var18 = var25[var18];
            var19 = var19.bind(var4)(var18);
            var18 = {};
            var18['user'] = var24;
            var24 = _closure1_slot6;
            var24 = var24.PREVIEW;
            var18['themeType'] = var24;
            var25 = var14 == var15;
            var24 = undefined;
            if(var25) { _fun0002_ip = 662; continue _fun0002 }
 656:
            var24 = var15.pronouns;
 662:
            var18['pronouns'] = var24;
            var18['badges'] = var23;
            var18['badgeContainerBackground'] = var22;
            var18['showBadgeToastOnPress'] = var21;
            var18 = var20.bind(var4)(var19, var18);
            var17[1] = var18;
            var12['children'] = var17;
            var12 = var7.bind(var4)(var16, var12);
            var11[1] = var12;
            var9['children'] = var11;
            var9 = var7.bind(var4)(var6, var9);
            var8[1] = var9;
            var11 = var14 == var15;
            var9 = undefined;
            if(var11) { _fun0002_ip = 735; continue _fun0002 }
 729:
            var9 = var15.profileEffect;
 735:
            var9 = var14 != var9;
            if(!var9) { _fun0002_ip = 809; continue _fun0002 }
 742:
            var12 = _closure1_slot7;
            var11 = _closure1_slot1;
            var16 = _closure1_slot2;
            var10 = 21;
            var10 = var16[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var16 = var14 == var15;
            var14 = undefined;
            if(var16) { _fun0002_ip = 788; continue _fun0002 }
 777:
            var15 = var15.profileEffect;
            var14 = var15.id;
 788:
            var10['profileEffectId'] = var14;
            var13 = var13.profileEffect;
            var10['style'] = var13;
            var9 = var12.bind(var4)(var11, var10);
 809:
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