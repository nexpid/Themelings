// app/modules/user_settings/native/two_way_link/TwoWayLinkPreConnect.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _authorizeLink() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 8;
                    var2 = var8[var2];
                    var9 = undefined;
                    var5 = var3.bind(var9)(var2);
                    var4 = var5.authorize;
                    var3 = {};
                    var6 = _closure1_slot0;
                    var2 = 9;
                    var2 = var8[var2];
                    var2 = var6.bind(var9)(var2);
                    var2 = var2.TwoWayLinkType;
                    var2 = var2.MOBILE;
                    var3['twoWayLinkType'] = var2;
                    var2 = arg1;
                    var2 = var4.bind(var5)(var2, var3);
                    SaveGenerator(address=89);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var3 = var2.body;
                    var3 = var3.url;
                    var5 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var4 = 10;
                    var4 = var10[var4];
                    var6 = var5.bind(var9)(var4);
                    var5 = var6.openURL;
                    var8 = _closure1_slot0;
                    var4 = 11;
                    var4 = var10[var4];
                    var8 = var8.bind(var9)(var4);
                    var4 = var8.isAndroid;
                    var4 = var4.bind(var8)();
                    var7 = _closure1_slot8;
                    if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var4 = var7.IN_APP;
                    _fun0001_ip = 10; continue _fun0001;
case 8:
                    var4 = var7.CHROME;
case 10:
                    var4 = var5.bind(var6)(var3, var4);
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot13 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
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
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.Image;
    var _closure1_slot6 = var8;
    var4 = var4.View;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.WebBrowserType;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot9 = var8;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var13 = 'TwoWayLink';
    var14 = var7;
    var4 = new var14[var8](var13, var12);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 32;
    var9['marginBottom'] = var10;
    var4['image'] = var9;
    var9 = {};
    var10 = 8;
    var9['marginTop'] = var10;
    var4['redirect'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/two_way_link/TwoWayLinkPreConnect.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function TwoWayLinkPreConnect(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var8 = var3.platformType;
            var _closure2_slot0 = var8;
            var12 = var3.onError;
            var _closure2_slot1 = var12;
            var2 = var3.onNext;
            var _closure2_slot2 = var2;
            var7 = var3.img;
            var18 = var3.imgStyle;
            var21 = var3.title;
            var17 = var3.body;
            var19 = var3.redirectDestination;
            var3 = _closure1_slot12;
            var4 = undefined;
            var15 = var3.bind(var4)();
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 12;
            var3 = var6[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.useTwoWayLinkStyles;
            var11 = var3.bind(var5)();
            var5 = _closure1_slot5;
            var6 = var5.useState;
            var3 = false;
            var10 = var6.bind(var5)(var3);
            var6 = _closure1_slot3;
            var3 = 2;
            var6 = var6.bind(var4)(var10, var3);
            var3 = 0;
            var13 = var6[var3];
            var3 = 1;
            var3 = var6[var3];
            var _closure2_slot3 = var3;
            var3 = var5.useRef;
            var3 = var3.bind(var5)(var4);
            var _closure2_slot4 = var3;
            var10 = var5.useCallback;
            var6 = _closure1_slot4;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0003_ip = 11; continue _fun0003 }
case 3:
                        var3 = undefined;
                        var6 = undefined;
                        var5 = _closure2_slot3;
                        var4 = true;
                        var4 = var5.bind(var3)(var4);
case 12: // try_start_0
                        var5 = _closure2_slot0;
                        var4 = function authorizeLink() {
                            var1 = undefined;
                            var4 = _closure1_slot13;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        var4 = var4.bind(var3)(var5);
                        SaveGenerator(address=48);
case 13:
                        return var4;
case 14:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                        if(var5) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                        var6 = var4;
case 17: // try_end0
                        var7 = _closure2_slot3;
                        var5 = false;
                        var5 = var7.bind(var3)(var5);
                        var9 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var7 = 13;
                        var7 = var8[var7];
                        var9 = var9.bind(var3)(var7);
                        var7 = var9.getCallbackParamsFromURL;
                        var6 = var7.bind(var9)(var6);
                        var6 = var6.state;
                        var7 = _closure1_slot1;
                        var5 = 14;
                        var5 = var8[var5];
                        var8 = var7.bind(var3)(var5);
                        var5 = null;
                        var7 = var5 != var6;
                        var5 = 'Authorize URL state query parameter must be present';
                        var5 = var8.bind(var3)(var7, var5);
                        var5 = _closure2_slot4;
                        var5['current'] = var6;
                        return var3;
case 15:
                        return var4;
case 18: // catch_target0
                        CatchBlockStart(arg_register=3);
                        var2 = _closure2_slot1;
                        var2 = var2.bind(var3)();
                        var2 = undefined;
                        return var2;
case 11:
                        return var1;
                    }
                };
                return var1;
            };
            var6 = var6.bind(var4)(var3);
            var3 = new Array(2);
            var3[0] = var12;
            var3[1] = var8;
            var14 = var10.bind(var5)(var6, var3);
            var6 = var5.useCallback;
            var3 = new Array(2);
            var3[0] = var8;
            var3[1] = var2;
            var2 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.callbackCode;
                    var1 = var1.callbackState;
                    var3 = _closure2_slot4;
                    var3 = var3.current;
                    if(!(var1 !== var3)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var6 = _closure1_slot11;
                    var5 = var6.warn;
                    var9 = _closure2_slot0;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var8 = var3.concat;
                    var7 = '';
                    var3 = ' link: received mismatching callback state!';
                    var3 = var8.bind(var7)(var9, var3);
                    var3 = var5.bind(var6)(var3);
                    _fun0004_ip = 21; continue _fun0004;
case 19:
                    var3 = _closure2_slot2;
                    var2 = {};
                    var2['callbackCode'] = var4;
                    var2['callbackState'] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 21:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var6.bind(var5)(var2, var3);
            var _closure2_slot5 = var6;
            var3 = var5.useEffect;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.subscribe;
                var2 = _closure2_slot5;
                var1 = 'USER_CONNECTIONS_LINK_CALLBACK';
                var1 = var3.bind(var4)(var1, var2);
                var1 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 15;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.unsubscribe;
                    var3 = _closure2_slot5;
                    var2 = 'USER_CONNECTIONS_LINK_CALLBACK';
                    var2 = var4.bind(var5)(var2, var3);
                    return var1;
                };
                return var1;
            };
            var1 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot10;
            var2 = _closure1_slot7;
            var1 = {};
            var5 = var11.container;
            var1['style'] = var5;
            var5 = {};
            var6 = var11.content;
            var5['style'] = var6;
            var10 = _closure1_slot9;
            var8 = _closure1_slot6;
            var6 = {};
            var6['source'] = var7;
            var7 = var15.image;
            var12 = new Array(2);
            var12[0] = var7;
            var7 = null;
            var16 = var7 != var18;
            if(!var16) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var16 = var18;
