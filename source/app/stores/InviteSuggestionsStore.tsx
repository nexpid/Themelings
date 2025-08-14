// app/stores/InviteSuggestionsStore.tsx
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
            _closure1_slot25 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot25 = var1;
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
            if(!var2) { _fun0002_ip = 45; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0002_ip = 54; continue _fun0002 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0002_ip = 342; continue _fun0002 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 322; continue _fun0002 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 282; continue _fun0002 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 269; continue _fun0002 }
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
            if(!var7) { _fun0002_ip = 162; continue _fun0002 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0002_ip = 178; continue _fun0002 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 233; continue _fun0002 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 246; continue _fun0002 }
 233:
            var9 = _closure1_slot27;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0002_ip = 264; continue _fun0002;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0002_ip = 282; continue _fun0002;
 269:
            var7 = _closure1_slot27;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0002_ip = 322; continue _fun0002 }
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
            if(!var4) { _fun0002_ip = 329; continue _fun0002 }
 325:
            _closure2_slot0 = var4;
 329:
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
 342:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot26 = var1;
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
    var _closure1_slot27 = var1;
    var1 = function _computeRows(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = global;
            var3 = var2.Set;
            var4 = var3.prototype;
            var4 = Object.create(var4, {constructor: {value: var3}});
            var15 = var4;
            var3 = new var15[var3](var14);
            var7 = var3 instanceof Object ? var3 : var4;
            var3 = _closure1_slot17;
            var9 = null;
            var5 = var9 == var3;
            var3 = undefined;
            var6 = undefined;
            if(var5) { _fun0005_ip = 79; continue _fun0005 }
 50:
            var8 = _closure1_slot20;
            var5 = _closure1_slot14;
            var5 = var5.EMBEDDED_APPLICATION;
            var6 = undefined;
            if(!(var8 !== var5)) { _fun0005_ip = 79; continue _fun0005 }
 70:
            var5 = _closure1_slot17;
            var6 = var5.id;
 79:
            var10 = _closure1_slot0;
            var5 = _closure1_slot1;
            var8 = 12;
            var5 = var5[var8];
            var11 = var10.bind(var3)(var5);
            var10 = var11.getMostRecentDMedUser;
            var5 = _closure1_slot21;
            var5 = var10.bind(var11)(var5, var6);
            var9 = var9 == var5;
            if(var9) { _fun0005_ip = 142; continue _fun0005 }
 122:
            var12 = _closure1_slot11;
            var11 = var12.isBlockedOrIgnored;
            var10 = var5.id;
            var9 = var11.bind(var12)(var10);
 142:
            if(var9) { _fun0005_ip = 160; continue _fun0005 }
 145:
            var9 = var7.add;
            var5 = var5.id;
            var5 = var9.bind(var7)(var5);
 160:
            var9 = _closure1_slot26;
            var10 = _closure1_slot8;
            var5 = var10.getUserAffinities;
            var5 = var5.bind(var10)();
            var10 = var9.bind(var3)(var5);
            var9 = var10.bind(var3)();
            var5 = var9.done;
            if(var5) { _fun0005_ip = 231; continue _fun0005 }
 195:
            var5 = var9.value;
            var11 = var7.add;
            var5 = var5.otherUserId;
            var5 = var11.bind(var7)(var5);
            var11 = var10.bind(var3)();
            var5 = var11.done;
            var9 = var11;
            if(!var5) { _fun0005_ip = 195; continue _fun0005 }
 231:
            var2 = var2.Set;
            var5 = var2.prototype;
            var5 = Object.create(var5, {constructor: {value: var2}});
            var15 = var5;
            var2 = new var15[var2](var14);
            var5 = var2 instanceof Object ? var2 : var5;
            var _closure2_slot0 = var5;
            var9 = _closure1_slot20;
            var2 = _closure1_slot14;
            var2 = var2.EMBEDDED_APPLICATION;
            if(!(var9 === var2)) { _fun0005_ip = 408; continue _fun0005 }
 282:
            var9 = _closure1_slot7;
            var2 = var9.getChannelHistory;
            var10 = var2.bind(var9)();
            var9 = var10.map;
            var2 = function(arg1) {
                var3 = _closure1_slot9;
                var2 = var3.getChannel;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var9.bind(var10)(var2);
            var9 = var10.filter;
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            var2 = 13;
            var2 = var12[var2];
            var2 = var11.bind(var3)(var2);
            var2 = var2.isNotNullish;
            var10 = var9.bind(var10)(var2);
            var9 = var10.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure1_slot12;
                var1 = var1.GUILD_TEXT;
                var1 = var2 === var1;
                return var1;
            };
            var10 = var9.bind(var10)(var2);
            var9 = var10.filter;
            var2 = function(arg1) {
                var4 = _closure1_slot10;
                var3 = var4.can;
                var1 = _closure1_slot13;
                var2 = var1.SEND_MESSAGES;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var11 = var9.bind(var10)(var2);
            var10 = var11.slice;
            var9 = 0;
            var2 = 3;
            var9 = var10.bind(var11)(var9, var2);
            var2 = var9.forEach;
            var1 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.add;
                var1 = arg1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var9)(var1);
 408:
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var8];
            var3 = var2.bind(var3)(var1);
            var2 = var3.generateRowsForQuery;
            var1 = {};
            var8 = arg1;
            var1['query'] = var8;
            var8 = _closure1_slot21;
            var1['omitUserIds'] = var8;
            var1['suggestedUserIds'] = var7;
            var7 = 100;
            var1['maxRowsWithoutQuery'] = var7;
            var1['omitGuildId'] = var6;
            var1['suggestedChannelIds'] = var5;
            var4 = _closure1_slot20;
            var1['inviteTargetType'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function _updateInviteSuggestions(arg1) {
        var3 = arg1;
        _closure1_slot22 = var3;
        var1 = global;
        var1 = var1.Map;
        var4 = var1.prototype;
        var4 = Object.create(var4, {constructor: {value: var1}});
        var6 = var4;
        var1 = new var6[var1](var5);
        var1 = var1 instanceof Object ? var1 : var4;
        _closure1_slot23 = var1;
        var2 = var3.forEach;
        var1 = function(arg1, arg2) {
            var4 = _closure1_slot23;
            var3 = var4.set;
            var2 = {};
            var1 = arg2;
            var2['index'] = var1;
            var1 = arg1;
            var1 = var3.bind(var4)(var1, var2);
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot29 = var1;
    var2 = global;
    var10 = var2.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
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
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = 8;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot10 = var8;
    var8 = 9;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot11 = var8;
    var8 = 10;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var9 = var8.ChannelTypes;
    var _closure1_slot12 = var9;
    var8 = var8.Permissions;
    var _closure1_slot13 = var8;
    var8 = 11;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.InviteTargetTypes;
    var _closure1_slot14 = var8;
    var8 = var2.Set;
    var9 = var8.prototype;
    var9 = Object.create(var9, {constructor: {value: var8}});
    var14 = var9;
    var8 = new var14[var8](var13);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot21 = var8;
    var8 = new Array(0);
    var _closure1_slot22 = var8;
    var2 = var2.Map;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var14 = var8;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot23 = var2;
    var2 = {'numFriends': 0, 'numDms': 0, 'numGroupDms': 0, 'numChannels': 0};
    var _closure1_slot24 = var2;
    var2 = 14;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function InviteSuggestionsStore() {
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
                var1 = _closure1_slot25;
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
            var4 = this;
            var3 = var4.waitFor;
            var2 = _closure1_slot11;
            var1 = _closure1_slot8;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'getInviteSuggestionRows';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot22;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getTotalSuggestionsCount';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot15;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getInitialCounts';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot24;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getSelectedInviteMetadata';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var5 = arg1;
                var2 = _closure1_slot23;
                var1 = var2.get;
                var6 = var1.bind(var2)(var5);
                var2 = _closure1_slot8;
                var1 = var2.getUserAffinities;
                var4 = var1.bind(var2)();
                var2 = var4.map;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.otherUserId;
                    return var1;
                };
                var4 = var2.bind(var4)(var1);
                var1 = null;
                var2 = var1 != var6;
                if(!var2) { _fun0007_ip = 119; continue _fun0007 }
 60:
                var2 = {};
                var6 = var6.index;
                var2['rowNum'] = var6;
                var5 = var5.isSuggested;
                var2['isAffinitySuggestion'] = var5;
                var5 = _closure1_slot22;
                var5 = var5.length;
                var2['numTotal'] = var5;
                var4 = var4.length;
                var2['numAffinityConnections'] = var4;
                var3 = _closure1_slot16;
                var2['isFiltered'] = var3;
                var1 = var2;
 119:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'InviteSuggestionsStore';
    var8['displayName'] = var2;
    var2 = 15;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function refreshInviteSuggestions(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var4 = arg1;
            var8 = var4.omitUserIds;
            var3 = var4.guild;
            var2 = var4.channel;
            var1 = var4.applicationId;
            var6 = var4.inviteTargetType;
            var4 = null;
            var5 = var4 != var2;
            if(!var5) { _fun0008_ip = 42; continue _fun0008 }
 39:
            var4 = var3;
 42:
            var _closure1_slot17 = var4;
            var _closure1_slot18 = var2;
            var _closure1_slot19 = var1;
            var _closure1_slot20 = var6;
            var2 = _closure1_slot11;
            var1 = var2.getBlockedOrIgnoredIDs;
            var7 = var1.bind(var2)();
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 12;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var2);
            var4 = var5.getUsersAlreadyJoined;
            var2 = {};
            var9 = _closure1_slot18;
            var2['channel'] = var9;
            var9 = _closure1_slot19;
            var2['applicationId'] = var9;
            var2['inviteTargetType'] = var6;
            var6 = var4.bind(var5)(var2);
            var2 = global;
            var5 = var2.Set;
            var2 = new Array(0);
            var10 = 0;
            var12 = var2;
            var11 = var8;
            var10 = arraySpread(var12, var11, var10);
            var12 = var2;
            var11 = var7;
            var10 = arraySpread(var12, var11, var10);
            var12 = var2;
            var11 = var6;
            var4 = arraySpread(var12, var11, var10);
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var13 = var4;
            var12 = var2;
            var2 = new var13[var5](var12, var11);
            var2 = var2 instanceof Object ? var2 : var4;
            _closure1_slot21 = var2;
            var2 = false;
            var _closure1_slot16 = var2;
            var4 = _closure1_slot28;
            var2 = '';
            var2 = var4.bind(var1)(var2);
            var5 = var2.rows;
            var2 = var2.counts;
            var4 = _closure1_slot29;
            var4 = var4.bind(var1)(var5);
            _closure1_slot24 = var2;
            var2 = _closure1_slot22;
            var2 = var2.length;
            var _closure1_slot15 = var2;
            return var1;
        }
    };
    var2['LOAD_INVITE_SUGGESTIONS'] = var9;
    var4 = function handleSearch(arg1) {
        var1 = arg1;
        var4 = var1.query;
        var1 = '';
        var1 = var1 !== var4;
        _closure1_slot16 = var1;
        var3 = _closure1_slot28;
        var1 = undefined;
        var3 = var3.bind(var1)(var4);
        var3 = var3.rows;
        var5 = var3.sort;
        var4 = function(arg1, arg2) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var3 = arg1;
                var2 = arg2;
                var1 = var3.score;
                var6 = null;
                var4 = var6 != var1;
                var1 = 0;
                if(!var4) { _fun0009_ip = 54; continue _fun0009 }
 23:
                var4 = var2.score;
                var4 = var6 != var4;
                var1 = 0;
                if(!var4) { _fun0009_ip = 54; continue _fun0009 }
 38:
                var3 = var3.score;
                var2 = var2.score;
                var1 = var3 - var2;
 54:
                return var1;
            }
        };
        var4 = var5.bind(var3)(var4);
        var2 = _closure1_slot29;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['INVITE_SUGGESTIONS_SEARCH'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/InviteSuggestionsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();