// app/modules/main_tabs_v2/native/tabs/messages/useMessagesReconnectToCallsEffect.tsx
export default (function(_, argBar, argBaz, argCorge, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = report[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    golf = report[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 6;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/tabs/messages/useMessagesReconnectToCallsEffect.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useMessagesReconnectToCallsEffect
        tango = _closure1_slot3;
        zulu = tango.useEffect;
        mike = function() {
            tango = _closure1_slot4;
            mike = tango.isConnected;
            mike = mike.bind(tango)();
            var _closure3_slot0 = mike;
            zulu = function() { // Original name: isGatewayConnectedListener
                _fun114880: for(var _fun114880_ip = 0; ; ) switch(_fun114880_ip) {
 0:
                    zulu = _closure1_slot4;
                    mike = zulu.isConnected;
                    mike = mike.bind(zulu)();
                    tango = _closure3_slot0;
                    if(!(tango !== mike)) { _fun114880_ip = 261; continue _fun114880 }
 31:
                    _closure3_slot0 = mike;
                    if(!mike) { _fun114880_ip = 261; continue _fun114880 }
 41:
                    zulu = _closure1_slot6;
                    mike = zulu.getSortedChannels;
                    report = mike.bind(zulu)();
                    tango = _closure1_slot2;
                    zulu = undefined;
                    mike = 2;
                    tango = tango.bind(zulu)(report, mike);
                    verify = 0;
                    mike = tango[verify];
                    mike = 1;
                    options = tango[mike];
                    tango = new Array(0);
                    golf = global;
                    offset = golf.Math;
                    report = offset.min;
                    mike = options.length;
                    oscar = 20;
                    mike = report.bind(offset)(oscar, mike);
                    mike = verify < mike;
                    report = null;
                    if(!mike) { _fun114880_ip = 214; continue _fun114880 }
 123:
                    yankee = _closure1_slot5;
                    offset = yankee.getChannel;
                    mike = options[verify];
                    mike = mike.channelId;
                    yankee = offset.bind(yankee)(mike);
                    mike = report != yankee;
                    if(!mike) { _fun114880_ip = 163; continue _fun114880 }
 153:
                    offset = yankee.isGroupDM;
                    mike = offset.bind(yankee)();
 163:
                    if(!mike) { _fun114880_ip = 185; continue _fun114880 }
 166:
                    offset = tango.push;
                    mike = options[verify];
                    mike = mike.channelId;
                    mike = offset.bind(tango)(mike);
 185:
                    verify = verify + 1;
                    yankee = golf.Math;
                    offset = yankee.min;
                    mike = options.length;
                    mike = offset.bind(yankee)(oscar, mike);
                    if(verify < mike) { _fun114880_ip = 123; continue _fun114880 }
 214:
                    mike = _closure1_slot0;
                    report = _closure1_slot1;
                    entity = 5;
                    entity = report[entity];
                    zulu = mike.bind(zulu)(entity);
                    mike = zulu.dispatch;
                    entity = {};
                    report = 'CALL_CONNECT_MULTIPLE';
                    entity['type'] = report;
                    entity['channelIds'] = tango;
                    entity = mike.bind(zulu)(entity);
 261:
                    entity = undefined;
                    return entity;
                }
            };
            var _closure3_slot1 = zulu;
            mike = tango.addChangeListener;
            mike = mike.bind(tango)(zulu);
            entity = function() {
                zulu = _closure1_slot4;
                mike = zulu.removeChangeListener;
                entity = _closure3_slot1;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            return entity;
        };
        entity = new Array(0);
        entity = zulu.bind(tango)(mike, entity);
        entity = undefined;
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();