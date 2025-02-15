// app/modules/favorites/useIsFavoritesGuildVisible.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    mike = function(argFoo, argBar, argBaz) { // Original name: isFavoritesGuildVisible
        _fun105739: for(var _fun105739_ip = 0; ; ) switch(_fun105739_ip) {
 0:
            oscar = argFoo;
            entity = argBar;
            var _closure2_slot0 = entity;
            entity = argBaz;
            var _closure2_slot1 = entity;
            zulu = _closure1_slot1;
            report = _closure1_slot2;
            entity = 4;
            entity = report[entity];
            report = undefined;
            verify = zulu.bind(report)(entity);
            options = verify.getCurrentConfig;
            golf = {};
            entity = 'isFavoritesGuildVisible';
            golf['location'] = entity;
            zulu = {};
            entity = false;
            zulu['autoTrackExposure'] = entity;
            golf = options.bind(verify)(golf, zulu);
            zulu = golf.canShow;
            golf = golf.isFavoritesPerk;
            if(golf) { _fun105739_ip = 216; continue _fun105739 }
 93:
            if(zulu) { _fun105739_ip = 98; continue _fun105739 }
 96:
            return entity;
 98:
            zulu = oscar.getFavoriteChannels;
            verify = zulu.bind(oscar)();
            golf = _closure1_slot1;
            zulu = _closure1_slot2;
            oscar = 5;
            zulu = zulu[oscar];
            golf = golf.bind(report)(zulu);
            zulu = golf.isEmpty;
            zulu = zulu.bind(golf)(verify);
            if(zulu) { _fun105739_ip = 214; continue _fun105739 }
 142:
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            golf = 6;
            golf = mike[golf];
            options = zulu.bind(report)(golf);
            golf = options.keys;
            options = golf.bind(options)(verify);
            golf = options.filter;
            tango = function(argFoo) {
                _fun105740: for(var _fun105740_ip = 0; ; ) switch(_fun105740_ip) {
 0:
                    tango = _closure2_slot0;
                    mike = tango.getChannel;
                    entity = argFoo;
                    oscar = mike.bind(tango)(entity);
                    entity = null;
                    entity = entity != oscar;
                    if(!entity) { _fun105740_ip = 80; continue _fun105740 }
 29:
                    mike = oscar.isPrivate;
                    mike = mike.bind(oscar)();
                    tango = !mike;
                    mike = !tango;
                    if(!tango) { _fun105740_ip = 77; continue _fun105740 }
 48:
                    report = _closure2_slot1;
                    tango = report.can;
                    zulu = _closure1_slot6;
                    zulu = zulu.VIEW_CHANNEL;
                    mike = tango.bind(report)(zulu, oscar);
 77:
                    entity = mike;
 80:
                    return entity;
                }
            };
            tango = golf.bind(options)(tango);
            mike = mike[oscar];
            zulu = zulu.bind(report)(mike);
            mike = zulu.isEmpty;
            mike = mike.bind(zulu)(tango);
            mike = !mike;
            return mike;
 214:
            return entity;
 216:
            entity = true;
            return entity;
        }
    };
    var _closure1_slot7 = mike;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.Permissions;
    var _closure1_slot6 = report;
    report = 8;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/favorites/useIsFavoritesGuildVisible.tsx';
    report = oscar.bind(golf)(report);
    tango = function() { // Original name: useIsFavoritesGuildVisible
        _fun105741: for(var _fun105741_ip = 0; ; ) switch(_fun105741_ip) {
 0:
            report = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 4;
            entity = golf[entity];
            tango = undefined;
            options = report.bind(tango)(entity);
            zulu = options.useFavoritesServerExperiment;
            entity = 'useIsFavoritesGuildVisible';
            entity = zulu.bind(options)(entity);
            zulu = entity.canShow;
            var _closure2_slot0 = zulu;
            entity = entity.isFavoritesPerk;
            zulu = 7;
            zulu = golf[zulu];
            report = report.bind(tango)(zulu);
            tango = report.useStateFromStores;
            golf = _closure1_slot5;
            zulu = new Array(3);
            zulu[0] = golf;
            golf = _closure1_slot3;
            zulu[1] = golf;
            oscar = _closure1_slot4;
            zulu[2] = oscar;
            mike = function() {
                _fun105742: for(var _fun105742_ip = 0; ; ) switch(_fun105742_ip) {
 0:
                    entity = _closure2_slot0;
                    if(!entity) { _fun105742_ip = 38; continue _fun105742 }
 10:
                    oscar = _closure1_slot7;
                    report = _closure1_slot5;
                    tango = _closure1_slot3;
                    zulu = _closure1_slot4;
                    mike = undefined;
                    entity = oscar.bind(mike)(report, tango, zulu);
 38:
                    return entity;
                }
            };
            mike = tango.bind(report)(zulu, mike);
            zulu = !entity;
            entity = !zulu;
            if(!zulu) { _fun105741_ip = 130; continue _fun105741 }
 127:
            entity = mike;
 130:
            return entity;
        }
    };
    zulu['default'] = tango;
    zulu['isFavoritesGuildVisible'] = mike;
    return entity;
})();