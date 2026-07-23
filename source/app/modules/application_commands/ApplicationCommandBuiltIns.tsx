// app/modules/application_commands/ApplicationCommandBuiltIns.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var9;
    var1 = function getOptionValue(arg1, arg2) {
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
    var _closure1_slot16 = var1;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var22 = true;
    var4['value'] = var22;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var10 = 0;
    var4 = var9[var10];
    var1 = undefined;
    var21 = var5.bind(var1)(var4);
    var _closure1_slot3 = var21;
    var11 = 1;
    var4 = var9[var11];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var13 = var4.BuiltInSectionId;
    var4 = 5;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var5 = var4.Permissions;
    var _closure1_slot7 = var5;
    var5 = var4.MARKDOWN_SPOILER_WRAPPER;
    var _closure1_slot8 = var5;
    var5 = var4.ME;
    var _closure1_slot9 = var5;
    var23 = var4.DISPLAY_NAME_MAX_LENGTH;
    var20 = var4.MAX_CHANNEL_NAME_LENGTH;
    var4 = 6;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var16 = var4.ALLOWED_DICE_SIDES;
    var12 = var4.MAX_DICE_COUNT;
    var _closure1_slot10 = var12;
    var4 = 7;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.getDisableCommunicationDurationOptions;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.MessageSendLocation;
    var _closure1_slot12 = var4;
    var6 = {};
    var5 = var13.BUILT_IN;
    var4 = {};
    var7 = var13.BUILT_IN;
    var4['id'] = var7;
    var19 = 9;
    var7 = var9[var19];
    var7 = var8.bind(var1)(var7);
    var7 = var7.ApplicationCommandSectionType;
    var7 = var7.BUILT_IN;
    var4['type'] = var7;
    var7 = function get name() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.fI5MTa;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var14 = 'name';
    Object.defineProperty(var4, var14, {get: var7, set: var1, enumerable: true});
    var6[4] = var4;
    var5 = var13.FRECENCY;
    var4 = {};
    var7 = var13.FRECENCY;
    var4['id'] = var7;
    var7 = var9[var19];
    var7 = var8.bind(var1)(var7);
    var7 = var7.ApplicationCommandSectionType;
    var7 = var7.BUILT_IN;
    var4['type'] = var7;
    var7 = function get name() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1["+cGVV6"];
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var4, var14, {get: var7, set: var1, enumerable: true});
    var6[4] = var4;
    var7 = 11;
    var4 = var9[var7];
    var4 = var8.bind(var1)(var4);
    var28 = var4.default;
    var5 = new Array(13);
    var29 = var5;
    var27 = 0;
    var4 = arraySpread(var29, var28, var27);
    var10 = {'id': '-1', 'untranslatedName': 'shrug', 'displayName': 'shrug'};
    var14 = 12;
    var15 = var9[var14];
    var15 = var8.bind(var1)(var15);
    var15 = var15.ApplicationCommandType;
    var15 = var15.CHAT;
    var10['type'] = var15;
    var15 = var9[var19];
    var15 = var8.bind(var1)(var15);
    var15 = var15.ApplicationCommandInputType;
    var15 = var15.BUILT_IN_TEXT;
    var10['inputType'] = var15;
    var15 = var13.BUILT_IN;
    var10['applicationId'] = var15;
    var15 = function get untranslatedDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.j5xUSW;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var18 = 'untranslatedDescription';
    Object.defineProperty(var10, var18, {get: var15, set: var1, enumerable: true});
    var17 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.j5xUSW;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var15 = 'displayDescription';
    Object.defineProperty(var10, var15, {get: var17, set: var1, enumerable: true});
    var25 = {'name': 'message', 'displayName': 'message'};
    var17 = var9[var14];
    var17 = var8.bind(var1)(var17);
    var17 = var17.ApplicationCommandOptionType;
    var17 = var17.STRING;
    var25['type'] = var17;
    var24 = function get description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.JewOrS;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var17 = 'description';
    Object.defineProperty(var25, var17, {get: var24, set: var1, enumerable: true});
    var24 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.JewOrS;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var25, var15, {get: var24, set: var1, enumerable: true});
    var24 = new Array(1);
    var24[0] = var25;
    var10['options'] = var24;
    var24 = function execute(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = {};
            var5 = _closure1_slot16;
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
    var10['execute'] = var24;
    var5[3] = var10;
    var4 = var4 + var11;
    var10 = {'id': '-2', 'untranslatedName': 'tableflip', 'displayName': 'tableflip'};
    var24 = var9[var14];
    var24 = var8.bind(var1)(var24);
    var24 = var24.ApplicationCommandType;
    var24 = var24.CHAT;
    var10['type'] = var24;
    var24 = var9[var19];
    var24 = var8.bind(var1)(var24);
    var24 = var24.ApplicationCommandInputType;
    var24 = var24.BUILT_IN_TEXT;
    var10['inputType'] = var24;
    var24 = var13.BUILT_IN;
    var10['applicationId'] = var24;
    var24 = function get untranslatedDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.nrQRce;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var18, {get: var24, set: var1, enumerable: true});
    var24 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.nrQRce;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var15, {get: var24, set: var1, enumerable: true});
    var25 = {'name': 'message', 'displayName': 'message'};
    var24 = var9[var14];
    var24 = var8.bind(var1)(var24);
    var24 = var24.ApplicationCommandOptionType;
    var24 = var24.STRING;
    var25['type'] = var24;
    var24 = function get description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.EI80tw;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var25, var17, {get: var24, set: var1, enumerable: true});
    var24 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.EI80tw;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var25, var15, {get: var24, set: var1, enumerable: true});
    var24 = new Array(1);
    var24[0] = var25;
    var10['options'] = var24;
    var24 = function execute(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = {};
            var5 = _closure1_slot16;
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
    var10['execute'] = var24;
    var5[3] = var10;
    var4 = var4 + var11;
    var10 = {'id': '-3', 'untranslatedName': 'unflip', 'displayName': 'unflip'};
    var24 = var9[var14];
    var24 = var8.bind(var1)(var24);
    var24 = var24.ApplicationCommandType;
    var24 = var24.CHAT;
    var10['type'] = var24;
    var24 = var9[var19];
    var24 = var8.bind(var1)(var24);
    var24 = var24.ApplicationCommandInputType;
    var24 = var24.BUILT_IN_TEXT;
    var10['inputType'] = var24;
    var24 = var13.BUILT_IN;
    var10['applicationId'] = var24;
    var24 = function get untranslatedDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.pnnn8e;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var18, {get: var24, set: var1, enumerable: true});
    var24 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.pnnn8e;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var15, {get: var24, set: var1, enumerable: true});
    var25 = {'name': 'message', 'displayName': 'message'};
    var24 = var9[var14];
    var24 = var8.bind(var1)(var24);
    var24 = var24.ApplicationCommandOptionType;
    var24 = var24.STRING;
    var25['type'] = var24;
    var24 = function get description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
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
    Object.defineProperty(var25, var17, {get: var24, set: var1, enumerable: true});
    var24 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
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
    Object.defineProperty(var25, var15, {get: var24, set: var1, enumerable: true});
    var24 = new Array(1);
    var24[0] = var25;
    var10['options'] = var24;
    var24 = function execute(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = {};
            var5 = _closure1_slot16;
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
    var10['execute'] = var24;
    var5[3] = var10;
    var4 = var4 + var11;
    var10 = {'id': '-4', 'untranslatedName': 'tts', 'displayName': 'tts'};
    var24 = var9[var14];
    var24 = var8.bind(var1)(var24);
    var24 = var24.ApplicationCommandType;
    var24 = var24.CHAT;
    var10['type'] = var24;
    var24 = var9[var19];
    var24 = var8.bind(var1)(var24);
    var24 = var24.ApplicationCommandInputType;
    var24 = var24.BUILT_IN_TEXT;
    var10['inputType'] = var24;
    var24 = var13.BUILT_IN;
    var10['applicationId'] = var24;
    var24 = function get untranslatedDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.jZcIid;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var18, {get: var24, set: var1, enumerable: true});
    var24 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.jZcIid;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var15, {get: var24, set: var1, enumerable: true});
    var25 = {'name': 'message', 'displayName': 'message'};
    var24 = var9[var14];
    var24 = var8.bind(var1)(var24);
    var24 = var24.ApplicationCommandOptionType;
    var24 = var24.STRING;
    var25['type'] = var24;
    var24 = function get description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.k+sw9g;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var25, var17, {get: var24, set: var1, enumerable: true});
    var24 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.k+sw9g;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var25, var15, {get: var24, set: var1, enumerable: true});
    var25['required'] = var22;
    var24 = new Array(1);
    var24[0] = var25;
    var10['options'] = var24;
    var24 = function predicate(arg1) {
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
            var2 = 13;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var3 = var2.EnableTTSCommand;
            var2 = var3.getSetting;
            var1 = var2.bind(var3)();
case 8:
            if(!var1) { _fun0005_ip = 10; continue _fun0005 }
case 11:
            var4 = _closure1_slot5;
            var3 = var4.can;
            var2 = _closure1_slot7;
            var2 = var2.SEND_TTS_MESSAGES;
            var1 = var3.bind(var4)(var2, var5);
case 10:
            return var1;
        }
    };
    var10['predicate'] = var24;
    var24 = function execute(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = {};
            var5 = _closure1_slot16;
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
    var10['execute'] = var24;
    var5[3] = var10;
    var4 = var4 + var11;
    var10 = {'id': '-5', 'untranslatedName': 'me', 'displayName': 'me'};
    var24 = var9[var14];
    var24 = var8.bind(var1)(var24);
    var24 = var24.ApplicationCommandType;
    var24 = var24.CHAT;
    var10['type'] = var24;
    var24 = var9[var19];
    var24 = var8.bind(var1)(var24);
    var24 = var24.ApplicationCommandInputType;
    var24 = var24.BUILT_IN_TEXT;
    var10['inputType'] = var24;
    var24 = var13.BUILT_IN;
    var10['applicationId'] = var24;
    var24 = function get untranslatedDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.UGO8fU;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var18, {get: var24, set: var1, enumerable: true});
    var24 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.UGO8fU;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var15, {get: var24, set: var1, enumerable: true});
    var25 = {'name': 'message', 'displayName': 'message'};
    var24 = var9[var14];
    var24 = var8.bind(var1)(var24);
    var24 = var24.ApplicationCommandOptionType;
    var24 = var24.STRING;
    var25['type'] = var24;
    var24 = function get description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.RWTgNd;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var25, var17, {get: var24, set: var1, enumerable: true});
    var24 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.RWTgNd;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var25, var15, {get: var24, set: var1, enumerable: true});
    var25['required'] = var22;
    var24 = new Array(1);
    var24[0] = var25;
    var10['options'] = var24;
    var24 = function execute(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = {};
            var5 = _closure1_slot16;
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
    var10['execute'] = var24;
    var5[3] = var10;
    var4 = var4 + var11;
    var10 = {'id': '-6', 'untranslatedName': 'spoiler', 'displayName': 'spoiler'};
    var24 = var9[var14];
    var24 = var8.bind(var1)(var24);
    var24 = var24.ApplicationCommandType;
    var24 = var24.CHAT;
    var10['type'] = var24;
    var24 = var9[var19];
    var24 = var8.bind(var1)(var24);
    var24 = var24.ApplicationCommandInputType;
    var24 = var24.BUILT_IN_TEXT;
    var10['inputType'] = var24;
    var24 = var13.BUILT_IN;
    var10['applicationId'] = var24;
    var24 = function get untranslatedDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.v0eDdV;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var18, {get: var24, set: var1, enumerable: true});
    var24 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.v0eDdV;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var15, {get: var24, set: var1, enumerable: true});
    var25 = {'name': 'message', 'displayName': 'message'};
    var24 = var9[var14];
    var24 = var8.bind(var1)(var24);
    var24 = var24.ApplicationCommandOptionType;
    var24 = var24.STRING;
    var25['type'] = var24;
    var24 = function get description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.D13pbc;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var25, var17, {get: var24, set: var1, enumerable: true});
    var24 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.D13pbc;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var25, var15, {get: var24, set: var1, enumerable: true});
    var25['required'] = var22;
    var24 = new Array(1);
    var24[0] = var25;
    var10['options'] = var24;
    var24 = function execute(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var5 = _closure1_slot16;
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
            var2 = _closure1_slot8;
            var3 = var2.bind(var4)(var3);
            var2 = var3.trim;
            var2 = var2.bind(var3)();
            var1['content'] = var2;
            return var1;
        }
    };
    var10['execute'] = var24;
    var5[3] = var10;
    var4 = var4 + var11;
    var10 = {'id': '-7', 'untranslatedName': 'nick', 'displayName': 'nick'};
    var24 = var9[var14];
    var24 = var8.bind(var1)(var24);
    var24 = var24.ApplicationCommandType;
    var24 = var24.CHAT;
    var10['type'] = var24;
    var24 = var9[var19];
    var24 = var8.bind(var1)(var24);
    var24 = var24.ApplicationCommandInputType;
    var24 = var24.BUILT_IN;
    var10['inputType'] = var24;
    var24 = var13.BUILT_IN;
    var10['applicationId'] = var24;
    var24 = function get untranslatedDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.jiHfS/;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var18, {get: var24, set: var1, enumerable: true});
    var24 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.jiHfS/;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var15, {get: var24, set: var1, enumerable: true});
    var24 = {'name': 'new_nick', 'displayName': 'new_nick'};
    var25 = var9[var14];
    var25 = var8.bind(var1)(var25);
    var25 = var25.ApplicationCommandOptionType;
    var25 = var25.STRING;
    var24['type'] = var25;
    var25 = function get description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.WTSzVu;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var24, var17, {get: var25, set: var1, enumerable: true});
    var25 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.WTSzVu;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var24, var15, {get: var25, set: var1, enumerable: true});
    var24['maxLength'] = var23;
    var23 = new Array(1);
    var23[0] = var24;
    var10['options'] = var23;
    var23 = function predicate(arg1) {
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
            var5 = _closure1_slot5;
            var4 = var5.can;
            var2 = _closure1_slot7;
            var2 = var2.CHANGE_NICKNAME;
            var2 = var4.bind(var5)(var2, var6);
            if(var2) { _fun0009_ip = 16; continue _fun0009 }
case 17:
            var5 = _closure1_slot5;
            var4 = var5.can;
            var3 = _closure1_slot7;
            var3 = var3.MANAGE_NICKNAMES;
            var2 = var4.bind(var5)(var3, var6);
case 16:
            var1 = var2;
case 15:
            return var1;
        }
    };
    var10['predicate'] = var23;
    var23 = function execute(arg1, arg2) {
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
            var7 = _closure1_slot16;
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
            var4 = 14;
            var4 = var9[var4];
            var5 = var5.bind(var8)(var4);
            var4 = var5.changeNickname;
            var3 = var3.id;
            var2 = var2.id;
            var1 = _closure1_slot9;
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
    var10['execute'] = var23;
    var5[3] = var10;
    var4 = var4 + var11;
    var10 = {'id': '-10', 'untranslatedName': 'thread', 'displayName': 'thread'};
    var23 = var9[var14];
    var23 = var8.bind(var1)(var23);
    var23 = var23.ApplicationCommandType;
    var23 = var23.CHAT;
    var10['type'] = var23;
    var23 = var9[var19];
    var23 = var8.bind(var1)(var23);
    var23 = var23.ApplicationCommandInputType;
    var23 = var23.BUILT_IN;
    var10['inputType'] = var23;
    var23 = var13.BUILT_IN;
    var10['applicationId'] = var23;
    var23 = function get untranslatedDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
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
    Object.defineProperty(var10, var18, {get: var23, set: var1, enumerable: true});
    var23 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
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
    Object.defineProperty(var10, var15, {get: var23, set: var1, enumerable: true});
    var23 = {'name': 'name', 'displayName': 'name'};
    var24 = var9[var14];
    var24 = var8.bind(var1)(var24);
    var24 = var24.ApplicationCommandOptionType;
    var24 = var24.STRING;
    var23['type'] = var24;
    var24 = function get description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.TffOfY;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var23, var17, {get: var24, set: var1, enumerable: true});
    var24 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.TffOfY;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var23, var15, {get: var24, set: var1, enumerable: true});
    var23['required'] = var22;
    var23['maxLength'] = var20;
    var20 = new Array(2);
    var20[0] = var23;
    var24 = {'name': 'message', 'displayName': 'message'};
    var23 = var9[var14];
    var23 = var8.bind(var1)(var23);
    var23 = var23.ApplicationCommandOptionType;
    var23 = var23.STRING;
    var24['type'] = var23;
    var23 = function get description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.QXfSfU;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var24, var17, {get: var23, set: var1, enumerable: true});
    var23 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.QXfSfU;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var24, var15, {get: var23, set: var1, enumerable: true});
    var25 = function get maxLength() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 15;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.getMaxMessageLength;
        var1 = var1.bind(var2)();
        return var1;
    };
    var23 = 'maxLength';
    Object.defineProperty(var24, var23, {get: var25, set: var1, enumerable: true});
    var24['required'] = var22;
    var20[1] = var24;
    var10['options'] = var20;
    var20 = function predicate(arg1) {
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
            var2 = 16;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.computeCanStartPublicThread;
            var1 = var2.bind(var3)(var4);
case 25:
            return var1;
        }
    };
    var10['predicate'] = var20;
    var20 = function* (arg1, arg2) {
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
                var6 = _closure1_slot16;
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
                var6 = _closure1_slot16;
                var3 = 'message';
                var3 = var6.bind(var4)(var7, var3);
                var6 = var13 != var3;
                if(!var6) { _fun0012_ip = 34; continue _fun0012 }
case 35:
                var11 = var3;
case 34:
                var6 = _closure1_slot0;
                var14 = _closure1_slot2;
                var3 = 17;
                var3 = var14[var3];
                var9 = var6.bind(var4)(var3);
                var8 = var9.createThread;
                var3 = 18;
                var3 = var14[var3];
                var3 = var6.bind(var4)(var3);
                var3 = var3.ChannelTypes;
                var17 = var3.PUBLIC_THREAD;
                var3 = 19;
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
                var6 = 20;
                var6 = var12[var6];
                var10 = var7.bind(var4)(var6);
                var9 = var10.sendMessage;
                var8 = var3.id;
                var6 = 21;
                var6 = var12[var6];
                var7 = var7.bind(var4)(var6);
                var6 = var7.parse;
                var18 = var6.bind(var7)(var3, var11);
                var6 = {};
                var5 = _closure1_slot12;
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
    var20 = var21.bind(var1)(var20);
    var _closure1_slot13 = var20;
    var20 = function() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var10['execute'] = var20;
    var5[3] = var10;
    var4 = var4 + var11;
    var10 = {'id': '-11', 'untranslatedName': 'kick', 'displayName': 'kick'};
    var20 = var9[var14];
    var20 = var8.bind(var1)(var20);
    var20 = var20.ApplicationCommandType;
    var20 = var20.CHAT;
    var10['type'] = var20;
    var20 = var9[var19];
    var20 = var8.bind(var1)(var20);
    var20 = var20.ApplicationCommandInputType;
    var20 = var20.BUILT_IN;
    var10['inputType'] = var20;
    var20 = var13.BUILT_IN;
    var10['applicationId'] = var20;
    var20 = function get untranslatedDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1["03N0UL"];
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var18, {get: var20, set: var1, enumerable: true});
    var20 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1["03N0UL"];
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var15, {get: var20, set: var1, enumerable: true});
    var21 = {'name': 'user', 'displayName': 'user'};
    var20 = var9[var14];
    var20 = var8.bind(var1)(var20);
    var20 = var20.ApplicationCommandOptionType;
    var20 = var20.USER;
    var21['type'] = var20;
    var20 = function get description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.gF8IpD;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var21, var17, {get: var20, set: var1, enumerable: true});
    var20 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.gF8IpD;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var21, var15, {get: var20, set: var1, enumerable: true});
    var21['required'] = var22;
    var20 = new Array(2);
    var20[0] = var21;
    var21 = {'name': 'reason', 'displayName': 'reason'};
    var24 = var9[var14];
    var24 = var8.bind(var1)(var24);
    var24 = var24.ApplicationCommandOptionType;
    var24 = var24.STRING;
    var21['type'] = var24;
    var24 = function get description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.QWldgj;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var21, var17, {get: var24, set: var1, enumerable: true});
    var24 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.QWldgj;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var21, var15, {get: var24, set: var1, enumerable: true});
    var24 = false;
    var21['required'] = var24;
    var20[1] = var21;
    var10['options'] = var20;
    var20 = function predicate(arg1) {
        var1 = arg1;
        var4 = var1.guild;
        var3 = _closure1_slot5;
        var2 = var3.can;
        var1 = _closure1_slot7;
        var1 = var1.KICK_MEMBERS;
        var1 = var2.bind(var3)(var1, var4);
        return var1;
    };
    var10['predicate'] = var20;
    var20 = function execute(arg1, arg2) {
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
            var3 = function _handler() {
                var4 = undefined;
                var1 = undefined;
                var3 = _closure1_slot3;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0014_ip = 40; continue _fun0014 }
case 41:
                            var3 = _closure2_slot1;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0014_ip = 42; continue _fun0014 }
