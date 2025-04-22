// app/modules/user_profile/hooks/useNote.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _fetchNote
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    verify = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 255; continue _fun00001 }
 13:
                    oscard = verify;
                    golfie = _closure1_slot1;
                    michal = _closure1_slot2;
                    report = 5;
                    tangon = michal[report];
                    michal = undefined;
                    option = golfie.bind(michal)(tangon);
                    golfie = option.dispatch;
                    tangon = {};
                    offset = 'USER_NOTE_LOAD_START';
                    tangon['type'] = offset;
                    tangon['userId'] = verify;
                    tangon = golfie.bind(option)(tangon);
 67: // try_start_0
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    tangon = 6;
                    tangon = option[tangon];
                    tangon = golfie.bind(michal)(tangon);
                    option = tangon.HTTP;
                    golfie = option.get;
                    tangon = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    yankee = _closure1_slot6;
                    offset = yankee.NOTE;
                    verify = oscard;
                    verify = offset.bind(yankee)(verify);
                    tangon['url'] = verify;
                    tangon = golfie.bind(option)(tangon);
                    SaveGenerator(address=140);
 138:
                    return tangon;
 140:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(golfie) { _fun00002_ip = 204; continue _fun00001 }
 146:
                    offset = tangon.body;
                    option = _closure1_slot1;
                    golfie = _closure1_slot2;
                    golfie = golfie[report];
                    verify = option.bind(michal)(golfie);
                    option = verify.dispatch;
                    golfie = {};
                    yankee = 'USER_NOTE_LOADED';
                    golfie['type'] = yankee;
                    yankee = oscard;
                    golfie['userId'] = yankee;
                    golfie['note'] = offset;
                    golfie = option.bind(verify)(golfie);
 202: // try_end0
                    _fun00002_ip = 252; continue _fun00001;
 204:
                    return tangon;
 207: // catch_target0
                    CatchBlockStart(arg_register=3);
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[report];
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    golfie = 'USER_NOTE_LOADED';
                    zuuluu['type'] = golfie;
                    zuuluu['userId'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 252:
                    return michal;
 255:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot7 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot7 = entity;
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Endpoints;
    var _closure1_slot6 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_profile/hooks/useNote.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useNote
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscard = argFoo;
            var _closure2_slot0 = oscard;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 4;
            tangon = tangon[entity];
            entity = undefined;
            golfie = report.bind(entity)(tangon);
            report = golfie.useStateFromStores;
            entity = _closure1_slot5;
            tangon = new Array(1);
            tangon[0] = entity;
            entity = function() {
                zuuluu = _closure1_slot5;
                michal = zuuluu.getNote;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = report.bind(golfie)(tangon, entity);
            var _closure2_slot1 = entity;
            report = _closure1_slot4;
            tangon = report.useEffect;
            zuuluu = new Array(2);
            zuuluu[0] = entity;
            zuuluu[1] = oscard;
            michal = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    michal = null;
                    if(!(michal == zuuluu)) { _fun00006_ip = 33; continue _fun00005 }
 13:
                    zuuluu = _closure2_slot0;
                    michal = function() { // Original name: fetchNote
                        entity = undefined;
                        tangon = _closure1_slot7;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    entity = undefined;
                    entity = michal.bind(entity)(zuuluu);
 33:
                    entity = undefined;
                    return entity;
                }
            };
            michal = tangon.bind(report)(michal, zuuluu);
            michal = null;
            if(!(michal == entity)) { _fun00004_ip = 118; continue _fun00003 }
 108:
            entity = {'loading': true, 'note': null};
 118:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();