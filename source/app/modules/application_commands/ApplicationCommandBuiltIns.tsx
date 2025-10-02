// app/modules/application_commands/ApplicationCommandBuiltIns.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var9;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var14 = true;
    var4['value'] = var14;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var10 = 0;
    var4 = var9[var10];
    var1 = undefined;
    var20 = var5.bind(var1)(var4);
    var _closure1_slot4 = var20;
    var11 = 1;
    var4 = var9[var11];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var12 = var4.BuiltInSectionId;
    var4 = 5;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var5 = var4.Permissions;
    var _closure1_slot8 = var5;
    var5 = var4.MARKDOWN_SPOILER_WRAPPER;
    var _closure1_slot9 = var5;
    var5 = var4.MAX_MESSAGE_LENGTH_PREMIUM;
    var _closure1_slot10 = var5;
    var5 = var4.MAX_MESSAGE_LENGTH;
    var _closure1_slot11 = var5;
    var4 = var4.ME;
    var _closure1_slot12 = var4;
    var4 = 6;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.getDisableCommunicationDurationOptions;
    var _closure1_slot13 = var4;
    var4 = 7;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.MessageSendLocation;
    var _closure1_slot14 = var4;
    var4 = function getOptionValue(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var _closure2_slot0 = var2;
            var2 = var3.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.name;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var3 = var1 == var2;
            var1 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2.value;
case 2:
            return var1;
        }
    };
    var _closure1_slot15 = var4;
    var6 = {};
    var5 = var12.BUILT_IN;
    var4 = {};
    var7 = var12.BUILT_IN;
    var4['id'] = var7;
    var18 = 8;
    var7 = var9[var18];
    var7 = var8.bind(var1)(var7);
    var7 = var7.ApplicationCommandSectionType;
    var7 = var7.BUILT_IN;
    var4['type'] = var7;
    var7 = function get name() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.fI5MTU;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var13 = 'name';
    Object.defineProperty(var4, var13, {get: var7, set: var1, enumerable: true});
    var6[var5] = var4;
    var5 = var12.FRECENCY;
    var4 = {};
    var7 = var12.FRECENCY;
    var4['id'] = var7;
    var7 = var9[var18];
    var7 = var8.bind(var1)(var7);
    var7 = var7.ApplicationCommandSectionType;
    var7 = var7.BUILT_IN;
    var4['type'] = var7;
    var7 = function get name() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.+cGVV1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var4, var13, {get: var7, set: var1, enumerable: true});
    var6[var5] = var4;
    var7 = 10;
    var4 = var9[var7];
    var4 = var8.bind(var1)(var4);
    var25 = var4.default;
    var5 = new Array(12);
    var26 = var5;
    var24 = 0;
    var4 = arraySpread(var26, var25, var24);
    var10 = {'id': '-1', 'untranslatedName': 'shrug', 'displayName': 'shrug'};
    var15 = 11;
    var13 = var9[var15];
    var13 = var8.bind(var1)(var13);
    var13 = var13.ApplicationCommandType;
    var13 = var13.CHAT;
    var10['type'] = var13;
    var13 = var9[var18];
    var13 = var8.bind(var1)(var13);
    var13 = var13.ApplicationCommandInputType;
    var13 = var13.BUILT_IN_TEXT;
    var10['inputType'] = var13;
    var13 = var12.BUILT_IN;
    var10['applicationId'] = var13;
    var16 = function get untranslatedDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.j5xUSU;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var13 = 'untranslatedDescription';
    Object.defineProperty(var10, var13, {get: var16, set: var1, enumerable: true});
    var17 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.j5xUSU;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var16 = 'displayDescription';
    Object.defineProperty(var10, var16, {get: var17, set: var1, enumerable: true});
    var21 = {'name': 'message', 'displayName': 'message'};
    var17 = var9[var15];
    var17 = var8.bind(var1)(var17);
    var17 = var17.ApplicationCommandOptionType;
    var17 = var17.STRING;
    var21['type'] = var17;
    var19 = function get description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.JewOra;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var17 = 'description';
    Object.defineProperty(var21, var17, {get: var19, set: var1, enumerable: true});
    var19 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.JewOra;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var21, var16, {get: var19, set: var1, enumerable: true});
    var19 = new Array(1);
    var19[0] = var21;
    var10['options'] = var19;
    var19 = function execute(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = {};
            var5 = _closure1_slot15;
            var4 = undefined;
            var3 = arg1;
            var2 = 'message';
            var2 = var5.bind(var4)(var3, var2);
            var3 = null;
            var3 = var3 != var2;
            var5 = '';
            var4 = var5;
            if(!var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var4 = var2;
case 4:
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = ' ¯\\_(ツ)_/¯';
            var3 = var3.bind(var5)(var4, var2);
            var2 = var3.trim;
            var2 = var2.bind(var3)();
            var1['content'] = var2;
            return var1;
        }
    };
    var10['execute'] = var19;
    var5[var4] = var10;
    var4 = var4 + var11;
    var10 = {'id': '-2', 'untranslatedName': 'tableflip', 'displayName': 'tableflip'};
    var19 = var9[var15];
    var19 = var8.bind(var1)(var19);
    var19 = var19.ApplicationCommandType;
    var19 = var19.CHAT;
    var10['type'] = var19;
    var19 = var9[var18];
    var19 = var8.bind(var1)(var19);
    var19 = var19.ApplicationCommandInputType;
    var19 = var19.BUILT_IN_TEXT;
    var10['inputType'] = var19;
    var19 = var12.BUILT_IN;
    var10['applicationId'] = var19;
    var19 = function get untranslatedDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.nrQRcX;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var13, {get: var19, set: var1, enumerable: true});
    var19 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.nrQRcX;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var16, {get: var19, set: var1, enumerable: true});
    var21 = {'name': 'message', 'displayName': 'message'};
    var19 = var9[var15];
    var19 = var8.bind(var1)(var19);
    var19 = var19.ApplicationCommandOptionType;
    var19 = var19.STRING;
    var21['type'] = var19;
    var19 = function get description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.EI80t7;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var21, var17, {get: var19, set: var1, enumerable: true});
    var19 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.EI80t7;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var21, var16, {get: var19, set: var1, enumerable: true});
    var19 = new Array(1);
    var19[0] = var21;
    var10['options'] = var19;
    var19 = function execute(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = {};
            var5 = _closure1_slot15;
            var4 = undefined;
            var3 = arg1;
            var2 = 'message';
            var2 = var5.bind(var4)(var3, var2);
            var3 = null;
            var3 = var3 != var2;
            var5 = '';
            var4 = var5;
            if(!var3) { _fun0003_ip = 4; continue _fun0003 }
case 5:
            var4 = var2;
case 4:
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = ' (╯°□°)╯︵ ┻━┻';
            var3 = var3.bind(var5)(var4, var2);
            var2 = var3.trim;
            var2 = var2.bind(var3)();
            var1['content'] = var2;
            return var1;
        }
    };
    var10['execute'] = var19;
    var5[var4] = var10;
    var4 = var4 + var11;
    var10 = {'id': '-3', 'untranslatedName': 'unflip', 'displayName': 'unflip'};
    var19 = var9[var15];
    var19 = var8.bind(var1)(var19);
    var19 = var19.ApplicationCommandType;
    var19 = var19.CHAT;
    var10['type'] = var19;
    var19 = var9[var18];
    var19 = var8.bind(var1)(var19);
    var19 = var19.ApplicationCommandInputType;
    var19 = var19.BUILT_IN_TEXT;
    var10['inputType'] = var19;
    var19 = var12.BUILT_IN;
    var10['applicationId'] = var19;
    var19 = function get untranslatedDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.pnnn8f;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var13, {get: var19, set: var1, enumerable: true});
    var19 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.pnnn8f;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var16, {get: var19, set: var1, enumerable: true});
    var21 = {'name': 'message', 'displayName': 'message'};
    var19 = var9[var15];
    var19 = var8.bind(var1)(var19);
    var19 = var19.ApplicationCommandOptionType;
    var19 = var19.STRING;
    var21['type'] = var19;
    var19 = function get description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.ETs6go;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var21, var17, {get: var19, set: var1, enumerable: true});
    var19 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.ETs6go;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var21, var16, {get: var19, set: var1, enumerable: true});
    var19 = new Array(1);
    var19[0] = var21;
    var10['options'] = var19;
    var19 = function execute(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = {};
            var5 = _closure1_slot15;
            var4 = undefined;
            var3 = arg1;
            var2 = 'message';
            var2 = var5.bind(var4)(var3, var2);
            var3 = null;
            var3 = var3 != var2;
            var5 = '';
            var4 = var5;
            if(!var3) { _fun0004_ip = 4; continue _fun0004 }
case 5:
            var4 = var2;
case 4:
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = ' ┬─┬ノ( º _ ºノ)';
            var3 = var3.bind(var5)(var4, var2);
            var2 = var3.trim;
            var2 = var2.bind(var3)();
            var1['content'] = var2;
            return var1;
        }
    };
    var10['execute'] = var19;
    var5[var4] = var10;
    var4 = var4 + var11;
    var10 = {'id': '-4', 'untranslatedName': 'tts', 'displayName': 'tts'};
    var19 = var9[var15];
    var19 = var8.bind(var1)(var19);
    var19 = var19.ApplicationCommandType;
    var19 = var19.CHAT;
    var10['type'] = var19;
    var19 = var9[var18];
    var19 = var8.bind(var1)(var19);
    var19 = var19.ApplicationCommandInputType;
    var19 = var19.BUILT_IN_TEXT;
    var10['inputType'] = var19;
    var19 = var12.BUILT_IN;
    var10['applicationId'] = var19;
    var19 = function get untranslatedDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.jZcIiY;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var13, {get: var19, set: var1, enumerable: true});
    var19 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.jZcIiY;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var16, {get: var19, set: var1, enumerable: true});
    var21 = {'name': 'message', 'displayName': 'message'};
    var19 = var9[var15];
    var19 = var8.bind(var1)(var19);
    var19 = var19.ApplicationCommandOptionType;
    var19 = var19.STRING;
    var21['type'] = var19;
    var19 = function get description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.k+sw9v;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var21, var17, {get: var19, set: var1, enumerable: true});
    var19 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.k+sw9v;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var21, var16, {get: var19, set: var1, enumerable: true});
    var21['required'] = var14;
    var19 = new Array(1);
    var19[0] = var21;
    var10['options'] = var19;
    var19 = function predicate(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var5 = var1.channel;
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0005_ip = 6; continue _fun0005 }
case 7:
            var2 = var5.isPrivate;
            var2 = var2.bind(var5)();
            var1 = !var2;
