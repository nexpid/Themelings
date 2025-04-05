// app/utils/MFAInterceptionUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    michal = function(argFoo) { // Original name: requestMfaCode
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = michal.promiseFn;
            var _closure2_slot0 = entity;
            entity = michal.resolve;
            var _closure2_slot1 = entity;
            entity = michal.reject;
            var _closure2_slot2 = entity;
            report = michal.modalProps;
            entity = undefined;
            if(!(report === entity)) { _fun00002_ip = 49; continue _fun00001 }
 47:
            report = {};
 49:
            var _closure2_slot3 = report;
            michal = michal.hooks;
            if(!(michal === entity)) { _fun00002_ip = 65; continue _fun00001 }
 63:
            michal = {};
 65:
            oscard = michal.onEarlyClose;
            var _closure2_slot4 = oscard;
            tangon = function() { // Original name: handleEarlyClose
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure2_slot4;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00004_ip = 23; continue _fun00003 }
 13:
                    michal = _closure2_slot4;
                    entity = undefined;
                    entity = michal.bind(entity)();
 23:
                    entity = undefined;
                    return entity;
                }
            };
            var _closure2_slot5 = tangon;
            michal = function(argFoo) { // Original name: closeAndResolve
                michal = _closure1_slot4;
                entity = undefined;
                michal = michal.bind(entity)();
                zuuluu = _closure2_slot1;
                michal = argFoo;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            var _closure2_slot6 = michal;
            michal = function(argFoo) { // Original name: closeAndReject
                michal = _closure1_slot4;
                entity = undefined;
                michal = michal.bind(entity)();
                zuuluu = _closure2_slot2;
                michal = argFoo;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            var _closure2_slot7 = michal;
            zuuluu = function(argFoo) { // Original name: handleSubmitCode
                zuuluu = _closure1_slot8;
                michal = {};
                tangon = _closure2_slot0;
                michal['promiseFn'] = tangon;
                tangon = _closure2_slot6;
                michal['resolve'] = tangon;
                tangon = _closure2_slot7;
                michal['reject'] = tangon;
                tangon = argFoo;
                michal['code'] = tangon;
                entity = _closure2_slot9;
                michal['mfaCodeHandler'] = entity;
                entity = true;
                michal['isModalOpen'] = entity;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            };
            var _closure2_slot8 = zuuluu;
            michal = function(argFoo) { // Original name: errorHandler
                entity = argFoo;
                entity = entity.res;
                report = _closure1_slot3;
                tangon = _closure2_slot8;
                zuuluu = _closure2_slot5;
                michal = {};
                option = _closure2_slot3;
                verify = michal;
                oscard = copyDataProperties(verify, option);
                entity = entity.body;
                oscard = entity.message;
                entity = 'error';
                michal[entity] = oscard;
                entity = undefined;
                michal = report.bind(entity)(tangon, zuuluu, michal);
                return entity;
            };
            var _closure2_slot9 = michal;
            option = _closure1_slot3;
            golfie = null;
            if(!(golfie == option)) { _fun00002_ip = 143; continue _fun00001 }
 133:
            if(!(golfie != oscard)) { _fun00002_ip = 154; continue _fun00001 }
 137:
            oscard = oscard.bind(entity)();
            _fun00002_ip = 154; continue _fun00001;
 143:
            michal = _closure1_slot3;
            michal = michal.bind(entity)(zuuluu, tangon, report);
 154:
            return entity;
        }
    };
    var _closure1_slot7 = michal;
    entity = function(argFoo) { // Original name: executePromise
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            verify = argFoo;
            report = verify.promiseFn;
            var _closure2_slot0 = report;
            tangon = verify.resolve;
            var _closure2_slot1 = tangon;
            michal = verify.reject;
            var _closure2_slot2 = michal;
            golfie = verify.code;
            michal = verify.mfaCodeHandler;
            zuuluu = undefined;
            if(!(michal === zuuluu)) { _fun00006_ip = 59; continue _fun00005 }
 52:
            michal = _closure1_slot7;
 59:
            var _closure2_slot3 = michal;
            michal = verify.isModalOpen;
            if(!(michal === zuuluu)) { _fun00006_ip = 75; continue _fun00005 }
 73:
            michal = false;
 75:
            var _closure2_slot4 = michal;
            option = {'promiseFn': 0, 'resolve': 0, 'reject': 0, 'code': 0, 'mfaCodeHandler': 0, 'isModalOpen': 0};
            michal = null;
            romeon = option;
            yankee = null;
            oscard = silentSetPrototypeOf(romeon, yankee);
            romeon = {};
            yankee = verify;
            offset = option;
            oscard = copyDataProperties(romeon, yankee, offset);
            var _closure2_slot5 = oscard;
            if(!(michal == golfie)) { _fun00006_ip = 128; continue _fun00005 }
 124:
            michal = {};
            _fun00006_ip = 137; continue _fun00005;
 128:
            oscard = {};
            oscard['code'] = golfie;
            michal = oscard;
 137:
            zuuluu = report.bind(zuuluu)(michal);
            michal = zuuluu.then;
            entity = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tangon = argFoo;
                    zuuluu = _closure2_slot4;
                    michal = tangon.body;
                    if(!michal) { _fun00008_ip = 38; continue _fun00007 }
 18:
                    report = tangon.body;
                    oscard = report.code;
                    report = 60008;
                    michal = report === oscard;
 38:
                    if(michal) { _fun00008_ip = 62; continue _fun00007 }
 41:
                    if(!zuuluu) { _fun00008_ip = 59; continue _fun00007 }
 44:
                    oscard = tangon.status;
                    report = 429;
                    zuuluu = report === oscard;
 59:
                    michal = zuuluu;
 62:
                    if(michal) { _fun00008_ip = 78; continue _fun00007 }
 65:
                    zuuluu = _closure2_slot2;
                    michal = undefined;
                    zuuluu = zuuluu.bind(michal)(tangon);
                    return michal;
 78:
                    zuuluu = _closure2_slot3;
                    michal = {};
                    report = _closure2_slot0;
                    michal['promiseFn'] = report;
                    report = _closure2_slot1;
                    michal['resolve'] = report;
                    report = _closure2_slot2;
                    michal['reject'] = report;
                    michal['res'] = tangon;
                    golfie = _closure2_slot5;
                    option = michal;
                    entity = copyDataProperties(option, golfie);
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = ['checkEnabled'];
    var _closure1_slot2 = entity;
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
    var _closure1_slot5 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 2;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.showAlert;
    var _closure1_slot3 = report;
    report = function() { // Original name: l
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        entity = michal.closeAlert;
        entity = entity.bind(michal)();
        return entity;
    };
    var _closure1_slot4 = report;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'utils/MFAInterceptionUtils.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo, argBar) { // Original name: mfaInterceptor
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            report = argBar;
            michal = argFoo;
            var _closure2_slot0 = michal;
            zuuluu = null;
            if(!(zuuluu == report)) { _fun00010_ip = 20; continue _fun00009 }
 18:
            report = {};
 20:
            michal = report.checkEnabled;
            tangon = undefined;
            if(!(tangon === michal)) { _fun00010_ip = 76; continue _fun00009 }
 32:
            golfie = _closure1_slot6;
            oscard = golfie.getCurrentUser;
            golfie = oscard.bind(golfie)();
            option = zuuluu == golfie;
            oscard = undefined;
            if(option) { _fun00010_ip = 63; continue _fun00009 }
 57:
            oscard = golfie.mfaEnabled;
 63:
            zuuluu = zuuluu != oscard;
            if(!zuuluu) { _fun00010_ip = 73; continue _fun00009 }
 70:
            zuuluu = oscard;
 73:
            michal = zuuluu;
 76:
            var _closure2_slot1 = michal;
            zuuluu = _closure1_slot5;
            michal = _closure1_slot2;
            michal = zuuluu.bind(tangon)(report, michal);
            var _closure2_slot2 = michal;
            michal = global;
            zuuluu = michal.Promise;
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            offset = function(argFoo, argBar) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    entity = 3;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    oscard = tangon.bind(entity)(zuuluu);
                    report = oscard.resolveThunk;
                    zuuluu = _closure2_slot1;
                    zuuluu = report.bind(oscard)(zuuluu);
                    if(zuuluu) { _fun00012_ip = 52; continue _fun00011 }
 46:
                    zuuluu = _closure1_slot8;
                    _fun00012_ip = 56; continue _fun00011;
 52:
                    zuuluu = _closure1_slot7;
 56:
                    michal = {};
                    report = _closure2_slot0;
                    michal['promiseFn'] = report;
                    report = argFoo;
                    michal['resolve'] = report;
                    report = argBar;
                    michal['reject'] = report;
                    golfie = _closure2_slot2;
                    option = michal;
                    tangon = copyDataProperties(option, golfie);
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                }
            };
            yankee = michal;
            entity = new yankee[zuuluu](offset, verify);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    zuuluu['requestMfaCode'] = michal;
    return entity;
})();