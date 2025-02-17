// app/modules/channel_list_v2/native/components/GuildSearchAndInvite.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: handleInviteDisabledPress
        tango = _closure1_slot3;
        zulu = tango.lazy;
        entity = function() {
            zulu = _closure1_slot0;
            entity = _closure1_slot2;
            mike = 9;
            mike = entity[mike];
            tango = undefined;
            zulu = zulu.bind(tango)(mike);
            mike = 8;
            mike = entity[mike];
            entity = entity.paths;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        oscar = zulu.bind(tango)(entity);
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 10;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.openAlert;
        zulu = _closure1_slot8;
        mike = {};
        zulu = zulu.bind(entity)(oscar, mike);
        mike = 'invites-disabled';
        mike = tango.bind(report)(mike, zulu);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: GuildSearchAndInvite
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            verify = entity.guildId;
            offset = entity.canInvite;
            var _closure2_slot0 = offset;
            foxtrot = entity.invitesDisabled;
            var _closure2_slot1 = foxtrot;
            kilo = entity.onInvitePress;
            var _closure2_slot2 = kilo;
            yankee = entity.onEventsPress;
            var _closure2_slot3 = yankee;
            golf = entity.hasUnreadEvents;
            var _closure2_slot4 = golf;
            source = entity.useEventsButton;
            var _closure2_slot5 = source;
            entity = entity.useButtonComponent;
            zulu = _closure1_slot10;
            tango = undefined;
            romeo = zulu.bind(tango)(entity);
            var _closure2_slot6 = romeo;
            options = _closure1_slot0;
            oscar = _closure1_slot2;
            zulu = 11;
            zulu = oscar[zulu];
            report = options.bind(tango)(zulu);
            zulu = report.useNavigation;
            zulu = zulu.bind(report)();
            var _closure2_slot7 = zulu;
            zulu = 12;
            zulu = oscar[zulu];
            report = options.bind(tango)(zulu);
            zulu = report.useGuildSearchContext;
            zulu = zulu.bind(report)(verify);
            var _closure2_slot8 = zulu;
            report = _closure1_slot1;
            zulu = 13;
            zulu = oscar[zulu];
            verify = report.bind(tango)(zulu);
            zulu = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 14;
                mike = mike[entity];
                entity = undefined;
                oscar = zulu.bind(entity)(mike);
                report = oscar.navigateToSearch;
                tango = _closure2_slot7;
                zulu = _closure2_slot8;
                mike = {};
                golf = true;
                mike['prefetch'] = golf;
                mike = report.bind(oscar)(tango, zulu, mike);
                return entity;
            };
            update = verify.bind(tango)(zulu);
            var _closure2_slot9 = update;
            zulu = 15;
            zulu = oscar[zulu];
            verify = options.bind(tango)(zulu);
            options = verify.useIOSPressEffects;
            zulu = 4;
            zulu = options.bind(verify)(zulu);
            echo = zulu.onPressIn;
            result = zulu.onPressOut;
            sizing = zulu.pressableStyles;
            zulu = 16;
            zulu = oscar[zulu];
            zulu = report.bind(tango)(zulu);
            output = zulu.bind(tango)();
            var _closure2_slot10 = output;
            options = _closure1_slot3;
            oscar = options.useMemo;
            report = new Array(2);
            report[0] = update;
            report[1] = output;
            zulu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tango = _closure1_slot8;
                    mike = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 17;
                    entity = zulu[entity];
                    zulu = undefined;
                    entity = mike.bind(zulu)(entity);
                    mike = entity.Button;
                    entity = {'variant': null, 'grow': true, 'shrink': true, 'size': 'sm'};
                    options = _closure2_slot10;
                    golf = 'secondary';
                    if(!options) { _fun00004_ip = 69; continue _fun00003 }
 63:
                    golf = 'tertiary';
 69:
                    entity['variant'] = golf;
                    options = _closure1_slot1;
                    verify = _closure1_slot2;
                    golf = 18;
                    golf = verify[golf];
                    golf = options.bind(zulu)(golf);
                    entity['icon'] = golf;
                    oscar = _closure2_slot9;
                    entity['onPress'] = oscar;
                    options = _closure1_slot0;
                    report = 19;
                    oscar = verify[report];
                    oscar = options.bind(zulu)(oscar);
                    golf = oscar.intl;
                    oscar = golf.string;
                    report = verify[report];
                    report = options.bind(zulu)(report);
                    report = report.t;
                    report = report.5h0QOD;
                    report = oscar.bind(golf)(report);
                    entity['text'] = report;
                    report = 2;
                    entity['maxFontSizeMultiplier'] = report;
                    entity = tango.bind(zulu)(mike, entity);
                    return entity;
                }
            };
            verify = oscar.bind(options)(zulu, report);
            options = _closure1_slot3;
            oscar = options.useMemo;
            report = new Array(4);
            report[0] = offset;
            report[1] = foxtrot;
            report[2] = output;
            report[3] = kilo;
            zulu = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    mike = _closure2_slot0;
                    entity = null;
                    if(!mike) { _fun00006_ip = 199; continue _fun00005 }
 15:
                    report = _closure1_slot8;
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 20;
                    mike = tango[mike];
                    tango = undefined;
                    mike = zulu.bind(tango)(mike);
                    zulu = mike.IconButton;
                    mike = {};
                    verify = _closure2_slot10;
                    options = 'secondary';
                    if(!verify) { _fun00006_ip = 69; continue _fun00005 }
 63:
                    options = 'tertiary';
 69:
                    mike['variant'] = options;
                    options = 'sm';
                    mike['size'] = options;
                    verify = _closure1_slot1;
                    yankee = _closure1_slot2;
                    options = 21;
                    options = yankee[options];
                    options = verify.bind(tango)(options);
                    mike['icon'] = options;
                    options = _closure2_slot2;
                    mike['onPress'] = options;
                    options = _closure1_slot11;
                    mike['onPressDisabled'] = options;
                    offset = _closure1_slot0;
                    golf = 19;
                    options = yankee[golf];
                    options = offset.bind(tango)(options);
                    verify = options.intl;
                    options = verify.string;
                    golf = yankee[golf];
                    golf = offset.bind(tango)(golf);
                    golf = golf.t;
                    golf = golf.VINpSE;
                    golf = options.bind(verify)(golf);
                    mike['accessibilityLabel'] = golf;
                    oscar = _closure2_slot1;
                    mike['disabled'] = oscar;
                    oscar = 2;
                    mike['maxFontSizeMultiplier'] = oscar;
                    entity = report.bind(tango)(zulu, mike);
 199:
                    return entity;
                }
            };
            options = oscar.bind(options)(zulu, report);
            oscar = _closure1_slot3;
            report = oscar.useMemo;
            zulu = new Array(5);
            zulu[0] = source;
            zulu[1] = output;
            zulu[2] = yankee;
            zulu[3] = golf;
            golf = romeo.badge;
            zulu[4] = golf;
            mike = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    mike = _closure2_slot5;
                    entity = null;
                    if(!mike) { _fun00008_ip = 251; continue _fun00007 }
 15:
                    report = _closure1_slot9;
                    tango = _closure1_slot4;
                    zulu = {};
                    verify = _closure1_slot8;
                    golf = _closure1_slot0;
                    oscar = _closure1_slot2;
                    mike = 20;
                    oscar = oscar[mike];
                    mike = undefined;
                    oscar = golf.bind(mike)(oscar);
                    golf = oscar.IconButton;
                    oscar = {};
                    romeo = _closure2_slot10;
                    offset = 'secondary';
                    if(!romeo) { _fun00008_ip = 79; continue _fun00007 }
 73:
                    offset = 'tertiary';
 79:
                    oscar['variant'] = offset;
                    offset = 'sm';
                    oscar['size'] = offset;
                    romeo = _closure1_slot1;
                    kilo = _closure1_slot2;
                    offset = 22;
                    offset = kilo[offset];
                    offset = romeo.bind(mike)(offset);
                    oscar['icon'] = offset;
                    backup = _closure1_slot0;
                    offset = 19;
                    romeo = kilo[offset];
                    romeo = backup.bind(mike)(romeo);
                    foxtrot = romeo.intl;
                    romeo = foxtrot.string;
                    offset = kilo[offset];
                    offset = backup.bind(mike)(offset);
                    offset = offset.t;
                    offset = offset.tlopTE;
                    offset = romeo.bind(foxtrot)(offset);
                    oscar['accessibilityLabel'] = offset;
                    offset = _closure2_slot3;
                    oscar['onPress'] = offset;
                    offset = 2;
                    oscar['maxFontSizeMultiplier'] = offset;
                    golf = verify.bind(mike)(golf, oscar);
                    oscar = new Array(2);
                    oscar[0] = golf;
                    golf = _closure2_slot4;
                    if(!golf) { _fun00008_ip = 237; continue _fun00007 }
 207:
                    offset = _closure1_slot8;
                    verify = _closure1_slot4;
                    options = {};
                    yankee = _closure2_slot6;
                    yankee = yankee.badge;
                    options['style'] = yankee;
                    golf = offset.bind(mike)(verify, options);
 237:
                    oscar[1] = golf;
                    zulu['children'] = oscar;
                    entity = report.bind(mike)(tango, zulu);
 251:
                    return entity;
                }
            };
            golf = report.bind(oscar)(mike, zulu);
            zulu = _closure1_slot9;
            mike = _closure1_slot4;
            report = {};
            oscar = romeo.container;
            report['style'] = oscar;
            if(entity) { _fun00002_ip = 680; continue _fun00001 }
 404:
            yankee = _closure1_slot8;
            oscar = _closure1_slot1;
            source = _closure1_slot2;
            entity = 23;
            entity = source[entity];
            entity = oscar.bind(tango)(entity);
            oscar = entity.View;
            entity = {};
            output = romeo.search;
            romeo = new Array(2);
            romeo[0] = output;
            romeo[1] = sizing;
            entity['style'] = romeo;
            output = _closure1_slot8;
            sizing = _closure1_slot0;
            romeo = 24;
            romeo = source[romeo];
            romeo = sizing.bind(tango)(romeo);
            sizing = romeo.SearchButtonContent;
            romeo = {};
            romeo['onPress'] = update;
            romeo['onPressIn'] = echo;
            romeo['onPressOut'] = result;
            romeo = output.bind(tango)(sizing, romeo);
            entity['children'] = romeo;
            oscar = yankee.bind(tango)(oscar, entity);
            entity = new Array(2);
            entity[0] = oscar;
            oscar = null;
            if(!offset) { _fun00002_ip = 667; continue _fun00001 }
 531:
            romeo = _closure1_slot8;
            output = _closure1_slot0;
            result = _closure1_slot2;
            offset = 20;
            offset = result[offset];
            offset = output.bind(tango)(offset);
            yankee = offset.IconButton;
            offset = {};
            sizing = 'tertiary';
            offset['variant'] = sizing;
            echo = _closure1_slot1;
            sizing = 21;
            sizing = result[sizing];
            sizing = echo.bind(tango)(sizing);
            offset['icon'] = sizing;
            offset['onPress'] = kilo;
            backup = _closure1_slot11;
            offset['onPressDisabled'] = backup;
            backup = 19;
            kilo = result[backup];
            kilo = output.bind(tango)(kilo);
            sizing = kilo.intl;
            kilo = sizing.string;
            backup = result[backup];
            backup = output.bind(tango)(backup);
            backup = backup.t;
            backup = backup.VINpSE;
            backup = kilo.bind(sizing)(backup);
            offset['accessibilityLabel'] = backup;
            offset['disabled'] = foxtrot;
            oscar = romeo.bind(tango)(yankee, offset);
 667:
            entity[1] = oscar;
            report['children'] = entity;
            entity = report;
            _fun00002_ip = 703; continue _fun00001;
 680:
            oscar = new Array(3);
            oscar[0] = verify;
            oscar[1] = options;
            oscar[2] = golf;
            report['children'] = oscar;
            entity = report;
 703:
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
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
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.SEARCH_BAR_MARGIN_BOTTOM;
    var _closure1_slot7 = tango;
    tango = 5;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot8 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot9 = tango;
    tango = 6;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = function(argFoo) {
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = {};
            mike = {};
            golf = _closure1_slot1;
            tango = _closure1_slot2;
            oscar = 7;
            tango = tango[oscar];
            report = undefined;
            tango = golf.bind(report)(tango);
            tango = tango.spacing;
            tango = tango.PX_16;
            mike['paddingHorizontal'] = tango;
            tango = _closure1_slot7;
            mike['marginBottom'] = tango;
            tango = 'row';
            mike['flexDirection'] = tango;
            tango = 10;
            golf = argFoo;
            if(!golf) { _fun00010_ip = 96; continue _fun00009 }
 68:
            options = _closure1_slot1;
            golf = _closure1_slot2;
            golf = golf[oscar];
            golf = options.bind(report)(golf);
            golf = golf.spacing;
            tango = golf.PX_12;
 96:
            mike['gap'] = tango;
            entity['container'] = mike;
            mike = {};
            tango = 1;
            mike['flex'] = tango;
            entity['search'] = mike;
            mike = {'position': 'absolute', 'right': 0, 'top': 0, 'width': 8, 'height': 8};
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            golf = zulu[oscar];
            golf = tango.bind(report)(golf);
            golf = golf.radii;
            golf = golf.round;
            mike['borderRadius'] = golf;
            zulu = zulu[oscar];
            zulu = tango.bind(report)(zulu);
            zulu = zulu.colors;
            zulu = zulu.BG_BRAND;
            mike['backgroundColor'] = zulu;
            entity['badge'] = mike;
            return entity;
        }
    };
    tango = options.bind(verify)(tango);
    var _closure1_slot10 = tango;
    tango = golf.memo;
    mike = function(argFoo) { // Original name: ConnectedGuildSearchAndInviteInner
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            backup = entity.guild;
            var _closure2_slot0 = backup;
            report = entity.useButtonComponent;
            tango = undefined;
            if(!(report === tango)) { _fun00012_ip = 28; continue _fun00011 }
 26:
            report = false;
 28:
            oscar = entity.useEventsButton;
            if(!(oscar === tango)) { _fun00012_ip = 40; continue _fun00011 }
 38:
            oscar = false;
 40:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            zulu = 25;
            zulu = options[zulu];
            romeo = golf.bind(tango)(zulu);
            yankee = romeo.useStateFromStores;
            zulu = _closure1_slot5;
            offset = new Array(1);
            offset[0] = zulu;
            verify = new Array(1);
            verify[0] = backup;
            zulu = function() {
                report = _closure1_slot5;
                zulu = report.getChannels;
                tango = _closure2_slot0;
                mike = tango.id;
                zulu = zulu.bind(report)(mike);
                report = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 26;
                mike = mike[entity];
                entity = undefined;
                mike = report.bind(entity)(mike);
                entity = mike.shouldRenderInvite;
                entity = entity.bind(mike)(zulu, tango);
                return entity;
            };
            foxtrot = yankee.bind(romeo)(offset, zulu, verify);
            zulu = _closure1_slot1;
            verify = 13;
            verify = options[verify];
            verify = zulu.bind(tango)(verify);
            mike = function() {
                tango = _closure1_slot6;
                zulu = tango.getChannelId;
                golf = _closure2_slot0;
                mike = golf.id;
                offset = zulu.bind(tango)(mike);
                tango = _closure1_slot5;
                zulu = tango.getChannels;
                mike = golf.id;
                verify = zulu.bind(tango)(mike);
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 27;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.handleOpenInviteActionsheet;
                options = 'Guild Header';
                romeo = tango;
                yankee = golf;
                mike = romeo[zulu](yankee, offset, verify, options, golf);
                return entity;
            };
            yankee = verify.bind(tango)(mike);
            mike = 28;
            mike = options[mike];
            golf = golf.bind(tango)(mike);
            mike = golf.useShouldShowInvitesDisabledNotif;
            romeo = mike.bind(golf)(backup);
            mike = 29;
            mike = options[mike];
            golf = zulu.bind(tango)(mike);
            mike = backup.id;
            golf = golf.bind(tango)(mike);
            mike = 30;
            mike = options[mike];
            mike = zulu.bind(tango)(mike);
            mike = mike.bind(tango)(backup);
            options = mike.hasUnread;
            offset = mike.handlePress;
            verify = mike.handleLongPress;
            zulu = _closure1_slot8;
            mike = _closure1_slot12;
            entity = {};
            backup = backup.id;
            entity['guildId'] = backup;
            entity['canInvite'] = foxtrot;
            entity['invitesDisabled'] = romeo;
            entity['onInvitePress'] = yankee;
            entity['onEventsPress'] = offset;
            entity['onEventsLongPress'] = verify;
            entity['hasUnreadEvents'] = options;
            if(!oscar) { _fun00012_ip = 267; continue _fun00011 }
 264:
            oscar = golf;
 267:
            entity['useEventsButton'] = oscar;
            entity['useButtonComponent'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 31;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/channel_list_v2/native/components/GuildSearchAndInvite.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();