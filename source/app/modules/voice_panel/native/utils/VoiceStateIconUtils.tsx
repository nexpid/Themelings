// app/modules/voice_panel/native/utils/VoiceStateIconUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    verify = argBar;
    golf = argBaz;
    zulu = argFred;
    offset = argPlugh;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = offset;
    entity = function(argFoo, argBar) { // Original name: isStableVoiceStateEqual
        _fun103364: for(var _fun103364_ip = 0; ; ) switch(_fun103364_ip) {
 0:
            oscar = argFoo;
            report = argBar;
            entity = oscar === report;
            if(entity) { _fun103364_ip = 63; continue _fun103364 }
 13:
            zulu = null;
            mike = zulu != oscar;
            if(!mike) { _fun103364_ip = 26; continue _fun103364 }
 22:
            mike = zulu != report;
 26:
            if(!mike) { _fun103364_ip = 60; continue _fun103364 }
 29:
            golf = _closure1_slot1;
            tango = _closure1_slot2;
            zulu = 2;
            zulu = tango[zulu];
            tango = undefined;
            zulu = golf.bind(tango)(zulu);
            mike = zulu.bind(tango)(oscar, report);
 60:
            entity = mike;
 63:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    report = function(argFoo, argBar) { // Original name: useStableVoiceParticipant
        options = argFoo;
        golf = argBar;
        var _closure2_slot0 = options;
        var _closure2_slot1 = golf;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 3;
        tango = tango[zulu];
        zulu = undefined;
        oscar = report.bind(zulu)(tango);
        report = oscar.useStateFromStores;
        zulu = _closure1_slot3;
        tango = new Array(2);
        tango[0] = zulu;
        zulu = _closure1_slot4;
        tango[1] = zulu;
        zulu = new Array(2);
        zulu[0] = options;
        zulu[1] = golf;
        verify = _closure1_slot7;
        yankee = function() {
            _fun103366: for(var _fun103366_ip = 0; ; ) switch(_fun103366_ip) {
 0:
                zulu = _closure2_slot0;
                entity = null;
                if(!(entity != zulu)) { _fun103366_ip = 44; continue _fun103366 }
 13:
                oscar = _closure1_slot4;
                report = oscar.getVoiceState;
                tango = _closure2_slot1;
                mike = _closure2_slot0;
                mike = report.bind(oscar)(tango, mike);
                if(!(entity == mike)) { _fun103366_ip = 48; continue _fun103366 }
 44:
                entity = undefined;
                return entity;
 48:
                entity = {};
                tango = mike.deaf;
                entity['deaf'] = tango;
                tango = mike.selfDeaf;
                entity['selfDeaf'] = tango;
                tango = mike.mute;
                entity['mute'] = tango;
                report = _closure1_slot3;
                tango = report.isLocalMute;
                zulu = mike.userId;
                zulu = tango.bind(report)(zulu);
                entity['isLocalMute'] = zulu;
                mike = mike.selfMute;
                entity['selfMute'] = mike;
                return entity;
            }
        };
        foxtrot = oscar;
        romeo = tango;
        offset = zulu;
        entity = foxtrot[report](romeo, yankee, offset, verify, options);
        return entity;
    };
    var _closure1_slot8 = report;
    tango = function(argFoo, argBar) { // Original name: useStableVideoState
        oscar = argFoo;
        golf = argBar;
        var _closure2_slot0 = oscar;
        var _closure2_slot1 = golf;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 3;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStoresObject;
        options = _closure1_slot3;
        zulu = new Array(2);
        zulu[0] = options;
        mike = _closure1_slot4;
        zulu[1] = mike;
        mike = new Array(2);
        mike[0] = golf;
        mike[1] = oscar;
        entity = function() {
            _fun103368: for(var _fun103368_ip = 0; ; ) switch(_fun103368_ip) {
 0:
                zulu = _closure2_slot0;
                mike = null;
                tango = mike != zulu;
                zulu = undefined;
                if(!tango) { _fun103368_ip = 45; continue _fun103368 }
 18:
                golf = _closure1_slot4;
                oscar = golf.getVoiceState;
                report = _closure2_slot1;
                tango = _closure2_slot0;
                zulu = oscar.bind(golf)(report, tango);
 45:
                entity = _closure2_slot0;
                if(!(mike != entity)) { _fun103368_ip = 139; continue _fun103368 }
 53:
                if(!(mike != zulu)) { _fun103368_ip = 139; continue _fun103368 }
 57:
                oscar = _closure1_slot3;
                report = oscar.isLocalVideoDisabled;
                entity = zulu.userId;
                report = report.bind(oscar)(entity);
                entity = {};
                oscar = zulu.selfVideo;
                entity['selfVideo'] = oscar;
                mike = null;
                if(!report) { _fun103368_ip = 132; continue _fun103368 }
 98:
                report = _closure1_slot3;
                tango = report.isLocalVideoAutoDisabled;
                zulu = zulu.userId;
                tango = tango.bind(report)(zulu);
                zulu = 'manual';
                if(!tango) { _fun103368_ip = 129; continue _fun103368 }
 125:
                zulu = 'auto';
 129:
                mike = zulu;
 132:
                entity['localVideoDisabledState'] = mike;
                return entity;
 139:
                entity = {'selfVideo': false, 'localVideoDisabledState': null};
                return entity;
            }
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    var _closure1_slot9 = tango;
    entity = global;
    yankee = entity.Object;
    options = yankee.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = options.bind(yankee)(zulu, entity, oscar);
    backup = 0;
    oscar = offset[backup];
    entity = undefined;
    oscar = golf.bind(entity)(oscar);
    var _closure1_slot3 = oscar;
    foxtrot = 1;
    oscar = offset[foxtrot];
    oscar = golf.bind(entity)(oscar);
    var _closure1_slot4 = oscar;
    golf = {};
    golf['DEAFENED_SERVER'] = backup;
    oscar = 'DEAFENED_SERVER';
    golf[backup] = oscar;
    golf['DEAFENED'] = foxtrot;
    oscar = 'DEAFENED';
    golf[foxtrot] = oscar;
    romeo = 2;
    golf['MUTED_SERVER'] = romeo;
    oscar = 'MUTED_SERVER';
    golf[romeo] = oscar;
    options = 3;
    golf['MUTED_LOCAL'] = options;
    oscar = 'MUTED_LOCAL';
    golf[options] = oscar;
    options = 4;
    golf['MUTED'] = options;
    oscar = 'MUTED';
    golf[options] = oscar;
    var _closure1_slot5 = golf;
    oscar = {};
    oscar['VIDEO_DISABLED_LOCAL_AUTO'] = backup;
    yankee = 'VIDEO_DISABLED_LOCAL_AUTO';
    oscar[backup] = yankee;
    oscar['VIDEO_DISABLED_LOCAL'] = foxtrot;
    yankee = 'VIDEO_DISABLED_LOCAL';
    oscar[foxtrot] = yankee;
    oscar['VIDEO_ACTIVE'] = romeo;
    yankee = 'VIDEO_ACTIVE';
    oscar[romeo] = yankee;
    var _closure1_slot6 = oscar;
    options = offset[options];
    offset = verify.bind(entity)(options);
    verify = offset.fileFinishedImporting;
    options = 'modules/voice_panel/native/utils/VoiceStateIconUtils.tsx';
    options = verify.bind(offset)(options);
    zulu['MuteDeafenIconState'] = golf;
    zulu['VideoIconState'] = oscar;
    zulu['useStableVoiceParticipant'] = report;
    report = function(argFoo, argBar) { // Original name: useMuteDeafenIconState
        _fun103369: for(var _fun103369_ip = 0; ; ) switch(_fun103369_ip) {
 0:
            report = _closure1_slot8;
            tango = undefined;
            mike = argFoo;
            entity = argBar;
            tango = report.bind(tango)(mike, entity);
            mike = null;
            report = mike == tango;
            entity = null;
            if(report) { _fun103369_ip = 140; continue _fun103369 }
 32:
            report = tango.deaf;
            if(report) { _fun103369_ip = 127; continue _fun103369 }
 41:
            report = tango.selfDeaf;
            if(report) { _fun103369_ip = 115; continue _fun103369 }
 50:
            report = tango.mute;
            if(report) { _fun103369_ip = 103; continue _fun103369 }
 59:
            report = tango.isLocalMute;
            if(report) { _fun103369_ip = 91; continue _fun103369 }
 68:
            tango = tango.selfMute;
            mike = null;
            if(!tango) { _fun103369_ip = 89; continue _fun103369 }
 79:
            tango = _closure1_slot5;
            mike = tango.MUTED;
 89:
            _fun103369_ip = 101; continue _fun103369;
 91:
            tango = _closure1_slot5;
            mike = tango.MUTED_LOCAL;
 101:
            _fun103369_ip = 113; continue _fun103369;
 103:
            tango = _closure1_slot5;
            mike = tango.MUTED_SERVER;
 113:
            _fun103369_ip = 125; continue _fun103369;
 115:
            tango = _closure1_slot5;
            mike = tango.DEAFENED;
 125:
            _fun103369_ip = 137; continue _fun103369;
 127:
            zulu = _closure1_slot5;
            mike = zulu.DEAFENED_SERVER;
 137:
            entity = mike;
 140:
            return entity;
        }
    };
    zulu['useMuteDeafenIconState'] = report;
    zulu['useStableVideoState'] = tango;
    mike = function(argFoo, argBar) { // Original name: useVideoIconState
        _fun103370: for(var _fun103370_ip = 0; ; ) switch(_fun103370_ip) {
 0:
            report = _closure1_slot9;
            zulu = undefined;
            mike = argFoo;
            entity = argBar;
            zulu = report.bind(zulu)(mike, entity);
            mike = null;
            report = mike == zulu;
            entity = null;
            if(report) { _fun103370_ip = 111; continue _fun103370 }
 32:
            report = zulu.selfVideo;
            mike = null;
            if(!report) { _fun103370_ip = 108; continue _fun103370 }
 43:
            oscar = zulu.localVideoDisabledState;
            report = 'auto';
            if(!(report !== oscar)) { _fun103370_ip = 95; continue _fun103370 }
 57:
            report = zulu.localVideoDisabledState;
            zulu = 'manual';
            if(!(zulu !== report)) { _fun103370_ip = 83; continue _fun103370 }
 71:
            zulu = _closure1_slot6;
            zulu = zulu.VIDEO_ACTIVE;
            _fun103370_ip = 93; continue _fun103370;
 83:
            report = _closure1_slot6;
            zulu = report.VIDEO_DISABLED_LOCAL;
 93:
            _fun103370_ip = 105; continue _fun103370;
 95:
            tango = _closure1_slot6;
            zulu = tango.VIDEO_DISABLED_LOCAL_AUTO;
 105:
            mike = zulu;
 108:
            entity = mike;
 111:
            return entity;
        }
    };
    zulu['useVideoIconState'] = mike;
    return entity;
})();