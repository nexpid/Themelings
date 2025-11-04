// app/modules/application_commands/native/ApplicationCommandManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
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
            var2 = var3.@@iterator;
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
            var9 = _closure1_slot17;
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
            var7 = _closure1_slot17;
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
    var _closure1_slot16 = var1;
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
    var _closure1_slot17 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var9 = 0;
    var4 = var6[var9];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var8 = 1;
    var4 = var6[var8];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DraftType;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot9 = var7;
    var7 = var4.AutoCompleteResultTypes;
    var _closure1_slot10 = var7;
    var4 = var4.WHITESPACE_RE;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.COMMAND_SENTINEL;
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MediaKeyboardTarget;
    var _closure1_slot13 = var4;
    var4 = function getNextOption(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg2;
            var _closure2_slot0 = var2;
            var2 = arg3;
            var _closure2_slot1 = var2;
            var2 = arg1;
            var4 = var2.options;
            var5 = null;
            var2 = var5 == var4;
            var3 = undefined;
            if(var2) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var2 = var4.filter;
            var1 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.required;
                    if(var1) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                    var1 = _closure2_slot1;
case 38:
                    if(!var1) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                    var4 = _closure2_slot0;
                    var3 = var4.has;
                    var2 = var2.name;
                    var2 = var3.bind(var4)(var2);
                    var1 = !var2;
case 40:
                    return var1;
                }
            };
            var3 = var2.bind(var4)(var1);
case 36:
            var2 = var5 != var3;
            var1 = null;
            if(!var2) { _fun0004_ip = 42; continue _fun0004 }
case 7:
            var4 = var3.length;
            var2 = 0;
            var4 = var4 > var2;
            var1 = null;
            if(!var4) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var1 = var3[var2];
case 42:
            return var1;
        }
    };
    var _closure1_slot14 = var4;
    var4 = {};
    var4['FULL_COMMAND'] = var9;
    var7 = 'FULL_COMMAND';
    var4[var9] = var7;
    var4['PARTIAL_COMMAND'] = var8;
    var7 = 'PARTIAL_COMMAND';
    var4[var8] = var7;
    var _closure1_slot15 = var4;
    var2 = function() {
        var4 = _closure1_slot6;
        var3 = function ApplicationCommandManager(arg1) {
            var2 = arg1;
            var3 = this;
            var _closure3_slot0 = var3;
            var _closure3_slot1 = var3;
            var7 = _closure1_slot5;
            var6 = _closure2_slot0;
            var1 = undefined;
            var6 = var7.bind(var1)(var3, var6);
            var6 = new Array(0);
            var3['chatInputNodes'] = var6;
            var6 = global;
            var7 = var6.Map;
            var8 = var7.prototype;
            var8 = Object.create(var8, {constructor: {value: var7}});
            var11 = var8;
            var7 = new var11[var7](var10);
            var7 = var7 instanceof Object ? var7 : var8;
            var3['optionsToNodes'] = var7;
            var6 = var6.Map;
            var7 = var6.prototype;
            var7 = Object.create(var7, {constructor: {value: var6}});
            var11 = var7;
            var6 = new var11[var6](var10);
            var6 = var6 instanceof Object ? var6 : var7;
            var3['optionValueNodes'] = var6;
            var6 = _closure1_slot1;
            var7 = _closure1_slot3;
            var5 = 8;
            var5 = var7[var5];
            var5 = var6.bind(var1)(var5);
            var6 = var5.prototype;
            var6 = Object.create(var6, {constructor: {value: var5}});
            var11 = var6;
            var5 = new var11[var5](var10);
            var5 = var5 instanceof Object ? var5 : var6;
            var3['parser'] = var5;
            var5 = {};
            var3['optionValues'] = var5;
            var5 = {};
            var3['optionValidationResults'] = var5;
            var5 = true;
            var3['canAutoInsertFirstOption'] = var5;
            var5 = {};
            var3['preferredOptionValues'] = var5;
            var5 = function(arg1, arg2, arg3, arg4) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var8 = arg1;
                    var4 = arg4;
                    var1 = _closure3_slot0;
                    var1 = var1.props;
                    var5 = var1.activeCommand;
                    var6 = _closure1_slot8;
                    var3 = var6.getActiveOption;
                    var6 = var3.bind(var6)(var8);
                    var3 = arg3;
                    if(!var3) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                    var3 = null;
                    if(!(var3 != var5)) { _fun0006_ip = 44; continue _fun0006 }
case 46:
                    if(!(var3 == var6)) { _fun0006_ip = 47; continue _fun0006 }
case 44:
                    var5 = var4.type;
                    var3 = _closure1_slot10;
                    var3 = var3.SLASH;
                    if(!(var5 === var3)) { _fun0006_ip = 48; continue _fun0006 }
case 43:
                    var7 = _closure3_slot0;
                    var5 = var7.setCommand;
                    var3 = {};
                    var3['channelId'] = var8;
                    var8 = var4.command;
                    var3['command'] = var8;
                    var8 = var4.section;
                    var3['section'] = var8;
                    var8 = var4.location;
                    var3['location'] = var8;
                    var8 = var4.visualSection;
                    var3['visualSection'] = var8;
                    var8 = var4.query;
                    var3['query'] = var8;
                    var8 = true;
                    var3['addSpace'] = var8;
                    var3 = var5.bind(var7)(var3);
                    _fun0006_ip = 6; continue _fun0006;
case 48:
                    var3 = false;
                    return var3;
case 47:
                    var5 = var4.type;
                    var3 = _closure1_slot10;
                    var3 = var3.USER;
                    if(!(var3 !== var5)) { _fun0006_ip = 49; continue _fun0006 }
case 50:
                    var3 = _closure1_slot10;
                    var3 = var3.ROLE;
                    if(!(var3 !== var5)) { _fun0006_ip = 51; continue _fun0006 }
case 52:
                    var1 = _closure1_slot10;
                    var3 = var1.CHANNEL;
                    var1 = undefined;
                    if(!(var3 === var5)) { _fun0006_ip = 53; continue _fun0006 }
case 54:
                    var3 = {};
                    var5 = 'channelMention';
                    var3['type'] = var5;
                    var5 = var4.channel;
                    var5 = var5.id;
                    var3['channelId'] = var5;
                    var1 = var3;
                    _fun0006_ip = 53; continue _fun0006;
case 51:
                    var3 = {};
                    var5 = 'roleMention';
                    var3['type'] = var5;
                    var5 = var4.id;
                    var3['roleId'] = var5;
                    var1 = var3;
                    _fun0006_ip = 53; continue _fun0006;
case 49:
                    var3 = {};
                    var5 = 'userMention';
                    var3['type'] = var5;
                    var4 = var4.user;
                    var4 = var4.id;
                    var3['userId'] = var4;
                    var1 = var3;
case 53:
                    var5 = _closure3_slot0;
                    var4 = var5.insertOrJumpCommandOption;
                    var3 = {};
                    var2 = arg2;
                    var3['displayText'] = var2;
                    var2 = true;
                    var3['preferred'] = var2;
                    var3['value'] = var1;
                    var11 = undefined;
                    var10 = false;
                    var13 = var5;
                    var12 = var6;
                    var9 = var3;
                    var1 = var13[var4](var12, var11, var10, var9, var8);
case 6:
                    var1 = true;
                    return var1;
                }
            };
            var3['setAutoCompleteResult'] = var5;
            var5 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = arg1;
                    var15 = var1.channelId;
                    var7 = var1.command;
                    var14 = var1.section;
                    var9 = var1.location;
                    var12 = var1.visualSection;
                    var10 = var1.query;
                    var11 = var1.addSpace;
                    var5 = var1.commandText;
                    var1 = _closure3_slot0;
                    var1 = var1.ref;
                    var3 = var1.current;
                    var1 = var3.setText;
                    var4 = null;
                    if(!(var4 == var5)) { _fun0007_ip = 55; continue _fun0007 }
case 43:
                    var16 = _closure1_slot12;
                    var13 = var7.displayName;
                    var6 = global;
                    var6 = var6.HermesInternal;
                    var8 = var6.concat;
                    var6 = '';
                    var8 = var8.bind(var6)(var16, var13);
                    if(!var11) { _fun0007_ip = 56; continue _fun0007 }
case 57:
                    var6 = ' ';
case 56:
                    var5 = var8 + var6;
case 55:
                    var1 = var1.bind(var3)(var5);
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot3;
                    var1 = 9;
                    var3 = var13[var1];
                    var1 = undefined;
                    var8 = var11.bind(var1)(var3);
                    var5 = var8.setActiveCommand;
                    var3 = {};
                    var3['channelId'] = var15;
                    var3['command'] = var7;
                    var3['section'] = var14;
                    var3['location'] = var9;
                    var9 = 10;
                    var9 = var13[var9];
                    var11 = var11.bind(var1)(var9);
                    var9 = var11.getCommandTriggerSection;
                    var9 = var9.bind(var11)(var12);
                    var3['triggerSection'] = var9;
                    var11 = var4 == var10;
                    var9 = undefined;
                    if(var11) { _fun0007_ip = 58; continue _fun0007 }
case 59:
                    var9 = var10.length;
case 58:
                    var3['queryLength'] = var9;
                    var3 = var5.bind(var8)(var3);
                    var5 = var7.id;
                    var3 = _closure3_slot0;
                    var8 = var4 == var3;
                    var3 = undefined;
                    if(var8) { _fun0007_ip = 60; continue _fun0007 }
case 61:
                    var8 = _closure3_slot0;
                    var8 = var8.preferredCommand;
                    var9 = var4 == var8;
                    var3 = undefined;
                    if(var9) { _fun0007_ip = 60; continue _fun0007 }
case 62:
                    var3 = var8.id;
case 60:
                    if(!(var5 !== var3)) { _fun0007_ip = 63; continue _fun0007 }
case 64:
                    var3 = _closure3_slot0;
                    if(!(var4 != var3)) { _fun0007_ip = 63; continue _fun0007 }
case 65:
                    var4 = _closure3_slot0;
                    var3 = var4.updateApplicationCommandManagerState;
                    var2 = {};
                    var5 = {};
                    var18 = var5;
                    var17 = var7;
                    var7 = copyDataProperties(var18, var17);
                    var6 = _closure1_slot15;
                    var7 = var6.FULL_COMMAND;
                    var6 = 'preferredCommandType';
                    var5[var6] = var7;
                    var2['preferredCommand'] = var5;
                    var2 = var3.bind(var4)(var2);
case 63:
                    return var1;
                }
            };
            var3['setCommand'] = var5;
            var5 = function(arg1, arg2, arg3) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var8 = arg1;
                    var7 = arg2;
                    var1 = _closure3_slot0;
                    var3 = var1.ref;
                    var5 = var3.current;
                    var4 = var5.setText;
                    var10 = _closure1_slot12;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var9 = var3.concat;
                    var3 = '';
                    var3 = var9.bind(var3)(var10, var7);
                    var3 = var4.bind(var5)(var3);
                    var4 = var1.preferredCommand;
                    var1 = null;
                    var5 = var1 == var4;
                    var1 = undefined;
                    var3 = undefined;
                    if(var5) { _fun0008_ip = 66; continue _fun0008 }
case 67:
                    var3 = var4.id;
case 66:
                    if(!(var8 !== var3)) { _fun0008_ip = 68; continue _fun0008 }
case 69:
                    var4 = _closure3_slot0;
                    var3 = var4.updateApplicationCommandManagerState;
                    var2 = {};
                    var5 = {};
                    var5['id'] = var8;
                    var5['untranslatedName'] = var7;
                    var5['displayName'] = var7;
                    var6 = _closure1_slot15;
                    var6 = var6.PARTIAL_COMMAND;
                    var5['preferredCommandType'] = var6;
                    var2['preferredCommand'] = var5;
                    var5 = arg3;
                    var2['location'] = var5;
                    var2 = var3.bind(var4)(var2);
