// app/modules/messages/tryInjectMessage.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: createInjectedInGameNuxMessage
        mike = argFoo;
        tango = _closure1_slot1;
        oscar = _closure1_slot2;
        zulu = 3;
        zulu = oscar[zulu];
        report = undefined;
        tango = tango.bind(report)(zulu);
        zulu = {};
        golf = argBar;
        zulu['channelId'] = golf;
        golf = _closure1_slot8;
        golf = golf.IN_GAME_MESSAGE_NUX;
        zulu['type'] = golf;
        golf = '';
        zulu['content'] = golf;
        golf = mike.author;
        zulu['author'] = golf;
        golf = _closure1_slot6;
        golf = golf.EPHEMERAL;
        zulu['flags'] = golf;
        golf = _closure1_slot7;
        golf = golf.SENT;
        zulu['state'] = golf;
        tango = tango.bind(report)(zulu);
        zulu = _closure1_slot0;
        entity = 4;
        entity = oscar[entity];
        zulu = zulu.bind(report)(entity);
        entity = zulu.createMessageRecord;
        entity = entity.bind(zulu)(tango);
        zulu = mike.applicationId;
        entity['applicationId'] = zulu;
        mike = mike.timestamp;
        entity['timestamp'] = mike;
        return entity;
    };
    var _closure1_slot10 = entity;
    tango = global;
    offset = tango.Object;
    verify = offset.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, golf);
    entity = 0;
    golf = oscar[entity];
    entity = undefined;
    golf = options.bind(entity)(golf);
    var _closure1_slot3 = golf;
    golf = 1;
    golf = oscar[golf];
    golf = options.bind(entity)(golf);
    var _closure1_slot4 = golf;
    golf = 2;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    options = golf.ApplicationFlags;
    var _closure1_slot5 = options;
    options = golf.MessageFlags;
    var _closure1_slot6 = options;
    options = golf.MessageStates;
    var _closure1_slot7 = options;
    golf = golf.MessageTypes;
    var _closure1_slot8 = golf;
    tango = tango.Map;
    golf = tango.prototype;
    golf = Object.create(golf, {constructor: {value: tango}});
    backup = golf;
    tango = new backup[tango](foxtrot);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot9 = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/tryInjectMessage.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: tryCreateInjectedMessage
        _fun90032: for(var _fun90032_ip = 0; ; ) switch(_fun90032_ip) {
 0:
            report = argFoo;
            entity = argBar;
            oscar = _closure1_slot9;
            tango = oscar.get;
            mike = entity.id;
            tango = tango.bind(oscar)(mike);
            mike = report.id;
            if(!(tango !== mike)) { _fun90032_ip = 471; continue _fun90032 }
 40:
            mike = report.applicationId;
            offset = null;
            tango = offset == mike;
            mike = null;
            if(tango) { _fun90032_ip = 488; continue _fun90032 }
 59:
            tango = entity.isDM;
            tango = tango.bind(entity)();
            mike = null;
            if(!tango) { _fun90032_ip = 488; continue _fun90032 }
 77:
            tango = report.author;
            oscar = tango.id;
            golf = _closure1_slot4;
            tango = golf.getId;
            tango = tango.bind(golf)();
            mike = null;
            if(!(oscar !== tango)) { _fun90032_ip = 488; continue _fun90032 }
 111:
            oscar = _closure1_slot0;
            tango = _closure1_slot2;
            yankee = 5;
            tango = tango[yankee];
            options = undefined;
            foxtrot = oscar.bind(options)(tango);
            verify = foxtrot.hasFlag;
            tango = entity.recipientFlags;
            oscar = offset != tango;
            golf = 0;
            if(!oscar) { _fun90032_ip = 157; continue _fun90032 }
 154:
            golf = tango;
 157:
            backup = _closure1_slot0;
            tango = _closure1_slot2;
            oscar = 6;
            tango = tango[oscar];
            tango = backup.bind(options)(tango);
            tango = tango.ChannelRecipientPrivateUserDataFlags;
            tango = tango.DISMISSED_IN_GAME_MESSAGE_NUX;
            tango = verify.bind(foxtrot)(golf, tango);
            mike = null;
            if(tango) { _fun90032_ip = 488; continue _fun90032 }
 203:
            verify = _closure1_slot9;
            golf = verify.has;
            tango = entity.id;
            tango = golf.bind(verify)(tango);
            mike = null;
            if(tango) { _fun90032_ip = 488; continue _fun90032 }
 230:
            verify = _closure1_slot3;
            golf = verify.getApplication;
            tango = report.applicationId;
            tango = golf.bind(verify)(tango);
            golf = offset == tango;
            mike = null;
            if(golf) { _fun90032_ip = 488; continue _fun90032 }
 262:
            verify = _closure1_slot0;
            golf = _closure1_slot2;
            golf = golf[yankee];
            foxtrot = verify.bind(options)(golf);
            verify = foxtrot.hasFlag;
            golf = tango.flags;
            tango = _closure1_slot5;
            tango = tango.SOCIAL_LAYER_INTEGRATION;
            tango = verify.bind(foxtrot)(golf, tango);
            mike = null;
            if(!tango) { _fun90032_ip = 488; continue _fun90032 }
 314:
            golf = _closure1_slot10;
            tango = entity.id;
            tango = golf.bind(options)(report, tango);
            backup = _closure1_slot9;
            foxtrot = backup.set;
            verify = entity.id;
            golf = report.id;
            golf = foxtrot.bind(backup)(verify, golf);
            verify = _closure1_slot0;
            golf = _closure1_slot2;
            golf = golf[yankee];
            yankee = verify.bind(options)(golf);
            verify = yankee.setFlag;
            golf = entity.recipientFlags;
            offset = offset != golf;
            romeo = 0;
            if(!offset) { _fun90032_ip = 395; continue _fun90032 }
 392:
            romeo = golf;
 395:
            golf = _closure1_slot0;
            offset = _closure1_slot2;
            oscar = offset[oscar];
            oscar = golf.bind(options)(oscar);
            oscar = oscar.ChannelRecipientPrivateUserDataFlags;
            golf = oscar.DISMISSED_IN_GAME_MESSAGE_NUX;
            oscar = true;
            verify = verify.bind(yankee)(romeo, golf, oscar);
            golf = _closure1_slot1;
            oscar = 7;
            oscar = offset[oscar];
            options = golf.bind(options)(oscar);
            golf = options.updatePrivateChannelRecipientFlags;
            oscar = entity.id;
            oscar = golf.bind(options)(oscar, verify);
            mike = tango;
            _fun90032_ip = 488; continue _fun90032;
 471:
            tango = _closure1_slot10;
            zulu = entity.id;
            entity = undefined;
            mike = tango.bind(entity)(report, zulu);
 488:
            entity = null;
            zulu = entity != mike;
            if(!zulu) { _fun90032_ip = 500; continue _fun90032 }
 497:
            entity = mike;
 500:
            return entity;
        }
    };
    zulu['tryCreateInjectedMessage'] = mike;
    return entity;
})();