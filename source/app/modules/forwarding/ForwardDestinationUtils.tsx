// app/modules/forwarding/ForwardDestinationUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function messageHasCheckpoint(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.components;
            var1 = var1.length;
            var3 = 0;
            var1 = var1 > var3;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var2.components;
            var2 = var2[var3];
            var3 = var2.type;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 13;
            var4 = var4[var2];
            var2 = undefined;
            var2 = var5.bind(var2)(var4);
            var2 = var2.ComponentType;
            var2 = var2.CHECKPOINT_CARD;
            var1 = var3 === var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var4 = function isRatelimitedInChannel(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var2 = var5.rateLimitPerUser;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var3 = var5.rateLimitPerUser;
            var2 = 0;
            var1 = var3 > var2;
case 4:
            if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.canBypassSlowmodeHelper;
            var2 = arg2;
            var2 = var3.bind(var4)(var5, var2);
            var1 = !var2;
case 6:
            return var1;
        }
    };
    var _closure1_slot15 = var4;
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
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.ChannelRecordBase;
    var _closure1_slot5 = var9;
    var9 = var5.isGuildChannelType;
    var _closure1_slot6 = var9;
    var5 = var5.createChannelRecord;
    var _closure1_slot7 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.MessageFlags;
    var _closure1_slot12 = var8;
    var5 = var5.Permissions;
    var _closure1_slot13 = var5;
    var5 = 20;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/forwarding/ForwardDestinationUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useSelectedDestinationChannel(arg1) {
        var8 = arg1;
        var4 = var8.map;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
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
        var4 = _closure1_slot8;
        var5 = new Array(1);
        var5[0] = var4;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var3 = _closure1_slot8;
            var2 = var3.getChannel;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5 = var6.bind(var7)(var5, var3, var4);
        var _closure2_slot1 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = _closure2_slot1;
                var1 = null;
                if(!(var1 == var3)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var4 = _closure1_slot7;
                var3 = {};
                var5 = '1';
                var3['id'] = var5;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 11;
                var5 = var5[var1];
                var1 = undefined;
                var5 = var6.bind(var1)(var5);
                var5 = var5.ChannelTypes;
                var5 = var5.DM;
                var3['type'] = var5;
                var1 = var4.bind(var1)(var3);
                _fun0003_ip = 10; continue _fun0003;
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
    var5 = function getDestinationIsUnavailable(arg1, arg2, arg3, arg4) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var14 = arg2;
            var6 = arg3;
            var5 = arg4;
            var _closure2_slot0 = var6;
            var1 = _closure1_slot5;
            var10 = var6 instanceof var1;
            var11 = null;
            if(!(var11 != var5)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
            var1 = undefined;
            var1 = var5.bind(var1)(var6);
            if(!(var11 == var1)) { _fun0004_ip = 13; continue _fun0004 }
case 11:
            if(!(var11 != var4)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var5 = _closure1_slot14;
            var7 = undefined;
            var9 = var5.bind(var7)(var4);
            var5 = var4.messageSnapshots;
            var5 = var5.length;
            var8 = 0;
            var5 = var5 > var8;
            if(!var5) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            var13 = _closure1_slot14;
            var12 = var4.messageSnapshots;
            var12 = var12[var8];
            var12 = var12.message;
            var5 = var13.bind(var7)(var12);
case 16:
            if(!(var11 == var14)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            if(!var9) { _fun0004_ip = 14; continue _fun0004 }
case 18:
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var13 = 14;
            var11 = var11[var13];
            var12 = var12.bind(var7)(var11);
            var11 = var12.isChannelOrGuildNSFW;
            var11 = var11.bind(var12)(var14);
            if(!var11) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            if(!var10) { _fun0004_ip = 22; continue _fun0004 }
case 23:
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var13];
            var12 = var12.bind(var7)(var11);
            var11 = var12.isChannelOrGuildNSFW;
            var11 = var11.bind(var12)(var6);
            if(var11) { _fun0004_ip = 20; continue _fun0004 }
case 22:
            var11 = {};
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var12 = 15;
            var13 = var16[var12];
            var13 = var15.bind(var7)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var7)(var12);
            var12 = var12.t;
            var12 = var12.KgPx1D;
            var12 = var13.bind(var14)(var12);
            var11['label'] = var12;
            var12 = 2;
            var11['lineClamp'] = var12;
            return var11;
case 20:
            if(!var10) { _fun0004_ip = 14; continue _fun0004 }
case 24:
            var11 = _closure1_slot6;
            var10 = var6.type;
            var10 = var11.bind(var7)(var10);
            if(!var10) { _fun0004_ip = 14; continue _fun0004 }
case 25:
            var10 = var4.attachments;
            var10 = var10.length;
            if(!(!(var10 > var8))) { _fun0004_ip = 26; continue _fun0004 }
case 27:
            var12 = var4.messageSnapshots;
            var11 = var12.some;
            var10 = function(arg1) {
                var1 = arg1;
                var1 = var1.message;
                var1 = var1.attachments;
                var2 = var1.length;
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var10 = var11.bind(var12)(var10);
            if(!var10) { _fun0004_ip = 28; continue _fun0004 }
case 26:
            var12 = _closure1_slot9;
            var11 = var12.can;
            var10 = _closure1_slot13;
            var10 = var10.ATTACH_FILES;
            var10 = var11.bind(var12)(var10, var6);
            if(var10) { _fun0004_ip = 28; continue _fun0004 }
case 29:
            var10 = {};
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 15;
            var12 = var15[var11];
            var12 = var14.bind(var7)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.P7yvbm;
            var11 = var12.bind(var13)(var11);
            var10['label'] = var11;
            return var10;
case 28:
            var10 = var4.embeds;
            var10 = var10.length;
            if(!(!(var10 > var8))) { _fun0004_ip = 30; continue _fun0004 }
case 31:
            var12 = var4.messageSnapshots;
            var11 = var12.some;
            var10 = function(arg1) {
                var1 = arg1;
                var1 = var1.message;
                var1 = var1.embeds;
                var2 = var1.length;
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var10 = var11.bind(var12)(var10);
            if(!var10) { _fun0004_ip = 32; continue _fun0004 }
case 30:
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var12 = 16;
            var10 = var10[var12];
            var13 = var11.bind(var7)(var10);
            var11 = var13.canEmbedLinks;
            var10 = _closure1_slot9;
            var10 = var11.bind(var13)(var6, var10);
            if(var10) { _fun0004_ip = 32; continue _fun0004 }
case 33:
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var12];
            var11 = var11.bind(var7)(var10);
            var10 = var11.shouldStripEmbeds;
            var10 = var10.bind(var11)(var4);
            if(var10) { _fun0004_ip = 32; continue _fun0004 }
case 34:
            var10 = {};
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 15;
            var12 = var15[var11];
            var12 = var14.bind(var7)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.Wr4RIX;
            var11 = var12.bind(var13)(var11);
            var10['label'] = var11;
            return var10;
case 32:
            if(var9) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            if(!var5) { _fun0004_ip = 37; continue _fun0004 }
case 35:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 16;
            var5 = var10[var5];
            var10 = var9.bind(var7)(var5);
            var9 = var10.canEmbedLinks;
            var5 = _closure1_slot9;
            var5 = var9.bind(var10)(var6, var5);
            if(var5) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var5 = {};
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 15;
            var10 = var13[var9];
            var10 = var12.bind(var7)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var7)(var9);
            var9 = var9.t;
            var9 = var9.Wr4RIX;
            var9 = var10.bind(var11)(var9);
            var5['label'] = var9;
            return var5;
case 37:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 12;
            var5 = var10[var5];
            var9 = var9.bind(var7)(var5);
            var5 = var9.getMessageStickers;
            var18 = var5.bind(var9)(var4);
            var9 = new Array(0);
            var19 = var9;
            var17 = 0;
            var17 = arraySpread(var19, var18, var17);
            var12 = var4.messageSnapshots;
            var11 = var12.flatMap;
            var5 = function(arg1) {
                var1 = arg1;
                var3 = var1.message;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.getMessageStickers;
                var1 = var1.bind(var2)(var3);
                return var1;
            };
            var18 = var11.bind(var12)(var5);
            var19 = var9;
            var5 = arraySpread(var19, var18, var17);
            var5 = var9.length;
            if(!(var5 > var8)) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var10 = _closure1_slot9;
            var8 = var10.can;
            var5 = _closure1_slot13;
            var5 = var5.USE_EXTERNAL_STICKERS;
            var5 = var8.bind(var10)(var5, var6);
            if(var5) { _fun0004_ip = 39; continue _fun0004 }
case 41:
            var8 = var9.some;
            var5 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var5 = _closure1_slot4;
                    var3 = var5.getStickerById;
                    var1 = arg1;
                    var1 = var1.id;
                    var3 = var3.bind(var5)(var1);
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0005_ip = 10; continue _fun0005 }
case 42:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 12;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var4 = var5.isGuildSticker;
                    var4 = var4.bind(var5)(var3);
                    var4 = !var4;
                    var1 = !var4;
case 10:
                    if(!var1) { _fun0005_ip = 43; continue _fun0005 }
case 44:
                    var3 = var3.guild_id;
                    var2 = var2.guild_id;
                    var2 = var3 !== var2;
                    if(var2) { _fun0005_ip = 45; continue _fun0005 }
case 46:
                    var2 = undefined;
case 45:
                    var1 = var2;
case 43:
                    return var1;
                }
            };
            var5 = var8.bind(var9)(var5);
            if(!var5) { _fun0004_ip = 39; continue _fun0004 }
