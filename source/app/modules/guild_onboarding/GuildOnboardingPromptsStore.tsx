// app/modules/guild_onboarding/GuildOnboardingPromptsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            _closure1_slot20 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function convertPromptsToTracked(arg1, arg2, arg3) {
        var3 = arg1;
        var2 = arg2;
        var _closure2_slot0 = var2;
        var2 = arg3;
        var _closure2_slot1 = var2;
        var2 = var3.map;
        var1 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = arg1;
                var4 = _closure2_slot0;
                var11 = _closure2_slot1;
                var7 = new Array(0);
                var1 = var2.options;
                var1 = var1.length;
                var10 = 0;
                var1 = var10 < var1;
                var5 = false;
                var9 = 'isUnseen';
                var3 = null;
                var6 = false;
                if(!var1) { _fun0002_ip = 121; continue _fun0002 }
 47:
                var1 = var2.options;
                var14 = var1[var10];
                var1 = var14.id;
                var1 = var11[var1];
                var13 = var3 == var1;
                if(!var13) { _fun0002_ip = 74; continue _fun0002 }
 72:
                var5 = true;
 74:
                var12 = var7.push;
                var1 = {};
                var16 = var1;
                var15 = var14;
                var14 = copyDataProperties(var16, var15);
                var1[var9] = var13;
                var1 = var12.bind(var7)(var1);
                var10 = var10 + 1;
                var1 = var2.options;
                var1 = var1.length;
                var6 = var5;
                if(var10 < var1) { _fun0002_ip = 47; continue _fun0002 }
 121:
                var1 = {};
                var16 = var1;
                var15 = var2;
                var5 = copyDataProperties(var16, var15);
                var5 = 'options';
                var1[var5] = var7;
                var5 = 'hasNewAnswers';
                var1[var5] = var6;
                var2 = var2.id;
                var2 = var4[var2];
                var3 = var3 == var2;
                var2 = 'isNew';
                var1[var2] = var3;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot21 = var1;
    var9 = function handleUpdate(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var4 = var1.guildId;
            var5 = var1.updates;
            var8 = var5.onboardingPromptsSeen;
            var1 = null;
            if(!(var1 == var8)) { _fun0003_ip = 55; continue _fun0003 }
 26:
            var2 = _closure1_slot13;
            var3 = var2[var4];
            var6 = var1 == var3;
            var2 = undefined;
            if(var6) { _fun0003_ip = 52; continue _fun0003 }
 46:
            var2 = var3.onboardingPromptsSeen;
 52:
            var8 = var2;
 55:
            if(!(var1 == var8)) { _fun0003_ip = 61; continue _fun0003 }
 59:
            var8 = {};
 61:
            var7 = var5.onboardingResponsesSeen;
            if(!(var1 == var7)) { _fun0003_ip = 100; continue _fun0003 }
 71:
            var2 = _closure1_slot13;
            var3 = var2[var4];
            var6 = var1 == var3;
            var2 = undefined;
            if(var6) { _fun0003_ip = 97; continue _fun0003 }
 91:
            var2 = var3.onboardingResponsesSeen;
 97:
            var7 = var2;
 100:
            if(!(var1 == var7)) { _fun0003_ip = 106; continue _fun0003 }
 104:
            var7 = {};
 106:
            var6 = _closure1_slot21;
            var3 = var5.prompts;
            if(!(var1 == var3)) { _fun0003_ip = 149; continue _fun0003 }
 123:
            var9 = _closure1_slot13;
            var10 = var9[var4];
            var11 = var1 == var10;
            var9 = undefined;
            if(var11) { _fun0003_ip = 146; continue _fun0003 }
 140:
            var9 = var10.prompts;
 146:
            var3 = var9;
 149:
            if(!(var1 == var3)) { _fun0003_ip = 157; continue _fun0003 }
 153:
            var3 = new Array(0);
 157:
            var1 = undefined;
            var6 = var6.bind(var1)(var3, var8, var7);
            var3 = _closure1_slot13;
            var2 = {};
            var13 = var3[var4];
            var14 = var2;
            var7 = copyDataProperties(var14, var13);
            var14 = var2;
            var13 = var5;
            var5 = copyDataProperties(var14, var13);
            var5 = 'prompts';
            var2[var5] = var6;
            var3[var4] = var2;
            return var1;
        }
    };
    var1 = function mergePendingResponses(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = arg1;
            var8 = arg2;
            var _closure2_slot0 = var3;
            var _closure2_slot1 = var8;
            var4 = _closure1_slot14;
            var5 = var4[var3];
            var4 = null;
            if(!(var4 != var5)) { _fun0004_ip = 171; continue _fun0004 }
 36:
            var7 = {};
            var _closure2_slot2 = var7;
            var4 = global;
            var9 = var4.Object;
            var6 = var9.keys;
            var5 = _closure1_slot14;
            var5 = var5[var3];
            var9 = var6.bind(var9)(var5);
            var6 = var9.forEach;
            var5 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = arg1;
                    var4 = _closure2_slot1;
                    var2 = var4.includes;
                    var2 = var2.bind(var4)(var3);
                    if(var2) { _fun0005_ip = 57; continue _fun0005 }
 23:
                    var4 = _closure1_slot14;
                    var2 = _closure2_slot0;
                    var2 = var4[var2];
                    var2 = var2[var3];
                    if(!var2) { _fun0005_ip = 57; continue _fun0005 }
 45:
                    var4 = _closure2_slot2;
                    var2 = true;
                    var4[var3] = var2;
                    _fun0005_ip = 112; continue _fun0005;
 57:
                    var4 = _closure2_slot1;
                    var2 = var4.includes;
                    var2 = var2.bind(var4)(var3);
                    if(!var2) { _fun0005_ip = 99; continue _fun0005 }
 74:
                    var5 = _closure1_slot14;
                    var4 = _closure2_slot0;
                    var4 = var5[var4];
                    var5 = var4[var3];
                    var4 = false;
                    var2 = var4 === var5;
 99:
                    if(!var2) { _fun0005_ip = 112; continue _fun0005 }
 102:
                    var2 = _closure2_slot2;
                    var1 = false;
                    var2[var3] = var1;
 112:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var6.bind(var9)(var5);
            var5 = _closure1_slot14;
            var5[var3] = var7;
            var6 = var8.filter;
            var5 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = arg1;
                    var1 = _closure2_slot2;
                    var4 = var1[var3];
                    var1 = null;
                    var1 = var1 == var4;
                    if(var1) { _fun0006_ip = 37; continue _fun0006 }
 23:
                    var2 = _closure2_slot2;
                    var3 = var2[var3];
                    var2 = true;
                    var1 = var2 === var3;
 37:
                    return var1;
                }
            };
            var5 = var6.bind(var8)(var5);
            var _closure2_slot3 = var5;
            var6 = var4.Object;
            var4 = var6.keys;
            var6 = var4.bind(var6)(var7);
            var4 = var6.forEach;
            var2 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = arg1;
                    var2 = _closure2_slot2;
                    var4 = var2[var3];
                    var2 = true;
                    var2 = var2 !== var4;
                    if(var2) { _fun0007_ip = 37; continue _fun0007 }
 23:
                    var5 = _closure2_slot1;
                    var4 = var5.includes;
                    var2 = var4.bind(var5)(var3);
 37:
                    if(var2) { _fun0007_ip = 54; continue _fun0007 }
 40:
                    var2 = _closure2_slot3;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
 54:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var6)(var2);
            var2 = _closure1_slot13;
            var1 = {};
            var10 = var2[var3];
            var11 = var1;
            var4 = copyDataProperties(var11, var10);
            var4 = 'responses';
            var1[var4] = var5;
            var2[var3] = var1;
 171:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var8 = var6[var2];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot10 = var8;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.GuildOnboardingStatus;
    var _closure1_slot11 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.GuildOnboardingMode;
    var _closure1_slot12 = var2;
    var2 = {};
    var _closure1_slot13 = var2;
    var2 = {};
    var _closure1_slot14 = var2;
    var2 = {};
    var _closure1_slot15 = var2;
    var2 = false;
    var _closure1_slot16 = var2;
    var2 = new Array(0);
    var _closure1_slot17 = var2;
    var2 = new Array(0);
    var _closure1_slot18 = var2;
    var2 = new Array(0);
    var _closure1_slot19 = var2;
    var2 = 13;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function GuildOnboardingPromptsStore() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot20;
                var1 = var1.bind(var3)();
                if(var1) { _fun0008_ip = 69; continue _fun0008 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0008_ip = 105; continue _fun0008;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
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
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var5 = this;
            var4 = var5.waitFor;
            var3 = _closure1_slot9;
            var2 = _closure1_slot10;
            var1 = _closure1_slot8;
            var1 = var4.bind(var5)(var3, var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(16);
        var1[0] = var5;
        var5 = {};
        var7 = 'getOnboardingPromptsForOnboarding';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var3 = _closure1_slot13;
                var1 = arg1;
                var4 = var3[var1];
                var3 = null;
                var5 = var3 == var4;
                var1 = undefined;
                if(var5) { _fun0009_ip = 31; continue _fun0009 }
 25:
                var1 = var4.onboardingPrompts;
 31:
                if(!(var3 == var1)) { _fun0009_ip = 39; continue _fun0009 }
 35:
                var1 = _closure1_slot17;
 39:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getOnboardingPrompts';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var3 = _closure1_slot13;
                var1 = arg1;
                var4 = var3[var1];
                var3 = null;
                var5 = var3 == var4;
                var1 = undefined;
                if(var5) { _fun0010_ip = 31; continue _fun0010 }
 25:
                var1 = var4.prompts;
 31:
                if(!(var3 == var1)) { _fun0010_ip = 39; continue _fun0010 }
 35:
                var1 = _closure1_slot17;
 39:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getOnboardingResponses';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var7 = arg1;
                var2 = _closure1_slot8;
                var1 = var2.isFullServerPreview;
                var1 = var1.bind(var2)(var7);
                if(var1) { _fun0011_ip = 59; continue _fun0011 }
 24:
                var1 = _closure1_slot13;
                var3 = var1[var7];
                var2 = null;
                var4 = var2 == var3;
                var1 = undefined;
                if(var4) { _fun0011_ip = 49; continue _fun0011 }
 43:
                var1 = var3.responses;
 49:
                if(!(var2 == var1)) { _fun0011_ip = 57; continue _fun0011 }
 53:
                var1 = _closure1_slot18;
 57:
                _fun0011_ip = 102; continue _fun0011;
 59:
                var2 = global;
                var4 = var2.Array;
                var3 = var4.from;
                var6 = _closure1_slot8;
                var2 = var6.getOnboardingResponses;
                var2 = var2.bind(var6)(var7);
                var6 = null;
                if(!(var6 == var2)) { _fun0011_ip = 97; continue _fun0011 }
 93:
                var2 = _closure1_slot18;
 97:
                var1 = var3.bind(var4)(var2);
 102:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getSelectedOptions';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = arg1;
            var3 = this;
            var2 = var3.getOnboardingResponses;
            var2 = var2.bind(var3)(var4);
            var _closure3_slot0 = var2;
            var2 = var3.getOnboardingPrompts;
            var4 = var2.bind(var3)(var4);
            var3 = var4.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.options;
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.flat;
            var3 = var2.bind(var3)();
            var2 = var3.filter;
            var1 = function(arg1) {
                var3 = _closure3_slot0;
                var2 = var3.includes;
                var1 = arg1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getOnboardingResponsesForPrompt';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var7 = arg1;
                var6 = this;
                var1 = arg2;
                var _closure3_slot0 = var1;
                var3 = _closure1_slot13;
                var3 = var3[var7];
                var4 = null;
                if(!(var4 != var3)) { _fun0012_ip = 131; continue _fun0012 }
 32:
                var8 = var3.prompts;
                var5 = var8.find;
                var3 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.id;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var3 = var5.bind(var8)(var3);
                if(!(var4 != var3)) { _fun0012_ip = 125; continue _fun0012 }
 58:
                var8 = _closure1_slot1;
                var5 = _closure1_slot2;
                var4 = 10;
                var5 = var5[var4];
                var4 = undefined;
                var5 = var8.bind(var4)(var5);
                var4 = var5.intersection;
                var8 = var3.options;
                var3 = var8.map;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.id;
                    return var1;
                };
                var3 = var3.bind(var8)(var2);
                var2 = var6.getOnboardingResponses;
                var2 = var2.bind(var6)(var7);
                var2 = var4.bind(var5)(var3, var2);
                _fun0012_ip = 129; continue _fun0012;
 125:
                var2 = _closure1_slot18;
 129:
                return var2;
 131:
                var1 = _closure1_slot18;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getEnabledOnboardingPrompts';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var4 = arg1;
                var1 = _closure1_slot13;
                var5 = var1[var4];
                var2 = _closure1_slot8;
                var1 = var2.isFullServerPreview;
                var1 = var1.bind(var2)(var4);
                var4 = null;
                if(var1) { _fun0013_ip = 62; continue _fun0013 }
 34:
                if(!(var4 != var5)) { _fun0013_ip = 56; continue _fun0013 }
 38:
                var1 = var5.enabled;
                if(!var1) { _fun0013_ip = 56; continue _fun0013 }
 46:
                var1 = var5.prompts;
                if(!(var4 == var1)) { _fun0013_ip = 60; continue _fun0013 }
 56:
                var1 = _closure1_slot17;
 60:
                _fun0013_ip = 88; continue _fun0013;
 62:
                var6 = var4 == var5;
                var2 = undefined;
                if(var6) { _fun0013_ip = 77; continue _fun0013 }
 71:
                var2 = var5.prompts;
 77:
                if(!(var4 == var2)) { _fun0013_ip = 85; continue _fun0013 }
 81:
                var2 = _closure1_slot17;
 85:
                var1 = var2;
 88:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getDefaultChannelIds';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var3 = _closure1_slot13;
                var1 = arg1;
                var4 = var3[var1];
                var3 = null;
                var5 = var3 == var4;
                var1 = undefined;
                if(var5) { _fun0014_ip = 31; continue _fun0014 }
 25:
                var1 = var4.defaultChannelIds;
 31:
                if(!(var3 == var1)) { _fun0014_ip = 39; continue _fun0014 }
 35:
                var1 = _closure1_slot19;
 39:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getEnabled';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var3 = arg1;
                var4 = _closure1_slot8;
                var1 = var4.isFullServerPreview;
                var1 = var1.bind(var4)(var3);
                var2 = _closure1_slot13;
                var3 = var2[var3];
                var2 = null;
                if(var1) { _fun0015_ip = 60; continue _fun0015 }
 34:
                var1 = var2 == var3;
                var4 = undefined;
                if(var1) { _fun0015_ip = 48; continue _fun0015 }
 43:
                var4 = var3.enabled;
 48:
                var1 = var2 != var4;
                if(!var1) { _fun0015_ip = 58; continue _fun0015 }
 55:
                var1 = var4;
 58:
                _fun0015_ip = 64; continue _fun0015;
 60:
                var1 = var2 != var3;
 64:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getOnboardingPrompt';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = global;
            var4 = var2.Object;
            var3 = var4.values;
            var2 = _closure1_slot13;
            var4 = var3.bind(var4)(var2);
            var3 = var4.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.prompts;
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.flat;
            var3 = var2.bind(var3)();
            var2 = var3.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure3_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'isLoading';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot16;
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'shouldFetchPrompts';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var3 = arguments[1];
                var4 = undefined;
                if(!(var3 === var4)) { _fun0016_ip = 44; continue _fun0016 }
 9:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 11;
                var1 = var5[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.Millis;
                var3 = var1.HOUR;
 44:
                var2 = _closure1_slot16;
                if(var2) { _fun0016_ip = 101; continue _fun0016 }
 54:
                var2 = _closure1_slot15;
                var1 = arg1;
                var4 = var2[var1];
                var1 = null;
                var1 = var1 == var4;
                if(var1) { _fun0016_ip = 99; continue _fun0016 }
 74:
                var2 = global;
                var5 = var2.Date;
                var2 = var5.now;
                var2 = var2.bind(var5)();
                var2 = var2 - var4;
                var1 = var2 > var3;
 99:
                return var1;
 101:
                var1 = false;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getPendingResponseOptions';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot14;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'ackIdForGuild';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = this;
            var3 = var4.getEnabledOnboardingPrompts;
            var2 = arg1;
            var4 = var3.bind(var4)(var2);
            var2 = '0';
            var _closure3_slot0 = var2;
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var2 = arg1;
                    var4 = var2.options;
                    var3 = var4.forEach;
                    var1 = function(arg1) {
                        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                            var2 = arg1;
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 12;
                            var3 = var3[var1];
                            var1 = undefined;
                            var7 = var4.bind(var1)(var3);
                            var6 = var7.compare;
                            var5 = var2.id;
                            var4 = _closure3_slot0;
                            var5 = var6.bind(var7)(var5, var4);
                            var4 = 0;
                            if(!(var5 > var4)) { _fun0018_ip = 67; continue _fun0018 }
 58:
                            var2 = var2.id;
                            _closure3_slot0 = var2;
 67:
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var1);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 12;
                    var3 = var3[var1];
                    var1 = undefined;
                    var7 = var4.bind(var1)(var3);
                    var6 = var7.compare;
                    var5 = var2.id;
                    var4 = _closure3_slot0;
                    var5 = var6.bind(var7)(var5, var4);
                    var4 = 0;
                    if(!(var5 > var4)) { _fun0017_ip = 89; continue _fun0017 }
 80:
                    var2 = var2.id;
                    _closure3_slot0 = var2;
 89:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            var1 = _closure3_slot0;
            return var1;
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'lastFetchedAt';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot15;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'isAdvancedMode';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                var5 = arg1;
                var3 = null;
                var1 = var3 != var5;
                if(!var1) { _fun0019_ip = 51; continue _fun0019 }
 12:
                var4 = _closure1_slot13;
                var4 = var4[var5];
                var5 = var3 == var4;
                var3 = undefined;
                if(var5) { _fun0019_ip = 37; continue _fun0019 }
 32:
                var3 = var4.mode;
 37:
                var2 = _closure1_slot12;
                var2 = var2.ONBOARDING_ADVANCED;
                var1 = var3 === var2;
 51:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[15] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'GuildOnboardingPromptsStore';
    var8['displayName'] = var2;
    var2 = 14;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var10 = function handleConnectionOpen() {
        var1 = false;
        _closure1_slot16 = var1;
        var1 = {};
        _closure1_slot13 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CONNECTION_OPEN'] = var10;
    var10 = function handleStart() {
        var1 = true;
        _closure1_slot16 = var1;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_ONBOARDING_PROMPTS_FETCH_START'] = var10;
    var10 = function handleSuccess(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
            var1 = arg1;
            var4 = var1.guildId;
            var _closure2_slot0 = var4;
            var7 = var1.prompts;
            var12 = var1.defaultChannelIds;
            var15 = var1.enabled;
            var5 = var1.responses;
            var9 = var1.onboardingPromptsSeen;
            var8 = var1.onboardingResponsesSeen;
            var13 = var1.mode;
            var11 = var1.belowRequirements;
            var1 = false;
            _closure1_slot16 = var1;
            var3 = _closure1_slot10;
            var1 = var3.getOnboardingStatus;
            var3 = var1.bind(var3)(var4);
            var1 = _closure1_slot11;
            var1 = var1.READY;
            var3 = var3 === var1;
            var6 = _closure1_slot21;
            var1 = undefined;
            var14 = var6.bind(var1)(var7, var9, var8);
            var7 = _closure1_slot13;
            var6 = {};
            var6['enabled'] = var15;
            var6['mode'] = var13;
            var6['belowRequirements'] = var11;
            var6['prompts'] = var14;
            var13 = var14.filter;
            var11 = function(arg1) {
                var1 = arg1;
                var1 = var1.inOnboarding;
                return var1;
            };
            var11 = var13.bind(var14)(var11);
            var6['onboardingPrompts'] = var11;
            var11 = var12.filter;
            var10 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.canChannelBeDefault;
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var10 = var11.bind(var12)(var10);
            var6['defaultChannelIds'] = var10;
            var10 = var5;
            if(!var3) { _fun0020_ip = 187; continue _fun0020 }
 183:
            var10 = new Array(0);
 187:
            var6['responses'] = var10;
            var6['onboardingPromptsSeen'] = var9;
            var6['onboardingResponsesSeen'] = var8;
            var7[var4] = var6;
            if(var3) { _fun0020_ip = 219; continue _fun0020 }
 209:
            var3 = _closure1_slot22;
            var3 = var3.bind(var1)(var4, var5);
 219:
            var3 = _closure1_slot15;
            var2 = global;
            var5 = var2.Date;
            var2 = var5.now;
            var2 = var2.bind(var5)();
            var3[var4] = var2;
            return var1;
        }
    };
    var2['GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS'] = var10;
    var10 = function handleFailure() {
        var1 = false;
        _closure1_slot16 = var1;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE'] = var10;
    var10 = function handleOptionSelect(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
            var1 = arg1;
            var5 = var1.guildId;
            var _closure2_slot0 = var5;
            var10 = var1.optionId;
            var9 = var1.selected;
            var7 = var1.removedOptionIds;
            var2 = _closure1_slot8;
            var1 = var2.isFullServerPreview;
            var1 = var1.bind(var2)(var5);
            var2 = !var1;
            var1 = !var2;
            if(!var2) { _fun0021_ip = 307; continue _fun0021 }
 62:
            var2 = _closure1_slot13;
            var2 = var2[var5];
            var6 = null;
            var2 = var6 != var2;
            if(!var2) { _fun0021_ip = 304; continue _fun0021 }
 82:
            var8 = var6 != var7;
            if(!var8) { _fun0021_ip = 100; continue _fun0021 }
 89:
            var12 = var7.length;
            var11 = 0;
            var8 = var12 > var11;
 100:
            if(!var8) { _fun0021_ip = 151; continue _fun0021 }
 103:
            var12 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 10;
            var11 = var11[var8];
            var8 = undefined;
            var12 = var12.bind(var8)(var11);
            var11 = var12.pullAll;
            var8 = _closure1_slot13;
            var8 = var8[var5];
            var8 = var8.responses;
            var8 = var11.bind(var12)(var8, var7);
 151:
            if(var9) { _fun0021_ip = 204; continue _fun0021 }
 154:
            var12 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 10;
            var11 = var11[var8];
            var8 = undefined;
            var12 = var12.bind(var8)(var11);
            var11 = var12.pull;
            var8 = _closure1_slot13;
            var8 = var8[var5];
            var8 = var8.responses;
            var8 = var11.bind(var12)(var8, var10);
            _fun0021_ip = 228; continue _fun0021;
 204:
            var8 = _closure1_slot13;
            var8 = var8[var5];
            var11 = var8.responses;
            var8 = var11.push;
            var8 = var8.bind(var11)(var10);
 228:
            var8 = _closure1_slot14;
            var8 = var8[var5];
            if(!(var6 == var8)) { _fun0021_ip = 250; continue _fun0021 }
 240:
            var11 = _closure1_slot14;
            var8 = {};
            var11[var5] = var8;
 250:
            var8 = _closure1_slot14;
            var8 = var8[var5];
            var8[var10] = var9;
            if(!(var6 != var7)) { _fun0021_ip = 281; continue _fun0021 }
 266:
            var6 = var7.forEach;
            var4 = function(arg1) {
                var2 = _closure1_slot14;
                var1 = _closure2_slot0;
                var3 = var2[var1];
                var1 = false;
                var2 = arg1;
                var3[var2] = var1;
                return var1;
            };
            var4 = var6.bind(var7)(var4);
 281:
            var4 = _closure1_slot14;
            var3 = {};
            var13 = var4[var5];
            var14 = var3;
            var6 = copyDataProperties(var14, var13);
            var4[var5] = var3;
            var2 = true;
 304:
            var1 = var2;
 307:
            return var1;
        }
    };
    var2['GUILD_ONBOARDING_SELECT_OPTION'] = var10;
    var10 = function handleUpdateResponsesSuccess(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
            var1 = arg1;
            var4 = var1.guildId;
            var5 = var1.options;
            var7 = var1.prompts_seen;
            var6 = var1.options_seen;
            var3 = _closure1_slot22;
            var1 = undefined;
            var3 = var3.bind(var1)(var4, var5);
            var3 = _closure1_slot13;
            var5 = var3[var4];
            var3 = null;
            if(!(var3 != var5)) { _fun0022_ip = 146; continue _fun0022 }
 54:
            var8 = _closure1_slot21;
            var3 = var5.prompts;
            var9 = var8.bind(var1)(var3, var7, var6);
            var3 = _closure1_slot13;
            var2 = {};
            var12 = var2;
            var11 = var5;
            var5 = copyDataProperties(var12, var11);
            var5 = 'prompts';
            var2[var5] = var9;
            var8 = var9.filter;
            var5 = function(arg1) {
                var1 = arg1;
                var1 = var1.inOnboarding;
                return var1;
            };
            var8 = var8.bind(var9)(var5);
            var5 = 'onboardingPrompts';
            var2[var5] = var8;
            var5 = 'onboardingPromptsSeen';
            var2[var5] = var7;
            var5 = 'onboardingResponsesSeen';
            var2[var5] = var6;
            var3[var4] = var2;
            return var1;
 146:
            var1 = false;
            return var1;
        }
    };
    var2['GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS'] = var10;
    var2['GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE'] = var9;
    var2['GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS'] = var9;
    var9 = function handleUpdateDefaultChannels(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var5 = var1.channelIds;
        var2 = _closure1_slot13;
        var1 = {};
        var6 = var2[var3];
        var7 = var1;
        var4 = copyDataProperties(var7, var6);
        var4 = 'defaultChannelIds';
        var1[var4] = var5;
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS'] = var9;
    var4 = function handleSetMode(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
            var1 = arg1;
            var3 = var1.guildId;
            var2 = var1.mode;
            var1 = _closure1_slot13;
            var1 = var1[var3];
            var3 = null;
            if(!(var3 != var1)) { _fun0023_ip = 36; continue _fun0023 }
 30:
            var1['mode'] = var2;
 36:
            var1 = undefined;
            return var1;
        }
    };
    var2['GUILD_SETTINGS_ONBOARDING_SET_MODE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding/GuildOnboardingPromptsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();