// app/components_native/ChangeLogStandardTemplate.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var9 = native2;
    var16 = native3;
    var3 = native6;
    var10 = native7;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var16;
    var _closure1_slot2 = var10;
    var1 = function _callSuper(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var6 = arg3;
            var2 = _closure1_slot6;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot5;
            var1 = _closure1_slot23;
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
            var5 = _closure1_slot6;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
 92:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot22 = var1;
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
 70: // try_end0
            _fun0002_ip = 74; continue _fun0002;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot23 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function LinkInner(arg1) {
        var1 = arg1;
        var11 = var1.changelogId;
        var2 = var1.target;
        var _closure2_slot0 = var2;
        var7 = var1.className;
        var5 = var1.children;
        var2 = _closure1_slot0;
        var8 = _closure1_slot2;
        var3 = 14;
        var3 = var8[var3];
        var4 = undefined;
        var12 = var2.bind(var4)(var3);
        var10 = var12.useStateFromStores;
        var3 = _closure1_slot10;
        var9 = new Array(1);
        var9[0] = var3;
        var3 = function() {
            var1 = _closure1_slot10;
            var1 = var1.locale;
            return var1;
        };
        var10 = var10.bind(var12)(var9, var3);
        var3 = 15;
        var3 = var8[var3];
        var9 = var2.bind(var4)(var3);
        var3 = var9.useChangelog;
        var3 = var3.bind(var9)(var11, var10);
        var3 = var3.changelog;
        var _closure2_slot1 = var3;
        var3 = _closure1_slot14;
        var1 = 12;
        var1 = var8[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.LegacyText;
        var1 = {};
        var8 = 'link';
        var1['accessibilityRole'] = var8;
        var1['style'] = var7;
        var6 = function onPress() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 16;
                var3 = var3[var1];
                var1 = undefined;
                var7 = var4.bind(var1)(var3);
                var5 = var7.track;
                var3 = _closure1_slot13;
                var4 = var3.CHANGE_LOG_CTA_CLICKED;
                var3 = {};
                var8 = _closure2_slot1;
                var9 = null;
                var8 = var9 == var8;
                var12 = undefined;
                if(var8) { _fun0003_ip = 70; continue _fun0003 }
 60:
                var8 = _closure2_slot1;
                var12 = var8.date;
 70:
                if(!(var9 == var12)) { _fun0003_ip = 111; continue _fun0003 }
 74:
                var8 = global;
                var8 = var8.Date;
                var10 = var8.prototype;
                var10 = Object.create(var10, {constructor: {value: var8}});
                var16 = var10;
                var8 = new var16[var8](var15);
                var10 = var8 instanceof Object ? var8 : var10;
                var8 = var10.toString;
                var12 = var8.bind(var10)();
 111:
                var8 = _closure2_slot1;
                var10 = var9 == var8;
                var8 = undefined;
                if(var10) { _fun0003_ip = 134; continue _fun0003 }
 124:
                var10 = _closure2_slot1;
                var8 = var10.revision;
 134:
                var9 = var9 != var8;
                var11 = 1;
                if(!var9) { _fun0003_ip = 147; continue _fun0003 }
 144:
                var11 = var8;
 147:
                var8 = global;
                var8 = var8.HermesInternal;
                var10 = var8.concat;
                var9 = '';
                var8 = ':';
                var8 = var10.bind(var9)(var12, var8, var11);
                var3['change_log_id'] = var8;
                var8 = 'inline_link';
                var3['cta_type'] = var8;
                var6 = _closure2_slot0;
                var3['target'] = var6;
                var3 = var5.bind(var7)(var4, var3);
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 17;
                var3 = var7[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.openURL;
                var5 = _closure1_slot0;
                var2 = 18;
                var2 = var7[var2];
                var5 = var5.bind(var1)(var2);
                var2 = var5.sanitizeUrl;
                var2 = var2.bind(var5)(var6);
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var1['onPress'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot24 = var1;
    var1 = function getLinkComponent(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var1 = function(arg1) {
            var4 = _closure1_slot14;
            var3 = _closure1_slot24;
            var2 = {};
            var6 = arg1;
            var7 = var2;
            var1 = copyDataProperties(var7, var6);
            var5 = _closure2_slot0;
            var1 = 'changelogId';
            var2[var1] = var5;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        return var1;
    };
    var _closure1_slot25 = var1;
    var4 = function changelogRules(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var9 = arg1;
            var1 = arguments[1];
            var8 = undefined;
            if(!(var1 === var8)) { _fun0004_ip = 14; continue _fun0004 }
 12:
            var1 = false;
 14:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 19;
            var2 = var4[var2];
            var4 = var3.bind(var8)(var2);
            if(var1) { _fun0004_ip = 103; continue _fun0004 }
 40:
            var2 = var4.getDefaultRules;
            var1 = {};
            var3 = {};
            var5 = _closure1_slot25;
            var5 = var5.bind(var8)(var9);
            var3['Link'] = var5;
            var5 = _closure1_slot21;
            var3['ListItem'] = var5;
            var5 = _closure1_slot19;
            var3['LHeading'] = var5;
            var5 = _closure1_slot19;
            var3['Heading'] = var5;
            var1['components'] = var3;
            var1 = var2.bind(var4)(var1);
            _fun0004_ip = 164; continue _fun0004;
 103:
            var3 = var4.getMessageRules;
            var2 = {};
            var5 = {};
            var7 = _closure1_slot25;
            var7 = var7.bind(var8)(var9);
            var5['Link'] = var7;
            var7 = _closure1_slot21;
            var5['ListItem'] = var7;
            var7 = _closure1_slot19;
            var5['LHeading'] = var7;
            var6 = _closure1_slot19;
            var5['Heading'] = var6;
            var2['components'] = var5;
            var1 = var3.bind(var4)(var2);
 164:
            return var1;
        }
    };
    var _closure1_slot26 = var4;
    var2 = function getRenderChangelog(arg1) {
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 20;
        var2 = var4[var2];
        var5 = undefined;
        var3 = var3.bind(var5)(var2);
        var2 = var3.reactParserFor;
        var4 = _closure1_slot26;
        var1 = arg1;
        var1 = var1.id;
        var1 = var4.bind(var5)(var1);
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot27 = var2;
    var1 = global;
    var8 = var1.Object;
    var6 = var8.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var8)(var3, var1, var5);
    var1 = 0;
    var5 = var10[var1];
    var1 = undefined;
    var5 = var16.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var18 = 1;
    var5 = var10[var18];
    var5 = var16.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var10[var5];
    var5 = var16.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var10[var5];
    var5 = var16.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var10[var5];
    var5 = var16.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var6 = var10[var5];
    var5 = native4;
    var11 = var5.bind(var1)(var6);
    var5 = 6;
    var5 = var10[var5];
    var5 = var9.bind(var1)(var5);
    var6 = var5.View;
    var _closure1_slot8 = var6;
    var12 = var5.StyleSheet;
    var5 = var5.ScrollView;
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var10[var5];
    var5 = var16.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 8;
    var5 = var10[var5];
    var5 = var9.bind(var1)(var5);
    var6 = var5.LocalizedLinks;
    var _closure1_slot11 = var6;
    var6 = var5.SOCIAL_LINKS;
    var _closure1_slot12 = var6;
    var6 = var5.AnalyticEvents;
    var _closure1_slot13 = var6;
    var14 = var5.Fonts;
    var5 = 9;
    var5 = var10[var5];
    var5 = var9.bind(var1)(var5);
    var6 = var5.jsx;
    var _closure1_slot14 = var6;
    var5 = var5.jsxs;
    var _closure1_slot15 = var5;
    var5 = 10;
    var6 = var10[var5];
    var13 = var9.bind(var1)(var6);
    var8 = var13.createLegacyClassComponentStyles;
    var6 = {};
    var15 = {};
    var15['flex'] = var18;
    var6['flex'] = var15;
    var17 = {};
    var15 = 18;
    var17['padding'] = var15;
    var15 = 11;
    var19 = var10[var15];
    var19 = var16.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.BG_BASE_PRIMARY;
    var17['backgroundColor'] = var19;
    var6['container'] = var17;
    var17 = {'marginBottom': 18, 'alignSelf': 'stretch'};
    var6['video'] = var17;
    var17 = {};
    var19 = 'row';
    var17['flexDirection'] = var19;
    var19 = var12.hairlineWidth;
    var17['borderTopWidth'] = var19;
    var19 = var10[var15];
    var19 = var16.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.BG_SURFACE_RAISED;
    var17['backgroundColor'] = var19;
    var19 = var10[var15];
    var19 = var16.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.DIVIDER_STRONG;
    var17['borderTopColor'] = var19;
    var6['footerContainer'] = var17;
    var17 = {'flex': 1, 'alignItems': 'center', 'flexDirection': 'row', 'justifyContent': 'space-between', 'paddingHorizontal': 18};
    var6['footer'] = var17;
    var17 = {'flex': 2, 'alignItems': 'center', 'flexDirection': 'row', 'justifyContent': 'flex-start'};
    var6['leftFooter'] = var17;
    var17 = {'flex': 0, 'alignSelf': 'center'};
    var6['button'] = var17;
    var17 = {};
    var17['marginBottom'] = var5;
    var6['list'] = var17;
    var17 = {};
    var17['flex'] = var18;
    var6['scrollViewContainer'] = var17;
    var6 = var8.bind(var13)(var6);
    var _closure1_slot16 = var6;
    var6 = {};
    var8 = var10[var15];
    var8 = var16.bind(var1)(var8);
    var8 = var8.unsafe_rawColors;
    var8 = var8.GREEN_360;
    var6['added'] = var8;
    var8 = var10[var15];
    var8 = var16.bind(var1)(var8);
    var8 = var8.unsafe_rawColors;
    var8 = var8.RED_400;
    var6['fixed'] = var8;
    var8 = var10[var15];
    var8 = var16.bind(var1)(var8);
    var8 = var8.unsafe_rawColors;
    var8 = var8.YELLOW_300;
    var6['progress'] = var8;
    var8 = var10[var15];
    var8 = var16.bind(var1)(var8);
    var8 = var8.unsafe_rawColors;
    var8 = var8.BRAND_500;
    var6['improved'] = var8;
    var _closure1_slot17 = var6;
    var8 = var12.create;
    var6 = {};
    var13 = {'marginBottom': 14, 'flexDirection': 'row', 'alignItems': 'center'};
    var6['lheading'] = var13;
    var13 = {};
    var17 = 16;
    var13['fontSize'] = var17;
    var14 = var14.PRIMARY_SEMIBOLD;
    var13['fontFamily'] = var14;
    var6['lheadingText'] = var13;
    var13 = {'flexGrow': 1, 'flexShrink': 1, 'flexBasis': 'auto', 'marginLeft': 10, 'height': 2};
    var6['lheadingLine'] = var13;
    var6 = var8.bind(var12)(var6);
    var _closure1_slot18 = var6;
    var8 = var11.PureComponent;
    var6 = function(arg1) {
        var4 = function LHeading() {
            var5 = this;
            var4 = undefined;
            var1 = undefined;
            var6 = _closure1_slot3;
            var3 = _closure2_slot0;
            var6 = var6.bind(var4)(var5, var3);
            var2 = _closure1_slot22;
            var1 = arguments;
            var1 = var2.bind(var4)(var5, var3, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'getStyles';
        var5['key'] = var1;
        var1 = function value(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = arg2;
                var _closure3_slot0 = var2;
                var2 = this;
                var2 = var2.props;
                var4 = var2.className;
                var2 = null;
                if(!(var2 == var4)) { _fun0005_ip = 33; continue _fun0005 }
 29:
                var2 = undefined;
                return var2;
 33:
                var3 = var4.split;
                var2 = ' ';
                var3 = var3.bind(var4)(var2);
                var2 = var3.map;
                var1 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var4 = arg1;
                        var1 = 'marginTop';
                        if(!(var1 !== var4)) { _fun0006_ip = 52; continue _fun0006 }
 11:
                        var1 = _closure3_slot0;
                        var2 = {};
                        var3 = _closure1_slot17;
                        var3 = var3[var4];
                        if(var1) { _fun0006_ip = 43; continue _fun0006 }
 34:
                        var2['backgroundColor'] = var3;
                        var1 = var2;
                        _fun0006_ip = 50; continue _fun0006;
 43:
                        var2['color'] = var3;
                        var1 = var2;
 50:
                        _fun0006_ip = 64; continue _fun0006;
 52:
                        var2 = {};
                        var3 = 10;
                        var2['marginTop'] = var3;
                        var1 = var2;
 64:
                        return var1;
                    }
                };
                var3 = var2.bind(var3)(var1);
                var2 = var3.concat;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var6 = function value() {
            var11 = this;
            var1 = var11.props;
            var10 = var1.children;
            var4 = _closure1_slot15;
            var3 = _closure1_slot8;
            var2 = {};
            var8 = _closure1_slot18;
            var1 = var8.lheading;
            var2['style'] = var1;
            var9 = _closure1_slot14;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 12;
            var5 = var5[var1];
            var1 = undefined;
            var5 = var7.bind(var1)(var5);
            var7 = var5.LegacyText;
            var5 = {};
            var14 = var11.getStyles;
            var13 = var8.lheadingText;
            var12 = true;
            var12 = var14.bind(var11)(var13, var12);
            var5['style'] = var12;
            var5['children'] = var10;
            var7 = var9.bind(var1)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var7 = _closure1_slot14;
            var6 = {};
            var10 = var11.getStyles;
            var9 = var8.lheadingLine;
            var8 = false;
            var8 = var10.bind(var11)(var9, var8);
            var6['style'] = var8;
            var6 = var7.bind(var1)(var3, var6);
            var5[1] = var6;
            var2['children'] = var5;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var6 = var6.bind(var1)(var8);
    var _closure1_slot19 = var6;
    var5 = var10[var5];
    var13 = var9.bind(var1)(var5);
    var12 = var13.createLegacyClassComponentStyles;
    var5 = {};
    var14 = {'width': 7, 'height': 7, 'borderRadius': 3.5, 'marginRight': 13, 'marginTop': 7};
    var8 = 13;
    var17 = var10[var15];
    var17 = var16.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.BG_MOD_STRONG;
    var14['backgroundColor'] = var17;
    var5['bulletPoint'] = var14;
    var14 = {'flexDirection': 'row', 'marginLeft': 4, 'marginBottom': 8};
    var5['listItem'] = var14;
    var14 = {'color': null, 'fontSize': 14, 'lineHeight': 18, 'flex': 1};
    var15 = var10[var15];
    var15 = var16.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.TEXT_NORMAL;
    var14['color'] = var15;
    var5['listText'] = var14;
    var14 = {'flexDirection': 'column', 'flex': 1};
    var5['listItemContent'] = var14;
    var5 = var12.bind(var13)(var5);
    var _closure1_slot20 = var5;
    var12 = var11.PureComponent;
    var5 = function(arg1) {
        var4 = function ListItem() {
            var5 = this;
            var4 = undefined;
            var1 = undefined;
            var6 = _closure1_slot3;
            var3 = _closure2_slot0;
            var6 = var6.bind(var4)(var5, var3);
            var2 = _closure1_slot22;
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
 0:
                var1 = this;
                var2 = var1.props;
                var10 = var2.children;
                var2 = _closure1_slot20;
                var1 = var1.context;
                var4 = undefined;
                var11 = var2.bind(var4)(var1);
                var3 = _closure1_slot15;
                var2 = _closure1_slot8;
                var1 = {};
                var5 = var11.listItem;
                var1['style'] = var5;
                var7 = _closure1_slot14;
                var5 = {};
                var8 = var11.bulletPoint;
                var5['style'] = var8;
                var7 = var7.bind(var4)(var2, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var7 = _closure1_slot14;
                var6 = {};
                var8 = var11.listText;
                var6['style'] = var8;
                var12 = 'function';
                var9 = typeof var10;
                var8 = var10;
                if(!(var12 === var9)) { _fun0007_ip = 129; continue _fun0007 }
 112:
                var9 = {};
                var11 = var11.listText;
                var9['style'] = var11;
                var8 = var10.bind(var4)(var9);
 129:
                var6['children'] = var8;
                var6 = var7.bind(var4)(var2, var6);
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
    var5 = var5.bind(var1)(var12);
    var _closure1_slot21 = var5;
    var12 = var10[var8];
    var12 = var9.bind(var1)(var12);
    var12 = var12.ThemeContext;
    var5['contextType'] = var12;
    var11 = var11.PureComponent;
    var7 = function(arg1) {
        var4 = function ChangeLogStandardModal(arg1) {
            var6 = this;
            var11 = 0;
            var7 = copyRestArgs(var11);
            var3 = _closure1_slot3;
            var5 = _closure2_slot0;
            var4 = undefined;
            var3 = var3.bind(var4)(var6, var5);
            var3 = _closure1_slot22;
            var1 = new Array(0);
            var11 = var1;
            var10 = var7;
            var9 = 0;
            var7 = arraySpread(var11, var10, var9);
            var1 = var3.bind(var4)(var6, var5, var1);
            var _closure3_slot0 = var1;
            var2 = function(arg1) {
                var1 = arg1;
                var3 = var1.nativeEvent;
                var1 = _closure3_slot0;
                var2 = var1.props;
                var1 = var2.onScroll;
                var1 = var1.bind(var2)(var3);
                var1 = undefined;
                return var1;
            };
            var1['handleScroll'] = var2;
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'renderFooter';
        var5['key'] = var1;
        var1 = function value() {
            var2 = _closure1_slot16;
            var1 = this;
            var1 = var1.context;
            var4 = undefined;
            var10 = var2.bind(var4)(var1);
            var3 = _closure1_slot14;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var1 = 21;
            var1 = var19[var1];
            var1 = var18.bind(var4)(var1);
            var2 = var1.SafeAreaPaddingView;
            var1 = {};
            var5 = true;
            var1['bottom'] = var5;
            var5 = var10.footerContainer;
            var1['style'] = var5;
            var7 = _closure1_slot14;
            var6 = _closure1_slot8;
            var5 = {};
            var8 = var10.footer;
            var5['style'] = var8;
            var9 = _closure1_slot15;
            var8 = {};
            var10 = var10.leftFooter;
            var8['style'] = var10;
            var20 = _closure1_slot14;
            var17 = _closure1_slot1;
            var11 = 22;
            var10 = var19[var11];
            var13 = var17.bind(var4)(var10);
            var10 = {};
            var16 = 'button';
            var10['accessibilityRole'] = var16;
            var15 = 23;
            var21 = var19[var15];
            var21 = var18.bind(var4)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var19[var15];
            var21 = var18.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21./84uiI;
            var21 = var22.bind(var23)(var21);
            var10['accessibilityLabel'] = var21;
            var21 = 24;
            var21 = var19[var21];
            var21 = var17.bind(var4)(var21);
            var10['source'] = var21;
            var21 = function onPress() {
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 17;
                var3 = var7[var1];
                var1 = undefined;
                var4 = var6.bind(var1)(var3);
                var3 = var4.openURL;
                var5 = 25;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var2 = _closure1_slot11;
                var2 = var2.TWITTER;
                var2 = var5.bind(var1)(var2);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var10['onPress'] = var21;
            var13 = var20.bind(var4)(var13, var10);
            var10 = new Array(3);
            var10[0] = var13;
            var21 = _closure1_slot14;
            var13 = var19[var11];
            var20 = var17.bind(var4)(var13);
            var13 = {};
            var13['accessibilityRole'] = var16;
            var22 = 26;
            var22 = var19[var22];
            var22 = var17.bind(var4)(var22);
            var13['source'] = var22;
            var22 = var19[var15];
            var22 = var18.bind(var4)(var22);
            var24 = var22.intl;
            var23 = var24.string;
            var22 = var19[var15];
            var22 = var18.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.h0or/v;
            var22 = var23.bind(var24)(var22);
            var13['accessibilityLabel'] = var22;
            var22 = function onPress() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 17;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.openURL;
                var2 = _closure1_slot12;
                var2 = var2.FACEBOOK_URL;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var13['onPress'] = var22;
            var13 = var21.bind(var4)(var20, var13);
            var10[1] = var13;
            var13 = _closure1_slot14;
            var11 = var19[var11];
            var12 = var17.bind(var4)(var11);
            var11 = {};
            var11['accessibilityRole'] = var16;
            var16 = 27;
            var16 = var19[var16];
            var16 = var17.bind(var4)(var16);
            var11['source'] = var16;
            var16 = var19[var15];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var19[var15];
            var15 = var18.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.5uVPyc;
            var15 = var16.bind(var17)(var15);
            var11['accessibilityLabel'] = var15;
            var14 = function onPress() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 17;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.openURL;
                var2 = _closure1_slot12;
                var2 = var2.INSTAGRAM_URL;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var11['onPress'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[2] = var11;
            var8['children'] = var10;
            var8 = var9.bind(var4)(var6, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var6 = function value() {
            var7 = this;
            var1 = var7.props;
            var9 = var1.changeLog;
            var11 = var1.video;
            var2 = _closure1_slot16;
            var1 = var7.context;
            var4 = undefined;
            var8 = var2.bind(var4)(var1);
            var3 = _closure1_slot15;
            var2 = _closure1_slot8;
            var1 = {};
            var5 = var8.flex;
            var1['style'] = var5;
            var6 = _closure1_slot9;
            var5 = {};
            var12 = var8.container;
            var5['contentContainerStyle'] = var12;
            var8 = var8.scrollViewContainer;
            var5['style'] = var8;
            var8 = var7.handleScroll;
            var5['onScroll'] = var8;
            var8 = 3;
            var5['scrollEventThrottle'] = var8;
            var8 = new Array(2);
            var8[0] = var11;
            var10 = _closure1_slot27;
            var11 = var10.bind(var4)(var9);
            var10 = var9.body;
            var9 = false;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var6 = var3.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = var7.renderFooter;
            var6 = var6.bind(var7)();
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var7.bind(var1)(var11);
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var8 = var8.ThemeContext;
    var7['contextType'] = var8;
    var8 = 28;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'components_native/ChangeLogStandardTemplate.tsx';
    var8 = var9.bind(var10)(var8);
    var3['default'] = var7;
    var3['LHeading'] = var6;
    var3['ListItem'] = var5;
    var3['changelogRules'] = var4;
    var3['getRenderChangelog'] = var2;
    return var1;
})();