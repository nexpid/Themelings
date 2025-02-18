// app/modules/profile_effects/useScrollableProfileEffects.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/profile_effects/useScrollableProfileEffects.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: _default
        option = argFoo;
        var _closure2_slot0 = option;
        golfie = _closure1_slot3;
        entity = golfie.useState;
        entity = entity.bind(golfie)(option);
        romeon = _closure1_slot2;
        yankee = undefined;
        offset = 2;
        entity = romeon.bind(yankee)(entity, offset);
        foxtra = 0;
        zuuluu = entity[foxtra];
        verify = 1;
        entity = entity[verify];
        var _closure2_slot1 = entity;
        oscard = golfie.useState;
        entity = _closure1_slot4;
        michal = entity.getProfileEffectById;
        michal = michal.bind(entity)(option);
        michal = oscard.bind(golfie)(michal);
        oscard = romeon.bind(yankee)(michal, offset);
        michal = oscard[foxtra];
        oscard = oscard[verify];
        var _closure2_slot2 = oscard;
        oscard = _closure1_slot0;
        backup = _closure1_slot1;
        report = 3;
        report = backup[report];
        kiloes = oscard.bind(yankee)(report);
        report = kiloes.useProfileEffectPreset;
        report = report.bind(kiloes)(option);
        report = 4;
        report = backup[report];
        backup = oscard.bind(yankee)(report);
        oscard = backup.useStateFromStores;
        report = new Array(1);
        report[0] = entity;
        entity = function() {
            entity = _closure1_slot4;
            entity = entity.profileEffects;
            return entity;
        };
        entity = oscard.bind(backup)(report, entity);
        var _closure2_slot3 = entity;
        oscard = entity.reduce;
        report = function(argFoo, argBar, argBaz) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = argFoo;
                michal = argBaz;
                zuuluu = argBar;
                tangon = zuuluu.id;
                zuuluu = _closure2_slot0;
                if(!(tangon === zuuluu)) { _fun00002_ip = 28; continue _fun00001 }
 25:
                entity = michal;
 28:
                return entity;
            }
        };
        oscard = oscard.bind(entity)(report, foxtra);
        report = golfie.useState;
        report = report.bind(golfie)(oscard);
        report = romeon.bind(yankee)(report, offset);
        report = report[verify];
        var _closure2_slot4 = report;
        report = golfie.useRef;
        report = report.bind(golfie)(oscard);
        var _closure2_slot5 = report;
        oscard = golfie.useEffect;
        report = new Array(2);
        report[0] = option;
        report[1] = entity;
        entity = function() {
            zuuluu = _closure2_slot1;
            report = _closure2_slot0;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(report);
            zuuluu = _closure2_slot2;
            tangon = _closure1_slot4;
            michal = tangon.getProfileEffectById;
            michal = michal.bind(tangon)(report);
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        entity = oscard.bind(golfie)(entity, report);
        entity = {};
        report = function() { // Original name: increment
            entity = _closure2_slot5;
            tangon = entity.current;
            michal = 1;
            report = tangon + michal;
            tangon = _closure2_slot3;
            michal = tangon.length;
            michal = report % michal;
            entity['current'] = michal;
            report = _closure2_slot4;
            entity = undefined;
            report = report.bind(entity)(michal);
            oscard = _closure2_slot1;
            report = tangon[michal];
            report = report.id;
            report = oscard.bind(entity)(report);
            zuuluu = _closure2_slot2;
            michal = tangon[michal];
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        entity['increment'] = report;
        tangon = function() { // Original name: decrement
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = _closure2_slot5;
                michal = entity.current;
                entity = 0;
                if(!(entity !== michal)) { _fun00004_ip = 36; continue _fun00003 }
 18:
                entity = _closure2_slot5;
                michal = entity.current;
                entity = 1;
                tangon = michal - entity;
                _fun00004_ip = 52; continue _fun00003;
 36:
                entity = _closure2_slot3;
                michal = entity.length;
                entity = 1;
                tangon = michal - entity;
 52:
                entity = _closure2_slot5;
                entity['current'] = tangon;
                michal = _closure2_slot4;
                entity = undefined;
                michal = michal.bind(entity)(tangon);
                oscard = _closure2_slot1;
                michal = _closure2_slot3;
                report = michal[tangon];
                report = report.id;
                report = oscard.bind(entity)(report);
                zuuluu = _closure2_slot2;
                michal = michal[tangon];
                michal = zuuluu.bind(entity)(michal);
                return entity;
            }
        };
        entity['decrement'] = tangon;
        entity['id'] = zuuluu;
        entity['preset'] = michal;
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();