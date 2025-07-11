// app/modules/experiments/apex/ApexActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _fetchApexExperimentsMetadata
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 232; continue _fun00001 }
 10:
                    option = argFoo;
 13: // try_start_0
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 2;
                    michal = report[michal];
                    report = undefined;
                    michal = tangon.bind(report)(michal);
                    oscard = michal.HTTP;
                    tangon = oscard.get;
                    michal = {};
                    golfie = _closure1_slot4;
                    golfie = golfie.APEX_EXPERIMENTS_METADATA;
                    michal['url'] = golfie;
                    golfie = {};
                    golfie['surface'] = option;
                    michal['query'] = golfie;
                    golfie = true;
                    michal['rejectWithError'] = golfie;
                    michal = tangon.bind(oscard)(michal);
                    SaveGenerator(address=90);
 88:
                    return michal;
 90:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 175; continue _fun00001 }
 96:
                    tangon = michal.body;
                    golfie = tangon.experiments;
                    oscard = golfie.map;
                    tangon = function(argFoo) {
                        michal = argFoo;
                        entity = {};
                        zuuluu = michal.id;
                        entity['id'] = zuuluu;
                        zuuluu = michal.name;
                        entity['name'] = zuuluu;
                        zuuluu = michal.title;
                        entity['title'] = zuuluu;
                        zuuluu = michal.revision;
                        entity['revision'] = zuuluu;
                        zuuluu = michal.unit_type;
                        entity['unitType'] = zuuluu;
                        tangon = michal.variants;
                        zuuluu = tangon.map;
                        michal = function(argFoo) {
                            michal = argFoo;
                            entity = {};
                            zuuluu = michal.id;
                            entity['id'] = zuuluu;
                            zuuluu = michal.label;
                            entity['label'] = zuuluu;
                            michal = michal.type;
                            entity['type'] = michal;
                            return entity;
                        };
                        michal = zuuluu.bind(tangon)(michal);
                        entity['variants'] = michal;
                        return entity;
                    };
                    oscard = oscard.bind(golfie)(tangon);
                    tangon = _closure1_slot1;
                    golfie = _closure1_slot2;
                    zuuluu = 3;
                    zuuluu = golfie[zuuluu];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    golfie = 'APEX_EXPERIMENTS_METADATA_FETCH_SUCCESS';
                    zuuluu['type'] = golfie;
                    zuuluu['experiments'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 173: // try_end0
                    _fun00002_ip = 227; continue _fun00001;
 175:
                    return michal;
 178: // catch_target0
                    CatchBlockStart(arg_register=1);
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 3;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.dispatch;
                    michal = {};
                    report = 'APEX_EXPERIMENTS_METADATA_FETCH_FAILURE';
                    michal['type'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 227:
                    michal = undefined;
                    return michal;
 232:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot5 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot5 = entity;
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Endpoints;
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/experiments/apex/ApexActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: fetchApexExperimentsMetadata
        entity = undefined;
        tangon = _closure1_slot5;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchApexExperimentsMetadata'] = michal;
    return entity;
})();