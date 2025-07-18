// app/modules/messages/native/renderer/system_messages/CallSystemMessage.tsx
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ME;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ParticipantTypes;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/CallSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function CallSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var11 = var1.row;
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 13;
            var6 = var8[var3];
            var4 = undefined;
            var12 = var5.bind(var4)(var6);
            var10 = var12.useStateFromStores;
            var6 = _closure1_slot5;
            var9 = new Array(1);
            var9[0] = var6;
            var7 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = new Array(0);
            var9 = var10.bind(var12)(var9, var7, var6);
            var _closure2_slot0 = var9;
            var3 = var8[var3];
            var10 = var5.bind(var4)(var3);
            var7 = var10.useStateFromStores;
            var3 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var3;
            var5 = new Array(1);
            var5[0] = var9;
            var3 = function() {
                var4 = _closure1_slot6;
                var3 = var4.getUserVoiceChannelId;
                var2 = _closure1_slot7;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var14 = var7.bind(var10)(var6, var3, var5);
            var5 = var11.message;
            var _closure2_slot1 = var5;
            var3 = var5.getChannelId;
            var12 = var3.bind(var5)();
            var3 = var5.call;
            var7 = _closure1_slot1;
            var6 = 7;
            var6 = var8[var6];
            var6 = var7.bind(var4)(var6);
            var21 = var6.bind(var4)(var5);
            var6 = function useParticipants(arg1) {
                var3 = arg1;
                var _closure3_slot0 = var3;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 13;
                var5 = var5[var4];
                var4 = undefined;
                var7 = var6.bind(var4)(var5);
                var6 = var7.useStateFromStoresObject;
                var4 = _closure1_slot4;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = function() {
                    var1 = {};
                    var4 = _closure1_slot4;
                    var2 = var4.getParticipants;
                    var3 = _closure3_slot0;
                    var2 = var2.bind(var4)(var3);
                    var1['participants'] = var2;
                    var2 = var4.getParticipantsVersion;
                    var2 = var2.bind(var4)(var3);
                    var1['version'] = var2;
                    return var1;
                };
                var3 = var6.bind(var7)(var5, var3, var4);
                var6 = var3.participants;
                var _closure3_slot1 = var6;
                var5 = var3.version;
                var4 = _closure1_slot3;
                var3 = var4.useMemo;
                var2 = new Array(2);
                var2[0] = var6;
                var2[1] = var5;
                var1 = function() {
                    var1 = {};
                    var2 = _closure3_slot1;
                    var1['value'] = var2;
                    return var1;
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var13 = var6.bind(var4)(var12);
            var _closure2_slot2 = var13;
            var6 = 8;
            var6 = var8[var6];
            var7 = var7.bind(var4)(var6);
            var6 = var5.id;
            var8 = var7.bind(var4)(var12, var6);
            var _closure2_slot3 = var8;
            var7 = !var8;
            if(!var7) { _fun0001_ip = 223; continue _fun0001 }
 217:
            var6 = null;
            var7 = var6 != var3;
 223:
            if(!var7) { _fun0001_ip = 245; continue _fun0001 }
 226:
            var6 = var3.participants;
            var3 = var6.includes;
            var3 = var3.bind(var6)(var9);
            var7 = !var3;
 245:
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var17 = 9;
            var6 = var3[var17];
            var6 = var9.bind(var4)(var6);
            var15 = var6.intl;
            var6 = var15.string;
            var3 = var3[var17];
            var3 = var9.bind(var4)(var3);
            var3 = var3.t;
            if(var8) { _fun0001_ip = 462; continue _fun0001 }
 295:
            if(var7) { _fun0001_ip = 311; continue _fun0001 }
 298:
            var9 = var3.v05Xd3;
            var10 = var6.bind(var15)(var9);
            _fun0001_ip = 322; continue _fun0001;
 311:
            var9 = var3.2CnhoK;
            var10 = var6.bind(var15)(var9);
 322:
            var9 = null;
            if(!(var9 == var21)) { _fun0001_ip = 367; continue _fun0001 }
 328:
            var16 = _closure1_slot0;
            var18 = _closure1_slot2;
            var9 = 11;
            var9 = var18[var9];
            var18 = var16.bind(var4)(var9);
            var16 = var18.calendarFormat;
            var9 = var5.timestamp;
            var9 = var16.bind(var18)(var9);
            _fun0001_ip = 460; continue _fun0001;
 367:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var16 = var23[var17];
            var16 = var22.bind(var4)(var16);
            var20 = var16.intl;
            var19 = var20.formatToPlainString;
            var16 = var23[var17];
            var16 = var22.bind(var4)(var16);
            var16 = var16.t;
            var18 = var16.SBDnp6;
            var16 = {};
            var16['duration'] = var21;
            var21 = 11;
            var21 = var23[var21];
            var23 = var22.bind(var4)(var21);
            var22 = var23.calendarFormat;
            var21 = var5.timestamp;
            var21 = var22.bind(var23)(var21);
            var16['timestamp'] = var21;
            var9 = var19.bind(var20)(var18, var16);
 460:
            _fun0001_ip = 554; continue _fun0001;
 462:
            var3 = var3.NGg/fn;
            var6 = var6.bind(var15)(var3);
            var15 = '';
            var3 = var15;
            if(!var8) { _fun0001_ip = 548; continue _fun0001 }
 483:
            var16 = null;
            if(!(var16 != var14)) { _fun0001_ip = 496; continue _fun0001 }
 489:
            var3 = var15;
            if(!(var14 !== var12)) { _fun0001_ip = 548; continue _fun0001 }
 496:
            var16 = _closure1_slot0;
            var12 = _closure1_slot2;
            var14 = var12[var17];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var12 = var12[var17];
            var12 = var16.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.DqA3mp;
            var3 = var14.bind(var15)(var12);
 548:
            var9 = var3;
            var10 = var6;
 554:
            var12 = _closure1_slot3;
            var6 = var12.useMemo;
            var3 = new Array(3);
            var3[0] = var8;
            var14 = var5.author;
            var3[1] = var14;
            var3[2] = var13;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot3;
                    if(var1) { _fun0002_ip = 85; continue _fun0002 }
 12:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 10;
                    var1 = var5[var1];
                    var7 = undefined;
                    var5 = var4.bind(var7)(var1);
                    var4 = var5.ensureAvatarSource;
                    var1 = _closure2_slot1;
                    var6 = var1.author;
                    var1 = var6.getAvatarSource;
                    var1 = var1.bind(var6)(var7);
                    var1 = var4.bind(var5)(var1);
                    var4 = var1.uri;
                    var1 = new Array(1);
                    var1[0] = var4;
                    _fun0002_ip = 128; continue _fun0002;
 85:
                    var3 = _closure2_slot2;
                    var5 = var3.value;
                    var4 = var5.filter;
                    var3 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var2 = arg1;
                            var3 = var2.type;
                            var1 = _closure1_slot8;
                            var1 = var1.USER;
                            var1 = var3 === var1;
                            if(!var1) { _fun0003_ip = 37; continue _fun0003 }
 28:
                            var2 = var2.ringing;
                            var1 = !var2;
 37:
                            return var1;
                        }
                    };
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.map;
                    var2 = function(arg1) {
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 10;
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
                    var1 = var3.bind(var4)(var2);
 128:
                    return var1;
                }
            };
            var6 = var6.bind(var12)(var2, var3);
            var3 = _closure1_slot9;
            var2 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 14;
            var1 = var12[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['row'] = var11;
            var1['title'] = var10;
            var1['description'] = var9;
            var1['isCallActive'] = var8;
            var1['missed'] = var7;
            var1['avatarURLs'] = var6;
            var6 = var5.timestamp;
            var5 = var6.valueOf;
            var5 = var5.bind(var6)();
            var1['rawMilliseconds'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function createCallSystemMessage(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var5 = var4.message;
            var3 = _closure1_slot5;
            var1 = var3.getId;
            var9 = var1.bind(var3)();
            var1 = var5.getChannelId;
            var14 = var1.bind(var5)();
            var1 = var5.call;
            var7 = _closure1_slot6;
            var6 = var7.getUserVoiceChannelId;
            var3 = _closure1_slot7;
            var13 = var6.bind(var7)(var3, var9);
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 7;
            var6 = var8[var3];
            var3 = undefined;
            var6 = var7.bind(var3)(var6);
            var21 = var6.bind(var3)(var5);
            var7 = _closure1_slot4;
            var6 = var7.getParticipants;
            var15 = var6.bind(var7)(var14);
            var7 = _closure1_slot0;
            var6 = 8;
            var6 = var8[var6];
            var8 = var7.bind(var3)(var6);
            var7 = var8.checkIsCallActive;
            var6 = var5.id;
            var8 = var7.bind(var8)(var14, var6);
            var7 = !var8;
            if(!var7) { _fun0004_ip = 149; continue _fun0004 }
 143:
            var6 = null;
            var7 = var6 != var1;
 149:
            if(!var7) { _fun0004_ip = 179; continue _fun0004 }
 152:
            var6 = var1.participants;
            var1 = var6.indexOf;
            var6 = var1.bind(var6)(var9);
            var1 = -1;
            var7 = var1 === var6;
 179:
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var18 = 9;
            var9 = var1[var18];
            var9 = var6.bind(var3)(var9);
            var16 = var9.intl;
            var11 = var16.string;
            var1 = var1[var18];
            var1 = var6.bind(var3)(var1);
            var1 = var1.t;
            if(var8) { _fun0004_ip = 461; continue _fun0004 }
 229:
            if(var7) { _fun0004_ip = 245; continue _fun0004 }
 232:
            var6 = var1.v05Xd3;
            var10 = var11.bind(var16)(var6);
            _fun0004_ip = 256; continue _fun0004;
 245:
            var6 = var1.2CnhoK;
            var10 = var11.bind(var16)(var6);
 256:
            var6 = null;
            if(!(var6 == var21)) { _fun0004_ip = 301; continue _fun0004 }
 262:
            var9 = _closure1_slot0;
            var17 = _closure1_slot2;
            var6 = 11;
            var6 = var17[var6];
            var17 = var9.bind(var3)(var6);
            var9 = var17.calendarFormat;
            var6 = var5.timestamp;
            var9 = var9.bind(var17)(var6);
            _fun0004_ip = 394; continue _fun0004;
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
            var21 = 11;
            var21 = var23[var21];
            var23 = var22.bind(var3)(var21);
            var22 = var23.calendarFormat;
            var21 = var5.timestamp;
            var21 = var22.bind(var23)(var21);
            var6['timestamp'] = var21;
            var9 = var19.bind(var20)(var17, var6);
 394:
            var17 = _closure1_slot0;
            var19 = _closure1_slot2;
            var6 = 10;
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
            _fun0004_ip = 587; continue _fun0004;
 461:
            var1 = var1.NGg/fn;
            var11 = var11.bind(var16)(var1);
            var16 = '';
            var1 = var16;
            if(!var8) { _fun0004_ip = 547; continue _fun0004 }
 482:
            var17 = null;
            if(!(var17 != var13)) { _fun0004_ip = 495; continue _fun0004 }
 488:
            var1 = var16;
            if(!(var13 !== var14)) { _fun0004_ip = 547; continue _fun0004 }
 495:
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
 547:
            var14 = var15.filter;
            var13 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = arg1;
                    var3 = var2.type;
                    var1 = _closure1_slot8;
                    var1 = var1.USER;
                    var1 = var3 === var1;
                    if(!var1) { _fun0005_ip = 37; continue _fun0005 }
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
                var1 = 10;
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
            var2 = 12;
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