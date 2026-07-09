// app/modules/guild_sidebar/FavoritesGuildChannelList.tsx
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
            var2 = var3["@@iterator"];
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
            var9 = _closure1_slot25;
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
            var7 = _closure1_slot25;
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
    var _closure1_slot24 = var1;
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
    var _closure1_slot25 = var1;
    var1 = function getMissingFavoriteThreadIds(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var17 = var1.limit;
            var16 = var1.includeLoading;
            var2 = _closure1_slot5;
            var1 = var2.getFavoriteChannels;
            var14 = var1.bind(var2)();
            var1 = new Array(0);
            var12 = var14;
            var8 = undefined;
            var7 = 'LOADING';
            var6 = 22;
            var5 = 'NOT_FOUND';
            var4 = null;
            var3 = 21;
            var2 = undefined;
            for(var9 in var12)
case 36:
            {
case 37:
                var20 = var9;
                var18 = var1.length;
                if(!(!(var18 >= var17))) { _fun0004_ip = 38; continue _fun0004 }
case 11:
                var18 = var14[var20];
                var21 = var18.type;
                var22 = _closure1_slot0;
                var19 = _closure1_slot2;
                var19 = var19[var3];
                var19 = var22.bind(var8)(var19);
                var19 = var19.FavoriteChannelType;
                var19 = var19.REFERENCE_ORIGINAL;
                if(var21 !== var19) { _fun0004_ip = 36; continue _fun0004 }
case 39:
                var19 = var18.channelType;
                if(var4 == var19) { _fun0004_ip = 36; continue _fun0004 }
case 40:
                var21 = _closure1_slot10;
                var19 = var21.has;
                var18 = var18.channelType;
                var18 = var19.bind(var21)(var18);
                if(!var18) { _fun0004_ip = 36; continue _fun0004 }
case 41:
                var19 = _closure1_slot14;
                var18 = var19.getChannel;
                var18 = var18.bind(var19)(var20);
                if(var4 != var18) { _fun0004_ip = 36; continue _fun0004 }
case 42:
                var19 = _closure1_slot1;
                var18 = _closure1_slot2;
                var18 = var18[var6];
                var19 = var19.bind(var8)(var18);
                var18 = var19.getLoadState;
                var18 = var18.bind(var19)(var20);
                var19 = var5 !== var18;
                if(!var19) { _fun0004_ip = 43; continue _fun0004 }
case 44:
                var21 = var16;
                if(var21) { _fun0004_ip = 21; continue _fun0004 }
case 45:
                var21 = var7 !== var18;
case 21:
                var19 = var21;
case 43:
                var2 = var18;
                if(!var19) { _fun0004_ip = 36; continue _fun0004 }
case 46:
                var19 = var1.push;
                var19 = var19.bind(var1)(var20);
                var2 = var18;
                _fun0004_ip = 36; continue _fun0004;
            }
case 38:
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var2 = function computeFavoritesState(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var9 = arg1;
            var1 = function makeChannelList(arg1, arg2) {
                var2 = arg2;
                var _closure3_slot0 = var2;
                var3 = var2.isCollapsed;
                var _closure3_slot1 = var3;
                var2 = var2.isMuted;
                var _closure3_slot2 = var2;
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 24;
                var3 = var7[var3];
                var6 = undefined;
                var4 = var4.bind(var6)(var3);
                var3 = arg1;
                var5 = var4.bind(var6)(var3);
                var4 = var5.map;
                var3 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var3 = arg1;
                        var1 = var3.isPrivate;
                        var1 = var1.bind(var3)();
                        if(var1) { _fun0006_ip = 47; continue _fun0006 }
case 48:
                        var4 = _closure1_slot16;
                        var2 = var4.can;
                        var1 = _closure1_slot22;
                        var1 = var1.VIEW_CHANNEL;
                        var1 = var2.bind(var4)(var1, var3);
                        if(var1) { _fun0006_ip = 47; continue _fun0006 }
case 49:
                        var1 = null;
                        return var1;
case 47:
                        var1 = _closure2_slot2;
                        var2 = null;
                        var11 = var2 != var1;
                        if(!var11) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                        var1 = _closure2_slot2;
                        var4 = var1.id;
                        var1 = var3.id;
                        var1 = var4 === var1;
                        if(var1) { _fun0006_ip = 52; continue _fun0006 }
case 53:
                        var5 = _closure2_slot3;
                        var4 = var3.id;
                        var1 = var5 === var4;
case 52:
                        var11 = var1;
case 50:
                        var1 = _closure2_slot2;
                        var10 = var2 != var1;
                        if(!var10) { _fun0006_ip = 54; continue _fun0006 }
case 55:
                        var4 = _closure2_slot2;
                        var1 = var4.isThread;
                        var10 = var1.bind(var4)();
case 54:
                        if(!var10) { _fun0006_ip = 56; continue _fun0006 }
case 57:
                        var1 = _closure2_slot2;
                        var4 = var1.parent_id;
                        var1 = var3.id;
                        var10 = var4 === var1;
case 56:
                        if(var11) { _fun0006_ip = 58; continue _fun0006 }
case 59:
                        if(var10) { _fun0006_ip = 58; continue _fun0006 }
case 15:
                        var1 = _closure3_slot1;
                        if(!var1) { _fun0006_ip = 58; continue _fun0006 }
case 60:
                        var6 = _closure1_slot8;
                        var5 = var6.getActiveJoinedUnreadThreadsForParent;
                        var4 = var3.guild_id;
                        var1 = var3.id;
                        var4 = var5.bind(var6)(var4, var1);
                        _fun0006_ip = 61; continue _fun0006;
case 58:
                        var7 = _closure1_slot8;
                        var6 = var7.getActiveJoinedRelevantThreadsForParent;
                        var5 = var3.guild_id;
                        var1 = var3.id;
                        var4 = var6.bind(var7)(var5, var1);
case 61:
                        if(!(var2 == var4)) { _fun0006_ip = 21; continue _fun0006 }
case 62:
                        var4 = {};
case 21:
                        var6 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var17 = 20;
                        var1 = var1[var17];
                        var8 = undefined;
                        var13 = var6.bind(var8)(var1);
                        var12 = var13.computeThreadIds;
                        var21 = _closure2_slot2;
                        var20 = _closure2_slot3;
                        var19 = _closure2_slot1;
                        var24 = var13;
                        var23 = var3;
                        var22 = var4;
                        var18 = var24[var12](var23, var22, var21, var20, var19, var18);
                        var7 = _closure1_slot15;
                        var6 = var7.isCollapsed;
                        var1 = var3.id;
                        var16 = var6.bind(var7)(var1);
                        var1 = var3.isThread;
                        var1 = var1.bind(var3)();
                        var12 = var4;
                        if(var1) { _fun0006_ip = 63; continue _fun0006 }
case 27:
                        var7 = _closure1_slot19;
                        var6 = var7.isChannelMuted;
                        var4 = var3.guild_id;
                        var1 = var3.id;
                        var7 = var6.bind(var7)(var4, var1);
                        _fun0006_ip = 64; continue _fun0006;
case 63:
                        var6 = _closure1_slot9;
                        var4 = var6.isMuted;
                        var1 = var3.id;
                        var7 = var4.bind(var6)(var1);
case 64:
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
                        var1['threadIds'] = var18;
                        var15 = _closure1_slot1;
                        var14 = _closure1_slot2;
                        var13 = 24;
                        var4 = var14[var13];
                        var15 = var15.bind(var8)(var4);
                        var4 = var15.size;
                        var4 = var4.bind(var15)(var18);
                        var1['threadCount'] = var4;
                        var1['isCollapsed'] = var16;
                        var1['isMuted'] = var7;
                        var4 = false;
                        var1['isFirstVoiceChannel'] = var4;
                        var15 = _closure1_slot0;
                        var14 = var14[var17];
                        var15 = var15.bind(var8)(var14);
                        var14 = var15.computeSubtitle;
                        var14 = var14.bind(var15)(var3, var16, var4);
                        var1['subtitle'] = var14;
                        if(var11) { _fun0006_ip = 65; continue _fun0006 }
case 66:
                        if(var10) { _fun0006_ip = 65; continue _fun0006 }
case 67:
                        var11 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var10 = var10[var13];
                        var11 = var11.bind(var8)(var10);
                        var10 = var11.isEmpty;
                        var10 = var10.bind(var11)(var12);
                        if(!var10) { _fun0006_ip = 65; continue _fun0006 }
case 68:
                        var12 = _closure1_slot17;
                        var11 = var12.getMentionCount;
                        var10 = var3.id;
                        var11 = var11.bind(var12)(var10);
                        var10 = 0;
                        if(!(!(var11 > var10))) { _fun0006_ip = 65; continue _fun0006 }
case 69:
                        var9 = _closure2_slot1;
                        if(!var9) { _fun0006_ip = 70; continue _fun0006 }
case 71:
                        if(var7) { _fun0006_ip = 72; continue _fun0006 }
case 70:
                        var9 = _closure3_slot1;
                        if(!var9) { _fun0006_ip = 73; continue _fun0006 }
case 74:
                        if(var7) { _fun0006_ip = 75; continue _fun0006 }
case 76:
                        var6 = _closure3_slot2;
                        if(var6) { _fun0006_ip = 75; continue _fun0006 }
case 77:
                        var7 = _closure1_slot12;
                        var6 = var3.type;
                        var6 = var7.bind(var8)(var6);
                        if(var6) { _fun0006_ip = 75; continue _fun0006 }
case 78:
                        var7 = _closure1_slot11;
                        var6 = var3.type;
                        var6 = var7.bind(var8)(var6);
                        if(!var6) { _fun0006_ip = 73; continue _fun0006 }
case 79:
                        var6 = _closure1_slot17;
                        var5 = var6.hasUnread;
                        var3 = var3.id;
                        var3 = var5.bind(var6)(var3);
                        if(!(var4 !== var3)) { _fun0006_ip = 80; continue _fun0006 }
case 73:
                        return var1;
case 80:
                        return var2;
case 75:
                        return var2;
case 72:
                        return var2;
case 65:
                        return var1;
                    }
                };
                var4 = var4.bind(var5)(var3);
                var3 = var4.filter;
                var5 = _closure1_slot0;
                var2 = 25;
                var2 = var7[var2];
                var2 = var5.bind(var6)(var2);
                var2 = var2.isNotNullish;
                var3 = var3.bind(var4)(var2);
                var2 = var3.sortBy;
                var1 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var2 = arg1;
                        var3 = var2.record;
                        var1 = var3.isGuildVocal;
                        var1 = var1.bind(var3)();
                        var3 = var2.position;
                        if(var1) { _fun0007_ip = 81; continue _fun0007 }
case 82:
                        var1 = var3;
                        _fun0007_ip = 83; continue _fun0007;
case 81:
                        var2 = 10000;
                        var1 = var3 + var2;
case 83:
                        return var1;
                    }
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.value;
                var1 = var1.bind(var2)();
                return var1;
            };
            var _closure2_slot11 = var1;
            var1 = null;
            if(!(var1 == var9)) { _fun0005_ip = 84; continue _fun0005 }