case 43:
                            var3 = _closure2_slot2;
                            if(!(var2 != var3)) { _fun0014_ip = 42; continue _fun0014 }
case 12:
                            var7 = _closure1_slot6;
                            var6 = var7.getUser;
                            var5 = _closure2_slot3;
                            var12 = var6.bind(var7)(var5);
                            if(!(var2 != var12)) { _fun0014_ip = 30; continue _fun0014 }
case 44:
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var5 = 22;
                            var5 = var7[var5];
                            var13 = undefined;
                            var8 = var6.bind(var13)(var5);
                            var7 = var8.kickUser;
                            var5 = _closure2_slot1;
                            var6 = var5.id;
                            var5 = _closure2_slot3;
                            var11 = _closure1_slot16;
                            var10 = _closure2_slot0;
                            var9 = 'reason';
                            var9 = var11.bind(var13)(var10, var9);
                            var10 = var2 != var9;
                            var2 = '';
                            if(!var10) { _fun0014_ip = 45; continue _fun0014 }
case 46:
                            var2 = var9;
case 45:
                            var2 = var7.bind(var8)(var6, var5, var2);
                            SaveGenerator(address=150);
case 47:
                            return var2;
case 48:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0014_ip = 38; continue _fun0014 }
case 49:
                            var11 = _closure1_slot1;
                            var14 = _closure1_slot2;
                            var5 = 20;
                            var5 = var14[var5];
                            var6 = var11.bind(var13)(var5);
                            var5 = var6.sendBotMessage;
                            var4 = _closure2_slot2;
                            var4 = var4.id;
                            var7 = _closure1_slot0;
                            var3 = 10;
                            var8 = var14[var3];
                            var8 = var7.bind(var13)(var8);
                            var9 = var8.intl;
                            var8 = var9.formatToPlainString;
                            var3 = var14[var3];
                            var3 = var7.bind(var13)(var3);
                            var3 = var3.t;
                            var7 = var3["9wzHDV"];
                            var3 = {};
                            var10 = 23;
                            var10 = var14[var10];
                            var11 = var11.bind(var13)(var10);
                            var10 = var11.getUserTag;
                            var10 = var10.bind(var11)(var12);
                            var3['user'] = var10;
                            var3 = var8.bind(var9)(var7, var3);
                            var3 = var5.bind(var6)(var4, var3);
