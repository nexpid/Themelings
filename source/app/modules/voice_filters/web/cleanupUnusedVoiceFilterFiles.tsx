// app/modules/voice_filters/web/cleanupUnusedVoiceFilterFiles.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    entity = function() { // Original name: _cleanupUnusedVoiceFilterFiles
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot2;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 198; continue _fun00001 }
 10:
                    zuuluu = argFoo;
                    michal = undefined;
                    oscard = undefined;
                    tangon = undefined;
 19: // try_start_0
                    option = _closure1_slot0;
                    verify = _closure1_slot1;
                    golfie = 2;
                    golfie = verify[golfie];
                    option = option.bind(michal)(golfie);
                    golfie = option.cleanupUnusedVoiceFilterFiles;
                    zuuluu = golfie.bind(option)(zuuluu);
                    SaveGenerator(address=57);
 55:
                    return zuuluu;
 57:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(golfie) { _fun00002_ip = 160; continue _fun00001 }
 63:
                    golfie = zuuluu.deletedFiles;
                    oscard = golfie;
                    tangon = zuuluu.errors;
                    option = golfie.length;
                    golfie = 0;
                    if(!(option > golfie)) { _fun00002_ip = 118; continue _fun00001 }
 89:
                    offset = _closure1_slot3;
                    verify = offset.info;
                    option = {};
                    option['deletedFiles'] = oscard;
                    oscard = 'VF cleanup completed';
                    oscard = verify.bind(offset)(oscard, option);
 118:
                    oscard = tangon;
                    oscard = oscard.length;
                    if(!(oscard > golfie)) { _fun00002_ip = 158; continue _fun00001 }
 130:
                    golfie = _closure1_slot3;
                    oscard = golfie.warn;
                    report = {};
                    report['errors'] = tangon;
                    tangon = 'VF cleanup had errors';
                    tangon = oscard.bind(golfie)(tangon, report);
 158: // try_end0
                    _fun00002_ip = 195; continue _fun00001;
 160:
                    return zuuluu;
 163: // catch_target0
                    CatchBlockStart(arg_register=2);
                    oscard = _closure1_slot3;
                    report = oscard.warn;
                    tangon = {};
                    tangon['error'] = zuuluu;
                    zuuluu = 'VF cleanup failed';
                    zuuluu = report.bind(oscard)(zuuluu, tangon);
 195:
                    return michal;
 198:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot4 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot4 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = report[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = report[tangon];
    golfie = oscard.bind(entity)(tangon);
    tangon = golfie.prototype;
    oscard = Object.create(tangon, {constructor: {value: golfie}});
    yankee = 'cleanupUnusedVoiceFilterFiles';
    romeon = oscard;
    tangon = new romeon[golfie](yankee, offset);
    tangon = tangon instanceof Object ? tangon : oscard;
    var _closure1_slot3 = tangon;
    tangon = 3;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/voice_filters/web/cleanupUnusedVoiceFilterFiles.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: cleanupUnusedVoiceFilterFiles
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['cleanupUnusedVoiceFilterFiles'] = michal;
    return entity;
})();