// app/modules/messages/isNewMessageGroup.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function isNewMessageGroup(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var10 = arg1;
            var8 = arg2;
            var6 = arg3;
            var2 = var6.hasFlag;
            var1 = _closure1_slot5;
            var1 = var1.HAS_THREAD;
            var1 = var2.bind(var6)(var1);
            var2 = !var1;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var6.isCommandType;
            var1 = var1.bind(var6)();
            var2 = !var1;
case 2:
            var1 = !var2;
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var8.blocked;
            var2 = var6.blocked;
            var2 = var3 !== var2;
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var8.ignored;
            var3 = var6.ignored;
            var2 = var4 !== var3;
case 6:
            if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = var6.type;
            var3 = _closure1_slot3;
            var3 = var3.DEFAULT;
            if(!(!(var4 > var3))) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 2;
            var3 = var7[var3];
            var14 = undefined;
            var3 = var4.bind(var14)(var3);
            var3 = var3.bind(var14)(var8);
            var4 = !var3;
            var3 = !var4;
            if(!var4) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var4 = var8.author;
            var7 = var4.id;
            var4 = var6.author;
            var4 = var4.id;
            var4 = var7 !== var4;
            if(var4) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var9 = var8.hasFlag;
            var7 = _closure1_slot5;
            var7 = var7.EPHEMERAL;
            var9 = var9.bind(var8)(var7);
            var11 = var6.hasFlag;
            var7 = _closure1_slot5;
            var7 = var7.EPHEMERAL;
            var7 = var11.bind(var6)(var7);
            var7 = var9 !== var7;
            if(var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var9 = var6.webhookId;
            var11 = null;
            var9 = var11 != var9;
            if(!var9) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var12 = var8.author;
            var13 = var12.username;
            var12 = var6.author;
            var12 = var12.username;
            var9 = var13 !== var12;
case 18:
            if(var9) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var11 = var11 == var10;
            if(var11) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var12 = var10.isForumPost;
            var12 = var12.bind(var10)();
            var11 = !var12;
case 22:
            if(var11) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var12 = var8.id;
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var13 = 3;
            var13 = var16[var13];
            var15 = var15.bind(var14)(var13);
            var13 = var15.castChannelIdAsMessageId;
            var10 = var10.id;
            var10 = var13.bind(var15)(var10);
            var11 = var12 !== var10;
case 24:
            var10 = !var11;
            if(!var11) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var15 = 4;
            var11 = var11[var15];
            var16 = var12.bind(var14)(var11);
            var13 = var16.isSameDay;
            var12 = var8.timestamp;
            var11 = var6.timestamp;
            var11 = var13.bind(var16)(var12, var11);
            var11 = !var11;
            if(var11) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var15];
            var16 = var13.bind(var14)(var12);
            var15 = var16.isWithinInterval;
            var14 = var8.timestamp;
            var13 = var6.timestamp;
            var12 = _closure1_slot6;
            var12 = var15.bind(var16)(var14, var13, var12);
            var12 = !var12;
            if(var12) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var14 = var6.hasFlag;
            var13 = _closure1_slot5;
            var13 = var13.SUPPRESS_NOTIFICATIONS;
            var13 = var14.bind(var6)(var13);
            var13 = !var13;
            if(var13) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var15 = var8.hasFlag;
            var14 = _closure1_slot5;
            var14 = var14.SUPPRESS_NOTIFICATIONS;
            var13 = var15.bind(var8)(var14);
case 32:
            var13 = !var13;
            if(var13) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var15 = var8.hasFlag;
            var14 = _closure1_slot5;
            var14 = var14.SUPPRESS_NOTIFICATIONS;
            var14 = var15.bind(var8)(var14);
            var14 = !var14;
            if(var14) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var16 = var6.hasFlag;
            var15 = _closure1_slot5;
            var15 = var15.SUPPRESS_NOTIFICATIONS;
            var14 = var16.bind(var6)(var15);
case 36:
            if(var14) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var15 = var6.mentions;
            var15 = var15.length;
            var17 = 0;
            var15 = var15 > var17;
            if(var15) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var16 = var6.mentionRoles;
            var16 = var16.length;
            var15 = var16 > var17;
case 40:
            if(var15) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var15 = var6.mentionEveryone;
case 42:
            var14 = !var15;
case 38:
            var14 = !var14;
            if(var14) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var16 = var6.applicationId;
            var15 = var8.applicationId;
            var14 = var16 !== var15;
case 44:
            var13 = var14;
case 34:
            var12 = var13;
case 30:
            var11 = var12;
case 28:
            var10 = var11;
case 26:
            var9 = var10;
case 20:
            var7 = var9;
case 16:
            var4 = var7;
case 14:
            var3 = var4;
case 12:
            _fun0001_ip = 46; continue _fun0001;
case 10:
            var9 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 2;
            var4 = var7[var4];
            var7 = undefined;
            var4 = var9.bind(var7)(var4);
            var4 = var4.bind(var7)(var8);
            var4 = !var4;
            if(var4) { _fun0001_ip = 47; continue _fun0001 }
case 48:
            var6 = var6.type;
            var5 = _closure1_slot3;
            var5 = var5.REPLY;
            var4 = var6 === var5;
case 47:
            var3 = var4;
case 46:
            var2 = var3;
case 8:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot7 = var4;
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
    var5 = var6.bind(var1)(var5);
    var9 = var5.MessageTypes;
    var _closure1_slot3 = var9;
    var9 = var5.ChannelStreamTypes;
    var _closure1_slot4 = var9;
    var5 = var5.MessageFlags;
    var _closure1_slot5 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var5 = var5.Millis;
    var8 = var5.MINUTE;
    var5 = 7;
    var5 = var5 * var8;
    var _closure1_slot6 = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/messages/isNewMessageGroup.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function isNewGroupItem(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg2;
            var1 = null;
            var1 = var1 == var4;
            if(var1) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            var3 = var4.type;
            var2 = _closure1_slot4;
            var2 = var2.MESSAGE;
            var2 = var3 === var2;
            if(!var2) { _fun0002_ip = 51; continue _fun0002 }
case 52:
            var3 = var4.content;
            var6 = var3.id;
            var3 = var4.content;
            var3 = var3.channel_id;
            var2 = var6 === var3;
case 51:
            if(var2) { _fun0002_ip = 53; continue _fun0002 }
case 54:
            var6 = var4.type;
            var3 = _closure1_slot4;
            var3 = var3.MESSAGE;
            var3 = var6 !== var3;
            if(!var3) { _fun0002_ip = 55; continue _fun0002 }
case 56:
            var7 = var4.type;
            var6 = _closure1_slot4;
            var6 = var6.THREAD_STARTER_MESSAGE;
            var3 = var7 !== var6;
case 55:
            if(var3) { _fun0002_ip = 57; continue _fun0002 }
case 58:
            var8 = _closure1_slot7;
            var7 = var4.content;
            var6 = undefined;
            var5 = arg1;
            var4 = arg3;
            var3 = var8.bind(var6)(var5, var7, var4);
case 57:
            var2 = var3;
case 53:
            var1 = var2;
case 49:
            return var1;
        }
    };
    var3['isNewGroupItem'] = var2;
    return var1;
})();