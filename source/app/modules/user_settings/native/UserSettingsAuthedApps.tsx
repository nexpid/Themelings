// app/modules/user_settings/native/UserSettingsAuthedApps.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun95471: for(var _fun95471_ip = 0; ; ) switch(_fun95471_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun95471_ip = 46; continue _fun95471 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun95471_ip = 55; continue _fun95471 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun95471_ip = 345; continue _fun95471 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun95471_ip = 323; continue _fun95471 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun95471_ip = 283; continue _fun95471 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun95471_ip = 270; continue _fun95471 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun95471_ip = 163; continue _fun95471 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun95471_ip = 179; continue _fun95471 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun95471_ip = 249; continue _fun95471 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun95471_ip = 249; continue _fun95471 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun95471_ip = 234; continue _fun95471 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun95471_ip = 247; continue _fun95471 }
 234:
            verify = _closure1_slot19;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun95471_ip = 265; continue _fun95471;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun95471_ip = 283; continue _fun95471;
 270:
            golf = _closure1_slot19;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun95471_ip = 323; continue _fun95471 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun95471_ip = 330; continue _fun95471 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun95472: for(var _fun95472_ip = 0; ; ) switch(_fun95472_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun95472_ip = 56; continue _fun95472 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun95472_ip = 67; continue _fun95472;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun95473: for(var _fun95473_ip = 0; ; ) switch(_fun95473_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun95473_ip = 23; continue _fun95473 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun95473_ip = 33; continue _fun95473 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun95473_ip = 70; continue _fun95473 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun95473_ip = 55; continue _fun95473 }
 70:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo) { // Original name: AuthorizedAppTwoWay
        mike = argFoo;
        backup = mike.application;
        mike = _closure1_slot15;
        tango = undefined;
        verify = mike.bind(tango)();
        offset = _closure1_slot0;
        kilo = _closure1_slot2;
        mike = 12;
        mike = kilo[mike];
        zulu = offset.bind(tango)(mike);
        mike = zulu.useNavigation;
        golf = mike.bind(zulu)();
        var _closure2_slot0 = golf;
        report = _closure1_slot3;
        zulu = report.useCallback;
        mike = new Array(1);
        mike[0] = golf;
        entity = function() {
            tango = _closure2_slot0;
            zulu = tango.dispatch;
            report = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 13;
            mike = mike[entity];
            entity = undefined;
            mike = report.bind(entity)(mike);
            oscar = mike.CommonActions;
            report = oscar.navigate;
            mike = {};
            golf = _closure1_slot11;
            golf = golf.CONNECTIONS;
            mike['name'] = golf;
            mike = report.bind(oscar)(mike);
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        foxtrot = zulu.bind(report)(entity, mike);
        zulu = _closure1_slot13;
        mike = _closure1_slot4;
        entity = {};
        report = verify.twoWayWarning;
        entity['style'] = report;
        options = _closure1_slot12;
        golf = _closure1_slot5;
        report = {};
        romeo = _closure1_slot1;
        yankee = 14;
        yankee = kilo[yankee];
        yankee = romeo.bind(tango)(yankee);
        report['source'] = yankee;
        verify = verify.twoWayWarningIcon;
        report['style'] = verify;
        golf = options.bind(tango)(golf, report);
        report = new Array(2);
        report[0] = golf;
        options = _closure1_slot12;
        oscar = 15;
        oscar = kilo[oscar];
        oscar = offset.bind(tango)(oscar);
        golf = oscar.TextWithIOSLinkWorkaround;
        oscar = {'color': 'text-normal', 'variant': 'text-xs/medium'};
        verify = 16;
        yankee = kilo[verify];
        yankee = offset.bind(tango)(yankee);
        romeo = yankee.intl;
        yankee = romeo.format;
        verify = kilo[verify];
        verify = offset.bind(tango)(verify);
        verify = verify.t;
        offset = verify.jUhnwc;
        verify = {};
        backup = backup.name;
        verify['applicationName'] = backup;
        verify['onConnectionPress'] = foxtrot;
        verify = yankee.bind(romeo)(offset, verify);
        oscar['children'] = verify;
        oscar = options.bind(tango)(golf, oscar);
        report[1] = oscar;
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot20 = entity;
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
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.View;
    var _closure1_slot4 = golf;
    golf = tango.Image;
    var _closure1_slot5 = golf;
    golf = tango.ActivityIndicator;
    var _closure1_slot6 = golf;
    tango = tango.FlatList;
    var _closure1_slot7 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.ComponentActions;
    var _closure1_slot10 = golf;
    tango = tango.UserSettingsSections;
    var _closure1_slot11 = tango;
    tango = 5;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot12 = golf;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsxs;
    var _closure1_slot13 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Fragment;
    var _closure1_slot14 = tango;
    tango = 6;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    romeo = 16;
    verify['padding'] = romeo;
    tango['spinner'] = verify;
    verify = {};
    offset = 24;
    verify['marginTop'] = offset;
    tango['emptyText'] = verify;
    verify = {};
    verify['padding'] = romeo;
    tango['container'] = verify;
    verify = {};
    foxtrot = 12;
    verify['marginTop'] = foxtrot;
    tango['headerDescription'] = verify;
    verify = {'padding': 16, 'marginTop': 16, 'borderRadius': null, 'borderWidth': 1};
    offset = 7;
    backup = oscar[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.sm;
    verify['borderRadius'] = backup;
    backup = oscar[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_SECONDARY;
    verify['backgroundColor'] = backup;
    backup = oscar[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_TERTIARY;
    verify['borderColor'] = backup;
    tango['cardContainer'] = verify;
    verify = {};
    backup = 'row';
    verify['flexDirection'] = backup;
    tango['cardTitleContainer'] = verify;
    verify = {};
    verify['marginEnd'] = foxtrot;
    tango['cardImage'] = verify;
    verify = {};
    foxtrot = 'left';
    verify['textAlign'] = foxtrot;
    tango['cardTitle'] = verify;
    verify = {};
    foxtrot = 8;
    verify['marginTop'] = foxtrot;
    tango['cardDescriptionTitle'] = verify;
    verify = {};
    verify['marginTop'] = foxtrot;
    tango['cardDescriptionSubtitle'] = verify;
    verify = {};
    verify['marginTop'] = foxtrot;
    tango['permissionTitle'] = verify;
    verify = {'flex': 1, 'marginTop': 8, 'flexDirection': 'row', 'alignContent': 'center'};
    tango['permissionContainer'] = verify;
    verify = {};
    backup = oscar[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.STATUS_DANGER;
    verify['tintColor'] = backup;
    tango['permissionRemove'] = verify;
    verify = {};
    verify['marginStart'] = foxtrot;
    tango['permissionText'] = verify;
    verify = {};
    verify['marginTop'] = romeo;
    tango['alertBodyText'] = verify;
    verify = {'marginTop': 16, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    tango['twoWayWarning'] = verify;
    verify = {'width': 16, 'height': 16, 'marginRight': 8};
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.TEXT_MUTED;
    verify['color'] = romeo;
    tango['twoWayWarningIcon'] = verify;
    verify = {'display': 'flex', 'flexDirection': 'row', 'marginTop': 8};
    tango['tosPrivacy'] = verify;
    verify = {'display': 'flex', 'marginRight': 12, 'flexDirection': 'row'};
    tango['tos'] = verify;
    verify = {'display': 'flex', 'flexDirection': 'row'};
    tango['privacy'] = verify;
    verify = {'display': 'flex', 'width': 2, 'height': 18, 'marginRight': 12};
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.BACKGROUND_MODIFIER_ACTIVE;
    verify['backgroundColor'] = offset;
    tango['divider'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot15 = tango;
    tango = function(argFoo) { // Original name: DisclosureIcon
        mike = argFoo;
        report = mike.disclosure;
        var _closure2_slot0 = report;
        tango = _closure1_slot3;
        zulu = tango.useMemo;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            _fun95477: for(var _fun95477_ip = 0; ; ) switch(_fun95477_ip) {
 0:
                zulu = _closure2_slot0;
                report = _closure1_slot0;
                mike = _closure1_slot2;
                oscar = 8;
                mike = mike[oscar];
                tango = undefined;
                mike = report.bind(tango)(mike);
                mike = mike.ApplicationDisclosureType;
                mike = mike.IP_LOCATION;
                if(!(mike !== zulu)) { _fun95477_ip = 180; continue _fun95477 }
 51:
                report = _closure1_slot0;
                mike = _closure1_slot2;
                mike = mike[oscar];
                mike = report.bind(tango)(mike);
                mike = mike.ApplicationDisclosureType;
                mike = mike.DISPLAYS_ADVERTISEMENTS;
                if(!(mike !== zulu)) { _fun95477_ip = 132; continue _fun95477 }
 84:
                report = _closure1_slot12;
                zulu = _closure1_slot0;
                oscar = _closure1_slot2;
                mike = 11;
                mike = oscar[mike];
                mike = zulu.bind(tango)(mike);
                zulu = mike.CircleInformationIcon;
                mike = {};
                oscar = 'xs';
                mike['size'] = oscar;
                mike = report.bind(tango)(zulu, mike);
                return mike;
 132:
                report = _closure1_slot12;
                zulu = _closure1_slot0;
                oscar = _closure1_slot2;
                mike = 10;
                mike = oscar[mike];
                mike = zulu.bind(tango)(mike);
                zulu = mike.EmbedIcon;
                mike = {};
                oscar = 'xs';
                mike['size'] = oscar;
                mike = report.bind(tango)(zulu, mike);
                return mike;
 180:
                zulu = _closure1_slot12;
                mike = _closure1_slot0;
                report = _closure1_slot2;
                entity = 9;
                entity = report[entity];
                entity = mike.bind(tango)(entity);
                mike = entity.GlobeEarthIcon;
                entity = {};
                report = 'xs';
                entity['size'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot16 = tango;
    tango = function(argFoo) { // Original name: UserSettingsAuthedApp
        _fun95478: for(var _fun95478_ip = 0; ; ) switch(_fun95478_ip) {
 0:
            entity = argFoo;
            sizing = entity.imageUrl;
            offset = entity.application;
            var _closure2_slot0 = offset;
            mike = entity.onDelete;
            var _closure2_slot1 = mike;
            mike = entity.scopes;
            var _closure2_slot2 = mike;
            entity = entity.disclosures;
            var _closure2_slot3 = entity;
            entity = _closure1_slot15;
            tango = undefined;
            sequence = entity.bind(tango)();
            var _closure2_slot4 = sequence;
            mike = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 20;
            entity = zulu[entity];
            zulu = mike.bind(tango)(entity);
            mike = zulu.useShouldWarnAuthorizedAppTwoWay;
            entity = offset.id;
            oscar = mike.bind(zulu)(entity);
            zulu = _closure1_slot13;
            mike = _closure1_slot4;
            entity = {};
            report = sequence.cardContainer;
            entity['style'] = report;
            yankee = _closure1_slot13;
            verify = _closure1_slot4;
            report = {};
            romeo = sequence.tosPrivacy;
            report['style'] = romeo;
            foxtrot = tango !== sizing;
            if(!foxtrot) { _fun95478_ip = 196; continue _fun95478 }
 150:
            kilo = _closure1_slot12;
            backup = _closure1_slot1;
            output = _closure1_slot2;
            romeo = 21;
            romeo = output[romeo];
            backup = backup.bind(tango)(romeo);
            romeo = {};
            output = sequence.cardImage;
            romeo['style'] = output;
            romeo['source'] = sizing;
            foxtrot = kilo.bind(tango)(backup, romeo);
 196:
            romeo = new Array(3);
            romeo[0] = foxtrot;
            kilo = _closure1_slot12;
            backup = _closure1_slot4;
            foxtrot = {};
            sizing = {'justifyContent': 'center', 'flex': 1};
            foxtrot['style'] = sizing;
            result = _closure1_slot12;
            source = _closure1_slot0;
            context = _closure1_slot2;
            vacuum = 22;
            sizing = context[vacuum];
            sizing = source.bind(tango)(sizing);
            output = sizing.Text;
            sizing = {'style': null, 'variant': 'heading-md/extrabold', 'color': 'header-secondary'};
            echo = sequence.cardTitle;
            sizing['style'] = echo;
            echo = offset.name;
            sizing['children'] = echo;
            sizing = result.bind(tango)(output, sizing);
            foxtrot['children'] = sizing;
            foxtrot = kilo.bind(tango)(backup, foxtrot);
            romeo[1] = foxtrot;
            kilo = _closure1_slot12;
            backup = _closure1_slot4;
            foxtrot = {};
            sizing = false;
            foxtrot['collapsable'] = sizing;
            result = _closure1_slot12;
            update = 23;
            sizing = context[update];
            sizing = source.bind(tango)(sizing);
            output = sizing.PressableOpacity;
            sizing = {};
            echo = function() { // Original name: onDeleteModal
                tango = _closure1_slot0;
                golf = _closure1_slot2;
                entity = 17;
                zulu = golf[entity];
                entity = undefined;
                report = tango.bind(entity)(zulu);
                tango = report.openAlert;
                oscar = _closure1_slot12;
                zulu = _closure1_slot1;
                mike = 18;
                mike = golf[mike];
                zulu = zulu.bind(entity)(mike);
                mike = {};
                options = _closure2_slot0;
                mike['application'] = options;
                golf = _closure2_slot1;
                mike['onDelete'] = golf;
                zulu = oscar.bind(entity)(zulu, mike);
                mike = 'confirm-delete-authed-app';
                mike = tango.bind(report)(mike, zulu);
                return entity;
            };
            sizing['onPress'] = echo;
            control = _closure1_slot12;
            echo = 24;
            echo = context[echo];
            echo = source.bind(tango)(echo);
            source = echo.XLargeIcon;
            echo = {};
            record = _closure1_slot1;
            config = 7;
            config = context[config];
            config = record.bind(tango)(config);
            config = config.colors;
            config = config.STATUS_DANGER;
            echo['color'] = config;
            echo = control.bind(tango)(source, echo);
            sizing['children'] = echo;
            sizing = result.bind(tango)(output, sizing);
            foxtrot['children'] = sizing;
            foxtrot = kilo.bind(tango)(backup, foxtrot);
            romeo[2] = foxtrot;
            report['children'] = romeo;
            verify = yankee.bind(tango)(verify, report);
            report = new Array(5);
            report[0] = verify;
            result = offset.description;
            source = null;
            verify = null;
            if(!(tango !== result)) { _fun95478_ip = 691; continue _fun95478 }
 487:
            yankee = '';
            verify = null;
            if(!(yankee !== result)) { _fun95478_ip = 691; continue _fun95478 }
 500:
            foxtrot = _closure1_slot13;
            romeo = _closure1_slot14;
            yankee = {};
            echo = _closure1_slot12;
            sizing = _closure1_slot0;
            kilo = _closure1_slot2;
            backup = kilo[vacuum];
            backup = sizing.bind(tango)(backup);
            output = backup.Text;
            backup = {'style': null, 'variant': 'heading-md/semibold', 'color': 'header-secondary'};
            control = sequence.cardDescriptionTitle;
            backup['style'] = control;
            control = 16;
            config = kilo[control];
            config = sizing.bind(tango)(config);
            record = config.intl;
            config = record.string;
            control = kilo[control];
            control = sizing.bind(tango)(control);
            control = control.t;
            control = control.GfRGra;
            control = config.bind(record)(control);
            backup['children'] = control;
            output = echo.bind(tango)(output, backup);
            backup = new Array(2);
            backup[0] = output;
            output = _closure1_slot12;
            kilo = kilo[vacuum];
            kilo = sizing.bind(tango)(kilo);
            sizing = kilo.Text;
            kilo = {};
            echo = sequence.cardDescriptionSubtitle;
            kilo['style'] = echo;
            echo = 'text-xs/normal';
            kilo['variant'] = echo;
            kilo['children'] = result;
            kilo = output.bind(tango)(sizing, kilo);
            backup[1] = kilo;
            yankee['children'] = backup;
            verify = foxtrot.bind(tango)(romeo, yankee);
 691:
            report[1] = verify;
            verify = offset.terms_of_service_url;
            if(!(source == verify)) { _fun95478_ip = 723; continue _fun95478 }
 705:
            verify = offset.privacy_policy_url;
            yankee = source != verify;
            verify = null;
            if(!yankee) { _fun95478_ip = 1310; continue _fun95478 }
 723:
            foxtrot = _closure1_slot13;
            romeo = _closure1_slot4;
            yankee = {};
            backup = sequence.tosPrivacy;
            yankee['style'] = backup;
            backup = offset.terms_of_service_url;
            backup = source != backup;
            kilo = null;
            if(!backup) { _fun95478_ip = 984; continue _fun95478 }
 761:
            output = _closure1_slot12;
            sizing = _closure1_slot4;
            backup = {};
            control = _closure1_slot13;
            context = _closure1_slot0;
            target = _closure1_slot2;
            result = target[update];
            result = context.bind(tango)(result);
            echo = result.PressableOpacity;
            result = {};
            config = function() { // Original name: handleClickToS
                _fun95480: for(var _fun95480_ip = 0; ; ) switch(_fun95480_ip) {
 0:
                    entity = _closure2_slot0;
                    mike = entity.terms_of_service_url;
                    entity = null;
                    if(!(entity != mike)) { _fun95480_ip = 79; continue _fun95480 }
 19:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 19;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.handleClick;
                    entity = {};
                    tango = _closure2_slot0;
                    tango = tango.terms_of_service_url;
                    entity['href'] = tango;
                    tango = true;
                    entity['shouldConfirm'] = tango;
                    entity = mike.bind(zulu)(entity);
 79:
                    entity = undefined;
                    return entity;
                }
            };
            result['onPress'] = config;
            config = sequence.tos;
            result['style'] = config;
            papa = _closure1_slot12;
            config = target[vacuum];
            config = context.bind(tango)(config);
            record = config.Text;
            config = {'variant': 'text-xs/normal', 'color': 'text-link'};
            status = 16;
            sierra = target[status];
            sierra = context.bind(tango)(sierra);
            lima = sierra.intl;
            sierra = lima.string;
            status = target[status];
            status = context.bind(tango)(status);
            status = status.t;
            status = status.lx+GeX;
            status = sierra.bind(lima)(status);
            config['children'] = status;
            record = papa.bind(tango)(record, config);
            config = new Array(2);
            config[0] = record;
            papa = _closure1_slot12;
            record = 25;
            record = target[record];
            record = context.bind(tango)(record);
            context = record.LinkExternalSmallIcon;
            record = {'size': 'xs', 'color': 'text-link'};
            record = papa.bind(tango)(context, record);
            config[1] = record;
            result['children'] = config;
            result = control.bind(tango)(echo, result);
            backup['children'] = result;
            kilo = output.bind(tango)(sizing, backup);
 984:
            backup = new Array(2);
            backup[0] = kilo;
            kilo = offset.privacy_policy_url;
            sizing = source != kilo;
            kilo = null;
            if(!sizing) { _fun95478_ip = 1296; continue _fun95478 }
 1010:
            result = _closure1_slot13;
            output = _closure1_slot4;
            sizing = {};
            echo = sequence.privacy;
            sizing['style'] = echo;
            echo = offset.terms_of_service_url;
            echo = source != echo;
            source = null;
            if(!echo) { _fun95478_ip = 1071; continue _fun95478 }
 1045:
            config = _closure1_slot12;
            control = _closure1_slot4;
            echo = {};
            record = sequence.divider;
            echo['style'] = record;
            source = config.bind(tango)(control, echo);
 1071:
            echo = new Array(2);
            echo[0] = source;
            control = _closure1_slot13;
            config = _closure1_slot0;
            context = _closure1_slot2;
            update = context[update];
            update = config.bind(tango)(update);
            source = update.PressableOpacity;
            update = {};
            record = function() { // Original name: handleClickPrivacyPolicy
                _fun95481: for(var _fun95481_ip = 0; ; ) switch(_fun95481_ip) {
 0:
                    entity = _closure2_slot0;
                    mike = entity.privacy_policy_url;
                    entity = null;
                    if(!(entity != mike)) { _fun95481_ip = 79; continue _fun95481 }
 19:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 19;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.handleClick;
                    entity = {};
                    tango = _closure2_slot0;
                    tango = tango.privacy_policy_url;
                    entity['href'] = tango;
                    tango = true;
                    entity['shouldConfirm'] = tango;
                    entity = mike.bind(zulu)(entity);
 79:
                    entity = undefined;
                    return entity;
                }
            };
            update['onPress'] = record;
            sequence = sequence.privacy;
            update['style'] = sequence;
            record = _closure1_slot12;
            vacuum = context[vacuum];
            vacuum = config.bind(tango)(vacuum);
            sequence = vacuum.Text;
            vacuum = {'variant': 'text-xs/normal', 'color': 'text-link'};
            papa = 16;
            target = context[papa];
            target = config.bind(tango)(target);
            status = target.intl;
            target = status.string;
            papa = context[papa];
            papa = config.bind(tango)(papa);
            papa = papa.t;
            papa = papa.okSwq6;
            papa = target.bind(status)(papa);
            vacuum['children'] = papa;
            sequence = record.bind(tango)(sequence, vacuum);
            vacuum = new Array(2);
            vacuum[0] = sequence;
            record = _closure1_slot12;
            sequence = 25;
            sequence = context[sequence];
            sequence = config.bind(tango)(sequence);
            config = sequence.LinkExternalSmallIcon;
            sequence = {'size': 'xs', 'color': 'text-link'};
            sequence = record.bind(tango)(config, sequence);
            vacuum[1] = sequence;
            update['children'] = vacuum;
            update = control.bind(tango)(source, update);
            echo[1] = update;
            sizing['children'] = echo;
            kilo = result.bind(tango)(output, sizing);
 1296:
            backup[1] = kilo;
            yankee['children'] = backup;
            verify = foxtrot.bind(tango)(romeo, yankee);
 1310:
            report[2] = verify;
            options = function() {
                _fun95482: for(var _fun95482_ip = 0; ; ) switch(_fun95482_ip) {
 0:
                    offset = new Array(0);
                    var _closure3_slot0 = offset;
                    mike = _closure1_slot18;
                    entity = _closure2_slot2;
                    tango = undefined;
                    yankee = mike.bind(tango)(entity);
                    zulu = yankee.bind(tango)();
                    entity = zulu.done;
                    kilo = 16;
                    verify = 26;
                    mike = 0;
                    oscar = 27;
                    if(entity) { _fun95482_ip = 231; continue _fun95482 }
 57:
                    romeo = zulu.value;
                    sizing = offset.push;
                    foxtrot = _closure1_slot0;
                    entity = _closure1_slot2;
                    backup = entity[verify];
                    result = foxtrot.bind(tango)(backup);
                    output = result.getScopeNames;
                    backup = _closure2_slot2;
                    update = output.bind(result)(romeo, backup);
                    backup = new Array(0);
                    source = backup;
                    echo = 0;
                    output = arraySpread(source, update, echo);
                    source = sizing;
                    update = backup;
                    echo = offset;
                    backup = apply(source, update, echo);
                    entity = entity[oscar];
                    entity = foxtrot.bind(tango)(entity);
                    entity = entity.OAuth2Scopes;
                    entity = entity.APPLICATIONS_COMMANDS;
                    if(!(romeo === entity)) { _fun95482_ip = 213; continue _fun95482 }
 151:
                    romeo = offset.push;
                    sizing = _closure1_slot0;
                    entity = _closure1_slot2;
                    foxtrot = entity[kilo];
                    foxtrot = sizing.bind(tango)(foxtrot);
                    backup = foxtrot.intl;
                    foxtrot = backup.string;
                    entity = entity[kilo];
                    entity = sizing.bind(tango)(entity);
                    entity = entity.t;
                    entity = entity.Ls2XRk;
                    entity = foxtrot.bind(backup)(entity);
                    entity = romeo.bind(offset)(entity);
 213:
                    romeo = yankee.bind(tango)();
                    entity = romeo.done;
                    zulu = romeo;
                    if(!entity) { _fun95482_ip = 57; continue _fun95482 }
 231:
                    entity = offset.length;
                    if(!(!(entity > mike))) { _fun95482_ip = 265; continue _fun95482 }
 240:
                    zulu = _closure2_slot3;
                    entity = null;
                    if(!(entity != zulu)) { _fun95482_ip = 263; continue _fun95482 }
 250:
                    entity = _closure2_slot3;
                    entity = entity.length;
                    if(!(!(entity > mike))) { _fun95482_ip = 265; continue _fun95482 }
 263:
                    return tango;
 265:
                    zulu = _closure1_slot13;
                    mike = _closure1_slot14;
                    entity = {};
                    verify = _closure1_slot12;
                    backup = _closure1_slot0;
                    yankee = _closure1_slot2;
                    report = 22;
                    report = yankee[report];
                    report = backup.bind(tango)(report);
                    oscar = report.Text;
                    report = {'style': null, 'variant': 'heading-md/semibold', 'color': 'header-secondary'};
                    romeo = _closure2_slot4;
                    romeo = romeo.permissionTitle;
                    report['style'] = romeo;
                    romeo = yankee[kilo];
                    romeo = backup.bind(tango)(romeo);
                    foxtrot = romeo.intl;
                    romeo = foxtrot.string;
                    yankee = yankee[kilo];
                    yankee = backup.bind(tango)(yankee);
                    yankee = yankee.t;
                    yankee = yankee.xrmhRU;
                    yankee = romeo.bind(foxtrot)(yankee);
                    report['children'] = yankee;
                    oscar = verify.bind(tango)(oscar, report);
                    report = new Array(3);
                    report[0] = oscar;
                    verify = offset.map;
                    oscar = function(argFoo, argBar) {
                        report = _closure1_slot13;
                        tango = _closure1_slot4;
                        zulu = {};
                        verify = _closure2_slot4;
                        entity = verify.permissionContainer;
                        zulu['style'] = entity;
                        yankee = _closure1_slot12;
                        golf = _closure1_slot0;
                        offset = _closure1_slot2;
                        entity = 28;
                        entity = offset[entity];
                        mike = undefined;
                        entity = golf.bind(mike)(entity);
                        options = entity.CircleCheckIcon;
                        entity = {};
                        romeo = 'xs';
                        entity['size'] = romeo;
                        foxtrot = _closure1_slot1;
                        romeo = 7;
                        romeo = offset[romeo];
                        romeo = foxtrot.bind(mike)(romeo);
                        romeo = romeo.colors;
                        romeo = romeo.STATUS_POSITIVE;
                        entity['color'] = romeo;
                        options = yankee.bind(mike)(options, entity);
                        entity = new Array(2);
                        entity[0] = options;
                        options = _closure1_slot12;
                        oscar = 22;
                        oscar = offset[oscar];
                        oscar = golf.bind(mike)(oscar);
                        golf = oscar.Text;
                        oscar = {};
                        verify = verify.permissionText;
                        oscar['style'] = verify;
                        verify = 'text-xs/normal';
                        oscar['variant'] = verify;
                        verify = argFoo;
                        oscar['children'] = verify;
                        oscar = options.bind(mike)(golf, oscar);
                        entity[1] = oscar;
                        zulu['children'] = entity;
                        entity = argBar;
                        entity = report.bind(mike)(tango, zulu, entity);
                        return entity;
                    };
                    oscar = verify.bind(offset)(oscar);
                    report[1] = oscar;
                    verify = _closure2_slot3;
                    oscar = null;
                    verify = oscar == verify;
                    oscar = undefined;
                    if(verify) { _fun95482_ip = 453; continue _fun95482 }
 432:
                    verify = _closure2_slot3;
                    options = verify.map;
                    golf = function(argFoo, argBar) {
                        _fun95484: for(var _fun95484_ip = 0; ; ) switch(_fun95484_ip) {
 0:
                            romeo = argFoo;
                            mike = _closure1_slot0;
                            zulu = _closure1_slot2;
                            entity = 29;
                            entity = zulu[entity];
                            oscar = undefined;
                            mike = mike.bind(oscar)(entity);
                            entity = mike.getTextForDisclosure;
                            offset = entity.bind(mike)(romeo);
                            entity = null;
                            mike = entity != offset;
                            if(!mike) { _fun95484_ip = 202; continue _fun95484 }
 51:
                            report = _closure1_slot13;
                            tango = _closure1_slot4;
                            zulu = {};
                            yankee = _closure2_slot4;
                            mike = yankee.permissionContainer;
                            zulu['style'] = mike;
                            verify = _closure1_slot12;
                            options = _closure1_slot16;
                            mike = {};
                            mike['disclosure'] = romeo;
                            options = verify.bind(oscar)(options, mike);
                            mike = new Array(2);
                            mike[0] = options;
                            verify = _closure1_slot12;
                            options = _closure1_slot0;
                            romeo = _closure1_slot2;
                            golf = 22;
                            golf = romeo[golf];
                            golf = options.bind(oscar)(golf);
                            options = golf.Text;
                            golf = {};
                            yankee = yankee.permissionText;
                            golf['style'] = yankee;
                            yankee = 'text-xs/normal';
                            golf['variant'] = yankee;
                            golf['children'] = offset;
                            golf = verify.bind(oscar)(options, golf);
                            mike[1] = golf;
                            zulu['children'] = mike;
                            mike = _closure3_slot0;
                            golf = mike.length;
                            mike = argBar;
                            mike = mike + golf;
                            entity = report.bind(oscar)(tango, zulu, mike);
 202:
                            return entity;
                        }
                    };
                    oscar = options.bind(verify)(golf);
 453:
                    report[2] = oscar;
                    entity['children'] = report;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                }
            };
            options = options.bind(tango)();
            report[3] = options;
            if(!oscar) { _fun95478_ip = 1352; continue _fun95478 }
 1332:
            verify = _closure1_slot12;
            options = _closure1_slot20;
            golf = {};
            golf['application'] = offset;
            oscar = verify.bind(tango)(options, golf);
 1352:
            report[4] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot17 = tango;
    tango = 35;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_settings/native/UserSettingsAuthedApps.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: _default
        _fun95485: for(var _fun95485_ip = 0; ; ) switch(_fun95485_ip) {
 0:
            entity = _closure1_slot15;
            report = undefined;
            oscar = entity.bind(report)();
            var _closure2_slot0 = oscar;
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 30;
            options = tango[entity];
            yankee = zulu.bind(report)(options);
            offset = yankee.useStateFromStores;
            options = _closure1_slot9;
            verify = new Array(1);
            verify[0] = options;
            options = function() {
                mike = _closure1_slot9;
                entity = mike.getApps;
                entity = entity.bind(mike)();
                return entity;
            };
            yankee = offset.bind(yankee)(verify, options);
            entity = tango[entity];
            offset = zulu.bind(report)(entity);
            verify = offset.useStateFromStores;
            entity = _closure1_slot8;
            options = new Array(1);
            options[0] = entity;
            entity = function() {
                mike = _closure1_slot8;
                entity = mike.getSelfEmbeddedActivities;
                entity = entity.bind(mike)();
                return entity;
            };
            entity = verify.bind(offset)(options, entity);
            var _closure2_slot1 = entity;
            entity = 13;
            entity = tango[entity];
            tango = zulu.bind(report)(entity);
            zulu = tango.useFocusEffect;
            offset = _closure1_slot3;
            verify = offset.useCallback;
            options = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 31;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                entity = mike.fetch;
                entity = entity.bind(mike)();
                return entity;
            };
            entity = new Array(0);
            entity = verify.bind(offset)(options, entity);
            entity = zulu.bind(tango)(entity);
            options = function() { // Original name: renderHeader
                tango = _closure1_slot13;
                zulu = _closure1_slot4;
                mike = {};
                offset = _closure1_slot12;
                romeo = _closure1_slot0;
                foxtrot = _closure1_slot2;
                oscar = 22;
                report = foxtrot[oscar];
                entity = undefined;
                report = romeo.bind(entity)(report);
                options = report.Text;
                report = {'color': 'header-primary', 'variant': 'heading-md/extrabold'};
                verify = 16;
                yankee = foxtrot[verify];
                yankee = romeo.bind(entity)(yankee);
                kilo = yankee.intl;
                backup = kilo.string;
                yankee = foxtrot[verify];
                yankee = romeo.bind(entity)(yankee);
                yankee = yankee.t;
                yankee = yankee.HU3RFx;
                yankee = backup.bind(kilo)(yankee);
                report['children'] = yankee;
                options = offset.bind(entity)(options, report);
                report = new Array(2);
                report[0] = options;
                options = _closure1_slot12;
                oscar = foxtrot[oscar];
                oscar = romeo.bind(entity)(oscar);
                golf = oscar.Text;
                oscar = {};
                offset = _closure2_slot0;
                offset = offset.headerDescription;
                oscar['style'] = offset;
                offset = 'heading-sm/normal';
                oscar['variant'] = offset;
                offset = foxtrot[verify];
                offset = romeo.bind(entity)(offset);
                yankee = offset.intl;
                offset = yankee.string;
                verify = foxtrot[verify];
                verify = romeo.bind(entity)(verify);
                verify = verify.t;
                verify = verify.Nu5Yi4;
                verify = offset.bind(yankee)(verify);
                oscar['children'] = verify;
                oscar = options.bind(entity)(golf, oscar);
                report[1] = oscar;
                mike['children'] = report;
                entity = tango.bind(entity)(zulu, mike);
                return entity;
            };
            entity = null;
            if(!(entity != yankee)) { _fun95485_ip = 421; continue _fun95485 }
 177:
            zulu = yankee.length;
            entity = 0;
            if(!(entity !== zulu)) { _fun95485_ip = 262; continue _fun95485 }
 188:
            tango = _closure1_slot12;
            zulu = _closure1_slot7;
            entity = {};
            verify = oscar.container;
            entity['contentContainerStyle'] = verify;
            verify = options.bind(report)();
            entity['ListHeaderComponent'] = verify;
            offset = yankee.sort;
            verify = function(argFoo, argBar) {
                entity = global;
                zulu = entity.Number;
                mike = argBar;
                mike = mike.id;
                tango = undefined;
                mike = zulu.bind(tango)(mike);
                zulu = entity.Number;
                entity = argFoo;
                entity = entity.id;
                entity = zulu.bind(tango)(entity);
                entity = mike - entity;
                return entity;
            };
            verify = offset.bind(yankee)(verify);
            entity['data'] = verify;
            golf = function(argFoo) { // Original name: renderItem
                entity = argFoo;
                entity = entity.item;
                var _closure3_slot0 = entity;
                options = entity.application;
                oscar = entity.scopes;
                report = entity.disclosures;
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 34;
                mike = tango[mike];
                tango = undefined;
                verify = zulu.bind(tango)(mike);
                zulu = verify.getApplicationIconSource;
                mike = {};
                offset = options.id;
                mike['id'] = offset;
                offset = options.icon;
                mike['icon'] = offset;
                verify = zulu.bind(verify)(mike);
                zulu = _closure1_slot12;
                mike = _closure1_slot17;
                entity = {};
                entity['imageUrl'] = verify;
                entity['application'] = options;
                golf = function() { // Original name: onDelete
                    _fun95492: for(var _fun95492_ip = 0; ; ) switch(_fun95492_ip) {
 0:
                        entity = _closure3_slot0;
                        options = entity.id;
                        report = entity.application;
                        zulu = _closure1_slot1;
                        tango = _closure1_slot2;
                        entity = 31;
                        oscar = tango[entity];
                        entity = undefined;
                        golf = zulu.bind(entity)(oscar);
                        oscar = golf.delete;
                        oscar = oscar.bind(golf)(options);
                        golf = _closure1_slot0;
                        oscar = 32;
                        oscar = tango[oscar];
                        oscar = golf.bind(entity)(oscar);
                        options = oscar.ComponentDispatch;
                        golf = options.safeDispatch;
                        mike = _closure1_slot10;
                        oscar = mike.HIDE_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION;
                        mike = {};
                        verify = report.id;
                        mike['applicationId'] = verify;
                        mike = golf.bind(options)(oscar, mike);
                        golf = _closure2_slot1;
                        oscar = golf.get;
                        mike = report.id;
                        golf = oscar.bind(golf)(mike);
                        mike = 33;
                        mike = tango[mike];
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.leaveActivity;
                        mike = {};
                        oscar = null;
                        options = oscar == golf;
                        oscar = undefined;
                        if(options) { _fun95492_ip = 165; continue _fun95492 }
 160:
                        oscar = golf.location;
 165:
                        mike['location'] = oscar;
                        report = report.id;
                        mike['applicationId'] = report;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    }
                };
                entity['onDelete'] = golf;
                entity['scopes'] = oscar;
                entity['disclosures'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            entity['renderItem'] = golf;
            entity = tango.bind(report)(zulu, entity);
            _fun95485_ip = 419; continue _fun95485;
 262:
            golf = _closure1_slot13;
            tango = _closure1_slot4;
            zulu = {};
            verify = oscar.container;
            zulu['style'] = verify;
            verify = options.bind(report)();
            options = new Array(2);
            options[0] = verify;
            yankee = _closure1_slot12;
            kilo = _closure1_slot0;
            sizing = _closure1_slot2;
            verify = 22;
            verify = sizing[verify];
            verify = kilo.bind(report)(verify);
            offset = verify.Text;
            verify = {'color': 'header-primary', 'style': null, 'variant': 'heading-md/extrabold'};
            romeo = oscar.emptyText;
            verify['style'] = romeo;
            romeo = 16;
            foxtrot = sizing[romeo];
            foxtrot = kilo.bind(report)(foxtrot);
            backup = foxtrot.intl;
            foxtrot = backup.string;
            romeo = sizing[romeo];
            romeo = kilo.bind(report)(romeo);
            romeo = romeo.t;
            romeo = romeo.E+SM6e;
            romeo = foxtrot.bind(backup)(romeo);
            verify['children'] = romeo;
            verify = yankee.bind(report)(offset, verify);
            options[1] = verify;
            zulu['children'] = options;
            entity = golf.bind(report)(tango, zulu);
 419:
            _fun95485_ip = 461; continue _fun95485;
 421:
            tango = _closure1_slot12;
            zulu = _closure1_slot6;
            mike = {'style': null, 'animating': true, 'size': 'large'};
            oscar = oscar.spinner;
            mike['style'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 461:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();