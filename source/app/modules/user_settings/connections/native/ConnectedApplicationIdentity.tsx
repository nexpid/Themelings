// app/modules/user_settings/connections/native/ConnectedApplicationIdentity.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/connections/native/ConnectedApplicationIdentity.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConnectedApplicationIdentity(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var10 = var1.identity;
            var _closure2_slot0 = var10;
            var15 = var1.token;
            var _closure2_slot1 = var15;
            var5 = undefined;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var1 = null;
            var3 = var1 == var15;
            var19 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var19 = var15.application;
case 2:
            _closure2_slot2 = var19;
            var4 = var1 == var19;
            var3 = undefined;
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var19.name;
case 4:
            var4 = var1 != var3;
            var11 = '';
            if(!var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var11 = var3;
case 6:
            _closure2_slot3 = var11;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 5;
            var3 = var9[var3];
            var7 = var8.bind(var5)(var3);
            var4 = var7.useLegacyClassComponentStyles;
            var3 = 6;
            var3 = var9[var3];
            var3 = var8.bind(var5)(var3);
            var3 = var3.readStyles;
            var9 = var4.bind(var7)(var3);
            var7 = _closure1_slot5;
            var4 = var7.useState;
            var3 = var10.profile;
            var12 = var1 == var3;
            var8 = undefined;
            if(var12) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = var3.connection_visible;
case 8:
            var3 = var1 != var8;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = var8;
case 10:
            var7 = var4.bind(var7)(var3);
            var4 = _closure1_slot4;
            var3 = 2;
            var4 = var4.bind(var5)(var7, var3);
            var3 = 0;
            var13 = var4[var3];
            var3 = 1;
            var3 = var4[var3];
            _closure2_slot4 = var3;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var18 = 7;
            var7 = var3[var18];
            var7 = var4.bind(var5)(var7);
            var8 = var7.intl;
            var7 = var8.format;
            var3 = var3[var18];
            var3 = var4.bind(var5)(var3);
            var3 = var3.t;
            var4 = var3.VgqIPj;
            var3 = {};
            var3['provider'] = var11;
            var3 = var7.bind(var8)(var4, var3);
            _closure2_slot5 = var3;
            var8 = _closure1_slot5;
            var7 = var8.useCallback;
            var4 = new Array(3);
            var4[0] = var11;
            var4[1] = var3;
            var4[2] = var15;
            var3 = function() {
                var4 = _closure1_slot8;
                var3 = _closure1_slot6;
                var2 = {};
                var13 = _closure1_slot7;
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var11 = 8;
                var5 = var7[var11];
                var1 = undefined;
                var5 = var10.bind(var1)(var5);
                var8 = var5.Spacer;
                var5 = {};
                var5['size'] = var11;
                var5 = var13.bind(var1)(var8, var5);
                var8 = new Array(4);
                var8[0] = var5;
                var5 = 9;
                var5 = var7[var5];
                var5 = var10.bind(var1)(var5);
                var14 = var5.Text;
                var12 = {};
                var5 = 'text-md/medium';
                var12['variant'] = var5;
                var5 = 7;
                var9 = var7[var5];
                var9 = var10.bind(var1)(var9);
                var18 = var9.intl;
                var17 = var18.format;
                var9 = var7[var5];
                var9 = var10.bind(var1)(var9);
                var9 = var9.t;
                var16 = var9.VgqIPj;
                var15 = {};
                var19 = _closure2_slot3;
                var15['provider'] = var19;
                var15 = var17.bind(var18)(var16, var15);
                var12['children'] = var15;
                var12 = var13.bind(var1)(var14, var12);
                var8[1] = var12;
                var11 = var7[var11];
                var11 = var10.bind(var1)(var11);
                var12 = var11.Spacer;
                var11 = {};
                var14 = 16;
                var11['size'] = var14;
                var11 = var13.bind(var1)(var12, var11);
                var8[2] = var11;
                var6 = _closure1_slot1;
                var11 = 10;
                var11 = var7[var11];
                var12 = var6.bind(var1)(var11);
                var11 = {};
                var14 = var7[var5];
                var14 = var10.bind(var1)(var14);
                var17 = var14.intl;
                var16 = var17.format;
                var14 = var7[var5];
                var14 = var10.bind(var1)(var14);
                var14 = var14.t;
                var15 = var14.COW3Xn;
                var14 = {};
                var18 = _closure2_slot3;
                var14['platformName'] = var18;
                var14 = var16.bind(var17)(var15, var14);
                var11['children'] = var14;
                var11 = var13.bind(var1)(var12, var11);
                var8[3] = var11;
                var2['children'] = var8;
                var8 = var4.bind(var1)(var3, var2);
                var2 = 11;
                var2 = var7[var2];
                var4 = var6.bind(var1)(var2);
                var3 = var4.show;
                var2 = {};
                var11 = var7[var5];
                var11 = var10.bind(var1)(var11);
                var14 = var11.intl;
                var13 = var14.formatToPlainString;
                var11 = var7[var5];
                var11 = var10.bind(var1)(var11);
                var11 = var11.t;
                var12 = var11.U5x12f;
                var11 = {};
                var15 = _closure2_slot3;
                var11['name'] = var15;
                var11 = var13.bind(var14)(var12, var11);
                var2['title'] = var11;
                var9 = _closure2_slot5;
                var2['body'] = var9;
                var9 = var7[var5];
                var9 = var10.bind(var1)(var9);
                var12 = var9.intl;
                var11 = var12.string;
                var9 = var7[var5];
                var9 = var10.bind(var1)(var9);
                var9 = var9.t;
                var9 = var9.ETE/oC;
                var9 = var11.bind(var12)(var9);
                var2['cancelText'] = var9;
                var2['children'] = var8;
                var8 = var7[var5];
                var8 = var10.bind(var1)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var5 = var7[var5];
                var5 = var10.bind(var1)(var5);
                var5 = var5.t;
                var5 = var5.ppppRJ;
                var5 = var8.bind(var9)(var5);
                var2['confirmText'] = var5;
                var5 = function onConfirm() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var3 = _closure2_slot1;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 12;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var4.bind(var2)(var3);
                        var2 = var3.handleDeleteApp;
                        var1 = _closure2_slot1;
                        var1 = var2.bind(var3)(var1);
case 12:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2['onConfirm'] = var5;
                var5 = 13;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var5 = var5.Colors;
                var5 = var5.RED;
                var2['confirmColor'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var20 = var7.bind(var8)(var3, var4);
            var7 = var8.useMemo;
            var4 = var1 == var19;
            var3 = undefined;
            if(var4) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var3 = var19.icon;
case 14:
            var4 = new Array(2);
            var4[0] = var3;
            var3 = var10.application_id;
            var4[1] = var3;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 14;
                    var1 = var3[var1];
                    var8 = undefined;
                    var3 = var2.bind(var8)(var1);
                    var2 = var3.getApplicationIconSource;
                    var1 = {};
                    var4 = _closure2_slot0;
                    var4 = var4.application_id;
                    var1['id'] = var4;
                    var6 = _closure2_slot2;
                    var4 = null;
                    var6 = var4 == var6;
                    var4 = undefined;
                    if(var6) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var5 = _closure2_slot2;
                    var4 = var5.icon;
case 16:
                    var1['icon'] = var4;
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 15;
                    var5 = var9[var4];
                    var6 = var6.bind(var8)(var5);
                    var5 = var6.getIconSize;
                    var7 = _closure1_slot1;
                    var4 = var9[var4];
                    var4 = var7.bind(var8)(var4);
                    var4 = var4.Sizes;
                    var4 = var4.LARGE;
                    var4 = var5.bind(var6)(var4);
                    var1['size'] = var4;
                    var4 = false;
                    var1['botIconFirst'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var8 = var7.bind(var8)(var3, var4);
            var7 = _closure1_slot5;
            var4 = var7.useCallback;
            var2 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            StartGenerator();
                            var6 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0004_ip = 18; continue _fun0004 }
case 13:
                            var10 = var6;
                            var2 = undefined;
                            var3 = undefined;
                            var4 = _closure2_slot4;
                            var4 = var4.bind(var2)(var6);
case 19: // try_start_0
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var4 = 16;
                            var4 = var7[var4];
                            var9 = var6.bind(var2)(var4);
                            var8 = var9.updateApplicationIdentityConfig;
                            var4 = _closure2_slot0;
                            var7 = var4.application_id;
                            var6 = var4.provider_issued_user_id;
                            var4 = {};
                            var4['connection_visible'] = var10;
                            var4 = var8.bind(var9)(var7, var6, var4);
                            SaveGenerator(address=95);
case 20:
                            return var4;
case 21:
                            ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                            if(var6) { _fun0004_ip = 22; continue _fun0004 }
case 23: // try_end0
                            _fun0004_ip = 24; continue _fun0004;
case 22:
                            return var4;
case 25: // catch_target0
                            CatchBlockStart(arg_register=3);
                            var4 = _closure2_slot4;
                            var5 = _closure2_slot0;
                            var6 = var5.profile;
                            var3 = var6;
                            var5 = null;
                            var6 = var5 == var6;
                            var5 = undefined;
                            if(var6) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                            var5 = var3.connection_visible;
case 26:
                            var3 = true;
                            var3 = var3 === var5;
                            var3 = var4.bind(var2)(var3);
case 24:
                            return var2;
case 18:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var3 = var2.bind(var5)();
            var2 = var10.profile;
            var12 = var1 == var2;
            var11 = undefined;
            if(var12) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var11 = var2.connection_visible;
case 28:
            var2 = new Array(3);
            var2[0] = var11;
            var11 = var10.provider_issued_user_id;
            var2[1] = var11;
            var10 = var10.application_id;
            var2[2] = var10;
            var12 = var4.bind(var7)(var3, var2);
            if(!(var1 != var19)) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var4 = _closure1_slot7;
            var21 = _closure1_slot1;
            var14 = _closure1_slot2;
            var10 = 15;
            var2 = var14[var10];
            var3 = var21.bind(var5)(var2);
            var2 = {};
            var7 = true;
            var2['accessible'] = var7;
            var11 = var19.name;
            var2['accessibilityLabel'] = var11;
            var16 = var9.connectedApplicationIdentityIcon;
            var11 = new Array(2);
            var11[0] = var16;
            var16 = var9.platformIcon;
            var11[1] = var16;
            var2['style'] = var11;
            var11 = var14[var10];
            var11 = var21.bind(var5)(var11);
            var11 = var11.Sizes;
            var11 = var11.LARGE;
            var2['size'] = var11;
            var2['source'] = var8;
            var2['disableColor'] = var7;
            var16 = var4.bind(var5)(var3, var2);
            var17 = _closure1_slot0;
            var2 = 17;
            var2 = var14[var2];
            var2 = var17.bind(var5)(var2);
            var3 = var2.Stack;
            var2 = {'spacing': 8, 'direction': 'horizontal', 'align': 'center'};
            var11 = 8;
            var7 = 18;
            var7 = var14[var7];
            var7 = var17.bind(var5)(var7);
            var8 = var7.PressableOpacity;
            var7 = {};
            var22 = 'button';
            var7['accessibilityRole'] = var22;
            var22 = var14[var18];
            var22 = var17.bind(var5)(var22);
            var24 = var22.intl;
            var23 = var24.string;
            var22 = var14[var18];
            var22 = var17.bind(var5)(var22);
            var22 = var22.t;
            var22 = var22.DT39A+;
            var22 = var23.bind(var24)(var22);
            var7['accessibilityLabel'] = var22;
            var7['onPress'] = var20;
            var20 = {'top': 5, 'left': 5, 'bottom': 5, 'right': 5};
            var7['hitSlop'] = var20;
            var15 = var1 == var15;
            var7['disabled'] = var15;
            var10 = var14[var10];
            var15 = var21.bind(var5)(var10);
            var10 = {};
            var20 = var9.deleteConnectionIcon;
            var10['style'] = var20;
            var20 = 19;
            var20 = var14[var20];
            var20 = var21.bind(var5)(var20);
            var10['source'] = var20;
            var10 = var4.bind(var5)(var15, var10);
            var7['children'] = var10;
            var7 = var4.bind(var5)(var8, var7);
            var2['children'] = var7;
            var15 = var4.bind(var5)(var3, var2);
            var3 = _closure1_slot6;
            var2 = {};
            var7 = var9.container;
            var2['style'] = var7;
            var7 = _closure1_slot8;
            var6 = {};
            var8 = var9.connectedAccountItem;
            var6['style'] = var8;
            var8 = {};
            var9 = var9.connectedAccountTopContainer;
            var8['style'] = var9;
            var9 = 20;
            var9 = var14[var9];
            var9 = var17.bind(var5)(var9);
            var10 = var9.TableRow;
            var9 = {};
            var19 = var19.name;
            var9['label'] = var19;
            var9['icon'] = var16;
            var9['trailing'] = var15;
            var9 = var4.bind(var5)(var10, var9);
            var8['children'] = var9;
            var9 = var4.bind(var5)(var3, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var9 = {};
            var10 = {};
            var10['marginVertical'] = var11;
            var9['style'] = var10;
            var10 = 21;
            var10 = var14[var10];
            var10 = var17.bind(var5)(var10);
            var11 = var10.TableSwitchRow;
            var10 = {};
            var15 = var14[var18];
            var15 = var17.bind(var5)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var14[var18];
            var14 = var17.bind(var5)(var14);
            var14 = var14.t;
            var14 = var14.f7yOAX;
            var14 = var15.bind(var16)(var14);
            var10['label'] = var14;
            var10['value'] = var13;
            var10['onValueChange'] = var12;
            var10 = var4.bind(var5)(var11, var10);
            var9['children'] = var10;
            var9 = var4.bind(var5)(var3, var9);
            var8[1] = var9;
            var6['children'] = var8;
            var6 = var7.bind(var5)(var3, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 30:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();