case 68:
                    return var1;
                }
            };
            var3['setPartialCommand'] = var5;
            var5 = function(arg1, arg2) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var11 = arg2;
                    var7 = global;
                    var4 = var7.JSON;
                    var3 = var4.parse;
                    var1 = arg1;
                    var3 = var3.bind(var4)(var1);
                    var5 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var1 = 10;
                    var4 = var9[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.extractInteractionDataProps;
                    var4 = var4.bind(var5)(var3);
                    var10 = var4.commandKey;
                    var8 = var4.interactionOptions;
                    var5 = _closure1_slot2;
                    var4 = 11;
                    var4 = var9[var4];
                    var9 = var5.bind(var1)(var4);
                    var5 = var9.getCachedCommand;
                    var4 = {};
                    var12 = 'channel';
                    var4['type'] = var12;
                    var4['channel'] = var11;
                    var5 = var5.bind(var9)(var4, var10);
                    var4 = var5.application;
                    var5 = var5.command;
                    var _closure4_slot0 = var5;
                    var9 = null;
                    if(!(var9 == var5)) { _fun0009_ip = 22; continue _fun0009 }
case 70:
                    var14 = _closure3_slot0;
                    var13 = var14.setPartialCommand;
                    var12 = var3.id;
                    var10 = var3.name;
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot3;
                    var3 = 12;
                    var3 = var16[var3];
                    var3 = var15.bind(var1)(var3);
                    var3 = var3.ApplicationCommandTriggerLocations;
                    var3 = var3.PASTE;
                    var3 = var13.bind(var14)(var12, var10, var3);
                    _fun0009_ip = 71; continue _fun0009;
case 22:
                    var3 = var9 != var4;
                    var10 = null;
                    if(!var3) { _fun0009_ip = 72; continue _fun0009 }
case 54:
                    var3 = {};
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot3;
                    var12 = 12;
                    var12 = var14[var12];
                    var12 = var13.bind(var1)(var12);
                    var12 = var12.ApplicationCommandSectionType;
                    var12 = var12.APPLICATION;
                    var3['type'] = var12;
                    var12 = var4.id;
                    var3['id'] = var12;
                    var12 = var4.icon;
                    var3['icon'] = var12;
                    var13 = var4.bot;
                    var14 = var9 == var13;
                    var12 = undefined;
                    if(var14) { _fun0009_ip = 73; continue _fun0009 }
case 74:
                    var12 = var13.username;
case 73:
                    if(!(var9 == var12)) { _fun0009_ip = 75; continue _fun0009 }
case 76:
                    var12 = var4.name;
case 75:
                    var3['name'] = var12;
                    var3['application'] = var4;
                    var10 = var3;
case 72:
                    var4 = _closure1_slot0;
                    var12 = _closure1_slot3;
                    var3 = 13;
                    var3 = var12[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.getInitialValuesFromInteractionOptions;
                    if(!(var9 == var8)) { _fun0009_ip = 77; continue _fun0009 }
case 78:
                    var8 = new Array(0);
case 77:
                    var8 = var3.bind(var4)(var5, var8);
                    var _closure4_slot1 = var8;
                    var4 = var7.Object;
                    var3 = var4.keys;
                    var8 = var3.bind(var4)(var8);
                    var4 = var8.map;
                    var3 = function(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var6 = arg1;
                            var _closure5_slot0 = var6;
                            var1 = _closure4_slot0;
                            var9 = var1.options;
                            var1 = null;
                            var7 = var1 == var9;
                            var2 = undefined;
                            if(var7) { _fun0010_ip = 79; continue _fun0010 }
case 80:
                            var8 = var9.find;
                            var7 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.name;
                                var1 = _closure5_slot0;
                                var1 = var2 === var1;
                                return var1;
                            };
                            var2 = var8.bind(var9)(var7);
case 79:
                            var5 = _closure4_slot1;
                            var5 = var5[var6];
                            var _closure5_slot1 = var5;
                            if(!(var1 != var2)) { _fun0010_ip = 16; continue _fun0010 }
case 81:
                            if(!(var1 != var5)) { _fun0010_ip = 16; continue _fun0010 }
case 35:
                            var7 = var5.value;
                            var5 = var1 == var7;
                            var6 = undefined;
                            if(var5) { _fun0010_ip = 82; continue _fun0010 }
case 83:
                            var5 = var7.toString;
                            var6 = var5.bind(var7)();
case 82:
                            var5 = var2.choices;
                            if(!(var1 != var5)) { _fun0010_ip = 84; continue _fun0010 }
case 85:
                            var7 = var2.choices;
                            var5 = var7.find;
                            var4 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.value;
                                var1 = _closure5_slot1;
                                var1 = var1.value;
                                var1 = var2 === var1;
                                return var1;
                            };
                            var4 = var5.bind(var7)(var4);
                            var5 = var1 == var4;
                            var3 = undefined;
                            if(var5) { _fun0010_ip = 86; continue _fun0010 }
case 87:
                            var3 = var4.displayName;
case 86:
                            var6 = var3;
case 84:
                            var5 = var2.displayName;
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var4 = var2.concat;
                            var3 = '';
                            var2 = ':';
                            var2 = var4.bind(var3)(var5, var2, var6);
                            return var2;
case 16:
                            return var1;
                        }
                    };
                    var4 = var4.bind(var8)(var3);
                    var3 = var4.filter;
                    var2 = function(arg1) {
                        var2 = null;
                        var1 = arg1;
                        var1 = var2 != var1;
                        return var1;
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.join;
                    var9 = ' ';
                    var8 = var2.bind(var3)(var9);
                    var4 = _closure3_slot0;
                    var3 = var4.setCommand;
                    var2 = {};
                    var11 = var11.id;
                    var2['channelId'] = var11;
                    var2['command'] = var5;
                    var2['section'] = var10;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot3;
                    var10 = 12;
                    var10 = var12[var10];
                    var10 = var11.bind(var1)(var10);
                    var10 = var10.ApplicationCommandTriggerLocations;
                    var10 = var10.PASTE;
                    var2['location'] = var10;
                    var11 = _closure1_slot12;
                    var10 = var5.displayName;
                    var5 = var7.HermesInternal;
                    var6 = var5.concat;
                    var5 = '';
                    var6 = var6.bind(var5)(var11, var10);
                    var11 = var8.length;
                    var10 = 0;
                    if(!(var10 !== var11)) { _fun0009_ip = 88; continue _fun0009 }
case 89:
                    var7 = var7.HermesInternal;
                    var7 = var7.concat;
                    var5 = var7.bind(var9)(var8);
case 88:
                    var5 = var6 + var5;
                    var2['commandText'] = var5;
                    var2 = var3.bind(var4)(var2);
case 71:
                    return var1;
                }
            };
            var3['setPastedCommand'] = var5;
            var5 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.newState;
                    var6 = var1.preferredCommand;
                    var5 = var1.location;
                    var3 = _closure3_slot0;
                    var2 = var3.mergePropsAndUpdate;
                    var1 = {};
                    var8 = null;
                    if(!(var8 == var4)) { _fun0011_ip = 36; continue _fun0011 }
case 90:
                    var7 = _closure3_slot0;
                    var4 = var7.props;
