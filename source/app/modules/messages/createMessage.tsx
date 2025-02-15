// app/modules/messages/createMessage.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    tango = function(argFoo) { // Original name: userRecordToServer
        entity = argFoo;
        golf = entity.id;
        oscar = entity.username;
        report = entity.avatar;
        tango = entity.discriminator;
        zulu = entity.bot;
        mike = entity.globalName;
        entity = {};
        entity['id'] = golf;
        entity['username'] = oscar;
        entity['avatar'] = report;
        entity['discriminator'] = tango;
        entity['bot'] = zulu;
        entity['global_name'] = mike;
        return entity;
    };
    var _closure1_slot12 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    report = 0;
    verify = golf[report];
    entity = undefined;
    verify = options.bind(entity)(verify);
    var _closure1_slot3 = verify;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.ReferencedMessageState;
    var _closure1_slot4 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 2;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 3;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.MessageStates;
    var _closure1_slot7 = options;
    options = report.MessageTypes;
    var _closure1_slot8 = options;
    options = report.LOCAL_BOT_ID;
    var _closure1_slot9 = options;
    options = report.NON_USER_BOT_DISCRIMINATOR;
    var _closure1_slot10 = options;
    report = report.MessageFlags;
    var _closure1_slot11 = report;
    report = 6;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/messages/createMessage.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo) { // Original name: createMessage
        _fun71515: for(var _fun71515_ip = 0; ; ) switch(_fun71515_ip) {
 0:
            verify = argFoo;
            foxtrot = verify.channelId;
            backup = verify.content;
            options = verify.tts;
            echo = undefined;
            if(!(options === echo)) { _fun71515_ip = 27; continue _fun71515 }
 25:
            options = false;
 27:
            kilo = verify.type;
            if(!(kilo === echo)) { _fun71515_ip = 49; continue _fun71515 }
 36:
            entity = _closure1_slot8;
            kilo = entity.DEFAULT;
 49:
            golf = verify.messageReference;
            entity = verify.allowedMentions;
            sizing = verify.author;
            oscar = verify.flags;
            report = verify.nonce;
            tango = verify.poll;
            zulu = verify.changelogId;
            mike = verify.giftingPrompt;
            verify = verify.state;
            romeo = new Array(0);
            yankee = _closure1_slot8;
            yankee = yankee.REPLY;
            if(!(kilo === yankee)) { _fun71515_ip = 249; continue _fun71515 }
 125:
            output = _closure1_slot1;
            result = _closure1_slot2;
            yankee = 4;
            yankee = result[yankee];
            update = output.bind(echo)(yankee);
            yankee = null;
            result = yankee != golf;
            output = 'Replies must have a message reference';
            output = update.bind(echo)(result, output);
            if(!(yankee != entity)) { _fun71515_ip = 176; continue _fun71515 }
 167:
            entity = entity.replied_user;
            if(!entity) { _fun71515_ip = 249; continue _fun71515 }
 176:
            output = _closure1_slot3;
            entity = output.getMessageByReference;
            entity = entity.bind(output)(golf);
            yankee = yankee == entity;
            output = undefined;
            if(yankee) { _fun71515_ip = 205; continue _fun71515 }
 200:
            output = entity.state;
 205:
            yankee = _closure1_slot4;
            yankee = yankee.LOADED;
            if(!(output === yankee)) { _fun71515_ip = 249; continue _fun71515 }
 219:
            yankee = romeo.push;
            output = _closure1_slot12;
            entity = entity.message;
            entity = entity.author;
            entity = output.bind(echo)(entity);
            entity = yankee.bind(romeo)(entity);
 249:
            output = null;
            if(!(output == sizing)) { _fun71515_ip = 268; continue _fun71515 }
 255:
            yankee = _closure1_slot6;
            entity = yankee.getCurrentUser;
            sizing = entity.bind(yankee)();
 268:
            entity = _closure1_slot5;
            entity = sizing instanceof entity;
            yankee = sizing;
            if(!entity) { _fun71515_ip = 291; continue _fun71515 }
 282:
            entity = _closure1_slot12;
            yankee = entity.bind(echo)(sizing);
 291:
            sizing = _closure1_slot1;
            result = _closure1_slot2;
            entity = 4;
            entity = result[entity];
            result = sizing.bind(echo)(entity);
            sizing = output != yankee;
            entity = 'createMessage: author cannot be undefined';
            entity = result.bind(echo)(sizing, entity);
            entity = {};
            sizing = report;
            if(!(output == sizing)) { _fun71515_ip = 366; continue _fun71515 }
 336:
            result = _closure1_slot0;
            update = _closure1_slot2;
            output = 5;
            output = update[output];
            result = result.bind(echo)(output);
            output = result.createNonce;
            sizing = output.bind(result)();
 366:
            entity['id'] = sizing;
            entity['type'] = kilo;
            entity['content'] = backup;
            entity['channel_id'] = foxtrot;
            entity['author'] = yankee;
            yankee = new Array(0);
            entity['attachments'] = yankee;
            yankee = new Array(0);
            entity['embeds'] = yankee;
            yankee = false;
            entity['pinned'] = yankee;
            entity['mentions'] = romeo;
            romeo = new Array(0);
            entity['mention_channels'] = romeo;
            romeo = new Array(0);
            entity['mention_roles'] = romeo;
            entity['mention_everyone'] = yankee;
            yankee = global;
            yankee = yankee.Date;
            romeo = yankee.prototype;
            romeo = Object.create(romeo, {constructor: {value: yankee}});
            vacuum = romeo;
            yankee = new vacuum[yankee](control);
            romeo = yankee instanceof Object ? yankee : romeo;
            yankee = romeo.toISOString;
            yankee = yankee.bind(romeo)();
            entity['timestamp'] = yankee;
            if(verify) { _fun71515_ip = 496; continue _fun71515 }
 486:
            offset = _closure1_slot7;
            verify = offset.SENDING;
 496:
            entity['state'] = verify;
            entity['tts'] = options;
            entity['message_reference'] = golf;
            golf = new Array(0);
            entity['message_snapshots'] = golf;
            entity['flags'] = oscar;
            entity['nonce'] = report;
            entity['poll'] = tango;
            entity['changelog_id'] = zulu;
            entity['gifting_prompt'] = mike;
            return entity;
        }
    };
    zulu['default'] = report;
    zulu['userRecordToServer'] = tango;
    mike = function(argFoo) { // Original name: createBotMessage
        _fun71516: for(var _fun71516_ip = 0; ; ) switch(_fun71516_ip) {
 0:
            entity = argFoo;
            tango = entity.messageId;
            oscar = entity.channelId;
            golf = entity.content;
            zulu = entity.embeds;
            mike = entity.loggingName;
            entity = {};
            report = null;
            if(!(report == tango)) { _fun71516_ip = 73; continue _fun71516 }
 38:
            offset = _closure1_slot0;
            verify = _closure1_slot2;
            options = 5;
            verify = verify[options];
            options = undefined;
            verify = offset.bind(options)(verify);
            options = verify.createNonce;
            tango = options.bind(verify)();
 73:
            entity['id'] = tango;
            options = _closure1_slot8;
            options = options.DEFAULT;
            entity['type'] = options;
            options = _closure1_slot11;
            options = options.EPHEMERAL;
            entity['flags'] = options;
            entity['content'] = golf;
            entity['channel_id'] = oscar;
            oscar = {'id': null, 'username': 'Clyde', 'discriminator': null, 'avatar': 'clyde', 'bot': true};
            golf = _closure1_slot9;
            oscar['id'] = golf;
            golf = _closure1_slot10;
            oscar['discriminator'] = golf;
            entity['author'] = oscar;
            oscar = new Array(0);
            entity['attachments'] = oscar;
            if(!(report == zulu)) { _fun71516_ip = 168; continue _fun71516 }
 164:
            zulu = new Array(0);
 168:
            entity['embeds'] = zulu;
            zulu = false;
            entity['pinned'] = zulu;
            report = new Array(0);
            entity['mentions'] = report;
            report = new Array(0);
            entity['mention_channels'] = report;
            report = new Array(0);
            entity['mention_roles'] = report;
            entity['mention_everyone'] = zulu;
            report = global;
            report = report.Date;
            oscar = report.prototype;
            oscar = Object.create(oscar, {constructor: {value: report}});
            romeo = oscar;
            report = new romeo[report](yankee);
            oscar = report instanceof Object ? report : oscar;
            report = oscar.toISOString;
            report = report.bind(oscar)();
            entity['timestamp'] = report;
            tango = _closure1_slot7;
            tango = tango.SENT;
            entity['state'] = tango;
            entity['tts'] = zulu;
            entity['loggingName'] = mike;
            return entity;
        }
    };
    zulu['createBotMessage'] = mike;
    return entity;
})();