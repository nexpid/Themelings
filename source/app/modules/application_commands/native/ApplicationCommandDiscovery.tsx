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
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 345; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
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
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot20;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot20;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
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
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 345:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
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
    var7 = 3;
    var4 = var6[var7];
    var4 = var5.bind(var1)(var4);
    var8 = var4.BuiltInSectionId;
    var _closure1_slot8 = var8;
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
    var8 = 6;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var9 = var8.AnalyticEvents;
    var _closure1_slot12 = var9;
    var8 = var8.SectionListElementType;
    var _closure1_slot13 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var9 = var8.jsx;
    var _closure1_slot14 = var9;
    var9 = var8.Fragment;
    var _closure1_slot15 = var9;
    var8 = var8.jsxs;
    var _closure1_slot16 = var8;
    var4 = var7 * var4;
    var _closure1_slot17 = var4;
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
    var10 = var10.BACKGROUND_SECONDARY;
    var9['backgroundColor'] = var10;
    var4['commandsList'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot18 = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_commands/native/ApplicationCommandDiscovery.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ApplicationCommandDiscovery(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var8 = var1.style;
            var2 = var1.onPressSlashItem;
            var _closure2_slot0 = var2;
            var3 = var1.onHeightChange;
            var _closure2_slot1 = var3;
            var15 = var1.channel;
            var13 = var1.canOnlyUseTextCommands;
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
            var1 = _closure1_slot18;
            var18 = var1.bind(var4)();
            var _closure2_slot2 = var18;
            var7 = _closure1_slot5;
            var1 = var7.useRef;
            var12 = null;
            var20 = var1.bind(var7)(var12);
            var _closure2_slot3 = var20;
            var2 = var7.useState;
            var1 = 0;
            var9 = var2.bind(var7)(var1);
            var6 = _closure1_slot4;
            var2 = 2;
            var2 = var6.bind(var4)(var9, var2);
            var1 = var2[var1];
            var _closure2_slot4 = var1;
            var14 = 1;
            var10 = var2[var14];
            var _closure2_slot5 = var10;
            var6 = var7.useRef;
            var2 = false;
            var2 = var6.bind(var7)(var2);
            var _closure2_slot6 = var2;
            var16 = _closure1_slot0;
            var17 = _closure1_slot3;
            var2 = 11;
            var2 = var17[var2];
            var7 = var16.bind(var4)(var2);
            var6 = var7.useCommandDiscoveryManager;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.initialSectionId;
                return var1;
            };
            var21 = var6.bind(var7)(var2);
            var _closure2_slot7 = var21;
            var6 = _closure1_slot2;
            var2 = 12;
            var2 = var17[var2];
            var7 = var6.bind(var4)(var2);
            var6 = var7.useDiscovery;
            var2 = {};
            var9 = {};
            var9['channel'] = var15;
            var15 = 'channel';
            var9['type'] = var15;
            var2['context'] = var9;
            var9 = {};
            var15 = 13;
            var15 = var17[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.ApplicationCommandType;
            var16 = var15.CHAT;
            var15 = new Array(1);
            var15[0] = var16;
            var9['commandTypes'] = var15;
            var16 = _closure1_slot0;
            var17 = _closure1_slot3;
            var15 = 14;
            var15 = var17[var15];
            var15 = var16.bind(var4)(var15);
            var16 = var15.BuiltInCommandFilter;
            if(var13) { _fun0004_ip = 338; continue _fun0004 }
 330:
            var15 = var16.ALLOW;
            _fun0004_ip = 344; continue _fun0004;
 338:
            var15 = var16.ONLY_TEXT;
 344:
            var9['builtIns'] = var15;
            var13 = !var13;
            var9['applicationCommands'] = var13;
            var2['filters'] = var9;
            var13 = {'placeholderCount': 3, 'limit': null, 'includeFrecency': true};
            var9 = _closure1_slot9;
            var13['limit'] = var9;
            var9 = true;
            var2['options'] = var13;
            var2['allowFetch'] = var9;
            var6 = var6.bind(var7)(var2);
            var7 = var6.sectionDescriptors;
            _closure2_slot8 = var7;
            var2 = var6.activeSections;
            _closure2_slot9 = var2;
            var19 = var6.commandsByActiveSection;
            _closure2_slot10 = var19;
            var2 = var6.hasMoreAfter;
            _closure2_slot11 = var2;
            var13 = var6.loading;
            var2 = var6.filteredSectionId;
            _closure2_slot12 = var2;
            var15 = var6.scrollDown;
            _closure2_slot13 = var15;
            var15 = var6.filterSection;
            _closure2_slot14 = var15;
            var6 = _closure1_slot5;
            var17 = var6.useEffect;
            var16 = new Array(4);
            var16[0] = var15;
            var16[1] = var21;
            var16[2] = var10;
            var16[3] = var7;
            var10 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure2_slot7;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 76; continue _fun0005 }
 13:
                    var4 = _closure2_slot14;
                    var2 = _closure2_slot7;
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var5 = _closure2_slot8;
                    var4 = var5.findIndex;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure2_slot7;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var4 = var4.bind(var5)(var2);
                    var2 = _closure2_slot5;
                    var5 = -1;
                    var1 = 0;
                    if(!(var5 !== var4)) { _fun0005_ip = 71; continue _fun0005 }
 68:
                    var1 = var4;
 71:
                    var1 = var2.bind(var3)(var1);
 76:
                    var1 = undefined;
                    return var1;
                }
            };
            var10 = var17.bind(var6)(var10, var16);
            var17 = var6.useEffect;
            var16 = function() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var2 = 15;
                var2 = var5[var2];
                var3 = undefined;
                var2 = var4.bind(var3)(var2);
                var7 = var2.AccessibilityAnnouncer;
                var6 = var7.announce;
                var2 = 16;
                var8 = var5[var2];
                var8 = var4.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2.2wfLMj;
                var2 = var8.bind(var9)(var2);
                var2 = var6.bind(var7)(var2);
                var2 = 17;
                var2 = var5[var2];
                var3 = var4.bind(var3)(var2);
                var2 = var3.trackWithMetadata;
                var1 = _closure1_slot12;
                var1 = var1.APPLICATION_COMMAND_BROWSER_OPENED;
                var1 = var2.bind(var3)(var1);
                var1 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.updateInitialSectionId;
                    var2 = var2.bind(var3)(var1);
                    return var1;
                };
                return var1;
            };
            var10 = new Array(0);
            var10 = var17.bind(var6)(var16, var10);
            var16 = var6.useEffect;
            var10 = new Array(2);
            var10[0] = var19;
            var10[1] = var3;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 62; continue _fun0006 }
 13:
                    var3 = _closure2_slot1;
                    var6 = _closure2_slot10;
                    var1 = var6.length;
                    var5 = 0;
                    var2 = 0;
                    if(!(var2 !== var1)) { _fun0006_ip = 55; continue _fun0006 }
 34:
                    var4 = var6.reduce;
                    var1 = function(arg1, arg2) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                            var1 = arg2;
                            var2 = var1.data;
                            var3 = var2.length;
                            var2 = 0;
                            if(!(var2 !== var3)) { _fun0007_ip = 89; continue _fun0007 }
 19:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var2 = 8;
                            var4 = var4[var2];
                            var2 = undefined;
                            var2 = var5.bind(var2)(var4);
                            var2 = var2.APPLICATION_SECTION_HEADER_HEIGHT;
                            var4 = _closure1_slot11;
                            var3 = _closure1_slot10;
                            var3 = var4 + var3;
                            var1 = var1.data;
                            var1 = var1.length;
                            var1 = var3 * var1;
                            var2 = var2 + var1;
                            var1 = arg1;
                            var1 = var1 + var2;
                            _fun0007_ip = 127; continue _fun0007;
 89:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var2 = 8;
                            var3 = var3[var2];
                            var2 = undefined;
                            var2 = var4.bind(var2)(var3);
                            var3 = var2.APPLICATION_SECTION_HEADER_HEIGHT;
                            var2 = 160;
                            var1 = var3 + var2;
 127:
                            return var1;
                        }
                    };
                    var2 = var4.bind(var6)(var1, var5);
 55:
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 62:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var16.bind(var6)(var3, var10);
            var10 = var6.useCallback;
            var3 = new Array(3);
            var3[0] = var7;
            var3[1] = var15;
            var3[2] = var2;
            var2 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var4 = arg1;
                    var2 = _closure2_slot8;
                    var2 = var2[var4];
                    var5 = var2.id;
                    var3 = _closure2_slot12;
                    if(!(var5 !== var3)) { _fun0008_ip = 76; continue _fun0008 }
 27:
                    var5 = var2.id;
                    var3 = _closure1_slot8;
                    var3 = var3.FRECENCY;
                    if(!(var5 !== var3)) { _fun0008_ip = 76; continue _fun0008 }
 49:
                    var5 = _closure2_slot14;
                    var2 = var2.id;
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var2 = _closure2_slot5;
                    var2 = var2.bind(var3)(var4);
                    _fun0008_ip = 100; continue _fun0008;
 76:
                    var4 = _closure2_slot14;
                    var3 = undefined;
                    var2 = null;
                    var2 = var4.bind(var3)(var2);
                    var2 = _closure2_slot5;
                    var1 = 0;
                    var1 = var2.bind(var3)(var1);
 100:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.updateInitialSectionId;
                    var2 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var21 = var10.bind(var6)(var2, var3);
            _closure2_slot15 = var21;
            var10 = var6.useCallback;
            var3 = function() {
                var2 = _closure2_slot6;
                var1 = true;
                var2['current'] = var1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 17;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.trackWithMetadata;
                var2 = _closure1_slot12;
                var2 = var2.APPLICATION_COMMAND_BROWSER_SCROLLED;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = new Array(0);
            var17 = var10.bind(var6)(var3, var2);
            var10 = var6.useCallback;
            var3 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.nativeEvent;
                    var1 = var2.contentOffset;
                    var4 = var2.targetContentOffset;
                    var3 = var1.y;
                    var1 = null;
                    var5 = var1 == var4;
                    var1 = undefined;
                    var2 = undefined;
                    if(var5) { _fun0009_ip = 46; continue _fun0009 }
 41:
                    var2 = var4.y;
 46:
                    if(!(var3 === var2)) { _fun0009_ip = 65; continue _fun0009 }
 50:
                    var3 = _closure2_slot6;
                    var2 = false;
                    var3['current'] = var2;
 65:
                    return var1;
                }
            };
            var2 = new Array(0);
            var16 = var10.bind(var6)(var3, var2);
            var10 = var6.useCallback;
            var3 = function() {
                var2 = _closure2_slot6;
                var1 = false;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var2 = new Array(0);
            var15 = var10.bind(var6)(var3, var2);
            var10 = var6.useMemo;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var19;
            var2 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var1 = 0;
                    var _closure3_slot0 = var1;
                    var1 = new Array(0);
                    var _closure3_slot1 = var1;
                    var6 = function _loop(arg1) {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                            var1 = arg1;
                            var _closure4_slot0 = var1;
                            var4 = _closure2_slot10;
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
                            var2 = var3.bind(var4)(var2);
                            var3 = 0;
                            if(!(!(var2 >= var3))) { _fun0011_ip = 63; continue _fun0011 }
 40:
                            var5 = _closure3_slot1;
                            var4 = var5.push;
                            var3 = _closure3_slot0;
                            var3 = var4.bind(var5)(var3);
                            _fun0011_ip = 153; continue _fun0011;
 63:
                            var1 = _closure2_slot10;
                            var1 = var1[var2];
                            var1 = var1.data;
                            var3 = var1.length;
                            var2 = _closure1_slot11;
                            var2 = var3 * var2;
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
 153:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var3 = _closure1_slot19;
                    var2 = _closure2_slot8;
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.bind(var5)();
                    var2 = var3.done;
                    if(var2) { _fun0010_ip = 81; continue _fun0010 }
 56:
                    var2 = var3.value;
                    var2 = var6.bind(var5)(var2);
                    var7 = var4.bind(var5)();
                    var2 = var7.done;
                    var3 = var7;
                    if(!var2) { _fun0010_ip = 56; continue _fun0010 }
 81:
                    return var1;
                }
            };
            var2 = var10.bind(var6)(var2, var3);
            _closure2_slot16 = var2;
            var10 = var6.useMemo;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 18;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.throttle;
                var2 = function(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                        var7 = arg1;
                        var2 = _closure2_slot16;
                        var2 = var2.length;
                        var6 = 0;
                        var2 = var6 < var2;
                        var3 = 0;
                        if(!var2) { _fun0012_ip = 124; continue _fun0012 }
 26:
                        var2 = _closure2_slot16;
                        var2 = var2[var6];
                        var5 = 0;
                        var4 = 0;
                        if(!(var6 !== var2)) { _fun0012_ip = 63; continue _fun0012 }
 42:
                        var2 = _closure2_slot16;
                        var2 = var2[var6];
                        var2 = var7 >= var2;
                        var5 = 0;
                        var4 = 0;
                        var3 = 0;
                        if(!var2) { _fun0012_ip = 124; continue _fun0012 }
 63:
                        var8 = var5 + 1;
                        var9 = var4 + 1;
                        var2 = _closure2_slot16;
                        var2 = var2.length;
                        var3 = var8;
                        if(!(var9 < var2)) { _fun0012_ip = 124; continue _fun0012 }
 85:
                        var2 = _closure2_slot16;
                        var2 = var2[var9];
                        var5 = var8;
                        var4 = var9;
                        if(var6 === var2) { _fun0012_ip = 63; continue _fun0012 }
 103:
                        var2 = _closure2_slot16;
                        var2 = var2[var9];
                        var5 = var8;
                        var4 = var9;
                        var3 = var5;
                        if(var7 >= var2) { _fun0012_ip = 63; continue _fun0012 }
 124:
                        var2 = _closure2_slot5;
                        var1 = undefined;
                        var2 = var2.bind(var1)(var3);
                        return var1;
                    }
                };
                var1 = 100;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2 = var10.bind(var6)(var2, var3);
            _closure2_slot17 = var2;
            var10 = var6.useCallback;
            var3 = function(arg1, arg2) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var4 = arg1;
                    var2 = arg2;
                    var1 = null;
                    if(!(var1 != var4)) { _fun0013_ip = 424; continue _fun0013 }
 15:
                    var1 = _closure1_slot13;
                    var19 = var1.ROW;
                    var1 = _closure1_slot19;
                    var8 = undefined;
                    var18 = var1.bind(var8)(var4);
                    var5 = var18.bind(var8)();
                    var1 = var5.done;
                    var11 = 1;
                    var17 = var5;
                    var16 = 0;
                    var15 = 0;
                    var14 = 0;
                    var6 = 0;
                    var5 = 0;
                    var7 = var19;
                    if(var1) { _fun0013_ip = 291; continue _fun0013 }
 73:
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
                    if(!(!(var12 >= var2))) { _fun0013_ip = 168; continue _fun0013 }
 117:
                    var16 = var10 + var11;
                    var12 = var1.data;
                    var12 = var12.length;
                    var15 = var9 + var12;
                    var14 = var13 + var11;
                    var22 = var18.bind(var8)();
                    var12 = var22.done;
                    var17 = var22;
                    var6 = var16;
                    var5 = var15;
                    var7 = var19;
                    if(var12) { _fun0013_ip = 291; continue _fun0013 }
 166:
                    _fun0013_ip = 73; continue _fun0013;
 168:
                    var12 = var10 + var9;
                    var12 = var12 + var13;
                    if(!(var2 !== var12)) { _fun0013_ip = 275; continue _fun0013 }
 180:
                    var14 = var10 + var9;
                    var12 = var1.data;
                    var12 = var12.length;
                    var12 = var14 + var12;
                    var12 = var12 + var13;
                    var12 = var12 + var11;
                    if(!(var2 !== var12)) { _fun0013_ip = 245; continue _fun0013 }
 210:
                    var14 = var10 + var11;
                    var12 = var2 - var14;
                    var12 = var12 - var9;
                    var12 = var12 - var13;
                    var5 = var9 + var12;
                    var12 = _closure1_slot13;
                    var7 = var12.ROW;
                    var6 = var14;
                    _fun0013_ip = 291; continue _fun0013;
 245:
                    var6 = var10 + var11;
                    var1 = var1.data;
                    var1 = var1.length;
                    var5 = var9 + var1;
                    var1 = _closure1_slot13;
                    var7 = var1.FOOTER;
                    _fun0013_ip = 291; continue _fun0013;
 275:
                    var1 = _closure1_slot13;
                    var7 = var1.HEADER;
                    var6 = var10;
                    var5 = var9;
 291:
                    var1 = _closure1_slot13;
                    var1 = var1.ROW;
                    if(!(var1 !== var7)) { _fun0013_ip = 361; continue _fun0013 }
 305:
                    var1 = _closure1_slot13;
                    var1 = var1.HEADER;
                    if(!(var1 !== var7)) { _fun0013_ip = 333; continue _fun0013 }
 319:
                    var1 = _closure1_slot13;
                    var1 = var1.FOOTER;
                    var4 = 0;
                    _fun0013_ip = 365; continue _fun0013;
 333:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var1 = 8;
                    var1 = var9[var1];
                    var1 = var7.bind(var8)(var1);
                    var4 = var1.APPLICATION_SECTION_HEADER_HEIGHT;
                    _fun0013_ip = 365; continue _fun0013;
 361:
                    var4 = _closure1_slot11;
 365:
                    var1 = {};
                    var1['length'] = var4;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var4 = 8;
                    var4 = var9[var4];
                    var4 = var7.bind(var8)(var4);
                    var4 = var4.APPLICATION_SECTION_HEADER_HEIGHT;
                    var4 = var6 * var4;
                    var3 = _closure1_slot11;
                    var3 = var5 * var3;
                    var3 = var4 + var3;
                    var1['offset'] = var3;
                    var1['index'] = var2;
                    return var1;
 424:
                    var1 = {'length': 0, 'offset': 0};
                    var1['index'] = var2;
                    return var1;
                }
            };
            var2 = new Array(0);
            var10 = var10.bind(var6)(var3, var2);
            var3 = var6.useMemo;
            var2 = new Array(3);
            var2[0] = var21;
            var2[1] = var7;
            var2[2] = var1;
            var1 = function() {
                var4 = _closure1_slot14;
                var2 = _closure1_slot1;
                var3 = _closure1_slot3;
                var1 = 19;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = _closure2_slot15;
                var1['onPressSection'] = var6;
                var6 = _closure2_slot8;
                var1['sections'] = var6;
                var5 = _closure2_slot4;
                var1['selectedIndex'] = var5;
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
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.nativeEvent;
                    var5 = var2.layoutMeasurement;
                    var4 = var2.contentSize;
                    var1 = var2.contentOffset;
                    var3 = var2.contentInset;
                    var6 = var1.y;
                    var7 = _closure2_slot17;
                    var1 = undefined;
                    var7 = var7.bind(var1)(var6);
                    var7 = _closure2_slot6;
                    var7 = var7.current;
                    if(var7) { _fun0014_ip = 288; continue _fun0014 }
 67:
                    var7 = _closure2_slot9;
                    var7 = var7.length;
                    var13 = 0;
                    if(!(var7 > var13)) { _fun0014_ip = 288; continue _fun0014 }
 85:
                    var7 = var3.top;
                    if(!(!(var6 < var7))) { _fun0014_ip = 248; continue _fun0014 }
 97:
                    var8 = var4.height;
                    var7 = var5.height;
                    var7 = var8 - var7;
                    var3 = var3.bottom;
                    var3 = var7 - var3;
                    if(!(var6 > var3)) { _fun0014_ip = 288; continue _fun0014 }
 127:
                    var3 = _closure2_slot3;
                    var8 = var3.current;
                    var3 = null;
                    if(!(var3 != var8)) { _fun0014_ip = 288; continue _fun0014 }
 145:
                    var7 = var8.scrollToLocation;
                    var3 = {};
                    var9 = _closure2_slot9;
                    var10 = var9.length;
                    var9 = 1;
                    var10 = var10 - var9;
                    var3['sectionIndex'] = var10;
                    var10 = global;
                    var12 = var10.Math;
                    var11 = var12.max;
                    var14 = _closure2_slot10;
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
                    _fun0014_ip = 288; continue _fun0014;
 248:
                    var3 = _closure2_slot3;
                    var8 = var3.current;
                    var3 = null;
                    if(!(var3 != var8)) { _fun0014_ip = 288; continue _fun0014 }
 263:
                    var7 = var8.scrollToLocation;
                    var3 = {'sectionIndex': 0, 'itemIndex': 0, 'viewPosition': 0, 'animated': false};
                    var3 = var7.bind(var8)(var3);
 288:
                    var3 = _closure2_slot11;
                    if(!var3) { _fun0014_ip = 324; continue _fun0014 }
 295:
                    var5 = var5.height;
                    var5 = var6 + var5;
                    var6 = var4.height;
                    var4 = _closure1_slot17;
                    var4 = var6 - var4;
                    var3 = var5 >= var4;
 324:
                    if(!var3) { _fun0014_ip = 335; continue _fun0014 }
 327:
                    var2 = _closure2_slot13;
                    var2 = var2.bind(var1)();
 335:
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
            if(!var13) { _fun0004_ip = 919; continue _fun0004 }
 909:
            var13 = {};
            var13['minIndexForVisible'] = var14;
            var12 = var13;
 919:
            var5['maintainVisibleContentPosition'] = var12;
            var12 = function renderItem(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var1 = arg1;
                    var7 = var1.item;
                    var _closure3_slot0 = var7;
                    var6 = var1.section;
                    var _closure3_slot1 = var6;
                    var4 = undefined;
                    var _closure3_slot2 = var4;
                    var3 = var7.inputType;
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var2 = 20;
                    var2 = var8[var2];
                    var2 = var5.bind(var4)(var2);
                    var2 = var2.ApplicationCommandInputType;
                    var2 = var2.PLACEHOLDER;
                    if(!(var3 !== var2)) { _fun0015_ip = 180; continue _fun0015 }
 74:
                    var5 = _closure2_slot8;
                    var3 = var5.find;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure3_slot0;
                        var1 = var1.applicationId;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var8 = var3.bind(var5)(var2);
                    _closure3_slot2 = var8;
                    var5 = _closure1_slot14;
                    var3 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var2 = 22;
                    var2 = var10[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var2['command'] = var7;
                    var9 = function onPress() {
                        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                            var3 = _closure2_slot0;
                            var1 = null;
                            var3 = var1 == var3;
                            var6 = undefined;
                            var1 = undefined;
                            if(var3) { _fun0016_ip = 51; continue _fun0016 }
 20:
                            var5 = _closure2_slot0;
                            var4 = _closure3_slot0;
                            var3 = _closure3_slot2;
                            var2 = _closure3_slot1;
                            var2 = var2.section;
                            var1 = var5.bind(var6)(var4, var3, var2);
 51:
                            return var1;
                        }
                    };
                    var2['onPress'] = var9;
                    var2['section'] = var8;
                    var7 = var7.applicationId;
                    var6 = var6.section;
                    var6 = var6.id;
                    var6 = var7 !== var6;
                    var2['showIcon'] = var6;
                    var2 = var5.bind(var4)(var3, var2);
                    return var2;
 180:
                    var3 = _closure1_slot14;
                    var2 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var1 = 21;
                    var1 = var5[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = {};
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var5['renderItem'] = var12;
            var11 = function renderSectionHeader(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var1 = arg1;
                    var14 = var1.section;
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
                    var5 = var14.section;
                    var6['section'] = var5;
                    var5 = var14.section;
                    var5 = var5.id;
                    var6 = var8.bind(var1)(var7, var6, var5);
                    var5 = new Array(2);
                    var5[0] = var6;
                    var6 = var14.data;
                    var7 = var6.length;
                    var6 = 0;
                    var6 = var6 === var7;
                    if(!var6) { _fun0017_ip = 278; continue _fun0017 }
 105:
                    var9 = _closure1_slot14;
                    var11 = _closure1_slot0;
                    var15 = _closure1_slot3;
                    var7 = 23;
                    var7 = var15[var7];
                    var7 = var11.bind(var1)(var7);
                    var8 = var7.ThemedEmptyState;
                    var7 = {};
                    var12 = _closure1_slot1;
                    var10 = 24;
                    var13 = var15[var10];
                    var13 = var12.bind(var1)(var13);
                    var7['lightSource'] = var13;
                    var10 = var15[var10];
                    var10 = var12.bind(var1)(var10);
                    var7['darkSource'] = var10;
                    var10 = 16;
                    var12 = var15[var10];
                    var12 = var11.bind(var1)(var12);
                    var13 = var12.intl;
                    var12 = var13.format;
                    var10 = var15[var10];
                    var10 = var11.bind(var1)(var10);
                    var10 = var10.t;
                    var11 = var10.WoQXT0;
                    var10 = {};
                    var14 = var14.section;
                    var14 = var14.name;
                    var10['applicationName'] = var14;
                    var10 = var12.bind(var13)(var11, var10);
                    var7['body'] = var10;
                    var10 = _closure2_slot2;
                    var11 = var10.noCommandsContainer;
                    var7['containerStyle'] = var11;
                    var10 = var10.noCommandsImage;
                    var7['imageStyle'] = var10;
                    var6 = var9.bind(var1)(var8, var7);
 278:
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