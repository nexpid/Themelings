// app/modules/messages/native/renderer/system_messages/StageRaiseHandSystemMessage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function createRequestToSpeakEphemeralIndication(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var12 = arg1;
            var2 = var12.hasFlag;
            var1 = _closure1_slot9;
            var1 = var1.EPHEMERAL;
            var1 = var2.bind(var12)(var1);
            if(!var1) { _fun0001_ip = 49; continue _fun0001 }
 30:
            var2 = var12.type;
            var1 = _closure1_slot10;
            var1 = var1.STAGE_RAISE_HAND;
            if(!(var2 !== var1)) { _fun0001_ip = 53; continue _fun0001 }
 49:
            var1 = undefined;
            return var1;
 53:
            var1 = {};
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 7;
            var4 = var7[var2];
            var5 = undefined;
            var4 = var6.bind(var5)(var4);
            var10 = var4.intl;
            var9 = var10.formatToParts;
            var4 = var7[var2];
            var4 = var6.bind(var5)(var4);
            var4 = var4.t;
            var8 = var4.qDAX+/;
            var4 = {};
            var11 = {};
            var13 = 'bindDismissMessage';
            var11['action'] = var13;
            var11['message'] = var12;
            var4['handleDelete'] = var11;
            var4 = var9.bind(var10)(var8, var4);
            var1['content'] = var4;
            var8 = _closure1_slot1;
            var4 = 8;
            var4 = var7[var4];
            var8 = var8.bind(var5)(var4);
            var4 = var8.getArticleURL;
            var3 = _closure1_slot8;
            var3 = var3.EPHEMERAL_MESSAGES;
            var3 = var4.bind(var8)(var3);
            var1['helpArticleLink'] = var3;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.htHOrq;
            var2 = var3.bind(var4)(var2);
            var1['helpButtonAccessibilityLabel'] = var2;
            return var1;
        }
    };
    var _closure1_slot13 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.HelpdeskArticles;
    var _closure1_slot8 = var7;
    var7 = var4.MessageFlags;
    var _closure1_slot9 = var7;
    var7 = var4.MessageTypes;
    var _closure1_slot10 = var7;
    var4 = var4.Permissions;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot12 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/StageRaiseHandSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function StageRaiseHandSystemMessage(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var9 = var2.row;
            var8 = _closure1_slot0;
            var16 = _closure1_slot2;
            var5 = 14;
            var2 = var16[var5];
            var4 = undefined;
            var11 = var8.bind(var4)(var2);
            var10 = var11.useStateFromStores;
            var2 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var2;
            var3 = function() {
                var1 = _closure1_slot4;
                var1 = var1.roleStyle;
                return var1;
            };
            var2 = new Array(0);
            var11 = var10.bind(var11)(var7, var3, var2);
            var _closure2_slot0 = var11;
            var10 = var9.message;
            var _closure2_slot1 = var10;
            var2 = var10.author;
            var _closure2_slot2 = var2;
            var3 = 9;
            var3 = var16[var3];
            var7 = var8.bind(var4)(var3);
            var3 = var7.useMessageAuthorWithProcessedColor;
            var3 = var3.bind(var7)(var10);
            var12 = var3.nick;
            var _closure2_slot3 = var12;
            var13 = var3.colorString;
            var _closure2_slot4 = var13;
            var3 = var10.getChannelId;
            var3 = var3.bind(var10)();
            var _closure2_slot5 = var3;
            var7 = var16[var5];
            var18 = var8.bind(var4)(var7);
            var17 = var18.useStateFromStores;
            var7 = _closure1_slot6;
            var15 = new Array(1);
            var15[0] = var7;
            var14 = new Array(1);
            var14[0] = var3;
            var7 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getChannel;
                var1 = _closure2_slot5;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var17.bind(var18)(var15, var7, var14);
            var _closure2_slot6 = var7;
            var14 = var16[var5];
            var18 = var8.bind(var4)(var14);
            var17 = var18.useStateFromStores;
            var14 = _closure1_slot7;
            var15 = new Array(1);
            var15[0] = var14;
            var14 = new Array(1);
            var14[0] = var7;
            var7 = function() {
                var4 = _closure1_slot7;
                var3 = var4.can;
                var1 = _closure1_slot11;
                var2 = var1.MUTE_MEMBERS;
                var1 = _closure2_slot6;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var7 = var17.bind(var18)(var15, var7, var14);
            var5 = var16[var5];
            var15 = var8.bind(var4)(var5);
            var14 = var15.useStateFromStores;
            var5 = _closure1_slot5;
            var8 = new Array(1);
            var8[0] = var5;
            var5 = new Array(2);
            var5[0] = var3;
            var3 = var2.id;
            var5[1] = var3;
            var3 = function() {
                var4 = _closure1_slot5;
                var3 = var4.getParticipant;
                var2 = _closure2_slot5;
                var1 = _closure2_slot2;
                var1 = var1.id;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var5 = var14.bind(var15)(var8, var3, var5);
            var3 = global;
            var15 = var3.Date;
            var14 = _closure1_slot1;
            var8 = 10;
            var8 = var16[var8];
            var16 = var14.bind(var4)(var8);
            var14 = var16.extractTimestamp;
            var8 = var10.id;
            var21 = var14.bind(var16)(var8);
            var14 = var15.prototype;
            var14 = Object.create(var14, {constructor: {value: var15}});
            var22 = var14;
            var8 = new var22[var15](var21, var20);
            var14 = var8 instanceof Object ? var8 : var14;
            var8 = var14.toISOString;
            var14 = var8.bind(var14)();
            var16 = var3.Date;
            var8 = null;
            var3 = var8 == var5;
            var15 = undefined;
            if(var3) { _fun0002_ip = 416; continue _fun0002 }
 395:
            var3 = var5.voiceState;
            var17 = var8 == var3;
            var15 = undefined;
            if(var17) { _fun0002_ip = 416; continue _fun0002 }
 410:
            var15 = var3.requestToSpeakTimestamp;
 416:
            var17 = var8 != var15;
            var3 = 0;
            if(!var17) { _fun0002_ip = 428; continue _fun0002 }
 425:
            var3 = var15;
 428:
            var15 = var16.prototype;
            var15 = Object.create(var15, {constructor: {value: var16}});
            var22 = var15;
            var21 = var3;
            var3 = new var22[var16](var21, var20);
            var15 = var3 instanceof Object ? var3 : var15;
            var3 = var15.toISOString;
            var3 = var3.bind(var15)();
            var3 = var14 === var3;
            if(!var7) { _fun0002_ip = 519; continue _fun0002 }
 468:
            var14 = var8 == var5;
            var8 = undefined;
            if(var14) { _fun0002_ip = 483; continue _fun0002 }
 477:
            var8 = var5.rtsState;
 483:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var5 = 11;
            var5 = var15[var5];
            var5 = var14.bind(var4)(var5);
            var5 = var5.RequestToSpeakStates;
            var5 = var5.REQUESTED_TO_SPEAK;
            var7 = var8 === var5;
 519:
            if(!var7) { _fun0002_ip = 525; continue _fun0002 }
 522:
            var7 = var3;
 525:
            var5 = _closure1_slot3;
            var8 = var5.useMemo;
            var3 = new Array(5);
            var3[0] = var13;
            var13 = var10.channel_id;
            var3[1] = var13;
            var3[2] = var12;
            var3[3] = var11;
            var2 = var2.id;
            var3[4] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 7;
                    var3 = var6[var1];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var4 = var3.intl;
                    var3 = var4.formatToParts;
                    var1 = var6[var1];
                    var1 = var5.bind(var2)(var1);
                    var1 = var1.t;
                    var2 = var1.M87x7e;
                    var1 = {};
                    var5 = _closure2_slot3;
                    var1['username'] = var5;
                    var5 = {};
                    var7 = 'bindUserMenu';
                    var5['action'] = var7;
                    var7 = _closure2_slot2;
                    var7 = var7.id;
                    var5['userId'] = var7;
                    var9 = _closure2_slot0;
                    var8 = 'username';
                    var7 = null;
                    if(!(var8 === var9)) { _fun0003_ip = 112; continue _fun0003 }
 108:
                    var7 = _closure2_slot4;
 112:
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
            var8 = var8.bind(var5)(var2, var3);
            var3 = var5.useMemo;
            var2 = new Array(1);
            var2[0] = var10;
            var1 = function() {
                var3 = _closure1_slot13;
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var5 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot12;
            var2 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 15;
            var1 = var10[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['row'] = var9;
            var1['content'] = var8;
            var1['showInviteToSpeakButton'] = var7;
            var9 = _closure1_slot0;
            var6 = 7;
            var7 = var10[var6];
            var7 = var9.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.f0T7hI;
            var6 = var7.bind(var8)(var6);
            var1['buttonLabel'] = var6;
            var1['ephemeralIndication'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function createStageRaiseHandSystemMessage(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var7 = var4.message;
            var19 = var4.roleStyle;
            var16 = var7.author;
            var5 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 9;
            var1 = var13[var1];
            var3 = undefined;
            var5 = var5.bind(var3)(var1);
            var1 = var5.getMessageAuthorWithProcessedColor;
            var1 = var1.bind(var5)(var7);
            var12 = var1.nick;
            var17 = var1.colorString;
            var14 = var1.colorStrings;
            var11 = var1.guildId;
            var6 = _closure1_slot6;
            var5 = var6.getChannel;
            var1 = var7.channel_id;
            var8 = var5.bind(var6)(var1);
            var6 = _closure1_slot7;
            var5 = var6.can;
            var1 = _closure1_slot11;
            var1 = var1.MUTE_MEMBERS;
            var6 = var5.bind(var6)(var1, var8);
            var9 = _closure1_slot5;
            var8 = var9.getParticipant;
            var5 = var7.channel_id;
            var1 = var7.author;
            var1 = var1.id;
            var5 = var8.bind(var9)(var5, var1);
            var1 = global;
            var10 = var1.Date;
            var9 = _closure1_slot1;
            var8 = 10;
            var8 = var13[var8];
            var13 = var9.bind(var3)(var8);
            var9 = var13.extractTimestamp;
            var8 = var7.id;
            var22 = var9.bind(var13)(var8);
            var9 = var10.prototype;
            var9 = Object.create(var9, {constructor: {value: var10}});
            var23 = var9;
            var8 = new var23[var10](var22, var21);
            var9 = var8 instanceof Object ? var8 : var9;
            var8 = var9.toISOString;
            var8 = var8.bind(var9)();
            var10 = var1.Date;
            var13 = null;
            var1 = var13 == var5;
            var9 = undefined;
            if(var1) { _fun0004_ip = 264; continue _fun0004 }
 243:
            var1 = var5.voiceState;
            var15 = var13 == var1;
            var9 = undefined;
            if(var15) { _fun0004_ip = 264; continue _fun0004 }
 258:
            var9 = var1.requestToSpeakTimestamp;
 264:
            var15 = var13 != var9;
            var1 = 0;
            if(!var15) { _fun0004_ip = 276; continue _fun0004 }
 273:
            var1 = var9;
 276:
            var9 = var10.prototype;
            var9 = Object.create(var9, {constructor: {value: var10}});
            var23 = var9;
            var22 = var1;
            var1 = new var23[var10](var22, var21);
            var9 = var1 instanceof Object ? var1 : var9;
            var1 = var9.toISOString;
            var1 = var1.bind(var9)();
            var1 = var8 === var1;
            if(!var6) { _fun0004_ip = 367; continue _fun0004 }
 316:
            var9 = var13 == var5;
            var8 = undefined;
            if(var9) { _fun0004_ip = 331; continue _fun0004 }
 325:
            var8 = var5.rtsState;
 331:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 11;
            var5 = var10[var5];
            var5 = var9.bind(var3)(var5);
            var5 = var5.RequestToSpeakStates;
            var5 = var5.REQUESTED_TO_SPEAK;
            var6 = var8 === var5;
 367:
            if(!var6) { _fun0004_ip = 373; continue _fun0004 }
 370:
            var6 = var1;
 373:
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 12;
            var1 = var8[var1];
            var10 = var9.bind(var3)(var1);
            var5 = var10.isNativeMessageEligibleForEnhancedRoleColors;
            var1 = var16.id;
            var15 = var5.bind(var10)(var11, var1, var19);
            var1 = {};
            var5 = 7;
            var10 = var8[var5];
            var10 = var9.bind(var3)(var10);
            var11 = var10.intl;
            var10 = var11.formatToParts;
            var8 = var8[var5];
            var8 = var9.bind(var3)(var8);
            var8 = var8.t;
            var9 = var8.M87x7e;
            var8 = {};
            var8['username'] = var12;
            var12 = {};
            var18 = 'bindUserMenu';
            var12['action'] = var18;
            var16 = var16.id;
            var12['userId'] = var16;
            var18 = 'username';
            var16 = null;
            if(!(var18 === var19)) { _fun0004_ip = 496; continue _fun0004 }
 493:
            var16 = var17;
 496:
            var12['linkColor'] = var16;
            var13 = null;
            if(!var15) { _fun0004_ip = 509; continue _fun0004 }
 506:
            var13 = var14;
 509:
            var12['roleColors'] = var13;
            var13 = var7.channel_id;
            var12['messageChannelId'] = var13;
            var13 = true;
            var12['medium'] = var13;
            var8['usernameOnClick'] = var12;
            var8 = var10.bind(var11)(var9, var8);
            var1['content'] = var8;
            var1['showInviteToSpeakButton'] = var6;
            var10 = _closure1_slot0;
            var6 = _closure1_slot2;
            var8 = var6[var5];
            var8 = var10.bind(var3)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var5 = var6[var5];
            var5 = var10.bind(var3)(var5);
            var5 = var5.t;
            var5 = var5.f0T7hI;
            var5 = var8.bind(var9)(var5);
            var1['buttonLabel'] = var5;
            var5 = _closure1_slot13;
            var5 = var5.bind(var3)(var7);
            var1['ephemeralIndication'] = var5;
            var5 = _closure1_slot1;
            var2 = 13;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            var21 = var2.bind(var3)(var4);
            var22 = var1;
            var2 = copyDataProperties(var22, var21);
            return var1;
        }
    };
    var3['createStageRaiseHandSystemMessage'] = var2;
    return var1;
})();