case 42:
                            var3 = undefined;
                            return var3;
case 38:
                            return var2;
case 30:
                            var2 = global;
                            var2 = var2.Error;
                            var3 = var2.prototype;
                            var3 = Object.create(var3, {constructor: {value: var2}});
                            var18 = var3;
                            var2 = new var18[var2](var17);
                            var2 = var2 instanceof Object ? var2 : var3;
                            throw var2;
case 40:
                            return var1;
                        }
                    };
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                _closure2_slot4 = var4;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var _closure2_slot4 = var3;
            var6 = null;
            if(!(var6 != var9)) { _fun0013_ip = 50; continue _fun0013 }
case 51:
            if(!(var6 != var4)) { _fun0013_ip = 50; continue _fun0013 }
case 22:
            var7 = _closure1_slot16;
            var5 = 'user';
            var5 = var7.bind(var1)(var8, var5);
            var6 = var6 != var5;
            var8 = '';
            if(!var6) { _fun0013_ip = 52; continue _fun0013 }
case 53:
            var8 = var5;
case 52:
            _closure2_slot3 = var8;
            var7 = _closure1_slot5;
            var6 = var7.canManageUser;
            var5 = _closure1_slot7;
            var5 = var5.KICK_MEMBERS;
            var5 = var6.bind(var7)(var5, var8, var9);
            if(var5) { _fun0013_ip = 54; continue _fun0013 }