case 36:
                    var10 = var1;
                    var9 = var4;
                    var4 = copyDataProperties(var10, var9);
                    var4 = 'preferredCommand';
                    var1[var4] = var6;
                    var4 = 'location';
                    var1[var4] = var5;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var3['updateApplicationCommandManagerState'] = var5;
            var5 = function() {
                var2 = _closure3_slot0;
                var9 = var2.parser;
                var4 = var9.addRule;
                var3 = {'ruleId': 'commandOptionParserRuleId', 'type': null, 'matchFunction': null, 'style': null, 'deleteNodeOnBackspace': true, 'editDisabled': true};
                var7 = _closure1_slot0;
                var8 = _closure1_slot3;
                var6 = 8;
                var10 = var8[var6];
                var1 = undefined;
                var10 = var7.bind(var1)(var10);
                var10 = var10.ChatInputNodeType;
                var10 = var10.COMMAND_OPTION;
                var3['type'] = var10;
                var10 = function matchFunction(arg1, arg2) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.getMatchedOptions;
                    var2 = arg1;
                    var1 = arg2;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var3['matchFunction'] = var10;
                var10 = function style() {
                    var1 = _closure3_slot0;
                    var2 = var1.styles;
                    var1 = var2.commandOption;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['style'] = var10;
                var3 = var4.bind(var9)(var3);
                var9 = var2.parser;
                var4 = var9.addRule;
                var3 = {};
                var10 = 'commandOptionValueParserRuleId';
                var3['ruleId'] = var10;
                var10 = var8[var6];
                var10 = var7.bind(var1)(var10);
                var10 = var10.ChatInputNodeType;
                var10 = var10.COMMAND_OPTION_WITH_VALUE;
                var3['type'] = var10;
                var10 = function matchFunction(arg1, arg2) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.getMatchedOptionsWithValue;
                    var2 = arg1;
                    var1 = arg2;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var3['matchFunction'] = var10;
                var10 = function style() {
                    var1 = _closure3_slot0;
                    var2 = var1.styles;
                    var1 = var2.commandOption;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['style'] = var10;
                var10 = function editDisabled(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.data;
                        var2 = null;
                        var3 = var2 == var1;
                        var4 = undefined;
                        var2 = undefined;
                        if(var3) { _fun0012_ip = 80; continue _fun0012 }
case 91:
                        var1 = var1.option;
                        var2 = var1.type;
case 80:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var1 = 15;
                        var1 = var5[var1];
                        var1 = var3.bind(var4)(var1);
                        var1 = var1.ApplicationCommandOptionType;
                        var1 = var1.ATTACHMENT;
                        var1 = var2 === var1;
                        return var1;
                    }
                };
                var3['editDisabled'] = var10;
                var3 = var4.bind(var9)(var3);
                var9 = var2.parser;
                var4 = var9.addRule;
                var3 = {};
                var10 = 'emojiHighlightRuleId';
                var3['ruleId'] = var10;
                var10 = var8[var6];
                var10 = var7.bind(var1)(var10);
                var10 = var10.ChatInputNodeType;
                var10 = var10.EMOJI_HIGHLIGHT;
                var3['type'] = var10;
                var10 = function matchFunction(arg1) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.getEmojiHighlightNodes;
                    var1 = _closure3_slot0;
                    var1 = var1.props;
                    var2 = var1.channel;
                    var1 = arg1;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var3['matchFunction'] = var10;
                var10 = function style() {
                    var1 = _closure3_slot0;
                    var2 = var1.styles;
                    var1 = var2.autocomplete;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['style'] = var10;
                var10 = function editDisabled() {
                    var1 = false;
                    return var1;
                };
                var3['editDisabled'] = var10;
                var3 = var4.bind(var9)(var3);
                var9 = var2.parser;
                var4 = var9.addRule;
                var3 = {};
                var10 = 'roleHighlightRuleId';
                var3['ruleId'] = var10;
                var10 = var8[var6];
                var10 = var7.bind(var1)(var10);
                var10 = var10.ChatInputNodeType;
                var10 = var10.ROLE_HIGHLIGHT;
                var3['type'] = var10;
                var10 = function matchFunction(arg1) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.getRoleHighlightNodes;
                    var1 = _closure3_slot0;
                    var1 = var1.props;
                    var2 = var1.channel;
                    var1 = arg1;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var3['matchFunction'] = var10;
                var10 = function style(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.data;
                        var5 = null;
                        var2 = var5 == var1;
                        var4 = undefined;
                        if(var2) { _fun0013_ip = 92; continue _fun0013 }
case 38:
                        var4 = var1.color;
case 92:
                        var1 = _closure3_slot0;
                        var2 = var1.styles;
                        var1 = var2.autocomplete;
                        var5 = var5 != var4;
                        var3 = undefined;
                        if(!var5) { _fun0013_ip = 4; continue _fun0013 }
case 36:
                        var3 = var4;
case 4:
                        var1 = var1.bind(var2)(var3);
                        return var1;
                    }
                };
                var3['style'] = var10;
                var10 = function editDisabled() {
                    var1 = false;
                    return var1;
                };
                var3['editDisabled'] = var10;
                var3 = var4.bind(var9)(var3);
                var9 = var2.parser;
                var4 = var9.addRule;
                var3 = {};
                var10 = 'userHighlightRuleId';
                var3['ruleId'] = var10;
                var10 = var8[var6];
                var10 = var7.bind(var1)(var10);
                var10 = var10.ChatInputNodeType;
                var10 = var10.USER_HIGHLIGHT;
                var3['type'] = var10;
                var10 = function matchFunction(arg1) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.getUsernameHighlightNodes;
                    var1 = _closure3_slot0;
                    var1 = var1.props;
                    var2 = var1.channel;
                    var1 = arg1;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var3['matchFunction'] = var10;
                var10 = function style() {
                    var1 = _closure3_slot0;
                    var2 = var1.styles;
                    var1 = var2.autocomplete;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['style'] = var10;
                var10 = function editDisabled() {
                    var1 = false;
                    return var1;
                };
                var3['editDisabled'] = var10;
                var3 = var4.bind(var9)(var3);
                var9 = var2.parser;
                var4 = var9.addRule;
                var3 = {};
                var10 = 'channelHighlightRuleId';
                var3['ruleId'] = var10;
                var10 = var8[var6];
                var10 = var7.bind(var1)(var10);
                var10 = var10.ChatInputNodeType;
                var10 = var10.CHANNEL_HIGHLIGHT;
                var3['type'] = var10;
                var10 = function matchFunction(arg1) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.getChannelHighlightNodes;
                    var1 = _closure3_slot0;
                    var1 = var1.props;
                    var2 = var1.channel;
                    var1 = arg1;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var3['matchFunction'] = var10;
                var10 = function style() {
                    var1 = _closure3_slot0;
                    var2 = var1.styles;
                    var1 = var2.autocomplete;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['style'] = var10;
                var10 = function editDisabled() {
                    var1 = false;
                    return var1;
                };
                var3['editDisabled'] = var10;
                var3 = var4.bind(var9)(var3);
                var4 = var2.parser;
                var3 = var4.addRule;
                var2 = {};
                var9 = 'silentHighlightRuleId';
                var2['ruleId'] = var9;
                var6 = var8[var6];
                var6 = var7.bind(var1)(var6);
                var6 = var6.ChatInputNodeType;
                var6 = var6.SILENT_HIGHLIGHT;
                var2['type'] = var6;
                var6 = function matchFunction(arg1) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getSilentHighlightNodes;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2['matchFunction'] = var6;
                var6 = function style() {
                    var1 = _closure3_slot0;
                    var2 = var1.styles;
                    var1 = var2.autocomplete;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var2['style'] = var6;
                var5 = function editDisabled() {
                    var1 = false;
                    return var1;
                };
                var2['editDisabled'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3['addCommandOptionParserRules'] = var5;
            var5 = function(arg1, arg2, arg3, arg4) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var9 = arg1;
                    var4 = arg2;
                    var3 = arg3;
                    var _closure4_slot0 = var4;
                    var _closure4_slot1 = var3;
                    var1 = _closure3_slot0;
                    var1 = var1.props;
                    var2 = var1.commandsDisabled;
                    var1 = null;
                    if(!(var1 != var9)) { _fun0014_ip = 93; continue _fun0014 }
case 2:
                    if(var2) { _fun0014_ip = 93; continue _fun0014 }
case 36:
                    var6 = var9.startsWith;
                    var2 = _closure1_slot12;
                    var2 = var6.bind(var9)(var2);
                    if(!var2) { _fun0014_ip = 93; continue _fun0014 }
case 94:
                    var6 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var2 = 14;
                    var2 = var10[var2];
                    var10 = undefined;
                    var6 = var6.bind(var10)(var2);
                    var2 = var6.getTextBeforeFirstOption;
                    var2 = var2.bind(var6)(var9);
                    var6 = var2.match;
                    var _closure4_slot2 = var6;
                    var12 = var2.text;
                    var2 = var1 != var3;
                    var6 = false;
                    if(!var2) { _fun0014_ip = 23; continue _fun0014 }
case 95:
                    var13 = var12.startsWith;
                    var16 = _closure1_slot12;
                    var14 = var3.displayName;
                    var2 = global;
                    var11 = var2.HermesInternal;
                    var11 = var11.concat;
                    var15 = '';
                    var11 = var11.bind(var15)(var16, var14);
                    var11 = var13.bind(var12)(var11);
                    if(var11) { _fun0014_ip = 96; continue _fun0014 }
case 16:
                    var11 = var12.startsWith;
                    var14 = _closure1_slot12;
                    var13 = var3.untranslatedName;
                    var2 = var2.HermesInternal;
                    var2 = var2.concat;
                    var2 = var2.bind(var15)(var14, var13);
                    var2 = var11.bind(var12)(var2);
                    var6 = false;
                    if(!var2) { _fun0014_ip = 23; continue _fun0014 }
case 96:
                    var9 = var3.preferredCommandType;
                    var2 = _closure1_slot15;
                    var2 = var2.FULL_COMMAND;
                    var6 = true;
                    if(!(var9 !== var2)) { _fun0014_ip = 97; continue _fun0014 }
case 23:
                    var2 = _closure3_slot0;
                    var2 = var2.contextCommands;
                    if(!(var1 != var2)) { _fun0014_ip = 98; continue _fun0014 }
case 99:
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var2 = 16;
                    var2 = var11[var2];
                    var13 = var9.bind(var10)(var2);
                    var11 = var13.getCommandContext;
                    var9 = {};
                    var9['channel'] = var4;
                    var2 = 'channel';
                    var9['type'] = var2;
                    var9 = var11.bind(var13)(var9);
                    var _closure4_slot3 = var9;
                    var9 = var1 == var3;
                    var11 = undefined;
                    if(var9) { _fun0014_ip = 100; continue _fun0014 }
case 101:
                    var11 = var3.preferredCommandType;
case 100:
                    var9 = _closure1_slot15;
                    var9 = var9.PARTIAL_COMMAND;
                    if(!(var11 !== var9)) { _fun0014_ip = 102; continue _fun0014 }
case 103:
                    var11 = var12.slice;
                    var9 = 1;
                    var13 = var11.bind(var12)(var9);
                    var12 = var13.split;
                    var11 = ' ';
                    var9 = 3;
                    var15 = var12.bind(var13)(var11, var9);
                    var _closure4_slot4 = var15;
                    var14 = function _loop() {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                            var6 = _closure4_slot4;
                            var5 = var6.slice;
                            var2 = _closure4_slot4;
                            var3 = var2.length;
                            var2 = _closure4_slot5;
                            var3 = var3 - var2;
                            var2 = 0;
                            var6 = var5.bind(var6)(var2, var3);
                            var5 = var6.join;
                            var3 = ' ';
                            var13 = var5.bind(var6)(var3);
                            var _closure5_slot0 = var13;
                            var5 = _closure1_slot0;
                            var14 = _closure1_slot3;
                            var3 = 10;
                            var3 = var14[var3];
                            var8 = undefined;
                            var11 = var5.bind(var8)(var3);
                            var10 = var11.getMatchingGroupCommands;
                            var3 = _closure3_slot1;
                            var9 = var3.contextCommands;
                            var3 = global;
                            var12 = var3.RegExp;
                            var7 = _closure1_slot1;
                            var5 = 17;
                            var5 = var14[var5];
                            var7 = var7.bind(var8)(var5);
                            var5 = var7.escape;
                            var7 = var5.bind(var7)(var13);
                            var3 = var3.HermesInternal;
                            var5 = var3.concat;
                            var3 = '^';
                            var18 = var5.bind(var3)(var7);
                            var3 = var12.prototype;
                            var5 = Object.create(var3, {constructor: {value: var12}});
                            var17 = 'i';
                            var19 = var5;
                            var3 = new var19[var12](var18, var17, var16);
                            var17 = var3 instanceof Object ? var3 : var5;
                            var16 = _closure4_slot3;
                            var15 = 2;
                            var19 = var11;
                            var18 = var9;
                            var3 = var19[var10](var18, var17, var16, var15, var14);
                            var5 = var3.filter;
                            var4 = function(arg1) {
                                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                                    var4 = arg1;
                                    var2 = var4.inputType;
                                    var5 = _closure1_slot0;
                                    var3 = _closure1_slot3;
                                    var1 = 12;
                                    var3 = var3[var1];
                                    var1 = undefined;
                                    var1 = var5.bind(var1)(var3);
                                    var1 = var1.ApplicationCommandInputType;
                                    var1 = var1.PLACEHOLDER;
                                    var1 = var2 !== var1;
                                    if(!var1) { _fun0016_ip = 104; continue _fun0016 }
case 105:
                                    var5 = var4.displayName;
                                    var2 = _closure5_slot0;
                                    var2 = var5 === var2;
                                    if(var2) { _fun0016_ip = 9; continue _fun0016 }
case 106:
                                    var4 = var4.untranslatedName;
                                    var3 = _closure5_slot0;
                                    var2 = var4 === var3;
case 9:
                                    var1 = var2;
case 104:
                                    return var1;
                                }
                            };
                            var4 = var5.bind(var3)(var4);
                            var5 = var4.length;
                            if(!(var5 > var2)) { _fun0015_ip = 107; continue _fun0015 }
case 108:
                            var7 = var4[var2];
                            var4 = _closure4_slot5;
                            var4 = var4 > var2;
                            if(var4) { _fun0015_ip = 61; continue _fun0015 }
case 109:
                            var9 = _closure4_slot2;
                            var5 = null;
                            var4 = var5 != var9;
case 61:
                            var5 = var3.length;
                            if(var4) { _fun0015_ip = 64; continue _fun0015 }
case 110:
                            var4 = 1;
                            if(!(var4 !== var5)) { _fun0015_ip = 64; continue _fun0015 }
case 107:
                            var3 = var3.length;
                            if(!(!(var3 > var2))) { _fun0015_ip = 111; continue _fun0015 }
case 60:
                            return var8;
case 111:
                            return var2;
case 64:
                            var3 = _closure1_slot2;
                            var9 = _closure1_slot3;
                            var2 = 11;
                            var2 = var9[var2];
                            var5 = var3.bind(var8)(var2);
                            var4 = var5.getCachedApplicationSection;
                            var3 = {};
                            var1 = _closure4_slot0;
                            var3['channel'] = var1;
                            var1 = 'channel';
                            var3['type'] = var1;
                            var2 = _closure1_slot0;
                            var1 = 15;
                            var1 = var9[var1];
                            var1 = var2.bind(var8)(var1);
                            var1 = var1.ApplicationCommandType;
                            var2 = var1.CHAT;
                            var1 = var7.applicationId;
                            var4 = var4.bind(var5)(var3, var2, var1);
                            var3 = null;
                            if(!(var3 != var4)) { _fun0015_ip = 112; continue _fun0015 }
case 113:
                            var1 = {};
                            var2 = {};
                            var5 = {};
                            var18 = var5;
                            var17 = var7;
                            var7 = copyDataProperties(var18, var17);
                            var6 = _closure1_slot15;
                            var7 = var6.FULL_COMMAND;
                            var6 = 'preferredCommandType';
                            var5[var6] = var7;
                            var2['command'] = var5;
                            var2['section'] = var4;
                            var1['v'] = var2;
                            _fun0015_ip = 114; continue _fun0015;
case 112:
                            var2 = {};
                            var2['v'] = var3;
                            var1 = var2;
case 114:
                            return var1;
                        }
                    };
                    var13 = 0;
                    var _closure4_slot5 = var13;
                    var9 = var15.length;
                    if(!(var13 < var9)) { _fun0014_ip = 115; continue _fun0014 }
case 116:
                    var11 = var14.bind(var10)();
                    var12 = 0;
                    if(!(var12 !== var11)) { _fun0014_ip = 115; continue _fun0014 }
case 117:
                    var9 = var11;
                    if(var9) { _fun0014_ip = 118; continue _fun0014 }
case 119:
                    var12 = var12 + 1;
                    _closure4_slot5 = var12;
                    var16 = var15.length;
                    if(!(var12 < var16)) { _fun0014_ip = 115; continue _fun0014 }
case 120:
                    var11 = var14.bind(var10)();
                    if(var13 !== var11) { _fun0014_ip = 117; continue _fun0014 }
case 121:
                    _fun0014_ip = 115; continue _fun0014;
case 118:
                    var9 = var9.v;
                    return var9;
case 102:
                    var8 = _closure3_slot0;
                    var9 = var8.contextCommands;
                    var8 = var9.find;
                    var5 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure4_slot1;
                        var1 = var1.id;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var8 = var8.bind(var9)(var5);
                    if(!(var1 == var8)) { _fun0014_ip = 122; continue _fun0014 }
case 115:
                    var5 = null;
                    if(!var6) { _fun0014_ip = 123; continue _fun0014 }
case 124:
                    var6 = var1 != var3;
                    var5 = null;
                    if(!var6) { _fun0014_ip = 123; continue _fun0014 }
case 125:
                    var6 = {};
                    var6['command'] = var3;
                    var6['section'] = var1;
                    var5 = var6;
case 123:
                    return var5;
case 122:
                    var6 = _closure1_slot2;
                    var11 = _closure1_slot3;
                    var5 = 11;
                    var5 = var11[var5];
                    var9 = var6.bind(var10)(var5);
                    var6 = var9.getCachedApplicationSection;
                    var5 = {};
                    var5['channel'] = var4;
                    var5['type'] = var2;
                    var4 = _closure1_slot0;
                    var2 = 15;
                    var2 = var11[var2];
                    var2 = var4.bind(var10)(var2);
                    var2 = var2.ApplicationCommandType;
                    var4 = var2.CHAT;
                    var2 = var8.applicationId;
                    var5 = var6.bind(var9)(var5, var4, var2);
                    var4 = var1 == var5;
                    var2 = null;
                    if(var4) { _fun0014_ip = 126; continue _fun0014 }
case 127:
                    var4 = {};
                    var6 = {};
                    var19 = var6;
                    var18 = var8;
                    var8 = copyDataProperties(var19, var18);
                    var7 = _closure1_slot15;
                    var8 = var7.FULL_COMMAND;
                    var7 = 'preferredCommandType';
                    var6[var7] = var8;
                    var4['command'] = var6;
                    var4['section'] = var5;
                    var2 = var4;
case 126:
                    return var2;
case 98:
                    return var1;
case 97:
                    var2 = {};
                    var2['command'] = var3;
                    var3 = arg4;
                    var2['section'] = var3;
                    return var2;
case 93:
                    return var1;
                }
            };
            var3['getCurrentCommand'] = var5;
            var5 = function(arg1, arg2) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var4 = arg2;
                    var _closure4_slot0 = var4;
                    var2 = arg1;
                    if(var2) { _fun0017_ip = 38; continue _fun0017 }
case 128:
                    var2 = null;
                    return var2;
case 38:
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var2 = 18;
                    var2 = var5[var2];
                    var5 = undefined;
                    var7 = var3.bind(var5)(var2);
                    var3 = var7.findLast;
                    var2 = global;
                    var9 = var2.Array;
                    var8 = var9.from;
                    var2 = _closure3_slot0;
                    var10 = var2.optionValueNodes;
                    var2 = var10.values;
                    var2 = var2.bind(var10)();
                    var2 = var8.bind(var9)(var2);
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.location;
                        var1 = _closure4_slot0;
                        var1 = var2 <= var1;
                        return var1;
                    };
                    var3 = var3.bind(var7)(var2, var1);
                    var2 = null;
                    var7 = var2 == var3;
                    var1 = undefined;
                    if(var7) { _fun0017_ip = 129; continue _fun0017 }
case 130:
                    var7 = var3.data;
                    var8 = var2 == var7;
                    var1 = undefined;
                    if(var8) { _fun0017_ip = 129; continue _fun0017 }
case 131:
                    var1 = var7.option;
case 129:
                    if(!(var2 != var3)) { _fun0017_ip = 132; continue _fun0017 }
case 70:
                    if(!(var2 != var1)) { _fun0017_ip = 132; continue _fun0017 }
case 133:
                    var6 = _closure3_slot0;
                    var7 = var6.preferredOptionValues;
                    var6 = var6.props;
                    var6 = var6.channel;
                    var6 = var6.id;
                    var7 = var7[var6];
                    var6 = var2 == var7;
                    var5 = undefined;
                    if(var6) { _fun0017_ip = 134; continue _fun0017 }
case 135:
                    var6 = var1.name;
                    var5 = var7[var6];
case 134:
                    if(!(var2 != var5)) { _fun0017_ip = 136; continue _fun0017 }
case 137:
                    var6 = var5.displayText;
                    var5 = '';
                    if(!(var5 !== var6)) { _fun0017_ip = 136; continue _fun0017 }
case 138:
                    var5 = var3.location;
                    var3 = var3.length;
                    var3 = var5 + var3;
                    if(!(!(var3 > var4))) { _fun0017_ip = 136; continue _fun0017 }
case 132:
                    return var2;
case 136:
                    return var1;
                }
            };
            var3['getCurrentOption'] = var5;
            var5 = function(arg1, arg2) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var15 = arg2;
                    var1 = arg1;
                    var1 = var1.options;
                    var14 = null;
                    if(!(var14 != var1)) { _fun0018_ip = 139; continue _fun0018 }
case 29:
                    var1 = {};
                    var3 = _closure1_slot16;
                    var2 = _closure3_slot0;
                    var2 = var2.optionValueNodes;
                    var11 = undefined;
                    var10 = var3.bind(var11)(var2);
                    var3 = var10.bind(var11)();
                    var2 = var3.done;
                    var9 = 1;
                    var8 = 8;
                    var7 = 2;
                    var6 = 0;
                    var5 = var3;
                    var4 = undefined;
                    var3 = undefined;
                    if(var2) { _fun0018_ip = 140; continue _fun0018 }
