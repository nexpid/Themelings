// app/modules/applications/disclosures.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function() { // Original name: _getDisclosures
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot2;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 158; continue _fun00001 }
 10:
                    report = _closure1_slot3;
                    tangon = report.APPLICATION_DISCLOSURES;
                    zuuluu = argFoo;
                    report = tangon.bind(report)(zuuluu);
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    michal = 2;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    michal = tangon.bind(michal)(zuuluu);
                    tangon = michal.HTTP;
                    zuuluu = tangon.get;
                    michal = {'url': null, 'retries': 3, 'rejectWithError': false};
                    michal['url'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=92);
 90:
                    return michal;
 92:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 155; continue _fun00001 }
 98:
                    zuuluu = {};
                    tangon = michal.body;
                    tangon = tangon.disclosures;
                    zuuluu['disclosures'] = tangon;
                    tangon = michal.body;
                    tangon = tangon.acked_disclosures;
                    zuuluu['ackedDisclosures'] = tangon;
                    tangon = michal.body;
                    tangon = tangon.all_acked;
                    zuuluu['allAcked'] = tangon;
                    return zuuluu;
 155:
                    return michal;
 158:
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
    entity = function() { // Original name: _ackDisclosures
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot2;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 108; continue _fun00003 }
 7:
                    report = _closure1_slot3;
                    tangon = report.APPLICATION_DISCLOSURES;
                    zuuluu = argFoo;
                    oscard = tangon.bind(report)(zuuluu);
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    michal = 2;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    michal = tangon.bind(zuuluu)(michal);
                    report = michal.HTTP;
                    tangon = report.post;
                    michal = {};
                    michal['url'] = oscard;
                    oscard = {};
                    golfie = argBar;
                    oscard['disclosures'] = golfie;
                    michal['body'] = oscard;
                    oscard = false;
                    michal['rejectWithError'] = oscard;
                    michal = tangon.bind(report)(michal);
                    SaveGenerator(address=96);
 94:
                    return michal;
 96:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00004_ip = 105; continue _fun00003 }
 102:
                    return zuuluu;
 105:
                    return michal;
 108:
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
    tangon = 5;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.fileFinishedImporting;
    tangon = 'modules/applications/disclosures.tsx';
    tangon = golfie.bind(option)(tangon);
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ApplicationDisclosureType;
    zuuluu['ApplicationDisclosure'] = tangon;
    tangon = function() { // Original name: getDisclosures
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['getDisclosures'] = tangon;
    tangon = function() { // Original name: ackDisclosures
        entity = undefined;
        tangon = _closure1_slot5;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['ackDisclosures'] = tangon;
    michal = function(argFoo) { // Original name: getTextForDisclosure
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            oscard = 3;
            michal = michal[oscard];
            report = undefined;
            michal = tangon.bind(report)(michal);
            michal = michal.ApplicationDisclosureType;
            michal = michal.IP_LOCATION;
            if(!(michal !== zuuluu)) { _fun00006_ip = 140; continue _fun00005 }
 44:
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[oscard];
            michal = tangon.bind(report)(michal);
            michal = michal.ApplicationDisclosureType;
            michal = michal.DISPLAYS_ADVERTISEMENTS;
            if(!(michal !== zuuluu)) { _fun00006_ip = 81; continue _fun00005 }
 77:
            michal = null;
            return michal;
 81:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 4;
            zuuluu = golfie[michal];
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal./uOMKS;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 140:
            tangon = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 4;
            michal = oscard[entity];
            michal = tangon.bind(report)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = oscard[entity];
            entity = tangon.bind(report)(entity);
            entity = entity.t;
            entity = entity.6wPmjo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['getTextForDisclosure'] = michal;
    return entity;
})();