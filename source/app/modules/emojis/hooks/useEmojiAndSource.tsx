// app/modules/emojis/hooks/useEmojiAndSource.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ExpressionSourceGuildRecord;
    var _closure1_slot7 = var7;
    var7 = var4.EmojiSourceDataTypes;
    var _closure1_slot8 = var7;
    var4 = var4.getEmojiSourceData;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot10 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/emojis/hooks/useEmojiAndSource.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var13 = var2.emojiId;
            var _closure2_slot0 = var13;
            var10 = var2.refreshPositionKey;
            var _closure2_slot1 = var10;
            var17 = undefined;
            var _closure2_slot2 = var17;
            var _closure2_slot3 = var17;
            var _closure2_slot4 = var17;
            var _closure2_slot5 = var17;
            var _closure2_slot6 = var17;
            var _closure2_slot7 = var17;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 8;
            var2 = var4[var2];
            var5 = var3.bind(var17)(var2);
            var4 = var5.useStateFromStoresObject;
            var2 = _closure1_slot6;
            var3 = new Array(2);
            var3[0] = var2;
            var2 = _closure1_slot5;
            var3[1] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure1_slot6;
                    var5 = _closure1_slot5;
                    var3 = _closure2_slot0;
                    var7 = null;
                    var2 = var7 != var3;
                    var6 = null;
                    if(!var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var2 = var4.getCustomEmojiById;
                    var6 = var2.bind(var4)(var3);
case 2:
                    var4 = var7 == var6;
                    var3 = undefined;
                    var2 = undefined;
                    if(var4) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = var6.type;
case 4:
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var1 = 7;
                    var1 = var8[var1];
                    var1 = var4.bind(var3)(var1);
                    var1 = var1.EmojiTypes;
                    var1 = var1.GUILD;
                    if(!(var2 !== var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var1 = {'emoji': null, 'joinedEmojiSourceGuildRecord': null};
                    _fun0002_ip = 8; continue _fun0002;
case 6:
                    var2 = {};
                    var2['emoji'] = var6;
                    var4 = var5.getGuild;
                    var7 = var7 == var6;
                    var3 = undefined;
                    if(var7) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var3 = var6.guildId;
case 9:
                    var3 = var4.bind(var5)(var3);
                    var2['joinedEmojiSourceGuildRecord'] = var3;
                    var1 = var2;
case 8:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3, var2);
            var5 = var2.joinedEmojiSourceGuildRecord;
            var3 = var2.emoji;
            var18 = null;
            var4 = var18 != var5;
            var2 = var18 != var5;
            if(!var2) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var8 = var5.features;
            var7 = var8.has;
            var6 = _closure1_slot10;
            var6 = var6.DISCOVERABLE;
            var2 = var7.bind(var8)(var6);
case 11:
            var11 = !var4;
            if(!var4) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var11 = var2;
case 13:
            if(!var11) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var11 = var18 != var13;
case 15:
            _closure2_slot2 = var11;
            var12 = _closure1_slot4;
            var2 = var12.useState;
            var2 = var2.bind(var12)(var11);
            var8 = _closure1_slot3;
            var16 = 2;
            var6 = var8.bind(var17)(var2, var16);
            var7 = 0;
            var2 = var6[var7];
            var14 = 1;
            var6 = var6[var14];
            _closure2_slot3 = var6;
            var6 = var12.useState;
            var6 = var6.bind(var12)(var18);
            var8 = var8.bind(var17)(var6, var16);
            var6 = var8[var7];
            var8 = var8[var14];
            _closure2_slot4 = var8;
            var8 = var18 != var5;
            var12 = var11;
            var15 = null;
            if(!var8) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var11 = _closure1_slot7;
            var8 = var11.createFromGuildRecord;
            var15 = var8.bind(var11)(var5);
case 17:
            var11 = _closure1_slot4;
            var8 = var11.useState;
            var8 = var8.bind(var11)(var15);
            var15 = _closure1_slot3;
            var9 = var15.bind(var17)(var8, var16);
            var8 = var9[var7];
            var9 = var9[var14];
            _closure2_slot5 = var9;
            var9 = var11.useState;
            var9 = var9.bind(var11)(var18);
            var9 = var15.bind(var17)(var9, var16);
            var7 = var9[var7];
            var9 = var9[var14];
            _closure2_slot6 = var9;
            var9 = var11.useRef;
            var9 = var9.bind(var11)(var10);
            _closure2_slot7 = var9;
            var10 = var11.useEffect;
            var9 = function() {
                var2 = _closure2_slot7;
                var1 = _closure2_slot1;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var9 = var10.bind(var11)(var9);
            var10 = var11.useEffect;
            var9 = new Array(2);
            var9[0] = var13;
            var9[1] = var12;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot7;
                    var1 = var1.current;
                    var5 = null;
                    if(!(var5 != var1)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var2 = _closure2_slot7;
                    var1 = var2.current;
                    var1 = var1.bind(var2)();
case 19:
                    var2 = function() {
                        var4 = _closure1_slot2;
                        var3 = undefined;
                        var2 = function* () {
                            var1 = function* anon_0_() {
                                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                                    var2 = _closure2_slot0;
                                    var6 = null;
                                    var2 = var6 != var2;
                                    var3 = null;
                                    if(!var2) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                                    var7 = _closure1_slot9;
                                    var5 = _closure2_slot0;
                                    var2 = undefined;
                                    var2 = var7.bind(var2)(var5);
                                    SaveGenerator(address=50);
case 25:
                                    return var2;
case 26:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                    var3 = var2;
                                    if(var5) { _fun0004_ip = 27; continue _fun0004 }
case 23:
                                    if(!(var6 != var3)) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                                    var8 = _closure2_slot4;
                                    var5 = var3.type;
                                    var7 = undefined;
                                    var5 = var8.bind(var7)(var5);
                                    var8 = var3.type;
                                    var9 = _closure1_slot8;
                                    var9 = var9.APPLICATION;
                                    if(!(var9 !== var8)) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                                    var5 = _closure1_slot8;
                                    var5 = var5.GUILD;
                                    if(!(var5 === var8)) { _fun0004_ip = 28; continue _fun0004 }
case 32:
                                    var8 = _closure2_slot5;
                                    var5 = var3.guild;
                                    var5 = var8.bind(var7)(var5);
                                    _fun0004_ip = 28; continue _fun0004;
case 30:
                                    var5 = _closure2_slot6;
                                    var3 = var3.application;
                                    var3 = var5.bind(var7)(var3);
case 28:
                                    var7 = _closure2_slot3;
                                    var3 = undefined;
                                    var5 = false;
                                    var5 = var7.bind(var3)(var5);
                                    var5 = _closure2_slot7;
                                    var5 = var5.current;
                                    if(!(var6 != var5)) { _fun0004_ip = 33; continue _fun0004 }
case 13:
                                    var5 = _closure2_slot7;
                                    var4 = var5.current;
                                    var4 = var4.bind(var5)();
case 33:
                                    return var3;
case 27:
                                    return var2;
case 21:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var2 = var4.bind(var3)(var2);
                        var _closure4_slot0 = var2;
                        var1 = function() {
                            var1 = undefined;
                            var4 = _closure4_slot0;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        return var1;
                    };
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    var4 = _closure2_slot2;
                    if(var4) { _fun0003_ip = 34; continue _fun0003 }
case 35:
                    var4 = _closure2_slot7;
                    var4 = var4.current;
                    if(!(var5 != var4)) { _fun0003_ip = 36; continue _fun0003 }
case 29:
                    var4 = _closure2_slot7;
                    var3 = var4.current;
                    var3 = var3.bind(var4)();
                    _fun0003_ip = 36; continue _fun0003;
case 34:
                    var2 = var2.bind(var1)();
case 36:
                    return var1;
                }
            };
            var1 = var10.bind(var11)(var1, var9);
            var1 = {};
            var1['expressionSourceGuild'] = var8;
            var1['expressionSourceApplication'] = var7;
            var1['sourceType'] = var6;
            var1['joinedEmojiSourceGuildRecord'] = var5;
            var1['hasJoinedEmojiSourceGuild'] = var4;
            var1['emoji'] = var3;
            var1['isFetching'] = var2;
            return var1;
        }
    };
    var3['useEmojiAndSource'] = var2;
    return var1;
})();