case 6:
            if(!var1) { _fun0005_ip = 8; continue _fun0005 }
case 9:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 12;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var3 = var2.EnableTTSCommand;
            var2 = var3.getSetting;
            var1 = var2.bind(var3)();
case 8:
            if(!var1) { _fun0005_ip = 10; continue _fun0005 }
case 11:
            var4 = _closure1_slot6;
            var3 = var4.can;
            var2 = _closure1_slot8;
            var2 = var2.SEND_TTS_MESSAGES;
            var1 = var3.bind(var4)(var2, var5);
case 10:
            return var1;
        }
    };
    var10['predicate'] = var19;
    var19 = function execute(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = {};
            var5 = _closure1_slot15;
            var4 = undefined;
            var3 = arg1;
            var2 = 'message';
            var3 = var5.bind(var4)(var3, var2);
            var2 = null;
            var4 = var2 != var3;
            var2 = '';
            if(!var4) { _fun0006_ip = 5; continue _fun0006 }
case 12:
            var2 = var3;
case 5:
            var1['content'] = var2;
            var2 = true;
            var1['tts'] = var2;
            return var1;
        }
    };
    var10['execute'] = var19;
    var5[var4] = var10;
    var4 = var4 + var11;
    var10 = {'id': '-5', 'untranslatedName': 'me', 'displayName': 'me'};
    var19 = var9[var15];
    var19 = var8.bind(var1)(var19);
    var19 = var19.ApplicationCommandType;
    var19 = var19.CHAT;
    var10['type'] = var19;
    var19 = var9[var18];
    var19 = var8.bind(var1)(var19);
    var19 = var19.ApplicationCommandInputType;
    var19 = var19.BUILT_IN_TEXT;
    var10['inputType'] = var19;
    var19 = var12.BUILT_IN;
    var10['applicationId'] = var19;
    var19 = function get untranslatedDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.UGO8fX;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var13, {get: var19, set: var1, enumerable: true});
    var19 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.UGO8fX;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var16, {get: var19, set: var1, enumerable: true});
    var21 = {'name': 'message', 'displayName': 'message'};
    var19 = var9[var15];
    var19 = var8.bind(var1)(var19);
    var19 = var19.ApplicationCommandOptionType;
    var19 = var19.STRING;
    var21['type'] = var19;
    var19 = function get description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.RWTgNT;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var21, var17, {get: var19, set: var1, enumerable: true});
    var19 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.RWTgNT;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var21, var16, {get: var19, set: var1, enumerable: true});
    var21['required'] = var14;
    var19 = new Array(1);
    var19[0] = var21;
    var10['options'] = var19;
    var19 = function execute(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = {};
            var5 = _closure1_slot15;
            var4 = undefined;
            var3 = arg1;
            var2 = 'message';
            var2 = var5.bind(var4)(var3, var2);
            var3 = null;
            var3 = var3 != var2;
            var4 = '';
            if(!var3) { _fun0007_ip = 5; continue _fun0007 }
case 12:
            var4 = var2;
case 5:
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = '_';
            var2 = var3.bind(var2)(var4, var2);
            var1['content'] = var2;
            return var1;
        }
    };
    var10['execute'] = var19;
    var5[var4] = var10;
    var4 = var4 + var11;
    var10 = {'id': '-6', 'untranslatedName': 'spoiler', 'displayName': 'spoiler'};
    var19 = var9[var15];
    var19 = var8.bind(var1)(var19);
    var19 = var19.ApplicationCommandType;
    var19 = var19.CHAT;
    var10['type'] = var19;
    var19 = var9[var18];
    var19 = var8.bind(var1)(var19);
    var19 = var19.ApplicationCommandInputType;
    var19 = var19.BUILT_IN_TEXT;
    var10['inputType'] = var19;
    var19 = var12.BUILT_IN;
    var10['applicationId'] = var19;
    var19 = function get untranslatedDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.v0eDdX;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var13, {get: var19, set: var1, enumerable: true});
    var19 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.v0eDdX;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var16, {get: var19, set: var1, enumerable: true});
    var21 = {'name': 'message', 'displayName': 'message'};
    var19 = var9[var15];
    var19 = var8.bind(var1)(var19);
    var19 = var19.ApplicationCommandOptionType;
    var19 = var19.STRING;
    var21['type'] = var19;
    var19 = function get description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.D13pbW;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var21, var17, {get: var19, set: var1, enumerable: true});
    var19 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.D13pbW;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var21, var16, {get: var19, set: var1, enumerable: true});
    var21['required'] = var14;
    var19 = new Array(1);
    var19[0] = var21;
    var10['options'] = var19;
    var19 = function execute(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var5 = _closure1_slot15;
            var4 = undefined;
            var3 = arg1;
            var1 = 'message';
            var1 = var5.bind(var4)(var3, var1);
            var3 = null;
            var5 = var3 != var1;
            var3 = '';
            if(!var5) { _fun0008_ip = 13; continue _fun0008 }
case 14:
            var3 = var1;
case 13:
            var1 = {};
            var2 = _closure1_slot9;
            var3 = var2.bind(var4)(var3);
            var2 = var3.trim;
            var2 = var2.bind(var3)();
            var1['content'] = var2;
            return var1;
        }
    };
    var10['execute'] = var19;
    var5[var4] = var10;
    var4 = var4 + var11;
    var10 = {'id': '-7', 'untranslatedName': 'nick', 'displayName': 'nick'};
    var19 = var9[var15];
    var19 = var8.bind(var1)(var19);
    var19 = var19.ApplicationCommandType;
    var19 = var19.CHAT;
    var10['type'] = var19;
    var19 = var9[var18];
    var19 = var8.bind(var1)(var19);
    var19 = var19.ApplicationCommandInputType;
    var19 = var19.BUILT_IN;
    var10['inputType'] = var19;
    var19 = var12.BUILT_IN;
    var10['applicationId'] = var19;
    var19 = function get untranslatedDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.jiHfS0;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var13, {get: var19, set: var1, enumerable: true});
    var19 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.jiHfS0;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var16, {get: var19, set: var1, enumerable: true});
    var21 = {'name': 'new_nick', 'displayName': 'new_nick'};
    var19 = var9[var15];
    var19 = var8.bind(var1)(var19);
    var19 = var19.ApplicationCommandOptionType;
    var19 = var19.STRING;
    var21['type'] = var19;
    var19 = function get description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.WTSzVl;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var21, var17, {get: var19, set: var1, enumerable: true});
    var19 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.WTSzVl;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var21, var16, {get: var19, set: var1, enumerable: true});
    var19 = new Array(1);
    var19[0] = var21;
    var10['options'] = var19;
    var19 = function predicate(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var6 = var1.channel;
            var1 = null;
            var1 = var1 != var6;
            if(!var1) { _fun0009_ip = 6; continue _fun0009 }
case 7:
            var2 = var6.isPrivate;
            var2 = var2.bind(var6)();
            var1 = !var2;
case 6:
            if(!var1) { _fun0009_ip = 15; continue _fun0009 }
case 9:
            var5 = _closure1_slot6;
            var4 = var5.can;
            var2 = _closure1_slot8;
            var2 = var2.CHANGE_NICKNAME;
            var2 = var4.bind(var5)(var2, var6);
            if(var2) { _fun0009_ip = 16; continue _fun0009 }
case 17:
            var5 = _closure1_slot6;
            var4 = var5.can;
            var3 = _closure1_slot8;
            var3 = var3.MANAGE_NICKNAMES;
            var2 = var4.bind(var5)(var3, var6);
case 16:
            var1 = var2;
case 15:
            return var1;
        }
    };
    var10['predicate'] = var19;
    var19 = function execute(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg2;
            var3 = var1.guild;
            var2 = var1.channel;
            var5 = null;
            if(!(var5 != var3)) { _fun0010_ip = 18; continue _fun0010 }
case 19:
            if(!(var5 != var2)) { _fun0010_ip = 18; continue _fun0010 }
case 20:
            var7 = _closure1_slot15;
            var8 = undefined;
            var6 = arg1;
            var4 = 'new_nick';
            var4 = var7.bind(var8)(var6, var4);
            var5 = var5 != var4;
            var7 = '';
            var6 = var7;
            if(!var5) { _fun0010_ip = 21; continue _fun0010 }
case 22:
            var6 = var4;
case 21:
            var5 = _closure1_slot1;
            var9 = _closure1_slot2;
            var4 = 13;
            var4 = var9[var4];
            var5 = var5.bind(var8)(var4);
            var4 = var5.changeNickname;
            var3 = var3.id;
            var2 = var2.id;
            var1 = _closure1_slot12;
            if(var6) { _fun0010_ip = 23; continue _fun0010 }
case 24:
            var6 = var7;
case 23:
            var14 = var5;
            var13 = var3;
            var12 = var2;
            var11 = var1;
            var10 = var6;
            var1 = var14[var4](var13, var12, var11, var10, var9);
case 18:
            var1 = undefined;
            return var1;
        }
    };
    var10['execute'] = var19;
    var5[var4] = var10;
    var4 = var4 + var11;
    var10 = {'id': '-10', 'untranslatedName': 'thread', 'displayName': 'thread'};
    var19 = var9[var15];
    var19 = var8.bind(var1)(var19);
    var19 = var19.ApplicationCommandType;
    var19 = var19.CHAT;
    var10['type'] = var19;
    var19 = var9[var18];
    var19 = var8.bind(var1)(var19);
    var19 = var19.ApplicationCommandInputType;
    var19 = var19.BUILT_IN;
    var10['inputType'] = var19;
    var19 = var12.BUILT_IN;
    var10['applicationId'] = var19;
    var19 = function get untranslatedDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.t6ZAS0;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var13, {get: var19, set: var1, enumerable: true});
    var19 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.t6ZAS0;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var16, {get: var19, set: var1, enumerable: true});
    var21 = {'name': 'name', 'displayName': 'name'};
    var19 = var9[var15];
    var19 = var8.bind(var1)(var19);
    var19 = var19.ApplicationCommandOptionType;
    var19 = var19.STRING;
    var21['type'] = var19;
    var19 = function get description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.TffOfX;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var21, var17, {get: var19, set: var1, enumerable: true});
    var19 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.TffOfX;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var21, var16, {get: var19, set: var1, enumerable: true});
    var21['required'] = var14;
    var19 = new Array(2);
    var19[0] = var21;
    var21 = {'name': 'message', 'displayName': 'message'};
    var22 = var9[var15];
    var22 = var8.bind(var1)(var22);
    var22 = var22.ApplicationCommandOptionType;
    var22 = var22.STRING;
    var21['type'] = var22;
    var22 = function get description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.QXfSfX;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var21, var17, {get: var22, set: var1, enumerable: true});
    var22 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.QXfSfX;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var21, var16, {get: var22, set: var1, enumerable: true});
    var21['required'] = var14;
    var19[1] = var21;
    var10['options'] = var19;
    var19 = function predicate(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var4 = var1.channel;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0011_ip = 25; continue _fun0011 }
