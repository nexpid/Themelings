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
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.useCallback;
    var _closure1_slot3 = var7;
    var4 = var4.useMemo;
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'height': 50, 'width': 50, 'borderRadius': null, 'backgroundColor': null, 'alignItems': 'center', 'justifyContent': 'center'};
    var10 = 5;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var9['borderRadius'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BG_MOD_FAINT;
    var9['backgroundColor'] = var12;
    var4['ggContainer'] = var9;
    var9 = {};
    var12 = 20;
    var9['fontSize'] = var12;
    var4['ggText'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.HEADER_SECONDARY;
    var9['tintColor'] = var10;
    var4['noneIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileDisplayNameStylesEditButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileDisplayNameStylesEditButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var6 = var1.user;
            var7 = var1.guildId;
            var5 = undefined;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var1 = _closure1_slot8;
            var9 = var1.bind(var5)();
            var _closure2_slot0 = var9;
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 6;
            var1 = var10[var1];
            var11 = var4.bind(var5)(var1);
            var2 = var11.useIsDisplayNameStylesMobileEnabled;
            var1 = {};
            var12 = 'UserProfileDisplayNameStylesEditButton';
            var1['location'] = var12;
            var2 = var2.bind(var11)(var1);
            var1 = 7;
            var1 = var10[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.useGuildMemberOrUserPendingDisplayNameStyles;
            var1 = var1.bind(var4)(var6, var7);
            var4 = var1.userDisplayNameStyles;
            var6 = var1.guildDisplayNameStyles;
            var10 = var1.pendingDisplayNameStyles;
            var1 = null;
            if(!(var1 == var10)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(!(var1 != var7)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var6;
case 4:
            var10 = var4;
case 2:
            _closure2_slot1 = var10;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 8;
            var4 = var7[var4];
            var7 = var6.bind(var5)(var4);
            var6 = var7.useDisplayNameStylesEffectConfig;
            var11 = var1 == var10;
            var4 = undefined;
            if(var11) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var10.effectId;
case 6:
            if(!(var1 == var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 9;
            var11 = var13[var11];
            var11 = var12.bind(var5)(var11);
            var11 = var11.DisplayNameEffect;
            var4 = var11.SOLID;
case 8:
            var4 = var6.bind(var7)(var4);
            _closure2_slot2 = var4;
            var6 = _closure1_slot3;
            var11 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 10;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.track;
                var2 = _closure1_slot6;
                var2 = var2.DISPLAY_NAME_STYLES_FROM_SETTINGS;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var7 = new Array(0);
            var7 = var6.bind(var5)(var11, var7);
            var12 = _closure1_slot4;
            var11 = new Array(2);
            var11[0] = var4;
            var11[1] = var10;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var2 = _closure2_slot2;
                    if(!(var3 != var2)) { _fun0002_ip = 10; continue _fun0002 }
case 12:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 11;
                    var3 = var7[var3];
                    var6 = undefined;
                    var3 = var4.bind(var6)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var5 = _closure1_slot1;
                    var2 = 12;
                    var2 = var7[var2];
                    var5 = var5.bind(var6)(var2);
                    var2 = _closure2_slot1;
                    var2 = var2.fontId;
                    var2 = var5.bind(var6)(var2);
                    var6 = var3.bind(var4)(var2);
                    var2 = _closure2_slot1;
                    var4 = var2.colors;
                    var3 = var4.map;
                    var2 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 13;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.int2hex;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    var1 = _closure2_slot2;
                    var10 = var1.name;
                    var1 = var2.join;
                    var4 = ' + ';
                    var8 = var1.bind(var2)(var4);
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var2 = var1.concat;
                    var13 = '';
                    var12 = var6;
                    var11 = var4;
                    var9 = var4;
                    var1 = var13[var2](var12, var11, var10, var9, var8, var7);
                    return var1;
case 10:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 11;
                    var2 = var6[var1];
                    var4 = undefined;
                    var2 = var5.bind(var4)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var6[var1];
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.t;
                    var1 = var1.PoWNfe;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var13 = var12.bind(var5)(var4, var11);
            var4 = new Array(2);
            var4[0] = var10;
            var4[1] = var9;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var4 = _closure1_slot7;
                    var3 = _closure1_slot5;
                    var2 = {};
                    var8 = _closure2_slot0;
                    var5 = var8.ggContainer;
                    var2['style'] = var5;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 16;
                    var5 = var5[var1];
                    var1 = undefined;
                    var5 = var7.bind(var1)(var5);
                    var7 = var5.Text;
                    var5 = {'variant': 'text-md/semibold', 'style': null, 'color': 'header-primary', 'children': 'Gg'};
                    var8 = var8.ggText;
                    var5['style'] = var8;
                    var5 = var4.bind(var1)(var7, var5);
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    _fun0003_ip = 15; continue _fun0003;
case 13:
                    var5 = _closure1_slot7;
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 14;
                    var2 = var9[var2];
                    var4 = undefined;
                    var3 = var8.bind(var4)(var2);
                    var2 = {};
                    var7 = 15;
                    var7 = var9[var7];
                    var7 = var8.bind(var4)(var7);
                    var2['source'] = var7;
                    var6 = _closure2_slot0;
                    var6 = var6.noneIcon;
                    var2['style'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
case 15:
                    return var1;
                }
            };
            var6 = var6.bind(var5)(var3, var4);
            var1 = null;
            if(!var2) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var4 = _closure1_slot7;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 17;
            var2 = var12[var2];
            var2 = var10.bind(var5)(var2);
            var3 = var2.UserProfileEditFormButton;
            var2 = {};
            var9 = 11;
            var11 = var12[var9];
            var11 = var10.bind(var5)(var11);
            var16 = var11.intl;
            var15 = var16.string;
            var11 = _closure1_slot1;
            var8 = 18;
            var14 = var12[var8];
            var14 = var11.bind(var5)(var14);
            var14 = var14.86GtGH;
            var14 = var15.bind(var16)(var14);
            var2['label'] = var14;
            var2['buttonText'] = var13;
            var2['accessibilityLabel'] = var13;
            var9 = var12[var9];
            var9 = var10.bind(var5)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var5)(var8);
            var8 = var8.vJqrIg;
            var8 = var9.bind(var10)(var8);
            var2['accessibilityHint'] = var8;
            var2['onPress'] = var7;
            var6 = var6.bind(var5)();
            var2['leading'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 16:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();