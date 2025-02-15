// app/modules/video_calls/native/components/DisconnectRemoteButton.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    options = argCorge;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = options;
    var _closure1_slot3 = oscar;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot5 = tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/video_calls/native/components/DisconnectRemoteButton.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            mike = entity.channel;
            var _closure2_slot0 = mike;
            oscar = entity.isSmallSize;
            mike = _closure1_slot0;
            verify = _closure1_slot3;
            entity = 3;
            entity = verify[entity];
            tango = undefined;
            options = mike.bind(tango)(entity);
            zulu = options.useStateFromStoresObject;
            entity = _closure1_slot4;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                entity = {};
                zulu = _closure1_slot4;
                mike = zulu.getAwaitingRemoteSessionInfo;
                tango = mike.bind(zulu)();
                mike = null;
                mike = mike != tango;
                entity['awaitingRemote'] = mike;
                mike = zulu.getRemoteSessionId;
                mike = mike.bind(zulu)();
                entity['remoteSessionId'] = mike;
                return entity;
            };
            entity = zulu.bind(options)(mike, entity);
            mike = entity.remoteSessionId;
            var _closure2_slot1 = mike;
            options = entity.awaitingRemote;
            zulu = _closure1_slot5;
            mike = _closure1_slot2;
            entity = 4;
            entity = verify[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.PrimaryActionButton;
            entity = {};
            verify = _closure1_slot1;
            yankee = _closure1_slot3;
            if(options) { _fun00002_ip = 140; continue _fun00001 }
 131:
            options = 6;
            options = yankee[options];
            _fun00002_ip = 147; continue _fun00001;
 140:
            offset = 5;
            options = yankee[offset];
 147:
            options = verify.bind(tango)(options);
            entity['source'] = options;
            offset = _closure1_slot0;
            yankee = _closure1_slot3;
            golf = 7;
            options = yankee[golf];
            options = offset.bind(tango)(options);
            verify = options.intl;
            options = verify.string;
            golf = yankee[golf];
            golf = offset.bind(tango)(golf);
            golf = golf.t;
            golf = golf.6vrfgo;
            golf = options.bind(verify)(golf);
            entity['accessibilityLabel'] = golf;
            entity['isSmallSize'] = oscar;
            report = function() { // Original name: onPress
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zulu = _closure2_slot1;
                    mike = null;
                    if(!(mike == zulu)) { _fun00004_ip = 50; continue _fun00003 }
 13:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot3;
                    mike = 8;
                    zulu = zulu[mike];
                    mike = undefined;
                    zulu = tango.bind(mike)(zulu);
                    mike = zulu.disconnectRemote;
                    mike = mike.bind(zulu)();
                    _fun00004_ip = 117; continue _fun00003;
 50:
                    tango = _closure1_slot0;
                    report = _closure1_slot3;
                    mike = 8;
                    mike = report[mike];
                    zulu = undefined;
                    golf = tango.bind(zulu)(mike);
                    oscar = golf.remoteDisconnect;
                    mike = _closure2_slot1;
                    mike = oscar.bind(golf)(mike);
                    mike = 9;
                    mike = report[mike];
                    zulu = tango.bind(zulu)(mike);
                    mike = zulu.handleDisconnect;
                    entity = _closure2_slot0;
                    entity = mike.bind(zulu)(entity);
 117:
                    entity = undefined;
                    return entity;
                }
            };
            entity['onPress'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['DisconnectRemoteButton'] = mike;
    return entity;
})();