// app/modules/poggermode/PoggermodeActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 5;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/poggermode/PoggermodeActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: updatePoggermodeSettings
        mike = argFoo;
        tango = _closure1_slot0;
        report = _closure1_slot1;
        entity = 3;
        zulu = report[entity];
        entity = undefined;
        options = tango.bind(entity)(zulu);
        golf = options.dispatch;
        zulu = {};
        verify = 'POGGERMODE_SETTINGS_UPDATE';
        zulu['type'] = verify;
        zulu['settings'] = mike;
        zulu = golf.bind(options)(zulu);
        zulu = {};
        golf = _closure1_slot3;
        oscar = golf.getState;
        offset = oscar.bind(golf)();
        yankee = zulu;
        oscar = copyDataProperties(yankee, offset);
        yankee = zulu;
        offset = mike;
        mike = copyDataProperties(yankee, offset);
        mike = 4;
        mike = report[mike];
        mike = tango.bind(entity)(mike);
        mike = mike.bind(entity)(zulu);
        return entity;
    };
    zulu['updatePoggermodeSettings'] = tango;
    tango = function(argFoo) { // Original name: updateCombo
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'POGGERMODE_UPDATE_COMBO';
        mike['type'] = report;
        oscar = argFoo;
        golf = mike;
        report = copyDataProperties(golf, oscar);
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['updateCombo'] = tango;
    tango = function(argFoo) { // Original name: clearMessageCombo
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'POGGERMODE_UPDATE_MESSAGE_COMBO';
        mike['type'] = report;
        report = {};
        options = argFoo;
        verify = report;
        oscar = copyDataProperties(verify, options);
        golf = true;
        oscar = 'displayed';
        report[oscar] = golf;
        mike['comboMessage'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['clearMessageCombo'] = tango;
    mike = function(argFoo, argBar) { // Original name: updateComboOnMessageSend
        _fun104764: for(var _fun104764_ip = 0; ; ) switch(_fun104764_ip) {
 0:
            golf = argFoo;
            zulu = _closure1_slot2;
            mike = zulu.getId;
            oscar = mike.bind(zulu)();
            zulu = _closure1_slot4;
            mike = zulu.getUserCombo;
            verify = mike.bind(zulu)(oscar, golf);
            options = null;
            if(!(options != verify)) { _fun104764_ip = 118; continue _fun104764 }
 42:
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 3;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.dispatch;
            mike = {};
            report = 'POGGERMODE_UPDATE_MESSAGE_COMBO';
            mike['type'] = report;
            report = {};
            report['combo'] = verify;
            report['channelId'] = golf;
            offset = argBar;
            report['messageId'] = offset;
            offset = false;
            report['displayed'] = offset;
            mike['comboMessage'] = report;
            mike = zulu.bind(tango)(mike);
 118:
            mike = options != verify;
            zulu = 1;
            report = zulu;
            if(!mike) { _fun104764_ip = 188; continue _fun104764 }
 131:
            mike = options == verify;
            offset = undefined;
            if(mike) { _fun104764_ip = 145; continue _fun104764 }
 140:
            offset = verify.value;
 145:
            mike = 0;
            offset = offset > mike;
            report = zulu;
            if(!offset) { _fun104764_ip = 188; continue _fun104764 }
 157:
            offset = options == verify;
            tango = undefined;
            if(offset) { _fun104764_ip = 172; continue _fun104764 }
 166:
            tango = verify.multiplier;
 172:
            options = options != tango;
            mike = 0;
            if(!options) { _fun104764_ip = 184; continue _fun104764 }
 181:
            mike = tango;
 184:
            report = mike + zulu;
 188:
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 3;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            options = 'POGGERMODE_UPDATE_COMBO';
            mike['type'] = options;
            mike['channelId'] = golf;
            mike['userId'] = oscar;
            mike['multiplier'] = report;
            report = 0;
            mike['value'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    zulu['updateComboOnMessageSend'] = mike;
    return entity;
})();