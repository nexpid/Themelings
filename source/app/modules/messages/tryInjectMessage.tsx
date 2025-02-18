// app/modules/messages/tryInjectMessage.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: createInjectedInGameNuxMessage
        michal = argFoo;
        tangon = _closure1_slot1;
        oscard = _closure1_slot2;
        zuuluu = 3;
        zuuluu = oscard[zuuluu];
        report = undefined;
        tangon = tangon.bind(report)(zuuluu);
        zuuluu = {};
        golfie = argBar;
        zuuluu['channelId'] = golfie;
        golfie = _closure1_slot8;
        golfie = golfie.IN_GAME_MESSAGE_NUX;
        zuuluu['type'] = golfie;
        golfie = '';
        zuuluu['content'] = golfie;
        golfie = michal.author;
        zuuluu['author'] = golfie;
        golfie = _closure1_slot6;
        golfie = golfie.EPHEMERAL;
        zuuluu['flags'] = golfie;
        golfie = _closure1_slot7;
        golfie = golfie.SENT;
        zuuluu['state'] = golfie;
        tangon = tangon.bind(report)(zuuluu);
        zuuluu = _closure1_slot0;
        entity = 4;
        entity = oscard[entity];
        zuuluu = zuuluu.bind(report)(entity);
        entity = zuuluu.createMessageRecord;
        entity = entity.bind(zuuluu)(tangon);
        zuuluu = michal.applicationId;
        entity['applicationId'] = zuuluu;
        michal = michal.timestamp;
        entity['timestamp'] = michal;
        return entity;
    };
    var _closure1_slot10 = entity;
    tangon = global;
    offset = tangon.Object;
    verify = offset.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, golfie);
    entity = 0;
    golfie = oscard[entity];
    entity = undefined;
    golfie = option.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    golfie = 1;
    golfie = oscard[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    golfie = 2;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    option = golfie.ApplicationFlags;
    var _closure1_slot5 = option;
    option = golfie.MessageFlags;
    var _closure1_slot6 = option;
    option = golfie.MessageStates;
    var _closure1_slot7 = option;
    golfie = golfie.MessageTypes;
    var _closure1_slot8 = golfie;
    tangon = tangon.Map;
    golfie = tangon.prototype;
    golfie = Object.create(golfie, {constructor: {value: tangon}});
    backup = golfie;
    tangon = new backup[tangon](foxtra);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot9 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/tryInjectMessage.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: tryCreateInjectedMessage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            entity = argBar;
            oscard = _closure1_slot9;
            tangon = oscard.get;
            michal = entity.id;
            tangon = tangon.bind(oscard)(michal);
            michal = report.id;
            if(!(tangon !== michal)) { _fun00002_ip = 471; continue _fun00001 }
 40:
            michal = report.applicationId;
            offset = null;
            tangon = offset == michal;
            michal = null;
            if(tangon) { _fun00002_ip = 488; continue _fun00001 }
 59:
            tangon = entity.isDM;
            tangon = tangon.bind(entity)();
            michal = null;
            if(!tangon) { _fun00002_ip = 488; continue _fun00001 }
 77:
            tangon = report.author;
            oscard = tangon.id;
            golfie = _closure1_slot4;
            tangon = golfie.getId;
            tangon = tangon.bind(golfie)();
            michal = null;
            if(!(oscard !== tangon)) { _fun00002_ip = 488; continue _fun00001 }
 111:
            oscard = _closure1_slot0;
            tangon = _closure1_slot2;
            yankee = 5;
            tangon = tangon[yankee];
            option = undefined;
            foxtra = oscard.bind(option)(tangon);
            verify = foxtra.hasFlag;
            tangon = entity.recipientFlags;
            oscard = offset != tangon;
            golfie = 0;
            if(!oscard) { _fun00002_ip = 157; continue _fun00001 }
 154:
            golfie = tangon;
 157:
            backup = _closure1_slot0;
            tangon = _closure1_slot2;
            oscard = 6;
            tangon = tangon[oscard];
            tangon = backup.bind(option)(tangon);
            tangon = tangon.ChannelRecipientPrivateUserDataFlags;
            tangon = tangon.DISMISSED_IN_GAME_MESSAGE_NUX;
            tangon = verify.bind(foxtra)(golfie, tangon);
            michal = null;
            if(tangon) { _fun00002_ip = 488; continue _fun00001 }
 203:
            verify = _closure1_slot9;
            golfie = verify.has;
            tangon = entity.id;
            tangon = golfie.bind(verify)(tangon);
            michal = null;
            if(tangon) { _fun00002_ip = 488; continue _fun00001 }
 230:
            verify = _closure1_slot3;
            golfie = verify.getApplication;
            tangon = report.applicationId;
            tangon = golfie.bind(verify)(tangon);
            golfie = offset == tangon;
            michal = null;
            if(golfie) { _fun00002_ip = 488; continue _fun00001 }
 262:
            verify = _closure1_slot0;
            golfie = _closure1_slot2;
            golfie = golfie[yankee];
            foxtra = verify.bind(option)(golfie);
            verify = foxtra.hasFlag;
            golfie = tangon.flags;
            tangon = _closure1_slot5;
            tangon = tangon.SOCIAL_LAYER_INTEGRATION;
            tangon = verify.bind(foxtra)(golfie, tangon);
            michal = null;
            if(!tangon) { _fun00002_ip = 488; continue _fun00001 }
 314:
            golfie = _closure1_slot10;
            tangon = entity.id;
            tangon = golfie.bind(option)(report, tangon);
            backup = _closure1_slot9;
            foxtra = backup.set;
            verify = entity.id;
            golfie = report.id;
            golfie = foxtra.bind(backup)(verify, golfie);
            verify = _closure1_slot0;
            golfie = _closure1_slot2;
            golfie = golfie[yankee];
            yankee = verify.bind(option)(golfie);
            verify = yankee.setFlag;
            golfie = entity.recipientFlags;
            offset = offset != golfie;
            romeon = 0;
            if(!offset) { _fun00002_ip = 395; continue _fun00001 }
 392:
            romeon = golfie;
 395:
            golfie = _closure1_slot0;
            offset = _closure1_slot2;
            oscard = offset[oscard];
            oscard = golfie.bind(option)(oscard);
            oscard = oscard.ChannelRecipientPrivateUserDataFlags;
            golfie = oscard.DISMISSED_IN_GAME_MESSAGE_NUX;
            oscard = true;
            verify = verify.bind(yankee)(romeon, golfie, oscard);
            golfie = _closure1_slot1;
            oscard = 7;
            oscard = offset[oscard];
            option = golfie.bind(option)(oscard);
            golfie = option.updatePrivateChannelRecipientFlags;
            oscard = entity.id;
            oscard = golfie.bind(option)(oscard, verify);
            michal = tangon;
            _fun00002_ip = 488; continue _fun00001;
 471:
            tangon = _closure1_slot10;
            zuuluu = entity.id;
            entity = undefined;
            michal = tangon.bind(entity)(report, zuuluu);
 488:
            entity = null;
            zuuluu = entity != michal;
            if(!zuuluu) { _fun00002_ip = 500; continue _fun00001 }
 497:
            entity = michal;
 500:
            return entity;
        }
    };
    zuuluu['tryCreateInjectedMessage'] = michal;
    return entity;
})();