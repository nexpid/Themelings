// app/modules/application_commands/ApplicationCommandStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var12 = function handleInit() {
        var1 = {};
        _closure1_slot10 = var1;
        var1 = true;
        return var1;
    };
    var1 = function getOrCreateChannelState(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var3 = _closure1_slot10;
            var3 = var2 in var3;
            if(var3) { _fun0002_ip = 55; continue _fun0002 }
 17:
            var4 = _closure1_slot10;
            var3 = {'activeCommand': null, 'activeCommandSection': null, 'activeOptionName': null, 'preferredCommandId': null, 'optionStates': null, 'initialValues': null, 'commandOrigin': null};
            var5 = {};
            var3['optionStates'] = var5;
            var5 = {};
            var3['initialValues'] = var5;
            var4[var2] = var3;
 55:
            var1 = _closure1_slot10;
            var1 = var1[var2];
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var11 = function handleSetActiveCommand(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var13 = var1.channelId;
            var11 = var1.command;
            var16 = var1.section;
            var12 = var1.initialValues;
            var10 = var1.location;
            var9 = var1.triggerSection;
            var8 = var1.queryLength;
            var7 = var1.sectionName;
            var6 = var1.query;
            var5 = var1.searchResultsPosition;
            var4 = var1.source;
            var15 = var1.commandOrigin;
            var3 = undefined;
            var _closure2_slot0 = var3;
            var2 = _closure1_slot12;
            var13 = var2.bind(var3)(var13);
            var2 = null;
            var17 = var2 == var11;
            var18 = undefined;
            if(var17) { _fun0003_ip = 106; continue _fun0003 }
 101:
            var18 = var11.id;
 106:
            var19 = var13.activeCommand;
            var20 = var2 == var19;
            var17 = undefined;
            if(var20) { _fun0003_ip = 126; continue _fun0003 }
 121:
            var17 = var19.id;
 126:
            if(!(var18 !== var17)) { _fun0003_ip = 321; continue _fun0003 }
 133:
            var13['activeCommand'] = var11;
            var13['activeCommandSection'] = var16;
            var13['activeOptionName'] = var2;
            var13['preferredCommandId'] = var2;
            if(!(var2 == var12)) { _fun0003_ip = 163; continue _fun0003 }
 161:
            var12 = {};
 163:
            var13['initialValues'] = var12;
            var16 = var2 != var15;
            var12 = null;
            if(!var16) { _fun0003_ip = 181; continue _fun0003 }
 178:
            var12 = var15;
 181:
            var13['commandOrigin'] = var12;
            var13['source'] = var4;
            var12 = {};
            _closure2_slot0 = var12;
            var16 = var2 == var11;
            var15 = undefined;
            if(var16) { _fun0003_ip = 213; continue _fun0003 }
 208:
            var15 = var11.options;
 213:
            if(!(var2 != var15)) { _fun0003_ip = 237; continue _fun0003 }
 217:
            var16 = var11.options;
            var15 = var16.forEach;
            var14 = function(arg1) {
                var3 = _closure2_slot0;
                var1 = arg1;
                var2 = var1.name;
                var1 = {'isActive': false, 'hasValue': false, 'lastValidationResult': null, 'optionValue': null};
                var3[var2] = var1;
                var1 = undefined;
                return var1;
            };
            var14 = var15.bind(var16)(var14);
 237:
            var13['optionStates'] = var12;
            if(!(var2 != var11)) { _fun0003_ip = 317; continue _fun0003 }
 247:
            var2 = _closure1_slot0;
            var12 = _closure1_slot1;
            var1 = 8;
            var1 = var12[var1];
            var3 = var2.bind(var3)(var1);
            var2 = var3.trackCommandSelected;
            var1 = {};
            var1['command'] = var11;
            var1['location'] = var10;
            var1['triggerSection'] = var9;
            var1['queryLength'] = var8;
            var1['sectionName'] = var7;
            var1['query'] = var6;
            var1['searchResultsPosition'] = var5;
            var1['source'] = var4;
            var1 = var2.bind(var3)(var1);
 317:
            var1 = true;
            return var1;
 321:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot13 = var11;
    var10 = function handleSetPreferredCommand(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var3 = var1.channelId;
            var2 = var1.commandId;
            var1 = _closure1_slot12;
            var6 = undefined;
            var3 = var1.bind(var6)(var3);
            var1 = var3.preferredCommandId;
            var1 = var2 !== var1;
            if(!var1) { _fun0004_ip = 95; continue _fun0004 }
 41:
            var4 = var3.preferredCommandId;
            var5 = null;
            var4 = var5 !== var4;
            if(var4) { _fun0004_ip = 92; continue _fun0004 }
 56:
            var7 = var3.activeCommand;
            var8 = var5 == var7;
            var6 = undefined;
            if(var8) { _fun0004_ip = 76; continue _fun0004 }
 71:
            var6 = var7.id;
 76:
            var7 = var5 != var6;
            var5 = null;
            if(!var7) { _fun0004_ip = 88; continue _fun0004 }
 85:
            var5 = var6;
 88:
            var4 = var2 !== var5;
 92:
            var1 = var4;
 95:
            if(!var1) { _fun0004_ip = 128; continue _fun0004 }
 98:
            var4 = null;
            var3['activeCommand'] = var4;
            var3['activeOptionName'] = var4;
            var3['preferredCommandId'] = var2;
            var2 = {};
            var3['optionStates'] = var2;
            var1 = true;
 128:
            return var1;
        }
    };
    var _closure1_slot14 = var10;
    var9 = function handleUpdateOptionStates(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var2 = var1.channelId;
            var5 = var1.changedOptionStates;
            var1 = _closure1_slot12;
            var16 = undefined;
            var3 = var1.bind(var16)(var2);
            var2 = {};
            var30 = var3.optionStates;
            var31 = var2;
            var1 = copyDataProperties(var31, var30);
            var1 = global;
            var4 = var1.Object;
            var1 = var4.entries;
            var15 = var1.bind(var4)(var5);
            var1 = var15.length;
            var14 = 0;
            var4 = var14 < var1;
            var13 = false;
            var12 = null;
            var1 = true;
            var11 = 2;
            var10 = 1;
            var9 = 0;
            var8 = undefined;
            var7 = undefined;
            var6 = undefined;
            var5 = undefined;
            if(!var4) { _fun0005_ip = 581; continue _fun0005 }
 101:
            var18 = var15[var9];
            var4 = _closure1_slot7;
            var4 = var4.bind(var16)(var18, var11);
            var25 = var4[var14];
            var26 = var4[var10];
            var4 = var3.optionStates;
            var4 = var25 in var4;
            var21 = var8;
            var20 = var7;
            var19 = var6;
            var18 = var5;
            if(!var4) { _fun0005_ip = 554; continue _fun0005 }
 151:
            var4 = var26.hasValue;
            if(!(var16 === var4)) { _fun0005_ip = 173; continue _fun0005 }
 161:
            var4 = var2[var25];
            var4 = var4.hasValue;
            _fun0005_ip = 179; continue _fun0005;
 173:
            var4 = var26.hasValue;
 179:
            if(var4) { _fun0005_ip = 256; continue _fun0005 }
 182:
            var4 = {'hasValue': false, 'isActive': false, 'lastValidationResult': null, 'optionValue': null};
            var4['location'] = var16;
            var4['length'] = var16;
            var2[var25] = var4;
            var4 = var3.activeOptionName;
            var21 = var8;
            var20 = var7;
            var19 = var6;
            var18 = var5;
            if(!(var4 === var25)) { _fun0005_ip = 554; continue _fun0005 }
 233:
            var3['activeOptionName'] = var12;
            var21 = var8;
            var20 = var7;
            var19 = var6;
            var18 = var5;
            _fun0005_ip = 554; continue _fun0005;
 256:
            var4 = var2[var25];
            var27 = {};
            var27['hasValue'] = var1;
            var22 = var26.isActive;
            if(!(var16 === var22)) { _fun0005_ip = 285; continue _fun0005 }
 277:
            var22 = var4.isActive;
            _fun0005_ip = 291; continue _fun0005;
 285:
            var22 = var26.isActive;
 291:
            var27['isActive'] = var22;
            var22 = var26.lastValidationResult;
            if(!(var16 === var22)) { _fun0005_ip = 314; continue _fun0005 }
 306:
            var22 = var4.lastValidationResult;
            _fun0005_ip = 320; continue _fun0005;
 314:
            var22 = var26.lastValidationResult;
 320:
            var27['lastValidationResult'] = var22;
            var24 = var26.optionValue;
            var22 = var24;
            if(!(var12 == var24)) { _fun0005_ip = 344; continue _fun0005 }
 338:
            var22 = var4.optionValue;
 344:
            var27['optionValue'] = var22;
            var23 = var26.location;
            var22 = var23;
            if(!(var12 == var23)) { _fun0005_ip = 366; continue _fun0005 }
 361:
            var22 = var4.location;
 366:
            var27['location'] = var22;
            var22 = var26.length;
            var28 = var22;
            if(!(var12 == var22)) { _fun0005_ip = 387; continue _fun0005 }
 382:
            var28 = var4.length;
 387:
            var27['length'] = var28;
            var2[var25] = var27;
            var27 = var26.isActive;
            var21 = var24;
            var20 = var23;
            var19 = var22;
            var18 = var4;
            if(!(var16 !== var27)) { _fun0005_ip = 554; continue _fun0005 }
 420:
            var27 = var26.isActive;
            var26 = var3.activeOptionName;
            if(var27) { _fun0005_ip = 471; continue _fun0005 }
 435:
            var21 = var24;
            var20 = var23;
            var19 = var22;
            var18 = var4;
            if(!(var25 === var26)) { _fun0005_ip = 554; continue _fun0005 }
 451:
            var3['activeOptionName'] = var12;
            var21 = var24;
            var20 = var23;
            var19 = var22;
            var18 = var4;
            _fun0005_ip = 554; continue _fun0005;
 471:
            var26 = var12 != var26;
            if(!var26) { _fun0005_ip = 488; continue _fun0005 }
 478:
            var27 = var3.activeOptionName;
            var26 = var27 !== var25;
 488:
            if(!var26) { _fun0005_ip = 536; continue _fun0005 }
 491:
            var27 = var3.activeOptionName;
            var26 = {};
            var28 = var3.activeOptionName;
            var30 = var2[var28];
            var31 = var26;
            var28 = copyDataProperties(var31, var30);
            var2[var27] = var26;
            var26 = var3.activeOptionName;
            var26 = var2[var26];
            var26['isActive'] = var13;
 536:
            var3['activeOptionName'] = var25;
            var21 = var24;
            var20 = var23;
            var19 = var22;
            var18 = var4;
 554:
            var9 = var9 + 1;
            var4 = var15.length;
            var8 = var21;
            var7 = var20;
            var6 = var19;
            var5 = var18;
            if(var9 < var4) { _fun0005_ip = 101; continue _fun0005 }
 581:
            var3['optionStates'] = var2;
            return var1;
        }
    };
    var _closure1_slot15 = var9;
    var1 = global;
    var13 = var1.Object;
    var8 = var13.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var13)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = {};
    var _closure1_slot10 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function ApplicationCommandStore() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
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
                var1 = _closure1_slot11;
                var1 = var1.bind(var3)();
                if(var1) { _fun0006_ip = 69; continue _fun0006 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0006_ip = 105; continue _fun0006;
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
            var3 = _closure1_slot8;
            var2 = var3.addChangeListener;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure1_slot9;
                    var1 = var3.getChannelId;
                    var5 = var1.bind(var3)();
                    var1 = null;
                    if(!(var1 != var5)) { _fun0007_ip = 98; continue _fun0007 }
 23:
                    var4 = _closure1_slot8;
                    var3 = var4.getCurrentSidebarChannelId;
                    var3 = var3.bind(var4)(var5);
                    if(!(var1 != var3)) { _fun0007_ip = 53; continue _fun0007 }
 42:
                    var1 = _closure1_slot10;
                    var1 = var3 in var1;
                    if(var1) { _fun0007_ip = 94; continue _fun0007 }
 53:
                    var1 = _closure1_slot10;
                    var1 = var5 in var1;
                    if(var1) { _fun0007_ip = 68; continue _fun0007 }
 64:
                    var1 = {};
                    _fun0007_ip = 86; continue _fun0007;
 68:
                    var3 = {};
                    var4 = _closure1_slot10;
                    var4 = var4[var5];
                    var3[var5] = var4;
                    var1 = var3;
 86:
                    _closure1_slot10 = var1;
                    var1 = undefined;
                    return var1;
 94:
                    var1 = false;
                    return var1;
 98:
                    var1 = {};
                    _closure1_slot10 = var1;
                    var1 = true;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(12);
        var1[0] = var5;
        var5 = {};
        var7 = 'getActiveCommand';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot12;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            var1 = var1.activeCommand;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getActiveCommandSection';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot12;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            var1 = var1.activeCommandSection;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getActiveOptionName';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot12;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            var1 = var1.activeOptionName;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getActiveOption';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var2 = _closure1_slot12;
                var6 = undefined;
                var1 = arg1;
                var1 = var2.bind(var6)(var1);
                var _closure3_slot0 = var1;
                var4 = var1.activeCommand;
                var1 = null;
                var5 = var1 == var4;
                var2 = undefined;
                if(var5) { _fun0008_ip = 69; continue _fun0008 }
 40:
                var5 = var4.options;
                var4 = var1 == var5;
                var2 = undefined;
                if(var4) { _fun0008_ip = 69; continue _fun0008 }
 54:
                var4 = var5.find;
                var3 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.name;
                    var1 = _closure3_slot0;
                    var1 = var1.activeOptionName;
                    var1 = var2 === var1;
                    return var1;
                };
                var2 = var4.bind(var5)(var3);
 69:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0008_ip = 81; continue _fun0008 }
 78:
                var1 = var2;
 81:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getPreferredCommandId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot12;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            var1 = var1.preferredCommandId;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getOptionStates';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot12;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            var1 = var1.optionStates;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getOptionState';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var3 = _closure1_slot12;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            var2 = var1.optionStates;
            var1 = arg2;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getCommandOrigin';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot12;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            var1 = var1.commandOrigin;
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getSource';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot12;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            var1 = var1.source;
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getOption';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var1 = arg2;
                var _closure3_slot0 = var1;
                var3 = _closure1_slot12;
                var5 = undefined;
                var1 = arg1;
                var1 = var3.bind(var5)(var1);
                var4 = var1.activeCommand;
                var3 = null;
                var6 = var3 == var4;
                var1 = undefined;
                if(var6) { _fun0009_ip = 72; continue _fun0009 }
 43:
                var4 = var4.options;
                var3 = var3 == var4;
                var1 = undefined;
                if(var3) { _fun0009_ip = 72; continue _fun0009 }
 57:
                var3 = var4.find;
                var2 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.name;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var1 = var3.bind(var4)(var2);
 72:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var1 = {};
            var4 = _closure1_slot12;
            var3 = undefined;
            var2 = arg1;
            var5 = var4.bind(var3)(var2);
            var6 = var1;
            var2 = copyDataProperties(var6, var5);
            return var1;
        };
        var5['value'] = var6;
        var1[11] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'ApplicationCommandStore';
    var8['displayName'] = var2;
    var2 = 10;
    var2 = var6[var2];
    var16 = var7.bind(var1)(var2);
    var2 = {};
    var2['CONNECTION_OPEN'] = var12;
    var2['CHANNEL_SELECT'] = var12;
    var2['LOGOUT'] = var12;
    var2['APPLICATION_COMMAND_SET_ACTIVE_COMMAND'] = var11;
    var2['APPLICATION_COMMAND_SET_PREFERRED_COMMAND'] = var10;
    var2['APPLICATION_COMMAND_UPDATE_OPTIONS'] = var9;
    var4 = function handleUpdateChannelState(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var7 = var1.channelId;
            var8 = var1.preferredCommandId;
            var9 = var1.command;
            var5 = var1.section;
            var4 = var1.location;
            var6 = var1.changedOptionStates;
            var2 = _closure1_slot13;
            var1 = {};
            var10 = 'APPLICATION_COMMAND_SET_ACTIVE_COMMAND';
            var1['type'] = var10;
            var1['channelId'] = var7;
            var1['command'] = var9;
            var1['section'] = var5;
            var1['location'] = var4;
            var5 = undefined;
            var1 = var2.bind(var5)(var1);
            var4 = _closure1_slot14;
            var2 = {};
            var9 = 'APPLICATION_COMMAND_SET_PREFERRED_COMMAND';
            var2['type'] = var9;
            var2['channelId'] = var7;
            var2['commandId'] = var8;
            var2 = var4.bind(var5)(var2);
            var4 = _closure1_slot15;
            var3 = {};
            var8 = 'APPLICATION_COMMAND_UPDATE_OPTIONS';
            var3['type'] = var8;
            var3['channelId'] = var7;
            var3['changedOptionStates'] = var6;
            var3 = var4.bind(var5)(var3);
            if(var1) { _fun0010_ip = 143; continue _fun0010 }
 140:
            var1 = var2;
 143:
            if(var1) { _fun0010_ip = 148; continue _fun0010 }
 146:
            var1 = true;
 148:
            return var1;
        }
    };
    var2['APPLICATION_COMMAND_UPDATE_CHANNEL_STATE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var17 = var4;
    var15 = var2;
    var2 = new var17[var8](var16, var15, var14);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_commands/ApplicationCommandStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();