case 141:
                    var16 = var5.value;
                    var2 = _closure1_slot4;
                    var2 = var2.bind(var11)(var16, var7);
                    var18 = var2[var6];
                    var17 = var2[var9];
                    var2 = var17.data;
                    var19 = var14 == var2;
                    var16 = undefined;
                    if(var19) { _fun0018_ip = 142; continue _fun0018 }
case 56:
                    var16 = var2.type;
case 142:
                    var19 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var2 = var2[var8];
                    var2 = var19.bind(var11)(var2);
                    var2 = var2.ChatInputParseResultDataType;
                    var2 = var2.COMMAND_OPTION;
                    if(!(var16 === var2)) { _fun0018_ip = 143; continue _fun0018 }
case 144:
                    var2 = _closure3_slot0;
                    var16 = var2.preferredOptionValues;
                    var2 = var2.props;
                    var2 = var2.channel;
                    var2 = var2.id;
                    var19 = var16[var2];
                    var20 = var14 == var19;
                    var16 = var19;
                    var2 = undefined;
                    if(var20) { _fun0018_ip = 145; continue _fun0018 }
case 146:
                    var20 = var19[var18];
                    var19 = var14 == var20;
                    var16 = var20;
                    var2 = undefined;
                    if(var19) { _fun0018_ip = 145; continue _fun0018 }
case 147:
                    var2 = var20.optionValue;
                    var16 = var20;
case 145:
                    if(!(var14 == var2)) { _fun0018_ip = 148; continue _fun0018 }
case 149:
                    var19 = var17.data;
                    var21 = var19.option;
                    var20 = var15.substring;
                    var22 = var17.location;
                    var19 = var21.displayName;
                    var19 = var19.length;
                    var19 = var22 + var19;
                    var19 = var19 + var9;
                    var22 = var17.location;
                    var17 = var17.length;
                    var17 = var22 + var17;
                    var20 = var20.bind(var15)(var19, var17);
                    var17 = _closure3_slot0;
                    var19 = var17.optionValueParser;
                    var17 = var19.parse;
                    var19 = var17.bind(var19)(var20, var21);
                    var17 = new Array(1);
                    var17[0] = var19;
                    var1[var18] = var17;
                    var4 = var16;
                    var3 = var2;
                    _fun0018_ip = 143; continue _fun0018;
case 148:
                    var17 = new Array(1);
                    var17[0] = var2;
                    var1[var18] = var17;
                    var4 = var16;
                    var3 = var2;
case 143:
                    var16 = var10.bind(var11)();
                    var2 = var16.done;
                    var5 = var16;
                    if(!var2) { _fun0018_ip = 141; continue _fun0018 }
case 140:
                    return var1;
case 139:
                    var1 = {};
                    return var1;
                }
            };
            var3['getAllCommandOptionValues'] = var5;
            var5 = function(arg1, arg2, arg3, arg4, arg5) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var4 = arg1;
                    var7 = arg2;
                    var3 = arg3;
                    var6 = var4.startsWith;
                    var9 = _closure1_slot12;
                    var1 = global;
                    var5 = var1.HermesInternal;
                    var8 = var5.concat;
                    var5 = '';
                    var5 = var8.bind(var5)(var9, var3);
                    var5 = var6.bind(var4)(var5);
                    if(!var5) { _fun0019_ip = 150; continue _fun0019 }
case 105:
                    var6 = var4.length;
                    var5 = var3.length;
                    var9 = 1;
                    var5 = var5 + var9;
                    if(!(var6 > var5)) { _fun0019_ip = 150; continue _fun0019 }
case 151:
                    var8 = _closure1_slot11;
                    var6 = var8.test;
                    var5 = var3.length;
                    var5 = var5 + var9;
                    var5 = var4[var5];
                    var5 = var6.bind(var8)(var5);
                    if(!var5) { _fun0019_ip = 150; continue _fun0019 }
case 152:
                    var5 = arg4;
                    if(var5) { _fun0019_ip = 86; continue _fun0019 }
case 13:
                    var5 = arg5;
                    if(!var5) { _fun0019_ip = 150; continue _fun0019 }
case 153:
                    var4 = var4.length;
                    var5 = var3.length;
                    var3 = 2;
                    var3 = var5 + var3;
                    if(!(!(var4 > var3))) { _fun0019_ip = 86; continue _fun0019 }
case 150:
                    var3 = false;
                    return var3;
case 86:
                    var4 = _closure1_slot14;
                    var5 = var1.Set;
                    var1 = _closure3_slot0;
                    var3 = var1.optionValueNodes;
                    var1 = var3.keys;
                    var14 = var1.bind(var3)();
                    var3 = var5.prototype;
                    var3 = Object.create(var3, {constructor: {value: var5}});
                    var15 = var3;
                    var1 = new var15[var5](var14, var13);
                    var3 = var1 instanceof Object ? var1 : var3;
                    var6 = undefined;
                    var1 = true;
                    var5 = var4.bind(var6)(var7, var3, var1);
                    var3 = null;
                    if(!(var3 != var5)) { _fun0019_ip = 154; continue _fun0019 }
case 155:
                    var4 = _closure3_slot0;
                    var3 = var4.insertOrJumpCommandOption;
                    var2 = var7.displayName;
                    var8 = var2.length;
                    var2 = 2;
                    var13 = var8 + var2;
                    var15 = var4;
                    var14 = var5;
                    var12 = true;
                    var11 = undefined;
                    var10 = var7;
                    var2 = var15[var3](var14, var13, var12, var11, var10, var9);
case 154:
                    return var1;
                }
            };
            var3['insertFirstOptionIfValid'] = var5;
            var5 = function(arg1, arg2) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var2 = arg1;
                    var4 = arg2;
                    var9 = arguments[2];
                    var6 = arguments[3];
                    var15 = arguments[4];
                    var1 = undefined;
                    if(!(var9 === var1)) { _fun0020_ip = 31; continue _fun0020 }
case 91:
                    var9 = false;
case 31:
                    var5 = null;
                    if(!(var5 == var15)) { _fun0020_ip = 40; continue _fun0020 }
case 156:
                    var3 = _closure3_slot0;
                    var3 = var3.props;
                    var15 = var3.activeCommand;
case 40:
                    if(!(var5 != var15)) { _fun0020_ip = 157; continue _fun0020 }
case 46:
                    var7 = _closure3_slot0;
                    var8 = var7.props;
                    var11 = var8.text;
                    var10 = var8.selectionStart;
                    var13 = var7.optionValueNodes;
                    var8 = var5 == var13;
                    var7 = undefined;
                    if(var8) { _fun0020_ip = 158; continue _fun0020 }
case 69:
                    var12 = var13.get;
                    var8 = var2.name;
                    var7 = var12.bind(var13)(var8);
case 158:
                    var12 = var5 == var6;
                    var8 = undefined;
                    if(var12) { _fun0020_ip = 159; continue _fun0020 }
case 153:
                    var8 = var6.displayText;
case 159:
                    if(!(var5 != var8)) { _fun0020_ip = 160; continue _fun0020 }
case 161:
                    if(!(var5 == var7)) { _fun0020_ip = 162; continue _fun0020 }
case 95:
                    var18 = var10;
                    if(!(var5 != var4)) { _fun0020_ip = 163; continue _fun0020 }
case 164:
                    var18 = var4;
case 163:
                    _fun0020_ip = 165; continue _fun0020;
case 162:
                    var18 = var7.location;
case 165:
                    var8 = var5 != var7;
                    var17 = 0;
                    if(!var8) { _fun0020_ip = 166; continue _fun0020 }
case 167:
                    var17 = var7.length;
case 166:
                    var21 = var5 != var11;
                    if(!var21) { _fun0020_ip = 135; continue _fun0020 }
case 168:
                    var8 = var11.length;
                    var21 = var18 <= var8;
case 135:
                    if(!var21) { _fun0020_ip = 169; continue _fun0020 }
case 170:
                    var13 = _closure1_slot11;
                    var12 = var13.test;
                    var8 = global;
                    var20 = var8.Math;
                    var16 = var20.min;
                    var22 = 1;
                    var14 = var18 - var22;
                    var8 = var11.length;
                    var8 = var8 - var22;
                    var8 = var16.bind(var20)(var14, var8);
                    var8 = var11[var8];
                    var8 = var12.bind(var13)(var8);
                    var21 = !var8;
case 169:
                    var8 = global;
                    var14 = var8.Set;
                    var12 = _closure3_slot0;
                    var13 = var12.optionValueNodes;
                    var12 = var13.keys;
                    var31 = var12.bind(var13)();
                    var13 = var14.prototype;
                    var13 = Object.create(var13, {constructor: {value: var14}});
                    var32 = var13;
                    var12 = new var32[var14](var31, var30);
                    var13 = var12 instanceof Object ? var12 : var13;
                    var14 = var13.add;
                    var12 = var2.name;
                    var12 = var14.bind(var13)(var12);
                    var12 = _closure1_slot14;
                    var12 = var12.bind(var1)(var15, var13);
                    var13 = var5 != var6;
                    if(!var13) { _fun0020_ip = 171; continue _fun0020 }
case 172:
                    var16 = var18 + var17;
                    var15 = var11.length;
                    var15 = var16 !== var15;
                    if(!var15) { _fun0020_ip = 173; continue _fun0020 }
case 78:
                    var22 = _closure1_slot11;
                    var20 = var22.test;
                    var25 = var8.Math;
                    var24 = var25.min;
                    var23 = var18 + var17;
                    var26 = var11.length;
                    var16 = 1;
                    var16 = var26 - var16;
                    var16 = var24.bind(var25)(var23, var16);
                    var16 = var11[var16];
                    var16 = var20.bind(var22)(var16);
                    var15 = !var16;
case 173:
                    if(var15) { _fun0020_ip = 174; continue _fun0020 }
case 175:
                    var15 = var5 != var12;
case 174:
                    var13 = var15;
case 171:
                    var16 = var5 == var6;
                    var15 = undefined;
                    if(var16) { _fun0020_ip = 176; continue _fun0020 }
case 177:
                    var15 = var6.displayText;
case 176:
                    var16 = '';
                    if(!(var16 === var15)) { _fun0020_ip = 178; continue _fun0020 }
case 179:
                    var22 = var2.displayName;
                    var15 = var8.HermesInternal;
                    var20 = var15.concat;
                    var15 = ':';
                    var15 = var20.bind(var16)(var22, var15);
                    _fun0020_ip = 180; continue _fun0020;
case 178:
                    var24 = var2.displayName;
                    var23 = var6.displayText;
                    var20 = var8.HermesInternal;
                    var22 = var20.concat;
                    var20 = ':';
                    var15 = var22.bind(var16)(var24, var20, var23);
case 180:
                    var22 = var16;
                    if(!var21) { _fun0020_ip = 181; continue _fun0020 }
case 125:
                    var22 = ' ';
case 181:
                    var20 = var16;
                    if(!var13) { _fun0020_ip = 123; continue _fun0020 }
case 182:
                    var20 = ' ';
case 123:
                    var13 = var8.HermesInternal;
                    var13 = var13.concat;
                    var13 = var13.bind(var16)(var22, var15, var20);
                    if(!(var5 == var12)) { _fun0020_ip = 183; continue _fun0020 }
case 184:
                    var24 = _closure3_slot0;
                    var20 = var24.ref;
                    var23 = var20.current;
                    var22 = var23.replaceRange;
                    var20 = {};
                    var20['location'] = var18;
                    var20['length'] = var17;
                    var20['text'] = var13;
                    var25 = {};
                    var27 = _closure1_slot0;
                    var28 = _closure1_slot3;
                    var26 = 8;
                    var26 = var28[var26];
                    var26 = var27.bind(var1)(var26);
                    var26 = var26.ChatInputNodeType;
                    var26 = var26.COMMAND_OPTION_WITH_VALUE;
                    var25['type'] = var26;
                    var26 = var24.styles;
                    var24 = var26.commandOption;
                    var24 = var24.bind(var26)();
                    var25['style'] = var24;
                    var24 = 0;
                    if(!var21) { _fun0020_ip = 185; continue _fun0020 }
case 186:
                    var24 = 1;
case 185:
                    var25['location'] = var24;
                    var24 = var15.length;
                    var25['length'] = var24;
                    var24 = new Array(1);
                    var24[0] = var25;
                    var20['nodes'] = var24;
                    var20['keepCursorPosition'] = var9;
                    var24 = _closure3_slot0;
                    var24 = var24.editId;
                    var20['editId'] = var24;
                    var20 = var22.bind(var23)(var20);
                    _fun0020_ip = 187; continue _fun0020;
case 183:
                    var22 = var12.displayName;
                    var12 = var8.HermesInternal;
                    var20 = var12.concat;
                    var12 = ':';
                    var12 = var20.bind(var16)(var22, var12);
                    var8 = var8.HermesInternal;
                    var8 = var8.concat;
                    var16 = var8.bind(var16)(var13, var12);
                    var8 = {};
                    var23 = _closure1_slot0;
                    var22 = _closure1_slot3;
                    var20 = 8;
                    var22 = var22[var20];
                    var22 = var23.bind(var1)(var22);
                    var22 = var22.ChatInputNodeType;
                    var22 = var22.COMMAND_OPTION_WITH_VALUE;
                    var8['type'] = var22;
                    var22 = _closure3_slot0;
                    var23 = var22.styles;
                    var22 = var23.commandOption;
                    var22 = var22.bind(var23)();
                    var8['style'] = var22;
                    var19 = 0;
                    if(!var21) { _fun0020_ip = 188; continue _fun0020 }
case 189:
                    var19 = 1;
