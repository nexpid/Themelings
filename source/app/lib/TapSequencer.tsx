// app/lib/TapSequencer.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    report = argBaz;
    zulu = argFred;
    options = argPlugh;
    entity = global;
    verify = entity.Object;
    oscar = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = options[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot0 = tango;
    tango = 1;
    tango = options[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot1 = tango;
    tango = 2;
    tango = options[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 3;
    tango = options[tango];
    tango = golf.bind(entity)(tango);
    report = tango.useState;
    var _closure1_slot3 = report;
    tango = tango.useEffect;
    var _closure1_slot4 = tango;
    report = {};
    tango = 'short';
    report['SHORT'] = tango;
    tango = 'long';
    report['LONG'] = tango;
    var _closure1_slot5 = report;
    tango = {'long': 1250, 'short': 500};
    var _closure1_slot6 = tango;
    tango = function() {
        tango = _closure1_slot2;
        zulu = function(argFoo) { // Original name: TapSequencer
            zulu = this;
            var _closure3_slot0 = zulu;
            report = _closure1_slot1;
            tango = _closure2_slot0;
            entity = undefined;
            tango = report.bind(entity)(zulu, tango);
            tango = argFoo;
            zulu['tapSequenceHandlers'] = tango;
            tango = null;
            zulu['_state'] = tango;
            tango = function() {
                zulu = _closure3_slot0;
                mike = zulu.handlePress;
                entity = _closure1_slot5;
                entity = entity.SHORT;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu['handleShortPress'] = tango;
            mike = function() {
                zulu = _closure3_slot0;
                mike = zulu.handlePress;
                entity = _closure1_slot5;
                entity = entity.LONG;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu['handleLongPress'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'setTapSequenceHandlers';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            mike = argFoo;
            entity = this;
            entity['tapSequenceHandlers'] = mike;
            entity = undefined;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(4);
        mike[0] = entity;
        entity = {};
        oscar = 'getState';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = this;
                mike = global;
                zulu = mike.Date;
                mike = zulu.now;
                zulu = mike.bind(zulu)();
                tango = _closure1_slot6;
                mike = argFoo;
                report = tango[mike];
                tango = entity._state;
                mike = null;
                mike = mike === tango;
                if(mike) { _fun00002_ip = 69; continue _fun00001 }
 49:
                tango = entity._state;
                tango = tango.timestamp;
                tango = tango + report;
                mike = tango < zulu;
 69:
                if(!mike) { _fun00002_ip = 96; continue _fun00001 }
 72:
                mike = {};
                tango = entity.tapSequenceHandlers;
                mike['handlers'] = tango;
                mike['timestamp'] = zulu;
                entity['_state'] = mike;
 96:
                entity = entity._state;
                entity = entity.handlers;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'progressState';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zulu = argFoo;
                mike = null;
                entity = mike == zulu;
                if(entity) { _fun00004_ip = 44; continue _fun00003 }
 12:
                entity = {};
                entity['handlers'] = zulu;
                zulu = global;
                tango = zulu.Date;
                zulu = tango.now;
                zulu = zulu.bind(tango)();
                entity['timestamp'] = zulu;
                mike = entity;
 44:
                entity = this;
                entity['_state'] = mike;
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'handlePress';
        entity['key'] = oscar;
        report = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = argFoo;
                tango = this;
                mike = tango.getState;
                options = mike.bind(tango)(entity);
                zulu = tango.progressState;
                golf = options[entity];
                mike = null;
                oscar = mike == golf;
                entity = undefined;
                report = undefined;
                if(oscar) { _fun00006_ip = 52; continue _fun00005 }
 42:
                oscar = golf.call;
                report = oscar.bind(golf)(options);
 52:
                oscar = mike != report;
                mike = undefined;
                if(!oscar) { _fun00006_ip = 64; continue _fun00005 }
 61:
                mike = report;
 64:
                mike = zulu.bind(tango)(mike);
                return entity;
            }
        };
        entity['value'] = report;
        mike[3] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    tango = tango.bind(entity)();
    var _closure1_slot7 = tango;
    oscar = 4;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'lib/TapSequencer.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['TapSequencerPressType'] = report;
    zulu['TapSequencer'] = tango;
    mike = function(argFoo) { // Original name: useTapSequencer
        entity = argFoo;
        var _closure2_slot0 = entity;
        report = _closure1_slot3;
        tango = undefined;
        entity = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zulu = _closure1_slot7;
                entity = _closure2_slot0;
                tango = 'function';
                entity = typeof entity;
                if(!(tango !== entity)) { _fun00008_ip = 31; continue _fun00007 }
 25:
                entity = _closure2_slot0;
                _fun00008_ip = 41; continue _fun00007;
 31:
                tango = _closure2_slot0;
                mike = undefined;
                entity = tango.bind(mike)();
 41:
                mike = zulu.prototype;
                mike = Object.create(mike, {constructor: {value: zulu}});
                oscar = mike;
                report = entity;
                entity = new oscar[zulu](report, tango);
                entity = entity instanceof Object ? entity : mike;
                return entity;
            }
        };
        oscar = report.bind(tango)(entity);
        report = _closure1_slot0;
        entity = 1;
        report = report.bind(tango)(oscar, entity);
        entity = 0;
        entity = report[entity];
        var _closure2_slot1 = entity;
        zulu = _closure1_slot4;
        mike = function() {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zulu = _closure2_slot1;
                mike = zulu.setTapSequenceHandlers;
                entity = _closure2_slot0;
                report = 'function';
                entity = typeof entity;
                if(!(report !== entity)) { _fun00010_ip = 36; continue _fun00009 }
 30:
                entity = _closure2_slot0;
                _fun00010_ip = 46; continue _fun00009;
 36:
                report = _closure2_slot0;
                tango = undefined;
                entity = report.bind(tango)();
 46:
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            }
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['useTapSequencer'] = mike;
    return entity;
})();