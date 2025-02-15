// app/modules/voice_panel/native/controller/usePanelOpenState.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
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
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.VoicePanelModes;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.ComponentActions;
    var _closure1_slot7 = golf;
    tango = tango.Routes;
    var _closure1_slot8 = tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_panel/native/controller/usePanelOpenState.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar, argBaz, argCorge) { // Original name: usePanelOpenState
        golf = argFoo;
        verify = argBar;
        options = argBaz;
        zulu = argCorge;
        var _closure2_slot0 = golf;
        var _closure2_slot1 = verify;
        var _closure2_slot2 = options;
        var _closure2_slot3 = zulu;
        report = _closure1_slot4;
        oscar = report.useEffect;
        tango = new Array(4);
        tango[0] = golf;
        tango[1] = verify;
        tango[2] = options;
        tango[3] = zulu;
        zulu = function() {
            yankee = function(argFoo) { // Original name: componentActionOpen
                _fun121683: for(var _fun121683_ip = 0; ; ) switch(_fun121683_ip) {
 0:
                    zulu = _closure2_slot0;
                    mike = argFoo;
                    mike = mike.channelId;
                    mike = zulu === mike;
                    if(!mike) { _fun121683_ip = 52; continue _fun121683 }
 22:
                    tango = _closure2_slot1;
                    zulu = tango.get;
                    tango = zulu.bind(tango)();
                    zulu = _closure1_slot6;
                    zulu = zulu.PANEL;
                    mike = tango !== zulu;
 52:
                    if(!mike) { _fun121683_ip = 79; continue _fun121683 }
 55:
                    zulu = _closure2_slot2;
                    entity = _closure1_slot6;
                    mike = entity.PANEL;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
 79:
                    entity = undefined;
                    return entity;
                }
            };
            var _closure3_slot0 = yankee;
            report = function() { // Original name: componentActionClose
                _fun121684: for(var _fun121684_ip = 0; ; ) switch(_fun121684_ip) {
 0:
                    zulu = _closure2_slot3;
                    entity = zulu.get;
                    zulu = entity.bind(zulu)();
                    if(zulu) { _fun121684_ip = 53; continue _fun121684 }
 22:
                    tango = _closure1_slot5;
                    zulu = tango.getState;
                    report = zulu.bind(tango)();
                    tango = report.closeChannel;
                    zulu = _closure2_slot0;
                    zulu = tango.bind(report)(zulu);
                    _fun121684_ip = 101; continue _fun121684;
 53:
                    tango = _closure2_slot1;
                    zulu = tango.get;
                    tango = zulu.bind(tango)();
                    zulu = _closure1_slot6;
                    zulu = zulu.PIP;
                    if(!(tango !== zulu)) { _fun121684_ip = 101; continue _fun121684 }
 80:
                    zulu = _closure2_slot2;
                    entity = _closure1_slot6;
                    mike = entity.PIP;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
 101:
                    entity = undefined;
                    return entity;
                }
            };
            var _closure3_slot1 = report;
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            zulu = 5;
            options = golf[zulu];
            tango = undefined;
            options = oscar.bind(tango)(options);
            offset = options.ComponentDispatch;
            verify = offset.subscribe;
            mike = _closure1_slot7;
            options = mike.VOICE_PANEL_OPEN;
            options = verify.bind(offset)(options, yankee);
            zulu = golf[zulu];
            zulu = oscar.bind(tango)(zulu);
            tango = zulu.ComponentDispatch;
            zulu = tango.subscribe;
            mike = mike.VOICE_PANEL_CLOSE;
            mike = zulu.bind(tango)(mike, report);
            entity = function() {
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                tango = 5;
                zulu = oscar[tango];
                entity = undefined;
                zulu = report.bind(entity)(zulu);
                offset = zulu.ComponentDispatch;
                verify = offset.unsubscribe;
                zulu = _closure1_slot7;
                options = zulu.VOICE_PANEL_OPEN;
                golf = _closure3_slot0;
                golf = verify.bind(offset)(options, golf);
                tango = oscar[tango];
                tango = report.bind(entity)(tango);
                report = tango.ComponentDispatch;
                tango = report.unsubscribe;
                zulu = zulu.VOICE_PANEL_CLOSE;
                mike = _closure3_slot1;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            return entity;
        };
        zulu = oscar.bind(report)(zulu, tango);
        tango = report.useState;
        zulu = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 6;
            mike = mike[entity];
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            entity = mike.getHistory;
            entity = entity.bind(mike)();
            entity = entity.location;
            entity = entity.pathname;
            return entity;
        };
        oscar = tango.bind(report)(zulu);
        tango = _closure1_slot3;
        entity = undefined;
        zulu = 2;
        tango = tango.bind(entity)(oscar, zulu);
        zulu = 0;
        oscar = tango[zulu];
        var _closure2_slot4 = oscar;
        zulu = 1;
        zulu = tango[zulu];
        var _closure2_slot5 = zulu;
        tango = report.useEffect;
        zulu = new Array(2);
        zulu[0] = golf;
        zulu[1] = oscar;
        mike = function() {
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 6;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.addRouteChangeListener;
            mike = function(argFoo) {
                _fun121688: for(var _fun121688_ip = 0; ; ) switch(_fun121688_ip) {
 0:
                    golf = argFoo;
                    mike = _closure2_slot4;
                    entity = golf.pathname;
                    if(!(mike !== entity)) { _fun121688_ip = 241; continue _fun121688 }
 23:
                    zulu = _closure2_slot5;
                    entity = _closure2_slot4;
                    mike = undefined;
                    entity = zulu.bind(mike)(entity);
                    oscar = _closure1_slot0;
                    options = _closure1_slot2;
                    zulu = 7;
                    zulu = options[zulu];
                    offset = oscar.bind(mike)(zulu);
                    verify = offset.matchPath;
                    report = golf.pathname;
                    zulu = {};
                    backup = _closure1_slot8;
                    foxtrot = backup.CHANNEL;
                    yankee = 8;
                    romeo = options[yankee];
                    romeo = oscar.bind(mike)(romeo);
                    kilo = romeo.RouteParam;
                    romeo = kilo.guildId;
                    romeo = romeo.bind(kilo)();
                    yankee = options[yankee];
                    yankee = oscar.bind(mike)(yankee);
                    kilo = yankee.RouteParam;
                    yankee = kilo.channelId;
                    yankee = yankee.bind(kilo)();
                    yankee = foxtrot.bind(backup)(romeo, yankee);
                    zulu['path'] = yankee;
                    report = verify.bind(offset)(report, zulu);
                    zulu = 9;
                    zulu = options[zulu];
                    oscar = oscar.bind(mike)(zulu);
                    zulu = oscar.extractParamsFromVoiceModalRoute;
                    zulu = zulu.bind(oscar)(golf);
                    oscar = zulu.voiceChannelId;
                    zulu = null;
                    if(!(zulu == oscar)) { _fun121688_ip = 241; continue _fun121688 }
 188:
                    zulu = zulu != report;
                    if(!zulu) { _fun121688_ip = 214; continue _fun121688 }
 195:
                    report = report.params;
                    report = report.channelId;
                    tango = _closure2_slot0;
                    zulu = report === tango;
 214:
                    if(zulu) { _fun121688_ip = 241; continue _fun121688 }
 217:
                    zulu = _closure1_slot1;
                    tango = _closure1_slot2;
                    entity = 10;
                    entity = tango[entity];
                    entity = zulu.bind(mike)(entity);
                    entity = entity.bind(mike)();
 241:
                    entity = undefined;
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            var _closure3_slot0 = mike;
            entity = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 6;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.removeRouteChangeListener;
                mike = _closure3_slot0;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            return entity;
        };
        mike = tango.bind(report)(mike, zulu);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();