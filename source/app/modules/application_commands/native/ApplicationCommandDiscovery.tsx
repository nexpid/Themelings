// app/modules/application_commands/native/ApplicationCommandDiscovery.tsx
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
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3["@@iterator"];
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot19;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot19;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
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
    var7 = var4.View;
    var _closure1_slot6 = var7;
    var4 = var4.SectionList;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.BuiltInSectionId;
    var _closure1_slot8 = var7;
    var4 = var4.DISCOVERY_COMMANDS_QUERY_LIMIT;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ITEM_HEIGHT;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AUTOCOMPLETE_ROW_HEIGHT;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot12 = var7;
    var4 = var4.SectionListElementType;
    var _closure1_slot13 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot14 = var7;
    var7 = var4.Fragment;
    var _closure1_slot15 = var7;
    var4 = var4.jsxs;
    var _closure1_slot16 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var10;
    var4['discoveryWrapper'] = var9;
    var9 = {'height': 50, 'width': 50, 'marginBottom': 16};
    var4['noCommandsImage'] = var9;
    var9 = {'padding': 0, 'height': 100};
    var4['noCommandsContainer'] = var9;
    var9 = {};
    var10 = 10;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_SURFACE_HIGH;
    var9['backgroundColor'] = var10;
    var4['commandsList'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot17 = var4;
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_commands/native/ApplicationCommandDiscovery.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ApplicationCommandDiscovery(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var8 = var1.style;
            var2 = var1.onPressSlashItem;
            var _closure2_slot0 = var2;
            var15 = var1.onHeightChange;
            var _closure2_slot1 = var15;
            var2 = var1.channel;
            var _closure2_slot2 = var2;
            var13 = var1.canOnlyUseTextCommands;
            var4 = undefined;
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
            var1 = _closure1_slot17;
            var18 = var1.bind(var4)();
            var _closure2_slot3 = var18;
            var19 = _closure1_slot0;
            var21 = _closure1_slot3;
            var1 = 11;
            var1 = var21[var1];
            var3 = var19.bind(var4)(var1);
            var1 = var3.useFontScale;
            var1 = var1.bind(var3)();
            var3 = global;
            var7 = var3.Math;
            var6 = var7.max;
            var3 = _closure1_slot11;
            var1 = var1 * var3;
            var3 = var6.bind(var7)(var1, var3);
            var _closure2_slot4 = var3;
            var9 = _closure1_slot5;
            var1 = var9.useRef;
            var12 = null;
            var20 = var1.bind(var9)(var12);
            var _closure2_slot5 = var20;
            var6 = var9.useState;
            var1 = 0;
            var10 = var6.bind(var9)(var1);
            var7 = _closure1_slot4;
            var6 = 2;
            var6 = var7.bind(var4)(var10, var6);
            var1 = var6[var1];
            var _closure2_slot6 = var1;
            var14 = 1;
            var16 = var6[var14];
            var _closure2_slot7 = var16;
            var7 = var9.useRef;
            var6 = false;
            var6 = var7.bind(var9)(var6);
            var _closure2_slot8 = var6;
            var6 = 12;
            var6 = var21[var6];
            var9 = var19.bind(var4)(var6);
            var7 = var9.useCommandDiscoveryManager;
            var6 = function(arg1) {
                var1 = arg1;
                var1 = var1.initialSectionId;
                return var1;
            };
            var23 = var7.bind(var9)(var6);
            var _closure2_slot9 = var23;
            var7 = _closure1_slot2;
            var6 = 13;
            var6 = var21[var6];
            var10 = var7.bind(var4)(var6);
            var7 = var10.useDiscovery;
            var6 = {};
            var9 = {};
            var9['channel'] = var2;
            var17 = 'channel';
            var9['type'] = var17;
            var6['context'] = var9;
            var9 = {};
            var17 = 14;
            var17 = var21[var17];
            var17 = var19.bind(var4)(var17);
            var17 = var17.ApplicationCommandType;
            var19 = var17.CHAT;
            var17 = new Array(1);
            var17[0] = var19;
            var9['commandTypes'] = var17;
            var19 = _closure1_slot0;
            var21 = _closure1_slot3;
            var17 = 15;
            var17 = var21[var17];
            var17 = var19.bind(var4)(var17);
            var19 = var17.BuiltInCommandFilter;
            if(var13) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var17 = var19.ALLOW;
            _fun0004_ip = 38; continue _fun0004;
case 36:
            var17 = var19.ONLY_TEXT;
case 38:
            var9['builtIns'] = var17;
            var13 = !var13;
            var9['applicationCommands'] = var13;
            var6['filters'] = var9;
            var13 = {'placeholderCount': 3, 'limit': null, 'includeFrecency': true};
            var9 = _closure1_slot9;
            var13['limit'] = var9;
            var9 = true;
            var6['options'] = var13;
            var6['allowFetch'] = var9;
            var6 = var7.bind(var10)(var6);
            var7 = var6.sectionDescriptors;
            _closure2_slot10 = var7;
            var10 = var6.activeSections;
            _closure2_slot11 = var10;
            var19 = var6.commandsByActiveSection;
            _closure2_slot12 = var19;
            var10 = var6.hasMoreAfter;
            _closure2_slot13 = var10;
            var13 = var6.loading;
            var10 = var6.filteredSectionId;
            _closure2_slot14 = var10;
            var17 = var6.scrollDown;
            _closure2_slot15 = var17;
            var17 = var6.filterSection;
            _closure2_slot16 = var17;
            var6 = _closure1_slot5;
            var22 = var6.useEffect;
            var21 = new Array(4);
            var21[0] = var17;
            var21[1] = var23;
            var21[2] = var16;
            var21[3] = var7;
            var16 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot9;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                    var4 = _closure2_slot16;
                    var2 = _closure2_slot9;
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var5 = _closure2_slot10;
                    var4 = var5.findIndex;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure2_slot9;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var4 = var4.bind(var5)(var2);
                    var2 = _closure2_slot7;
                    var5 = -1;
                    var1 = 0;
                    if(!(var5 !== var4)) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                    var1 = var4;
case 41:
                    var1 = var2.bind(var3)(var1);
case 39:
                    var1 = undefined;
                    return var1;
                }
            };
            var16 = var22.bind(var6)(var16, var21);
            var22 = var6.useEffect;
            var21 = function() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var2 = 16;
                var2 = var5[var2];
                var3 = undefined;
                var2 = var4.bind(var3)(var2);
                var7 = var2.AccessibilityAnnouncer;
                var6 = var7.announce;
                var2 = 17;
                var8 = var5[var2];
                var8 = var4.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2["2wfLMm"];
                var2 = var8.bind(var9)(var2);
                var2 = var6.bind(var7)(var2);
                var2 = 18;
                var2 = var5[var2];
                var3 = var4.bind(var3)(var2);
                var2 = var3.trackWithMetadata;
                var1 = _closure1_slot12;
                var1 = var1.APPLICATION_COMMAND_BROWSER_OPENED;
                var1 = var2.bind(var3)(var1);
                var1 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.updateInitialSectionId;
                    var2 = var2.bind(var3)(var1);
                    return var1;
                };
                return var1;
            };
            var16 = new Array(0);
            var16 = var22.bind(var6)(var21, var16);
            var21 = var6.useEffect;
            var16 = new Array(3);
            var16[0] = var19;
            var16[1] = var15;
            var16[2] = var3;
            var15 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 43; continue _fun0006 }