case 85:
            var4 = _closure1_slot5;
            var3 = var4.getFavoriteChannels;
            var9 = var3.bind(var4)();
case 84:
            var _closure2_slot0 = var9;
            var6 = _closure1_slot19;
            var5 = var6.isGuildCollapsed;
            var3 = _closure1_slot20;
            var3 = var5.bind(var6)(var3);
            var _closure2_slot1 = var3;
            var6 = _closure1_slot18;
            var5 = var6.getChannelId;
            var7 = var5.bind(var6)();
            var6 = _closure1_slot14;
            var5 = var6.getChannel;
            var5 = var5.bind(var6)(var7);
            var _closure2_slot2 = var5;
            var6 = _closure1_slot18;
            var5 = var6.getVoiceChannelId;
            var5 = var5.bind(var6)();
            var _closure2_slot3 = var5;
            var16 = new Array(0);
            var _closure2_slot4 = var16;
            var15 = {};
            var _closure2_slot5 = var15;
            var13 = var9;
            var8 = undefined;
            var7 = 21;
            var6 = undefined;
            var5 = undefined;
            for(var10 in var13)
case 86:
            {
case 60:
                var17 = var10;
                var18 = var9[var17];
                var20 = _closure1_slot14;
                var19 = var20.getChannel;
                var17 = var18.id;
                var19 = var19.bind(var20)(var17);
                if(var1 == var19) { _fun0005_ip = 86; continue _fun0005 }
case 87:
                var20 = var18.type;
                var21 = _closure1_slot0;
                var17 = _closure1_slot2;
                var17 = var17[var7];
                var17 = var21.bind(var8)(var17);
                var17 = var17.FavoriteChannelType;
                var17 = var17.CATEGORY;
                if(var20 === var17) { _fun0005_ip = 86; continue _fun0005 }
case 88:
                var17 = _closure1_slot6;
                var17 = var17.bind(var8)(var9, var18, var19);
                var19 = var18.parentId;
                if(!(var1 != var19)) { _fun0005_ip = 89; continue _fun0005 }
case 90:
                var19 = var18.parentId;
                var19 = var9[var19];
                if(!(var1 != var19)) { _fun0005_ip = 89; continue _fun0005 }
case 91:
                var19 = var18.parentId;
                var19 = var9[var19];
                var20 = var19.type;
                var21 = _closure1_slot0;
                var19 = _closure1_slot2;
                var19 = var19[var7];
                var19 = var21.bind(var8)(var19);
                var19 = var19.FavoriteChannelType;
                var19 = var19.CATEGORY;
                if(!(var20 !== var19)) { _fun0005_ip = 92; continue _fun0005 }
case 89:
                var19 = var16.push;
                var19 = var19.bind(var16)(var17);
                var6 = var17;
                _fun0005_ip = 86; continue _fun0005;
case 92:
                var5 = var18.parentId;
                var18 = var5 in var15;
                if(var18) { _fun0005_ip = 93; continue _fun0005 }
case 94:
                var18 = new Array(0);
                var15[var5] = var18;
case 93:
                var19 = var15[var5];
                var18 = var19.push;
                var18 = var18.bind(var19)(var17);
                var6 = var17;
                _fun0005_ip = 86; continue _fun0005;
            }