case 7:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 14;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.computeCanStartPublicThread;
            var1 = var2.bind(var3)(var4);
case 25:
            return var1;
        }
    };
    var10['predicate'] = var19;
    var19 = function* (arg1, arg2) {
        var1 = function* anon_0_(arg1, arg2) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                StartGenerator();
                var7 = arg1;
                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                if(var2) { _fun0012_ip = 26; continue _fun0012 }
case 27:
                var2 = arg2;
                var12 = var2.channel;
                var4 = undefined;
                SaveGenerator(address=27);
case 28:
                return var4;
case 29:
                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                if(var3) { _fun0012_ip = 30; continue _fun0012 }
case 31:
                var6 = _closure1_slot15;
                var3 = 'name';
                var3 = var6.bind(var4)(var7, var3);
                var13 = null;
                var6 = var13 != var3;
                var11 = '';
                var10 = var11;
                if(!var6) { _fun0012_ip = 32; continue _fun0012 }
case 33:
                var10 = var3;
case 32:
                var6 = _closure1_slot15;
                var3 = 'message';
                var3 = var6.bind(var4)(var7, var3);
                var6 = var13 != var3;
                if(!var6) { _fun0012_ip = 34; continue _fun0012 }
case 35:
                var11 = var3;
case 34:
                var6 = _closure1_slot0;
                var14 = _closure1_slot2;
                var3 = 15;
                var3 = var14[var3];
                var9 = var6.bind(var4)(var3);
                var8 = var9.createThread;
                var3 = 16;
                var3 = var14[var3];
                var3 = var6.bind(var4)(var3);
                var3 = var3.ChannelTypes;
                var17 = var3.PUBLIC_THREAD;
                var3 = 17;
                var3 = var14[var3];
                var6 = var6.bind(var4)(var3);
                var3 = var6.getAutoArchiveDuration;
                var16 = var3.bind(var6)(var12, var13);
                var15 = 'Slash Command';
                var20 = var9;
                var19 = var12;
                var18 = var10;
                var3 = var20[var8](var19, var18, var17, var16, var15, var14);
                SaveGenerator(address=193);
case 36:
                return var3;
case 37:
                ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                if(var6) { _fun0012_ip = 38; continue _fun0012 }
case 39:
                var7 = _closure1_slot1;
                var12 = _closure1_slot2;
                var6 = 18;
                var6 = var12[var6];
                var10 = var7.bind(var4)(var6);
                var9 = var10.sendMessage;
                var8 = var3.id;
                var6 = 19;
                var6 = var12[var6];
                var7 = var7.bind(var4)(var6);
                var6 = var7.parse;
                var18 = var6.bind(var7)(var3, var11);
                var6 = {};
                var5 = _closure1_slot14;
                var5 = var5.THREAD_CREATION;
                var6['location'] = var5;
                var17 = true;
                var20 = var10;
                var19 = var8;
                var16 = var6;
                var5 = var20[var9](var19, var18, var17, var16, var15);
                return var4;
case 38:
                return var3;
case 30:
                return var2;
case 26:
                return var1;
            }
        };
        var2 = var1.next;
        var2 = var2.bind(var1)();
        return var1;
    };
    var19 = var20.bind(var1)(var19);
    var _closure1_slot3 = var19;
    var19 = function() {
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var10['execute'] = var19;
    var5[var4] = var10;
    var4 = var4 + var11;
    var10 = {'id': '-11', 'untranslatedName': 'kick', 'displayName': 'kick'};
    var19 = var9[var15];
    var19 = var8.bind(var1)(var19);
    var19 = var19.ApplicationCommandType;
    var19 = var19.CHAT;
    var10['type'] = var19;
    var19 = var9[var18];
    var19 = var8.bind(var1)(var19);
    var19 = var19.ApplicationCommandInputType;
    var19 = var19.BUILT_IN;
    var10['inputType'] = var19;
    var19 = var12.BUILT_IN;
    var10['applicationId'] = var19;
    var19 = function get untranslatedDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.03N0UF;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var13, {get: var19, set: var1, enumerable: true});
    var19 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.03N0UF;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var16, {get: var19, set: var1, enumerable: true});
    var20 = {'name': 'user', 'displayName': 'user'};
    var19 = var9[var15];
    var19 = var8.bind(var1)(var19);
    var19 = var19.ApplicationCommandOptionType;
    var19 = var19.USER;
    var20['type'] = var19;
    var19 = function get description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.gF8IpK;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var20, var17, {get: var19, set: var1, enumerable: true});
    var19 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.gF8IpK;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var20, var16, {get: var19, set: var1, enumerable: true});
    var20['required'] = var14;
    var19 = new Array(2);
    var19[0] = var20;
    var20 = {'name': 'reason', 'displayName': 'reason'};
    var21 = var9[var15];
    var21 = var8.bind(var1)(var21);
    var21 = var21.ApplicationCommandOptionType;
    var21 = var21.STRING;
    var20['type'] = var21;
    var21 = function get description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.QWldgo;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var20, var17, {get: var21, set: var1, enumerable: true});
    var21 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.QWldgo;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var20, var16, {get: var21, set: var1, enumerable: true});
    var21 = false;
    var20['required'] = var21;
    var19[1] = var20;
    var10['options'] = var19;
    var19 = function predicate(arg1) {
        var1 = arg1;
        var4 = var1.guild;
        var3 = _closure1_slot6;
        var2 = var3.can;
        var1 = _closure1_slot8;
        var1 = var1.KICK_MEMBERS;
        var1 = var2.bind(var3)(var1, var4);
        return var1;
    };
    var10['predicate'] = var19;
    var19 = function execute(arg1, arg2) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var8 = arg1;
            var1 = arg2;
            var _closure2_slot0 = var8;
            var9 = var1.guild;
            var _closure2_slot1 = var9;
            var4 = var1.channel;
            var _closure2_slot2 = var4;
            var1 = undefined;
            var _closure2_slot3 = var1;
            var6 = null;
            if(!(var6 != var9)) { _fun0013_ip = 40; continue _fun0013 }