case 55:
            var6 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 20;
            var5 = var10[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.sendBotMessage;
            var4 = var4.id;
            var9 = _closure1_slot0;
            var3 = 10;
            var7 = var10[var3];
            var7 = var9.bind(var1)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var3 = var10[var3];
            var3 = var9.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3["6RIwPI"];
            var3 = var7.bind(var8)(var3);
            var3 = var5.bind(var6)(var4, var3);
            _fun0013_ip = 50; continue _fun0013;
case 54:
            var3 = function handler() {
                var1 = undefined;
                var4 = _closure2_slot4;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var4 = var3.bind(var1)();
            var3 = var4.catch;
            var2 = function() {
                var4 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 20;
                var3 = var9[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.sendBotMessage;
                var3 = _closure2_slot2;
                var3 = var3.id;
                var8 = _closure1_slot0;
                var2 = 10;
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
case 50:
            return var1;
        }
    };
    var10['execute'] = var20;
    var5[3] = var10;
    var4 = var4 + var11;
    var10 = {'id': '-12', 'untranslatedName': 'ban', 'displayName': 'ban'};
    var20 = var9[var14];
    var20 = var8.bind(var1)(var20);
    var20 = var20.ApplicationCommandType;
    var20 = var20.CHAT;
    var10['type'] = var20;
    var20 = var9[var19];
    var20 = var8.bind(var1)(var20);
    var20 = var20.ApplicationCommandInputType;
    var20 = var20.BUILT_IN;
    var10['inputType'] = var20;
    var20 = var13.BUILT_IN;
    var10['applicationId'] = var20;
    var20 = function get untranslatedDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.HWuskv;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var18, {get: var20, set: var1, enumerable: true});
    var20 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.HWuskv;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var15, {get: var20, set: var1, enumerable: true});
    var21 = {'name': 'user', 'displayName': 'user'};
    var20 = var9[var14];
    var20 = var8.bind(var1)(var20);
    var20 = var20.ApplicationCommandOptionType;
    var20 = var20.USER;
    var21['type'] = var20;
    var20 = function get description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.z3XPjr;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var21, var17, {get: var20, set: var1, enumerable: true});
    var20 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.z3XPjr;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var21, var15, {get: var20, set: var1, enumerable: true});
    var21['required'] = var22;
    var20 = new Array(3);
    var20[0] = var21;
    var21 = {'name': 'delete_messages', 'displayName': 'delete_messages'};
    var25 = var9[var14];
    var25 = var8.bind(var1)(var25);
    var25 = var25.ApplicationCommandOptionType;
    var25 = var25.INTEGER;
    var21['type'] = var25;
    var25 = function get description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.smrvA6;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var21, var17, {get: var25, set: var1, enumerable: true});
    var25 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.smrvA6;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var21, var15, {get: var25, set: var1, enumerable: true});
    var21['required'] = var22;
    var25 = function get choices() {
        var2 = {};
        var10 = _closure1_slot0;
        var6 = _closure1_slot2;
        var7 = 10;
        var1 = var6[var7];
        var5 = undefined;
        var1 = var10.bind(var5)(var1);
        var8 = var1.intl;
        var4 = var8.string;
        var1 = var6[var7];
        var1 = var10.bind(var5)(var1);
        var1 = var1.t;
        var1 = var1["4obaMS"];
        var1 = var4.bind(var8)(var1);
        var2['name'] = var1;
        var1 = var6[var7];
        var1 = var10.bind(var5)(var1);
        var8 = var1.intl;
        var4 = var8.string;
        var1 = var6[var7];
        var1 = var10.bind(var5)(var1);
        var1 = var1.t;
        var1 = var1["4obaMS"];
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
        var4 = var4.RKpitY;
        var4 = var8.bind(var9)(var4);
        var2['name'] = var4;
        var4 = var6[var7];
        var4 = var10.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var6[var7];
        var4 = var10.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.RKpitY;
        var4 = var8.bind(var9)(var4);
        var2['displayName'] = var4;
        var4 = _closure1_slot1;
        var3 = 24;
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
        var8 = var8["8WfJZ8"];
        var8 = var9.bind(var11)(var8);
        var2['name'] = var8;
        var8 = var6[var7];
        var8 = var10.bind(var5)(var8);
        var11 = var8.intl;
        var9 = var11.string;
        var8 = var6[var7];
        var8 = var10.bind(var5)(var8);
        var8 = var8.t;
        var8 = var8["8WfJZ8"];
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
        var8 = var8.XuVkkD;
        var8 = var9.bind(var11)(var8);
        var2['name'] = var8;
        var8 = var6[var7];
        var8 = var10.bind(var5)(var8);
        var11 = var8.intl;
        var9 = var11.string;
        var8 = var6[var7];
        var8 = var10.bind(var5)(var8);
        var8 = var8.t;
        var8 = var8.XuVkkD;
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
        var8 = var8.gMcDS+;
        var8 = var9.bind(var11)(var8);
        var2['name'] = var8;
        var8 = var6[var7];
        var8 = var10.bind(var5)(var8);
        var11 = var8.intl;
        var9 = var11.string;
        var8 = var6[var7];
        var8 = var10.bind(var5)(var8);
        var8 = var8.t;
        var8 = var8.gMcDS+;
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
        var8 = var8.FA7IUk;
        var8 = var9.bind(var11)(var8);
        var2['name'] = var8;
        var8 = var6[var7];
        var8 = var10.bind(var5)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var7 = var6[var7];
        var7 = var10.bind(var5)(var7);
        var7 = var7.t;
        var7 = var7.FA7IUk;
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
    var26 = 'choices';
    Object.defineProperty(var21, var26, {get: var25, set: var1, enumerable: true});
    var20[1] = var21;
    var21 = {'name': 'reason', 'displayName': 'reason'};
    var25 = var9[var14];
    var25 = var8.bind(var1)(var25);
    var25 = var25.ApplicationCommandOptionType;
    var25 = var25.STRING;
    var21['type'] = var25;
    var25 = function get description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.dG4noU;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var21, var17, {get: var25, set: var1, enumerable: true});
    var25 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.dG4noU;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var21, var15, {get: var25, set: var1, enumerable: true});
    var21['required'] = var24;
    var20[2] = var21;
    var10['options'] = var20;
    var20 = function predicate(arg1) {
        var1 = arg1;
        var4 = var1.guild;
        var3 = _closure1_slot5;
        var2 = var3.can;
        var1 = _closure1_slot7;
        var1 = var1.BAN_MEMBERS;
        var1 = var2.bind(var3)(var1, var4);
        return var1;
    };
    var10['predicate'] = var20;
    var20 = function execute(arg1, arg2) {
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
            var3 = function _handler2() {
                var4 = undefined;
                var1 = undefined;
                var3 = _closure1_slot3;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0016_ip = 56; continue _fun0016 }
case 41:
                            var2 = _closure2_slot1;
                            var12 = null;
                            if(!(var12 != var2)) { _fun0016_ip = 57; continue _fun0016 }
case 43:
                            var2 = _closure2_slot2;
                            if(!(var12 != var2)) { _fun0016_ip = 57; continue _fun0016 }
case 12:
                            var2 = _closure2_slot3;
                            var7 = '';
                            if(!(var7 !== var2)) { _fun0016_ip = 58; continue _fun0016 }
case 59:
                            var4 = _closure1_slot16;
                            var3 = _closure2_slot0;
                            var14 = undefined;
                            var2 = 'delete_messages';
                            var2 = var4.bind(var14)(var3, var2);
                            var3 = var12 != var2;
                            var6 = 0;
                            if(!var3) { _fun0016_ip = 53; continue _fun0016 }
case 60:
                            var6 = var2;
case 53:
                            var4 = _closure1_slot16;
                            var3 = _closure2_slot0;
                            var2 = 'reason';
                            var2 = var4.bind(var14)(var3, var2);
                            var3 = var12 != var2;
                            if(!var3) { _fun0016_ip = 61; continue _fun0016 }
case 62:
                            var7 = var2;
case 61:
                            var4 = _closure1_slot6;
                            var3 = var4.getUser;
                            var2 = _closure2_slot3;
                            var13 = var3.bind(var4)(var2);
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 22;
                            var2 = var4[var2];
                            var5 = var3.bind(var14)(var2);
                            var4 = var5.banUser;
                            var2 = _closure2_slot1;
                            var19 = var2.id;
                            var18 = _closure2_slot3;
                            var20 = var5;
                            var17 = var6;
                            var16 = var7;
                            var2 = var20[var4](var19, var18, var17, var16, var15);
                            SaveGenerator(address=192);
case 63:
                            return var2;
case 64:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(var3) { _fun0016_ip = 65; continue _fun0016 }
case 66:
                            var4 = _closure1_slot1;
                            var15 = _closure1_slot2;
                            var3 = 20;
                            var3 = var15[var3];
                            var6 = var4.bind(var14)(var3);
                            var5 = var6.sendBotMessage;
                            var3 = _closure2_slot2;
                            var4 = var3.id;
                            var7 = _closure1_slot0;
                            var3 = 10;
                            var8 = var15[var3];
                            var8 = var7.bind(var14)(var8);
                            var9 = var8.intl;
                            var8 = var9.formatToPlainString;
                            var3 = var15[var3];
                            var3 = var7.bind(var14)(var3);
                            var3 = var3.t;
                            var7 = var3.YflWdM;
                            var3 = {};
                            if(!(var12 == var13)) { _fun0016_ip = 67; continue _fun0016 }
case 68:
                            var10 = _closure2_slot3;
                            _fun0016_ip = 69; continue _fun0016;
case 67:
                            var12 = _closure1_slot1;
                            var15 = _closure1_slot2;
                            var11 = 23;
                            var11 = var15[var11];
                            var12 = var12.bind(var14)(var11);
                            var11 = var12.getUserTag;
                            var10 = var11.bind(var12)(var13);
case 69:
                            var3['user'] = var10;
                            var3 = var8.bind(var9)(var7, var3);
                            var3 = var5.bind(var6)(var4, var3);
case 57:
                            var3 = undefined;
                            return var3;
case 65:
                            return var2;
case 58:
                            var2 = global;
                            var2 = var2.Error;
                            var3 = var2.prototype;
                            var3 = Object.create(var3, {constructor: {value: var2}});
                            var20 = var3;
                            var2 = new var20[var2](var19);
                            var2 = var2 instanceof Object ? var2 : var3;
                            throw var2;
case 56:
                            return var1;
                        }
                    };
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                _closure2_slot4 = var4;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var _closure2_slot4 = var3;
            var6 = null;
            if(!(var6 != var9)) { _fun0015_ip = 50; continue _fun0015 }