case 188:
                    var8['location'] = var19;
                    var15 = var15.length;
                    var8['length'] = var15;
                    var15 = new Array(2);
                    var15[0] = var8;
                    var8 = {};
                    var19 = _closure1_slot0;
                    var14 = _closure1_slot3;
                    var14 = var14[var20];
                    var14 = var19.bind(var1)(var14);
                    var14 = var14.ChatInputNodeType;
                    var14 = var14.COMMAND_OPTION;
                    var8['type'] = var14;
                    var14 = _closure3_slot0;
                    var20 = var14.styles;
                    var19 = var20.commandOption;
                    var19 = var19.bind(var20)();
                    var8['style'] = var19;
                    var13 = var13.length;
                    var8['location'] = var13;
                    var12 = var12.length;
                    var8['length'] = var12;
                    var15[1] = var8;
                    var8 = var14.ref;
                    var13 = var8.current;
                    var12 = var13.replaceRange;
                    var8 = {};
                    var8['location'] = var18;
                    var8['length'] = var17;
                    var8['text'] = var16;
                    var8['nodes'] = var15;
                    var14 = var14.editId;
                    var8['editId'] = var14;
                    var8 = var12.bind(var13)(var8);
                    _fun0020_ip = 187; continue _fun0020;
case 160:
                    if(!(var5 != var7)) { _fun0020_ip = 190; continue _fun0020 }
case 191:
                    var8 = _closure3_slot0;
                    var8 = var8.ref;
                    var13 = var8.current;
                    var12 = var13.setSelectedRange;
                    var14 = var7.location;
                    var8 = var2.displayName;
                    var8 = var8.length;
                    var8 = var14 + var8;
                    var14 = 1;
                    var8 = var8 + var14;
                    var15 = var7.length;
                    var7 = var2.displayName;
                    var7 = var7.length;
                    var7 = var15 - var7;
                    var7 = var7 - var14;
                    var7 = var12.bind(var13)(var8, var7);
                    _fun0020_ip = 187; continue _fun0020;
case 190:
                    if(!(var5 != var4)) { _fun0020_ip = 192; continue _fun0020 }
case 193:
                    var10 = var4;
case 192:
                    var12 = var5 != var11;
                    if(!var12) { _fun0020_ip = 194; continue _fun0020 }
case 195:
                    var4 = var11.length;
                    var12 = var10 <= var4;
case 194:
                    if(!var12) { _fun0020_ip = 196; continue _fun0020 }
case 197:
                    var8 = _closure1_slot11;
                    var7 = var8.test;
                    var4 = global;
                    var15 = var4.Math;
                    var14 = var15.min;
                    var16 = 1;
                    var13 = var10 - var16;
                    var4 = var11.length;
                    var4 = var4 - var16;
                    var4 = var14.bind(var15)(var13, var4);
                    var4 = var11[var4];
                    var4 = var7.bind(var8)(var4);
                    var12 = !var4;
case 196:
                    var4 = _closure3_slot0;
                    var4 = var4.ref;
                    var8 = var4.current;
                    var7 = var8.replaceRange;
                    var4 = {};
                    var4['location'] = var10;
                    var10 = 0;
                    var4['length'] = var10;
                    var16 = '';
                    var15 = var16;
                    if(!var12) { _fun0020_ip = 198; continue _fun0020 }
case 199:
                    var15 = ' ';
case 198:
                    var14 = var2.displayName;
                    var11 = global;
                    var11 = var11.HermesInternal;
                    var13 = var11.concat;
                    var11 = ':';
                    var11 = var13.bind(var16)(var15, var14, var11);
                    var4['text'] = var11;
                    var11 = {};
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot3;
                    var13 = 8;
                    var13 = var15[var13];
                    var13 = var14.bind(var1)(var13);
                    var13 = var13.ChatInputNodeType;
                    var13 = var13.COMMAND_OPTION;
                    var11['type'] = var13;
                    var13 = _closure3_slot0;
                    var14 = var13.styles;
                    var13 = var14.commandOption;
                    var13 = var13.bind(var14)();
                    var11['style'] = var13;
                    var10 = 0;
                    if(!var12) { _fun0020_ip = 200; continue _fun0020 }
case 201:
                    var10 = 1;
case 200:
                    var11['location'] = var10;
                    var10 = var2.displayName;
                    var12 = var10.length;
                    var10 = 1;
                    var10 = var12 + var10;
                    var11['length'] = var10;
                    var10 = new Array(1);
                    var10[0] = var11;
                    var4['nodes'] = var10;
                    var4['keepCursorPosition'] = var9;
                    var9 = _closure3_slot0;
                    var9 = var9.editId;
                    var4['editId'] = var9;
                    var4 = var7.bind(var8)(var4);
case 187:
                    var4 = var5 != var6;
                    if(!var4) { _fun0020_ip = 202; continue _fun0020 }
case 203:
                    var4 = var6.preferred;
case 202:
                    if(!var4) { _fun0020_ip = 157; continue _fun0020 }
case 204:
                    var4 = _closure3_slot0;
                    if(!(var5 != var4)) { _fun0020_ip = 157; continue _fun0020 }
case 205:
                    var5 = _closure3_slot0;
                    var4 = var5.setPreferredOptionValue;
                    var3 = var5.props;
                    var3 = var3.channel;
                    var3 = var3.id;
                    var2 = var2.name;
                    var2 = var4.bind(var5)(var3, var2, var6);
case 157:
                    return var1;
                }
            };
            var3['insertOrJumpCommandOption'] = var5;
            var4 = function(arg1, arg2, arg3) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var5 = arg1;
                    var6 = arg2;
                    var1 = _closure3_slot0;
                    var1 = var1.props;
                    var4 = var1.activeCommand;
                    var10 = null;
                    if(!(var10 == var4)) { _fun0021_ip = 206; continue _fun0021 }
case 37:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var11 = 23;
                    var1 = var1[var11];
                    var12 = undefined;
                    var3 = var3.bind(var12)(var1);
                    var1 = var3.getPrefix;
                    var3 = var1.bind(var3)(var5);
                    var1 = _closure1_slot12;
                    var8 = null;
                    if(!(var3 === var1)) { _fun0021_ip = 207; continue _fun0021 }
case 42:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var1 = var1[var11];
                    var3 = var3.bind(var12)(var1);
                    var1 = var3.getQuery;
                    var8 = var1.bind(var3)(var5);
case 207:
                    if(!(var10 != var8)) { _fun0021_ip = 99; continue _fun0021 }
case 153:
                    var3 = _closure1_slot2;
                    var14 = _closure1_slot3;
                    var1 = 11;
                    var1 = var14[var1];
                    var11 = var3.bind(var12)(var1);
                    var5 = var11.getCachedResults;
                    var3 = {};
                    var3['channel'] = var6;
                    var1 = 'channel';
                    var3['type'] = var1;
                    var13 = _closure1_slot0;
                    var1 = 15;
                    var1 = var14[var1];
                    var1 = var13.bind(var12)(var1);
                    var1 = var1.ApplicationCommandType;
                    var1 = var1.CHAT;
                    var1 = var5.bind(var11)(var3, var1, var8);
                    var3 = var1.commands;
                    var5 = var1.sections;
                    if(!(var10 != var3)) { _fun0021_ip = 99; continue _fun0021 }
case 138:
                    var11 = var3.length;
                    var1 = 0;
                    if(!(var11 > var1)) { _fun0021_ip = 99; continue _fun0021 }
case 208:
                    var11 = var3[var1];
                    var14 = var11.inputType;
                    var15 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var13 = 12;
                    var11 = var11[var13];
                    var11 = var15.bind(var12)(var11);
                    var11 = var11.ApplicationCommandInputType;
                    var11 = var11.PLACEHOLDER;
                    if(!(var14 === var11)) { _fun0021_ip = 49; continue _fun0021 }
case 99:
                    var11 = false;
                    return var11;
case 49:
                    var11 = var3[var1];
                    var _closure4_slot1 = var11;
                    var3 = var5.find;
                    var1 = function(arg1) {
                        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                            var1 = arg1;
                            var1 = var1.application;
                            var2 = null;
                            var3 = var2 == var1;
                            var2 = undefined;
                            if(var3) { _fun0022_ip = 92; continue _fun0022 }
case 38:
                            var2 = var1.id;
case 92:
                            var1 = _closure4_slot1;
                            var1 = var1.applicationId;
                            var1 = var2 === var1;
                            return var1;
                        }
                    };
                    var14 = var3.bind(var5)(var1);
                    var5 = _closure3_slot0;
                    var3 = var5.setCommand;
                    var1 = {};
                    var15 = var6.id;
                    var1['channelId'] = var15;
                    var1['command'] = var11;
                    var15 = var10 != var14;
                    var11 = null;
                    if(!var15) { _fun0021_ip = 148; continue _fun0021 }
case 209:
                    var11 = var14;
case 148:
                    var1['section'] = var11;
                    var11 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var9 = var9[var13];
                    var9 = var11.bind(var12)(var9);
                    var9 = var9.ApplicationCommandTriggerLocations;
                    var9 = var9.DISCOVERY;
                    var1['location'] = var9;
                    var1['query'] = var8;
                    var1 = var3.bind(var5)(var1);
                    var1 = true;
                    return var1;
case 206:
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var3 = 19;
                    var5 = var5[var3];
                    var3 = undefined;
                    var9 = var8.bind(var3)(var5);
                    var8 = var9.getFirstInvalidOption;
                    var5 = _closure3_slot0;
                    var5 = var5.optionValidationResults;
                    if(!(var10 == var5)) { _fun0021_ip = 210; continue _fun0021 }
case 211:
                    var5 = {};
case 210:
                    var11 = var8.bind(var9)(var4, var5);
                    var9 = _closure1_slot8;
                    var8 = var9.getOptionStates;
                    var5 = var6.id;
                    var12 = var8.bind(var9)(var5);
                    var5 = {};
                    var _closure4_slot0 = var5;
                    var8 = global;
                    var9 = var8.Object;
                    var8 = var9.entries;
                    var9 = var8.bind(var9)(var12);
                    var8 = var9.forEach;
                    var7 = function(arg1) {
                        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                            var6 = arg1;
                            var3 = var6[Symbol.iterator];
                            var6 = var3().next;
                            var2 = var6().value;
                            var4 = var3;
                            var1 = undefined;
                            var5 = var4 === var1;
                            var4 = undefined;
                            if(var5) { _fun0023_ip = 212; continue _fun0023 }
case 92:
                            var4 = var2;
case 212:
                            var2 = undefined;
                            if(var5) { _fun0023_ip = 213; continue _fun0023 }
case 80:
                            var7 = var6().value;
                            var6 = var3;
                            var6 = var6 === var1;
                            var2 = undefined;
                            var5 = var6;
                            if(var6) { _fun0023_ip = 213; continue _fun0023 }
case 214:
                            var2 = var7;
                            var5 = var6;
case 213:
                            if(var5) { _fun0023_ip = 215; continue _fun0023 }
case 216:
                            var3.return();
case 215:
                            var5 = var2.optionValue;
                            var3 = null;
                            if(!(var3 != var5)) { _fun0023_ip = 69; continue _fun0023 }
case 217:
                            var3 = _closure4_slot0;
                            var2 = var2.optionValue;
                            var3[var4] = var2;
case 69:
                            return var1;
                        }
                    };
                    var7 = var8.bind(var9)(var7);
                    if(!(var10 != var11)) { _fun0021_ip = 218; continue _fun0021 }
case 219:
                    var7 = _closure3_slot0;
                    var2 = var7.insertOrJumpCommandOption;
                    var2 = var2.bind(var7)(var11);
                    var2 = var7.updateValidationResults;
                    var2 = var2.bind(var7)();
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var2 = 21;
                    var9 = var8[var2];
                    var12 = var7.bind(var3)(var9);
                    var9 = var12.triggerHapticFeedback;
                    var2 = var8[var2];
                    var2 = var7.bind(var3)(var2);
                    var2 = var2.HapticFeedbackTypes;
                    var2 = var2.NOTIFICATION_ERROR;
                    var2 = var9.bind(var12)(var2);
                    var2 = 22;
                    var2 = var8[var2];
                    var9 = var7.bind(var3)(var2);
                    var8 = var9.trackWithMetadata;
                    var2 = _closure1_slot9;
                    var7 = var2.APPLICATION_COMMAND_VALIDATION_FAILED;
                    var2 = {};
                    var13 = var10 == var4;
                    var12 = undefined;
                    if(var13) { _fun0021_ip = 220; continue _fun0021 }
case 221:
                    var12 = var4.applicationId;
case 220:
                    var2['application_id'] = var12;
                    var13 = var10 == var4;
                    var12 = undefined;
                    if(var13) { _fun0021_ip = 222; continue _fun0021 }
case 98:
                    var13 = var4.rootCommand;
                    var14 = var10 == var13;
                    var12 = undefined;
                    if(var14) { _fun0021_ip = 222; continue _fun0021 }
case 223:
                    var12 = var13.id;
case 222:
                    var2['command_id'] = var12;
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot3;
                    var12 = 15;
                    var12 = var14[var12];
                    var12 = var13.bind(var3)(var12);
                    var13 = var12.ApplicationCommandOptionType;
                    var14 = var11.type;
                    var15 = var10 != var14;
                    var12 = 3;
                    if(!var15) { _fun0021_ip = 224; continue _fun0021 }
case 225:
                    var12 = var14;
case 224:
                    var12 = var13[var12];
                    var2['argument_type'] = var12;
                    var12 = var10 == var11;
                    var10 = undefined;
                    if(var12) { _fun0021_ip = 226; continue _fun0021 }
case 227:
                    var10 = var11.required;
case 226:
                    var2['is_required'] = var10;
                    var2 = var8.bind(var9)(var7, var2);
                    _fun0021_ip = 228; continue _fun0021;
