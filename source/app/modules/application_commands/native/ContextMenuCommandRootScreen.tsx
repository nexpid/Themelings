// app/modules/application_commands/native/ContextMenuCommandRootScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var10 = 1;
    var4 = var6[var10];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.CONTEXT_MENU_COMMANDS_QUERY_LIMIT;
    var _closure1_slot8 = var7;
    var4 = var4.BuiltInSectionId;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var10;
    var10 = 7;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_16;
    var9['marginHorizontal'] = var12;
    var4['container'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_16;
    var9['paddingTop'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_8;
    var9['paddingBottom'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOWER;
    var9['backgroundColor'] = var10;
    var4['sectionHeader'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_commands/native/ContextMenuCommandRootScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ContextMenuCommandRootScreen(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var7 = var2.navigation;
            var _closure2_slot0 = var7;
            var2 = var2.route;
            var2 = var2.params;
            var16 = var2.channel;
            var _closure2_slot1 = var16;
            var11 = var2.commandType;
            var15 = var2.commandTargetId;
            var _closure2_slot2 = var15;
            var10 = var2.onPressAppCommand;
            var _closure2_slot3 = var10;
            var2 = var2.onClose;
            var _closure2_slot4 = var2;
            var4 = undefined;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var _closure2_slot17 = var4;
            var _closure2_slot18 = var4;
            var _closure2_slot19 = var4;
            var _closure2_slot20 = var4;
            var8 = _closure1_slot0;
            var5 = _closure1_slot3;
            var3 = 8;
            var3 = var5[var3];
            var12 = var8.bind(var4)(var3);
            var9 = var12.useStateFromStores;
            var3 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getGuild;
                var1 = _closure2_slot1;
                var1 = var1.guild_id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var9.bind(var12)(var8, var3);
            var _closure2_slot5 = var14;
            var9 = _closure1_slot5;
            var8 = var9.useRef;
            var3 = false;
            var3 = var8.bind(var9)(var3);
            var _closure2_slot6 = var3;
            var8 = var9.useState;
            var3 = '';
            var13 = var8.bind(var9)(var3);
            var12 = _closure1_slot4;
            var8 = 2;
            var13 = var12.bind(var4)(var13, var8);
            var17 = 0;
            var12 = var13[var17];
            var8 = 1;
            var19 = var13[var8];
            var18 = var3 !== var12;
            var _closure2_slot7 = var18;
            var8 = var9.useEffect;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var2;
            var2 = function() {
                var4 = _closure2_slot0;
                var3 = var4.addListener;
                var2 = 'beforeRemove';
                var1 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var2 = _closure2_slot6;
                        var2 = var2.current;
                        if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                        var4 = _closure2_slot4;
                        var3 = null;
                        var2 = var3 == var4;
case 2:
                        if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var2 = _closure2_slot4;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 4:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2 = var8.bind(var9)(var2, var3);
            var3 = _closure1_slot2;
            var2 = 9;
            var2 = var5[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.useDiscovery;
            var2 = {};
            var8 = {};
            var8['channel'] = var16;
            var9 = 'channel';
            var8['type'] = var9;
            var2['context'] = var8;
            var8 = {};
            var9 = undefined;
            if(!var18) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = var12;
case 6:
            var8['text'] = var9;
            var9 = new Array(1);
            var9[0] = var11;
            var8['commandTypes'] = var9;
            var2['filters'] = var8;
            var8 = {};
            var9 = _closure1_slot8;
            var8['limit'] = var9;
            var9 = !var18;
            var8['includeFrecency'] = var9;
            var9 = undefined;
            if(!var18) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var12 = _closure1_slot0;
            var13 = _closure1_slot3;
            var11 = 10;
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.ScoreMethod;
            var9 = var11.COMMAND_OR_APPLICATION;
case 8:
            var8['scoreMethod'] = var9;
            var2['options'] = var8;
            var12 = true;
            var2['allowFetch'] = var12;
            var5 = var3.bind(var5)(var2);
            var8 = var5.commands;
            _closure2_slot8 = var8;
            var3 = var5.commandsByActiveSection;
            _closure2_slot9 = var3;
            var2 = var5.sectionDescriptors;
            _closure2_slot10 = var2;
            var5 = var5.loading;
            _closure2_slot11 = var5;
            var9 = _closure1_slot5;
            var13 = var9.useMemo;
            var11 = new Array(1);
            var11[0] = var2;
            var2 = function() {
                var2 = {};
                var _closure3_slot0 = var2;
                var4 = _closure2_slot10;
                var3 = var4.forEach;
                var1 = function(arg1) {
                    var3 = arg1;
                    var2 = _closure3_slot0;
                    var1 = var3.id;
                    var2[var1] = var3;
                    var1 = undefined;
                    return var1;
                };
                var1 = var3.bind(var4)(var1);
                var1 = {};
                var1['sections'] = var2;
                return var1;
            };
            var2 = var13.bind(var9)(var2, var11);
            var2 = var2.sections;
            _closure2_slot12 = var2;
            var13 = var9.useCallback;
            var11 = new Array(5);
            var11[0] = var16;
            var11[1] = var15;
            var11[2] = var14;
            var11[3] = var7;
            var11[4] = var10;
            var10 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var4 = null;
                    if(!(var4 != var1)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var3 = _closure2_slot3;
                    var1 = undefined;
                    var1 = var3.bind(var1)();
case 10:
                    var3 = _closure2_slot6;
                    var1 = true;
                    var3['current'] = var1;
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 11;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var3);
                    var3 = {};
                    var6 = arg1;
                    var3['command'] = var6;
                    var6 = {};
                    var3['optionValues'] = var6;
                    var6 = {};
                    var7 = _closure2_slot1;
                    var6['channel'] = var7;
                    var7 = _closure2_slot5;
                    var6['guild'] = var7;
                    var3['context'] = var6;
                    var6 = _closure2_slot2;
                    var3['commandTargetId'] = var6;
                    var3 = var5.bind(var1)(var3);
                    var5 = _closure2_slot0;
                    var3 = var5.getParent;
                    var3 = var3.bind(var5)();
                    if(!(var4 == var3)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var3 = _closure2_slot0;
case 12:
                    var2 = var3.goBack;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var20 = var13.bind(var9)(var10, var11);
            _closure2_slot13 = var20;
            var11 = var9.useCallback;
            var10 = new Array(3);
            var10[0] = var3;
            var10[1] = var7;
            var10[2] = var20;
            var7 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var7 = arg1;
                    var _closure3_slot0 = var7;
                    var4 = _closure2_slot9;
                    var3 = var4.find;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.section;
                        var2 = var1.id;
                        var1 = _closure3_slot0;
                        var1 = var1.id;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var4 = var3.bind(var4)(var1);
                    var3 = null;
                    var5 = var3 == var4;
                    var1 = undefined;
                    var6 = undefined;
                    if(var5) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var6 = var4.data;
case 14:
                    if(!(var3 == var6)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var6 = new Array(0);
case 16:
                    var5 = _closure2_slot0;
                    var4 = var5.navigate;
                    var3 = {};
                    var3['section'] = var7;
                    var3['commands'] = var6;
                    var2 = _closure2_slot13;
                    var3['onPressCommand'] = var2;
                    var2 = 'app';
                    var2 = var4.bind(var5)(var2, var3);
                    return var1;
                }
            };
            var16 = var11.bind(var9)(var7, var10);
            _closure2_slot14 = var16;
            var10 = var9.useMemo;
            var7 = new Array(3);
            var7[0] = var5;
            var11 = var8.length;
            var7[1] = var11;
            var7[2] = var3;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot11;
                    if(var3) { _fun0005_ip = 18; continue _fun0005 }
case 3:
                    var3 = _closure2_slot8;
                    var4 = var3.length;
                    var3 = 0;
                    if(!(var3 !== var4)) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                    var5 = _closure2_slot9;
                    var4 = var5.find;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.section;
                        var2 = var1.id;
                        var1 = _closure1_slot9;
                        var1 = var1.FRECENCY;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var6 = var4.bind(var5)(var3);
                    var4 = _closure2_slot9;
                    var3 = var4.filter;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.section;
                        var2 = var1.id;
                        var1 = _closure1_slot9;
                        var1 = var1.FRECENCY;
                        var1 = var2 !== var1;
                        return var1;
                    };
                    var4 = var3.bind(var4)(var1);
                    var1 = {};
                    var5 = null;
                    var7 = var5 == var6;
                    var3 = undefined;
                    if(var7) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                    var8 = var6.data;
                    var7 = var8.map;
                    var6 = function(arg1) {
                        var1 = {};
                        var2 = 'command';
                        var1['type'] = var2;
                        var2 = arg1;
                        var1['command'] = var2;
                        return var1;
                    };
                    var3 = var7.bind(var8)(var6);
case 20:
                    if(!(var5 == var3)) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                    var3 = new Array(0);
case 22:
                    var1['frecencyItems'] = var3;
                    var3 = var4.map;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.section;
                        var1 = {};
                        var3 = 'app';
                        var1['type'] = var3;
                        var1['section'] = var2;
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    var1['appItems'] = var2;
                    return var1;
case 18:
                    var1 = {};
                    var2 = new Array(0);
                    var1['frecencyItems'] = var2;
                    var2 = new Array(0);
                    var1['appItems'] = var2;
                    return var1;
                }
            };
            var7 = var10.bind(var9)(var3, var7);
            var3 = var7.frecencyItems;
            _closure2_slot15 = var3;
            var7 = var7.appItems;
            _closure2_slot16 = var7;
            var11 = var9.useMemo;
            var10 = new Array(5);
            var10[0] = var5;
            var10[1] = var8;
            var10[2] = var18;
            var10[3] = var3;
            var10[4] = var7;
            var7 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot11;
                    if(var2) { _fun0006_ip = 24; continue _fun0006 }
case 11:
                    var2 = _closure2_slot8;
                    var2 = var2.length;
                    var4 = 0;
                    if(!(var4 !== var2)) { _fun0006_ip = 25; continue _fun0006 }
case 5:
                    var2 = _closure2_slot7;
                    if(var2) { _fun0006_ip = 26; continue _fun0006 }
case 27:
                    var2 = new Array(0);
                    var3 = _closure2_slot15;
                    var3 = var3.length;
                    if(!(var3 > var4)) { _fun0006_ip = 28; continue _fun0006 }
case 14:
                    var5 = var2.push;
                    var3 = _closure2_slot15;
                    var3 = var5.bind(var2)(var3);
case 28:
                    var3 = _closure2_slot16;
                    var3 = var3.length;
                    if(!(var3 > var4)) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                    var4 = var2.push;
                    var3 = _closure2_slot16;
                    var3 = var4.bind(var2)(var3);
case 29:
                    return var2;
case 26:
                    var3 = _closure2_slot8;
                    var2 = var3.map;
                    var1 = function(arg1) {
                        var1 = {};
                        var2 = 'command';
                        var1['type'] = var2;
                        var2 = arg1;
                        var1['command'] = var2;
                        return var1;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = new Array(1);
                    var1[0] = var2;
                    return var1;
case 25:
                    var1 = {};
                    var2 = 'no_commands';
                    var1['type'] = var2;
                    var2 = new Array(1);
                    var2[0] = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    return var1;
case 24:
                    var1 = {};
                    var2 = 'placeholder';
                    var1['type'] = var2;
                    var2 = new Array(1);
                    var2[0] = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    return var1;
                }
            };
            var21 = var11.bind(var9)(var7, var10);
            _closure2_slot17 = var21;
            var10 = _closure1_slot1;
            var22 = _closure1_slot3;
            var7 = 12;
            var7 = var22[var7];
            var11 = var10.bind(var4)(var7);
            var7 = {};
            var7['includeKeyboardHeight'] = var12;
            var7 = var11.bind(var4)(var7);
            var12 = var7.insets;
            var7 = 13;
            var7 = var22[var7];
            var7 = var10.bind(var4)(var7);
            var13 = var7.bind(var4)();
            var11 = var9.useMemo;
            var10 = new Array(1);
            var10[0] = var21;
            var7 = function() {
                var3 = _closure2_slot17;
                var2 = var3.map;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.length;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var11.bind(var9)(var7, var10);
            var7 = _closure1_slot12;
            var7 = var7.bind(var4)();
            _closure2_slot18 = var7;
            var15 = 'text-sm/semibold';
            _closure2_slot19 = var15;
            var11 = _closure1_slot0;
            var10 = 14;
            var10 = var22[var10];
            var11 = var11.bind(var4)(var10);
            var10 = var11.useScaledTextLineHeight;
            var15 = var10.bind(var11)(var15);
            _closure2_slot20 = var15;
            var11 = var9.useCallback;
            var10 = new Array(5);
            var10[0] = var5;
            var22 = var8.length;
            var10[1] = var22;
            var10[2] = var18;
            var3 = var3.length;
            var10[3] = var3;
            var3 = var7.sectionHeader;
            var10[4] = var3;
            var3 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot11;
                    if(var1) { _fun0007_ip = 31; continue _fun0007 }
case 11:
                    var1 = _closure2_slot8;
                    var1 = var1.length;
                    var2 = 0;
                    if(!(var2 !== var1)) { _fun0007_ip = 31; continue _fun0007 }
case 32:
                    var1 = _closure2_slot7;
                    if(var1) { _fun0007_ip = 31; continue _fun0007 }
case 33:
                    var1 = arg1;
                    if(!(var2 === var1)) { _fun0007_ip = 34; continue _fun0007 }
case 35:
                    var1 = _closure2_slot15;
                    var1 = var1.length;
                    if(!(!(var1 > var2))) { _fun0007_ip = 36; continue _fun0007 }
case 34:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var1 = 15;
                    var2 = var7[var1];
                    var4 = undefined;
                    var2 = var5.bind(var4)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var7[var1];
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.t;
                    var1 = var1.PHjkRE;
                    var5 = var2.bind(var3)(var1);
                    _fun0007_ip = 37; continue _fun0007;
case 36:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var1 = 15;
                    var2 = var8[var1];
                    var4 = undefined;
                    var2 = var7.bind(var4)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var8[var1];
                    var1 = var7.bind(var4)(var1);
                    var1 = var1.t;
                    var1 = var1.V0w2ap;
                    var5 = var2.bind(var3)(var1);
case 37:
                    var4 = _closure1_slot10;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 16;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.Text;
                    var1 = {};
                    var7 = _closure2_slot19;
                    var1['variant'] = var7;
                    var7 = 'text-default';
                    var1['color'] = var7;
                    var6 = _closure2_slot18;
                    var6 = var6.sectionHeader;
                    var1['style'] = var6;
                    var1['children'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
case 31:
                    var1 = null;
                    return var1;
                }
            };
            var10 = var11.bind(var9)(var3, var10);
            var11 = var9.useCallback;
            var3 = new Array(4);
            var3[0] = var21;
            var3[1] = var20;
            var3[2] = var16;
            var3[3] = var2;
            var2 = function(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var4 = arg1;
                    var3 = arg2;
                    var1 = _closure2_slot17;
                    var1 = var1[var4];
                    var1 = var1[var3];
                    var _closure3_slot0 = var1;
                    var2 = 0;
                    var7 = var2 === var3;
                    var2 = _closure2_slot17;
                    var2 = var2[var4];
                    var4 = var2.length;
                    var2 = 1;
                    var2 = var4 - var2;
                    var6 = var3 === var2;
                    var3 = var1.type;
                    var5 = 'placeholder';
                    if(!(var5 !== var3)) { _fun0008_ip = 38; continue _fun0008 }
case 39:
                    var8 = 'no_commands';
                    if(!(var8 !== var3)) { _fun0008_ip = 40; continue _fun0008 }
case 21:
                    var2 = 'command';
                    if(!(var2 !== var3)) { _fun0008_ip = 41; continue _fun0008 }
case 42:
                    var2 = 'app';
                    if(!(var2 !== var3)) { _fun0008_ip = 43; continue _fun0008 }
case 44:
                    var2 = undefined;
                    return var2;
case 43:
                    var12 = _closure1_slot10;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 17;
                    var2 = var4[var2];
                    var9 = undefined;
                    var2 = var3.bind(var9)(var2);
                    var4 = var2.ContextMenuCommandAppItem;
                    var3 = {};
                    var2 = var1.section;
                    var3['section'] = var2;
                    var2 = function onPress() {
                        var3 = _closure2_slot14;
                        var1 = _closure3_slot0;
                        var2 = var1.section;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var3['onPress'] = var2;
                    var3['start'] = var7;
                    var3['end'] = var6;
                    var2 = var1.section;
                    var2 = var2.id;
                    var2 = var12.bind(var9)(var4, var3, var2);
                    return var2;
case 41:
                    var9 = _closure1_slot10;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var2 = 17;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var12 = var1.command;
                    var2['item'] = var12;
                    var11 = function onPress() {
                        var3 = _closure2_slot13;
                        var1 = _closure3_slot0;
                        var2 = var1.command;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2['onPress'] = var11;
                    var11 = _closure2_slot12;
                    var10 = var1.command;
                    var10 = var10.applicationId;
                    var10 = var11[var10];
                    var2['section'] = var10;
                    var2['start'] = var7;
                    var2['end'] = var6;
                    var1 = var1.command;
                    var1 = var1.id;
                    var1 = var9.bind(var4)(var3, var2, var1);
                    return var1;
case 40:
                    var4 = _closure1_slot10;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 17;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.ContextMenuCommandEmptyItem;
                    var1 = {};
                    var1['start'] = var7;
                    var1['end'] = var6;
                    var1 = var4.bind(var3)(var2, var1, var8);
                    return var1;
case 38:
                    var4 = _closure1_slot10;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 17;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.ContextMenuCommandLoadingItem;
                    var1 = {};
                    var1['start'] = var7;
                    var1['end'] = var6;
                    var1 = var4.bind(var3)(var2, var1, var5);
                    return var1;
                }
            };
            var11 = var11.bind(var9)(var2, var3);
            var3 = var9.useMemo;
            var2 = new Array(6);
            var2[0] = var5;
            var16 = var8.length;
            var2[1] = var16;
            var2[2] = var18;
            var2[3] = var15;
            var15 = var7.sectionHeader;
            var15 = var15.paddingTop;
            var2[4] = var15;
            var15 = var7.sectionHeader;
            var15 = var15.paddingBottom;
            var2[5] = var15;
            var1 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure2_slot11;
                    var4 = 0;
                    var1 = 0;
                    if(var3) { _fun0009_ip = 45; continue _fun0009 }
case 46:
                    var3 = _closure2_slot8;
                    var3 = var3.length;
                    var1 = 0;
                    if(!(var4 !== var3)) { _fun0009_ip = 45; continue _fun0009 }
case 47:
                    var3 = _closure2_slot7;
                    var1 = 0;
                    if(var3) { _fun0009_ip = 45; continue _fun0009 }
case 4:
                    var4 = _closure2_slot20;
                    var3 = _closure2_slot18;
                    var3 = var3.sectionHeader;
                    var3 = var3.paddingTop;
                    var3 = var4 + var3;
                    var2 = _closure2_slot18;
                    var2 = var2.sectionHeader;
                    var2 = var2.paddingBottom;
                    var1 = var3 + var2;
case 45:
                    return var1;
                }
            };
            var9 = var3.bind(var9)(var1, var2);
            var3 = _closure1_slot11;
            var2 = _closure1_slot6;
            var1 = {};
            var7 = var7.container;
            var1['style'] = var7;
            var7 = var18;
            if(var7) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var5 = !var5;
            if(!var5) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var8 = var8.length;
            var5 = var8 > var17;
case 50:
            var7 = var5;
case 48:
            if(!var7) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var15 = _closure1_slot10;
            var8 = _closure1_slot6;
            var5 = {};
            var16 = {};
            var17 = 0;
            if(!var18) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            var20 = _closure1_slot1;
            var21 = _closure1_slot3;
            var18 = 7;
            var18 = var21[var18];
            var18 = var20.bind(var4)(var18);
            var18 = var18.space;
            var17 = var18.PX_16;
case 54:
            var16['marginBottom'] = var17;
            var5['style'] = var16;
            var18 = _closure1_slot10;
            var22 = _closure1_slot0;
            var23 = _closure1_slot3;
            var16 = 18;
            var16 = var23[var16];
            var16 = var22.bind(var4)(var16);
            var17 = var16.SearchField;
            var16 = {};
            var20 = 'md';
            var16['size'] = var20;
            var16['onChange'] = var19;
            var19 = 15;
            var20 = var23[var19];
            var20 = var22.bind(var4)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var19 = var23[var19];
            var19 = var22.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.m1UwbP;
            var19 = var20.bind(var21)(var19);
            var16['placeholder'] = var19;
            var16 = var18.bind(var4)(var17, var16);
            var5['children'] = var16;
            var7 = var15.bind(var4)(var8, var5);
case 52:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot10;
            var7 = _closure1_slot1;
            var15 = _closure1_slot3;
            var6 = 19;
            var6 = var15[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['sections'] = var14;
            var14 = 'windowSize';
            var6['estimatedListSize'] = var14;
            var6['itemSize'] = var13;
            var12 = var12.bottom;
            var6['insetEnd'] = var12;
            var6['renderItem'] = var11;
            var6['renderSectionHeader'] = var10;
            var6['sectionHeaderSize'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();