// app/modules/age_assurance/AgeVerificationURLActionCreators.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function() { // Original name: _initiateVerification
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot2;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 97; continue _fun00001 }
 7:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    michal = 2;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    michal = tangon.bind(michal)(zuuluu);
                    tangon = michal.HTTP;
                    zuuluu = tangon.post;
                    michal = {};
                    report = _closure1_slot3;
                    report = report.VERIFY_AGE;
                    michal['url'] = report;
                    report = {};
                    michal['body'] = report;
                    report = true;
                    michal['rejectWithError'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=80);
 78:
                    return michal;
 80:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 94; continue _fun00001 }
 86:
                    zuuluu = michal.body;
                    return zuuluu;
 94:
                    return michal;
 97:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot4 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot4 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Endpoints;
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/age_assurance/AgeVerificationURLActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: initiateVerification
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['initiateVerification'] = michal;
    return entity;
})();