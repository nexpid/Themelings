// app/components_native/ChangeLogModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var8;
    var1 = function _callSuper(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var6 = arg3;
            var2 = _closure1_slot6;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot5;
            var1 = _closure1_slot18;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var9.apply;
            var1 = var1.bind(var9)(var4, var6);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var7 = global;
            var8 = var7.Reflect;
            var7 = var8.construct;
            if(var6) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var6 = new Array(0);
case 5:
            var5 = _closure1_slot6;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
case 4:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
case 7: // try_start_0
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
case 8: // try_end0
            _fun0002_ip = 9; continue _fun0002;
case 10: // catch_target0
            CatchBlockStart(arg_register=1);
case 9:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot18 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var2 = function ChangeLogScreen(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var10 = var1.onClose;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 10;
            var1 = var12[var1];
            var5 = undefined;
            var3 = var11.bind(var5)(var1);
            var2 = var3.useLegacyClassComponentStyles;
            var1 = _closure1_slot14;
            var7 = var2.bind(var3)(var1);
            var1 = 23;
            var1 = var12[var1];
            var2 = var11.bind(var5)(var1);
            var1 = var2.useCurrentChangelog;
            var1 = var1.bind(var2)();
            var8 = var1.changelog;
            var _closure2_slot0 = var8;
            var2 = var1.loaded;
            var _closure2_slot1 = var2;
            var3 = var1.clientTooOld;
            var9 = _closure1_slot1;
            var1 = 24;
            var1 = var12[var1];
            var1 = var9.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var9 = var1.width;
            var1 = 25;
            var1 = var12[var1];
            var11 = var11.bind(var5)(var1);
            var1 = var11.useNavigation;
            var11 = var1.bind(var11)();
            var _closure2_slot2 = var11;
            var1 = null;
            if(!(var1 == var10)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var10 = function e() {
                var2 = _closure2_slot2;
                var1 = var2.goBack;
                var1 = var1.bind(var2)();
                return var1;
            };
case 11:
            var14 = _closure1_slot8;
            var13 = var14.useEffect;
            var12 = new Array(2);
            var12[0] = var8;
            var12[1] = var11;
            var11 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var3 = _closure2_slot2;
                    var2 = var3.setOptions;
                    var1 = {};
                    var4 = function headerTitle() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var4 = _closure1_slot12;
                            var6 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var1 = 26;
                            var1 = var9[var1];
                            var3 = undefined;
                            var1 = var6.bind(var3)(var1);
                            var2 = var1.NavigatorHeader;
                            var1 = {};
                            var5 = 27;
                            var7 = var9[var5];
                            var7 = var6.bind(var3)(var7);
                            var10 = var7.intl;
                            var8 = var10.string;
                            var7 = var9[var5];
                            var7 = var6.bind(var3)(var7);
                            var7 = var7.t;
                            var7 = var7.LRmNAl;
                            var7 = var8.bind(var10)(var7);
                            var1['title'] = var7;
                            var7 = var9[var5];
                            var7 = var6.bind(var3)(var7);
                            var8 = var7.intl;
                            var7 = var8.formatToPlainString;
                            var5 = var9[var5];
                            var5 = var6.bind(var3)(var5);
                            var5 = var5.t;
                            var6 = var5.Fb8xx2;
                            var5 = {};
                            var9 = _closure2_slot0;
                            var12 = var9.date;
                            var9 = null;
                            if(!(var9 != var12)) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                            var9 = _closure2_slot0;
                            var12 = var9.date;
                            var9 = '';
                            if(!(var9 === var12)) { _fun0005_ip = 17; continue _fun0005 }
case 15:
                            var9 = global;
                            var9 = var9.Date;
                            var12 = var9.prototype;
                            var12 = Object.create(var12, {constructor: {value: var9}});
                            var16 = var12;
                            var9 = new var16[var9](var15);
                            var9 = var9 instanceof Object ? var9 : var12;
                            _fun0005_ip = 18; continue _fun0005;
case 17:
                            var12 = _closure1_slot1;
                            var13 = _closure1_slot2;
                            var11 = 28;
                            var11 = var13[var11];
                            var11 = var12.bind(var3)(var11);
                            var10 = _closure2_slot0;
                            var10 = var10.date;
                            var11 = var11.bind(var3)(var10);
                            var10 = var11.toDate;
                            var9 = var10.bind(var11)();
case 18:
                            var5['date'] = var9;
                            var5 = var7.bind(var8)(var6, var5);
                            var1['subtitle'] = var5;
                            var1 = var4.bind(var3)(var2, var1);
                            return var1;
                        }
                    };
                    var1['headerTitle'] = var4;
                    var1 = var2.bind(var3)(var1);
case 13:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = var13.bind(var14)(var11, var12);
            var13 = _closure1_slot8;
            var12 = var13.useEffect;
            var11 = new Array(2);
            var11[0] = var2;
            var11[1] = var8;
            var4 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0006_ip = 21; continue _fun0006 }