case 95:
            var _closure2_slot6 = var1;
            var1 = {'isMuted': false, 'isCollapsed': false, 'position': 0};
            var5 = 0;
            var6 = function getChannelRecords() {
                var1 = _closure2_slot4;
                return var1;
            };
            var1['getChannelRecords'] = var6;
            var6 = function getShownChannelIds() {
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
            var1['getShownChannelIds'] = var6;
            var6 = function getShownChannelAndThreadIds() {
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
            var1['getShownChannelAndThreadIds'] = var6;
            var6 = function isEmpty() {
                var1 = _closure2_slot4;
                var2 = var1.length;
                var1 = 0;
                var1 = var1 === var2;
                return var1;
            };
            var1['isEmpty'] = var6;
            var7 = function get channelList() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot6;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0008_ip = 96; continue _fun0008 }
case 97:
                    var5 = _closure2_slot11;
                    var4 = _closure2_slot4;
                    var3 = undefined;
                    var2 = this;
                    var2 = var5.bind(var3)(var4, var2);
                    _closure2_slot6 = var2;
case 96:
                    var1 = _closure2_slot6;
                    return var1;
                }
            };
            var6 = 'channelList';
            Object.defineProperty(var1, var6, {get: var7, set: var8, enumerable: true});
            var _closure2_slot7 = var1;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 23;
            var6 = var10[var6];
            var7 = var7.bind(var8)(var6);
            var6 = var7.getFavoritesCategories;
            var9 = var6.bind(var7)(var9);
            var7 = var9.filter;
            var6 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var9 = var7.bind(var9)(var6);
            var7 = var9.map;
            var6 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = arg1;
                    var6 = var1.id;
                    var5 = undefined;
                    var _closure3_slot0 = var5;
                    var _closure3_slot1 = var5;
                    var4 = _closure1_slot5;
                    var1 = var4.getCategoryRecord;
                    var7 = var1.bind(var4)(var6);
                    var1 = null;
                    if(!(var1 != var7)) { _fun0009_ip = 88; continue _fun0009 }
