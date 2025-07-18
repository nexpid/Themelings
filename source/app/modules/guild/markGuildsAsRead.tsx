// app/modules/guild/markGuildsAsRead.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
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
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot10;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot10;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
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
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
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
 344:
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
 0:
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
                if(var2) { _fun0004_ip = 163; continue _fun0004 }
 98:
                var2 = var3.value;
                var2 = var7[var2];
                if(!(var4 == var2)) { _fun0004_ip = 113; continue _fun0004 }
 111:
                var2 = {};
 113:
                var10 = var2;
                for(var2 in var10)
 124:
                {
 133:
                    var13 = var2;
                    var12 = var1.push;
                    var12 = var12.bind(var1)(var13);
                    _fun0004_ip = 124; continue _fun0004;
                }
 148:
                var8 = var5.bind(var6)();
                var2 = var8.done;
                var3 = var8;
                if(!var2) { _fun0004_ip = 98; continue _fun0004 }
 163:
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