case 41:
            if(!(var6 != var4)) { _fun0013_ip = 40; continue _fun0013 }
case 42:
            var7 = _closure1_slot15;
            var5 = 'user';
            var5 = var7.bind(var1)(var8, var5);
            var6 = var6 != var5;
            var8 = '';
            if(!var6) { _fun0013_ip = 43; continue _fun0013 }
case 44:
            var8 = var5;
case 43:
            _closure2_slot3 = var8;
            var7 = _closure1_slot6;
            var6 = var7.canManageUser;
            var5 = _closure1_slot8;
            var5 = var5.KICK_MEMBERS;
            var5 = var6.bind(var7)(var5, var8, var9);
            if(var5) { _fun0013_ip = 45; continue _fun0013 }
case 46:
            var6 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 18;
            var5 = var10[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.sendBotMessage;
            var4 = var4.id;
            var9 = _closure1_slot0;
            var3 = 9;
            var7 = var10[var3];
            var7 = var9.bind(var1)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var3 = var10[var3];
            var3 = var9.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3.6RIwPD;
            var3 = var7.bind(var8)(var3);
            var3 = var5.bind(var6)(var4, var3);
            _fun0013_ip = 40; continue _fun0013;
case 45:
            var3 = function() {
                var4 = _closure1_slot4;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0014_ip = 47; continue _fun0014 }
case 48:
                            var6 = _closure1_slot7;
                            var3 = var6.getUser;
                            var2 = _closure2_slot3;
                            var13 = var3.bind(var6)(var2);
                            var2 = null;
                            if(!(var2 != var13)) { _fun0014_ip = 49; continue _fun0014 }
case 2:
                            var7 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 20;
                            var6 = var6[var3];
                            var3 = undefined;
                            var9 = var7.bind(var3)(var6);
                            var8 = var9.kickUser;
                            var6 = _closure2_slot1;
                            var7 = var6.id;
                            var6 = _closure2_slot3;
                            var12 = _closure1_slot15;
                            var11 = _closure2_slot0;
                            var10 = 'reason';
                            var10 = var12.bind(var3)(var11, var10);
                            var11 = var2 != var10;
                            var2 = '';
                            if(!var11) { _fun0014_ip = 46; continue _fun0014 }
case 50:
                            var2 = var10;
case 46:
                            var2 = var8.bind(var9)(var7, var6, var2);
                            SaveGenerator(address=128);
case 51:
                            return var2;
case 52:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                            if(var6) { _fun0014_ip = 53; continue _fun0014 }
case 54:
                            var12 = _closure1_slot1;
                            var14 = _closure1_slot2;
                            var6 = 18;
                            var6 = var14[var6];
                            var7 = var12.bind(var3)(var6);
                            var6 = var7.sendBotMessage;
                            var5 = _closure2_slot2;
                            var5 = var5.id;
                            var8 = _closure1_slot0;
                            var4 = 9;
                            var9 = var14[var4];
                            var9 = var8.bind(var3)(var9);
                            var10 = var9.intl;
                            var9 = var10.formatToPlainString;
                            var4 = var14[var4];
                            var4 = var8.bind(var3)(var4);
                            var4 = var4.t;
                            var8 = var4.9wzHDQ;
                            var4 = {};
                            var11 = 21;
                            var11 = var14[var11];
                            var12 = var12.bind(var3)(var11);
                            var11 = var12.getUserTag;
                            var11 = var11.bind(var12)(var13);
                            var4['user'] = var11;
                            var4 = var9.bind(var10)(var8, var4);
                            var4 = var6.bind(var7)(var5, var4);
                            return var3;
case 53:
                            return var2;
case 49:
                            var2 = global;
                            var2 = var2.Error;
                            var3 = var2.prototype;
                            var3 = Object.create(var3, {constructor: {value: var2}});
                            var18 = var3;
                            var2 = new var18[var2](var17);
                            var2 = var2 instanceof Object ? var2 : var3;
                            throw var2;
case 47:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var3 = var3.bind(var1)();
            var4 = var3.bind(var1)();
            var3 = var4.catch;
            var2 = function() {
                var4 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 18;
                var3 = var9[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.sendBotMessage;
                var3 = _closure2_slot2;
                var3 = var3.id;
                var8 = _closure1_slot0;
                var2 = 9;
                var6 = var9[var2];
                var6 = var8.bind(var1)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var2 = var9[var2];
                var2 = var8.bind(var1)(var2);
                var2 = var2.t;
                var2 = var2.l0gNlp;
                var2 = var6.bind(var7)(var2);
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
case 40:
            return var1;
        }
    };
    var10['execute'] = var19;
    var5[var4] = var10;
    var4 = var4 + var11;
    var10 = {'id': '-12', 'untranslatedName': 'ban', 'displayName': 'ban'};
    var19 = var9[var15];
    var19 = var8.bind(var1)(var19);
    var19 = var19.ApplicationCommandType;
    var19 = var19.CHAT;
    var10['type'] = var19;
    var19 = var9[var18];
    var19 = var8.bind(var1)(var19);
    var19 = var19.ApplicationCommandInputType;
    var19 = var19.BUILT_IN;
    var10['inputType'] = var19;
    var19 = var12.BUILT_IN;
    var10['applicationId'] = var19;
    var19 = function get untranslatedDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.HWuskp;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var13, {get: var19, set: var1, enumerable: true});
    var19 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.HWuskp;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var16, {get: var19, set: var1, enumerable: true});
    var20 = {'name': 'user', 'displayName': 'user'};
    var19 = var9[var15];
    var19 = var8.bind(var1)(var19);
    var19 = var19.ApplicationCommandOptionType;
    var19 = var19.USER;
    var20['type'] = var19;
    var19 = function get description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.z3XPjo;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var20, var17, {get: var19, set: var1, enumerable: true});
    var19 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.z3XPjo;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var20, var16, {get: var19, set: var1, enumerable: true});
    var20['required'] = var14;
    var19 = new Array(3);
    var19[0] = var20;
    var20 = {'name': 'delete_messages', 'displayName': 'delete_messages'};
    var22 = var9[var15];
    var22 = var8.bind(var1)(var22);
    var22 = var22.ApplicationCommandOptionType;
    var22 = var22.INTEGER;
    var20['type'] = var22;
    var22 = function get description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.smrvAw;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var20, var17, {get: var22, set: var1, enumerable: true});
    var22 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.smrvAw;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var20, var16, {get: var22, set: var1, enumerable: true});
    var20['required'] = var14;
    var22 = function get choices() {
        var2 = {};
        var10 = _closure1_slot0;
        var6 = _closure1_slot2;
        var7 = 9;
        var1 = var6[var7];
        var5 = undefined;
        var1 = var10.bind(var5)(var1);
        var8 = var1.intl;
        var4 = var8.string;
        var1 = var6[var7];
        var1 = var10.bind(var5)(var1);
        var1 = var1.t;
        var1 = var1.4obaMT;
        var1 = var4.bind(var8)(var1);
        var2['name'] = var1;
        var1 = var6[var7];
        var1 = var10.bind(var5)(var1);
        var8 = var1.intl;
        var4 = var8.string;
        var1 = var6[var7];
        var1 = var10.bind(var5)(var1);
        var1 = var1.t;
        var1 = var1.4obaMT;
        var1 = var4.bind(var8)(var1);
        var2['displayName'] = var1;
        var1 = 0;
        var2['value'] = var1;
        var1 = new Array(7);
        var1[0] = var2;
        var2 = {};
        var4 = var6[var7];
        var4 = var10.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var6[var7];
        var4 = var10.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.RKpitb;
        var4 = var8.bind(var9)(var4);
        var2['name'] = var4;
        var4 = var6[var7];
        var4 = var10.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var6[var7];
        var4 = var10.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.RKpitb;
        var4 = var8.bind(var9)(var4);
        var2['displayName'] = var4;
        var4 = _closure1_slot1;
        var3 = 22;
        var8 = var6[var3];
        var8 = var4.bind(var5)(var8);
        var8 = var8.Seconds;
        var8 = var8.HOUR;
        var2['value'] = var8;
        var1[1] = var2;
        var2 = {};
        var8 = var6[var7];
        var8 = var10.bind(var5)(var8);
        var11 = var8.intl;
        var9 = var11.string;
        var8 = var6[var7];
        var8 = var10.bind(var5)(var8);
        var8 = var8.t;
        var8 = var8.8WfJZ2;
        var8 = var9.bind(var11)(var8);
        var2['name'] = var8;
        var8 = var6[var7];
        var8 = var10.bind(var5)(var8);
        var11 = var8.intl;
        var9 = var11.string;
        var8 = var6[var7];
        var8 = var10.bind(var5)(var8);
        var8 = var8.t;
        var8 = var8.8WfJZ2;
        var8 = var9.bind(var11)(var8);
        var2['displayName'] = var8;
        var8 = var6[var3];
        var8 = var4.bind(var5)(var8);
        var8 = var8.Seconds;
        var9 = var8.HOUR;
        var8 = 6;
        var8 = var8 * var9;
        var2['value'] = var8;
        var1[2] = var2;
        var2 = {};
        var8 = var6[var7];
        var8 = var10.bind(var5)(var8);
        var11 = var8.intl;
        var9 = var11.string;
        var8 = var6[var7];
        var8 = var10.bind(var5)(var8);
        var8 = var8.t;
        var8 = var8.p1up7u;
        var8 = var9.bind(var11)(var8);
        var2['name'] = var8;
        var8 = var6[var7];
        var8 = var10.bind(var5)(var8);
        var11 = var8.intl;
        var9 = var11.string;
        var8 = var6[var7];
        var8 = var10.bind(var5)(var8);
        var8 = var8.t;
        var8 = var8.p1up7u;
        var8 = var9.bind(var11)(var8);
        var2['displayName'] = var8;
        var8 = var6[var3];
        var8 = var4.bind(var5)(var8);
        var8 = var8.Seconds;
        var9 = var8.HOUR;
        var8 = 12;
        var8 = var8 * var9;
        var2['value'] = var8;
        var1[3] = var2;
        var2 = {};
        var8 = var6[var7];
        var8 = var10.bind(var5)(var8);
        var11 = var8.intl;
        var9 = var11.string;
        var8 = var6[var7];
        var8 = var10.bind(var5)(var8);
        var8 = var8.t;
        var8 = var8.XuVkkJ;
        var8 = var9.bind(var11)(var8);
        var2['name'] = var8;
        var8 = var6[var7];
        var8 = var10.bind(var5)(var8);
        var11 = var8.intl;
        var9 = var11.string;
        var8 = var6[var7];
        var8 = var10.bind(var5)(var8);
        var8 = var8.t;
        var8 = var8.XuVkkJ;
        var8 = var9.bind(var11)(var8);
        var2['displayName'] = var8;
        var8 = var6[var3];
        var8 = var4.bind(var5)(var8);
        var8 = var8.Seconds;
        var8 = var8.DAY;
        var2['value'] = var8;
        var1[4] = var2;
        var2 = {};
        var8 = var6[var7];
        var8 = var10.bind(var5)(var8);
        var11 = var8.intl;
        var9 = var11.string;
        var8 = var6[var7];
        var8 = var10.bind(var5)(var8);
        var8 = var8.t;
        var8 = var8.gMcDS0;
        var8 = var9.bind(var11)(var8);
        var2['name'] = var8;
        var8 = var6[var7];
        var8 = var10.bind(var5)(var8);
        var11 = var8.intl;
        var9 = var11.string;
        var8 = var6[var7];
        var8 = var10.bind(var5)(var8);
        var8 = var8.t;
        var8 = var8.gMcDS0;
        var8 = var9.bind(var11)(var8);
        var2['displayName'] = var8;
        var8 = var6[var3];
        var8 = var4.bind(var5)(var8);
        var8 = var8.Seconds;
        var9 = var8.DAY;
        var8 = 3;
        var8 = var8 * var9;
        var2['value'] = var8;
        var1[5] = var2;
        var2 = {};
        var8 = var6[var7];
        var8 = var10.bind(var5)(var8);
        var11 = var8.intl;
        var9 = var11.string;
        var8 = var6[var7];
        var8 = var10.bind(var5)(var8);
        var8 = var8.t;
        var8 = var8.FA7IUl;
        var8 = var9.bind(var11)(var8);
        var2['name'] = var8;
        var8 = var6[var7];
        var8 = var10.bind(var5)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var7 = var6[var7];
        var7 = var10.bind(var5)(var7);
        var7 = var7.t;
        var7 = var7.FA7IUl;
        var7 = var8.bind(var9)(var7);
        var2['displayName'] = var7;
        var3 = var6[var3];
        var3 = var4.bind(var5)(var3);
        var3 = var3.Seconds;
        var4 = var3.DAY;
        var3 = 7;
        var3 = var3 * var4;
        var2['value'] = var3;
        var1[6] = var2;
        return var1;
    };
    var23 = 'choices';
    Object.defineProperty(var20, var23, {get: var22, set: var1, enumerable: true});
    var19[1] = var20;
    var20 = {'name': 'reason', 'displayName': 'reason'};
    var22 = var9[var15];
    var22 = var8.bind(var1)(var22);
    var22 = var22.ApplicationCommandOptionType;
    var22 = var22.STRING;
    var20['type'] = var22;
    var22 = function get description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.dG4noa;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var20, var17, {get: var22, set: var1, enumerable: true});
    var22 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.dG4noa;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var20, var16, {get: var22, set: var1, enumerable: true});
    var20['required'] = var21;
    var19[2] = var20;
    var10['options'] = var19;
    var19 = function predicate(arg1) {
        var1 = arg1;
        var4 = var1.guild;
        var3 = _closure1_slot6;
        var2 = var3.can;
        var1 = _closure1_slot8;
        var1 = var1.BAN_MEMBERS;
        var1 = var2.bind(var3)(var1, var4);
        return var1;
    };
    var10['predicate'] = var19;
    var19 = function execute(arg1, arg2) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var8 = arg1;
            var1 = arg2;
            var _closure2_slot0 = var8;
            var9 = var1.guild;
            var _closure2_slot1 = var9;
            var4 = var1.channel;
            var _closure2_slot2 = var4;
            var1 = undefined;
            var _closure2_slot3 = var1;
            var6 = null;
            if(!(var6 != var9)) { _fun0015_ip = 40; continue _fun0015 }
