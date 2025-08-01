// app/modules/messages/native/renderer/system_messages/UserJoinSystemMessage.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
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
    var4 = var4.SystemChannelFlags;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/UserJoinSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function UserJoinSystemMessage(arg1) {
        var1 = arg1;
        var7 = var1.row;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var2 = 14;
        var2 = var9[var2];
        var4 = undefined;
        var11 = var8.bind(var4)(var2);
        var10 = var11.useStateFromStores;
        var2 = _closure1_slot4;
        var6 = new Array(1);
        var6[0] = var2;
        var5 = function() {
            var1 = _closure1_slot4;
            var1 = var1.roleStyle;
            return var1;
        };
        var2 = new Array(0);
        var13 = var10.bind(var11)(var6, var5, var2);
        var _closure2_slot0 = var13;
        var15 = var7.message;
        var _closure2_slot1 = var15;
        var2 = 6;
        var2 = var9[var2];
        var5 = var8.bind(var4)(var2);
        var2 = var5.useMessageAuthorWithProcessedColor;
        var2 = var2.bind(var5)(var15);
        var14 = var2.nick;
        var _closure2_slot2 = var14;
        var16 = var2.colorString;
        var _closure2_slot3 = var16;
        var2 = _closure1_slot1;
        var5 = 7;
        var5 = var9[var5];
        var10 = var2.bind(var4)(var5);
        var6 = var10.getSystemMessageUserJoinMobile;
        var5 = var15.id;
        var12 = var6.bind(var10)(var5);
        var _closure2_slot4 = var12;
        var5 = 8;
        var5 = var9[var5];
        var5 = var2.bind(var4)(var5);
        var10 = var5.bind(var4)(var15);
        var5 = 9;
        var5 = var9[var5];
        var6 = var2.bind(var4)(var5);
        var5 = {};
        var11 = 10;
        var11 = var9[var11];
        var18 = var8.bind(var4)(var11);
        var17 = var18.pickWelcomeSticker;
        var11 = var15.id;
        var11 = var17.bind(var18)(var11);
        var5['sticker'] = var11;
        var5['isStickerReplyEnabled'] = var10;
        var5 = var6.bind(var4)(var5);
        var11 = _closure1_slot3;
        var10 = var11.useMemo;
        var6 = new Array(6);
        var6[0] = var16;
        var16 = var15.author;
        var16 = var16.id;
        var6[1] = var16;
        var15 = var15.channel_id;
        var6[2] = var15;
        var6[3] = var14;
        var6[4] = var13;
        var6[5] = var12;
        var3 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var4 = var1.intl;
                var3 = var4.formatToParts;
                var2 = _closure2_slot4;
                var1 = {};
                var5 = _closure2_slot2;
                var1['username'] = var5;
                var5 = {};
                var7 = 'bindUserMenu';
                var5['action'] = var7;
                var7 = _closure2_slot1;
                var7 = var7.author;
                var7 = var7.id;
                var5['userId'] = var7;
                var9 = _closure2_slot0;
                var8 = 'username';
                var7 = null;
                if(!(var8 === var9)) { _fun0001_ip = 102; continue _fun0001 }
 98:
                var7 = _closure2_slot3;
 102:
                var5['linkColor'] = var7;
                var6 = _closure2_slot1;
                var6 = var6.channel_id;
                var5['messageChannelId'] = var6;
                var6 = true;
                var5['medium'] = var6;
                var1['usernameOnClick'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var6 = var10.bind(var11)(var3, var6);
        var3 = _closure1_slot8;
        var1 = 15;
        var1 = var9[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var1['row'] = var7;
        var1['content'] = var6;
        var1['sticker'] = var5;
        var5 = 12;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var4)(var5);
        var5 = var5.t;
        var5 = var5.7Tj6HR;
        var5 = var6.bind(var7)(var5);
        var1['stickerLabel'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var2 = function createUserJoinSystemMessage(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var12 = var4.message;
            var16 = var4.roleStyle;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 6;
            var1 = var6[var1];
            var3 = undefined;
            var5 = var5.bind(var3)(var1);
            var1 = var5.getMessageAuthorWithProcessedColor;
            var1 = var1.bind(var5)(var12);
            var11 = var1.nick;
            var15 = var1.colorString;
            var17 = var1.colorStrings;
            var13 = var1.guildId;
            var7 = _closure1_slot5;
            var5 = var7.getChannel;
            var1 = var12.getChannelId;
            var1 = var1.bind(var12)();
            var9 = var5.bind(var7)(var1);
            var5 = _closure1_slot1;
            var1 = 7;
            var1 = var6[var1];
            var6 = var5.bind(var3)(var1);
            var5 = var6.getSystemMessageUserJoinMobile;
            var1 = var12.id;
            var10 = var5.bind(var6)(var1);
            var14 = null;
            var1 = var14 == var9;
            var8 = undefined;
            if(var1) { _fun0002_ip = 150; continue _fun0002 }
 140:
            var1 = var9.getGuildId;
            var8 = var1.bind(var9)();
 150:
            var1 = var14 != var8;
            var6 = undefined;
            if(!var1) { _fun0002_ip = 327; continue _fun0002 }
 162:
            var1 = var14 != var9;
            var6 = undefined;
            if(!var1) { _fun0002_ip = 327; continue _fun0002 }
 174:
            var5 = _closure1_slot6;
            var1 = var5.getGuild;
            var1 = var1.bind(var5)(var8);
            var7 = var14 != var1;
            if(!var7) { _fun0002_ip = 218; continue _fun0002 }
 195:
            var5 = var1.systemChannelFlags;
            var1 = _closure1_slot7;
            var1 = var1.SUPPRESS_JOIN_NOTIFICATION_REPLIES;
            var1 = var5 & var1;
            var7 = !var1;
 218:
            var5 = _closure1_slot0;
            var18 = _closure1_slot2;
            var1 = 8;
            var1 = var18[var1];
            var5 = var5.bind(var3)(var1);
            var1 = var5.computeIsStickerReplyEnabled;
            var24 = var5;
            var23 = var8;
            var22 = var9;
            var21 = var12;
            var20 = var7;
            var1 = var24[var1](var23, var22, var21, var20, var19);
            var6 = undefined;
            if(!var1) { _fun0002_ip = 327; continue _fun0002 }
 268:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 9;
            var1 = var9[var1];
            var7 = var8.bind(var3)(var1);
            var5 = var7.transformSticker;
            var1 = 10;
            var1 = var9[var1];
            var9 = var8.bind(var3)(var1);
            var8 = var9.pickWelcomeSticker;
            var1 = var12.id;
            var1 = var8.bind(var9)(var1);
            var6 = var5.bind(var7)(var1);
 327:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 11;
            var1 = var7[var1];
            var9 = var8.bind(var3)(var1);
            var5 = var9.isNativeMessageEligibleForEnhancedRoleColors;
            var1 = var12.author;
            var1 = var1.id;
            var18 = var5.bind(var9)(var13, var1, var16);
            var1 = {};
            var5 = 12;
            var7 = var7[var5];
            var7 = var8.bind(var3)(var7);
            var9 = var7.intl;
            var8 = var9.formatToParts;
            var7 = {};
            var7['username'] = var11;
            var11 = {};
            var13 = 'bindUserMenu';
            var11['action'] = var13;
            var13 = var12.author;
            var13 = var13.id;
            var11['userId'] = var13;
            var19 = 'username';
            var13 = null;
            if(!(var19 === var16)) { _fun0002_ip = 442; continue _fun0002 }
 439:
            var13 = var15;
 442:
            var11['linkColor'] = var13;
            var13 = null;
            if(!var18) { _fun0002_ip = 455; continue _fun0002 }
 452:
            var13 = var17;
 455:
            var11['roleColors'] = var13;
            var13 = 'dot';
            var13 = var13 === var16;
            if(!var13) { _fun0002_ip = 475; continue _fun0002 }
 471:
            var13 = var14 != var15;
 475:
            var11['shouldShowRoleDot'] = var13;
            var12 = var12.channel_id;
            var11['messageChannelId'] = var12;
            var12 = true;
            var11['medium'] = var12;
            var7['usernameOnClick'] = var11;
            var7 = var8.bind(var9)(var10, var7);
            var1['content'] = var7;
            var1['sticker'] = var6;
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var7 = var6[var5];
            var7 = var9.bind(var3)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var5 = var6[var5];
            var5 = var9.bind(var3)(var5);
            var5 = var5.t;
            var5 = var5.7Tj6HR;
            var5 = var7.bind(var8)(var5);
            var1['stickerLabel'] = var5;
            var5 = _closure1_slot1;
            var2 = 13;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            var22 = var2.bind(var3)(var4);
            var23 = var1;
            var2 = copyDataProperties(var23, var22);
            return var1;
        }
    };
    var3['createUserJoinSystemMessage'] = var2;
    return var1;
})();