case 19:
                    var1 = undefined;
                    return var1;
case 21:
                    var1 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 29;
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
            var4 = var12.bind(var13)(var4, var11);
            if(var3) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            if(!(var1 != var8)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var4 = _closure1_slot12;
            var3 = _closure1_slot16;
            var1 = {};
            var1['onClose'] = var10;
            var1['screenWidth'] = var9;
            var1['changeLog'] = var8;
            var1 = var4.bind(var5)(var3, var1);
            _fun0003_ip = 26; continue _fun0003;
case 24:
            var4 = _closure1_slot12;
            var3 = _closure1_slot9;
            var8 = {};
            var9 = var7.empty;
            var8['style'] = var9;
            var11 = _closure1_slot12;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var9 = 30;
            var9 = var16[var9];
            var9 = var15.bind(var5)(var9);
            var10 = var9.Text;
            var9 = {};
            var12 = 'text-md/semibold';
            var9['variant'] = var12;
            var12 = 27;
            var13 = var16[var12];
            var13 = var15.bind(var5)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var5)(var12);
            var12 = var12.t;
            if(var2) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var2 = var12.ZTNur7;
            var2 = var13.bind(var14)(var2);
            var9['children'] = var2;
            var2 = var11.bind(var5)(var10, var9);
            var8['children'] = var2;
            var2 = var8;
            _fun0003_ip = 29; continue _fun0003;
case 27:
            var12 = var12.O1iRT8;
            var12 = var13.bind(var14)(var12);
            var9['children'] = var12;
            var9 = var11.bind(var5)(var10, var9);
            var8['children'] = var9;
            var2 = var8;
case 29:
            var1 = var4.bind(var5)(var3, var2);
case 26:
            _fun0003_ip = 30; continue _fun0003;
