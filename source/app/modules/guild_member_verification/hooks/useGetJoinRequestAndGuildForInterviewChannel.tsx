// app/modules/guild_member_verification/hooks/useGetJoinRequestAndGuildForInterviewChannel.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
    tangon = 1;
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Permissions;
    var _closure1_slot9 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_member_verification/hooks/useGetJoinRequestAndGuildForInterviewChannel.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useGetJoinRequestAndGuildForInterviewChannel
        golfie = _closure1_slot4;
        zuuluu = golfie.useState;
        yankee = false;
        zuuluu = zuuluu.bind(golfie)(yankee);
        offset = _closure1_slot3;
        verify = undefined;
        option = 2;
        zuuluu = offset.bind(verify)(zuuluu, option);
        report = 0;
        tangon = zuuluu[report];
        oscard = 1;
        zuuluu = zuuluu[oscard];
        var _closure2_slot0 = zuuluu;
        zuuluu = golfie.useState;
        zuuluu = zuuluu.bind(golfie)(yankee);
        zuuluu = offset.bind(verify)(zuuluu, option);
        report = zuuluu[report];
        var _closure2_slot1 = report;
        zuuluu = zuuluu[oscard];
        var _closure2_slot2 = zuuluu;
        oscard = _closure1_slot1;
        offset = _closure1_slot2;
        zuuluu = 7;
        zuuluu = offset[zuuluu];
        option = oscard.bind(verify)(zuuluu);
        oscard = option.cast;
        zuuluu = argFoo;
        option = oscard.bind(option)(zuuluu);
        var _closure2_slot3 = option;
        oscard = _closure1_slot0;
        zuuluu = 8;
        zuuluu = offset[zuuluu];
        verify = oscard.bind(verify)(zuuluu);
        oscard = verify.useStateFromStoresObject;
        offset = _closure1_slot7;
        zuuluu = new Array(4);
        zuuluu[0] = offset;
        offset = _closure1_slot8;
        zuuluu[1] = offset;
        offset = _closure1_slot5;
        zuuluu[2] = offset;
        michal = _closure1_slot6;
        zuuluu[3] = michal;
        michal = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure1_slot7;
                michal = zuuluu.getRequest;
                entity = _closure2_slot3;
                report = michal.bind(zuuluu)(entity);
                zuuluu = null;
                if(!(zuuluu != report)) { _fun00002_ip = 125; continue _fun00001 }
 31:
                oscard = _closure1_slot5;
                michal = oscard.getGuild;
                entity = report.guildId;
                michal = michal.bind(oscard)(entity);
                if(!(zuuluu == michal)) { _fun00002_ip = 74; continue _fun00001 }
 54:
                golfie = _closure1_slot8;
                oscard = golfie.getJoinRequestGuild;
                entity = report.guildId;
                michal = oscard.bind(golfie)(entity);
 74:
                entity = {};
                entity['joinRequest'] = report;
                zuuluu = zuuluu != michal;
                if(!zuuluu) { _fun00002_ip = 114; continue _fun00001 }
 88:
                oscard = _closure1_slot6;
                report = oscard.can;
                tangon = _closure1_slot9;
                tangon = tangon.KICK_MEMBERS;
                zuuluu = report.bind(oscard)(tangon, michal);
 114:
                entity['isModmin'] = zuuluu;
                entity['guild'] = michal;
                return entity;
 125:
                entity = {'joinRequest': null, 'isModmin': false, 'guild': null};
                return entity;
            }
        };
        michal = oscard.bind(verify)(zuuluu, michal);
        zuuluu = michal.joinRequest;
        var _closure2_slot4 = zuuluu;
        michal = michal.guild;
        var _closure2_slot5 = michal;
        verify = golfie.useEffect;
        oscard = new Array(2);
        oscard[0] = michal;
        oscard[1] = report;
        report = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = _closure2_slot5;
                michal = null;
                michal = michal != zuuluu;
                if(michal) { _fun00004_ip = 20; continue _fun00003 }
 16:
                michal = _closure2_slot1;
 20:
                if(michal) { _fun00004_ip = 69; continue _fun00003 }
 23:
                michal = _closure2_slot2;
                zuuluu = undefined;
                entity = true;
                entity = michal.bind(zuuluu)(entity);
                michal = _closure1_slot1;
                tangon = _closure1_slot2;
                entity = 9;
                entity = tangon[entity];
                michal = michal.bind(zuuluu)(entity);
                entity = michal.fetchRequestToJoinGuilds;
                entity = entity.bind(michal)();
 69:
                entity = undefined;
                return entity;
            }
        };
        report = verify.bind(golfie)(report, oscard);
        oscard = golfie.useEffect;
        report = new Array(2);
        report[0] = zuuluu;
        report[1] = option;
        entity = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = _closure2_slot4;
                michal = null;
                if(!(michal == zuuluu)) { _fun00006_ip = 84; continue _fun00005 }
 13:
                zuuluu = _closure2_slot0;
                tangon = undefined;
                michal = true;
                michal = zuuluu.bind(tangon)(michal);
                zuuluu = _closure1_slot1;
                report = _closure1_slot2;
                michal = 9;
                michal = report[michal];
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = zuuluu.fetchGuildJoinRequest;
                entity = _closure2_slot3;
                zuuluu = michal.bind(zuuluu)(entity);
                michal = zuuluu.finally;
                entity = function() {
                    zuuluu = _closure2_slot0;
                    entity = undefined;
                    michal = false;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
 84:
                entity = undefined;
                return entity;
            }
        };
        entity = oscard.bind(golfie)(entity, report);
        entity = {};
        entity['loading'] = tangon;
        entity['joinRequest'] = zuuluu;
        entity['joinRequestGuild'] = michal;
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();