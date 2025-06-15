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
    tangon = report.bind(entity)(tangon);
    golfie = tangon.Endpoints;
    var _closure1_slot5 = golfie;
    tangon = tangon.Consents;
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_affinities/UserAffinitiesActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: fetchUserAffinitiesV2
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            option = arguments[0];
            report = undefined;
            if(!(option === report)) { _fun00002_ip = 13; continue _fun00001 }
 11:
            option = true;
 13:
            zuuluu = _closure1_slot4;
            entity = zuuluu.shouldFetch;
            entity = entity.bind(zuuluu)();
            if(!entity) { _fun00002_ip = 61; continue _fun00001 }
 33:
            tangon = _closure1_slot3;
            zuuluu = tangon.hasConsented;
            entity = _closure1_slot6;
            entity = entity.PERSONALIZATION;
            entity = zuuluu.bind(tangon)(entity);
            if(entity) { _fun00002_ip = 84; continue _fun00001 }
 61:
            entity = global;
            zuuluu = entity.Promise;
            entity = zuuluu.resolve;
            entity = entity.bind(zuuluu)();
            _fun00002_ip = 224; continue _fun00001;
 84:
            tangon = _closure1_slot1;
            verify = _closure1_slot2;
            golfie = 3;
            zuuluu = verify[golfie];
            offset = tangon.bind(report)(zuuluu);
            tangon = offset.dispatch;
            zuuluu = {};
            yankee = 'LOAD_USER_AFFINITIES_V2';
            zuuluu['type'] = yankee;
            zuuluu = tangon.bind(offset)(zuuluu);
            tangon = _closure1_slot0;
            zuuluu = 4;
            zuuluu = verify[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            report = zuuluu.HTTP;
            tangon = report.get;
            zuuluu = {};
            oscard = _closure1_slot5;
            oscard = oscard.USER_AFFINITIES_V2;
            zuuluu['url'] = oscard;
            oscard = 0;
            if(!option) { _fun00002_ip = 176; continue _fun00001 }
 173:
            oscard = golfie;
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
                entity = 3;
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
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
                        if(!golfie) { _fun00004_ip = 77; continue _fun00003 }
 74:
                        report = oscard;
 77:
                        entity['dmProbability'] = report;
                        oscard = zuuluu.dm_rank;
                        golfie = tangon != oscard;
                        report = 0;
                        if(!golfie) { _fun00004_ip = 104; continue _fun00003 }
 101:
                        report = oscard;
 104:
                        entity['dmRank'] = report;
                        oscard = zuuluu.vc_probability;
                        golfie = tangon != oscard;
                        report = 0;
                        if(!golfie) { _fun00004_ip = 131; continue _fun00003 }
 128:
                        report = oscard;
 131:
                        entity['vcProbability'] = report;
                        oscard = zuuluu.vc_rank;
                        golfie = tangon != oscard;
                        report = 0;
                        if(!golfie) { _fun00004_ip = 156; continue _fun00003 }
 153:
                        report = oscard;
 156:
                        entity['vcRank'] = report;
                        oscard = zuuluu.server_message_probability;
                        golfie = tangon != oscard;
                        report = 0;
                        if(!golfie) { _fun00004_ip = 181; continue _fun00003 }
 178:
                        report = oscard;
 181:
                        entity['serverMessageProbability'] = report;
                        oscard = zuuluu.server_message_rank;
                        golfie = tangon != oscard;
                        report = 0;
                        if(!golfie) { _fun00004_ip = 208; continue _fun00003 }
 205:
                        report = oscard;
 208:
                        entity['serverMessageRank'] = report;
                        oscard = zuuluu.communication_probability;
                        golfie = tangon != oscard;
                        report = 0;
                        if(!golfie) { _fun00004_ip = 233; continue _fun00003 }
 230:
                        report = oscard;
 233:
                        entity['communicationProbability'] = report;
                        zuuluu = zuuluu.communication_rank;
                        tangon = tangon != zuuluu;
                        michal = 0;
                        if(!tangon) { _fun00004_ip = 256; continue _fun00003 }
 253:
                        michal = zuuluu;
 256:
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
                entity = 3;
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
 224:
            return entity;
        }
    };
    zuuluu['fetchUserAffinitiesV2'] = michal;
    return entity;
})();