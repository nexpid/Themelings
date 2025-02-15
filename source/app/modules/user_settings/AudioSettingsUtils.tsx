// app/modules/user_settings/AudioSettingsUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.ProtoAudioSettingsContextTypes;
    var _closure1_slot2 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_settings/AudioSettingsUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar) { // Original name: snapVolumeToDefault
        _fun52747: for(var _fun52747_ip = 0; ; ) switch(_fun52747_ip) {
 0:
            entity = argFoo;
            report = _closure1_slot0;
            mike = _closure1_slot1;
            tango = 1;
            mike = mike[tango];
            verify = undefined;
            mike = report.bind(verify)(mike);
            mike = mike.MediaEngineContextTypes;
            report = mike.STREAM;
            mike = argBar;
            if(!(mike !== report)) { _fun52747_ip = 81; continue _fun52747 }
 47:
            report = _closure1_slot0;
            oscar = _closure1_slot1;
            mike = 2;
            mike = oscar[mike];
            mike = report.bind(verify)(mike);
            mike = mike.AudioSettingsDefaultVolumes;
            mike = mike.USER;
            _fun52747_ip = 113; continue _fun52747;
 81:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            report = 2;
            report = golf[report];
            report = oscar.bind(verify)(report);
            report = report.AudioSettingsDefaultVolumes;
            mike = report.STREAM;
 113:
            report = global;
            oscar = report.Math;
            report = oscar.abs;
            options = _closure1_slot0;
            offset = _closure1_slot1;
            zulu = 3;
            golf = offset[zulu];
            yankee = options.bind(verify)(golf);
            golf = yankee.amplitudeToPerceptual;
            golf = golf.bind(yankee)(mike);
            zulu = offset[zulu];
            options = options.bind(verify)(zulu);
            zulu = options.amplitudeToPerceptual;
            zulu = zulu.bind(options)(entity);
            zulu = golf - zulu;
            zulu = report.bind(oscar)(zulu);
            if(!(zulu < tango)) { _fun52747_ip = 194; continue _fun52747 }
 191:
            entity = mike;
 194:
            return entity;
        }
    };
    zulu['snapVolumeToDefault'] = tango;
    mike = function(argFoo) { // Original name: coerceAudioContextForProto
        _fun52748: for(var _fun52748_ip = 0; ; ) switch(_fun52748_ip) {
 0:
            tango = argFoo;
            report = _closure1_slot0;
            mike = _closure1_slot1;
            oscar = 1;
            zulu = mike[oscar];
            mike = undefined;
            zulu = report.bind(mike)(zulu);
            zulu = zulu.MediaEngineContextTypes;
            zulu = zulu.DEFAULT;
            if(!(zulu !== tango)) { _fun52748_ip = 91; continue _fun52748 }
 44:
            report = _closure1_slot0;
            zulu = _closure1_slot1;
            zulu = zulu[oscar];
            zulu = report.bind(mike)(zulu);
            zulu = zulu.MediaEngineContextTypes;
            zulu = zulu.STREAM;
            if(!(zulu !== tango)) { _fun52748_ip = 79; continue _fun52748 }
 77:
            return mike;
 79:
            mike = _closure1_slot2;
            mike = mike.STREAM;
            return mike;
 91:
            entity = _closure1_slot2;
            entity = entity.USER;
            return entity;
        }
    };
    zulu['coerceAudioContextForProto'] = mike;
    return entity;
})();