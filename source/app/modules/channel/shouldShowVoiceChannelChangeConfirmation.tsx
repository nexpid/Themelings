// app/modules/channel/shouldShowVoiceChannelChangeConfirmation.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = report[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot1 = tangon;
    tangon = 2;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 3;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 4;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 5;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/channel/shouldShowVoiceChannelChangeConfirmation.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: shouldShowVoiceChannelChangeConfirmation
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            entity = _closure1_slot1;
            entity = entity.disableVoiceChannelChangeAlert;
            if(entity) { _fun00002_ip = 196; continue _fun00001 }
 22:
            michal = _closure1_slot0;
            entity = michal.getRemoteSessionId;
            report = entity.bind(michal)();
            tangon = _closure1_slot4;
            michal = tangon.getVoiceStateForSession;
            golfie = _closure1_slot2;
            entity = golfie.getId;
            entity = entity.bind(golfie)();
            entity = michal.bind(tangon)(entity, report);
            tangon = null;
            if(!(tangon == entity)) { _fun00002_ip = 192; continue _fun00001 }
 72:
            michal = _closure1_slot4;
            entity = michal.isCurrentClientInVoiceChannel;
            entity = entity.bind(michal)();
            if(entity) { _fun00002_ip = 93; continue _fun00001 }
 89:
            entity = false;
            return entity;
 93:
            report = _closure1_slot4;
            michal = report.isInChannel;
            entity = oscard.id;
            entity = michal.bind(report)(entity);
            if(entity) { _fun00002_ip = 188; continue _fun00001 }
 116:
            report = _closure1_slot3;
            michal = report.getGuild;
            entity = oscard.getGuildId;
            entity = entity.bind(oscard)();
            michal = michal.bind(report)(entity);
            report = tangon == michal;
            entity = undefined;
            if(report) { _fun00002_ip = 155; continue _fun00001 }
 149:
            entity = michal.afkChannelId;
 155:
            entity = tangon == entity;
            if(entity) { _fun00002_ip = 186; continue _fun00001 }
 162:
            tangon = _closure1_slot4;
            zuuluu = tangon.isInChannel;
            michal = michal.afkChannelId;
            michal = zuuluu.bind(tangon)(michal);
            entity = !michal;
 186:
            return entity;
 188:
            entity = false;
            return entity;
 192:
            entity = false;
            return entity;
 196:
            entity = false;
            return entity;
        }
    };
    zuuluu['shouldShowVoiceChannelChangeConfirmation'] = michal;
    return entity;
})();