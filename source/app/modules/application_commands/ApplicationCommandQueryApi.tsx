// app/modules/application_commands/ApplicationCommandQueryApi.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 342; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
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
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot14;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot14;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
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
 342:
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
    var _closure1_slot14 = var1;
    var1 = function findCommandInSection(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var2 = arg2;
            var _closure2_slot0 = var2;
            var7 = null;
            if(!(var7 == var2)) { _fun0004_ip = 22; continue _fun0004 }
 18:
            var4 = undefined;
            return var4;
 22:
            var4 = var1.commands;
            var4 = var4[var2];
            if(!(var7 == var4)) { _fun0004_ip = 195; continue _fun0004 }
 39:
            var4 = global;
            var6 = var4.Object;
            var5 = var6.values;
            var4 = var1.commands;
            var5 = var5.bind(var6)(var4);
            var4 = var5.find;
            var3 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.rootCommand;
                    var2 = null;
                    var3 = var2 == var1;
                    var2 = undefined;
                    if(var3) { _fun0005_ip = 25; continue _fun0005 }
 20:
                    var2 = var1.id;
 25:
                    var1 = _closure2_slot0;
                    var1 = var2 === var1;
                    return var1;
                }
            };
            var3 = var4.bind(var5)(var3);
            var4 = var7 == var3;
            var8 = undefined;
            var9 = undefined;
            if(var4) { _fun0004_ip = 95; continue _fun0004 }
 89:
            var9 = var3.rootCommand;
 95:
            var4 = var7 != var9;
            var3 = undefined;
            if(!var4) { _fun0004_ip = 193; continue _fun0004 }
 104:
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
            if(var10) { _fun0004_ip = 170; continue _fun0004 }
 165:
            var8 = var9.id;
 170:
            var9 = var7 != var8;
            var7 = '';
            if(!var9) { _fun0004_ip = 184; continue _fun0004 }
 181:
            var7 = var8;
 184:
            var4['applicationId'] = var7;
            var3 = var5.bind(var6)(var4);
 193:
            return var3;
 195:
            var1 = var1.commands;
            var1 = var1[var2];
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function createPlaceholderCommands(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var6 = arg1;
            var5 = arg2;
            var1 = new Array(0);
            var4 = 0;
            var7 = var4 < var6;
            var2 = undefined;
            if(!var7) { _fun0006_ip = 51; continue _fun0006 }
 24:
            var8 = var1.push;
            var7 = _closure1_slot17;
            var7 = var7.bind(var2)(var4, var5);
            var7 = var8.bind(var1)(var7);
            var4 = var4 + 1;
            if(var4 < var6) { _fun0006_ip = 24; continue _fun0006 }
 51:
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
    var4 = native4;
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
 0:
            var4 = arg2;
            var6 = arg3;
            var _closure2_slot0 = var6;
            var5 = null;
            if(!(var5 != var4)) { _fun0007_ip = 306; continue _fun0007 }
 21:
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
            if(var13) { _fun0007_ip = 88; continue _fun0007 }
 82:
            var8 = var12.sections;
 88:
            if(!(var5 == var8)) { _fun0007_ip = 94; continue _fun0007 }
 92:
            var8 = {};
 94:
            var9 = var9.bind(var11)(var8);
            var8 = var9.concat;
            var11 = var10.Object;
            var10 = var11.values;
            var12 = var7.result;
            var13 = var5 == var12;
            var7 = undefined;
            if(var13) { _fun0007_ip = 136; continue _fun0007 }
 130:
            var7 = var12.sections;
 136:
            if(!(var5 == var7)) { _fun0007_ip = 142; continue _fun0007 }
 140:
            var7 = {};
 142:
            var7 = var10.bind(var11)(var7);
            var7 = var8.bind(var9)(var7);
            if(!(var5 == var6)) { _fun0007_ip = 240; continue _fun0007 }
 156:
            var6 = _closure1_slot13;
            var11 = var6.bind(var2)(var7);
            var8 = var11.bind(var2)();
            var6 = var8.done;
            var10 = var8;
            if(var6) { _fun0007_ip = 259; continue _fun0007 }
 180:
            var9 = var10.value;
            var6 = _closure1_slot15;
            var8 = var6.bind(var2)(var9, var4);
            if(!(var5 == var8)) { _fun0007_ip = 216; continue _fun0007 }
 199:
            var12 = var11.bind(var2)();
            var6 = var12.done;
            var10 = var12;
            if(var6) { _fun0007_ip = 259; continue _fun0007 }
 214:
            _fun0007_ip = 180; continue _fun0007;
 216:
            var6 = {};
            var9 = var9.descriptor;
            var9 = var9.application;
            var6['application'] = var9;
            var6['command'] = var8;
            return var6;
 240:
            var6 = var7.find;
            var3 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.descriptor;
                    var1 = var1.application;
                    var2 = null;
                    var3 = var2 == var1;
                    var2 = undefined;
                    if(var3) { _fun0008_ip = 30; continue _fun0008 }
 25:
                    var2 = var1.id;
 30:
                    var1 = _closure2_slot0;
                    var1 = var2 === var1;
                    return var1;
                }
            };
            var3 = var6.bind(var7)(var3);
            if(!(var5 == var3)) { _fun0007_ip = 272; continue _fun0007 }
 259:
            var5 = {};
            var5['application'] = var2;
            var5['command'] = var2;
            return var5;
 272:
            var1 = _closure1_slot15;
            var2 = var1.bind(var2)(var3, var4);
            var1 = {};
            var3 = var3.descriptor;
            var3 = var3.application;
            var1['application'] = var3;
            var1['command'] = var2;
            return var1;
 306:
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
 0:
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
            if(var8) { _fun0009_ip = 81; continue _fun0009 }
 62:
            var7 = var7.sections;
            var8 = var3 == var7;
            var2 = undefined;
            if(var8) { _fun0009_ip = 81; continue _fun0009 }
 77:
            var2 = var7[var6];
 81:
            if(!(var3 == var2)) { _fun0009_ip = 122; continue _fun0009 }
 85:
            var7 = var5.result;
            var8 = var3 == var7;
            var5 = undefined;
            if(var8) { _fun0009_ip = 119; continue _fun0009 }
 100:
            var7 = var7.sections;
            var8 = var3 == var7;
            var5 = undefined;
            if(var8) { _fun0009_ip = 119; continue _fun0009 }
 115:
            var5 = var7[var6];
 119:
            var2 = var5;
 122:
            if(!(var3 == var2)) { _fun0009_ip = 163; continue _fun0009 }
 126:
            var5 = var4.result;
            var7 = var3 == var5;
            var4 = undefined;
            if(var7) { _fun0009_ip = 160; continue _fun0009 }
 141:
            var5 = var5.sections;
            var7 = var3 == var5;
            var4 = undefined;
            if(var7) { _fun0009_ip = 160; continue _fun0009 }
 156:
            var4 = var5[var6];
 160:
            var2 = var4;
 163:
            var3 = var3 == var2;
            var1 = undefined;
            if(var3) { _fun0009_ip = 178; continue _fun0009 }
 172:
            var1 = var2.descriptor;
 178:
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
 0:
            var4 = _closure1_slot9;
            var1 = var4.getUserState;
            var1 = var1.bind(var4)();
            var3 = var4.getContextState;
            var2 = arg1;
            var3 = var3.bind(var4)(var2);
            var4 = null;
            var6 = var4 == var1;
            var5 = undefined;
            if(var6) { _fun0010_ip = 48; continue _fun0010 }
 42:
            var5 = var1.result;
 48:
            var1 = new Array(2);
            var1[0] = var5;
            var4 = var4 == var3;
            var2 = undefined;
            if(var4) { _fun0010_ip = 71; continue _fun0010 }
 65:
            var2 = var3.result;
 71:
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
 0:
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
            if(!(var5 === var6)) { _fun0011_ip = 96; continue _fun0011 }
 86:
            var5 = var8.channel;
            var4 = var5.guild_id;
 96:
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
            var4[var9] = var10;
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
 0:
                    var4 = _closure1_slot16;
                    var2 = _closure2_slot1;
                    var5 = var2.placeholderCount;
                    var2 = null;
                    var6 = var2 != var5;
                    var2 = 0;
                    var3 = 0;
                    if(!var6) { _fun0012_ip = 36; continue _fun0012 }
 33:
                    var3 = var5;
 36:
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
 0:
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
                    if(var4) { _fun0013_ip = 72; continue _fun0013 }
 66:
                    var4 = new Array(0);
                    _fun0013_ip = 76; continue _fun0013;
 72:
                    var4 = _closure2_slot9;
 76:
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
                    if(!(var6 != var5)) { _fun0013_ip = 200; continue _fun0013 }
 122:
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
                    if(!(var6 == var7)) { _fun0013_ip = 151; continue _fun0013 }
 145:
                    var2 = new Array(0);
                    _fun0013_ip = 167; continue _fun0013;
 151:
                    var8 = var7.section;
                    var5 = new Array(1);
                    var5[0] = var8;
                    var2 = var5;
 167:
                    var1['activeSections'] = var2;
                    if(!(var6 == var7)) { _fun0013_ip = 183; continue _fun0013 }
 177:
                    var2 = new Array(0);
                    _fun0013_ip = 194; continue _fun0013;
 183:
                    var5 = new Array(1);
                    var5[0] = var7;
                    var2 = var5;
 194:
                    var1['commandsByActiveSection'] = var2;
 200:
                    var2 = _closure2_slot6;
                    if(!var2) { _fun0013_ip = 429; continue _fun0013 }
 210:
                    var2 = _closure2_slot5;
                    var5 = 0;
                    var2 = var2[var5];
                    if(!(var6 == var2)) { _fun0013_ip = 310; continue _fun0013 }
 224:
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
                    _fun0013_ip = 395; continue _fun0013;
 310:
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
 395:
                    var10 = _closure2_slot4;
                    var2 = new Array(0);
                    var11 = var2;
                    var9 = 0;
                    var9 = arraySpread(var11, var10, var9);
                    var10 = _closure2_slot9;
                    var11 = var2;
                    var3 = arraySpread(var11, var10, var9);
                    var1['commands'] = var2;
 429:
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
 0:
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
            if(!var4) { _fun0014_ip = 77; continue _fun0014 }
 57:
            var6 = var6.placeholderCount;
            var10 = null;
            var10 = var10 != var6;
            var2 = 0;
            if(!var10) { _fun0014_ip = 77; continue _fun0014 }
 74:
            var2 = var6;
 77:
            var1 = var1.commandTypes;
            var1 = var1[var5];
            var6 = undefined;
            var10 = var8.bind(var6)(var2, var1);
            var1 = {};
            var2 = var9;
            if(!var4) { _fun0014_ip = 132; continue _fun0014 }
 103:
            var8 = new Array(0);
            var13 = var8;
            var12 = var9;
            var11 = 0;
            var11 = arraySpread(var13, var12, var11);
            var13 = var8;
            var12 = var10;
            var9 = arraySpread(var13, var12, var11);
            var2 = var8;
 132:
            var1['commands'] = var2;
            var2 = var7;
            if(!var4) { _fun0014_ip = 206; continue _fun0014 }
 143:
            var4 = var7.length;
            var2 = var7;
            if(!(var5 === var4)) { _fun0014_ip = 206; continue _fun0014 }
 155:
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
 206:
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
        var7[var5] = var6;
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
 0:
                var4 = _closure1_slot16;
                var2 = _closure2_slot1;
                var5 = var2.placeholderCount;
                var2 = null;
                var6 = var2 != var5;
                var2 = 0;
                var3 = 0;
                if(!var6) { _fun0015_ip = 36; continue _fun0015 }
 33:
                var3 = var5;
 36:
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
 0:
                var1 = {};
                var3 = _closure2_slot4;
                var6 = _closure2_slot3;
                if(var3) { _fun0016_ip = 21; continue _fun0016 }
 16:
                var3 = var6;
                _fun0016_ip = 51; continue _fun0016;
 21:
                var4 = new Array(0);
                var7 = 0;
                var9 = var4;
                var8 = var6;
                var7 = arraySpread(var9, var8, var7);
                var8 = _closure2_slot5;
                var9 = var4;
                var5 = arraySpread(var9, var8, var7);
                var3 = var4;
 51:
                var1['commands'] = var3;
                var3 = _closure2_slot4;
                if(!var3) { _fun0016_ip = 78; continue _fun0016 }
 63:
                var3 = _closure2_slot2;
                var4 = var3.length;
                var3 = 0;
                if(!(var3 !== var4)) { _fun0016_ip = 84; continue _fun0016 }
 78:
                var2 = _closure2_slot2;
                _fun0016_ip = 140; continue _fun0016;
 84:
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
 140:
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
 0:
                var1 = _closure2_slot0;
                var7 = null;
                if(!(var7 != var1)) { _fun0017_ip = 215; continue _fun0017 }
 16:
                var2 = _closure1_slot13;
                var1 = global;
                var5 = var1.Object;
                var4 = var5.values;
                var3 = _closure2_slot1;
                var9 = var3.result;
                var10 = var7 == var9;
                var6 = undefined;
                var3 = undefined;
                if(var10) { _fun0017_ip = 63; continue _fun0017 }
 57:
                var3 = var9.sections;
 63:
                if(!(var7 == var3)) { _fun0017_ip = 69; continue _fun0017 }
 67:
                var3 = {};
 69:
                var4 = var4.bind(var5)(var3);
                var3 = var4.concat;
                var9 = var1.Object;
                var5 = var9.values;
                var1 = _closure2_slot2;
                var10 = var1.result;
                var11 = var7 == var10;
                var1 = undefined;
                if(var11) { _fun0017_ip = 115; continue _fun0017 }
 109:
                var1 = var10.sections;
 115:
                if(!(var7 == var1)) { _fun0017_ip = 121; continue _fun0017 }
 119:
                var1 = {};
 121:
                var1 = var5.bind(var9)(var1);
                var1 = var3.bind(var4)(var1);
                var5 = var2.bind(var6)(var1);
                var2 = var5.bind(var6)();
                var1 = var2.done;
                var4 = var2;
                if(var1) { _fun0017_ip = 215; continue _fun0017 }
 151:
                var2 = var4.value;
                var3 = var2.commands;
                var1 = _closure2_slot0;
                var3 = var3[var1];
                if(!(var7 == var3)) { _fun0017_ip = 191; continue _fun0017 }
 174:
                var9 = var5.bind(var6)();
                var1 = var9.done;
                var4 = var9;
                if(var1) { _fun0017_ip = 215; continue _fun0017 }
 189:
                _fun0017_ip = 151; continue _fun0017;
 191:
                var1 = {};
                var1['command'] = var3;
                var2 = var2.descriptor;
                var2 = var2.application;
                var1['application'] = var2;
                return var1;
 215:
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
 0:
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
            if(var11) { _fun0018_ip = 81; continue _fun0018 }
 75:
            var10 = var2.result;
 81:
            var2 = new Array(4);
            var2[0] = var10;
            var9 = var9 == var8;
            var7 = undefined;
            if(var9) { _fun0018_ip = 104; continue _fun0018 }
 98:
            var7 = var8.result;
 104:
            var2[1] = var7;
            var2[2] = var6;
            var2[3] = var5;
            var1 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                    var1 = _closure2_slot2;
                    var1 = var1.result;
                    var7 = null;
                    var4 = var7 == var1;
                    var6 = undefined;
                    var5 = undefined;
                    if(var4) { _fun0019_ip = 51; continue _fun0019 }
 28:
                    var4 = var1.sections;
                    var1 = var7 == var4;
                    var5 = undefined;
                    if(var1) { _fun0019_ip = 51; continue _fun0019 }
 43:
                    var1 = _closure2_slot0;
                    var5 = var4[var1];
 51:
                    if(!(var7 == var5)) { _fun0019_ip = 91; continue _fun0019 }
 55:
                    var1 = _closure2_slot3;
                    var4 = var1.result;
                    var8 = var7 == var4;
                    var1 = undefined;
                    if(var8) { _fun0019_ip = 88; continue _fun0019 }
 74:
                    var8 = var4.sections;
                    var4 = _closure2_slot0;
                    var1 = var8[var4];
 88:
                    var5 = var1;
 91:
                    var1 = global;
                    var8 = var1.Object;
                    var4 = var8.values;
                    var9 = var7 == var5;
                    var1 = undefined;
                    if(var9) { _fun0019_ip = 119; continue _fun0019 }
 113:
                    var1 = var5.commands;
 119:
                    if(!(var7 == var1)) { _fun0019_ip = 125; continue _fun0019 }
 123:
                    var1 = {};
 125:
                    var8 = var4.bind(var8)(var1);
                    var4 = var8.map;
                    var1 = function(arg1) {
                        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                            var5 = arg1;
                            var3 = var5.rootCommand;
                            var2 = null;
                            var1 = var5;
                            if(!(var2 != var3)) { _fun0020_ip = 87; continue _fun0020 }
 18:
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
 87:
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
                    if(var8) { _fun0019_ip = 199; continue _fun0019 }
 179:
                    var5 = var5.descriptor;
                    var7 = var7 == var5;
                    var4 = undefined;
                    if(var7) { _fun0019_ip = 199; continue _fun0019 }
 194:
                    var4 = var5.application;
 199:
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