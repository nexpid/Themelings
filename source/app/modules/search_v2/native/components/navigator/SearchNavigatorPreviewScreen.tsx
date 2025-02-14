// app/modules/search_v2/native/components/navigator/SearchNavigatorPreviewScreen.tsx
export default (function(_, argBar, argBaz, argCorge, __, argFred, argPlugh) {
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
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    offset = 1;
    tango = oscar[offset];
    tango = report.bind(entity)(tango);
    options = tango.View;
    var _closure1_slot4 = options;
    tango = tango.ScrollView;
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.SearchTypes;
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    verify['flex'] = offset;
    tango['container'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot9 = tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/search_v2/native/components/navigator/SearchNavigatorPreviewScreen.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: SearchNavigatorPreviewScreen
        _fun120368: for(var _fun120368_ip = 0; ; ) switch(_fun120368_ip) {
 0:
            entity = _closure1_slot9;
            tango = undefined;
            options = entity.bind(tango)();
            oscar = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 6;
            entity = verify[entity];
            zulu = oscar.bind(tango)(entity);
            entity = zulu.useNavigation;
            romeo = entity.bind(zulu)();
            var _closure2_slot0 = romeo;
            entity = 7;
            entity = verify[entity];
            zulu = oscar.bind(tango)(entity);
            entity = zulu.useRoute;
            zulu = entity.bind(zulu)();
            entity = zulu.params;
            offset = entity.channelId;
            entity = zulu.params;
            entity = entity.searchContext;
            var _closure2_slot1 = entity;
            zulu = zulu.params;
            zulu = zulu.onBeforeJumpToMessage;
            var _closure2_slot2 = zulu;
            report = 8;
            report = verify[report];
            yankee = oscar.bind(tango)(report);
            verify = yankee.useStateFromStores;
            report = _closure1_slot6;
            oscar = new Array(1);
            oscar[0] = report;
            report = function() {
                mike = _closure1_slot6;
                entity = mike.getWidth;
                entity = entity.bind(mike)();
                return entity;
            };
            yankee = verify.bind(yankee)(oscar, report);
            var _closure2_slot3 = yankee;
            oscar = _closure1_slot3;
            verify = oscar.useCallback;
            report = new Array(3);
            report[0] = romeo;
            report[1] = entity;
            report[2] = zulu;
            zulu = function() {
                _fun120370: for(var _fun120370_ip = 0; ; ) switch(_fun120370_ip) {
 0:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 9;
                    mike = mike[entity];
                    entity = undefined;
                    oscar = zulu.bind(entity)(mike);
                    report = oscar.trackSearchJumpToMessage;
                    mike = {};
                    golf = _closure2_slot1;
                    mike['searchContext'] = golf;
                    mike = report.bind(oscar)(mike);
                    report = _closure2_slot2;
                    mike = null;
                    if(!(mike != report)) { _fun120370_ip = 68; continue _fun120370 }
 60:
                    report = _closure2_slot2;
                    report = report.bind(entity)();
 68:
                    report = _closure2_slot1;
                    report = report.type;
                    oscar = _closure1_slot7;
                    oscar = oscar.DMS;
                    if(!(oscar !== report)) { _fun120370_ip = 119; continue _fun120370 }
 91:
                    oscar = _closure1_slot7;
                    oscar = oscar.GUILD;
                    if(!(oscar !== report)) { _fun120370_ip = 119; continue _fun120370 }
 105:
                    tango = _closure1_slot7;
                    tango = tango.CHANNEL;
                    if(!(tango === report)) { _fun120370_ip = 147; continue _fun120370 }
 119:
                    tango = _closure2_slot0;
                    zulu = tango.getParent;
                    zulu = zulu.bind(tango)();
                    if(!(mike != zulu)) { _fun120370_ip = 149; continue _fun120370 }
 137:
                    mike = zulu.goBack;
                    mike = mike.bind(zulu)();
 147:
                    return entity;
 149:
                    return entity;
                }
            };
            verify = verify.bind(oscar)(zulu, report);
            report = oscar.useMemo;
            zulu = new Array(1);
            zulu[0] = yankee;
            mike = function() {
                entity = {};
                mike = _closure2_slot3;
                entity['width'] = mike;
                return entity;
            };
            yankee = report.bind(oscar)(mike, zulu);
            mike = entity.type;
            entity = _closure1_slot7;
            entity = entity.CHANNEL;
            if(!(entity !== mike)) { _fun120368_ip = 300; continue _fun120368 }
 243:
            entity = _closure1_slot7;
            entity = entity.GUILD_CHANNEL;
            if(!(entity !== mike)) { _fun120368_ip = 300; continue _fun120368 }
 257:
            zulu = _closure1_slot8;
            mike = _closure1_slot1;
            report = _closure1_slot2;
            entity = 10;
            entity = report[entity];
            mike = mike.bind(tango)(entity);
            entity = {};
            entity['channelId'] = offset;
            entity['onBeforeJumpToMessage'] = verify;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
 300:
            zulu = _closure1_slot8;
            mike = _closure1_slot5;
            entity = {'horizontal': true, 'scrollEnabled': false, 'bounces': false};
            oscar = options.container;
            report = new Array(2);
            report[0] = oscar;
            report[1] = yankee;
            entity['style'] = report;
            oscar = _closure1_slot4;
            report = {};
            romeo = options.container;
            options = new Array(2);
            options[0] = romeo;
            options[1] = yankee;
            report['style'] = options;
            options = _closure1_slot1;
            yankee = _closure1_slot2;
            golf = 10;
            golf = yankee[golf];
            options = options.bind(tango)(golf);
            golf = {};
            golf['channelId'] = offset;
            golf['onBeforeJumpToMessage'] = verify;
            golf = zulu.bind(tango)(options, golf);
            report['children'] = golf;
            report = zulu.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();