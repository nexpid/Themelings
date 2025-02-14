// app/modules/routing/KeybindRouterStore.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo) { // Original name: getMatchData
        _fun110163: for(var _fun110163_ip = 0; ; ) switch(_fun110163_ip) {
 0:
            zulu = argFoo;
            mike = _closure1_slot0;
            entity = _closure1_slot1;
            options = 1;
            entity = entity[options];
            romeo = undefined;
            verify = mike.bind(romeo)(entity);
            oscar = verify.matchPath;
            mike = null;
            entity = mike != zulu;
            golf = '';
            report = golf;
            if(!entity) { _fun110163_ip = 53; continue _fun110163 }
 50:
            report = zulu;
 53:
            entity = {};
            sizing = _closure1_slot2;
            kilo = sizing.CHANNEL;
            yankee = _closure1_slot0;
            offset = _closure1_slot1;
            foxtrot = 2;
            backup = offset[foxtrot];
            backup = yankee.bind(romeo)(backup);
            output = backup.RouteParam;
            backup = output.guildId;
            backup = backup.bind(output)();
            offset = offset[foxtrot];
            offset = yankee.bind(romeo)(offset);
            output = offset.RouteParam;
            yankee = output.channelId;
            offset = {};
            result = true;
            offset['optional'] = result;
            yankee = yankee.bind(output)(offset);
            offset = ':messageId?';
            offset = kilo.bind(sizing)(backup, yankee, offset);
            entity['path'] = offset;
            entity = oscar.bind(verify)(report, entity);
            if(!(mike == entity)) { _fun110163_ip = 300; continue _fun110163 }
 165:
            oscar = _closure1_slot0;
            report = _closure1_slot1;
            report = report[options];
            oscar = oscar.bind(romeo)(report);
            report = oscar.matchPath;
            options = mike != zulu;
            if(!options) { _fun110163_ip = 198; continue _fun110163 }
 195:
            golf = zulu;
 198:
            zulu = {};
            offset = _closure1_slot2;
            verify = offset.GUILD_BOOSTING_MARKETING;
            yankee = _closure1_slot0;
            options = _closure1_slot1;
            options = options[foxtrot];
            options = yankee.bind(romeo)(options);
            yankee = options.RouteParam;
            options = yankee.guildId;
            options = options.bind(yankee)();
            options = verify.bind(offset)(options);
            zulu['path'] = options;
            oscar = report.bind(oscar)(golf, zulu);
            if(!(mike == oscar)) { _fun110163_ip = 274; continue _fun110163 }
 262:
            zulu = {'guildId': null, 'channelId': null};
            _fun110163_ip = 298; continue _fun110163;
 274:
            report = {};
            oscar = oscar.params;
            oscar = oscar.guildId;
            report['guildId'] = oscar;
            report['channelId'] = mike;
            zulu = report;
 298:
            return zulu;
 300:
            entity = entity.params;
            report = entity.guildId;
            zulu = entity.channelId;
            entity = {};
            oscar = _closure1_slot3;
            tango = null;
            if(!(report !== oscar)) { _fun110163_ip = 331; continue _fun110163 }
 328:
            tango = report;
 331:
            entity['guildId'] = tango;
            tango = mike != zulu;
            mike = null;
            if(!tango) { _fun110163_ip = 347; continue _fun110163 }
 344:
            mike = zulu;
 347:
            entity['channelId'] = mike;
            return entity;
        }
    };
    var _closure1_slot4 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    golf = tango.Routes;
    var _closure1_slot2 = golf;
    tango = tango.ME;
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    golf = report.bind(entity)(tango);
    tango = golf.createWithEqualityFn;
    mike = function(argFoo) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = {'path': null, 'basePath': '/', 'guildId': null, 'channelId': null};
        zulu = function(argFoo) { // Original name: updatePath
            report = argFoo;
            var _closure3_slot0 = report;
            tango = _closure1_slot4;
            entity = undefined;
            tango = tango.bind(entity)(report);
            report = tango.guildId;
            var _closure3_slot1 = report;
            tango = tango.channelId;
            var _closure3_slot2 = tango;
            tango = _closure1_slot0;
            report = _closure1_slot1;
            zulu = 4;
            zulu = report[zulu];
            tango = tango.bind(entity)(zulu);
            zulu = tango.batchUpdates;
            mike = function() {
                zulu = _closure2_slot0;
                mike = {};
                tango = _closure3_slot0;
                mike['path'] = tango;
                tango = _closure3_slot1;
                mike['guildId'] = tango;
                entity = _closure3_slot2;
                mike['channelId'] = entity;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity['updatePath'] = zulu;
        mike = function(argFoo) { // Original name: resetPath
            report = argFoo;
            var _closure3_slot0 = report;
            tango = _closure1_slot4;
            entity = undefined;
            tango = tango.bind(entity)(report);
            report = tango.guildId;
            var _closure3_slot1 = report;
            tango = tango.channelId;
            var _closure3_slot2 = tango;
            tango = _closure1_slot0;
            report = _closure1_slot1;
            zulu = 4;
            zulu = report[zulu];
            tango = tango.bind(entity)(zulu);
            zulu = tango.batchUpdates;
            mike = function() {
                zulu = _closure2_slot0;
                mike = {};
                entity = null;
                mike['path'] = entity;
                tango = _closure3_slot1;
                mike['guildId'] = tango;
                tango = _closure3_slot2;
                mike['channelId'] = tango;
                entity = _closure3_slot0;
                mike['basePath'] = entity;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity['resetPath'] = mike;
        return entity;
    };
    mike = tango.bind(golf)(mike);
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/routing/KeybindRouterStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();