case 40:
                    var3 = _closure2_slot1;
                    var5 = _closure2_slot12;
                    var4 = _closure2_slot4;
                    var1 = function(arg1, arg2) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var5 = arg1;
                            var1 = arg2;
                            var _closure4_slot0 = var1;
                            var3 = var5.length;
                            var4 = 0;
                            var1 = 0;
                            if(!(var1 !== var3)) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                            var3 = var5.reduce;
                            var2 = function(arg1, arg2) {
                                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                                    var1 = arg2;
                                    var2 = var1.data;
                                    var3 = var2.length;
                                    var2 = 0;
                                    if(!(var2 !== var3)) { _fun0008_ip = 46; continue _fun0008 }
case 47:
                                    var5 = _closure1_slot0;
                                    var4 = _closure1_slot3;
                                    var2 = 8;
                                    var4 = var4[var2];
                                    var2 = undefined;
                                    var2 = var5.bind(var2)(var4);
                                    var2 = var2.APPLICATION_SECTION_HEADER_HEIGHT;
                                    var4 = _closure4_slot0;
                                    var3 = _closure1_slot10;
                                    var3 = var4 + var3;
                                    var1 = var1.data;
                                    var1 = var1.length;
                                    var1 = var3 * var1;
                                    var2 = var2 + var1;
                                    var1 = arg1;
                                    var1 = var1 + var2;
                                    _fun0008_ip = 48; continue _fun0008;
case 46:
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot3;
                                    var2 = 8;
                                    var3 = var3[var2];
                                    var2 = undefined;
                                    var2 = var4.bind(var2)(var3);
                                    var3 = var2.APPLICATION_SECTION_HEADER_HEIGHT;
                                    var2 = 160;
                                    var1 = var3 + var2;
case 48:
                                    return var1;
                                }
                            };
                            var1 = var3.bind(var5)(var2, var4);