case 98:
                    var8 = _closure2_slot5;
                    var8 = var8[var6];
                    if(!(var1 == var8)) { _fun0009_ip = 99; continue _fun0009 }
case 100:
                    var8 = new Array(0);
case 99:
                    _closure3_slot0 = var8;
                    var10 = _closure1_slot19;
                    var9 = var10.isChannelMuted;
                    var8 = _closure1_slot20;
                    var9 = var9.bind(var10)(var8, var6);
                    var8 = _closure1_slot13;
                    var2 = var8.isCollapsed;
                    var8 = var2.bind(var8)(var6);
                    _closure3_slot1 = var1;
                    var2 = {};
                    var2['isMuted'] = var9;
                    var2['isCollapsed'] = var8;
                    var2['record'] = var7;
                    var2['id'] = var6;
                    var4 = _closure2_slot0;
                    var4 = var4[var6];
                    var7 = var1 == var4;
                    var6 = undefined;
                    if(var7) { _fun0009_ip = 101; continue _fun0009 }
case 102:
                    var6 = var4.order;
case 101:
                    var7 = var1 != var6;
                    var4 = 0;
                    if(!var7) { _fun0009_ip = 103; continue _fun0009 }
case 104:
                    var4 = var6;
case 103:
                    var2['position'] = var4;
                    var4 = function getChannelRecords() {
                        var1 = _closure3_slot0;
                        return var1;
                    };
                    var2['getChannelRecords'] = var4;
                    var4 = function getShownChannelIds() {
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
                    var2['getShownChannelIds'] = var4;
                    var4 = function getShownChannelAndThreadIds() {
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
                    var2['getShownChannelAndThreadIds'] = var4;
                    var4 = function isEmpty() {
                        var1 = _closure3_slot0;
                        var2 = var1.length;
                        var1 = 0;
                        var1 = var1 === var2;
                        return var1;
                    };
                    var2['isEmpty'] = var4;
                    var4 = function get channelList() {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var3 = _closure3_slot1;
                            var2 = null;
                            if(!(var2 == var3)) { _fun0010_ip = 84; continue _fun0010 }
case 97:
                            var5 = _closure2_slot11;
                            var4 = _closure3_slot0;
                            var3 = undefined;
                            var2 = this;
                            var2 = var5.bind(var3)(var4, var2);
                            _closure3_slot1 = var2;
case 84:
                            var1 = _closure3_slot1;
                            return var1;
                        }
                    };
                    var3 = 'channelList';
                    Object.defineProperty(var2, var3, {get: var4, set: var5, enumerable: true});
                    return var2;
case 88:
                    return var1;
                }
            };
            var9 = var7.bind(var9)(var6);
            var7 = var9.filter;
            var6 = function(arg1) {
                var2 = null;
                var1 = arg1;
                var1 = var2 != var1;
                return var1;
            };
            var6 = var7.bind(var9)(var6);
            var _closure2_slot8 = var6;
            var7 = new Array(1);
            var7[0] = var1;
            var22 = 1;
            var24 = var7;
            var23 = var6;
            var1 = arraySpread(var24, var23, var22);
            var1 = var7.length;
            var1 = var5 < var1;
            var6 = 0;
            if(!var1) { _fun0005_ip = 105; continue _fun0005 }
