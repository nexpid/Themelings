// app/modules/messages/native/renderer/system_messages/GuildStreamSystemMessage.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var8 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StreamTypes;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/GuildStreamSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function GuildStreamSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.row;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 9;
            var2 = var6[var2];
            var9 = var5.bind(var4)(var2);
            var8 = var9.useStateFromStores;
            var2 = _closure1_slot4;
            var6 = new Array(1);
            var6[0] = var2;
            var5 = function() {
                var1 = _closure1_slot4;
                var1 = var1.roleStyle;
                return var1;
            };
            var2 = new Array(0);
            var6 = var8.bind(var9)(var6, var5, var2);
            var _closure2_slot0 = var6;
            var17 = var7.message;
            var _closure2_slot1 = var17;
            var11 = var17.author;
            var _closure2_slot2 = var11;
            var2 = var17.messageReference;
            var5 = null;
            if(!(var5 == var2)) { _fun0001_ip = 136; continue _fun0001 }
 134:
            var2 = {};
 136:
            var13 = var2.channel_id;
            _closure2_slot3 = var13;
            var12 = var2.guild_id;
            _closure2_slot4 = var12;
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var9 = 4;
            var9 = var8[var9];
            var9 = var2.bind(var4)(var9);
            var14 = var9.bind(var4)(var17);
            _closure2_slot5 = var14;
            var5 = var5 != var14;
            _closure2_slot6 = var5;
            var10 = _closure1_slot0;
            var9 = 5;
            var9 = var8[var9];
            var10 = var10.bind(var4)(var9);
            var9 = var10.useMessageAuthorWithProcessedColor;
            var9 = var9.bind(var10)(var17);
            var16 = var9.nick;
            _closure2_slot7 = var16;
            var18 = var9.colorString;
            _closure2_slot8 = var18;
            var10 = _closure1_slot3;
            var15 = var10.useMemo;
            var9 = new Array(5);
            var9[0] = var18;
            var17 = var17.channel_id;
            var9[1] = var17;
            var9[2] = var16;
            var9[3] = var6;
            var6 = var11.id;
            var9[4] = var6;
            var6 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = {};
                    var2 = _closure2_slot7;
                    var1['username'] = var2;
                    var2 = {};
                    var4 = 'bindUserMenu';
                    var2['action'] = var4;
                    var4 = _closure2_slot2;
                    var4 = var4.id;
                    var2['userId'] = var4;
                    var4 = _closure2_slot8;
                    var2['colorString'] = var4;
                    var7 = _closure2_slot0;
                    var6 = null;
                    var5 = 'username';
                    var4 = null;
                    if(!(var5 === var7)) { _fun0002_ip = 67; continue _fun0002 }
 63:
                    var4 = _closure2_slot8;
 67:
                    var2['linkColor'] = var4;
                    var4 = _closure2_slot8;
                    var2['roleColor'] = var4;
                    var5 = _closure2_slot0;
                    var4 = 'dot';
                    var4 = var4 === var5;
                    if(!var4) { _fun0002_ip = 104; continue _fun0002 }
 96:
                    var5 = _closure2_slot8;
                    var4 = var6 != var5;
 104:
                    var2['shouldShowRoleDot'] = var4;
                    var3 = _closure2_slot1;
                    var3 = var3.channel_id;
                    var2['messageChannelId'] = var3;
                    var3 = true;
                    var2['medium'] = var3;
                    var1['usernameOnClick'] = var2;
                    return var1;
                }
            };
            var15 = var15.bind(var10)(var6, var9);
            _closure2_slot9 = var15;
            var9 = var10.useMemo;
            var6 = new Array(6);
            var6[0] = var15;
            var6[1] = var5;
            var6[2] = var14;
            var6[3] = var13;
            var6[4] = var12;
            var11 = var11.id;
            var6[5] = var11;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot6;
                    if(var2) { _fun0003_ip = 165; continue _fun0003 }
 16:
                    var8 = {};
                    var2 = 'bindJoinStream';
                    var8['action'] = var2;
                    var2 = {};
                    var3 = _closure1_slot5;
                    var3 = var3.GUILD;
                    var2['streamType'] = var3;
                    var3 = _closure2_slot3;
                    var2['channelId'] = var3;
                    var3 = _closure2_slot2;
                    var3 = var3.id;
                    var2['ownerId'] = var3;
                    var3 = _closure2_slot4;
                    var2['guildId'] = var3;
                    var8['stream'] = var2;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 7;
                    var4 = var9[var2];
                    var3 = undefined;
                    var4 = var7.bind(var3)(var4);
                    var6 = var4.intl;
                    var4 = var6.formatToParts;
                    var2 = var9[var2];
                    var2 = var7.bind(var3)(var2);
                    var2 = var2.t;
                    var3 = var2.dMmbGh;
                    var2 = {};
                    var10 = _closure2_slot9;
                    var11 = var2;
                    var7 = copyDataProperties(var11, var10);
                    var7 = 'onJoinStream';
                    var2[var7] = var8;
                    var2 = var4.bind(var6)(var3, var2);
                    return var2;
 165:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 7;
                    var3 = var7[var1];
                    var2 = undefined;
                    var3 = var6.bind(var2)(var3);
                    var4 = var3.intl;
                    var3 = var4.formatToParts;
                    var1 = var7[var1];
                    var1 = var6.bind(var2)(var1);
                    var1 = var1.t;
                    var2 = var1.FP7rUF;
                    var1 = {};
                    var10 = _closure2_slot9;
                    var11 = var1;
                    var6 = copyDataProperties(var11, var10);
                    var6 = _closure2_slot5;
                    var5 = 'duration';
                    var1[var5] = var6;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var6 = var9.bind(var10)(var3, var6);
            var3 = _closure1_slot6;
            var1 = 10;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['row'] = var7;
            var1['content'] = var6;
            var1['ended'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function createGuildStreamSystemMessage(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var9 = var4.message;
            var15 = var4.roleStyle;
            var7 = var9.author;
            var1 = var9.messageReference;
            var14 = null;
            if(!(var14 == var1)) { _fun0004_ip = 34; continue _fun0004 }
 32:
            var1 = {};
 34:
            var8 = var1.channel_id;
            var6 = var1.guild_id;
            var5 = _closure1_slot1;
            var17 = _closure1_slot2;
            var1 = 4;
            var1 = var17[var1];
            var3 = undefined;
            var1 = var5.bind(var3)(var1);
            var11 = var1.bind(var3)(var9);
            var5 = var14 != var11;
            var12 = _closure1_slot0;
            var1 = 5;
            var1 = var17[var1];
            var10 = var12.bind(var3)(var1);
            var1 = var10.getMessageAuthorWithProcessedColor;
            var10 = var1.bind(var10)(var9);
            var1 = var10.nick;
            var13 = var10.colorString;
            var16 = var10.colorStrings;
            var18 = var10.guildId;
            var10 = 6;
            var10 = var17[var10];
            var17 = var12.bind(var3)(var10);
            var12 = var17.isNativeMessageEligibleForEnhancedRoleColors;
            var10 = var7.id;
            var17 = var12.bind(var17)(var18, var10, var15);
            var10 = {};
            var10['username'] = var1;
            var1 = {};
            var12 = 'bindUserMenu';
            var1['action'] = var12;
            var12 = var7.id;
            var1['userId'] = var12;
            var1['colorString'] = var13;
            var18 = 'username';
            var12 = null;
            if(!(var18 === var15)) { _fun0004_ip = 203; continue _fun0004 }
 200:
            var12 = var13;
 203:
            var1['linkColor'] = var12;
            var1['roleColor'] = var13;
            var12 = null;
            if(!var17) { _fun0004_ip = 221; continue _fun0004 }
 218:
            var12 = var16;
 221:
            var1['roleColors'] = var12;
            var12 = 'dot';
            var12 = var12 === var15;
            if(!var12) { _fun0004_ip = 241; continue _fun0004 }
 237:
            var12 = var14 != var13;
 241:
            var1['shouldShowRoleDot'] = var12;
            var9 = var9.channel_id;
            var1['messageChannelId'] = var9;
            var9 = true;
            var1['medium'] = var9;
            var10['usernameOnClick'] = var1;
            var13 = {};
            var1 = 'bindJoinStream';
            var13['action'] = var1;
            var1 = {};
            var9 = _closure1_slot5;
            var9 = var9.GUILD;
            var1['streamType'] = var9;
            var1['channelId'] = var8;
            var7 = var7.id;
            var1['ownerId'] = var7;
            var1['guildId'] = var6;
            var13['stream'] = var1;
            var1 = {};
            var1['ended'] = var5;
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 7;
            var8 = var12[var6];
            var8 = var7.bind(var3)(var8);
            var9 = var8.intl;
            var8 = var9.formatToParts;
            var6 = var12[var6];
            var6 = var7.bind(var3)(var6);
            var6 = var6.t;
            if(var5) { _fun0004_ip = 412; continue _fun0004 }
 375:
            var7 = var6.dMmbGh;
            var5 = {};
            var21 = var5;
            var20 = var10;
            var12 = copyDataProperties(var21, var20);
            var12 = 'onJoinStream';
            var5[var12] = var13;
            var5 = var8.bind(var9)(var7, var5);
            _fun0004_ip = 445; continue _fun0004;
 412:
            var7 = var6.FP7rUF;
            var6 = {};
            var21 = var6;
            var20 = var10;
            var10 = copyDataProperties(var21, var20);
            var10 = 'duration';
            var6[var10] = var11;
            var5 = var8.bind(var9)(var7, var6);
 445:
            var1['content'] = var5;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 8;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            var20 = var2.bind(var3)(var4);
            var21 = var1;
            var2 = copyDataProperties(var21, var20);
            return var1;
        }
    };
    var3['createGuildStreamSystemMessage'] = var2;
    return var1;
})();