case 44:
                            return var1;
                        }
                    };
                    var2 = undefined;
                    var1 = var1.bind(var2)(var5, var4);
                    var1 = var3.bind(var2)(var1);
case 43:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = var21.bind(var6)(var15, var16);
            var16 = var6.useCallback;
            var15 = new Array(3);
            var15[0] = var7;
            var15[1] = var17;
            var15[2] = var10;
            var10 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var4 = arg1;
                    var2 = _closure2_slot10;
                    var2 = var2[var4];
                    var5 = var2.id;
                    var3 = _closure2_slot14;
                    if(!(var5 !== var3)) { _fun0009_ip = 39; continue _fun0009 }
case 49:
                    var5 = var2.id;
                    var3 = _closure1_slot8;
                    var3 = var3.FRECENCY;
                    if(!(var5 !== var3)) { _fun0009_ip = 39; continue _fun0009 }
case 5:
                    var5 = _closure2_slot16;
                    var2 = var2.id;
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var2 = _closure2_slot7;
                    var2 = var2.bind(var3)(var4);
                    _fun0009_ip = 50; continue _fun0009;
case 39:
                    var4 = _closure2_slot16;
                    var3 = undefined;
                    var2 = null;
                    var2 = var4.bind(var3)(var2);
                    var2 = _closure2_slot7;
                    var1 = 0;
                    var1 = var2.bind(var3)(var1);
