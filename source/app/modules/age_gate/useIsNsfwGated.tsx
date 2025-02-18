// app/modules/age_gate/useIsNsfwGated.tsx
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
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/age_gate/useIsNsfwGated.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useIsNsfwGated
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            entity = entity.nsfw;
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            report = 2;
            zuuluu = option[report];
            oscard = undefined;
            yankee = golfie.bind(oscard)(zuuluu);
            offset = yankee.useStateFromStores;
            zuuluu = _closure1_slot3;
            verify = new Array(1);
            verify[0] = zuuluu;
            zuuluu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure1_slot3;
                    entity = michal.getCurrentUser;
                    michal = entity.bind(michal)();
                    entity = null;
                    zuuluu = entity == michal;
                    entity = undefined;
                    if(zuuluu) { _fun00004_ip = 33; continue _fun00003 }
 27:
                    entity = michal.nsfwAllowed;
 33:
                    return entity;
                }
            };
            verify = offset.bind(yankee)(verify, zuuluu);
            zuuluu = false;
            zuuluu = zuuluu === verify;
            report = option[report];
            oscard = golfie.bind(oscard)(report);
            report = oscard.useStateFromStores;
            golfie = _closure1_slot2;
            tangon = new Array(1);
            tangon[0] = golfie;
            michal = function() {
                zuuluu = _closure1_slot2;
                michal = zuuluu.didAgree;
                entity = _closure2_slot0;
                entity = entity.guild_id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = report.bind(oscard)(tangon, michal);
            michal = !michal;
            if(!entity) { _fun00002_ip = 126; continue _fun00001 }
 117:
            if(michal) { _fun00002_ip = 123; continue _fun00001 }
 120:
            michal = zuuluu;
 123:
            entity = michal;
 126:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();