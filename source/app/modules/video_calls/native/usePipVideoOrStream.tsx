// app/modules/video_calls/native/usePipVideoOrStream.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golf;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 8;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    report = tango.isStreamParticipant;
    var _closure1_slot11 = report;
    report = tango.isUserParticipant;
    var _closure1_slot12 = report;
    tango = tango.ParticipantTypes;
    var _closure1_slot13 = tango;
    tango = function(argFoo) { // Original name: usePipVideoOrStream
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 9;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStores;
        golf = _closure1_slot4;
        zulu = new Array(3);
        zulu[0] = golf;
        golf = _closure1_slot10;
        zulu[1] = golf;
        mike = _closure1_slot5;
        zulu[2] = mike;
        mike = new Array(1);
        mike[0] = oscar;
        entity = function() {
            _fun73449: for(var _fun73449_ip = 0; ; ) switch(_fun73449_ip) {
 0:
                entity = _closure2_slot0;
                tango = null;
                if(!(tango == entity)) { _fun73449_ip = 21; continue _fun73449 }
 15:
                zulu = new Array(0);
                _fun73449_ip = 43; continue _fun73449;
 21:
                oscar = _closure1_slot4;
                mike = oscar.getVideoParticipants;
                entity = _closure2_slot0;
                zulu = mike.bind(oscar)(entity);
 43:
                entity = _closure2_slot0;
                entity = tango != entity;
                oscar = null;
                if(!entity) { _fun73449_ip = 78; continue _fun73449 }
 56:
                options = _closure1_slot4;
                mike = options.getSelectedParticipant;
                entity = _closure2_slot0;
                oscar = mike.bind(options)(entity);
 78:
                mike = zulu.find;
                entity = function(argFoo) {
                    _fun73450: for(var _fun73450_ip = 0; ; ) switch(_fun73450_ip) {
 0:
                        mike = argFoo;
                        zulu = mike.type;
                        entity = _closure1_slot13;
                        entity = entity.USER;
                        entity = zulu === entity;
                        if(!entity) { _fun73450_ip = 37; continue _fun73450 }
 28:
                        mike = mike.localVideoDisabled;
                        entity = !mike;
 37:
                        return entity;
                    }
                };
                entity = mike.bind(zulu)(entity);
                verify = _closure1_slot15;
                mike = {};
                options = _closure2_slot0;
                mike['channelId'] = options;
                offset = _closure1_slot10;
                mike['VideoSpeakerStore'] = offset;
                offset = _closure1_slot4;
                mike['ChannelRTCStore'] = offset;
                offset = undefined;
                mike = verify.bind(offset)(mike);
                if(!(tango == options)) { _fun73449_ip = 147; continue _fun73449 }
 141:
                yankee = new Array(0);
                _fun73449_ip = 166; continue _fun73449;
 147:
                verify = _closure1_slot5;
                options = verify.getAllActiveStreamsForChannel;
                golf = _closure2_slot0;
                yankee = options.bind(verify)(golf);
 166:
                var _closure3_slot0 = mike;
                golf = _closure1_slot11;
                golf = golf.bind(offset)(mike);
                options = mike;
                if(!golf) { _fun73449_ip = 222; continue _fun73449 }
 185:
                verify = yankee.filter;
                golf = function(argFoo) {
                    _fun73451: for(var _fun73451_ip = 0; ; ) switch(_fun73451_ip) {
 0:
                        report = argFoo;
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 10;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.encodeStreamKey;
                        mike = {};
                        oscar = report.streamType;
                        mike['streamType'] = oscar;
                        oscar = report.guildId;
                        mike['guildId'] = oscar;
                        oscar = report.channelId;
                        mike['channelId'] = oscar;
                        report = report.ownerId;
                        mike['ownerId'] = report;
                        mike = zulu.bind(tango)(mike);
                        zulu = _closure3_slot0;
                        tango = null;
                        tango = tango == zulu;
                        if(tango) { _fun73451_ip = 102; continue _fun73451 }
 97:
                        entity = zulu.id;
 102:
                        entity = mike === entity;
                        return entity;
                    }
                };
                golf = verify.bind(yankee)(golf);
                verify = golf.length;
                golf = 0;
                if(!(!(verify > golf))) { _fun73449_ip = 219; continue _fun73449 }
 213:
                _closure3_slot0 = offset;
                mike = undefined;
 219:
                options = mike;
 222:
                mike = entity;
                if(!(tango != options)) { _fun73449_ip = 232; continue _fun73449 }
 229:
                mike = options;
 232:
                report = tango != oscar;
                if(!report) { _fun73449_ip = 262; continue _fun73449 }
 239:
                golf = oscar.id;
                verify = tango == options;
                oscar = undefined;
                if(verify) { _fun73449_ip = 258; continue _fun73449 }
 253:
                oscar = options.id;
 258:
                report = golf === oscar;
 262:
                if(!report) { _fun73449_ip = 269; continue _fun73449 }
 265:
                report = tango != mike;
 269:
                if(!report) { _fun73449_ip = 295; continue _fun73449 }
 272:
                golf = mike.id;
                verify = tango == options;
                oscar = undefined;
                if(verify) { _fun73449_ip = 291; continue _fun73449 }
 286:
                oscar = options.id;
 291:
                report = golf === oscar;
 295:
                if(!report) { _fun73449_ip = 345; continue _fun73449 }
 298:
                golf = _closure1_slot0;
                yankee = _closure1_slot2;
                oscar = 11;
                oscar = yankee[oscar];
                options = golf.bind(offset)(oscar);
                golf = options.isModalOpen;
                verify = _closure1_slot1;
                oscar = 12;
                oscar = yankee[oscar];
                oscar = verify.bind(offset)(oscar);
                report = golf.bind(options)(oscar);
 345:
                if(!report) { _fun73449_ip = 351; continue _fun73449 }
 348:
                mike = entity;
 351:
                report = tango != mike;
                entity = null;
                if(!report) { _fun73449_ip = 420; continue _fun73449 }
 360:
                oscar = mike.type;
                report = _closure1_slot13;
                report = report.ACTIVITY;
                entity = null;
                if(!(oscar !== report)) { _fun73449_ip = 420; continue _fun73449 }
 381:
                report = mike.type;
                zulu = _closure1_slot13;
                zulu = zulu.PRESENCE_EMBEDDED_ACTIVITY;
                entity = null;
                if(!(report !== zulu)) { _fun73449_ip = 420; continue _fun73449 }
 402:
                zulu = mike.streamId;
                zulu = tango != zulu;
                entity = null;
                if(!zulu) { _fun73449_ip = 420; continue _fun73449 }
 417:
                entity = mike;
 420:
                return entity;
            }
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    var _closure1_slot14 = tango;
    report = function(argFoo) { // Original name: getVideoOrStreamParticipant
        _fun73452: for(var _fun73452_ip = 0; ; ) switch(_fun73452_ip) {
 0:
            entity = argFoo;
            golf = entity.channelId;
            options = entity.VideoSpeakerStore;
            oscar = entity.ChannelRTCStore;
            entity = null;
            if(!(entity == golf)) { _fun73452_ip = 32; continue _fun73452 }
 26:
            tango = new Array(0);
            _fun73452_ip = 43; continue _fun73452;
 32:
            mike = oscar.getVideoParticipants;
            tango = mike.bind(oscar)(golf);
 43:
            zulu = tango.find;
            mike = function(argFoo) {
                _fun73453: for(var _fun73453_ip = 0; ; ) switch(_fun73453_ip) {
 0:
                    zulu = argFoo;
                    tango = zulu.id;
                    report = _closure1_slot6;
                    entity = report.getId;
                    entity = entity.bind(report)();
                    entity = tango !== entity;
                    if(!entity) { _fun73453_ip = 58; continue _fun73453 }
 32:
                    tango = _closure1_slot12;
                    mike = undefined;
                    mike = tango.bind(mike)(zulu);
                    mike = !mike;
                    if(mike) { _fun73453_ip = 55; continue _fun73453 }
 49:
                    mike = zulu.localVideoDisabled;
 55:
                    entity = mike;
 58:
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            tango = entity != golf;
            zulu = null;
            if(!tango) { _fun73452_ip = 96; continue _fun73452 }
 71:
            report = oscar.getParticipant;
            tango = options.getSpeaker;
            tango = tango.bind(options)(golf);
            zulu = report.bind(oscar)(golf, tango);
 96:
            if(!(entity != zulu)) { _fun73452_ip = 103; continue _fun73452 }
 100:
            mike = zulu;
 103:
            tango = _closure1_slot12;
            zulu = undefined;
            zulu = tango.bind(zulu)(mike);
            if(!zulu) { _fun73452_ip = 131; continue _fun73452 }
 120:
            zulu = mike.localVideoDisabled;
            entity = null;
            if(zulu) { _fun73452_ip = 134; continue _fun73452 }
 131:
            entity = mike;
 134:
            return entity;
        }
    };
    var _closure1_slot15 = report;
    report = 13;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/video_calls/native/usePipVideoOrStream.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    mike = function(argFoo) {
        _fun73454: for(var _fun73454_ip = 0; ; ) switch(_fun73454_ip) {
 0:
            mike = argFoo;
            oscar = mike.isActivityViewFocused;
            var _closure2_slot0 = oscar;
            report = undefined;
            var _closure2_slot2 = report;
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            verify = 9;
            zulu = zulu[verify];
            options = tango.bind(report)(zulu);
            golf = options.useStateFromStores;
            zulu = _closure1_slot9;
            tango = new Array(1);
            tango[0] = zulu;
            zulu = function() {
                mike = _closure1_slot9;
                entity = mike.getChannelId;
                entity = entity.bind(mike)();
                return entity;
            };
            options = golf.bind(options)(tango, zulu);
            var _closure2_slot1 = options;
            tango = _closure1_slot14;
            zulu = null;
            golf = zulu != options;
            zulu = undefined;
            if(!golf) { _fun73454_ip = 96; continue _fun73454 }
 93:
            zulu = options;
 96:
            golf = tango.bind(report)(zulu);
            _closure2_slot2 = golf;
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[verify];
            report = tango.bind(report)(zulu);
            tango = report.useStateFromStores;
            verify = _closure1_slot7;
            zulu = new Array(3);
            zulu[0] = verify;
            verify = _closure1_slot3;
            zulu[1] = verify;
            mike = _closure1_slot8;
            zulu[2] = mike;
            mike = new Array(3);
            mike[0] = options;
            mike[1] = golf;
            mike[2] = oscar;
            entity = function() {
                _fun73456: for(var _fun73456_ip = 0; ; ) switch(_fun73456_ip) {
 0:
                    report = _closure1_slot7;
                    zulu = report.getChannel;
                    entity = _closure2_slot1;
                    entity = zulu.bind(report)(entity);
                    report = null;
                    if(!(report != entity)) { _fun73456_ip = 138; continue _fun73456 }
 30:
                    oscar = _closure1_slot3;
                    zulu = oscar.getSelfEmbeddedActivityForChannel;
                    entity = entity.id;
                    entity = zulu.bind(oscar)(entity);
                    zulu = _closure2_slot2;
                    zulu = report != zulu;
                    if(!zulu) { _fun73456_ip = 85; continue _fun73456 }
 61:
                    golf = _closure1_slot8;
                    oscar = golf.isLocalVideoDisabled;
                    mike = _closure2_slot2;
                    mike = mike.id;
                    zulu = oscar.bind(golf)(mike);
 85:
                    entity = report != entity;
                    if(!entity) { _fun73456_ip = 99; continue _fun73456 }
 92:
                    mike = _closure2_slot0;
                    entity = !mike;
 99:
                    if(entity) { _fun73456_ip = 136; continue _fun73456 }
 102:
                    mike = _closure2_slot2;
                    mike = report != mike;
                    if(!mike) { _fun73456_ip = 127; continue _fun73456 }
 113:
                    tango = _closure2_slot2;
                    tango = tango.streamId;
                    mike = report != tango;
 127:
                    if(!mike) { _fun73456_ip = 133; continue _fun73456 }
 130:
                    mike = !zulu;
 133:
                    entity = mike;
 136:
                    return entity;
 138:
                    entity = false;
                    return entity;
                }
            };
            entity = tango.bind(report)(zulu, entity, mike);
            return entity;
        }
    };
    zulu['useHasPipParticipant'] = mike;
    return entity;
})();