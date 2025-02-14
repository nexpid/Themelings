// app/modules/guilds_bar/native/GuildsBarPendingGuildFolder.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    golf = tango.bind(entity)(golf);
    var _closure1_slot3 = golf;
    tango = 1;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot6 = tango;
    tango = golf.memo;
    mike = function(argFoo) { // Original name: GuildsBarPendingGuildFolder
        _fun114421: for(var _fun114421_ip = 0; ; ) switch(_fun114421_ip) {
 0:
            entity = argFoo;
            offset = entity.node;
            var _closure2_slot0 = offset;
            foxtrot = _closure1_slot0;
            backup = _closure1_slot2;
            entity = 4;
            mike = backup[entity];
            tango = undefined;
            oscar = foxtrot.bind(tango)(mike);
            mike = oscar.useGuildsBarAnimatedWrapperStyles;
            golf = true;
            yankee = false;
            verify = mike.bind(oscar)(golf, yankee);
            mike = _closure1_slot1;
            oscar = 5;
            oscar = backup[oscar];
            oscar = mike.bind(tango)(oscar);
            oscar = oscar.bind(tango)();
            var _closure2_slot1 = oscar;
            oscar = 6;
            oscar = backup[oscar];
            kilo = foxtrot.bind(tango)(oscar);
            romeo = kilo.useStateFromStores;
            oscar = _closure1_slot4;
            options = new Array(1);
            options[0] = oscar;
            oscar = function() {
                _fun114422: for(var _fun114422_ip = 0; ; ) switch(_fun114422_ip) {
 0:
                    zulu = _closure2_slot1;
                    mike = zulu.includes;
                    report = _closure1_slot4;
                    entity = report.getGuildId;
                    entity = entity.bind(report)();
                    report = null;
                    if(!(report == entity)) { _fun114422_ip = 39; continue _fun114422 }
 35:
                    entity = _closure1_slot5;
 39:
                    entity = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            romeo = romeo.bind(kilo)(options, oscar);
            update = _closure1_slot3;
            kilo = update.useMemo;
            oscar = offset.id;
            options = new Array(1);
            options[0] = oscar;
            oscar = function() {
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 7;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.getGuildFolderMenuItems;
                entity = _closure2_slot0;
                entity = entity.id;
                report = zulu.bind(tango)(entity);
                var _closure3_slot0 = report;
                entity = {};
                tango = report.map;
                zulu = function(argFoo) {
                    mike = argFoo;
                    entity = {};
                    zulu = mike.label;
                    entity['name'] = zulu;
                    mike = mike.label;
                    entity['label'] = mike;
                    return entity;
                };
                zulu = tango.bind(report)(zulu);
                entity['accessibilityActions'] = zulu;
                mike = function(argFoo) { // Original name: onAccessibilityAction
                    _fun114425: for(var _fun114425_ip = 0; ; ) switch(_fun114425_ip) {
 0:
                        mike = argFoo;
                        var _closure4_slot0 = mike;
                        zulu = _closure3_slot0;
                        mike = zulu.find;
                        entity = function(argFoo) {
                            entity = argFoo;
                            mike = entity.label;
                            entity = _closure4_slot0;
                            entity = entity.nativeEvent;
                            entity = entity.actionName;
                            entity = mike === entity;
                            return entity;
                        };
                        mike = mike.bind(zulu)(entity);
                        tango = null;
                        entity = tango == mike;
                        if(entity) { _fun114425_ip = 51; continue _fun114425 }
 42:
                        zulu = mike.action;
                        entity = tango == zulu;
 51:
                        if(entity) { _fun114425_ip = 63; continue _fun114425 }
 54:
                        entity = mike.action;
                        entity = entity.bind(mike)();
 63:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['onAccessibilityAction'] = mike;
                return entity;
            };
            oscar = kilo.bind(update)(oscar, options);
            sizing = oscar.accessibilityActions;
            kilo = oscar.onAccessibilityAction;
            source = offset.id;
            oscar = 8;
            oscar = backup[oscar];
            result = foxtrot.bind(tango)(oscar);
            options = result.useSharedValue;
            output = global;
            oscar = output.HermesInternal;
            oscar = oscar.concat;
            echo = '';
            oscar = oscar.bind(echo)(source);
            options = options.bind(result)(oscar);
            result = update.useMemo;
            source = offset.id;
            oscar = new Array(1);
            oscar[0] = source;
            zulu = function() {
                entity = {};
                mike = function() { // Original name: onPress
                    golf = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 9;
                    report = tango[zulu];
                    entity = undefined;
                    oscar = golf.bind(entity)(report);
                    report = oscar.triggerHapticFeedback;
                    zulu = tango[zulu];
                    zulu = golf.bind(entity)(zulu);
                    zulu = zulu.HapticFeedbackTypes;
                    zulu = zulu.IMPACT_LIGHT;
                    zulu = report.bind(oscar)(zulu);
                    zulu = _closure1_slot1;
                    mike = 10;
                    mike = tango[mike];
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.toggleGuildFolderExpand;
                    mike = _closure2_slot0;
                    mike = mike.id;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                entity['onPress'] = mike;
                return entity;
            };
            oscar = result.bind(update)(zulu, oscar);
            zulu = _closure1_slot6;
            entity = backup[entity];
            mike = mike.bind(tango)(entity);
            entity = {};
            result = offset.id;
            output = output.HermesInternal;
            output = output.concat;
            output = output.bind(echo)(result);
            entity['id'] = output;
            entity['accessibilityActions'] = sizing;
            entity['onAccessibilityAction'] = kilo;
            entity['selected'] = romeo;
            entity['unread'] = yankee;
            entity['circle'] = yankee;
            entity['styles'] = verify;
            verify = 11;
            yankee = backup[verify];
            yankee = foxtrot.bind(tango)(yankee);
            romeo = yankee.intl;
            yankee = romeo.string;
            verify = backup[verify];
            verify = foxtrot.bind(tango)(verify);
            verify = verify.t;
            verify = verify.scsU+v;
            verify = yankee.bind(romeo)(verify);
            entity['label'] = verify;
            entity['sharedId'] = options;
            entity['cutouts'] = tango;
            entity['overState'] = tango;
            entity['preventClipping'] = golf;
            entity['config'] = oscar;
            golf = offset.expanded;
            oscar = null;
            if(!golf) { _fun114421_ip = 468; continue _fun114421 }
 405:
            verify = _closure1_slot6;
            options = _closure1_slot0;
            yankee = _closure1_slot2;
            golf = 12;
            golf = yankee[golf];
            golf = options.bind(tango)(golf);
            options = golf.GuildsBarGuildFolderBG;
            golf = {};
            yankee = offset.id;
            golf['folderId'] = yankee;
            offset = offset.children;
            offset = offset.length;
            golf['totalItems'] = offset;
            oscar = verify.bind(tango)(options, golf);
 468:
            entity['externalChildren'] = oscar;
            golf = _closure1_slot6;
            oscar = _closure1_slot0;
            options = _closure1_slot2;
            report = 13;
            report = options[report];
            report = oscar.bind(tango)(report);
            oscar = report.HourglassIcon;
            report = {};
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 14;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guilds_bar/native/GuildsBarPendingGuildFolder.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();