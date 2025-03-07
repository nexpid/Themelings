// app/modules/mobile_web_handoff/MobileWebHandoffUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function() { // Original name: _createHandoffToken
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot2;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 167; continue _fun00001 }
 10:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    michal = 3;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    michal = tangon.bind(michal)(zuuluu);
                    tangon = michal.HTTP;
                    zuuluu = tangon.post;
                    michal = {'url': null, 'body': null, 'oldFormErrors': true, 'retries': 1, 'rejectWithError': false};
                    report = _closure1_slot3;
                    report = report.HANDOFF;
                    michal['url'] = report;
                    report = {};
                    oscard = argFoo;
                    report['key'] = oscard;
                    michal['body'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=100);
 98:
                    return michal;
 100:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 164; continue _fun00001 }
 106:
                    zuuluu = michal.body;
                    zuuluu = zuuluu.handoff_token;
                    tangon = null;
                    if(!(tangon == zuuluu)) { _fun00002_ip = 161; continue _fun00001 }
 125:
                    tangon = global;
                    oscard = tangon.Error;
                    tangon = oscard.prototype;
                    report = Object.create(tangon, {constructor: {value: oscard}});
                    golfie = 'Missing handoff token!';
                    option = report;
                    tangon = new option[oscard](golfie, oscard);
                    tangon = tangon instanceof Object ? tangon : report;
                    throw tangon;
 161:
                    return zuuluu;
 164:
                    return michal;
 167:
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
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, michal);
    entity = 0;
    golfie = oscard[entity];
    michal = argBaz;
    entity = undefined;
    michal = michal.bind(entity)(golfie);
    var _closure1_slot2 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.Endpoints;
    var _closure1_slot3 = michal;
    michal = {};
    golfie = function() { // Original name: generateNonce
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        entity = michal.v4;
        entity = entity.bind(michal)();
        return entity;
    };
    michal['generateNonce'] = golfie;
    tangon = function() { // Original name: createHandoffToken
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    michal['createHandoffToken'] = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/mobile_web_handoff/MobileWebHandoffUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();