case 50:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.updateInitialSectionId;
                    var2 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var21 = var16.bind(var6)(var10, var15);
            _closure2_slot17 = var21;
            var16 = var6.useCallback;
            var15 = function() {
                var2 = _closure2_slot8;
                var1 = true;
                var2['current'] = var1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 18;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.trackWithMetadata;
                var2 = _closure1_slot12;
                var2 = var2.APPLICATION_COMMAND_BROWSER_SCROLLED;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var10 = new Array(0);
            var17 = var16.bind(var6)(var15, var10);
            var16 = var6.useCallback;
            var15 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.nativeEvent;
                    var1 = var2.contentOffset;
                    var4 = var2.targetContentOffset;
                    var3 = var1.y;
                    var1 = null;
                    var5 = var1 == var4;
                    var1 = undefined;
                    var2 = undefined;
                    if(var5) { _fun0010_ip = 51; continue _fun0010 }
case 52:
                    var2 = var4.y;
case 51:
                    if(!(var3 === var2)) { _fun0010_ip = 53; continue _fun0010 }
case 5:
                    var3 = _closure2_slot8;
                    var2 = false;
                    var3['current'] = var2;
case 53:
                    return var1;
                }
            };
            var10 = new Array(0);
            var16 = var16.bind(var6)(var15, var10);
            var22 = var6.useCallback;
            var15 = function() {
                var2 = _closure2_slot8;
                var1 = false;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var10 = new Array(0);
            var15 = var22.bind(var6)(var15, var10);
            var23 = var6.useMemo;
            var22 = new Array(3);
            var22[0] = var7;
            var22[1] = var19;
            var22[2] = var3;
            var10 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = 0;
                    var _closure3_slot0 = var1;
                    var1 = new Array(0);
                    var _closure3_slot1 = var1;
                    var6 = function _loop(arg1) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            var1 = arg1;
                            var _closure4_slot0 = var1;
                            var4 = _closure2_slot12;
                            var3 = var4.findIndex;
                            var2 = function(arg1) {
                                var1 = arg1;
                                var1 = var1.section;
                                var2 = var1.id;
                                var1 = _closure4_slot0;
                                var1 = var1.id;
                                var1 = var2 === var1;
                                return var1;
                            };
                            var3 = var3.bind(var4)(var2);
                            var2 = 0;
                            if(!(!(var3 >= var2))) { _fun0012_ip = 54; continue _fun0012 }
case 52:
                            var5 = _closure3_slot1;
                            var4 = var5.push;
                            var2 = _closure3_slot0;
                            var2 = var4.bind(var5)(var2);
                            _fun0012_ip = 55; continue _fun0012;
case 54:
                            var2 = _closure2_slot12;
                            var2 = var2[var3];
                            var2 = var2.data;
                            var2 = var2.length;
                            var1 = _closure2_slot4;
                            var2 = var2 * var1;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 8;
                            var3 = var3[var1];
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3);
                            var1 = var1.APPLICATION_SECTION_HEADER_HEIGHT;
                            var3 = var2 + var1;
                            var1 = _closure3_slot0;
                            var1 = var3 + var1;
                            var4 = _closure3_slot1;
                            var3 = var4.push;
                            var3 = var3.bind(var4)(var1);
                            _closure3_slot0 = var1;
case 55:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var3 = _closure1_slot18;
                    var2 = _closure2_slot10;
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.bind(var5)();
                    var2 = var3.done;
                    if(var2) { _fun0011_ip = 56; continue _fun0011 }
case 28:
                    var2 = var3.value;
                    var2 = var6.bind(var5)(var2);
                    var7 = var4.bind(var5)();
                    var2 = var7.done;
                    var3 = var7;
                    if(!var2) { _fun0011_ip = 28; continue _fun0011 }
