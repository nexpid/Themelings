// app/modules/user_affinities/UserAffinitiesActionCreators.tsx
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
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.Endpoints;
    var _closure1_slot6 = golfie;
    tangon = tangon.Consents;
    var _closure1_slot7 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_affinities/UserAffinitiesActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: fetchUserAffinities
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = arguments[0];
            report = undefined;
            if(!(golfie === report)) { _fun00002_ip = 13; continue _fun00001 }
 11:
            golfie = true;
 13:
            zuuluu = _closure1_slot4;
            entity = zuuluu.needsRefresh;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 56; continue _fun00001 }
 33:
            entity = global;
            zuuluu = entity.Promise;
            entity = zuuluu.resolve;
            entity = entity.bind(zuuluu)();
            _fun00002_ip = 192; continue _fun00001;
 56:
            tangon = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 4;
            zuuluu = option[zuuluu];
            verify = tangon.bind(report)(zuuluu);
            tangon = verify.dispatch;
            zuuluu = {};
            offset = 'LOAD_USER_AFFINITIES';
            zuuluu['type'] = offset;
            zuuluu = tangon.bind(verify)(zuuluu);
            tangon = _closure1_slot0;
            zuuluu = 5;
            zuuluu = option[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            report = zuuluu.HTTP;
            tangon = report.get;
            zuuluu = {};
            oscard = _closure1_slot6;
            oscard = oscard.USER_AFFINITIES;
            zuuluu['url'] = oscard;
            oscard = 0;
            if(!golfie) { _fun00002_ip = 148; continue _fun00001 }
 145:
            oscard = 3;
 148:
            zuuluu['retries'] = oscard;
            oscard = true;
            zuuluu['oldFormErrors'] = oscard;
            oscard = false;
            zuuluu['rejectWithError'] = oscard;
            report = tangon.bind(report)(zuuluu);
            tangon = report.then;
            zuuluu = function(argFoo) {
                entity = argFoo;
                report = entity.body;
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 4;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                oscard = 'LOAD_USER_AFFINITIES_SUCCESS';
                michal['type'] = oscard;
                michal['affinities'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            michal = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 4;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                report = 'LOAD_USER_AFFINITIES_FAILURE';
                michal['type'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity = tangon.bind(report)(zuuluu, michal);
 192:
            return entity;
        }
    };
    zuuluu['fetchUserAffinities'] = tangon;
    michal = function() { // Original name: fetchUserAffinitiesV2
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            golfie = arguments[0];
            report = undefined;
            if(!(golfie === report)) { _fun00004_ip = 13; continue _fun00003 }
 11:
            golfie = true;
 13:
            zuuluu = _closure1_slot5;
            entity = zuuluu.shouldFetch;
            entity = entity.bind(zuuluu)();
            if(!entity) { _fun00004_ip = 61; continue _fun00003 }
 33:
            tangon = _closure1_slot3;
            zuuluu = tangon.hasConsented;
            entity = _closure1_slot7;
            entity = entity.PERSONALIZATION;
            entity = zuuluu.bind(tangon)(entity);
            if(entity) { _fun00004_ip = 84; continue _fun00003 }
 61:
            entity = global;
            zuuluu = entity.Promise;
            entity = zuuluu.resolve;
            entity = entity.bind(zuuluu)();
            _fun00004_ip = 220; continue _fun00003;
 84:
            tangon = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 4;
            zuuluu = option[zuuluu];
            verify = tangon.bind(report)(zuuluu);
            tangon = verify.dispatch;
            zuuluu = {};
            offset = 'LOAD_USER_AFFINITIES_V2';
            zuuluu['type'] = offset;
            zuuluu = tangon.bind(verify)(zuuluu);
            tangon = _closure1_slot0;
            zuuluu = 5;
            zuuluu = option[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            report = zuuluu.HTTP;
            tangon = report.get;
            zuuluu = {};
            oscard = _closure1_slot6;
            oscard = oscard.USER_AFFINITIES_V2;
            zuuluu['url'] = oscard;
            oscard = 0;
            if(!golfie) { _fun00004_ip = 176; continue _fun00003 }
 173:
            oscard = 3;
 176:
            zuuluu['retries'] = oscard;
            oscard = true;
            zuuluu['oldFormErrors'] = oscard;
            oscard = false;
            zuuluu['rejectWithError'] = oscard;
            report = tangon.bind(report)(zuuluu);
            tangon = report.then;
            zuuluu = function(argFoo) {
                entity = argFoo;
                report = entity.body;
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 4;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                oscard = 'LOAD_USER_AFFINITIES_V2_SUCCESS';
                michal['type'] = oscard;
                golfie = report.user_affinities;
                oscard = golfie.map;
                report = function(argFoo) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        zuuluu = argFoo;
                        entity = {};
                        michal = zuuluu.other_user_id;
                        entity['otherUserId'] = michal;
                        michal = zuuluu.user_segment;
                        entity['userSegment'] = michal;
                        michal = zuuluu.other_user_segment;
                        entity['otherUserSegment'] = michal;
                        michal = zuuluu.is_friend;
                        entity['isFriend'] = michal;
                        oscard = zuuluu.dm_probability;
                        tangon = null;
                        golfie = tangon != oscard;
                        report = 0;
                        if(!golfie) { _fun00006_ip = 77; continue _fun00005 }
 74:
                        report = oscard;
 77:
                        entity['dmProbability'] = report;
                        oscard = zuuluu.dm_rank;
                        golfie = tangon != oscard;
                        report = 0;
                        if(!golfie) { _fun00006_ip = 104; continue _fun00005 }
 101:
                        report = oscard;
 104:
                        entity['dmRank'] = report;
                        oscard = zuuluu.vc_probability;
                        golfie = tangon != oscard;
                        report = 0;
                        if(!golfie) { _fun00006_ip = 131; continue _fun00005 }
 128:
                        report = oscard;
 131:
                        entity['vcProbability'] = report;
                        oscard = zuuluu.vc_rank;
                        golfie = tangon != oscard;
                        report = 0;
                        if(!golfie) { _fun00006_ip = 158; continue _fun00005 }
 155:
                        report = oscard;
 158:
                        entity['vcRank'] = report;
                        oscard = zuuluu.server_message_probability;
                        golfie = tangon != oscard;
                        report = 0;
                        if(!golfie) { _fun00006_ip = 183; continue _fun00005 }
 180:
                        report = oscard;
 183:
                        entity['serverMessageProbability'] = report;
                        oscard = zuuluu.server_message_rank;
                        golfie = tangon != oscard;
                        report = 0;
                        if(!golfie) { _fun00006_ip = 210; continue _fun00005 }
 207:
                        report = oscard;
 210:
                        entity['serverMessageRank'] = report;
                        oscard = zuuluu.communication_probability;
                        golfie = tangon != oscard;
                        report = 0;
                        if(!golfie) { _fun00006_ip = 237; continue _fun00005 }
 234:
                        report = oscard;
 237:
                        entity['communicationProbability'] = report;
                        zuuluu = zuuluu.communication_rank;
                        tangon = tangon != zuuluu;
                        michal = 0;
                        if(!tangon) { _fun00006_ip = 262; continue _fun00005 }
 259:
                        michal = zuuluu;
 262:
                        entity['communicationRank'] = michal;
                        return entity;
                    }
                };
                report = oscard.bind(golfie)(report);
                michal['affineUsers'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            michal = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 4;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                report = 'LOAD_USER_AFFINITIES_V2_FAILURE';
                michal['type'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity = tangon.bind(report)(zuuluu, michal);
 220:
            return entity;
        }
    };
    zuuluu['fetchUserAffinitiesV2'] = michal;
    return entity;
})();