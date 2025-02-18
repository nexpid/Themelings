// app/modules/voice_panel/native/hooks/useShouldShowGuildNsfwWarning.tsx
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
    tangon = 'modules/voice_panel/native/hooks/useShouldShowGuildNsfwWarning.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useShouldShowGuildNsfwWarning
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            oscard = 3;
            entity = option[oscard];
            michal = undefined;
            offset = golfie.bind(michal)(entity);
            verify = offset.useStateFromStores;
            entity = _closure1_slot2;
            tangon = new Array(1);
            tangon[0] = entity;
            entity = function() {
                zuuluu = _closure1_slot2;
                michal = zuuluu.getChannel;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = verify.bind(offset)(tangon, entity);
            var _closure2_slot1 = tangon;
            entity = option[oscard];
            yankee = golfie.bind(michal)(entity);
            offset = yankee.useStateFromStores;
            entity = _closure1_slot3;
            verify = new Array(1);
            verify[0] = entity;
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
            entity = offset.bind(yankee)(verify, entity);
            oscard = option[oscard];
            golfie = golfie.bind(michal)(oscard);
            oscard = golfie.useStateFromStores;
            option = _closure1_slot4;
            report = new Array(1);
            report[0] = option;
            zuuluu = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = _closure1_slot4;
                    entity = michal.getCurrentUser;
                    entity = entity.bind(michal)();
                    michal = null;
                    zuuluu = michal == entity;
                    michal = undefined;
                    if(zuuluu) { _fun00006_ip = 33; continue _fun00005 }
 27:
                    michal = entity.nsfwAllowed;
 33:
                    entity = false;
                    entity = entity === michal;
                    return entity;
                }
            };
            zuuluu = oscard.bind(golfie)(report, zuuluu);
            entity = !entity;
            if(entity) { _fun00002_ip = 155; continue _fun00001 }
 152:
            entity = zuuluu;
 155:
            if(!entity) { _fun00002_ip = 182; continue _fun00001 }
 158:
            zuuluu = null;
            zuuluu = zuuluu == tangon;
            michal = undefined;
            if(zuuluu) { _fun00002_ip = 179; continue _fun00001 }
 169:
            zuuluu = tangon.isNSFW;
            michal = zuuluu.bind(tangon)();
 179:
            entity = michal;
 182:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();