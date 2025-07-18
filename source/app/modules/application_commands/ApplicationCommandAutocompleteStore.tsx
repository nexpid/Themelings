// app/modules/application_commands/ApplicationCommandAutocompleteStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
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
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function getOrCreateChannelState(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var4 = _closure1_slot10;
            var2 = var4.has;
            var2 = var2.bind(var4)(var3);
            if(var2) { _fun0002_ip = 239; continue _fun0002 }
 26:
            var5 = _closure1_slot10;
            var4 = var5.set;
            var2 = {};
            var7 = _closure1_slot7;
            var6 = var7.getActiveCommand;
            var8 = var6.bind(var7)(var3);
            var6 = null;
            var9 = var6 == var8;
            var6 = undefined;
            var7 = undefined;
            if(var9) { _fun0002_ip = 70; continue _fun0002 }
 65:
            var7 = var8.id;
 70:
            var2['commandId'] = var7;
            var8 = _closure1_slot7;
            var7 = var8.getActiveOptionName;
            var7 = var7.bind(var8)(var3);
            var2['optionName'] = var7;
            var7 = global;
            var8 = var7.Map;
            var9 = var8.prototype;
            var9 = Object.create(var9, {constructor: {value: var8}});
            var12 = var9;
            var8 = new var12[var8](var11);
            var8 = var8 instanceof Object ? var8 : var9;
            var2['optionNameToAutocompleteQueries'] = var8;
            var8 = var7.Map;
            var9 = var8.prototype;
            var9 = Object.create(var9, {constructor: {value: var8}});
            var12 = var9;
            var8 = new var12[var8](var11);
            var8 = var8 instanceof Object ? var8 : var9;
            var2['optionNameToLastResults'] = var8;
            var8 = var7.Map;
            var9 = var8.prototype;
            var9 = Object.create(var9, {constructor: {value: var8}});
            var12 = var9;
            var8 = new var12[var8](var11);
            var8 = var8 instanceof Object ? var8 : var9;
            var2['optionNameToNonce'] = var8;
            var7 = var7.Map;
            var8 = var7.prototype;
            var8 = Object.create(var8, {constructor: {value: var7}});
            var12 = var8;
            var7 = new var12[var7](var11);
            var7 = var7 instanceof Object ? var7 : var8;
            var2['optionNameToLastQuery'] = var7;
            var7 = false;
            var2['lastErrored'] = var7;
            var2['lastResponseNonce'] = var6;
            var2 = var4.bind(var5)(var3, var2);
 239:
            var2 = _closure1_slot10;
            var1 = var2.get;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var10 = function handleInit() {
        var3 = _closure1_slot9;
        var2 = var3.clear;
        var2 = var2.bind(var3)();
        var2 = _closure1_slot10;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = true;
        return var1;
    };
    var9 = function handleSetActiveCommand(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var4 = var1.channelId;
            var5 = var1.command;
            var3 = _closure1_slot15;
            var1 = null;
            var6 = var1 == var5;
            var1 = undefined;
            var2 = undefined;
            if(var6) { _fun0003_ip = 39; continue _fun0003 }
 34:
            var2 = var5.id;
 39:
            var2 = var3.bind(var1)(var4, var2);
            return var1;
        }
    };
    var1 = function handleCommandChange(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var5 = arg1;
            var4 = arg2;
            var3 = _closure1_slot7;
            var2 = var3.getActiveOptionName;
            var3 = var2.bind(var3)(var5);
            var2 = _closure1_slot10;
            var1 = var2.get;
            var2 = var1.bind(var2)(var5);
            var5 = null;
            var1 = var5 != var2;
            if(!var1) { _fun0004_ip = 73; continue _fun0004 }
 47:
            var6 = var2.commandId;
            var6 = var4 !== var6;
            if(var6) { _fun0004_ip = 70; continue _fun0004 }
 60:
            var7 = var2.optionName;
            var6 = var3 !== var7;
 70:
            var1 = var6;
 73:
            if(!var1) { _fun0004_ip = 182; continue _fun0004 }
 76:
            var5 = var5 != var4;
            if(!var5) { _fun0004_ip = 93; continue _fun0004 }
 83:
            var6 = var2.commandId;
            var5 = var4 !== var6;
 93:
            if(!var5) { _fun0004_ip = 160; continue _fun0004 }
 96:
            var6 = var2.optionNameToLastResults;
            var5 = var6.clear;
            var5 = var5.bind(var6)();
            var6 = var2.optionNameToNonce;
            var5 = var6.clear;
            var5 = var5.bind(var6)();
            var6 = var2.optionNameToLastQuery;
            var5 = var6.clear;
            var5 = var5.bind(var6)();
            var6 = var2.optionNameToAutocompleteQueries;
            var5 = var6.clear;
            var5 = var5.bind(var6)();
 160:
            var5 = false;
            var2['lastErrored'] = var5;
            var2['commandId'] = var4;
            var2['optionName'] = var3;
            var1 = true;
 182:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var2 = global;
    var12 = var2.Object;
    var11 = var12.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot2 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.AnalyticEvents;
    var _closure1_slot8 = var8;
    var8 = var2.Map;
    var11 = var8.prototype;
    var11 = Object.create(var11, {constructor: {value: var8}});
    var16 = var11;
    var8 = new var16[var8](var15);
    var8 = var8 instanceof Object ? var8 : var11;
    var _closure1_slot9 = var8;
    var8 = var2.Map;
    var11 = var8.prototype;
    var11 = Object.create(var11, {constructor: {value: var8}});
    var16 = var11;
    var8 = new var16[var8](var15);
    var8 = var8 instanceof Object ? var8 : var11;
    var _closure1_slot10 = var8;
    var2 = var2.Map;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var16 = var8;
    var2 = new var16[var2](var15);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot11 = var2;
    var2 = 7;
    var2 = var6[var2];
    var8 = var5.bind(var1)(var2);
    var2 = var8.isDesktop;
    var2 = var2.bind(var8)();
    var _closure1_slot12 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function ApplicationCommandAutocompleteStore() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot13;
                var1 = var1.bind(var3)();
                if(var1) { _fun0005_ip = 69; continue _fun0005 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0005_ip = 105; continue _fun0005;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot7;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'getLastErrored';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot14;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            var1 = var1.lastErrored;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getAutocompleteChoices';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var3 = _closure1_slot14;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                var4 = var2.optionNameToAutocompleteQueries;
                var3 = var4.get;
                var2 = arg2;
                var4 = var3.bind(var4)(var2);
                var2 = null;
                var2 = var2 == var4;
                if(var2) { _fun0006_ip = 58; continue _fun0006 }
 45:
                var3 = var4.get;
                var2 = arg3;
                var1 = var3.bind(var4)(var2);
 58:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getAutocompleteLastChoices';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var3 = _closure1_slot14;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            var3 = var1.optionNameToLastResults;
            var2 = var3.get;
            var1 = arg2;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getLastResponseNonce';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var3 = _closure1_slot14;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            var1 = var1.lastResponseNonce;
            return var1;
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'ApplicationCommandAutocompleteStore';
    var8['displayName'] = var2;
    var2 = 11;
    var2 = var6[var2];
    var15 = var7.bind(var1)(var2);
    var2 = {};
    var2['CONNECTION_OPEN'] = var10;
    var2['LOGOUT'] = var10;
    var2['CHANNEL_SELECT'] = var10;
    var10 = function handleApplicationCommandAutocompleteRequest(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var7 = var1.nonce;
            var11 = var1.channelId;
            var10 = var1.query;
            var4 = var1.name;
            var1 = _closure1_slot14;
            var2 = undefined;
            var1 = var1.bind(var2)(var11);
            var6 = var1.optionNameToLastQuery;
            var3 = var6.get;
            var3 = var3.bind(var6)(var4);
            if(!(var3 !== var10)) { _fun0007_ip = 297; continue _fun0007 }
 61:
            var6 = var1.optionNameToLastQuery;
            var3 = var6.set;
            var3 = var3.bind(var6)(var4, var10);
            var6 = var1.optionNameToAutocompleteQueries;
            var3 = var6.get;
            var9 = var3.bind(var6)(var4);
            var6 = null;
            var8 = var6 == var9;
            var3 = undefined;
            if(var8) { _fun0007_ip = 115; continue _fun0007 }
 105:
            var8 = var9.get;
            var3 = var8.bind(var9)(var10);
 115:
            if(!(var6 == var3)) { _fun0007_ip = 268; continue _fun0007 }
 122:
            var9 = var1.optionNameToNonce;
            var8 = var9.get;
            var9 = var8.bind(var9)(var4);
            if(!(var6 != var9)) { _fun0007_ip = 156; continue _fun0007 }
 142:
            var8 = _closure1_slot9;
            var6 = var8.delete;
            var6 = var6.bind(var8)(var9);
 156:
            var9 = _closure1_slot9;
            var8 = var9.set;
            var6 = {};
            var6['channelId'] = var11;
            var6['query'] = var10;
            var6['name'] = var4;
            var6 = var8.bind(var9)(var7, var6);
            var8 = _closure1_slot11;
            var6 = var8.set;
            var5 = global;
            var5 = var5.Date;
            var9 = var5.prototype;
            var9 = Object.create(var9, {constructor: {value: var5}});
            var14 = var9;
            var5 = new var14[var5](var13);
            var5 = var5 instanceof Object ? var5 : var9;
            var5 = var6.bind(var8)(var7, var5);
            var6 = var1.optionNameToNonce;
            var5 = var6.set;
            var5 = var5.bind(var6)(var4, var7);
            var5 = var1.lastErrored;
            var2 = undefined;
            if(!var5) { _fun0007_ip = 266; continue _fun0007 }
 256:
            var5 = false;
            var1['lastErrored'] = var5;
            var2 = true;
 266:
            return var2;
 268:
            var2 = false;
            var1['lastErrored'] = var2;
            var2 = var1.optionNameToLastResults;
            var1 = var2.set;
            var1 = var1.bind(var2)(var4, var3);
            var1 = true;
            return var1;
 297:
            var1 = false;
            return var1;
        }
    };
    var2['APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST'] = var10;
    var10 = function handleApplicationCommandAutocompleteResponse(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var9 = var1.choices;
            var2 = var1.nonce;
            var10 = undefined;
            var _closure2_slot0 = var10;
            var3 = _closure1_slot9;
            var1 = var3.get;
            var3 = var1.bind(var3)(var2);
            var5 = null;
            if(!(var5 != var3)) { _fun0008_ip = 528; continue _fun0008 }
 49:
            var6 = _closure1_slot9;
            var1 = var6.delete;
            var1 = var1.bind(var6)(var2);
            var6 = _closure1_slot14;
            var1 = var3.channelId;
            var1 = var6.bind(var10)(var1);
            var11 = var1.optionNameToAutocompleteQueries;
            var8 = var11.get;
            var6 = var3.name;
            var6 = var8.bind(var11)(var6);
            if(!(var5 == var6)) { _fun0008_ip = 152; continue _fun0008 }
 102:
            var12 = var1.optionNameToAutocompleteQueries;
            var11 = var12.set;
            var8 = var3.name;
            var6 = global;
            var6 = var6.Map;
            var13 = var6.prototype;
            var13 = Object.create(var13, {constructor: {value: var6}});
            var16 = var13;
            var6 = new var16[var6](var15);
            var6 = var6 instanceof Object ? var6 : var13;
            var6 = var11.bind(var12)(var8, var6);
 152:
            var6 = _closure1_slot12;
            if(!var6) { _fun0008_ip = 229; continue _fun0008 }
 159:
            var12 = _closure1_slot7;
            var11 = var12.getActiveOption;
            var8 = var3.channelId;
            var8 = var11.bind(var12)(var8);
            var12 = var5 == var8;
            var11 = undefined;
            if(var12) { _fun0008_ip = 193; continue _fun0008 }
 188:
            var11 = var8.type;
 193:
            var12 = _closure1_slot0;
            var13 = _closure1_slot1;
            var8 = 8;
            var8 = var13[var8];
            var8 = var12.bind(var10)(var8);
            var8 = var8.ApplicationCommandOptionType;
            var8 = var8.INTEGER;
            var6 = var11 === var8;
 229:
            _closure2_slot0 = var6;
            var8 = var5 == var9;
            var6 = undefined;
            if(var8) { _fun0008_ip = 257; continue _fun0008 }
 242:
            var8 = var9.map;
            var4 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = arg1;
                    var5 = var1.value;
                    var4 = var1.name_localized;
                    var2 = var1.name;
                    var1 = {};
                    var6 = null;
                    var3 = var2;
                    if(!(var6 != var4)) { _fun0009_ip = 33; continue _fun0009 }
 30:
                    var3 = var4;
 33:
                    var1['displayName'] = var3;
                    var1['name'] = var2;
                    var3 = _closure2_slot0;
                    var2 = var5;
                    if(!var3) { _fun0009_ip = 69; continue _fun0009 }
 54:
                    var3 = global;
                    var4 = var3.Number;
                    var3 = undefined;
                    var2 = var4.bind(var3)(var5);
 69:
                    var1['value'] = var2;
                    return var1;
                }
            };
            var6 = var8.bind(var9)(var4);
 257:
            if(!(var5 == var6)) { _fun0008_ip = 265; continue _fun0008 }
 261:
            var6 = new Array(0);
 265:
            var8 = _closure1_slot11;
            var4 = var8.get;
            var11 = var4.bind(var8)(var2);
            var8 = var5 != var11;
            var4 = 0;
            if(!var8) { _fun0008_ip = 340; continue _fun0008 }
 288:
            var8 = global;
            var8 = var8.Date;
            var9 = var8.prototype;
            var9 = Object.create(var9, {constructor: {value: var8}});
            var16 = var9;
            var8 = new var16[var8](var15);
            var9 = var8 instanceof Object ? var8 : var9;
            var8 = var9.getTime;
            var9 = var8.bind(var9)();
            var8 = var11.getTime;
            var8 = var8.bind(var11)();
            var4 = var9 - var8;
 340:
            var9 = _closure1_slot0;
            var11 = _closure1_slot1;
            var8 = 9;
            var8 = var11[var8];
            var11 = var9.bind(var10)(var8);
            var10 = var11.trackWithMetadata;
            var8 = _closure1_slot8;
            var9 = var8.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE;
            var8 = {};
            var8['duration_ms'] = var4;
            var4 = false;
            var8['error'] = var4;
            var12 = var6.length;
            var8['num_options'] = var12;
            var8 = var10.bind(var11)(var9, var8);
            var8 = _closure1_slot11;
            var7 = var8.delete;
            var7 = var7.bind(var8)(var2);
            var9 = var1.optionNameToAutocompleteQueries;
            var8 = var9.get;
            var7 = var3.name;
            var8 = var8.bind(var9)(var7);
            if(!(var5 != var8)) { _fun0008_ip = 460; continue _fun0008 }
 444:
            var7 = var8.set;
            var5 = var3.query;
            var5 = var7.bind(var8)(var5, var6);
 460:
            var8 = var1.optionNameToLastQuery;
            var7 = var8.get;
            var5 = var3.name;
            var7 = var7.bind(var8)(var5);
            var5 = var3.query;
            if(!(var7 === var5)) { _fun0008_ip = 518; continue _fun0008 }
 490:
            var1['lastErrored'] = var4;
            var5 = var1.optionNameToLastResults;
            var4 = var5.set;
            var3 = var3.name;
            var3 = var4.bind(var5)(var3, var6);
 518:
            var1['lastResponseNonce'] = var2;
            var1 = true;
            return var1;
 528:
            var1 = false;
            return var1;
        }
    };
    var2['APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE'] = var10;
    var10 = function handleInteractionFailure(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var7 = var1.nonce;
            var1 = null;
            if(!(var1 != var7)) { _fun0010_ip = 228; continue _fun0010 }
 18:
            var4 = _closure1_slot9;
            var2 = var4.get;
            var2 = var2.bind(var4)(var7);
            if(!(var1 != var2)) { _fun0010_ip = 224; continue _fun0010 }
 42:
            var5 = _closure1_slot9;
            var4 = var5.delete;
            var4 = var4.bind(var5)(var7);
            var5 = _closure1_slot11;
            var4 = var5.get;
            var6 = var4.bind(var5)(var7);
            var4 = var1 != var6;
            var1 = 0;
            if(!var4) { _fun0010_ip = 131; continue _fun0010 }
 79:
            var4 = global;
            var4 = var4.Date;
            var5 = var4.prototype;
            var5 = Object.create(var5, {constructor: {value: var4}});
            var13 = var5;
            var4 = new var13[var4](var12);
            var5 = var4 instanceof Object ? var4 : var5;
            var4 = var5.getTime;
            var5 = var4.bind(var5)();
            var4 = var6.getTime;
            var4 = var4.bind(var6)();
            var1 = var5 - var4;
 131:
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var4 = 9;
            var5 = var5[var4];
            var4 = undefined;
            var9 = var6.bind(var4)(var5);
            var8 = var9.trackWithMetadata;
            var5 = _closure1_slot8;
            var6 = var5.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE;
            var5 = {};
            var5['duration_ms'] = var1;
            var1 = true;
            var5['error'] = var1;
            var5 = var8.bind(var9)(var6, var5);
            var6 = _closure1_slot11;
            var5 = var6.delete;
            var5 = var5.bind(var6)(var7);
            var3 = _closure1_slot14;
            var2 = var2.channelId;
            var2 = var3.bind(var4)(var2);
            var2['lastErrored'] = var1;
            return var1;
 224:
            var1 = false;
            return var1;
 228:
            var1 = false;
            return var1;
        }
    };
    var2['INTERACTION_FAILURE'] = var10;
    var2['APPLICATION_COMMAND_SET_ACTIVE_COMMAND'] = var9;
    var2['APP_LAUNCHER_SET_ACTIVE_COMMAND'] = var9;
    var4 = function handleUpdateChannelState(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var1 = arg1;
            var4 = var1.channelId;
            var5 = var1.command;
            var3 = _closure1_slot15;
            var1 = null;
            var6 = var1 == var5;
            var1 = undefined;
            var2 = undefined;
            if(var6) { _fun0011_ip = 39; continue _fun0011 }
 34:
            var2 = var5.id;
 39:
            var2 = var3.bind(var1)(var4, var2);
            return var1;
        }
    };
    var2['APPLICATION_COMMAND_UPDATE_CHANNEL_STATE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var16 = var4;
    var14 = var2;
    var2 = new var16[var8](var15, var14, var13);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_commands/ApplicationCommandAutocompleteStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();