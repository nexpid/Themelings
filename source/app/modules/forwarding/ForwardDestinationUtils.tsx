// app/modules/forwarding/ForwardDestinationUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function isRatelimitedInChannel(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var2 = var6.rateLimitPerUser;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var6.rateLimitPerUser;
            var2 = 0;
            var1 = var3 > var2;
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var5.can;
            var2 = _closure1_slot12;
            var2 = var2.MANAGE_CHANNELS;
            var2 = var4.bind(var5)(var2, var6);
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var5.can;
            var3 = _closure1_slot12;
            var3 = var3.MANAGE_MESSAGES;
            var2 = var4.bind(var5)(var3, var6);
case 6:
            var1 = !var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot13 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var9 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.ChannelRecordBase;
    var _closure1_slot4 = var9;
    var9 = var5.isGuildChannelType;
    var _closure1_slot5 = var9;
    var5 = var5.createChannelRecord;
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.MessageFlags;
    var _closure1_slot11 = var8;
    var5 = var5.Permissions;
    var _closure1_slot12 = var5;
    var5 = 17;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/forwarding/ForwardDestinationUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useSelectedDestinationChannel(arg1) {
        var8 = arg1;
        var4 = var8.map;
        var6 = _closure1_slot0;
        var7 = _closure1_slot1;
        var3 = 8;
        var3 = var7[var3];
        var5 = undefined;
        var3 = var6.bind(var5)(var3);
        var3 = var3.getChannelIdFromDestinationId;
        var8 = var4.bind(var8)(var3);
        var4 = var8.find;
        var3 = 9;
        var3 = var7[var3];
        var3 = var6.bind(var5)(var3);
        var3 = var3.isNotNullish;
        var3 = var4.bind(var8)(var3);
        var _closure2_slot0 = var3;
        var4 = 10;
        var4 = var7[var4];
        var7 = var6.bind(var5)(var4);
        var6 = var7.useStateFromStores;
        var4 = _closure1_slot7;
        var5 = new Array(1);
        var5[0] = var4;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var3 = _closure1_slot7;
            var2 = var3.getChannel;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5 = var6.bind(var7)(var5, var3, var4);
        var _closure2_slot1 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = _closure2_slot1;
                var1 = null;
                if(!(var1 == var3)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var4 = _closure1_slot6;
                var3 = {};
                var5 = '1';
                var3['id'] = var5;
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 11;
                var5 = var5[var1];
                var1 = undefined;
                var5 = var6.bind(var1)(var5);
                var5 = var5.ChannelTypes;
                var5 = var5.DM;
                var3['type'] = var5;
                var1 = var4.bind(var1)(var3);
                _fun0002_ip = 10; continue _fun0002;
case 8:
                var1 = _closure2_slot1;
case 10:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useSelectedDestinationChannel'] = var5;
    var5 = function getDestinationIsUnavailable(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var6 = arg3;
            var _closure2_slot0 = var6;
            var1 = _closure1_slot4;
            var5 = var6 instanceof var1;
            var8 = _closure1_slot0;
            var1 = _closure1_slot1;
            var9 = 13;
            var7 = var1[var9];
            var1 = undefined;
            var10 = var8.bind(var1)(var7);
            var8 = var10.isChannelContentGated;
            var7 = arg2;
            var7 = var8.bind(var10)(var7);
            if(!var7) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            if(!var5) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var8 = _closure1_slot0;
            var7 = _closure1_slot1;
            var7 = var7[var9];
            var8 = var8.bind(var1)(var7);
            var7 = var8.isChannelContentGated;
            var7 = var7.bind(var8)(var6);
            if(var7) { _fun0003_ip = 11; continue _fun0003 }
case 13:
            var7 = {};
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            var8 = 14;
            var9 = var12[var8];
            var9 = var11.bind(var1)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var1)(var8);
            var8 = var8.t;
            var8 = var8.KgPx1N;
            var8 = var9.bind(var10)(var8);
            var7['label'] = var8;
            return var7;
case 11:
            if(!var5) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var7 = _closure1_slot5;
            var5 = var6.type;
            var5 = var7.bind(var1)(var5);
            if(!var5) { _fun0003_ip = 15; continue _fun0003 }
case 17:
            var5 = var4.attachments;
            var5 = var5.length;
            var7 = 0;
            if(!(!(var5 > var7))) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var9 = var4.messageSnapshots;
            var8 = var9.some;
            var5 = function(arg1) {
                var1 = arg1;
                var1 = var1.message;
                var1 = var1.attachments;
                var2 = var1.length;
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var5 = var8.bind(var9)(var5);
            if(!var5) { _fun0003_ip = 20; continue _fun0003 }
case 18:
            var9 = _closure1_slot8;
            var8 = var9.can;
            var5 = _closure1_slot12;
            var5 = var5.ATTACH_FILES;
            var5 = var8.bind(var9)(var5, var6);
            if(var5) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var5 = {};
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            var8 = 14;
            var9 = var12[var8];
            var9 = var11.bind(var1)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var1)(var8);
            var8 = var8.t;
            var8 = var8.P7yvbm;
            var8 = var9.bind(var10)(var8);
            var5['label'] = var8;
            return var5;
case 20:
            var5 = var4.embeds;
            var5 = var5.length;
            if(!(!(var5 > var7))) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var9 = var4.messageSnapshots;
            var8 = var9.some;
            var5 = function(arg1) {
                var1 = arg1;
                var1 = var1.message;
                var1 = var1.embeds;
                var2 = var1.length;
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var5 = var8.bind(var9)(var5);
            if(!var5) { _fun0003_ip = 24; continue _fun0003 }
case 22:
            var8 = _closure1_slot0;
            var5 = _closure1_slot1;
            var9 = 15;
            var5 = var5[var9];
            var10 = var8.bind(var1)(var5);
            var8 = var10.canEmbedLinks;
            var5 = _closure1_slot8;
            var5 = var8.bind(var10)(var6, var5);
            if(var5) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var8 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var9];
            var8 = var8.bind(var1)(var5);
            var5 = var8.shouldStripEmbeds;
            var5 = var5.bind(var8)(var4);
            if(var5) { _fun0003_ip = 24; continue _fun0003 }
case 26:
            var5 = {};
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            var8 = 14;
            var9 = var12[var8];
            var9 = var11.bind(var1)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var1)(var8);
            var8 = var8.t;
            var8 = var8.Wr4RIS;
            var8 = var9.bind(var10)(var8);
            var5['label'] = var8;
            return var5;
case 24:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var5 = 12;
            var5 = var9[var5];
            var8 = var8.bind(var1)(var5);
            var5 = var8.getMessageStickers;
            var14 = var5.bind(var8)(var4);
            var8 = new Array(0);
            var15 = var8;
            var13 = 0;
            var13 = arraySpread(var15, var14, var13);
            var11 = var4.messageSnapshots;
            var10 = var11.flatMap;
            var5 = function(arg1) {
                var1 = arg1;
                var3 = var1.message;
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.getMessageStickers;
                var1 = var1.bind(var2)(var3);
                return var1;
            };
            var14 = var10.bind(var11)(var5);
            var15 = var8;
            var5 = arraySpread(var15, var14, var13);
            var5 = var8.length;
            if(!(var5 > var7)) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var9 = _closure1_slot8;
            var7 = var9.can;
            var5 = _closure1_slot12;
            var5 = var5.USE_EXTERNAL_STICKERS;
            var5 = var7.bind(var9)(var5, var6);
            if(var5) { _fun0003_ip = 27; continue _fun0003 }
case 29:
            var7 = var8.some;
            var5 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var5 = _closure1_slot3;
                    var3 = var5.getStickerById;
                    var1 = arg1;
                    var1 = var1.id;
                    var3 = var3.bind(var5)(var1);
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0004_ip = 10; continue _fun0004 }
case 30:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var4 = 12;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var4 = var5.isGuildSticker;
                    var4 = var4.bind(var5)(var3);
                    var4 = !var4;
                    var1 = !var4;