case 41:
            if(!(var6 != var4)) { _fun0015_ip = 40; continue _fun0015 }
case 42:
            var7 = _closure1_slot15;
            var5 = 'user';
            var5 = var7.bind(var1)(var8, var5);
            var6 = var6 != var5;
            var8 = '';
            if(!var6) { _fun0015_ip = 43; continue _fun0015 }
case 44:
            var8 = var5;
case 43:
            _closure2_slot3 = var8;
            var7 = _closure1_slot6;
            var6 = var7.canManageUser;
            var5 = _closure1_slot8;
            var5 = var5.BAN_MEMBERS;
            var5 = var6.bind(var7)(var5, var8, var9);
            if(var5) { _fun0015_ip = 45; continue _fun0015 }
case 46:
            var6 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 18;
            var5 = var10[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.sendBotMessage;
            var4 = var4.id;
            var9 = _closure1_slot0;
            var3 = 9;
            var7 = var10[var3];
            var7 = var9.bind(var1)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var3 = var10[var3];
            var3 = var9.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3.R27LJi;
            var3 = var7.bind(var8)(var3);
            var3 = var5.bind(var6)(var4, var3);
            _fun0015_ip = 40; continue _fun0015;
case 45:
            var3 = function() {
                var4 = _closure1_slot4;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0016_ip = 55; continue _fun0016 }
case 48:
                            var2 = _closure2_slot3;
                            var8 = '';
                            if(!(var8 !== var2)) { _fun0016_ip = 56; continue _fun0016 }
case 57:
                            var5 = _closure1_slot15;
                            var4 = _closure2_slot0;
                            var3 = undefined;
                            var2 = 'delete_messages';
                            var2 = var5.bind(var3)(var4, var2);
                            var13 = null;
                            var4 = var13 != var2;
                            var7 = 0;
                            if(!var4) { _fun0016_ip = 58; continue _fun0016 }
case 21:
                            var7 = var2;
case 58:
                            var5 = _closure1_slot15;
                            var4 = _closure2_slot0;
                            var2 = 'reason';
                            var2 = var5.bind(var3)(var4, var2);
                            var4 = var13 != var2;
                            if(!var4) { _fun0016_ip = 59; continue _fun0016 }
case 60:
                            var8 = var2;
case 59:
                            var5 = _closure1_slot7;
                            var4 = var5.getUser;
                            var2 = _closure2_slot3;
                            var14 = var4.bind(var5)(var2);
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var2 = 20;
                            var2 = var5[var2];
                            var6 = var4.bind(var3)(var2);
                            var5 = var6.banUser;
                            var2 = _closure2_slot1;
                            var19 = var2.id;
                            var18 = _closure2_slot3;
                            var20 = var6;
                            var17 = var7;
                            var16 = var8;
                            var2 = var20[var5](var19, var18, var17, var16, var15);
                            SaveGenerator(address=170);
case 61:
                            return var2;
case 62:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0016_ip = 63; continue _fun0016 }
case 64:
                            var5 = _closure1_slot1;
                            var15 = _closure1_slot2;
                            var4 = 18;
                            var4 = var15[var4];
                            var7 = var5.bind(var3)(var4);
                            var6 = var7.sendBotMessage;
                            var4 = _closure2_slot2;
                            var5 = var4.id;
                            var8 = _closure1_slot0;
                            var4 = 9;
                            var9 = var15[var4];
                            var9 = var8.bind(var3)(var9);
                            var10 = var9.intl;
                            var9 = var10.formatToPlainString;
                            var4 = var15[var4];
                            var4 = var8.bind(var3)(var4);
                            var4 = var4.t;
                            var8 = var4.YflWdH;
                            var4 = {};
                            if(!(var13 == var14)) { _fun0016_ip = 65; continue _fun0016 }
