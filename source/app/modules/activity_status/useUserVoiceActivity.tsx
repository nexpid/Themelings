// app/modules/activity_status/useUserVoiceActivity.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Permissions;
    var _closure1_slot5 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/activity_status/useUserVoiceActivity.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useUserVoiceActivity
        _fun79701: for(var _fun79701_ip = 0; ; ) switch(_fun79701_ip) {
 0:
            mike = argFoo;
            zulu = mike.userId;
            var _closure2_slot0 = zulu;
            mike = mike.guildId;
            var _closure2_slot1 = mike;
            golf = undefined;
            var _closure2_slot2 = golf;
            var _closure2_slot3 = golf;
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            options = 4;
            zulu = zulu[options];
            oscar = tango.bind(golf)(zulu);
            report = oscar.useStateFromStores;
            zulu = _closure1_slot4;
            tango = new Array(1);
            tango[0] = zulu;
            zulu = function() {
                _fun79702: for(var _fun79702_ip = 0; ; ) switch(_fun79702_ip) {
 0:
                    entity = _closure2_slot1;
                    zulu = null;
                    if(!(zulu != entity)) { _fun79702_ip = 21; continue _fun79702 }
 13:
                    entity = _closure2_slot0;
                    if(!(zulu == entity)) { _fun79702_ip = 58; continue _fun79702 }
 21:
                    entity = _closure2_slot0;
                    zulu = zulu != entity;
                    entity = undefined;
                    if(!zulu) { _fun79702_ip = 56; continue _fun79702 }
 34:
                    report = _closure1_slot4;
                    tango = report.getVoiceStateForUser;
                    zulu = _closure2_slot0;
                    entity = tango.bind(report)(zulu);
 56:
                    _fun79702_ip = 85; continue _fun79702;
 58:
                    report = _closure1_slot4;
                    tango = report.getVoiceState;
                    zulu = _closure2_slot1;
                    mike = _closure2_slot0;
                    entity = tango.bind(report)(zulu, mike);
 85:
                    return entity;
                }
            };
            tango = report.bind(oscar)(tango, zulu);
            zulu = null;
            report = zulu == tango;
            zulu = undefined;
            if(report) { _fun79701_ip = 102; continue _fun79701 }
 97:
            zulu = tango.channelId;
 102:
            _closure2_slot2 = zulu;
            oscar = _closure1_slot0;
            report = _closure1_slot1;
            zulu = report[options];
            yankee = oscar.bind(golf)(zulu);
            offset = yankee.useStateFromStores;
            zulu = _closure1_slot2;
            verify = new Array(1);
            verify[0] = zulu;
            zulu = function() {
                _fun79703: for(var _fun79703_ip = 0; ; ) switch(_fun79703_ip) {
 0:
                    zulu = _closure2_slot2;
                    mike = null;
                    if(!(mike == zulu)) { _fun79703_ip = 17; continue _fun79703 }
 13:
                    mike = undefined;
                    return mike;
 17:
                    zulu = _closure1_slot2;
                    mike = zulu.getChannel;
                    entity = _closure2_slot2;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            zulu = offset.bind(yankee)(verify, zulu);
            _closure2_slot3 = zulu;
            report = report[options];
            oscar = oscar.bind(golf)(report);
            report = oscar.useStateFromStores;
            golf = _closure1_slot3;
            mike = new Array(1);
            mike[0] = golf;
            entity = function() {
                _fun79704: for(var _fun79704_ip = 0; ; ) switch(_fun79704_ip) {
 0:
                    zulu = _closure2_slot3;
                    entity = null;
                    zulu = entity == zulu;
                    entity = undefined;
                    if(zulu) { _fun79704_ip = 32; continue _fun79704 }
 18:
                    tango = _closure2_slot3;
                    zulu = tango.isPrivate;
                    entity = zulu.bind(tango)();
 32:
                    if(entity) { _fun79704_ip = 68; continue _fun79704 }
 35:
                    report = _closure1_slot3;
                    tango = report.can;
                    zulu = _closure1_slot5;
                    zulu = zulu.VIEW_CHANNEL;
                    mike = _closure2_slot3;
                    entity = tango.bind(report)(zulu, mike);
 68:
                    return entity;
                }
            };
            entity = report.bind(oscar)(mike, entity);
            if(entity) { _fun79701_ip = 203; continue _fun79701 }
 199:
            entity = {};
            _fun79701_ip = 218; continue _fun79701;
 203:
            mike = {};
            mike['voiceState'] = tango;
            mike['voiceChannel'] = zulu;
            entity = mike;
 218:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();