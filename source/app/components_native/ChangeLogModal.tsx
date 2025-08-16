// app/components_native/ChangeLogModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var8;
    var1 = function _callSuper(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var6 = arg3;
            var2 = _closure1_slot7;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot6;
            var1 = _closure1_slot19;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 51; continue _fun0001 }
 38:
            var1 = var9.apply;
            var1 = var1.bind(var9)(var4, var6);
            _fun0001_ip = 92; continue _fun0001;
 51:
            var7 = global;
            var8 = var7.Reflect;
            var7 = var8.construct;
            if(var6) { _fun0001_ip = 71; continue _fun0001 }
 67:
            var6 = new Array(0);
 71:
            var5 = _closure1_slot7;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
 92:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
 2: // try_start_0
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
 72: // try_end0
            _fun0002_ip = 76; continue _fun0002;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot19 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var2 = function ChangeLogScreen(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var11 = var1.onClose;
            var10 = var1.ignoreSafeArea;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 11;
            var1 = var13[var1];
            var5 = undefined;
            var3 = var12.bind(var5)(var1);
            var2 = var3.useLegacyClassComponentStyles;
            var1 = _closure1_slot15;
            var7 = var2.bind(var3)(var1);
            var1 = 25;
            var1 = var13[var1];
            var2 = var12.bind(var5)(var1);
            var1 = var2.useCurrentChangelog;
            var1 = var1.bind(var2)();
            var8 = var1.changelog;
            var _closure2_slot0 = var8;
            var2 = var1.loaded;
            var _closure2_slot1 = var2;
            var3 = var1.clientTooOld;
            var9 = _closure1_slot1;
            var1 = 26;
            var1 = var13[var1];
            var1 = var9.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var9 = var1.width;
            var1 = 27;
            var1 = var13[var1];
            var12 = var12.bind(var5)(var1);
            var1 = var12.useNavigation;
            var12 = var1.bind(var12)();
            var _closure2_slot2 = var12;
            var1 = null;
            if(!(var1 == var11)) { _fun0003_ip = 169; continue _fun0003 }
 162:
            var11 = function e() {
                var2 = _closure2_slot2;
                var1 = var2.goBack;
                var1 = var1.bind(var2)();
                return var1;
            };
 169:
            var15 = _closure1_slot9;
            var14 = var15.useEffect;
            var13 = new Array(2);
            var13[0] = var8;
            var13[1] = var12;
            var12 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 44; continue _fun0004 }
 13:
                    var3 = _closure2_slot2;
                    var2 = var3.setOptions;
                    var1 = {};
                    var4 = function headerTitle() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var4 = _closure1_slot13;
                            var6 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var1 = 28;
                            var1 = var9[var1];
                            var3 = undefined;
                            var1 = var6.bind(var3)(var1);
                            var2 = var1.NavigatorHeader;
                            var1 = {};
                            var5 = 29;
                            var7 = var9[var5];
                            var7 = var6.bind(var3)(var7);
                            var10 = var7.intl;
                            var8 = var10.string;
                            var7 = var9[var5];
                            var7 = var6.bind(var3)(var7);
                            var7 = var7.t;
                            var7 = var7.LRmNAg;
                            var7 = var8.bind(var10)(var7);
                            var1['title'] = var7;
                            var7 = var9[var5];
                            var7 = var6.bind(var3)(var7);
                            var8 = var7.intl;
                            var7 = var8.formatToPlainString;
                            var5 = var9[var5];
                            var5 = var6.bind(var3)(var5);
                            var5 = var5.t;
                            var6 = var5.Fb8xx8;
                            var5 = {};
                            var9 = _closure2_slot0;
                            var12 = var9.date;
                            var9 = null;
                            if(!(var9 != var12)) { _fun0005_ip = 168; continue _fun0005 }
 150:
                            var9 = _closure2_slot0;
                            var12 = var9.date;
                            var9 = '';
                            if(!(var9 === var12)) { _fun0005_ip = 198; continue _fun0005 }
 168:
                            var9 = global;
                            var9 = var9.Date;
                            var12 = var9.prototype;
                            var12 = Object.create(var12, {constructor: {value: var9}});
                            var16 = var12;
                            var9 = new var16[var9](var15);
                            var9 = var9 instanceof Object ? var9 : var12;
                            _fun0005_ip = 243; continue _fun0005;
 198:
                            var12 = _closure1_slot1;
                            var13 = _closure1_slot2;
                            var11 = 30;
                            var11 = var13[var11];
                            var11 = var12.bind(var3)(var11);
                            var10 = _closure2_slot0;
                            var10 = var10.date;
                            var11 = var11.bind(var3)(var10);
                            var10 = var11.toDate;
                            var9 = var10.bind(var11)();
 243:
                            var5['date'] = var9;
                            var5 = var7.bind(var8)(var6, var5);
                            var1['subtitle'] = var5;
                            var1 = var4.bind(var3)(var2, var1);
                            return var1;
                        }
                    };
                    var1['headerTitle'] = var4;
                    var1 = var2.bind(var3)(var1);
 44:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var14.bind(var15)(var12, var13);
            var14 = _closure1_slot9;
            var13 = var14.useEffect;
            var12 = new Array(2);
            var12[0] = var2;
            var12[1] = var8;
            var4 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0006_ip = 20; continue _fun0006 }
 10:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0006_ip = 24; continue _fun0006 }
 20:
                    var1 = undefined;
                    return var1;
 24:
                    var1 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 31;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.markChangelogAsSeen;
                        var1 = _closure2_slot0;
                        var2 = var1.id;
                        var1 = var1.date;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    return var1;
                }
            };
            var4 = var13.bind(var14)(var4, var12);
            if(var3) { _fun0003_ip = 457; continue _fun0003 }
 243:
            if(!(var1 != var8)) { _fun0003_ip = 288; continue _fun0003 }
 247:
            var4 = _closure1_slot13;
            var3 = _closure1_slot17;
            var1 = {};
            var1['onClose'] = var11;
            var1['ignoreSafeArea'] = var10;
            var1['screenWidth'] = var9;
            var1['changeLog'] = var8;
            var1 = var4.bind(var5)(var3, var1);
            _fun0003_ip = 452; continue _fun0003;
 288:
            var4 = _closure1_slot13;
            var3 = _closure1_slot10;
            var8 = {};
            var9 = var7.empty;
            var8['style'] = var9;
            var11 = _closure1_slot13;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var9 = 32;
            var9 = var16[var9];
            var9 = var15.bind(var5)(var9);
            var10 = var9.Text;
            var9 = {};
            var12 = 'text-md/semibold';
            var9['variant'] = var12;
            var12 = 29;
            var13 = var16[var12];
            var13 = var15.bind(var5)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var5)(var12);
            var12 = var12.t;
            if(var2) { _fun0003_ip = 416; continue _fun0003 }
 386:
            var2 = var12.ZTNur6;
            var2 = var13.bind(var14)(var2);
            var9['children'] = var2;
            var2 = var11.bind(var5)(var10, var9);
            var8['children'] = var2;
            var2 = var8;
            _fun0003_ip = 446; continue _fun0003;
 416:
            var12 = var12.O1iRT0;
            var12 = var13.bind(var14)(var12);
            var9['children'] = var12;
            var9 = var11.bind(var5)(var10, var9);
            var8['children'] = var9;
            var2 = var8;
 446:
            var1 = var4.bind(var5)(var3, var2);
 452:
            _fun0003_ip = 587; continue _fun0003;
 457:
            var4 = _closure1_slot13;
            var3 = _closure1_slot10;
            var2 = {};
            var7 = var7.empty;
            var2['style'] = var7;
            var8 = _closure1_slot13;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 32;
            var6 = var13[var6];
            var6 = var12.bind(var5)(var6);
            var7 = var6.Text;
            var6 = {};
            var9 = 'heading-lg/medium';
            var6['variant'] = var9;
            var9 = 29;
            var10 = var13[var9];
            var10 = var12.bind(var5)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.V9ospq;
            var9 = var10.bind(var11)(var9);
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 587:
            return var1;
        }
    };
    var _closure1_slot20 = var2;
    var1 = function hideChangeLog() {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 33;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.popWithKey;
        var2 = _closure1_slot12;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var8[var1];
    var1 = undefined;
    var4 = var14.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var8[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var8[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var8[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var8[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var8[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var6 = var8[var4];
    var4 = metroImportAll;
    var9 = var4.bind(var1)(var6);
    var _closure1_slot9 = var9;
    var4 = 7;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot10 = var4;
    var13 = 8;
    var4 = var8[var13];
    var4 = var7.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.CHANGELOG_MODAL_KEY;
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var6 = var4.jsx;
    var _closure1_slot13 = var6;
    var4 = var4.jsxs;
    var _closure1_slot14 = var4;
    var4 = 11;
    var6 = var8[var4];
    var11 = var7.bind(var1)(var6);
    var10 = var11.createLegacyClassComponentStyles;
    var6 = {};
    var12 = {};
    var15 = 'stretch';
    var12['alignSelf'] = var15;
    var6['video'] = var12;
    var12 = {};
    var12['marginBottom'] = var13;
    var6['videoWrapper'] = var12;
    var12 = {};
    var13 = 12;
    var15 = var8[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.xs;
    var12['borderRadius'] = var15;
    var15 = 'hidden';
    var12['overflow'] = var15;
    var6['videoSpecial'] = var12;
    var12 = {'position': 'absolute', 'width': '100%', 'height': '100%'};
    var6['videoOverlay'] = var12;
    var12 = {'position': 'absolute', 'top': '50%', 'left': '50%', 'marginLeft': 4294967268, 'marginTop': 4294967268, 'borderRadius': null, 'backgroundColor': null, 'width': 56, 'height': 56};
    var15 = var8[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.round;
    var12['borderRadius'] = var15;
    var15 = var8[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_FLOATING;
    var12['backgroundColor'] = var15;
    var6['playButton'] = var12;
    var12 = {'width': 21, 'height': 21};
    var6['playIcon'] = var12;
    var12 = {'width': '100%', 'height': 240, 'alignItems': 'center', 'paddingTop': 48};
    var6['empty'] = var12;
    var6 = var10.bind(var11)(var6);
    var _closure1_slot15 = var6;
    var4 = var8[var4];
    var11 = var7.bind(var1)(var4);
    var10 = var11.createLegacyClassComponentStyles;
    var4 = {};
    var12 = {'width': 7, 'height': 7, 'borderRadius': 3.5, 'marginRight': 13, 'marginTop': 7};
    var6 = 13;
    var15 = var8[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BG_MOD_STRONG;
    var12['backgroundColor'] = var15;
    var4['bulletPoint'] = var12;
    var12 = {'flexDirection': 'row', 'marginLeft': 4, 'marginBottom': 8};
    var4['listItem'] = var12;
    var12 = {'color': null, 'fontSize': 14, 'lineHeight': 18, 'flex': 1};
    var13 = var8[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_NORMAL;
    var12['color'] = var13;
    var4['listText'] = var12;
    var12 = {'flexDirection': 'column', 'flex': 1};
    var4['listItemContent'] = var12;
    var4 = var10.bind(var11)(var4);
    var _closure1_slot16 = var4;
    var10 = var9.PureComponent;
    var4 = function(arg1) {
        var4 = function ListItem() {
            var5 = this;
            var4 = undefined;
            var1 = undefined;
            var6 = _closure1_slot4;
            var3 = _closure2_slot0;
            var6 = var6.bind(var4)(var5, var3);
            var2 = _closure1_slot18;
            var1 = arguments;
            var1 = var2.bind(var4)(var5, var3, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot8;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot5;
        var5 = {};
        var6 = 'render';
        var5['key'] = var6;
        var1 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var1 = this;
                var2 = var1.props;
                var11 = var2.children;
                var2 = _closure1_slot16;
                var1 = var1.context;
                var4 = undefined;
                var12 = var2.bind(var4)(var1);
                var3 = _closure1_slot14;
                var2 = _closure1_slot10;
                var1 = {};
                var5 = var12.listItem;
                var1['style'] = var5;
                var8 = _closure1_slot13;
                var7 = _closure1_slot10;
                var5 = {};
                var9 = var12.bulletPoint;
                var5['style'] = var9;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var8 = _closure1_slot13;
                var7 = _closure1_slot10;
                var6 = {};
                var9 = var12.listText;
                var6['style'] = var9;
                var13 = 'function';
                var10 = typeof var11;
                var9 = var11;
                if(!(var13 === var10)) { _fun0007_ip = 137; continue _fun0007 }
 120:
                var10 = {};
                var12 = var12.listText;
                var10['style'] = var12;
                var9 = var11.bind(var4)(var10);
 137:
                var6['children'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var10);
    var10 = var8[var6];
    var10 = var7.bind(var1)(var10);
    var10 = var10.ThemeContext;
    var4['contextType'] = var10;
    var10 = var9.PureComponent;
    var9 = function(arg1) {
        var4 = function ChangeLog(arg1) {
            var8 = this;
            var5 = 0;
            var12 = 0;
            var9 = copyRestArgs(var12);
            var1 = _closure1_slot4;
            var7 = _closure2_slot0;
            var4 = undefined;
            var1 = var1.bind(var4)(var8, var7);
            var6 = _closure1_slot18;
            var1 = new Array(0);
            var12 = var1;
            var11 = var9;
            var10 = 0;
            var9 = arraySpread(var12, var11, var10);
            var1 = var6.bind(var4)(var8, var7, var1);
            var _closure3_slot0 = var1;
            var1['mountedAt'] = var5;
            var7 = _closure1_slot9;
            var6 = var7.createRef;
            var6 = var6.bind(var7)();
            var1['ref'] = var6;
            var1['maxScrolledPercentage'] = var5;
            var5 = {};
            var6 = false;
            var5['ytVideoReady'] = var6;
            var1['state'] = var5;
            var5 = function(arg1) {
                var1 = arg1;
                var2 = var1.contentOffset;
                var3 = var2.y;
                var2 = var1.layoutMeasurement;
                var2 = var2.height;
                var2 = var3 + var2;
                var1 = var1.contentSize;
                var1 = var1.height;
                var7 = var2 / var1;
                var2 = _closure3_slot0;
                var1 = global;
                var5 = var1.Math;
                var4 = var5.min;
                var6 = var1.Math;
                var3 = var6.max;
                var1 = var2.maxScrolledPercentage;
                var3 = var3.bind(var6)(var1, var7);
                var1 = 1;
                var1 = var4.bind(var5)(var3, var1);
                var2['maxScrolledPercentage'] = var1;
                var1 = undefined;
                return var1;
            };
            var1['handleScroll'] = var5;
            var3 = _closure1_slot3;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0008_ip = 277; continue _fun0008 }
 10:
                        var2 = _closure3_slot0;
                        var4 = var2.props;
                        var2 = var4.changeLog;
                        var7 = var4.screenWidth;
                        var5 = var2.video;
                        var4 = var2.image;
                        var2 = null;
                        if(!(var2 == var5)) { _fun0008_ip = 59; continue _fun0008 }
 52:
                        if(!(var2 != var4)) { _fun0008_ip = 274; continue _fun0008 }
 59:
                        var6 = 36;
                        var10 = var7 - var6;
                        if(!(var2 == var5)) { _fun0008_ip = 78; continue _fun0008 }
 70:
                        var8 = {};
                        var8['uri'] = var4;
                        _fun0008_ip = 88; continue _fun0008;
 78:
                        var4 = {};
                        var4['videoURI'] = var5;
                        var8 = var4;
 88:
                        var4 = _closure3_slot0;
                        var6 = var4.track;
                        var5 = _closure1_slot11;
                        var5 = var5.CHANGE_LOG_VIDEO_INTERACTED;
                        var5 = var6.bind(var4)(var5);
                        var4 = var4.ref;
                        var7 = var4.current;
                        if(!(var2 != var7)) { _fun0008_ip = 266; continue _fun0008 }
 132:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var4 = 15;
                        var4 = var3[var4];
                        var6 = undefined;
                        var5 = var5.bind(var6)(var4);
                        var4 = 14;
                        var4 = var3[var4];
                        var3 = var3.paths;
                        var3 = var5.bind(var6)(var4, var3);
                        SaveGenerator(address=176);
 174:
                        return var3;
 176:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(var4) { _fun0008_ip = 271; continue _fun0008 }
 182:
                        var5 = var3.openMediaModal;
                        var4 = {'initialSources': null, 'muted': false, 'paused': false, 'disableDownload': true, 'shareable': false, 'analyticsSource': 'Change Log'};
                        var9 = {};
                        var12 = var9;
                        var11 = var8;
                        var8 = copyDataProperties(var12, var11);
                        var8 = 'width';
                        var9[var8] = var10;
                        var8 = 9;
                        var10 = var8 * var10;
                        var8 = 16;
                        var10 = var10 / var8;
                        var8 = 'height';
                        var9[var8] = var10;
                        var8 = new Array(1);
                        var8[0] = var9;
                        var4['initialSources'] = var8;
                        var4 = var5.bind(var6)(var4, var7);
 266:
                        var4 = undefined;
                        return var4;
 271:
                        return var3;
 274:
                        return var2;
 277:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var1['playVideo'] = var2;
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'componentDidMount';
        var5['key'] = var1;
        var1 = function value() {
            var3 = this;
            var1 = global;
            var2 = var1.Date;
            var1 = var2.now;
            var1 = var1.bind(var2)();
            var3['mountedAt'] = var1;
            var2 = var3.track;
            var1 = _closure1_slot11;
            var1 = var1.CHANGE_LOG_OPENED;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'componentWillUnmount';
        var5['key'] = var7;
        var7 = function value() {
            var3 = this;
            var2 = var3.track;
            var1 = _closure1_slot11;
            var1 = var1.CHANGE_LOG_CLOSED;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'track';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var5 = arg1;
                var2 = arguments[1];
                var7 = this;
                var1 = undefined;
                if(!(var2 === var1)) { _fun0009_ip = 17; continue _fun0009 }
 15:
                var2 = {};
 17:
                var3 = var7.props;
                var3 = var3.changeLog;
                var4 = null;
                if(!(var4 != var3)) { _fun0009_ip = 265; continue _fun0009 }
 37:
                var6 = {};
                var11 = var3.date;
                var10 = var3.revision;
                var8 = global;
                var3 = var8.HermesInternal;
                var9 = var3.concat;
                var4 = '';
                var3 = ':';
                var3 = var9.bind(var4)(var11, var3, var10);
                var6['change_log_id'] = var3;
                var15 = var6;
                var14 = var2;
                var2 = copyDataProperties(var15, var14);
                var3 = _closure1_slot11;
                var3 = var3.CHANGE_LOG_CLOSED;
                var4 = var6;
                if(!(var5 === var3)) { _fun0009_ip = 234; continue _fun0009 }
 114:
                var3 = {};
                var11 = var8.Math;
                var10 = var11.round;
                var12 = var8.Date;
                var9 = var12.now;
                var12 = var9.bind(var12)();
                var9 = var7.mountedAt;
                var12 = var12 - var9;
                var9 = 1000;
                var9 = var12 / var9;
                var9 = var10.bind(var11)(var9);
                var3['seconds_open'] = var9;
                var9 = var8.parseInt;
                var10 = var7.maxScrolledPercentage;
                var8 = var10.toPrecision;
                var7 = 4;
                var8 = var8.bind(var10)(var7);
                var7 = 10;
                var8 = var9.bind(var1)(var8, var7);
                var7 = 100;
                var7 = var7 * var8;
                var3['max_scrolled_percentage'] = var7;
                var15 = var3;
                var14 = var6;
                var6 = copyDataProperties(var15, var14);
                var4 = var3;
 234:
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 16;
                var2 = var6[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.track;
                var2 = var2.bind(var3)(var5, var4);
 265:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'renderVideo';
        var5['key'] = var7;
        var7 = function value() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var17 = this;
                var _closure3_slot0 = var17;
                var2 = _closure1_slot15;
                var1 = var17.context;
                var4 = undefined;
                var16 = var2.bind(var4)(var1);
                var1 = var17.props;
                var2 = var1.changeLog;
                var3 = var1.screenWidth;
                var5 = var1.onClose;
                var10 = var2.video;
                var1 = var2.image;
                var25 = var2.youtube_video_id;
                var2 = var17.state;
                var11 = var2.ytVideoReady;
                var2 = 36;
                var18 = var3 - var2;
                var2 = 9;
                var3 = var2 * var18;
                var2 = 16;
                var15 = var3 / var2;
                var9 = null;
                if(!(var9 == var10)) { _fun0010_ip = 341; continue _fun0010 }
 110:
                if(!(var9 != var1)) { _fun0010_ip = 125; continue _fun0010 }
 114:
                var19 = {};
                var19['uri'] = var1;
                _fun0010_ip = 351; continue _fun0010;
 125:
                var2 = var9 != var25;
                var1 = null;
                if(!var2) { _fun0010_ip = 339; continue _fun0010 }
 137:
                var6 = _closure1_slot14;
                var3 = _closure1_slot10;
                var2 = {};
                var7 = var16.videoWrapper;
                var2['style'] = var7;
                var2['onAccessibilityEscape'] = var5;
                var12 = _closure1_slot13;
                var8 = _closure1_slot1;
                var20 = _closure1_slot2;
                var7 = 17;
                var7 = var20[var7];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var7['height'] = var15;
                var20 = false;
                var7['play'] = var20;
                var7['videoId'] = var25;
                var20 = function onReady() {
                    var3 = _closure3_slot0;
                    var2 = var3.setState;
                    var1 = {};
                    var4 = true;
                    var1['ytVideoReady'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var7['onReady'] = var20;
                var20 = true;
                var7['useLocalHTML'] = var20;
                var8 = var12.bind(var4)(var8, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var8 = null;
                if(var11) { _fun0010_ip = 325; continue _fun0010 }
 242:
                var20 = _closure1_slot13;
                var12 = _closure1_slot1;
                var21 = _closure1_slot2;
                var11 = 18;
                var11 = var21[var11];
                var12 = var12.bind(var4)(var11);
                var11 = {};
                var21 = var16.videoOverlay;
                var11['style'] = var21;
                var21 = {};
                var22 = global;
                var22 = var22.HermesInternal;
                var24 = var22.concat;
                var23 = 'https://i.ytimg.com/vi/';
                var22 = '/hqdefault.jpg';
                var22 = var24.bind(var23)(var25, var22);
                var21['uri'] = var22;
                var11['source'] = var21;
                var8 = var20.bind(var4)(var12, var11);
 325:
                var7[1] = var8;
                var2['children'] = var7;
                var1 = var6.bind(var4)(var3, var2);
 339:
                return var1;
 341:
                var1 = {};
                var1['videoURI'] = var10;
                var19 = var1;
 351:
                var3 = _closure1_slot13;
                var2 = _closure1_slot10;
                var1 = {};
                var6 = var16.videoWrapper;
                var1['style'] = var6;
                var1['onAccessibilityEscape'] = var5;
                var7 = _closure1_slot14;
                var6 = _closure1_slot10;
                var5 = {};
                var8 = var17.ref;
                var5['ref'] = var8;
                var8 = var16.videoSpecial;
                var5['style'] = var8;
                var12 = _closure1_slot13;
                var11 = _closure1_slot1;
                var20 = _closure1_slot2;
                var8 = 19;
                var8 = var20[var8];
                var11 = var11.bind(var4)(var8);
                var8 = {};
                var20 = var16.video;
                var8['style'] = var20;
                var8['src'] = var19;
                var8['width'] = var18;
                var8['height'] = var15;
                var15 = true;
                var8['paused'] = var15;
                var8['canOpenFullscreen'] = var15;
                var8['unmutedOnFullScreen'] = var15;
                var14 = function onPress() {
                    var3 = _closure3_slot0;
                    var2 = var3.track;
                    var1 = _closure1_slot11;
                    var1 = var1.CHANGE_LOG_VIDEO_INTERACTED;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var8['onPress'] = var14;
                var11 = var12.bind(var4)(var11, var8);
                var8 = new Array(2);
                var8[0] = var11;
                var10 = var9 != var10;
                var9 = null;
                if(!var10) { _fun0010_ip = 698; continue _fun0010 }
 508:
                var12 = _closure1_slot13;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var10 = 20;
                var10 = var19[var10];
                var10 = var18.bind(var4)(var10);
                var11 = var10.PressableOpacity;
                var10 = {'accessibilityLabel': 'Play Video', 'accessibilityRole': 'button'};
                var14 = var16.videoOverlay;
                var10['style'] = var14;
                var14 = var17.playVideo;
                var10['onPress'] = var14;
                var15 = _closure1_slot13;
                var21 = _closure1_slot1;
                var13 = 21;
                var13 = var19[var13];
                var14 = var21.bind(var4)(var13);
                var13 = {'accessibilityLabel': 'Play Video', 'accessibilityRole': 'button'};
                var20 = 22;
                var20 = var19[var20];
                var20 = var21.bind(var4)(var20);
                var13['source'] = var20;
                var17 = var17.playVideo;
                var13['onPress'] = var17;
                var17 = var16.playButton;
                var13['style'] = var17;
                var17 = 23;
                var17 = var19[var17];
                var17 = var18.bind(var4)(var17);
                var17 = var17.IconSizes;
                var17 = var17.CUSTOM;
                var13['iconSize'] = var17;
                var16 = var16.playIcon;
                var13['iconStyle'] = var16;
                var13 = var15.bind(var4)(var14, var13);
                var10['children'] = var13;
                var9 = var12.bind(var4)(var11, var10);
 698:
                var8[1] = var9;
                var5['children'] = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var6 = function value() {
            var5 = this;
            var4 = _closure1_slot13;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 24;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var8 = var5.props;
            var9 = var1;
            var6 = copyDataProperties(var9, var8);
            var6 = var5.renderVideo;
            var7 = var6.bind(var5)();
            var6 = 'video';
            var1[var6] = var7;
            var6 = var5.handleScroll;
            var5 = 'onScroll';
            var1[var5] = var6;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var9.bind(var1)(var10);
    var _closure1_slot17 = var9;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.ThemeContext;
    var9['contextType'] = var6;
    var6 = 35;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'components_native/ChangeLogModal.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function ChangelogModal() {
        var5 = _closure1_slot9;
        var4 = var5.useMemo;
        var3 = function() {
            var1 = {};
            var2 = {};
            var3 = 'CHANGELOG';
            var2['name'] = var3;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 28;
            var5 = var5[var4];
            var4 = undefined;
            var5 = var6.bind(var4)(var5);
            var4 = var5.getHeaderCloseButton;
            var3 = _closure1_slot21;
            var3 = var4.bind(var5)(var3);
            var2['headerLeft'] = var3;
            var3 = function render() {
                var4 = _closure1_slot13;
                var3 = _closure1_slot20;
                var2 = {};
                var1 = _closure1_slot21;
                var2['onClose'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var2['render'] = var3;
            var1['CHANGELOG'] = var2;
            return var1;
        };
        var2 = new Array(0);
        var5 = var4.bind(var5)(var3, var2);
        var4 = _closure1_slot13;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 34;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.Navigator;
        var1 = {};
        var1['screens'] = var5;
        var5 = 'CHANGELOG';
        var1['initialRouteName'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['default'] = var5;
    var3['ListItem'] = var4;
    var3['ChangeLogScreen'] = var2;
    return var1;
})();