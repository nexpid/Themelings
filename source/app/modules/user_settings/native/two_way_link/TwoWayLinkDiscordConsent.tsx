// app/modules/user_settings/native/two_way_link/TwoWayLinkDiscordConsent.tsx
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
    var10 = 1;
    var4 = var6[var10];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot6 = var8;
    var4 = var4.ScrollView;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsxs;
    var _closure1_slot8 = var8;
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var13 = 'TwoWayLinkDiscordConsentNative';
    var14 = var7;
    var4 = new var14[var8](var13, var12);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'alignSelf': 'stretch', 'flexShrink': 1};
    var4['scroller'] = var9;
    var9 = {};
    var9['flex'] = var10;
    var4['flex'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/two_way_link/TwoWayLinkDiscordConsent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function TwoWayLinkDiscordConsent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var21 = var2.callbackCode;
            var _closure2_slot0 = var21;
            var20 = var2.callbackState;
            var _closure2_slot1 = var20;
            var16 = var2.platformType;
            var _closure2_slot2 = var16;
            var13 = var2.clientId;
            var11 = var2.scopes;
            var14 = var2.onNext;
            var _closure2_slot3 = var14;
            var9 = var2.onError;
            var _closure2_slot4 = var9;
            var8 = var2.redirectUri;
            var2 = _closure1_slot11;
            var4 = undefined;
            var10 = var2.bind(var4)();
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 7;
            var2 = var15[var2];
            var3 = var12.bind(var4)(var2);
            var2 = var3.useTwoWayLinkStyles;
            var18 = var2.bind(var3)();
            var5 = _closure1_slot5;
            var2 = var5.useState;
            var7 = false;
            var6 = var2.bind(var5)(var7);
            var3 = _closure1_slot4;
            var2 = 2;
            var3 = var3.bind(var4)(var6, var2);
            var2 = 0;
            var19 = var3[var2];
            var2 = 1;
            var2 = var3[var2];
            var _closure2_slot5 = var2;
            var6 = var5.useCallback;
            var2 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                            var2 = undefined;
                            var4 = undefined;
                            var3 = undefined;
                            var7 = undefined;
                            var6 = undefined;
                            var5 = arg1;
                            var7 = var5.location;
case 4: // try_start_0
                            var8 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var5 = 8;
                            var5 = var9[var5];
                            var11 = var8.bind(var2)(var5);
                            var10 = var11.completeTwoWayLink;
                            var16 = _closure2_slot2;
                            var15 = var7;
                            var14 = _closure2_slot0;
                            var13 = _closure2_slot1;
                            var17 = var11;
                            var5 = var17[var10](var16, var15, var14, var13, var12);
                            SaveGenerator(address=86);
case 5:
                            return var5;
case 6:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                            if(var7) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                            var4 = var5;
case 9: // try_end0
                            _fun0002_ip = 10; continue _fun0002;
case 7:
                            return var5;
case 11: // catch_target0
                            CatchBlockStart(arg_register=4);
                            var9 = _closure1_slot10;
                            var8 = var9.error;
                            var12 = _closure2_slot2;
                            var7 = global;
                            var7 = var7.HermesInternal;
                            var11 = var7.concat;
                            var10 = '';
                            var7 = ' link error:';
                            var7 = var11.bind(var10)(var12, var7);
                            var7 = var8.bind(var9)(var7, var5);
                            var7 = var5.body;
                            var6 = var7;
                            var5 = null;
                            var7 = var5 == var7;
                            var5 = undefined;
                            if(var7) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                            var5 = var6.code;
case 12:
                            var3 = var5;
case 10:
                            var5 = var4;
                            var4 = null;
                            if(!(var4 == var5)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                            var4 = _closure2_slot4;
                            var3 = var4.bind(var2)(var3);
                            _fun0002_ip = 16; continue _fun0002;
case 14:
                            var3 = _closure2_slot3;
                            var3 = var3.bind(var2)();
case 16:
                            return var2;
case 2:
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
            var3 = var2.bind(var4)();
            var2 = new Array(5);
            var2[0] = var21;
            var2[1] = var20;
            var2[2] = var16;
            var2[3] = var14;
            var2[4] = var9;
            var9 = var6.bind(var5)(var3, var2);
            var6 = _closure1_slot1;
            var2 = 9;
            var2 = var15[var2];
            var3 = var6.bind(var4)(var2);
            var2 = {'clientId': null, 'scopes': null, 'responseType': 'code', 'callback': null, 'isTrustedName': true, 'isEmbeddedFlow': true};
            var2['clientId'] = var13;
            var2['scopes'] = var11;
            var2['callback'] = var9;
            var13 = true;
            var2['redirectUri'] = var8;
            var2['withBackPressHandler'] = var7;
            var2 = var3.bind(var4)(var2);
            var16 = var2.header;
            var23 = var2.body;
            var22 = var2.appDetails;
            var14 = var2.sendAuthorize;
            var _closure2_slot6 = var14;
            var3 = var5.useCallback;
            var2 = new Array(1);
            var2[0] = var14;
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var3 = _closure2_slot6;
                var4 = null;
                var5 = var4 != var3;
                var4 = 'sendAuthorize not available';
                var4 = var6.bind(var1)(var5, var4);
                var2 = _closure2_slot5;
                var4 = true;
                var2 = var2.bind(var1)(var4);
                var2 = {};
                var2['isAuthorized'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var20 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot9;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var18.container;
            var1['style'] = var5;
            var5 = 11;
            var5 = var15[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var7 = var10.flex;
            var5['style'] = var7;
            var9 = _closure1_slot8;
            var8 = _closure1_slot7;
            var7 = {};
            var10 = var10.scroller;
            var7['style'] = var10;
            var10 = {};
            var11 = var18.body;
            var10['style'] = var11;
            var11 = new Array(2);
            var11[0] = var16;
            var16 = {};
            var21 = var18.bodyContent;
            var16['style'] = var21;
            var21 = new Array(2);
            var21[0] = var23;
            var21[1] = var22;
            var16['children'] = var21;
            var16 = var9.bind(var4)(var2, var16);
            var11[1] = var16;
            var10['children'] = var11;
            var11 = var9.bind(var4)(var2, var10);
            var10 = new Array(2);
            var10[0] = var11;
            var11 = 12;
            var11 = var15[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.SafeAreaPaddingView;
            var11 = {};
            var11['bottom'] = var13;
            var13 = var18.footerContainer;
            var11['style'] = var13;
            var13 = null;
            var13 = var13 != var14;
            if(!var13) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var16 = _closure1_slot9;
            var15 = _closure1_slot6;
            var14 = {};
            var18 = var18.footerButton;
            var14['style'] = var18;
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var17 = 13;
            var17 = var25[var17];
            var17 = var24.bind(var4)(var17);
            var18 = var17.Button;
            var17 = {'size': 'lg', 'variant': 'primary'};
            var21 = 14;
            var22 = var25[var21];
            var22 = var24.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var21 = var25[var21];
            var21 = var24.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.ZN4hkZ;
            var21 = var22.bind(var23)(var21);
            var17['text'] = var21;
            var17['onPress'] = var20;
            var17['loading'] = var19;
            var17 = var16.bind(var4)(var18, var17);
            var14['children'] = var17;
            var13 = var16.bind(var4)(var15, var14);
case 17:
            var11['children'] = var13;
            var11 = var3.bind(var4)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['TwoWayLinkDiscordConsent'] = var2;
    return var1;
})();