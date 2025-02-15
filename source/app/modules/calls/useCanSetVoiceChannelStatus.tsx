// app/modules/calls/useCanSetVoiceChannelStatus.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    entity = argCorge;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golf;
    tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: _canSetVoiceChannelStatus
        _fun121891: for(var _fun121891_ip = 0; ; ) switch(_fun121891_ip) {
 0:
            mike = argFoo;
            var _closure2_slot0 = mike;
            mike = argBar;
            var _closure2_slot1 = mike;
            mike = argCorge;
            var _closure2_slot2 = mike;
            zulu = argBaz;
            if(zulu) { _fun121891_ip = 38; continue _fun121891 }
 32:
            zulu = _closure1_slot4;
            _fun121891_ip = 42; continue _fun121891;
 38:
            zulu = _closure1_slot5;
 42:
            mike = zulu.every;
            entity = function(argFoo) {
                _fun121892: for(var _fun121892_ip = 0; ; ) switch(_fun121892_ip) {
 0:
                    report = argFoo;
                    zulu = _closure2_slot2;
                    entity = null;
                    if(!(entity != zulu)) { _fun121892_ip = 77; continue _fun121892 }
 16:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    entity = 2;
                    zulu = zulu[entity];
                    entity = undefined;
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.can;
                    entity = {};
                    entity['permission'] = report;
                    oscar = _closure2_slot2;
                    entity['user'] = oscar;
                    oscar = _closure2_slot0;
                    entity['context'] = oscar;
                    entity = zulu.bind(tango)(entity);
                    _fun121892_ip = 97; continue _fun121892;
 77:
                    tango = _closure2_slot1;
                    zulu = tango.can;
                    mike = _closure2_slot0;
                    entity = zulu.bind(tango)(report, mike);
 97:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    var _closure1_slot6 = tango;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    options = golf[entity];
    report = argBaz;
    entity = undefined;
    report = report.bind(entity)(options);
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.Permissions;
    verify = report.SET_VOICE_CHANNEL_STATUS;
    options = new Array(3);
    options[0] = verify;
    verify = report.CONNECT;
    options[1] = verify;
    verify = report.VIEW_CHANNEL;
    options[2] = verify;
    var _closure1_slot4 = options;
    options = report.SET_VOICE_CHANNEL_STATUS;
    report = new Array(1);
    report[0] = options;
    var _closure1_slot5 = report;
    report = 4;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/calls/useCanSetVoiceChannelStatus.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo) { // Original name: useCanSetVoiceChannelStatus
        _fun121893: for(var _fun121893_ip = 0; ; ) switch(_fun121893_ip) {
 0:
            options = argFoo;
            golf = arguments[1];
            oscar = arguments[2];
            var _closure2_slot0 = options;
            report = undefined;
            if(!(golf === report)) { _fun121893_ip = 23; continue _fun121893 }
 21:
            golf = false;
 23:
            var _closure2_slot1 = golf;
            var _closure2_slot2 = oscar;
            tango = _closure1_slot0;
            verify = _closure1_slot2;
            zulu = 3;
            zulu = verify[zulu];
            report = tango.bind(report)(zulu);
            tango = report.useStateFromStores;
            mike = _closure1_slot3;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = new Array(3);
            mike[0] = options;
            mike[1] = golf;
            mike[2] = oscar;
            entity = function() {
                oscar = _closure1_slot6;
                offset = _closure2_slot0;
                verify = _closure1_slot3;
                options = _closure2_slot1;
                golf = _closure2_slot2;
                yankee = undefined;
                entity = yankee[oscar](offset, verify, options, golf, oscar);
                return entity;
            };
            entity = tango.bind(report)(zulu, entity, mike);
            return entity;
        }
    };
    zulu['default'] = report;
    zulu['_canSetVoiceChannelStatus'] = tango;
    mike = function(argFoo) { // Original name: canSetVoiceChannelStatus
        _fun121895: for(var _fun121895_ip = 0; ; ) switch(_fun121895_ip) {
 0:
            oscar = arguments[1];
            report = undefined;
            if(!(oscar === report)) { _fun121895_ip = 11; continue _fun121895 }
 9:
            oscar = false;
 11:
            tango = _closure1_slot6;
            verify = _closure1_slot3;
            offset = argFoo;
            golf = arguments[2];
            yankee = undefined;
            options = oscar;
            entity = yankee[tango](offset, verify, options, golf, oscar);
            return entity;
        }
    };
    zulu['canSetVoiceChannelStatus'] = mike;
    return entity;
})();