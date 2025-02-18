// app/modules/guild_scheduled_events/native/handleAcceptEventInstantInvite.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_scheduled_events/native/handleAcceptEventInstantInvite.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: handleAcceptEventInstantInvite
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 1;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.handleNSFWGuildInvite;
            zuuluu = zuuluu.bind(tangon)(oscard);
            if(zuuluu) { _fun00002_ip = 209; continue _fun00001 }
 47:
            tangon = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = 2;
            zuuluu = golfie[zuuluu];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.isGuildScheduledEventInviteEmbed;
            zuuluu = zuuluu.bind(tangon)(oscard);
            if(!zuuluu) { _fun00002_ip = 209; continue _fun00001 }
 84:
            zuuluu = oscard.code;
            tangon = null;
            if(!(tangon != zuuluu)) { _fun00002_ip = 209; continue _fun00001 }
 95:
            option = _closure1_slot3;
            golfie = option.getGuildScheduledEvent;
            verify = oscard.guild_scheduled_event;
            offset = tangon == verify;
            zuuluu = undefined;
            if(offset) { _fun00002_ip = 125; continue _fun00001 }
 120:
            zuuluu = verify.id;
 125:
            zuuluu = golfie.bind(option)(zuuluu);
            var _closure2_slot0 = zuuluu;
            if(!(tangon != zuuluu)) { _fun00002_ip = 209; continue _fun00001 }
 138:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 3;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.acceptInvite;
            michal = {};
            oscard = oscard.code;
            michal['inviteKey'] = oscard;
            oscard = {};
            golfie = 'Guild Scheduled Event Invite Button Embed';
            oscard['location'] = golfie;
            michal['context'] = oscard;
            report = function() { // Original name: callback
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 4;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.transitionToEventDetailsFromInvite;
                michal = _closure2_slot0;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            michal['callback'] = report;
            michal = zuuluu.bind(tangon)(michal);
 209:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();