case 71:
            var1 = var7[var5];
            var12 = var6 + 1;
            var1['position'] = var12;
            var9 = _closure1_slot24;
            var1 = var1.channelList;
            var11 = var9.bind(var8)(var1);
            var9 = var11.bind(var8)();
            var1 = var9.done;
            var10 = var12;
            var6 = var10;
            if(var1) { _fun0005_ip = 106; continue _fun0005 }
case 107:
            var1 = var9.value;
            var12 = var10 + 1;
            var1['position'] = var12;
            var13 = var11.bind(var8)();
            var1 = var13.done;
            var10 = var12;
            var9 = var13;
            var6 = var10;
            if(!var1) { _fun0005_ip = 107; continue _fun0005 }
case 106:
            var5 = var5 + 1;
            var1 = var7.length;
            if(var5 < var1) { _fun0005_ip = 71; continue _fun0005 }
case 105:
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
            var4 = _closure1_slot20;
            var1['id'] = var4;
            var1['hideMutedChannels'] = var3;
            var3 = function getSections() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = new Array(0);
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var8 = 20;
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
                    if(!var2) { _fun0011_ip = 108; continue _fun0011 }
case 86:
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
                    if(var6 < var2) { _fun0011_ip = 86; continue _fun0011 }
case 108:
                    return var1;
                }
            };
            var1['getSections'] = var3;
            var3 = function isPlaceholderRow(arg1, arg2) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var4 = arg1;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var7 = 20;
                    var1 = var1[var7];
                    var6 = undefined;
                    var1 = var3.bind(var6)(var1);
                    var1 = var1.SECTION_INDEX_FIRST_NAMED_CATEGORY;
                    var3 = var4 < var1;
                    if(var3) { _fun0012_ip = 109; continue _fun0012 }
case 110:
                    var5 = 0;
                    var1 = arg2;
                    var3 = var5 !== var1;
case 109:
                    var1 = !var3;
                    if(var3) { _fun0012_ip = 111; continue _fun0012 }