case 56:
                    return var1;
                }
            };
            var10 = var23.bind(var6)(var10, var22);
            _closure2_slot18 = var10;
            var23 = var6.useMemo;
            var22 = new Array(1);
            var22[0] = var10;
            var10 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 19;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.throttle;
                var2 = function(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var7 = arg1;
                        var2 = _closure2_slot18;
                        var2 = var2.length;
                        var6 = 0;
                        var2 = var6 < var2;
                        var3 = 0;
                        if(!var2) { _fun0013_ip = 57; continue _fun0013 }
case 58:
                        var2 = _closure2_slot18;
                        var2 = var2[var6];
                        var5 = 0;
                        var4 = 0;
                        if(!(var6 !== var2)) { _fun0013_ip = 54; continue _fun0013 }
case 59:
                        var2 = _closure2_slot18;
                        var2 = var2[var6];
                        var2 = var7 >= var2;
                        var5 = 0;
                        var4 = 0;
                        var3 = 0;
                        if(!var2) { _fun0013_ip = 57; continue _fun0013 }
case 54:
                        var8 = var5 + 1;
                        var9 = var4 + 1;
                        var2 = _closure2_slot18;
                        var2 = var2.length;
                        var3 = var8;
                        if(!(var9 < var2)) { _fun0013_ip = 57; continue _fun0013 }
case 60:
                        var2 = _closure2_slot18;
                        var2 = var2[var9];
                        var5 = var8;
                        var4 = var9;
                        if(var6 === var2) { _fun0013_ip = 54; continue _fun0013 }
case 61:
                        var2 = _closure2_slot18;
                        var2 = var2[var9];
                        var5 = var8;
                        var4 = var9;
                        var3 = var5;
                        if(var7 >= var2) { _fun0013_ip = 54; continue _fun0013 }
case 57:
                        var2 = _closure2_slot7;
                        var1 = undefined;
                        var2 = var2.bind(var1)(var3);
                        return var1;
                    }
                };
                var1 = 100;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var10 = var23.bind(var6)(var10, var22);
            _closure2_slot19 = var10;
            var22 = var6.useCallback;
            var10 = new Array(1);
            var10[0] = var3;
            var3 = function(arg1, arg2) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var4 = arg1;
                    var2 = arg2;
                    var1 = null;
                    if(!(var1 != var4)) { _fun0014_ip = 62; continue _fun0014 }
case 63:
                    var1 = _closure1_slot13;
                    var19 = var1.ROW;
                    var1 = _closure1_slot18;
                    var7 = undefined;
                    var18 = var1.bind(var7)(var4);
                    var4 = var18.bind(var7)();
                    var1 = var4.done;
                    var11 = 1;
                    var17 = var4;
                    var16 = 0;
                    var15 = 0;
                    var14 = 0;
                    var4 = 0;
                    var5 = 0;
                    var8 = var19;
                    if(var1) { _fun0014_ip = 64; continue _fun0014 }
case 65:
                    var1 = var17.value;
                    var10 = var16 + var15;
                    var9 = var1.data;
                    var9 = var9.length;
                    var9 = var10 + var9;
                    var9 = var9 + var14;
                    var12 = var9 + var11;
                    var10 = var16;
                    var9 = var15;
                    var13 = var14;
                    if(!(!(var12 >= var2))) { _fun0014_ip = 66; continue _fun0014 }
case 67:
                    var16 = var10 + var11;
                    var12 = var1.data;
                    var12 = var12.length;
                    var15 = var9 + var12;
                    var14 = var13 + var11;
                    var22 = var18.bind(var7)();
                    var12 = var22.done;
                    var17 = var22;
                    var4 = var16;
                    var5 = var15;
                    var8 = var19;
                    if(var12) { _fun0014_ip = 64; continue _fun0014 }
case 68:
                    _fun0014_ip = 65; continue _fun0014;
case 66:
                    var12 = var10 + var9;
                    var12 = var12 + var13;
                    if(!(var2 !== var12)) { _fun0014_ip = 69; continue _fun0014 }
case 70:
                    var14 = var10 + var9;
                    var12 = var1.data;
                    var12 = var12.length;
                    var12 = var14 + var12;
                    var12 = var12 + var13;
                    var12 = var12 + var11;
                    if(!(var2 !== var12)) { _fun0014_ip = 71; continue _fun0014 }
case 72:
                    var14 = var10 + var11;
                    var12 = var2 - var14;
                    var12 = var12 - var9;
                    var12 = var12 - var13;
                    var5 = var9 + var12;
                    var12 = _closure1_slot13;
                    var8 = var12.ROW;
                    var4 = var14;
                    _fun0014_ip = 64; continue _fun0014;
