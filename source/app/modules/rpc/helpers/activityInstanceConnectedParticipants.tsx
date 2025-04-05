// app/modules/rpc/helpers/activityInstanceConnectedParticipants.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    tangon = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = tangon;
    var _closure1_slot2 = option;
    report = function() { // Original name: activityInstanceConnectedParticipants
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot3;
            zuuluu = tangon.getCurrentEmbeddedActivity;
            zuuluu = zuuluu.bind(tangon)();
            tangon = null;
            if(!(tangon != zuuluu)) { _fun00002_ip = 168; continue _fun00001 }
 28:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 3;
            tangon = golfie[entity];
            report = undefined;
            verify = oscard.bind(report)(tangon);
            option = verify.getEmbeddedActivityLocationGuildId;
            tangon = zuuluu.location;
            tangon = option.bind(verify)(tangon);
            var _closure2_slot0 = tangon;
            entity = golfie[entity];
            option = oscard.bind(report)(entity);
            tangon = option.getEmbeddedActivityLocationChannelId;
            entity = zuuluu.location;
            entity = tangon.bind(option)(entity);
            var _closure2_slot1 = entity;
            entity = {};
            tangon = global;
            option = tangon.Array;
            tangon = option.from;
            zuuluu = zuuluu.userIds;
            michal = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure1_slot4;
                    michal = zuuluu.getUser;
                    entity = argFoo;
                    oscard = michal.bind(zuuluu)(entity);
                    tangon = null;
                    if(!(tangon == oscard)) { _fun00004_ip = 31; continue _fun00003 }
 27:
                    entity = undefined;
                    return entity;
 31:
                    michal = _closure1_slot0;
                    option = _closure1_slot2;
                    entity = 4;
                    entity = option[entity];
                    zuuluu = undefined;
                    verify = michal.bind(zuuluu)(entity);
                    golfie = verify.getNickname;
                    michal = _closure2_slot0;
                    entity = _closure2_slot1;
                    michal = golfie.bind(verify)(michal, entity, oscard);
                    entity = {};
                    golfie = _closure1_slot1;
                    report = 5;
                    report = option[report];
                    report = golfie.bind(zuuluu)(report);
                    yankee = report.bind(zuuluu)(oscard);
                    romeon = entity;
                    report = copyDataProperties(romeon, yankee);
                    tangon = tangon != michal;
                    if(!tangon) { _fun00004_ip = 117; continue _fun00003 }
 114:
                    zuuluu = michal;
 117:
                    michal = 'nickname';
                    entity[michal] = zuuluu;
                    return entity;
                }
            };
            tangon = tangon.bind(option)(zuuluu, michal);
            zuuluu = tangon.filter;
            michal = 6;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.isNotNullish;
            michal = zuuluu.bind(tangon)(michal);
            entity['participants'] = michal;
            return entity;
 168:
            entity = {};
            michal = new Array(0);
            entity['participants'] = michal;
            return entity;
        }
    };
    var _closure1_slot5 = report;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, michal);
    entity = 0;
    michal = option[entity];
    entity = undefined;
    michal = tangon.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = option[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = option[michal];
    michal = golfie.bind(entity)(michal);
    offset = michal.RPC_AUTHENTICATED_SCOPE;
    michal = michal.RPC_SCOPE_CONFIG;
    tangon = {};
    verify = michal.ANY;
    michal = new Array(1);
    michal[0] = offset;
    tangon[verify] = michal;
    michal = {};
    michal['scope'] = tangon;
    oscard = function() { // Original name: handler
        entity = function(argFoo) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = argFoo;
                oscard = entity.prevState;
                zuuluu = entity.dispatch;
                entity = _closure1_slot5;
                michal = undefined;
                entity = entity.bind(michal)();
                report = _closure1_slot1;
                golfie = _closure1_slot2;
                tangon = 7;
                tangon = golfie[tangon];
                report = report.bind(michal)(tangon);
                tangon = report.isEqual;
                tangon = tangon.bind(report)(entity, oscard);
                if(tangon) { _fun00006_ip = 67; continue _fun00005 }
 62:
                michal = zuuluu.bind(michal)(entity);
 67:
                return entity;
            }
        };
        return entity;
    };
    michal['handler'] = oscard;
    oscard = 8;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/rpc/helpers/activityInstanceConnectedParticipants.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['activityInstanceConnectedParticipants'] = report;
    zuuluu['activityInstanceConnectedParticipantsScope'] = tangon;
    zuuluu['activityInstanceConnectedParticipantsUpdateEvent'] = michal;
    return entity;
})();