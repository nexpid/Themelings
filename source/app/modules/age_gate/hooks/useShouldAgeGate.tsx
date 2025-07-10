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
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/age_gate/hooks/useShouldAgeGate.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            var _closure2_slot0 = michal;
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            option = 3;
            report = michal[option];
            oscard = undefined;
            offset = tangon.bind(oscard)(report);
            verify = offset.useStateFromStores;
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
            report = verify.bind(offset)(golfie, report);
            var _closure2_slot1 = report;
            michal = michal[option];
            verify = tangon.bind(oscard)(michal);
            golfie = verify.useStateFromStores;
            michal = _closure1_slot4;
            tangon = new Array(1);
            tangon[0] = michal;
            michal = function() {
                michal = _closure1_slot4;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            michal = golfie.bind(verify)(tangon, michal);
            tangon = null;
            golfie = tangon == michal;
            tangon = undefined;
            if(golfie) { _fun00002_ip = 120; continue _fun00001 }
 114:
            tangon = michal.nsfwAllowed;
 120:
            michal = true;
            tangon = michal === tangon;
            michal = _closure1_slot0;
            golfie = _closure1_slot1;
            option = golfie[option];
            verify = michal.bind(oscard)(option);
            option = verify.useStateFromStores;
            offset = _closure1_slot3;
            zuuluu = new Array(1);
            zuuluu[0] = offset;
            entity = function() {
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
            zuuluu = option.bind(verify)(zuuluu, entity);
            entity = 4;
            entity = golfie[entity];
            michal = michal.bind(oscard)(entity);
            entity = michal.isChannelNSFW;
            entity = entity.bind(michal)(report);
            if(!entity) { _fun00002_ip = 209; continue _fun00001 }
 197:
            michal = !tangon;
            if(!tangon) { _fun00002_ip = 206; continue _fun00001 }
 203:
            michal = !zuuluu;
 206:
            entity = michal;
 209:
            return entity;
        }
    };
    zuuluu['useShouldAgeGateChannel'] = michal;
    return entity;
})();