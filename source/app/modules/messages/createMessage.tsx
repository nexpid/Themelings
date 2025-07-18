// app/modules/messages/createMessage.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
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
 0:
            var9 = arg1;
            var13 = var9.channelId;
            var14 = var9.content;
            var8 = var9.tts;
            var19 = undefined;
            if(!(var8 === var19)) { _fun0001_ip = 27; continue _fun0001 }
 25:
            var8 = false;
 27:
            var15 = var9.type;
            if(!(var15 === var19)) { _fun0001_ip = 49; continue _fun0001 }
 36:
            var1 = _closure1_slot8;
            var15 = var1.DEFAULT;
 49:
            var7 = var9.messageReference;
            var1 = var9.allowedMentions;
            var16 = var9.author;
            var6 = var9.flags;
            var5 = var9.nonce;
            var4 = var9.poll;
            var3 = var9.changelogId;
            var2 = var9.giftingPrompt;
            var9 = var9.state;
            var12 = new Array(0);
            var11 = _closure1_slot8;
            var11 = var11.REPLY;
            if(!(var15 === var11)) { _fun0001_ip = 249; continue _fun0001 }
 125:
            var17 = _closure1_slot1;
            var18 = _closure1_slot2;
            var11 = 4;
            var11 = var18[var11];
            var20 = var17.bind(var19)(var11);
            var11 = null;
            var18 = var11 != var7;
            var17 = 'Replies must have a message reference';
            var17 = var20.bind(var19)(var18, var17);
            if(!(var11 != var1)) { _fun0001_ip = 176; continue _fun0001 }
 167:
            var1 = var1.replied_user;
            if(!var1) { _fun0001_ip = 249; continue _fun0001 }
 176:
            var17 = _closure1_slot3;
            var1 = var17.getMessageByReference;
            var1 = var1.bind(var17)(var7);
            var11 = var11 == var1;
            var17 = undefined;
            if(var11) { _fun0001_ip = 205; continue _fun0001 }
 200:
            var17 = var1.state;
 205:
            var11 = _closure1_slot4;
            var11 = var11.LOADED;
            if(!(var17 === var11)) { _fun0001_ip = 249; continue _fun0001 }
 219:
            var11 = var12.push;
            var17 = _closure1_slot12;
            var1 = var1.message;
            var1 = var1.author;
            var1 = var17.bind(var19)(var1);
            var1 = var11.bind(var12)(var1);
 249:
            var17 = null;
            if(!(var17 == var16)) { _fun0001_ip = 268; continue _fun0001 }
 255:
            var11 = _closure1_slot6;
            var1 = var11.getCurrentUser;
            var16 = var1.bind(var11)();
 268:
            var1 = _closure1_slot5;
            var1 = var16 instanceof var1;
            var11 = var16;
            if(!var1) { _fun0001_ip = 291; continue _fun0001 }
 282:
            var1 = _closure1_slot12;
            var11 = var1.bind(var19)(var16);
 291:
            var16 = _closure1_slot1;
            var18 = _closure1_slot2;
            var1 = 4;
            var1 = var18[var1];
            var18 = var16.bind(var19)(var1);
            var16 = var17 != var11;
            var1 = 'createMessage: author cannot be undefined';
            var1 = var18.bind(var19)(var16, var1);
            var1 = {};
            var16 = var5;
            if(!(var17 == var16)) { _fun0001_ip = 366; continue _fun0001 }
 336:
            var18 = _closure1_slot0;
            var20 = _closure1_slot2;
            var17 = 5;
            var17 = var20[var17];
            var18 = var18.bind(var19)(var17);
            var17 = var18.createNonce;
            var16 = var17.bind(var18)();
 366:
            var1['id'] = var16;
            var1['type'] = var15;
            var1['content'] = var14;
            var1['channel_id'] = var13;
            var1['author'] = var11;
            var11 = new Array(0);
            var1['attachments'] = var11;
            var11 = new Array(0);
            var1['embeds'] = var11;
            var11 = false;
            var1['pinned'] = var11;
            var1['mentions'] = var12;
            var12 = new Array(0);
            var1['mention_channels'] = var12;
            var12 = new Array(0);
            var1['mention_roles'] = var12;
            var1['mention_everyone'] = var11;
            var11 = global;
            var11 = var11.Date;
            var12 = var11.prototype;
            var12 = Object.create(var12, {constructor: {value: var11}});
            var23 = var12;
            var11 = new var23[var11](var22);
            var12 = var11 instanceof Object ? var11 : var12;
            var11 = var12.toISOString;
            var11 = var11.bind(var12)();
            var1['timestamp'] = var11;
            if(var9) { _fun0001_ip = 496; continue _fun0001 }
 486:
            var10 = _closure1_slot7;
            var9 = var10.SENDING;
 496:
            var1['state'] = var9;
            var1['tts'] = var8;
            var1['message_reference'] = var7;
            var7 = new Array(0);
            var1['message_snapshots'] = var7;
            var1['flags'] = var6;
            var1['nonce'] = var5;
            var1['poll'] = var4;
            var1['changelog_id'] = var3;
            var1['gifting_prompt'] = var2;
            return var1;
        }
    };
    var3['default'] = var5;
    var3['userRecordToServer'] = var4;
    var2 = function createBotMessage(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var4 = var1.messageId;
            var6 = var1.channelId;
            var7 = var1.content;
            var3 = var1.embeds;
            var2 = var1.loggingName;
            var1 = {};
            var5 = null;
            if(!(var5 == var4)) { _fun0002_ip = 73; continue _fun0002 }
 38:
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var8 = 5;
            var9 = var9[var8];
            var8 = undefined;
            var9 = var10.bind(var8)(var9);
            var8 = var9.createNonce;
            var4 = var8.bind(var9)();
 73:
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
            if(!(var5 == var3)) { _fun0002_ip = 172; continue _fun0002 }
 168:
            var3 = new Array(0);
 172:
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