case 51:
            if(!(var6 != var4)) { _fun0015_ip = 50; continue _fun0015 }
case 22:
            var7 = _closure1_slot16;
            var5 = 'user';
            var5 = var7.bind(var1)(var8, var5);
            var6 = var6 != var5;
            var8 = '';
            if(!var6) { _fun0015_ip = 52; continue _fun0015 }
case 53:
            var8 = var5;
case 52:
            _closure2_slot3 = var8;
            var7 = _closure1_slot5;
            var6 = var7.canManageUser;
            var5 = _closure1_slot7;
            var5 = var5.BAN_MEMBERS;
            var5 = var6.bind(var7)(var5, var8, var9);
            if(var5) { _fun0015_ip = 54; continue _fun0015 }
case 55:
            var6 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 20;
            var5 = var10[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.sendBotMessage;
            var4 = var4.id;
            var9 = _closure1_slot0;
            var3 = 10;
            var7 = var10[var3];
            var7 = var9.bind(var1)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var3 = var10[var3];
            var3 = var9.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3.R27LJl;
            var3 = var7.bind(var8)(var3);
            var3 = var5.bind(var6)(var4, var3);
            _fun0015_ip = 50; continue _fun0015;
case 54:
            var3 = function handler() {
                var1 = undefined;
                var4 = _closure2_slot4;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var4 = var3.bind(var1)();
            var3 = var4.catch;
            var2 = function() {
                var4 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 20;
                var3 = var9[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.sendBotMessage;
                var3 = _closure2_slot2;
                var3 = var3.id;
                var8 = _closure1_slot0;
                var2 = 10;
                var6 = var9[var2];
                var6 = var8.bind(var1)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var2 = var9[var2];
                var2 = var8.bind(var1)(var2);
                var2 = var2.t;
                var2 = var2.w2J6Qs;
                var2 = var6.bind(var7)(var2);
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
case 50:
            return var1;
        }
    };
    var10['execute'] = var20;
    var5[3] = var10;
    var4 = var4 + var11;
    var10 = {'id': '-13', 'untranslatedName': 'timeout', 'displayName': 'timeout'};
    var20 = var9[var14];
    var20 = var8.bind(var1)(var20);
    var20 = var20.ApplicationCommandType;
    var20 = var20.CHAT;
    var10['type'] = var20;
    var20 = var9[var19];
    var20 = var8.bind(var1)(var20);
    var20 = var20.ApplicationCommandInputType;
    var20 = var20.BUILT_IN;
    var10['inputType'] = var20;
    var20 = var13.BUILT_IN;
    var10['applicationId'] = var20;
    var20 = function get untranslatedDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.KkPcep;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var18, {get: var20, set: var1, enumerable: true});
    var20 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.KkPcep;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var15, {get: var20, set: var1, enumerable: true});
    var21 = {'name': 'user', 'displayName': 'user'};
    var20 = var9[var14];
    var20 = var8.bind(var1)(var20);
    var20 = var20.ApplicationCommandOptionType;
    var20 = var20.USER;
    var21['type'] = var20;
    var20 = function get description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.UU3VRm;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var21, var17, {get: var20, set: var1, enumerable: true});
    var20 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.UU3VRm;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var21, var15, {get: var20, set: var1, enumerable: true});
    var21['required'] = var22;
    var20 = new Array(3);
    var20[0] = var21;
    var21 = {'name': 'duration', 'displayName': 'duration'};
    var25 = var9[var14];
    var25 = var8.bind(var1)(var25);
    var25 = var25.ApplicationCommandOptionType;
    var25 = var25.INTEGER;
    var21['type'] = var25;
    var25 = function get description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.SNqN1e;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var21, var17, {get: var25, set: var1, enumerable: true});
    var25 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.SNqN1e;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var21, var15, {get: var25, set: var1, enumerable: true});
    var21['required'] = var22;
    var25 = function get choices() {
        var2 = _closure1_slot11;
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
            var1[2] = var4;
            var3 = var2.label;
            var2 = 'displayName';
            var1[1] = var3;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var21, var26, {get: var25, set: var1, enumerable: true});
    var20[1] = var21;
    var21 = {'name': 'reason', 'displayName': 'reason'};
    var25 = var9[var14];
    var25 = var8.bind(var1)(var25);
    var25 = var25.ApplicationCommandOptionType;
    var25 = var25.STRING;
    var21['type'] = var25;
    var25 = function get description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.akHScA;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var21, var17, {get: var25, set: var1, enumerable: true});
    var25 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.akHScA;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var21, var15, {get: var25, set: var1, enumerable: true});
    var21['required'] = var24;
    var20[2] = var21;
    var10['options'] = var20;
    var20 = function predicate(arg1) {
        var1 = arg1;
        var4 = var1.guild;
        var3 = _closure1_slot5;
        var2 = var3.can;
        var1 = _closure1_slot7;
        var1 = var1.MODERATE_MEMBERS;
        var1 = var2.bind(var3)(var1, var4);
        return var1;
    };
    var10['predicate'] = var20;
    var20 = function execute(arg1, arg2) {
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
            var3 = function _handler3() {
                var4 = undefined;
                var1 = undefined;
                var3 = _closure1_slot3;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0018_ip = 70; continue _fun0018 }
case 41:
                            var3 = _closure2_slot1;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0018_ip = 56; continue _fun0018 }
