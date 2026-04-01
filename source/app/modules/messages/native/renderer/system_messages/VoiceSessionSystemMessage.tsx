// app/modules/messages/native/renderer/system_messages/VoiceSessionSystemMessage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var4 = function getUsernameOnClick(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var4 = arg3;
            var6 = arg4;
            var5 = null;
            if(!(var5 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(!(var5 == var3)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var1 = undefined;
            return var1;
case 4:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 3;
            var7 = var7[var1];
            var1 = undefined;
            var9 = var8.bind(var1)(var7);
            var8 = var9.isNativeMessageEligibleForEnhancedRoleColors;
            var7 = var4.guildId;
            var1 = var2.author;
            var1 = var1.id;
            var7 = var8.bind(var9)(var7, var1, var6);
            var1 = {};
            var8 = 'bindUserMenu';
            var1['action'] = var8;
            var3 = var3.id;
            var1['userId'] = var3;
            var3 = var4.colorString;
            var1['colorString'] = var3;
            var8 = 'username';
            var3 = null;
            if(!(var8 === var6)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var3 = var4.colorString;
case 5:
            var1['linkColor'] = var3;
            var3 = var4.colorString;
            var1['roleColor'] = var3;
            var3 = null;
            if(!var7) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var3 = var4.colorStrings;
case 7:
            var1['roleColors'] = var3;
            var3 = 'dot';
            var3 = var3 === var6;
            if(!var3) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var4 = var4.colorString;
            var3 = var5 != var4;
case 9:
            var1['shouldShowRoleDot'] = var3;
            var2 = var2.channel_id;
            var1['messageChannelId'] = var2;
            var2 = true;
            var1['medium'] = var2;
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var4 = function getMessageContent(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var11 = arg1;
            var10 = arg2;
            var4 = _closure1_slot4;
            var3 = var4.getChannel;
            var2 = var11.channel_id;
            var2 = var3.bind(var4)(var2);
            var _closure2_slot0 = var2;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 5;
            var2 = var4[var2];
            var9 = undefined;
            var2 = var3.bind(var9)(var2);
            var5 = var2.bind(var9)(var11);
            var3 = _closure1_slot0;
            var2 = 6;
            var2 = var4[var2];
            var3 = var3.bind(var9)(var2);
            var2 = var3.getMessageAuthorWithProcessedColor;
            var8 = var2.bind(var3)(var11);
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var4 = var1.call;
                    var1 = null;
                    var6 = var1 == var4;
                    var3 = undefined;
                    var5 = undefined;
                    if(var6) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var7 = var4.participants;
                    var6 = var7.reduce;
                    var4 = function(arg1, arg2) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var5 = arg1;
                            var3 = _closure1_slot5;
                            var2 = var3.getUser;
                            var1 = arg2;
                            var3 = var2.bind(var3)(var1);
                            var2 = null;
                            var1 = var5;
                            if(!(var2 != var3)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                            var4 = var3.id;
                            var2 = _closure3_slot0;
                            var2 = var2.author;
                            var2 = var2.id;
                            var1 = var5;
                            if(!(var4 !== var2)) { _fun0004_ip = 13; continue _fun0004 }
case 15:
                            var2 = new Array(1);
                            var6 = 0;
                            var8 = var2;
                            var7 = var5;
                            var4 = arraySpread(var8, var7, var6);
                            var2[3] = var3;
                            var3 = 1;
                            var3 = var4 + var3;
                            var1 = var2;
case 13:
                            return var1;
                        }
                    };
                    var2 = new Array(0);
                    var5 = var6.bind(var7)(var4, var2);
case 11:
                    if(!(var1 == var5)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var5 = new Array(0);
case 16:
                    var4 = _closure1_slot3;
                    var2 = var4.getUserAffinitiesMap;
                    var4 = var2.bind(var4)();
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 4;
                    var1 = var6[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.maybeSortByProbability;
                    var1 = 'VoiceSession - participants';
                    var1 = var2.bind(var3)(var5, var4, var1);
                    return var1;
                }
            };
            var3 = var2.bind(var9)(var11);
            var2 = var3.map;
            var1 = function(arg1) {
                var5 = arg1;
                var1 = {};
                var1['user'] = var5;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.getUserAuthorWithProcessedColor;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var5, var2);
                var1['messageAuthor'] = var2;
                return var1;
            };
            var7 = var2.bind(var3)(var1);
            var13 = null;
            if(!(var13 != var5)) { _fun0002_ip = 18; continue _fun0002 }
case 6:
            var2 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 7;
            var3 = var12[var1];
            var3 = var2.bind(var9)(var3);
            var4 = var3.intl;
            var3 = var4.formatToParts;
            var1 = var12[var1];
            var1 = var2.bind(var9)(var1);
            var1 = var1.t;
            var2 = var1.atbXuX;
            var1 = {};
            var14 = var7.length;
            var12 = 1;
            var14 = var14 + var12;
            var1['userCount'] = var14;
            var14 = var8.nick;
            var1['username'] = var14;
            var15 = _closure1_slot6;
            var22 = var11.author;
            var23 = undefined;
            var21 = var11;
            var20 = var8;
            var19 = var10;
            var14 = var23[var15](var22, var21, var20, var19, var18);
            var1['usernameOnClick'] = var14;
            var14 = 0;
            var16 = var7[var14];
            var17 = var13 == var16;
            var15 = undefined;
            if(var17) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var16 = var16.messageAuthor;
            var15 = var16.nick;
case 19:
            var1['username2'] = var15;
            var16 = _closure1_slot6;
            var17 = var7[var14];
            var18 = var13 == var17;
            var15 = undefined;
            if(var18) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var15 = var17.user;
case 21:
            var17 = var7[var14];
            var18 = var13 == var17;
            var14 = undefined;
            if(var18) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var14 = var17.messageAuthor;
case 23:
            var23 = undefined;
            var22 = var15;
            var21 = var11;
            var20 = var14;
            var19 = var10;
            var14 = var23[var16](var22, var21, var20, var19, var18);
            var1['username2OnClick'] = var14;
            var15 = var7[var12];
            var16 = var13 == var15;
            var14 = undefined;
            if(var16) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var15 = var15.messageAuthor;
            var14 = var15.nick;
case 25:
            var1['username3'] = var14;
            var15 = _closure1_slot6;
            var16 = var7[var12];
            var17 = var13 == var16;
            var14 = undefined;
            if(var17) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var14 = var16.user;
case 27:
            var16 = var7[var12];
            var17 = var13 == var16;
            var13 = undefined;
            if(var17) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var13 = var16.messageAuthor;
case 29:
            var23 = undefined;
            var22 = var14;
            var21 = var11;
            var20 = var13;
            var19 = var10;
            var13 = var23[var15](var22, var21, var20, var19, var18);
            var1['username3OnClick'] = var13;
            var7 = var7.length;
            var7 = var7 - var12;
            var1['otherCount'] = var7;
            var1['duration'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            _fun0002_ip = 31; continue _fun0002;
case 18:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 7;
            var4 = var7[var2];
            var4 = var3.bind(var9)(var4);
            var5 = var4.intl;
            var4 = var5.formatToParts;
            var2 = var7[var2];
            var2 = var3.bind(var9)(var2);
            var2 = var2.t;
            var3 = var2.HzBfIN;
            var2 = {};
            var7 = var8.nick;
            var2['username'] = var7;
            var7 = _closure1_slot6;
            var22 = var11.author;
            var23 = undefined;
            var21 = var11;
            var20 = var8;
            var19 = var10;
            var6 = var23[var7](var22, var21, var20, var19, var18);
            var2['usernameOnClick'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 31:
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/VoiceSessionSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createVoiceSessionSystemMessage(arg1) {
        var4 = arg1;
        var7 = var4.message;
        var6 = var4.roleStyle;
        var1 = {};
        var5 = _closure1_slot7;
        var3 = undefined;
        var5 = var5.bind(var3)(var7, var6);
        var1['content'] = var5;
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var2 = 8;
        var2 = var6[var2];
        var2 = var5.bind(var3)(var2);
        var8 = var2.bind(var3)(var4);
        var9 = var1;
        var2 = copyDataProperties(var9, var8);
        return var1;
    };
    var3['createVoiceSessionSystemMessage'] = var2;
    return var1;
})();