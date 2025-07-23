// app/modules/guild_sidebar/FavoritesServerChannelList.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
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
            var9 = _closure1_slot21;
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
            var7 = _closure1_slot21;
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
    var _closure1_slot20 = var1;
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
    var _closure1_slot21 = var1;
    var2 = function computeFavoritesState() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = function makeChannelList(arg1, arg2) {
                var2 = arg2;
                var _closure3_slot0 = var2;
                var3 = var2.isCollapsed;
                var _closure3_slot1 = var3;
                var2 = var2.isMuted;
                var _closure3_slot2 = var2;
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 19;
                var3 = var7[var3];
                var6 = undefined;
                var4 = var4.bind(var6)(var3);
                var3 = arg1;
                var5 = var4.bind(var6)(var3);
                var4 = var5.map;
                var3 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var3 = arg1;
                        var1 = var3.isPrivate;
                        var1 = var1.bind(var3)();
                        if(var1) { _fun0005_ip = 52; continue _fun0005 }
 16:
                        var4 = _closure1_slot13;
                        var2 = var4.can;
                        var1 = _closure1_slot18;
                        var1 = var1.VIEW_CHANNEL;
                        var1 = var2.bind(var4)(var1, var3);
                        if(var1) { _fun0005_ip = 52; continue _fun0005 }
 48:
                        var1 = null;
                        return var1;
 52:
                        var1 = _closure2_slot2;
                        var2 = null;
                        var11 = var2 != var1;
                        if(!var11) { _fun0005_ip = 105; continue _fun0005 }
 68:
                        var1 = _closure2_slot2;
                        var4 = var1.id;
                        var1 = var3.id;
                        var1 = var4 === var1;
                        if(var1) { _fun0005_ip = 102; continue _fun0005 }
 89:
                        var5 = _closure2_slot3;
                        var4 = var3.id;
                        var1 = var5 === var4;
 102:
                        var11 = var1;
 105:
                        var1 = _closure2_slot2;
                        var10 = var2 != var1;
                        if(!var10) { _fun0005_ip = 130; continue _fun0005 }
 116:
                        var4 = _closure2_slot2;
                        var1 = var4.isThread;
                        var10 = var1.bind(var4)();
 130:
                        if(!var10) { _fun0005_ip = 152; continue _fun0005 }
 133:
                        var1 = _closure2_slot2;
                        var4 = var1.parent_id;
                        var1 = var3.id;
                        var10 = var4 === var1;
 152:
                        if(var11) { _fun0005_ip = 199; continue _fun0005 }
 155:
                        if(var10) { _fun0005_ip = 199; continue _fun0005 }
 158:
                        var1 = _closure3_slot1;
                        if(!var1) { _fun0005_ip = 199; continue _fun0005 }
 168:
                        var6 = _closure1_slot7;
                        var5 = var6.getActiveJoinedUnreadThreadsForParent;
                        var4 = var3.guild_id;
                        var1 = var3.id;
                        var12 = var5.bind(var6)(var4, var1);
                        _fun0005_ip = 228; continue _fun0005;
 199:
                        var6 = _closure1_slot7;
                        var5 = var6.getActiveJoinedRelevantThreadsForParent;
                        var4 = var3.guild_id;
                        var1 = var3.id;
                        var12 = var5.bind(var6)(var4, var1);
 228:
                        if(!(var2 == var12)) { _fun0005_ip = 234; continue _fun0005 }
 232:
                        var12 = {};
 234:
                        var15 = _closure1_slot0;
                        var17 = _closure1_slot2;
                        var14 = 21;
                        var1 = var17[var14];
                        var8 = undefined;
                        var13 = var15.bind(var8)(var1);
                        var7 = var13.computeThreadIds;
                        var22 = _closure2_slot2;
                        var21 = _closure2_slot3;
                        var20 = _closure2_slot1;
                        var25 = var13;
                        var24 = var3;
                        var23 = var12;
                        var19 = var25[var7](var24, var23, var22, var21, var20, var19);
                        var6 = _closure1_slot12;
                        var4 = var6.isCollapsed;
                        var1 = var3.id;
                        var16 = var4.bind(var6)(var1);
                        var7 = _closure1_slot16;
                        var6 = var7.isChannelMuted;
                        var4 = var3.guild_id;
                        var1 = var3.id;
                        var7 = var6.bind(var7)(var4, var1);
                        var1 = {};
                        var4 = var3.id;
                        var1['id'] = var4;
                        var1['record'] = var3;
                        var4 = _closure3_slot0;
                        var1['category'] = var4;
                        var13 = _closure2_slot0;
                        var4 = var3.id;
                        var4 = var13[var4];
                        var4 = var4.order;
                        var1['position'] = var4;
                        var1['threadIds'] = var19;
                        var18 = _closure1_slot1;
                        var13 = 19;
                        var4 = var17[var13];
                        var18 = var18.bind(var8)(var4);
                        var4 = var18.size;
                        var4 = var4.bind(var18)(var19);
                        var1['threadCount'] = var4;
                        var1['isCollapsed'] = var16;
                        var1['isMuted'] = var7;
                        var4 = false;
                        var1['isFirstVoiceChannel'] = var4;
                        var14 = var17[var14];
                        var15 = var15.bind(var8)(var14);
                        var14 = var15.computeSubtitle;
                        var14 = var14.bind(var15)(var3, var16, var4);
                        var1['subtitle'] = var14;
                        if(var11) { _fun0005_ip = 631; continue _fun0005 }
 475:
                        if(var10) { _fun0005_ip = 631; continue _fun0005 }
 481:
                        var11 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var10 = var10[var13];
                        var11 = var11.bind(var8)(var10);
                        var10 = var11.isEmpty;
                        var10 = var10.bind(var11)(var12);
                        if(!var10) { _fun0005_ip = 631; continue _fun0005 }
 512:
                        var12 = _closure1_slot14;
                        var11 = var12.getMentionCount;
                        var10 = var3.id;
                        var11 = var11.bind(var12)(var10);
                        var10 = 0;
                        if(!(!(var11 > var10))) { _fun0005_ip = 631; continue _fun0005 }
 538:
                        var9 = _closure2_slot1;
                        if(!var9) { _fun0005_ip = 548; continue _fun0005 }
 545:
                        if(var7) { _fun0005_ip = 629; continue _fun0005 }
 548:
                        var9 = _closure3_slot1;
                        if(!var9) { _fun0005_ip = 623; continue _fun0005 }
 555:
                        if(var7) { _fun0005_ip = 627; continue _fun0005 }
 558:
                        var6 = _closure3_slot2;
                        if(var6) { _fun0005_ip = 627; continue _fun0005 }
 565:
                        var7 = _closure1_slot9;
                        var6 = var3.type;
                        var6 = var7.bind(var8)(var6);
                        if(var6) { _fun0005_ip = 627; continue _fun0005 }
 582:
                        var7 = _closure1_slot8;
                        var6 = var3.type;
                        var6 = var7.bind(var8)(var6);
                        if(!var6) { _fun0005_ip = 623; continue _fun0005 }
 599:
                        var6 = _closure1_slot14;
                        var5 = var6.hasUnread;
                        var3 = var3.id;
                        var3 = var5.bind(var6)(var3);
                        if(!(var4 !== var3)) { _fun0005_ip = 625; continue _fun0005 }
 623:
                        return var1;
 625:
                        return var2;
 627:
                        return var2;
 629:
                        return var2;
 631:
                        return var1;
                    }
                };
                var4 = var4.bind(var5)(var3);
                var3 = var4.filter;
                var5 = _closure1_slot0;
                var2 = 22;
                var2 = var7[var2];
                var2 = var5.bind(var6)(var2);
                var2 = var2.isNotNullish;
                var3 = var3.bind(var4)(var2);
                var2 = var3.sortBy;
                var1 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var1 = arg1;
                        var2 = var1.record;
                        var1 = var2.isGuildVocal;
                        var1 = var1.bind(var2)();
                        var3 = var2.position;
                        if(var1) { _fun0006_ip = 32; continue _fun0006 }
 27:
                        var1 = var3;
                        _fun0006_ip = 42; continue _fun0006;
 32:
                        var2 = 10000;
                        var1 = var3 + var2;
 42:
                        return var1;
                    }
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.value;
                var1 = var1.bind(var2)();
                return var1;
            };
            var _closure2_slot11 = var1;
            var3 = _closure1_slot5;
            var1 = var3.getFavoriteChannels;
            var6 = var1.bind(var3)();
            var _closure2_slot0 = var6;
            var5 = _closure1_slot16;
            var3 = var5.isGuildCollapsed;
            var1 = _closure1_slot17;
            var3 = var3.bind(var5)(var1);
            var _closure2_slot1 = var3;
            var5 = _closure1_slot15;
            var1 = var5.getChannelId;
            var7 = var1.bind(var5)();
            var5 = _closure1_slot11;
            var1 = var5.getChannel;
            var1 = var1.bind(var5)(var7);
            var _closure2_slot2 = var1;
            var5 = _closure1_slot15;
            var1 = var5.getVoiceChannelId;
            var1 = var1.bind(var5)();
            var _closure2_slot3 = var1;
            var15 = new Array(0);
            var _closure2_slot4 = var15;
            var14 = {};
            var _closure2_slot5 = var14;
            var12 = var6;
            var5 = undefined;
            var1 = null;
            var8 = 20;
            var7 = undefined;
            for(var9 in var12)
 144:
            {
 156:
                var16 = var9;
                var17 = var6[var16];
                var19 = _closure1_slot11;
                var18 = var19.getChannel;
                var16 = var17.id;
                var18 = var18.bind(var19)(var16);
                if(var1 == var18) { _fun0004_ip = 144; continue _fun0004 }
 186:
                var19 = var17.type;
                var20 = _closure1_slot0;
                var16 = _closure1_slot2;
                var16 = var16[var8];
                var16 = var20.bind(var5)(var16);
                var16 = var16.FavoriteChannelType;
                var16 = var16.CATEGORY;
                if(var19 === var16) { _fun0004_ip = 144; continue _fun0004 }
 224:
                var16 = _closure1_slot6;
                var16 = var16.bind(var5)(var6, var17, var18);
                var18 = var17.parentId;
                if(!(var1 != var18)) { _fun0004_ip = 258; continue _fun0004 }
 245:
                var18 = var17.parentId;
                var18 = var18 in var6;
                if(var18) { _fun0004_ip = 273; continue _fun0004 }
 258:
                var18 = var15.push;
                var18 = var18.bind(var15)(var16);
                var7 = var16;
                _fun0004_ip = 144; continue _fun0004;
 273:
                var18 = var17.parentId;
                var18 = var18 in var14;
                if(var18) { _fun0004_ip = 300; continue _fun0004 }
 286:
                var19 = var17.parentId;
                var18 = new Array(0);
                var14[var19] = var18;
 300:
                var17 = var17.parentId;
                var18 = var14[var17];
                var17 = var18.push;
                var17 = var17.bind(var18)(var16);
                var7 = var16;
                _fun0004_ip = 144; continue _fun0004;
            }
 328:
            var _closure2_slot6 = var1;
            var1 = {'isMuted': false, 'isCollapsed': false, 'position': 0};
            var7 = function getChannelRecords() {
                var1 = _closure2_slot4;
                return var1;
            };
            var1['getChannelRecords'] = var7;
            var7 = function getShownChannelIds() {
                var3 = _closure2_slot4;
                var2 = var3.map;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.id;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1['getShownChannelIds'] = var7;
            var7 = function getShownChannelAndThreadIds() {
                var3 = _closure2_slot4;
                var2 = var3.map;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.id;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1['getShownChannelAndThreadIds'] = var7;
            var7 = function isEmpty() {
                var1 = _closure2_slot4;
                var2 = var1.length;
                var1 = 0;
                var1 = var1 === var2;
                return var1;
            };
            var1['isEmpty'] = var7;
            var8 = function get channelList() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot6;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0007_ip = 36; continue _fun0007 }
 13:
                    var5 = _closure2_slot11;
                    var4 = _closure2_slot4;
                    var3 = undefined;
                    var2 = this;
                    var2 = var5.bind(var3)(var4, var2);
                    _closure2_slot6 = var2;
 36:
                    var1 = _closure2_slot6;
                    return var1;
                }
            };
            var7 = 'channelList';
            Object.defineProperty(var1, var7, {get: var8, set: var5, enumerable: true});
            var _closure2_slot7 = var1;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 19;
            var1 = var8[var1];
            var1 = var7.bind(var5)(var1);
            var5 = var1.bind(var5)(var6);
            var1 = var5.values;
            var6 = var1.bind(var5)();
            var5 = var6.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 20;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.FavoriteChannelType;
                var1 = var1.CATEGORY;
                var1 = var2 === var1;
                return var1;
            };
            var6 = var5.bind(var6)(var1);
            var5 = var6.sortBy;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.order;
                return var1;
            };
            var6 = var5.bind(var6)(var1);
            var5 = var6.map;
            var1 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = arg1;
                    var5 = var1.id;
                    var3 = var1.order;
                    var4 = undefined;
                    var _closure3_slot0 = var4;
                    var _closure3_slot1 = var4;
                    var6 = _closure1_slot5;
                    var1 = var6.getCategoryRecord;
                    var6 = var1.bind(var6)(var5);
                    var1 = _closure2_slot5;
                    var8 = var1[var5];
                    var1 = null;
                    if(!(var1 == var8)) { _fun0008_ip = 65; continue _fun0008 }
 61:
                    var8 = new Array(0);
 65:
                    _closure3_slot0 = var8;
                    var10 = _closure1_slot16;
                    var9 = var10.isChannelMuted;
                    var8 = _closure1_slot17;
                    var8 = var9.bind(var10)(var8, var5);
                    var9 = _closure1_slot10;
                    var7 = var9.isCollapsed;
                    var7 = var7.bind(var9)(var5);
                    _closure3_slot1 = var1;
                    var1 = {};
                    var1['isMuted'] = var8;
                    var1['isCollapsed'] = var7;
                    var1['record'] = var6;
                    var1['id'] = var5;
                    var1['position'] = var3;
                    var3 = function getChannelRecords() {
                        var1 = _closure3_slot0;
                        return var1;
                    };
                    var1['getChannelRecords'] = var3;
                    var3 = function getShownChannelIds() {
                        var3 = _closure3_slot0;
                        var2 = var3.map;
                        var1 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.id;
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['getShownChannelIds'] = var3;
                    var3 = function getShownChannelAndThreadIds() {
                        var3 = _closure3_slot0;
                        var2 = var3.map;
                        var1 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.id;
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['getShownChannelAndThreadIds'] = var3;
                    var3 = function isEmpty() {
                        var1 = _closure3_slot0;
                        var2 = var1.length;
                        var1 = 0;
                        var1 = var1 === var2;
                        return var1;
                    };
                    var1['isEmpty'] = var3;
                    var3 = function get channelList() {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                            var3 = _closure3_slot1;
                            var2 = null;
                            if(!(var2 == var3)) { _fun0009_ip = 39; continue _fun0009 }
 13:
                            var5 = _closure2_slot11;
                            var4 = _closure3_slot0;
                            var3 = undefined;
                            var2 = this;
                            var2 = var5.bind(var3)(var4, var2);
                            _closure3_slot1 = var2;
 39:
                            var1 = _closure3_slot1;
                            return var1;
                        }
                    };
                    var2 = 'channelList';
                    Object.defineProperty(var1, var2, {get: var3, set: var4, enumerable: true});
                    return var1;
                }
            };
            var5 = var5.bind(var6)(var1);
            var1 = var5.value;
            var1 = var1.bind(var5)();
            var _closure2_slot8 = var1;
            var1 = {};
            var5 = function isEmpty() {
                var1 = true;
                return var1;
            };
            var1['isEmpty'] = var5;
            var5 = function getRows() {
                var1 = new Array(0);
                return var1;
            };
            var1['getRows'] = var5;
            var5 = function getRow() {
                var1 = null;
                return var1;
            };
            var1['getRow'] = var5;
            var _closure2_slot9 = var1;
            var1 = {};
            var5 = function isEmpty() {
                var1 = true;
                return var1;
            };
            var1['isEmpty'] = var5;
            var5 = function getRows() {
                var1 = new Array(0);
                return var1;
            };
            var1['getRows'] = var5;
            var5 = function getRow() {
                var1 = null;
                return var1;
            };
            var1['getRow'] = var5;
            var _closure2_slot10 = var1;
            var1 = {'id': null, 'hideMutedChannels': null, 'favoritesSectionNumber': 1, 'recentsSectionNumber': 2, 'voiceChannelsSectionNumber': 4294966297};
            var4 = _closure1_slot17;
            var1['id'] = var4;
            var1['hideMutedChannels'] = var3;
            var3 = function getSections() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var1 = new Array(0);
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var8 = 21;
                    var4 = var2[var8];
                    var7 = undefined;
                    var4 = var3.bind(var7)(var4);
                    var4 = var4.SECTION_INDEX_CHANNEL_NOTICES;
                    var6 = 0;
                    var1[var4] = var6;
                    var4 = var2[var8];
                    var4 = var3.bind(var7)(var4);
                    var4 = var4.SECTION_INDEX_GUILD_ACTIONS;
                    var1[var4] = var6;
                    var4 = var2[var8];
                    var4 = var3.bind(var7)(var4);
                    var4 = var4.SECTION_INDEX_FAVORITES;
                    var1[var4] = var6;
                    var4 = var2[var8];
                    var4 = var3.bind(var7)(var4);
                    var4 = var4.SECTION_INDEX_RECENTS;
                    var1[var4] = var6;
                    var2 = var2[var8];
                    var2 = var3.bind(var7)(var2);
                    var3 = var2.SECTION_INDEX_UNCATEGORIZED_CHANNELS;
                    var2 = _closure2_slot7;
                    var2 = var2.channelList;
                    var2 = var2.length;
                    var1[var3] = var2;
                    var2 = _closure2_slot8;
                    var2 = var2.length;
                    var2 = var6 < var2;
                    var4 = global;
                    var3 = 1;
                    if(!var2) { _fun0010_ip = 239; continue _fun0010 }
 156:
                    var10 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var8];
                    var2 = var10.bind(var7)(var2);
                    var2 = var2.SECTION_INDEX_FIRST_NAMED_CATEGORY;
                    var10 = var2 + var6;
                    var12 = var4.Math;
                    var11 = var12.max;
                    var2 = _closure2_slot8;
                    var2 = var2[var6];
                    var2 = var2.channelList;
                    var2 = var2.length;
                    var2 = var11.bind(var12)(var3, var2);
                    var1[var10] = var2;
                    var6 = var6 + 1;
                    var2 = _closure2_slot8;
                    var2 = var2.length;
                    if(var6 < var2) { _fun0010_ip = 156; continue _fun0010 }
 239:
                    return var1;
                }
            };
            var1['getSections'] = var3;
            var3 = function isPlaceholderRow(arg1, arg2) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var4 = arg1;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var7 = 21;
                    var1 = var1[var7];
                    var6 = undefined;
                    var1 = var3.bind(var6)(var1);
                    var1 = var1.SECTION_INDEX_FIRST_NAMED_CATEGORY;
                    var3 = var4 < var1;
                    if(var3) { _fun0011_ip = 50; continue _fun0011 }
 41:
                    var5 = 0;
                    var1 = arg2;
                    var3 = var5 !== var1;
 50:
                    var1 = !var3;
                    if(var3) { _fun0011_ip = 111; continue _fun0011 }
 56:
                    var3 = _closure2_slot8;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var7];
                    var2 = var5.bind(var6)(var2);
                    var2 = var2.SECTION_INDEX_FIRST_NAMED_CATEGORY;
                    var2 = var4 - var2;
                    var2 = var3[var2];
                    var2 = var2.channelList;
                    var3 = var2.length;
                    var2 = 0;
                    var1 = var2 === var3;
 111:
                    return var1;
                }
            };
            var1['isPlaceholderRow'] = var3;
            var3 = function getCategoryFromSection(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var3 = arg1;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var6 = 21;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.SECTION_INDEX_UNCATEGORIZED_CHANNELS;
                    if(!(var3 !== var2)) { _fun0012_ip = 78; continue _fun0012 }
 38:
                    var2 = _closure2_slot8;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var6];
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.SECTION_INDEX_FIRST_NAMED_CATEGORY;
                    var1 = var3 - var1;
                    var1 = var2[var1];
                    _fun0012_ip = 85; continue _fun0012;
 78:
                    var1 = _closure2_slot7;
 85:
                    return var1;
                }
            };
            var1['getCategoryFromSection'] = var3;
            var3 = function getNamedCategoryFromSection(arg1) {
                var2 = _closure2_slot8;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 21;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var3 = var1.SECTION_INDEX_FIRST_NAMED_CATEGORY;
                var1 = arg1;
                var1 = var1 - var3;
                var1 = var2[var1];
                return var1;
            };
            var1['getNamedCategoryFromSection'] = var3;
            var3 = function getChannelFromSectionRow(arg1, arg2) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var4 = arg2;
                    var3 = this;
                    var2 = var3.getCategoryFromSection;
                    var1 = arg1;
                    var3 = var2.bind(var3)(var1);
                    var5 = null;
                    var2 = var5 == var3;
                    var1 = null;
                    if(var2) { _fun0013_ip = 74; continue _fun0013 }
 31:
                    var2 = var3.channelList;
                    var2 = var2[var4];
                    var2 = var5 == var2;
                    var1 = null;
                    if(var2) { _fun0013_ip = 74; continue _fun0013 }
 50:
                    var2 = {};
                    var2['category'] = var3;
                    var3 = var3.channelList;
                    var3 = var3[var4];
                    var2['channel'] = var3;
                    var1 = var2;
 74:
                    return var1;
                }
            };
            var1['getChannelFromSectionRow'] = var3;
            var3 = function getGuildActionSection() {
                var1 = _closure2_slot9;
                return var1;
            };
            var1['getGuildActionSection'] = var3;
            var3 = function getChannelNoticeSection() {
                var1 = _closure2_slot10;
                return var1;
            };
            var1['getChannelNoticeSection'] = var3;
            var3 = function getFirstVoiceChannel() {
                var1 = null;
                return var1;
            };
            var1['getFirstVoiceChannel'] = var3;
            var3 = function getSectionRowsFromChannel(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var7 = arg1;
                    var2 = _closure2_slot7;
                    var6 = new Array(1);
                    var6[0] = var2;
                    var10 = _closure2_slot8;
                    var9 = 1;
                    var11 = var6;
                    var1 = arraySpread(var11, var10, var9);
                    var1 = var6.length;
                    var5 = 0;
                    var1 = var5 < var1;
                    var3 = 0;
                    if(!var1) { _fun0014_ip = 135; continue _fun0014 }
 48:
                    var1 = var6[var3];
                    var1 = var1.channelList;
                    var1 = var1.length;
                    var1 = var5 < var1;
                    var4 = var3;
                    var8 = 0;
                    if(!var1) { _fun0014_ip = 123; continue _fun0014 }
 75:
                    var1 = var6[var4];
                    var1 = var1.channelList;
                    var1 = var1[var8];
                    var2 = var1.id;
                    var1 = var8;
                    if(!(var2 !== var7)) { _fun0014_ip = 141; continue _fun0014 }
 101:
                    var8 = var1 + 1;
                    var2 = var6[var4];
                    var2 = var2.channelList;
                    var2 = var2.length;
                    if(var8 < var2) { _fun0014_ip = 75; continue _fun0014 }
 123:
                    var3 = var4 + 1;
                    var2 = var6.length;
                    if(var3 < var2) { _fun0014_ip = 48; continue _fun0014 }
 135:
                    var2 = new Array(0);
                    return var2;
 141:
                    var2 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 21;
                    var5 = var5[var3];
                    var3 = undefined;
                    var3 = var6.bind(var3)(var5);
                    var3 = var3.SECTION_INDEX_UNCATEGORIZED_CHANNELS;
                    var3 = var4 + var3;
                    var2['section'] = var3;
                    var2['row'] = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    return var1;
                }
            };
            var1['getSectionRowsFromChannel'] = var3;
            var3 = function forEachShownChannel(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var10 = arg1;
                    var2 = _closure2_slot7;
                    var9 = new Array(1);
                    var9[0] = var2;
                    var20 = _closure2_slot8;
                    var19 = 1;
                    var21 = var9;
                    var1 = arraySpread(var21, var20, var19);
                    var1 = var9.length;
                    var8 = 0;
                    var2 = var8 < var1;
                    var1 = undefined;
                    var6 = null;
                    var5 = undefined;
                    var4 = undefined;
                    var3 = undefined;
                    if(!var2) { _fun0015_ip = 242; continue _fun0015 }
 62:
                    var11 = _closure1_slot20;
                    var2 = var9[var8];
                    var2 = var2.channelList;
                    var13 = var11.bind(var1)(var2);
                    var11 = var13.bind(var1)();
                    var2 = var11.done;
                    var12 = var11;
                    var11 = var3;
                    var3 = var11;
                    if(var2) { _fun0015_ip = 227; continue _fun0015 }
 105:
                    var2 = var12.value;
                    var14 = var2.record;
                    var14 = var10.bind(var1)(var14);
                    var14 = _closure1_slot20;
                    var2 = var2.threadIds;
                    var15 = var14.bind(var1)(var2);
                    var16 = var15.bind(var1)();
                    var2 = var16.done;
                    var14 = var16;
                    var16 = var14;
                    if(var2) { _fun0015_ip = 203; continue _fun0015 }
 154:
                    var18 = var14.value;
                    var17 = _closure1_slot11;
                    var2 = var17.getChannel;
                    var17 = var2.bind(var17)(var18);
                    if(!(var6 != var17)) { _fun0015_ip = 182; continue _fun0015 }
 177:
                    var2 = var10.bind(var1)(var17);
 182:
                    var18 = var15.bind(var1)();
                    var2 = var18.done;
                    var14 = var18;
                    var16 = var14;
                    var11 = var17;
                    if(!var2) { _fun0015_ip = 154; continue _fun0015 }
 203:
                    var17 = var13.bind(var1)();
                    var2 = var17.done;
                    var5 = var16;
                    var12 = var17;
                    var4 = var15;
                    var3 = var11;
                    if(!var2) { _fun0015_ip = 105; continue _fun0015 }
 227:
                    var8 = var8 + 1;
                    var2 = var9.length;
                    if(var8 < var2) { _fun0015_ip = 62; continue _fun0015 }
 242:
                    return var1;
                }
            };
            var1['forEachShownChannel'] = var3;
            var3 = function forEachChannel(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    var6 = arg1;
                    var2 = _closure2_slot7;
                    var5 = new Array(1);
                    var5[0] = var2;
                    var11 = _closure2_slot8;
                    var10 = 1;
                    var12 = var5;
                    var1 = arraySpread(var12, var11, var10);
                    var1 = var5.length;
                    var4 = 0;
                    var2 = var4 < var1;
                    var1 = undefined;
                    if(!var2) { _fun0016_ip = 123; continue _fun0016 }
 51:
                    var7 = _closure1_slot20;
                    var8 = var5[var4];
                    var2 = var8.getChannelRecords;
                    var2 = var2.bind(var8)();
                    var8 = var7.bind(var1)(var2);
                    var7 = var8.bind(var1)();
                    var2 = var7.done;
                    if(var2) { _fun0016_ip = 111; continue _fun0016 }
 86:
                    var2 = var7.value;
                    var2 = var6.bind(var1)(var2);
                    var9 = var8.bind(var1)();
                    var2 = var9.done;
                    var7 = var9;
                    if(!var2) { _fun0016_ip = 86; continue _fun0016 }
 111:
                    var4 = var4 + 1;
                    var2 = var5.length;
                    if(var4 < var2) { _fun0016_ip = 51; continue _fun0016 }
 123:
                    return var1;
                }
            };
            var1['forEachChannel'] = var3;
            var3 = function getSlicedChannels(arg1) {
                var1 = new Array(3);
                var2 = new Array(0);
                var1[0] = var2;
                var2 = arg1;
                var1[1] = var2;
                var2 = new Array(0);
                var1[2] = var2;
                return var1;
            };
            var1['getSlicedChannels'] = var3;
            var2 = function getChannels() {
                var1 = new Array(0);
                return var1;
            };
            var1['getChannels'] = var2;
            return var1;
        }
    };
    var _closure1_slot22 = var2;
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
    var9 = var7[var5];
    var5 = native4;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var19 = var8.bind(var1)(var5);
    var5 = 3;
    var5 = var7[var5];
    var18 = var8.bind(var1)(var5);
    var _closure1_slot5 = var18;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.createFavoritesChannelRecord;
    var _closure1_slot6 = var5;
    var5 = 5;
    var5 = var7[var5];
    var17 = var8.bind(var1)(var5);
    var5 = 6;
    var5 = var7[var5];
    var16 = var8.bind(var1)(var5);
    var _closure1_slot7 = var16;
    var5 = 7;
    var5 = var7[var5];
    var15 = var8.bind(var1)(var5);
    var5 = 8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.isGuildReadableType;
    var _closure1_slot8 = var9;
    var5 = var5.isVoiceChannel;
    var _closure1_slot9 = var5;
    var5 = 9;
    var5 = var7[var5];
    var14 = var8.bind(var1)(var5);
    var _closure1_slot10 = var14;
    var5 = 10;
    var5 = var7[var5];
    var13 = var8.bind(var1)(var5);
    var _closure1_slot11 = var13;
    var5 = 11;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot12 = var5;
    var5 = 12;
    var5 = var7[var5];
    var12 = var8.bind(var1)(var5);
    var5 = 13;
    var5 = var7[var5];
    var11 = var8.bind(var1)(var5);
    var _closure1_slot13 = var11;
    var5 = 14;
    var5 = var7[var5];
    var10 = var8.bind(var1)(var5);
    var _closure1_slot14 = var10;
    var5 = 15;
    var5 = var7[var5];
    var9 = var8.bind(var1)(var5);
    var _closure1_slot15 = var9;
    var5 = 16;
    var5 = var7[var5];
    var8 = var8.bind(var1)(var5);
    var _closure1_slot16 = var8;
    var5 = 17;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.FAVORITES_RAW_GUILD_ID;
    var _closure1_slot17 = var5;
    var5 = 18;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.Permissions;
    var _closure1_slot18 = var5;
    var5 = new Array(12);
    var5[0] = var19;
    var5[1] = var18;
    var5[2] = var17;
    var5[3] = var16;
    var5[4] = var15;
    var5[5] = var14;
    var5[6] = var13;
    var5[7] = var12;
    var5[8] = var11;
    var5[9] = var10;
    var5[10] = var9;
    var5[11] = var8;
    var _closure1_slot19 = var5;
    var5 = 23;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_sidebar/FavoritesServerChannelList.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useFavoritesServerChannelList() {
        var5 = _closure1_slot4;
        var4 = var5.useState;
        var3 = function() {
            var2 = _closure1_slot22;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        };
        var6 = var4.bind(var5)(var3);
        var4 = _closure1_slot3;
        var3 = undefined;
        var1 = 2;
        var4 = var4.bind(var3)(var6, var1);
        var1 = 0;
        var1 = var4[var1];
        var3 = 1;
        var3 = var4[var3];
        var _closure2_slot0 = var3;
        var4 = var5.useEffect;
        var3 = function() {
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 19;
            var4 = var4[var3];
            var3 = undefined;
            var6 = var5.bind(var3)(var4);
            var5 = var6.throttle;
            var4 = function() {
                var3 = _closure2_slot0;
                var1 = _closure1_slot22;
                var2 = undefined;
                var1 = var1.bind(var2)();
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var3 = 100;
            var3 = var5.bind(var6)(var4, var3);
            var _closure3_slot0 = var3;
            var4 = _closure1_slot19;
            var3 = var4.forEach;
            var2 = function(arg1) {
                var3 = arg1;
                var2 = var3.addChangeListener;
                var1 = _closure3_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var1 = function() {
                var3 = _closure1_slot19;
                var2 = var3.forEach;
                var1 = function(arg1) {
                    var3 = arg1;
                    var2 = var3.removeChangeListener;
                    var1 = _closure3_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            return var1;
        };
        var2 = new Array(0);
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['useFavoritesServerChannelList'] = var4;
    var3['computeFavoritesState'] = var2;
    return var1;
})();