case 71:
                    var4 = var10 + var11;
                    var1 = var1.data;
                    var1 = var1.length;
                    var5 = var9 + var1;
                    var1 = _closure1_slot13;
                    var8 = var1.FOOTER;
                    _fun0014_ip = 64; continue _fun0014;
case 69:
                    var1 = _closure1_slot13;
                    var8 = var1.HEADER;
                    var4 = var10;
                    var5 = var9;
case 64:
                    var1 = _closure1_slot13;
                    var1 = var1.ROW;
                    if(!(var1 !== var8)) { _fun0014_ip = 73; continue _fun0014 }
case 74:
                    var1 = _closure1_slot13;
                    var1 = var1.HEADER;
                    if(!(var1 !== var8)) { _fun0014_ip = 75; continue _fun0014 }
case 76:
                    var1 = _closure1_slot13;
                    var1 = var1.FOOTER;
                    var6 = 0;
                    _fun0014_ip = 77; continue _fun0014;
case 75:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var1 = 8;
                    var1 = var9[var1];
                    var1 = var8.bind(var7)(var1);
                    var6 = var1.APPLICATION_SECTION_HEADER_HEIGHT;
                    _fun0014_ip = 77; continue _fun0014;
case 73:
                    var6 = _closure2_slot4;
case 77:
                    var1 = {};
                    var1['length'] = var6;
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var3 = 8;
                    var3 = var8[var3];
                    var3 = var6.bind(var7)(var3);
                    var3 = var3.APPLICATION_SECTION_HEADER_HEIGHT;
                    var4 = var4 * var3;
                    var3 = _closure2_slot4;
                    var3 = var5 * var3;
                    var3 = var4 + var3;
                    var1['offset'] = var3;
                    var1['index'] = var2;
                    return var1;
