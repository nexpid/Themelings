// app/modules/voice_panel/native/utils/calculatePIPState.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
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
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.VoicePanelModes;
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ParticipantTypes;
    var _closure1_slot5 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_panel/native/utils/calculatePIPState.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: calculatePIPState
        _fun121648: for(var _fun121648_ip = 0; ; ) switch(_fun121648_ip) {
 0:
            oscar = argFoo;
            backup = argBar;
            entity = argGrault;
            mike = entity.focusedId;
            offset = null;
            options = offset != mike;
            if(!options) { _fun121648_ip = 77; continue _fun121648 }
 24:
            report = _closure1_slot2;
            tango = report.getParticipant;
            zulu = entity.focusedId;
            tango = tango.bind(report)(oscar, zulu);
            report = offset == tango;
            zulu = undefined;
            if(report) { _fun121648_ip = 63; continue _fun121648 }
 58:
            zulu = tango.type;
 63:
            mike = _closure1_slot5;
            mike = mike.ACTIVITY;
            options = zulu === mike;
 77:
            mike = global;
            mike = mike.Set;
            zulu = mike.prototype;
            zulu = Object.create(zulu, {constructor: {value: mike}});
            update = zulu;
            mike = new update[mike](echo);
            report = mike instanceof Object ? mike : zulu;
            zulu = _closure1_slot3;
            mike = zulu.getCurrentUserActiveStream;
            golf = mike.bind(zulu)();
            if(!(offset != golf)) { _fun121648_ip = 169; continue _fun121648 }
 126:
            zulu = report.add;
            yankee = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 4;
            tango = tango[mike];
            mike = undefined;
            tango = yankee.bind(mike)(tango);
            mike = tango.encodeStreamKey;
            mike = mike.bind(tango)(golf);
            mike = zulu.bind(report)(mike);
 169:
            zulu = entity.mode;
            mike = _closure1_slot4;
            mike = mike.PANEL;
            golf = zulu === mike;
            mike = entity.focusedId;
            mike = offset != mike;
            if(!mike) { _fun121648_ip = 204; continue _fun121648 }
 201:
            mike = golf;
 204:
            if(!mike) { _fun121648_ip = 223; continue _fun121648 }
 207:
            zulu = report.add;
            mike = entity.focusedId;
            mike = zulu.bind(report)(mike);
 223:
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            romeo = 5;
            mike = mike[romeo];
            yankee = undefined;
            tango = zulu.bind(yankee)(mike);
            zulu = tango.computePIPParticipantToShow;
            mike = {};
            mike['channelId'] = oscar;
            oscar = argBaz;
            mike['lastParticipantId'] = oscar;
            oscar = argCorge;
            mike['speakingUserId'] = oscar;
            oscar = entity.focusedId;
            mike['focusedParticipantId'] = oscar;
            mike['blockList'] = report;
            report = entity.mode;
            mike['panelMode'] = report;
            zulu = zulu.bind(tango)(mike);
            mike = offset == zulu;
            tango = undefined;
            if(mike) { _fun121648_ip = 318; continue _fun121648 }
 313:
            tango = zulu.type;
 318:
            mike = _closure1_slot5;
            mike = mike.STREAM;
            oscar = tango !== mike;
            if(!oscar) { _fun121648_ip = 363; continue _fun121648 }
 335:
            mike = offset == zulu;
            tango = undefined;
            if(mike) { _fun121648_ip = 349; continue _fun121648 }
 344:
            tango = zulu.type;
 349:
            mike = _closure1_slot5;
            mike = mike.ACTIVITY;
            oscar = tango !== mike;
 363:
            if(!oscar) { _fun121648_ip = 406; continue _fun121648 }
 366:
            mike = entity.focusedId;
            mike = offset == mike;
            if(mike) { _fun121648_ip = 403; continue _fun121648 }
 379:
            tango = offset == zulu;
            report = undefined;
            if(tango) { _fun121648_ip = 393; continue _fun121648 }
 388:
            report = zulu.id;
 393:
            tango = entity.focusedId;
            mike = report !== tango;
 403:
            oscar = mike;
 406:
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            mike = mike[romeo];
            report = tango.bind(yankee)(mike);
            tango = report.computePIPSize;
            foxtrot = backup.getTargetDimensions;
            kilo = offset == zulu;
            mike = undefined;
            if(kilo) { _fun121648_ip = 449; continue _fun121648 }
 444:
            mike = zulu.id;
 449:
            mike = foxtrot.bind(backup)(mike);
            if(!(offset == mike)) { _fun121648_ip = 481; continue _fun121648 }
 458:
            offset = _closure1_slot0;
            verify = _closure1_slot1;
            verify = verify[romeo];
            verify = offset.bind(yankee)(verify);
            mike = verify.SquarePIPReferenceDimensions;
 481:
            if(!golf) { _fun121648_ip = 487; continue _fun121648 }
 484:
            golf = options;
 487:
            sizing = entity.showSecondaryPIP;
            update = report;
            echo = mike;
            result = oscar;
            output = golf;
            mike = update[tango](echo, result, output, sizing, kilo);
            entity = {};
            entity['participant'] = zulu;
            entity['dimensions'] = mike;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();