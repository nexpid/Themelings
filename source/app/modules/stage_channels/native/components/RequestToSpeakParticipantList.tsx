// app/modules/stage_channels/native/components/RequestToSpeakParticipantList.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    romeo = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: RequestToSpeakParticipant
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            echo = entity.participant;
            var _closure2_slot0 = echo;
            control = entity.channel;
            var _closure2_slot1 = control;
            source = entity.onGrantRequest;
            foxtrot = entity.onDenyRequest;
            entity = _closure1_slot6;
            tango = undefined;
            backup = entity.bind(tango)();
            kilo = _closure1_slot1;
            result = _closure1_slot2;
            entity = 6;
            entity = result[entity];
            entity = kilo.bind(tango)(entity);
            entity = entity.bind(tango)();
            entity = entity.analyticsLocations;
            var _closure2_slot2 = entity;
            zulu = _closure1_slot5;
            mike = _closure1_slot3;
            entity = {};
            report = backup.participantItemContainer;
            entity['style'] = report;
            golf = _closure1_slot5;
            sizing = _closure1_slot0;
            report = 7;
            report = result[report];
            report = sizing.bind(tango)(report);
            oscar = report.PressableOpacity;
            report = {};
            options = function() { // Original name: onPress
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 8;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = {};
                report = _closure2_slot0;
                report = report.user;
                report = report.id;
                mike['userId'] = report;
                report = _closure2_slot1;
                report = report.id;
                mike['channelId'] = report;
                report = true;
                mike['isVoiceContext'] = report;
                tango = _closure2_slot2;
                mike['sourceAnalyticsLocations'] = tango;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            report['onPress'] = options;
            options = echo.user;
            options = options.username;
            offset = new Array(2);
            offset[0] = options;
            vacuum = 9;
            options = result[vacuum];
            verify = sizing.bind(tango)(options);
            options = verify.participantMemberInfo;
            options = options.bind(verify)(echo);
            offset[1] = options;
            verify = offset.join;
            options = ', ';
            options = verify.bind(offset)(options);
            report['accessibilityLabel'] = options;
            options = 'button';
            report['accessibilityRole'] = options;
            options = backup.touchableContainer;
            report['style'] = options;
            offset = _closure1_slot4;
            verify = _closure1_slot3;
            options = {};
            romeo = backup.participantAvatarContainer;
            options['style'] = romeo;
            output = _closure1_slot4;
            update = 10;
            romeo = result[update];
            kilo = kilo.bind(tango)(romeo);
            romeo = {};
            sequence = echo.user;
            romeo['user'] = sequence;
            control = control.guild_id;
            romeo['guildId'] = control;
            update = result[update];
            update = sizing.bind(tango)(update);
            update = update.AvatarSizes;
            update = update.NORMAL;
            romeo['size'] = update;
            romeo = output.bind(tango)(kilo, romeo);
            options['children'] = romeo;
            verify = offset.bind(tango)(verify, options);
            options = new Array(2);
            options[0] = verify;
            romeo = _closure1_slot5;
            offset = _closure1_slot3;
            verify = {};
            kilo = backup.participantNameplateContainer;
            verify['style'] = kilo;
            output = _closure1_slot4;
            kilo = 11;
            kilo = result[kilo];
            kilo = sizing.bind(tango)(kilo);
            sizing = kilo.LegacyText;
            kilo = {};
            update = backup.participantNameplateText;
            result = new Array(2);
            result[0] = update;
            update = {};
            config = echo.member;
            sequence = null;
            record = sequence == config;
            control = undefined;
            if(record) { _fun00002_ip = 413; continue _fun00001 }
 407:
            control = config.colorString;
 413:
            if(!(sequence == control)) { _fun00002_ip = 428; continue _fun00001 }
 417:
            sequence = backup.participantNameplateText;
            control = sequence.color;
 428:
            update['color'] = control;
            result[1] = update;
            kilo['style'] = result;
            result = 1;
            kilo['numberOfLines'] = result;
            result = echo.user;
            result = result.username;
            kilo['children'] = result;
            sizing = output.bind(tango)(sizing, kilo);
            kilo = new Array(2);
            kilo[0] = sizing;
            control = _closure1_slot4;
            update = _closure1_slot0;
            sizing = _closure1_slot2;
            output = 12;
            output = sizing[output];
            output = update.bind(tango)(output);
            result = output.Text;
            output = {'variant': 'text-xs/medium', 'color': 'header-secondary'};
            vacuum = sizing[vacuum];
            sequence = update.bind(tango)(vacuum);
            vacuum = sequence.participantMemberInfo;
            vacuum = vacuum.bind(sequence)(echo);
            output['children'] = vacuum;
            output = control.bind(tango)(result, output);
            kilo[1] = output;
            verify['children'] = kilo;
            verify = romeo.bind(tango)(offset, verify);
            options[1] = verify;
            report['children'] = options;
            oscar = golf.bind(tango)(oscar, report);
            report = new Array(2);
            report[0] = oscar;
            options = _closure1_slot5;
            golf = _closure1_slot3;
            oscar = {};
            verify = backup.participantActionContainer;
            oscar['style'] = verify;
            result = _closure1_slot4;
            kilo = _closure1_slot1;
            offset = 13;
            verify = sizing[offset];
            romeo = kilo.bind(tango)(verify);
            verify = {};
            output = 14;
            control = sizing[output];
            control = update.bind(tango)(control);
            sequence = control.intl;
            vacuum = sequence.string;
            control = sizing[output];
            control = update.bind(tango)(control);
            control = control.t;
            control = control.f0T7hI;
            control = vacuum.bind(sequence)(control);
            verify['accessibilityLabel'] = control;
            control = backup.participantActionIcon;
            verify['containerStyle'] = control;
            control = 15;
            control = sizing[control];
            control = kilo.bind(tango)(control);
            verify['source'] = control;
            verify['onPress'] = source;
            source = echo.rtsState;
            echo = 16;
            echo = sizing[echo];
            echo = update.bind(tango)(echo);
            echo = echo.RequestToSpeakStates;
            echo = echo.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            echo = source === echo;
            verify['disabled'] = echo;
            romeo = result.bind(tango)(romeo, verify);
            verify = new Array(2);
            verify[0] = romeo;
            romeo = _closure1_slot4;
            offset = sizing[offset];
            yankee = kilo.bind(tango)(offset);
            offset = {};
            result = sizing[output];
            result = update.bind(tango)(result);
            echo = result.intl;
            result = echo.string;
            output = sizing[output];
            output = update.bind(tango)(output);
            output = output.t;
            output = output.moABMz;
            output = result.bind(echo)(output);
            offset['accessibilityLabel'] = output;
            backup = backup.participantActionIcon;
            offset['containerStyle'] = backup;
            backup = 17;
            backup = sizing[backup];
            backup = kilo.bind(tango)(backup);
            offset['source'] = backup;
            offset['onPress'] = foxtrot;
            offset = romeo.bind(tango)(yankee, offset);
            verify[1] = offset;
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot7 = entity;
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
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    yankee = tango.Fonts;
    tango = 3;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot4 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot5 = tango;
    foxtrot = 4;
    tango = oscar[foxtrot];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'paddingVertical': 4, 'flexDirection': 'column', 'minHeight': 288, 'flex': 1};
    tango['container'] = verify;
    verify = {'paddingVertical': 4, 'flexDirection': 'column', 'flex': 1};
    tango['listContainer'] = verify;
    offset = 'center';
    verify = {'padding': 12, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between'};
    tango['participantItemContainer'] = verify;
    verify = {'flex': 1, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between'};
    tango['touchableContainer'] = verify;
    verify = {};
    verify['paddingLeft'] = foxtrot;
    tango['participantAvatarContainer'] = verify;
    verify = {'paddingHorizontal': 16, 'flex': 1};
    tango['participantNameplateContainer'] = verify;
    verify = {'fontSize': 16, 'fontFamily': null, 'marginTop': 0, 'marginBottom': 0};
    yankee = yankee.PRIMARY_SEMIBOLD;
    verify['fontFamily'] = yankee;
    yankee = 5;
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.HEADER_PRIMARY;
    verify['color'] = foxtrot;
    tango['participantNameplateText'] = verify;
    verify = {'flexDirection': 'row', 'paddingRight': 4};
    tango['participantActionContainer'] = verify;
    verify = {};
    yankee = oscar[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BACKGROUND_PRIMARY;
    verify['backgroundColor'] = yankee;
    tango['participantActionIcon'] = verify;
    verify = {'flex': 1, 'alignItems': 'center', 'justifyContent': 'center'};
    tango['emptyContainer'] = verify;
    verify = {'flex': 1, 'height': 64};
    tango['emptyParticipant'] = verify;
    verify = {'textAlign': 'center', 'marginTop': 16, 'marginBottom': 8};
    tango['emptyTitle'] = verify;
    verify = {};
    verify['textAlign'] = offset;
    tango['emptyBody'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot6 = tango;
    tango = 23;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/stage_channels/native/components/RequestToSpeakParticipantList.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: RequestToSpeakParticipantList
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            mike = argFoo;
            entity = mike.channel;
            var _closure2_slot0 = entity;
            verify = mike.height;
            mike = _closure1_slot6;
            report = undefined;
            backup = mike.bind(report)();
            var _closure2_slot1 = backup;
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 18;
            mike = tango[mike];
            zulu = zulu.bind(report)(mike);
            mike = zulu.useSortedRequestToSpeakParticipants;
            entity = entity.id;
            tango = mike.bind(zulu)(entity);
            var _closure2_slot2 = tango;
            mike = tango.length;
            entity = 0;
            if(!(entity !== mike)) { _fun00004_ip = 211; continue _fun00003 }
 90:
            zulu = _closure1_slot4;
            mike = _closure1_slot1;
            golf = _closure1_slot2;
            entity = 22;
            entity = golf[entity];
            mike = mike.bind(report)(entity);
            entity = {};
            options = backup.listContainer;
            golf = new Array(2);
            golf[0] = options;
            options = {};
            options['height'] = verify;
            golf[1] = options;
            entity['style'] = golf;
            golf = 64;
            entity['itemSize'] = golf;
            oscar = function(argFoo, argBar) { // Original name: renderItem
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tango = _closure2_slot2;
                    entity = argBar;
                    entity = tango[entity];
                    var _closure3_slot0 = entity;
                    tango = null;
                    if(!(tango != entity)) { _fun00006_ip = 97; continue _fun00005 }
 26:
                    oscar = _closure1_slot4;
                    report = _closure1_slot7;
                    tango = {};
                    tango['participant'] = entity;
                    golf = _closure2_slot0;
                    tango['channel'] = golf;
                    golf = function() { // Original name: onGrantRequest
                        mike = _closure3_slot0;
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        entity = 19;
                        zulu = zulu[entity];
                        entity = undefined;
                        oscar = tango.bind(entity)(zulu);
                        report = oscar.setUserSuppress;
                        tango = _closure2_slot0;
                        mike = mike.user;
                        zulu = mike.id;
                        mike = false;
                        mike = report.bind(oscar)(tango, zulu, mike);
                        return entity;
                    };
                    tango['onGrantRequest'] = golf;
                    zulu = function() { // Original name: onDenyRequest
                        mike = _closure3_slot0;
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        entity = 19;
                        zulu = zulu[entity];
                        entity = undefined;
                        oscar = tango.bind(entity)(zulu);
                        report = oscar.setUserSuppress;
                        tango = _closure2_slot0;
                        mike = mike.user;
                        zulu = mike.id;
                        mike = true;
                        mike = report.bind(oscar)(tango, zulu, mike);
                        return entity;
                    };
                    tango['onDenyRequest'] = zulu;
                    entity = entity.user;
                    zulu = entity.id;
                    entity = undefined;
                    entity = oscar.bind(entity)(report, tango, zulu);
                    _fun00006_ip = 132; continue _fun00005;
 97:
                    report = _closure1_slot4;
                    tango = _closure1_slot3;
                    zulu = {};
                    mike = _closure2_slot1;
                    mike = mike.emptyParticipant;
                    zulu['style'] = mike;
                    mike = undefined;
                    entity = report.bind(mike)(tango, zulu);
 132:
                    return entity;
                }
            };
            entity['renderItem'] = oscar;
            oscar = 'always';
            entity['keyboardShouldPersistTaps'] = oscar;
            oscar = tango.length;
            tango = 1;
            oscar = oscar + tango;
            tango = new Array(1);
            tango[0] = oscar;
            entity['sections'] = tango;
            entity = zulu.bind(report)(mike, entity);
            _fun00004_ip = 544; continue _fun00003;
 211:
            tango = _closure1_slot4;
            zulu = _closure1_slot3;
            mike = {};
            oscar = backup.container;
            mike['style'] = oscar;
            options = _closure1_slot5;
            golf = _closure1_slot3;
            oscar = {};
            verify = backup.emptyContainer;
            oscar['style'] = verify;
            romeo = _closure1_slot4;
            kilo = _closure1_slot1;
            output = _closure1_slot2;
            verify = 20;
            verify = output[verify];
            offset = kilo.bind(report)(verify);
            verify = {};
            foxtrot = 21;
            foxtrot = output[foxtrot];
            foxtrot = kilo.bind(report)(foxtrot);
            verify['source'] = foxtrot;
            offset = romeo.bind(report)(offset, verify);
            verify = new Array(3);
            verify[0] = offset;
            result = _closure1_slot4;
            sizing = _closure1_slot0;
            offset = 12;
            romeo = output[offset];
            romeo = sizing.bind(report)(romeo);
            kilo = romeo.Text;
            romeo = {'style': null, 'accessibilityRole': 'header', 'variant': 'heading-lg/extrabold', 'color': 'header-primary'};
            foxtrot = backup.emptyTitle;
            romeo['style'] = foxtrot;
            foxtrot = 14;
            echo = output[foxtrot];
            echo = sizing.bind(report)(echo);
            source = echo.intl;
            update = source.string;
            echo = output[foxtrot];
            echo = sizing.bind(report)(echo);
            echo = echo.t;
            echo = echo.7R24mZ;
            echo = update.bind(source)(echo);
            romeo['children'] = echo;
            romeo = result.bind(report)(kilo, romeo);
            verify[1] = romeo;
            romeo = _closure1_slot4;
            offset = output[offset];
            offset = sizing.bind(report)(offset);
            yankee = offset.Text;
            offset = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            backup = backup.emptyBody;
            offset['style'] = backup;
            backup = output[foxtrot];
            backup = sizing.bind(report)(backup);
            kilo = backup.intl;
            backup = kilo.string;
            foxtrot = output[foxtrot];
            foxtrot = sizing.bind(report)(foxtrot);
            foxtrot = foxtrot.t;
            foxtrot = foxtrot.Rpr2s7;
            foxtrot = backup.bind(kilo)(foxtrot);
            offset['children'] = foxtrot;
            offset = romeo.bind(report)(yankee, offset);
            verify[2] = offset;
            oscar['children'] = verify;
            oscar = options.bind(report)(golf, oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 544:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();