case 218:
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var1 = 20;
                    var1 = var7[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.parseOptionValuesForSend;
                    var2 = var1.bind(var2)(var6, var4, var5);
                    var1 = arg3;
                    var1 = var1.bind(var3)(var4, var2);
case 228:
                    var1 = true;
                    return var1;
                }
            };
            var3['sendCommand'] = var4;
            var4 = var2.props;
            var3['props'] = var4;
            var4 = var2.ref;
            var3['ref'] = var4;
            var4 = var2.optionValueParser;
            var3['optionValueParser'] = var4;
            var2 = var2.styles;
            var3['styles'] = var2;
            var2 = var3.addCommandOptionParserRules;
            var2 = var2.bind(var3)();
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'setPreferredOptionValue';
        var1['key'] = var2;
        var2 = function setPreferredOptionValue(arg1, arg2, arg3) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var2 = arg1;
                var1 = this;
                var3 = var1.preferredOptionValues;
                var4 = var3[var2];
                var3 = null;
                if(!(var3 == var4)) { _fun0024_ip = 229; continue _fun0024 }
case 41:
                var4 = var1.preferredOptionValues;
                var3 = {};
                var4[var2] = var3;
case 229:
                var1 = var1.preferredOptionValues;
                var3 = var1[var2];
                var2 = arg3;
                var1 = arg2;
                var3[var1] = var2;
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(3);
        var2[0] = var1;
        var1 = {};
        var6 = 'mergePropsAndUpdate';
        var1['key'] = var6;
        var6 = function mergePropsAndUpdate(arg1) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var9 = arg1;
                var6 = this;
                var _closure3_slot0 = var6;
                var _closure3_slot1 = var9;
                var1 = var6.props;
                var16 = var1.text;
                var5 = var1.selectionStart;
                var4 = var1.selectionEnd;
                var2 = var1.focused;
                var3 = var1.queryCommands;
                var10 = var1.editId;
                var13 = var1.channel;
                var8 = var1.lastCommandAutocompleteResponseNonce;
                var1 = var9.editId;
                var1 = var10 !== var1;
                if(!var1) { _fun0025_ip = 69; continue _fun0025 }
case 230:
                var11 = var9.editId;
                var7 = null;
                var1 = var7 != var11;
case 69:
                if(!var1) { _fun0025_ip = 158; continue _fun0025 }
case 231:
                var1 = var9.editId;
                var6['editId'] = var1;
case 158:
                var1 = var9.text;
                var14 = var16 !== var1;
                var _closure3_slot2 = var14;
                var1 = var9.selectionStart;
                var18 = var5 !== var1;
                if(var18) { _fun0025_ip = 163; continue _fun0025 }
case 95:
                var1 = var9.selectionEnd;
                var18 = var4 !== var1;
case 163:
                var1 = var9.focused;
                var17 = var2 !== var1;
                var12 = var6.activeCommand;
                var2 = var6.activeCommandSection;
                if(var14) { _fun0025_ip = 146; continue _fun0025 }
case 232:
                var1 = var9.queryCommands;
                if(!(var3 === var1)) { _fun0025_ip = 146; continue _fun0025 }
case 233:
                var3 = var9.preferredCommand;
                var1 = null;
                var1 = var1 != var3;
                var11 = var2;
                var3 = false;
                if(!var1) { _fun0025_ip = 234; continue _fun0025 }
case 146:
                var1 = var9.queryCommands;
                var6['contextCommands'] = var1;
                var5 = var6.preferredCommand;
                var1 = var9.preferredCommand;
                var27 = null;
                if(!(var27 != var1)) { _fun0025_ip = 154; continue _fun0025 }
case 235:
                var1 = var9.preferredCommand;
                var6['preferredCommand'] = var1;
                var1 = var9.location;
                var6['location'] = var1;
case 154:
                var4 = var9.commandsDisabled;
                var1 = null;
                if(var4) { _fun0025_ip = 139; continue _fun0025 }
case 24:
                if(var14) { _fun0025_ip = 148; continue _fun0025 }
case 49:
                var4 = var6.preferredCommand;
                if(!(var27 != var4)) { _fun0025_ip = 148; continue _fun0025 }
case 236:
                var4 = var6.preferredCommand;
                var7 = var4.preferredCommandType;
                var4 = _closure1_slot15;
                var4 = var4.FULL_COMMAND;
                if(!(var7 === var4)) { _fun0025_ip = 148; continue _fun0025 }
case 237:
                var4 = {};
                var7 = var6.preferredCommand;
                var4['command'] = var7;
                var7 = var6.preferredCommandSection;
                var4['section'] = var7;
                _fun0025_ip = 238; continue _fun0025;
case 148:
                var22 = var6.getCurrentCommand;
                var41 = var9.text;
                var40 = var9.channel;
                var39 = var6.preferredCommand;
                var38 = var6.preferredCommandSection;
                var42 = var6;
                var4 = var42[var22](var41, var40, var39, var38, var37);
case 238:
                var1 = var4;
case 139:
                var7 = var27 != var1;
                var4 = null;
                if(!var7) { _fun0025_ip = 239; continue _fun0025 }
case 240:
                var4 = var1.command;
                var2 = var1.section;
case 239:
                var1 = var6.preferredCommand;
                var19 = var27 == var1;
                var21 = undefined;
                var7 = undefined;
                if(var19) { _fun0025_ip = 241; continue _fun0025 }
case 242:
                var7 = var1.id;
case 241:
                var19 = var27 == var4;
                var1 = undefined;
                if(var19) { _fun0025_ip = 243; continue _fun0025 }
case 244:
                var1 = var4.id;
case 243:
                if(!(var7 === var1)) { _fun0025_ip = 245; continue _fun0025 }
case 210:
                var1 = var6.preferredCommand;
                var7 = var27 == var1;
                var19 = undefined;
                if(var7) { _fun0025_ip = 246; continue _fun0025 }
case 247:
                var19 = var1.preferredCommandType;
case 246:
                var1 = _closure1_slot15;
                var1 = var1.PARTIAL_COMMAND;
                var1 = var19 === var1;
                if(!var1) { _fun0025_ip = 248; continue _fun0025 }
case 249:
                var20 = var27 == var4;
                var19 = undefined;
                if(var20) { _fun0025_ip = 250; continue _fun0025 }
case 115:
                var19 = var4.preferredCommandType;
case 250:
                var7 = _closure1_slot15;
                var7 = var7.FULL_COMMAND;
                var1 = var19 === var7;
case 248:
                if(!var1) { _fun0025_ip = 251; continue _fun0025 }
case 252:
                var6['preferredCommand'] = var4;
                _fun0025_ip = 251; continue _fun0025;
case 245:
                if(!var14) { _fun0025_ip = 251; continue _fun0025 }
case 253:
                var6['preferredCommand'] = var27;
                var6['preferredCommandSection'] = var27;
                var6['location'] = var21;
case 251:
                var1 = var27 == var5;
                var7 = undefined;
                if(var1) { _fun0025_ip = 254; continue _fun0025 }
case 255:
                var7 = var5.id;
case 254:
                var19 = var6.preferredCommand;
                var20 = var27 == var19;
                var1 = undefined;
                if(var20) { _fun0025_ip = 256; continue _fun0025 }
case 257:
                var1 = var19.id;
case 256:
                var1 = var7 !== var1;
                if(var1) { _fun0025_ip = 258; continue _fun0025 }
case 259:
                var19 = var27 == var5;
                var7 = undefined;
                if(var19) { _fun0025_ip = 260; continue _fun0025 }
case 261:
                var7 = var5.preferredCommandType;
case 260:
                var19 = var6.preferredCommand;
                var20 = var27 == var19;
                var5 = undefined;
                if(var20) { _fun0025_ip = 262; continue _fun0025 }
case 263:
                var5 = var19.preferredCommandType;
case 262:
                var1 = var7 !== var5;
case 258:
                var7 = var6.preferredOptionValues;
                var5 = var13.id;
                var19 = var7[var5];
                if(!(var27 == var19)) { _fun0025_ip = 264; continue _fun0025 }
case 265:
                var19 = {};
case 264:
                var23 = var6.parser;
                var22 = var23.parse;
                var20 = var9.text;
                var7 = {};
                var5 = var27 == var4;
                var26 = undefined;
                if(var5) { _fun0025_ip = 266; continue _fun0025 }
case 222:
                var26 = var4.preferredCommandType;
case 266:
                var24 = _closure1_slot15;
                var25 = var24.FULL_COMMAND;
                var24 = null;
                if(!(var26 === var25)) { _fun0025_ip = 267; continue _fun0025 }
case 268:
                var24 = var4;
case 267:
                var7['activeCommand'] = var24;
                var7['preferredOptionValues'] = var19;
                var7 = var22.bind(var23)(var20, var7);
                var6['chatInputNodes'] = var7;
                var20 = var6.optionsToNodes;
                var7 = var20.clear;
                var7 = var7.bind(var20)();
                var20 = var6.optionValueNodes;
                var7 = var20.clear;
                var7 = var7.bind(var20)();
                var22 = var6.chatInputNodes;
                var20 = var22.forEach;
                var7 = function(arg1) {
                    _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                        var5 = arg1;
                        var4 = var5.type;
                        var6 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var7 = 8;
                        var2 = var1[var7];
                        var1 = undefined;
                        var2 = var6.bind(var1)(var2);
                        var2 = var2.ChatInputNodeType;
                        var2 = var2.COMMAND_OPTION;
                        if(!(var4 === var2)) { _fun0026_ip = 269; continue _fun0026 }
case 5:
                        var2 = var5.data;
                        var4 = null;
                        var6 = var4 == var2;
                        var4 = undefined;
                        if(var6) { _fun0026_ip = 35; continue _fun0026 }
case 270:
                        var4 = var2.type;
case 35:
                        var6 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var2 = var2[var7];
                        var2 = var6.bind(var1)(var2);
                        var2 = var2.ChatInputParseResultDataType;
                        var2 = var2.COMMAND_OPTION;
                        if(!(var4 !== var2)) { _fun0026_ip = 271; continue _fun0026 }
case 269:
                        var4 = var5.type;
                        var6 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var2 = var2[var7];
                        var2 = var6.bind(var1)(var2);
                        var2 = var2.ChatInputNodeType;
                        var2 = var2.COMMAND_OPTION_WITH_VALUE;
                        var2 = var4 === var2;
                        if(!var2) { _fun0026_ip = 146; continue _fun0026 }
case 272:
                        var6 = var5.data;
                        var4 = null;
                        var8 = var4 == var6;
                        var4 = undefined;
                        if(var8) { _fun0026_ip = 232; continue _fun0026 }
case 14:
                        var4 = var6.type;
case 232:
                        var6 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var3 = var3[var7];
                        var3 = var6.bind(var1)(var3);
                        var3 = var3.ChatInputParseResultDataType;
                        var3 = var3.COMMAND_OPTION;
                        var2 = var4 === var3;
case 146:
                        if(!var2) { _fun0026_ip = 273; continue _fun0026 }
case 274:
                        var2 = _closure3_slot0;
                        var4 = var2.optionValueNodes;
                        var3 = var4.set;
                        var2 = var5.data;
                        var2 = var2.option;
                        var2 = var2.name;
                        var2 = var3.bind(var4)(var2, var5);
                        _fun0026_ip = 273; continue _fun0026;
case 271:
                        var2 = _closure3_slot0;
                        var4 = var2.optionsToNodes;
                        var3 = var4.set;
                        var2 = var5.data;
                        var2 = var2.option;
                        var2 = var2.name;
                        var2 = var3.bind(var4)(var2, var5);
case 273:
                        return var1;
                    }
                };
                var7 = var20.bind(var22)(var7);
                if(!var14) { _fun0025_ip = 275; continue _fun0025 }
case 276:
                var7 = var6.activeCommand;
                var22 = var27 == var7;
                var20 = undefined;
                if(var22) { _fun0025_ip = 277; continue _fun0025 }
case 278:
                var20 = var7.preferredCommandType;
case 277:
                var7 = _closure1_slot15;
                var7 = var7.FULL_COMMAND;
                if(!(var20 === var7)) { _fun0025_ip = 275; continue _fun0025 }
case 279:
                var22 = new Array(0);
                var20 = _closure1_slot16;
                var23 = var6.activeCommand;
                var24 = var27 == var23;
                var7 = undefined;
                if(var24) { _fun0025_ip = 280; continue _fun0025 }
case 281:
                var7 = var23.options;
case 280:
                if(!(var27 == var7)) { _fun0025_ip = 282; continue _fun0025 }
case 283:
                var7 = new Array(0);
case 282:
                var26 = var20.bind(var21)(var7);
                var20 = var26.bind(var21)();
                var7 = var20.done;
                var25 = 15;
                var24 = 1;
                var23 = '';
                if(var7) { _fun0025_ip = 284; continue _fun0025 }
case 285:
                var7 = var20.value;
                var28 = var7.name;
                var31 = var19[var28];
                var30 = var6.optionValueNodes;
                var29 = var30.get;
                var32 = var29.bind(var30)(var28);
                var29 = var27 == var31;
                if(var29) { _fun0025_ip = 286; continue _fun0025 }
case 287:
                var30 = var31.displayText;
                var29 = var23 === var30;
case 286:
                if(var29) { _fun0025_ip = 288; continue _fun0025 }
case 289:
                var30 = var27 != var32;
                if(!var30) { _fun0025_ip = 290; continue _fun0025 }
case 291:
                var35 = var9.text;
                var34 = var35.substring;
                var36 = var32.location;
                var33 = var7.displayName;
                var33 = var33.length;
                var33 = var36 + var33;
                var33 = var33 + var24;
                var36 = var32.location;
                var32 = var32.length;
                var32 = var36 + var32;
                var32 = var34.bind(var35)(var33, var32);
                var31 = var31.displayText;
                var30 = var32 === var31;
case 290:
                var29 = var30;
case 288:
                if(var29) { _fun0025_ip = 292; continue _fun0025 }
case 293:
                var29 = delete var19[var28];
                var29 = var7.type;
                var30 = _closure1_slot0;
                var7 = _closure1_slot3;
                var7 = var7[var25];
                var7 = var30.bind(var21)(var7);
                var7 = var7.ApplicationCommandOptionType;
                var7 = var7.ATTACHMENT;
                if(!(var29 === var7)) { _fun0025_ip = 292; continue _fun0025 }
case 294:
                var7 = var22.push;
                var7 = var7.bind(var22)(var28);
