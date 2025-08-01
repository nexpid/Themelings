// app/modules/user_settings/native/UserSettingsPushNotificationLogs.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var13 = 1;
    var4 = var6[var13];
    var4 = var12.bind(var1)(var4);
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
    var10 = var4.Fonts;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var11 = 7;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_PRIMARY;
    var9['backgroundColor'] = var14;
    var9['flex'] = var13;
    var4['wrap'] = var9;
    var9 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9['paddingHorizontal'] = var13;
    var4['list'] = var9;
    var9 = {'padding': null, 'flexDirection': 'row', 'alignItems': 'center'};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9['padding'] = var13;
    var13 = 'center';
    var4['searchWrap'] = var9;
    var9 = {};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.INPUT_BACKGROUND;
    var9['backgroundColor'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var9['marginLeft'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.md;
    var9['borderRadius'] = var14;
    var14 = 8;
    var15 = var6[var14];
    var15 = var5.bind(var1)(var15);
    var15 = var15.InputHeights;
    var15 = var15.MD;
    var9['height'] = var15;
    var14 = var6[var14];
    var14 = var5.bind(var1)(var14);
    var14 = var14.InputHeights;
    var14 = var14.MD;
    var9['width'] = var14;
    var9['justifyContent'] = var13;
    var9['alignItems'] = var13;
    var4['shareButton'] = var9;
    var9 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var9['paddingBottom'] = var11;
    var4['log'] = var9;
    var9 = {};
    var10 = var10.CODE_BOLD;
    var9['fontFamily'] = var10;
    var4['code'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/UserSettingsPushNotificationLogs.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserSettingsPushNotificationLogs() {
        var5 = _closure1_slot5;
        var2 = var5.useState;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var4 = var1.Storage;
                var3 = var4.get;
                var2 = 'push-notification-logs-query';
                var1 = '';
                var2 = var3.bind(var4)(var2, var1);
                var3 = null;
                var3 = var3 != var2;
                if(!var3) { _fun0001_ip = 64; continue _fun0001 }
 61:
                var1 = var2;
 64:
                return var1;
            }
        };
        var1 = var2.bind(var5)(var1);
        var8 = _closure1_slot4;
        var4 = undefined;
        var7 = 2;
        var1 = var8.bind(var4)(var1, var7);
        var6 = 0;
        var14 = var1[var6];
        var _closure2_slot0 = var14;
        var3 = 1;
        var16 = var1[var3];
        var2 = var5.useState;
        var1 = new Array(0);
        var1 = var2.bind(var5)(var1);
        var2 = var8.bind(var4)(var1, var7);
        var1 = var2[var6];
        var _closure2_slot1 = var1;
        var2 = var2[var3];
        var _closure2_slot2 = var2;
        var10 = var5.useState;
        var2 = new Array(0);
        var2 = var10.bind(var5)(var2);
        var2 = var8.bind(var4)(var2, var7);
        var10 = var2[var6];
        var2 = var2[var3];
        var _closure2_slot3 = var2;
        var6 = var5.useEffect;
        var3 = function() {
            var2 = function _load() {
                var4 = undefined;
                var1 = undefined;
                var3 = _closure1_slot3;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0002_ip = 64; continue _fun0002 }
 7:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 10;
                            var2 = var3[var2];
                            var3 = undefined;
                            var2 = var4.bind(var3)(var2);
                            var2 = var2.bind(var3)();
                            SaveGenerator(address=40);
 38:
                            return var2;
 40:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0002_ip = 61; continue _fun0002 }
 46:
                            var4 = _closure2_slot2;
                            var4 = var4.bind(var3)(var2);
                            return var3;
 61:
                            return var2;
 64:
                            return var1;
                        }
                    };
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                _closure3_slot0 = var4;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var _closure3_slot0 = var2;
            var2 = function load() {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var1 = undefined;
            var2 = var2.bind(var1)();
            var2 = !var2;
            return var1;
        };
        var2 = new Array(0);
        var2 = var6.bind(var5)(var3, var2);
        var3 = var5.useEffect;
        var2 = new Array(2);
        var2[0] = var1;
        var2[1] = var14;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = _closure2_slot0;
                var2 = '';
                if(!(var2 === var4)) { _fun0003_ip = 84; continue _fun0003 }
 17:
                var5 = _closure2_slot3;
                var4 = _closure2_slot1;
                var2 = undefined;
                var4 = var5.bind(var2)(var4);
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 9;
                var4 = var6[var4];
                var4 = var5.bind(var2)(var4);
                var6 = var4.Storage;
                var5 = var6.set;
                var4 = _closure2_slot0;
                var3 = 'push-notification-logs-query';
                var3 = var5.bind(var6)(var3, var4);
                return var2;
 84:
                var2 = global;
                var5 = var2.setTimeout;
                var4 = undefined;
                var3 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
 2: // try_start_0
                        var2 = global;
                        var6 = var2.RegExp;
                        var4 = _closure2_slot0;
                        var2 = var6.prototype;
                        var5 = Object.create(var2, {constructor: {value: var6}});
                        var7 = 'i';
                        var9 = var5;
                        var8 = var4;
                        var2 = new var9[var6](var8, var7, var6);
                        var2 = var2 instanceof Object ? var2 : var5;
                        var _closure4_slot0 = var2;
                        var2 = _closure2_slot3;
                        var5 = _closure2_slot1;
                        var3 = var5.filter;
                        var1 = function(arg1) {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                                var2 = arg1;
                                var5 = var2.type;
                                var3 = var5.match;
                                var1 = _closure4_slot0;
                                var1 = var3.bind(var5)(var1);
                                var3 = null;
                                var1 = var3 != var1;
                                if(var1) { _fun0005_ip = 59; continue _fun0005 }
 35:
                                var7 = var2.title;
                                var6 = var7.match;
                                var5 = _closure4_slot0;
                                var5 = var6.bind(var7)(var5);
                                var1 = var3 != var5;
 59:
                                if(var1) { _fun0005_ip = 95; continue _fun0005 }
 62:
                                var6 = var2.content;
                                var5 = var3 == var6;
                                var2 = undefined;
                                if(var5) { _fun0005_ip = 91; continue _fun0005 }
 76:
                                var5 = var6.match;
                                var4 = _closure4_slot0;
                                var2 = var5.bind(var6)(var4);
 91:
                                var1 = var3 != var2;
 95:
                                return var1;
                            }
                        };
                        var1 = var3.bind(var5)(var1);
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var2 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 9;
                        var1 = var5[var1];
                        var1 = var2.bind(var3)(var1);
                        var3 = var1.Storage;
                        var2 = var3.set;
                        var1 = 'push-notification-logs-query';
                        var1 = var2.bind(var3)(var1, var4);
 126: // try_end0
                        _fun0004_ip = 130; continue _fun0004;
 128: // catch_target0
                        CatchBlockStart(arg_register=0);
 130:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = 300;
                var2 = var5.bind(var4)(var3, var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = global;
                    var3 = var1.clearTimeout;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                return var1;
            }
        };
        var1 = var3.bind(var5)(var1, var2);
        var1 = _closure1_slot9;
        var11 = var1.bind(var4)();
        var _closure2_slot4 = var11;
        var3 = _closure1_slot8;
        var2 = _closure1_slot6;
        var1 = {};
        var5 = var11.wrap;
        var1['style'] = var5;
        var5 = {};
        var6 = var11.searchWrap;
        var5['style'] = var6;
        var8 = _closure1_slot7;
        var7 = _closure1_slot0;
        var12 = _closure1_slot2;
        var6 = 11;
        var6 = var12[var6];
        var6 = var7.bind(var4)(var6);
        var13 = var6.SearchField;
        var6 = {'size': 'md', 'placeholder': 'Filter (regex)'};
        var6['onChange'] = var16;
        var6['defaultValue'] = var14;
        var13 = var8.bind(var4)(var13, var6);
        var6 = new Array(2);
        var6[0] = var13;
        var13 = 12;
        var13 = var12[var13];
        var13 = var7.bind(var4)(var13);
        var14 = var13.PressableOpacity;
        var13 = {};
        var16 = var11.shareButton;
        var13['style'] = var16;
        var16 = 13;
        var17 = var12[var16];
        var17 = var7.bind(var4)(var17);
        var18 = var17.intl;
        var17 = var18.string;
        var16 = var12[var16];
        var16 = var7.bind(var4)(var16);
        var16 = var16.t;
        var16 = var16.leICvr;
        var16 = var17.bind(var18)(var16);
        var13['accessibilityLabel'] = var16;
        var16 = _closure1_slot3;
        var15 = function* () {
            var1 = function* anon_0_() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 120; continue _fun0006 }
 7:
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 10;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=40);
 38:
                    return var2;
 40:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0006_ip = 117; continue _fun0006 }
 46:
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 14;
                    var5 = var9[var5];
                    var7 = var6.bind(var3)(var5);
                    var6 = var7.showShareActionSheet;
                    var5 = {};
                    var8 = _closure1_slot1;
                    var4 = 15;
                    var4 = var9[var4];
                    var8 = var8.bind(var3)(var4);
                    var4 = false;
                    var4 = var8.bind(var3)(var2, var4);
                    var5['message'] = var4;
                    var4 = 'push-notification-logs';
                    var4 = var6.bind(var7)(var5, var4);
                    return var3;
 117:
                    return var2;
 120:
                    return var1;
                }
            };
            return var1;
        };
        var15 = var16.bind(var4)(var15);
        var13['onPress'] = var15;
        var15 = 16;
        var15 = var12[var15];
        var15 = var7.bind(var4)(var15);
        var16 = var15.ShareIcon;
        var15 = {};
        var15 = var8.bind(var4)(var16, var15);
        var13['children'] = var15;
        var13 = var8.bind(var4)(var14, var13);
        var6[1] = var13;
        var5['children'] = var6;
        var6 = var3.bind(var4)(var2, var5);
        var5 = new Array(2);
        var5[0] = var6;
        var6 = 17;
        var6 = var12[var6];
        var6 = var7.bind(var4)(var6);
        var7 = var6.FlashList;
        var6 = {};
        var11 = var11.list;
        var6['contentContainerStyle'] = var11;
        var6['data'] = var10;
        var9 = function renderItem(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var1 = arg1;
                var10 = var1.item;
                var5 = var1.index;
                var1 = var10.silent;
                var13 = '';
                if(!var1) { _fun0007_ip = 32; continue _fun0007 }
 26:
                var13 = '~silent~ ';
 32:
                var4 = _closure1_slot8;
                var3 = _closure1_slot6;
                var2 = {};
                var12 = _closure2_slot4;
                var6 = var12.log;
                var2['style'] = var6;
                var8 = _closure1_slot7;
                var11 = _closure1_slot0;
                var14 = _closure1_slot2;
                var9 = 18;
                var6 = var14[var9];
                var1 = undefined;
                var6 = var11.bind(var1)(var6);
                var7 = var6.Text;
                var6 = {};
                var15 = var12.code;
                var6['style'] = var15;
                var15 = 'text-xs/normal';
                var6['variant'] = var15;
                var15 = global;
                var17 = var15.Date;
                var20 = var10.receivedTimestamp;
                var16 = var17.prototype;
                var16 = Object.create(var16, {constructor: {value: var17}});
                var21 = var16;
                var15 = new var21[var17](var20, var19);
                var16 = var15 instanceof Object ? var15 : var16;
                var15 = var16.toISOString;
                var15 = var15.bind(var16)();
                var6['children'] = var15;
                var7 = var8.bind(var1)(var7, var6);
                var6 = new Array(2);
                var6[0] = var7;
                var7 = var14[var9];
                var7 = var11.bind(var1)(var7);
                var8 = var7.Text;
                var7 = {};
                var15 = var12.code;
                var7['style'] = var15;
                var15 = 'text-sm/normal';
                var7['variant'] = var15;
                var9 = var14[var9];
                var9 = var11.bind(var1)(var9);
                var11 = var9.Text;
                var9 = {'style': null, 'variant': 'text-sm/normal', 'color': 'text-brand'};
                var12 = var12.code;
                var9['style'] = var12;
                var12 = new Array(5);
                var12[0] = var13;
                var13 = '[';
                var12[1] = var13;
                var13 = var10.type;
                var12[2] = var13;
                var13 = ']';
                var12[3] = var13;
                var13 = ' ';
                var12[4] = var13;
                var9['children'] = var12;
                var11 = var4.bind(var1)(var11, var9);
                var9 = new Array(4);
                var9[0] = var11;
                var11 = var10.title;
                var9[1] = var11;
                var11 = ' - ';
                var9[2] = var11;
                var10 = var10.content;
                var9[3] = var10;
                var7['children'] = var9;
                var7 = var4.bind(var1)(var8, var7);
                var6[1] = var7;
                var2['children'] = var6;
                var1 = var4.bind(var1)(var3, var2, var5);
                return var1;
            }
        };
        var6['renderItem'] = var9;
        var9 = 54;
        var6['estimatedItemSize'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();