// app/modules/sound_playback/SoundUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    tango = function(argFoo, argBar) { // Original name: createSound
        _fun97819: for(var _fun97819_ip = 0; ; ) switch(_fun97819_ip) {
 0:
            oscar = arguments[2];
            report = arguments[3];
            zulu = undefined;
            if(!(oscar === zulu)) { _fun97819_ip = 15; continue _fun97819 }
 12:
            oscar = 1;
 15:
            if(!(report === zulu)) { _fun97819_ip = 32; continue _fun97819 }
 19:
            entity = _closure1_slot5;
            report = entity.DEFAULT;
 32:
            mike = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 5;
            entity = tango[entity];
            entity = mike.bind(zulu)(entity);
            tango = entity.MobileAudioSound;
            entity = tango.prototype;
            mike = Object.create(entity, {constructor: {value: tango}});
            offset = argFoo;
            verify = argBar;
            yankee = mike;
            options = oscar;
            golf = report;
            entity = new yankee[tango](offset, verify, options, golf, oscar);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        }
    };
    var _closure1_slot7 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.SoundOutputChannel;
    var _closure1_slot5 = report;
    report = 3;
    report = golf[report];
    report = oscar.bind(entity)(report);
    verify = report.Logger;
    report = verify.prototype;
    options = Object.create(report, {constructor: {value: verify}});
    foxtrot = 'SoundUtils';
    backup = options;
    report = new backup[verify](foxtrot, romeo);
    report = report instanceof Object ? report : options;
    var _closure1_slot6 = report;
    report = 6;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/sound_playback/SoundUtils.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo, argBar) { // Original name: createSoundForPack
        _fun97820: for(var _fun97820_ip = 0; ; ) switch(_fun97820_ip) {
 0:
            oscar = argFoo;
            report = arguments[2];
            tango = arguments[3];
            zulu = undefined;
            if(!(report === zulu)) { _fun97820_ip = 18; continue _fun97820 }
 15:
            report = 1;
 18:
            if(!(tango === zulu)) { _fun97820_ip = 35; continue _fun97820 }
 22:
            entity = _closure1_slot5;
            tango = entity.DEFAULT;
 35:
            mike = _closure1_slot7;
            golf = _closure1_slot1;
            options = _closure1_slot2;
            entity = 4;
            entity = options[entity];
            golf = golf.bind(zulu)(entity);
            entity = argBar;
            entity = golf.bind(zulu)(entity);
            golf = entity[oscar];
            options = null;
            entity = oscar;
            if(!(options != golf)) { _fun97820_ip = 86; continue _fun97820 }
 83:
            entity = golf;
 86:
            foxtrot = undefined;
            romeo = entity;
            yankee = oscar;
            offset = report;
            verify = tango;
            entity = foxtrot[mike](romeo, yankee, offset, verify, options);
            return entity;
        }
    };
    zulu['createSoundForPack'] = report;
    zulu['createSound'] = tango;
    mike = function(argFoo) { // Original name: playSound
        _fun97821: for(var _fun97821_ip = 0; ; ) switch(_fun97821_ip) {
 0:
            verify = argFoo;
            options = arguments[1];
            report = arguments[2];
            backup = arguments[3];
            golf = arguments[4];
            entity = undefined;
            if(!(options === entity)) { _fun97821_ip = 26; continue _fun97821 }
 23:
            options = 1;
 26:
            var _closure2_slot0 = report;
            if(!(golf === entity)) { _fun97821_ip = 47; continue _fun97821 }
 34:
            mike = _closure1_slot5;
            golf = mike.DEFAULT;
 47:
            mike = _closure1_slot4;
            mike = mike.disableSounds;
            if(mike) { _fun97821_ip = 238; continue _fun97821 }
 66:
            tango = _closure1_slot1;
            offset = _closure1_slot2;
            mike = 4;
            mike = offset[mike];
            offset = tango.bind(entity)(mike);
            tango = null;
            mike = backup;
            if(!(tango == mike)) { _fun97821_ip = 109; continue _fun97821 }
 95:
            romeo = _closure1_slot3;
            yankee = romeo.getSoundpack;
            mike = yankee.bind(romeo)();
 109:
            mike = offset.bind(entity)(mike);
            if(!(tango == mike)) { _fun97821_ip = 157; continue _fun97821 }
 118:
            romeo = _closure1_slot6;
            yankee = romeo.log;
            offset = global;
            offset = offset.HermesInternal;
            foxtrot = offset.concat;
            offset = 'Unable to find sound for pack name: ';
            offset = foxtrot.bind(offset)(backup);
            offset = yankee.bind(romeo)(offset);
 157:
            oscar = _closure1_slot7;
            offset = mike[verify];
            mike = verify;
            if(!(tango != offset)) { _fun97821_ip = 175; continue _fun97821 }
 172:
            mike = offset;
 175:
            echo = undefined;
            result = mike;
            output = verify;
            sizing = options;
            kilo = golf;
            mike = echo[oscar](result, output, sizing, kilo, backup);
            if(!(tango == report)) { _fun97821_ip = 209; continue _fun97821 }
 197:
            tango = mike.play;
            tango = tango.bind(mike)();
            _fun97821_ip = 236; continue _fun97821;
 209:
            tango = mike.playWithListener;
            report = tango.bind(mike)();
            tango = report.then;
            zulu = function(argFoo) {
                _fun97822: for(var _fun97822_ip = 0; ; ) switch(_fun97822_ip) {
 0:
                    entity = argFoo;
                    if(!entity) { _fun97822_ip = 19; continue _fun97822 }
 6:
                    mike = _closure2_slot0;
                    entity = undefined;
                    entity = mike.bind(entity)();
 19:
                    entity = undefined;
                    return entity;
                }
            };
            zulu = tango.bind(report)(zulu);
 236:
            return mike;
 238:
            return entity;
        }
    };
    zulu['playSound'] = mike;
    return entity;
})();