case 43:
                            var3 = _closure2_slot2;
                            if(!(var2 != var3)) { _fun0018_ip = 56; continue _fun0018 }
case 12:
                            var7 = _closure1_slot16;
                            var6 = _closure2_slot0;
                            var14 = undefined;
                            var5 = 'duration';
                            var5 = var7.bind(var14)(var6, var5);
                            var6 = var2 != var5;
                            var7 = '';
                            var10 = var7;
                            if(!var6) { _fun0018_ip = 11; continue _fun0018 }
case 8:
                            var10 = var5;
case 11:
                            var8 = _closure1_slot16;
                            var6 = _closure2_slot0;
                            var5 = 'reason';
                            var5 = var8.bind(var14)(var6, var5);
                            var6 = var2 != var5;
                            if(!var6) { _fun0018_ip = 71; continue _fun0018 }
case 72:
                            var7 = var5;
case 71:
                            var8 = _closure1_slot6;
                            var6 = var8.getUser;
                            var5 = _closure2_slot3;
                            var13 = var6.bind(var8)(var5);
                            if(!(var2 != var13)) { _fun0018_ip = 73; continue _fun0018 }
case 74:
                            var9 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var2 = 22;
                            var2 = var11[var2];
                            var6 = var9.bind(var14)(var2);
                            var5 = var6.setCommunicationDisabledUntil;
                            var2 = {};
                            var8 = _closure2_slot1;
                            var8 = var8.id;
                            var2['guildId'] = var8;
                            var8 = _closure2_slot3;
                            var2['userId'] = var8;
                            var8 = 26;
                            var8 = var11[var8];
                            var8 = var9.bind(var14)(var8);
                            var11 = var8.bind(var14)();
                            var9 = var11.add;
                            var8 = 's';
                            var9 = var9.bind(var11)(var10, var8);
                            var8 = var9.toISOString;
                            var8 = var8.bind(var9)();
                            var2['communicationDisabledUntilTimestamp'] = var8;
                            var2['duration'] = var10;
                            var2['reason'] = var7;
                            var2 = var5.bind(var6)(var2);
                            SaveGenerator(address=244);
case 75:
                            return var2;
case 76:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0018_ip = 77; continue _fun0018 }
case 78:
                            var12 = _closure1_slot1;
                            var15 = _closure1_slot2;
                            var5 = 20;
                            var5 = var15[var5];
                            var6 = var12.bind(var14)(var5);
                            var5 = var6.sendBotMessage;
                            var4 = _closure2_slot2;
                            var4 = var4.id;
                            var7 = _closure1_slot0;
                            var3 = 10;
                            var8 = var15[var3];
                            var8 = var7.bind(var14)(var8);
                            var9 = var8.intl;
                            var8 = var9.formatToPlainString;
                            var3 = var15[var3];
                            var3 = var7.bind(var14)(var3);
                            var3 = var3.t;
                            var7 = var3.BbRV6o;
                            var3 = {};
                            var11 = 23;
                            var11 = var15[var11];
                            var12 = var12.bind(var14)(var11);
                            var11 = var12.getUserTag;
                            var11 = var11.bind(var12)(var13);
                            var3['user'] = var11;
                            var3['duration'] = var10;
                            var3 = var8.bind(var9)(var7, var3);
                            var3 = var5.bind(var6)(var4, var3);
