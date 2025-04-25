// app/modules/pomelo/PomeloManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 72: // try_end0
            _fun00002_ip = 76; continue _fun00001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot9 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot9 = entity;
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.PomeloEntrypoints;
    var _closure1_slot8 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        zuuluu = function(argFoo) { // Original name: PomeloManager
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                report = this;
                foxtra = 0;
                entity = copyRestArgs(foxtra);
                option = _closure1_slot3;
                zuuluu = _closure2_slot0;
                tangon = undefined;
                option = option.bind(tangon)(report, zuuluu);
                offset = new Array(0);
                foxtra = offset;
                romeon = entity;
                yankee = 0;
                entity = arraySpread(foxtra, romeon, yankee);
                entity = _closure1_slot5;
                verify = entity.bind(tangon)(zuuluu);
                zuuluu = _closure1_slot4;
                entity = _closure1_slot9;
                entity = entity.bind(tangon)();
                if(entity) { _fun00004_ip = 86; continue _fun00003 }
 73:
                entity = verify.apply;
                entity = entity.bind(verify)(report, offset);
                _fun00004_ip = 120; continue _fun00003;
 86:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot5;
                oscard = oscard.bind(tangon)(report);
                oscard = oscard.constructor;
                entity = golfie.bind(option)(verify, offset, oscard);
 120:
                entity = zuuluu.bind(tangon)(report, entity);
                var _closure3_slot0 = entity;
                zuuluu = {};
                tangon = function() { // Original name: POST_CONNECTION_OPEN
                    michal = _closure3_slot0;
                    entity = michal.onPostConnectionOpen;
                    entity = entity.bind(michal)();
                    return entity;
                };
                zuuluu['POST_CONNECTION_OPEN'] = tangon;
                entity['actions'] = zuuluu;
                michal = function() {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot1;
                        entity = 8;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        zuuluu = tangon.bind(entity)(zuuluu);
                        oscard = zuuluu.experiment;
                        report = oscard.getCurrentConfig;
                        tangon = {};
                        zuuluu = 'b9eb97_1';
                        tangon['location'] = zuuluu;
                        zuuluu = {};
                        golfie = false;
                        zuuluu['autoTrackExposure'] = golfie;
                        zuuluu = report.bind(oscard)(tangon, zuuluu);
                        tangon = zuuluu.enabled;
                        zuuluu = false;
                        if(!tangon) { _fun00006_ip = 262; continue _fun00005 }
 77:
                        report = _closure1_slot7;
                        tangon = report.getCurrentUser;
                        oscard = tangon.bind(report)();
                        tangon = null;
                        report = tangon == oscard;
                        zuuluu = false;
                        if(report) { _fun00006_ip = 262; continue _fun00005 }
 104:
                        report = oscard.isPomelo;
                        report = report.bind(oscard)();
                        zuuluu = false;
                        if(report) { _fun00006_ip = 262; continue _fun00005 }
 122:
                        report = oscard.hasVerifiedEmailOrPhone;
                        report = report.bind(oscard)();
                        zuuluu = false;
                        if(!report) { _fun00006_ip = 262; continue _fun00005 }
 140:
                        oscard = _closure1_slot0;
                        option = _closure1_slot1;
                        report = 9;
                        report = option[report];
                        oscard = oscard.bind(entity)(report);
                        report = oscard.getForceMigration;
                        report = report.bind(oscard)();
                        option = 'lastSawPomeloMigration';
                        if(report) { _fun00006_ip = 185; continue _fun00005 }
 179:
                        option = 'lastSawPomelo';
 185:
                        oscard = _closure1_slot0;
                        verify = _closure1_slot1;
                        report = 7;
                        report = verify[report];
                        report = oscard.bind(entity)(report);
                        oscard = report.Storage;
                        report = oscard.get;
                        oscard = report.bind(oscard)(option);
                        tangon = tangon != oscard;
                        if(!tangon) { _fun00006_ip = 259; continue _fun00005 }
 228:
                        report = global;
                        option = report.Date;
                        report = option.now;
                        report = report.bind(option)();
                        oscard = report - oscard;
                        report = 604800000;
                        tangon = oscard < report;
 259:
                        zuuluu = !tangon;
 262:
                        if(!zuuluu) { _fun00006_ip = 373; continue _fun00005 }
 265:
                        tangon = _closure1_slot0;
                        report = _closure1_slot1;
                        zuuluu = 10;
                        zuuluu = report[zuuluu];
                        oscard = tangon.bind(entity)(zuuluu);
                        report = oscard.openPomeloModal;
                        zuuluu = _closure1_slot8;
                        tangon = zuuluu.APP_START;
                        zuuluu = true;
                        zuuluu = report.bind(oscard)(tangon, zuuluu, golfie);
                        if(!zuuluu) { _fun00006_ip = 373; continue _fun00005 }
 313:
                        zuuluu = _closure1_slot0;
                        tangon = _closure1_slot1;
                        michal = 7;
                        michal = tangon[michal];
                        michal = zuuluu.bind(entity)(michal);
                        report = michal.Storage;
                        tangon = report.set;
                        michal = global;
                        zuuluu = michal.Date;
                        michal = zuuluu.now;
                        zuuluu = michal.bind(zuuluu)();
                        michal = 'lastSawPomelo';
                        michal = tangon.bind(report)(michal, zuuluu);
 373:
                        return entity;
                    }
                };
                entity['onPostConnectionOpen'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        report = _closure1_slot6;
        michal = undefined;
        tangon = argFoo;
        tangon = report.bind(michal)(zuuluu, tangon);
        entity = _closure1_slot2;
        entity = entity.bind(michal)(zuuluu);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 12;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/pomelo/PomeloManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();