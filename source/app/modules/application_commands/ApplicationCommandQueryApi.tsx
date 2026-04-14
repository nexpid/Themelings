// app/modules/application_commands/ApplicationCommandQueryApi.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
            var9 = _closure1_slot14;
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
            var7 = _closure1_slot14;
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
    var _closure1_slot13 = var1;
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
    var _closure1_slot14 = var1;
    var1 = function findCommandInSection(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var2 = arg2;
            var _closure2_slot0 = var2;
            var7 = null;
            if(!(var7 == var2)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var4 = undefined;
            return var4;
case 36:
            var4 = var1.commands;
            var4 = var4[var2];
            if(!(var7 == var4)) { _fun0004_ip = 20; continue _fun0004 }
case 38:
            var4 = global;
            var6 = var4.Object;
            var5 = var6.values;
            var4 = var1.commands;
            var5 = var5.bind(var6)(var4);
            var4 = var5.find;
            var3 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.rootCommand;
                    var2 = null;
                    var3 = var2 == var1;
                    var2 = undefined;
                    if(var3) { _fun0005_ip = 39; continue _fun0005 }
case 29:
                    var2 = var1.id;
case 39:
                    var1 = _closure2_slot0;
                    var1 = var2 === var1;
                    return var1;
                }
            };
            var3 = var4.bind(var5)(var3);
            var4 = var7 == var3;
            var8 = undefined;
            var9 = undefined;
            if(var4) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var9 = var3.rootCommand;
case 40:
            var4 = var7 != var9;
            var3 = undefined;
            if(!var4) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var4 = 6;
            var4 = var6[var4];
            var6 = var5.bind(var8)(var4);
            var5 = var6.buildCommand;
            var4 = {};
            var4['rootCommand'] = var9;
            var4['command'] = var9;
            var9 = var1.descriptor;
            var9 = var9.application;
            var10 = var7 == var9;
            var8 = undefined;
            if(var10) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var8 = var9.id;
case 44:
            var9 = var7 != var8;
            var7 = '';
            if(!var9) { _fun0004_ip = 46; continue _fun0004 }
case 47:
            var7 = var8;
case 46:
            var4['applicationId'] = var7;
            var3 = var5.bind(var6)(var4);
case 42:
            return var3;