case 292:
                var28 = var26.bind(var21)();
                var7 = var28.done;
                var20 = var28;
                if(!var7) { _fun0025_ip = 285; continue _fun0025 }
case 284:
                var20 = var22.length;
                var7 = 0;
                if(!(var20 > var7)) { _fun0025_ip = 275; continue _fun0025 }
case 295:
                var20 = _closure1_slot1;
                var23 = _closure1_slot3;
                var7 = 24;
                var7 = var23[var7];
                var21 = var20.bind(var21)(var7);
                var20 = var21.removeFiles;
                var7 = var13.id;
                var5 = _closure1_slot7;
                var5 = var5.SlashCommand;
                var5 = var20.bind(var21)(var7, var22, var5);
case 275:
                var7 = var6.preferredOptionValues;
                var5 = var13.id;
                var7[var5] = var19;
                var12 = var4;
                var11 = var2;
                var3 = var1;
case 234:
                var7 = null;
                var2 = var7 == var12;
                var1 = undefined;
                var4 = undefined;
                if(var2) { _fun0025_ip = 198; continue _fun0025 }
case 296:
                var4 = var12.id;
case 198:
                var5 = var6.activeCommand;
                var19 = var7 == var5;
                var2 = undefined;
                if(var19) { _fun0025_ip = 297; continue _fun0025 }
case 298:
                var2 = var5.id;
case 297:
                var2 = var4 !== var2;
                var _closure3_slot3 = var2;
                var4 = var6.activeOption;
                var _closure3_slot4 = var4;
                var5 = var14;
                if(var14) { _fun0025_ip = 299; continue _fun0025 }
case 300:
                var5 = var18;
case 299:
                if(var5) { _fun0025_ip = 301; continue _fun0025 }
case 302:
                var5 = var17;
case 301:
                if(var5) { _fun0025_ip = 303; continue _fun0025 }
case 304:
                var5 = var2;
case 303:
                if(!var5) { _fun0025_ip = 305; continue _fun0025 }
case 306:
                var18 = var6.getCurrentOption;
                var17 = var9.focused;
                if(var17) { _fun0025_ip = 307; continue _fun0025 }
case 308:
                var20 = _closure1_slot0;
                var21 = _closure1_slot3;
                var5 = 25;
                var5 = var21[var5];
                var19 = var20.bind(var1)(var5);
                var5 = var19.getKeyboardType;
                var19 = var5.bind(var19)();
                var5 = 26;
                var5 = var21[var5];
                var5 = var20.bind(var1)(var5);
                var5 = var5.KeyboardTypes;
                var5 = var5.SYSTEM;
                var17 = var19 !== var5;
case 307:
                var5 = var9.selectionStart;
                var5 = var18.bind(var6)(var17, var5);
                _closure3_slot4 = var5;
                var4 = var5;
case 305:
                var5 = var2;
                if(!var2) { _fun0025_ip = 309; continue _fun0025 }
case 310:
                var17 = var6.activeCommand;
                var5 = var7 != var17;
case 309:
                if(!var5) { _fun0025_ip = 311; continue _fun0025 }
case 203:
                var18 = _closure1_slot1;
                var19 = _closure1_slot3;
                var17 = 24;
                var17 = var19[var17];
                var18 = var18.bind(var1)(var17);
                var17 = var18.clearAll;
                var13 = var13.id;
                var5 = _closure1_slot7;
                var5 = var5.SlashCommand;
                var5 = var17.bind(var18)(var13, var5);
case 311:
                var5 = var7 == var4;
                var13 = undefined;
                if(var5) { _fun0025_ip = 312; continue _fun0025 }
case 313:
                var13 = var4.name;
case 312:
                var17 = var6.activeOption;
                var18 = var7 == var17;
                var5 = undefined;
                if(var18) { _fun0025_ip = 314; continue _fun0025 }
case 315:
                var5 = var17.name;
case 314:
                var13 = var13 !== var5;
                var _closure3_slot5 = var13;
                var5 = var9.lastCommandAutocompleteResponseNonce;
                var8 = var8 !== var5;
                var5 = var14;
                if(var14) { _fun0025_ip = 316; continue _fun0025 }
case 317:
                var5 = var13;
case 316:
                if(var5) { _fun0025_ip = 318; continue _fun0025 }
case 319:
                var5 = var8;
case 318:
                if(!var5) { _fun0025_ip = 320; continue _fun0025 }
case 321:
                var8 = var7 == var12;
                var17 = undefined;
                if(var8) { _fun0025_ip = 322; continue _fun0025 }
case 323:
                var17 = var12.preferredCommandType;
case 322:
                var8 = _closure1_slot15;
                var8 = var8.FULL_COMMAND;
                var5 = var17 === var8;
case 320:
                if(!var5) { _fun0025_ip = 324; continue _fun0025 }
case 325:
                var8 = var6.getAllCommandOptionValues;
                var5 = var9.text;
                var5 = var8.bind(var6)(var12, var5);
                var6['optionValues'] = var5;
                var8 = _closure1_slot0;
                var17 = _closure1_slot3;
                var5 = 27;
                var5 = var17[var5];
                var20 = var8.bind(var1)(var5);
                var19 = var20.getValidationResults;
                var40 = var6.optionValues;
                var5 = var9.channel;
                var39 = var5.guild_id;
                var5 = var9.channel;
                var38 = var5.id;
                var37 = false;
                var42 = var20;
                var41 = var12;
                var5 = var42[var19](var41, var40, var39, var38, var37, var36);
                var6['optionValidationResults'] = var5;
                var17 = var6.chatInputNodes;
                var8 = var17.map;
                var5 = function(arg1) {
                    _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                        var4 = arg1;
                        var2 = var4.type;
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var9 = 8;
                        var1 = var1[var9];
                        var8 = undefined;
                        var1 = var3.bind(var8)(var1);
                        var1 = var1.ChatInputNodeType;
                        var1 = var1.COMMAND_OPTION;
                        if(!(var2 !== var1)) { _fun0027_ip = 326; continue _fun0027 }
case 5:
                        var2 = var4.type;
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var1 = var1[var9];
                        var1 = var3.bind(var8)(var1);
                        var1 = var1.ChatInputNodeType;
                        var1 = var1.COMMAND_OPTION_WITH_VALUE;
                        if(!(var2 === var1)) { _fun0027_ip = 327; continue _fun0027 }
case 326:
                        var1 = var4.data;
                        var2 = null;
                        if(!(var2 == var1)) { _fun0027_ip = 328; continue _fun0027 }
case 327:
                        return var4;
case 328:
                        var1 = var4.data;
                        var3 = var1.option;
                        var6 = var4.type;
                        var7 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var1 = var1[var9];
                        var1 = var7.bind(var8)(var1);
                        var1 = var1.ChatInputNodeType;
                        var1 = var1.COMMAND_OPTION_WITH_VALUE;
                        if(!(var6 === var1)) { _fun0027_ip = 108; continue _fun0027 }
case 329:
                        var7 = var3.name;
                        var9 = _closure3_slot4;
                        var10 = var2 == var9;
                        var6 = undefined;
                        if(var10) { _fun0027_ip = 330; continue _fun0027 }
case 331:
                        var6 = var9.name;
case 330:
                        if(!(var7 === var6)) { _fun0027_ip = 108; continue _fun0027 }
case 16:
                        var6 = _closure3_slot2;
                        if(!var6) { _fun0027_ip = 108; continue _fun0027 }
case 332:
                        var6 = _closure3_slot3;
                        if(!var6) { _fun0027_ip = 333; continue _fun0027 }
case 137:
                        var1 = _closure3_slot5;
                        if(var1) { _fun0027_ip = 108; continue _fun0027 }
case 333:
                        var1 = {};
                        var13 = var1;
                        var12 = var4;
                        var6 = copyDataProperties(var13, var12);
                        var6 = 'style';
                        var1[var6] = var8;
                        return var1;
case 108:
                        var1 = {};
                        var13 = var1;
                        var12 = var4;
                        var4 = copyDataProperties(var13, var12);
                        var6 = _closure3_slot0;
                        var7 = var6.optionValidationResults;
                        var6 = var3.name;
                        var6 = var7[var6];
                        var9 = var3.name;
                        var10 = _closure3_slot4;
                        var11 = var2 == var10;
                        var7 = undefined;
                        if(var11) { _fun0027_ip = 334; continue _fun0027 }
case 335:
                        var7 = var10.name;
case 334:
                        if(!(var9 !== var7)) { _fun0027_ip = 336; continue _fun0027 }
case 65:
                        if(!(var8 !== var6)) { _fun0027_ip = 336; continue _fun0027 }
case 337:
                        var7 = var6.success;
                        if(var7) { _fun0027_ip = 336; continue _fun0027 }
case 53:
                        var7 = _closure3_slot0;
                        var9 = var7.styles;
                        var7 = var9.commandErrorOption;
                        var7 = var7.bind(var9)();
                        var1['style'] = var7;
                        _fun0027_ip = 338; continue _fun0027;
case 336:
                        var7 = _closure3_slot0;
                        var9 = var7.styles;
                        var7 = var9.commandOption;
                        var7 = var7.bind(var9)();
                        var1['style'] = var7;
case 338:
                        var2 = var2 != var6;
                        if(!var2) { _fun0027_ip = 339; continue _fun0027 }
case 340:
                        var2 = var6.success;
case 339:
                        if(!var2) { _fun0027_ip = 341; continue _fun0027 }
case 238:
                        var6 = var3.type;
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var5 = 15;
                        var5 = var9[var5];
                        var5 = var7.bind(var8)(var5);
                        var5 = var5.ApplicationCommandOptionType;
                        var5 = var5.ATTACHMENT;
                        var2 = var6 === var5;
case 341:
                        if(!var2) { _fun0027_ip = 342; continue _fun0027 }
case 343:
                        var2 = {};
                        var5 = 'tapAttachment';
                        var2['action'] = var5;
                        var4 = _closure3_slot1;
                        var4 = var4.channel;
                        var4 = var4.id;
                        var2['channelId'] = var4;
                        var3 = var3.name;
                        var2['optionName'] = var3;
                        var1['tapAction'] = var2;
                        var2 = true;
                        var1['deleteNodeOnBackspace'] = var2;
case 342:
                        return var1;
                    }
                };
                var5 = var8.bind(var17)(var5);
                var6['chatInputNodes'] = var5;
case 324:
                var5 = var14;
                if(var5) { _fun0025_ip = 344; continue _fun0025 }
case 345:
                var5 = var2;
case 344:
                if(var5) { _fun0025_ip = 346; continue _fun0025 }
case 347:
                var5 = var13;
case 346:
                if(var5) { _fun0025_ip = 348; continue _fun0025 }
case 349:
                var8 = var9.editId;
                var5 = var10 !== var8;
case 348:
                if(!var5) { _fun0025_ip = 350; continue _fun0025 }
case 351:
                var5 = var6.ref;
                var17 = var5.current;
                var10 = var17.updateNativeTextBlocksThrottled;
                var8 = var6.chatInputNodes;
                var5 = var9.editId;
                var5 = var10.bind(var17)(var8, var5);
case 350:
                var5 = var2;
                if(!var2) { _fun0025_ip = 352; continue _fun0025 }
case 353:
                var5 = var7 != var12;
case 352:
                if(!var5) { _fun0025_ip = 354; continue _fun0025 }
case 355:
                var5 = true;
                var6['canAutoInsertFirstOption'] = var5;
case 354:
                var10 = _closure1_slot0;
                var5 = _closure1_slot3;
                var21 = 18;
                var5 = var5[var21];
                var17 = var10.bind(var1)(var5);
                var10 = var17.isEmpty;
                var5 = var6.optionsToNodes;
                var5 = var10.bind(var17)(var5);
                if(var5) { _fun0025_ip = 356; continue _fun0025 }
case 357:
                var5 = false;
                var6['canAutoInsertFirstOption'] = var5;
case 356:
                var5 = var7 == var12;
                var10 = undefined;
                if(var5) { _fun0025_ip = 358; continue _fun0025 }
case 359:
                var10 = var12.preferredCommandType;
case 358:
                var5 = _closure1_slot15;
                var5 = var5.FULL_COMMAND;
                if(!(var10 === var5)) { _fun0025_ip = 360; continue _fun0025 }
case 361:
                var5 = var7 == var12;
                var17 = undefined;
                if(var5) { _fun0025_ip = 362; continue _fun0025 }
case 363:
                var17 = var12.options;
case 362:
                if(!(var7 == var17)) { _fun0025_ip = 364; continue _fun0025 }
case 360:
                var17 = new Array(0);
case 364:
                var10 = var17.filter;
                var5 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.required;
                    return var1;
                };
                var5 = var10.bind(var17)(var5);
                var5 = var5.length;
                var10 = 0;
                var19 = var5 > var10;
                var5 = var7 == var12;
                var17 = undefined;
                if(var5) { _fun0025_ip = 365; continue _fun0025 }
case 366:
                var17 = var12.preferredCommandType;
case 365:
                var5 = _closure1_slot15;
                var5 = var5.FULL_COMMAND;
                if(!(var17 === var5)) { _fun0025_ip = 367; continue _fun0025 }
case 368:
                var5 = var7 == var12;
                var18 = undefined;
                if(var5) { _fun0025_ip = 369; continue _fun0025 }
case 370:
                var18 = var12.options;
case 369:
                if(!(var7 == var18)) { _fun0025_ip = 371; continue _fun0025 }
case 367:
                var18 = new Array(0);
case 371:
                var17 = var18.filter;
                var5 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.required;
                    var1 = !var1;
                    return var1;
                };
                var5 = var17.bind(var18)(var5);
                var17 = var5.length;
                var5 = 1;
                var18 = var5 === var17;
                var5 = var6.canAutoInsertFirstOption;
                if(!var5) { _fun0025_ip = 372; continue _fun0025 }
case 373:
                var17 = var7 == var12;
                var20 = undefined;
                if(var17) { _fun0025_ip = 374; continue _fun0025 }
