// app/modules/user_profile/native/UserProfileEditBannerButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function ProfilePreviewButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var2 = var2.userId;
            var _closure2_slot0 = var2;
            var3 = _closure1_slot7;
            var5 = undefined;
            var8 = var3.bind(var5)();
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 5;
            var3 = var7[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.bind(var5)();
            var9 = var3.analyticsLocations;
            var _closure2_slot1 = var9;
            var4 = _closure1_slot0;
            var3 = 6;
            var3 = var7[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useUserProfileAnalyticsContext;
            var3 = var3.bind(var4)();
            var10 = var3.context;
            var _closure2_slot2 = var10;
            var7 = _closure1_slot3;
            var4 = var7.useCallback;
            var3 = new Array(3);
            var3[0] = var2;
            var3[1] = var10;
            var3[2] = var9;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0002_ip = 93; continue _fun0002 }
 13:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 7;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var7 = _closure2_slot2;
                    var8 = var1;
                    var5 = copyDataProperties(var8, var7);
                    var6 = _closure2_slot0;
                    var5 = 'userId';
                    var1[var5] = var6;
                    var6 = true;
                    var5 = 'isPreviewingChanges';
                    var1[var5] = var6;
                    var5 = _closure2_slot1;
                    var4 = 'sourceAnalyticsLocations';
                    var1[var4] = var5;
                    var1 = var2.bind(var3)(var1);
 93:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var4.bind(var7)(var1, var3);
            var1 = null;
            var2 = var1 == var2;
            if(var2) { _fun0001_ip = 350; continue _fun0001 }
 146:
            var4 = _closure1_slot5;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 8;
            var2 = var13[var2];
            var2 = var12.bind(var5)(var2);
            var3 = var2.PressableOpacity;
            var2 = {};
            var8 = var8.previewButton;
            var2['style'] = var8;
            var2['onPress'] = var7;
            var7 = 'button';
            var2['accessibilityRole'] = var7;
            var9 = 9;
            var7 = var13[var9];
            var7 = var12.bind(var5)(var7);
            var10 = var7.intl;
            var8 = var10.string;
            var7 = var13[var9];
            var7 = var12.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.3Qcx6O;
            var7 = var8.bind(var10)(var7);
            var2['accessibilityLabel'] = var7;
            var8 = _closure1_slot5;
            var6 = 10;
            var6 = var13[var6];
            var6 = var12.bind(var5)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-sm/semibold', 'color': 'text-normal'};
            var10 = var13[var9];
            var10 = var12.bind(var5)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.3Qcx6O;
            var9 = var10.bind(var11)(var9);
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 350:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function EditButton(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var10 = var1.onPress;
            var11 = var1.accessibilityLabel;
            var9 = var1.disabled;
            var4 = undefined;
            if(!(var9 === var4)) { _fun0003_ip = 26; continue _fun0003 }
 24:
            var9 = false;
 26:
            var1 = _closure1_slot7;
            var7 = var1.bind(var4)();
            var3 = _closure1_slot5;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 8;
            var1 = var8[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var12 = 'button';
            var1['accessibilityRole'] = var12;
            var1['accessibilityLabel'] = var11;
            var1['onPress'] = var10;
            var1['disabled'] = var9;
            var7 = var7.editButton;
            var1['style'] = var7;
            var7 = _closure1_slot5;
            var5 = 11;
            var5 = var8[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.PencilIcon;
            var5 = {};
            var8 = 'xs';
            var5['size'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var1;
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
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 'relative';
    var9['position'] = var10;
    var4['container'] = var9;
    var9 = {'position': 'absolute', 'top': 12, 'right': 12, 'width': 28, 'height': 28, 'alignItems': 'center', 'justifyContent': 'center'};
    var10 = 4;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_FLOATING;
    var9['backgroundColor'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var9['borderRadius'] = var12;
    var4['editButton'] = var9;
    var9 = {'width': 28, 'height': 28};
    var4['editIcon'] = var9;
    var9 = {'position': 'absolute', 'justifyContent': 'center', 'minHeight': 28, 'top': 12, 'right': 48, 'paddingVertical': 4, 'paddingHorizontal': 12, 'borderRadius': null, 'backgroundColor': null, 'zIndex': 1};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var9['borderRadius'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_FLOATING;
    var9['backgroundColor'] = var10;
    var4['previewButton'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileEditBannerButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileEditBannerButton(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var15 = var1.user;
            var21 = var1.displayProfile;
            var20 = var1.pendingBanner;
            var19 = var1.pendingAvatarSrc;
            var18 = var1.pendingThemeColors;
            var17 = var1.pendingAccentColor;
            var14 = var1.bannerSafeArea;
            var8 = var1.showProfilePreviewButton;
            var6 = var1.showEditButton;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0004_ip = 64; continue _fun0004 }
 62:
            var6 = true;
 64:
            var12 = var1.onPressEdit;
            var11 = var1.editButtonAccessibilityLabel;
            var10 = var1.editDisabled;
            if(!(var10 === var4)) { _fun0004_ip = 88; continue _fun0004 }
 86:
            var10 = false;
 88:
            var1 = _closure1_slot7;
            var5 = var1.bind(var4)();
            var9 = _closure1_slot1;
            var22 = _closure1_slot2;
            var1 = 12;
            var1 = var22[var1];
            var1 = var9.bind(var4)(var1);
            var16 = var1.bind(var4)();
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var5.container;
            var1['style'] = var5;
            var13 = _closure1_slot5;
            var5 = 13;
            var5 = var22[var5];
            var9 = var9.bind(var4)(var5);
            var5 = {};
            var5['user'] = var15;
            var5['displayProfile'] = var21;
            var5['pendingBanner'] = var20;
            var5['pendingAvatarSrc'] = var19;
            var5['pendingThemeColors'] = var18;
            var5['pendingAccentColor'] = var17;
            var5['bannerHeight'] = var16;
            var5['bannerSafeArea'] = var14;
            var9 = var13.bind(var4)(var9, var5);
            var5 = new Array(3);
            var5[0] = var9;
            if(!var8) { _fun0004_ip = 241; continue _fun0004 }
 216:
            var14 = _closure1_slot5;
            var13 = _closure1_slot8;
            var9 = {};
            var15 = var15.id;
            var9['userId'] = var15;
            var8 = var14.bind(var4)(var13, var9);
 241:
            var5[1] = var8;
            if(!var6) { _fun0004_ip = 276; continue _fun0004 }
 248:
            var9 = _closure1_slot5;
            var8 = _closure1_slot9;
            var7 = {};
            var7['onPress'] = var12;
            var7['accessibilityLabel'] = var11;
            var7['disabled'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 276:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();