case 22:
            var4 = _closure1_slot12;
            var3 = _closure1_slot9;
            var2 = {};
            var7 = var7.empty;
            var2['style'] = var7;
            var8 = _closure1_slot12;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 30;
            var6 = var13[var6];
            var6 = var12.bind(var5)(var6);
            var7 = var6.Text;
            var6 = {};
            var9 = 'heading-lg/medium';
            var6['variant'] = var9;
            var9 = 27;
            var10 = var13[var9];
            var10 = var12.bind(var5)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.V9ospk;
            var9 = var10.bind(var11)(var9);
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 30:
            return var1;
        }
    };
    var _closure1_slot19 = var2;
    var1 = function hideChangeLog() {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 31;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.popWithKey;
        var2 = _closure1_slot11;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot20 = var1;
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
    var4 = var13.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var8[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var8[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var8[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var8[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var6 = var8[var4];
    var4 = metroImportAll;
    var9 = var4.bind(var1)(var6);
    var _closure1_slot8 = var9;
    var4 = 6;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot10 = var4;
    var14 = 8;
    var4 = var8[var14];
    var4 = var7.bind(var1)(var4);
    var4 = var4.CHANGELOG_MODAL_KEY;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var6 = var4.jsx;
    var _closure1_slot12 = var6;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = 10;
    var6 = var8[var4];
    var11 = var7.bind(var1)(var6);
    var10 = var11.createLegacyClassComponentStyles;
    var6 = {};
    var12 = {};
    var15 = 'stretch';
    var12['alignSelf'] = var15;
    var6['video'] = var12;
    var12 = {};
    var12['marginBottom'] = var14;
    var6['videoWrapper'] = var12;
    var14 = {};
    var12 = 11;
    var15 = var8[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.xs;
    var14['borderRadius'] = var15;
    var15 = 'hidden';
    var14['overflow'] = var15;
    var6['videoSpecial'] = var14;
    var14 = {'position': 'absolute', 'width': '100%', 'height': '100%'};
    var6['videoOverlay'] = var14;
    var14 = {'position': 'absolute', 'top': '50%', 'left': '50%', 'marginLeft': 4294967268, 'marginTop': 4294967268, 'borderRadius': null, 'backgroundColor': null, 'width': 56, 'height': 56};
    var15 = var8[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.round;
    var14['borderRadius'] = var15;
    var15 = var8[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_SURFACE_HIGH;
    var14['backgroundColor'] = var15;
    var6['playButton'] = var14;
    var14 = {'width': 21, 'height': 21};
    var6['playIcon'] = var14;
    var14 = {'width': '100%', 'height': 240, 'alignItems': 'center', 'paddingTop': 48};
    var6['empty'] = var14;
    var6 = var10.bind(var11)(var6);
    var _closure1_slot14 = var6;
    var4 = var8[var4];
    var10 = var7.bind(var1)(var4);
    var6 = var10.createLegacyClassComponentStyles;
    var4 = {};
    var11 = {'width': 7, 'height': 7, 'borderRadius': 3.5, 'marginRight': 13, 'marginTop': 7};
    var14 = var8[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_MOD_STRONG;
    var11['backgroundColor'] = var14;
    var4['bulletPoint'] = var11;
    var11 = {'flexDirection': 'row', 'marginLeft': 4, 'marginBottom': 8};
    var4['listItem'] = var11;
    var11 = {'color': null, 'fontSize': 14, 'lineHeight': 18, 'flex': 1};
    var12 = var8[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_DEFAULT;
    var11['color'] = var12;
    var4['listText'] = var11;
    var11 = {'flexDirection': 'column', 'flex': 1};
    var4['listItemContent'] = var11;
    var4 = var6.bind(var10)(var4);
    var _closure1_slot15 = var4;
    var6 = var9.PureComponent;
    var4 = function(arg1) {
        var4 = function ListItem() {
            var5 = this;
            var4 = undefined;
            var1 = undefined;
            var6 = _closure1_slot3;
            var3 = _closure2_slot0;
            var6 = var6.bind(var4)(var5, var3);
            var2 = _closure1_slot17;
            var1 = arguments;
            var1 = var2.bind(var4)(var5, var3, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot7;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot4;
        var5 = {};
        var6 = 'render';
        var5['key'] = var6;
        var1 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = this;
                var2 = var1.props;
                var11 = var2.children;
                var2 = _closure1_slot15;
                var1 = var1.context;
                var4 = undefined;
                var12 = var2.bind(var4)(var1);
                var3 = _closure1_slot13;
                var2 = _closure1_slot9;
                var1 = {};
                var5 = var12.listItem;
                var1['style'] = var5;
                var8 = _closure1_slot12;
                var7 = _closure1_slot9;
                var5 = {};
                var9 = var12.bulletPoint;
                var5['style'] = var9;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var8 = _closure1_slot12;
                var7 = _closure1_slot9;
                var6 = {};
                var9 = var12.listText;
                var6['style'] = var9;
                var13 = 'function';
                var10 = typeof var11;
                var9 = var11;
                if(!(var13 === var10)) { _fun0007_ip = 31; continue _fun0007 }
case 32:
                var10 = {};
                var12 = var12.listText;
                var10['style'] = var12;
                var9 = var11.bind(var4)(var10);
case 31:
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
    var4 = var4.bind(var1)(var6);
    var6 = 12;
    var10 = var8[var6];
    var10 = var7.bind(var1)(var10);
    var10 = var10.ThemeContext;
    var4['contextType'] = var10;
    var10 = var9.PureComponent;
    var9 = function(arg1) {
        var4 = function ChangeLog(arg1) {
            var8 = this;
            var3 = 0;
            var12 = 0;
            var9 = copyRestArgs(var12);
            var1 = _closure1_slot3;
            var7 = _closure2_slot0;
            var6 = undefined;
            var1 = var1.bind(var6)(var8, var7);
            var5 = _closure1_slot17;
            var1 = new Array(0);
            var12 = var1;
            var11 = var9;
            var10 = 0;
            var9 = arraySpread(var12, var11, var10);
            var1 = var5.bind(var6)(var8, var7, var1);
            var _closure3_slot0 = var1;
            var1['mountedAt'] = var3;
            var5 = _closure1_slot8;
            var4 = var5.createRef;
            var4 = var4.bind(var5)();
            var1['ref'] = var4;
            var1['maxScrolledPercentage'] = var3;
            var3 = {};
            var4 = false;
            var3['ytVideoReady'] = var4;
            var1['state'] = var3;
            var3 = function(arg1) {
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
            var1['handleScroll'] = var3;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure3_slot0;
                    var3 = var1.props;
                    var1 = var3.changeLog;
                    var6 = var3.screenWidth;
                    var4 = var1.video;
                    var3 = var1.image;
                    var1 = null;
                    if(!(var1 == var4)) { _fun0008_ip = 33; continue _fun0008 }
case 34:
                    if(!(var1 != var3)) { _fun0008_ip = 35; continue _fun0008 }
case 33:
                    var5 = 36;
                    var8 = var6 - var5;
                    if(!(var1 == var4)) { _fun0008_ip = 36; continue _fun0008 }
case 37:
                    var6 = {};
                    var6['uri'] = var3;
                    _fun0008_ip = 38; continue _fun0008;
case 36:
                    var3 = {};
                    var3['videoURI'] = var4;
                    var6 = var3;
case 38:
                    var3 = _closure3_slot0;
                    var5 = var3.track;
                    var4 = _closure1_slot10;
                    var4 = var4.CHANGE_LOG_VIDEO_INTERACTED;
                    var4 = var5.bind(var3)(var4);
                    var3 = var3.ref;
                    var5 = var3.current;
                    if(!(var1 != var5)) { _fun0008_ip = 39; continue _fun0008 }
case 40:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 13;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.openMediaModal;
                    var2 = {'initialSources': null, 'disableDownload': true, 'shareable': false, 'analyticsSource': 'Change Log'};
                    var7 = {};
                    var10 = var7;
                    var9 = var6;
                    var6 = copyDataProperties(var10, var9);
                    var6 = 'width';
                    var7[5] = var8;
                    var6 = 9;
                    var8 = var6 * var8;
                    var6 = 16;
                    var8 = var8 / var6;
                    var6 = 'height';
                    var7[5] = var8;
                    var6 = new Array(1);
                    var6[0] = var7;
                    var2['initialSources'] = var6;
                    var2['originViewOrOriginLayout'] = var5;
                    var2 = var3.bind(var4)(var2);
case 39:
                    var2 = undefined;
                    return var2;
case 35:
                    return var1;
                }
            };
            var1['playVideo'] = var2;
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
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
            var1 = _closure1_slot10;
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
            var1 = _closure1_slot10;
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
case 0:
                var5 = arg1;
                var2 = arguments[1];
                var7 = this;
                var1 = undefined;
                if(!(var2 === var1)) { _fun0009_ip = 41; continue _fun0009 }
case 42:
                var2 = {};
case 41:
                var3 = var7.props;
                var3 = var3.changeLog;
                var4 = null;
                if(!(var4 != var3)) { _fun0009_ip = 43; continue _fun0009 }
case 44:
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
                var3 = _closure1_slot10;
                var3 = var3.CHANGE_LOG_CLOSED;
                var4 = var6;
                if(!(var5 === var3)) { _fun0009_ip = 45; continue _fun0009 }
case 46:
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
case 45:
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 14;
                var2 = var6[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.track;
                var2 = var2.bind(var3)(var5, var4);
case 43:
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
case 0:
                var17 = this;
                var _closure3_slot0 = var17;
                var2 = _closure1_slot14;
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
                var2 = var2 * var18;
                var21 = 16;
                var15 = var2 / var21;
                var9 = null;
                if(!(var9 == var10)) { _fun0010_ip = 47; continue _fun0010 }
case 48:
                if(!(var9 != var1)) { _fun0010_ip = 49; continue _fun0010 }
case 46:
                var19 = {};
                var19['uri'] = var1;
                _fun0010_ip = 50; continue _fun0010;
case 49:
                var2 = var9 != var25;
                var1 = null;
                if(!var2) { _fun0010_ip = 51; continue _fun0010 }
case 31:
                var6 = _closure1_slot13;
                var3 = _closure1_slot9;
                var2 = {};
                var7 = var16.videoWrapper;
                var2['style'] = var7;
                var2['onAccessibilityEscape'] = var5;
                var12 = _closure1_slot12;
                var8 = _closure1_slot1;
                var20 = _closure1_slot2;
                var7 = 15;
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
                if(var11) { _fun0010_ip = 52; continue _fun0010 }
case 53:
                var20 = _closure1_slot12;
                var12 = _closure1_slot1;
                var11 = _closure1_slot2;
                var11 = var11[var21];
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
case 52:
                var7[1] = var8;
                var2['children'] = var7;
                var1 = var6.bind(var4)(var3, var2);
case 51:
                return var1;
case 47:
                var1 = {};
                var1['videoURI'] = var10;
                var19 = var1;
case 50:
                var3 = _closure1_slot12;
                var2 = _closure1_slot9;
                var1 = {};
                var6 = var16.videoWrapper;
                var1['style'] = var6;
                var1['onAccessibilityEscape'] = var5;
                var7 = _closure1_slot13;
                var6 = _closure1_slot9;
                var5 = {};
                var8 = var17.ref;
                var5['ref'] = var8;
                var8 = var16.videoSpecial;
                var5['style'] = var8;
                var12 = _closure1_slot12;
                var11 = _closure1_slot1;
                var20 = _closure1_slot2;
                var8 = 17;
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
                    var1 = _closure1_slot10;
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
                if(!var10) { _fun0010_ip = 54; continue _fun0010 }
case 55:
                var12 = _closure1_slot12;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var10 = 18;
                var10 = var19[var10];
                var10 = var18.bind(var4)(var10);
                var11 = var10.PressableOpacity;
                var10 = {'accessibilityLabel': 'Play Video', 'accessibilityRole': 'button'};
                var14 = var16.videoOverlay;
                var10['style'] = var14;
                var14 = var17.playVideo;
                var10['onPress'] = var14;
                var15 = _closure1_slot12;
                var21 = _closure1_slot1;
                var13 = 19;
                var13 = var19[var13];
                var14 = var21.bind(var4)(var13);
                var13 = {'accessibilityLabel': 'Play Video', 'accessibilityRole': 'button'};
                var20 = 20;
                var20 = var19[var20];
                var20 = var21.bind(var4)(var20);
                var13['source'] = var20;
                var17 = var17.playVideo;
                var13['onPress'] = var17;
                var17 = var16.playButton;
                var13['style'] = var17;
                var17 = 21;
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
case 54:
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
            var4 = _closure1_slot12;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 22;
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
            var1[5] = var7;
            var6 = var5.handleScroll;
            var5 = 'onScroll';
            var1[4] = var6;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var9.bind(var1)(var10);
    var _closure1_slot16 = var9;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.ThemeContext;
    var9['contextType'] = var6;
    var6 = 33;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'components_native/ChangeLogModal.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function ChangelogModal() {
        var5 = _closure1_slot8;
        var4 = var5.useMemo;
        var3 = function() {
            var1 = {};
            var2 = {};
            var3 = 'CHANGELOG';
            var2['name'] = var3;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 26;
            var5 = var5[var4];
            var4 = undefined;
            var5 = var6.bind(var4)(var5);
            var4 = var5.getHeaderCloseButton;
            var3 = _closure1_slot20;
            var3 = var4.bind(var5)(var3);
            var2['headerLeft'] = var3;
            var3 = function render() {
                var4 = _closure1_slot12;
                var3 = _closure1_slot19;
                var2 = {};
                var1 = _closure1_slot20;
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
        var4 = _closure1_slot12;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 32;
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