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
            var11 = arg1;
            var16 = var11.channelId;
            var17 = var11.content;
            var10 = var11.tts;
            var22 = undefined;
            if(!(var10 === var22)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = false;
case 2:
            var18 = var11.type;
            if(!(var18 === var22)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = _closure1_slot8;
            var18 = var1.DEFAULT;
case 4:
            var9 = var11.messageReference;
            var1 = var11.allowedMentions;
            var19 = var11.author;
            var8 = var11.flags;
            var7 = var11.nonce;
            var6 = var11.poll;
            var5 = var11.sharedCustomTheme;
            var4 = var11.changelogId;
            var3 = var11.giftingPrompt;
            var2 = var11.boostingPrompt;
            var11 = var11.state;
            var15 = new Array(0);
            var13 = _closure1_slot8;
            var13 = var13.REPLY;
            if(!(var18 === var13)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var14 = _closure1_slot1;
            var20 = _closure1_slot2;
            var13 = 4;
            var13 = var20[var13];
            var21 = var14.bind(var22)(var13);
            var13 = null;
            var20 = var13 != var9;
            var14 = 'Replies must have a message reference';
            var14 = var21.bind(var22)(var20, var14);
            if(!(var13 != var1)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = var1.replied_user;
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var14 = _closure1_slot3;
            var1 = var14.getMessageByReference;
            var1 = var1.bind(var14)(var9);
            var13 = var13 == var1;
            var14 = undefined;
            if(var13) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var14 = var1.state;
case 10:
            var13 = _closure1_slot4;
            var13 = var13.LOADED;
            if(!(var14 === var13)) { _fun0001_ip = 6; continue _fun0001 }
case 12:
            var13 = var15.push;
            var14 = _closure1_slot12;
            var1 = var1.message;
            var1 = var1.author;
            var1 = var14.bind(var22)(var1);
            var1 = var13.bind(var15)(var1);
case 6:
            var13 = null;
            if(!(var13 == var19)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var14 = _closure1_slot6;
            var1 = var14.getCurrentUser;
            var19 = var1.bind(var14)();
case 13:
            var1 = _closure1_slot5;
            var1 = var19 instanceof var1;
            var14 = var19;
            if(!var1) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var1 = _closure1_slot12;
            var14 = var1.bind(var22)(var19);
case 15:
            var19 = _closure1_slot1;
            var20 = _closure1_slot2;
            var1 = 4;
            var1 = var20[var1];
            var20 = var19.bind(var22)(var1);
            var19 = var13 != var14;
            var1 = 'createMessage: author cannot be undefined';
            var1 = var20.bind(var22)(var19, var1);
            var1 = {};
            var19 = var7;
            if(!(var13 == var19)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var21 = _closure1_slot0;
            var23 = _closure1_slot2;
            var20 = 5;
            var20 = var23[var20];
            var21 = var21.bind(var22)(var20);
            var20 = var21.createNonce;
            var19 = var20.bind(var21)();
case 17:
            var1['id'] = var19;
            var1['type'] = var18;
            var1['content'] = var17;
            var1['channel_id'] = var16;
            var1['author'] = var14;
            var14 = new Array(0);
            var1['attachments'] = var14;
            var14 = new Array(0);
            var1['embeds'] = var14;
            var14 = false;
            var1['pinned'] = var14;
            var1['mentions'] = var15;
            var15 = new Array(0);
            var1['mention_channels'] = var15;
            var15 = new Array(0);
            var1['mention_roles'] = var15;
            var1['mention_everyone'] = var14;
            var14 = global;
            var14 = var14.Date;
            var15 = var14.prototype;
            var15 = Object.create(var15, {constructor: {value: var14}});
            var26 = var15;
            var14 = new var26[var14](var25);
            var15 = var14 instanceof Object ? var14 : var15;
            var14 = var15.toISOString;
            var14 = var14.bind(var15)();
            var1['timestamp'] = var14;
            if(!(var13 == var11)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var12 = _closure1_slot7;
            var11 = var12.SENDING;
case 19:
            var1['state'] = var11;
            var1['tts'] = var10;
            var1['message_reference'] = var9;
            var9 = new Array(0);
            var1['message_snapshots'] = var9;
            var1['flags'] = var8;
            var1['nonce'] = var7;
            var1['poll'] = var6;
            var1['shared_client_theme'] = var5;
            var1['changelog_id'] = var4;
            var1['gifting_prompt'] = var3;
            var1['boosting_prompt'] = var2;
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