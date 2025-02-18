// app/actions/ConsentActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: handleRequestSuccess
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            tangon = null;
            michal = tangon != entity;
            if(!michal) { _fun00002_ip = 21; continue _fun00001 }
 12:
            zuuluu = entity.body;
            michal = tangon != zuuluu;
 21:
            if(!michal) { _fun00002_ip = 90; continue _fun00001 }
 24:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 1;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.dispatch;
            michal = {};
            report = 'UPDATE_CONSENTS';
            michal['type'] = report;
            report = {};
            golfie = entity.body;
            option = report;
            oscard = copyDataProperties(option, golfie);
            michal['consents'] = report;
            michal = zuuluu.bind(tangon)(michal);
 90:
            entity = entity.body;
            return entity;
        }
    };
    var _closure1_slot4 = entity;
    entity = function(argFoo) { // Original name: handleRequestFailure
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.status;
            michal = 500;
            if(!(zuuluu >= michal)) { _fun00004_ip = 33; continue _fun00003 }
 18:
            zuuluu = entity.status;
            michal = 599;
            if(!(!(zuuluu <= michal))) { _fun00004_ip = 136; continue _fun00003 }
 33:
            zuuluu = null;
            if(!(zuuluu != entity)) { _fun00004_ip = 62; continue _fun00003 }
 39:
            michal = entity.body;
            if(!(zuuluu != michal)) { _fun00004_ip = 62; continue _fun00003 }
 48:
            michal = entity.body;
            michal = michal.message;
            if(!(zuuluu == michal)) { _fun00004_ip = 124; continue _fun00003 }
 62:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 2;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.cvJdtr;
            zuuluu = zuuluu.bind(tangon)(michal);
            _fun00004_ip = 134; continue _fun00003;
 124:
            entity = entity.body;
            zuuluu = entity.message;
 134:
            _fun00004_ip = 196; continue _fun00003;
 136:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 2;
            michal = golfie[entity];
            report = undefined;
            michal = oscard.bind(report)(michal);
            tangon = michal.intl;
            michal = tangon.string;
            entity = golfie[entity];
            entity = oscard.bind(report)(entity);
            entity = entity.t;
            entity = entity.cvJdtr;
            zuuluu = michal.bind(tangon)(entity);
 196:
            entity = global;
            entity = entity.Error;
            michal = entity.prototype;
            michal = Object.create(michal, {constructor: {value: entity}});
            verify = michal;
            option = zuuluu;
            entity = new verify[entity](option, golfie);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        }
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
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Endpoints;
    var _closure1_slot3 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'actions/ConsentActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: fetchConsents
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        michal = 3;
        zuuluu = zuuluu[michal];
        michal = undefined;
        michal = tangon.bind(michal)(zuuluu);
        tangon = michal.HTTP;
        zuuluu = tangon.get;
        michal = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        report = _closure1_slot3;
        report = report.SETTINGS_CONSENT;
        michal['url'] = report;
        tangon = zuuluu.bind(tangon)(michal);
        zuuluu = tangon.then;
        michal = _closure1_slot4;
        entity = function(argFoo) {
            entity = global;
            zuuluu = entity.Promise;
            michal = zuuluu.reject;
            report = entity.Error;
            entity = argFoo;
            entity = entity.body;
            oscard = entity.message;
            tangon = report.prototype;
            tangon = Object.create(tangon, {constructor: {value: report}});
            golfie = tangon;
            entity = new golfie[report](oscard, report);
            entity = entity instanceof Object ? entity : tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['fetchConsents'] = tangon;
    michal = function(argFoo, argBar) { // Original name: setConsents
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        michal = 3;
        zuuluu = zuuluu[michal];
        michal = undefined;
        michal = tangon.bind(michal)(zuuluu);
        tangon = michal.HTTP;
        zuuluu = tangon.post;
        michal = {};
        report = _closure1_slot3;
        report = report.SETTINGS_CONSENT;
        michal['url'] = report;
        report = {};
        oscard = argFoo;
        report['grant'] = oscard;
        oscard = argBar;
        report['revoke'] = oscard;
        michal['body'] = report;
        report = true;
        michal['oldFormErrors'] = report;
        report = false;
        michal['rejectWithError'] = report;
        tangon = zuuluu.bind(tangon)(michal);
        zuuluu = tangon.then;
        michal = _closure1_slot4;
        entity = _closure1_slot5;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['setConsents'] = michal;
    return entity;
})();