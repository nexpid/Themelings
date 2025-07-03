// app/modules/age_gate/hooks/useShouldAgeGate.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/age_gate/hooks/useShouldAgeGate.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            verify = 3;
            report = michal[verify];
            entity = undefined;
            offset = tangon.bind(entity)(report);
            option = offset.useStateFromStores;
            report = _closure1_slot2;
            golfie = new Array(1);
            golfie[0] = report;
            report = function() {
                zuuluu = _closure1_slot2;
                michal = zuuluu.getChannel;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            report = option.bind(offset)(golfie, report);
            var _closure2_slot1 = report;
            michal = michal[verify];
            option = tangon.bind(entity)(michal);
            golfie = option.useStateFromStores;
            michal = _closure1_slot4;
            tangon = new Array(1);
            tangon[0] = michal;
            michal = function() {
                michal = _closure1_slot4;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            tangon = golfie.bind(option)(tangon, michal);
            michal = null;
            option = michal == tangon;
            golfie = undefined;
            if(option) { _fun00002_ip = 120; continue _fun00001 }
 114:
            golfie = tangon.nsfwAllowed;
 120:
            tangon = true;
            tangon = tangon === golfie;
            option = _closure1_slot0;
            golfie = _closure1_slot1;
            golfie = golfie[verify];
            option = option.bind(entity)(golfie);
            golfie = option.useStateFromStores;
            verify = _closure1_slot3;
            oscard = new Array(1);
            oscard[0] = verify;
            zuuluu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure1_slot3;
                    michal = zuuluu.didAgree;
                    report = _closure2_slot1;
                    entity = null;
                    report = entity == report;
                    entity = undefined;
                    if(report) { _fun00004_ip = 40; continue _fun00003 }
 31:
                    tangon = _closure2_slot1;
                    entity = tangon.guild_id;
 40:
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                }
            };
            zuuluu = golfie.bind(option)(oscard, zuuluu);
            michal = michal == report;
            entity = undefined;
            if(michal) { _fun00002_ip = 190; continue _fun00001 }
 180:
            michal = report.isNSFW;
            entity = michal.bind(report)();
 190:
            if(!entity) { _fun00002_ip = 205; continue _fun00001 }
 193:
            michal = !tangon;
            if(!tangon) { _fun00002_ip = 202; continue _fun00001 }
 199:
            michal = !zuuluu;
 202:
            entity = michal;
 205:
            return entity;
        }
    };
    zuuluu['useShouldAgeGateChannel'] = michal;
    return entity;
})();