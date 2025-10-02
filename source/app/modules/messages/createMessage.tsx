// app/modules/messages/createMessage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function userRecordToServer(arg1) {
        var1 = arg1;
        var7 = var1.id;
        var6 = var1.username;
        var5 = var1.avatar;
        var4 = var1.discriminator;
        var3 = var1.bot;
        var2 = var1.globalName;
        var1 = {};
        var1['id'] = var7;
        var1['username'] = var6;
        var1['avatar'] = var5;
        var1['discriminator'] = var4;
        var1['bot'] = var3;
        var1['global_name'] = var2;
        return var1;
    };
    var _closure1_slot12 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var5 = 0;
    var9 = var7[var5];
    var1 = undefined;
    var9 = var8.bind(var1)(var9);
    var _closure1_slot3 = var9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ReferencedMessageState;
    var _closure1_slot4 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.MessageStates;
    var _closure1_slot7 = var8;
    var8 = var5.MessageTypes;
    var _closure1_slot8 = var8;
    var8 = var5.LOCAL_BOT_ID;
    var _closure1_slot9 = var8;
    var8 = var5.NON_USER_BOT_DISCRIMINATOR;
    var _closure1_slot10 = var8;
    var5 = var5.MessageFlags;
    var _closure1_slot11 = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/messages/createMessage.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function createMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var10 = arg1;
            var14 = var10.channelId;
            var15 = var10.content;
            var9 = var10.tts;
            var20 = undefined;
            if(!(var9 === var20)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = false;
case 2:
            var16 = var10.type;
            if(!(var16 === var20)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = _closure1_slot8;
            var16 = var1.DEFAULT;
case 4:
            var8 = var10.messageReference;
            var1 = var10.allowedMentions;
            var17 = var10.author;
            var7 = var10.flags;
            var6 = var10.nonce;
            var5 = var10.poll;
            var4 = var10.sharedCustomTheme;
            var3 = var10.changelogId;
            var2 = var10.giftingPrompt;
            var10 = var10.state;
            var13 = new Array(0);
            var12 = _closure1_slot8;
            var12 = var12.REPLY;
            if(!(var16 === var12)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var18 = _closure1_slot1;
            var19 = _closure1_slot2;
            var12 = 4;
            var12 = var19[var12];
            var21 = var18.bind(var20)(var12);
            var12 = null;
            var19 = var12 != var8;
            var18 = 'Replies must have a message reference';
            var18 = var21.bind(var20)(var19, var18);
            if(!(var12 != var1)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = var1.replied_user;
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var18 = _closure1_slot3;
            var1 = var18.getMessageByReference;
            var1 = var1.bind(var18)(var8);
            var12 = var12 == var1;
            var18 = undefined;
            if(var12) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var18 = var1.state;
case 10:
            var12 = _closure1_slot4;
            var12 = var12.LOADED;
            if(!(var18 === var12)) { _fun0001_ip = 6; continue _fun0001 }
case 12:
            var12 = var13.push;
            var18 = _closure1_slot12;
            var1 = var1.message;
            var1 = var1.author;
            var1 = var18.bind(var20)(var1);
            var1 = var12.bind(var13)(var1);
case 6:
            var18 = null;
            if(!(var18 == var17)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var12 = _closure1_slot6;
            var1 = var12.getCurrentUser;
            var17 = var1.bind(var12)();
case 13:
            var1 = _closure1_slot5;
            var1 = var17 instanceof var1;
            var12 = var17;
            if(!var1) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var1 = _closure1_slot12;
            var12 = var1.bind(var20)(var17);
case 15:
            var17 = _closure1_slot1;
            var19 = _closure1_slot2;
            var1 = 4;
            var1 = var19[var1];
            var19 = var17.bind(var20)(var1);
            var17 = var18 != var12;
            var1 = 'createMessage: author cannot be undefined';
            var1 = var19.bind(var20)(var17, var1);
            var1 = {};
            var17 = var6;
            if(!(var18 == var17)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var19 = _closure1_slot0;
            var21 = _closure1_slot2;
            var18 = 5;
            var18 = var21[var18];
            var19 = var19.bind(var20)(var18);
            var18 = var19.createNonce;
            var17 = var18.bind(var19)();
case 17:
            var1['id'] = var17;
            var1['type'] = var16;
            var1['content'] = var15;
            var1['channel_id'] = var14;
            var1['author'] = var12;
            var12 = new Array(0);
            var1['attachments'] = var12;
            var12 = new Array(0);
            var1['embeds'] = var12;
            var12 = false;
            var1['pinned'] = var12;
            var1['mentions'] = var13;
            var13 = new Array(0);
            var1['mention_channels'] = var13;
            var13 = new Array(0);
            var1['mention_roles'] = var13;
            var1['mention_everyone'] = var12;
            var12 = global;
            var12 = var12.Date;
            var13 = var12.prototype;
            var13 = Object.create(var13, {constructor: {value: var12}});
            var24 = var13;
            var12 = new var24[var12](var23);
            var13 = var12 instanceof Object ? var12 : var13;
            var12 = var13.toISOString;
            var12 = var12.bind(var13)();
            var1['timestamp'] = var12;
            if(var10) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var11 = _closure1_slot7;
            var10 = var11.SENDING;
case 19:
            var1['state'] = var10;
            var1['tts'] = var9;
            var1['message_reference'] = var8;
            var8 = new Array(0);
            var1['message_snapshots'] = var8;
            var1['flags'] = var7;
            var1['nonce'] = var6;
            var1['poll'] = var5;
            var1['shared_client_theme'] = var4;
            var1['changelog_id'] = var3;
            var1['gifting_prompt'] = var2;
            return var1;
        }
    };
    var3['default'] = var5;
    var3['userRecordToServer'] = var4;
    var2 = function createBotMessage(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var4 = var1.messageId;
            var6 = var1.channelId;
            var7 = var1.content;
            var3 = var1.embeds;
            var2 = var1.loggingName;
            var1 = {};
            var5 = null;
            if(!(var5 == var4)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var8 = 5;
            var9 = var9[var8];
            var8 = undefined;
            var9 = var10.bind(var8)(var9);
            var8 = var9.createNonce;
            var4 = var8.bind(var9)();
case 21:
            var1['id'] = var4;
            var8 = _closure1_slot8;
            var8 = var8.DEFAULT;
            var1['type'] = var8;
            var8 = _closure1_slot11;
            var8 = var8.EPHEMERAL;
            var1['flags'] = var8;
            var1['content'] = var7;
            var1['channel_id'] = var6;
            var6 = {'id': null, 'username': 'Clyde', 'discriminator': null, 'avatar': 'clyde', 'bot': true};
            var7 = _closure1_slot9;
            var6['id'] = var7;
            var7 = _closure1_slot10;
            var6['discriminator'] = var7;
            var1['author'] = var6;
            var6 = new Array(0);
            var1['attachments'] = var6;
            if(!(var5 == var3)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var3 = new Array(0);
case 23:
            var1['embeds'] = var3;
            var3 = false;
            var1['pinned'] = var3;
            var5 = new Array(0);
            var1['mentions'] = var5;
            var5 = new Array(0);
            var1['mention_channels'] = var5;
            var5 = new Array(0);
            var1['mention_roles'] = var5;
            var1['mention_everyone'] = var3;
            var5 = global;
            var5 = var5.Date;
            var6 = var5.prototype;
            var6 = Object.create(var6, {constructor: {value: var5}});
            var12 = var6;
            var5 = new var12[var5](var11);
            var6 = var5 instanceof Object ? var5 : var6;
            var5 = var6.toISOString;
            var5 = var5.bind(var6)();
            var1['timestamp'] = var5;
            var4 = _closure1_slot7;
            var4 = var4.SENT;
            var1['state'] = var4;
            var1['tts'] = var3;
            var1['loggingName'] = var2;
            return var1;
        }
    };
    var3['createBotMessage'] = var2;
    return var1;
})();