// app/modules/user_settings/native/account/UserSettingsAccountEditPassword.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot22 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot22 = var1;
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
    var4 = var13.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var7 = 6;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.Image;
    var _closure1_slot9 = var8;
    var8 = var7.View;
    var _closure1_slot10 = var8;
    var7 = var7.ScrollView;
    var _closure1_slot11 = var7;
    var7 = 7;
    var7 = var6[var7];
    var7 = var13.bind(var1)(var7);
    var _closure1_slot12 = var7;
    var7 = 8;
    var7 = var6[var7];
    var7 = var13.bind(var1)(var7);
    var _closure1_slot13 = var7;
    var7 = 9;
    var7 = var6[var7];
    var7 = var13.bind(var1)(var7);
    var _closure1_slot14 = var7;
    var7 = 10;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.AnalyticEvents;
    var _closure1_slot15 = var8;
    var7 = var7.LoginRequiredActions;
    var _closure1_slot16 = var7;
    var7 = 11;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.jsx;
    var _closure1_slot17 = var8;
    var7 = var7.jsxs;
    var _closure1_slot18 = var7;
    var7 = {};
    var7['newPassword'] = var1;
    var8 = '';
    var7['password'] = var8;
    var _closure1_slot19 = var7;
    var7 = 12;
    var7 = var6[var7];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createLegacyClassComponentStyles;
    var7 = {};
    var11 = 20;
    var10 = {'width': 20, 'height': 20};
    var7['onePass'] = var10;
    var10 = {'overflow': 'hidden', 'borderRadius': null, 'marginVertical': 16};
    var12 = 13;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var10['borderRadius'] = var12;
    var12 = 16;
    var7['unverifiedWrapper'] = var10;
    var10 = {};
    var10['padding'] = var12;
    var7['container'] = var10;
    var10 = {};
    var10['marginBottom'] = var11;
    var7['header'] = var10;
    var10 = {'textAlign': 'center', 'marginTop': 8};
    var7['requiredActionsSubtitle'] = var10;
    var10 = {'flex': 1, 'textAlign': 'center'};
    var7['requiredActionsTitle'] = var10;
    var10 = {'marginTop': 12, 'marginBottom': 16, 'alignSelf': 'center'};
    var7['image'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot20 = var7;
    var7 = var4.Component;
    var4 = function(arg1) {
        var4 = function EditPassword(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var6 = this;
                var14 = 0;
                var1 = copyRestArgs(var14);
                var8 = _closure1_slot4;
                var4 = _closure2_slot0;
                var5 = undefined;
                var8 = var8.bind(var5)(var6, var4);
                var11 = new Array(0);
                var14 = var11;
                var13 = var1;
                var12 = 0;
                var1 = arraySpread(var14, var13, var12);
                var1 = _closure1_slot7;
                var10 = var1.bind(var5)(var4);
                var4 = _closure1_slot6;
                var1 = _closure1_slot22;
                var1 = var1.bind(var5)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot7;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
case 8:
                var1 = var4.bind(var5)(var6, var1);
                var _closure3_slot0 = var1;
                var3 = _closure1_slot19;
                var1['state'] = var3;
                var3 = null;
                var1['newPasswordRef'] = var3;
                var1['passwordManagerRef'] = var3;
                var3 = function(arg1) {
                    var5 = arg1;
                    var3 = _closure3_slot0;
                    var2 = var3.setState;
                    var1 = {};
                    var1['password'] = var5;
                    var1 = var2.bind(var3)(var1);
                    var3 = _closure1_slot2;
                    var2 = _closure1_slot3;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.updateAccount;
                    var2 = {};
                    var2['password'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['handlePasswordChange'] = var3;
                var3 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = arg1;
                    var2['newPasswordRef'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var1['handleSetNewPasswordRef'] = var3;
                var3 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var2 = var1.newPasswordRef;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                        var1 = var2.focus;
                        var1 = var1.bind(var2)();
case 9:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleFocusNewPassword'] = var3;
                var3 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var5 = arg1;
                        var1 = '';
                        if(!(var1 === var5)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                        var5 = undefined;
case 11:
                        var3 = _closure3_slot0;
                        var2 = var3.setState;
                        var1 = {};
                        var1['newPassword'] = var5;
                        var1 = var2.bind(var3)(var1);
                        var3 = _closure1_slot2;
                        var2 = _closure1_slot3;
                        var1 = 14;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.updateAccount;
                        var2 = {};
                        var2['newPassword'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                var1['handleNewPasswordChange'] = var3;
                var3 = function() {
                    var1 = _closure3_slot0;
                    var3 = var1.state;
                    var7 = var3.password;
                    var3 = var3.newPassword;
                    var1 = var1.props;
                    var1 = var1.showForcedPasswordUpdate;
                    var _closure4_slot0 = var1;
                    var5 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var1 = 14;
                    var4 = var4[var1];
                    var1 = undefined;
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.saveAccountChanges;
                    var4 = {};
                    var4['password'] = var7;
                    var4['newPassword'] = var3;
                    var3 = {};
                    var7 = false;
                    var3['close'] = var7;
                    var4 = var5.bind(var6)(var4, var3);
                    var3 = var4.then;
                    var2 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var2 = arg1;
                            var1 = var2.ok;
                            if(var1) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                            var4 = var2.body;
                            var3 = null;
                            var5 = var3 == var4;
                            var2 = undefined;
                            if(var5) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                            var2 = var4.username;
case 15:
                            var1 = var3 == var2;
case 13:
                            if(var1) { _fun0005_ip = 4; continue _fun0005 }
case 17:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 15;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.showInvalidUsernameToast;
                            var1 = var1.bind(var2)();
case 4:
                            var3 = _closure1_slot13;
                            var2 = var3.getErrors;
                            var5 = var2.bind(var3)();
                            var2 = null;
                            var2 = var2 == var5;
                            if(var2) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                            var6 = _closure1_slot1;
                            var4 = _closure1_slot3;
                            var3 = 16;
                            var3 = var4[var3];
                            var4 = undefined;
                            var3 = var6.bind(var4)(var3);
                            var4 = var3.bind(var4)(var5);
                            var3 = var4.isEmpty;
                            var2 = var3.bind(var4)();
case 18:
                            if(!var2) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                            var2 = _closure4_slot0;
                            if(var2) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                            var2 = _closure3_slot0;
                            var2 = var2.props;
                            var3 = var2.navigation;
                            var2 = var3.pop;
                            var2 = var2.bind(var3)();
                            _fun0005_ip = 20; continue _fun0005;
case 22:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot3;
                            var2 = 17;
                            var5 = var4[var2];
                            var2 = undefined;
                            var6 = var3.bind(var2)(var5);
                            var5 = var6.track;
                            var1 = _closure1_slot15;
                            var1 = var1.FORCED_UPDATE_PASSWORD_SUCCEEDED;
                            var1 = var5.bind(var6)(var1);
                            var1 = 18;
                            var1 = var4[var1];
                            var2 = var3.bind(var2)(var1);
                            var1 = var2.close;
                            var1 = var1.bind(var2)();
case 20:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['handleSubmit'] = var3;
                var3 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = arg1;
                    var2['passwordManagerRef'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var1['handleSetPasswordManagerRef'] = var3;
                var2 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var1 = var1.state;
                        var2 = var1.password;
                        var3 = var1.newPassword;
                        var4 = null;
                        var1 = var4 != var2;
                        if(!var1) { _fun0006_ip = 17; continue _fun0006 }
case 24:
                        var5 = '';
                        var1 = var5 !== var2;
case 17:
                        if(!var1) { _fun0006_ip = 25; continue _fun0006 }
case 26:
                        var1 = var4 != var3;
case 25:
                        if(!var1) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                        var4 = '';
                        var1 = var4 !== var3;
case 27:
                        if(!var1) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                        var2 = var2.length;
                        var4 = 0;
                        var2 = var2 > var4;
                        if(!var2) { _fun0006_ip = 31; continue _fun0006 }
case 4:
                        var3 = var3.length;
                        var2 = var3 > var4;
case 31:
                        var1 = var2;
case 29:
                        return var1;
                    }
                };
                var1['canSubmit'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'componentWillUnmount';
        var5['key'] = var1;
        var1 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0: // try_start_0
                var3 = _closure1_slot2;
                var2 = _closure1_slot3;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.resetAccount;
                var1 = var1.bind(var2)();
case 32: // try_end0
                _fun0007_ip = 33; continue _fun0007;
case 34: // catch_target0
                CatchBlockStart(arg_register=0);
case 33:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'getError';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = arg1;
                var1 = this;
                var1 = var1.props;
                var2 = var1.errors;
                var6 = null;
                var4 = var6 != var2;
                var1 = undefined;
                if(!var4) { _fun0008_ip = 28; continue _fun0008 }
case 16:
                var4 = var2[var3];
                var4 = var6 != var4;
                var1 = undefined;
                if(!var4) { _fun0008_ip = 28; continue _fun0008 }
case 17:
                var3 = var2[var3];
                var2 = 0;
                var1 = var3[var2];
case 28:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var6 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var17 = this;
                var2 = _closure1_slot20;
                var1 = var17.context;
                var4 = undefined;
                var25 = var2.bind(var4)(var1);
                var1 = var17.state;
                var19 = var1.password;
                var18 = var1.newPassword;
                var1 = var17.props;
                var20 = var1.passwordLabel;
                var22 = var1.newPasswordLabel;
                var9 = var1.showForcedPasswordUpdate;
                var16 = var1.submitting;
                var10 = var1.hasBannerText;
                var3 = _closure1_slot17;
                var2 = _closure1_slot11;
                var1 = {};
                var7 = _closure1_slot18;
                var6 = _closure1_slot10;
                var5 = {};
                var8 = var25.container;
                var5['style'] = var8;
                if(!var10) { _fun0009_ip = 35; continue _fun0009 }
case 36:
                var12 = _closure1_slot17;
                var11 = _closure1_slot10;
                var8 = {};
                var14 = var25.unverifiedWrapper;
                var8['style'] = var14;
                var15 = _closure1_slot1;
                var21 = _closure1_slot3;
                var14 = 19;
                var14 = var21[var14];
                var15 = var15.bind(var4)(var14);
                var14 = {};
                var14 = var12.bind(var4)(var15, var14);
                var8['children'] = var14;
                var10 = var12.bind(var4)(var11, var8);
case 35:
                var8 = new Array(4);
                var8[0] = var10;
                var10 = var9;
                if(!var10) { _fun0009_ip = 37; continue _fun0009 }
case 38:
                var14 = _closure1_slot18;
                var12 = _closure1_slot10;
                var11 = {};
                var15 = var25.header;
                var11['style'] = var15;
                var24 = _closure1_slot17;
                var21 = _closure1_slot9;
                var15 = {};
                var26 = _closure1_slot1;
                var30 = _closure1_slot3;
                var23 = 20;
                var23 = var30[var23];
                var23 = var26.bind(var4)(var23);
                var15['source'] = var23;
                var23 = var25.image;
                var15['style'] = var23;
                var21 = var24.bind(var4)(var21, var15);
                var15 = new Array(3);
                var15[0] = var21;
                var29 = _closure1_slot0;
                var21 = 21;
                var23 = var30[var21];
                var23 = var29.bind(var4)(var23);
                var27 = var23.Text;
                var23 = {'style': null, 'variant': 'heading-xl/extrabold', 'color': 'mobile-text-heading-primary'};
                var26 = var25.requiredActionsTitle;
                var23['style'] = var26;
                var26 = 22;
                var28 = var30[var26];
                var28 = var29.bind(var4)(var28);
                var32 = var28.intl;
                var31 = var32.string;
                var28 = var30[var26];
                var28 = var29.bind(var4)(var28);
                var28 = var28.t;
                var28 = var28.geta79;
                var28 = var31.bind(var32)(var28);
                var23['children'] = var28;
                var23 = var24.bind(var4)(var27, var23);
                var15[1] = var23;
                var21 = var30[var21];
                var21 = var29.bind(var4)(var21);
                var23 = var21.Text;
                var21 = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-default'};
                var27 = var25.requiredActionsSubtitle;
                var21['style'] = var27;
                var27 = var30[var26];
                var27 = var29.bind(var4)(var27);
                var28 = var27.intl;
                var27 = var28.string;
                var26 = var30[var26];
                var26 = var29.bind(var4)(var26);
                var26 = var26.t;
                var26 = var26["37iHbZ"];
                var26 = var27.bind(var28)(var26);
                var21['children'] = var26;
                var21 = var24.bind(var4)(var23, var21);
                var15[2] = var21;
                var11['children'] = var15;
                var10 = var14.bind(var4)(var12, var11);
case 37:
                var8[1] = var10;
                var9 = !var9;
                if(!var9) { _fun0009_ip = 39; continue _fun0009 }
case 40:
                var12 = _closure1_slot18;
                var11 = _closure1_slot10;
                var10 = {};
                var14 = var25.header;
                var10['style'] = var14;
                var23 = _closure1_slot17;
                var27 = _closure1_slot0;
                var28 = _closure1_slot3;
                var15 = 21;
                var14 = var28[var15];
                var14 = var27.bind(var4)(var14);
                var21 = var14.Text;
                var14 = {'style': null, 'variant': 'heading-xl/extrabold', 'color': 'mobile-text-heading-primary'};
                var24 = var25.requiredActionsTitle;
                var14['style'] = var24;
                var24 = 22;
                var26 = var28[var24];
                var26 = var27.bind(var4)(var26);
                var30 = var26.intl;
                var29 = var30.string;
                var26 = var28[var24];
                var26 = var27.bind(var4)(var26);
                var26 = var26.t;
                var26 = var26.geta79;
                var26 = var29.bind(var30)(var26);
                var14['children'] = var26;
                var21 = var23.bind(var4)(var21, var14);
                var14 = new Array(2);
                var14[0] = var21;
                var15 = var28[var15];
                var15 = var27.bind(var4)(var15);
                var21 = var15.Text;
                var15 = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-default'};
                var25 = var25.requiredActionsSubtitle;
                var15['style'] = var25;
                var25 = var28[var24];
                var25 = var27.bind(var4)(var25);
                var26 = var25.intl;
                var25 = var26.string;
                var24 = var28[var24];
                var24 = var27.bind(var4)(var24);
                var24 = var24.t;
                var24 = var24.x5tG4V;
                var24 = var25.bind(var26)(var24);
                var15['children'] = var24;
                var15 = var23.bind(var4)(var21, var15);
                var14[1] = var15;
                var10['children'] = var14;
                var9 = var12.bind(var4)(var11, var10);
case 39:
                var8[2] = var9;
                var11 = _closure1_slot18;
                var14 = _closure1_slot0;
                var12 = _closure1_slot3;
                var9 = 23;
                var9 = var12[var9];
                var9 = var14.bind(var4)(var9);
                var10 = var9.Stack;
                var9 = {};
                var23 = 24;
                var9['spacing'] = var23;
                var15 = _closure1_slot17;
                var12 = var12[var23];
                var12 = var14.bind(var4)(var12);
                var14 = var12.TextInput;
                var12 = {};
                var12['label'] = var20;
                var21 = true;
                var12['secureTextEntry'] = var21;
                var24 = var17.getError;
                var20 = 'password';
                var20 = var24.bind(var17)(var20);
                var12['errorMessage'] = var20;
                var20 = var17.handlePasswordChange;
                var12['onChange'] = var20;
                var12['value'] = var19;
                var20 = var17.canSubmit;
                var20 = var20.bind(var17)();
                if(var20) { _fun0009_ip = 41; continue _fun0009 }
case 42:
                var20 = var17.handleFocusNewPassword;
                _fun0009_ip = 43; continue _fun0009;
case 41:
                var20 = var17.handleSubmit;
case 43:
                var12['onSubmitEditing'] = var20;
                var20 = 'next';
                var12['returnKeyType'] = var20;
                var20 = 'current-password';
                var12['autoComplete'] = var20;
                var12['required'] = var21;
                var14 = var15.bind(var4)(var14, var12);
                var12 = new Array(3);
                var12[0] = var14;
                var20 = _closure1_slot17;
                var15 = _closure1_slot0;
                var14 = _closure1_slot3;
                var14 = var14[var23];
                var14 = var15.bind(var4)(var14);
                var15 = var14.TextInput;
                var14 = {};
                var14['label'] = var22;
                var22 = var17.handleSetNewPasswordRef;
                var14['ref'] = var22;
                var14['secureTextEntry'] = var21;
                var23 = var17.getError;
                var22 = 'new_password';
                var22 = var23.bind(var17)(var22);
                var14['errorMessage'] = var22;
                var22 = var17.handleNewPasswordChange;
                var14['onChange'] = var22;
                var14['value'] = var18;
                var22 = 'done';
                var14['returnKeyType'] = var22;
                var22 = 'new-password';
                var14['autoComplete'] = var22;
                var22 = var17.canSubmit;
                var23 = var22.bind(var17)();
                var22 = undefined;
                if(!var23) { _fun0009_ip = 44; continue _fun0009 }
case 45:
                var22 = var17.handleSubmit;
case 44:
                var14['onSubmitEditing'] = var22;
                var14['required'] = var21;
                var14 = var20.bind(var4)(var15, var14);
                var12[1] = var14;
                var15 = _closure1_slot17;
                var23 = _closure1_slot0;
                var24 = _closure1_slot3;
                var13 = 25;
                var13 = var24[var13];
                var13 = var23.bind(var4)(var13);
                var14 = var13.Button;
                var13 = {};
                var20 = 22;
                var21 = var24[var20];
                var21 = var23.bind(var4)(var21);
                var22 = var21.intl;
                var21 = var22.string;
                var20 = var24[var20];
                var20 = var23.bind(var4)(var20);
                var20 = var20.t;
                var20 = var20.FRep5/;
                var20 = var21.bind(var22)(var20);
                var13['text'] = var20;
                var17 = var17.handleSubmit;
                var13['onPress'] = var17;
                var13['loading'] = var16;
                if(var16) { _fun0009_ip = 46; continue _fun0009 }
case 47:
                var17 = null;
                var16 = var17 == var19;
case 46:
                if(var16) { _fun0009_ip = 48; continue _fun0009 }
case 49:
                var17 = null;
                var16 = var17 == var18;
case 48:
                var13['disabled'] = var16;
                var13 = var15.bind(var4)(var14, var13);
                var12[2] = var13;
                var9['children'] = var12;
                var9 = var11.bind(var4)(var10, var9);
                var8[3] = var9;
                var5['children'] = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var4.bind(var1)(var7);
    var _closure1_slot21 = var7;
    var4 = 26;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThemeContext;
    var7['contextType'] = var4;
    var4 = 31;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/account/UserSettingsAccountEditPassword.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function EditPasswordWrapper() {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var5 = _closure1_slot0;
            var4 = _closure1_slot3;
            var3 = 27;
            var3 = var4[var3];
            var4 = undefined;
            var5 = var5.bind(var4)(var3);
            var3 = var5.useSettingNavigationRoute;
            var3 = var3.bind(var5)();
            var6 = var3.params;
            var3 = null;
            var7 = var3 == var6;
            var5 = undefined;
            if(var7) { _fun0010_ip = 50; continue _fun0010 }
case 51:
            var5 = var6.isLoginRequiredAction;
case 50:
            var3 = var3 != var5;
            if(!var3) { _fun0010_ip = 52; continue _fun0010 }
case 53:
            var3 = var5;
case 52:
            var _closure2_slot0 = var3;
            var3 = _closure1_slot0;
            var6 = _closure1_slot3;
            var5 = 28;
            var5 = var6[var5];
            var8 = var3.bind(var4)(var5);
            var7 = var8.useStateFromStoresObject;
            var9 = _closure1_slot14;
            var5 = new Array(3);
            var5[0] = var9;
            var9 = _closure1_slot13;
            var5[1] = var9;
            var9 = _closure1_slot12;
            var5[2] = var9;
            var2 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure1_slot14;
                    var1 = var2.getCurrentUser;
                    var8 = var1.bind(var2)();
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 19;
                    var1 = var3[var1];
                    var9 = undefined;
                    var2 = var2.bind(var9)(var1);
                    var1 = var2.getBannerText;
                    var1 = var1.bind(var2)(var8);
                    var6 = null;
                    var2 = var6 != var1;
                    var3 = _closure1_slot13;
                    var1 = var3.getErrors;
                    var11 = var1.bind(var3)();
                    var1 = var3.getSubmitting;
                    var10 = var1.bind(var3)();
                    var1 = var3.getSettings;
                    var7 = var1.bind(var3)();
                    var1 = _closure2_slot0;
                    if(var1) { _fun0011_ip = 54; continue _fun0011 }
case 55:
                    var3 = _closure1_slot1;
                    var12 = _closure1_slot3;
                    var1 = 29;
                    var1 = var12[var1];
                    var12 = var3.bind(var9)(var1);
                    var3 = var6 != var8;
                    var1 = 'EditPasswordWrapper: user cannot be undefined';
                    var1 = var12.bind(var9)(var3, var1);
case 54:
                    var1 = var6 == var8;
                    var14 = undefined;
                    if(var1) { _fun0011_ip = 56; continue _fun0011 }
case 57:
                    var14 = var8.id;
case 56:
                    var3 = var6 != var14;
                    if(!var3) { _fun0011_ip = 58; continue _fun0011 }
case 59:
                    var13 = _closure1_slot12;
                    var12 = var13.requiredActionsIncludes;
                    var1 = _closure1_slot16;
                    var15 = var1.UPDATE_PASSWORD;
                    var1 = new Array(1);
                    var1[0] = var15;
                    var3 = var12.bind(var13)(var14, var1);
case 58:
                    var1 = {};
                    var1['errors'] = var11;
                    var1['submitting'] = var10;
                    var1['settings'] = var7;
                    var1['user'] = var8;
                    var10 = var6 == var8;
                    var7 = undefined;
                    if(var10) { _fun0011_ip = 60; continue _fun0011 }
case 61:
                    var7 = var8.verified;
case 60:
                    var6 = var6 != var7;
                    if(!var6) { _fun0011_ip = 62; continue _fun0011 }
case 63:
                    var6 = var7;
case 62:
                    var1['verified'] = var6;
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var5 = 22;
                    var6 = var10[var5];
                    var6 = var8.bind(var9)(var6);
                    var11 = var6.intl;
                    var7 = var11.string;
                    var6 = var10[var5];
                    var6 = var8.bind(var9)(var6);
                    var6 = var6.t;
                    var6 = var6.WBqMRQ;
                    var6 = var7.bind(var11)(var6);
                    var1['passwordLabel'] = var6;
                    var6 = var10[var5];
                    var6 = var8.bind(var9)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var10[var5];
                    var5 = var8.bind(var9)(var5);
                    var5 = var5.t;
                    var5 = var5["8dM4FO"];
                    var5 = var6.bind(var7)(var5);
                    var1['newPasswordLabel'] = var5;
                    if(!var3) { _fun0011_ip = 64; continue _fun0011 }
case 65:
                    var3 = _closure2_slot0;
case 64:
                    var1['showForcedPasswordUpdate'] = var3;
                    var1['hasBannerText'] = var2;
                    return var1;
                }
            };
            var10 = var7.bind(var8)(var5, var2);
            var2 = 30;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useNavigation;
            var6 = var2.bind(var3)();
            var3 = _closure1_slot17;
            var2 = _closure1_slot21;
            var1 = {};
            var1['navigation'] = var6;
            var11 = var1;
            var5 = copyDataProperties(var11, var10);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();