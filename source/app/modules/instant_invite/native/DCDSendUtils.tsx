// app/modules/instant_invite/native/DCDSendUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
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
    golfie = tangon.Linking;
    var _closure1_slot3 = golfie;
    tangon = tangon.NativeModules;
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/instant_invite/native/DCDSendUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 1;
            tangon = tangon[entity];
            entity = undefined;
            report = report.bind(entity)(tangon);
            tangon = report.isAndroid;
            tangon = tangon.bind(report)();
            if(tangon) { _fun00002_ip = 67; continue _fun00001 }
 40:
            tangon = _closure1_slot4;
            oscard = tangon.DCDSend;
            report = oscard.sendSMS;
            tangon = argBar;
            tangon = report.bind(oscard)(michal, tangon);
            _fun00002_ip = 134; continue _fun00001;
 67:
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 2;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.sendSMS;
            golfie = michal.body;
            oscard = null;
            option = oscard != golfie;
            zuuluu = '';
            if(!option) { _fun00002_ip = 114; continue _fun00001 }
 111:
            zuuluu = golfie;
 114:
            michal = michal.recipients;
            if(!(oscard == michal)) { _fun00002_ip = 128; continue _fun00001 }
 124:
            michal = new Array(0);
 128:
            michal = tangon.bind(report)(zuuluu, michal);
 134:
            return entity;
        }
    };
    zuuluu['sendSMS'] = tangon;
    tangon = function(argFoo, argBar) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 1;
            tangon = tangon[entity];
            entity = undefined;
            report = report.bind(entity)(tangon);
            tangon = report.isAndroid;
            tangon = tangon.bind(report)();
            if(tangon) { _fun00004_ip = 67; continue _fun00003 }
 40:
            tangon = _closure1_slot4;
            oscard = tangon.DCDSend;
            report = oscard.sendMail;
            tangon = argBar;
            tangon = report.bind(oscard)(michal, tangon);
            _fun00004_ip = 154; continue _fun00003;
 67:
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 2;
            zuuluu = report[zuuluu];
            oscard = tangon.bind(entity)(zuuluu);
            report = oscard.sendMail;
            option = michal.subject;
            golfie = null;
            verify = golfie != option;
            tangon = '';
            zuuluu = tangon;
            if(!verify) { _fun00004_ip = 118; continue _fun00003 }
 115:
            zuuluu = option;
 118:
            option = michal.body;
            verify = golfie != option;
            if(!verify) { _fun00004_ip = 133; continue _fun00003 }
 130:
            tangon = option;
 133:
            michal = michal.recipients;
            if(!(golfie == michal)) { _fun00004_ip = 147; continue _fun00003 }
 143:
            michal = new Array(0);
 147:
            michal = report.bind(oscard)(zuuluu, tangon, michal);
 154:
            return entity;
        }
    };
    zuuluu['sendMail'] = tangon;
    tangon = function() {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 1;
            entity = tangon[entity];
            oscard = undefined;
            zuuluu = zuuluu.bind(oscard)(entity);
            entity = zuuluu.isAndroid;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00006_ip = 59; continue _fun00005 }
 37:
            entity = _closure1_slot4;
            zuuluu = entity.DCDSend;
            entity = zuuluu.canSendSMS;
            entity = entity.bind(zuuluu)();
            _fun00006_ip = 108; continue _fun00005;
 59:
            zuuluu = global;
            tangon = zuuluu.Promise;
            zuuluu = tangon.resolve;
            report = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 2;
            michal = golfie[michal];
            report = report.bind(oscard)(michal);
            michal = report.canSendSMS;
            michal = michal.bind(report)();
            entity = zuuluu.bind(tangon)(michal);
 108:
            return entity;
        }
    };
    zuuluu['canSendSMS'] = tangon;
    tangon = function() {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 1;
            entity = tangon[entity];
            oscard = undefined;
            zuuluu = zuuluu.bind(oscard)(entity);
            entity = zuuluu.isAndroid;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00008_ip = 59; continue _fun00007 }
 37:
            entity = _closure1_slot4;
            zuuluu = entity.DCDSend;
            entity = zuuluu.canSendMail;
            entity = entity.bind(zuuluu)();
            _fun00008_ip = 108; continue _fun00007;
 59:
            zuuluu = global;
            tangon = zuuluu.Promise;
            zuuluu = tangon.resolve;
            report = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 2;
            michal = golfie[michal];
            report = report.bind(oscard)(michal);
            michal = report.canSendMail;
            michal = michal.bind(report)();
            entity = zuuluu.bind(tangon)(michal);
 108:
            return entity;
        }
    };
    zuuluu['canSendMail'] = tangon;
    michal = function(argFoo) { // Original name: canOpenUrlScheme
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = argFoo;
            entity = zuuluu;
            var _closure2_slot0 = zuuluu;
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 1;
            zuuluu = oscard[zuuluu];
            oscard = undefined;
            report = report.bind(oscard)(zuuluu);
            zuuluu = report.isAndroid;
            zuuluu = zuuluu.bind(report)();
            if(zuuluu) { _fun00010_ip = 86; continue _fun00009 }
 49:
            zuuluu = global;
            report = zuuluu.Promise;
            zuuluu = report.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: report}});
            option = function(argFoo) {
                michal = argFoo;
                var _closure3_slot0 = michal;
                tangon = _closure1_slot3;
                zuuluu = tangon.canOpenURL;
                golfie = _closure2_slot0;
                michal = global;
                michal = michal.HermesInternal;
                oscard = michal.concat;
                report = '';
                michal = '://app';
                michal = oscard.bind(report)(golfie, michal);
                tangon = zuuluu.bind(tangon)(michal);
                zuuluu = tangon.then;
                michal = function(argFoo) {
                    zuuluu = _closure3_slot0;
                    entity = undefined;
                    michal = argFoo;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = zuuluu.catch;
                entity = function() {
                    zuuluu = _closure3_slot0;
                    entity = undefined;
                    michal = false;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            verify = zuuluu;
            michal = new verify[report](option, golfie);
            michal = michal instanceof Object ? michal : zuuluu;
            return michal;
 86: // try_start_0
            michal = global;
            zuuluu = michal.Promise;
            michal = zuuluu.resolve;
            report = _closure1_slot1;
            golfie = _closure1_slot2;
            tangon = 2;
            tangon = golfie[tangon];
            report = report.bind(oscard)(tangon);
            tangon = report.canOpenUrlScheme;
            entity = tangon.bind(report)(entity);
            entity = michal.bind(zuuluu)(entity);
 136: // try_end0
            return entity;
 138: // catch_target0
            CatchBlockStart(arg_register=0);
            entity = global;
            zuuluu = entity.Promise;
            michal = zuuluu.resolve;
            entity = false;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['canOpenUrlScheme'] = michal;
    return entity;
})();