case 66:
                            var11 = _closure2_slot3;
                            _fun0016_ip = 67; continue _fun0016;
case 65:
                            var13 = _closure1_slot1;
                            var15 = _closure1_slot2;
                            var12 = 21;
                            var12 = var15[var12];
                            var13 = var13.bind(var3)(var12);
                            var12 = var13.getUserTag;
                            var11 = var12.bind(var13)(var14);
case 67:
                            var4['user'] = var11;
                            var4 = var9.bind(var10)(var8, var4);
                            var4 = var6.bind(var7)(var5, var4);
                            return var3;
case 63:
                            return var2;
case 56:
                            var2 = global;
                            var2 = var2.Error;
                            var3 = var2.prototype;
                            var3 = Object.create(var3, {constructor: {value: var2}});
                            var20 = var3;
                            var2 = new var20[var2](var19);
                            var2 = var2 instanceof Object ? var2 : var3;
                            throw var2;
case 55:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var3 = var3.bind(var1)();
            var4 = var3.bind(var1)();
            var3 = var4.catch;
            var2 = function() {
                var4 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 18;
                var3 = var9[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.sendBotMessage;
                var3 = _closure2_slot2;
                var3 = var3.id;
                var8 = _closure1_slot0;
                var2 = 9;
                var6 = var9[var2];
                var6 = var8.bind(var1)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var2 = var9[var2];
                var2 = var8.bind(var1)(var2);
                var2 = var2.t;
                var2 = var2.w2J6Qk;
                var2 = var6.bind(var7)(var2);
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
case 40:
            return var1;
        }
    };
    var10['execute'] = var19;
    var5[var4] = var10;
    var4 = var4 + var11;
    var10 = {'id': '-13', 'untranslatedName': 'timeout', 'displayName': 'timeout'};
    var19 = var9[var15];
    var19 = var8.bind(var1)(var19);
    var19 = var19.ApplicationCommandType;
    var19 = var19.CHAT;
    var10['type'] = var19;
    var19 = var9[var18];
    var19 = var8.bind(var1)(var19);
    var19 = var19.ApplicationCommandInputType;
    var19 = var19.BUILT_IN;
    var10['inputType'] = var19;
    var19 = var12.BUILT_IN;
    var10['applicationId'] = var19;
    var19 = function get untranslatedDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.KkPcen;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var13, {get: var19, set: var1, enumerable: true});
    var19 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.KkPcen;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var16, {get: var19, set: var1, enumerable: true});
    var20 = {'name': 'user', 'displayName': 'user'};
    var19 = var9[var15];
    var19 = var8.bind(var1)(var19);
    var19 = var19.ApplicationCommandOptionType;
    var19 = var19.USER;
    var20['type'] = var19;
    var19 = function get description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.UU3VRk;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var20, var17, {get: var19, set: var1, enumerable: true});
    var19 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.UU3VRk;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var20, var16, {get: var19, set: var1, enumerable: true});
    var20['required'] = var14;
    var19 = new Array(3);
    var19[0] = var20;
    var20 = {'name': 'duration', 'displayName': 'duration'};
    var22 = var9[var15];
    var22 = var8.bind(var1)(var22);
    var22 = var22.ApplicationCommandOptionType;
    var22 = var22.INTEGER;
    var20['type'] = var22;
    var22 = function get description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.SNqN1d;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var20, var17, {get: var22, set: var1, enumerable: true});
    var22 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.SNqN1d;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var20, var16, {get: var22, set: var1, enumerable: true});
    var20['required'] = var14;
    var22 = function get choices() {
        var2 = _closure1_slot13;
        var1 = undefined;
        var3 = var2.bind(var1)();
        var2 = var3.map;
        var1 = function(arg1) {
            var2 = arg1;
            var1 = {};
            var6 = var1;
            var5 = var2;
            var3 = copyDataProperties(var6, var5);
            var4 = var2.label;
            var3 = 'name';
            var1[var3] = var4;
            var3 = var2.label;
            var2 = 'displayName';
            var1[var2] = var3;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var20, var23, {get: var22, set: var1, enumerable: true});
    var19[1] = var20;
    var20 = {'name': 'reason', 'displayName': 'reason'};
    var22 = var9[var15];
    var22 = var8.bind(var1)(var22);
    var22 = var22.ApplicationCommandOptionType;
    var22 = var22.STRING;
    var20['type'] = var22;
    var22 = function get description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.akHScH;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var20, var17, {get: var22, set: var1, enumerable: true});
    var22 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.akHScH;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var20, var16, {get: var22, set: var1, enumerable: true});
    var20['required'] = var21;
    var19[2] = var20;
    var10['options'] = var19;
    var19 = function predicate(arg1) {
        var1 = arg1;
        var4 = var1.guild;
        var3 = _closure1_slot6;
        var2 = var3.can;
        var1 = _closure1_slot8;
        var1 = var1.MODERATE_MEMBERS;
        var1 = var2.bind(var3)(var1, var4);
        return var1;
    };
    var10['predicate'] = var19;
    var19 = function execute(arg1, arg2) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var8 = arg1;
            var1 = arg2;
            var _closure2_slot0 = var8;
            var5 = var1.guild;
            var _closure2_slot1 = var5;
            var4 = var1.channel;
            var _closure2_slot2 = var4;
            var1 = undefined;
            var _closure2_slot3 = var1;
            var3 = null;
            if(!(var3 != var5)) { _fun0017_ip = 68; continue _fun0017 }
