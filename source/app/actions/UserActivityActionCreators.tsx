// app/actions/UserActivityActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _getMetadata
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    offset = argFoo;
                    verify = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 296; continue _fun00001 }
 16:
                    michal = offset.metadata;
                    report = null;
                    if(!(report != michal)) { _fun00002_ip = 60; continue _fun00001 }
 28:
                    zuuluu = global;
                    tangon = zuuluu.Object;
                    zuuluu = tangon.keys;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    tangon = zuuluu.length;
                    zuuluu = 0;
                    if(!(!(tangon > zuuluu))) { _fun00002_ip = 293; continue _fun00001 }
 60:
                    tangon = _closure1_slot4;
                    zuuluu = tangon.getActivityMetadata;
                    zuuluu = zuuluu.bind(tangon)(verify);
                    if(!(report == zuuluu)) { _fun00002_ip = 290; continue _fun00001 }
 87:
                    tangon = offset.session_id;
                    if(!(report != tangon)) { _fun00002_ip = 254; continue _fun00001 }
 100:
                    report = _closure1_slot0;
                    golfie = _closure1_slot2;
                    tangon = 5;
                    tangon = golfie[tangon];
                    option = undefined;
                    tangon = report.bind(option)(tangon);
                    golfie = tangon.HTTP;
                    report = golfie.get;
                    tangon = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    foxtra = _closure1_slot5;
                    romeon = foxtra.USER_ACTIVITY_METADATA;
                    yankee = offset.session_id;
                    offset = offset.application_id;
                    offset = romeon.bind(foxtra)(verify, yankee, offset);
                    tangon['url'] = offset;
                    tangon = report.bind(golfie)(tangon);
                    SaveGenerator(address=186);
 184:
                    return tangon;
 186:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 251; continue _fun00001 }
 192:
                    report = tangon.body;
                    golfie = _closure1_slot1;
                    offset = _closure1_slot2;
                    oscard = 3;
                    oscard = offset[oscard];
                    option = golfie.bind(option)(oscard);
                    golfie = option.dispatch;
                    oscard = {};
                    offset = 'ACTIVITY_METADATA_UPDATE';
                    oscard['type'] = offset;
                    oscard['metadata'] = report;
                    oscard['userId'] = verify;
                    oscard = golfie.bind(option)(oscard);
                    return report;
 251:
                    return tangon;
 254:
                    tangon = global;
                    oscard = tangon.Error;
                    tangon = oscard.prototype;
                    report = Object.create(tangon, {constructor: {value: oscard}});
                    sizing = 'null/undefined session_id';
                    output = report;
                    tangon = new output[oscard](sizing, kiloes);
                    tangon = tangon instanceof Object ? tangon : report;
                    throw tangon;
 290:
                    return zuuluu;
 293:
                    return michal;
 296:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot6 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot6 = entity;
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
    tangon = tangon.Endpoints;
    var _closure1_slot5 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'actions/UserActivityActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) { // Original name: sync
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'ACTIVITY_SYNC';
        michal['type'] = report;
        report = argFoo;
        michal['activity'] = report;
        report = argBar;
        michal['userId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['sync'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: play
        oscard = argFoo;
        report = argBar;
        var _closure2_slot0 = oscard;
        var _closure2_slot1 = report;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 4;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.getSpotifyMetadataFromActivity;
        report = zuuluu.bind(tangon)(oscard, report);
        tangon = report.then;
        zuuluu = function(argFoo) {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 3;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.dispatch;
            entity = {};
            tangon = 'ACTIVITY_PLAY';
            entity['type'] = tangon;
            report = _closure2_slot0;
            entity['activity'] = report;
            tangon = _closure2_slot1;
            entity['userId'] = tangon;
            tangon = argFoo;
            entity['metadata'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        zuuluu = tangon.catch;
        michal = function() {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 3;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.dispatch;
            entity = {};
            tangon = 'ACTIVITY_PLAY';
            entity['type'] = tangon;
            report = _closure2_slot0;
            entity['activity'] = report;
            tangon = _closure2_slot1;
            entity['userId'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['play'] = tangon;
    michal = function() { // Original name: getMetadata
        entity = undefined;
        tangon = _closure1_slot6;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['getMetadata'] = michal;
    return entity;
})();