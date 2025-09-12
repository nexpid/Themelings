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
 0:
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
 0:
                    var4 = _closure1_slot6;
                    var5 = _closure1_slot5;
                    var3 = _closure2_slot0;
                    var7 = null;
                    var2 = var7 != var3;
                    var6 = null;
                    if(!var2) { _fun0002_ip = 40; continue _fun0002 }
 29:
                    var2 = var4.getCustomEmojiById;
                    var6 = var2.bind(var4)(var3);
 40:
                    var4 = var7 == var6;
                    var3 = undefined;
                    var2 = undefined;
                    if(var4) { _fun0002_ip = 56; continue _fun0002 }
 51:
                    var2 = var6.type;
 56:
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var1 = 7;
                    var1 = var8[var1];
                    var1 = var4.bind(var3)(var1);
                    var1 = var1.EmojiTypes;
                    var1 = var1.GUILD;
                    if(!(var2 !== var1)) { _fun0002_ip = 108; continue _fun0002 }
 92:
                    var1 = {'emoji': null, 'joinedEmojiSourceGuildRecord': null};
                    _fun0002_ip = 146; continue _fun0002;
 108:
                    var2 = {};
                    var2['emoji'] = var6;
                    var4 = var5.getGuild;
                    var7 = var7 == var6;
                    var3 = undefined;
                    if(var7) { _fun0002_ip = 133; continue _fun0002 }
 128:
                    var3 = var6.guildId;
 133:
                    var3 = var4.bind(var5)(var3);
                    var2['joinedEmojiSourceGuildRecord'] = var3;
                    var1 = var2;
 146:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3, var2);
            var5 = var2.joinedEmojiSourceGuildRecord;
            var3 = var2.emoji;
            var18 = null;
            var4 = var18 != var5;
            var2 = var18 != var5;
            if(!var2) { _fun0001_ip = 165; continue _fun0001 }
 139:
            var8 = var5.features;
            var7 = var8.has;
            var6 = _closure1_slot10;
            var6 = var6.DISCOVERABLE;
            var2 = var7.bind(var8)(var6);
 165:
            var11 = !var4;
            if(!var4) { _fun0001_ip = 174; continue _fun0001 }
 171:
            var11 = var2;
 174:
            if(!var11) { _fun0001_ip = 181; continue _fun0001 }
 177:
            var11 = var18 != var13;
 181:
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
            if(!var8) { _fun0001_ip = 284; continue _fun0001 }
 269:
            var11 = _closure1_slot7;
            var8 = var11.createFromGuildRecord;
            var15 = var8.bind(var11)(var5);
 284:
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
 0:
                    var1 = _closure2_slot7;
                    var1 = var1.current;
                    var5 = null;
                    if(!(var5 != var1)) { _fun0003_ip = 31; continue _fun0003 }
 18:
                    var2 = _closure2_slot7;
                    var1 = var2.current;
                    var1 = var1.bind(var2)();
 31:
                    var2 = function() {
                        var4 = _closure1_slot2;
                        var3 = undefined;
                        var2 = function* () {
                            var1 = function* anon_0_() {
                                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0004_ip = 193; continue _fun0004 }
 10:
                                    var2 = _closure2_slot0;
                                    var6 = null;
                                    var2 = var6 != var2;
                                    var3 = null;
                                    if(!var2) { _fun0004_ip = 62; continue _fun0004 }
 28:
                                    var7 = _closure1_slot9;
                                    var5 = _closure2_slot0;
                                    var2 = undefined;
                                    var2 = var7.bind(var2)(var5);
                                    SaveGenerator(address=50);
 48:
                                    return var2;
 50:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                    var3 = var2;
                                    if(var5) { _fun0004_ip = 190; continue _fun0004 }
 62:
                                    if(!(var6 != var3)) { _fun0004_ip = 148; continue _fun0004 }
 66:
                                    var8 = _closure2_slot4;
                                    var5 = var3.type;
                                    var7 = undefined;
                                    var5 = var8.bind(var7)(var5);
                                    var8 = var3.type;
                                    var9 = _closure1_slot8;
                                    var9 = var9.APPLICATION;
                                    if(!(var9 !== var8)) { _fun0004_ip = 134; continue _fun0004 }
 104:
                                    var5 = _closure1_slot8;
                                    var5 = var5.GUILD;
                                    if(!(var5 === var8)) { _fun0004_ip = 148; continue _fun0004 }
 118:
                                    var8 = _closure2_slot5;
                                    var5 = var3.guild;
                                    var5 = var8.bind(var7)(var5);
                                    _fun0004_ip = 148; continue _fun0004;
 134:
                                    var5 = _closure2_slot6;
                                    var3 = var3.application;
                                    var3 = var5.bind(var7)(var3);
 148:
                                    var7 = _closure2_slot3;
                                    var3 = undefined;
                                    var5 = false;
                                    var5 = var7.bind(var3)(var5);
                                    var5 = _closure2_slot7;
                                    var5 = var5.current;
                                    if(!(var6 != var5)) { _fun0004_ip = 187; continue _fun0004 }
 174:
                                    var5 = _closure2_slot7;
                                    var4 = var5.current;
                                    var4 = var4.bind(var5)();
 187:
                                    return var3;
 190:
                                    return var2;
 193:
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
                    if(var4) { _fun0003_ip = 81; continue _fun0003 }
 53:
                    var4 = _closure2_slot7;
                    var4 = var4.current;
                    if(!(var5 != var4)) { _fun0003_ip = 85; continue _fun0003 }
 66:
                    var4 = _closure2_slot7;
                    var3 = var4.current;
                    var3 = var3.bind(var4)();
                    _fun0003_ip = 85; continue _fun0003;
 81:
                    var2 = var2.bind(var1)();
 85:
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