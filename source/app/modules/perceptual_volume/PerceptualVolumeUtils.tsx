// app/modules/perceptual_volume/PerceptualVolumeUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    zulu = argFred;
    tango = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = tango;
    entity = global;
    golf = entity.Object;
    oscar = golf.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(golf)(zulu, entity, report);
    entity = 1;
    report = tango[entity];
    tango = argBar;
    entity = undefined;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/perceptual_volume/PerceptualVolumeUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: perceptualToAmplitude
        _fun52752: for(var _fun52752_ip = 0; ; ) switch(_fun52752_ip) {
 0:
            mike = argFoo;
            zulu = arguments[1];
            report = undefined;
            if(!(zulu === report)) { _fun52752_ip = 15; continue _fun52752 }
 12:
            zulu = 100;
 15:
            entity = 0;
            if(!(entity !== mike)) { _fun52752_ip = 176; continue _fun52752 }
 24:
            golf = mike / zulu;
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            mike = mike[entity];
            report = tango.bind(report)(mike);
            tango = report.getCurrentConfig;
            mike = {};
            oscar = 'perceptualToAmplitude';
            mike['location'] = oscar;
            tango = tango.bind(report)(mike);
            mike = 1;
            if(!(golf < mike)) { _fun52752_ip = 86; continue _fun52752 }
 76:
            report = tango.gamma;
            if(!(!(report >= entity))) { _fun52752_ip = 144; continue _fun52752 }
 86:
            report = golf - mike;
            if(!(!(golf > mike))) { _fun52752_ip = 102; continue _fun52752 }
 94:
            mike = tango.attenuationRange;
            _fun52752_ip = 108; continue _fun52752;
 102:
            mike = tango.boostRange;
 108:
            verify = report * mike;
            mike = global;
            options = mike.Math;
            oscar = options.pow;
            report = 10;
            mike = 20;
            mike = verify / mike;
            mike = oscar.bind(options)(report, mike);
            _fun52752_ip = 170; continue _fun52752;
 144:
            report = global;
            oscar = report.Math;
            report = oscar.pow;
            tango = tango.gamma;
            mike = report.bind(oscar)(golf, tango);
 170:
            mike = mike * zulu;
            return mike;
 176:
            return entity;
        }
    };
    zulu['perceptualToAmplitude'] = tango;
    mike = function(argFoo) { // Original name: amplitudeToPerceptual
        _fun52753: for(var _fun52753_ip = 0; ; ) switch(_fun52753_ip) {
 0:
            mike = argFoo;
            zulu = arguments[1];
            report = undefined;
            if(!(zulu === report)) { _fun52753_ip = 15; continue _fun52753 }
 12:
            zulu = 100;
 15:
            entity = 0;
            if(!(entity !== mike)) { _fun52753_ip = 176; continue _fun52753 }
 24:
            golf = mike / zulu;
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            mike = mike[entity];
            report = tango.bind(report)(mike);
            tango = report.getCurrentConfig;
            mike = {};
            oscar = 'amplitudeToPerceptual';
            mike['location'] = oscar;
            tango = tango.bind(report)(mike);
            options = 1;
            if(!(golf < options)) { _fun52753_ip = 86; continue _fun52753 }
 76:
            mike = tango.gamma;
            if(!(!(mike >= entity))) { _fun52753_ip = 140; continue _fun52753 }
 86:
            mike = global;
            report = mike.Math;
            mike = report.log10;
            report = mike.bind(report)(golf);
            mike = 20;
            report = mike * report;
            if(!(!(report > entity))) { _fun52753_ip = 124; continue _fun52753 }
 116:
            mike = tango.attenuationRange;
            _fun52753_ip = 130; continue _fun52753;
 124:
            mike = tango.boostRange;
 130:
            mike = report / mike;
            mike = mike + options;
            _fun52753_ip = 170; continue _fun52753;
 140:
            report = global;
            oscar = report.Math;
            report = oscar.pow;
            tango = tango.gamma;
            tango = options / tango;
            mike = report.bind(oscar)(golf, tango);
 170:
            mike = mike * zulu;
            return mike;
 176:
            return entity;
        }
    };
    zulu['amplitudeToPerceptual'] = mike;
    return entity;
})();