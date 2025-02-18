// app/utils/PurchaseTokenUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    tangon = function() { // Original name: getPurchaseToken
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = _closure1_slot0;
            entity = _closure1_slot1;
            oscard = 2;
            entity = entity[oscard];
            report = undefined;
            entity = michal.bind(report)(entity);
            zuuluu = entity.Storage;
            michal = zuuluu.get;
            entity = _closure1_slot3;
            entity = michal.bind(zuuluu)(entity);
            michal = null;
            if(!(michal != entity)) { _fun00002_ip = 78; continue _fun00001 }
 51:
            zuuluu = entity.expires;
            michal = global;
            tangon = michal.Date;
            michal = tangon.now;
            michal = michal.bind(tangon)();
            if(!(!(zuuluu >= michal))) { _fun00002_ip = 177; continue _fun00001 }
 78:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 3;
            michal = zuuluu[michal];
            option = tangon.bind(report)(michal);
            michal = option.v4;
            michal = michal.bind(option)();
            zuuluu = zuuluu[oscard];
            zuuluu = tangon.bind(report)(zuuluu);
            oscard = zuuluu.Storage;
            report = oscard.set;
            tangon = _closure1_slot3;
            zuuluu = {};
            zuuluu['purchaseToken'] = michal;
            option = global;
            verify = option.Date;
            option = verify.now;
            option = option.bind(verify)();
            golfie = _closure1_slot4;
            golfie = option + golfie;
            zuuluu['expires'] = golfie;
            zuuluu = report.bind(oscard)(tangon, zuuluu);
            return michal;
 177:
            entity = entity.purchaseToken;
            return entity;
        }
    };
    var _closure1_slot5 = tangon;
    entity = function() { // Original name: _getPurchaseTokenHash
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot2;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 220; continue _fun00003 }
 10:
                    zuuluu = global;
                    oscard = zuuluu.Uint8Array;
                    michal = _closure1_slot5;
                    report = undefined;
                    golfie = michal.bind(report)();
                    tangon = golfie.split;
                    michal = '';
                    golfie = tangon.bind(golfie)(michal);
                    tangon = golfie.map;
                    michal = function(argFoo) {
                        zuuluu = argFoo;
                        michal = zuuluu.charCodeAt;
                        entity = 0;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    romeon = tangon.bind(golfie)(michal);
                    tangon = oscard.prototype;
                    tangon = Object.create(tangon, {constructor: {value: oscard}});
                    foxtra = tangon;
                    michal = new foxtra[oscard](romeon, yankee);
                    golfie = michal instanceof Object ? michal : tangon;
                    michal = zuuluu.window;
                    michal = michal.crypto;
                    oscard = michal.subtle;
                    tangon = oscard.digest;
                    michal = {};
                    option = 'SHA-256';
                    michal['name'] = option;
                    michal = tangon.bind(oscard)(michal, golfie);
                    SaveGenerator(address=130);
 128:
                    return michal;
 130:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00004_ip = 217; continue _fun00003 }
 136:
                    tangon = zuuluu.btoa;
                    golfie = zuuluu.String;
                    oscard = golfie.fromCharCode;
                    zuuluu = zuuluu.Uint8Array;
                    option = zuuluu.prototype;
                    option = Object.create(option, {constructor: {value: zuuluu}});
                    foxtra = option;
                    romeon = michal;
                    zuuluu = new foxtra[zuuluu](romeon, yankee);
                    yankee = zuuluu instanceof Object ? zuuluu : option;
                    zuuluu = new Array(0);
                    offset = 0;
                    romeon = zuuluu;
                    option = arraySpread(romeon, yankee, offset);
                    romeon = oscard;
                    yankee = zuuluu;
                    offset = golfie;
                    zuuluu = apply(romeon, yankee, offset);
                    zuuluu = tangon.bind(report)(zuuluu);
                    return zuuluu;
 217:
                    return michal;
 220:
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
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 'purchase_token';
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    report = report.Millis;
    option = report.DAY;
    report = 60;
    report = report * option;
    var _closure1_slot4 = report;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'utils/PurchaseTokenUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['getPurchaseToken'] = tangon;
    michal = function() { // Original name: getPurchaseTokenHash
        entity = undefined;
        tangon = _closure1_slot6;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['getPurchaseTokenHash'] = michal;
    return entity;
})();