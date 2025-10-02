// app/modules/guild/markGuildsAsRead.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            var9 = _closure1_slot10;
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
            var7 = _closure1_slot10;
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
    var _closure1_slot9 = var1;
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
    var _closure1_slot10 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ReadStateTypes;
    var _closure1_slot8 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild/markGuildsAsRead.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function markGuildsAsRead(arg1, arg2, arg3) {
        var8 = arg1;
        var6 = _closure1_slot1;
        var5 = _closure1_slot2;
        var3 = 6;
        var4 = var5[var3];
        var3 = undefined;
        var9 = var6.bind(var3)(var4);
        var7 = var9.flatMap;
        var4 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var6 = arg1;
                var4 = _closure1_slot5;
                var1 = var4.getSelectableChannelIds;
                var3 = var1.bind(var4)(var6);
                var1 = var4.getVocalChannelIds;
                var5 = var1.bind(var4)(var6);
                var1 = new Array(0);
                var14 = 0;
                var16 = var1;
                var15 = var3;
                var14 = arraySpread(var16, var15, var14);
                var16 = var1;
                var15 = var5;
                var4 = arraySpread(var16, var15, var14);
                var5 = _closure1_slot4;
                var4 = var5.getActiveJoinedThreadsForGuild;
                var7 = var4.bind(var5)(var6);
                var2 = _closure1_slot9;
                var6 = undefined;
                var5 = var2.bind(var6)(var3);
                var3 = var5.bind(var6)();
                var2 = var3.done;
                var4 = null;
                if(var2) { _fun0004_ip = 14; continue _fun0004 }
case 36:
                var2 = var3.value;
                var2 = var7[var2];
                if(!(var4 == var2)) { _fun0004_ip = 37; continue _fun0004 }
case 38:
                var2 = {};
case 37:
                var10 = var2;
                for(var2 in var10)
case 39:
                {
case 40:
                    var13 = var2;
                    var12 = var1.push;
                    var12 = var12.bind(var1)(var13);
                    _fun0004_ip = 39; continue _fun0004;
                }
case 41:
                var8 = var5.bind(var6)();
                var2 = var8.done;
                var3 = var8;
                if(!var2) { _fun0004_ip = 36; continue _fun0004 }
case 14:
                return var1;
            }
        };
        var9 = var7.bind(var9)(var8, var4);
        var7 = var9.map;
        var4 = function(arg1) {
            var4 = arg1;
            var1 = {};
            var1['channelId'] = var4;
            var3 = _closure1_slot8;
            var3 = var3.CHANNEL;
            var1['readStateType'] = var3;
            var3 = _closure1_slot6;
            var2 = var3.lastMessageId;
            var2 = var2.bind(var3)(var4);
            var1['messageId'] = var2;
            return var1;
        };
        var4 = var7.bind(var9)(var4);
        var _closure2_slot0 = var4;
        var7 = var8.forEach;
        var2 = function(arg1) {
            var7 = arg1;
            var4 = _closure2_slot0;
            var3 = var4.push;
            var2 = {};
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var8 = 7;
            var6 = var10[var8];
            var1 = undefined;
            var11 = var9.bind(var1)(var6);
            var6 = var11.cast;
            var6 = var6.bind(var11)(var7);
            var2['channelId'] = var6;
            var6 = _closure1_slot8;
            var11 = var6.GUILD_EVENT;
            var2['readStateType'] = var11;
            var13 = _closure1_slot6;
            var12 = var13.lastMessageId;
            var11 = var6.GUILD_EVENT;
            var11 = var12.bind(var13)(var7, var11);
            var2['messageId'] = var11;
            var2 = var3.bind(var4)(var2);
            var3 = var4.push;
            var2 = {};
            var8 = var10[var8];
            var9 = var9.bind(var1)(var8);
            var8 = var9.cast;
            var8 = var8.bind(var9)(var7);
            var2['channelId'] = var8;
            var6 = var6.GUILD_ONBOARDING_QUESTION;
            var2['readStateType'] = var6;
            var6 = _closure1_slot3;
            var5 = var6.ackIdForGuild;
            var5 = var5.bind(var6)(var7);
            var2['messageId'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = var7.bind(var8)(var2);
        var2 = 8;
        var2 = var5[var2];
        var8 = var6.bind(var3)(var2);
        var7 = var8.track;
        var2 = _closure1_slot7;
        var6 = var2.MARK_AS_READ;
        var2 = {};
        var9 = arg2;
        var2['source'] = var9;
        var9 = 'guild';
        var2['type'] = var9;
        var2 = var7.bind(var8)(var6, var2);
        var2 = _closure1_slot0;
        var1 = 9;
        var1 = var5[var1];
        var3 = var2.bind(var3)(var1);
        var2 = var3.bulkAck;
        var1 = arg3;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();