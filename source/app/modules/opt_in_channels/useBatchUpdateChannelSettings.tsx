// app/modules/opt_in_channels/useBatchUpdateChannelSettings.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: resetStoreState
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES';
        mike['type'] = report;
        report = argFoo;
        mike['guildId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot7 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticsSections;
    var _closure1_slot6 = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/opt_in_channels/useBatchUpdateChannelSettings.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useBatchUpdateChannelSettings
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        entity = 5;
        tango = tango[entity];
        entity = undefined;
        golf = report.bind(entity)(tango);
        report = golf.useStateFromStores;
        entity = _closure1_slot5;
        tango = new Array(1);
        tango[0] = entity;
        entity = function() {
            zulu = _closure1_slot5;
            mike = zulu.getPendingChannelUpdates;
            entity = _closure2_slot0;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = report.bind(golf)(tango, entity);
        var _closure2_slot1 = entity;
        report = _closure1_slot3;
        golf = report.useEffect;
        tango = new Array(1);
        tango[0] = oscar;
        zulu = function() {
            zulu = _closure1_slot7;
            mike = _closure2_slot0;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = function() {
                zulu = _closure1_slot7;
                mike = _closure2_slot0;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            return entity;
        };
        zulu = golf.bind(report)(zulu, tango);
        tango = report.useEffect;
        zulu = new Array(2);
        zulu[0] = oscar;
        zulu[1] = entity;
        entity = function() {
            _fun90284: for(var _fun90284_ip = 0; ; ) switch(_fun90284_ip) {
 0:
                zulu = _closure2_slot1;
                mike = null;
                if(!(mike != zulu)) { _fun90284_ip = 58; continue _fun90284 }
 13:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 6;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                zulu = tango.updateOptInChannelsBatched;
                mike = _closure2_slot0;
                entity = _closure2_slot1;
                entity = zulu.bind(tango)(mike, entity);
 58:
                entity = undefined;
                return entity;
            }
        };
        entity = tango.bind(report)(entity, zulu);
        entity = {};
        tango = report.useCallback;
        zulu = function(argFoo, argBar, argBaz) {
            _fun90285: for(var _fun90285_ip = 0; ; ) switch(_fun90285_ip) {
 0:
                report = argFoo;
                golf = argBar;
                zulu = argBaz;
                tango = _closure1_slot5;
                entity = tango.isChannelOptedIn;
                oscar = entity.bind(tango)(report, golf);
                entity = !oscar;
                if(!entity) { _fun90285_ip = 49; continue _fun90285 }
 34:
                options = _closure1_slot4;
                tango = options.isCollapsed;
                entity = tango.bind(options)(zulu);
 49:
                if(!entity) { _fun90285_ip = 58; continue _fun90285 }
 52:
                tango = null;
                entity = tango != zulu;
 58:
                if(!entity) { _fun90285_ip = 94; continue _fun90285 }
 61:
                options = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 7;
                tango = tango[entity];
                entity = undefined;
                tango = options.bind(entity)(tango);
                entity = tango.categoryExpand;
                entity = entity.bind(tango)(zulu);
 94:
                verify = _closure1_slot0;
                entity = _closure1_slot2;
                tango = 8;
                options = entity[tango];
                entity = undefined;
                verify = verify.bind(entity)(options);
                options = verify.hasNotSetUpChannelOptIn;
                options = options.bind(verify)(report);
                if(options) { _fun90285_ip = 196; continue _fun90285 }
 130:
                verify = _closure1_slot0;
                offset = _closure1_slot2;
                options = 6;
                options = offset[options];
                offset = verify.bind(entity)(options);
                verify = offset.updateOptInChannelsImmediate;
                foxtrot = !oscar;
                oscar = {};
                yankee = _closure1_slot6;
                yankee = yankee.CHANNEL_BROWSER;
                oscar['section'] = yankee;
                sizing = offset;
                kilo = report;
                backup = golf;
                romeo = oscar;
                oscar = sizing[verify](kilo, backup, foxtrot, romeo, yankee);
                _fun90285_ip = 352; continue _fun90285;
 196:
                if(!(golf !== zulu)) { _fun90285_ip = 277; continue _fun90285 }
 200:
                oscar = _closure1_slot0;
                zulu = _closure1_slot2;
                zulu = zulu[tango];
                options = oscar.bind(entity)(zulu);
                oscar = options.optIntoAllChannelsForExistingMember;
                zulu = {};
                verify = global;
                yankee = verify.Set;
                verify = new Array(1);
                verify[0] = golf;
                offset = yankee.prototype;
                offset = Object.create(offset, {constructor: {value: yankee}});
                sizing = offset;
                kilo = verify;
                verify = new sizing[yankee](kilo, backup);
                verify = verify instanceof Object ? verify : offset;
                zulu['exclude'] = verify;
                zulu = oscar.bind(options)(report, zulu);
                _fun90285_ip = 352; continue _fun90285;
 277:
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                mike = mike[tango];
                tango = zulu.bind(entity)(mike);
                zulu = tango.optIntoAllChannelsForExistingMember;
                mike = {};
                oscar = global;
                options = oscar.Set;
                oscar = new Array(1);
                oscar[0] = golf;
                golf = options.prototype;
                golf = Object.create(golf, {constructor: {value: options}});
                sizing = golf;
                kilo = oscar;
                oscar = new sizing[options](kilo, backup);
                oscar = oscar instanceof Object ? oscar : golf;
                mike['include'] = oscar;
                mike = zulu.bind(tango)(report, mike);
 352:
                return entity;
            }
        };
        mike = new Array(0);
        mike = tango.bind(report)(zulu, mike);
        entity['onChannelClick'] = mike;
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();