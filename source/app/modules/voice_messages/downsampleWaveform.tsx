// app/modules/voice_messages/downsampleWaveform.tsx
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
    tango = 'modules/voice_messages/downsampleWaveform.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: downsampleWaveform
        _fun101389: for(var _fun101389_ip = 0; ; ) switch(_fun101389_ip) {
 0:
            entity = argFoo;
            verify = argBar;
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            options = 0;
            mike = mike[options];
            report = undefined;
            tango = zulu.bind(report)(mike);
            mike = entity.length;
            zulu = mike >= verify;
            mike = 'Waveform smaller than samples';
            mike = tango.bind(report)(zulu, mike);
            mike = entity.length;
            if(!(mike !== verify)) { _fun101389_ip = 230; continue _fun101389 }
 63:
            mike = entity.length;
            golf = mike / verify;
            mike = new Array(0);
            zulu = mike.length;
            zulu = zulu < verify;
            oscar = global;
            report = 1;
            tango = 0;
            if(!zulu) { _fun101389_ip = 228; continue _fun101389 }
 98:
            yankee = oscar.Math;
            offset = yankee.round;
            zulu = mike.length;
            zulu = zulu + report;
            zulu = zulu * golf;
            offset = offset.bind(yankee)(zulu);
            yankee = tango < offset;
            romeo = 0;
            zulu = 0;
            if(!yankee) { _fun101389_ip = 203; continue _fun101389 }
 138:
            yankee = entity.length;
            yankee = tango < yankee;
            backup = 0;
            foxtrot = 0;
            romeo = 0;
            zulu = 0;
            if(!yankee) { _fun101389_ip = 203; continue _fun101389 }
 158:
            yankee = entity[tango];
            sizing = backup + yankee;
            kilo = foxtrot + 1;
            tango = tango + 1;
            romeo = sizing;
            zulu = kilo;
            if(!(tango < offset)) { _fun101389_ip = 203; continue _fun101389 }
 182:
            yankee = entity.length;
            backup = sizing;
            foxtrot = kilo;
            romeo = backup;
            zulu = foxtrot;
            if(tango < yankee) { _fun101389_ip = 158; continue _fun101389 }
 203:
            yankee = mike.length;
            zulu = romeo / zulu;
            mike[yankee] = zulu;
            zulu = mike.length;
            tango = offset;
            if(zulu < verify) { _fun101389_ip = 98; continue _fun101389 }
 228:
            return mike;
 230:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();