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
            var9 = arg1;
            var7 = arg2;
            var5 = arg3;
            var2 = var5.hasFlag;
            var1 = _closure1_slot5;
            var1 = var1.HAS_THREAD;
            var1 = var2.bind(var5)(var1);
            var2 = !var1;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var5.isCommandType;
            var1 = var1.bind(var5)();
            var2 = !var1;
case 2:
            var1 = !var2;
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var5.type;
            var2 = _closure1_slot3;
            var2 = var2.DEFAULT;
            if(!(!(var3 > var2))) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var13 = undefined;
            var2 = var3.bind(var13)(var2);
            var2 = var2.bind(var13)(var7);
            var3 = !var2;
            var2 = !var3;
            if(!var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var7.author;
            var6 = var3.id;
            var3 = var5.author;
            var3 = var3.id;
            var3 = var6 !== var3;
            if(var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var8 = var7.hasFlag;
            var6 = _closure1_slot5;
            var6 = var6.EPHEMERAL;
            var8 = var8.bind(var7)(var6);
            var10 = var5.hasFlag;
            var6 = _closure1_slot5;
            var6 = var6.EPHEMERAL;
            var6 = var10.bind(var5)(var6);
            var6 = var8 !== var6;
            if(var6) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var8 = var5.webhookId;
            var10 = null;
            var8 = var10 != var8;
            if(!var8) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var11 = var7.author;
            var12 = var11.username;
            var11 = var5.author;
            var11 = var11.username;
            var8 = var12 !== var11;
case 14:
            if(var8) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var10 = var10 == var9;
            if(var10) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var11 = var9.isForumPost;
            var11 = var11.bind(var9)();
            var10 = !var11;
case 18:
            if(var10) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var11 = var7.id;
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var12 = 3;
            var12 = var15[var12];
            var14 = var14.bind(var13)(var12);
            var12 = var14.castChannelIdAsMessageId;
            var9 = var9.id;
            var9 = var12.bind(var14)(var9);
            var10 = var11 !== var9;
case 20:
            var9 = !var10;
            if(!var10) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var14 = 4;
            var10 = var10[var14];
            var15 = var11.bind(var13)(var10);
            var12 = var15.isSameDay;
            var11 = var7.timestamp;
            var10 = var5.timestamp;
            var10 = var12.bind(var15)(var11, var10);
            var10 = !var10;
            if(var10) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var14];
            var15 = var12.bind(var13)(var11);
            var14 = var15.isWithinInterval;
            var13 = var7.timestamp;
            var12 = var5.timestamp;
            var11 = _closure1_slot6;
            var11 = var14.bind(var15)(var13, var12, var11);
            var11 = !var11;
            if(var11) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var13 = var5.hasFlag;
            var12 = _closure1_slot5;
            var12 = var12.SUPPRESS_NOTIFICATIONS;
            var12 = var13.bind(var5)(var12);
            var12 = !var12;
            if(var12) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var14 = var7.hasFlag;
            var13 = _closure1_slot5;
            var13 = var13.SUPPRESS_NOTIFICATIONS;
            var12 = var14.bind(var7)(var13);
case 28:
            var12 = !var12;
            if(var12) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var14 = var7.hasFlag;
            var13 = _closure1_slot5;
            var13 = var13.SUPPRESS_NOTIFICATIONS;
            var13 = var14.bind(var7)(var13);
            var13 = !var13;
            if(var13) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var15 = var5.hasFlag;
            var14 = _closure1_slot5;
            var14 = var14.SUPPRESS_NOTIFICATIONS;
            var13 = var15.bind(var5)(var14);
case 32:
            if(var13) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var14 = var5.mentions;
            var14 = var14.length;
            var16 = 0;
            var14 = var14 > var16;
            if(var14) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var15 = var5.mentionRoles;
            var15 = var15.length;
            var14 = var15 > var16;
case 36:
            if(var14) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var14 = var5.mentionEveryone;
case 38:
            var13 = !var14;
case 34:
            var13 = !var13;
            if(var13) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var15 = var5.applicationId;
            var14 = var7.applicationId;
            var13 = var15 !== var14;
case 40:
            var12 = var13;
case 30:
            var11 = var12;
case 26:
            var10 = var11;
case 24:
            var9 = var10;
case 22:
            var8 = var9;
case 16:
            var6 = var8;
case 12:
            var3 = var6;
case 10:
            var2 = var3;
case 8:
            _fun0001_ip = 42; continue _fun0001;
case 6:
            var8 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 2;
            var3 = var6[var3];
            var6 = undefined;
            var3 = var8.bind(var6)(var3);
            var3 = var3.bind(var6)(var7);
            var3 = !var3;
            if(var3) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var5 = var5.type;
            var4 = _closure1_slot3;
            var4 = var4.REPLY;
            var3 = var5 === var4;
case 43:
            var2 = var3;
case 42:
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
            if(var1) { _fun0002_ip = 45; continue _fun0002 }
case 46:
            var3 = var4.type;
            var2 = _closure1_slot4;
            var2 = var2.MESSAGE;
            var2 = var3 === var2;
            if(!var2) { _fun0002_ip = 47; continue _fun0002 }
case 48:
            var3 = var4.content;
            var6 = var3.id;
            var3 = var4.content;
            var3 = var3.channel_id;
            var2 = var6 === var3;
case 47:
            if(var2) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            var6 = var4.type;
            var3 = _closure1_slot4;
            var3 = var3.MESSAGE;
            var3 = var6 !== var3;
            if(!var3) { _fun0002_ip = 51; continue _fun0002 }
case 52:
            var7 = var4.type;
            var6 = _closure1_slot4;
            var6 = var6.THREAD_STARTER_MESSAGE;
            var3 = var7 !== var6;
case 51:
            if(var3) { _fun0002_ip = 53; continue _fun0002 }
case 54:
            var8 = _closure1_slot7;
            var7 = var4.content;
            var6 = undefined;
            var5 = arg1;
            var4 = arg3;
            var3 = var8.bind(var6)(var5, var7, var4);
case 53:
            var2 = var3;
case 49:
            var1 = var2;
case 45:
            return var1;
        }
    };
    var3['isNewGroupItem'] = var2;
    return var1;
})();