case 375:
                var20 = var12.preferredCommandType;
case 374:
                var17 = _closure1_slot15;
                var17 = var17.FULL_COMMAND;
                var5 = var20 === var17;
case 372:
                if(!var5) { _fun0025_ip = 376; continue _fun0025 }
case 377:
                var20 = _closure1_slot0;
                var17 = _closure1_slot3;
                var17 = var17[var21];
                var21 = var20.bind(var1)(var17);
                var20 = var21.isEmpty;
                var17 = var6.optionsToNodes;
                var5 = var20.bind(var21)(var17);
case 376:
                if(!var5) { _fun0025_ip = 378; continue _fun0025 }
case 379:
                var17 = var9.text;
                var17 = var17.length;
                var16 = var16.length;
                var5 = var17 >= var16;
case 378:
                if(!var5) { _fun0025_ip = 380; continue _fun0025 }
case 381:
                var17 = var6.insertFirstOptionIfValid;
                var41 = var9.text;
                var39 = var12.displayName;
                var42 = var6;
                var40 = var12;
                var38 = var19;
                var37 = var18;
                var5 = var42[var17](var41, var40, var39, var38, var37, var36);
                if(var5) { _fun0025_ip = 380; continue _fun0025 }
case 382:
                var17 = var6.insertFirstOptionIfValid;
                var41 = var9.text;
                var39 = var12.untranslatedName;
                var42 = var6;
                var40 = var12;
                var38 = var19;
                var37 = var18;
                var5 = var42[var17](var41, var40, var39, var38, var37, var36);
case 380:
                if(!var13) { _fun0025_ip = 383; continue _fun0025 }
case 384:
                var5 = var7 == var4;
                var16 = undefined;
                if(var5) { _fun0025_ip = 385; continue _fun0025 }
case 386:
                var16 = var4.type;
case 385:
                var17 = _closure1_slot0;
                var18 = _closure1_slot3;
                var5 = 15;
                var5 = var18[var5];
                var5 = var17.bind(var1)(var5);
                var5 = var5.ApplicationCommandOptionType;
                var5 = var5.ATTACHMENT;
                if(!(var16 === var5)) { _fun0025_ip = 383; continue _fun0025 }
case 387:
                var16 = var6.optionValidationResults;
                var5 = var4.name;
                var5 = var16[var5];
                var5 = var5.success;
                if(var5) { _fun0025_ip = 383; continue _fun0025 }
case 388:
                var5 = var6.ref;
                var17 = var5.current;
                var16 = var17.openCustomKeyboard;
                var5 = {};
                var19 = _closure1_slot0;
                var20 = _closure1_slot3;
                var18 = 26;
                var18 = var20[var18];
                var18 = var19.bind(var1)(var18);
                var18 = var18.KeyboardTypes;
                var18 = var18.MEDIA;
                var5['type'] = var18;
                var18 = {};
                var19 = _closure1_slot13;
                var19 = var19.COMMAND;
                var18['target'] = var19;
                var18['option'] = var4;
                var5['context'] = var18;
                var5 = var16.bind(var17)(var5);
                _fun0025_ip = 389; continue _fun0025;
case 383:
                var5 = var13;
                if(!var5) { _fun0025_ip = 390; continue _fun0025 }
case 391:
                var5 = var7 != var4;
case 390:
                if(!var5) { _fun0025_ip = 392; continue _fun0025 }
case 393:
                var17 = var4.type;
                var18 = _closure1_slot0;
                var19 = _closure1_slot3;
                var16 = 15;
                var16 = var19[var16];
                var16 = var18.bind(var1)(var16);
                var16 = var16.ApplicationCommandOptionType;
                var16 = var16.ATTACHMENT;
                var5 = var17 !== var16;
case 392:
                if(!var5) { _fun0025_ip = 394; continue _fun0025 }
case 395:
                var18 = _closure1_slot0;
                var19 = _closure1_slot3;
                var16 = 25;
                var16 = var19[var16];
                var17 = var18.bind(var1)(var16);
                var16 = var17.getKeyboardType;
                var17 = var16.bind(var17)();
                var16 = 26;
                var16 = var19[var16];
                var16 = var18.bind(var1)(var16);
                var16 = var16.KeyboardTypes;
                var16 = var16.SYSTEM;
                var5 = var17 !== var16;
case 394:
                if(!var5) { _fun0025_ip = 389; continue _fun0025 }
case 396:
                var5 = var6.ref;
                var16 = var5.current;
                var5 = var16.closeCustomKeyboard;
                var5 = var5.bind(var16)();
                var5 = var6.ref;
                var16 = var5.current;
                var5 = var16.focus;
                var5 = var5.bind(var16)();
case 389:
                var6['props'] = var9;
                var5 = {};
                var _closure3_slot6 = var5;
                var16 = var7 == var12;
                var17 = undefined;
                if(var16) { _fun0025_ip = 397; continue _fun0025 }
case 398:
                var17 = var12.preferredCommandType;
case 397:
                var16 = _closure1_slot15;
                var16 = var16.FULL_COMMAND;
                if(!(var17 === var16)) { _fun0025_ip = 399; continue _fun0025 }
case 400:
                if(var13) { _fun0025_ip = 401; continue _fun0025 }
case 402:
                if(!var14) { _fun0025_ip = 399; continue _fun0025 }
case 403:
                if(!(var7 == var4)) { _fun0025_ip = 399; continue _fun0025 }
case 401:
                var16 = var7 == var12;
                var17 = var12;
                if(var16) { _fun0025_ip = 404; continue _fun0025 }
case 405:
                var18 = var12.options;
                var16 = var7 == var18;
                var17 = var18;
case 404:
                if(var16) { _fun0025_ip = 406; continue _fun0025 }
case 407:
                var16 = var17.forEach;
                var15 = function(arg1) {
                    _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                        var1 = arg1;
                        var4 = var1.name;
                        var1 = _closure3_slot0;
                        var1 = var1.optionValues;
                        var8 = var1[var4];
                        var3 = _closure3_slot6;
                        var2 = {};
                        var9 = _closure3_slot4;
                        var5 = null;
                        var10 = var5 == var9;
                        var1 = undefined;
                        var7 = undefined;
                        if(var10) { _fun0028_ip = 105; continue _fun0028 }
case 45:
                        var7 = var9.name;
case 105:
                        var7 = var4 === var7;
                        var2['isActive'] = var7;
                        var2['optionValue'] = var8;
                        var7 = var5 != var8;
                        if(!var7) { _fun0028_ip = 408; continue _fun0028 }
case 151:
                        var9 = var8.length;
                        var8 = 0;
                        var7 = var9 > var8;
case 408:
                        var2['hasValue'] = var7;
                        var7 = _closure3_slot0;
                        var8 = var7.optionsToNodes;
                        var7 = var8.get;
                        var8 = var7.bind(var8)(var4);
                        var9 = var5 == var8;
                        var7 = undefined;
                        if(var9) { _fun0028_ip = 142; continue _fun0028 }
case 56:
                        var7 = var8.location;
case 142:
                        var2['location'] = var7;
                        var6 = _closure3_slot0;
                        var7 = var6.optionsToNodes;
                        var6 = var7.get;
                        var6 = var6.bind(var7)(var4);
                        var7 = var5 == var6;
                        var5 = undefined;
                        if(var7) { _fun0028_ip = 409; continue _fun0028 }
case 410:
                        var5 = var6.length;
case 409:
                        var2['length'] = var5;
                        var3[var4] = var2;
                        return var1;
                    }
                };
                var15 = var16.bind(var17)(var15);
case 406:
                if(!var13) { _fun0025_ip = 399; continue _fun0025 }
case 411:
                if(!(var7 != var4)) { _fun0025_ip = 412; continue _fun0025 }
case 413:
                var13 = var4.name;
                var15 = var5[var13];
                var13 = true;
                var15['hasValue'] = var13;
case 412:
                var13 = var6.activeOption;
                if(!(var7 != var13)) { _fun0025_ip = 399; continue _fun0025 }
case 414:
                var13 = var6.activeOption;
                var13 = var13.name;
                var13 = var5[var13];
                if(!(var7 != var13)) { _fun0025_ip = 399; continue _fun0025 }
case 415:
                var13 = var13.hasValue;
                if(!var13) { _fun0025_ip = 399; continue _fun0025 }
case 416:
                var15 = var6.optionValidationResults;
                var13 = var6.activeOption;
                var13 = var13.name;
                var15 = var15[var13];
                var13 = var6.activeOption;
                var13 = var13.name;
                var13 = var5[var13];
                var13['lastValidationResult'] = var15;
case 399:
                var16 = var6.getCurrentOption;
                var13 = var9.selectionStart;
                var15 = true;
                var13 = var16.bind(var6)(var15, var13);
                if(!var14) { _fun0025_ip = 417; continue _fun0025 }
case 418:
                if(!(var7 != var13)) { _fun0025_ip = 417; continue _fun0025 }
case 419:
                var14 = var13.name;
                var13 = var5[var14];
                if(!(var7 == var13)) { _fun0025_ip = 420; continue _fun0025 }
case 421:
                var13 = {};
case 420:
                var17 = var6.optionsToNodes;
                var16 = var17.get;
                var17 = var16.bind(var17)(var14);
                var18 = var7 == var17;
                var16 = undefined;
                if(var18) { _fun0025_ip = 422; continue _fun0025 }
case 423:
                var16 = var17.location;
case 422:
                var13['location'] = var16;
                var17 = var6.optionsToNodes;
                var16 = var17.get;
                var17 = var16.bind(var17)(var14);
                var18 = var7 == var17;
                var16 = undefined;
                if(var18) { _fun0025_ip = 424; continue _fun0025 }
case 425:
                var16 = var17.length;
case 424:
                var13['length'] = var16;
                var16 = var6.optionValues;
                var16 = var16[var14];
                var13['optionValue'] = var16;
                var13['hasValue'] = var15;
                var5[var14] = var13;
case 417:
                var6['activeCommand'] = var12;
                var6['activeCommandSection'] = var11;
                var6['activeOption'] = var4;
                if(var2) { _fun0025_ip = 426; continue _fun0025 }
case 427:
                var4 = global;
                var11 = var4.Object;
                var4 = var11.keys;
                var4 = var4.bind(var11)(var5);
                var4 = var4.length;
                var2 = var4 > var10;
case 426:
                if(var2) { _fun0025_ip = 428; continue _fun0025 }
case 429:
                var2 = var3;
case 428:
                if(!var2) { _fun0025_ip = 430; continue _fun0025 }
case 431:
                var3 = _closure1_slot2;
                var4 = _closure1_slot3;
                var2 = 9;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.updateChannelState;
                var2 = {};
                var9 = var9.channel;
                var9 = var9.id;
                var2['channelId'] = var9;
                var9 = var6.activeCommand;
                var11 = var7 == var9;
                var10 = undefined;
                if(var11) { _fun0025_ip = 432; continue _fun0025 }
case 433:
                var10 = var9.preferredCommandType;
case 432:
                var8 = _closure1_slot15;
                var9 = var8.FULL_COMMAND;
                var8 = null;
                if(!(var10 === var9)) { _fun0025_ip = 434; continue _fun0025 }
case 435:
                var8 = var6.activeCommand;
case 434:
                var2['command'] = var8;
                var9 = var6.activeCommandSection;
                var10 = var7 != var9;
                var8 = null;
                if(!var10) { _fun0025_ip = 436; continue _fun0025 }
case 437:
                var8 = var9;
case 436:
                var2['section'] = var8;
                var9 = var6.preferredCommand;
                var10 = var7 == var9;
                var8 = undefined;
                if(var10) { _fun0025_ip = 438; continue _fun0025 }
case 439:
                var8 = var9.id;
case 438:
                var9 = var7 != var8;
                var7 = null;
                if(!var9) { _fun0025_ip = 440; continue _fun0025 }
case 441:
                var7 = var8;
case 440:
                var2['preferredCommandId'] = var7;
                var6 = var6.location;
                var2['location'] = var6;
                var2['changedOptionStates'] = var5;
                var2 = var3.bind(var4)(var2);
case 430:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'updateValidationResults';
        var1['key'] = var6;
        var5 = function updateValidationResults() {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                var2 = this;
                var _closure3_slot0 = var2;
                var5 = {};
                var _closure3_slot1 = var5;
                var3 = var2.activeCommand;
                var9 = null;
                var6 = var9 == var3;
                var1 = undefined;
                var7 = undefined;
                if(var6) { _fun0029_ip = 442; continue _fun0029 }
case 229:
                var7 = var3.preferredCommandType;
case 442:
                var6 = _closure1_slot15;
                var6 = var6.FULL_COMMAND;
                if(!(var7 === var6)) { _fun0029_ip = 443; continue _fun0029 }
case 213:
                var8 = var2.activeCommand;
                var6 = var9 == var8;
                var7 = var8;
                if(var6) { _fun0029_ip = 408; continue _fun0029 }
case 444:
                var8 = var8.options;
                var6 = var9 == var8;
                var7 = var8;
case 408:
                if(var6) { _fun0029_ip = 443; continue _fun0029 }
case 66:
                var6 = var7.forEach;
                var4 = function(arg1) {
                    var1 = arg1;
                    var3 = var1.name;
                    var2 = _closure3_slot1;
                    var1 = {};
                    var4 = _closure3_slot0;
                    var4 = var4.optionValidationResults;
                    var4 = var4[var3];
                    var1['lastValidationResult'] = var4;
                    var2[var3] = var1;
                    var1 = undefined;
                    return var1;
                };
                var4 = var6.bind(var7)(var4);
case 443:
                var4 = _closure1_slot2;
                var6 = _closure1_slot3;
                var3 = 9;
                var3 = var6[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.updateOptionStates;
                var2 = var2.props;
                var2 = var2.channel;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2, var5);
                return var1;
            }
        };
        var1['value'] = var5;
        var2[2] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 28;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_commands/native/ApplicationCommandManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();