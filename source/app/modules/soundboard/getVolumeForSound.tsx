// app/modules/soundboard/getVolumeForSound.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
    golf = oscar[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/soundboard/getVolumeForSound.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: getVolumeForSound
        _fun103548: for(var _fun103548_ip = 0; ; ) switch(_fun103548_ip) {
 0:
            report = arguments[1];
            oscar = undefined;
            if(!(report === oscar)) { _fun103548_ip = 81; continue _fun103548 }
 9:
            mike = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 2;
            entity = zulu[entity];
            entity = mike.bind(oscar)(entity);
            mike = entity.SoundboardSettings;
            entity = mike.getSetting;
            zulu = entity.bind(mike)();
            entity = null;
            tango = entity == zulu;
            mike = undefined;
            if(tango) { _fun103548_ip = 65; continue _fun103548 }
 59:
            mike = zulu.volume;
 65:
            zulu = entity != mike;
            entity = 100;
            if(!zulu) { _fun103548_ip = 78; continue _fun103548 }
 75:
            entity = mike;
 78:
            report = entity;
 81:
            zulu = _closure1_slot0;
            entity = _closure1_slot1;
            tango = 1;
            entity = entity[tango];
            zulu = zulu.bind(oscar)(entity);
            entity = zulu.amplitudeToPerceptual;
            entity = entity.bind(zulu)(report);
            golf = 100;
            oscar = entity / golf;
            entity = global;
            report = entity.Math;
            zulu = report.min;
            options = _closure1_slot2;
            mike = options.getOutputVolume;
            mike = mike.bind(options)();
            mike = mike / golf;
            report = zulu.bind(report)(mike, tango);
            zulu = entity.Math;
            mike = zulu.min;
            entity = argFoo;
            entity = entity * oscar;
            entity = entity * report;
            entity = mike.bind(zulu)(entity, tango);
            return entity;
        }
    };
    zulu['default'] = tango;
    mike = function(argFoo) { // Original name: getPerceptualSoundboardVolume
        _fun103549: for(var _fun103549_ip = 0; ; ) switch(_fun103549_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 1;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.amplitudeToPerceptual;
            entity = null;
            oscar = entity != report;
            mike = 100;
            entity = mike;
            if(!oscar) { _fun103549_ip = 52; continue _fun103549 }
 49:
            entity = report;
 52:
            entity = zulu.bind(tango)(entity);
            entity = entity / mike;
            return entity;
        }
    };
    zulu['getPerceptualSoundboardVolume'] = mike;
    return entity;
})();