case 56:
                            var3 = undefined;
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
case 70:
                            return var1;
                        }
                    };
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                _closure2_slot4 = var4;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var _closure2_slot4 = var3;
            var3 = null;
            if(!(var3 != var5)) { _fun0017_ip = 79; continue _fun0017 }
case 51:
            if(!(var3 != var4)) { _fun0017_ip = 79; continue _fun0017 }
case 22:
            var7 = _closure1_slot16;
            var6 = 'user';
            var8 = var7.bind(var1)(var8, var6);
            _closure2_slot3 = var8;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 25;
            var6 = var9[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.canToggleCommunicationDisableOnUser;
            var5 = var5.id;
            var5 = var6.bind(var7)(var5, var8);
            if(var5) { _fun0017_ip = 80; continue _fun0017 }
case 81:
            var6 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 20;
            var5 = var10[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.sendBotMessage;
            var4 = var4.id;
            var9 = _closure1_slot0;
            var3 = 10;
            var7 = var10[var3];
            var7 = var9.bind(var1)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var3 = var10[var3];
            var3 = var9.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3.F5pqSf;
            var3 = var7.bind(var8)(var3);
            var3 = var5.bind(var6)(var4, var3);
            _fun0017_ip = 79; continue _fun0017;
case 80:
            var3 = function handler() {
                var1 = undefined;
                var4 = _closure2_slot4;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var4 = var3.bind(var1)();
            var3 = var4.catch;
            var2 = function() {
                var4 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 20;
                var3 = var9[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.sendBotMessage;
                var3 = _closure2_slot2;
                var3 = var3.id;
                var8 = _closure1_slot0;
                var2 = 10;
                var6 = var9[var2];
                var6 = var8.bind(var1)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var2 = var9[var2];
                var2 = var8.bind(var1)(var2);
                var2 = var2.t;
                var2 = var2["+mWyVq"];
                var2 = var6.bind(var7)(var2);
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
case 79:
            return var1;
        }
    };
    var10['execute'] = var20;
    var5[3] = var10;
    var4 = var4 + var11;
    var10 = {'id': '-14', 'untranslatedName': 'msg', 'displayName': 'msg'};
    var20 = var9[var14];
    var20 = var8.bind(var1)(var20);
    var20 = var20.ApplicationCommandType;
    var20 = var20.CHAT;
    var10['type'] = var20;
    var20 = var9[var19];
    var20 = var8.bind(var1)(var20);
    var20 = var20.ApplicationCommandInputType;
    var20 = var20.BUILT_IN;
    var10['inputType'] = var20;
    var20 = var13.BUILT_IN;
    var10['applicationId'] = var20;
    var20 = function get untranslatedDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.Dg8XZw;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var18, {get: var20, set: var1, enumerable: true});
    var20 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.Dg8XZw;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var15, {get: var20, set: var1, enumerable: true});
    var21 = {'name': 'user', 'displayName': 'user'};
    var20 = var9[var14];
    var20 = var8.bind(var1)(var20);
    var20 = var20.ApplicationCommandOptionType;
    var20 = var20.USER;
    var21['type'] = var20;
    var20 = function get description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.KmVq/D;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var21, var17, {get: var20, set: var1, enumerable: true});
    var20 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.KmVq/D;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var21, var15, {get: var20, set: var1, enumerable: true});
    var21['required'] = var22;
    var20 = new Array(2);
    var20[0] = var21;
    var21 = {'name': 'message', 'displayName': 'message'};
    var24 = var9[var14];
    var24 = var8.bind(var1)(var24);
    var24 = var24.ApplicationCommandOptionType;
    var24 = var24.STRING;
    var21['type'] = var24;
    var24 = function get description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.oGUuOJ;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var21, var17, {get: var24, set: var1, enumerable: true});
    var24 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.oGUuOJ;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var21, var15, {get: var24, set: var1, enumerable: true});
    var21['required'] = var22;
    var22 = function get maxLength() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 15;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.getMaxMessageLength;
        var1 = var1.bind(var2)();
        return var1;
    };
    Object.defineProperty(var21, var23, {get: var22, set: var1, enumerable: true});
    var20[1] = var21;
    var10['options'] = var20;
    var20 = function execute(arg1, arg2) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var6 = arg1;
            var1 = arg2;
            var4 = var1.channel;
            var _closure2_slot0 = var4;
            var1 = undefined;
            var _closure2_slot1 = var1;
            var _closure2_slot2 = var1;
            var3 = function _handler4() {
                var4 = undefined;
                var1 = undefined;
                var3 = _closure1_slot3;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0020_ip = 82; continue _fun0020 }
case 83:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 27;
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
                                var4 = _closure1_slot4;
                                var3 = var4.getChannel;
                                var1 = arg1;
                                var9 = var3.bind(var4)(var1);
                                var4 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var1 = 28;
                                var3 = var8[var1];
                                var1 = undefined;
                                var6 = var4.bind(var1)(var3);
                                var3 = null;
                                var5 = var3 != var9;
                                var3 = 'Newly created PrivateChannel is null';
                                var3 = var6.bind(var1)(var5, var3);
                                var3 = 20;
                                var3 = var8[var3];
                                var7 = var4.bind(var1)(var3);
                                var6 = var7.sendMessage;
                                var5 = var9.id;
                                var3 = 21;
                                var3 = var8[var3];
                                var8 = var4.bind(var1)(var3);
                                var4 = var8.parse;
                                var3 = _closure2_slot2;
                                var12 = var4.bind(var8)(var9, var3);
                                var3 = {};
                                var2 = _closure1_slot12;
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
case 84:
                            return var2;
case 85:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0020_ip = 86; continue _fun0020 }
case 87:
                            return var3;
case 86:
                            return var2;
case 82:
                            return var1;
                        }
                    };
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                _closure2_slot3 = var4;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var _closure2_slot3 = var3;
            var3 = null;
            if(!(var3 != var4)) { _fun0019_ip = 88; continue _fun0019 }
case 89:
            var5 = _closure1_slot16;
            var4 = 'user';
            var4 = var5.bind(var1)(var6, var4);
            _closure2_slot1 = var4;
            var4 = 'message';
            var4 = var5.bind(var1)(var6, var4);
            var5 = var3 != var4;
            var3 = '';
            if(!var5) { _fun0019_ip = 86; continue _fun0019 }
case 87:
            var3 = var4;
