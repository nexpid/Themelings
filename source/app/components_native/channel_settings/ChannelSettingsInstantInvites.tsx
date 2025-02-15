// app/components_native/channel_settings/ChannelSettingsInstantInvites.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
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
    tango = yankee.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.StyleSheet;
    tango = 3;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ChannelSettingsSections;
    var _closure1_slot6 = tango;
    tango = 5;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot7 = golf;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.Fragment;
    var _closure1_slot8 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot9 = tango;
    golf = options.create;
    tango = {};
    verify = {};
    offset = 6;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_16;
    verify['paddingHorizontal'] = romeo;
    tango['content'] = verify;
    verify = {};
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.spacing;
    offset = offset.PX_16;
    verify['height'] = offset;
    tango['gap'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot10 = tango;
    tango = 18;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'components_native/channel_settings/ChannelSettingsInstantInvites.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: ConnectedChannelSettingsInstantInvites
        _fun119925: for(var _fun119925_ip = 0; ; ) switch(_fun119925_ip) {
 0:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 7;
            mike = tango[mike];
            oscar = undefined;
            mike = zulu.bind(oscar)(mike);
            mike = mike.bind(oscar)();
            report = mike.bottom;
            golf = _closure1_slot4;
            mike = golf.useState;
            options = mike.bind(golf)(oscar);
            zulu = _closure1_slot3;
            mike = 2;
            zulu = zulu.bind(oscar)(options, mike);
            kilo = 0;
            verify = zulu[kilo];
            mike = 1;
            mike = zulu[mike];
            var _closure2_slot0 = mike;
            options = golf.useCallback;
            zulu = function(argFoo) {
                zulu = _closure2_slot0;
                entity = _closure1_slot10;
                entity = entity.gap;
                mike = entity.height;
                entity = argFoo;
                mike = entity + mike;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            mike = new Array(0);
            foxtrot = options.bind(golf)(zulu, mike);
            zulu = _closure1_slot0;
            mike = 8;
            mike = tango[mike];
            options = zulu.bind(oscar)(mike);
            tango = options.useStateFromStoresObject;
            mike = _closure1_slot5;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                mike = _closure1_slot5;
                entity = mike.getInvites;
                entity = entity.bind(mike)();
                return entity;
            };
            mike = tango.bind(options)(zulu, mike);
            zulu = mike.invites;
            var _closure2_slot1 = zulu;
            mike = mike.loading;
            options = golf.useMemo;
            tango = new Array(1);
            tango[0] = zulu;
            zulu = function() {
                entity = global;
                zulu = entity.Object;
                mike = zulu.values;
                entity = _closure2_slot1;
                zulu = mike.bind(zulu)(entity);
                mike = zulu.sort;
                entity = function(argFoo, argBar) {
                    _fun119929: for(var _fun119929_ip = 0; ; ) switch(_fun119929_ip) {
 0:
                        entity = argFoo;
                        mike = entity.inviter;
                        tango = null;
                        report = tango == mike;
                        zulu = undefined;
                        if(report) { _fun119929_ip = 25; continue _fun119929 }
 20:
                        zulu = mike.username;
 25:
                        oscar = tango != zulu;
                        mike = '';
                        report = mike;
                        if(!oscar) { _fun119929_ip = 42; continue _fun119929 }
 39:
                        report = zulu;
 42:
                        zulu = report.toLowerCase;
                        zulu = zulu.bind(report)();
                        report = argBar;
                        report = report.inviter;
                        oscar = tango == report;
                        entity = undefined;
                        if(oscar) { _fun119929_ip = 75; continue _fun119929 }
 70:
                        entity = report.username;
 75:
                        tango = tango != entity;
                        if(!tango) { _fun119929_ip = 85; continue _fun119929 }
 82:
                        mike = entity;
 85:
                        entity = mike.toLowerCase;
                        mike = entity.bind(mike)();
                        entity = zulu.localeCompare;
                        entity = entity.bind(zulu)(mike);
                        return entity;
                    }
                };
                mike = mike.bind(zulu)(entity);
                entity = {};
                entity['sortedInvites'] = mike;
                zulu = mike.length;
                mike = new Array(1);
                mike[0] = zulu;
                entity['sections'] = mike;
                return entity;
            };
            zulu = options.bind(golf)(zulu, tango);
            backup = zulu.sortedInvites;
            var _closure2_slot2 = backup;
            offset = zulu.sections;
            options = golf.useEffect;
            tango = function() {
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 9;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.setSection;
                mike = _closure1_slot6;
                mike = mike.INSTANT_INVITES;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            zulu = new Array(0);
            zulu = options.bind(golf)(tango, zulu);
            tango = golf.useCallback;
            zulu = new Array(1);
            zulu[0] = backup;
            entity = function(argFoo, argBar) {
                tango = _closure1_slot7;
                mike = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 10;
                entity = zulu[entity];
                zulu = undefined;
                mike = mike.bind(zulu)(entity);
                entity = {};
                oscar = _closure2_slot2;
                report = argBar;
                report = oscar[report];
                entity['invite'] = report;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            options = tango.bind(golf)(entity, zulu);
            if(mike) { _fun119925_ip = 447; continue _fun119925 }
 261:
            entity = backup.length;
            if(!(kilo === entity)) { _fun119925_ip = 447; continue _fun119925 }
 273:
            tango = _closure1_slot7;
            yankee = _closure1_slot1;
            result = _closure1_slot2;
            entity = 11;
            entity = result[entity];
            zulu = yankee.bind(oscar)(entity);
            entity = {};
            golf = 12;
            golf = result[golf];
            golf = yankee.bind(oscar)(golf);
            entity['lightSource'] = golf;
            golf = 13;
            golf = result[golf];
            golf = yankee.bind(oscar)(golf);
            entity['darkSource'] = golf;
            output = _closure1_slot0;
            golf = 14;
            yankee = result[golf];
            yankee = output.bind(oscar)(yankee);
            echo = yankee.intl;
            sizing = echo.string;
            yankee = result[golf];
            yankee = output.bind(oscar)(yankee);
            yankee = yankee.t;
            yankee = yankee.+nLJkZ;
            yankee = sizing.bind(echo)(yankee);
            entity['title'] = yankee;
            yankee = result[golf];
            yankee = output.bind(oscar)(yankee);
            sizing = yankee.intl;
            yankee = sizing.string;
            golf = result[golf];
            golf = output.bind(oscar)(golf);
            golf = golf.t;
            golf = golf.F53CAQ;
            golf = yankee.bind(sizing)(golf);
            entity['body'] = golf;
            entity = tango.bind(oscar)(zulu, entity);
            _fun119925_ip = 698; continue _fun119925;
 447:
            if(mike) { _fun119925_ip = 551; continue _fun119925 }
 450:
            mike = null;
            if(!(mike != verify)) { _fun119925_ip = 551; continue _fun119925 }
 456:
            tango = _closure1_slot7;
            zulu = _closure1_slot1;
            golf = _closure1_slot2;
            mike = 17;
            mike = golf[mike];
            zulu = zulu.bind(oscar)(mike);
            mike = {};
            golf = _closure1_slot10;
            yankee = golf.content;
            mike['style'] = yankee;
            mike['sections'] = offset;
            offset = 'windowSize';
            mike['estimatedListSize'] = offset;
            mike['itemSize'] = verify;
            mike['renderItem'] = options;
            golf = golf.gap;
            golf = golf.height;
            mike['insetStart'] = golf;
            mike['insetEnd'] = report;
            mike = tango.bind(oscar)(zulu, mike);
            _fun119925_ip = 695; continue _fun119925;
 551:
            report = _closure1_slot9;
            tango = _closure1_slot8;
            zulu = {};
            verify = _closure1_slot7;
            options = _closure1_slot0;
            offset = _closure1_slot2;
            golf = 15;
            golf = offset[golf];
            golf = options.bind(oscar)(golf);
            options = golf.SceneLoadingIndicator;
            golf = {};
            options = verify.bind(oscar)(options, golf);
            golf = new Array(2);
            golf[0] = options;
            options = backup.length;
            verify = options > kilo;
            options = null;
            if(!verify) { _fun119925_ip = 681; continue _fun119925 }
 621:
            yankee = _closure1_slot7;
            offset = _closure1_slot1;
            sizing = _closure1_slot2;
            verify = 16;
            verify = sizing[verify];
            offset = offset.bind(oscar)(verify);
            verify = {};
            backup = backup[kilo];
            verify['invite'] = backup;
            verify['onMeasured'] = foxtrot;
            romeo = _closure1_slot10;
            romeo = romeo.content;
            verify['containerStyle'] = romeo;
            options = yankee.bind(oscar)(offset, verify);
 681:
            golf[1] = options;
            zulu['children'] = golf;
            mike = report.bind(oscar)(tango, zulu);
 695:
            entity = mike;
 698:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();