// app/modules/user_profile/native/UserProfileDisplayNameStylesEditButton.tsx
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
    var12 = 0;
    var4 = var6[var12];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.useCallback;
    var _closure1_slot4 = var7;
    var4 = var4.useMemo;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot7 = var7;
    var4 = var4.UserSettingsSections;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'height': 50, 'width': 50, 'borderRadius': null, 'backgroundColor': null, 'alignItems': 'center', 'justifyContent': 'center', 'paddingBottom': 4};
    var10 = 7;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var9['borderRadius'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_MUTED;
    var9['backgroundColor'] = var13;
    var4['ggContainer'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_SUBTLE;
    var9['tintColor'] = var13;
    var4['noneIcon'] = var9;
    var9 = {};
    var9['paddingTop'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_4;
    var9['marginLeft'] = var10;
    var4['newBadge'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileDisplayNameStylesEditButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileDisplayNameStylesEditButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = var3.user;
            var _closure2_slot0 = var2;
            var8 = var3.guildId;
            var _closure2_slot1 = var8;
            var12 = var3.isTryItOut;
            var _closure2_slot2 = var12;
            var4 = undefined;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var3 = _closure1_slot11;
            var18 = var3.bind(var4)();
            var _closure2_slot3 = var18;
            var5 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 8;
            var3 = var13[var3];
            var6 = var5.bind(var4)(var3);
            var3 = var6.useNativeStackNavigation;
            var10 = var3.bind(var6)();
            var _closure2_slot4 = var10;
            var3 = 9;
            var3 = var13[var3];
            var7 = var5.bind(var4)(var3);
            var6 = var7.useSelectedDismissibleContent;
            var15 = 10;
            var3 = var13[var15];
            var3 = var5.bind(var4)(var3);
            var3 = var3.DismissibleContent;
            var9 = var3.DISPLAY_NAME_STYLES_MOBILE_NEW_BADGE;
            var3 = new Array(1);
            var3[0] = var9;
            var16 = true;
            var7 = var6.bind(var7)(var3, var4, var16);
            var6 = _closure1_slot3;
            var3 = 2;
            var6 = var6.bind(var4)(var7, var3);
            var3 = 0;
            var14 = var6[var3];
            var3 = 1;
            var7 = var6[var3];
            var _closure2_slot5 = var7;
            var3 = 11;
            var3 = var13[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.useGuildMemberOrUserPendingDisplayNameStyles;
            var3 = var3.bind(var5)(var2, var8);
            var6 = var3.pendingDisplayNameStyles;
            var9 = var3.tryItOutDisplayNameStyles;
            var5 = _closure1_slot1;
            var3 = 12;
            var3 = var13[var3];
            var5 = var5.bind(var4)(var3);
            var3 = {};
            var13 = var2.id;
            var3['userId'] = var13;
            var3['guildId'] = var8;
            if(!var12) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var9;
case 2:
            var3['pendingDisplayNameStyles'] = var6;
            var5 = var5.bind(var4)(var3);
            _closure2_slot6 = var5;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 13;
            var3 = var9[var3];
            var9 = var6.bind(var4)(var3);
            var6 = var9.useDisplayNameStylesEffectConfig;
            var13 = null;
            var17 = var13 == var5;
            var3 = undefined;
            if(var17) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var5.effectId;
case 4:
            if(!(var13 == var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var17 = _closure1_slot0;
            var19 = _closure1_slot2;
            var13 = 14;
            var13 = var19[var13];
            var13 = var17.bind(var4)(var13);
            var13 = var13.DisplayNameEffect;
            var3 = var13.SOLID;
case 6:
            var6 = var6.bind(var9)(var3);
            _closure2_slot7 = var6;
            var3 = _closure1_slot4;
            var9 = new Array(4);
            var9[0] = var8;
            var9[1] = var12;
            var9[2] = var10;
            var9[3] = var7;
            var7 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 15;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var3 = _closure1_slot7;
                var3 = var3.DISPLAY_NAME_STYLES_FROM_SETTINGS;
                var3 = var4.bind(var5)(var3);
                var7 = _closure2_slot4;
                var6 = var7.navigate;
                var4 = _closure1_slot8;
                var5 = var4.DISPLAY_NAME_STYLES;
                var4 = {};
                var8 = _closure2_slot1;
                var4['guildId'] = var8;
                var8 = _closure2_slot2;
                var4['isTryItOut'] = var8;
                var4 = var6.bind(var7)(var5, var4);
                var3 = _closure2_slot5;
                var2 = _closure1_slot9;
                var2 = var2.TAKE_ACTION;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var7 = var3.bind(var4)(var7, var9);
            var10 = _closure1_slot5;
            var9 = new Array(2);
            var9[0] = var6;
            var9[1] = var5;
            var6 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot6;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 16;
                    var3 = var7[var3];
                    var6 = undefined;
                    var3 = var4.bind(var6)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var5 = _closure1_slot1;
                    var2 = 17;
                    var2 = var7[var2];
                    var5 = var5.bind(var6)(var2);
                    var2 = _closure2_slot6;
                    var2 = var2.fontId;
                    var2 = var5.bind(var6)(var2);
                    var5 = var3.bind(var4)(var2);
                    var1 = _closure2_slot7;
                    var4 = var1.name;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var3 = var1.concat;
                    var2 = '';
                    var1 = ' + ';
                    var1 = var3.bind(var2)(var5, var1, var4);
                    _fun0002_ip = 10; continue _fun0002;
case 8:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 16;
                    var3 = var7[var2];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.PoWNfe;
                    var1 = var3.bind(var4)(var2);
case 10:
                    return var1;
                }
            };
            var10 = var10.bind(var4)(var6, var9);
            var6 = new Array(4);
            var6[0] = var5;
            var6[1] = var8;
            var2 = var2.id;
            var6[2] = var2;
            var6[3] = var18;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot6;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0003_ip = 11; continue _fun0003 }
case 9:
                    var4 = _closure1_slot10;
                    var3 = _closure1_slot6;
                    var2 = {};
                    var5 = _closure2_slot3;
                    var5 = var5.ggContainer;
                    var2['style'] = var5;
                    var7 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 20;
                    var5 = var5[var1];
                    var1 = undefined;
                    var7 = var7.bind(var1)(var5);
                    var5 = {};
                    var8 = _closure2_slot0;
                    var8 = var8.id;
                    var5['userId'] = var8;
                    var8 = _closure2_slot1;
                    var5['guildId'] = var8;
                    var8 = 'Gg';
                    var5['userName'] = var8;
                    var8 = _closure2_slot6;
                    var5['pendingDisplayNameStyles'] = var8;
                    var8 = 'heading-xl/semibold';
                    var5['variant'] = var8;
                    var5 = var4.bind(var1)(var7, var5);
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    _fun0003_ip = 12; continue _fun0003;
case 11:
                    var5 = _closure1_slot10;
                    var3 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 18;
                    var2 = var9[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.Icon;
                    var2 = {};
                    var8 = _closure1_slot1;
                    var7 = 19;
                    var7 = var9[var7];
                    var7 = var8.bind(var4)(var7);
                    var2['source'] = var7;
                    var6 = _closure2_slot3;
                    var6 = var6.noneIcon;
                    var2['style'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
case 12:
                    return var1;
                }
            };
            var6 = var3.bind(var4)(var2, var6);
            var2 = new Array(1);
            var2[0] = var5;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot6;
                    var7 = null;
                    var2 = var7 == var1;
                    var1 = null;
                    if(var2) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var5 = _closure1_slot10;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 21;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var6 = _closure2_slot6;
                    var9 = var7 == var6;
                    var6 = undefined;
                    if(var9) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var8 = _closure2_slot6;
                    var6 = var8.colors;
case 15:
                    if(!(var7 == var6)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var6 = new Array(0);
case 17:
                    var2['colors'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
case 13:
                    return var1;
                }
            };
            var5 = var3.bind(var4)(var1, var2);
            var3 = _closure1_slot10;
            var13 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 22;
            var1 = var8[var1];
            var1 = var13.bind(var4)(var1);
            var2 = var1.UserProfileEditFormButton;
            var1 = {};
            var9 = 16;
            var12 = var8[var9];
            var12 = var13.bind(var4)(var12);
            var20 = var12.intl;
            var19 = var20.string;
            var21 = _closure1_slot1;
            var12 = 23;
            var17 = var8[var12];
            var17 = var21.bind(var4)(var17);
            var17 = var17["86GtGH"];
            var17 = var19.bind(var20)(var17);
            var1['label'] = var17;
            var8 = var8[var15];
            var8 = var13.bind(var4)(var8);
            var8 = var8.DismissibleContent;
            var13 = var8.DISPLAY_NAME_STYLES_MOBILE_NEW_BADGE;
            var8 = undefined;
            if(!(var14 === var13)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var15 = _closure1_slot10;
            var14 = _closure1_slot6;
            var13 = {};
            var13['aria-hidden'] = var16;
            var22 = _closure1_slot0;
            var19 = _closure1_slot2;
            var16 = 18;
            var16 = var19[var16];
            var16 = var22.bind(var4)(var16);
            var17 = var16.TextBadge;
            var16 = {};
            var20 = var19[var9];
            var20 = var22.bind(var4)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var19 = var19[var9];
            var19 = var22.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.y2b7CA;
            var19 = var20.bind(var21)(var19);
            var16['text'] = var19;
            var18 = var18.newBadge;
            var16['style'] = var18;
            var16 = var15.bind(var4)(var17, var16);
            var13['children'] = var16;
            var8 = var15.bind(var4)(var14, var13);
case 19:
            var1['labelTrailing'] = var8;
            var1['buttonText'] = var10;
            var8 = {};
            var8['text'] = var10;
            var1['accessibilityValue'] = var8;
            var10 = _closure1_slot0;
            var8 = _closure1_slot2;
            var9 = var8[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var11 = _closure1_slot1;
            var8 = var8[var12];
            var8 = var11.bind(var4)(var8);
            var8 = var8.vJqrIg;
            var8 = var9.bind(var10)(var8);
            var1['accessibilityHint'] = var8;
            var1['onPress'] = var7;
            var6 = var6.bind(var4)();
            var1['leading'] = var6;
            var5 = var5.bind(var4)();
            var1['trailing'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();