case 86:
            _closure2_slot2 = var3;
            var3 = function handler() {
                var1 = undefined;
                var4 = _closure2_slot3;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var4 = var3.bind(var1)();
            var3 = var4.catch;
            var2 = function() {
                var4 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 20;
                var3 = var9[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.sendBotMessage;
                var3 = _closure2_slot0;
                var3 = var3.id;
                var8 = _closure1_slot0;
                var2 = 10;
                var6 = var9[var2];
                var6 = var8.bind(var1)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var2 = var9[var2];
                var2 = var8.bind(var1)(var2);
                var2 = var2.t;
                var2 = var2["3XaE95"];
                var2 = var6.bind(var7)(var2);
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
case 88:
            return var1;
        }
    };
    var10['execute'] = var20;
    var5[3] = var10;
    var10 = {'id': '-18', 'untranslatedName': 'roll-dice', 'displayName': 'roll-dice'};
    var20 = var9[var14];
    var20 = var8.bind(var1)(var20);
    var20 = var20.ApplicationCommandType;
    var20 = var20.CHAT;
    var10['type'] = var20;
    var19 = var9[var19];
    var19 = var8.bind(var1)(var19);
    var19 = var19.ApplicationCommandInputType;
    var19 = var19.BUILT_IN;
    var10['inputType'] = var19;
    var13 = var13.BUILT_IN;
    var10['applicationId'] = var13;
    var13 = function get untranslatedDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.reVgOh;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var18, {get: var13, set: var1, enumerable: true});
    var13 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.reVgOh;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var10, var15, {get: var13, set: var1, enumerable: true});
    var13 = {'name': 'count', 'displayName': 'count'};
    var18 = var9[var14];
    var18 = var8.bind(var1)(var18);
    var18 = var18.ApplicationCommandOptionType;
    var18 = var18.INTEGER;
    var13['type'] = var18;
    var18 = function get description() {
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 10;
        var3 = var7[var1];
        var2 = undefined;
        var3 = var6.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var7[var1];
        var1 = var6.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.iSbJTZ;
        var1 = {};
        var5 = _closure1_slot10;
        var1['max'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    Object.defineProperty(var13, var17, {get: var18, set: var1, enumerable: true});
    var18 = function get displayDescription() {
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 10;
        var3 = var7[var1];
        var2 = undefined;
        var3 = var6.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var7[var1];
        var1 = var6.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.iSbJTZ;
        var1 = {};
        var5 = _closure1_slot10;
        var1['max'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    Object.defineProperty(var13, var15, {get: var18, set: var1, enumerable: true});
    var13['minValue'] = var11;
    var13['maxValue'] = var12;
    var12 = new Array(2);
    var12[0] = var13;
    var13 = {'name': 'size', 'displayName': 'size'};
    var14 = var9[var14];
    var14 = var8.bind(var1)(var14);
    var14 = var14.ApplicationCommandOptionType;
    var14 = var14.INTEGER;
    var13['type'] = var14;
    var14 = function get description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.pV214H;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var13, var17, {get: var14, set: var1, enumerable: true});
    var14 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.pV214H;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    Object.defineProperty(var13, var15, {get: var14, set: var1, enumerable: true});
    var15 = var16.map;
    var14 = function(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = global;
        var4 = var3.HermesInternal;
        var5 = var4.concat;
        var4 = 'D';
        var5 = var5.bind(var4)(var2);
        var1['name'] = var5;
        var3 = var3.HermesInternal;
        var3 = var3.concat;
        var3 = var3.bind(var4)(var2);
        var1['displayName'] = var3;
        var1['value'] = var2;
        return var1;
    };
    var14 = var15.bind(var16)(var14);
    var13['choices'] = var14;
    var12[1] = var13;
    var10['options'] = var12;
    var12 = function execute(arg1, arg2) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var9 = arg1;
            var1 = arg2;
            var1 = var1.channel;
            var3 = null;
            if(!(var3 != var1)) { _fun0021_ip = 90; continue _fun0021 }
case 91:
            var4 = global;
            var7 = var4.Number;
            var8 = _closure1_slot16;
            var6 = undefined;
            var5 = 'count';
            var8 = var8.bind(var6)(var9, var5);
            var10 = var3 != var8;
            var5 = 1;
            if(!var10) { _fun0021_ip = 92; continue _fun0021 }
case 93:
            var5 = var8;
case 92:
            var5 = var7.bind(var6)(var5);
            var4 = var4.Number;
            var8 = _closure1_slot16;
            var7 = 'size';
            var7 = var8.bind(var6)(var9, var7);
            var8 = var3 != var7;
            var3 = 6;
            if(!var8) { _fun0021_ip = 94; continue _fun0021 }
case 95:
            var3 = var7;
case 94:
            var4 = var4.bind(var6)(var3);
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 29;
            var2 = var7[var2];
            var3 = var3.bind(var6)(var2);
            var2 = var3.startDiceRoll;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1, var5, var4);
case 90:
            var1 = undefined;
            return var1;
        }
    };
    var10['execute'] = var12;
    var4 = var4 + var11;
    var5[3] = var10;
    var _closure1_slot14 = var5;
    var10 = var5.filter;
    var4 = function(arg1) {
        var3 = ['gif', 'tts', 'me', 'tableflip', 'unflip', 'shrug', 'spoiler', 'nick'];
        var2 = var3.includes;
        var1 = arg1;
        var1 = var1.untranslatedName;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4 = var10.bind(var5)(var4);
    var _closure1_slot15 = var4;
    var10 = 31;
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
    var2 = function getBuiltInCommands(arg1, arg2, arg3) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg3;
            var _closure2_slot1 = var2;
            var3 = arg2;
            if(var3) { _fun0022_ip = 96; continue _fun0022 }
case 28:
            var3 = _closure1_slot15;
            _fun0022_ip = 14; continue _fun0022;
case 96:
            var3 = _closure1_slot14;
case 14:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 30;
            var4 = var4[var2];
            var2 = undefined;
            var5 = var5.bind(var2)(var4);
            var4 = var5.getConfig;
            var2 = {};
            var6 = 'getBuiltInCommands';
            var2['location'] = var6;
            var2 = var4.bind(var5)(var2);
            var2 = var2.enabled;
            var _closure2_slot2 = var2;
            var2 = var3.filter;
            var1 = function(arg1) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var3 = arg1;
                    var5 = _closure2_slot0;
                    var4 = var5.includes;
                    var1 = var3.type;
                    var1 = var4.bind(var5)(var1);
                    if(!var1) { _fun0023_ip = 97; continue _fun0023 }
case 98:
                    var4 = _closure2_slot1;
                    var4 = !var4;
                    if(var4) { _fun0023_ip = 99; continue _fun0023 }
case 13:
                    var6 = var3.inputType;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 9;
                    var7 = var7[var5];
                    var5 = undefined;
                    var5 = var8.bind(var5)(var7);
                    var5 = var5.ApplicationCommandInputType;
                    var5 = var5.BUILT_IN_TEXT;
                    var4 = var6 === var5;
case 99:
                    if(var4) { _fun0023_ip = 100; continue _fun0023 }
case 101:
                    var6 = var3.inputType;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 9;
                    var7 = var7[var5];
                    var5 = undefined;
                    var5 = var8.bind(var5)(var7);
                    var5 = var5.ApplicationCommandInputType;
                    var5 = var5.BUILT_IN_INTEGRATION;
                    var4 = var6 === var5;
case 100:
                    var1 = var4;
case 97:
                    if(!var1) { _fun0023_ip = 102; continue _fun0023 }
case 90:
                    var2 = _closure2_slot2;
                    if(var2) { _fun0023_ip = 103; continue _fun0023 }
case 47:
                    var4 = var3.untranslatedName;
                    var3 = 'roll-dice';
                    var2 = var3 !== var4;
case 103:
                    var1 = var2;
case 102:
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