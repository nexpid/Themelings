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
case 0:
case 2: // try_start_0
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
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
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
case 0:
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
                if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var2.options;
                var14 = var1[var10];
                var1 = var14.id;
                var1 = var11[var1];
                var13 = var3 == var1;
                if(!var13) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var5 = true;
case 4:
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
                if(var10 < var1) { _fun0002_ip = 7; continue _fun0002 }
case 6:
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
case 0:
            var1 = arg1;
            var4 = var1.guildId;
            var5 = var1.updates;
            var8 = var5.onboardingPromptsSeen;
            var1 = null;
            if(!(var1 == var8)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var2 = _closure1_slot13;
            var3 = var2[var4];
            var6 = var1 == var3;
            var2 = undefined;
            if(var6) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var2 = var3.onboardingPromptsSeen;
case 10:
            var8 = var2;
case 8:
            if(!(var1 == var8)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var8 = {};
case 12:
            var7 = var5.onboardingResponsesSeen;
            if(!(var1 == var7)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var2 = _closure1_slot13;
            var3 = var2[var4];
            var6 = var1 == var3;
            var2 = undefined;
            if(var6) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var2 = var3.onboardingResponsesSeen;
case 16:
            var7 = var2;
case 14:
            if(!(var1 == var7)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var7 = {};
case 18:
            var6 = _closure1_slot21;
            var3 = var5.prompts;
            if(!(var1 == var3)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var9 = _closure1_slot13;
            var10 = var9[var4];
            var11 = var1 == var10;
            var9 = undefined;
            if(var11) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var9 = var10.prompts;
case 22:
            var3 = var9;
case 20:
            if(!(var1 == var3)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var3 = new Array(0);
case 24:
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
case 0:
            var3 = arg1;
            var8 = arg2;
            var _closure2_slot0 = var3;
            var _closure2_slot1 = var8;
            var4 = _closure1_slot14;
            var5 = var4[var3];
            var4 = null;
            if(!(var4 != var5)) { _fun0004_ip = 26; continue _fun0004 }
case 27:
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
case 0:
                    var3 = arg1;
                    var4 = _closure2_slot1;
                    var2 = var4.includes;
                    var2 = var2.bind(var4)(var3);
                    if(var2) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                    var4 = _closure1_slot14;
                    var2 = _closure2_slot0;
                    var2 = var4[var2];
                    var2 = var2[var3];
                    if(!var2) { _fun0005_ip = 28; continue _fun0005 }
case 30:
                    var4 = _closure2_slot2;
                    var2 = true;
                    var4[var3] = var2;
                    _fun0005_ip = 31; continue _fun0005;
case 28:
                    var4 = _closure2_slot1;
                    var2 = var4.includes;
                    var2 = var2.bind(var4)(var3);
                    if(!var2) { _fun0005_ip = 32; continue _fun0005 }
case 4:
                    var5 = _closure1_slot14;
                    var4 = _closure2_slot0;
                    var4 = var5[var4];
                    var5 = var4[var3];
                    var4 = false;
                    var2 = var4 === var5;
case 32:
                    if(!var2) { _fun0005_ip = 31; continue _fun0005 }
case 33:
                    var2 = _closure2_slot2;
                    var1 = false;
                    var2[var3] = var1;
case 31:
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
case 0:
                    var3 = arg1;
                    var1 = _closure2_slot2;
                    var4 = var1[var3];
                    var1 = null;
                    var1 = var1 == var4;
                    if(var1) { _fun0006_ip = 34; continue _fun0006 }
case 29:
                    var2 = _closure2_slot2;
                    var3 = var2[var3];
                    var2 = true;
                    var1 = var2 === var3;
case 34:
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
case 0:
                    var3 = arg1;
                    var2 = _closure2_slot2;
                    var4 = var2[var3];
                    var2 = true;
                    var2 = var2 !== var4;
                    if(var2) { _fun0007_ip = 34; continue _fun0007 }
case 29:
                    var5 = _closure2_slot1;
                    var4 = var5.includes;
                    var2 = var4.bind(var5)(var3);
case 34:
                    if(var2) { _fun0007_ip = 35; continue _fun0007 }
case 36:
                    var2 = _closure2_slot3;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
case 35:
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
case 26:
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
case 0:
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
                if(var1) { _fun0008_ip = 37; continue _fun0008 }
case 38:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0008_ip = 39; continue _fun0008;
case 37:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 39:
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
case 0:
                var3 = _closure1_slot13;
                var1 = arg1;
                var4 = var3[var1];
                var3 = null;
                var5 = var3 == var4;
                var1 = undefined;
                if(var5) { _fun0009_ip = 40; continue _fun0009 }
case 41:
                var1 = var4.onboardingPrompts;
case 40:
                if(!(var3 == var1)) { _fun0009_ip = 42; continue _fun0009 }
case 43:
                var1 = _closure1_slot17;
case 42:
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
case 0:
                var3 = _closure1_slot13;
                var1 = arg1;
                var4 = var3[var1];
                var3 = null;
                var5 = var3 == var4;
                var1 = undefined;
                if(var5) { _fun0010_ip = 40; continue _fun0010 }
case 41:
                var1 = var4.prompts;
case 40:
                if(!(var3 == var1)) { _fun0010_ip = 42; continue _fun0010 }
case 43:
                var1 = _closure1_slot17;
case 42:
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
case 0:
                var7 = arg1;
                var2 = _closure1_slot8;
                var1 = var2.isFullServerPreview;
                var1 = var1.bind(var2)(var7);
                if(var1) { _fun0011_ip = 13; continue _fun0011 }
case 44:
                var1 = _closure1_slot13;
                var3 = var1[var7];
                var2 = null;
                var4 = var2 == var3;
                var1 = undefined;
                if(var4) { _fun0011_ip = 45; continue _fun0011 }
case 46:
                var1 = var3.responses;
case 45:
                if(!(var2 == var1)) { _fun0011_ip = 28; continue _fun0011 }
case 47:
                var1 = _closure1_slot18;
case 28:
                _fun0011_ip = 33; continue _fun0011;
case 13:
                var2 = global;
                var4 = var2.Array;
                var3 = var4.from;
                var6 = _closure1_slot8;
                var2 = var6.getOnboardingResponses;
                var2 = var2.bind(var6)(var7);
                var6 = null;
                if(!(var6 == var2)) { _fun0011_ip = 16; continue _fun0011 }
case 48:
                var2 = _closure1_slot18;
case 16:
                var1 = var3.bind(var4)(var2);
case 33:
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
case 0:
                var7 = arg1;
                var6 = this;
                var1 = arg2;
                var _closure3_slot0 = var1;
                var3 = _closure1_slot13;
                var3 = var3[var7];
                var4 = null;
                if(!(var4 != var3)) { _fun0012_ip = 49; continue _fun0012 }
case 50:
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
                if(!(var4 != var3)) { _fun0012_ip = 51; continue _fun0012 }
case 52:
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
                _fun0012_ip = 53; continue _fun0012;
case 51:
                var2 = _closure1_slot18;
case 53:
                return var2;
case 49:
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
case 0:
                var4 = arg1;
                var1 = _closure1_slot13;
                var5 = var1[var4];
                var2 = _closure1_slot8;
                var1 = var2.isFullServerPreview;
                var1 = var1.bind(var2)(var4);
                var4 = null;
                if(var1) { _fun0013_ip = 54; continue _fun0013 }
case 55:
                if(!(var4 != var5)) { _fun0013_ip = 56; continue _fun0013 }
case 57:
                var1 = var5.enabled;
                if(!var1) { _fun0013_ip = 56; continue _fun0013 }
case 11:
                var1 = var5.prompts;
                if(!(var4 == var1)) { _fun0013_ip = 58; continue _fun0013 }
case 56:
                var1 = _closure1_slot17;
case 58:
                _fun0013_ip = 59; continue _fun0013;
case 54:
                var6 = var4 == var5;
                var2 = undefined;
                if(var6) { _fun0013_ip = 60; continue _fun0013 }
case 15:
                var2 = var5.prompts;
case 60:
                if(!(var4 == var2)) { _fun0013_ip = 61; continue _fun0013 }
case 62:
                var2 = _closure1_slot17;
case 61:
                var1 = var2;
case 59:
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
case 0:
                var3 = _closure1_slot13;
                var1 = arg1;
                var4 = var3[var1];
                var3 = null;
                var5 = var3 == var4;
                var1 = undefined;
                if(var5) { _fun0014_ip = 40; continue _fun0014 }
case 41:
                var1 = var4.defaultChannelIds;
case 40:
                if(!(var3 == var1)) { _fun0014_ip = 42; continue _fun0014 }
case 43:
                var1 = _closure1_slot19;
case 42:
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
case 0:
                var3 = arg1;
                var4 = _closure1_slot8;
                var1 = var4.isFullServerPreview;
                var1 = var1.bind(var4)(var3);
                var2 = _closure1_slot13;
                var3 = var2[var3];
                var2 = null;
                if(var1) { _fun0015_ip = 58; continue _fun0015 }
case 55:
                var1 = var2 == var3;
                var4 = undefined;
                if(var1) { _fun0015_ip = 63; continue _fun0015 }
case 46:
                var4 = var3.enabled;
case 63:
                var1 = var2 != var4;
                if(!var1) { _fun0015_ip = 52; continue _fun0015 }
case 8:
                var1 = var4;
case 52:
                _fun0015_ip = 64; continue _fun0015;
case 58:
                var1 = var2 != var3;
case 64:
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
case 0:
                var3 = arguments[1];
                var4 = undefined;
                if(!(var3 === var4)) { _fun0016_ip = 65; continue _fun0016 }
case 66:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 11;
                var1 = var5[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.Millis;
                var3 = var1.HOUR;
case 65:
                var2 = _closure1_slot16;
                if(var2) { _fun0016_ip = 67; continue _fun0016 }
case 35:
                var2 = _closure1_slot15;
                var1 = arg1;
                var4 = var2[var1];
                var1 = null;
                var1 = var1 == var4;
                if(var1) { _fun0016_ip = 32; continue _fun0016 }
case 4:
                var2 = global;
                var5 = var2.Date;
                var2 = var5.now;
                var2 = var2.bind(var5)();
                var2 = var2 - var4;
                var1 = var2 > var3;
case 32:
                return var1;
case 67:
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
case 0:
                    var2 = arg1;
                    var4 = var2.options;
                    var3 = var4.forEach;
                    var1 = function(arg1) {
                        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
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
                            if(!(var5 > var4)) { _fun0018_ip = 68; continue _fun0018 }
case 52:
                            var2 = var2.id;
                            _closure3_slot0 = var2;
case 68:
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
                    if(!(var5 > var4)) { _fun0017_ip = 69; continue _fun0017 }
case 70:
                    var2 = var2.id;
                    _closure3_slot0 = var2;
case 69:
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
case 0:
                var5 = arg1;
                var3 = null;
                var1 = var3 != var5;
                if(!var1) { _fun0019_ip = 38; continue _fun0019 }
case 71:
                var4 = _closure1_slot13;
                var4 = var4[var5];
                var5 = var3 == var4;
                var3 = undefined;
                if(var5) { _fun0019_ip = 34; continue _fun0019 }
case 50:
                var3 = var4.mode;
case 34:
                var2 = _closure1_slot12;
                var2 = var2.ONBOARDING_ADVANCED;
                var1 = var3 === var2;
case 38:
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
case 0:
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
            if(!var3) { _fun0020_ip = 72; continue _fun0020 }
case 73:
            var10 = new Array(0);
case 72:
            var6['responses'] = var10;
            var6['onboardingPromptsSeen'] = var9;
            var6['onboardingResponsesSeen'] = var8;
            var7[var4] = var6;
            if(var3) { _fun0020_ip = 74; continue _fun0020 }
case 75:
            var3 = _closure1_slot22;
            var3 = var3.bind(var1)(var4, var5);
case 74:
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
case 0:
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
            if(!var2) { _fun0021_ip = 76; continue _fun0021 }
case 54:
            var2 = _closure1_slot13;
            var2 = var2[var5];
            var6 = null;
            var2 = var6 != var2;
            if(!var2) { _fun0021_ip = 77; continue _fun0021 }
case 78:
            var8 = var6 != var7;
            if(!var8) { _fun0021_ip = 14; continue _fun0021 }
case 69:
            var12 = var7.length;
            var11 = 0;
            var8 = var12 > var11;
case 14:
            if(!var8) { _fun0021_ip = 79; continue _fun0021 }
case 80:
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
case 79:
            if(var9) { _fun0021_ip = 81; continue _fun0021 }
case 82:
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
            _fun0021_ip = 83; continue _fun0021;
case 81:
            var8 = _closure1_slot13;
            var8 = var8[var5];
            var11 = var8.responses;
            var8 = var11.push;
            var8 = var8.bind(var11)(var10);
case 83:
            var8 = _closure1_slot14;
            var8 = var8[var5];
            if(!(var6 == var8)) { _fun0021_ip = 84; continue _fun0021 }
case 85:
            var11 = _closure1_slot14;
            var8 = {};
            var11[var5] = var8;
case 84:
            var8 = _closure1_slot14;
            var8 = var8[var5];
            var8[var10] = var9;
            if(!(var6 != var7)) { _fun0021_ip = 86; continue _fun0021 }
case 87:
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
case 86:
            var4 = _closure1_slot14;
            var3 = {};
            var13 = var4[var5];
            var14 = var3;
            var6 = copyDataProperties(var14, var13);
            var4[var5] = var3;
            var2 = true;
case 77:
            var1 = var2;
case 76:
            return var1;
        }
    };
    var2['GUILD_ONBOARDING_SELECT_OPTION'] = var10;
    var10 = function handleUpdateResponsesSuccess(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
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
            if(!(var3 != var5)) { _fun0022_ip = 22; continue _fun0022 }
case 35:
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
case 22:
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
case 0:
            var1 = arg1;
            var3 = var1.guildId;
            var2 = var1.mode;
            var1 = _closure1_slot13;
            var1 = var1[var3];
            var3 = null;
            if(!(var3 != var1)) { _fun0023_ip = 27; continue _fun0023 }
case 88:
            var1['mode'] = var2;
case 27:
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