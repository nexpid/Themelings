// app/utils/native/ChangeLogUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var4 = metroImportAll;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = function ChangeLogLink(arg1) {
        var2 = arg1;
        var6 = var2.node;
        var8 = var2.output;
        var1 = var2.state;
        var2 = var2.styling;
        var4 = _closure1_slot6;
        var5 = undefined;
        var7 = var4.bind(var5)();
        var4 = _closure1_slot5;
        var2 = var2.components;
        var3 = var2.Link;
        var2 = {};
        var7 = var7.link;
        var2['className'] = var7;
        var7 = var6.target;
        var2['target'] = var7;
        var7 = var6.content;
        var6 = {};
        var13 = var6;
        var12 = var1;
        var9 = copyDataProperties(var13, var12);
        var10 = true;
        var9 = 'inLink';
        var6[var9] = var10;
        var6 = var8.bind(var5)(var7, var6);
        var2['children'] = var6;
        var1 = var1.key;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = function ChangeLogList(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var7 = var2.node;
            var1 = var2.output;
            var _closure2_slot0 = var1;
            var1 = var2.state;
            var _closure2_slot1 = var1;
            var3 = var2.styling;
            var _closure2_slot2 = var3;
            var4 = _closure1_slot6;
            var5 = undefined;
            var8 = var4.bind(var5)();
            var3 = var3.components;
            var4 = var3.List;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot3;
case 2:
            var3 = _closure1_slot5;
            var2 = {};
            var8 = var8.list;
            var2['style'] = var8;
            var8 = var7.items;
            var7 = var8.map;
            var6 = function(arg1, arg2) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var5 = _closure1_slot5;
                var2 = _closure2_slot2;
                var2 = var2.components;
                var4 = var2.ListItem;
                var3 = {};
                var1 = function children(arg1) {
                    var10 = _closure3_slot0;
                    var9 = _closure2_slot0;
                    var8 = _closure2_slot1;
                    var3 = function processListItem(arg1, arg2, arg3, arg4) {
                        var5 = arg1;
                        var1 = arg2;
                        var _closure5_slot0 = var1;
                        var1 = arg3;
                        var _closure5_slot1 = var1;
                        var1 = arg4;
                        var _closure5_slot2 = var1;
                        var3 = function renderText() {
                            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                                var1 = _closure5_slot4;
                                var3 = var1.length;
                                var1 = 0;
                                if(!(var3 > var1)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                                var4 = _closure5_slot3;
                                var3 = var4.push;
                                var8 = _closure1_slot5;
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var1 = 7;
                                var1 = var6[var1];
                                var7 = undefined;
                                var1 = var5.bind(var7)(var1);
                                var6 = var1.LegacyText;
                                var5 = {};
                                var12 = _closure5_slot2;
                                var13 = var5;
                                var1 = copyDataProperties(var13, var12);
                                var10 = _closure5_slot0;
                                var9 = _closure5_slot4;
                                var1 = _closure5_slot1;
                                var9 = var10.bind(var7)(var9, var1);
                                var1 = 'children';
                                var5[var1] = var9;
                                var1 = -1;
                                var1 = var8.bind(var7)(var6, var5, var1);
                                var1 = var3.bind(var4)(var1);
                                var1 = new Array(0);
                                _closure5_slot4 = var1;
case 4:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var _closure5_slot5 = var3;
                        var1 = new Array(0);
                        var _closure5_slot3 = var1;
                        var4 = new Array(0);
                        var _closure5_slot4 = var4;
                        var4 = var5.forEach;
                        var2 = function(arg1, arg2) {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                                var9 = arg1;
                                var2 = var9.type;
                                var1 = 'list';
                                if(!(var1 !== var2)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                                var2 = _closure5_slot4;
                                var1 = var2.push;
                                var1 = var1.bind(var2)(var9);
                                _fun0003_ip = 8; continue _fun0003;
case 6:
                                var2 = _closure5_slot5;
                                var7 = undefined;
                                var2 = var2.bind(var7)();
                                var3 = _closure5_slot3;
                                var2 = var3.push;
                                var6 = _closure1_slot5;
                                var5 = _closure1_slot3;
                                var4 = {};
                                var8 = _closure5_slot0;
                                var1 = _closure5_slot1;
                                var1 = var8.bind(var7)(var9, var1);
                                var4['children'] = var1;
                                var1 = arg2;
                                var1 = var6.bind(var7)(var5, var4, var1);
                                var1 = var2.bind(var3)(var1);
case 8:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var2 = var4.bind(var5)(var2);
                        var2 = undefined;
                        var2 = var3.bind(var2)();
                        return var1;
                    };
                    var11 = undefined;
                    var7 = arg1;
                    var1 = var11[var3](var10, var9, var8, var7, var6);
                    return var1;
                };
                var3['children'] = var1;
                var2 = undefined;
                var1 = arg2;
                var1 = var5.bind(var2)(var4, var3, var1);
                return var1;
            };
            var6 = var7.bind(var8)(var6);
            var2['children'] = var6;
            var1 = var1.key;
            var1 = var3.bind(var5)(var4, var2, var1);
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function ChangeLogParagraph(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var6 = var2.node;
            var7 = var2.output;
            var1 = var2.state;
            var3 = var2.styling;
            var4 = _closure1_slot6;
            var5 = undefined;
            var8 = var4.bind(var5)();
            var9 = var3.components;
            var3 = null;
            var10 = var3 == var9;
            var4 = undefined;
            if(var10) { _fun0004_ip = 9; continue _fun0004 }
case 10:
            var4 = var9.Paragraph;
case 9:
            if(!(var3 == var4)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 7;
            var3 = var10[var3];
            var3 = var9.bind(var5)(var3);
            var4 = var3.LegacyText;
case 11:
            var3 = _closure1_slot5;
            var2 = {};
            var8 = var8.text;
            var2['style'] = var8;
            var6 = var6.content;
            var6 = var7.bind(var5)(var6, var1);
            var2['children'] = var6;
            var1 = var1.key;
            var1 = var3.bind(var5)(var4, var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function ChangeLogImage(arg1) {
        var1 = arg1;
        var7 = var1.node;
        var1 = var1.state;
        var2 = _closure1_slot6;
        var5 = undefined;
        var6 = var2.bind(var5)();
        var4 = _closure1_slot5;
        var3 = _closure1_slot4;
        var2 = {};
        var6 = var6.image;
        var2['style'] = var6;
        var6 = {};
        var9 = _closure1_slot1;
        var10 = _closure1_slot2;
        var8 = 8;
        var8 = var10[var8];
        var9 = var9.bind(var5)(var8);
        var8 = var9.sanitizeUrl;
        var7 = var7.target;
        var7 = var8.bind(var9)(var7);
        var6['uri'] = var7;
        var2['source'] = var6;
        var1 = var1.key;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var1;
    };
    var _closure1_slot10 = var1;
    var1 = function ChangeLogBlockQuote(arg1) {
        var1 = arg1;
        var9 = var1.node;
        var10 = var1.output;
        var1 = var1.state;
        var2 = _closure1_slot6;
        var5 = undefined;
        var11 = var2.bind(var5)();
        var4 = _closure1_slot5;
        var3 = _closure1_slot3;
        var2 = {};
        var7 = var11.container;
        var2['style'] = var7;
        var8 = _closure1_slot5;
        var7 = _closure1_slot0;
        var12 = _closure1_slot2;
        var6 = 7;
        var6 = var12[var6];
        var6 = var7.bind(var5)(var6);
        var7 = var6.LegacyText;
        var6 = {};
        var11 = var11.text;
        var6['style'] = var11;
        var9 = var9.content;
        var9 = var10.bind(var5)(var9, var1);
        var6['children'] = var9;
        var6 = var8.bind(var5)(var7, var6);
        var2['children'] = var6;
        var1 = var1.key;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var2 = 1;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var8 = var2.View;
    var _closure1_slot3 = var8;
    var2 = var2.Image;
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var9 = var6.bind(var1)(var2);
    var8 = var9.createStyles;
    var2 = {};
    var10 = {};
    var11 = 4;
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.BLUE_345;
    var10['color'] = var11;
    var2['link'] = var10;
    var10 = {};
    var11 = 10;
    var10['marginBottom'] = var11;
    var2['list'] = var10;
    var10 = {'alignSelf': 'center', 'flex': 1};
    var2['image'] = var10;
    var10 = {'borderLeftWidth': 2, 'paddingLeft': 8, 'marginBottom': 10};
    var11 = 5;
    var12 = var7[var11];
    var12 = var6.bind(var1)(var12);
    var12 = var12.DARK_PRIMARY_500_LIGHT_PRIMARY_300;
    var10['borderLeftColor'] = var12;
    var2['container'] = var10;
    var10 = {'fontSize': 14, 'lineHeight': 18, 'marginBottom': 8};
    var11 = var7[var11];
    var11 = var6.bind(var1)(var11);
    var11 = var11.DARK_PRIMARY_200_LIGHT_PRIMARY_400;
    var10['color'] = var11;
    var2['text'] = var10;
    var2 = var8.bind(var9)(var2);
    var _closure1_slot6 = var2;
    var2 = 6;
    var2 = var7[var2];
    var8 = var4.bind(var1)(var2);
    var4 = var8.createRules;
    var2 = {};
    var4 = var4.bind(var8)(var2);
    var2 = {};
    var8 = function link(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = {};
        var2 = function react(arg1, arg2, arg3) {
            var4 = _closure1_slot5;
            var3 = _closure1_slot7;
            var2 = {};
            var1 = arg1;
            var2['node'] = var1;
            var1 = arg2;
            var2['output'] = var1;
            var1 = arg3;
            var2['state'] = var1;
            var1 = _closure2_slot0;
            var2['styling'] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1['react'] = var2;
        return var1;
    };
    var2['link'] = var8;
    var8 = function lheading(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = {};
        var2 = function react(arg1, arg2, arg3) {
            var2 = arg1;
            var1 = arg3;
            var5 = _closure1_slot5;
            var3 = _closure2_slot0;
            var3 = var3.components;
            var4 = var3.LHeading;
            var3 = {};
            var6 = var2.className;
            var3['className'] = var6;
            var7 = var2.content;
            var6 = arg2;
            var2 = undefined;
            var6 = var6.bind(var2)(var7, var1);
            var3['children'] = var6;
            var1 = var1.key;
            var1 = var5.bind(var2)(var4, var3, var1);
            return var1;
        };
        var1['react'] = var2;
        return var1;
    };
    var2['lheading'] = var8;
    var8 = function heading(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = {};
        var2 = function react(arg1, arg2, arg3) {
            var2 = arg1;
            var1 = arg3;
            var5 = _closure1_slot5;
            var3 = _closure2_slot0;
            var3 = var3.components;
            var4 = var3.Heading;
            var3 = {};
            var6 = var2.className;
            var3['className'] = var6;
            var6 = var2.level;
            var3['level'] = var6;
            var7 = var2.content;
            var6 = arg2;
            var2 = undefined;
            var6 = var6.bind(var2)(var7, var1);
            var3['children'] = var6;
            var1 = var1.key;
            var1 = var5.bind(var2)(var4, var3, var1);
            return var1;
        };
        var1['react'] = var2;
        return var1;
    };
    var2['heading'] = var8;
    var8 = function list(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = {};
        var2 = function react(arg1, arg2, arg3) {
            var4 = _closure1_slot5;
            var3 = _closure1_slot8;
            var2 = {};
            var1 = arg1;
            var2['node'] = var1;
            var1 = arg2;
            var2['output'] = var1;
            var1 = arg3;
            var2['state'] = var1;
            var1 = _closure2_slot0;
            var2['styling'] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1['react'] = var2;
        return var1;
    };
    var2['list'] = var8;
    var8 = {};
    var9 = function react(arg1, arg2, arg3) {
        var4 = _closure1_slot5;
        var3 = _closure1_slot10;
        var2 = {};
        var1 = arg1;
        var2['node'] = var1;
        var1 = arg2;
        var2['output'] = var1;
        var1 = arg3;
        var2['state'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var8['react'] = var9;
    var2['image'] = var8;
    var8 = {};
    var9 = function react(arg1, arg2, arg3) {
        var4 = _closure1_slot5;
        var3 = _closure1_slot11;
        var2 = {};
        var1 = arg1;
        var2['node'] = var1;
        var1 = arg2;
        var2['output'] = var1;
        var1 = arg3;
        var2['state'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var8['react'] = var9;
    var2['blockQuote'] = var8;
    var5 = function paragraph(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = {};
        var2 = function react(arg1, arg2, arg3) {
            var4 = _closure1_slot5;
            var3 = _closure1_slot9;
            var2 = {};
            var1 = arg1;
            var2['node'] = var1;
            var1 = arg2;
            var2['output'] = var1;
            var1 = arg3;
            var2['state'] = var1;
            var1 = _closure2_slot0;
            var2['styling'] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1['react'] = var2;
        return var1;
    };
    var2['paragraph'] = var5;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'utils/native/ChangeLogUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['baseRules'] = var4;
    var3['customRules'] = var2;
    return var1;
})();