case 47:
            var5 = {};
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 15;
            var9 = var12[var8];
            var9 = var11.bind(var7)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var7)(var8);
            var8 = var8.t;
            var8 = var8["0Yyrua"];
            var8 = var9.bind(var10)(var8);
            var5['label'] = var8;
            return var5;
case 39:
            var8 = var4.hasFlag;
            var5 = _closure1_slot12;
            var5 = var5.IS_VOICE_MESSAGE;
            var5 = var8.bind(var4)(var5);
            if(var5) { _fun0004_ip = 48; continue _fun0004 }
case 49:
            var5 = var4.messageSnapshots;
            var4 = var5.some;
            var2 = function(arg1) {
                var1 = arg1;
                var3 = var1.message;
                var2 = var3.hasFlag;
                var1 = _closure1_slot12;
                var1 = var1.IS_VOICE_MESSAGE;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var4.bind(var5)(var2);
            if(!var2) { _fun0004_ip = 14; continue _fun0004 }
case 48:
            var5 = _closure1_slot9;
            var4 = var5.can;
            var2 = _closure1_slot13;
            var2 = var2.SEND_VOICE_MESSAGES;
            var2 = var4.bind(var5)(var2, var6);
            if(var2) { _fun0004_ip = 14; continue _fun0004 }
case 50:
            var2 = {};
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 15;
            var4 = var8[var3];
            var4 = var6.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var6.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.quj4DY;
            var3 = var4.bind(var5)(var3);
            var2['label'] = var3;
            return var2;
case 14:
            var2 = undefined;
            return var2;
case 13:
            return var1;
        }
    };
    var3['getDestinationIsUnavailable'] = var5;
    var3['isRatelimitedInChannel'] = var4;
    var4 = function useSelectedDestinationNames(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 10;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStoresArray;
        var7 = _closure1_slot11;
        var3 = new Array(3);
        var3[0] = var7;
        var7 = _closure1_slot8;
        var3[1] = var7;
        var2 = _closure1_slot10;
        var3[2] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var3 = _closure2_slot0;
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.type;
                    var4 = var1.id;
                    var1 = 'user';
                    if(!(var1 !== var2)) { _fun0006_ip = 51; continue _fun0006 }
case 52:
                    var3 = _closure1_slot8;
                    var1 = var3.getChannel;
                    var8 = var1.bind(var3)(var4);
                    var1 = null;
                    var3 = var1 != var8;
                    if(!var3) { _fun0006_ip = 53; continue _fun0006 }
case 54:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 19;
                    var5 = var5[var3];
                    var3 = undefined;
                    var7 = var6.bind(var3)(var5);
                    var6 = var7.computeChannelName;
                    var11 = _closure1_slot11;
                    var10 = _closure1_slot10;
                    var9 = true;
                    var13 = var7;
                    var12 = var8;
                    var1 = var13[var6](var12, var11, var10, var9, var8);
case 53:
                    return var1;
case 51:
                    var2 = _closure1_slot11;
                    var1 = var2.getUser;
                    var5 = var1.bind(var2)(var4);
                    var4 = null;
                    var2 = var4 != var5;
                    var1 = null;
                    if(!var2) { _fun0006_ip = 55; continue _fun0006 }
case 56:
                    var7 = _closure1_slot10;
                    var6 = var7.getNickname;
                    var2 = var5.id;
                    var2 = var6.bind(var7)(var2);
                    if(!(var4 == var2)) { _fun0006_ip = 57; continue _fun0006 }
case 58:
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 18;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var6.bind(var3)(var4);
                    var3 = var4.getName;
                    var2 = var3.bind(var4)(var5);
case 57:
                    var1 = var2;
case 55:
                    return var1;
                }
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.filter;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 9;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.isNotNullish;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useSelectedDestinationNames'] = var4;
    var2 = function useDestinationNamesWithSlowmode(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var7 = _closure1_slot2;
        var3 = 10;
        var8 = var7[var3];
        var4 = undefined;
        var11 = var5.bind(var4)(var8);
        var10 = var11.useStateFromStoresArray;
        var8 = _closure1_slot8;
        var9 = new Array(2);
        var9[0] = var8;
        var8 = _closure1_slot9;
        var9[1] = var8;
        var8 = new Array(1);
        var8[0] = var6;
        var6 = function() {
            var4 = _closure2_slot0;
            var3 = var4.map;
            var2 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.type;
                    var4 = var1.id;
                    var2 = 'channel';
                    var1 = null;
                    if(!(var2 === var3)) { _fun0007_ip = 59; continue _fun0007 }
case 3:
                    var3 = _closure1_slot8;
                    var2 = var3.getChannel;
                    var1 = var2.bind(var3)(var4);
case 59:
                    return var1;
                }
            };
            var4 = var3.bind(var4)(var2);
            var3 = var4.filter;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 9;
            var5 = var5[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var5);
            var2 = var2.isNotNullish;
            var3 = var3.bind(var4)(var2);
            var2 = var3.filter;
            var1 = function(arg1) {
                var4 = _closure1_slot15;
                var3 = _closure1_slot9;
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
        var7 = _closure1_slot11;
        var3 = new Array(2);
        var3[0] = var7;
        var2 = _closure1_slot10;
        var3[1] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var3 = _closure2_slot1;
            var2 = var3.map;
            var1 = function(arg1) {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 19;
                var3 = var3[var2];
                var2 = undefined;
                var6 = var4.bind(var2)(var3);
                var5 = var6.computeChannelName;
                var9 = _closure1_slot11;
                var8 = _closure1_slot10;
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