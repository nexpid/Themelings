// app/modules/user_profile/native/usePrivateProfileCoachmark.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function PrivateProfileCoachmarkImage() {
        var1 = _closure1_slot9;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var3 = _closure1_slot8;
        var2 = _closure1_slot4;
        var1 = {};
        var6 = var6.imageContainer;
        var1['style'] = var6;
        var7 = _closure1_slot8;
        var6 = _closure1_slot0;
        var8 = _closure1_slot1;
        var5 = 8;
        var5 = var8[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.PrivateProfileAbstractUI;
        var5 = {'width': 100, 'height': 67, 'resizeMode': 'contain'};
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot10 = var1;
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
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserSettingsSections;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.YOU_BAR_HEIGHT;
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'alignItems': 'center', 'justifyContent': 'center'};
    var4['imageContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/usePrivateProfileCoachmark.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function usePrivateProfileCoachmark(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arguments[1];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = {};
case 2:
            var13 = var3.isYouBar;
            var _closure2_slot0 = var1;
            var _closure2_slot1 = var1;
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 11;
            var3 = var9[var3];
            var5 = var7.bind(var1)(var3);
            var4 = var5.useIsInPrivateProfilesExperiment;
            var3 = 'PrivateProfileCoachmark';
            var5 = var4.bind(var5)(var3);
            _closure2_slot0 = var5;
            var3 = 12;
            var3 = var9[var3];
            var4 = var7.bind(var1)(var3);
            var3 = var4.useUserIsTeen;
            var3 = var3.bind(var4)();
            var4 = 13;
            var4 = var9[var4];
            var4 = var7.bind(var1)(var4);
            var8 = var4.ProfileVisibility;
            var4 = var8.useSetting;
            var4 = var4.bind(var8)();
            var11 = _closure1_slot3;
            var10 = var11.useMemo;
            var8 = new Array(1);
            var8[0] = var5;
            var5 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    if(var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var1 = new Array(0);
                    _fun0002_ip = 6; continue _fun0002;
case 4:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 14;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var2 = var2.DismissibleContent;
                    var3 = var2.PRIVATE_PROFILE_COACHMARK;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
case 6:
                    return var1;
                }
            };
            var10 = var10.bind(var11)(var5, var8);
            var5 = 15;
            var5 = var9[var5];
            var8 = var7.bind(var1)(var5);
            var5 = var8.useSelectedDismissibleContent;
            var8 = var5.bind(var8)(var10);
            var5 = _closure1_slot2;
            var12 = 2;
            var10 = var5.bind(var1)(var8, var12);
            var5 = 0;
            var8 = var10[var5];
            var5 = 1;
            var5 = var10[var5];
            _closure2_slot1 = var5;
            var5 = 14;
            var5 = var9[var5];
            var5 = var7.bind(var1)(var5);
            var5 = var5.DismissibleContent;
            var7 = var5.PRIVATE_PROFILE_COACHMARK;
            if(!var3) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var10 = 9;
            var3 = var3[var10];
            var3 = var5.bind(var1)(var3);
            var3 = var3.ProfileVisibility;
            var3 = var3.FRIENDS_AND_ALL_GUILDS;
            if(!(var4 === var3)) { _fun0001_ip = 9; continue _fun0001 }
case 7:
            var11 = _closure1_slot0;
            var14 = _closure1_slot1;
            var3 = 10;
            var5 = var14[var3];
            var5 = var11.bind(var1)(var5);
            var9 = var5.intl;
            var5 = var9.string;
            var3 = var14[var3];
            var3 = var11.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3.bnNxW1;
            var9 = var5.bind(var9)(var3);
            _fun0001_ip = 10; continue _fun0001;
case 9:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var10];
            var3 = var5.bind(var1)(var3);
            var3 = var3.ProfileVisibility;
            var3 = var3.FRIENDS_ONLY;
            if(!(var4 !== var3)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var3 = 10;
            var4 = var11[var3];
            var4 = var10.bind(var1)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var11[var3];
            var3 = var10.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3["6hEfm1"];
            var3 = var4.bind(var5)(var3);
            _fun0001_ip = 13; continue _fun0001;
case 11:
            var11 = _closure1_slot0;
            var14 = _closure1_slot1;
            var4 = 10;
            var5 = var14[var4];
            var5 = var11.bind(var1)(var5);
            var10 = var5.intl;
            var5 = var10.string;
            var4 = var14[var4];
            var4 = var11.bind(var1)(var4);
            var4 = var4.t;
            var4 = var4["/hogEy"];
            var3 = var5.bind(var10)(var4);
case 13:
            var9 = var3;
case 10:
            var16 = _closure1_slot0;
            var11 = _closure1_slot1;
            var3 = 16;
            var3 = var11[var3];
            var5 = var16.bind(var1)(var3);
            var4 = var5.useCoachmark;
            var3 = {};
            var10 = 10;
            var14 = var11[var10];
            var14 = var16.bind(var1)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var11 = var11[var10];
            var11 = var16.bind(var1)(var11);
            var11 = var11.t;
            var11 = var11.Ve4nS1;
            var11 = var14.bind(var15)(var11);
            var3['title'] = var11;
            var3['description'] = var9;
            var9 = 'top';
            var3['position'] = var9;
            var11 = true;
            var9 = undefined;
            if(!(var11 === var13)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var11 = _closure1_slot7;
            var12 = var11 / var12;
            var11 = 4;
            var9 = var12 + var11;
case 14:
            var3['offsetY'] = var9;
            var7 = var8 === var7;
            var3['visible'] = var7;
            var7 = function onDismiss() {
                var3 = _closure2_slot1;
                var1 = _closure1_slot6;
                var2 = var1.USER_DISMISS;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var3['onDismiss'] = var7;
            var7 = function renderImgComponent() {
                var4 = _closure1_slot8;
                var3 = _closure1_slot10;
                var2 = undefined;
                var1 = {};
                var1 = var4.bind(var2)(var3, var1);
                return var1;
            };
            var3['renderImgComponent'] = var7;
            var9 = _closure1_slot0;
            var6 = _closure1_slot1;
            var7 = var6[var10];
            var7 = var9.bind(var1)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var6[var10];
            var6 = var9.bind(var1)(var6);
            var6 = var6.t;
            var6 = var6.eOoTMX;
            var6 = var7.bind(var8)(var6);
            var3['buttonLabel'] = var6;
            var6 = 'primary';
            var3['buttonVariant'] = var6;
            var2 = function onButtonPress() {
                var3 = _closure2_slot1;
                var1 = _closure1_slot6;
                var2 = var1.TAKE_ACTION;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 17;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.openUserSettings;
                var2 = {};
                var5 = _closure1_slot5;
                var5 = var5.DATA_AND_PRIVACY;
                var2['screen'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3['onButtonPress'] = var2;
            var2 = arg1;
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();