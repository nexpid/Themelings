// app/modules/voice_panel/VoicePanelStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    golf = report.bind(entity)(tango);
    tango = golf.createWithEqualityFn;
    mike = function(argFoo, argBar) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = argBar;
        var _closure2_slot1 = entity;
        entity = {};
        zulu = global;
        tango = zulu.Set;
        report = tango.prototype;
        report = Object.create(report, {constructor: {value: tango}});
        oscar = report;
        tango = new oscar[tango](report);
        tango = tango instanceof Object ? tango : report;
        entity['channels'] = tango;
        tango = false;
        entity['isActivityFocused'] = tango;
        tango = function() { // Original name: isVoicePanelFullscreen
            mike = _closure2_slot1;
            entity = undefined;
            entity = mike.bind(entity)();
            entity = entity.voicePanelsFullscreen;
            mike = entity.size;
            entity = 0;
            entity = mike > entity;
            return entity;
        };
        entity['isVoicePanelFullscreen'] = tango;
        tango = function() { // Original name: isAnyVoicePanelOpen
            mike = _closure2_slot1;
            entity = undefined;
            entity = mike.bind(entity)();
            entity = entity.voicePanelsOpened;
            mike = entity.size;
            entity = 0;
            entity = mike > entity;
            return entity;
        };
        entity['isAnyVoicePanelOpen'] = tango;
        tango = zulu.Set;
        report = tango.prototype;
        report = Object.create(report, {constructor: {value: tango}});
        oscar = report;
        tango = new oscar[tango](report);
        tango = tango instanceof Object ? tango : report;
        entity['voicePanelsFullscreen'] = tango;
        tango = zulu.Set;
        report = tango.prototype;
        report = Object.create(report, {constructor: {value: tango}});
        oscar = report;
        tango = new oscar[tango](report);
        tango = tango instanceof Object ? tango : report;
        entity['voicePanelsOpened'] = tango;
        zulu = zulu.Set;
        tango = zulu.prototype;
        tango = Object.create(tango, {constructor: {value: zulu}});
        oscar = tango;
        zulu = new oscar[zulu](report);
        zulu = zulu instanceof Object ? zulu : tango;
        entity['voicePanelsPIP'] = zulu;
        zulu = function(argFoo) { // Original name: openChannel
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                golf = argFoo;
                var _closure3_slot0 = golf;
                tango = _closure1_slot2;
                entity = tango.getChannel;
                oscar = entity.bind(tango)(golf);
                entity = null;
                tango = entity == oscar;
                entity = undefined;
                report = undefined;
                if(tango) { _fun00002_ip = 49; continue _fun00001 }
 39:
                tango = oscar.isGuildStageVoice;
                report = tango.bind(oscar)();
 49:
                tango = true;
                tango = tango === report;
                if(tango) { _fun00002_ip = 85; continue _fun00001 }
 58:
                report = _closure2_slot1;
                report = report.bind(entity)();
                oscar = report.channels;
                report = oscar.has;
                tango = report.bind(oscar)(golf);
 85:
                if(tango) { _fun00002_ip = 126; continue _fun00001 }
 88:
                tango = _closure1_slot0;
                report = _closure1_slot1;
                zulu = 2;
                zulu = report[zulu];
                tango = tango.bind(entity)(zulu);
                zulu = tango.batchUpdates;
                mike = function() {
                    zulu = _closure2_slot0;
                    entity = undefined;
                    mike = function(argFoo) {
                        zulu = argFoo;
                        entity = {};
                        romeo = entity;
                        yankee = zulu;
                        mike = copyDataProperties(romeo, yankee);
                        oscar = global;
                        options = oscar.Set;
                        golf = _closure3_slot0;
                        mike = new Array(1);
                        mike[0] = golf;
                        verify = oscar.Array;
                        report = verify.from;
                        tango = zulu.channels;
                        yankee = report.bind(verify)(tango);
                        report = 1;
                        romeo = mike;
                        offset = report;
                        tango = arraySpread(romeo, yankee, offset);
                        tango = options.prototype;
                        tango = Object.create(tango, {constructor: {value: options}});
                        foxtrot = tango;
                        romeo = mike;
                        mike = new foxtrot[options](romeo, yankee);
                        tango = mike instanceof Object ? mike : tango;
                        mike = 'channels';
                        entity[mike] = tango;
                        tango = oscar.Set;
                        mike = new Array(1);
                        mike[0] = golf;
                        golf = oscar.Array;
                        oscar = golf.from;
                        zulu = zulu.voicePanelsOpened;
                        yankee = oscar.bind(golf)(zulu);
                        romeo = mike;
                        zulu = arraySpread(romeo, yankee, offset);
                        zulu = tango.prototype;
                        zulu = Object.create(zulu, {constructor: {value: tango}});
                        foxtrot = zulu;
                        romeo = mike;
                        mike = new foxtrot[tango](romeo, yankee);
                        zulu = mike instanceof Object ? mike : zulu;
                        mike = 'voicePanelsOpened';
                        entity[mike] = zulu;
                        return entity;
                    };
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
 126:
                return entity;
            }
        };
        entity['openChannel'] = zulu;
        zulu = function(argFoo) { // Original name: closeChannel
            entity = argFoo;
            var _closure3_slot0 = entity;
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 2;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.batchUpdates;
            mike = function() {
                zulu = _closure2_slot0;
                entity = undefined;
                mike = function(argFoo) {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        zulu = argFoo;
                        report = zulu.channels;
                        options = zulu.voicePanelsFullscreen;
                        verify = zulu.voicePanelsOpened;
                        mike = report.has;
                        entity = _closure3_slot0;
                        entity = mike.bind(report)(entity);
                        if(entity) { _fun00004_ip = 81; continue _fun00003 }
 41:
                        mike = options.has;
                        entity = _closure3_slot0;
                        entity = mike.bind(options)(entity);
                        if(entity) { _fun00004_ip = 81; continue _fun00003 }
 58:
                        mike = verify.has;
                        entity = _closure3_slot0;
                        mike = mike.bind(verify)(entity);
                        entity = zulu;
                        if(!mike) { _fun00004_ip = 327; continue _fun00003 }
 81:
                        tango = report.has;
                        mike = _closure3_slot0;
                        mike = tango.bind(report)(mike);
                        oscar = report;
                        if(!mike) { _fun00004_ip = 149; continue _fun00003 }
 101:
                        mike = global;
                        mike = mike.Set;
                        tango = mike.prototype;
                        tango = Object.create(tango, {constructor: {value: mike}});
                        romeo = tango;
                        yankee = report;
                        mike = new romeo[mike](yankee, offset);
                        mike = mike instanceof Object ? mike : tango;
                        report = mike.delete;
                        tango = _closure3_slot0;
                        tango = report.bind(mike)(tango);
                        oscar = mike;
 149:
                        tango = options.has;
                        mike = _closure3_slot0;
                        mike = tango.bind(options)(mike);
                        report = options;
                        if(!mike) { _fun00004_ip = 217; continue _fun00003 }
 169:
                        mike = global;
                        mike = mike.Set;
                        tango = mike.prototype;
                        tango = Object.create(tango, {constructor: {value: mike}});
                        romeo = tango;
                        yankee = options;
                        mike = new romeo[mike](yankee, offset);
                        mike = mike instanceof Object ? mike : tango;
                        options = mike.delete;
                        tango = _closure3_slot0;
                        tango = options.bind(mike)(tango);
                        report = mike;
 217:
                        tango = verify.has;
                        mike = _closure3_slot0;
                        mike = tango.bind(verify)(mike);
                        tango = verify;
                        if(!mike) { _fun00004_ip = 285; continue _fun00003 }
 237:
                        mike = global;
                        mike = mike.Set;
                        options = mike.prototype;
                        options = Object.create(options, {constructor: {value: mike}});
                        romeo = options;
                        yankee = verify;
                        mike = new romeo[mike](yankee, offset);
                        mike = mike instanceof Object ? mike : options;
                        options = mike.delete;
                        golf = _closure3_slot0;
                        golf = options.bind(mike)(golf);
                        tango = mike;
 285:
                        mike = {};
                        yankee = mike;
                        offset = zulu;
                        zulu = copyDataProperties(yankee, offset);
                        zulu = 'channels';
                        mike[zulu] = oscar;
                        zulu = 'voicePanelsFullscreen';
                        mike[zulu] = report;
                        zulu = 'voicePanelsOpened';
                        mike[zulu] = tango;
                        entity = mike;
 327:
                        return entity;
                    }
                };
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity['closeChannel'] = zulu;
        zulu = function(argFoo) { // Original name: isMounted
            mike = _closure2_slot1;
            entity = undefined;
            entity = mike.bind(entity)();
            zulu = entity.channels;
            mike = zulu.has;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['isMounted'] = zulu;
        zulu = function(argFoo) { // Original name: setIsActivityFocused
            entity = argFoo;
            var _closure3_slot0 = entity;
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 2;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.batchUpdates;
            mike = function() {
                zulu = _closure2_slot0;
                entity = undefined;
                mike = function(argFoo) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        tango = argFoo;
                        report = tango.isActivityFocused;
                        mike = _closure3_slot0;
                        entity = tango;
                        if(!(report !== mike)) { _fun00006_ip = 51; continue _fun00005 }
 23:
                        mike = {};
                        golf = mike;
                        oscar = tango;
                        tango = copyDataProperties(golf, oscar);
                        tango = _closure3_slot0;
                        zulu = 'isActivityFocused';
                        mike[zulu] = tango;
                        entity = mike;
 51:
                        return entity;
                    }
                };
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity['setIsActivityFocused'] = zulu;
        zulu = function(argFoo, argBar) { // Original name: setChannelPanelFullscreen
            entity = argFoo;
            var _closure3_slot0 = entity;
            entity = argBar;
            var _closure3_slot1 = entity;
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 2;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.batchUpdates;
            mike = function() {
                zulu = _closure2_slot0;
                entity = undefined;
                mike = function(argFoo) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        entity = argFoo;
                        mike = global;
                        tango = mike.Set;
                        options = entity.voicePanelsFullscreen;
                        zulu = tango.prototype;
                        zulu = Object.create(zulu, {constructor: {value: tango}});
                        verify = zulu;
                        mike = new verify[tango](options, golf);
                        tango = mike instanceof Object ? mike : zulu;
                        report = _closure3_slot1;
                        oscar = tango.has;
                        zulu = _closure3_slot0;
                        zulu = oscar.bind(tango)(zulu);
                        if(report) { _fun00008_ip = 82; continue _fun00007 }
 61:
                        if(zulu) { _fun00008_ip = 66; continue _fun00007 }
 64:
                        return entity;
 66:
                        oscar = tango.delete;
                        report = _closure3_slot0;
                        report = oscar.bind(tango)(report);
                        _fun00008_ip = 99; continue _fun00007;
 82:
                        if(zulu) { _fun00008_ip = 122; continue _fun00007 }
 85:
                        zulu = tango.add;
                        mike = _closure3_slot0;
                        mike = zulu.bind(tango)(mike);
 99:
                        mike = {};
                        options = mike;
                        golf = entity;
                        zulu = copyDataProperties(options, golf);
                        zulu = 'voicePanelsFullscreen';
                        mike[zulu] = tango;
                        return mike;
 122:
                        return entity;
                    }
                };
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity['setChannelPanelFullscreen'] = zulu;
        zulu = function(argFoo, argBar) { // Original name: setChannelPanelOpen
            entity = argFoo;
            var _closure3_slot0 = entity;
            entity = argBar;
            var _closure3_slot1 = entity;
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 2;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.batchUpdates;
            mike = function() {
                zulu = _closure2_slot0;
                entity = undefined;
                mike = function(argFoo) {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        entity = argFoo;
                        report = entity.channels;
                        tango = report.has;
                        zulu = _closure3_slot0;
                        zulu = tango.bind(report)(zulu);
                        if(zulu) { _fun00010_ip = 31; continue _fun00009 }
 29:
                        return entity;
 31:
                        zulu = global;
                        report = zulu.Set;
                        options = entity.voicePanelsOpened;
                        tango = report.prototype;
                        tango = Object.create(tango, {constructor: {value: report}});
                        verify = tango;
                        zulu = new verify[report](options, golf);
                        tango = zulu instanceof Object ? zulu : tango;
                        report = _closure3_slot1;
                        oscar = tango.has;
                        zulu = _closure3_slot0;
                        zulu = oscar.bind(tango)(zulu);
                        if(report) { _fun00010_ip = 107; continue _fun00009 }
 86:
                        if(zulu) { _fun00010_ip = 91; continue _fun00009 }
 89:
                        return entity;
 91:
                        oscar = tango.delete;
                        report = _closure3_slot0;
                        report = oscar.bind(tango)(report);
                        _fun00010_ip = 124; continue _fun00009;
 107:
                        if(zulu) { _fun00010_ip = 147; continue _fun00009 }
 110:
                        zulu = tango.add;
                        mike = _closure3_slot0;
                        mike = zulu.bind(tango)(mike);
 124:
                        mike = {};
                        options = mike;
                        golf = entity;
                        zulu = copyDataProperties(options, golf);
                        zulu = 'voicePanelsOpened';
                        mike[zulu] = tango;
                        return mike;
 147:
                        return entity;
                    }
                };
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity['setChannelPanelOpen'] = zulu;
        zulu = function(argFoo) { // Original name: isChannelOpen
            mike = _closure2_slot1;
            entity = undefined;
            entity = mike.bind(entity)();
            zulu = entity.voicePanelsOpened;
            mike = zulu.has;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['isChannelOpen'] = zulu;
        mike = function(argFoo, argBar) { // Original name: setChannelPanelPIP
            entity = argFoo;
            var _closure3_slot0 = entity;
            entity = argBar;
            var _closure3_slot1 = entity;
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 2;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.batchUpdates;
            mike = function() {
                zulu = _closure2_slot0;
                entity = undefined;
                mike = function(argFoo) {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        entity = argFoo;
                        mike = global;
                        tango = mike.Set;
                        options = entity.voicePanelsPIP;
                        zulu = tango.prototype;
                        zulu = Object.create(zulu, {constructor: {value: tango}});
                        verify = zulu;
                        mike = new verify[tango](options, golf);
                        tango = mike instanceof Object ? mike : zulu;
                        report = _closure3_slot1;
                        oscar = tango.has;
                        zulu = _closure3_slot0;
                        zulu = oscar.bind(tango)(zulu);
                        if(report) { _fun00012_ip = 82; continue _fun00011 }
 61:
                        if(zulu) { _fun00012_ip = 66; continue _fun00011 }
 64:
                        return entity;
 66:
                        oscar = tango.delete;
                        report = _closure3_slot0;
                        report = oscar.bind(tango)(report);
                        _fun00012_ip = 99; continue _fun00011;
 82:
                        if(zulu) { _fun00012_ip = 122; continue _fun00011 }
 85:
                        zulu = tango.add;
                        mike = _closure3_slot0;
                        mike = zulu.bind(tango)(mike);
 99:
                        mike = {};
                        options = mike;
                        golf = entity;
                        zulu = copyDataProperties(options, golf);
                        zulu = 'voicePanelsPIP';
                        mike[zulu] = tango;
                        return mike;
 122:
                        return entity;
                    }
                };
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity['setChannelPanelPIP'] = mike;
        return entity;
    };
    mike = tango.bind(golf)(mike);
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_panel/VoicePanelStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();