// app/modules/guild_sidebar/useShowConnectedUserLimit.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = golf;
    entity = function(argFoo) { // Original name: formatNumber
        _fun113489: for(var _fun113489_ip = 0; ; ) switch(_fun113489_ip) {
 0:
            tango = argFoo;
            zulu = arguments[1];
            entity = undefined;
            if(!(zulu === entity)) { _fun113489_ip = 18; continue _fun113489 }
 12:
            zulu = 1000;
 18:
            if(!(!(tango >= zulu))) { _fun113489_ip = 58; continue _fun113489 }
 22:
            mike = tango.toFixed;
            entity = 0;
            oscar = mike.bind(tango)(entity);
            report = oscar.padStart;
            mike = 2;
            entity = '0';
            entity = report.bind(oscar)(mike, entity);
            _fun113489_ip = 124; continue _fun113489;
 58:
            mike = global;
            golf = mike.Math;
            oscar = golf.floor;
            report = tango / zulu;
            oscar = oscar.bind(golf)(report);
            golf = tango % zulu;
            report = '';
            zulu = 0;
            tango = report;
            if(!(golf != zulu)) { _fun113489_ip = 102; continue _fun113489 }
 98:
            tango = '+';
 102:
            mike = mike.HermesInternal;
            zulu = mike.concat;
            mike = 'k';
            entity = zulu.bind(report)(oscar, mike, tango);
 124:
            return entity;
        }
    };
    var _closure1_slot3 = entity;
    tango = function(argFoo) { // Original name: useConnectedUserLimit
        _fun113490: for(var _fun113490_ip = 0; ; ) switch(_fun113490_ip) {
 0:
            entity = argFoo;
            mike = entity.channel;
            report = entity.video;
            tango = entity.considerMaxStageVoiceUserLimit;
            oscar = undefined;
            if(!(tango === oscar)) { _fun113490_ip = 30; continue _fun113490 }
 28:
            tango = true;
 30:
            golf = _closure1_slot0;
            options = _closure1_slot1;
            entity = 1;
            entity = options[entity];
            entity = golf.bind(oscar)(entity);
            entity = entity.bind(oscar)(mike);
            verify = entity.limit;
            oscar = mike.userLimit;
            entity = 0;
            oscar = oscar > entity;
            options = -1;
            if(!oscar) { _fun113490_ip = 91; continue _fun113490 }
 85:
            options = mike.userLimit;
 91:
            if(!report) { _fun113490_ip = 98; continue _fun113490 }
 94:
            report = verify > entity;
 98:
            mike = options;
            if(!report) { _fun113490_ip = 133; continue _fun113490 }
 104:
            report = verify;
            if(!(options > entity)) { _fun113490_ip = 130; continue _fun113490 }
 111:
            oscar = global;
            golf = oscar.Math;
            oscar = golf.min;
            report = oscar.bind(golf)(options, verify);
 130:
            mike = report;
 133:
            if(!tango) { _fun113490_ip = 146; continue _fun113490 }
 136:
            zulu = _closure1_slot2;
            entity = 0;
            if(!(mike !== zulu)) { _fun113490_ip = 149; continue _fun113490 }
 146:
            entity = mike;
 149:
            return entity;
        }
    };
    var _closure1_slot4 = tango;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = oscar.bind(entity)(report);
    report = report.MAX_STAGE_VOICE_USER_LIMIT;
    var _closure1_slot2 = report;
    report = 2;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/guild_sidebar/useShowConnectedUserLimit.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo) { // Original name: useShowConnectedUserLimit
        _fun113491: for(var _fun113491_ip = 0; ; ) switch(_fun113491_ip) {
 0:
            mike = argFoo;
            oscar = mike.channel;
            zulu = mike.locked;
            entity = mike.video;
            mike = mike.selected;
            report = _closure1_slot4;
            tango = {};
            tango['channel'] = oscar;
            tango['video'] = entity;
            entity = undefined;
            tango = report.bind(entity)(tango);
            entity = 0;
            entity = tango > entity;
            if(!entity) { _fun113491_ip = 63; continue _fun113491 }
 60:
            entity = !zulu;
 63:
            if(!entity) { _fun113491_ip = 69; continue _fun113491 }
 66:
            entity = !mike;
 69:
            return entity;
        }
    };
    zulu['default'] = report;
    zulu['useConnectedUserLimit'] = tango;
    mike = function(argFoo) { // Original name: useConnectedUserLimitFormatted
        _fun113492: for(var _fun113492_ip = 0; ; ) switch(_fun113492_ip) {
 0:
            entity = argFoo;
            report = entity.channel;
            tango = entity.video;
            oscar = entity.userCount;
            mike = _closure1_slot4;
            entity = {};
            entity['channel'] = report;
            entity['video'] = tango;
            report = undefined;
            tango = mike.bind(report)(entity);
            entity = 0;
            golf = tango <= entity;
            mike = null;
            entity = null;
            if(golf) { _fun113492_ip = 118; continue _fun113492 }
 58:
            if(!(mike == oscar)) { _fun113492_ip = 73; continue _fun113492 }
 62:
            mike = _closure1_slot3;
            mike = mike.bind(report)(tango);
            _fun113492_ip = 115; continue _fun113492;
 73:
            zulu = _closure1_slot3;
            golf = zulu.bind(report)(oscar);
            oscar = zulu.bind(report)(tango);
            zulu = global;
            zulu = zulu.HermesInternal;
            report = zulu.concat;
            tango = '';
            zulu = '/';
            mike = report.bind(tango)(golf, zulu, oscar);
 115:
            entity = mike;
 118:
            return entity;
        }
    };
    zulu['useConnectedUserLimitFormatted'] = mike;
    return entity;
})();