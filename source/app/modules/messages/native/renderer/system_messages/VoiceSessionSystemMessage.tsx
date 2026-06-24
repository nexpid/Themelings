// app/modules/messages/native/renderer/system_messages/VoiceSessionSystemMessage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function getMessageContent(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var11 = arg1;
            var9 = arg2;
            var4 = _closure1_slot3;
            var3 = var4.getChannel;
            var2 = var11.channel_id;
            var2 = var3.bind(var4)(var2);
            var _closure2_slot0 = var2;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var12 = 1;
            var2 = var4[var12];
            var8 = undefined;
            var2 = var3.bind(var8)(var2);
            var5 = var2.bind(var8)(var11);
            var3 = _closure1_slot0;
            var2 = 2;
            var2 = var4[var2];
            var7 = var3.bind(var8)(var2);
            var2 = var7.getMessageAuthorWithProcessedColor;
            var10 = var2.bind(var7)(var11);
            var2 = 3;
            var2 = var4[var2];
            var3 = var3.bind(var8)(var2);
            var2 = var3.getSortedVoiceSessionParticipants;
            var3 = var2.bind(var3)(var11);
            var2 = var3.map;
            var1 = function(arg1) {
                var5 = arg1;
                var1 = {};
                var1['user'] = var5;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 2;
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
            var14 = null;
            if(!(var14 != var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 4;
            var3 = var13[var1];
            var3 = var2.bind(var8)(var3);
            var4 = var3.intl;
            var3 = var4.formatToParts;
            var1 = var13[var1];
            var1 = var2.bind(var8)(var1);
            var1 = var1.t;
            var2 = var1.atbXuX;
            var1 = {};
            var15 = var7.length;
            var15 = var15 + var12;
            var1['userCount'] = var15;
            var15 = var10.nick;
            var1['username'] = var15;
            var15 = _closure1_slot1;
            var16 = 5;
            var13 = var13[var16];
            var15 = var15.bind(var8)(var13);
            var13 = {};
            var13['message'] = var11;
            var13['author'] = var10;
            var13['roleStyle'] = var9;
            var13 = var15.bind(var8)(var13);
            var1['usernameOnClick'] = var13;
            var18 = 0;
            var15 = var7[var18];
            var17 = var14 == var15;
            var13 = undefined;
            if(var17) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var15 = var15.messageAuthor;
            var13 = var15.nick;
case 4:
            var1['username2'] = var13;
            var13 = var7[var18];
            var15 = var14 != var13;
            var13 = undefined;
            if(!var15) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var17 = _closure1_slot1;
            var15 = _closure1_slot2;
            var15 = var15[var16];
            var17 = var17.bind(var8)(var15);
            var15 = {};
            var19 = var7[var18];
            var19 = var19.user;
            var19 = var19.id;
            var15['userId'] = var19;
            var15['message'] = var11;
            var18 = var7[var18];
            var18 = var18.messageAuthor;
            var15['author'] = var18;
            var15['roleStyle'] = var9;
            var13 = var17.bind(var8)(var15);
case 6:
            var1['username2OnClick'] = var13;
            var15 = var7[var12];
            var17 = var14 == var15;
            var13 = undefined;
            if(var17) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var15 = var15.messageAuthor;
            var13 = var15.nick;
case 8:
            var1['username3'] = var13;
            var13 = var7[var12];
            var14 = var14 != var13;
            var13 = undefined;
            if(!var14) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var15 = _closure1_slot1;
            var14 = _closure1_slot2;
            var14 = var14[var16];
            var15 = var15.bind(var8)(var14);
            var14 = {};
            var16 = var7[var12];
            var16 = var16.user;
            var16 = var16.id;
            var14['userId'] = var16;
            var14['message'] = var11;
            var16 = var7[var12];
            var16 = var16.messageAuthor;
            var14['author'] = var16;
            var14['roleStyle'] = var9;
            var13 = var15.bind(var8)(var14);
case 10:
            var1['username3OnClick'] = var13;
            var7 = var7.length;
            var7 = var7 - var12;
            var1['otherCount'] = var7;
            var1['duration'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            _fun0001_ip = 12; continue _fun0001;
case 2:
            var3 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 4;
            var4 = var12[var2];
            var4 = var3.bind(var8)(var4);
            var5 = var4.intl;
            var4 = var5.formatToParts;
            var2 = var12[var2];
            var2 = var3.bind(var8)(var2);
            var2 = var2.t;
            var3 = var2.HzBfIN;
            var2 = {};
            var7 = var10.nick;
            var2['username'] = var7;
            var7 = _closure1_slot1;
            var6 = 5;
            var6 = var12[var6];
            var7 = var7.bind(var8)(var6);
            var6 = {};
            var6['message'] = var11;
            var6['author'] = var10;
            var6['roleStyle'] = var9;
            var6 = var7.bind(var8)(var6);
            var2['usernameOnClick'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 12:
            return var1;
        }
    };
    var _closure1_slot4 = var1;
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
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/VoiceSessionSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createVoiceSessionSystemMessage(arg1) {
        var4 = arg1;
        var1 = {};
        var7 = _closure1_slot4;
        var6 = var4.message;
        var5 = var4.roleStyle;
        var3 = undefined;
        var5 = var7.bind(var3)(var6, var5);
        var1['content'] = var5;
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var2 = 6;
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