case 20:
            var1 = var1.commands;
            var1 = var1[var2];
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function createPlaceholderCommands(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var1 = new Array(0);
            var4 = 0;
            var7 = var4 < var6;
            var2 = undefined;
            if(!var7) { _fun0006_ip = 48; continue _fun0006 }
case 49:
            var8 = var1.push;
            var7 = _closure1_slot17;
            var7 = var7.bind(var2)(var4, var5);
            var7 = var8.bind(var1)(var7);
            var4 = var4 + 1;
            if(var4 < var6) { _fun0006_ip = 49; continue _fun0006 }
case 48:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function createPlaceholderCommand(arg1, arg2) {
        var1 = {'type': null, 'inputType': null, 'id': null, 'untranslatedName': '', 'displayName': '', 'untranslatedDescription': '', 'displayDescription': '', 'applicationId': ''};
        var2 = arg2;
        var1['type'] = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 11;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var3 = var3.ApplicationCommandInputType;
        var3 = var3.PLACEHOLDER;
        var1['inputType'] = var3;
        var3 = global;
        var3 = var3.HermesInternal;
        var5 = var3.concat;
        var4 = 'placeholder-';
        var3 = arg1;
        var3 = var5.bind(var4)(var3);
        var1['id'] = var3;
        var2 = _closure1_slot12;
        var1['section'] = var2;
        return var1;
    };
    var _closure1_slot17 = var1;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var8 = var6[var4];
    var8 = var5.bind(var1)(var8);
    var9 = var8.useContextIndexState;
    var _closure1_slot5 = var9;
    var9 = var8.useDiscoveryState;
    var _closure1_slot6 = var9;
    var9 = var8.useQueryState;
    var _closure1_slot7 = var9;
    var8 = var8.useUserIndexState;
    var _closure1_slot8 = var8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.BuiltInSectionId;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NOOP;
    var _closure1_slot11 = var4;
    var4 = {'id': 'placeholder-section', 'type': null, 'name': ''};
    var7 = 11;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.ApplicationCommandSectionType;
    var7 = var7.APPLICATION;
    var4['type'] = var7;
    var _closure1_slot12 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_commands/ApplicationCommandQueryApi.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getCachedCommand(arg1, arg2, arg3) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = arg2;
            var6 = arg3;
            var _closure2_slot0 = var6;
            var5 = null;
            if(!(var5 != var4)) { _fun0007_ip = 50; continue _fun0007 }
case 51:
            var9 = _closure1_slot9;
            var2 = var9.getUserState;
            var2 = var2.bind(var9)();
            var8 = var9.getContextState;
            var7 = arg1;
            var7 = var8.bind(var9)(var7);
            var10 = global;
            var11 = var10.Object;
            var9 = var11.values;
            var12 = var2.result;
            var13 = var5 == var12;
            var2 = undefined;
            var8 = undefined;
            if(var13) { _fun0007_ip = 52; continue _fun0007 }
case 53:
            var8 = var12.sections;
case 52:
            if(!(var5 == var8)) { _fun0007_ip = 54; continue _fun0007 }
case 55:
            var8 = {};
case 54:
            var9 = var9.bind(var11)(var8);
            var8 = var9.concat;
            var11 = var10.Object;
            var10 = var11.values;
            var12 = var7.result;
            var13 = var5 == var12;
            var7 = undefined;
            if(var13) { _fun0007_ip = 56; continue _fun0007 }
case 57:
            var7 = var12.sections;
case 56:
            if(!(var5 == var7)) { _fun0007_ip = 58; continue _fun0007 }
case 59:
            var7 = {};
case 58:
            var7 = var10.bind(var11)(var7);
            var7 = var8.bind(var9)(var7);
            if(!(var5 == var6)) { _fun0007_ip = 60; continue _fun0007 }
case 61:
            var6 = _closure1_slot13;
            var11 = var6.bind(var2)(var7);
            var8 = var11.bind(var2)();
            var6 = var8.done;
            var10 = var8;
            if(var6) { _fun0007_ip = 62; continue _fun0007 }
case 63:
            var9 = var10.value;
            var6 = _closure1_slot15;
            var8 = var6.bind(var2)(var9, var4);
            if(!(var5 == var8)) { _fun0007_ip = 64; continue _fun0007 }
case 65:
            var12 = var11.bind(var2)();
            var6 = var12.done;
            var10 = var12;
            if(var6) { _fun0007_ip = 62; continue _fun0007 }
case 66:
            _fun0007_ip = 63; continue _fun0007;
case 64:
            var6 = {};
            var9 = var9.descriptor;
            var9 = var9.application;
            var6['application'] = var9;
            var6['command'] = var8;
            return var6;
case 60:
            var6 = var7.find;
            var3 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.descriptor;
                    var1 = var1.application;
                    var2 = null;
                    var3 = var2 == var1;
                    var2 = undefined;
                    if(var3) { _fun0008_ip = 3; continue _fun0008 }
case 39:
                    var2 = var1.id;
case 3:
                    var1 = _closure2_slot0;
                    var1 = var2 === var1;
                    return var1;
                }
            };
            var3 = var6.bind(var7)(var3);
            if(!(var5 == var3)) { _fun0007_ip = 67; continue _fun0007 }
case 62:
            var5 = {};
            var5['application'] = var2;
            var5['command'] = var2;
            return var5;
case 67:
            var1 = _closure1_slot15;
            var2 = var1.bind(var2)(var3, var4);
            var1 = {};
            var3 = var3.descriptor;
            var3 = var3.application;
            var1['application'] = var3;
            var1['command'] = var2;
            return var1;
case 50:
            var1 = {};
            var2 = undefined;
            var1['application'] = var2;
            var1['command'] = var2;
            return var1;
        }
    };
    var3['getCachedCommand'] = var4;
    var4 = function getCachedApplicationSection(arg1, arg2, arg3) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var6 = arg3;
            var3 = _closure1_slot9;
            var1 = var3.getUserState;
            var1 = var1.bind(var3)();
            var4 = var3.getContextState;
            var2 = arg1;
            var5 = var4.bind(var3)(var2);
            var2 = var3.getApplicationState;
            var4 = var2.bind(var3)(var6);
            var7 = var1.result;
            var3 = null;
            var8 = var3 == var7;
            var2 = undefined;
            if(var8) { _fun0009_ip = 68; continue _fun0009 }
