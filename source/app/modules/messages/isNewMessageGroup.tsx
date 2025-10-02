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
            var1 = arg1;
            var5 = arg2;
            var3 = arg3;
            var6 = var3.hasFlag;
            var4 = _closure1_slot5;
            var4 = var4.HAS_THREAD;
            var4 = var6.bind(var3)(var4);
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var3.isCommandType;
            var4 = var4.bind(var3)();
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var6 = var3.type;
            var4 = _closure1_slot3;
            var4 = var4.DEFAULT;
            if(!(!(var6 > var4))) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 2;
            var4 = var6[var4];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var4 = var4.bind(var6)(var5);
            if(var4) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var4 = var5.author;
            var7 = var4.id;
            var4 = var3.author;
            var4 = var4.id;
            if(!(var7 === var4)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var7 = var5.hasFlag;
            var4 = _closure1_slot5;
            var4 = var4.EPHEMERAL;
            var7 = var7.bind(var5)(var4);
            var8 = var3.hasFlag;
            var4 = _closure1_slot5;
            var4 = var4.EPHEMERAL;
            var4 = var8.bind(var3)(var4);
            if(!(var7 === var4)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var7 = var3.webhookId;
            var4 = null;
            if(!(var4 != var7)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var7 = var5.author;
            var8 = var7.username;
            var7 = var3.author;
            var7 = var7.username;
            if(!(var8 === var7)) { _fun0001_ip = 15; continue _fun0001 }
case 13:
            if(!(var4 != var1)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var4 = var1.isForumPost;
            var4 = var4.bind(var1)();
            if(!var4) { _fun0001_ip = 16; continue _fun0001 }
case 18:
            var4 = var5.id;
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 3;
            var7 = var9[var7];
            var8 = var8.bind(var6)(var7);
            var7 = var8.castChannelIdAsMessageId;
            var1 = var1.id;
            var1 = var7.bind(var8)(var1);
            if(!(var4 !== var1)) { _fun0001_ip = 19; continue _fun0001 }
case 16:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 4;
            var1 = var1[var7];
            var9 = var4.bind(var6)(var1);
            var8 = var9.isSameDay;
            var4 = var5.timestamp;
            var1 = var3.timestamp;
            var1 = var8.bind(var9)(var4, var1);
            if(var1) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var1 = true;
            return var1;
case 20:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var9 = var4.bind(var6)(var1);
            var8 = var9.isWithinInterval;
            var7 = var5.timestamp;
            var4 = var3.timestamp;
            var1 = _closure1_slot6;
            var1 = var8.bind(var9)(var7, var4, var1);
            if(var1) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var1 = true;
            return var1;
case 22:
            var4 = var3.hasFlag;
            var1 = _closure1_slot5;
            var1 = var1.SUPPRESS_NOTIFICATIONS;
            var1 = var4.bind(var3)(var1);
            if(!var1) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var4 = var5.hasFlag;
            var1 = _closure1_slot5;
            var1 = var1.SUPPRESS_NOTIFICATIONS;
            var1 = var4.bind(var5)(var1);
            if(var1) { _fun0001_ip = 24; continue _fun0001 }
case 26:
            var1 = true;
            return var1;
case 24:
            var4 = var5.hasFlag;
            var1 = _closure1_slot5;
            var1 = var1.SUPPRESS_NOTIFICATIONS;
            var1 = var4.bind(var5)(var1);
            if(!var1) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var4 = var3.hasFlag;
            var1 = _closure1_slot5;
            var1 = var1.SUPPRESS_NOTIFICATIONS;
            var1 = var4.bind(var3)(var1);
            if(var1) { _fun0001_ip = 27; continue _fun0001 }
case 29:
            var1 = var3.mentions;
            var1 = var1.length;
            var4 = 0;
            if(!(!(var1 > var4))) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var1 = var3.mentionRoles;
            var1 = var1.length;
            if(!(!(var1 > var4))) { _fun0001_ip = 30; continue _fun0001 }
case 32:
            var1 = var3.mentionEveryone;
            if(!var1) { _fun0001_ip = 27; continue _fun0001 }
case 30:
            var1 = true;
            return var1;
case 27:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 5;
            var1 = var7[var1];
            var4 = var4.bind(var6)(var1);
            var1 = var4.isRemix;
            var1 = var1.bind(var4)(var3);
            if(var1) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 6;
            var1 = var7[var1];
            var1 = var4.bind(var6)(var1);
            var7 = var1.ConfettiPotionExperiment;
            var6 = var7.getCurrentConfig;
            var4 = {};
            var1 = 'isNewMessageGroup';
            var4['location'] = var1;
            var1 = {};
            var8 = false;
            var1['autoTrackExposure'] = var8;
            var1 = var6.bind(var7)(var4, var1);
            var1 = var1.canSeeConfetti;
            var4 = var3.hasPotions;
            var4 = var4.bind(var3)();
            var4 = !var4;
            if(var4) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var4 = !var1;
case 35:
            var1 = !var4;
            if(!var4) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var6 = var3.applicationId;
            var4 = var5.applicationId;
            var1 = var6 !== var4;
case 37:
            return var1;
case 33:
            var1 = true;
            return var1;
case 19:
            var1 = true;
            return var1;
case 15:
            var1 = true;
            return var1;
case 11:
            var1 = true;
            return var1;
case 9:
            var1 = true;
            return var1;
case 7:
            var1 = true;
            return var1;
case 5:
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 2;
            var1 = var4[var1];
            var4 = undefined;
            var1 = var6.bind(var4)(var1);
            var1 = var1.bind(var4)(var5);
            var1 = !var1;
            if(var1) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var3 = var3.type;
            var2 = _closure1_slot3;
            var2 = var2.REPLY;
            var1 = var3 === var2;
case 39:
            return var1;
case 2:
            var1 = true;
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
    var8 = var5 * var8;
    var _closure1_slot6 = var8;
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
            if(var1) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var3 = var4.type;
            var2 = _closure1_slot4;
            var2 = var2.MESSAGE;
            var2 = var3 === var2;
            if(!var2) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var3 = var4.content;
            var6 = var3.id;
            var3 = var4.content;
            var3 = var3.channel_id;
            var2 = var6 === var3;
case 43:
            if(var2) { _fun0002_ip = 45; continue _fun0002 }
case 46:
            var6 = var4.type;
            var3 = _closure1_slot4;
            var3 = var3.MESSAGE;
            var3 = var6 !== var3;
            if(!var3) { _fun0002_ip = 47; continue _fun0002 }
case 48:
            var7 = var4.type;
            var6 = _closure1_slot4;
            var6 = var6.THREAD_STARTER_MESSAGE;
            var3 = var7 !== var6;
case 47:
            if(var3) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            var8 = _closure1_slot7;
            var7 = var4.content;
            var6 = undefined;
            var5 = arg1;
            var4 = arg3;
            var3 = var8.bind(var6)(var5, var7, var4);
case 49:
            var2 = var3;
case 45:
            var1 = var2;
case 41:
            return var1;
        }
    };
    var3['isNewGroupItem'] = var2;
    return var1;
})();