case 41:
            if(!(var3 != var4)) { _fun0017_ip = 68; continue _fun0017 }
case 42:
            var7 = _closure1_slot15;
            var6 = 'user';
            var8 = var7.bind(var1)(var8, var6);
            _closure2_slot3 = var8;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 23;
            var6 = var9[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.canToggleCommunicationDisableOnUser;
            var5 = var5.id;
            var5 = var6.bind(var7)(var5, var8);
            if(var5) { _fun0017_ip = 69; continue _fun0017 }
case 70:
            var6 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 18;
            var5 = var10[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.sendBotMessage;
            var4 = var4.id;
            var9 = _closure1_slot0;
            var3 = 9;
            var7 = var10[var3];
            var7 = var9.bind(var1)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var3 = var10[var3];
            var3 = var9.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3.F5pqSU;
            var3 = var7.bind(var8)(var3);
            var3 = var5.bind(var6)(var4, var3);
            _fun0017_ip = 68; continue _fun0017;
case 69:
            var3 = function() {
                var4 = _closure1_slot4;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0018_ip = 71; continue _fun0018 }
case 48:
                            var7 = _closure1_slot15;
                            var6 = _closure2_slot0;
                            var3 = undefined;
                            var2 = 'duration';
                            var6 = var7.bind(var3)(var6, var2);
                            var2 = null;
                            var7 = var2 != var6;
                            var8 = '';
                            var11 = var8;
                            if(!var7) { _fun0018_ip = 72; continue _fun0018 }
case 42:
                            var11 = var6;
case 72:
                            var9 = _closure1_slot15;
                            var7 = _closure2_slot0;
                            var6 = 'reason';
                            var6 = var9.bind(var3)(var7, var6);
                            var7 = var2 != var6;
                            if(!var7) { _fun0018_ip = 43; continue _fun0018 }
case 44:
                            var8 = var6;
case 43:
                            var9 = _closure1_slot7;
                            var7 = var9.getUser;
                            var6 = _closure2_slot3;
                            var14 = var7.bind(var9)(var6);
                            if(!(var2 != var14)) { _fun0018_ip = 73; continue _fun0018 }
case 74:
                            var10 = _closure1_slot1;
                            var12 = _closure1_slot2;
                            var2 = 20;
                            var2 = var12[var2];
                            var7 = var10.bind(var3)(var2);
                            var6 = var7.setCommunicationDisabledUntil;
                            var2 = {};
                            var9 = _closure2_slot1;
                            var9 = var9.id;
                            var2['guildId'] = var9;
                            var9 = _closure2_slot3;
                            var2['userId'] = var9;
                            var9 = 24;
                            var9 = var12[var9];
                            var9 = var10.bind(var3)(var9);
                            var12 = var9.bind(var3)();
                            var10 = var12.add;
                            var9 = 's';
                            var10 = var10.bind(var12)(var11, var9);
                            var9 = var10.toISOString;
                            var9 = var9.bind(var10)();
                            var2['communicationDisabledUntilTimestamp'] = var9;
                            var2['duration'] = var11;
                            var2['reason'] = var8;
                            var2 = var6.bind(var7)(var2);
                            SaveGenerator(address=222);
case 75:
                            return var2;
case 76:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                            if(var6) { _fun0018_ip = 77; continue _fun0018 }
case 78:
                            var13 = _closure1_slot1;
                            var15 = _closure1_slot2;
                            var6 = 18;
                            var6 = var15[var6];
                            var7 = var13.bind(var3)(var6);
                            var6 = var7.sendBotMessage;
                            var5 = _closure2_slot2;
                            var5 = var5.id;
                            var8 = _closure1_slot0;
                            var4 = 9;
                            var9 = var15[var4];
                            var9 = var8.bind(var3)(var9);
                            var10 = var9.intl;
                            var9 = var10.formatToPlainString;
                            var4 = var15[var4];
                            var4 = var8.bind(var3)(var4);
                            var4 = var4.t;
                            var8 = var4.BbRV6u;
                            var4 = {};
                            var12 = 21;
                            var12 = var15[var12];
                            var13 = var13.bind(var3)(var12);
                            var12 = var13.getUserTag;
                            var12 = var12.bind(var13)(var14);
                            var4['user'] = var12;
                            var4['duration'] = var11;
                            var4 = var9.bind(var10)(var8, var4);
                            var4 = var6.bind(var7)(var5, var4);
                            return var3;
case 77:
                            return var2;
case 73:
                            var2 = global;
                            var2 = var2.Error;
                            var3 = var2.prototype;
                            var3 = Object.create(var3, {constructor: {value: var2}});
                            var18 = var3;
                            var2 = new var18[var2](var17);
                            var2 = var2 instanceof Object ? var2 : var3;
                            throw var2;
case 71:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var3 = var3.bind(var1)();
            var4 = var3.bind(var1)();
            var3 = var4.catch;
            var2 = function() {
                var4 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 18;
                var3 = var9[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.sendBotMessage;
                var3 = _closure2_slot2;
                var3 = var3.id;
                var8 = _closure1_slot0;
                var2 = 9;
                var6 = var9[var2];
                var6 = var8.bind(var1)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var2 = var9[var2];
                var2 = var8.bind(var1)(var2);
                var2 = var2.t;
                var2 = var2.+mWyVl;
                var2 = var6.bind(var7)(var2);
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
case 68:
            return var1;
        }
    };
    var10['execute'] = var19;
    var5[var4] = var10;
    var10 = {'id': '-14', 'untranslatedName': 'msg', 'displayName': 'msg'};
    var19 = var9[var15];
    var19 = var8.bind(var1)(var19);
    var19 = var19.ApplicationCommandType;
    var19 = var19.CHAT;
    var10['type'] = var19;
    var18 = var9[var18];
    var18 = var8.bind(var1)(var18);
    var18 = var18.ApplicationCommandInputType;
    var18 = var18.BUILT_IN;
    var10['inputType'] = var18;
    var12 = var12.BUILT_IN;
    var10['applicationId'] = var12;
    var12 = function get untranslatedDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.Dg8XZ2;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var13, {get: var12, set: var1, enumerable: true});
    var12 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.Dg8XZ2;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var16, {get: var12, set: var1, enumerable: true});
    var13 = {'name': 'user', 'displayName': 'user'};
    var12 = var9[var15];
    var12 = var8.bind(var1)(var12);
    var12 = var12.ApplicationCommandOptionType;
    var12 = var12.USER;
    var13['type'] = var12;
    var12 = function get description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.KmVq/P;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var13, var17, {get: var12, set: var1, enumerable: true});
    var12 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.KmVq/P;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var13, var16, {get: var12, set: var1, enumerable: true});
    var13['required'] = var14;
    var12 = new Array(2);
    var12[0] = var13;
    var13 = {'name': 'message', 'displayName': 'message'};
    var15 = var9[var15];
    var15 = var8.bind(var1)(var15);
    var15 = var15.ApplicationCommandOptionType;
    var15 = var15.STRING;
    var13['type'] = var15;
    var15 = function get description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.oGUuOD;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var13, var17, {get: var15, set: var1, enumerable: true});
    var15 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.oGUuOD;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var13, var16, {get: var15, set: var1, enumerable: true});
    var13['required'] = var14;
    var15 = function get maxLength() {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var3 = _closure1_slot7;
            var1 = var3.getCurrentUser;
            var1 = var1.bind(var3)();
            var3 = null;
            if(!(var3 != var1)) { _fun0019_ip = 79; continue _fun0019 }
case 80:
            var1 = var1.premiumType;
            if(var1) { _fun0019_ip = 12; continue _fun0019 }
case 79:
            var1 = _closure1_slot11;
            _fun0019_ip = 81; continue _fun0019;
case 12:
            var1 = _closure1_slot10;
case 81:
            return var1;
        }
    };
    var14 = 'maxLength';
    Object.defineProperty(var13, var14, {get: var15, set: var1, enumerable: true});
    var12[1] = var13;
    var10['options'] = var12;
    var12 = function execute(arg1, arg2) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var6 = arg1;
            var1 = arg2;
            var4 = var1.channel;
            var _closure2_slot0 = var4;
            var1 = undefined;
            var _closure2_slot1 = var1;
            var _closure2_slot2 = var1;
            var3 = null;
            if(!(var3 != var4)) { _fun0020_ip = 82; continue _fun0020 }