case 69:
            var7 = var7.sections;
            var8 = var3 == var7;
            var2 = undefined;
            if(var8) { _fun0009_ip = 68; continue _fun0009 }
case 70:
            var2 = var7[var6];
case 68:
            if(!(var3 == var2)) { _fun0009_ip = 71; continue _fun0009 }
case 72:
            var7 = var5.result;
            var8 = var3 == var7;
            var5 = undefined;
            if(var8) { _fun0009_ip = 73; continue _fun0009 }
case 74:
            var7 = var7.sections;
            var8 = var3 == var7;
            var5 = undefined;
            if(var8) { _fun0009_ip = 73; continue _fun0009 }
case 75:
            var5 = var7[var6];
case 73:
            var2 = var5;
case 71:
            if(!(var3 == var2)) { _fun0009_ip = 14; continue _fun0009 }
case 76:
            var5 = var4.result;
            var7 = var3 == var5;
            var4 = undefined;
            if(var7) { _fun0009_ip = 77; continue _fun0009 }
case 78:
            var5 = var5.sections;
            var7 = var3 == var5;
            var4 = undefined;
            if(var7) { _fun0009_ip = 77; continue _fun0009 }
case 61:
            var4 = var5[var6];
case 77:
            var2 = var4;
case 14:
            var3 = var3 == var2;
            var1 = undefined;
            if(var3) { _fun0009_ip = 79; continue _fun0009 }
case 80:
            var1 = var2.descriptor;
