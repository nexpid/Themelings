// app/modules/user_profile/native/UserProfileBanner.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.BANNER_HEIGHT;
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
    var4 = {};
    var9 = {};
    var10 = 'relative';
    var9['position'] = var10;
    var4['bannerContainer'] = var9;
    var9 = {'position': 'absolute', 'left': 12, 'top': 12, 'right': 'auto', 'bottom': 'auto'};
    var10 = 6;
    var10 = var6[var10];
    var13 = var11.bind(var1)(var10);
    var10 = 7;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.WHITE_500;
    var14 = var13.bind(var1)(var12);
    var13 = var14.alpha;
    var12 = 0.9;
    var13 = var13.bind(var14)(var12);
    var12 = var13.css;
    var12 = var12.bind(var13)();
    var9['backgroundColor'] = var12;
    var4['gifTag'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.PRIMARY_800;
    var9['color'] = var10;
    var10 = 14;
    var9['fontSize'] = var10;
    var4['gifTagText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileBanner.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileBanner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.user;
            var13 = var2.displayProfile;
            var _closure2_slot0 = var13;
            var3 = var2.style;
            var _closure2_slot1 = var3;
            var3 = var2.bannerSafeArea;
            var4 = undefined;
            if(!(var3 === var4)) { _fun0001_ip = 43; continue _fun0001 }
 41:
            var3 = 0;
 43:
            var _closure2_slot2 = var3;
            var3 = var2.bannerHeight;
            if(!(var3 === var4)) { _fun0001_ip = 64; continue _fun0001 }
 57:
            var3 = _closure1_slot6;
 64:
            var _closure2_slot3 = var3;
            var9 = var2.pendingBanner;
            var8 = var2.pendingAvatarSrc;
            var3 = var2.pendingAccentColor;
            var _closure2_slot4 = var3;
            var3 = var2.pendingThemeColors;
            var _closure2_slot5 = var3;
            var5 = var2.disableInteraction;
            if(!(var5 === var4)) { _fun0001_ip = 112; continue _fun0001 }
 110:
            var5 = false;
 112:
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var2 = _closure1_slot9;
            var14 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 8;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.GifAutoPlay;
            var2 = var3.useSetting;
            var7 = var2.bind(var3)();
            var6 = _closure1_slot4;
            var3 = var6.useState;
            var2 = false;
            var6 = var3.bind(var6)(var2);
            var3 = _closure1_slot3;
            var2 = 2;
            var6 = var3.bind(var4)(var6, var2);
            var2 = 0;
            var2 = var6[var2];
            _closure2_slot6 = var2;
            var3 = 1;
            var3 = var6[var3];
            _closure2_slot7 = var3;
            var10 = var7;
            if(var10) { _fun0001_ip = 234; continue _fun0001 }
 231:
            var10 = var2;
 234:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 9;
            var2 = var6[var2];
            var6 = var3.bind(var4)(var2);
            var3 = var6.useUserProfileBannerBackgroundColor;
            var2 = {};
            var2['user'] = var1;
            var1 = null;
            var16 = var1 == var13;
            var15 = undefined;
            if(var16) { _fun0001_ip = 282; continue _fun0001 }
 277:
            var15 = var13.guildId;
 282:
            var2['guildId'] = var15;
            var2['pendingAvatarSrc'] = var8;
            var2['displayProfile'] = var13;
            var2 = var3.bind(var6)(var2);
            _closure2_slot8 = var2;
            if(!(var4 === var9)) { _fun0001_ip = 348; continue _fun0001 }
 309:
            var2 = var1 == var13;
            var3 = undefined;
            if(var2) { _fun0001_ip = 346; continue _fun0001 }
 318:
            var6 = var13.getBannerURL;
            var2 = {};
            var2['canAnimate'] = var10;
            var8 = 600;
            var2['size'] = var8;
            var3 = var6.bind(var13)(var2);
 346:
            _fun0001_ip = 379; continue _fun0001;
 348:
            var6 = var1 == var13;
            var2 = undefined;
            if(var6) { _fun0001_ip = 376; continue _fun0001 }
 357:
            var8 = var13.getPreviewBanner;
            var6 = 600;
            var2 = var8.bind(var13)(var9, var10, var6);
 376:
            var3 = var2;
 379:
            var2 = var1 != var3;
            var1 = null;
            if(!var2) { _fun0001_ip = 419; continue _fun0001 }
 388:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 10;
            var2 = var8[var2];
            var6 = var6.bind(var4)(var2);
            var2 = var6.makeSource;
            var1 = var2.bind(var6)(var3);
 419:
            _closure2_slot9 = var1;
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 10;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.isAnimatedImageURL;
            var8 = var1.bind(var2)(var3);
            var6 = function renderBanner() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var5 = _closure1_slot7;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 11;
                    var1 = var3[var1];
                    var4 = undefined;
                    var3 = var2.bind(var4)(var1);
                    var2 = {};
                    var1 = _closure2_slot1;
                    var2['style'] = var1;
                    var1 = _closure2_slot9;
                    var2['bannerSource'] = var1;
                    var1 = _closure2_slot5;
                    var7 = null;
                    var8 = var7 == var1;
                    var1 = undefined;
                    if(var8) { _fun0002_ip = 76; continue _fun0002 }
 66:
                    var9 = _closure2_slot5;
                    var8 = 0;
                    var1 = var9[var8];
 76:
                    if(!(var7 == var1)) { _fun0002_ip = 84; continue _fun0002 }
 80:
                    var1 = _closure2_slot4;
 84:
                    if(!(var7 == var1)) { _fun0002_ip = 114; continue _fun0002 }
 88:
                    var8 = _closure2_slot0;
                    var9 = var7 == var8;
                    var8 = undefined;
                    if(var9) { _fun0002_ip = 111; continue _fun0002 }
 101:
                    var9 = _closure2_slot0;
                    var8 = var9.primaryColor;
 111:
                    var1 = var8;
 114:
                    if(!(var7 == var1)) { _fun0002_ip = 122; continue _fun0002 }
 118:
                    var1 = _closure2_slot8;
 122:
                    var2['backgroundColor'] = var1;
                    var1 = _closure2_slot2;
                    var2['bannerSafeArea'] = var1;
                    var1 = _closure2_slot3;
                    var2['bannerHeight'] = var1;
                    var1 = _closure2_slot0;
                    var7 = var7 == var1;
                    var1 = undefined;
                    if(var7) { _fun0002_ip = 167; continue _fun0002 }
 157:
                    var6 = _closure2_slot0;
                    var1 = var6.banner;
 167:
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var3 = _closure1_slot7;
            var2 = _closure1_slot5;
            var1 = {};
            var9 = var14.bannerContainer;
            var1['style'] = var9;
            if(!var8) { _fun0001_ip = 738; continue _fun0001 }
 485:
            if(var7) { _fun0001_ip = 738; continue _fun0001 }
 491:
            if(var5) { _fun0001_ip = 738; continue _fun0001 }
 497:
            var8 = _closure1_slot8;
            var15 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 12;
            var5 = var9[var5];
            var5 = var15.bind(var4)(var5);
            var7 = var5.PressableOpacity;
            var5 = {};
            var12 = function onPress() {
                var3 = _closure2_slot7;
                var1 = _closure2_slot6;
                var2 = !var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var5['onPress'] = var12;
            var12 = 'button';
            var5['accessibilityRole'] = var12;
            var19 = 13;
            var12 = var9[var19];
            var12 = var15.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var9 = var9[var19];
            var9 = var15.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.3fzj/v;
            var9 = var12.bind(var13)(var9);
            var5['accessibilityLabel'] = var9;
            var12 = var6.bind(var4)();
            var9 = new Array(2);
            var9[0] = var12;
            var10 = !var10;
            if(!var10) { _fun0001_ip = 722; continue _fun0001 }
 615:
            var13 = _closure1_slot7;
            var18 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 14;
            var11 = var15[var11];
            var11 = var18.bind(var4)(var11);
            var12 = var11.Caption;
            var11 = {};
            var16 = var15[var19];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var15[var19];
            var15 = var18.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.I5gL2N;
            var15 = var16.bind(var17)(var15);
            var11['label'] = var15;
            var15 = var14.gifTag;
            var11['style'] = var15;
            var14 = var14.gifTagText;
            var11['textStyle'] = var14;
            var10 = var13.bind(var4)(var12, var11);
 722:
            var9[1] = var10;
            var5['children'] = var9;
            var5 = var8.bind(var4)(var7, var5);
            _fun0001_ip = 742; continue _fun0001;
 738:
            var5 = var6.bind(var4)();
 742:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();