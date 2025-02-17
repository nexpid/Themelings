// app/modules/video_calls/native/components/useShouldForcePipOrientation.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.OrientationLockState;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.isStreamParticipant;
    var _closure1_slot7 = golf;
    tango = tango.ParticipantTypes;
    var _closure1_slot8 = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/video_calls/native/components/useShouldForcePipOrientation.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useShouldForcePipOrientation
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            entity = entity.channel;
            var _closure2_slot0 = entity;
            oscar = _closure1_slot1;
            options = _closure1_slot2;
            tango = 5;
            tango = options[tango];
            report = undefined;
            tango = oscar.bind(report)(tango);
            entity = entity.id;
            entity = tango.bind(report)(entity);
            oscar = _closure1_slot0;
            tango = 6;
            golf = options[tango];
            romeo = oscar.bind(report)(golf);
            yankee = romeo.useStateFromStores;
            verify = _closure1_slot4;
            offset = new Array(2);
            offset[0] = verify;
            golf = _closure1_slot5;
            offset[1] = golf;
            golf = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    report = _closure1_slot4;
                    tango = report.getParticipant;
                    entity = _closure2_slot0;
                    mike = entity.id;
                    oscar = _closure1_slot5;
                    entity = oscar.getId;
                    entity = entity.bind(oscar)();
                    mike = tango.bind(report)(mike, entity);
                    tango = null;
                    report = tango != mike;
                    entity = null;
                    if(!report) { _fun00004_ip = 95; continue _fun00003 }
 56:
                    report = mike.type;
                    zulu = _closure1_slot8;
                    zulu = zulu.USER;
                    entity = null;
                    if(!(report === zulu)) { _fun00004_ip = 95; continue _fun00003 }
 77:
                    zulu = mike.streamId;
                    zulu = tango != zulu;
                    entity = null;
                    if(!zulu) { _fun00004_ip = 95; continue _fun00003 }
 92:
                    entity = mike;
 95:
                    return entity;
                }
            };
            golf = yankee.bind(romeo)(offset, golf);
            tango = options[tango];
            options = oscar.bind(report)(tango);
            oscar = options.useStateFromStoresObject;
            offset = _closure1_slot3;
            tango = new Array(2);
            tango[0] = offset;
            tango[1] = verify;
            mike = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    report = _closure1_slot3;
                    zulu = report.getSelfEmbeddedActivityForChannel;
                    entity = _closure2_slot0;
                    mike = entity.id;
                    zulu = zulu.bind(report)(mike);
                    report = _closure1_slot4;
                    mike = report.getSelectedParticipant;
                    entity = entity.id;
                    oscar = mike.bind(report)(entity);
                    entity = {};
                    mike = null;
                    golf = mike == zulu;
                    offset = undefined;
                    report = undefined;
                    if(golf) { _fun00006_ip = 70; continue _fun00005 }
 65:
                    report = zulu.applicationId;
 70:
                    golf = mike != report;
                    report = null;
                    if(!golf) { _fun00006_ip = 138; continue _fun00005 }
 79:
                    golf = mike == oscar;
                    options = undefined;
                    if(golf) { _fun00006_ip = 93; continue _fun00005 }
 88:
                    options = oscar.id;
 93:
                    verify = _closure1_slot0;
                    yankee = _closure1_slot2;
                    golf = 7;
                    golf = yankee[golf];
                    offset = verify.bind(offset)(golf);
                    verify = offset.embeddedActivityParticipantId;
                    golf = zulu.applicationId;
                    golf = verify.bind(offset)(golf);
                    report = null;
                    if(!(options === golf)) { _fun00006_ip = 138; continue _fun00005 }
 135:
                    report = oscar;
 138:
                    entity['focusedEmbeddedActivityParticipant'] = report;
                    report = mike == zulu;
                    mike = null;
                    if(report) { _fun00006_ip = 172; continue _fun00005 }
 152:
                    report = _closure1_slot3;
                    tango = report.getPipOrientationLockStateForApp;
                    zulu = zulu.applicationId;
                    mike = tango.bind(report)(zulu);
 172:
                    entity['activityLockOrientation'] = mike;
                    return entity;
                }
            };
            mike = oscar.bind(options)(tango, mike);
            options = mike.focusedEmbeddedActivityParticipant;
            oscar = mike.activityLockOrientation;
            mike = null;
            verify = mike != entity;
            tango = null;
            if(!verify) { _fun00002_ip = 199; continue _fun00001 }
 166:
            verify = entity.user;
            offset = verify.id;
            yankee = _closure1_slot5;
            verify = yankee.getId;
            verify = verify.bind(yankee)();
            tango = null;
            if(!(offset !== verify)) { _fun00002_ip = 199; continue _fun00001 }
 196:
            tango = entity;
 199:
            entity = tango;
            if(!(mike != options)) { _fun00002_ip = 209; continue _fun00001 }
 206:
            entity = options;
 209:
            if(!(mike != entity)) { _fun00002_ip = 295; continue _fun00001 }
 213:
            options = _closure1_slot7;
            options = options.bind(report)(entity);
            if(options) { _fun00002_ip = 239; continue _fun00001 }
 225:
            options = _closure1_slot6;
            options = options.LANDSCAPE;
            if(!(oscar === options)) { _fun00002_ip = 295; continue _fun00001 }
 239:
            if(!(mike == golf)) { _fun00002_ip = 295; continue _fun00001 }
 243:
            if(!(mike != tango)) { _fun00002_ip = 261; continue _fun00001 }
 247:
            tango = tango.id;
            entity = entity.id;
            if(!(tango === entity)) { _fun00002_ip = 295; continue _fun00001 }
 261:
            tango = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 8;
            entity = golf[entity];
            entity = tango.bind(report)(entity);
            entity = entity.OrientationType;
            entity = entity.LANDSCAPE;
            _fun00002_ip = 394; continue _fun00001;
 295:
            tango = _closure1_slot6;
            tango = tango.LANDSCAPE;
            if(!(oscar !== tango)) { _fun00002_ip = 359; continue _fun00001 }
 309:
            tango = _closure1_slot6;
            tango = tango.PORTRAIT;
            mike = null;
            if(!(oscar === tango)) { _fun00002_ip = 357; continue _fun00001 }
 325:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            tango = 8;
            tango = golf[tango];
            tango = oscar.bind(report)(tango);
            tango = tango.OrientationType;
            mike = tango.PORTRAIT;
 357:
            _fun00002_ip = 391; continue _fun00001;
 359:
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            zulu = 8;
            zulu = oscar[zulu];
            zulu = tango.bind(report)(zulu);
            zulu = zulu.OrientationType;
            mike = zulu.LANDSCAPE;
 391:
            entity = mike;
 394:
            return entity;
        }
    };
    zulu['useShouldForcePipOrientation'] = mike;
    return entity;
})();