// app/modules/video_calls/useMuteStates.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    mike = function(argFoo) { // Original name: getMuteStates
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            verify = entity.channel;
            romeo = entity.authenticationStore;
            zulu = undefined;
            if(!(romeo === zulu)) { _fun00002_ip = 27; continue _fun00001 }
 20:
            romeo = _closure1_slot3;
 27:
            yankee = entity.voiceStateStore;
            if(!(yankee === zulu)) { _fun00002_ip = 44; continue _fun00001 }
 37:
            yankee = _closure1_slot6;
 44:
            oscar = entity.mediaEngineStore;
            if(!(oscar === zulu)) { _fun00002_ip = 61; continue _fun00001 }
 54:
            oscar = _closure1_slot4;
 61:
            options = entity.permissionStore;
            if(!(options === zulu)) { _fun00002_ip = 78; continue _fun00001 }
 71:
            options = _closure1_slot5;
 78:
            golf = entity.impersonateStore;
            if(!(golf === zulu)) { _fun00002_ip = 95; continue _fun00001 }
 88:
            golf = _closure1_slot2;
 95:
            mike = null;
            entity = mike != verify;
            tango = null;
            if(!entity) { _fun00002_ip = 138; continue _fun00001 }
 106:
            offset = yankee.getVoiceState;
            entity = verify.getGuildId;
            report = entity.bind(verify)();
            entity = romeo.getId;
            entity = entity.bind(romeo)();
            tango = offset.bind(yankee)(report, entity);
 138:
            entity = oscar.isSelfMute;
            report = entity.bind(oscar)();
            if(report) { _fun00002_ip = 161; continue _fun00001 }
 151:
            entity = oscar.isSelfMutedTemporarily;
            report = entity.bind(oscar)();
 161:
            entity = mike == verify;
            oscar = undefined;
            if(entity) { _fun00002_ip = 180; continue _fun00001 }
 170:
            entity = verify.getGuildId;
            oscar = entity.bind(verify)();
 180:
            entity = golf.isViewingRoles;
            oscar = entity.bind(golf)(oscar);
            if(!oscar) { _fun00002_ip = 222; continue _fun00001 }
 194:
            golf = options.can;
            entity = _closure1_slot7;
            entity = entity.SPEAK;
            entity = golf.bind(options)(entity, verify);
            oscar = !entity;
 222:
            entity = {};
            entity['selfMute'] = report;
            golf = mike == tango;
            report = undefined;
            if(golf) { _fun00002_ip = 244; continue _fun00001 }
 238:
            report = tango.suppress;
 244:
            if(report) { _fun00002_ip = 250; continue _fun00001 }
 247:
            report = oscar;
 250:
            entity['suppress'] = report;
            report = mike == tango;
            zulu = undefined;
            if(report) { _fun00002_ip = 270; continue _fun00001 }
 264:
            zulu = tango.mute;
 270:
            mike = mike != zulu;
            if(!mike) { _fun00002_ip = 280; continue _fun00001 }
 277:
            mike = zulu;
 280:
            entity['mute'] = mike;
            return entity;
        }
    };
    var _closure1_slot8 = mike;
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
    var _closure1_slot2 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 2;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 3;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 4;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 5;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.Permissions;
    var _closure1_slot7 = report;
    report = 7;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/video_calls/useMuteStates.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo) { // Original name: useMuteStates
        mike = argFoo;
        var _closure2_slot0 = mike;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 6;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStoresObject;
        oscar = _closure1_slot3;
        mike = new Array(5);
        mike[0] = oscar;
        oscar = _closure1_slot6;
        mike[1] = oscar;
        oscar = _closure1_slot4;
        mike[2] = oscar;
        oscar = _closure1_slot5;
        mike[3] = oscar;
        report = _closure1_slot2;
        mike[4] = report;
        entity = function() {
            zulu = _closure1_slot8;
            mike = {};
            tango = _closure2_slot0;
            mike['channel'] = tango;
            tango = _closure1_slot3;
            mike['authenticationStore'] = tango;
            tango = _closure1_slot6;
            mike['voiceStateStore'] = tango;
            tango = _closure1_slot4;
            mike['mediaEngineStore'] = tango;
            tango = _closure1_slot5;
            mike['permissionStore'] = tango;
            entity = _closure1_slot2;
            mike['impersonateStore'] = entity;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = tango;
    zulu['getMuteStates'] = mike;
    return entity;
})();