case 22:
            var12[1] = var16;
            var6['style'] = var12;
            var8 = var10.bind(var4)(var8, var6);
            var6 = new Array(4);
            var6[0] = var8;
            var16 = _closure1_slot9;
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 16;
            var18 = var10[var8];
            var18 = var12.bind(var4)(var18);
            var20 = var18.Text;
            var18 = {'variant': 'heading-xl/bold', 'color': 'header-primary'};
            var22 = var11.title;
            var18['style'] = var22;
            var18['children'] = var21;
            var18 = var16.bind(var4)(var20, var18);
            var6[1] = var18;
            var10 = var10[var8];
            var10 = var12.bind(var4)(var10);
            var12 = var10.Text;
            var10 = {'variant': 'text-md/medium', 'color': 'header-secondary'};
            var18 = var11.body;
            var10['style'] = var18;
            var10['children'] = var17;
            var10 = var16.bind(var4)(var12, var10);
            var6[2] = var10;
            var7 = var7 != var19;
            if(!var7) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var12 = _closure1_slot9;
            var16 = _closure1_slot0;
            var20 = _closure1_slot2;
            var8 = var20[var8];
            var8 = var16.bind(var4)(var8);
            var10 = var8.Text;
            var8 = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var15 = var15.redirect;
            var8['style'] = var15;
            var15 = 17;
            var17 = var20[var15];
            var17 = var16.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.format;
            var15 = var20[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.t;
            var16 = var15.XhlYYm;
            var15 = {};
            var15['redirectUrl'] = var19;
            var15 = var17.bind(var18)(var16, var15);
            var8['children'] = var15;
            var7 = var12.bind(var4)(var10, var8);
case 24:
            var6[3] = var7;
            var5['children'] = var6;
            var6 = var3.bind(var4)(var2, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot9;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var6 = 18;
            var6 = var19[var6];
            var6 = var18.bind(var4)(var6);
            var7 = var6.SafeAreaPaddingView;
            var6 = {};
            var10 = true;
            var6['bottom'] = var10;
            var10 = var11.footerContainer;
            var6['style'] = var10;
            var10 = _closure1_slot7;
            var9 = {};
            var11 = var11.footerButton;
            var9['style'] = var11;
            var11 = 19;
            var11 = var19[var11];
            var11 = var18.bind(var4)(var11);
            var12 = var11.Button;
            var11 = {'variant': 'primary', 'size': 'lg'};
            var15 = 17;
            var16 = var19[var15];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var19[var15];
            var15 = var18.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.3PatS0;
            var15 = var16.bind(var17)(var15);
            var11['text'] = var15;
            var11['onPress'] = var14;
            var11['loading'] = var13;
            var11 = var8.bind(var4)(var12, var11);
            var9['children'] = var11;
            var9 = var8.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['TwoWayLinkPreConnect'] = var2;
    return var1;
})();