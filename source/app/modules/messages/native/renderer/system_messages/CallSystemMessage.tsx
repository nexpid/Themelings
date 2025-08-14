// app/modules/messages/native/renderer/system_messages/CallSystemMessage.tsx
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
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ME;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ParticipantTypes;
    var _closure1_slot7 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/CallSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createCallSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var5 = var4.message;
            var3 = _closure1_slot4;
            var1 = var3.getId;
            var9 = var1.bind(var3)();
            var1 = var5.getChannelId;
            var14 = var1.bind(var5)();
            var1 = var5.call;
            var7 = _closure1_slot5;
            var6 = var7.getUserVoiceChannelId;
            var3 = _closure1_slot6;
            var13 = var6.bind(var7)(var3, var9);
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 5;
            var6 = var8[var3];
            var3 = undefined;
            var6 = var7.bind(var3)(var6);
            var21 = var6.bind(var3)(var5);
            var7 = _closure1_slot3;
            var6 = var7.getParticipants;
            var15 = var6.bind(var7)(var14);
            var7 = _closure1_slot0;
            var6 = 6;
            var6 = var8[var6];
            var8 = var7.bind(var3)(var6);
            var7 = var8.checkIsCallActive;
            var6 = var5.id;
            var8 = var7.bind(var8)(var14, var6);
            var7 = !var8;
            if(!var7) { _fun0001_ip = 149; continue _fun0001 }
 143:
            var6 = null;
            var7 = var6 != var1;
 149:
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 152:
            var6 = var1.participants;
            var1 = var6.indexOf;
            var6 = var1.bind(var6)(var9);
            var1 = -1;
            var7 = var1 === var6;
 179:
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var18 = 7;
            var9 = var1[var18];
            var9 = var6.bind(var3)(var9);
            var16 = var9.intl;
            var11 = var16.string;
            var1 = var1[var18];
            var1 = var6.bind(var3)(var1);
            var1 = var1.t;
            if(var8) { _fun0001_ip = 463; continue _fun0001 }
 229:
            if(var7) { _fun0001_ip = 245; continue _fun0001 }
 232:
            var6 = var1.v05Xd3;
            var10 = var11.bind(var16)(var6);
            _fun0001_ip = 256; continue _fun0001;
 245:
            var6 = var1.2CnhoK;
            var10 = var11.bind(var16)(var6);
 256:
            var6 = null;
            if(!(var6 == var21)) { _fun0001_ip = 301; continue _fun0001 }
 262:
            var9 = _closure1_slot0;
            var17 = _closure1_slot2;
            var6 = 9;
            var6 = var17[var6];
            var17 = var9.bind(var3)(var6);
            var9 = var17.calendarFormat;
            var6 = var5.timestamp;
            var9 = var9.bind(var17)(var6);
            _fun0001_ip = 396; continue _fun0001;
 301:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var6 = var23[var18];
            var6 = var22.bind(var3)(var6);
            var20 = var6.intl;
            var19 = var20.formatToPlainString;
            var6 = var23[var18];
            var6 = var22.bind(var3)(var6);
            var6 = var6.t;
            var17 = var6.SBDnp6;
            var6 = {};
            var6['duration'] = var21;
            var21 = 9;
            var21 = var23[var21];
            var23 = var22.bind(var3)(var21);
            var22 = var23.calendarFormat;
            var21 = var5.timestamp;
            var21 = var22.bind(var23)(var21);
            var6['timestamp'] = var21;
            var9 = var19.bind(var20)(var17, var6);
 396:
            var17 = _closure1_slot0;
            var19 = _closure1_slot2;
            var6 = 8;
            var6 = var19[var6];
            var19 = var17.bind(var3)(var6);
            var17 = var19.ensureAvatarSource;
            var20 = var5.author;
            var6 = var20.getAvatarSource;
            var6 = var6.bind(var20)(var3);
            var6 = var17.bind(var19)(var6);
            var17 = var6.uri;
            var6 = new Array(1);
            var6[0] = var17;
            _fun0001_ip = 587; continue _fun0001;
 463:
            var1 = var1.NGg/fn;
            var11 = var11.bind(var16)(var1);
            var16 = '';
            var1 = var16;
            if(!var8) { _fun0001_ip = 551; continue _fun0001 }
 484:
            var17 = null;
            if(!(var17 != var13)) { _fun0001_ip = 497; continue _fun0001 }
 490:
            var1 = var16;
            if(!(var13 !== var14)) { _fun0001_ip = 551; continue _fun0001 }
 497:
            var17 = _closure1_slot0;
            var13 = _closure1_slot2;
            var14 = var13[var18];
            var14 = var17.bind(var3)(var14);
            var16 = var14.intl;
            var14 = var16.string;
            var13 = var13[var18];
            var13 = var17.bind(var3)(var13);
            var13 = var13.t;
            var13 = var13.DqA3mp;
            var1 = var14.bind(var16)(var13);
 551:
            var14 = var15.filter;
            var13 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = arg1;
                    var3 = var2.type;
                    var1 = _closure1_slot7;
                    var1 = var1.USER;
                    var1 = var3 === var1;
                    if(!var1) { _fun0002_ip = 37; continue _fun0002 }
 28:
                    var2 = var2.ringing;
                    var1 = !var2;
 37:
                    return var1;
                }
            };
            var14 = var14.bind(var15)(var13);
            var13 = var14.map;
            var12 = function(arg1) {
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 8;
                var1 = var3[var1];
                var5 = undefined;
                var3 = var2.bind(var5)(var1);
                var2 = var3.ensureAvatarSource;
                var1 = arg1;
                var4 = var1.user;
                var1 = var4.getAvatarSource;
                var1 = var1.bind(var4)(var5);
                var1 = var2.bind(var3)(var1);
                var1 = var1.uri;
                return var1;
            };
            var6 = var13.bind(var14)(var12);
            var9 = var1;
            var10 = var11;
 587:
            var1 = {};
            var1['title'] = var10;
            var1['description'] = var9;
            var1['isCallActive'] = var8;
            var1['missed'] = var7;
            var1['avatarURLs'] = var6;
            var6 = var5.timestamp;
            var5 = var6.valueOf;
            var5 = var5.bind(var6)();
            var1['rawMilliseconds'] = var5;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 10;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            var24 = var2.bind(var3)(var4);
            var25 = var1;
            var2 = copyDataProperties(var25, var24);
            return var1;
        }
    };
    var3['createCallSystemMessage'] = var2;
    return var1;
})();