case 10:
                    if(!var1) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                    var3 = var3.guild_id;
                    var2 = var2.guild_id;
                    var2 = var3 !== var2;
                    if(var2) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                    var2 = undefined;
case 33:
                    var1 = var2;
case 31:
                    return var1;
                }
            };
            var5 = var7.bind(var8)(var5);
            if(!var5) { _fun0003_ip = 27; continue _fun0003 }
case 35:
            var5 = {};
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var7 = 14;
            var8 = var11[var7];
            var8 = var10.bind(var1)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.0Yyrub;
            var7 = var8.bind(var9)(var7);
            var5['label'] = var7;
            return var5;
case 27:
            var7 = var4.hasFlag;
            var5 = _closure1_slot11;
            var5 = var5.IS_VOICE_MESSAGE;
            var5 = var7.bind(var4)(var5);
            if(var5) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var5 = var4.messageSnapshots;
            var4 = var5.some;
            var2 = function(arg1) {
                var1 = arg1;
                var3 = var1.message;
                var2 = var3.hasFlag;
                var1 = _closure1_slot11;
                var1 = var1.IS_VOICE_MESSAGE;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var4.bind(var5)(var2);
            if(!var2) { _fun0003_ip = 15; continue _fun0003 }
case 36:
            var5 = _closure1_slot8;
            var4 = var5.can;
            var2 = _closure1_slot12;
            var2 = var2.SEND_VOICE_MESSAGES;
            var2 = var4.bind(var5)(var2, var6);
            if(var2) { _fun0003_ip = 15; continue _fun0003 }
case 38:
            var2 = {};
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 14;
            var4 = var7[var3];
            var4 = var6.bind(var1)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var7[var3];
            var3 = var6.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3.quj4DQ;
            var3 = var4.bind(var5)(var3);
            var2['label'] = var3;
            return var2;
case 15:
            return var1;
        }
    };
    var3['getDestinationIsUnavailable'] = var5;
    var3['isRatelimitedInChannel'] = var4;
    var2 = function useDestinationNamesWithSlowmode(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var7 = _closure1_slot1;
        var3 = 10;
        var8 = var7[var3];
        var4 = undefined;
        var11 = var5.bind(var4)(var8);
        var10 = var11.useStateFromStoresArray;
        var8 = _closure1_slot7;
        var9 = new Array(2);
        var9[0] = var8;
        var8 = _closure1_slot8;
        var9[1] = var8;
        var8 = new Array(1);
        var8[0] = var6;
        var6 = function() {
            var4 = _closure2_slot0;
            var3 = var4.map;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.type;
                    var4 = var1.id;
                    var2 = 'channel';
                    var1 = null;
                    if(!(var2 === var3)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                    var3 = _closure1_slot7;
                    var2 = var3.getChannel;
                    var1 = var2.bind(var3)(var4);
case 39:
                    return var1;
                }
            };
            var4 = var3.bind(var4)(var2);
            var3 = var4.filter;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 9;
            var5 = var5[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var5);
            var2 = var2.isNotNullish;
            var3 = var3.bind(var4)(var2);
            var2 = var3.filter;
            var1 = function(arg1) {
                var4 = _closure1_slot13;
                var3 = _closure1_slot8;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6 = var10.bind(var11)(var9, var6, var8);
        var _closure2_slot1 = var6;
        var3 = var7[var3];
        var5 = var5.bind(var4)(var3);
        var4 = var5.useStateFromStoresArray;
        var7 = _closure1_slot10;
        var3 = new Array(2);
        var3[0] = var7;
        var2 = _closure1_slot9;
        var3[1] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var3 = _closure2_slot1;
            var2 = var3.map;
            var1 = function(arg1) {
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 16;
                var3 = var3[var2];
                var2 = undefined;
                var6 = var4.bind(var2)(var3);
                var5 = var6.computeChannelName;
                var9 = _closure1_slot10;
                var8 = _closure1_slot9;
                var10 = arg1;
                var7 = true;
                var11 = var6;
                var1 = var11[var5](var10, var9, var8, var7, var6);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useDestinationNamesWithSlowmode'] = var2;
    return var1;
})();