// app/modules/user_affinities/UserAffinitiesActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.Endpoints;
    var _closure1_slot6 = golf;
    tango = tango.Consents;
    var _closure1_slot7 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_affinities/UserAffinitiesActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: fetchUserAffinities
        _fun79253: for(var _fun79253_ip = 0; ; ) switch(_fun79253_ip) {
 0:
            golf = arguments[0];
            report = undefined;
            if(!(golf === report)) { _fun79253_ip = 13; continue _fun79253 }
 11:
            golf = true;
 13:
            zulu = _closure1_slot4;
            entity = zulu.needsRefresh;
            entity = entity.bind(zulu)();
            if(entity) { _fun79253_ip = 56; continue _fun79253 }
 33:
            entity = global;
            zulu = entity.Promise;
            entity = zulu.resolve;
            entity = entity.bind(zulu)();
            _fun79253_ip = 196; continue _fun79253;
 56:
            tango = _closure1_slot1;
            options = _closure1_slot2;
            zulu = 4;
            zulu = options[zulu];
            verify = tango.bind(report)(zulu);
            tango = verify.dispatch;
            zulu = {};
            offset = 'LOAD_USER_AFFINITIES';
            zulu['type'] = offset;
            zulu = tango.bind(verify)(zulu);
            tango = _closure1_slot0;
            zulu = 5;
            zulu = options[zulu];
            zulu = tango.bind(report)(zulu);
            report = zulu.HTTP;
            tango = report.get;
            zulu = {};
            oscar = _closure1_slot6;
            oscar = oscar.USER_AFFINITIES;
            zulu['url'] = oscar;
            oscar = 0;
            if(!golf) { _fun79253_ip = 148; continue _fun79253 }
 145:
            oscar = 3;
 148:
            zulu['retries'] = oscar;
            oscar = true;
            zulu['oldFormErrors'] = oscar;
            oscar = false;
            zulu['rejectWithError'] = oscar;
            report = tango.bind(report)(zulu);
            tango = report.then;
            zulu = function(argFoo) {
                entity = argFoo;
                report = entity.body;
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 4;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {};
                oscar = 'LOAD_USER_AFFINITIES_SUCCESS';
                mike['type'] = oscar;
                mike['affinities'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            mike = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 4;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {};
                report = 'LOAD_USER_AFFINITIES_FAILURE';
                mike['type'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity = tango.bind(report)(zulu, mike);
 196:
            return entity;
        }
    };
    zulu['fetchUserAffinities'] = tango;
    mike = function() { // Original name: fetchUserAffinitiesV2
        _fun79256: for(var _fun79256_ip = 0; ; ) switch(_fun79256_ip) {
 0:
            golf = arguments[0];
            report = undefined;
            if(!(golf === report)) { _fun79256_ip = 13; continue _fun79256 }
 11:
            golf = true;
 13:
            zulu = _closure1_slot5;
            entity = zulu.shouldFetch;
            entity = entity.bind(zulu)();
            if(!entity) { _fun79256_ip = 61; continue _fun79256 }
 33:
            tango = _closure1_slot3;
            zulu = tango.hasConsented;
            entity = _closure1_slot7;
            entity = entity.PERSONALIZATION;
            entity = zulu.bind(tango)(entity);
            if(entity) { _fun79256_ip = 84; continue _fun79256 }
 61:
            entity = global;
            zulu = entity.Promise;
            entity = zulu.resolve;
            entity = entity.bind(zulu)();
            _fun79256_ip = 224; continue _fun79256;
 84:
            tango = _closure1_slot1;
            options = _closure1_slot2;
            zulu = 4;
            zulu = options[zulu];
            verify = tango.bind(report)(zulu);
            tango = verify.dispatch;
            zulu = {};
            offset = 'LOAD_USER_AFFINITIES_V2';
            zulu['type'] = offset;
            zulu = tango.bind(verify)(zulu);
            tango = _closure1_slot0;
            zulu = 5;
            zulu = options[zulu];
            zulu = tango.bind(report)(zulu);
            report = zulu.HTTP;
            tango = report.get;
            zulu = {};
            oscar = _closure1_slot6;
            oscar = oscar.USER_AFFINITIES_V2;
            zulu['url'] = oscar;
            oscar = 0;
            if(!golf) { _fun79256_ip = 176; continue _fun79256 }
 173:
            oscar = 3;
 176:
            zulu['retries'] = oscar;
            oscar = true;
            zulu['oldFormErrors'] = oscar;
            oscar = false;
            zulu['rejectWithError'] = oscar;
            report = tango.bind(report)(zulu);
            tango = report.then;
            zulu = function(argFoo) {
                entity = argFoo;
                report = entity.body;
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 4;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {};
                oscar = 'LOAD_USER_AFFINITIES_V2_SUCCESS';
                mike['type'] = oscar;
                golf = report.user_affinities;
                oscar = golf.map;
                report = function(argFoo) {
                    _fun79258: for(var _fun79258_ip = 0; ; ) switch(_fun79258_ip) {
 0:
                        zulu = argFoo;
                        entity = {};
                        mike = zulu.other_user_id;
                        entity['otherUserId'] = mike;
                        mike = zulu.user_segment;
                        entity['userSegment'] = mike;
                        mike = zulu.other_user_segment;
                        entity['otherUserSegment'] = mike;
                        mike = zulu.is_friend;
                        entity['isFriend'] = mike;
                        oscar = zulu.dm_probability;
                        tango = null;
                        golf = tango != oscar;
                        report = 0;
                        if(!golf) { _fun79258_ip = 77; continue _fun79258 }
 74:
                        report = oscar;
 77:
                        entity['dmProbability'] = report;
                        oscar = zulu.dm_rank;
                        golf = tango != oscar;
                        report = 0;
                        if(!golf) { _fun79258_ip = 104; continue _fun79258 }
 101:
                        report = oscar;
 104:
                        entity['dmRank'] = report;
                        oscar = zulu.vc_probability;
                        golf = tango != oscar;
                        report = 0;
                        if(!golf) { _fun79258_ip = 131; continue _fun79258 }
 128:
                        report = oscar;
 131:
                        entity['vcProbability'] = report;
                        oscar = zulu.vc_rank;
                        golf = tango != oscar;
                        report = 0;
                        if(!golf) { _fun79258_ip = 158; continue _fun79258 }
 155:
                        report = oscar;
 158:
                        entity['vcRank'] = report;
                        oscar = zulu.server_message_probability;
                        golf = tango != oscar;
                        report = 0;
                        if(!golf) { _fun79258_ip = 183; continue _fun79258 }
 180:
                        report = oscar;
 183:
                        entity['serverMessageProbability'] = report;
                        oscar = zulu.server_message_rank;
                        golf = tango != oscar;
                        report = 0;
                        if(!golf) { _fun79258_ip = 210; continue _fun79258 }
 207:
                        report = oscar;
 210:
                        entity['serverMessageRank'] = report;
                        oscar = zulu.communication_probability;
                        golf = tango != oscar;
                        report = 0;
                        if(!golf) { _fun79258_ip = 237; continue _fun79258 }
 234:
                        report = oscar;
 237:
                        entity['communicationProbability'] = report;
                        zulu = zulu.communication_rank;
                        tango = tango != zulu;
                        mike = 0;
                        if(!tango) { _fun79258_ip = 262; continue _fun79258 }
 259:
                        mike = zulu;
 262:
                        entity['communicationRank'] = mike;
                        return entity;
                    }
                };
                report = oscar.bind(golf)(report);
                mike['affineUsers'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            mike = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 4;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {};
                report = 'LOAD_USER_AFFINITIES_V2_FAILURE';
                mike['type'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity = tango.bind(report)(zulu, mike);
 224:
            return entity;
        }
    };
    zulu['fetchUserAffinitiesV2'] = mike;
    return entity;
})();