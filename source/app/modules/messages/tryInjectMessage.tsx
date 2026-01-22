// app/modules/messages/tryInjectMessage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function createInjectedInGameNuxMessage(arg1, arg2) {
        var2 = arg1;
        var4 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 3;
        var3 = var6[var3];
        var5 = undefined;
        var4 = var4.bind(var5)(var3);
        var3 = {};
        var7 = arg2;
        var3['channelId'] = var7;
        var7 = _closure1_slot8;
        var7 = var7.IN_GAME_MESSAGE_NUX;
        var3['type'] = var7;
        var7 = '';
        var3['content'] = var7;
        var7 = var2.author;
        var3['author'] = var7;
        var7 = _closure1_slot6;
        var7 = var7.EPHEMERAL;
        var3['flags'] = var7;
        var7 = _closure1_slot7;
        var7 = var7.SENT;
        var3['state'] = var7;
        var4 = var4.bind(var5)(var3);
        var3 = _closure1_slot0;
        var1 = 4;
        var1 = var6[var1];
        var3 = var3.bind(var5)(var1);
        var1 = var3.createMessageRecord;
        var1 = var1.bind(var3)(var4);
        var3 = var2.applicationId;
        var1['applicationId'] = var3;
        var2 = var2.timestamp;
        var1['timestamp'] = var2;
        return var1;
    };
    var _closure1_slot10 = var1;
    var1 = function tryCreateInjectedClipSharePromptMessage(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 8;
            var1 = var6[var1];
            var8 = undefined;
            var2 = var2.bind(var8)(var1);
            var1 = var2.areAdvancedSignalsEnabled;
            var2 = var1.bind(var2)();
            var1 = null;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            return var1;
case 2:
            var7 = var5.attachments;
            var6 = var7.find;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.hasFlag;
                    var2 = arg1;
                    var5 = var2.flags;
                    var2 = null;
                    var6 = var2 != var5;
                    var2 = 0;
                    if(!var6) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = var5;
case 4:
                    var1 = _closure1_slot5;
                    var1 = var1.IS_CLIP;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var2 = var6.bind(var7)(var2);
            if(!(var1 != var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var5.author;
            var6 = var2.id;
            var7 = _closure1_slot4;
            var2 = var7.getId;
            var2 = var2.bind(var7)();
            if(!(var6 !== var2)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var11 = var5.content;
            var6 = var11;
            var7 = undefined;
            var2 = undefined;
            var10 = var11.indexOf;
            var9 = '__CLIP_METADATA__';
            var10 = var10.bind(var11)(var9);
            var7 = var10;
            var9 = -1;
            if(!(var9 !== var10)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = var7;
            var7 = 17;
            var9 = var9 + var7;
            var7 = var6;
            var6 = var7.substring;
            var2 = var6.bind(var7)(var9);
case 12: // try_start_0
            var6 = global;
            var7 = var6.JSON;
            var6 = var7.parse;
            var6 = var6.bind(var7)(var2);
            var2 = {};
            var7 = var6.id;
            var2['clipId'] = var7;
            var6 = var6.remoteTriggerClipId;
            var2['remoteTriggerClipId'] = var6;
case 13: // try_end0
            _fun0001_ip = 14; continue _fun0001;
case 15: // catch_target0
            CatchBlockStart(arg_register=5);
            var2 = {};
            _fun0001_ip = 14; continue _fun0001;
case 10:
            var2 = {};
case 14:
            var9 = var2.clipId;
            var7 = var2.remoteTriggerClipId;
            if(!(var1 == var9)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            if(!(var1 != var7)) { _fun0001_ip = 18; continue _fun0001 }
case 16:
            var6 = _closure1_slot3;
            var2 = var6.getMatchingGroupClip;
            var6 = var2.bind(var6)(var9, var7);
            var7 = var1 == var6;
            var2 = null;
            if(var7) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var10 = _closure1_slot3;
            var9 = var10.wasClipSharedInChannel;
            var7 = var6.id;
            var6 = var4.id;
            var6 = var9.bind(var10)(var7, var6);
            var2 = null;
            if(var6) { _fun0001_ip = 19; continue _fun0001 }
case 21:
            var6 = var4.id;
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var4 = 3;
            var4 = var9[var4];
            var7 = var7.bind(var8)(var4);
            var4 = {'channelId': null, 'type': 66, 'content': ''};
            var4['channelId'] = var6;
            var10 = var5.author;
            var4['author'] = var10;
            var10 = _closure1_slot7;
            var10 = var10.SENT;
            var4['state'] = var10;
            var7 = var7.bind(var8)(var4);
            var4 = _closure1_slot0;
            var3 = 4;
            var3 = var9[var3];
            var4 = var4.bind(var8)(var3);
            var3 = var4.createMessageRecord;
            var3 = var3.bind(var4)(var7);
            var4 = var5.timestamp;
            var3['timestamp'] = var4;
            var4 = {};
            var4['channel_id'] = var6;
            var5 = var5.id;
            var4['message_id'] = var5;
            var3['messageReference'] = var4;
            var2 = var3;
case 19:
            return var2;
case 18:
            return var1;
case 8:
            return var1;
case 6:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var7);
    var1 = 0;
    var7 = var6[var1];
    var1 = undefined;
    var7 = var8.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.MessageAttachmentFlags;
    var _closure1_slot5 = var8;
    var8 = var7.MessageFlags;
    var _closure1_slot6 = var8;
    var8 = var7.MessageStates;
    var _closure1_slot7 = var8;
    var7 = var7.MessageTypes;
    var _closure1_slot8 = var7;
    var4 = var4.Map;
    var7 = var4.prototype;
    var7 = Object.create(var7, {constructor: {value: var4}});
    var14 = var7;
    var4 = new var14[var4](var13);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot9 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/tryInjectMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function tryCreateInjectedMessage(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var4 = _closure1_slot9;
            var2 = var4.get;
            var1 = var5.id;
            var2 = var2.bind(var4)(var1);
            var1 = var6.id;
            if(!(var2 !== var1)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var1 = var6.applicationId;
            var10 = null;
            var1 = var10 == var1;
            var2 = null;
            if(var1) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var11 = 5;
            var1 = var1[var11];
            var8 = undefined;
            var9 = var4.bind(var8)(var1);
            var7 = var9.hasFlag;
            var4 = var6.flags;
            var1 = _closure1_slot6;
            var1 = var1.SENT_BY_SOCIAL_LAYER_INTEGRATION;
            var1 = var7.bind(var9)(var4, var1);
            var2 = null;
            if(!var1) { _fun0003_ip = 24; continue _fun0003 }
case 26:
            var1 = var5.isDM;
            var1 = var1.bind(var5)();
            var2 = null;
            if(!var1) { _fun0003_ip = 24; continue _fun0003 }
case 27:
            var1 = var6.author;
            var4 = var1.id;
            var7 = _closure1_slot4;
            var1 = var7.getId;
            var1 = var1.bind(var7)();
            var2 = null;
            if(!(var4 !== var1)) { _fun0003_ip = 24; continue _fun0003 }
case 28:
            var1 = var6.activity;
            var1 = var10 != var1;
            var2 = null;
            if(var1) { _fun0003_ip = 24; continue _fun0003 }
case 29:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var11];
            var13 = var4.bind(var8)(var1);
            var9 = var13.hasFlag;
            var1 = var5.recipientFlags;
            var4 = var10 != var1;
            var7 = 0;
            if(!var4) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var7 = var1;
case 30:
            var14 = _closure1_slot0;
            var1 = _closure1_slot2;
            var4 = 6;
            var1 = var1[var4];
            var1 = var14.bind(var8)(var1);
            var1 = var1.ChannelRecipientPrivateUserDataFlags;
            var1 = var1.DISMISSED_IN_GAME_MESSAGE_NUX;
            var1 = var9.bind(var13)(var7, var1);
            var2 = null;
            if(var1) { _fun0003_ip = 24; continue _fun0003 }
case 32:
            var9 = _closure1_slot9;
            var7 = var9.has;
            var1 = var5.id;
            var1 = var7.bind(var9)(var1);
            var2 = null;
            if(var1) { _fun0003_ip = 24; continue _fun0003 }
case 33:
            var7 = _closure1_slot10;
            var1 = var5.id;
            var1 = var7.bind(var8)(var6, var1);
            var14 = _closure1_slot9;
            var13 = var14.set;
            var9 = var5.id;
            var7 = var6.id;
            var7 = var13.bind(var14)(var9, var7);
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var11];
            var11 = var9.bind(var8)(var7);
            var9 = var11.setFlag;
            var7 = var5.recipientFlags;
            var10 = var10 != var7;
            var12 = 0;
            if(!var10) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var12 = var7;
case 34:
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = var10[var4];
            var4 = var7.bind(var8)(var4);
            var4 = var4.ChannelRecipientPrivateUserDataFlags;
            var7 = var4.DISMISSED_IN_GAME_MESSAGE_NUX;
            var4 = true;
            var9 = var9.bind(var11)(var12, var7, var4);
            var7 = _closure1_slot1;
            var4 = 7;
            var4 = var10[var4];
            var8 = var7.bind(var8)(var4);
            var7 = var8.updatePrivateChannelRecipientFlags;
            var4 = var5.id;
            var4 = var7.bind(var8)(var4, var9);
            var2 = var1;
            _fun0003_ip = 24; continue _fun0003;
case 22:
            var7 = _closure1_slot10;
            var4 = var5.id;
            var1 = undefined;
            var2 = var7.bind(var1)(var6, var4);
case 24:
            var1 = null;
            if(!(var1 == var2)) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var4 = _closure1_slot11;
            var3 = undefined;
            var4 = var4.bind(var3)(var6, var5);
            var3 = var1 != var4;
            var1 = null;
            if(!var3) { _fun0003_ip = 38; continue _fun0003 }
case 39:
            var3 = {};
            var3['message'] = var4;
            var4 = 'after';
            var3['position'] = var4;
            var1 = var3;
case 38:
            return var1;
case 36:
            var1 = {};
            var1['message'] = var2;
            var2 = 'before';
            var1['position'] = var2;
            return var1;
        }
    };
    var3['tryCreateInjectedMessage'] = var2;
    return var1;
})();