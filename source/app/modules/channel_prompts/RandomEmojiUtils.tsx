// app/modules/channel_prompts/RandomEmojiUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function isGuildSafe(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = _closure1_slot6;
            var2 = var4.getGuild;
            var1 = arg1;
            var4 = var2.bind(var4)(var1);
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0001_ip = 75; continue _fun0001 }
 29:
            var5 = var4.nsfwLevel;
            var2 = _closure1_slot8;
            var2 = var2.DEFAULT;
            var2 = var5 === var2;
            if(var2) { _fun0001_ip = 72; continue _fun0001 }
 52:
            var4 = var4.nsfwLevel;
            var3 = _closure1_slot8;
            var3 = var3.SAFE;
            var2 = var4 === var3;
 72:
            var1 = var2;
 75:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function _sendRandomStickerOrEmoji() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var11 = arg1;
                    var12 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 959; continue _fun0002 }
 18:
                    var _closure4_slot0 = var12;
                    var3 = undefined;
                    var _closure4_slot1 = var3;
                    var _closure4_slot2 = var3;
                    var2 = var12.getGuildId;
                    var6 = var2.bind(var12)();
                    _closure4_slot1 = var6;
                    var13 = null;
                    if(!(var13 != var6)) { _fun0002_ip = 953; continue _fun0002 }
 55:
                    var5 = _closure1_slot6;
                    var2 = var5.getGuild;
                    var2 = var2.bind(var5)(var6);
                    if(!(var13 != var2)) { _fun0002_ip = 953; continue _fun0002 }
 79:
                    var5 = _closure1_slot7;
                    var2 = var5.getCurrentUser;
                    var2 = var2.bind(var5)();
                    _closure4_slot2 = var2;
                    if(!(var13 != var2)) { _fun0002_ip = 953; continue _fun0002 }
 103:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 8;
                    var2 = var6[var2];
                    var5 = var5.bind(var3)(var2);
                    var2 = var5.fetchStickerPacks;
                    var2 = var2.bind(var5)();
                    SaveGenerator(address=137);
 135:
                    return var2;
 137:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 956; continue _fun0002 }
 146:
                    var5 = global;
                    var9 = var5.Array;
                    var8 = var9.from;
                    var10 = _closure1_slot5;
                    var6 = var10.getAllStickersIterator;
                    var6 = var6.bind(var10)();
                    var10 = var8.bind(var9)(var6);
                    var8 = var10.filter;
                    var6 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 9;
                        var3 = var3[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                        var1 = var1.MetaStickerType;
                        var1 = var1.GUILD;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var9 = var8.bind(var10)(var6);
                    var8 = var9.filter;
                    var6 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var6 = arg1;
                            var3 = _closure1_slot11;
                            var1 = var6.guild_id;
                            var4 = undefined;
                            var1 = var3.bind(var4)(var1);
                            if(!var1) { _fun0003_ip = 69; continue _fun0003 }
 25:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 10;
                            var2 = var5[var2];
                            var5 = var3.bind(var4)(var2);
                            var4 = var5.isSendableSticker;
                            var3 = _closure4_slot2;
                            var2 = _closure4_slot0;
                            var1 = var4.bind(var5)(var6, var3, var2);
 69:
                            return var1;
                        }
                    };
                    var9 = var8.bind(var9)(var6);
                    var8 = var9.sort;
                    var6 = function(arg1, arg2) {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 11;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.compare;
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = arg2;
                        var1 = var1.id;
                        var1 = var3.bind(var4)(var2, var1);
                        var1 = -var1;
                        return var1;
                    };
                    var6 = var8.bind(var9)(var6);
                    var9 = var6.length;
                    var8 = 5;
                    if(!(!(var9 > var8))) { _fun0002_ip = 759; continue _fun0002 }
 245:
                    var9 = _closure1_slot6;
                    var8 = var9.getGuildIds;
                    var14 = var8.bind(var9)();
                    var9 = var14.filter;
                    var8 = _closure1_slot11;
                    var14 = var9.bind(var14)(var8);
                    var9 = var14.map;
                    var8 = function(arg1) {
                        var3 = _closure1_slot4;
                        var2 = var3.getUsableGuildEmoji;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var9 = var9.bind(var14)(var8);
                    var8 = var9.flat;
                    var14 = var8.bind(var9)();
                    var9 = var14.filter;
                    var8 = function(arg1) {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 13;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.getEmojiUnavailableReason;
                        var1 = {};
                        var5 = arg1;
                        var1['emoji'] = var5;
                        var6 = _closure4_slot0;
                        var1['channel'] = var6;
                        var5 = _closure4_slot1;
                        var1['guildId'] = var5;
                        var4 = _closure1_slot9;
                        var4 = var4.CHAT;
                        var1['intention'] = var4;
                        var2 = var2.bind(var3)(var1);
                        var1 = null;
                        var1 = var1 == var2;
                        return var1;
                    };
                    var14 = var9.bind(var14)(var8);
                    var9 = var14.sort;
                    var8 = function(arg1, arg2) {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 11;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.compare;
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = arg2;
                        var1 = var1.id;
                        var1 = var3.bind(var4)(var2, var1);
                        var1 = -var1;
                        return var1;
                    };
                    var8 = var9.bind(var14)(var8);
                    var14 = var8.length;
                    var9 = 10;
                    if(!(!(var14 > var9))) { _fun0002_ip = 545; continue _fun0002 }
 350:
                    var9 = var10.filter;
                    var7 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 9;
                        var3 = var3[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                        var1 = var1.MetaStickerType;
                        var1 = var1.STANDARD;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var9 = var9.bind(var10)(var7);
                    var14 = var5.Math;
                    var10 = var14.floor;
                    var15 = var5.Math;
                    var7 = var15.random;
                    var15 = var7.bind(var15)();
                    var7 = var9.length;
                    var7 = var15 * var7;
                    var7 = var10.bind(var14)(var7);
                    var7 = var9[var7];
                    var7 = var7.id;
                    var16 = new Array(1);
                    var16[0] = var7;
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var7 = 12;
                    var7 = var10[var7];
                    var15 = var9.bind(var3)(var7);
                    var14 = var15.sendStickers;
                    var10 = var12.id;
                    var9 = {};
                    var7 = {};
                    var17 = var12.getGuildId;
                    var18 = var17.bind(var12)();
                    var19 = var13 != var18;
                    var17 = undefined;
                    if(!var19) { _fun0002_ip = 483; continue _fun0002 }
 480:
                    var17 = var18;
 483:
                    var7['guild_id'] = var17;
                    var17 = var12.id;
                    var7['channel_id'] = var17;
                    var7['message_id'] = var11;
                    var9['messageReference'] = var7;
                    var7 = _closure1_slot10;
                    var7 = var7.CHANNEL_PROMPT;
                    var9['location'] = var7;
                    var21 = '';
                    var24 = var15;
                    var23 = var10;
                    var22 = var16;
                    var20 = var9;
                    var7 = var24[var14](var23, var22, var21, var20, var19);
                    _fun0002_ip = 953; continue _fun0002;
 545:
                    var10 = var5.Math;
                    var9 = var10.floor;
                    var16 = var5.Math;
                    var15 = var16.pow;
                    var14 = var5.Math;
                    var7 = var14.random;
                    var14 = var7.bind(var14)();
                    var7 = 2;
                    var14 = var15.bind(var16)(var14, var7);
                    var7 = var8.length;
                    var7 = var14 * var7;
                    var7 = var9.bind(var10)(var7);
                    var7 = var8[var7];
                    var9 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var8 = 12;
                    var8 = var16[var8];
                    var15 = var9.bind(var3)(var8);
                    var14 = var15.sendMessage;
                    var10 = var12.id;
                    var8 = 14;
                    var8 = var16[var8];
                    var9 = var9.bind(var3)(var8);
                    var8 = var9.parse;
                    var7 = var7.allNamesString;
                    var9 = var8.bind(var9)(var12, var7);
                    var8 = {};
                    var7 = _closure1_slot10;
                    var7 = var7.CHANNEL_PROMPT;
                    var8['location'] = var7;
                    var7 = {};
                    var16 = var12.getGuildId;
                    var17 = var16.bind(var12)();
                    var18 = var13 != var17;
                    var16 = undefined;
                    if(!var18) { _fun0002_ip = 713; continue _fun0002 }
 710:
                    var16 = var17;
 713:
                    var7['guild_id'] = var16;
                    var16 = var12.id;
                    var7['channel_id'] = var16;
                    var7['message_id'] = var11;
                    var8['messageReference'] = var7;
                    var21 = false;
                    var24 = var15;
                    var23 = var10;
                    var22 = var9;
                    var20 = var8;
                    var7 = var24[var14](var23, var22, var21, var20, var19);
                    _fun0002_ip = 953; continue _fun0002;
 759:
                    var8 = var5.Math;
                    var7 = var8.floor;
                    var14 = var5.Math;
                    var10 = var14.pow;
                    var9 = var5.Math;
                    var5 = var9.random;
                    var9 = var5.bind(var9)();
                    var5 = 2;
                    var9 = var10.bind(var14)(var9, var5);
                    var5 = var6.length;
                    var5 = var9 * var5;
                    var5 = var7.bind(var8)(var5);
                    var5 = var6[var5];
                    var5 = var5.id;
                    var9 = new Array(1);
                    var9[0] = var5;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 12;
                    var5 = var7[var5];
                    var8 = var6.bind(var3)(var5);
                    var7 = var8.sendStickers;
                    var6 = var12.id;
                    var5 = {};
                    var10 = {};
                    var14 = var12.getGuildId;
                    var14 = var14.bind(var12)();
                    var15 = var13 != var14;
                    var13 = undefined;
                    if(!var15) { _fun0002_ip = 896; continue _fun0002 }
 893:
                    var13 = var14;
 896:
                    var10['guild_id'] = var13;
                    var12 = var12.id;
                    var10['channel_id'] = var12;
                    var10['message_id'] = var11;
                    var5['messageReference'] = var10;
                    var4 = _closure1_slot10;
                    var4 = var4.CHANNEL_PROMPT;
                    var5['location'] = var4;
                    var21 = '';
                    var24 = var8;
                    var23 = var6;
                    var22 = var9;
                    var20 = var5;
                    var4 = var24[var7](var23, var22, var21, var20, var19);
 953:
                    return var3;
 956:
                    return var2;
 959:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot12 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildNSFWContentLevel;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EmojiIntention;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageSendLocation;
    var _closure1_slot10 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel_prompts/RandomEmojiUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function sendRandomStickerOrEmoji() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['sendRandomStickerOrEmoji'] = var2;
    return var1;
})();