case 28:
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
case 111:
                    return var1;
                }
            };
            var1['isPlaceholderRow'] = var3;
            var3 = function getCategoryFromSection(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var3 = arg1;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var6 = 20;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.SECTION_INDEX_UNCATEGORIZED_CHANNELS;
                    if(!(var3 !== var2)) { _fun0013_ip = 112; continue _fun0013 }
case 113:
                    var2 = _closure2_slot8;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var6];
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.SECTION_INDEX_FIRST_NAMED_CATEGORY;
                    var1 = var3 - var1;
                    var1 = var2[var1];
                    _fun0013_ip = 114; continue _fun0013;
case 112:
                    var1 = _closure2_slot7;
case 114:
                    return var1;
                }
            };
            var1['getCategoryFromSection'] = var3;
            var3 = function getNamedCategoryFromSection(arg1) {
                var2 = _closure2_slot8;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 20;
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
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var4 = arg2;
                    var3 = this;
                    var2 = var3.getCategoryFromSection;
                    var1 = arg1;
                    var3 = var2.bind(var3)(var1);
                    var5 = null;
                    var2 = var5 == var3;
                    var1 = null;
                    if(var2) { _fun0014_ip = 115; continue _fun0014 }
case 116:
                    var2 = var3.channelList;
                    var2 = var2[var4];
                    var2 = var5 == var2;
                    var1 = null;
                    if(var2) { _fun0014_ip = 115; continue _fun0014 }
case 109:
                    var2 = {};
                    var2['category'] = var3;
                    var3 = var3.channelList;
                    var3 = var3[var4];
                    var2['channel'] = var3;
                    var1 = var2;
case 115:
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
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
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
                    if(!var1) { _fun0015_ip = 117; continue _fun0015 }
case 49:
                    var1 = var6[var3];
                    var1 = var1.channelList;
                    var1 = var1.length;
                    var1 = var5 < var1;
                    var4 = var3;
                    var8 = 0;
                    if(!var1) { _fun0015_ip = 118; continue _fun0015 }
case 119:
                    var1 = var6[var4];
                    var1 = var1.channelList;
                    var1 = var1[var8];
                    var2 = var1.id;
                    var1 = var8;
                    if(!(var2 !== var7)) { _fun0015_ip = 120; continue _fun0015 }
case 121:
                    var8 = var1 + 1;
                    var2 = var6[var4];
                    var2 = var2.channelList;
                    var2 = var2.length;
                    if(var8 < var2) { _fun0015_ip = 119; continue _fun0015 }
case 118:
                    var3 = var4 + 1;
                    var2 = var6.length;
                    if(var3 < var2) { _fun0015_ip = 49; continue _fun0015 }
case 117:
                    var2 = new Array(0);
                    return var2;
case 120:
                    var2 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 20;
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
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
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
                    if(!var2) { _fun0016_ip = 122; continue _fun0016 }
case 100:
                    var11 = _closure1_slot24;
                    var2 = var9[var8];
                    var2 = var2.channelList;
                    var13 = var11.bind(var1)(var2);
                    var11 = var13.bind(var1)();
                    var2 = var11.done;
                    var12 = var11;
                    var11 = var3;
                    var3 = var11;
                    if(var2) { _fun0016_ip = 123; continue _fun0016 }
case 50:
                    var2 = var12.value;
                    var14 = var2.record;
                    var14 = var10.bind(var1)(var14);
                    var14 = _closure1_slot24;
                    var2 = var2.threadIds;
                    var15 = var14.bind(var1)(var2);
                    var16 = var15.bind(var1)();
                    var2 = var16.done;
                    var14 = var16;
                    var16 = var14;
                    if(var2) { _fun0016_ip = 124; continue _fun0016 }
case 125:
                    var18 = var14.value;
                    var17 = _closure1_slot14;
                    var2 = var17.getChannel;
                    var17 = var2.bind(var17)(var18);
                    if(!(var6 != var17)) { _fun0016_ip = 126; continue _fun0016 }
case 127:
                    var2 = var10.bind(var1)(var17);
case 126:
                    var18 = var15.bind(var1)();
                    var2 = var18.done;
                    var14 = var18;
                    var16 = var14;
                    var11 = var17;
                    if(!var2) { _fun0016_ip = 125; continue _fun0016 }
case 124:
                    var17 = var13.bind(var1)();
                    var2 = var17.done;
                    var5 = var16;
                    var12 = var17;
                    var4 = var15;
                    var3 = var11;
                    if(!var2) { _fun0016_ip = 50; continue _fun0016 }
case 123:
                    var8 = var8 + 1;
                    var2 = var9.length;
                    if(var8 < var2) { _fun0016_ip = 100; continue _fun0016 }
case 122:
                    return var1;
                }
            };
            var1['forEachShownChannel'] = var3;
            var3 = function forEachChannel(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
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
                    if(!var2) { _fun0017_ip = 118; continue _fun0017 }
case 128:
                    var7 = _closure1_slot24;
                    var8 = var5[var4];
                    var2 = var8.getChannelRecords;
                    var2 = var2.bind(var8)();
                    var8 = var7.bind(var1)(var2);
                    var7 = var8.bind(var1)();
                    var2 = var7.done;
                    if(var2) { _fun0017_ip = 111; continue _fun0017 }
case 9:
                    var2 = var7.value;
                    var2 = var6.bind(var1)(var2);
                    var9 = var8.bind(var1)();
                    var2 = var9.done;
                    var7 = var9;
                    if(!var2) { _fun0017_ip = 9; continue _fun0017 }
case 111:
                    var4 = var4 + 1;
                    var2 = var5.length;
                    if(var4 < var2) { _fun0017_ip = 128; continue _fun0017 }
case 118:
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
    var _closure1_slot27 = var2;
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
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var20 = var8.bind(var1)(var5);
    var5 = 3;
    var5 = var7[var5];
    var19 = var8.bind(var1)(var5);
    var _closure1_slot5 = var19;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.createFavoritesChannelRecord;
    var _closure1_slot6 = var5;
    var5 = 5;
    var5 = var7[var5];
    var18 = var8.bind(var1)(var5);
    var _closure1_slot7 = var18;
    var5 = 6;
    var5 = var7[var5];
    var17 = var8.bind(var1)(var5);
    var5 = 7;
    var5 = var7[var5];
    var16 = var8.bind(var1)(var5);
    var _closure1_slot8 = var16;
    var5 = 8;
    var5 = var7[var5];
    var15 = var8.bind(var1)(var5);
    var _closure1_slot9 = var15;
    var5 = 9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.THREAD_CHANNEL_TYPES;
    var _closure1_slot10 = var9;
    var9 = var5.isGuildReadableType;
    var _closure1_slot11 = var9;
    var5 = var5.isVoiceChannel;
    var _closure1_slot12 = var5;
    var5 = 10;
    var5 = var7[var5];
    var14 = var8.bind(var1)(var5);
    var _closure1_slot13 = var14;
    var5 = 11;
    var5 = var7[var5];
    var13 = var8.bind(var1)(var5);
    var _closure1_slot14 = var13;
    var5 = 12;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot15 = var5;
    var5 = 13;
    var5 = var7[var5];
    var12 = var8.bind(var1)(var5);
    var5 = 14;
    var5 = var7[var5];
    var11 = var8.bind(var1)(var5);
    var _closure1_slot16 = var11;
    var5 = 15;
    var5 = var7[var5];
    var10 = var8.bind(var1)(var5);
    var _closure1_slot17 = var10;
    var5 = 16;
    var5 = var7[var5];
    var9 = var8.bind(var1)(var5);
    var _closure1_slot18 = var9;
    var5 = 17;
    var5 = var7[var5];
    var8 = var8.bind(var1)(var5);
    var _closure1_slot19 = var8;
    var5 = 18;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var21 = var5.FAVORITES_RAW_GUILD_ID;
    var _closure1_slot20 = var21;
    var5 = var5.MAX_FAVORITE_CHANNELS;
    var _closure1_slot21 = var5;
    var5 = 19;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.Permissions;
    var _closure1_slot22 = var5;
    var5 = new Array(13);
    var5[0] = var20;
    var5[1] = var19;
    var5[2] = var18;
    var5[3] = var17;
    var5[4] = var16;
    var5[5] = var15;
    var5[6] = var14;
    var5[7] = var13;
    var5[8] = var12;
    var5[9] = var11;
    var5[10] = var10;
    var5[11] = var9;
    var5[12] = var8;
    var _closure1_slot23 = var5;
    var5 = 26;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_sidebar/FavoritesGuildChannelList.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useFavoritesGuildChannelList() {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 23;
            var1 = var4[var1];
            var4 = undefined;
            var6 = var3.bind(var4)(var1);
            var3 = var6.useFavoritesAccess;
            var1 = 'FavoritesGuildChannelList';
            var1 = var3.bind(var6)(var1);
            var1 = var1.hasAccess;
            var _closure2_slot0 = var1;
            var11 = _closure1_slot4;
            var6 = var11.useState;
            var3 = function() {
                var2 = _closure1_slot27;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            var7 = var6.bind(var11)(var3);
            var6 = _closure1_slot3;
            var3 = 2;
            var8 = var6.bind(var4)(var7, var3);
            var6 = 0;
            var7 = var8[var6];
            var3 = 1;
            var3 = var8[var3];
            var _closure2_slot1 = var3;
            var8 = _closure1_slot7;
            var3 = var8.isConnected;
            var8 = var3.bind(var8)();
            var _closure2_slot2 = var8;
            var10 = var11.useMemo;
            var9 = function() {
                var3 = _closure1_slot27;
                var2 = undefined;
                var1 = {};
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var3 = new Array(0);
            var3 = var10.bind(var11)(var9, var3);
            var12 = var11.useEffect;
            var10 = function() {
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 24;
                var4 = var4[var3];
                var3 = undefined;
                var6 = var5.bind(var3)(var4);
                var5 = var6.throttle;
                var4 = function() {
                    var3 = _closure2_slot1;
                    var1 = _closure1_slot27;
                    var2 = undefined;
                    var1 = var1.bind(var2)();
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var3 = 100;
                var3 = var5.bind(var6)(var4, var3);
                var _closure3_slot0 = var3;
                var4 = _closure1_slot23;
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
                    var3 = _closure1_slot23;
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
            var9 = new Array(0);
            var9 = var12.bind(var11)(var10, var9);
            var10 = var11.useEffect;
            var9 = new Array(2);
            var9[0] = var1;
            var9[1] = var8;
            var8 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var1 = _closure2_slot0;
                    if(!var1) { _fun0019_ip = 32; continue _fun0019 }
case 129:
                    var1 = _closure2_slot2;
case 32:
                    if(!var1) { _fun0019_ip = 130; continue _fun0019 }
case 131:
                    var3 = _closure1_slot26;
                    var2 = {};
                    var4 = _closure1_slot21;
                    var2['limit'] = var4;
                    var4 = false;
                    var2['includeLoading'] = var4;
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var5 = var3.length;
                    var2 = 0;
                    if(!(var2 !== var5)) { _fun0019_ip = 132; continue _fun0019 }
case 133:
                    var2 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 22;
                    var1 = var5[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.loadThreadsBulk;
                    var1 = var1.bind(var2)(var3);
                    _fun0019_ip = 130; continue _fun0019;
case 132:
                    var1 = global;
                    var2 = var1.Promise;
                    var1 = var2.resolve;
                    var1 = var1.bind(var2)();
case 130:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var10.bind(var11)(var8, var9);
            if(!var1) { _fun0018_ip = 124; continue _fun0018 }
case 134:
            var3 = var7;
case 124:
            if(!var1) { _fun0018_ip = 135; continue _fun0018 }
case 136:
            var7 = _closure1_slot26;
            var5 = {'limit': 1, 'includeLoading': true};
            var5 = var7.bind(var4)(var5);
            var5 = var5.length;
            var1 = var5 > var6;
case 135:
            var2 = function shouldShowFavoritesEmptyState(arg1) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var4 = arg1;
                    var2 = var4.getSections;
                    var2 = var2.bind(var4)();
                    var3 = var2.length;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 20;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5);
                    var2 = var2.SECTION_INDEX_FIRST_NAMED_CATEGORY;
                    if(!(!(var3 > var2))) { _fun0020_ip = 137; continue _fun0020 }
case 4:
                    var2 = false;
                    var _closure3_slot0 = var2;
                    var3 = var4.forEachShownChannel;
                    var2 = function() {
                        var1 = true;
                        _closure3_slot0 = var1;
                        var1 = undefined;
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    var1 = _closure3_slot0;
                    var1 = !var1;
                    return var1;
case 137:
                    var1 = false;
                    return var1;
                }
            };
            var2 = var2.bind(var4)(var3);
            if(!var2) { _fun0018_ip = 138; continue _fun0018 }
case 139:
            var2 = !var1;
case 138:
            var1 = {};
            var1['guildChannels'] = var3;
            var1['shouldShowEmptyState'] = var2;
            return var1;
        }
    };
    var3['useFavoritesGuildChannelList'] = var4;
    var3['computeFavoritesState'] = var2;
    return var1;
})();