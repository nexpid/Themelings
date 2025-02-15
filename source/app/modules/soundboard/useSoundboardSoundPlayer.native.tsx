// app/modules/soundboard/useSoundboardSoundPlayer.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/soundboard/useSoundboardSoundPlayer.native.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: useSoundboardSoundPlayer
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            offset = argFoo;
            report = argBar;
            zulu = arguments[2];
            var _closure2_slot0 = offset;
            var _closure2_slot1 = report;
            yankee = undefined;
            if(!(zulu === yankee)) { _fun00002_ip = 97; continue _fun00001 }
 25:
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 3;
            mike = oscar[mike];
            mike = tango.bind(yankee)(mike);
            tango = mike.SoundboardSettings;
            mike = tango.getSetting;
            oscar = mike.bind(tango)();
            mike = null;
            golf = mike == oscar;
            tango = undefined;
            if(golf) { _fun00002_ip = 81; continue _fun00001 }
 75:
            tango = oscar.volume;
 81:
            oscar = mike != tango;
            mike = 100;
            if(!oscar) { _fun00002_ip = 94; continue _fun00001 }
 91:
            mike = tango;
 94:
            zulu = mike;
 97:
            var _closure2_slot2 = zulu;
            var _closure2_slot3 = yankee;
            var _closure2_slot4 = yankee;
            options = _closure1_slot4;
            oscar = options.useContext;
            golf = _closure1_slot1;
            romeo = _closure1_slot2;
            mike = 4;
            mike = romeo[mike];
            mike = golf.bind(yankee)(mike);
            mike = oscar.bind(options)(mike);
            verify = mike.audioRef;
            _closure2_slot3 = verify;
            oscar = options.useState;
            mike = false;
            golf = oscar.bind(options)(mike);
            oscar = _closure1_slot3;
            mike = 2;
            golf = oscar.bind(yankee)(golf, mike);
            mike = 0;
            mike = golf[mike];
            oscar = 1;
            oscar = golf[oscar];
            _closure2_slot4 = oscar;
            golf = _closure1_slot0;
            oscar = 5;
            oscar = romeo[oscar];
            romeo = golf.bind(yankee)(oscar);
            yankee = romeo.useStateFromStores;
            tango = _closure1_slot5;
            golf = new Array(1);
            golf[0] = tango;
            oscar = new Array(1);
            oscar[0] = offset;
            tango = function() {
                zulu = _closure1_slot5;
                mike = zulu.isPlayingSound;
                entity = _closure2_slot0;
                entity = entity.soundId;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango = yankee.bind(romeo)(golf, tango, oscar);
            golf = options.useCallback;
            oscar = new Array(3);
            oscar[0] = offset;
            oscar[1] = verify;
            oscar[2] = report;
            report = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot3;
                    mike = mike.current;
                    zulu = null;
                    if(!(zulu != mike)) { _fun00004_ip = 37; continue _fun00003 }
 18:
                    mike = _closure2_slot3;
                    tango = mike.current;
                    mike = tango.pause;
                    mike = mike.bind(tango)();
 37:
                    mike = _closure2_slot1;
                    if(!(zulu != mike)) { _fun00004_ip = 94; continue _fun00003 }
 45:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 6;
                    zulu = zulu[mike];
                    mike = undefined;
                    report = tango.bind(mike)(zulu);
                    tango = report.playSound;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    entity = argFoo;
                    entity = tango.bind(report)(zulu, mike, entity);
 94:
                    entity = undefined;
                    return entity;
                }
            };
            report = golf.bind(options)(report, oscar);
            golf = options.useCallback;
            oscar = new Array(3);
            oscar[0] = offset;
            oscar[1] = zulu;
            oscar[2] = verify;
            zulu = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = global;
                    oscar = entity.Audio;
                    tango = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 7;
                    mike = mike[entity];
                    entity = undefined;
                    report = tango.bind(entity)(mike);
                    tango = _closure2_slot0;
                    tango = tango.soundId;
                    verify = report.bind(entity)(tango);
                    report = oscar.prototype;
                    report = Object.create(report, {constructor: {value: oscar}});
                    offset = report;
                    tango = new offset[oscar](verify, options);
                    oscar = tango instanceof Object ? tango : report;
                    tango = _closure2_slot3;
                    report = tango.current;
                    tango = null;
                    if(!(tango != report)) { _fun00006_ip = 107; continue _fun00005 }
 88:
                    tango = _closure2_slot3;
                    report = tango.current;
                    tango = report.pause;
                    tango = tango.bind(report)();
 107:
                    tango = _closure2_slot3;
                    tango['current'] = oscar;
                    tango = 0;
                    oscar['currentTime'] = tango;
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    zulu = 8;
                    zulu = report[zulu];
                    report = tango.bind(entity)(zulu);
                    zulu = _closure2_slot0;
                    tango = zulu.volume;
                    zulu = _closure2_slot2;
                    zulu = report.bind(entity)(tango, zulu);
                    oscar['volume'] = zulu;
                    zulu = oscar.play;
                    zulu = zulu.bind(oscar)();
                    zulu = _closure2_slot4;
                    mike = true;
                    zulu = zulu.bind(entity)(mike);
                    report = oscar.addEventListener;
                    tango = {};
                    tango['once'] = mike;
                    zulu = 'pause';
                    mike = function() {
                        zulu = _closure2_slot4;
                        mike = undefined;
                        entity = false;
                        entity = zulu.bind(mike)(entity);
                        return entity;
                    };
                    mike = report.bind(oscar)(zulu, mike, tango);
                    return entity;
                }
            };
            zulu = golf.bind(options)(zulu, oscar);
            golf = options.useCallback;
            oscar = new Array(1);
            oscar[0] = verify;
            entity = function() {
                entity = function() {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        entity = _closure2_slot3;
                        zulu = entity.current;
                        entity = null;
                        mike = entity == zulu;
                        entity = undefined;
                        if(mike) { _fun00008_ip = 33; continue _fun00007 }
 23:
                        mike = zulu.pause;
                        entity = mike.bind(zulu)();
 33:
                        return entity;
                    }
                };
                return entity;
            };
            entity = golf.bind(options)(entity, oscar);
            entity = {};
            entity['playSoundboardSound'] = report;
            entity['isPlayingSound'] = tango;
            entity['previewSound'] = zulu;
            entity['isPreviewingSound'] = mike;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();