case 79:
            return var1;
        }
    };
    var3['getCachedApplicationSection'] = var4;
    var4 = function getCachedResults(arg1, arg2, arg3) {
        var5 = _closure1_slot9;
        var4 = var5.query;
        var3 = {};
        var2 = new Array(1);
        var6 = arg2;
        var2[0] = var6;
        var3['commandTypes'] = var2;
        var2 = arg3;
        var3['text'] = var2;
        var2 = {};
        var7 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 7;
        var6 = var6[var1];
        var1 = undefined;
        var1 = var7.bind(var1)(var6);
        var1 = var1.ScoreMethod;
        var1 = var1.COMMAND_OR_APPLICATION;
        var2['scoreMethod'] = var1;
        var1 = false;
        var2['allowFetch'] = var1;
        var1 = arg1;
        var2 = var4.bind(var5)(var1, var3, var2);
        var1 = {};
        var3 = var2.commands;
        var1['commands'] = var3;
        var2 = var2.descriptors;
        var1['sections'] = var2;
        return var1;
    };
    var3['getCachedResults'] = var4;
    var4 = function getChangeKeys(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var4 = _closure1_slot9;
            var1 = var4.getUserState;
            var1 = var1.bind(var4)();
            var3 = var4.getContextState;
            var2 = arg1;
            var3 = var3.bind(var4)(var2);
            var4 = null;
            var6 = var4 == var1;
            var5 = undefined;
            if(var6) { _fun0010_ip = 81; continue _fun0010 }
case 82:
            var5 = var1.result;
case 81:
            var1 = new Array(2);
            var1[0] = var5;
            var4 = var4 == var3;
            var2 = undefined;
            if(var4) { _fun0010_ip = 83; continue _fun0010 }
case 84:
            var2 = var3.result;
case 83:
            var1[1] = var2;
            return var1;
        }
    };
    var3['getChangeKeys'] = var4;
    var4 = function useCachedResults(arg1, arg2, arg3) {
        var6 = arg2;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot3;
        var4 = var5.useMemo;
        var3 = new Array(1);
        var3[0] = var6;
        var1 = function() {
            var2 = _closure2_slot0;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var1 = var4.bind(var5)(var1, var3);
        var5 = _closure1_slot7;
        var4 = {};
        var4['commandTypes'] = var1;
        var1 = arg3;
        var4['text'] = var1;
        var3 = {};
        var1 = false;
        var3['allowFetch'] = var1;
        var2 = undefined;
        var1 = arg1;
        var2 = var5.bind(var2)(var1, var4, var3);
        var1 = {};
        var3 = var2.commands;
        var1['commands'] = var3;
        var2 = var2.descriptors;
        var1['sections'] = var2;
        return var1;
    };
    var3['useCachedResults'] = var4;
    var4 = function useDiscovery(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var4 = arg1;
            var8 = var4.context;
            var3 = var4.filters;
            var _closure2_slot0 = var3;
            var2 = var4.options;
            var _closure2_slot1 = var2;
            var10 = var4.allowFetch;
            var12 = undefined;
            var _closure2_slot2 = var12;
            var _closure2_slot3 = var12;
            var _closure2_slot4 = var12;
            var _closure2_slot5 = var12;
            var _closure2_slot6 = var12;
            var _closure2_slot7 = var12;
            var _closure2_slot8 = var12;
            var _closure2_slot9 = var12;
            var6 = var8.type;
            var11 = null;
            var5 = 'channel';
            var4 = null;
            if(!(var5 === var6)) { _fun0011_ip = 11; continue _fun0011 }
case 9:
            var5 = var8.channel;
            var4 = var5.guild_id;
case 11:
            _closure2_slot2 = var4;
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var6 = 8;
            var6 = var9[var6];
            var13 = var7.bind(var12)(var6);
            var9 = var13.useStateFromStores;
            var6 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getGuild;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var9.bind(var13)(var7, var4, var6);
            var6 = _closure1_slot6;
            var4 = {};
            var17 = var4;
            var16 = var2;
            var9 = copyDataProperties(var17, var16);
            var9 = 'allowFetch';
            var4[8] = var10;
            var18 = undefined;
            var17 = var8;
            var16 = var7;
            var15 = var3;
            var14 = var4;
            var4 = var18[var6](var17, var16, var15, var14, var13);
            var8 = var4.descriptors;
            _closure2_slot3 = var8;
            var9 = var4.commands;
            _closure2_slot4 = var9;
            var7 = var4.sectionedCommands;
            _closure2_slot5 = var7;
            var10 = var4.loading;
            _closure2_slot6 = var10;
            var4 = _closure1_slot3;
            var6 = var4.useState;
            var11 = var6.bind(var4)(var11);
            var6 = _closure1_slot2;
            var5 = 2;
            var11 = var6.bind(var12)(var11, var5);
            var5 = 0;
            var6 = var11[var5];
            _closure2_slot7 = var6;
            var5 = 1;
            var5 = var11[var5];
            _closure2_slot8 = var5;
            var5 = var4.useMemo;
            var11 = var3.commandTypes;
            var3 = new Array(2);
            var3[0] = var11;
            var2 = var2.placeholderCount;
            var3[1] = var2;
            var2 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var4 = _closure1_slot16;
                    var2 = _closure2_slot1;
                    var5 = var2.placeholderCount;
                    var2 = null;
                    var6 = var2 != var5;
                    var2 = 0;
                    var3 = 0;
                    if(!var6) { _fun0012_ip = 85; continue _fun0012 }
case 33:
                    var3 = var5;
case 85:
                    var1 = _closure2_slot0;
                    var1 = var1.commandTypes;
                    var2 = var1[var2];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var5 = var5.bind(var4)(var2, var3);
            _closure2_slot9 = var5;
            var3 = var4.useMemo;
            var2 = new Array(6);
            var2[0] = var10;
            var2[1] = var9;
            var2[2] = var8;
            var2[3] = var7;
            var2[4] = var6;
            var2[5] = var5;
            var1 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var1 = {};
                    var4 = _closure2_slot6;
                    var1['loading'] = var4;
                    var4 = _closure2_slot4;
                    var1['commands'] = var4;
                    var4 = _closure2_slot3;
                    var1['activeSections'] = var4;
                    var4 = _closure2_slot5;
                    var1['commandsByActiveSection'] = var4;
                    var4 = _closure2_slot7;
                    var1['filteredSectionId'] = var4;
                    var4 = false;
                    var1['hasMoreAfter'] = var4;
                    var4 = _closure2_slot6;
                    if(var4) { _fun0013_ip = 86; continue _fun0013 }
case 87:
                    var4 = new Array(0);
                    _fun0013_ip = 88; continue _fun0013;
case 86:
                    var4 = _closure2_slot9;
case 88:
                    var1['placeholders'] = var4;
                    var4 = _closure2_slot3;
                    var1['sectionDescriptors'] = var4;
                    var4 = function filterSection(arg1) {
                        var3 = _closure2_slot8;
                        var1 = undefined;
                        var2 = arg1;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1['filterSection'] = var4;
                    var5 = _closure1_slot11;
                    var1['scrollDown'] = var5;
                    var5 = _closure2_slot7;
                    var6 = null;
                    if(!(var6 != var5)) { _fun0013_ip = 89; continue _fun0013 }
case 71:
                    var7 = _closure2_slot5;
                    var5 = var7.find;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.section;
                        var2 = var1.id;
                        var1 = _closure2_slot7;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var7 = var5.bind(var7)(var2);
                    if(!(var6 == var7)) { _fun0013_ip = 90; continue _fun0013 }
case 91:
                    var2 = new Array(0);
                    _fun0013_ip = 92; continue _fun0013;
case 90:
                    var8 = var7.section;
                    var5 = new Array(1);
                    var5[0] = var8;
                    var2 = var5;
case 92:
                    var1['activeSections'] = var2;
                    if(!(var6 == var7)) { _fun0013_ip = 46; continue _fun0013 }
case 79:
                    var2 = new Array(0);
                    _fun0013_ip = 20; continue _fun0013;
case 46:
                    var5 = new Array(1);
                    var5[0] = var7;
                    var2 = var5;
case 20:
                    var1['commandsByActiveSection'] = var2;
case 89:
                    var2 = _closure2_slot6;
                    if(!var2) { _fun0013_ip = 93; continue _fun0013 }
case 94:
                    var2 = _closure2_slot5;
                    var5 = 0;
                    var2 = var2[var5];
                    if(!(var6 == var2)) { _fun0013_ip = 95; continue _fun0013 }
case 96:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var6 = 9;
                    var7 = var7[var6];
                    var6 = undefined;
                    var6 = var8.bind(var6)(var7);
                    var6 = var6.BUILT_IN_SECTIONS;
                    var4 = _closure1_slot10;
                    var4 = var4.BUILT_IN;
                    var4 = var6[var4];
                    var6 = new Array(1);
                    var6[0] = var4;
                    var1['activeSections'] = var6;
                    var6 = {};
                    var6['section'] = var4;
                    var4 = _closure2_slot9;
                    var6['data'] = var4;
                    var4 = new Array(1);
                    var4[0] = var6;
                    var1['commandsByActiveSection'] = var4;
                    _fun0013_ip = 97; continue _fun0013;
case 95:
                    var4 = {};
                    var6 = var2.section;
                    var4['section'] = var6;
                    var10 = var2.data;
                    var2 = new Array(0);
                    var11 = var2;
                    var9 = 0;
                    var9 = arraySpread(var11, var10, var9);
                    var10 = _closure2_slot9;
                    var11 = var2;
                    var6 = arraySpread(var11, var10, var9);
                    var4['data'] = var2;
                    var2 = new Array(1);
                    var2[0] = var4;
                    var7 = _closure2_slot5;
                    var4 = var7.slice;
                    var6 = 1;
                    var10 = var4.bind(var7)(var6);
                    var11 = var2;
                    var9 = var6;
                    var4 = arraySpread(var11, var10, var9);
                    var1['commandsByActiveSection'] = var2;
case 97:
                    var10 = _closure2_slot4;
                    var2 = new Array(0);
                    var11 = var2;
                    var9 = 0;
                    var9 = arraySpread(var11, var10, var9);
                    var10 = _closure2_slot9;
                    var11 = var2;
                    var3 = arraySpread(var11, var10, var9);
                    var1['commands'] = var2;
case 93:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useDiscovery'] = var4;
    var4 = function executeQuery(arg1, arg2, arg3) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg2;
            var6 = arg3;
            var5 = _closure1_slot9;
            var4 = var5.query;
            var2 = arg1;
            var2 = var4.bind(var5)(var2, var1, var6);
            var7 = var2.descriptors;
            var9 = var2.commands;
            var4 = var2.loading;
            var8 = _closure1_slot16;
            var5 = 0;
            var2 = 0;
            if(!var4) { _fun0014_ip = 98; continue _fun0014 }
case 99:
            var6 = var6.placeholderCount;
            var10 = null;
            var10 = var10 != var6;
            var2 = 0;
            if(!var10) { _fun0014_ip = 98; continue _fun0014 }
case 100:
            var2 = var6;
case 98:
            var1 = var1.commandTypes;
            var1 = var1[var5];
            var6 = undefined;
            var10 = var8.bind(var6)(var2, var1);
            var1 = {};
            var2 = var9;
            if(!var4) { _fun0014_ip = 101; continue _fun0014 }
case 43:
            var8 = new Array(0);
            var13 = var8;
            var12 = var9;
            var11 = 0;
            var11 = arraySpread(var13, var12, var11);
            var13 = var8;
            var12 = var10;
            var9 = arraySpread(var13, var12, var11);
            var2 = var8;
case 101:
            var1['commands'] = var2;
            var2 = var7;
            if(!var4) { _fun0014_ip = 102; continue _fun0014 }
case 103:
            var4 = var7.length;
            var2 = var7;
            if(!(var5 === var4)) { _fun0014_ip = 102; continue _fun0014 }
case 61:
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 9;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var4 = var4.BUILT_IN_SECTIONS;
            var3 = _closure1_slot10;
            var3 = var3.BUILT_IN;
            var4 = var4[var3];
            var3 = new Array(1);
            var3[0] = var4;
            var2 = var3;
case 102:
            var1['sections'] = var2;
            return var1;
        }
    };
    var3['executeQuery'] = var4;
    var4 = function useQuery(arg1, arg2, arg3) {
        var3 = arg2;
        var2 = arg3;
        var _closure2_slot0 = var3;
        var _closure2_slot1 = var2;
        var8 = _closure1_slot7;
        var7 = {};
        var12 = var7;
        var11 = var2;
        var5 = copyDataProperties(var12, var11);
        var6 = true;
        var5 = 'allowFetch';
        var7[4] = var6;
        var6 = undefined;
        var5 = arg1;
        var5 = var8.bind(var6)(var5, var3, var7);
        var6 = var5.descriptors;
        var _closure2_slot2 = var6;
        var7 = var5.commands;
        var _closure2_slot3 = var7;
        var8 = var5.loading;
        var _closure2_slot4 = var8;
        var4 = _closure1_slot3;
        var5 = var4.useMemo;
        var9 = var3.commandTypes;
        var3 = new Array(2);
        var3[0] = var9;
        var2 = var2.placeholderCount;
        var3[1] = var2;
        var2 = function() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var4 = _closure1_slot16;
                var2 = _closure2_slot1;
                var5 = var2.placeholderCount;
                var2 = null;
                var6 = var2 != var5;
                var2 = 0;
                var3 = 0;
                if(!var6) { _fun0015_ip = 85; continue _fun0015 }
case 33:
                var3 = var5;
case 85:
                var1 = _closure2_slot0;
                var1 = var1.commandTypes;
                var2 = var1[var2];
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            }
        };
        var5 = var5.bind(var4)(var2, var3);
        var _closure2_slot5 = var5;
        var3 = var4.useMemo;
        var2 = new Array(4);
        var2[0] = var8;
        var2[1] = var7;
        var2[2] = var6;
        var2[3] = var5;
        var1 = function() {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var1 = {};
                var3 = _closure2_slot4;
                var6 = _closure2_slot3;
                if(var3) { _fun0016_ip = 51; continue _fun0016 }
case 104:
                var3 = var6;
                _fun0016_ip = 48; continue _fun0016;
case 51:
                var4 = new Array(0);
                var7 = 0;
                var9 = var4;
                var8 = var6;
                var7 = arraySpread(var9, var8, var7);
                var8 = _closure2_slot5;
                var9 = var4;
                var5 = arraySpread(var9, var8, var7);
                var3 = var4;
case 48:
                var1['commands'] = var3;
                var3 = _closure2_slot4;
                if(!var3) { _fun0016_ip = 98; continue _fun0016 }
case 105:
                var3 = _closure2_slot2;
                var4 = var3.length;
                var3 = 0;
                if(!(var3 !== var4)) { _fun0016_ip = 106; continue _fun0016 }
case 98:
                var2 = _closure2_slot2;
                _fun0016_ip = 59; continue _fun0016;
case 106:
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var4 = 9;
                var5 = var5[var4];
                var4 = undefined;
                var4 = var6.bind(var4)(var5);
                var4 = var4.BUILT_IN_SECTIONS;
                var3 = _closure1_slot10;
                var3 = var3.BUILT_IN;
                var4 = var4[var3];
                var3 = new Array(1);
                var3[0] = var4;
                var2 = var3;
case 59:
                var1['sections'] = var2;
                var2 = _closure1_slot11;
                var1['scrollDown'] = var2;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useQuery'] = var4;
    var4 = function useCommand(arg1, arg2) {
        var5 = arg2;
        var _closure2_slot0 = var5;
        var2 = _closure1_slot8;
        var8 = undefined;
        var7 = true;
        var6 = var2.bind(var8)(var7, var7);
        var _closure2_slot1 = var6;
        var4 = _closure1_slot5;
        var2 = arg1;
        var2 = var4.bind(var8)(var2, var7, var7);
        var _closure2_slot2 = var2;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var7 = var2.result;
        var2 = new Array(3);
        var2[0] = var7;
        var6 = var6.result;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var1 = _closure2_slot0;
                var7 = null;
                if(!(var7 != var1)) { _fun0017_ip = 107; continue _fun0017 }
case 104:
                var2 = _closure1_slot13;
                var1 = global;
                var5 = var1.Object;
                var4 = var5.values;
                var3 = _closure2_slot1;
                var9 = var3.result;
                var10 = var7 == var9;
                var6 = undefined;
                var3 = undefined;
                if(var10) { _fun0017_ip = 105; continue _fun0017 }
case 108:
                var3 = var9.sections;
case 105:
                if(!(var7 == var3)) { _fun0017_ip = 109; continue _fun0017 }
case 30:
                var3 = {};
case 109:
                var4 = var4.bind(var5)(var3);
                var3 = var4.concat;
                var9 = var1.Object;
                var5 = var9.values;
                var1 = _closure2_slot2;
                var10 = var1.result;
                var11 = var7 == var10;
                var1 = undefined;
                if(var11) { _fun0017_ip = 75; continue _fun0017 }
case 110:
                var1 = var10.sections;
case 75:
                if(!(var7 == var1)) { _fun0017_ip = 111; continue _fun0017 }
case 73:
                var1 = {};
case 111:
                var1 = var5.bind(var9)(var1);
                var1 = var3.bind(var4)(var1);
                var5 = var2.bind(var6)(var1);
                var2 = var5.bind(var6)();
                var1 = var2.done;
                var4 = var2;
                if(var1) { _fun0017_ip = 107; continue _fun0017 }
case 90:
                var2 = var4.value;
                var3 = var2.commands;
                var1 = _closure2_slot0;
                var3 = var3[var1];
                if(!(var7 == var3)) { _fun0017_ip = 112; continue _fun0017 }
case 113:
                var9 = var5.bind(var6)();
                var1 = var9.done;
                var4 = var9;
                if(var1) { _fun0017_ip = 107; continue _fun0017 }
case 114:
                _fun0017_ip = 90; continue _fun0017;
case 112:
                var1 = {};
                var1['command'] = var3;
                var2 = var2.descriptor;
                var2 = var2.application;
                var1['application'] = var2;
                return var1;
case 107:
                var1 = {};
                var2 = undefined;
                var1['command'] = var2;
                var1['application'] = var2;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useCommand'] = var4;
    var2 = function useCommandsForApplication(arg1, arg2, arg3) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var6 = arg2;
            var5 = arg3;
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var5;
            var2 = _closure1_slot8;
            var7 = undefined;
            var9 = true;
            var2 = var2.bind(var7)(var9, var9);
            var _closure2_slot2 = var2;
            var8 = _closure1_slot5;
            var4 = arg1;
            var8 = var8.bind(var7)(var4, var9, var9);
            var _closure2_slot3 = var8;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var9 = null;
            var11 = var9 == var2;
            var10 = undefined;
            if(var11) { _fun0018_ip = 68; continue _fun0018 }
case 100:
            var10 = var2.result;
case 68:
            var2 = new Array(4);
            var2[0] = var10;
            var9 = var9 == var8;
            var7 = undefined;
            if(var9) { _fun0018_ip = 43; continue _fun0018 }
case 115:
            var7 = var8.result;
case 43:
            var2[1] = var7;
            var2[2] = var6;
            var2[3] = var5;
            var1 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var1 = var1.result;
                    var7 = null;
                    var4 = var7 == var1;
                    var6 = undefined;
                    var5 = undefined;
                    if(var4) { _fun0019_ip = 48; continue _fun0019 }
case 34:
                    var4 = var1.sections;
                    var1 = var7 == var4;
                    var5 = undefined;
                    if(var1) { _fun0019_ip = 48; continue _fun0019 }
case 116:
                    var1 = _closure2_slot0;
                    var5 = var4[var1];
case 48:
                    if(!(var7 == var5)) { _fun0019_ip = 117; continue _fun0019 }
case 4:
                    var1 = _closure2_slot3;
                    var4 = var1.result;
                    var8 = var7 == var4;
                    var1 = undefined;
                    if(var8) { _fun0019_ip = 52; continue _fun0019 }
case 118:
                    var8 = var4.sections;
                    var4 = _closure2_slot0;
                    var1 = var8[var4];
case 52:
                    var5 = var1;
case 117:
                    var1 = global;
                    var8 = var1.Object;
                    var4 = var8.values;
                    var9 = var7 == var5;
                    var1 = undefined;
                    if(var9) { _fun0019_ip = 73; continue _fun0019 }
case 119:
                    var1 = var5.commands;
case 73:
                    if(!(var7 == var1)) { _fun0019_ip = 120; continue _fun0019 }
case 121:
                    var1 = {};
case 120:
                    var8 = var4.bind(var8)(var1);
                    var4 = var8.map;
                    var1 = function(arg1) {
                        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                            var5 = arg1;
                            var3 = var5.rootCommand;
                            var2 = null;
                            var1 = var5;
                            if(!(var2 != var3)) { _fun0020_ip = 122; continue _fun0020 }
case 37:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var2 = 6;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.buildCommand;
                            var2 = {};
                            var6 = var5.rootCommand;
                            var2['rootCommand'] = var6;
                            var6 = var5.rootCommand;
                            var2['command'] = var6;
                            var5 = var5.applicationId;
                            var2['applicationId'] = var5;
                            var1 = var3.bind(var4)(var2);
case 122:
                            return var1;
                        }
                    };
                    var9 = var4.bind(var8)(var1);
                    var8 = var9.reduce;
                    var4 = function(arg1, arg2) {
                        var1 = arg1;
                        var3 = arg2;
                        var2 = var3.id;
                        var1[var2] = var3;
                        return var1;
                    };
                    var1 = {};
                    var1 = var8.bind(var9)(var4, var1);
                    var _closure3_slot0 = var1;
                    var1 = {};
                    var8 = var7 == var5;
                    var4 = undefined;
                    if(var8) { _fun0019_ip = 65; continue _fun0019 }
case 16:
                    var5 = var5.descriptor;
                    var7 = var7 == var5;
                    var4 = undefined;
                    if(var7) { _fun0019_ip = 65; continue _fun0019 }
case 123:
                    var4 = var5.application;
case 65:
                    var1['application'] = var4;
                    var4 = _closure2_slot1;
                    var3 = var4.map;
                    var2 = function(arg1) {
                        var2 = _closure3_slot0;
                        var1 = arg1;
                        var1 = var2[var1];
                        return var1;
                    };
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.filter;
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 10;
                    var2 = var7[var2];
                    var2 = var5.bind(var6)(var2);
                    var2 = var2.isNotNullish;
                    var2 = var3.bind(var4)(var2);
                    var1['commands'] = var2;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useCommandsForApplication'] = var2;
    return var1;
})();