case 62:
                    var1 = {'length': 0, 'offset': 0};
                    var1['index'] = var2;
                    return var1;
                }
            };
            var10 = var22.bind(var6)(var3, var10);
            var3 = var6.useMemo;
            var22 = var2.guild_id;
            var2 = new Array(4);
            var2[0] = var22;
            var2[1] = var21;
            var2[2] = var7;
            var2[3] = var1;
            var1 = function() {
                var4 = _closure1_slot14;
                var2 = _closure1_slot1;
                var3 = _closure1_slot3;
                var1 = 20;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = _closure2_slot17;
                var1['onPressSection'] = var6;
                var6 = _closure2_slot10;
                var1['sections'] = var6;
                var6 = _closure2_slot6;
                var1['selectedIndex'] = var6;
                var5 = _closure2_slot2;
                var5 = var5.guild_id;
                var1['guildId'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var6 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot16;
            var2 = _closure1_slot6;
            var1 = {};
            var21 = var18.discoveryWrapper;
            var7 = new Array(2);
            var7[0] = var21;
            var7[1] = var8;
            var1['style'] = var7;
            var8 = _closure1_slot14;
            var7 = _closure1_slot7;
            var5 = {};
            var5['ref'] = var20;
            var5['sections'] = var19;
            var18 = var18.commandsList;
            var5['style'] = var18;
            var5['onScrollBeginDrag'] = var17;
            var5['onScrollEndDrag'] = var16;
            var5['onMomentumScrollEnd'] = var15;
            var15 = function onScroll(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.nativeEvent;
                    var5 = var2.layoutMeasurement;
                    var4 = var2.contentSize;
                    var1 = var2.contentOffset;
                    var3 = var2.contentInset;
                    var6 = var1.y;
                    var7 = _closure2_slot19;
                    var1 = undefined;
                    var7 = var7.bind(var1)(var6);
                    var7 = _closure2_slot8;
                    var7 = var7.current;
                    if(var7) { _fun0015_ip = 78; continue _fun0015 }
case 79:
                    var7 = _closure2_slot11;
                    var7 = var7.length;
                    var13 = 0;
                    if(!(var7 > var13)) { _fun0015_ip = 78; continue _fun0015 }
case 80:
                    var7 = var3.top;
                    if(!(!(var6 < var7))) { _fun0015_ip = 23; continue _fun0015 }
case 11:
                    var8 = var4.height;
                    var7 = var5.height;
                    var7 = var8 - var7;
                    var3 = var3.bottom;
                    var3 = var7 - var3;
                    if(!(var6 > var3)) { _fun0015_ip = 78; continue _fun0015 }
case 81:
                    var3 = _closure2_slot5;
                    var8 = var3.current;
                    var3 = null;
                    if(!(var3 != var8)) { _fun0015_ip = 78; continue _fun0015 }
case 82:
                    var7 = var8.scrollToLocation;
                    var3 = {};
                    var9 = _closure2_slot11;
                    var10 = var9.length;
                    var9 = 1;
                    var10 = var10 - var9;
                    var3['sectionIndex'] = var10;
                    var10 = global;
                    var12 = var10.Math;
                    var11 = var12.max;
                    var14 = _closure2_slot12;
                    var10 = var14.length;
                    var10 = var10 - var9;
                    var10 = var14[var10];
                    var10 = var10.data;
                    var10 = var10.length;
                    var10 = var10 - var9;
                    var10 = var11.bind(var12)(var10, var13);
                    var3['itemIndex'] = var10;
                    var3['viewPosition'] = var9;
                    var9 = false;
                    var3['animated'] = var9;
                    var3 = var7.bind(var8)(var3);
                    _fun0015_ip = 78; continue _fun0015;
case 23:
                    var3 = _closure2_slot5;
                    var8 = var3.current;
                    var3 = null;
                    if(!(var3 != var8)) { _fun0015_ip = 78; continue _fun0015 }
case 83:
                    var7 = var8.scrollToLocation;
                    var3 = {'sectionIndex': 0, 'itemIndex': 0, 'viewPosition': 0, 'animated': false};
                    var3 = var7.bind(var8)(var3);
case 78:
                    var3 = _closure2_slot13;
                    if(!var3) { _fun0015_ip = 84; continue _fun0015 }
case 85:
                    var5 = var5.height;
                    var5 = var6 + var5;
                    var6 = var4.height;
                    var7 = _closure2_slot4;
                    var4 = 3;
                    var4 = var4 * var7;
                    var4 = var6 - var4;
                    var3 = var5 >= var4;
case 84:
                    if(!var3) { _fun0015_ip = 86; continue _fun0015 }
case 26:
                    var2 = _closure2_slot15;
                    var2 = var2.bind(var1)();
case 86:
                    return var1;
                }
            };
            var5['onScroll'] = var15;
            var15 = 16;
            var5['scrollEventThrottle'] = var15;
            var15 = function keyExtractor(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var5['keyExtractor'] = var15;
            var12 = null;
            if(!var13) { _fun0004_ip = 87; continue _fun0004 }
case 88:
            var13 = {};
            var13['minIndexForVisible'] = var14;
            var12 = var13;
case 87:
            var5['maintainVisibleContentPosition'] = var12;
            var12 = function renderItem(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var1 = arg1;
                    var8 = var1.item;
                    var _closure3_slot0 = var8;
                    var7 = var1.section;
                    var _closure3_slot1 = var7;
                    var4 = undefined;
                    var _closure3_slot2 = var4;
                    var3 = var8.inputType;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var2 = 21;
                    var2 = var6[var2];
                    var2 = var5.bind(var4)(var2);
                    var2 = var2.ApplicationCommandInputType;
                    var2 = var2.PLACEHOLDER;
                    if(!(var3 !== var2)) { _fun0016_ip = 89; continue _fun0016 }
case 90:
                    var5 = _closure2_slot10;
                    var3 = var5.find;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure3_slot0;
                        var1 = var1.applicationId;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var9 = var3.bind(var5)(var2);
                    _closure3_slot2 = var9;
                    var5 = _closure1_slot14;
                    var3 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var2 = 23;
                    var2 = var11[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var2['command'] = var8;
                    var10 = function onPress() {
                        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                            var3 = _closure2_slot0;
                            var1 = null;
                            var3 = var1 == var3;
                            var6 = undefined;
                            var1 = undefined;
                            if(var3) { _fun0017_ip = 91; continue _fun0017 }
case 29:
                            var5 = _closure2_slot0;
                            var4 = _closure3_slot0;
                            var3 = _closure3_slot2;
                            var2 = _closure3_slot1;
                            var2 = var2.section;
                            var1 = var5.bind(var6)(var4, var3, var2);
case 91:
                            return var1;
                        }
                    };
                    var2['onPress'] = var10;
                    var2['section'] = var9;
                    var8 = var8.applicationId;
                    var7 = var7.section;
                    var7 = var7.id;
                    var7 = var8 !== var7;
                    var2['showIcon'] = var7;
                    var6 = _closure2_slot2;
                    var6 = var6.guild_id;
                    var2['guildId'] = var6;
                    var2 = var5.bind(var4)(var3, var2);
                    return var2;
case 89:
                    var3 = _closure1_slot14;
                    var2 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var1 = 22;
                    var1 = var5[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = {};
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var5['renderItem'] = var12;
            var11 = function renderSectionHeader(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var1 = arg1;
                    var15 = var1.section;
                    var4 = _closure1_slot16;
                    var3 = _closure1_slot15;
                    var2 = {};
                    var8 = _closure1_slot14;
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var1 = 8;
                    var5 = var5[var1];
                    var1 = undefined;
                    var7 = var6.bind(var1)(var5);
                    var6 = {};
                    var5 = var15.section;
                    var6['section'] = var5;
                    var5 = _closure2_slot2;
                    var5 = var5.guild_id;
                    var6['guildId'] = var5;
                    var5 = var15.section;
                    var5 = var5.id;
                    var6 = var8.bind(var1)(var7, var6, var5);
                    var5 = new Array(2);
                    var5[0] = var6;
                    var6 = var15.data;
                    var7 = var6.length;
                    var6 = 0;
                    var6 = var6 === var7;
                    if(!var6) { _fun0018_ip = 92; continue _fun0018 }
case 93:
                    var9 = _closure1_slot14;
                    var12 = _closure1_slot0;
                    var16 = _closure1_slot3;
                    var7 = 24;
                    var7 = var16[var7];
                    var7 = var12.bind(var1)(var7);
                    var8 = var7.ThemedEmptyState;
                    var7 = {};
                    var13 = _closure1_slot1;
                    var11 = 25;
                    var14 = var16[var11];
                    var14 = var13.bind(var1)(var14);
                    var7['lightSource'] = var14;
                    var11 = var16[var11];
                    var11 = var13.bind(var1)(var11);
                    var7['darkSource'] = var11;
                    var11 = 17;
                    var13 = var16[var11];
                    var13 = var12.bind(var1)(var13);
                    var14 = var13.intl;
                    var13 = var14.format;
                    var11 = var16[var11];
                    var11 = var12.bind(var1)(var11);
                    var11 = var11.t;
                    var12 = var11.WoQXT6;
                    var11 = {};
                    var15 = var15.section;
                    var15 = var15.name;
                    var11['applicationName'] = var15;
                    var11 = var13.bind(var14)(var12, var11);
                    var7['body'] = var11;
                    var10 = _closure2_slot3;
                    var11 = var10.noCommandsContainer;
                    var7['containerStyle'] = var11;
                    var10 = var10.noCommandsImage;
                    var7['imageStyle'] = var10;
                    var6 = var9.bind(var1)(var8, var7);
case 92:
                    var5[1] = var6;
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var5['renderSectionHeader'] = var11;
            var5['getItemLayout'] = var10;
            var5['stickySectionHeadersEnabled'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();