// app/modules/icymi/ICYMIStore.tsx
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot60 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot60 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 46; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0002_ip = 55; continue _fun0002 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0002_ip = 345; continue _fun0002 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 323; continue _fun0002 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 283; continue _fun0002 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 270; continue _fun0002 }
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
            if(!var7) { _fun0002_ip = 163; continue _fun0002 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0002_ip = 179; continue _fun0002 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 234; continue _fun0002 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 247; continue _fun0002 }
 234:
            var9 = _closure1_slot62;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0002_ip = 265; continue _fun0002;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0002_ip = 283; continue _fun0002;
 270:
            var7 = _closure1_slot62;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0002_ip = 323; continue _fun0002 }
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
            if(!var4) { _fun0002_ip = 330; continue _fun0002 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 56; continue _fun0003 }
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
                    _fun0003_ip = 67; continue _fun0003;
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
    var _closure1_slot61 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 23; continue _fun0004 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 33; continue _fun0004 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 70; continue _fun0004 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 55; continue _fun0004 }
 70:
            return var1;
        }
    };
    var _closure1_slot62 = var1;
    var1 = function tabHasNewContentOnInitialLoad(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var6 = arg1;
            var5 = arg2;
            var2 = global;
            var4 = var2.Date;
            var3 = var4.now;
            var7 = var3.bind(var4)();
            var4 = _closure1_slot34;
            var4 = var7 - var4;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 22;
            var7 = var7[var3];
            var3 = undefined;
            var3 = var8.bind(var3)(var7);
            var3 = var3.Millis;
            var7 = var3.HOUR;
            var3 = 6;
            var3 = var3 * var7;
            if(!(!(var4 > var3))) { _fun0005_ip = 85; continue _fun0005 }
 81:
            var3 = false;
            return var3;
 85:
            var4 = var2.Set;
            var3 = var6.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var10 = var3.bind(var6)(var2);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var11 = var3;
            var2 = new var11[var4](var10, var9);
            var2 = var2 instanceof Object ? var2 : var3;
            var _closure2_slot0 = var2;
            var4 = var5.slice;
            var3 = 0;
            var2 = 20;
            var3 = var4.bind(var5)(var3, var2);
            var2 = var3.filter;
            var1 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.has;
                var1 = arg1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var2 = var1.length;
            var1 = 3;
            var1 = var2 >= var1;
            return var1;
        }
    };
    var _closure1_slot63 = var1;
    var1 = function filterStaffGuild(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg1;
            var4 = _closure1_slot24;
            var3 = var4.filterStaffContent;
            var3 = var3.bind(var4)();
            if(var3) { _fun0006_ip = 27; continue _fun0006 }
 23:
            var3 = true;
            return var3;
 27:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 23;
            var3 = var5[var3];
            var6 = undefined;
            var4 = var4.bind(var6)(var3);
            var3 = var4.isGuildItem;
            var3 = var3.bind(var4)(var2);
            if(!var3) { _fun0006_ip = 162; continue _fun0006 }
 63:
            var3 = var2.data;
            var4 = var3.guild_id;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 24;
            var3 = var7[var3];
            var3 = var5.bind(var6)(var3);
            var3 = var3.GAME_CONTENT_GUILD_ID;
            if(!(var4 !== var3)) { _fun0006_ip = 170; continue _fun0006 }
 103:
            var4 = _closure1_slot19;
            var3 = var4.getGuild;
            var2 = var2.data;
            var2 = var2.guild_id;
            var2 = var3.bind(var4)(var2);
            var3 = null;
            if(!(var3 != var2)) { _fun0006_ip = 166; continue _fun0006 }
 133:
            var3 = var2.features;
            var2 = var3.has;
            var1 = _closure1_slot27;
            var1 = var1.INTERNAL_EMPLOYEE_ONLY;
            var1 = var2.bind(var3)(var1);
            if(var1) { _fun0006_ip = 166; continue _fun0006 }
 162:
            var1 = true;
            return var1;
 166:
            var1 = false;
            return var1;
 170:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot64 = var1;
    var1 = function processRawItems(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var7 = arg1;
            var10 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 26;
            var2 = var8[var2];
            var4 = undefined;
            var9 = var10.bind(var4)(var2);
            var6 = var9.getICYMINewConversationSummaryExperiment;
            var5 = 'processRawItems';
            var2 = false;
            var2 = var6.bind(var9)(var5, var2);
            var6 = var2.contentGenerationEnabled;
            var5 = _closure1_slot24;
            var2 = var5.onlyShowRecentGeneratedCandidates;
            var2 = var2.bind(var5)();
            var5 = global;
            var11 = var5.Set;
            var9 = 24;
            var8 = var8[var9];
            var8 = var10.bind(var4)(var8);
            var14 = var8.SUPPORTED_ITEM_TYPES;
            var10 = var11.prototype;
            var10 = Object.create(var10, {constructor: {value: var11}});
            var15 = var10;
            var8 = new var15[var11](var14, var13);
            var10 = var8 instanceof Object ? var8 : var10;
            var _closure2_slot0 = var10;
            if(var2) { _fun0007_ip = 201; continue _fun0007 }
 123:
            if(!var6) { _fun0007_ip = 271; continue _fun0007 }
 129:
            var12 = var10.add;
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var8 = var6[var9];
            var8 = var11.bind(var4)(var8);
            var8 = var8.ICYMIItemTypes;
            var8 = var8.GENERATED_CANDIDATE;
            var8 = var12.bind(var10)(var8);
            var8 = var10.delete;
            var6 = var6[var9];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ICYMIItemTypes;
            var6 = var6.SUMMARY;
            var6 = var8.bind(var10)(var6);
            _fun0007_ip = 271; continue _fun0007;
 201:
            var8 = var5.Set;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var9];
            var5 = var6.bind(var4)(var5);
            var5 = var5.ICYMIItemTypes;
            var6 = var5.GENERATED_CANDIDATE;
            var5 = new Array(1);
            var5[0] = var6;
            var6 = var8.prototype;
            var6 = Object.create(var6, {constructor: {value: var8}});
            var15 = var6;
            var14 = var5;
            var5 = new var15[var8](var14, var13);
            var5 = var5 instanceof Object ? var5 : var6;
            _closure2_slot0 = var5;
 271:
            var6 = var7.filter;
            var5 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.has;
                var1 = arg1;
                var1 = var1.type;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var6.bind(var7)(var5);
            var5 = var6.filter;
            var3 = _closure1_slot64;
            var3 = var5.bind(var6)(var3);
            if(!var2) { _fun0007_ip = 317; continue _fun0007 }
 305:
            var2 = function sortByIdRecency(arg1) {
                var3 = arg1;
                var2 = var3.sort;
                var1 = function(arg1, arg2) {
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 25;
                    var2 = var5[var1];
                    var3 = undefined;
                    var7 = var4.bind(var3)(var2);
                    var6 = var7.extractTimestamp;
                    var2 = arg2;
                    var2 = var2.id;
                    var2 = var6.bind(var7)(var2);
                    var1 = var5[var1];
                    var4 = var4.bind(var3)(var1);
                    var3 = var4.extractTimestamp;
                    var1 = arg1;
                    var1 = var1.id;
                    var1 = var3.bind(var4)(var1);
                    var1 = var2 - var1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var2 = var2.bind(var4)(var3);
 317:
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.type;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 24;
                    var2 = var5[var2];
                    var6 = undefined;
                    var2 = var4.bind(var6)(var2);
                    var2 = var2.ICYMIItemTypes;
                    var2 = var2.MESSAGE;
                    if(!(var3 === var2)) { _fun0008_ip = 515; continue _fun0008 }
 52:
                    var2 = var1.data;
                    var2 = var2.message_context;
                    var4 = null;
                    if(!(var4 != var2)) { _fun0008_ip = 515; continue _fun0008 }
 72:
                    var3 = {};
                    var2 = var1.data;
                    var2 = var2.message_context;
                    var2 = var2.reply_message_id;
                    var2 = var4 != var2;
                    if(!var2) { _fun0008_ip = 134; continue _fun0008 }
 98:
                    var5 = global;
                    var7 = var5.parseInt;
                    var5 = var1.data;
                    var5 = var5.message_context;
                    var5 = var5.reply_message_id;
                    var7 = var7.bind(var6)(var5);
                    var5 = 0;
                    var2 = var5 !== var7;
 134:
                    if(!var2) { _fun0008_ip = 160; continue _fun0008 }
 137:
                    var2 = var1.data;
                    var2 = var2.message_context;
                    var2 = var2.reply_message_id;
                    var3['reply_message_id'] = var2;
 160:
                    var2 = var1.data;
                    var2 = var2.message_context;
                    var2 = var2.before_message_id;
                    var2 = var4 != var2;
                    if(!var2) { _fun0008_ip = 220; continue _fun0008 }
 184:
                    var5 = global;
                    var7 = var5.parseInt;
                    var5 = var1.data;
                    var5 = var5.message_context;
                    var5 = var5.before_message_id;
                    var7 = var7.bind(var6)(var5);
                    var5 = 0;
                    var2 = var5 !== var7;
 220:
                    if(!var2) { _fun0008_ip = 246; continue _fun0008 }
 223:
                    var2 = var1.data;
                    var2 = var2.message_context;
                    var2 = var2.before_message_id;
                    var3['before_message_id'] = var2;
 246:
                    var2 = var1.data;
                    var2 = var2.message_context;
                    var2 = var2.after_message_id;
                    var2 = var4 != var2;
                    if(!var2) { _fun0008_ip = 306; continue _fun0008 }
 270:
                    var5 = global;
                    var7 = var5.parseInt;
                    var5 = var1.data;
                    var5 = var5.message_context;
                    var5 = var5.after_message_id;
                    var7 = var7.bind(var6)(var5);
                    var5 = 0;
                    var2 = var5 !== var7;
 306:
                    if(!var2) { _fun0008_ip = 332; continue _fun0008 }
 309:
                    var2 = var1.data;
                    var2 = var2.message_context;
                    var2 = var2.after_message_id;
                    var3['after_message_id'] = var2;
 332:
                    var2 = var1.data;
                    var2 = var2.message_context;
                    var2 = var2.external_content_application_id;
                    var2 = var4 != var2;
                    if(!var2) { _fun0008_ip = 392; continue _fun0008 }
 356:
                    var5 = global;
                    var7 = var5.parseInt;
                    var5 = var1.data;
                    var5 = var5.message_context;
                    var5 = var5.external_content_application_id;
                    var7 = var7.bind(var6)(var5);
                    var5 = 0;
                    var2 = var5 !== var7;
 392:
                    if(!var2) { _fun0008_ip = 418; continue _fun0008 }
 395:
                    var2 = var1.data;
                    var2 = var2.message_context;
                    var2 = var2.external_content_application_id;
                    var3['external_content_application_id'] = var2;
 418:
                    var2 = var1.data;
                    var2 = var2.message_context;
                    var2 = var2.reference_message_id;
                    var2 = var4 != var2;
                    if(!var2) { _fun0008_ip = 478; continue _fun0008 }
 442:
                    var4 = global;
                    var5 = var4.parseInt;
                    var4 = var1.data;
                    var4 = var4.message_context;
                    var4 = var4.reference_message_id;
                    var5 = var5.bind(var6)(var4);
                    var4 = 0;
                    var2 = var4 !== var5;
 478:
                    if(!var2) { _fun0008_ip = 504; continue _fun0008 }
 481:
                    var2 = var1.data;
                    var2 = var2.message_context;
                    var2 = var2.reference_message_id;
                    var3['reference_message_id'] = var2;
 504:
                    var2 = var1.data;
                    var2['message_context'] = var3;
 515:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot65 = var1;
    var1 = function injectItemsIntoList(arg1, arg2, arg3, arg4) {
        var5 = arg1;
        var4 = arg2;
        var1 = arg3;
        var _closure2_slot0 = var1;
        var1 = arg4;
        var _closure2_slot1 = var1;
        var3 = var5.filter;
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.type;
            var1 = _closure2_slot0;
            var1 = var2 !== var1;
            return var1;
        };
        var1 = var3.bind(var5)(var1);
        var _closure2_slot2 = var1;
        var3 = var4.forEach;
        var2 = function(arg1, arg2) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var5 = arg1;
                var6 = arg2;
                var2 = 1;
                var4 = var6 + var2;
                var3 = _closure2_slot1;
                var4 = var4 * var3;
                var3 = _closure2_slot2;
                var3 = var3.length;
                if(!(!(var4 < var3))) { _fun0009_ip = 53; continue _fun0009 }
 37:
                var4 = _closure2_slot2;
                var3 = var4.push;
                var3 = var3.bind(var4)(var5);
                _fun0009_ip = 84; continue _fun0009;
 53:
                var4 = _closure2_slot2;
                var3 = var4.splice;
                var2 = var6 + var2;
                var1 = _closure2_slot1;
                var2 = var2 * var1;
                var1 = 0;
                var1 = var3.bind(var4)(var2, var1, var5);
 84:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot66 = var1;
    var1 = function injectAdditionalItems() {
        var3 = function injectGuildEvents() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var4 = _closure1_slot19;
                var1 = var4.getGuildIds;
                var6 = var1.bind(var4)();
                var5 = new Array(0);
                var4 = _closure1_slot61;
                var1 = undefined;
                var19 = var4.bind(var1)(var6);
                var6 = var19.bind(var1)();
                var4 = var6.done;
                var18 = 0;
                var17 = 1;
                var9 = 24;
                var16 = 10;
                var15 = null;
                var14 = 22;
                var13 = 2;
                var12 = var6;
                var11 = undefined;
                var10 = undefined;
                var8 = undefined;
                var7 = undefined;
                var6 = undefined;
                if(var4) { _fun0010_ip = 555; continue _fun0010 }
 81:
                var24 = var12.value;
                var4 = _closure1_slot41;
                var4 = var4[var24];
                if(!(var15 != var4)) { _fun0010_ip = 119; continue _fun0010 }
 98:
                var4 = _closure1_slot41;
                var4 = var4[var24];
                var21 = var7;
                var20 = var6;
                if(!(!(var4 < var18))) { _fun0010_ip = 531; continue _fun0010 }
 119:
                var22 = _closure1_slot61;
                var23 = _closure1_slot14;
                var4 = var23.getGuildScheduledEventsForGuild;
                var4 = var4.bind(var23)(var24);
                var25 = var22.bind(var1)(var4);
                var26 = var25.bind(var1)();
                var4 = var26.done;
                var24 = var26;
                var23 = 0;
                var22 = var7;
                var11 = var24;
                var10 = 0;
                var8 = var25;
                var21 = var22;
                var20 = var6;
                if(var4) { _fun0010_ip = 531; continue _fun0010 }
 180:
                var26 = var24.value;
                var4 = _closure1_slot12;
                var4 = var4.bind(var1)(var26);
                var28 = var23;
                var27 = var22;
                if(var4) { _fun0010_ip = 492; continue _fun0010 }
 206:
                var29 = _closure1_slot11;
                var30 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var14];
                var4 = var30.bind(var1)(var4);
                var4 = var4.Seconds;
                var4 = var4.DAY;
                var4 = var13 * var4;
                var4 = var29.bind(var1)(var26, var4);
                if(var4) { _fun0010_ip = 273; continue _fun0010 }
 252:
                var4 = _closure1_slot13;
                var4 = var4.bind(var1)(var26);
                var28 = var23;
                var27 = var22;
                if(!var4) { _fun0010_ip = 492; continue _fun0010 }
 273:
                var29 = _closure1_slot39;
                var4 = var26.id;
                var4 = var29[var4];
                if(!(var15 == var4)) { _fun0010_ip = 362; continue _fun0010 }
 290:
                var30 = _closure1_slot39;
                var29 = var26.id;
                var4 = {};
                var31 = var26.id;
                var4['id'] = var31;
                var32 = _closure1_slot0;
                var31 = _closure1_slot2;
                var31 = var31[var9];
                var31 = var32.bind(var1)(var31);
                var31 = var31.ICYMIItemTypes;
                var31 = var31.GUILD_EVENT;
                var4['type'] = var31;
                var4['score'] = var16;
                var31 = var26.id;
                var4['event_id'] = var31;
                var30[var29] = var4;
 362:
                var30 = var5.push;
                var4 = {};
                var29 = var26.id;
                var4['id'] = var29;
                var31 = _closure1_slot0;
                var29 = _closure1_slot2;
                var29 = var29[var9];
                var29 = var31.bind(var1)(var29);
                var29 = var29.ICYMIItemTypes;
                var29 = var29.GUILD_EVENT;
                var4['type'] = var29;
                var4['score'] = var16;
                var31 = {};
                var29 = var26.guild_id;
                var31['guild_id'] = var29;
                var29 = var26.id;
                var31['event_id'] = var29;
                var29 = var26.channel_id;
                var33 = var15 != var29;
                var32 = undefined;
                if(!var33) { _fun0010_ip = 454; continue _fun0010 }
 451:
                var32 = var29;
 454:
                var31['channel_id'] = var32;
                var4['data'] = var31;
                var4 = var30.bind(var5)(var4);
                var28 = var23 + 1;
                var27 = var29;
                var11 = var24;
                var8 = var25;
                var21 = var27;
                var20 = var26;
                var10 = var28;
                if(!(!(var10 >= var17))) { _fun0010_ip = 531; continue _fun0010 }
 492:
                var29 = var25.bind(var1)();
                var4 = var29.done;
                var23 = var28;
                var22 = var27;
                var24 = var29;
                var11 = var24;
                var10 = var23;
                var8 = var25;
                var21 = var22;
                var20 = var26;
                if(!var4) { _fun0010_ip = 180; continue _fun0010 }
 531:
                var22 = var19.bind(var1)();
                var4 = var22.done;
                var7 = var21;
                var6 = var20;
                var12 = var22;
                if(!var4) { _fun0010_ip = 81; continue _fun0010 }
 555:
                var6 = var5.sort;
                var4 = function(arg1, arg2) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                        var4 = _closure1_slot18;
                        var3 = var4.getGuildAffinity;
                        var2 = arg1;
                        var2 = var2.data;
                        var2 = var2.guild_id;
                        var3 = var3.bind(var4)(var2);
                        var4 = _closure1_slot18;
                        var2 = var4.getGuildAffinity;
                        var1 = arg2;
                        var1 = var1.data;
                        var1 = var1.guild_id;
                        var5 = var2.bind(var4)(var1);
                        var4 = null;
                        var6 = var4 != var5;
                        var1 = 0;
                        if(!var6) { _fun0011_ip = 76; continue _fun0011 }
 70:
                        var1 = var5.score;
 76:
                        var4 = var4 != var3;
                        var2 = 0;
                        if(!var4) { _fun0011_ip = 91; continue _fun0011 }
 85:
                        var2 = var3.score;
 91:
                        var1 = var1 - var2;
                        return var1;
                    }
                };
                var4 = var6.bind(var5)(var4);
                var11 = new Array(0);
                var _closure3_slot0 = var11;
                var7 = new Array(0);
                var _closure3_slot1 = var7;
                var4 = var5.forEach;
                var2 = function(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                        var3 = arg1;
                        var4 = _closure1_slot38;
                        var2 = var3.id;
                        var4[var2] = var3;
                        var4 = _closure1_slot25;
                        var2 = var4.getReadTimestamp;
                        var1 = var3.id;
                        var2 = var2.bind(var4)(var1);
                        var1 = null;
                        if(!(var1 == var2)) { _fun0012_ip = 64; continue _fun0012 }
 45:
                        var2 = _closure3_slot0;
                        var1 = var2.push;
                        var1 = var1.bind(var2)(var3);
                        _fun0012_ip = 81; continue _fun0012;
 64:
                        var2 = _closure3_slot1;
                        var1 = var2.push;
                        var1 = var1.bind(var2)(var3);
 81:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var2);
                var6 = _closure1_slot66;
                var10 = _closure1_slot50;
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var4 = var2[var9];
                var4 = var8.bind(var1)(var4);
                var4 = var4.ICYMIItemTypes;
                var35 = var4.GUILD_EVENT;
                var5 = 7;
                var38 = undefined;
                var37 = var10;
                var36 = var11;
                var34 = var5;
                var4 = var38[var6](var37, var36, var35, var34, var33);
                _closure1_slot50 = var4;
                var4 = _closure1_slot51;
                var2 = var2[var9];
                var2 = var8.bind(var1)(var2);
                var2 = var2.ICYMIItemTypes;
                var35 = var2.GUILD_EVENT;
                var38 = undefined;
                var37 = var4;
                var36 = var7;
                var2 = var38[var6](var37, var36, var35, var34, var33);
                _closure1_slot51 = var2;
                return var1;
            }
        };
        var1 = undefined;
        var3 = var3.bind(var1)();
        var2 = function injectContentInventoryItems() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var1 = global;
                var1 = var1.Set;
                var3 = var1.prototype;
                var3 = Object.create(var3, {constructor: {value: var1}});
                var16 = var3;
                var1 = new var16[var1](var15);
                var1 = var1 instanceof Object ? var1 : var3;
                var _closure3_slot0 = var1;
                var1 = {};
                var _closure3_slot1 = var1;
                var11 = new Array(0);
                var _closure3_slot2 = var11;
                var7 = new Array(0);
                var _closure3_slot3 = var7;
                var5 = _closure1_slot9;
                var4 = var5.getFeed;
                var1 = _closure1_slot29;
                var1 = var1.GLOBAL_FEED;
                var6 = var4.bind(var5)(var1);
                var4 = null;
                var8 = var4 == var6;
                var1 = undefined;
                var5 = undefined;
                if(var8) { _fun0013_ip = 103; continue _fun0013 }
 97:
                var5 = var6.entries;
 103:
                if(!(var4 == var5)) { _fun0013_ip = 111; continue _fun0013 }
 107:
                var5 = new Array(0);
 111:
                var6 = var5.sort;
                var4 = function(arg1, arg2) {
                    var1 = arg1;
                    var2 = var1.rank;
                    var1 = arg2;
                    var1 = var1.rank;
                    var1 = var2 - var1;
                    return var1;
                };
                var9 = var6.bind(var5)(var4);
                var8 = var9.slice;
                var4 = 0;
                var6 = 5;
                var4 = var8.bind(var9)(var4, var6);
                var4 = var5.forEach;
                var2 = function(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                        var6 = arg1;
                        var4 = _closure3_slot0;
                        var3 = var4.has;
                        var1 = var6.content;
                        var1 = var1.id;
                        var1 = var3.bind(var4)(var1);
                        if(var1) { _fun0014_ip = 737; continue _fun0014 }
 36:
                        var1 = var6.content;
                        var5 = var1.content_type;
                        var7 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var8 = 27;
                        var4 = var1[var8];
                        var1 = undefined;
                        var4 = var7.bind(var1)(var4);
                        var4 = var4.ContentInventoryEntryType;
                        var4 = var4.PLAYED_GAME;
                        if(!(var5 !== var4)) { _fun0014_ip = 179; continue _fun0014 }
 88:
                        var4 = var6.content;
                        var5 = var4.content_type;
                        var7 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var8];
                        var4 = var7.bind(var1)(var4);
                        var4 = var4.ContentInventoryEntryType;
                        var4 = var4.CUSTOM_STATUS;
                        if(!(var5 !== var4)) { _fun0014_ip = 179; continue _fun0014 }
 132:
                        var4 = var6.content;
                        var5 = var4.content_type;
                        var7 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var8];
                        var4 = var7.bind(var1)(var4);
                        var4 = var4.ContentInventoryEntryType;
                        var4 = var4.TOP_GAME;
                        if(!(var5 === var4)) { _fun0014_ip = 737; continue _fun0014 }
 179:
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var4 = 28;
                        var4 = var7[var4];
                        var7 = var5.bind(var1)(var4);
                        var5 = var7.isEntryExpired;
                        var4 = var6.content;
                        var4 = var5.bind(var7)(var4);
                        if(var4) { _fun0014_ip = 737; continue _fun0014 }
 221:
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var4 = 29;
                        var4 = var7[var4];
                        var7 = var5.bind(var1)(var4);
                        var5 = var7.isGamingLikeEntry;
                        var4 = var6.content;
                        var4 = var5.bind(var7)(var4);
                        if(!var4) { _fun0014_ip = 433; continue _fun0014 }
 263:
                        var5 = _closure3_slot1;
                        var4 = var6.content;
                        var4 = var4.author_id;
                        var5 = var5[var4];
                        var4 = null;
                        if(!(var4 == var5)) { _fun0014_ip = 335; continue _fun0014 }
 288:
                        var7 = _closure3_slot1;
                        var4 = var6.content;
                        var5 = var4.author_id;
                        var4 = global;
                        var4 = var4.Set;
                        var8 = var4.prototype;
                        var8 = Object.create(var8, {constructor: {value: var4}});
                        var13 = var8;
                        var4 = new var13[var4](var12);
                        var4 = var4 instanceof Object ? var4 : var8;
                        var7[var5] = var4;
 335:
                        var5 = _closure3_slot1;
                        var4 = var6.content;
                        var4 = var4.author_id;
                        var7 = var5[var4];
                        var5 = var7.has;
                        var4 = var6.content;
                        var4 = var4.extra;
                        var4 = var4.application_id;
                        var4 = var5.bind(var7)(var4);
                        if(var4) { _fun0014_ip = 735; continue _fun0014 }
 387:
                        var5 = _closure3_slot1;
                        var4 = var6.content;
                        var4 = var4.author_id;
                        var7 = var5[var4];
                        var5 = var7.add;
                        var4 = var6.content;
                        var4 = var4.extra;
                        var4 = var4.application_id;
                        var4 = var5.bind(var7)(var4);
 433:
                        var5 = _closure1_slot39;
                        var4 = var6.content;
                        var4 = var4.id;
                        var4 = var5[var4];
                        var5 = null;
                        if(!(var5 == var4)) { _fun0014_ip = 545; continue _fun0014 }
 457:
                        var8 = _closure1_slot39;
                        var4 = var6.content;
                        var7 = var4.id;
                        var4 = {};
                        var9 = var6.content;
                        var9 = var9.id;
                        var4['id'] = var9;
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var9 = 24;
                        var9 = var11[var9];
                        var9 = var10.bind(var1)(var9);
                        var9 = var9.ICYMIItemTypes;
                        var9 = var9.ACTIVITY;
                        var4['type'] = var9;
                        var9 = 15;
                        var4['score'] = var9;
                        var9 = var6.content;
                        var4['activity'] = var9;
                        var8[var7] = var4;
 545:
                        var4 = {};
                        var7 = var6.content;
                        var7 = var7.id;
                        var4['id'] = var7;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var7 = 24;
                        var7 = var9[var7];
                        var7 = var8.bind(var1)(var7);
                        var7 = var7.ICYMIItemTypes;
                        var7 = var7.ACTIVITY;
                        var4['type'] = var7;
                        var7 = 15;
                        var4['score'] = var7;
                        var7 = {};
                        var8 = var6.content;
                        var8 = var8.author_id;
                        var7['user_id'] = var8;
                        var8 = var6.content;
                        var8 = var8.id;
                        var7['content_id'] = var8;
                        var4['data'] = var7;
                        var8 = _closure3_slot0;
                        var7 = var8.add;
                        var6 = var6.content;
                        var6 = var6.id;
                        var6 = var7.bind(var8)(var6);
                        var7 = _closure1_slot38;
                        var6 = var4.id;
                        var7[var6] = var4;
                        var7 = _closure1_slot25;
                        var6 = var7.getReadTimestamp;
                        var3 = var4.id;
                        var3 = var6.bind(var7)(var3);
                        if(!(var5 == var3)) { _fun0014_ip = 719; continue _fun0014 }
 703:
                        var5 = _closure3_slot2;
                        var3 = var5.push;
                        var3 = var3.bind(var5)(var4);
                        _fun0014_ip = 737; continue _fun0014;
 719:
                        var3 = _closure3_slot3;
                        var2 = var3.push;
                        var2 = var2.bind(var3)(var4);
                        _fun0014_ip = 737; continue _fun0014;
 735:
                        return var1;
 737:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var2);
                var5 = _closure1_slot66;
                var10 = _closure1_slot50;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 24;
                var4 = var9[var2];
                var4 = var8.bind(var1)(var4);
                var4 = var4.ICYMIItemTypes;
                var13 = var4.ACTIVITY;
                var16 = undefined;
                var15 = var10;
                var14 = var11;
                var12 = var6;
                var4 = var16[var5](var15, var14, var13, var12, var11);
                _closure1_slot50 = var4;
                var4 = _closure1_slot51;
                var2 = var9[var2];
                var2 = var8.bind(var1)(var2);
                var2 = var2.ICYMIItemTypes;
                var13 = var2.ACTIVITY;
                var16 = undefined;
                var15 = var4;
                var14 = var7;
                var2 = var16[var5](var15, var14, var13, var12, var11);
                _closure1_slot51 = var2;
                return var1;
            }
        };
        var2 = var2.bind(var1)();
        var2 = _closure1_slot68;
        var2 = var2.bind(var1)();
        return var1;
    };
    var _closure1_slot67 = var1;
    var1 = function injectRecommendedGuildsRow() {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var5 = _closure1_slot50;
            var4 = var5.filter;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 24;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.ICYMIItemTypes;
                var1 = var1.RECOMMENDED_GUILDS;
                var1 = var2 !== var1;
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            _closure1_slot50 = var3;
            var5 = _closure1_slot51;
            var4 = var5.filter;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 24;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.ICYMIItemTypes;
                var1 = var1.RECOMMENDED_GUILDS;
                var1 = var2 !== var1;
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            _closure1_slot51 = var3;
            var3 = _closure1_slot53;
            var3 = var3.length;
            var5 = 0;
            if(!(var5 !== var3)) { _fun0015_ip = 500; continue _fun0015 }
 73:
            var4 = _closure1_slot19;
            var3 = var4.getGuildsArray;
            var4 = var3.bind(var4)();
            var3 = var4.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var3 = var1.features;
                var2 = var3.has;
                var1 = _closure1_slot27;
                var1 = var1.COMMUNITY;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var3.bind(var4)(var1);
            var1 = var1.length;
            var6 = 5;
            var1 = var1 >= var6;
            var7 = _closure1_slot25;
            var4 = var7.getReadTimestamp;
            var3 = 'recommendedGuilds';
            var4 = var4.bind(var7)(var3);
            if(!var1) { _fun0015_ip = 209; continue _fun0015 }
 140:
            var3 = null;
            if(!(var3 != var4)) { _fun0015_ip = 209; continue _fun0015 }
 146:
            var3 = global;
            var8 = var3.Date;
            var7 = var8.now;
            var8 = var7.bind(var8)();
            var7 = _closure1_slot54;
            var8 = var8 - var7;
            var7 = _closure1_slot30;
            if(!(var8 > var7)) { _fun0015_ip = 209; continue _fun0015 }
 179:
            var7 = var3.Date;
            var3 = var7.now;
            var3 = var3.bind(var7)();
            var4 = var3 - var4;
            var3 = _closure1_slot31;
            if(!(!(var4 < var3))) { _fun0015_ip = 500; continue _fun0015 }
 209:
            var3 = {'id': 'recommendedGuilds', 'type': null, 'score': 50};
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 24;
            var7 = var7[var4];
            var4 = undefined;
            var4 = var8.bind(var4)(var7);
            var4 = var4.ICYMIItemTypes;
            var4 = var4.RECOMMENDED_GUILDS;
            var3['type'] = var4;
            var7 = _closure1_slot39;
            var4 = var3.id;
            var7[var4] = var3;
            var7 = _closure1_slot38;
            var4 = var3.id;
            var7[var4] = var3;
            var4 = _closure1_slot50;
            var4 = var4.length;
            if(!(var5 !== var4)) { _fun0015_ip = 474; continue _fun0015 }
 305:
            if(var1) { _fun0015_ip = 321; continue _fun0015 }
 308:
            var4 = _closure1_slot50;
            var4 = var4.length;
            if(!(!(var4 < var6))) { _fun0015_ip = 439; continue _fun0015 }
 321:
            if(!var1) { _fun0015_ip = 340; continue _fun0015 }
 324:
            var4 = _closure1_slot50;
            var7 = var4.length;
            var4 = 10;
            if(!(!(var7 < var4))) { _fun0015_ip = 439; continue _fun0015 }
 340:
            if(var1) { _fun0015_ip = 365; continue _fun0015 }
 343:
            var4 = _closure1_slot50;
            var1 = var4.splice;
            var1 = var1.bind(var4)(var6, var5, var3);
            _fun0015_ip = 500; continue _fun0015;
 365:
            var1 = global;
            var6 = var1.Math;
            var4 = var6.round;
            var7 = var1.Math;
            var1 = var7.random;
            var7 = var1.bind(var7)();
            var1 = 2;
            var1 = var1 * var7;
            var4 = var4.bind(var6)(var1);
            var1 = 3;
            var7 = var4 + var1;
            var6 = _closure1_slot50;
            var4 = var6.splice;
            var1 = 1;
            var1 = var7 - var1;
            var1 = var4.bind(var6)(var1, var5, var3);
            _fun0015_ip = 500; continue _fun0015;
 439:
            var10 = _closure1_slot50;
            var1 = new Array(1);
            var11 = var1;
            var9 = 0;
            var5 = arraySpread(var11, var10, var9);
            var1[var5] = var3;
            var4 = 1;
            var4 = var5 + var4;
            _closure1_slot50 = var1;
            _fun0015_ip = 500; continue _fun0015;
 474:
            var1 = new Array(1);
            var1[0] = var3;
            var10 = _closure1_slot51;
            var9 = 1;
            var11 = var1;
            var3 = arraySpread(var11, var10, var9);
            _closure1_slot51 = var1;
 500:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot68 = var1;
    var1 = function finalizeNewDehydratedItemsContent() {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var2 = global;
            var2 = var2.Set;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var11 = var3;
            var2 = new var11[var2](var10);
            var6 = var2 instanceof Object ? var2 : var3;
            var _closure2_slot0 = var6;
            var5 = _closure1_slot35;
            var4 = var5.forEach;
            var3 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.add;
                var1 = arg1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            var4 = _closure1_slot48;
            var3 = null;
            if(!(var3 != var4)) { _fun0016_ip = 265; continue _fun0016 }
 71:
            var4 = var6.has;
            var3 = _closure1_slot48;
            var3 = var3.id;
            var4 = var4.bind(var6)(var3);
            var3 = _closure1_slot48;
            if(var4) { _fun0016_ip = 144; continue _fun0016 }
 97:
            var4 = new Array(1);
            var4[0] = var3;
            var9 = _closure1_slot35;
            var8 = 1;
            var10 = var4;
            var5 = arraySpread(var10, var9, var8);
            _closure1_slot35 = var4;
            var5 = var6.add;
            var4 = _closure1_slot48;
            var4 = var4.id;
            var4 = var5.bind(var6)(var4);
            _fun0016_ip = 265; continue _fun0016;
 144:
            var3 = var3.id;
            var _closure2_slot1 = var3;
            var3 = _closure1_slot48;
            var3 = var3.type;
            var _closure2_slot2 = var3;
            var5 = _closure1_slot35;
            var4 = var5.findIndex;
            var3 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var3 = arg1;
                    var4 = var3.id;
                    var1 = _closure2_slot1;
                    var1 = var4 === var1;
                    if(!var1) { _fun0017_ip = 35; continue _fun0017 }
 22:
                    var3 = var3.type;
                    var2 = _closure2_slot2;
                    var1 = var3 === var2;
 35:
                    return var1;
                }
            };
            var4 = var4.bind(var5)(var3);
            var3 = -1;
            if(!(var3 !== var4)) { _fun0016_ip = 265; continue _fun0016 }
 198:
            var3 = _closure1_slot35;
            var3 = var3[var4];
            _closure1_slot48 = var3;
            var5 = _closure1_slot35;
            var4 = var5.filter;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot1;
                var1 = var2 !== var1;
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            _closure1_slot35 = var3;
            var4 = _closure1_slot48;
            var3 = new Array(1);
            var3[0] = var4;
            var9 = _closure1_slot35;
            var8 = 1;
            var10 = var3;
            var4 = arraySpread(var10, var9, var8);
            _closure1_slot35 = var3;
 265:
            var3 = _closure1_slot35;
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                    var2 = arg1;
                    var4 = _closure1_slot38;
                    var1 = var2.id;
                    var4[var1] = var2;
                    var5 = var2.type;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 24;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.ICYMIItemTypes;
                    var4 = var4.CUSTOM_STATUS;
                    if(!(var5 === var4)) { _fun0018_ip = 152; continue _fun0018 }
 62:
                    var6 = _closure1_slot22;
                    var5 = var6.isBlockedOrIgnored;
                    var4 = var2.data;
                    var4 = var4.user_id;
                    var4 = var5.bind(var6)(var4);
                    if(var4) { _fun0018_ip = 137; continue _fun0018 }
 91:
                    var6 = _closure1_slot39;
                    var5 = var2.id;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 23;
                    var4 = var8[var4];
                    var7 = var7.bind(var1)(var4);
                    var4 = var7.customStatusToContentInventoryEntry;
                    var4 = var4.bind(var7)(var2);
                    var6[var5] = var4;
                    _fun0018_ip = 152; continue _fun0018;
 137:
                    var4 = _closure1_slot40;
                    var3 = var2.id;
                    var2 = true;
                    var4[var3] = var2;
 152:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot69 = var1;
    var1 = function reload(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
            var2 = arg1;
            var1 = _closure1_slot35;
            var1 = var1.length;
            var7 = 0;
            if(!(var1 > var7)) { _fun0019_ip = 45; continue _fun0019 }
 21:
            var1 = _closure1_slot35;
            _closure1_slot32 = var1;
            var1 = new Array(0);
            _closure1_slot35 = var1;
            var1 = new Array(0);
            _closure1_slot36 = var1;
 45:
            var1 = _closure1_slot43;
            var1 = var1 + 1;
            _closure1_slot43 = var1;
            var1 = null;
            if(!(var1 == var2)) { _fun0019_ip = 111; continue _fun0019 }
 62:
            var5 = _closure1_slot71;
            var4 = _closure1_slot32;
            var8 = undefined;
            var6 = var5.bind(var8)(var4);
            var5 = _closure1_slot8;
            var4 = 2;
            var6 = var5.bind(var8)(var6, var4);
            var5 = var6[var7];
            var4 = 1;
            var4 = var6[var4];
            _closure1_slot50 = var5;
            _closure1_slot51 = var4;
            _fun0019_ip = 131; continue _fun0019;
 111:
            var4 = var2.newUnread;
            _closure1_slot50 = var4;
            var2 = var2.newRead;
            _closure1_slot51 = var2;
 131:
            var4 = _closure1_slot24;
            var2 = var4.onlyShowRecentGeneratedCandidates;
            var2 = var2.bind(var4)();
            if(var2) { _fun0019_ip = 158; continue _fun0019 }
 148:
            var4 = _closure1_slot67;
            var2 = undefined;
            var2 = var4.bind(var2)();
 158:
            var2 = _closure1_slot37;
            var2 = var2.load_id;
            var2 = var1 != var2;
            if(!var2) { _fun0019_ip = 193; continue _fun0019 }
 175:
            var5 = _closure1_slot33;
            var4 = _closure1_slot37;
            var4 = var4.load_id;
            var2 = var5 !== var4;
 193:
            if(!var2) { _fun0019_ip = 316; continue _fun0019 }
 196:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 30;
            var4 = var4[var2];
            var2 = undefined;
            var2 = var5.bind(var2)(var4);
            var5 = var2.ICYMIAnalytics;
            var4 = var5.trackFeedLoaded;
            var2 = {};
            var6 = _closure1_slot37;
            var2['newTrackingProps'] = var6;
            var6 = _closure1_slot45;
            var2['hasNewContent'] = var6;
            var6 = _closure1_slot50;
            var2['unreadFeedItems'] = var6;
            var6 = _closure1_slot51;
            var2['readFeedItems'] = var6;
            var6 = 'gravity';
            var2['homeSessionId'] = var6;
            var2 = var4.bind(var5)(var2);
            var2 = _closure1_slot37;
            var2 = var2.load_id;
            var4 = var1 != var2;
            var1 = null;
            if(!var4) { _fun0019_ip = 306; continue _fun0019 }
 303:
            var1 = var2;
 306:
            _closure1_slot33 = var1;
            var1 = {};
            _closure1_slot37 = var1;
 316:
            _closure1_slot52 = var7;
            var1 = _closure1_slot50;
            var2 = var1.length;
            var1 = _closure1_slot51;
            var1 = var1.length;
            var1 = var2 + var1;
            if(!(var1 === var7)) { _fun0019_ip = 352; continue _fun0019 }
 346:
            var1 = true;
            _closure1_slot58 = var1;
 352:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 23;
            var2 = var9[var1];
            var1 = undefined;
            var6 = var8.bind(var1)(var2);
            var5 = var6.hydrateItems;
            var12 = _closure1_slot50;
            var4 = new Array(0);
            var13 = var4;
            var11 = 0;
            var11 = arraySpread(var13, var12, var11);
            var12 = _closure1_slot51;
            var13 = var4;
            var2 = arraySpread(var13, var12, var11);
            var2 = 24;
            var2 = var9[var2];
            var2 = var8.bind(var1)(var2);
            var2 = var2.ICYMI_PAGE_SIZE;
            var2 = var5.bind(var6)(var4, var7, var2);
            var2 = false;
            _closure1_slot56 = var2;
            return var1;
        }
    };
    var _closure1_slot70 = var1;
    var1 = function computeDisplayItems(arg1) {
        var7 = arg1;
        var4 = new Array(0);
        var _closure2_slot0 = var4;
        var5 = new Array(0);
        var _closure2_slot1 = var5;
        var6 = new Array(0);
        var _closure2_slot2 = var6;
        var3 = var7.forEach;
        var1 = function(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                var4 = arg1;
                var5 = _closure1_slot25;
                var3 = var5.getReadTimestamp;
                var1 = var4.id;
                var1 = var3.bind(var5)(var1);
                var8 = null;
                var7 = var8 != var1;
                var5 = var4.type;
                var9 = _closure1_slot0;
                var1 = _closure1_slot2;
                var6 = 24;
                var3 = var1[var6];
                var1 = undefined;
                var3 = var9.bind(var1)(var3);
                var3 = var3.ICYMIItemTypes;
                var3 = var3.MESSAGE;
                if(!(var5 !== var3)) { _fun0020_ip = 186; continue _fun0020 }
 75:
                var9 = var4.type;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var3 = var5.bind(var1)(var3);
                var3 = var3.ICYMIItemTypes;
                var5 = var3.SUMMARY;
                var3 = var7;
                if(!(var9 === var5)) { _fun0020_ip = 284; continue _fun0020 }
 119:
                var5 = var7;
                if(var7) { _fun0020_ip = 181; continue _fun0020 }
 125:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var9 = 23;
                var9 = var11[var9];
                var12 = var10.bind(var1)(var9);
                var11 = var12.isItemUnreadInChannel;
                var9 = var4.data;
                var10 = var9.channel_id;
                var9 = var4.data;
                var9 = var9.summary_id;
                var9 = var11.bind(var12)(var10, var9);
                var5 = !var9;
 181:
                var3 = var5;
                _fun0020_ip = 284; continue _fun0020;
 186:
                var5 = var4.data;
                var9 = var5.message_context;
                var10 = var8 == var9;
                var5 = undefined;
                if(var10) { _fun0020_ip = 212; continue _fun0020 }
 206:
                var5 = var9.external_content_application_id;
 212:
                var3 = var7;
                if(!(var8 == var5)) { _fun0020_ip = 284; continue _fun0020 }
 219:
                var5 = var7;
                if(var7) { _fun0020_ip = 281; continue _fun0020 }
 225:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 23;
                var7 = var9[var7];
                var10 = var8.bind(var1)(var7);
                var9 = var10.isItemUnreadInChannel;
                var7 = var4.data;
                var8 = var7.channel_id;
                var7 = var4.data;
                var7 = var7.message_id;
                var7 = var9.bind(var10)(var8, var7);
                var5 = !var7;
 281:
                var3 = var5;
 284:
                if(var3) { _fun0020_ip = 377; continue _fun0020 }
 287:
                var3 = var4.type;
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var5.bind(var1)(var2);
                var2 = var2.ICYMIItemTypes;
                var2 = var2.MESSAGE;
                if(!(var3 === var2)) { _fun0020_ip = 339; continue _fun0020 }
 325:
                var2 = var4.data;
                var2 = var2.has_mention;
                if(var2) { _fun0020_ip = 358; continue _fun0020 }
 339:
                var3 = _closure2_slot1;
                var2 = var3.push;
                var2 = var2.bind(var3)(var4);
                _fun0020_ip = 394; continue _fun0020;
 358:
                var3 = _closure2_slot2;
                var2 = var3.push;
                var2 = var2.bind(var3)(var4);
                _fun0020_ip = 394; continue _fun0020;
 377:
                var3 = _closure2_slot0;
                var2 = var3.push;
                var2 = var2.bind(var3)(var4);
 394:
                return var1;
            }
        };
        var1 = var3.bind(var7)(var1);
        var3 = new Array(0);
        var8 = 0;
        var10 = var3;
        var9 = var6;
        var8 = arraySpread(var10, var9, var8);
        var10 = var3;
        var9 = var5;
        var1 = arraySpread(var10, var9, var8);
        var1 = new Array(2);
        var1[0] = var3;
        var3 = var4.sort;
        var2 = function(arg1, arg2) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 23;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.compareGravityUnreadIds;
            var1 = arg1;
            var2 = var1.id;
            var1 = arg2;
            var1 = var1.id;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        var1[1] = var2;
        return var1;
    };
    var _closure1_slot71 = var1;
    var1 = function getNewUnreadItems(arg1, arg2) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
            var11 = arg2;
            var1 = new Array(0);
            var2 = global;
            var4 = var2.Set;
            var5 = _closure1_slot32;
            var3 = var5.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var19 = var3.bind(var5)(var2);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var20 = var3;
            var2 = new var20[var4](var19, var18);
            var9 = var2 instanceof Object ? var2 : var3;
            var3 = _closure1_slot61;
            var8 = undefined;
            var2 = arg1;
            var7 = var3.bind(var8)(var2);
            var3 = var7.bind(var8)();
            var2 = var3.done;
            var6 = 23;
            var5 = 24;
            var4 = null;
            if(var2) { _fun0021_ip = 454; continue _fun0021 }
 98:
            var12 = var3.value;
            var13 = var12.type;
            var14 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var2 = var14.bind(var8)(var2);
            var2 = var2.ICYMIItemTypes;
            var2 = var2.RECOMMENDED_GUILDS;
            if(!(var13 !== var2)) { _fun0021_ip = 436; continue _fun0021 }
 144:
            var13 = var9.has;
            var2 = var12.id;
            var2 = var13.bind(var9)(var2);
            if(var2) { _fun0021_ip = 436; continue _fun0021 }
 165:
            var14 = _closure1_slot25;
            var13 = var14.getReadTimestamp;
            var2 = var12.id;
            var2 = var13.bind(var14)(var2);
            var2 = var4 == var2;
            if(!var2) { _fun0021_ip = 306; continue _fun0021 }
 192:
            var14 = var12.type;
            var15 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var5];
            var13 = var15.bind(var8)(var13);
            var13 = var13.ICYMIItemTypes;
            var13 = var13.MESSAGE;
            var13 = var14 !== var13;
            if(var13) { _fun0021_ip = 303; continue _fun0021 }
 233:
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var6];
            var17 = var15.bind(var8)(var14);
            var16 = var17.isItemUnreadInChannel;
            var14 = var12.data;
            var15 = var14.channel_id;
            var14 = var12.data;
            var14 = var14.message_id;
            var14 = var16.bind(var17)(var15, var14);
            if(!var14) { _fun0021_ip = 300; continue _fun0021 }
 286:
            var15 = var12.data;
            var15 = var15.channel_id;
            var14 = var15 !== var11;
 300:
            var13 = var14;
 303:
            var2 = var13;
 306:
            if(!var2) { _fun0021_ip = 423; continue _fun0021 }
 309:
            var14 = var12.type;
            var15 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var5];
            var13 = var15.bind(var8)(var13);
            var13 = var13.ICYMIItemTypes;
            var13 = var13.SUMMARY;
            var13 = var14 !== var13;
            if(var13) { _fun0021_ip = 420; continue _fun0021 }
 350:
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var6];
            var17 = var15.bind(var8)(var14);
            var16 = var17.isItemUnreadInChannel;
            var14 = var12.data;
            var15 = var14.channel_id;
            var14 = var12.data;
            var14 = var14.summary_id;
            var14 = var16.bind(var17)(var15, var14);
            if(!var14) { _fun0021_ip = 417; continue _fun0021 }
 403:
            var15 = var12.data;
            var15 = var15.channel_id;
            var14 = var15 !== var11;
 417:
            var13 = var14;
 420:
            var2 = var13;
 423:
            if(!var2) { _fun0021_ip = 436; continue _fun0021 }
 426:
            var2 = var1.push;
            var2 = var2.bind(var1)(var12);
 436:
            var12 = var7.bind(var8)();
            var2 = var12.done;
            var3 = var12;
            if(!var2) { _fun0021_ip = 98; continue _fun0021 }
 454:
            return var1;
        }
    };
    var _closure1_slot72 = var1;
    var1 = function filterDehydratedItemListByChannel(arg1, arg2) {
        var3 = arg1;
        var2 = arg2;
        var _closure2_slot0 = var2;
        var2 = var3.filter;
        var1 = function(arg1) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                var2 = arg1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 23;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.isGuildItem;
                var1 = var1.bind(var3)(var2);
                var1 = !var1;
                if(var1) { _fun0022_ip = 66; continue _fun0022 }
 45:
                var2 = var2.data;
                var3 = var2.channel_id;
                var2 = _closure2_slot0;
                var1 = var3 !== var2;
 66:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot73 = var1;
    var1 = function maybeFilterChannelItems(arg1, arg2) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
            var5 = arg1;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 23;
            var4 = var7[var2];
            var1 = undefined;
            var9 = var6.bind(var1)(var4);
            var8 = var9.numberToCustomScore;
            var4 = arg2;
            var4 = var8.bind(var9)(var4);
            var2 = var7[var2];
            var2 = var6.bind(var1)(var2);
            var2 = var2.ICYMICustomScore;
            var2 = var2.MUTED;
            if(!(var4 === var2)) { _fun0023_ip = 141; continue _fun0023 }
 67:
            var4 = _closure1_slot73;
            var2 = _closure1_slot32;
            var2 = var4.bind(var1)(var2, var5);
            _closure1_slot32 = var2;
            var2 = _closure1_slot50;
            var2 = var4.bind(var1)(var2, var5);
            _closure1_slot50 = var2;
            var2 = _closure1_slot51;
            var2 = var4.bind(var1)(var2, var5);
            _closure1_slot51 = var2;
            var2 = _closure1_slot35;
            var2 = var4.bind(var1)(var2, var5);
            _closure1_slot35 = var2;
            var2 = _closure1_slot36;
            var2 = var4.bind(var1)(var2, var5);
            _closure1_slot36 = var2;
 141:
            return var1;
        }
    };
    var _closure1_slot74 = var1;
    var1 = function filterDehydratedItemListByGuild(arg1, arg2) {
        var3 = arg1;
        var2 = arg2;
        var _closure2_slot0 = var2;
        var2 = var3.filter;
        var1 = function(arg1) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                var2 = arg1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 23;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.isGuildItem;
                var1 = var1.bind(var3)(var2);
                var1 = !var1;
                if(var1) { _fun0024_ip = 66; continue _fun0024 }
 45:
                var2 = var2.data;
                var3 = var2.guild_id;
                var2 = _closure2_slot0;
                var1 = var3 !== var2;
 66:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot75 = var1;
    var1 = function maybeFilterGuildItems(arg1, arg2) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
            var5 = arg1;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 23;
            var4 = var7[var2];
            var1 = undefined;
            var9 = var6.bind(var1)(var4);
            var8 = var9.numberToCustomScore;
            var4 = arg2;
            var4 = var8.bind(var9)(var4);
            var2 = var7[var2];
            var2 = var6.bind(var1)(var2);
            var2 = var2.ICYMICustomScore;
            var2 = var2.MUTED;
            if(!(var4 === var2)) { _fun0025_ip = 141; continue _fun0025 }
 67:
            var4 = _closure1_slot75;
            var2 = _closure1_slot32;
            var2 = var4.bind(var1)(var2, var5);
            _closure1_slot32 = var2;
            var2 = _closure1_slot50;
            var2 = var4.bind(var1)(var2, var5);
            _closure1_slot50 = var2;
            var2 = _closure1_slot51;
            var2 = var4.bind(var1)(var2, var5);
            _closure1_slot51 = var2;
            var2 = _closure1_slot35;
            var2 = var4.bind(var1)(var2, var5);
            _closure1_slot35 = var2;
            var2 = _closure1_slot36;
            var2 = var4.bind(var1)(var2, var5);
            _closure1_slot36 = var2;
 141:
            return var1;
        }
    };
    var _closure1_slot76 = var1;
    var10 = function handleReaction(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
            var4 = arg1;
            var5 = var4.type;
            var3 = var4.messageId;
            var6 = var4.userId;
            var9 = var4.emoji;
            var8 = var4.reactionType;
            var1 = _closure1_slot39;
            var3 = var1[var3];
            var1 = null;
            if(!(var1 != var3)) { _fun0026_ip = 183; continue _fun0026 }
 50:
            var10 = var3.type;
            var11 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 24;
            var7 = var7[var1];
            var1 = undefined;
            var7 = var11.bind(var1)(var7);
            var7 = var7.ICYMIItemTypes;
            var7 = var7.MESSAGE;
            if(!(var10 === var7)) { _fun0026_ip = 179; continue _fun0026 }
 93:
            var7 = _closure1_slot16;
            var2 = var7.getId;
            var2 = var2.bind(var7)();
            var7 = var2 === var6;
            var2 = 'MESSAGE_REACTION_ADD';
            if(!(var2 !== var5)) { _fun0026_ip = 139; continue _fun0026 }
 119:
            var5 = var3.message;
            var2 = var5.removeReaction;
            var2 = var2.bind(var5)(var9, var7, var8);
            _fun0026_ip = 171; continue _fun0026;
 139:
            var6 = var3.message;
            var5 = var6.addReaction;
            var13 = var4.colors;
            var16 = var6;
            var15 = var9;
            var14 = var7;
            var12 = var8;
            var2 = var16[var5](var15, var14, var13, var12, var11);
 171:
            var3['message'] = var2;
            return var1;
 179:
            var1 = false;
            return var1;
 183:
            var1 = false;
            return var1;
        }
    };
    var9 = function handleAck(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
            var2 = arg1;
            var9 = var2.channelId;
            var _closure2_slot0 = var9;
            var5 = new Array(0);
            var _closure2_slot1 = var5;
            var2 = new Array(0);
            var _closure2_slot2 = var2;
            var6 = _closure1_slot50;
            var4 = var6.forEach;
            var1 = function(arg1, arg2) {
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
                    var3 = arg1;
                    var4 = _closure1_slot52;
                    var2 = arg2;
                    if(!(!(var2 > var4))) { _fun0028_ip = 24; continue _fun0028 }
 17:
                    var2 = _closure1_slot46;
                    if(var2) { _fun0028_ip = 142; continue _fun0028 }
 24:
                    var4 = var3.type;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var6 = 24;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var2 = var2.ICYMIItemTypes;
                    var2 = var2.MESSAGE;
                    if(!(var4 !== var2)) { _fun0028_ip = 105; continue _fun0028 }
 67:
                    var2 = var3.type;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var6];
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.ICYMIItemTypes;
                    var1 = var1.SUMMARY;
                    if(!(var2 === var1)) { _fun0028_ip = 142; continue _fun0028 }
 105:
                    var1 = var3.data;
                    var4 = var1.channel_id;
                    var2 = _closure2_slot0;
                    if(!(var4 === var2)) { _fun0028_ip = 142; continue _fun0028 }
 126:
                    var2 = _closure2_slot1;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
                    _fun0028_ip = 159; continue _fun0028;
 142:
                    var2 = _closure2_slot2;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
 159:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var4.bind(var6)(var1);
            var7 = _closure1_slot45;
            var6 = _closure1_slot71;
            var4 = _closure1_slot35;
            var1 = undefined;
            var8 = var6.bind(var1)(var4);
            var6 = _closure1_slot8;
            var4 = 2;
            var10 = var6.bind(var1)(var8, var4);
            var6 = 0;
            var8 = var10[var6];
            var4 = 1;
            var4 = var10[var4];
            var4 = _closure1_slot72;
            var4 = var4.bind(var1)(var8, var9);
            _closure1_slot36 = var4;
            var4 = _closure1_slot46;
            if(var4) { _fun0027_ip = 142; continue _fun0027 }
 120:
            var4 = var7;
            if(!var7) { _fun0027_ip = 140; continue _fun0027 }
 126:
            var9 = _closure1_slot63;
            var8 = _closure1_slot35;
            var4 = var9.bind(var1)(var2, var8);
 140:
            _fun0027_ip = 190; continue _fun0027;
 142:
            var8 = var7;
            if(!var8) { _fun0027_ip = 187; continue _fun0027 }
 148:
            var9 = _closure1_slot36;
            var10 = var9.length;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 24;
            var9 = var12[var9];
            var9 = var11.bind(var1)(var9);
            var9 = var9.MIN_ITEMS_FOR_NEW_PILL;
            var8 = var10 >= var9;
 187:
            var4 = var8;
 190:
            _closure1_slot45 = var4;
            var4 = var5.length;
            if(!(var6 === var4)) { _fun0027_ip = 211; continue _fun0027 }
 203:
            var4 = _closure1_slot45;
            if(!(var7 !== var4)) { _fun0027_ip = 257; continue _fun0027 }
 211:
            var4 = var5.length;
            if(!(var6 !== var4)) { _fun0027_ip = 255; continue _fun0027 }
 220:
            _closure1_slot50 = var2;
            var14 = _closure1_slot51;
            var2 = new Array(0);
            var15 = var2;
            var13 = 0;
            var13 = arraySpread(var15, var14, var13);
            var15 = var2;
            var14 = var5;
            var4 = arraySpread(var15, var14, var13);
            _closure1_slot51 = var2;
 255:
            return var1;
 257:
            var1 = false;
            return var1;
        }
    };
    var1 = global;
    var12 = var1.Object;
    var8 = var12.defineProperty;
    var2 = {};
    var11 = true;
    var2['value'] = var11;
    var1 = '__esModule';
    var1 = var8.bind(var12)(var3, var1, var2);
    var2 = 0;
    var8 = var6[var2];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var14 = 1;
    var8 = var6[var14];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var12 = 3;
    var8 = var6[var12];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot10 = var8;
    var8 = 8;
    var13 = var6[var8];
    var13 = var5.bind(var1)(var13);
    var15 = var13.eventScheduledToStartWithin;
    var _closure1_slot11 = var15;
    var15 = var13.isGuildEventEnded;
    var _closure1_slot12 = var15;
    var13 = var13.isGuildScheduledEventActive;
    var _closure1_slot13 = var13;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot14 = var8;
    var8 = 9;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ThreadChannelRecord;
    var _closure1_slot15 = var8;
    var8 = 10;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot16 = var8;
    var8 = 11;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot17 = var8;
    var8 = 12;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot18 = var8;
    var8 = 13;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot19 = var8;
    var8 = 14;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot20 = var8;
    var8 = 15;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot21 = var8;
    var8 = 16;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot22 = var8;
    var8 = 17;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot23 = var8;
    var8 = 18;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot24 = var8;
    var8 = 19;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot25 = var8;
    var8 = 20;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var13 = var8.ChannelTypes;
    var _closure1_slot26 = var13;
    var13 = var8.GuildFeatures;
    var _closure1_slot27 = var13;
    var8 = var8.MessageTypes;
    var _closure1_slot28 = var8;
    var8 = 21;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ContentInventoryFeedKey;
    var _closure1_slot29 = var8;
    var8 = 22;
    var13 = var6[var8];
    var13 = var7.bind(var1)(var13);
    var13 = var13.Millis;
    var13 = var13.DAY;
    var13 = var14 * var13;
    var _closure1_slot30 = var13;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var8 = var8.Millis;
    var8 = var8.DAY;
    var8 = var12 * var8;
    var _closure1_slot31 = var8;
    var8 = new Array(0);
    var _closure1_slot32 = var8;
    var12 = null;
    var _closure1_slot33 = var12;
    var _closure1_slot34 = var2;
    var8 = new Array(0);
    var _closure1_slot35 = var8;
    var8 = new Array(0);
    var _closure1_slot36 = var8;
    var8 = {};
    var _closure1_slot37 = var8;
    var8 = {};
    var _closure1_slot38 = var8;
    var8 = {};
    var _closure1_slot39 = var8;
    var8 = {};
    var _closure1_slot40 = var8;
    var8 = {};
    var _closure1_slot41 = var8;
    var8 = {};
    var _closure1_slot42 = var8;
    var _closure1_slot43 = var2;
    var8 = false;
    var _closure1_slot44 = var8;
    var _closure1_slot45 = var8;
    var _closure1_slot46 = var8;
    var _closure1_slot47 = var12;
    var _closure1_slot48 = var12;
    var _closure1_slot49 = var2;
    var12 = new Array(0);
    var _closure1_slot50 = var12;
    var12 = new Array(0);
    var _closure1_slot51 = var12;
    var _closure1_slot52 = var2;
    var12 = new Array(0);
    var _closure1_slot53 = var12;
    var _closure1_slot54 = var2;
    var _closure1_slot55 = var11;
    var _closure1_slot56 = var8;
    var _closure1_slot57 = var8;
    var _closure1_slot58 = var8;
    var _closure1_slot59 = var2;
    var2 = 34;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function ICYMIStore() {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
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
                var1 = _closure1_slot60;
                var1 = var1.bind(var3)();
                if(var1) { _fun0029_ip = 69; continue _fun0029 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0029_ip = 105; continue _fun0029;
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
        var1 = function value(arg1) {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
                var3 = arg1;
                var13 = this;
                var12 = var13.waitFor;
                var22 = _closure1_slot20;
                var21 = _closure1_slot17;
                var20 = _closure1_slot21;
                var19 = _closure1_slot10;
                var18 = _closure1_slot23;
                var17 = _closure1_slot16;
                var16 = _closure1_slot25;
                var15 = _closure1_slot9;
                var14 = _closure1_slot24;
                var23 = var13;
                var1 = var23[var12](var22, var21, var20, var19, var18, var17, var16, var15, var14, var13);
                var4 = null;
                if(!(var4 != var3)) { _fun0030_ip = 202; continue _fun0030 }
 67:
                var6 = var3.dehydratedItems;
                if(!(var4 == var6)) { _fun0030_ip = 81; continue _fun0030 }
 77:
                var6 = new Array(0);
 81:
                _closure1_slot32 = var6;
                var5 = var6.forEach;
                var1 = function(arg1) {
                    var3 = arg1;
                    var2 = _closure1_slot38;
                    var1 = var3.id;
                    var2[var1] = var3;
                    var1 = undefined;
                    return var1;
                };
                var1 = var5.bind(var6)(var1);
                var1 = var3.customGuildScores;
                if(!(var4 == var1)) { _fun0030_ip = 116; continue _fun0030 }
 114:
                var1 = {};
 116:
                _closure1_slot41 = var1;
                var1 = var3.customChannelScoresByGuild;
                if(!(var4 == var1)) { _fun0030_ip = 132; continue _fun0030 }
 130:
                var1 = {};
 132:
                _closure1_slot42 = var1;
                var6 = var3.numOpens;
                var7 = var4 != var6;
                var5 = 0;
                if(!var7) { _fun0030_ip = 154; continue _fun0030 }
 151:
                var5 = var6;
 154:
                _closure1_slot49 = var5;
                var6 = var3.lastOpened;
                var7 = var4 != var6;
                var5 = 0;
                if(!var7) { _fun0030_ip = 176; continue _fun0030 }
 173:
                var5 = var6;
 176:
                _closure1_slot34 = var5;
                var3 = var3.lastJoinedRecommendedGuild;
                var4 = var4 != var3;
                var1 = 0;
                if(!var4) { _fun0030_ip = 198; continue _fun0030 }
 195:
                var1 = var3;
 198:
                _closure1_slot54 = var1;
 202:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(31);
        var1[0] = var5;
        var5 = {};
        var7 = 'getVersion';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot43;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getDehydratedItems';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot32;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getNewDehydratedItems';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot35;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getDehydratedItem';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
 0:
                var2 = _closure1_slot38;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0031_ip = 26; continue _fun0031 }
 23:
                var1 = var2;
 26:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getHydratedItem';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
 0:
                var2 = _closure1_slot39;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0032_ip = 26; continue _fun0032 }
 23:
                var1 = var2;
 26:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getMessage';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
 0:
                var2 = _closure1_slot39;
                var1 = arg1;
                var2 = var2[var1];
                var5 = null;
                var4 = var5 == var2;
                var1 = null;
                if(var4) { _fun0033_ip = 75; continue _fun0033 }
 25:
                var4 = var2.type;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 24;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var6);
                var3 = var3.ICYMIItemTypes;
                var3 = var3.MESSAGE;
                var1 = null;
                if(!(var4 === var3)) { _fun0033_ip = 75; continue _fun0033 }
 70:
                var1 = var2.message;
 75:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getHydratedItems';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot39;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getUnreadDisplayItems';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot50;
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getNewUnreadDehydratedItems';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot36;
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getReadDisplayItems';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot51;
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getNextIndexToHydrate';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot52;
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getMissingItems';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot40;
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'customMuted';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
 0:
                var8 = arg1;
                var7 = this;
                var1 = var7.getCustomGuildScore;
                var3 = var1.bind(var7)(var8);
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var6 = 23;
                var1 = var1[var6];
                var5 = undefined;
                var1 = var4.bind(var5)(var1);
                var1 = var1.ICYMICustomScore;
                var1 = var1.MUTED;
                var1 = var3 === var1;
                if(var1) { _fun0034_ip = 109; continue _fun0034 }
 61:
                var4 = var7.getCustomChannelScore;
                var3 = arg2;
                var3 = var4.bind(var7)(var8, var3);
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ICYMICustomScore;
                var2 = var2.MUTED;
                var1 = var3 === var2;
 109:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getCustomChannelScore';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
 0:
                var6 = arg1;
                var5 = arg2;
                var1 = _closure1_slot42;
                var1 = var1[var6];
                var3 = null;
                if(!(var3 != var1)) { _fun0035_ip = 86; continue _fun0035 }
 23:
                var1 = _closure1_slot42;
                var1 = var1[var6];
                var1 = var1[var5];
                if(!(var3 != var1)) { _fun0035_ip = 86; continue _fun0035 }
 39:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 23;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.numberToCustomScore;
                var1 = _closure1_slot42;
                var1 = var1[var6];
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                _fun0035_ip = 120; continue _fun0035;
 86:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 23;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.ICYMICustomScore;
                var1 = var2.UNKNOWN;
 120:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getCustomGuildScore';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
 0:
                var2 = _closure1_slot41;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0036_ip = 28; continue _fun0036 }
 25:
                var1 = var2;
 28:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'getCustomGuildScores';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot41;
            return var1;
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'hasNewContent';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot45;
            return var1;
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'getCurrentStatusAttachments';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
 0:
                var3 = _closure1_slot47;
                var2 = null;
                if(!(var2 != var3)) { _fun0037_ip = 43; continue _fun0037 }
 13:
                var3 = _closure1_slot47;
                var2 = 0;
                var3 = var3[var2];
                var2 = arg1;
                if(!(var3 === var2)) { _fun0037_ip = 43; continue _fun0037 }
 30:
                var2 = _closure1_slot47;
                var1 = 1;
                var1 = var2[var1];
                _fun0037_ip = 47; continue _fun0037;
 43:
                var1 = new Array(0);
 47:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'getLoadId';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot33;
            return var1;
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'hasOpenedEnoughTimes';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot49;
            var1 = 5;
            var1 = var1 === var2;
            return var1;
        };
        var5['value'] = var7;
        var1[20] = var5;
        var5 = {};
        var7 = 'hasOpened';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot46;
            return var1;
        };
        var5['value'] = var7;
        var1[21] = var5;
        var5 = {};
        var7 = 'getDiscoverableGuilds';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot53;
            return var1;
        };
        var5['value'] = var7;
        var1[22] = var5;
        var5 = {};
        var7 = 'videosMuted';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot55;
            return var1;
        };
        var5['value'] = var7;
        var1[23] = var5;
        var5 = {};
        var7 = 'isRefreshing';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot56;
            return var1;
        };
        var5['value'] = var7;
        var1[24] = var5;
        var5 = {};
        var7 = 'notificationItem';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot48;
            return var1;
        };
        var5['value'] = var7;
        var1[25] = var5;
        var5 = {};
        var7 = 'getIsTabFocused';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot57;
            return var1;
        };
        var5['value'] = var7;
        var1[26] = var5;
        var5 = {};
        var7 = 'isFirstPageHydrated';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot58;
            return var1;
        };
        var5['value'] = var7;
        var1[27] = var5;
        var5 = {};
        var7 = 'lastScrollEvent';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot59;
            return var1;
        };
        var5['value'] = var7;
        var1[28] = var5;
        var5 = {};
        var7 = 'getIndexInHydratedFeed';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
 0:
                var3 = arg1;
                var _closure3_slot0 = var3;
                var1 = 'recommended_guilds';
                if(!(var1 !== var3)) { _fun0038_ip = 97; continue _fun0038 }
 19:
                var1 = 'recommendedGuilds';
                if(!(var1 !== var3)) { _fun0038_ip = 97; continue _fun0038 }
 29:
                var8 = _closure1_slot50;
                var4 = new Array(0);
                var7 = 0;
                var9 = var4;
                var7 = arraySpread(var9, var8, var7);
                var8 = _closure1_slot51;
                var9 = var4;
                var1 = arraySpread(var9, var8, var7);
                var3 = var4.filter;
                var1 = function(arg1) {
                    var2 = _closure1_slot39;
                    var1 = arg1;
                    var1 = var1.id;
                    var2 = var2[var1];
                    var1 = null;
                    var1 = var1 != var2;
                    return var1;
                };
                var4 = var3.bind(var4)(var1);
                var3 = var4.findIndex;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.id;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var1 = var3.bind(var4)(var1);
                _fun0038_ip = 146; continue _fun0038;
 97:
                var8 = _closure1_slot50;
                var4 = new Array(0);
                var7 = 0;
                var9 = var4;
                var7 = arraySpread(var9, var8, var7);
                var8 = _closure1_slot51;
                var9 = var4;
                var3 = arraySpread(var9, var8, var7);
                var3 = var4.findIndex;
                var2 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.type;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 24;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3);
                    var1 = var1.ICYMIItemTypes;
                    var1 = var1.RECOMMENDED_GUILDS;
                    var1 = var2 === var1;
                    return var1;
                };
                var1 = var3.bind(var4)(var2);
 146:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[29] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var6 = function value() {
            var1 = {};
            var3 = _closure1_slot32;
            var1['dehydratedItems'] = var3;
            var3 = _closure1_slot49;
            var1['numOpens'] = var3;
            var3 = _closure1_slot41;
            var1['customGuildScores'] = var3;
            var3 = _closure1_slot42;
            var1['customChannelScoresByGuild'] = var3;
            var3 = _closure1_slot34;
            var1['lastOpened'] = var3;
            var2 = _closure1_slot54;
            var1['lastJoinedRecommendedGuild'] = var2;
            return var1;
        };
        var5['value'] = var6;
        var1[30] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'ICYMIStore';
    var8['displayName'] = var2;
    var8['persistKey'] = var2;
    var2 = 35;
    var2 = var6[var2];
    var18 = var7.bind(var1)(var2);
    var2 = {};
    var11 = function handleLogout() {
        var1 = new Array(0);
        _closure1_slot32 = var1;
        var1 = new Array(0);
        _closure1_slot35 = var1;
        var1 = new Array(0);
        _closure1_slot36 = var1;
        var1 = {};
        _closure1_slot38 = var1;
        var1 = {};
        _closure1_slot37 = var1;
        var1 = {};
        _closure1_slot39 = var1;
        var1 = {};
        _closure1_slot40 = var1;
        var3 = null;
        _closure1_slot33 = var3;
        var1 = {};
        _closure1_slot41 = var1;
        var1 = {};
        _closure1_slot42 = var1;
        var1 = 0;
        _closure1_slot43 = var1;
        var4 = false;
        _closure1_slot44 = var4;
        _closure1_slot45 = var4;
        _closure1_slot46 = var4;
        var5 = new Array(0);
        _closure1_slot50 = var5;
        var5 = new Array(0);
        _closure1_slot51 = var5;
        _closure1_slot52 = var1;
        _closure1_slot34 = var1;
        _closure1_slot54 = var1;
        var5 = true;
        _closure1_slot55 = var5;
        _closure1_slot56 = var4;
        _closure1_slot48 = var3;
        _closure1_slot57 = var4;
        _closure1_slot58 = var4;
        _closure1_slot47 = var3;
        _closure1_slot59 = var1;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var11;
    var11 = function handleLoadICYMIFromNotification(arg1) {
        _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
 0:
            var1 = arg1;
            var9 = var1.messageItem;
            var2 = var1.customStatusItem;
            var3 = null;
            if(!(var3 == var2)) { _fun0039_ip = 361; continue _fun0039 }
 24:
            if(!(var3 == var9)) { _fun0039_ip = 32; continue _fun0039 }
 28:
            var1 = false;
            return var1;
 32:
            var6 = {};
            var1 = var9.message;
            var1 = var1.id;
            var6['id'] = var1;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 24;
            var1 = var12[var1];
            var8 = undefined;
            var1 = var11.bind(var8)(var1);
            var1 = var1.ICYMIItemTypes;
            var1 = var1.MESSAGE;
            var6['type'] = var1;
            var1 = 50;
            var6['score'] = var1;
            var1 = {};
            var5 = var9.channel_id;
            var1['channel_id'] = var5;
            var5 = var9.message;
            var5 = var5.id;
            var1['message_id'] = var5;
            var5 = var9.guild_id;
            var1['guild_id'] = var5;
            var5 = _closure1_slot26;
            var5 = var5.GUILD_TEXT;
            var1['channel_type'] = var5;
            var6['data'] = var1;
            var5 = _closure1_slot38;
            var1 = var9.message;
            var1 = var1.id;
            var5[var1] = var6;
            var7 = _closure1_slot39;
            var1 = var9.message;
            var5 = var1.id;
            var1 = {};
            var15 = var1;
            var14 = var6;
            var10 = copyDataProperties(var15, var14);
            var10 = 31;
            var10 = var12[var10];
            var11 = var11.bind(var8)(var10);
            var10 = var11.createMessageRecord;
            var9 = var9.message;
            var10 = var10.bind(var11)(var9);
            var9 = 'message';
            var1[var9] = var10;
            var7[var5] = var1;
            var1 = _closure1_slot33;
            if(!(var3 == var1)) { _fun0039_ip = 252; continue _fun0039 }
 244:
            var1 = _closure1_slot37;
            if(!(var3 != var1)) { _fun0039_ip = 288; continue _fun0039 }
 252:
            var1 = new Array(1);
            var1[0] = var6;
            var14 = _closure1_slot35;
            var13 = 1;
            var15 = var1;
            var5 = arraySpread(var15, var14, var13);
            _closure1_slot35 = var1;
            var1 = _closure1_slot70;
            var1 = var1.bind(var8)();
            _fun0039_ip = 357; continue _fun0039;
 288:
            var5 = _closure1_slot71;
            var1 = new Array(1);
            var1[0] = var6;
            var14 = _closure1_slot32;
            var6 = 1;
            var15 = var1;
            var13 = var6;
            var7 = arraySpread(var15, var14, var13);
            _closure1_slot32 = var1;
            var7 = var5.bind(var8)(var1);
            var5 = _closure1_slot8;
            var1 = 2;
            var1 = var5.bind(var8)(var7, var1);
            var5 = 0;
            var5 = var1[var5];
            var1 = var1[var6];
            _closure1_slot50 = var5;
            _closure1_slot51 = var1;
 357:
            var1 = true;
            return var1;
 361:
            _closure1_slot48 = var2;
            var2 = _closure1_slot33;
            if(!(var3 != var2)) { _fun0039_ip = 436; continue _fun0039 }
 376:
            var2 = _closure1_slot35;
            var2 = var2.length;
            var4 = 0;
            if(!(!(var2 > var4))) { _fun0039_ip = 410; continue _fun0039 }
 391:
            var14 = _closure1_slot32;
            var2 = new Array(0);
            var15 = var2;
            var13 = 0;
            var3 = arraySpread(var15, var14, var13);
            _fun0039_ip = 414; continue _fun0039;
 410:
            var2 = _closure1_slot35;
 414:
            _closure1_slot35 = var2;
            var3 = _closure1_slot69;
            var2 = undefined;
            var3 = var3.bind(var2)();
            var1 = _closure1_slot70;
            var1 = var1.bind(var2)();
 436:
            var1 = true;
            return var1;
        }
    };
    var2['LOAD_ICYMI_FROM_NOTIFICATION'] = var11;
    var11 = function handleLoadDehydrated(arg1) {
        _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
 0:
            var1 = arg1;
            var8 = var1.items;
            var6 = var1.loadId;
            var7 = var1.startTime;
            var3 = var1.isInitialLoad;
            var4 = var1.isReloading;
            var2 = _closure1_slot65;
            var1 = undefined;
            var2 = var2.bind(var1)(var8);
            _closure1_slot35 = var2;
            var2 = _closure1_slot69;
            var2 = var2.bind(var1)();
            var2 = {};
            var2['load_id'] = var6;
            var6 = global;
            var8 = var6.Date;
            var6 = var8.now;
            var6 = var6.bind(var8)();
            var6 = var6 - var7;
            var2['load_time_millis'] = var6;
            var8 = _closure1_slot35;
            var7 = var8.map;
            var6 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var6 = var7.bind(var8)(var6);
            var2['feed_item_ids'] = var6;
            _closure1_slot37 = var2;
            var6 = _closure1_slot71;
            var2 = _closure1_slot35;
            var7 = var6.bind(var1)(var2);
            var6 = _closure1_slot8;
            var2 = 2;
            var8 = var6.bind(var1)(var7, var2);
            var2 = 0;
            var7 = var8[var2];
            var6 = 1;
            var6 = var8[var6];
            var8 = _closure1_slot72;
            var8 = var8.bind(var1)(var7);
            _closure1_slot36 = var8;
            var8 = _closure1_slot46;
            if(!var8) { _fun0040_ip = 371; continue _fun0040 }
 188:
            var8 = _closure1_slot43;
            if(!(var2 !== var8)) { _fun0040_ip = 371; continue _fun0040 }
 199:
            if(var3) { _fun0040_ip = 371; continue _fun0040 }
 205:
            var3 = _closure1_slot43;
            if(!(var3 > var2)) { _fun0040_ip = 219; continue _fun0040 }
 213:
            var3 = null;
            _closure1_slot48 = var3;
 219:
            var3 = _closure1_slot36;
            var8 = var3.length;
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var11 = 24;
            var3 = var3[var11];
            var3 = var9.bind(var1)(var3);
            var3 = var3.MIN_ITEMS_FOR_NEW_PILL;
            var3 = var8 > var3;
            if(var4) { _fun0040_ip = 265; continue _fun0040 }
 261:
            _closure1_slot45 = var3;
 265:
            if(!var3) { _fun0040_ip = 438; continue _fun0040 }
 271:
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var4 = 23;
            var4 = var3[var4];
            var9 = var10.bind(var1)(var4);
            var8 = var9.hydrateItems;
            var4 = new Array(0);
            var15 = var4;
            var14 = var7;
            var13 = 0;
            var13 = arraySpread(var15, var14, var13);
            var15 = var4;
            var14 = var6;
            var12 = arraySpread(var15, var14, var13);
            var3 = var3[var11];
            var3 = var10.bind(var1)(var3);
            var3 = var3.ICYMI_PAGE_SIZE;
            var3 = var8.bind(var9)(var4, var2, var3);
            var4 = var7.length;
            var3 = var6.length;
            var3 = var4 + var3;
            if(!(var3 === var2)) { _fun0040_ip = 438; continue _fun0040 }
 363:
            var3 = true;
            _closure1_slot58 = var3;
            _fun0040_ip = 438; continue _fun0040;
 371:
            _closure1_slot43 = var2;
            var2 = _closure1_slot57;
            if(var2) { _fun0040_ip = 411; continue _fun0040 }
 382:
            var3 = _closure1_slot63;
            var2 = _closure1_slot35;
            var2 = var3.bind(var1)(var7, var2);
            if(!var2) { _fun0040_ip = 411; continue _fun0040 }
 399:
            var2 = true;
            _closure1_slot45 = var2;
            _closure1_slot44 = var2;
            _fun0040_ip = 417; continue _fun0040;
 411:
            var2 = false;
            _closure1_slot45 = var2;
 417:
            var3 = _closure1_slot70;
            var2 = {};
            var2['newUnread'] = var7;
            var2['newRead'] = var6;
            var2 = var3.bind(var1)(var2);
 438:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 30;
            var2 = var4[var2];
            var2 = var3.bind(var1)(var2);
            var4 = var2.ICYMIAnalytics;
            var3 = var4.trackFeedLoaded;
            var2 = {};
            var8 = _closure1_slot37;
            var2['newTrackingProps'] = var8;
            var8 = _closure1_slot45;
            var2['hasNewContent'] = var8;
            var2['unreadFeedItems'] = var7;
            var2['readFeedItems'] = var6;
            var6 = _closure1_slot57;
            var5 = 'background_load';
            if(!var6) { _fun0040_ip = 519; continue _fun0040 }
 513:
            var5 = 'foreground_load';
 519:
            var2['homeSessionId'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var2['LOAD_ICYMI_DEHYDRATED'] = var11;
    var11 = function handleLoadHydratedItems(arg1) {
        _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
 0:
            var1 = arg1;
            var15 = var1.messageItems;
            var14 = var1.summaryItems;
            var13 = var1.activityItems;
            var12 = var1.generatedCandidateItems;
            var10 = var1.requestMessageItems;
            var9 = var1.requestSummaryItems;
            var8 = var1.requestActivityItems;
            var6 = var1.requestGeneratedCandidateItems;
            var4 = var1.startingIndex;
            var2 = var1.endingIndex;
            var5 = true;
            _closure1_slot58 = var5;
            var5 = {};
            var16 = _closure1_slot39;
            var17 = var5;
            var7 = copyDataProperties(var17, var16);
            _closure1_slot39 = var5;
            var11 = var15.reduce;
            var7 = function(arg1, arg2) {
                var1 = arg1;
                var3 = arg2;
                var2 = var3.message;
                var2 = var2.id;
                var1[var2] = var3;
                return var1;
            };
            var5 = {};
            var5 = var11.bind(var15)(var7, var5);
            var _closure2_slot0 = var5;
            var11 = var14.reduce;
            var7 = function(arg1, arg2) {
                var1 = arg1;
                var3 = arg2;
                var2 = var3.id;
                var1[var2] = var3;
                return var1;
            };
            var5 = {};
            var5 = var11.bind(var14)(var7, var5);
            var _closure2_slot1 = var5;
            var11 = var13.reduce;
            var7 = function(arg1, arg2) {
                var1 = arg1;
                var3 = arg2;
                var2 = var3.id;
                var1[var2] = var3;
                return var1;
            };
            var5 = {};
            var5 = var11.bind(var13)(var7, var5);
            var _closure2_slot2 = var5;
            var11 = var12.reduce;
            var7 = function(arg1, arg2) {
                var1 = arg1;
                var3 = arg2;
                var2 = var3.content_id;
                var1[var2] = var3;
                return var1;
            };
            var5 = {};
            var5 = var11.bind(var12)(var7, var5);
            var _closure2_slot3 = var5;
            var7 = var10.forEach;
            var5 = function(arg1) {
                _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
 0:
                    var2 = arg1;
                    var3 = _closure2_slot0;
                    var1 = var2.message_id;
                    var4 = var3[var1];
                    var7 = null;
                    if(!(var7 == var4)) { _fun0042_ip = 50; continue _fun0042 }
 26:
                    var5 = _closure1_slot40;
                    var3 = var2.message_id;
                    var1 = true;
                    var5[var3] = var1;
                    _fun0042_ip = 486; continue _fun0042;
 50:
                    var3 = _closure1_slot38;
                    var1 = var2.message_id;
                    var5 = var3[var1];
                    if(!(var7 == var5)) { _fun0042_ip = 199; continue _fun0042 }
 74:
                    var1 = {};
                    var2 = var2.message_id;
                    var1['id'] = var2;
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 24;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var8.bind(var2)(var3);
                    var2 = var2.ICYMIItemTypes;
                    var2 = var2.MESSAGE;
                    var1['type'] = var2;
                    var2 = -1;
                    var1['score'] = var2;
                    var2 = {};
                    var3 = var4.guild_id;
                    var2['guild_id'] = var3;
                    var3 = var4.channel_id;
                    var2['channel_id'] = var3;
                    var3 = var4.message;
                    var3 = var3.id;
                    var2['message_id'] = var3;
                    var3 = _closure1_slot26;
                    var3 = var3.GUILD_TEXT;
                    var2['channel_type'] = var3;
                    var3 = false;
                    var2['has_mention'] = var3;
                    var1['data'] = var2;
                    var5 = var1;
 199:
                    var8 = _closure1_slot20;
                    var3 = var8.getMessage;
                    var2 = var4.channel_id;
                    var1 = var4.message;
                    var1 = var1.id;
                    var1 = var3.bind(var8)(var2, var1);
                    if(!(var7 == var1)) { _fun0042_ip = 365; continue _fun0042 }
 237:
                    var3 = _closure1_slot39;
                    var1 = var4.message;
                    var2 = var1.id;
                    var1 = {};
                    var14 = var1;
                    var13 = var5;
                    var8 = copyDataProperties(var14, var13);
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var8 = 31;
                    var8 = var9[var8];
                    var9 = undefined;
                    var11 = var10.bind(var9)(var8);
                    var10 = var11.createMessageRecord;
                    var8 = var4.message;
                    var10 = var10.bind(var11)(var8);
                    var8 = 'message';
                    var1[var8] = var10;
                    var8 = var4.thread_channel;
                    var8 = var7 != var8;
                    if(!var8) { _fun0042_ip = 350; continue _fun0042 }
 323:
                    var12 = _closure1_slot15;
                    var11 = var12.fromServer;
                    var10 = var4.thread_channel;
                    var8 = var4.guild_id;
                    var9 = var11.bind(var12)(var10, var8);
 350:
                    var8 = 'threadChannel';
                    var1[var8] = var9;
                    var3[var2] = var1;
                    _fun0042_ip = 486; continue _fun0042;
 365:
                    var3 = _closure1_slot39;
                    var1 = var4.message;
                    var2 = var1.id;
                    var1 = {};
                    var14 = var1;
                    var13 = var5;
                    var5 = copyDataProperties(var14, var13);
                    var10 = _closure1_slot20;
                    var9 = var10.getMessage;
                    var8 = var4.channel_id;
                    var5 = var4.message;
                    var5 = var5.id;
                    var8 = var9.bind(var10)(var8, var5);
                    var5 = 'message';
                    var1[var5] = var8;
                    var5 = var4.thread_channel;
                    var7 = var7 != var5;
                    var5 = undefined;
                    if(!var7) { _fun0042_ip = 473; continue _fun0042 }
 446:
                    var8 = _closure1_slot15;
                    var7 = var8.fromServer;
                    var6 = var4.thread_channel;
                    var4 = var4.guild_id;
                    var5 = var7.bind(var8)(var6, var4);
 473:
                    var4 = 'threadChannel';
                    var1[var4] = var5;
                    var3[var2] = var1;
 486:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var7.bind(var10)(var5);
            var7 = var9.forEach;
            var5 = function(arg1) {
                _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
 0:
                    var1 = arg1;
                    var3 = _closure2_slot1;
                    var2 = var1.summary_id;
                    var9 = var3[var2];
                    var3 = null;
                    if(!(var3 == var9)) { _fun0043_ip = 50; continue _fun0043 }
 26:
                    var5 = _closure1_slot40;
                    var4 = var1.summary_id;
                    var2 = true;
                    var5[var4] = var2;
                    _fun0043_ip = 244; continue _fun0043;
 50:
                    var5 = _closure1_slot38;
                    var4 = var1.summary_id;
                    var6 = var5[var4];
                    if(!(var3 != var6)) { _fun0043_ip = 114; continue _fun0043 }
 71:
                    var4 = var6.type;
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 24;
                    var3 = var7[var3];
                    var10 = undefined;
                    var3 = var5.bind(var10)(var3);
                    var3 = var3.ICYMIItemTypes;
                    var3 = var3.SUMMARY;
                    if(!(var4 !== var3)) { _fun0043_ip = 132; continue _fun0043 }
 114:
                    var5 = _closure1_slot40;
                    var4 = var1.summary_id;
                    var3 = true;
                    var5[var4] = var3;
                    _fun0043_ip = 244; continue _fun0043;
 132:
                    var3 = var9.messages;
                    var4 = var3.length;
                    var3 = 3;
                    if(!(!(var4 < var3))) { _fun0043_ip = 228; continue _fun0043 }
 150:
                    var5 = _closure1_slot39;
                    var4 = var9.id;
                    var3 = {};
                    var13 = var3;
                    var12 = var6;
                    var7 = copyDataProperties(var13, var12);
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var7 = 23;
                    var7 = var11[var7];
                    var8 = var8.bind(var10)(var7);
                    var7 = var8.createGravitySummaryFromServer;
                    var6 = var6.data;
                    var6 = var6.guild_id;
                    var7 = var7.bind(var8)(var9, var6);
                    var6 = 'summary';
                    var3[var6] = var7;
                    var5[var4] = var3;
                    _fun0043_ip = 244; continue _fun0043;
 228:
                    var3 = _closure1_slot40;
                    var2 = var1.summary_id;
                    var1 = true;
                    var3[var2] = var1;
 244:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var7.bind(var9)(var5);
            var7 = var8.forEach;
            var5 = function(arg1) {
                _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
 0:
                    var2 = arg1;
                    var3 = _closure2_slot2;
                    var1 = var2.content_id;
                    var5 = var3[var1];
                    var3 = null;
                    if(!(var3 == var5)) { _fun0044_ip = 47; continue _fun0044 }
 26:
                    var6 = _closure1_slot40;
                    var4 = var2.content_id;
                    var1 = true;
                    var6[var4] = var1;
                    _fun0044_ip = 120; continue _fun0044;
 47:
                    var6 = _closure1_slot38;
                    var4 = var2.content_id;
                    var4 = var6[var4];
                    if(!(var3 == var4)) { _fun0044_ip = 86; continue _fun0044 }
 68:
                    var6 = _closure1_slot40;
                    var3 = var2.content_id;
                    var2 = true;
                    var6[var3] = var2;
                    _fun0044_ip = 120; continue _fun0044;
 86:
                    var3 = _closure1_slot39;
                    var2 = var5.id;
                    var1 = {};
                    var8 = var1;
                    var7 = var4;
                    var4 = copyDataProperties(var8, var7);
                    var4 = 'activity';
                    var1[var4] = var5;
                    var3[var2] = var1;
 120:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var7.bind(var8)(var5);
            var5 = var6.forEach;
            var3 = function(arg1) {
                _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
 0:
                    var1 = arg1;
                    var3 = _closure2_slot3;
                    var2 = var1.content_id;
                    var6 = var3[var2];
                    var2 = null;
                    if(!(var2 == var6)) { _fun0045_ip = 50; continue _fun0045 }
 26:
                    var5 = _closure1_slot40;
                    var4 = var1.content_id;
                    var3 = true;
                    var5[var4] = var3;
                    _fun0045_ip = 200; continue _fun0045;
 50:
                    var5 = _closure1_slot38;
                    var3 = var1.content_id;
                    var5 = var5[var3];
                    if(!(var2 != var5)) { _fun0045_ip = 114; continue _fun0045 }
 71:
                    var3 = var5.type;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 24;
                    var2 = var7[var2];
                    var7 = undefined;
                    var2 = var8.bind(var7)(var2);
                    var2 = var2.ICYMIItemTypes;
                    var2 = var2.GENERATED_CANDIDATE;
                    if(!(var3 !== var2)) { _fun0045_ip = 132; continue _fun0045 }
 114:
                    var3 = _closure1_slot40;
                    var2 = var1.content_id;
                    var1 = true;
                    var3[var2] = var1;
                    _fun0045_ip = 200; continue _fun0045;
 132:
                    var3 = _closure1_slot39;
                    var2 = var6.content_id;
                    var1 = {};
                    var10 = var1;
                    var9 = var5;
                    var5 = copyDataProperties(var10, var9);
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 23;
                    var4 = var8[var4];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.createGravityGeneratedCandidateFromServer;
                    var5 = var4.bind(var5)(var6);
                    var4 = 'candidate';
                    var1[var4] = var5;
                    var3[var2] = var1;
 200:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var5.bind(var6)(var3);
            var3 = _closure1_slot52;
            if(!(var4 === var3)) { _fun0041_ip = 271; continue _fun0041 }
 267:
            _closure1_slot52 = var2;
 271:
            var1 = undefined;
            return var1;
        }
    };
    var2['LOAD_ICYMI_HYDRATED'] = var11;
    var11 = function handleLoadCustomScores(arg1) {
        _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
 0:
            var1 = arg1;
            var4 = var1.scores;
            var2 = _closure1_slot61;
            var1 = undefined;
            var9 = var2.bind(var1)(var4);
            var4 = var9.bind(var1)();
            var2 = var4.done;
            var8 = global;
            var7 = 0;
            var6 = null;
            var5 = var4;
            var4 = undefined;
            if(var2) { _fun0046_ip = 246; continue _fun0046 }
 49:
            var12 = var5.value;
            var11 = _closure1_slot41;
            var10 = var12.guild_id;
            var2 = var12.guild_score;
            var11[var10] = var2;
            var11 = _closure1_slot76;
            var10 = var12.guild_id;
            var2 = var12.guild_score;
            var2 = var11.bind(var1)(var10, var2);
            var11 = var8.Object;
            var10 = var11.keys;
            var2 = var12.custom_channel_scores;
            var11 = var10.bind(var11)(var2);
            var2 = var11.length;
            var2 = var7 < var2;
            var10 = 0;
            if(!var2) { _fun0046_ip = 228; continue _fun0046 }
 130:
            var13 = var11[var10];
            var14 = _closure1_slot42;
            var2 = var12.guild_id;
            var2 = var14[var2];
            if(!(var6 == var2)) { _fun0046_ip = 166; continue _fun0046 }
 151:
            var15 = _closure1_slot42;
            var14 = var12.guild_id;
            var2 = {};
            var15[var14] = var2;
 166:
            var14 = _closure1_slot42;
            var2 = var12.guild_id;
            var14 = var14[var2];
            var2 = var12.custom_channel_scores;
            var2 = var2[var13];
            var14[var13] = var2;
            var14 = _closure1_slot74;
            var2 = var12.custom_channel_scores;
            var2 = var2[var13];
            var2 = var14.bind(var1)(var13, var2);
            var10 = var10 + 1;
            var2 = var11.length;
            var4 = var13;
            if(var10 < var2) { _fun0046_ip = 130; continue _fun0046 }
 228:
            var10 = var9.bind(var1)();
            var2 = var10.done;
            var5 = var10;
            if(!var2) { _fun0046_ip = 49; continue _fun0046 }
 246:
            var2 = {};
            var16 = _closure1_slot41;
            var17 = var2;
            var4 = copyDataProperties(var17, var16);
            _closure1_slot41 = var2;
            var2 = {};
            var16 = _closure1_slot42;
            var17 = var2;
            var4 = copyDataProperties(var17, var16);
            _closure1_slot42 = var2;
            return var1;
        }
    };
    var2['LOAD_ICYMI_CUSTOM_SCORES'] = var11;
    var11 = function loadICYMIRecommendedGuilds(arg1) {
        var1 = arg1;
        var3 = var1.guilds;
        var2 = var3.map;
        var1 = function(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 32;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.makeDiscoverableGuild;
            var1 = arg1;
            var1 = var1.guild;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var2.bind(var3)(var1);
        _closure1_slot53 = var2;
        var2 = _closure1_slot68;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['LOAD_ICYMI_RECOMMENDED_GUILDS'] = var11;
    var11 = function handleCustomScoresUpdated(arg1) {
        _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
 0:
            var2 = arg1;
            var3 = var2.channelScores;
            var8 = var2.guildId;
            var _closure2_slot0 = var8;
            var7 = var2.guildScore;
            var2 = null;
            if(!(var2 != var7)) { _fun0047_ip = 72; continue _fun0047 }
 32:
            var4 = _closure1_slot41;
            var4[var8] = var7;
            var6 = _closure1_slot76;
            var4 = undefined;
            var4 = var6.bind(var4)(var8, var7);
            var4 = {};
            var9 = _closure1_slot41;
            var10 = var4;
            var6 = copyDataProperties(var10, var9);
            _closure1_slot41 = var4;
 72:
            if(!(var2 != var3)) { _fun0047_ip = 93; continue _fun0047 }
 76:
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
 0:
                    var1 = arg1;
                    var5 = var1.channelId;
                    var4 = var1.score;
                    var6 = _closure1_slot42;
                    var2 = _closure2_slot0;
                    var6 = var6[var2];
                    var2 = null;
                    if(!(var2 == var6)) { _fun0048_ip = 52; continue _fun0048 }
 38:
                    var7 = _closure1_slot42;
                    var6 = _closure2_slot0;
                    var2 = {};
                    var7[var6] = var2;
 52:
                    var2 = _closure1_slot42;
                    var1 = _closure2_slot0;
                    var1 = var2[var1];
                    var1[var5] = var4;
                    var2 = _closure1_slot74;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var5, var4);
                    var2 = {};
                    var8 = _closure1_slot42;
                    var9 = var2;
                    var4 = copyDataProperties(var9, var8);
                    _closure1_slot42 = var2;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
 93:
            var1 = undefined;
            return var1;
        }
    };
    var2['ICYMI_CUSTOM_SCORES_UPDATED'] = var11;
    var11 = function handleReloadTab() {
        _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
 0:
            var1 = _closure1_slot35;
            var2 = var1.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0049_ip = 36; continue _fun0049 }
 18:
            var2 = _closure1_slot70;
            var1 = undefined;
            var2 = var2.bind(var1)();
            var2 = false;
            _closure1_slot45 = var2;
            return var1;
 36:
            var1 = false;
            return var1;
        }
    };
    var2['RELOAD_ICYMI'] = var11;
    var11 = function handleGravityTabOpened() {
        _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
 0:
            var1 = true;
            _closure1_slot46 = var1;
            var1 = global;
            var3 = var1.Date;
            var1 = var3.now;
            var1 = var1.bind(var3)();
            _closure1_slot34 = var1;
            var1 = _closure1_slot44;
            if(!var1) { _fun0050_ip = 47; continue _fun0050 }
 37:
            var1 = false;
            _closure1_slot44 = var1;
            _closure1_slot45 = var1;
 47:
            var3 = _closure1_slot49;
            var1 = 5;
            if(!(var3 < var1)) { _fun0050_ip = 69; continue _fun0050 }
 58:
            var1 = _closure1_slot49;
            var1 = var1 + 1;
            _closure1_slot49 = var1;
 69:
            var1 = undefined;
            return var1;
        }
    };
    var2['ICYMI_TAB_OPENED'] = var11;
    var11 = function handleGravityFeedback() {
        var1 = 6;
        _closure1_slot49 = var1;
        var1 = undefined;
        return var1;
    };
    var2['ICYMI_FEEDBACK_GIVEN'] = var11;
    var2['MESSAGE_REACTION_ADD'] = var10;
    var11 = function handleReactionBatch(arg1) {
        _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
 0:
            var1 = arg1;
            var3 = var1.messageId;
            var6 = var1.reactions;
            var1 = _closure1_slot39;
            var3 = var1[var3];
            var1 = null;
            if(!(var1 != var3)) { _fun0051_ip = 117; continue _fun0051 }
 31:
            var5 = var3.type;
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 24;
            var4 = var4[var1];
            var1 = undefined;
            var4 = var7.bind(var1)(var4);
            var4 = var4.ICYMIItemTypes;
            var4 = var4.MESSAGE;
            if(!(var5 === var4)) { _fun0051_ip = 113; continue _fun0051 }
 74:
            var4 = _closure1_slot16;
            var2 = var4.getId;
            var5 = var2.bind(var4)();
            var4 = var3.message;
            var2 = var4.addReactionBatch;
            var2 = var2.bind(var4)(var6, var5);
            var3['message'] = var2;
            return var1;
 113:
            var1 = false;
            return var1;
 117:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_REACTION_ADD_MANY'] = var11;
    var2['MESSAGE_REACTION_REMOVE'] = var10;
    var10 = function handleRemoveAllReactions(arg1) {
        _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
 0:
            var1 = arg1;
            var3 = var1.messageId;
            var1 = _closure1_slot39;
            var4 = var1[var3];
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0052_ip = 109; continue _fun0052 }
 28:
            var3 = var4.type;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 24;
            var5 = var5[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var5);
            var2 = var2.ICYMIItemTypes;
            var2 = var2.MESSAGE;
            var2 = var3 === var2;
            if(!var2) { _fun0052_ip = 106; continue _fun0052 }
 74:
            var7 = var4.message;
            var6 = var7.set;
            var5 = 'reactions';
            var3 = new Array(0);
            var3 = var6.bind(var7)(var5, var3);
            var4['message'] = var3;
            var2 = undefined;
 106:
            var1 = var2;
 109:
            return var1;
        }
    };
    var2['MESSAGE_REACTION_REMOVE_ALL'] = var10;
    var10 = function handleRemoveEmojiReactions(arg1) {
        _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
 0:
            var1 = arg1;
            var3 = var1.messageId;
            var6 = var1.emoji;
            var1 = _closure1_slot39;
            var4 = var1[var3];
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0053_ip = 107; continue _fun0053 }
 34:
            var3 = var4.type;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 24;
            var5 = var5[var2];
            var2 = undefined;
            var2 = var7.bind(var2)(var5);
            var2 = var2.ICYMIItemTypes;
            var2 = var2.MESSAGE;
            var2 = var3 === var2;
            if(!var2) { _fun0053_ip = 104; continue _fun0053 }
 80:
            var5 = var4.message;
            var3 = var5.removeReactionsForEmoji;
            var3 = var3.bind(var5)(var6);
            var4['message'] = var3;
            var2 = undefined;
 104:
            var1 = var2;
 107:
            return var1;
        }
    };
    var2['MESSAGE_REACTION_REMOVE_EMOJI'] = var10;
    var2['CHANNEL_ACK'] = var9;
    var2['MESSAGE_ACK'] = var9;
    var9 = function handleJoinedRecommendedGuild() {
        var1 = global;
        var2 = var1.Date;
        var1 = var2.now;
        var2 = var1.bind(var2)();
        _closure1_slot54 = var2;
        var1 = undefined;
        return var1;
    };
    var2['ICYMI_JOINED_RECOMMENDED_GUILD'] = var9;
    var9 = function handleSetVideosMuted(arg1) {
        var1 = arg1;
        var2 = var1.muted;
        _closure1_slot55 = var2;
        var1 = undefined;
        return var1;
    };
    var2['ICYMI_SET_VIDEOS_MUTED'] = var9;
    var9 = function handleSetRefreshing(arg1) {
        var1 = arg1;
        var2 = var1.refreshing;
        _closure1_slot56 = var2;
        var1 = undefined;
        return var1;
    };
    var2['ICYMI_SET_REFRESHING'] = var9;
    var9 = function handleLoadMessagesSuccess(arg1) {
        _fun0054: for(var _fun0054_ip = 0; ; ) switch(_fun0054_ip) {
 0:
            var1 = arg1;
            var10 = var1.channelId;
            var5 = var1.messages;
            var1 = var1.forICYMI;
            if(var1) { _fun0054_ip = 29; continue _fun0054 }
 25:
            var1 = false;
            return var1;
 29:
            var3 = _closure1_slot17;
            var1 = var3.getChannel;
            var8 = var1.bind(var3)(var10);
            var3 = null;
            if(!(var3 != var8)) { _fun0054_ip = 762; continue _fun0054 }
 55:
            var4 = var8.type;
            var1 = _closure1_slot26;
            var1 = var1.GUILD_TEXT;
            if(!(var4 === var1)) { _fun0054_ip = 758; continue _fun0054 }
 77:
            var4 = _closure1_slot42;
            var1 = var8.guild_id;
            var4 = var4[var1];
            var6 = var3 == var4;
            var1 = undefined;
            var12 = undefined;
            if(var6) { _fun0054_ip = 105; continue _fun0054 }
 101:
            var12 = var4[var10];
 105:
            if(!(var3 != var12)) { _fun0054_ip = 168; continue _fun0054 }
 109:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 23;
            var4 = var7[var3];
            var11 = var6.bind(var1)(var4);
            var4 = var11.numberToCustomScore;
            var4 = var4.bind(var11)(var12);
            var3 = var7[var3];
            var3 = var6.bind(var1)(var3);
            var3 = var3.ICYMICustomScore;
            var3 = var3.MUTED;
            if(!(var4 !== var3)) { _fun0054_ip = 754; continue _fun0054 }
 168:
            var6 = _closure1_slot23;
            var4 = var6.isChannelMuted;
            var3 = var8.guild_id;
            var3 = var4.bind(var6)(var3, var10);
            if(var3) { _fun0054_ip = 750; continue _fun0054 }
 195:
            var3 = var5.length;
            var7 = 0;
            if(!(var7 !== var3)) { _fun0054_ip = 746; continue _fun0054 }
 209:
            var4 = var5.filter;
            var3 = function(arg1) {
                _fun0055: for(var _fun0055_ip = 0; ; ) switch(_fun0055_ip) {
 0:
                    var4 = arg1;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 25;
                    var1 = var7[var1];
                    var5 = undefined;
                    var8 = var6.bind(var5)(var1);
                    var2 = var8.age;
                    var1 = var4.id;
                    var2 = var2.bind(var8)(var1);
                    var1 = 22;
                    var1 = var7[var1];
                    var1 = var6.bind(var5)(var1);
                    var1 = var1.Millis;
                    var1 = var1.HOUR;
                    var1 = var2 < var1;
                    if(!var1) { _fun0055_ip = 119; continue _fun0055 }
 75:
                    var5 = var4.type;
                    var2 = _closure1_slot28;
                    var2 = var2.DEFAULT;
                    var2 = var5 === var2;
                    if(var2) { _fun0055_ip = 116; continue _fun0055 }
 97:
                    var4 = var4.type;
                    var3 = _closure1_slot28;
                    var3 = var3.REPLY;
                    var2 = var4 === var3;
 116:
                    var1 = var2;
 119:
                    return var1;
                }
            };
            var5 = var4.bind(var5)(var3);
            var3 = var5.slice;
            var4 = 3;
            var5 = var3.bind(var5)(var7, var4);
            var3 = var5.reverse;
            var5 = var3.bind(var5)();
            var3 = var5.length;
            if(!(!(var3 < var4))) { _fun0054_ip = 742; continue _fun0054 }
 262:
            var4 = var5.filter;
            var3 = function(arg1) {
                _fun0056: for(var _fun0056_ip = 0; ; ) switch(_fun0056_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.author;
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0056_ip = 26; continue _fun0056 }
 20:
                    var1 = var2.bot;
 26:
                    return var1;
                }
            };
            var3 = var4.bind(var5)(var3);
            var4 = var3.length;
            var3 = var5.length;
            var4 = var4 / var3;
            var3 = 0.5;
            if(!(!(var4 > var3))) { _fun0054_ip = 738; continue _fun0054 }
 310:
            var4 = global;
            var11 = var4.Math;
            var6 = var11.floor;
            var12 = var4.Date;
            var3 = var12.now;
            var13 = var3.bind(var12)();
            var14 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = 22;
            var3 = var12[var3];
            var3 = var14.bind(var1)(var3);
            var3 = var3.Millis;
            var14 = var3.HOUR;
            var3 = 2;
            var3 = var3 * var14;
            var3 = var13 / var3;
            var6 = var6.bind(var11)(var3);
            var3 = 24;
            var14 = var6 % var3;
            var13 = var8.id;
            var4 = var4.HermesInternal;
            var11 = var4.concat;
            var6 = '';
            var4 = '-';
            var4 = var11.bind(var6)(var13, var4, var14);
            var6 = {};
            var6['id'] = var4;
            var11 = _closure1_slot0;
            var3 = var12[var3];
            var3 = var11.bind(var1)(var3);
            var3 = var3.ICYMIItemTypes;
            var3 = var3.SUMMARY;
            var6['type'] = var3;
            var3 = -10;
            var6['score'] = var3;
            var3 = {};
            var3['channel_id'] = var10;
            var3['summary_id'] = var4;
            var13 = var8.guild_id;
            var3['guild_id'] = var13;
            var6['data'] = var3;
            var3 = _closure1_slot38;
            var3[var4] = var6;
            var3 = {};
            var17 = var3;
            var16 = var6;
            var6 = copyDataProperties(var17, var16);
            var6 = {'id': null, 'topic': '', 'summShort': ''};
            var6['id'] = var4;
            var14 = var5.map;
            var13 = function(arg1) {
                _fun0057: for(var _fun0057_ip = 0; ; ) switch(_fun0057_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.author;
                    var1 = null;
                    var4 = var1 == var3;
                    var2 = undefined;
                    if(var4) { _fun0057_ip = 25; continue _fun0057 }
 20:
                    var2 = var3.id;
 25:
                    var3 = var1 != var2;
                    var1 = '';
                    if(!var3) { _fun0057_ip = 39; continue _fun0057 }
 36:
                    var1 = var2;
 39:
                    return var1;
                }
            };
            var13 = var14.bind(var5)(var13);
            var6['people'] = var13;
            var13 = var5[var7];
            var13 = var13.id;
            var6['startId'] = var13;
            var14 = var5.length;
            var13 = 1;
            var13 = var14 - var13;
            var13 = var5[var13];
            var13 = var13.id;
            var6['endId'] = var13;
            var13 = var5.length;
            var6['count'] = var13;
            var6['channelId'] = var10;
            var10 = 33;
            var10 = var12[var10];
            var10 = var11.bind(var1)(var10);
            var10 = var10.SummaryType;
            var10 = var10.SOURCE_2;
            var6['type'] = var10;
            var6['source'] = var7;
            var10 = new Array(0);
            var6['reactions'] = var10;
            var11 = var5.map;
            var10 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 31;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.createMessageRecord;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var11.bind(var5)(var10);
            var6['messages'] = var10;
            var10 = var5.map;
            var9 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var9 = var10.bind(var5)(var9);
            var6['messageIds'] = var9;
            var8 = var8.guild_id;
            var6['guildId'] = var8;
            var6['reactionCount'] = var7;
            var5 = var5.length;
            var6['numTotalMessages'] = var5;
            var5 = 'summary';
            var3[var5] = var6;
            var2 = _closure1_slot39;
            var2[var4] = var3;
            return var1;
 738:
            var1 = false;
            return var1;
 742:
            var1 = false;
            return var1;
 746:
            var1 = false;
            return var1;
 750:
            var1 = false;
            return var1;
 754:
            var1 = false;
            return var1;
 758:
            var1 = false;
            return var1;
 762:
            var1 = false;
            return var1;
        }
    };
    var2['LOAD_MESSAGES_SUCCESS'] = var9;
    var9 = function handleSetFocusedTab(arg1) {
        var1 = arg1;
        var2 = var1.focused;
        _closure1_slot57 = var2;
        var1 = undefined;
        return var1;
    };
    var2['ICYMI_SET_FOCUSED_TAB'] = var9;
    var9 = function handleLoadCurrentStatusMedia(arg1) {
        _fun0058: for(var _fun0058_ip = 0; ; ) switch(_fun0058_ip) {
 0:
            var1 = arg1;
            var5 = var1.attachments;
            var3 = var1.createdAtMs;
            var6 = null;
            var1 = var6 != var5;
            var2 = null;
            if(!var1) { _fun0058_ip = 70; continue _fun0058 }
 26:
            var1 = var5.length;
            var4 = 0;
            var2 = null;
            if(!(var4 !== var1)) { _fun0058_ip = 70; continue _fun0058 }
 39:
            var1 = new Array(2);
            var1[0] = var3;
            var3 = new Array(0);
            var9 = var3;
            var8 = var5;
            var7 = 0;
            var4 = arraySpread(var9, var8, var7);
            var1[1] = var3;
            var2 = var1;
 70:
            _closure1_slot47 = var2;
            var1 = undefined;
            return var1;
        }
    };
    var2['LOAD_ICYMI_CURRENT_STATUS_MEDIA'] = var9;
    var4 = function handleScrollEvent(arg1) {
        var1 = arg1;
        var2 = var1.timestamp;
        _closure1_slot59 = var2;
        var1 = undefined;
        return var1;
    };
    var2['ICYMI_SCROLL_EVENT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var19 = var4;
    var17 = var2;
    var2 = new var19[var8](var18, var17, var16);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 36;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/ICYMIStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();