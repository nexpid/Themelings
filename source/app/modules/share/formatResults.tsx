// app/modules/share/formatResults.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
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
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 343; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
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
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot12;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot12;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
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
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
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
 343:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
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
    var _closure1_slot12 = var1;
    var4 = function getChannelIdFromDestinationId(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var3 = var1.type;
            var2 = 'channel';
            if(!(var2 !== var3)) { _fun0004_ip = 55; continue _fun0004 }
 16:
            var4 = _closure1_slot5;
            var3 = var4.getDMFromUserId;
            var2 = var1.id;
            var3 = var3.bind(var4)(var2);
            var2 = null;
            var4 = var2 != var3;
            var2 = undefined;
            if(!var4) { _fun0004_ip = 53; continue _fun0004 }
 50:
            var2 = var3;
 53:
            return var2;
 55:
            var1 = var1.id;
            return var1;
        }
    };
    var _closure1_slot13 = var4;
    var1 = function _getOrResolveChannelIdFromDestinationId() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 112; continue _fun0005 }
 10:
                    var4 = var6;
                    var2 = _closure1_slot13;
                    var3 = undefined;
                    var2 = var2.bind(var3)(var6);
                    var6 = null;
                    if(!(var6 == var2)) { _fun0005_ip = 109; continue _fun0005 }
 33:
                    var6 = var4;
                    var7 = var6.type;
                    var6 = 'user';
                    if(!(var6 !== var7)) { _fun0005_ip = 52; continue _fun0005 }
 49:
                    return var3;
 52: // try_start_0
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 7;
                    var5 = var7[var5];
                    var6 = var6.bind(var3)(var5);
                    var5 = var6.getOrEnsurePrivateChannel;
                    var4 = var4.id;
                    var4 = var5.bind(var6)(var4);
                    SaveGenerator(address=92);
 90:
                    return var4;
 92:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 101; continue _fun0005 }
 98: // try_end0
                    return var4;
 101:
                    return var4;
 104: // catch_target0
                    CatchBlockStart(arg_register=3);
                    return var3;
 109:
                    return var2;
 112:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot14 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function createAutocompleterResultForDestination(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var3 = var1.type;
            var2 = 'user';
            if(!(var2 !== var3)) { _fun0006_ip = 53; continue _fun0006 }
 16:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 9;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = var1.id;
            var2 = var3.bind(var4)(var2);
            return var2;
 53:
            var3 = _closure1_slot7;
            var2 = var3.getUser;
            var1 = var1.id;
            var3 = var2.bind(var3)(var1);
            var1 = null;
            var2 = var1 != var3;
            if(!var2) { _fun0006_ip = 140; continue _fun0006 }
 85:
            var2 = {};
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 8;
            var5 = var5[var4];
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var4 = var4.AutocompleterResultTypes;
            var4 = var4.USER;
            var2['type'] = var4;
            var2['record'] = var3;
            var3 = 0;
            var2['score'] = var3;
            var1 = var2;
 140:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function mergeAndDedupeResultsWithHeaders(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var2 = arg2;
            var1 = global;
            var1 = var1.Set;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var18 = var3;
            var1 = new var18[var1](var17);
            var11 = var1 instanceof Object ? var1 : var3;
            var10 = null;
            if(!(var10 != var2)) { _fun0007_ip = 93; continue _fun0007 }
 37:
            var1 = _closure1_slot11;
            var4 = undefined;
            var3 = var1.bind(var4)(var2);
            var2 = var3.bind(var4)();
            var1 = var2.done;
            if(var1) { _fun0007_ip = 93; continue _fun0007 }
 63:
            var5 = var2.value;
            var1 = var11.add;
            var1 = var1.bind(var11)(var5);
            var5 = var3.bind(var4)();
            var1 = var5.done;
            var2 = var5;
            if(!var1) { _fun0007_ip = 63; continue _fun0007 }
 93:
            var1 = new Array(0);
            var3 = _closure1_slot11;
            var8 = undefined;
            var2 = arg1;
            var7 = var3.bind(var8)(var2);
            var3 = var7.bind(var8)();
            var2 = var3.done;
            var6 = 8;
            var5 = undefined;
            var4 = var3;
            var3 = undefined;
            if(var2) { _fun0007_ip = 297; continue _fun0007 }
 139:
            var16 = var4.value;
            var14 = var5;
            var12 = var3;
            if(!(var10 != var16)) { _fun0007_ip = 273; continue _fun0007 }
 154:
            var13 = var16.type;
            var15 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var15.bind(var8)(var2);
            var2 = var2.AutocompleterResultTypes;
            var2 = var2.HEADER;
            var14 = var16;
            var12 = var3;
            if(!(var13 !== var2)) { _fun0007_ip = 273; continue _fun0007 }
 198:
            var2 = var16.record;
            var2 = var2.id;
            var13 = var11.has;
            var13 = var13.bind(var11)(var2);
            var14 = var5;
            var12 = var2;
            if(var13) { _fun0007_ip = 273; continue _fun0007 }
 228:
            var13 = var11.add;
            var13 = var13.bind(var11)(var2);
            var13 = var5;
            if(!(var10 != var5)) { _fun0007_ip = 257; continue _fun0007 }
 245:
            var15 = var1.push;
            var15 = var15.bind(var1)(var5);
            var13 = undefined;
 257:
            var15 = var1.push;
            var15 = var15.bind(var1)(var16);
            var14 = var13;
            var12 = var2;
 273:
            var13 = var7.bind(var8)();
            var2 = var13.done;
            var5 = var14;
            var3 = var12;
            var4 = var13;
            if(!var2) { _fun0007_ip = 139; continue _fun0007 }
 297:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function getLastChannelResult(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 != var3)) { _fun0008_ip = 154; continue _fun0008 }
 12:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 9;
            var2 = var5[var2];
            var9 = undefined;
            var2 = var4.bind(var9)(var2);
            var4 = var2.bind(var9)(var3);
            var3 = var1 == var4;
            var2 = null;
            if(var3) { _fun0008_ip = 152; continue _fun0008 }
 51:
            var3 = _closure1_slot8;
            var5 = var3.bind(var9)(var4);
            var3 = null;
            if(!var5) { _fun0008_ip = 149; continue _fun0008 }
 65:
            var7 = var4.type;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 8;
            var5 = var10[var5];
            var5 = var8.bind(var9)(var5);
            var5 = var5.AutocompleterResultTypes;
            var5 = var5.USER;
            var5 = var7 === var5;
            if(var5) { _fun0008_ip = 141; continue _fun0008 }
 109:
            var9 = _closure1_slot6;
            var8 = var9.can;
            var6 = _closure1_slot9;
            var7 = var6.VIEW_CHANNEL;
            var6 = var4.record;
            var5 = var8.bind(var9)(var7, var6);
 141:
            var3 = null;
            if(!var5) { _fun0008_ip = 149; continue _fun0008 }
 146:
            var3 = var4;
 149:
            var2 = var3;
 152:
            return var2;
 154:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function filterResults(arg1, arg2) {
        var3 = arg1;
        var2 = arg2;
        var _closure2_slot0 = var2;
        var2 = var3.filter;
        var1 = function(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var6 = arg1;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 11;
                var1 = var3[var1];
                var10 = undefined;
                var2 = var2.bind(var10)(var1);
                var1 = var2.isNotNullish;
                var1 = var1.bind(var2)(var6);
                if(!var1) { _fun0009_ip = 374; continue _fun0009 }
 45:
                var3 = var6.type;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var11 = 8;
                var2 = var2[var11];
                var2 = var4.bind(var10)(var2);
                var2 = var2.AutocompleterResultTypes;
                var2 = var2.HEADER;
                var2 = var3 === var2;
                if(var2) { _fun0009_ip = 371; continue _fun0009 }
 92:
                var3 = _closure1_slot8;
                var3 = var3.bind(var10)(var6);
                if(!var3) { _fun0009_ip = 368; continue _fun0009 }
 107:
                var5 = _closure2_slot0;
                var8 = var6.type;
                var9 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var11];
                var4 = var9.bind(var10)(var4);
                var4 = var4.AutocompleterResultTypes;
                var4 = var4.USER;
                if(!(var8 !== var4)) { _fun0009_ip = 327; continue _fun0009 }
 155:
                var8 = var6.type;
                var9 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var11];
                var4 = var9.bind(var10)(var4);
                var4 = var4.AutocompleterResultTypes;
                var4 = var4.GROUP_DM;
                var4 = var8 === var4;
                if(var4) { _fun0009_ip = 325; continue _fun0009 }
 199:
                var8 = var6.record;
                var9 = var8.type;
                var8 = _closure1_slot10;
                var8 = var8.GUILD_FORUM;
                var8 = var9 !== var8;
                if(!var8) { _fun0009_ip = 252; continue _fun0009 }
 227:
                var9 = var6.record;
                var10 = var9.type;
                var9 = _closure1_slot10;
                var9 = var9.GUILD_MEDIA;
                var8 = var10 !== var9;
 252:
                if(!var8) { _fun0009_ip = 287; continue _fun0009 }
 255:
                var12 = _closure1_slot6;
                var11 = var12.can;
                var9 = _closure1_slot9;
                var10 = var9.VIEW_CHANNEL;
                var9 = var6.record;
                var8 = var11.bind(var12)(var10, var9);
 287:
                if(!var8) { _fun0009_ip = 322; continue _fun0009 }
 290:
                var12 = _closure1_slot6;
                var11 = var12.can;
                var9 = _closure1_slot9;
                var10 = var9.SEND_MESSAGES;
                var9 = var6.record;
                var8 = var11.bind(var12)(var10, var9);
 322:
                var4 = var8;
 325:
                _fun0009_ip = 365; continue _fun0009;
 327:
                if(var5) { _fun0009_ip = 362; continue _fun0009 }
 330:
                var8 = _closure1_slot5;
                var7 = var8.getDMChannelFromUserId;
                var6 = var6.record;
                var6 = var6.id;
                var7 = var7.bind(var8)(var6);
                var6 = null;
                var5 = var6 != var7;
 362:
                var4 = var5;
 365:
                var3 = var4;
 368:
                var2 = var3;
 371:
                var1 = var2;
 374:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.isAllowedType;
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.Permissions;
    var _closure1_slot9 = var8;
    var5 = var5.ChannelTypes;
    var _closure1_slot10 = var5;
    var5 = 13;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/share/formatResults.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function formatResults(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var3 = arg1;
            var5 = var3.results;
            var1 = var3.hasQuery;
            var9 = var3.queryMode;
            var _closure2_slot0 = var9;
            var15 = var3.frequentChannels;
            var18 = var3.targetDestination;
            var14 = var3.selectedDestinations;
            var10 = var3.pinnedDestinations;
            var7 = var3.originDestination;
            var _closure2_slot1 = var7;
            var4 = var3.includeMissingDMs;
            if(var1) { _fun0010_ip = 381; continue _fun0010 }
 73:
            var1 = null;
            if(!(var1 != var10)) { _fun0010_ip = 90; continue _fun0010 }
 79:
            var6 = var10.length;
            var3 = 0;
            if(!(!(var6 > var3))) { _fun0010_ip = 96; continue _fun0010 }
 90:
            var6 = new Array(0);
            _fun0010_ip = 111; continue _fun0010;
 96:
            var8 = var10.map;
            var3 = function(arg1) {
                var3 = _closure1_slot15;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var6 = var8.bind(var10)(var3);
 111:
            var10 = _closure1_slot4;
            var8 = var10.getChannelHistory;
            var12 = var8.bind(var10)();
            var8 = var12.length;
            var10 = 0;
            if(!(!(var8 > var10))) { _fun0010_ip = 145; continue _fun0010 }
 139:
            var13 = new Array(0);
            _fun0010_ip = 160; continue _fun0010;
 145:
            var11 = var12.map;
            var8 = function(arg1) {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 9;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var11.bind(var12)(var8);
 160:
            var8 = var15.length;
            if(!(!(var8 > var10))) { _fun0010_ip = 175; continue _fun0010 }
 169:
            var12 = new Array(0);
            _fun0010_ip = 190; continue _fun0010;
 175:
            var11 = var15.map;
            var8 = function(arg1) {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 9;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = arg1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var11.bind(var15)(var8);
 190:
            var11 = _closure1_slot18;
            var8 = new Array(1);
            var21 = var8;
            var20 = var6;
            var19 = 0;
            var15 = arraySpread(var21, var20, var19);
            var16 = var1 != var18;
            var6 = null;
            if(!var16) { _fun0010_ip = 230; continue _fun0010 }
 219:
            var17 = _closure1_slot15;
            var16 = undefined;
            var6 = var17.bind(var16)(var18);
 230:
            var8[var15] = var6;
            var6 = 1;
            var19 = var15 + var6;
            var21 = var8;
            var20 = var13;
            var19 = arraySpread(var21, var20, var19);
            var21 = var8;
            var20 = var12;
            var6 = arraySpread(var21, var20, var19);
            var6 = undefined;
            var8 = var11.bind(var6)(var8, var4);
            var12 = var1 == var14;
            var11 = undefined;
            if(var12) { _fun0010_ip = 295; continue _fun0010 }
 279:
            var13 = var14.find;
            var12 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.isEqual;
                var2 = _closure2_slot1;
                var1 = arg1;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var11 = var13.bind(var14)(var12);
 295:
            var11 = var1 != var11;
            if(!(var1 != var7)) { _fun0010_ip = 321; continue _fun0010 }
 303:
            if(var11) { _fun0010_ip = 321; continue _fun0010 }
 306:
            var11 = var7.id;
            var7 = new Array(1);
            var7[0] = var11;
            _fun0010_ip = 325; continue _fun0010;
 321:
            var7 = new Array(0);
 325:
            if(!(var1 == var9)) { _fun0010_ip = 355; continue _fun0010 }
 329:
            var1 = _closure1_slot16;
            var9 = var1.bind(var6)(var8, var7);
            var7 = var9.slice;
            var1 = 15;
            var1 = var7.bind(var9)(var10, var1);
            _fun0010_ip = 379; continue _fun0010;
 355:
            var3 = _closure1_slot16;
            var7 = var8.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var7.bind(var8)(var2);
            var1 = var3.bind(var6)(var2);
 379:
            return var1;
 381:
            var3 = _closure1_slot16;
            var1 = _closure1_slot18;
            var2 = undefined;
            var1 = var1.bind(var2)(var5, var4);
            var1 = var3.bind(var2)(var1);
            return var1;
        }
    };
    var3['default'] = var5;
    var5 = function getDestinationIdFromChannelId(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var2 = arg1;
            var4 = _closure1_slot5;
            var3 = var4.getChannel;
            var3 = var3.bind(var4)(var2);
            var4 = null;
            var5 = var4 == var3;
            var4 = undefined;
            if(var5) { _fun0011_ip = 36; continue _fun0011 }
 31:
            var4 = var3.type;
 36:
            var1 = _closure1_slot10;
            var1 = var1.DM;
            if(!(var4 !== var1)) { _fun0011_ip = 66; continue _fun0011 }
 50:
            var1 = {};
            var4 = 'channel';
            var1['type'] = var4;
            var1['id'] = var2;
            _fun0011_ip = 95; continue _fun0011;
 66:
            var2 = {};
            var4 = 'user';
            var2['type'] = var4;
            var4 = var3.recipients;
            var3 = 0;
            var3 = var4[var3];
            var2['id'] = var3;
            var1 = var2;
 95:
            return var1;
        }
    };
    var3['getDestinationIdFromChannelId'] = var5;
    var5 = function destinationKey(arg1) {
        var1 = arg1;
        var5 = var1.type;
        var4 = var1.id;
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = '';
        var1 = '-';
        var1 = var3.bind(var2)(var5, var1, var4);
        return var1;
    };
    var3['destinationKey'] = var5;
    var3['getChannelIdFromDestinationId'] = var4;
    var4 = function getOrResolveChannelIdFromDestinationId() {
        var1 = undefined;
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getOrResolveChannelIdFromDestinationId'] = var4;
    var2 = function formatResultsWithHeaders(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var7 = var1.results;
            var2 = var1.selectedResult;
            var6 = var1.hasNonEmptyQuery;
            var12 = var1.queryMode;
            var _closure2_slot0 = var12;
            var10 = var1.selectedChannelId;
            var13 = var1.frequentChannels;
            var1 = null;
            if(!(var1 == var2)) { _fun0012_ip = 61; continue _fun0012 }
 55:
            var5 = new Array(0);
            _fun0012_ip = 83; continue _fun0012;
 61:
            var2 = var2.record;
            var3 = var2.id;
            var2 = new Array(1);
            var2[0] = var3;
            var5 = var2;
 83:
            var18 = _closure1_slot0;
            var3 = _closure1_slot2;
            var8 = 8;
            var11 = var3[var8];
            var4 = undefined;
            var14 = var18.bind(var4)(var11);
            var11 = var14.createHeaderResult;
            var16 = 10;
            var15 = var3[var16];
            var15 = var18.bind(var4)(var15);
            var17 = var15.intl;
            var15 = var17.string;
            var3 = var3[var16];
            var3 = var18.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.qm9dSk;
            var3 = var15.bind(var17)(var3);
            var3 = var11.bind(var14)(var3);
            if(var6) { _fun0012_ip = 403; continue _fun0012 }
 174:
            var11 = var13.map;
            var6 = function(arg1) {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 9;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = arg1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var11.bind(var13)(var6);
            var11 = var13.filter;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = 11;
            var6 = var15[var6];
            var6 = var14.bind(var4)(var6);
            var6 = var6.isNotNullish;
            var13 = var11.bind(var13)(var6);
            var11 = var13.filter;
            var6 = _closure1_slot8;
            var11 = var11.bind(var13)(var6);
            var6 = _closure1_slot16;
            if(!(var1 == var12)) { _fun0012_ip = 359; continue _fun0012 }
 247:
            var15 = _closure1_slot0;
            var1 = _closure1_slot2;
            var8 = var1[var8];
            var12 = var15.bind(var4)(var8);
            var8 = var12.createHeaderResult;
            var13 = var1[var16];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var1 = var1[var16];
            var1 = var15.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.80lOZ2;
            var1 = var13.bind(var14)(var1);
            var8 = var8.bind(var12)(var1);
            var1 = new Array(3);
            var1[0] = var8;
            var8 = _closure1_slot17;
            var8 = var8.bind(var4)(var10);
            var1[1] = var8;
            var1[2] = var3;
            var19 = 3;
            var21 = var1;
            var20 = var11;
            var8 = arraySpread(var21, var20, var19);
            _fun0012_ip = 395; continue _fun0012;
 359:
            var8 = new Array(1);
            var8[0] = var3;
            var10 = var11.filter;
            var9 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var20 = var10.bind(var11)(var9);
            var19 = 1;
            var21 = var8;
            var9 = arraySpread(var21, var20, var19);
            var1 = var8;
 395:
            var1 = var6.bind(var4)(var1, var5);
            return var1;
 403:
            var1 = new Array(1);
            var1[0] = var3;
            var3 = _closure1_slot16;
            var6 = var7.filter;
            var2 = _closure1_slot8;
            var2 = var6.bind(var7)(var2);
            var20 = var3.bind(var4)(var2, var5);
            var19 = 1;
            var21 = var1;
            var2 = arraySpread(var21, var20, var19);
            return var1;
        }
    };
    var3['formatResultsWithHeaders'] = var2;
    return var1;
})();