case 9:
            var5 = _closure1_slot15;
            var4 = 'user';
            var4 = var5.bind(var1)(var6, var4);
            _closure2_slot1 = var4;
            var4 = 'message';
            var4 = var5.bind(var1)(var6, var4);
            var5 = var3 != var4;
            var3 = '';
            if(!var5) { _fun0020_ip = 83; continue _fun0020 }
case 84:
            var3 = var4;
case 83:
            _closure2_slot2 = var3;
            var3 = function() {
                var4 = _closure1_slot4;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0021_ip = 85; continue _fun0021 }
case 86:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 25;
                            var2 = var3[var2];
                            var3 = undefined;
                            var5 = var4.bind(var3)(var2);
                            var4 = var5.openPrivateChannel;
                            var2 = {};
                            var6 = _closure2_slot1;
                            var2['recipientIds'] = var6;
                            var5 = var4.bind(var5)(var2);
                            var4 = var5.then;
                            var2 = function(arg1) {
                                var4 = _closure1_slot5;
                                var3 = var4.getChannel;
                                var1 = arg1;
                                var9 = var3.bind(var4)(var1);
                                var4 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var1 = 26;
                                var3 = var8[var1];
                                var1 = undefined;
                                var6 = var4.bind(var1)(var3);
                                var3 = null;
                                var5 = var3 != var9;
                                var3 = 'Newly created PrivateChannel is null';
                                var3 = var6.bind(var1)(var5, var3);
                                var3 = 18;
                                var3 = var8[var3];
                                var7 = var4.bind(var1)(var3);
                                var6 = var7.sendMessage;
                                var5 = var9.id;
                                var3 = 19;
                                var3 = var8[var3];
                                var8 = var4.bind(var1)(var3);
                                var4 = var8.parse;
                                var3 = _closure2_slot2;
                                var12 = var4.bind(var8)(var9, var3);
                                var3 = {};
                                var2 = _closure1_slot14;
                                var2 = var2.PRIVATE_MESSAGE_COMMAND;
                                var3['location'] = var2;
                                var11 = true;
                                var14 = var7;
                                var13 = var5;
                                var10 = var3;
                                var2 = var14[var6](var13, var12, var11, var10, var9);
                                return var1;
                            };
                            var2 = var4.bind(var5)(var2);
                            SaveGenerator(address=78);
case 87:
                            return var2;
case 83:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0021_ip = 88; continue _fun0021 }
case 89:
                            return var3;
case 88:
                            return var2;
case 85:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var3 = var3.bind(var1)();
            var4 = var3.bind(var1)();
            var3 = var4.catch;
            var2 = function() {
                var4 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 18;
                var3 = var9[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.sendBotMessage;
                var3 = _closure2_slot0;
                var3 = var3.id;
                var8 = _closure1_slot0;
                var2 = 9;
                var6 = var9[var2];
                var6 = var8.bind(var1)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var2 = var9[var2];
                var2 = var8.bind(var1)(var2);
                var2 = var2.t;
                var2 = var2.3XaE9/;
                var2 = var6.bind(var7)(var2);
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
case 82:
            return var1;
        }
    };
    var10['execute'] = var12;
    var4 = var4 + var11;
    var5[var4] = var10;
    var _closure1_slot16 = var5;
    var10 = var5.filter;
    var4 = function(arg1) {
        var3 = ['gif', 'tenor', 'tts', 'me', 'tableflip', 'unflip', 'shrug', 'spoiler', 'nick'];
        var2 = var3.includes;
        var1 = arg1;
        var1 = var1.untranslatedName;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4 = var10.bind(var5)(var4);
    var _closure1_slot17 = var4;
    var10 = 27;
    var10 = var9[var10];
    var12 = var8.bind(var1)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'modules/application_commands/ApplicationCommandBuiltIns.tsx';
    var10 = var11.bind(var12)(var10);
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.default;
    var3['PLATFORM_COMMANDS'] = var7;
    var3['BUILT_IN_SECTIONS'] = var6;
    var3['BUILT_IN_COMMANDS'] = var5;
    var3['BUILT_IN_COMMANDS_ORIGINAL'] = var4;
    var2 = function(arg1, arg2, arg3) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg3;
            var _closure2_slot1 = var2;
            var3 = arg2;
            if(var3) { _fun0022_ip = 79; continue _fun0022 }
case 28:
            var3 = _closure1_slot17;
            _fun0022_ip = 14; continue _fun0022;
case 79:
            var3 = _closure1_slot16;
case 14:
            var2 = var3.filter;
            var1 = function(arg1) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var3 = arg1;
                    var5 = _closure2_slot0;
                    var4 = var5.includes;
                    var1 = var3.type;
                    var1 = var4.bind(var5)(var1);
                    if(!var1) { _fun0023_ip = 90; continue _fun0023 }
case 57:
                    var2 = _closure2_slot1;
                    var2 = !var2;
                    if(var2) { _fun0023_ip = 91; continue _fun0023 }
case 13:
                    var5 = var3.inputType;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 8;
                    var6 = var6[var4];
                    var4 = undefined;
                    var4 = var7.bind(var4)(var6);
                    var4 = var4.ApplicationCommandInputType;
                    var4 = var4.BUILT_IN_TEXT;
                    var2 = var5 === var4;
case 91:
                    if(var2) { _fun0023_ip = 92; continue _fun0023 }
case 93:
                    var4 = var3.inputType;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 8;
                    var5 = var5[var3];
                    var3 = undefined;
                    var3 = var6.bind(var3)(var5);
                    var3 = var3.ApplicationCommandInputType;
                    var3 = var3.BUILT_IN_INTEGRATION;
                    var2 = var4 === var3;
case 92:
                    var1 = var2;
case 90:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getBuiltInCommands'] = var2;
    return var1;
})();