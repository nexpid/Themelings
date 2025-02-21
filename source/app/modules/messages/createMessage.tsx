// app/modules/messages/createMessage.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    tangon = function(argFoo) { // Original name: userRecordToServer
        entity = argFoo;
        golfie = entity.id;
        oscard = entity.username;
        report = entity.avatar;
        tangon = entity.discriminator;
        zuuluu = entity.bot;
        michal = entity.globalName;
        entity = {};
        entity['id'] = golfie;
        entity['username'] = oscard;
        entity['avatar'] = report;
        entity['discriminator'] = tangon;
        entity['bot'] = zuuluu;
        entity['global_name'] = michal;
        return entity;
    };
    var _closure1_slot12 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    report = 0;
    verify = golfie[report];
    entity = undefined;
    verify = option.bind(entity)(verify);
    var _closure1_slot3 = verify;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.ReferencedMessageState;
    var _closure1_slot4 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 3;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.MessageStates;
    var _closure1_slot7 = option;
    option = report.MessageTypes;
    var _closure1_slot8 = option;
    option = report.LOCAL_BOT_ID;
    var _closure1_slot9 = option;
    option = report.NON_USER_BOT_DISCRIMINATOR;
    var _closure1_slot10 = option;
    report = report.MessageFlags;
    var _closure1_slot11 = report;
    report = 6;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/messages/createMessage.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo) { // Original name: createMessage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            verify = argFoo;
            foxtra = verify.channelId;
            backup = verify.content;
            option = verify.tts;
            echoed = undefined;
            if(!(option === echoed)) { _fun00002_ip = 27; continue _fun00001 }
 25:
            option = false;
 27:
            kiloes = verify.type;
            if(!(kiloes === echoed)) { _fun00002_ip = 49; continue _fun00001 }
 36:
            entity = _closure1_slot8;
            kiloes = entity.DEFAULT;
 49:
            golfie = verify.messageReference;
            entity = verify.allowedMentions;
            sizing = verify.author;
            oscard = verify.flags;
            report = verify.nonce;
            tangon = verify.poll;
            zuuluu = verify.changelogId;
            michal = verify.giftingPrompt;
            verify = verify.state;
            romeon = new Array(0);
            yankee = _closure1_slot8;
            yankee = yankee.REPLY;
            if(!(kiloes === yankee)) { _fun00002_ip = 249; continue _fun00001 }
 125:
            output = _closure1_slot1;
            result = _closure1_slot2;
            yankee = 4;
            yankee = result[yankee];
            update = output.bind(echoed)(yankee);
            yankee = null;
            result = yankee != golfie;
            output = 'Replies must have a message reference';
            output = update.bind(echoed)(result, output);
            if(!(yankee != entity)) { _fun00002_ip = 176; continue _fun00001 }
 167:
            entity = entity.replied_user;
            if(!entity) { _fun00002_ip = 249; continue _fun00001 }
 176:
            output = _closure1_slot3;
            entity = output.getMessageByReference;
            entity = entity.bind(output)(golfie);
            yankee = yankee == entity;
            output = undefined;
            if(yankee) { _fun00002_ip = 205; continue _fun00001 }
 200:
            output = entity.state;
 205:
            yankee = _closure1_slot4;
            yankee = yankee.LOADED;
            if(!(output === yankee)) { _fun00002_ip = 249; continue _fun00001 }
 219:
            yankee = romeon.push;
            output = _closure1_slot12;
            entity = entity.message;
            entity = entity.author;
            entity = output.bind(echoed)(entity);
            entity = yankee.bind(romeon)(entity);
 249:
            output = null;
            if(!(output == sizing)) { _fun00002_ip = 268; continue _fun00001 }
 255:
            yankee = _closure1_slot6;
            entity = yankee.getCurrentUser;
            sizing = entity.bind(yankee)();
 268:
            entity = _closure1_slot5;
            entity = sizing instanceof entity;
            yankee = sizing;
            if(!entity) { _fun00002_ip = 291; continue _fun00001 }
 282:
            entity = _closure1_slot12;
            yankee = entity.bind(echoed)(sizing);
 291:
            sizing = _closure1_slot1;
            result = _closure1_slot2;
            entity = 4;
            entity = result[entity];
            result = sizing.bind(echoed)(entity);
            sizing = output != yankee;
            entity = 'createMessage: author cannot be undefined';
            entity = result.bind(echoed)(sizing, entity);
            entity = {};
            sizing = report;
            if(!(output == sizing)) { _fun00002_ip = 366; continue _fun00001 }
 336:
            result = _closure1_slot0;
            update = _closure1_slot2;
            output = 5;
            output = update[output];
            result = result.bind(echoed)(output);
            output = result.createNonce;
            sizing = output.bind(result)();
 366:
            entity['id'] = sizing;
            entity['type'] = kiloes;
            entity['content'] = backup;
            entity['channel_id'] = foxtra;
            entity['author'] = yankee;
            yankee = new Array(0);
            entity['attachments'] = yankee;
            yankee = new Array(0);
            entity['embeds'] = yankee;
            yankee = false;
            entity['pinned'] = yankee;
            entity['mentions'] = romeon;
            romeon = new Array(0);
            entity['mention_channels'] = romeon;
            romeon = new Array(0);
            entity['mention_roles'] = romeon;
            entity['mention_everyone'] = yankee;
            yankee = global;
            yankee = yankee.Date;
            romeon = yankee.prototype;
            romeon = Object.create(romeon, {constructor: {value: yankee}});
            vacuum = romeon;
            yankee = new vacuum[yankee](ctrled);
            romeon = yankee instanceof Object ? yankee : romeon;
            yankee = romeon.toISOString;
            yankee = yankee.bind(romeon)();
            entity['timestamp'] = yankee;
            if(verify) { _fun00002_ip = 496; continue _fun00001 }
 486:
            offset = _closure1_slot7;
            verify = offset.SENDING;
 496:
            entity['state'] = verify;
            entity['tts'] = option;
            entity['message_reference'] = golfie;
            golfie = new Array(0);
            entity['message_snapshots'] = golfie;
            entity['flags'] = oscard;
            entity['nonce'] = report;
            entity['poll'] = tangon;
            entity['changelog_id'] = zuuluu;
            entity['gifting_prompt'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = report;
    zuuluu['userRecordToServer'] = tangon;
    michal = function(argFoo) { // Original name: createBotMessage
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            tangon = entity.messageId;
            oscard = entity.channelId;
            golfie = entity.content;
            zuuluu = entity.embeds;
            michal = entity.loggingName;
            entity = {};
            report = null;
            if(!(report == tangon)) { _fun00004_ip = 73; continue _fun00003 }
 38:
            offset = _closure1_slot0;
            verify = _closure1_slot2;
            option = 5;
            verify = verify[option];
            option = undefined;
            verify = offset.bind(option)(verify);
            option = verify.createNonce;
            tangon = option.bind(verify)();
 73:
            entity['id'] = tangon;
            option = _closure1_slot8;
            option = option.DEFAULT;
            entity['type'] = option;
            option = _closure1_slot11;
            option = option.EPHEMERAL;
            entity['flags'] = option;
            entity['content'] = golfie;
            entity['channel_id'] = oscard;
            oscard = {'id': null, 'username': 'Clyde', 'discriminator': null, 'avatar': 'clyde', 'bot': true};
            golfie = _closure1_slot9;
            oscard['id'] = golfie;
            golfie = _closure1_slot10;
            oscard['discriminator'] = golfie;
            entity['author'] = oscard;
            oscard = new Array(0);
            entity['attachments'] = oscard;
            if(!(report == zuuluu)) { _fun00004_ip = 168; continue _fun00003 }
 164:
            zuuluu = new Array(0);
 168:
            entity['embeds'] = zuuluu;
            zuuluu = false;
            entity['pinned'] = zuuluu;
            report = new Array(0);
            entity['mentions'] = report;
            report = new Array(0);
            entity['mention_channels'] = report;
            report = new Array(0);
            entity['mention_roles'] = report;
            entity['mention_everyone'] = zuuluu;
            report = global;
            report = report.Date;
            oscard = report.prototype;
            oscard = Object.create(oscard, {constructor: {value: report}});
            romeon = oscard;
            report = new romeon[report](yankee);
            oscard = report instanceof Object ? report : oscard;
            report = oscard.toISOString;
            report = report.bind(oscard)();
            entity['timestamp'] = report;
            tangon = _closure1_slot7;
            tangon = tangon.SENT;
            entity['state'] = tangon;
            entity['tts'] = zuuluu;
            entity['loggingName'] = michal;
            return entity;
        }
    };
    zuuluu['createBotMessage'] = michal;
    return entity;
})();